import type { Area } from '../types'

const coords = (lat: number, lng: number) => `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`

export const tomakomai: Area = {
  id: 'tomakomai',
  name: '苫小牧',
  city: '苫小牧',
  dates: ['2026-11-01'],
  note: '観光協会有租腳踏車：1 日 1,000 円（另收保證金 1,000 円），9:30～17:45。[說明](https://www.tomakomai-kanko.jp/sightseen/rental.html)',
  subAreas: [
    {
      name: '苫小牧港・市街南側',
      places: [
        {
          name: '苫小牧市美術博物館',
          category: '其它',
          map: coords(42.6374954, 141.6129542),
          body: `**9:30～17:00（入館至 16:30）。**
- [特別展「棟方志功―北方への祈り」](https://www.city.tomakomai.hokkaido.jp/hakubutsukan/tenrankai/munakata.html)（9/19～11/23）
- 展出漫畫「ゴールデンカムイ」參考過的資料，以及野田サトル老師的簽名板`,
        },
        {
          name: 'ミール展示館',
          category: '其它',
          map: coords(42.6321368, 141.6052883),
          body: `苫小牧市科學中心內，展示俄羅斯太空站「ミール」的實物備用機，可進入艙內參觀。`,
        },
        {
          name: 'ホッキ貝資料館',
          category: '其它',
          map: coords(42.6303207, 141.6149288),
          body: `小型地方資料館，介紹苫小牧名產ホッキ貝的生態、漁業與飲食文化。`,
        },
        {
          name: '海の駅ぷらっとみなと市場',
          category: '正餐',
          map: coords(42.630586, 141.615804),
          body: `港邊海鮮市場與食堂集合地，可吃海鮮丼、ホッキ貝料理，也適合買水產伴手禮。`,
        },
        {
          name: '回転寿司 北々亭 苫小牧店',
          category: '正餐',
          body: `**旅遊講座提及。**船見町 2-6-8。函館店已於 2020/5 閉店，苫小牧店是行程內唯一能去的分店。
**11:00–21:00（最後點餐 20:45）；不定休。**[官網](http://www.kaitenmaru.com/shop/4/)`,
        },
      ],
    },
    {
      name: '苫小牧西側',
      note: '往白老順路',
      places: [
        {
          name: '三星 本店',
          category: '甜點與咖啡',
          map: coords(42.6153328, 141.5273802),
          body: `苫小牧菓子老店本店；除了名物「よいとまけ」，也有麵包、蛋糕、泡芙、和菓子及內用座位。`,
        },
      ],
    },
    {
      name: '苫小牧東側',
      note: '開車',
      places: [
        {
          name: "Mother's Tomakomai",
          category: '甜點與咖啡',
          map: coords(42.6686267, 141.6464704),
          body: `雞蛋與甜點店，主打新鮮雞蛋、プリン、シュークリーム及ロールケーキ。`,
        },
        {
          name: '道の駅 ウトナイ湖',
          category: '其它',
          map: 'https://maps.app.goo.gl/pqm4EBrCiBeHfR8u7',
          body: `旁邊有免費的ウトナイ湖野生鳥獣保護センター。
- B1 とんちゃん豚まん：用ウトナイ湖一帶飼養的品牌豬
- シマエナガ（北海道長尾山雀）商品超過 500 種，被稱為「聖地」`,
        },
      ],
    },
  ],
}
