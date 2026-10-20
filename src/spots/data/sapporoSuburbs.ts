import type { Area } from '../types'

export const sapporoSuburbs: Area = {
  id: 'sapporo-suburbs',
  name: '札幌近郊',
  city: '札幌',
  dates: ['2026-10-28', '2026-10-29'],
  note: '搭 JR 或公車的半日到一日行程。',
  subAreas: [
    {
      name: '芸術の森・真駒内',
      note: '地下鉄南北線真駒内轉公車；兩點不能走路互通',
      places: [
        {
          name: '札幌芸術の森・野外美術館',
          query: '札幌芸術の森 野外美術館',
          category: '其它',
          myMap: {},
          body: `森林裡散布大型雕塑的戶外美術館，紅葉季很漂亮；屋內美術館 10/10 起展「五大浮世絵師展」。園區免費，野外美術館約 800 日圓（未確認）。
**9:45–17:00；11/3 前每天開放，另 10/26 臨時休。**[官網](https://artpark.or.jp/riyou/)`,
        },
        {
          name: '頭大仏殿（真駒内滝野霊園）',
          query: '頭大仏殿',
          category: '其它',
          myMap: { note: '旅遊書 大佛' },
          body: `安藤忠雄設計，大佛身體被薰衣草山丘圍住，只露出頭。參拜 1,000 日圓（現金只收千円鈔或刷卡）。
**4–10 月 9:00–16:00，11 月起 10:00–15:00。**[官網](https://www.takinoreien.com/pages/107/)`,
        },
      ],
    },
    {
      name: '東郊・北郊',
      note: '各點分散；10/28 起沒車，搭 JR 或公車',
      places: [
        {
          name: '平岡樹芸センター',
          category: '其它',
          myMap: { note: '旅遊書 夏秋開放' },
          body: `清田区平岡4条 3 丁目，ノムラモミジ並木與日式庭園，紅葉 10 月中旬到 11 月上旬；免費。
**8:45–17:15，開放到 11/15；週一休。**[官網](https://www.sapporo-park.or.jp/jyugei/)`,
        },
        {
          name: 'モエレ沼公園',
          category: '其它',
          myMap: { note: '旅遊書 垃圾場' },
          body: `野口勇設計的大型地景公園，有モエレ山和ガラスのピラミッド。
**園內 7:00–22:00；ガラスのピラミッド 9:00–18:00，每月第一個週一休。**[官網](https://moerenumapark.jp/)`,
        },
        {
          name: '町村農場 ミルクガーデン',
          query: '町村農場 ミルクガーデン',
          category: '甜點與咖啡',
          myMap: {},
          body: `江別市篠津 183，老牛舍改建的直營店；霜淇淋、甜甜圈、優格、奶油。沒車要搭 JR 到江別再坐計程車。
**4–10 月 9:30–17:30（最後點餐 17:00），11 月起 10:00–17:00。**[介紹](https://www.gutabi.jp/spot/detail/2813)`,
        },
        {
          name: "ROYCE' CACAO & CHOCOLATE TOWN",
          query: 'ロイズカカオ＆チョコレートタウン',
          category: '甜點與咖啡',
          myMap: {},
          body: `当別町，JR ロイズタウン駅走路約 7 分。看可可豆做成巧克力的工廠。**參觀要先在官網預約，大人 1,200 日圓**；10/21–11/27 部分展區施工。
**參觀 10:00–17:00（最後入場 15:00），商店 9:00–18:00；不定休。**[官網](https://www.royce.com/cct/)`,
        },
        {
          name: 'エスコンフィールドHOKKAIDO',
          category: '其它',
          myMap: {},
          body: `北広島，JR 北広島站走路約 20 分。沒比賽的日子 Fビレッジ和部分區域免費開放；球場導覽要在 Fチケ 預約（平日大人 1,800 日圓起），館內有 tower eleven 溫泉三溫暖。10/27–29 的場次查不到，看[官方行事曆](https://www.hkdballpark.com/visitguide/schedule/)。`,
        },
      ],
    },
    {
      name: '小樽',
      note: 'JR 快速約 35 分',
      places: [
        {
          name: '小樽市役所',
          category: '其它',
          myMap: {},
          body: `小樽市花園 2-12-1。1933 年完工的本館是小樽市指定歴史的建造物，現在仍在使用；只能看外觀。`,
        },
      ],
    },
  ],
}
