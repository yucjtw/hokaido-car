<script lang="ts">
  import { campaigns, dateWithWeekday, nextReset, shortDate, tripDay } from './campaigns'
  import { num, pct, reward, yenAtLeast, yenFor } from './format'
  import type { Entry, PlanStatus } from './ledger'
  import { save, store } from './store.svelte'

  let {
    status,
    rank,
    rewards,
    nextYen,
    day,
  }: {
    status: PlanStatus
    rank: number
    rewards: Map<string, Record<string, number>>
    nextYen: number | null
    /** Today in Taiwan time, clamped to the trip. */
    day: string
  } = $props()

  // Periods follow Taiwan time, so a new period starts at 01:00 in Japan.
  function resetText(d: string): string {
    return `${dateWithWeekday(d)} 日本時間 01:00 重置`
  }

  const rate = $derived(store.settings.rate)
  const entries = $derived(
    store.entries
      .filter((e) => e.planId === status.plan.id)
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
      planId: status.plan.id,
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

  function entryReward(e: Entry): string {
    const byCampaign = rewards.get(e.id) ?? {}
    const parts: Record<string, number> = {}
    for (const [cid, r] of Object.entries(byCampaign)) {
      const c = campaigns[cid]
      if (c.fee) continue
      parts[c.unit] = (parts[c.unit] ?? 0) + r
    }
    return Object.entries(parts)
      .map(([unit, r]) => `+${reward(r, unit)}`)
      .join('、')
  }
</script>

<!-- With an amount typed at the top, the header shows what that payment really earns. -->
<article class:spent={status.preview ? status.preview.reward === 0 : status.rate === status.feeRate && !status.large.length}>
  <header>
    <span class="rank">{rank}</span>
    <div class="title">
      <h2>{status.plan.wallet}</h2>
      <p>{status.plan.source}</p>
    </div>
    <div class="rate">
      {#if status.preview}
        <small>這筆實拿</small>
        <strong>{pct(status.preview.rate)}</strong>
        {#if status.preview.fee}<small>含免手續費 {pct((status.preview.fee / status.preview.ntd) * 100)}</small>{/if}
      {:else}
        <strong>{pct(status.rate)}</strong>
        {#if status.feeRate}<small>含免手續費 {pct(status.feeRate)}</small>{/if}
        {#each status.large as l (l.min)}<small>單筆滿 {yenAtLeast(l.min, rate)} {pct(l.rate)}</small>{/each}
      {/if}
    </div>
  </header>

  {#if status.preview}
    <p class="preview">
      這筆約 NT${num(status.preview.ntd)}：回饋 <b>{reward(status.preview.reward, status.preview.unit)}</b>
      {#if status.preview.fee}＋省手續費 <b>NT${num(status.preview.fee)}</b>{/if}
      {#each status.preview.notes as n (n)}<span class="warn">・{n}</span>{/each}
    </p>
  {/if}

  {#if status.hold}
    <p class="hold">
      {#if status.hold.ntd > 0}
        再刷 <b>{yenFor(status.hold.ntd, rate)}</b>（NT${num(status.hold.ntd)}）內維持 {pct(status.rate)}，之後降到 {pct(
          status.hold.afterRate,
        )}
        <small>受限於 {status.hold.by}</small>
      {/if}
    </p>
  {/if}

  <ul class="campaigns">
    {#each status.campaigns as st (st.campaign.id)}
      {@const c = st.campaign}
      {@const fullReset = st.full && c.fullPeriod ? nextReset(c.fullPeriod, day) : null}
      <li class:off={!!st.inactive || st.full || st.remaining === 0}>
        <div class="c-head">
          <span class="c-name">{c.name}</span>
          {#if st.inactive}
            <span class="chip off">{st.inactive}</span>
          {:else if st.full}
            <span class="chip off">額滿</span>
          {:else if st.remaining === 0}
            <span class="chip off">本期已拿滿</span>
          {:else}
            <span class="chip ok">可用</span>
          {/if}
        </div>
        <p class="dates">活動 {shortDate(c.start)}–{shortDate(c.end)}（台灣時間）</p>
        {#if st.inactive === '本月未登錄'}
          <p>到「設定」勾選本月已登錄才會計入</p>
        {/if}
        {#if fullReset}
          <p>總預算 {resetText(fullReset)}，屆時到「設定」取消勾選</p>
        {/if}
        {#if c.cap !== undefined}
          <p>
            {st.periodText}：已拿 {reward(st.used, c.unit)} / {reward(c.cap, c.unit)}
            {#if !st.full && st.remaining > 0}
              ，還可刷 <b>{yenFor(st.spendLeft, rate)}</b>
            {/if}
            {#if st.reset}<small>（個人上限 {resetText(st.reset)}）</small>{/if}
          </p>
        {/if}
        {#if st.perTxnSpend !== null}
          <p>單筆 ≤ <b>{yenFor(st.perTxnSpend, rate)}</b>（NT${num(st.perTxnSpend)}）才拿滿 {pct(st.rate)}</p>
        {/if}
        {#if c.minTxn}
          <p>單筆需 ≥ <b>{yenAtLeast(c.minTxn, rate)}</b>（NT${num(c.minTxn)}）</p>
        {/if}
        {#if c.cap === undefined}
          <p>{c.budget}</p>
        {/if}
      </li>
    {/each}
  </ul>

  <p class="tip">{status.plan.tip}</p>

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
      <summary>
        已刷 ¥{num(status.spentYen)}・{entries.length} 筆
        {#each Object.entries(status.earned) as [unit, r] (unit)}・預估 {reward(r, unit)}{/each}
      </summary>
      <ul class="entries">
        {#each entries as e (e.id)}
          <li>
            <span class="e-date">{shortDate(e.date)}</span>
            <span class="e-yen">¥{num(e.yen)}</span>
            <span class="e-note">{e.note}</span>
            <span class="e-reward">{entryReward(e)}</span>
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
    font-size: 1.125rem;
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
  .warn {
    display: block;
    color: var(--warn);
    font-size: 0.8125rem;
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
  .dates {
    color: var(--muted);
    font-size: 0.75rem;
  }
  .campaigns small {
    color: var(--muted);
  }
  .tip {
    color: var(--note);
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
