<script lang="ts">
  import type { Spot } from '../data/types'

  let { spot }: { spot: Spot } = $props()

  // Car navigation accepts either a map code or a phone number, so the
  // phone number takes the large slot when there is no map code.
  const phoneIsPrimary = $derived(!spot.mapcode && !!spot.phone)
</script>

<li class="spot">
  {#if spot.mapcode}
    <p class="primary mapcode">{spot.mapcode}</p>
  {:else if spot.phone}
    <p class="primary phone-primary">{spot.phone}</p>
  {:else}
    <p class="primary missing">待查</p>
  {/if}
  <p class="name" lang="ja">{spot.name}</p>
  {#if spot.note}
    <p class="note">{spot.note}</p>
  {/if}
  {#if (spot.phone && !phoneIsPrimary) || spot.address}
    <p class="contact">
      {#if spot.phone && !phoneIsPrimary}
        <a class="phone" href={`tel:${spot.phone.replaceAll('-', '')}`}>{spot.phone}</a>
      {/if}
      {#if spot.address}
        <span class="address" lang="ja">{spot.address}</span>
      {/if}
    </p>
  {/if}
  {#if spot.addressEn}
    <p class="english-address"><span class="address-label">英文地址</span><br /><span lang="en">{spot.addressEn}</span></p>
  {/if}
  {#if spot.walk?.length}
    <ul class="walk">
      {#each spot.walk as place (place.name)}
        <li>
          <span class="walk-name" lang="ja">{place.name}</span>
          {#if place.note}<span class="walk-note">{place.note}</span>{/if}
        </li>
      {/each}
    </ul>
  {/if}
</li>

<style>
  .spot {
    padding: 12px 16px 14px;
    border-top: 1px solid var(--line);
  }
  .spot:first-child {
    border-top: none;
  }
  p {
    margin: 0;
  }
  .primary {
    font-family: var(--mono);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
    user-select: all;
  }
  .mapcode {
    color: var(--code);
  }
  .phone-primary {
    color: var(--phone);
  }
  .missing {
    font-family: inherit;
    font-size: 1.25rem;
    color: var(--muted);
    user-select: auto;
  }
  .name {
    margin-top: 2px;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text);
  }
  .note {
    margin-top: 2px;
    font-size: 0.875rem;
    color: var(--note);
  }
  .contact {
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 2px 12px;
    font-size: 0.8125rem;
  }
  .phone {
    color: var(--phone);
    font-family: var(--mono);
    text-decoration: none;
  }
  .address {
    color: var(--muted);
  }
  .english-address {
    margin-top: 6px;
    font-size: 1rem;
    overflow-wrap: anywhere;
    user-select: text;
  }
  .address-label {
    font-size: 0.8125rem;
    color: var(--muted);
  }
  .walk {
    list-style: none;
    margin: 8px 0 0;
    padding: 6px 0 0 10px;
    border-left: 3px solid var(--line);
  }
  .walk li {
    padding: 2px 0;
    font-size: 0.875rem;
  }
  .walk li::before {
    content: '🚶 ';
  }
  .walk-name {
    font-weight: 600;
    color: var(--text);
  }
  .walk-note {
    margin-left: 6px;
    color: var(--note);
  }
</style>
