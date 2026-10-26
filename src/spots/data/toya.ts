import type { Area } from '../types'

const coords = (lat: number, lng: number) => `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`

export const toya: Area = {
  id: 'toya',
  name: '洞爺湖',
  city: '洞爺湖',
  dates: ['2026-10-26'],
  note: '湖上煙火 20:45 起約 20 分鐘，煙火會移動，建議到外面看。',
  subAreas: [
    {
      name: '洞爺湖温泉街',
      places: [
        {
          name: '洞爺湖越後屋',
          category: '其它',
          map: coords(42.5652878, 140.8247298),
          body: `手工刻製木刀的土產店，《銀魂》「洞爺湖」木刀購買地。**9:00–19:00；公開頁面未列固定休日。**庫存與刻字時間需先確認。`,
        },
        {
          name: '洞爺湖ビジターセンター・火山科学館',
          category: '其它',
          map: coords(42.5639578, 140.8151022),
          body: `免費區介紹湖區自然；付費區用影片、模型與實物解說有珠山噴火。**10:00–16:00；10/26（一）固定休館。**`,
        },
        {
          name: '洞爺湖 湖底線路',
          category: '其它',
          map: coords(42.5660719, 140.8138937),
          body: `船隻拖曳軌道伸入湖中的短停留拍照點；天氣好時可拍到湖面與羊蹄山。`,
        },
        {
          name: '金比羅火口災害遺構散策路',
          category: '其它',
          map: coords(42.5631613, 140.8131281),
          body: `保存熱泥流破壞的公共浴場、住宅與橋梁，基礎路線約 30～40 分鐘。
續走未鋪裝坡路可到[金比羅火口展望台](${coords(42.55863, 140.8088386)})，近看 2000 年有珠山噴火形成的火口。`,
        },
        {
          name: 'レストラン望羊蹄',
          category: '正餐',
          query: 'レストラン望羊蹄 洞爺湖温泉',
          body: `望羊蹄（ぼうようてい）是温泉街的老派洋食店，適合逛完展望台、搭船前吃午餐。漢堡排套餐的觀光協會刊載價為 JPY 1,700，現場價格為準。
**午餐 11:00–15:30（最後點餐 14:30）；晚餐 17:00–20:30（最後點餐 19:30）；週三休。**店家提醒晚間可能提早收店。10/26（一）依一般規則營業，當日臨休未確認。
2026/10/26 查詢：[店家營業公告](https://boyotei.sakura.ne.jp/announce.html)／[洞爺湖温泉観光協会](https://www.laketoya.com/restaurant/)`,
        },
        {
          name: 'ラーメン専門店 豊来軒',
          category: '正餐',
          map: coords(42.5650438, 140.8232462),
          body: `豊来軒（ほうらいけん）是温泉街拉麵店，主打長時間熬製的清湯與自製味噌。適合搭船前吃午餐。
**午餐 11:30–14:30；不定休，10/26（一）是否臨休待確認。**晚餐 18:00 起，觀光協會列至 20:30、とうやこチャンネル列至 22:00，晚間前往需先確認。味噌拉麵的觀光協會刊載價為 JPY 889，現場價格為準。
2026/10/26 查詢：[とうやこチャンネル](https://toyako-ch.com/institution/52.html)／[洞爺湖温泉観光協会](https://www.laketoya.com/restaurant/)`,
        },
        {
          name: '食堂バル 金田一商店',
          category: '正餐',
          map: coords(42.5652515, 140.8268443),
          body: `家庭式小餐廳，常見咖哩、炸雞與長薯條。**官方 Instagram 未列固定營業時間與休日，依店家當日公告。**`,
        },
        {
          name: 'SELECT108 乃の風倶楽部',
          category: '其它',
          map: coords(42.5654253, 140.8214328),
          body: `乃の風リゾート一樓的選物與土產店。**官方未公開店鋪時段與非住宿客使用規則，須事前向飯店確認。**`,
        },
      ],
    },
    {
      name: '中島',
      note: '搭洞爺湖汽船登島',
      places: [
        {
          name: '中島・湖の森博物館',
          category: '其它',
          map: coords(42.5960141, 140.8447491),
          body: `館內介紹島上生態、火山地形與散策路。10 月仍可登島，遊覽船 **8:30–16:30、每 30 分鐘一班**；開館 9:00–16:00。`,
        },
        {
          name: "湖と森のCaf'e",
          category: '正餐',
          query: '湖と森のCafe 洞爺湖 中島',
          body: `中島上的咖啡館，供應肉醬義大利麵、蛋糕與輕食；適合登島後用餐。肉醬義大利麵的觀光協會刊載價為 JPY 850，現場價格為準。
**營業季 4 月下旬至 10 月底，10:00–15:30；官方介紹未列固定休日。**當日營業、供餐與庫存待確認；若在島上吃午餐，應多留停留時間，並先確認回程船班。
2026/10/26 查詢：[洞爺湖温泉観光協会](https://www.laketoya.com/restaurant/)`,
        },
      ],
    },
    {
      name: '西山',
      places: [
        {
          name: '金比羅火口群有料民間展望台',
          category: '其它',
          map: 'https://maps.app.goo.gl/TBXvS9RRaFEJ2QzS7',
          body: `民間收費展望區，可看金比羅火口群、洞爺湖與温泉街。你提供的三個圖釘相距約數十公尺，暫合併為同一處展望區：另見[西山火口群有料展望台](https://maps.app.goo.gl/tx3D9AKCg7X3akEo8)與[Lake Toya Panoramic View Point](https://maps.app.goo.gl/FwBxqPsJYRGSo4gPA)。
**開車入口在西山山麓火口散策路附近，沿未鋪裝上坡路進入。**與温泉街步行散策路的火口展望點分開。
**2026/10/26 查詢：當日營業時間、休日、收費及道路開放狀態待現場確認。**[2025 年活動資料](https://www.old.jsfee.jp/hokkaido2025/JSEE_36th_Hokkaido_Excursion_25.08.10updated.pdf)列一車 5 人以內 JPY 1,000，僅供預算參考；[2022 年實訪](https://dora-tabi.com/konpirakakogun-yuryo-minkan/)記載普通車可開至展望區。**此處 mapcode 尚未找到可核對的公開來源。**
英文地址：Izumi, Toyako, Abuta District, Hokkaido 049-5602, Japan。[地址來源](https://us.trip.com/travel-guide/attraction/toyako/nishiyama-crater-group-paid-observatory-58374554/)未列番地，只能定位泉地區，無法精準導航至展望台或開車入口。`,
        },
        {
          name: '西山山麓火口散策路',
          category: '其它',
          query: '西山山麓火口散策路',
        },
      ],
    },
    {
      name: '湖西岸高地',
      note: '兩點開車約 5 分',
      places: [
        {
          name: 'サイロ展望台',
          category: '其它',
          map: coords(42.6261722, 140.7995763),
          body: `可俯瞰湖面、中島、有珠山與昭和新山。**一樓賣店 8:30–18:00、不定休；二樓餐廳 11:30–13:30（最後點餐 13:15），可能因團體預約停止一般營業。**`,
        },
        {
          name: 'レークヒル・ファーム',
          category: '甜點與咖啡',
          map: coords(42.6155325, 140.7864909),
          body: `牧場直營，自家牛乳製 gelato、甜點與咖啡，也可看羊蹄山。**10 月 9:00–17:00；官方頁未列固定休日，出發前再看臨時公告。**`,
        },
      ],
    },
  ],
}
