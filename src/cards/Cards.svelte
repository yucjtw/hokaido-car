<script lang="ts">
  import { TRIP_END, TRIP_START, dateWithWeekday, shortDate, tripDay } from '../paypay/campaigns'
  import CardItem from './CardItem.svelte'
  import { cards, counterHotels } from './cards'
  import { cardStatus, rank, replay } from './ledger'
  import Settings from './Settings.svelte'
  import { saveError, store } from './store.svelte'

  let tab = $state<'cards' | 'settings'>(location.hash === '#settings' ? 'settings' : 'cards')
  let nextYen = $state<number | null>(null)
  // Re-read the date every minute, so a page left open rolls over to the next month.
  let day = $state(tripDay())
  $effect(() => {
    const timer = setInterval(() => (day = tripDay()), 60_000)
    return () => clearInterval(timer)
  })

  const ledger = $derived(replay(store.entries, store.settings))
  const ranked = $derived(
    rank(
      cards.flatMap((c, i) =>
        store.settings.hidden[c.id] ? [] : [cardStatus(c, i, store.settings, ledger, store.entries, day, nextYen ?? 0)],
      ),
    ),
  )

  function select(next: 'cards' | 'settings') {
    tab = next
    history.replaceState(null, '', next === 'settings' ? '#settings' : location.pathname)
    window.scrollTo({ top: 0 })
  }
</script>

<header>
  <nav aria-label="頁面">
    <button type="button" class:active={tab === 'cards'} onclick={() => select('cards')}>信用卡回饋</button>
    <button type="button" class:active={tab === 'settings'} onclick={() => select('settings')}>設定</button>
  </nav>
</header>

<main>
  {#if saveError.message}<p class="error">{saveError.message}</p>{/if}

  {#if tab === 'cards'}
    <label class="next">
      <span>下一筆</span>
      <input type="number" inputmode="numeric" min="1" placeholder="輸入日幣金額看該用哪張" bind:value={nextYen} />
    </label>
    <p class="meta">
      日本實體消費・以台灣時間 {dateWithWeekday(day)} 計算（行程 {shortDate(TRIP_START)}–{shortDate(TRIP_END)}）・1 日圓 =
      NT${store.settings.rate}
    </p>

    <div class="list">
      {#each ranked as status, i (status.card.id)}
        <CardItem {status} rank={i + 1} rewards={ledger.rewards} {nextYen} />
      {:else}
        <p class="meta">沒有要顯示的卡，到「設定」勾選自己有的卡。</p>
      {/each}
    </div>

    <p class="meta">
      飯店櫃台要在當地用日圓、當面刷卡或感應；付款連結、OTA、網路預付不一定算實體交易。可能在櫃台付款：{counterHotels
        .map((h) => `${h.name}（${h.dates}）`)
        .join('、')}。
    </p>
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
