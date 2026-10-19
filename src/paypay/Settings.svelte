<script lang="ts">
  import { CHECKED_ON, campaigns, periodLabel, tripPeriods, unavailable } from './campaigns'
  import { exportJson, importJson, save, store } from './store.svelte'

  // Campaigns whose total budget can run out, once each (fee waivers have no budget).
  const limited = Object.values(campaigns).filter((c) => c.fullPeriod !== null)
  const registerable = Object.values(campaigns).filter((c) => c.registerMonthly)

  let backup = $state('')
  let backupMessage = $state('')

  function toggle(flags: Record<string, boolean>, key: string, checked: boolean) {
    if (checked) flags[key] = true
    else delete flags[key]
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
  <p class="hint">用來把日幣換成台幣計算上限，改成錢包付款時顯示的匯率。</p>
</section>

<section>
  <h2>個人條件</h2>
  <label class="row">
    <input type="checkbox" bind:checked={store.settings.taishinAutoDebit} onchange={save} />
    <span>已設定台新帳戶自動扣繳（3.8%；未設定只有 1.3%）</span>
  </label>
  {#each registerable as c (c.id)}
    <p class="row-title">{c.name}：每月月初開放登錄，要在付款前登錄</p>
    <div class="periods">
      {#each tripPeriods('month') as month (month)}
        {@const id = `${c.id}:${month}`}
        <label class="period">
          <input
            type="checkbox"
            checked={!!store.settings.registered[id]}
            onchange={(e) => toggle(store.settings.registered, id, e.currentTarget.checked)}
          />
          {periodLabel('month', month)}已登錄
        </label>
      {/each}
    </div>
  {/each}
</section>

<section>
  <h2>活動額滿</h2>
  <p class="hint">期別以台灣時間計，日本時間 01:00 換期。勾選總預算已用完的期別。額滿的活動不再計回饋；方案內所有回饋活動都額滿時，方案會從列表隱藏。</p>
  {#each limited as c (c.id)}
    {@const kind = c.fullPeriod!}
    <fieldset>
      <legend>
        {#if c.link}<a href={c.link} target="_blank" rel="noreferrer">{c.name}</a>{:else}{c.name}{/if}
      </legend>
      <p class="hint">{c.budget}</p>
      <div class="periods">
        {#each tripPeriods(kind) as key (key)}
          {@const id = `${c.id}:${key}`}
          <label class="period">
            <input
              type="checkbox"
              checked={!!store.settings.full[id]}
              onchange={(e) => toggle(store.settings.full, id, e.currentTarget.checked)}
            />
            {periodLabel(kind, key)}
          </label>
        {/each}
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

<section>
  <h2>不可用</h2>
  <ul>
    {#each unavailable as u (u.name)}
      <li><b>{u.name}</b>：{u.reason}</li>
    {/each}
  </ul>
  <p class="hint">
    活動條件查詢於 {CHECKED_ON}。全點、台新 Point 官方都是 1 點 = NT$1。取整依官方：玉山每筆捨去到元、全支付帳戶加碼每筆四捨五入、全支付主活動每月合併後四捨五入（這裡不取整），其餘未說明；實際以各錢包為準。
  </p>
</section>

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
  .row-title {
    font-size: 0.9375rem;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  input[type='number'],
  textarea {
    font: inherit;
    font-size: 1rem;
    padding: 8px 10px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--card);
    color: var(--text);
  }
  input[type='number'] {
    width: 7rem;
    font-family: var(--mono);
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
  .period {
    display: flex;
    align-items: center;
    gap: 6px;
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
    font-family: var(--mono);
    font-size: 0.75rem;
  }
  ul {
    margin: 0;
    padding-left: 20px;
    font-size: 0.875rem;
  }
</style>
