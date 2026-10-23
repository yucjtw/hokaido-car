<script lang="ts">
  import { areas } from './data/index'
  import { renderBody } from './markdown'
  import PlaceCard from './PlaceCard.svelte'
  import { pickInitialArea } from './pickArea'
  import type { Category, Place } from './types'

  type View = 'subArea' | 'category'

  const categories: Category[] = ['正餐', '甜點與咖啡', '其它']
  const viewKey = 'hokaido-spots:view'

  let current = $state(pickInitialArea(areas, location.hash))
  let view = $state<View>(readView())

  // Both views list the same places; only the grouping and the small label under each name differ.
  const groups = $derived.by(() => {
    if (view === 'subArea') {
      return current.subAreas.map((sub) => ({
        title: sub.name,
        note: sub.note,
        images: [...(sub.image ? [sub.image] : []), ...(sub.images ?? [])],
        items: sub.places.map((place) => ({ place, label: place.category })),
      }))
    }
    return categories
      .map((category) => ({
        title: category,
        note: undefined,
        images: [],
        items: current.subAreas.flatMap((sub) =>
          sub.places.filter((place) => place.category === category).map((place) => ({ place, label: sub.name })),
        ),
      }))
      .filter((group) => group.items.length)
  })

  const hasMyMap = $derived(current.subAreas.some((sub) => sub.places.some((place) => place.myMap)))

  function readView(): View {
    try {
      return localStorage.getItem(viewKey) === 'category' ? 'category' : 'subArea'
    } catch {
      return 'subArea'
    }
  }

  function setView(next: View) {
    view = next
    try {
      localStorage.setItem(viewKey, next)
    } catch {
      // Storage blocked: the page opens in the default view next time, which is harmless.
    }
  }

  function select(id: string) {
    current = areas.find((area) => area.id === id) ?? current
    history.replaceState(null, '', `#${id}`)
    window.scrollTo({ top: 0 })
  }

  function key(place: Place, label: string) {
    return `${label}/${place.name}`
  }
</script>

<header>
  <nav aria-label="區域">
    {#each areas as area (area.id)}
      <button
        type="button"
        class:active={area.id === current.id}
        aria-current={area.id === current.id ? 'page' : undefined}
        onclick={() => select(area.id)}
      >
        {area.name}
      </button>
    {/each}
  </nav>
  <div class="views" role="group" aria-label="分組方式">
    <button type="button" class:active={view === 'subArea'} onclick={() => setView('subArea')}>依區域</button>
    <button type="button" class:active={view === 'category'} onclick={() => setView('category')}>依類別</button>
  </div>
</header>

<main>
  {#if current.note}<div class="area-note">{@html renderBody(current.note)}</div>{/if}
  {#if hasMyMap}<p class="legend">📌 表示存在我的 Google Maps 清單</p>{/if}

  {#each groups as group (group.title)}
    <section>
      <h2>
        {group.title}
        {#if group.note}<small>{group.note}</small>{/if}
      </h2>
      {#if group.images.length}
        <details class="image">
          <summary>區域地圖</summary>
          {#each group.images as image, index (image)}
            <a href={image} target="_blank" rel="noopener">
              <img src={image} alt={`${group.title}地圖 ${index + 1}`} loading="lazy" />
            </a>
          {/each}
        </details>
      {/if}
      <ul>
        {#each group.items as { place, label } (key(place, label))}
          <PlaceCard {place} {label} city={current.city} />
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
    display: flex;
    max-width: 640px;
    margin: 0 auto;
    overflow-x: auto;
    scrollbar-width: none;
  }
  nav button {
    flex: none;
    padding: 12px 12px 10px;
    border: none;
    border-bottom: 3px solid transparent;
    background: none;
    color: var(--muted);
    font: inherit;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
  }
  nav button.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }
  .views {
    display: flex;
    gap: 6px;
    max-width: 640px;
    margin: 0 auto;
    padding: 8px 16px;
  }
  .views button {
    padding: 4px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--card);
    color: var(--muted);
    font: inherit;
    font-size: 0.8125rem;
    cursor: pointer;
  }
  .views button.active {
    border-color: var(--text);
    background: var(--text);
    color: var(--bg);
  }
  main {
    max-width: 640px;
    margin: 0 auto;
    padding: 12px 16px calc(32px + env(safe-area-inset-bottom));
  }
  .area-note {
    margin: 0 0 12px;
    color: var(--muted);
    font-size: 0.875rem;
  }
  .area-note :global(p) {
    margin: 0;
  }
  .area-note :global(a) {
    color: var(--code);
  }
  .legend {
    margin: 0 0 12px;
    color: var(--muted);
    font-size: 0.8125rem;
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
  .image {
    margin-bottom: 8px;
    font-size: 0.8125rem;
    color: var(--muted);
  }
  .image summary {
    cursor: pointer;
  }
  .image img {
    display: block;
    width: 100%;
    margin-top: 6px;
    border: 1px solid var(--line);
    border-radius: 12px;
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
