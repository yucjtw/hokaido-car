import type { Area } from '../types'

export const sapporo: Area = {
  id: 'sapporo',
  name: '札幌市中心',
  city: '札幌',
  dates: ['2026-10-27', '2026-10-28', '2026-10-29'],
  note: '走路可到的範圍：札幌駅到すすきの、中島公園、創成東。',
  subAreas: [
    {
      name: '札幌駅・大通公園・時計台',
      places: [
        {
          name: '鋼の錬金術師×黄泉のツガイ展',
          myMap: { note: '黃泉使者展 大丸札幌店 7 樓' },
          category: '其它',
          query: '大丸札幌店',
          body: `大丸札幌店 7 樓，會期 10/14–11/1。**已買票**（不能用在日時指定日，附グッズ與パンフレット，在會場兌換），參觀日暫定。
**10:00–18:00 入場、19:00 閉場**；10/27（二）不是日時指定日。入場時可能核對購買者身分。[官網](https://dmdepart.jp/museum/sapporo/hagaren_yomi/)`,
        },
        {
          name: '回転寿司 根室花まる JRタワーステラプレイス店',
          category: '正餐',
          body: `**誌麟姐姐講座推薦品牌。**
**在地部落客ジョニー列為札幌回転寿司第一名**；最貴盤約 420 円，兩人放開吃約 5,000 円。必點花咲蟹の鉄砲汁、魚のアラ汁，另推真たち軍艦、紅鮭すじこ醤油漬け、一本あなご。
ステラプレイス 6F，在大丸札幌店隔壁，可與展覽同日。不接受預約，店頭発券機 **10:00** 起受付，建議先取號再去看展。
**11:00–22:00（最後點餐 21:30）；官方列 10/27（二）、10/28（三）全系統店休，札幌段只能排 10/29（四）。**
想少排隊可改[大同生命札幌ビル miredo店](https://www.sushi-hanamaru.com/store/details/_miredo.html?p=a)（11:00–22:00）或[ココノススキノ店](https://www.sushi-hanamaru.com/store/details/cocono.html)（11:00–21:00，可用 QR 遠端看待組數）。[官網](https://www.sushi-hanamaru.com/store/details/s03.html)／[部落格](https://johnny88.jp/sapporo-conveyorbelt-sushi/)`,
        },
        {
          name: '松尾ジンギスカン 札幌駅前店',
          myMap: { note: 'https://hokkaidolife.tw/2015-08-21-125/' },
          category: '正餐',
          body: `**hokkaidolife 推薦。**滝川式味付ジンギスカン（蘋果、洋蔥、生薑醬汁先醃羊肉，外圈煮蔬菜）；札幌駅地下步行空間直結，雨天省移動。可選「特上ラム」「ラムショルダー」或三種肉比較組合。
**11:00–15:00（最後點餐 14:30）、16:30–22:30（最後點餐 21:30）；全年無休（12/31–1/2 除外）。**[官網](https://www.matsuo1956.jp/shop/ekimae/)`,
        },
        {
          name: '一夜干しと海鮮丼 できたて屋 時計台店',
          myMap: { note: '旅遊書 烤魚定食' },
          category: '正餐',
          body: `**旅遊書推薦烤魚定食。**根室花まる系統，店內做一夜干し並現烤；另有海鮮丼，部分餐點最後可加かつお出汁做茶漬け。
**11:00–22:00（最後點餐 21:30）；官方公告 10/27（二）、10/28（三）店休，札幌段只能排 10/29（四）。**[官網](https://www.sushi-hanamaru.com/store/details/s17.html?p=b)`,
        },
        {
          name: 'OSTERIA SALVATORE 札幌',
          myMap: { note: '師傅大西誠在那不勒斯修習，薪窯，做過用斯佩爾特小麥、水、鹽全部道產的麵團配札幌製莫札瑞拉的披薩。平日午間套餐 1,815 日圓起。' },
          category: '正餐',
          body: `飯店一樓的義大利餐廳，主力窯烤披薩。想吃起司可點晚餐的「Formaggi Hokkaido」（ペペネロ、リコッタ、リコッタサラータ、モッツァレラ與ベシャメル），或水牛モッツァレラ的「D.O.C」「Margherita Buffala」。午餐品項會輪替。
**平日 11:30–15:00（最後點餐 14:30）、17:00–23:00（最後點餐 22:00）；週六日假日 11:30–23:00（最後點餐 22:00）。**[晚餐菜單](https://www.salvatore.jp/restaurant/sapporo/pdf/di.pdf)／[午餐菜單](https://www.salvatore.jp/restaurant/sapporo/pdf/lu.pdf)`,
        },
        {
          name: 'きのとや 大通公園店・KINOTOYA cafe',
          myMap: { note: '極上牛乳ソフト 新千歲機場排隊店 這邊不用排還有坐位' },
          category: '甜點與咖啡',
          body: `目標是「**極上牛乳ソフト**」：北海道產マスカルポーネ加深乳香，口感濃密略帶彈性，甜筒也用北海道產小麥。店內 62 席。新千歳空港店常排隊，這間通常較不用排且有座位（經驗，不保證）。
**10:00–20:00，餐點最後點餐 19:30；1/1 休。**[官網](https://www.kinotoya.com/shop_list/oodoori/)`,
        },
        {
          name: '雨は、やさしく No.2',
          query: '雨は、やさしく No.2 北7条東3 札幌',
          category: '正餐',
          myMap: { note: '旅遊書 干貝拉麵' },
          body: `東区北7条東 3-28，JR 札幌駅走路約 10 分。干貝拉麵在這家：「帆立×鶏白湯」，湯裡放干貝醬，邊攪散邊吃。
**週一休（遇假日改隔天），另有不定休；時段各來源不一：**sapporo.travel 寫週二至週四只開中午 11:00–14:45，Retty 寫每天 11:00–15:00、17:00–20:20，晚上去先確認。[sapporo.travel](https://www.sapporo.travel/?p=122277)`,
        },
        {
          name: '一夜干しと海鮮丼 できたて屋 JRタワーステラプレイス店',
          category: '正餐',
          myMap: { note: '旅遊書 烤魚定食' },
          body: `ステラプレイス 6F。根室花まる經營，一夜干自己醃自己烤；日替「一夜干し3種」，蘿蔔泥和醬菜可續。
**11:00–22:00（最後點餐 21:30）；官網公告 10/27、10/28 休，只有 10/29 能去。**[官網](https://www.sushi-hanamaru.com/store/details/post_6.html)`,
        },
        {
          name: '欧風菓子コートドール 札幌アピア店',
          query: 'コートドール 札幌アピア店',
          category: '甜點與咖啡',
          myMap: { note: '雨飛推薦，外帶甜點店' },
          body: `アピアWEST B1，外帶。札幌在地西點，主打さっぽろフィナンシェ、ダックワーズトラム。**10:00–21:00。**[LINE](https://page.line.me/330ofqkw)`,
        },
        {
          name: '北海道どさんこプラザ 札幌店',
          category: '其它',
          myMap: { note: `麹プレミアムヨーグルト（米麴優格）
TM96 系列優格／飲用優格
澤西奶油（ジャージーバター）` },
          body: `JR 札幌駅西通北口，北海道廳設立的特產店，約 2,000 種道內商品。map 筆記上的優格和奶油有沒有賣查不到，到店再找；TM96 是明治「北海道十勝」系列，一般超市就有。
**8:30–20:00，無休。**[官網](https://dousanhin.jp/store/sapporo/)`,
        },
        {
          name: 'SUU ステラプレイス店',
          query: 'SUU ステラプレイス 札幌',
          category: '其它',
          myMap: { note: '旅遊書 選物' },
          body: `ステラプレイス イースト 2F。北歐風生活雜貨選物，也有和北海道品牌合作的別注商品。**10:00–20:00，無休。**[官網](https://www.suu-sapporo.jp/about)`,
        },
        {
          name: '柳月 大丸札幌店',
          query: '柳月 大丸札幌店',
          category: '甜點與咖啡',
          myMap: {},
          body: `大丸札幌 B1。招牌「三方六」，白樺樹皮外觀的年輪蛋糕。**10:00–20:00。**`,
        },
        {
          name: 'ポケモンセンターサッポロ',
          category: '其它',
          myMap: {},
          body: `大丸札幌 **8F**。有札幌店限定商品。**10:00–20:00。**[官網](https://shop.pokemon.co.jp/ja/shop/pokemoncenter-sapporo/)`,
        },
        {
          name: 'モンベル 札幌赤れんが テラス店',
          query: 'モンベル 札幌赤れんがテラス店',
          category: '其它',
          myMap: { note: '這間可退稅' },
          body: `赤れんが テラス B1F・1F，札幌市內最大的モンベル之一；可免稅，結帳後到 B1F 免稅櫃台。**10:00–21:00。**[官網](https://store.montbell.jp/search/shopinfo/?shop_no=678522)`,
        },
        {
          name: 'MARcourt 札幌店',
          query: 'MARcourt 札幌ステラプレイス',
          category: '其它',
          myMap: { note: 'Mizuiro ind' },
          body: `札幌ステラプレイス センター 3F，女裝精品店，有賣 mizuiro ind（北海道沒有單獨門市）。**10:00–21:00。**[店舗一覧](https://mizuiroind.jp/pages/shoplist)`,
        },
        {
          name: 'まいばすけっと 北1条東1丁目店',
          query: 'まいばすけっと 北1条東1丁目店',
          category: '其它',
          myMap: {},
          body: `北1条東 1-6-3，AEON 系小超市，熟食便當便宜；バスセンター前站走路約 7 分。**7:00–23:00。**[官網](https://www.aeon-hokkaido.jp/mybasket/shop/kita1higashi1/)`,
        },
        {
          name: 'ワールドネットレンタカー 札幌駅営業所',
          map: 'https://maps.app.goo.gl/v62mLwtHYefCGTGM7',
          category: '其它',
          myMap: { note: `札幌營業所, 營業時間09:00~19:00
https://worldnet-rentacar.co.jp/zh/office/sapporo-sta/

北海道札幌市東區北10條東3丁目2-45
https://maps.app.goo.gl/v62mLwtHYefCGTGM7

~~還車注意事項~~
(pencil)營業所MAP CODE: 9553554
還車仍有接駁車到JR札幌站北口
最後一班接駁車18:30發車
還車前，請到指定地點把油加滿並保留收據
若未事先加油，將收取目視測定的油量+5公升（手續費）的費用。` },
          body: `還車。東区北10条東 3-2-45，**9:00–19:00**；有接駁車到 JR 札幌駅北口。[官網](https://worldnet-rentacar.co.jp/zh/office/sapporo-sta/)`,
        },
      ],
    },
    {
      name: '札幌駅北東側',
      places: [
        {
          name: '回転寿し トリトン 北8条光星店',
          category: '正餐',
          body: `**誌麟姐姐講座推薦品牌；分店依區域挑選。**回轉壽司，東区北8条東5丁目19-1。
**11:00–22:00（最後點餐 21:30）；不接受座位預約。**混雜時營業時間可能調整。
2026/10/23 查詢：[官網](https://toriton-kita1.jp/shop/kita8/)`,
        },
      ],
    },
    {
      name: '大通・狸小路・すすきの',
      places: [
        {
          name: '松尾ジンギスカン 札幌大通南1条店',
          myMap: { note: 'https://hokkaidolife.tw/2015-08-21-125/' },
          category: '正餐',
          body: `**hokkaidolife 原文實際吃過的分店。**初次吃羊肉建議選羊味較輕的ラム，想要重羊味選マトン；可點三種肉比較午餐，蘸生蛋液吃。有無煙設備，環境適合帶小孩。另有ジンギスカン丼。
**11:00–15:00（最後點餐 14:30）、16:30–22:30（最後點餐 22:00）；全年無休（12/31–1/2 除外）。**
同品牌備選：[すすきの4・2店](https://www.matsuo1956.jp/shop/susukino/) 平日 16:30–23:00，午餐僅週末假日；すすきの店（FC）17:30–23:30、週二休。[官網](https://www.matsuo1956.jp/shop/minami1/)／[食記](https://hokkaidolife.tw/2015-08-21-125/)`,
        },
        {
          name: '成吉思汗だるま 本店',
          myMap: { note: '陳家慶' },
          category: '正餐',
          body: `**朋友推薦。**すすきの老字號，在吧台前用炭火烤沒醃過的羊肉，和松尾不同路線；搭洋蔥、長蔥、泡菜。空間小、不接受訂位，熱門時段常排隊。
**17:00–翌 5:00；無固定休（年末年始除外），出發前再確認。**[食べログ](https://tabelog.com/hokkaido/A0101/A010103/1000016/)`,
        },
        {
          name: '酒とそば まるき',
          myMap: { note: 'Emma推' },
          category: '正餐',
          body: `**朋友推薦。**北竜町產「キタワセ」每天店內手打二八蕎麥，接單後才煮；另有季節蕎麥、下酒菜與日本酒。
**11:30–16:00、16:00–21:00（最後點餐）；週一休。**14:00 後僅一樓營業。午餐不接受訂位；晚餐須至少 4 天前預約，且只吃蕎麥不接受訂位。[官網](https://mado-sapporo.jp/maruki/shop/)／[菜單](https://mado-sapporo.jp/maruki/menu/)`,
        },
        {
          name: '札幌ラーメン 大公',
          myMap: { note: 'https://hokkaidolife.tw/2017-02-03-110/' },
          category: '正餐',
          body: `**hokkaidolife 推薦。**作者常點奶油玉米味噌拉麵，外國朋友常點放三顆大帆立的ホタテバターラーメン。湯頭以雞骨為主，偏甜不油，不像典型札幌味噌那麼濃；適合第一次吃味噌拉麵。
公開資料多列 **11:00–23:00**；週三休有「每週」與「第 1、3 個週三」兩種版本，優先排 10/27（二）或 10/29（四）。[食記](https://hokkaidolife.tw/2017-02-03-110/)`,
        },
        {
          name: '炭焼ステーキ BEEF IMPACT 狸小路店',
          myMap: { note: '折價券' },
          category: '正餐',
          body: `**有折價券，期限與使用條件看券面。**厚切牛排炭火烤，可按食量選克數。部位與克數以當日菜單為準。
**11:00–22:30（最後點餐 22:00）；不定休。**[官網](https://beef-impact.com/shop/)`,
        },
        {
          name: '回転すし 活一鮮 本店',
          category: '正餐',
          body: `**在地部落客ジョニー推薦。**ノルベサ B1F，可和駿河屋同一趟。盤價 128–595 円，推真たち軍艦、函館産生真いか、活ホタテ、生とろさば；平日 15:00 前的午餐（特選15貫セット、バラちらし）很受歡迎。
**平日 12:00–15:00（最後點餐 14:30）、16:30–23:00（最後點餐 22:30）；週六日假日 11:00–23:00；本店未列定休日。**同棟的 活一鮮 HANARE、別邸 週三休，不要走錯。官方有「北海道展出展に伴う休業」公告但未抓到日期，10 月下旬是否臨休待確認。[官網](https://www.katsuissen.com/)／[部落格](https://johnny88.jp/sushi-katsuissen/)`,
        },
        {
          name: '回転寿司 ぱさーる',
          myMap: {},
          category: '正餐',
          body: `**在地部落客ジョニー推薦的晚間壽司。**南4条西2，U 字型吧檯 13 席，一盤 150 円起，北海道地酒多。先點晩酌セット（兩杯飲料＋三種生魚片＋一條卷物，可兩人分，1,800 円），另推塩水うに、ぼたんえび、活ほっき、山わさびいか。不接受預約。
**17:00–23:00，賣完提前關；週一、週日休，另有不定休。**[ホットペッパー](https://www.hotpepper.jp/strJ000303308/)／[部落格](https://johnny88.jp/pasaru-sushi/)`,
        },
        {
          name: '欧風菓子コートドール レストランプラザ札幌店',
          myMap: { note: '雨飛推薦，外帶甜點' },
          category: '甜點與咖啡',
          body: `**朋友推薦，外帶甜點。**札幌在地歐風菓子店，開到深夜，適合すすきの晚餐後買回飯店；常溫伴手禮可看「さっぽろフィナンシェ」。晚間生蛋糕可能售完。
**週一至週六 15:00–23:00；週日與假日 15:00–22:00。**[官網](https://sapporo-cotedor.com/plaza-109/index.html)`,
        },
        {
          name: 'JUMP SHOP 札幌店',
          myMap: {},
          category: '其它',
          body: `札幌PARCO 內。**10:00–20:30**（依 PARCO 營業日）。[官網](https://jumpshop-benelic.com/pages/shop)`,
        },
        {
          name: '駿河屋 札幌ノルベサ店',
          myMap: {},
          category: '其它',
          body: `**11:00–23:00。**[官網](https://www.suruga-ya.jp/sapporo_norbesa/index.html)`,
        },
        {
          name: 'まんだらけ 札幌店',
          myMap: {},
          category: '其它',
          body: `**12:00–20:00，全年無休。**[官網](https://www.mandarake.co.jp/dir/spr/)`,
        },
        {
          name: 'AOAO SAPPORO',
          query: 'AOAO SAPPORO moyuk 狸小路 札幌',
          category: '其它',
          myMap: { note: '開很晚水族館' },
          body: `南2条西 3 丁目 moyuk SAPPORO 4–6F，狸小路的都市型水族館。大人 2,200 日圓。
**10:00–22:00（最後入館 21:00），無休（偶有維修休館）。**[官網](https://aoao-sapporo.blue/)`,
        },
        {
          name: 'ススキノデパート ONE VIKING',
          query: 'ススキノデパート ONE VIKING すすきの 札幌',
          category: '正餐',
          myMap: { note: '旅遊書 冷凍螃蟹吃到飽' },
          body: `南5条西 2 丁目 サイバーシティービル 2F，北海道料理自助餐，桌上無煙烤爐自己烤。ズワイ蟹吃到飽是加價方案：平日 90 分 7,800 日圓、120 分 8,800 日圓（含稅），當天 19:00 前預約；沒寫是不是冷凍蟹。
**16:45–22:00（最後點餐 21:50），無休。**[ホットペッパー](https://www.hotpepper.jp/strJ003941254/course/)`,
        },
        {
          name: '松尾ジンギスカン 札幌すすきの４・２店',
          query: '松尾ジンギスカン 札幌すすきの4・2店',
          category: '正餐',
          myMap: { note: 'https://hokkaidolife.tw/2015-08-21-125/' },
          body: `南4条西 2-11-7 TOMORU 2F，72 席，可網路訂位。**晚餐 16:30–23:00（最後點餐 22:00），午餐只有週六日與假日；無休。**[官網](https://www.matsuo1956.jp/shop/susukino/)`,
        },
        {
          name: '松尾ジンギスカン すすきの店',
          query: '松尾ジンギスカン すすきの店 シャンゼリゼビル',
          category: '正餐',
          myMap: { note: 'https://hokkaidolife.tw/2015-08-21-125/' },
          body: `南4条西 5-4 シャンゼリゼビル 1F，不在松尾官網分店列表上（加盟店），主打吃到飽套餐。
**17:30–23:30（最後點餐 23:00）；週二休，10/27 沒開。**[ぐるなび](https://r.gnavi.co.jp/h283800/)`,
        },
        {
          name: 'ラーメン寳龍 総本店',
          query: 'ラーメン寳龍 総本店 すすきの 札幌',
          category: '正餐',
          myMap: { note: `寶龍的溏心蛋上面還烙有店名外，

蛋還是用味噌醃漬，

和一般用醬油醃漬吃起來的口味也完全不一樣。

湯頭看起來雖然清淡，味噌的風味卻很讚，

濃郁卻不鹹不膩，我想是受到外國人歡迎的原因之一。

味道自然樸素，搭配厚厚的叉燒、筍片、還有滿滿的蔥花一起享用超棒!

另外，主角味噌則全是社長一手從零，開始自己手工製作的!

讓味噌保持在-5度的低溫中發酵之外，

還在味噌裡加了用紫蘇梅醃製的薑片，有別於其他間拉麵的味噌，

其實我覺得整體吃起來有點像札幌的另一間名店彩未的味噌拉麵。` },
          body: `南6条西 3 丁目，1957 年創業。招牌「黒帯味噌ラーメン」，自家調配米麴味噌醬配粗捲麵。
**只開晚上 17:00–22:00；最新資料寫週一與第 2、4 個週二休，10/27 很可能沒開，**先打 011-511-0403。[るるぶ](https://rurubu.jp/andmore/spot/80000136)`,
        },
      ],
    },
    {
      name: '二条市場周邊',
      note: '二条市場、狸小路1丁目、南2条西1丁目一帶',
      places: [
        {
          name: '食事処ながもり',
          category: '正餐',
          body: `**在地部落客ジョニー推薦；乃木坂46 粉絲聖地。**二条市場「仲町通り」，賣點是焼き魚定食而非海鮮丼。猶豫就點サーモンハラス定食（現烤至少 15 分鐘），另推銀鱈、開きホッケ、サバ味噌煮；湯可加價改カニ汁，小鉢加うにいか。常排隊，建議 10 點台或 14 點台去。
**7:00–14:00；週二休。**[介紹](https://rurubu.jp/andmore/spot/80000075)／[部落格](https://johnny88.jp/nagamori-2jyo-ichiba/)`,
        },
        {
          name: '味処ふじた（藤田商店）',
          myMap: { note: 'Emma推' },
          category: '正餐',
          query: '味処ふじた 新二条市場',
          body: `**朋友推薦。**新二条市場內，可從店頭挑牡蠣、帆立、北寄貝等，依品項生食、燒烤或蒸煮。
公開資料多列 **9:00–15:00、週三與週四休**，札幌段大概只有 10/27（二）可排。沒有正式網站，時間與供應須再確認。[部落格](https://johnny88.jp/fujita-2jyo-ichiba/)`,
        },
        {
          name: 'めしと純米別邸 二条市場 でめきん',
          myMap: { note: 'Emma推' },
          category: '正餐',
          body: `**朋友推薦。**水產批發公司經營的海鮮食堂，市場直送海鮮丼、刺身與羅臼直送焼魚定食，也有日本酒。
**營業時間待確認：**經營公司頁列 6:00–15:00、不定休；食べログ 2026 年資料列 7:00–22:00（料理最後點餐 21:30），不要先假設能排晚餐。[官網](https://ni-290.co.jp/shop-demekin/)`,
        },
        {
          name: 'Hamburg Steak North Continent MACHI NO NAKA',
          myMap: { note: 'Sandi Emma推' },
          category: '正餐',
          body: `**朋友推薦。**北海道產肉品手工漢堡排，可選道產牛、豬及エゾ鹿，搭配多種自製醬汁。
**11:30–15:00（最後點餐 14:30）、17:30–22:00（最後點餐 21:00）；每月第 3 個週三休。**[食べログ](https://tabelog.com/hokkaido/A0101/A010102/1024277/)`,
        },
        {
          name: 'ピッツェリア ダルセーニョ ドゥエ',
          myMap: { note: '拿破里披薩協會認定店' },
          category: '正餐',
          body: `ナポリピッツァ專門店，AVPN 認證（代表製程符合傳統規範，不是排名）。經典款選水牛モッツァレラ的「Margherita STG」或加ミニトマト的「Verace」；起司控選五種起司「Cinque Formaggi」；兩人可用「Due Gusti」各做半邊。
**11:30–14:00（最後點餐，15:00 閉店）、17:00–21:00（最後點餐，22:00 閉店）；週一休（國定假日除外），另有不定休。**[官網](https://www.ristorante-dalsegno.com/)／[菜單](https://ristorante-dalsegno.com/due/lista_due.html)`,
        },
        {
          name: '蒼氓茶寮 SOBO SARYO',
          myMap: { note: '旅遊書 茶布丁' },
          category: '甜點與咖啡',
          body: `**旅遊書推薦「茶布丁」。**日本茶專門店，煎茶、抹茶、ほうじ茶與茶甜點，有「抹茶プリンアフォガード」。
2026 年在地媒體資料列 **11:00–翌 1:00（最晚入店 23:00）、無固定休**；當日營業與布丁供應看官方 Instagram。[Instagram](https://www.instagram.com/sobo_saryo/)`,
        },
        {
          name: 'らしんばん 札幌店本館',
          myMap: {},
          category: '其它',
          body: `大型動漫二手店，中古漫畫、同人誌、角色商品、フィギュア、CD／DVD 與遊戲；本館在丸大ビル 3F，4F 另有衣装館。
**11:00–20:00、無固定休。**[官網](https://www.lashinbang.com/store/1/)`,
        },
        {
          name: 'マジサンド',
          query: 'マジサンド 狸小路 札幌',
          category: '甜點與咖啡',
          myMap: {},
          body: `南2条西 1-5-9，狸小路的水果三明治專賣，北海道鮮奶油、麵包像蛋糕一樣鬆軟；也有霜淇淋。
**約 11:00 或 12:00–20:00，查不到公休日。**`,
        },
        {
          name: 'メロンブックス 札幌店',
          query: 'メロンブックス 札幌店 丸大ビル',
          category: '其它',
          myMap: {},
          body: `南2条西 1-5 丸大ビル B1F，動漫、同人誌與周邊。**11:00–20:30。**[官網](https://www.melonbooks.co.jp/shop/shop.php?wp_id=2)`,
        },
      ],
    },
    {
      name: '中島公園',
      note: '地下鉄中島公園站',
      places: [
        {
          name: '中島公園',
          category: '其它',
          myMap: { note: `2026/10/23~11/13 17:15~21:00點燈
https://sapporo-autumn-illuminations.jp/` },
          body: `**紅葉ライトアップ 2026/10/23–11/3**（不是到 11/13），17:00–21:00；日本庭園另收費 600 日圓（網路 500），17:15–21:00、最後入場 20:45。豊平館有芸者カフェ。[官網](https://sapporo-autumn-illuminations.jp/)`,
        },
        {
          name: 'えにかいたもち',
          query: 'えにかいたもち 南11条西8 札幌',
          category: '甜點與咖啡',
          myMap: { note: '旅遊書 大福' },
          body: `南11条西 8-3-19，近市電中島公園通。北海道產糯米做的大福，十幾種口味（みたらしココナツ、生チョコ、開心果…）。
**10:00–19:00，無休。**[官網](https://enikaitamochi.jp/)`,
        },
      ],
    },
    {
      name: 'サッポロファクトリー',
      note: '大通東側，創成東；從大通走約 15 分',
      places: [
        {
          name: 'サッポロファクトリー',
          query: 'サッポロファクトリー',
          category: '其它',
          myMap: { note: `Mozuミニチュア展 ようこそ、ちいさな世界へ。」

会期
    2025年5月23日（金）～7月6日（日）
    平日13：00～18：00/土日10:30～18：00 ※入場は閉場の30分前まで 
会場
    サッポロファクトリー3条館3階　特設会場
    （札幌市中央区北２条東4丁目）` },
          body: `北2条東 4 丁目，紅磚啤酒工廠改建的購物中心。map 筆記的 Mozu 迷你模型展是 2025 年的活動，已結束；10/27–29 期間 3条館 3F 藝廊沒有展覽。
- 「視てはいけない絵画展」10/2–11/23，1条館 2F，平日 13:00–19:00，¥2,000，只收手機電子票
- 「パンどろぼうひろば」官網公告暫停
**商店 10:00–20:00、餐廳 11:00–22:00，不定休。**[活動](https://sapporofactory.jp/event/)`,
        },
        {
          name: '一夜干しと海鮮丼 できたて屋 サッポロファクトリー店',
          category: '正餐',
          myMap: { note: '旅遊書 烤魚定食' },
          body: `3条館 B1，根室花まる經營的烤魚定食與海鮮丼。
**11:00–22:00（最後點餐 21:00）；官網公告 10/27、10/28 休，只有 10/29 能去。**[官網](https://www.sushi-hanamaru.com/store/details/s15.html)`,
        },
        {
          name: 'モンベル サッポロファクトリー店',
          query: 'モンベル サッポロファクトリー店',
          category: '其它',
          myMap: {},
          body: `2条館 3F，一般商品和 outlet 過季品在同一家店；可免稅。**10:00–20:00。**[官網](https://store.montbell.jp/search/shopinfo/?shop_no=618861)`,
        },
      ],
    },
  ],
}
