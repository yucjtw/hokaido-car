<script lang="ts">
  import { dateWithWeekday, shortDate, tripDay } from '../paypay/campaigns'
  import { num, pct, reward, yenFor } from '../paypay/format'
  import type { CardStatus, Entry } from './ledger'
  import { save, store } from './store.svelte'

  let {
    status,
    rank,
    rewards,
    nextYen,
  }: {
    status: CardStatus
    rank: number
    rewards: Map<string, number>
    nextYen: number | null
  } = $props()

  const card = $derived(status.card)
  const rate = $derived(store.settings.rate)
  const entries = $derived(
    store.entries
      .filter((e) => e.cardId === card.id)
      .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt),
  )

  let date = $state(tripDay())
  let yen = $state<number | null>(null)
  // The amount typed at the top fills every card, so logging it is one tap on the chosen card.
  $effect(() => {
    yen = nextYen
  })
  let note = $state('')
  let confirming = $state<string | null>(null)

  function add(event: SubmitEvent) {
    event.preventDefault()
    if (!yen || yen <= 0 || !date) return
    const entry: Entry = {
      id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      cardId: card.id,
      date,
      yen: Math.round(yen),
      note: note.trim(),
      createdAt: Date.now(),
    }
    store.entries.push(entry)
    save()
    yen = null
    note = ''
  }

  function remove(id: string) {
    if (confirming !== id) {
      confirming = id
      return
    }
    store.entries = store.entries.filter((e) => e.id !== id)
    confirming = null
    save()
  }
</script>

<!-- With an amount typed at the top, the header shows what that payment really earns. -->
<article class:spent={(status.preview?.rate ?? status.rate) === card.base}>
  <header>
    <span class="rank">{rank}</span>
    <div class="title">
      <h2><a href={card.link} target="_blank" rel="noreferrer">{card.name}</a></h2>
      <p>{card.unit}・基本 {pct(card.base)} 無上限</p>
    </div>
    <div class="rate">
      {#if status.preview}<small>這筆實拿</small>{/if}
      <strong>{pct(status.preview ? status.preview.rate : status.rate)}</strong>
    </div>
  </header>

  {#if status.preview}
    <p class="preview">
      這筆約 NT${num(status.preview.ntd)}：回饋 <b>{reward(status.preview.reward, card.unit)}</b>
    </p>
  {/if}

  {#if status.hold && status.hold.ntd > 0}
    <p class="hold">
      再刷 <b>{yenFor(status.hold.ntd, rate)}</b>（NT${num(status.hold.ntd)}）內維持 {pct(status.rate)}，之後降到 {pct(
        status.hold.afterRate,
      )}
      <small>受限於 {status.hold.by}</small>
    </p>
  {/if}

  <ul class="campaigns">
    {#each status.bonuses as b (b.bonus.name)}
      <li class:off={!b.on || b.remaining === 0}>
        <div class="c-head">
          <span class="c-name">{b.bonus.name}</span>
          {#if !b.on}
            <span class="chip off">{card.requires?.kind === 'monthly' ? '本月未勾' : '未登錄'}</span>
          {:else if b.remaining === 0}
            <span class="chip off">本期已拿滿</span>
          {:else}
            <span class="chip ok">可用</span>
          {/if}
        </div>
        {#if !b.on && card.requires}
          <p>{card.requires.how}；做到後到「設定」勾選才會計入</p>
        {/if}
        <p>
          {b.periodText}：已拿 {reward(b.used, card.unit)} / {reward(b.bonus.cap, card.unit)}
          {#if b.on && b.remaining > 0}，還可刷 <b>{yenFor(b.spendLeft, rate)}</b>{/if}
          {#if b.reset}<small>（{dateWithWeekday(b.reset)}重置）</small>{/if}
        </p>
      </li>
    {/each}
  </ul>

  <p class="scope">{card.scope}</p>
  {#if card.wallet}<p class="wallet">{card.wallet}</p>{/if}
  <ul class="notes">
    {#each card.conditions as c (c)}<li>{c}</li>{/each}
  </ul>

  <form onsubmit={add}>
    <input type="date" bind:value={date} aria-label="台灣日期" title="台灣日期（日本 0 點到 1 點仍算前一天）" required />
    <input
      type="number"
      inputmode="numeric"
      min="1"
      step="1"
      placeholder="日幣金額"
      bind:value={yen}
      aria-label="日幣金額"
      required
    />
    <input type="text" placeholder="備註（選填）" bind:value={note} aria-label="備註" />
    <button type="submit">記一筆</button>
  </form>

  {#if entries.length}
    <details>
      <summary>已刷 ¥{num(status.spentYen)}・{entries.length} 筆・預估 {reward(status.earned, card.unit)}</summary>
      <ul class="entries">
        {#each entries as e (e.id)}
          <li>
            <span class="e-date">{shortDate(e.date)}</span>
            <span class="e-yen">¥{num(e.yen)}</span>
            <span class="e-note">{e.note}</span>
            <span class="e-reward">+{reward(rewards.get(e.id) ?? 0, card.unit)}</span>
            <button type="button" class:danger={confirming === e.id} onclick={() => remove(e.id)}>
              {confirming === e.id ? '確定刪除' : '刪除'}
            </button>
          </li>
        {/each}
      </ul>
    </details>
  {/if}
</article>

<style>
  article {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 14px 16px;
    display: grid;
    gap: 10px;
  }
  p {
    margin: 0;
  }
  header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rank {
    flex: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--accent);
    color: var(--card);
    font-weight: 700;
  }
  .spent .rank {
    background: var(--muted);
  }
  .title {
    flex: 1;
    min-width: 0;
  }
  h2 {
    margin: 0;
    font-size: 1.0625rem;
  }
  h2 a {
    color: inherit;
    text-decoration: none;
  }
  .title p {
    color: var(--muted);
    font-size: 0.875rem;
  }
  .rate {
    text-align: right;
  }
  .rate strong {
    display: block;
    font-family: var(--mono);
    font-size: 1.75rem;
    line-height: 1.1;
    color: var(--accent);
    font-variant-numeric: tabular-nums;
  }
  .spent .rate strong {
    color: var(--muted);
  }
  .rate small {
    display: block;
    color: var(--muted);
    font-size: 0.75rem;
  }
  .preview {
    padding: 8px 10px;
    border-radius: 8px;
    background: var(--bg);
    font-size: 0.9375rem;
  }
  .hold {
    font-size: 0.9375rem;
  }
  .hold small {
    display: block;
    color: var(--muted);
    font-size: 0.8125rem;
  }
  b {
    font-family: var(--mono);
    font-variant-numeric: tabular-nums;
  }
  .campaigns {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;
  }
  .campaigns li {
    padding-left: 10px;
    border-left: 3px solid var(--ok);
    font-size: 0.875rem;
  }
  .campaigns li.off {
    border-left-color: var(--line);
    color: var(--muted);
  }
  .c-head {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .c-name {
    font-weight: 600;
  }
  .chip {
    font-size: 0.75rem;
    padding: 0 6px;
    border-radius: 999px;
    border: 1px solid currentColor;
  }
  .chip.ok {
    color: var(--ok);
  }
  .chip.off {
    color: var(--off);
  }
  .campaigns small {
    color: var(--muted);
  }
  .scope {
    font-size: 0.875rem;
  }
  .wallet {
    font-size: 0.8125rem;
  }
  .notes {
    margin: 0;
    padding-left: 18px;
    color: var(--muted);
    font-size: 0.8125rem;
  }
  form {
    display: grid;
    grid-template-columns: 9.5rem 1fr;
    gap: 6px;
  }
  input,
  form button {
    font: inherit;
    font-size: 1rem;
    min-width: 0;
    padding: 8px 10px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--bg);
    color: var(--text);
  }
  input[type='text'] {
    grid-column: 1 / 2;
  }
  form button {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--card);
    font-weight: 700;
    cursor: pointer;
  }
  details summary {
    cursor: pointer;
    color: var(--muted);
    font-size: 0.875rem;
  }
  .entries {
    list-style: none;
    margin: 6px 0 0;
    padding: 0;
  }
  .entries li {
    display: grid;
    grid-template-columns: 3rem 5rem 1fr auto;
    grid-template-areas: 'date yen note del' '. reward reward del';
    align-items: center;
    gap: 0 8px;
    padding: 6px 0;
    border-top: 1px solid var(--line);
    font-size: 0.875rem;
  }
  .e-date {
    grid-area: date;
    color: var(--muted);
  }
  .e-yen {
    grid-area: yen;
    font-family: var(--mono);
    font-variant-numeric: tabular-nums;
  }
  .e-note {
    grid-area: note;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .e-reward {
    grid-area: reward;
    color: var(--ok);
    font-size: 0.8125rem;
  }
  .entries button {
    grid-area: del;
    font: inherit;
    font-size: 0.8125rem;
    padding: 4px 8px;
    border: 1px solid var(--line);
    border-radius: 6px;
    background: none;
    color: var(--muted);
    cursor: pointer;
  }
  .entries button.danger {
    border-color: var(--off);
    color: var(--off);
  }
</style>
