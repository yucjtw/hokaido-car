import type { Day, Section } from './types'

// Areas visited on more than one day share one section, so they read the same on every tab.
const toyakoOnsen: Section = {
  title: '洞爺湖温泉',
  spots: [
    {
      name: '洞爺湖畔亭',
      mapcode: '321 519 556*68',
      mapcodeSource: 'https://www.toya-kohantei.com/access/',
      phone: '0570-026-571',
      address: '洞爺湖町洞爺湖温泉7-8',
      note: '住ごきらく亭：先把車開到畔亭玄關，免費停車',
      walk: [
        { name: '洞爺湖越後屋', note: '洞爺湖木刀' },
        { name: '洞爺湖汽船', note: '中島航線 8:30–16:30，每 30 分一班' },
        { name: 'ラーメン専門店 豊来軒', note: '噴火拉麵、味噌拉麵；11:30–14:30、18:00–22:00' },
        { name: '食堂バル 金田一商店' },
        { name: '洞爺湖 湖底線路', note: '溫泉街西側湖畔' },
        { name: '洞爺湖ビジターセンター・火山科学館', note: '週一休館' },
        { name: '金比羅火口災害遺構散策路', note: '從文化センター旁出發' },
      ],
    },
    {
      name: 'apollostation 洞爺温泉SS',
      mapcode: '321 519 455*35',
      mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08004/01584/ILSP0000308432_ipclm/',
      phone: '0142-75-2021',
      address: '洞爺湖町洞爺湖温泉53',
      note: '加油',
    },
  ],
}

const noboribetsuStation: Section = {
  title: '登別駅・登別東町',
  spots: [
    {
      name: '登別市観光交流センター ヌプル',
      mapcode: '603 112 842*03',
      mapcodeSource: 'WNR マップコード PDF（のぼりべつインフォメーションセンター；Mapion 為 603 112 842*72）',
      address: '登別市登別港町1-4-9',
      note: '登別駅旁',
      walk: [
        { name: 'なな色のヒカリ', note: '館內，季節口味 gelato' },
        { name: '登別マリンパークニクス', note: '步行 5 分；水族館' },
      ],
    },
    {
      name: '肴 雲丹 まるひら',
      mapcode: '603 141 104*35',
      mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01018/01230/GJ003958021-001/',
      phone: '0143-84-4577',
      address: '登別市登別東町4-15-2',
      note: '週一休',
    },
    {
      name: '登別伊達時代村',
      mapcode: '603 169 288*33',
      mapcodeSource: 'WNR マップコード PDF（Mapion 為 603 169 262*31）',
      phone: '0143-83-3311',
      address: '登別市中登別町53-1',
      note: '江戶時代主題園區',
    },
  ],
}

const noboribetsuOnsen: Section = {
  title: '登別温泉',
  spots: [
    {
      name: '登別地獄谷',
      mapcode: '603 287 235*11',
      mapcodeSource: 'WNR マップコード PDF（Mapion 為 603 288 397*03）',
      address: '登別市登別温泉町',
      note: '停車場每日 500 日圓；溫泉街沒找到免費公共停車場',
      walk: [
        { name: '大湯沼', note: '經大湯沼遊步道；大湯沼停車場只開夏季' },
        { name: '大湯沼川天然足湯', note: '免費，日出到日落' },
        { name: 'PIZZERIA ASTRA', note: '週二、三休' },
        { name: '藤崎わさび園', note: '山葵加工品；9:00–22:00' },
      ],
    },
    {
      name: '倶多楽湖 扇形展望台',
      mapcode: '603 320 752*58',
      mapcodeSource: 'WNR マップコード PDF',
      address: '白老町虎杖浜498-1',
      note: '11 月起封路',
    },
  ],
}


const toyakoWestNorth: Section = {
  title: '湖西・湖北',
  spots: [
    {
      name: 'サイロ展望台',
      mapcode: '321 726 732*60',
      mapcodeSource: 'WNR マップコード PDF（Mapion 為 321 726 761*58／321 726 730*43）',
      phone: '0142-87-2221',
      address: '洞爺湖町成香3-5',
      note: '俯瞰湖面與中島；賣店 8:30–18:00',
    },
    {
      name: 'レークヒル・ファーム',
      mapcode: '321 694 534*66',
      mapcodeSource: 'WNR マップコード PDF（Mapion 為 321 694 504*32）',
      phone: '0142-83-3376',
      address: '洞爺湖町花和127',
      note: '自家牛乳 gelato；10 月 9:00–17:00',
    },
    {
      name: '道の駅 とうや湖',
      mapcode: '321 879 391*06',
      mapcodeSource: 'https://www.hkd.mlit.go.jp/mr/category/drivemap.pdf （PDF 的 321 878 269*30 與 Mapion、國交省都不符）',
      phone: '0142-87-2200',
      address: '洞爺湖町香川9-4',
      note: '10 月 9:00–18:00',
    },
    {
      name: 'とうや水の駅',
      mapcode: '321 820 281*88',
      mapcodeSource: 'WNR マップコード PDF（未找到其他來源可核對）',
      phone: '0142-89-3108',
      address: '洞爺湖町洞爺町100',
      note: '10 月 9:00–17:00',
    },
    {
      name: '浮見堂',
      mapcode: '321 789 318*11',
      mapcodeSource: 'WNR マップコード PDF（Mapion 浮見堂公園トイレ為 321 789 308*11）',
      address: '洞爺湖町洞爺町',
      note: '湖畔小堂，車停湖邊',
    },
  ],
}

export const days: Day[] = [
  {
    date: '2026-10-25',
    label: '10/25',
    weekday: '日',
    route: '函館空港 → 大沼公園 → 洞爺湖温泉',
    sections: [
      {
        title: '函館空港周邊',
        spots: [
          {
            name: 'ワールドネットレンタカー 函館空港営業所',
            mapcode: '86 081 400*67',
            mapcodeSource: 'ワールドネットレンタカー 函館空港営業所案內（使用者 Google Maps 筆記；Mapion 為 86 081 370*42）',
            phone: '0138-59-6811',
            address: '函館市高松町220-1',
            note: '取車',
          },
          {
            name: '函館市民の森 駐車場',
            mapcode: '86 143 169*75',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08002/01202/ILSP0060315717_ipclm/',
            phone: '0138-59-4472',
            address: '函館市上湯川町327-1',
            note: '一般車 200 日圓',
            walk: [
              { name: 'トラピスチヌ修道院', note: '步行 4 分；日本第一座女子修道院，8:30–16:30' },
              { name: '売店 WOODS', note: '咖啡霜淇淋' },
            ],
          },
          {
            name: '函館市熱帯植物園',
            mapcode: '86 080 515*58',
            mapcodeSource: 'WNR マップコード PDF',
            note: '溫泉猴',
          },
          {
            name: '湯の川温泉足湯 湯巡り舞台',
            mapcode: '86 109 231*52',
            mapcodeSource: 'WNR マップコード PDF',
            note: '免費，9:00–21:00；水溫偏燙，帶小毛巾',
          },
        ],
      },
      {
        title: '函館市區北側',
        note: '時間寬裕才去',
        spots: [
          {
            name: '函館 蔦屋書店',
            mapcode: '86 283 351*57',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02030/01202/ILSP0057256484_ipclm/',
            phone: '0138-47-2600',
            address: '函館市石川町85-1',
            note: '雨天備案；9:00–22:00，免費停車',
          },
          {
            name: '北海道東照宮',
            mapcode: '86 319 319*55',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M06005/01202/20130138266/',
            phone: '0138-32-2221',
            address: '函館市陣川町82-153',
            note: '北海道唯一的東照宮；コナン聖地',
          },
          {
            name: 'GRANDIR ICHII',
            mapcode: '86 226 281*61',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02021/01202/ILSP0085682636_ipclm/ （館內ココカラファイン）',
            address: '函館市美原1-3-1',
            note: 'トライアル、サイゼリヤ；BF 9:00–22:00、1F・2F 10:00–20:00',
          },
        ],
      },
      {
        title: '北斗市',
        spots: [
          {
            name: 'トラピスト修道院',
            mapcode: '951 248 501*35',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M10018/01236/20130330954/',
            phone: '0138-75-2108',
            address: '北斗市三ツ石392',
            note: '林蔭道、奶油霜淇淋；賣店 8:30–16:30；女性不能進修道院內',
          },
          {
            name: '新函館北斗駅',
            mapcode: '86 543 132*36',
            mapcodeSource: 'WNR マップコード PDF',
            note: '北海道新幹線車站',
          },
        ],
      },
      {
        title: '七飯・大沼',
        spots: [
          {
            name: '道の駅 なないろ・ななえ',
            mapcode: '86 604 729*52',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08003/01337/ILSP0060729305_ipclm/',
            phone: '0138-86-5195',
            address: '七飯町峠下380-2',
            note: 'ガラナソフト、山川牛コロッケ；9:00–18:00',
          },
          {
            name: '久保田牧場チーズ研究所 ミルクパーラー',
            mapcode: '86 852 164*07',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01029/01337/20130332055/',
            phone: '0138-67-2560',
            address: '七飯町軍川527-2',
            note: '義式冰淇淋、自製起司；10:00–16:00',
          },
          {
            name: '山川牧場ミルクプラント',
            mapcode: '86 786 324*64',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02014/01337/20130332308/',
            phone: '0138-67-2114',
            address: '七飯町大沼町628',
            note: '週四休',
          },
          {
            name: '大沼国定公園',
            mapcode: '86 816 665*28',
            mapcodeSource: 'WNR マップコード PDF（Mapion 的公園點位是 86 815 836*45，兩者不同）',
            phone: '0138-67-2170',
            address: '七飯町大沼町',
            note: '免費停大沼公園南駐車場（110 台）；付費的ユーカラパーキング 500 日圓',
            walk: [
              { name: '大沼国際交流プラザ', note: '大沼公園駅旁觀光案內所' },
              { name: '大沼公園広場', note: '湖畔散步起點' },
            ],
          },
        ],
      },
      toyakoOnsen,
    ],
  },
  {
    date: '2026-10-26',
    label: '10/26',
    weekday: '一',
    route: '洞爺湖周邊',
    sections: [
      toyakoOnsen,
      {
        title: '西山・有珠山・昭和新山',
        spots: [
          {
            name: '西山山麓火口散策路',
            mapcode: '321 486 122*81',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08015/01584/L0384239/ （散策路上的點，非停車場）',
            phone: '0142-75-4400',
            address: '洞爺湖町泉',
            note: '有南北兩個免費停車場；11 月初起封閉',
          },
          {
            name: '有珠山ロープウェイ',
            mapcode: '321 433 350*55',
            mapcodeSource: 'WNR マップコード PDF（Mapion 為 321 433 351*52）',
            phone: '0142-75-2401',
            address: '壮瞥町昭和新山184-5',
            note: '山頂可看昭和新山與洞爺湖',
          },
        ],
      },
      toyakoWestNorth,
    ],
  },
  {
    date: '2026-10-27',
    label: '10/27',
    weekday: '二',
    route: '洞爺湖 → 札幌',
    sections: [
      { ...toyakoWestNorth, note: '往札幌順路' },
      {
        title: '京極・真狩・留寿都',
        note: '走國道 230 號中山峠才順路',
        spots: [
          {
            name: '道の駅 名水の郷きょうごく',
            mapcode: '385 674 718*54',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08003/01399/ILSP0000034701_ipclm/',
            phone: '0136-42-2292',
            address: '京極町川西45-1',
            note: '道の駅免費停車；餐廳週三休',
            walk: [{ name: 'ふきだし公園', note: '與道の駅相連，羊蹄山湧水' }],
          },
          {
            name: '羊蹄山の湧き水',
            mapcode: '385 393 656*85',
            mapcodeSource: 'WNR マップコード PDF',
            address: '真狩村社215',
            note: '可取羊蹄山湧水',
            walk: [{ name: '湧水の里 真狩豆腐工房', note: '隔壁（社217-1）；用湧水做的豆腐' }],
          },
          {
            name: '羊蹄山自然公園',
            mapcode: '385 424 369*74',
            mapcodeSource: 'WNR マップコード PDF（Mapion 為 385 424 680*60）',
            address: '真狩村',
            note: '羊蹄山麓公園',
          },
          {
            name: 'ルスツリゾート',
            mapcode: '385 288 668*33',
            mapcodeSource: 'WNR マップコード PDF（Mapion 遊園地為 385 288 335*06）',
            phone: '0136-46-3331',
            address: '留寿都村泉川13',
            note: '遊樂園度假村；10 月下旬營業與否待確認',
          },
        ],
      },
      {
        title: '中山峠・定山渓',
        note: '路面結冰或下雪時改走高速',
        spots: [
          {
            name: '道の駅 望羊中山',
            mapcode: '759 672 363*58',
            mapcodeSource: 'WNR マップコード PDF（Mapion 為 759 672 362*17）',
            phone: '0136-33-2671',
            address: '喜茂別町川上345',
            note: 'あげいも',
          },
          {
            name: '豊平峡ダム',
            mapcode: '708 573 504*41',
            mapcodeSource: 'WNR マップコード PDF（Mapion 為 708 573 622*24）',
            phone: '011-598-3452',
            address: '札幌市南区定山渓',
            note: '車停冷水駐車場，轉搭電氣巴士',
          },
          {
            name: '定山渓ダム駐車場',
            mapcode: '708 814 577*03',
            mapcodeSource: 'WNR マップコード PDF（Mapion 水壩點位為 708 814 769*74）',
            address: '札幌市南区定山渓',
            note: '水壩下游公園',
          },
          {
            name: '定山渓温泉 日帰り専用駐車場',
            mapcode: '708 754 327*44',
            mapcodeSource: 'WNR マップコード PDF',
            address: '札幌市南区定山渓温泉',
            note: '逛溫泉街用',
          },
        ],
      },
      {
        title: '札幌還車',
        spots: [
          {
            name: 'ワールドネットレンタカー 札幌駅営業所',
            mapcode: '9 553 553*11',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08001/01103/ILSP0059217407_ipclm/',
            phone: '011-788-7732',
            address: '札幌市東区北10条東3丁目2-45',
            note: '9:00–19:00；還車前先問指定加油站',
          },
        ],
      },
      { ...noboribetsuStation, note: '備用' },
      { ...noboribetsuOnsen, note: '備用' },
    ],
  },
  {
    date: '2026-10-31',
    label: '10/31',
    weekday: '六',
    route: '苫小牧 → 白老 → 登別',
    sections: [
      {
        title: '苫小牧',
        spots: [
          {
            name: 'トヨタレンタカー 苫小牧駅南口店',
            mapcode: '113 192 221*00',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08001/01213/ILSP0000287521_ipclm/',
            phone: '0144-36-0100',
            address: '苫小牧市表町5-2-9',
            note: '9:30 取車／19:00 還車',
          },
          {
            name: '三星 本店',
            mapcode: '113 093 364*01',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M26032/01213/20130258880/ （同地址的本社工場）',
            phone: '0144-74-5221',
            address: '苫小牧市糸井141',
            note: 'よいとまけ',
          },
          {
            name: 'ドーミーイン苫小牧',
            mapcode: '113 162 671*45',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M05002/01213/ILSP0000102134_ipclm/',
            phone: '0144-32-5489',
            address: '苫小牧市錦町2-1-22',
            note: '自有停車場 32 台，先到先停',
          },
        ],
      },
      {
        title: '白老',
        spots: [
          {
            name: 'ウポポイ（民族共生象徴空間）',
            mapcode: '545 194 852',
            mapcodeSource: 'https://ainu-upopoy.go.jp/access/',
            phone: '0144-82-3914',
            address: '白老町若草町2-3',
            note: '第 1 停車場 246 台，每次 500 日圓',
          },
          {
            name: '白老牛の店いわさき おもてなし亭',
            mapcode: '545 226 501*18',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M04101/01578/0000SOGI_001pa/',
            phone: '0144-82-5093',
            address: '白老町社台271-44',
            note: '白老牛牛排、燒肉',
          },
          {
            name: 'ミナピエノ',
            mapcode: null,
            phone: '0144-85-5500',
            address: '白老町川沿1-568-3',
            note: 'Retty 列平日與假日 10:00–17:00，週六是否營業待確認',
          },
        ],
      },
      {
        title: '虎杖浜・竹浦',
        spots: [
          {
            name: '北のランプ亭',
            mapcode: '603 209 631*35',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01018/01578/GJ003895003-001/',
            phone: '0144-87-6777',
            address: '白老町竹浦116-13',
            note: '海鮮燒烤',
          },
          {
            name: 'はしもと陶芸館',
            mapcode: '603 209 721*02',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02013/01578/20130858437/',
            phone: '0144-87-4975',
            address: '白老町竹浦118-31',
            note: '陶器展示與販售',
          },
          {
            name: 'かに王',
            mapcode: '603 239 045*13',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01018/01578/GJ003958204-001/',
            phone: '0144-87-4575',
            address: '白老町竹浦113-13',
            note: '螃蟹店；電話待確認',
          },
          {
            name: '三吉丸 かに直売店',
            mapcode: '603 142 504*14',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02014/01578/20130391115/',
            phone: '0144-87-3999',
            address: '白老町虎杖浜354-4',
            note: '預訂取貨 9:30–11:30、14:00–15:30',
          },
          {
            name: '花の湯温泉',
            mapcode: '603 176 384*08',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M09028/01578/20130391119/',
            phone: '0144-87-4035',
            address: '白老町虎杖浜40-2',
            note: 'ゆジェラート在溫泉腹地內',
          },
        ],
      },
      noboribetsuStation,
      noboribetsuOnsen,
    ],
  },
]
