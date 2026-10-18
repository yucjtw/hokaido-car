import type { Day } from './types'

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
            mapcode: '86 081 370*42',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08001/01202/ILSP0059217408_ipclm/',
            phone: '0138-59-6811',
            address: '函館市高松町220-1',
            note: '取車',
          },
          {
            name: 'タイムズ函館トラピスチヌ修道院前駐車場',
            mapcode: '86 143 297*67',
            mapcodeSource: 'Mapion（調查日 2026-10-18）',
            note: 'トラピスチヌ修道院沒有專用停車場，付費',
          },
          {
            name: 'トラピスチヌ修道院',
            mapcode: '86 144 184*45',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M06007/01202/ILSP0000661558_ipclm/',
            phone: '0138-57-2839',
            address: '函館市上湯川町346',
          },
          {
            name: '函館市民の森 駐車場',
            mapcode: '86 143 169*75',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08002/01202/ILSP0060315717_ipclm/',
            phone: '0138-57-8845',
            address: '函館市上湯川町327-1',
            note: '売店 WOODS 咖啡霜淇淋；到修道院步行 4 分',
          },
          {
            name: '函館市熱帯植物園',
            mapcode: '86 080 515*58',
            mapcodeSource: 'WNR マップコード PDF',
          },
          {
            name: '湯の川温泉足湯 湯巡り舞台',
            mapcode: '86 109 231*52',
            mapcodeSource: 'WNR マップコード PDF',
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
          },
          {
            name: '北海道東照宮',
            mapcode: '86 319 319*55',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M06005/01202/20130138266/',
            phone: '0138-32-2221',
            address: '函館市陣川町82-153',
          },
          {
            name: 'GRANDIR ICHII',
            mapcode: '86 226 281*61',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M02021/01202/ILSP0085682636_ipclm/ （館內ココカラファイン）',
            address: '函館市美原1-3-1',
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
          },
          {
            name: '新函館北斗駅',
            mapcode: '86 543 132*36',
            mapcodeSource: 'WNR マップコード PDF',
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
          },
          {
            name: '久保田牧場チーズ研究所 ミルクパーラー',
            mapcode: '86 852 164*07',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01029/01337/20130332055/',
            phone: '0138-67-2560',
            address: '七飯町軍川527-2',
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
          },
          {
            name: '大沼国際交流プラザ',
            mapcode: '86 815 356*86',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M06011/01337/20130332323/',
            phone: '0138-67-2170',
            address: '七飯町大沼町85-15',
            note: '大沼公園駅旁觀光案內所',
          },
        ],
      },
      {
        title: '鹿部',
        note: '繞路候選，多約 1–1.5 小時',
        spots: [
          {
            name: '道の駅 しかべ間歇泉公園',
            mapcode: '744 400 122*51',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M08003/01343/ILSP0058717779_ipclm/',
            phone: '01372-7-5655',
            address: '鹿部町鹿部18-1',
          },
        ],
      },
      {
        title: '洞爺湖温泉',
        spots: [
          {
            name: '洞爺湖畔亭',
            mapcode: '321 519 556*68',
            mapcodeSource: 'https://www.toya-kohantei.com/access/',
            phone: '0570-026-571',
            address: '洞爺湖町洞爺湖温泉7-8',
            note: '住ごきらく亭：先把車開到畔亭玄關',
          },
          {
            name: '洞爺湖越後屋',
            mapcode: '321 519 460*12',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M26017/01584/20130389279/',
            phone: '0142-75-2158',
            address: '洞爺湖町洞爺湖温泉71',
            note: '洞爺湖木刀',
          },
          {
            name: '洞爺湖ビジターセンター・火山科学館',
            mapcode: '321 518 337*76',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M04004/01584/ILSP0000084959_ipclm/',
            phone: '0142-75-2555',
            address: '洞爺湖町洞爺湖温泉142-5',
          },
          {
            name: 'ラーメン専門店 豊来軒',
            mapcode: '321 519 426*48',
            mapcodeSource: 'https://www.mapion.co.jp/phonebook/M01002/01584/G5489222-001/',
            phone: '0142-75-1066',
            address: '洞爺湖町洞爺湖温泉59-2',
          },
          {
            name: '食堂バル 金田一商店',
            mapcode: null,
            address: '洞爺湖町洞爺湖温泉1-22',
            note: '溫泉街內，步行前往',
          },
        ],
      },
    ],
  },
  {
    date: '2026-10-26',
    label: '10/26',
    weekday: '一',
    route: '洞爺湖周邊',
    sections: [],
  },
  {
    date: '2026-10-27',
    label: '10/27',
    weekday: '二',
    route: '洞爺湖 → 札幌',
    sections: [],
  },
  {
    date: '2026-10-31',
    label: '10/31',
    weekday: '六',
    route: '苫小牧 → 登別',
    sections: [],
  },
]
