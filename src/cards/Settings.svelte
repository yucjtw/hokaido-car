<script lang="ts">
  import { tripPeriods, periodLabel } from '../paypay/campaigns'
  import { cards, CHECKED_ON } from './cards'
  import { exportJson, importJson, save, store } from './store.svelte'

  const required = $derived(cards.filter((c) => c.requires && !store.settings.hidden[c.id]))
  const months = tripPeriods('month')

  let backup = $state('')
  let backupMessage = $state('')

  function toggle(key: string, checked: boolean) {
    if (checked) store.settings.done[key] = true
    else delete store.settings.done[key]
    save()
  }

  function show(id: string, checked: boolean) {
    if (checked) delete store.settings.hidden[id]
    else store.settings.hidden[id] = true
    save()
  }

  async function copyBackup() {
    backup = exportJson()
    try {
      await navigator.clipboard.writeText(backup)
      backupMessage = '已複製，貼到備忘錄保存'
    } catch {
      backupMessage = '無法自動複製，請手動全選下方文字'
    }
  }

  function restore() {
    try {
      importJson(backup)
      backupMessage = `已還原 ${store.entries.length} 筆紀錄`
    } catch {
      backupMessage = '還原失敗：貼上的內容不是這個頁面匯出的資料'
    }
  }
</script>

<section>
  <h2>匯率</h2>
  <label class="row">
    <span>1 日圓 = NT$</span>
    <input type="number" inputmode="decimal" step="0.0001" min="0.01" bind:value={store.settings.rate} onchange={save} />
  </label>
  <p class="hint">用來把日幣換成台幣計算上限，改成信用卡帳單上的匯率。</p>
</section>

<section>
  <h2>我有的卡</h2>
  <p class="hint">只顯示勾選的卡。設定存在各自的手機，旅伴可以勾自己的卡。</p>
  <fieldset class="owned">
    {#each cards as c (c.id)}
      <label class="period">
        <input type="checkbox" checked={!store.settings.hidden[c.id]} onchange={(e) => show(c.id, e.currentTarget.checked)} />
        {c.name}
      </label>
    {/each}
  </fieldset>
</section>

<section>
  <h2>登錄與任務</h2>
  <p class="hint">沒勾的卡只算基本回饋；勾了才把加碼算進排序。</p>
  {#each required as c (c.id)}
    {@const req = c.requires!}
    <fieldset>
      <legend><a href={c.link} target="_blank" rel="noreferrer">{c.name}</a></legend>
      <p class="hint">{req.how}</p>
      <div class="periods">
        {#if req.kind === 'monthly'}
          {#each months as month (month)}
            {@const key = `${c.id}:${month}`}
            <label class="period">
              <input
                type="checkbox"
                checked={!!store.settings.done[key]}
                onchange={(e) => toggle(key, e.currentTarget.checked)}
              />
              {periodLabel('month', month)}{req.label}
            </label>
          {/each}
        {:else}
          <label class="period">
            <input
              type="checkbox"
              checked={!!store.settings.done[c.id]}
              onchange={(e) => toggle(c.id, e.currentTarget.checked)}
            />
            {req.label}
          </label>
        {/if}
      </div>
    </fieldset>
  {/each}
</section>

<section>
  <h2>備份</h2>
  <p class="hint">紀錄只存在這支手機的瀏覽器。清除網站資料或換手機前，先複製備份。</p>
  <div class="buttons">
    <button type="button" onclick={copyBackup}>複製備份</button>
    <button type="button" onclick={restore} disabled={!backup.trim()}>用下方內容還原</button>
  </div>
  <textarea bind:value={backup} rows="3" placeholder="貼上備份內容後按「還原」" aria-label="備份內容"></textarea>
  {#if backupMessage}<p class="hint">{backupMessage}</p>{/if}
</section>

<p class="hint">
  條件查詢於 {CHECKED_ON}，回饋點數都以 1 點 = NT$1 計，不扣海外交易手續費；實際以各銀行為準。紀錄只存在這支手機的瀏覽器。
</p>

<style>
  section {
    display: grid;
    gap: 8px;
    margin-bottom: 24px;
  }
  h2 {
    margin: 0;
    font-size: 0.9375rem;
    color: var(--accent);
  }
  p {
    margin: 0;
  }
  .hint {
    color: var(--muted);
    font-size: 0.8125rem;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  input[type='number'],
  textarea {
    width: 7rem;
    font: inherit;
    font-size: 1rem;
    font-family: var(--mono);
    padding: 8px 10px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--card);
    color: var(--text);
  }
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    flex: none;
    accent-color: var(--accent);
  }
  fieldset {
    margin: 0;
    padding: 10px 12px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--card);
    display: grid;
    gap: 6px;
  }
  legend {
    padding: 0 4px;
    font-weight: 600;
  }
  a {
    color: var(--code);
  }
  .periods {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
  }
  .buttons {
    display: flex;
    gap: 8px;
  }
  button {
    font: inherit;
    padding: 8px 12px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.5;
  }
  textarea {
    width: 100%;
    font-size: 0.75rem;
  }
  .owned {
    gap: 10px;
  }
  .period {
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>
