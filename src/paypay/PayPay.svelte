<script lang="ts">
  import { TRIP_END, TRIP_START, dateWithWeekday, plans, shortDate, tripDay } from './campaigns'
  import { planStatus, rank, replay } from './ledger'
  import PlanCard from './PlanCard.svelte'
  import Settings from './Settings.svelte'
  import { saveError, store } from './store.svelte'

  let tab = $state<'plans' | 'settings'>(location.hash === '#settings' ? 'settings' : 'plans')
  let nextYen = $state<number | null>(null)
  // Re-read the date every minute, so a page left open rolls over to the next period.
  let day = $state(tripDay())
  $effect(() => {
    const timer = setInterval(() => (day = tripDay()), 60_000)
    return () => clearInterval(timer)
  })

  const ledger = $derived(replay(store.entries, store.settings))
  const ranked = $derived(
    rank(
      plans.map((p, i) => planStatus(p, i, store.settings, ledger, store.entries, day, nextYen ?? 0)),
    ),
  )
  const visible = $derived(ranked.filter((s) => !s.hidden))
  const hidden = $derived(ranked.filter((s) => s.hidden))

  function select(next: 'plans' | 'settings') {
    tab = next
    history.replaceState(null, '', next === 'settings' ? '#settings' : location.pathname)
    window.scrollTo({ top: 0 })
  }
</script>

<header>
  <nav aria-label="頁面">
    <button type="button" class:active={tab === 'plans'} onclick={() => select('plans')}>PayPay 回饋</button>
    <button type="button" class:active={tab === 'settings'} onclick={() => select('settings')}>設定</button>
  </nav>
</header>

<main>
  {#if saveError.message}<p class="error">{saveError.message}</p>{/if}

  {#if tab === 'plans'}
    <label class="next">
      <span>下一筆</span>
      <input type="number" inputmode="numeric" min="1" placeholder="輸入日幣金額看該用哪個" bind:value={nextYen} />
    </label>
    <p class="meta">
      以台灣時間 {dateWithWeekday(day)} 的期別計算（行程 {shortDate(TRIP_START)}–{shortDate(TRIP_END)}；日本 0 點到 1
      點仍算前一天）・1 日圓 = NT${store.settings.rate}
    </p>

    <div class="list">
      {#each visible as status, i (status.plan.id)}
        <PlanCard {status} rank={i + 1} rewards={ledger.rewards} {nextYen} {day} />
      {/each}
    </div>

    {#if hidden.length}
      <p class="meta">
        已額滿而隱藏：{hidden.map((s) => `${s.plan.wallet}＋${s.plan.source}`).join('、')}（到「設定」取消勾選即可顯示）
      </p>
    {/if}
  {:else}
    <Settings />
  {/if}
</main>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    padding-top: env(safe-area-inset-top);
  }
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 640px;
    margin: 0 auto;
  }
  nav button {
    padding: 12px 0 10px;
    border: none;
    border-bottom: 3px solid transparent;
    background: none;
    color: var(--muted);
    font: inherit;
    font-size: 1.0625rem;
    font-weight: 600;
    cursor: pointer;
  }
  nav button.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }
  main {
    max-width: 640px;
    margin: 0 auto;
    padding: 12px 16px calc(32px + env(safe-area-inset-bottom));
  }
  .next {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
  }
  .next input {
    flex: 1;
    min-width: 0;
    font: inherit;
    font-size: 1.125rem;
    padding: 10px 12px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--card);
    color: var(--text);
    font-family: var(--mono);
  }
  .meta {
    margin: 6px 0 12px;
    color: var(--muted);
    font-size: 0.8125rem;
  }
  .list {
    display: grid;
    gap: 12px;
  }
  .error {
    margin: 0 0 12px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid var(--off);
    color: var(--off);
  }
</style>
