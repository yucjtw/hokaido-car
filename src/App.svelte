<script lang="ts">
  import { days } from './data/days'
  import { pickInitialDay } from './lib/pickDay'
  import SpotCard from './lib/SpotCard.svelte'

  let current = $state(pickInitialDay(days, location.hash))

  function select(date: string) {
    current = days.find((day) => day.date === date) ?? current
    history.replaceState(null, '', `#${date}`)
    window.scrollTo({ top: 0 })
  }
</script>

<header>
  <nav aria-label="日期">
    {#each days as day (day.date)}
      <button
        type="button"
        class:active={day.date === current.date}
        aria-current={day.date === current.date ? 'page' : undefined}
        onclick={() => select(day.date)}
      >
        {day.label}<small>（{day.weekday}）</small>
      </button>
    {/each}
  </nav>
</header>

<main>
  <p class="route">{current.route}</p>

  {#each current.sections as section (section.title)}
    <section>
      <h2>
        {section.title}
        {#if section.note}<small>{section.note}</small>{/if}
      </h2>
      <ul>
        {#each section.spots as spot (spot.name)}
          <SpotCard {spot} />
        {/each}
      </ul>
    </section>
  {:else}
    <p class="empty">尚未整理</p>
  {/each}
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
    grid-template-columns: repeat(4, 1fr);
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
  nav button small {
    font-size: 0.75em;
    font-weight: 400;
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
  .route {
    margin: 0 0 12px;
    color: var(--muted);
    font-size: 0.875rem;
  }
  section {
    margin-bottom: 20px;
  }
  h2 {
    margin: 0 0 6px;
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--accent);
  }
  h2 small {
    margin-left: 8px;
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--muted);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 12px;
  }
  .empty {
    color: var(--muted);
    text-align: center;
    padding: 48px 0;
  }
</style>
