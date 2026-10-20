<script lang="ts">
  import { renderBody } from './markdown'
  import type { Place } from './types'

  let { place, city, label }: { place: Place; city: string; label: string } = $props()

  let open = $state(false)

  const mapUrl = $derived(
    place.map ??
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query ?? `${place.name} ${city}`)}`,
  )
</script>

<li>
  <div class="head">
    <p class="name">
      <span lang="ja">{place.name}</span>
      {#if place.myMap}<span class="saved" role="img" aria-label="在我的 Google Maps 清單" title="在我的 Google Maps 清單">📌</span>{/if}
    </p>
    <a class="map" href={mapUrl} target="_blank" rel="noopener">地圖</a>
  </div>
  <p class="label">{label}</p>
  {#if place.body || place.myMap?.note}
    <!-- Only very long notes are cut, at ten lines, until tapped. -->
    <div class="body" class:open role="button" tabindex="0" onclick={(e) => {
      if (!(e.target instanceof HTMLAnchorElement)) open = !open
    }} onkeydown={(e) => {
      if (e.key === 'Enter') open = !open
    }}>
      {#if place.myMap?.note}<p class="my-note"><strong>map 筆記：</strong>{place.myMap.note}</p>{/if}
      {#if place.body}{@html renderBody(place.body)}{/if}
    </div>
  {/if}
</li>

<style>
  li {
    padding: 12px 16px 14px;
    border-top: 1px solid var(--line);
  }
  li:first-child {
    border-top: none;
  }
  p {
    margin: 0;
  }
  .head {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    justify-content: space-between;
  }
  .name {
    font-size: 1.0625rem;
    font-weight: 600;
  }
  .map {
    flex: none;
    padding: 4px 10px;
    border: 1px solid var(--accent);
    border-radius: 999px;
    color: var(--accent);
    font-size: 0.8125rem;
    font-weight: 600;
    text-decoration: none;
  }
  .saved {
    margin-left: 4px;
    font-size: 0.875rem;
  }
  .my-note {
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--bg);
    white-space: pre-line;
    overflow-wrap: anywhere;
  }
  .label {
    margin-top: 1px;
    color: var(--muted);
    font-size: 0.75rem;
  }
  .body {
    margin-top: 4px;
    color: var(--text);
    font-size: 0.875rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    line-clamp: 10;
    overflow: hidden;
    cursor: pointer;
  }
  .body.open {
    display: block;
  }
  .body :global(p),
  .body :global(ul) {
    margin: 0 0 6px;
  }
  .body :global(ul) {
    padding-left: 1.2em;
  }
  .body :global(:last-child) {
    margin-bottom: 0;
  }
  .body :global(a) {
    color: var(--code);
  }
</style>
