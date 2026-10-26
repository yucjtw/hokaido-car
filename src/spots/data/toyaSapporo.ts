import type { Area, SubArea } from '../types'

const toyakoOnsen: SubArea = {
  name: '洞爺湖温泉',
  places: [
    {
      name: '洞爺湖ビジターセンター・火山科学館',
      category: '其它',
      map: 'https://www.google.com/maps/search/?api=1&query=42.5639578%2C140.8151022',
      body: `火山科学館（かざんかがくかん）用影片、模型與實物介紹有珠山噴發；ビジターセンター為免費區。
**10 月 10:00–16:00；週一休（遇國定假日順延）。成人 JPY 800。**
2026/10/26 查詢：[官方開館資訊](https://toyako-vc.jp/volcano/)`,
    },
  ],
}

const sapporoStation: SubArea = {
  name: '札幌駅周邊',
  places: [
    {
      name: 'ワールドネットレンタカー 札幌駅営業所',
      query: 'ワールドネットレンタカー 札幌駅営業所 北10条東3丁目2-45',
      category: '其它',
      body: `札幌（さっぽろ）市東区北10条東3丁目2-45。
**9:00–19:00；12/31、1/1 休。**電話 011-788-7732。
2026/10/26 查詢：[營業所官網](https://worldnet-rentacar.co.jp/office/sapporo-sta/)`,
    },
  ],
}

export const nakayama: Area = {
  id: 'toya-sapporo-nakayama',
  name: '中山峠',
  city: '北海道',
  dates: ['2026-10-27'],
  note: '國道 230 號沿線，以及京極支線。',
  subAreas: [
    toyakoOnsen,
    {
      name: '湖西岸・國道 230 號',
      places: [
        {
          name: 'レークヒル・ファーム',
          category: '甜點與咖啡',
          map: 'https://www.google.com/maps/search/?api=1&query=42.6155325%2C140.7864909',
          body: `牧場直營，自家牛乳製 gelato、甜點與咖啡，也可看羊蹄山。**10/27 下午沿線預報陰天，羊蹄山可能被雲遮住，未必看得到完整山形。**[天氣預報](https://tenki.jp/forecast/1/4/2100/1584/3hours.html)（10/26 21:00 發表）
洞爺湖町花和 127，位於國道 230 號沿線；洞爺湖温泉街開車約 20 分鐘。
**10 月ジェラートショップ與カフェ均為 9:00–17:00。**官網未列每週固定休日。
2026/10/26 查詢：[牧場官方交通與營業資訊](https://www.lake-hill.com/access/)`,
        },
      ],
    },
    {
      name: '京極',
      note: '位於國道 230 號西側的支線',
      places: [
        {
          name: '道の駅 名水の郷きょうごく',
          category: '其它',
          map: 'https://www.google.com/maps/search/?api=1&query=42.8588983%2C140.8708023',
          body: `與ふきだし公園相連，可看羊蹄山伏流水、散步與用餐。
以レークヒル・ファーム至中山峠比較：國道 230 號直行約 49 公里，經此處約 74 公里；多約 25 公里、20 分鐘車程（靜態路線估算，未含即時交通）。
**賣店 9:00–17:00，僅冬季週三休；餐廳 11:00–16:00（最後點餐 15:30）、週三休。**
2026/10/26 查詢：[道の駅官網](https://meisui-plaza.com/)`,
        },
      ],
    },
    {
      name: '中山峠・國道 230 號',
      places: [
        {
          name: '道の駅 望羊中山',
          category: '其它',
          map: 'https://www.google.com/maps/search/?api=1&query=42.8563019%2C141.0972484',
          body: `峠頂休息站，可看羊蹄山。**10/27 下午沿線預報陰天，羊蹄山可能被雲遮住，未必看得到完整山形。**[天氣預報](https://tenki.jp/forecast/1/2/1600/1398/3hours.html)（10/26 21:00 發表）
名物是整顆馬鈴薯裹粉油炸的「あげいも」。
**全年無休；10 月賣店與外帶區 8:30–17:30（最後點餐 17:15）。餐廳 11:00–15:00、不定休。**
2026/10/26 查詢：[道の駅官網](https://ageimo.com/)`,
        },
      ],
    },
    sapporoStation,
  ],
}

export const expressway: Area = {
  id: 'toya-sapporo-expressway',
  name: '高速道路',
  city: '北海道',
  dates: ['2026-10-27'],
  note: '道央自動車道沿線：登別・苫小牧・千歳。',
  subAreas: [
    toyakoOnsen,
    {
      name: '登別温泉',
      note: '登別東 IC 開車約 10 分鐘',
      places: [
        {
          name: '登別地獄谷',
          query: '登別地獄谷 駐車場',
          category: '其它',
          myMap: {},
          body: `登別（のぼりべつ）温泉的噴氣與火口地形。登別東 IC 開車約 10 分鐘。
**散步免費；普通車停車 JPY 500。**步道開放範圍依現場標示。
2026/10/26 查詢：[登別觀光協會](https://noboribetsu-spa.jp/spot/spot0034/)／[交通時間參考](https://www.gutabi.jp/spot/detail/383)`,
        },
      ],
    },
    {
      name: 'ウトナイ湖',
      note: '苫小牧東 IC 下，官網列約 10 分鐘',
      places: [
        {
          name: '道の駅 ウトナイ湖',
          myMap: { note: `B1とんちゃん豚まん（1980 年代以後在苫小牧市植苗地區（就是ウトナイ湖那一帶）飼養的品牌豬）

這裡的シマエナガ（北海道長尾山雀，就是那種白色圓球小鳥）商品超過 500 種，被稱為「聖地」。有遊客說現在シマエナガ的商品比苫小牧吉祥物とまチョップ的還多` },
          category: '其它',
          map: 'https://maps.app.goo.gl/pqm4EBrCiBeHfR8u7',
          body: `ウトナイ湖（うとないこ）湖畔的道の駅，有展望處與土產店。
**3–10 月 9:00–18:00，12/31–1/2 休。**苫小牧東 IC 開車約 10 分鐘，位於國道 36 號沿線。
- B1 とんちゃん豚まん
- シマエナガ商品
2026/10/26 查詢：[道の駅官網](https://www.michinoeki-utonaiko.com/)`,
        },
      ],
    },
    {
      name: '美沢',
      note: '苫小牧東 IC 開車約 20 分鐘',
      places: [
        {
          name: 'ノーザンホースパーク',
          query: 'ノーザンホースパーク 美沢 苫小牧',
          category: '其它',
          myMap: { note: '旅遊書' },
          body: `苫小牧市美沢，以馬為主題的公園，可看馬、騎馬與搭馬車。**苫小牧東 IC 開車約 20 分鐘**（旅遊資料估時）。
**4/15–11/5 為 9:00–17:00，成人 JPY 1,200，活動另計。**
2026/10/26 查詢：[園方營業與票價](https://www.northern-horsepark.jp/price/)／[交流道車程參考](https://www.walkerplus.com/spot/ar0101s13778/data.html)`,
        },
      ],
    },
    {
      name: '千歳川・花園',
      places: [
        {
          name: 'サケのふるさと 千歳水族館',
          query: 'サケのふるさと 千歳水族館 花園',
          myMap: {},
          category: '其它',
          body: `千歳（ちとせ）市花園的淡水魚水族館，可透過水下觀察窗看千歳川；野生鮭魚數量依當日魚群。
**9:00–17:00。**官網公告外牆修繕期間仍正常開館。
2026/10/26 查詢：[水族館官網](https://chitose-aq.jp/)`,
        },
        {
          name: '道の駅 サーモンパーク千歳',
          query: '道の駅 サーモンパーク千歳 花園',
          category: '其它',
          body: `與千歳水族館相鄰，有餐飲與賣店。各店營業時間依現場公告。[官網](https://www.salmonpark.com/)`,
        },
      ],
    },
    {
      name: '千歳郊外・蘭越',
      places: [
        {
          name: '名水ふれあい公園',
          query: '名水ふれあい公園 蘭越 千歳',
          category: '其它',
          myMap: { note: '旅遊書' },
          body: `千歳市蘭越的親水公園，有沿河散步空間。從サーモンパーク千歳開車約 15 分鐘；交流道至公園的車程待確認。
**10/1–11/15 為 9:00–17:00，免費。**市府公告因河川與浄水場工程，園內部分區域不能進入；取水處是處理過的自來水，並非直接湧水。
2026/10/26 查詢：[千歳市官方資訊](https://www.city.chitose.lg.jp/c10/1002549/1002598/1003450.html)`,
        },
      ],
    },
    sapporoStation,
  ],
}
