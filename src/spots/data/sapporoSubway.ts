import type { Area } from '../types'

export const sapporoSubway: Area = {
  id: 'sapporo-subway',
  name: '札幌地鐵沿線',
  city: '札幌',
  dates: ['2026-10-28', '2026-10-29'],
  note: '從市中心搭地下鉄或市電一兩站。',
  subAreas: [
    {
      name: '円山',
      places: [
        {
          name: 'チーズの店 コンテ',
          category: '其它',
          query: 'チーズの店 コンテ 円山',
          body: `道產＋歐洲產天然起司專門店，道產工房起司最集中的零售點。可以找：
- **共働学舎新得農場**：十勝新得，道產熟成起司的代表
- **広内エゾリスの谷チーズ社**：共働學舍前廠長 2020 年自立開的工房
- **下川町バウアーファーム的ブラウンチーズ**：乳清慢慢煮乾，不加糖卻很甜，質地軟，最接近「起司甜點」`,
        },
        {
          name: 'レストラン コートドール',
          query: 'レストラン コートドール 宮ケ丘 札幌',
          category: '正餐',
          myMap: { note: '雨飛推薦：法餐，午餐大概五千日圓，從前菜到甜點（甜點給一整顆舒芙蕾那種規模的現做甜點）都很讚，網站就可以預約，對外國客人也很友善' },
          body: `宮ケ丘 1-2-38，東西線西28丁目走路約 5 分。円山的法式料理，官網可電話或線上訂位，週末早點訂。
**午餐 12:00–15:00（最後點餐 13:30）、晚餐 18:00–22:30（最後點餐 20:00）；週一休（遇假日改週二），另每月一天不定休。**[官網](http://www.restaurant-cotedor.com/)`,
        },
        {
          name: 'YUWAERU 札幌円山公園店',
          category: '正餐',
          myMap: { note: '旅遊書 飯糰' },
          body: `北1条西 28-2-18，円山公園站走路約 4 分。熟成糙米「寝かせ玄米」定食；早餐可選糙米飯糰，商品區賣外帶飯糰和おはぎ。
**早餐 10:00–11:30、午餐與咖啡 11:00–17:00；官網沒寫公休日。**[官網](https://www.yuwaeru.co.jp/sapporo)`,
        },
        {
          name: 'ナチュラルアイランド home 札幌店',
          query: 'ナチュラルアイランド home 札幌 北1条西28',
          category: '其它',
          myMap: { note: '旅遊書' },
          body: `北1条西 28-2-35 モマプラス 2F。北海道天然保養品牌直營店，可免費諮詢。
**10:00–17:00；週二休，10/27 不能去。**[官網](https://island.natural-s.jp/shop_list/)`,
        },
        {
          name: '札幌市円山動物園',
          category: '其它',
          myMap: { note: '旅遊書 白熊' },
          body: `有北極熊館。**10 月 9:30–16:30（16:00 停止入園）；每月第 2、4 個週三休，10/28 休園。**[官網](https://www.city.sapporo.jp/zoo/info/kaienzikan-kyuenbi/20210311.html)`,
        },
        {
          name: '北海道神宮',
          category: '其它',
          myMap: {},
          body: `**10/16–10/31 6:00–16:30**；御朱印與授與品 9:00 到關門。円山公園站走路約 15 分。[官網](http://www.hokkaidojingu.or.jp/china/access/index.html)`,
        },
      ],
    },
    {
      name: '西18丁目・桑園',
      note: '近代美術館一帶，東西線西18丁目',
      places: [
        {
          name: '北海道立近代美術館',
          category: '其它',
          myMap: { note: `旅遊書
MINIATURE LIFE展2
田中達也　見立ての世界

田中達也《お菓子な虹》2019年　ⒸTatsuya Tanaka

田中達也は、2011年からインターネット上で毎日作品を発表し、国内外で注目を集めるミニチュア写真家・見立て作家。ジオラマ用の人形と身近な日用品を組み合わせて別の物に見立てるユーモアあふれる世界を、約180点の写真や立体作品などで紹介します。

会場
北海道立近代美術館　展示室B
会期
2026/9/12（土）～ 11/8（日）
開館時間
9:30～17:00
休館日
月曜日（9/21、10/12、11/2を除く）、9/24（木）、10/13（火）

問い合わせ
北海道新聞社 事業センター tel. 011-210-5731
（土・日、祝休日を除く 10:00～12:00、13:00～17:00）
2026.09.12(土) - 2026.11.08(日)` },
          body: `北1条西 17 丁目。**MINIATURE LIFE展2 田中達也 見立ての世界：9/12–11/8，9:30–17:00（16:30 停止入場），一般 1,500 日圓；週一休。**約 180 件迷你模型與攝影作品，有北海道主題新作。[官網](https://artmuseum.pref.hokkaido.lg.jp/knb/exhibition/program/)`,
        },
        {
          name: 'mima 北海道立三岸好太郎美術館',
          query: '三岸好太郎美術館 札幌',
          category: '其它',
          myMap: {},
          body: `北2条西 15 丁目，近代美術館旁。館藏展「好太郎をめぐる7人の男と女」9/20–12/10。
**9:30–17:00（16:30 停止入場）；週一休。**[官網](https://artmuseum.pref.hokkaido.lg.jp/mkb/exhibition/program/)`,
        },
        {
          name: 'D&DEPARTMENT HOKKAIDO by 3KG',
          category: '其它',
          myMap: {},
          body: `大通西 17-1-7。挑選北海道在地、可長久使用的設計品與生活用品。
**多數網站寫 11:00–19:00，週日、週一休；官網說以 SNS 公告為準。**[官網](https://www.d-department.com/ext/shop/hokkaido.html)`,
        },
        {
          name: '椿サロン 札幌本店',
          category: '甜點與咖啡',
          myMap: { note: `旅遊書 鬆餅
雨飛推薦：招牌是鬆餅，但是蛋糕披薩義麵都不錯` },
          body: `北7条西 19 丁目 momijiビル 1F，近 JR 桑園。招牌是口感軟彈的「北海道ほっとけーき」。
**11:00–17:30，年中無休**（其他網站有寫週日或週一休的舊資料）。[官網](http://www.tsubakisalon.jp/honten/)`,
        },
        {
          name: 'パティスリーシイヤ',
          query: 'パティスリーシイヤ 北5条西21 札幌',
          category: '甜點與咖啡',
          myMap: { note: '雨飛推薦，外帶店' },
          body: `北5条西 21-1-15。人氣蛋糕店，燒菓子也有名；可能只能外帶，只收現金。
**11:00–19:00；週三、週四休，只有 10/27 能去。**[Instagram](https://www.instagram.com/patisserieshiiya/)`,
        },
      ],
    },
    {
      name: '札幌場外市場',
      note: '二十四軒站或 JR 桑園走路約 10 分',
      places: [
        {
          name: 'NOUILLES JAPONAISE とくいち',
          query: 'とくいち 万歳市場 札幌場外市場',
          category: '正餐',
          myMap: { note: '北海道台灣人推薦 雲吞麵' },
          body: `北11条西 22-1-26 万歳市場 1F。法式主廚監修的地雞清湯鹽味拉麵、雞醬油拉麵，開店前就排隊；雲吞麵沒查到。
**約 9:00–15:00（各網站不一）；多數寫週三休、官方 X 寫不定休，10/28 可能休。**[Instagram](https://www.instagram.com/tokuichi.nouilles_japonaise/)`,
        },
        {
          name: '魚河岸 ひかり寿司',
          query: '魚河岸ひかり寿司 北12条西20 札幌',
          category: '正餐',
          myMap: { note: '旅遊書' },
          body: `北12条西 20-1-20，さっぽろ朝市內的小壽司店，早上就開。
**約 5:30–13:00（各網站不一）；週日、假日與市場休市日休，**10/28 前打 011-612-9810 確認。[ホットペッパー](https://www.hotpepper.jp/strJ000653640/)`,
        },
        {
          name: 'うめぇ堂（根室杉山水産直営）',
          query: 'うめぇ堂 札幌場外市場',
          category: '正餐',
          myMap: { note: '螃蟹 LINE折價券九折' },
          body: `北11条西 22-1-26，和とくいち同一棟。螃蟹批發商直營，主打螃蟹丼。
**7:00–15:00，無休。**[sapporo.travel](https://www.sapporo.travel/?p=121689)`,
        },
      ],
    },
    {
      name: '北大・北12条',
      note: '南北線北12条、北18条',
      places: [
        {
          name: '北海道大学総合博物館',
          category: '其它',
          myMap: {},
          body: `免費。特別展「北大の恐竜たち」到 11/1。**10:00–17:00；週一休。**[官網](https://www.museum.hokudai.ac.jp/)`,
        },
        {
          name: '秀岳荘 北大店',
          category: '其它',
          myMap: { note: 'https://hokkaidolife.tw/hokkaidoshugakuso/' },
          body: `北12条西 3-2-15，北海道在地的登山與戶外用品店（map 清單上寫成「修学荘」）。
**10:30–19:30；週一休（遇假日改隔天）。**[官網](https://www.shugakuso.com/stores/stores-hokudai/)`,
        },
        {
          name: '石田珈琲店',
          query: '石田珈琲店 北16条西3 札幌',
          category: '甜點與咖啡',
          myMap: { note: '旅遊書 布丁' },
          body: `北16条西 3-1-18，南北線北18条。自家烘焙咖啡，招牌是偏硬的卡士達布丁。
**11:00–18:00；多數網站寫週二、週三休（只有 10/29 能去），hotpepper 寫週日休，**先打 011-792-5244。`,
        },
        {
          name: '札幌諏訪神社',
          query: '札幌諏訪神社 北12条東1',
          category: '其它',
          myMap: { note: '旅遊書 球雀' },
          body: `東区北12条東 1-1-10，東豊線北13条東走路約 3 分。有シマエナガ御守（約 1,000 日圓，天黑會微微發光），御朱印每月換圖。
**參拜 24 小時；社務所 9:00–17:00。**[Visit Hokkaido](https://www.visit-hokkaido.jp/spot/detail_13031.html)`,
        },
      ],
    },
    {
      name: '平岸・澄川',
      note: '南北線南平岸、澄川',
      places: [
        {
          name: 'さっぽろ純連 札幌店',
          query: 'さっぽろ純連 札幌店 平岸',
          category: '正餐',
          myMap: { note: '旅遊書 札幌拉麵' },
          body: `豊平区平岸2条 17-1-41，澄川站走路約 5 分。札幌濃厚味噌拉麵代表店之一；只收現金，先買餐券。
**11:00–21:00；週一休。**[官網](http://www.junren.co.jp/shop.htm)`,
        },
        {
          name: 'octafuzz',
          query: 'octafuzz 南平岸',
          category: '甜點與咖啡',
          myMap: { note: '旅遊書 布丁' },
          body: `豊平区平岸3条 13-7-18，南平岸站走路 1 分。自家烘焙咖啡，招牌自製布丁，午餐有義大利麵；14 席。
**11:00–18:00；週五休（不固定，看 SNS）。**[Instagram](https://www.instagram.com/octafu.zz/)`,
        },
        {
          name: 'aile cafe',
          query: 'aile cafe 平岸1条20 札幌',
          category: '甜點與咖啡',
          myMap: { note: '旅遊書 山景 布丁起司盤' },
          body: `豊平区平岸1条 20-9-11 9F，看得到市區和藻岩山，晚上看夜景。甜菜糖布丁、起司蛋糕。
**約 11:00–23:00（最後點餐 22:30），不定休；**先看 Instagram。`,
        },
      ],
    },
    {
      name: '藻岩山麓（伏見）',
      note: '市電ロープウェイ入口',
      places: [
        {
          name: '旧小熊邸',
          query: '旧小熊邸 伏見 札幌',
          category: '其它',
          myMap: { note: '旅遊書' },
          body: `伏見 5-3-1，建築師田上義也設計的洋館，外觀可自由參觀。原本的ろいず珈琲館已關店，現在是ドリーバーデン カフェ：**11:00–20:00，週四休。**[介紹](https://hre-net.com/keizai/keizaisougou/27421/)`,
        },
        {
          name: '宮越屋珈琲 High Grown Cafe',
          query: '宮越屋珈琲 high grown cafe 伏見',
          category: '甜點與咖啡',
          myMap: { note: '旅遊書 夜景咖啡' },
          body: `伏見 3-15-20 3F，看得到市區夜景的深夜咖啡店；不能訂位，舊資料寫可吸菸。
**15:00–翌 1:00（最後點餐 0:30），無固定休。**[官網](https://www.miyakoshiya-coffee.co.jp/shopinfo/hgc)`,
        },
      ],
    },
    {
      name: '市區其他',
      note: '各點分散，搭車或開車',
      places: [
        {
          name: 'さっぽろ純連 北31条店',
          query: 'さっぽろ純連 北31条店',
          category: '正餐',
          myMap: { note: '旅遊書札幌拉麵' },
          body: `東区北31条東 1-1-8，南北線北34条。官網寫 11:00–21:00、週一休；Retty 寫 11:00–15:00、17:00–21:00、週四休，10/29 前打 011-750-5678。`,
        },
        {
          name: '雨は、やさしく',
          query: '雨は、やさしく 菊水元町',
          category: '正餐',
          myMap: { note: '旅遊書 干貝拉麵' },
          body: `白石区菊水元町4条 2-1-7，附近沒有走得到的車站。招牌「白肝煮干」；干貝拉麵在 No.2 店。
**11:00–15:00、18:00–20:00；週一休，另有不定休。**[ぐるなび](https://r.gnavi.co.jp/bbeam5e00000/)`,
        },
        {
          name: '札幌買取一番 本店',
          query: '札幌買取一番 西野',
          category: '其它',
          myMap: {},
          body: `西区西野6条 7-2-8，模型、公仔等收藏品的二手店；附近沒有地鐵站，有停車場。**10:00–19:00，年中無休。**[官網](https://kai1.jp/introduction/)`,
        },
        {
          name: '札幌東徳洲会病院',
          category: '其它',
          myMap: { note: '有中文翻譯' },
          body: `東区北33条東 14-3-1，代表號 011-722-1110；東豊線新道東走路約 5 分。設有國際醫療支援室，有會講中文的職員，口譯語言與日期有限，先打電話問。
**國際醫療支援室：週一至週五 8:30–17:00、週六 8:30–12:30；急診夜間與假日也看。**[官網](https://www.higashi-tokushukai.or.jp/international/index.html)`,
        },
      ],
    },
  ],
}
