<script lang="ts">
  // Asks to add the page to the home screen, where it opens offline as its own app.
  // Android Chrome can show its own install dialog through beforeinstallprompt;
  // Safari has no such event, so iPhone users get the steps instead.

  /** Chrome's install event; not in the DOM typings because only Chromium has it. */
  interface InstallPrompt extends Event {
    prompt(): Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
  }

  // Per page, because each page is installed as a separate app.
  const key = `hokaido-install-hint:${location.pathname}`
  const ua = navigator.userAgent
  // iPadOS reports itself as a Mac, so a touch screen tells them apart.
  const ios = /iPhone|iPad|iPod/.test(ua) || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1)
  // LINE's built-in browser, where shared links usually open, has no "Add to Home Screen".
  const line = / Line\//.test(ua)
  const installed =
    matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true

  // LINE's documented parameter for opening a link in the phone's default browser.
  const external = new URL(location.href)
  external.searchParams.set('openExternalBrowser', '1')

  let dismissed = $state(readDismissed())
  let installPrompt = $state<InstallPrompt | null>(null)

  const show = $derived(!installed && !dismissed && (ios || line || installPrompt !== null))

  function readDismissed(): boolean {
    try {
      return localStorage.getItem(key) === '1'
    } catch {
      return false
    }
  }

  function dismiss() {
    dismissed = true
    try {
      localStorage.setItem(key, '1')
    } catch {
      // Storage blocked: the hint comes back on the next visit, which is harmless.
    }
  }

  async function install() {
    if (!installPrompt) return
    await installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    installPrompt = null
    if (outcome === 'accepted') dismiss()
  }

  function onPrompt(e: Event) {
    // Keeps Chrome's own mini bar away so the button below is the one place to install.
    e.preventDefault()
    installPrompt = e as InstallPrompt
  }
</script>

<svelte:window onbeforeinstallprompt={onPrompt} />

{#if show}
  <aside>
    {#if line}
      <p>LINE 裡無法加入主畫面。用瀏覽器開啟後再加入主畫面，沒網路也能開。</p>
    {:else if installPrompt}
      <p>安裝到主畫面，沒網路也能開。</p>
    {:else}
      <p>點 Safari 的分享按鈕（或網址列旁的「⋯」）→「加入主畫面」，沒網路也能開。</p>
    {/if}
    <div class="buttons">
      {#if line}<a class="primary" href={external.href}>用瀏覽器開啟</a>{/if}
      {#if installPrompt && !line}<button type="button" class="primary" onclick={install}>安裝</button>{/if}
      <button type="button" onclick={dismiss}>知道了</button>
    </div>
  </aside>
{/if}

<style>
  aside {
    position: fixed;
    z-index: 10;
    left: 50%;
    bottom: calc(12px + env(safe-area-inset-bottom));
    transform: translateX(-50%);
    width: calc(100% - 32px);
    max-width: 608px;
    box-sizing: border-box;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--card);
    color: var(--text);
    box-shadow: 0 4px 16px rgb(0 0 0 / 0.15);
    font-size: 0.875rem;
  }
  p {
    margin: 0;
    flex: 1;
  }
  .buttons {
    display: flex;
    gap: 8px;
    flex: none;
  }
  button,
  a {
    font: inherit;
    text-decoration: none;
    padding: 8px 12px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }
  .primary {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--card);
    font-weight: 600;
  }
</style>
