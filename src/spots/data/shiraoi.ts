import type { Area } from '../types'

const coords = (lat: number, lng: number) => `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`

export const shiraoi: Area = {
  id: 'shiraoi',
  name: '白老・登別',
  city: '白老',
  dates: ['2026-10-31'],
  subAreas: [
    {
      name: '白老',
      note: 'ウポポイ在白老駅步行約 10 分；いわさき要開車',
      places: [
        {
          name: 'ウポポイ（民族共生象徴空間）',
          myMap: {},
          category: '其它',
          map: coords(42.5577892, 141.3635063),
          body: `以アイヌ文化為主題的國家級園區，包含国立アイヌ民族博物館、戶外展示與傳統表演。
**朋友提醒：**園區活動大多要先抽號碼牌，而且時段會撞，早點進去，看當天館內行程表排順序；一進去先抽料理體驗，上次一小時前就沒票了。
有興趣的節目：
- [ものづくり見学](https://ainu-upopoy.go.jp/program/watch-ainu-crafts/)
- [アㇰシノッ](https://ainu-upopoy.go.jp/program/aksinot/)（弓矢體驗，週六付費版 500 円）
- [イペアン ロ！](https://ainu-upopoy.go.jp/program/ipean-ro/)（實食體驗，1,000 円，須事先預約）
- [普段着のアイヌ](https://ainu-upopoy.go.jp/program/fudanginoainu/)
- [ウポポ ネワ リㇺセ](https://ainu-upopoy.go.jp/program/upoponewarimuse/)（先到体験交流ホール前抽整理券）
- [ウパㇱクマ](https://ainu-upopoy.go.jp/program/upaskuma/)
- [ポントキッチン](https://ainu-upopoy.go.jp/program/ponto-kitchen/)（只在平日開）
午餐可在收費區外的エントランス棟「フードコートキッチン poro」或「海空のハル」，當日憑票可再入場。`,
        },
        {
          name: 'ミナピエノ',
          myMap: { note: 'いぶりジェラートパスポート 2026' },
          category: '甜點與咖啡',
          map: 'https://maps.google.com/?cid=16280150423982907365',
          body: `いぶりジェラートパスポート 2026 參加店。`,
        },
        {
          name: '白老牛の店いわさき おもてなし亭',
          myMap: { note: 'AI' },
          category: '正餐',
          map: coords(42.5654084, 141.3856505),
          body: `白老牛專門餐廳，可吃牛排、燒肉等料理。`,
        },
        {
          name: '炭火焼レストラン 牛の里',
          query: '炭火焼レストラン 牛の里 白老',
          category: '正餐',
          myMap: { note: 'AI 推' },
          body: `栄町 1-6-13。自家タケダ牧場的白老牛炭火燒肉，原創漢堡排受歡迎，也可外帶。
**餐廳 11:00–16:00（最後點餐 15:00）、賣店 10:00–18:30；週二、第 2 和第 4 個週一休。**[白老觀光協會](https://shiraoi.net/gourmet/ushinosato/)`,
        },
      ],
    },
    {
      name: '虎杖浜',
      note: '白老町的沿海聚落，以温泉、漁業與たらこ聞名；各點開車',
      places: [
        {
          name: '北のランプ亭',
          myMap: { note: '咖郎妹推' },
          category: '正餐',
          map: 'https://maps.app.goo.gl/ccw6ixFsGRBhtHRs8',
          body: `**朋友強推，海鮮燒烤。**`,
        },
        {
          name: 'かに王',
          myMap: {},
          category: '正餐',
          map: 'https://maps.app.goo.gl/jqq2zrnTnok4X28X6',
          body: `螃蟹相關店家；店種與代表品項出發前確認。`,
        },
        {
          name: 'ゆジェラート',
          category: '甜點與咖啡',
          map: 'https://maps.app.goo.gl/NkvFpSHfRv9Pedvw8',
          body: `溫泉設施「花の湯」腹地內，停車位多、有狗運動場；白老宏友會旗下生活介護事業所「みらいえ」經營。`,
        },
        {
          name: 'はしもと陶芸館',
          myMap: { note: 'AI' },
          category: '其它',
          map: coords(42.4762901, 141.2381007),
          body: `陶藝展示與販售空間；是否有體驗課程需另行確認。`,
        },
        {
          name: 'かに料理専門店 かに太郎',
          query: 'かに太郎 竹浦 白老',
          category: '正餐',
          myMap: {},
          body: `竹浦 116，十二角形建築。「かにめし」一天限量約 20 份，舊口碑只收現金。
**店主生病後停業，2026 年只有特定日子特別營業，**10/31 有沒有開要先打 0144-87-2993 問。[北海道新聞](https://www.hokkaido-np.co.jp/article/1374499/)`,
        },
      ],
    },
    {
      name: '登別駅周邊',
      places: [
        {
          name: '三吉丸 かに直売店',
          myMap: { note: '地圖看到' },
          category: '正餐',
          map: coords(42.4571432, 141.1866192),
          body: `螃蟹直售店（白老町虎杖浜 354-4，0144-87-3999）。[線上預約](https://sankitimaru.base.shop/categories/7410735)可外帶當天燙好的毛蟹：[店頭受取限定 ゆでたて毛ガニ](https://sankitimaru.base.shop/items/148556133)，活重 350〜390g 一隻 ¥2,800，不寄送；開始煮就不能取消、退款。
- 規格：現煮馬上吃／帶回放涼（另付箱子費，下單 4 小時後才能取）／切好（每隻加 ¥800＋稅）
- 約需提前 3 天下單；放涼版前一天 14:30 前下單，隔天 9:30 可取
- 自取時段：**週一～週六 9:30〜11:30、14:00〜15:30；週日與國定假日休**
- 煮蟹約 1 小時；當天 9 點起會收到「テイクアウト受付完了」通知，到店報訂單號碼`,
        },
        {
          name: '雲丹 まるひら',
          myMap: { note: '地圖看到' },
          category: '正餐',
          map: 'https://maps.app.goo.gl/bRq1gK8YrKLLURxr8',
          body: `海膽、鮭魚卵、生魚片。`,
        },
        {
          name: 'なな色のヒカリ',
          myMap: { note: `登別站旁的觀光交流中心內，用北海道食材做季節口味

いぶりジェラートパスポート 2026` },
          category: '甜點與咖啡',
          map: 'https://maps.google.com/?cid=9240578518320322748',
          body: `登別站旁的觀光交流中心內，用北海道食材做季節口味。`,
        },
      ],
    },
    {
      name: '登別温泉街',
      note: '從登別駅搭巴士',
      places: [
        {
          name: 'PIZZERIA ASTRA',
          myMap: { note: '咪咪家推' },
          category: '正餐',
          map: coords(42.4928025, 141.1429432),
          body: `朋友推薦的披薩店。`,
        },
        {
          name: '藤崎山葵園',
          myMap: { note: '旅遊書' },
          category: '其它',
          map: coords(42.4939282, 141.1436512),
          body: `山葵加工品專門店，可找わさび漬等伴手禮。`,
        },
        {
          name: '登別地獄谷',
          query: '登別地獄谷 登別温泉町',
          category: '其它',
          myMap: {},
          body: `日和山噴發形成、直徑約 450 m 的火山口遺跡，登別溫泉的源頭；免費散步，晚上有「鬼火の路」點燈。停車場一般車 500 日圓。[Visit Hokkaido](https://www.visit-hokkaido.jp/spot/detail_10157.html)`,
        },
      ],
    },
  ],
}
