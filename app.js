const summary = [
  {
    label: "移動負荷",
    title: "飛行機は日本-上海の往復だけ",
    text: "中国国内を高鉄中心にして、長時間フライトを増やさない構成にしています。",
  },
  {
    label: "都市体験",
    title: "都市の圧は上海で最も濃く取る",
    text: "高層群、地下鉄、商業、夜景、金融街まで、中国の発展感を一番効率よく体感できます。",
  },
  {
    label: "余白",
    title: "後半で立て直せる",
    text: "上海に戻る日を作ることで、途中で疲れても旅程を壊さず調整できます。",
  },
  {
    label: "変化",
    title: "杭州と蘇州で質感を変える",
    text: "現代都市、湖畔都市、江南の古都を一つの旅で比較でき、単調になりません。",
  },
];

const overviewFocus = [
  {
    title: "上海で発展の正面を見る",
    text: "高層群、地下鉄、物流、商業圏の密度を最初に受けるので、中国の規模感を短時間で把握しやすいです。",
  },
  {
    title: "杭州で上位都市の余裕を見る",
    text: "湖畔だけでなく、新しい商業や街の落ち着きまで触れると、豊かな大都市圏の別の表情が見えます。",
  },
  {
    title: "蘇州で歴史が今につながる感覚を取る",
    text: "庭園都市として消費するだけでなく、旧市街と経済圏の厚みを並べて見ると、江南の強さが残ります。",
  },
];

const routeStops = [
  { label: "上海", note: "スタート", stay: "Day 1-4", x: 180, y: 92, color: "#a93f25" },
  { label: "杭州", note: "高鉄で南へ", stay: "Day 5-6", x: 620, y: 92, color: "#0f5963" },
  { label: "蘇州", note: "江南を北上", stay: "Day 7", x: 620, y: 228, color: "#456543" },
  { label: "上海", note: "戻って深掘り", stay: "Day 8-10", x: 180, y: 228, color: "#a93f25" },
];

const routeLegs = [
  { from: 0, to: 1, order: 1, time: "高鉄 約1時間", title: "上海 → 杭州" },
  { from: 1, to: 2, order: 2, time: "高鉄 約1.5-2時間", title: "杭州 → 蘇州" },
  { from: 2, to: 3, order: 3, time: "高鉄 約30-40分", title: "蘇州 → 上海" },
];

const schedule = [
  {
    day: "Day 1",
    city: "上海",
    pace: "軽め",
    text: "到着日。ホテル周辺、外灘、南京東路だけに絞って、中国の都市密度に身体を慣らす日。",
  },
  {
    day: "Day 2",
    city: "上海",
    pace: "中",
    text: "陸家嘴、浦東、美術館や大型商業施設。高層群とインフラの規模感を正面から取る日。",
  },
  {
    day: "Day 3",
    city: "上海",
    pace: "中",
    text: "静安、徐匯、西岸などを回して、金融街だけではない現代都市の厚みを見る日。",
  },
  {
    day: "Day 4",
    city: "上海",
    pace: "調整",
    text: "豫園、租界エリア、カフェや書店などで余白を作る日。疲れたら完全に軽くして良い日です。",
  },
  {
    day: "Day 5",
    city: "杭州",
    pace: "移動込みで中",
    text: "午前に高鉄で杭州へ。午後は西湖周辺を歩き、上海と違う上位都市の空気感をつかむ日。",
  },
  {
    day: "Day 6",
    city: "杭州",
    pace: "中",
    text: "茶畑、運河、現代建築、商業施設。観光地だけではない都市の地力を見る日。",
  },
  {
    day: "Day 7",
    city: "蘇州",
    pace: "やや軽め",
    text: "蘇州へ移動。庭園や旧市街に寄せつつ、江南圏全体の富の蓄積と静かな強さを感じる日。",
  },
  {
    day: "Day 8",
    city: "上海",
    pace: "軽め",
    text: "上海へ戻る。好きだった地区の再訪か、大型書店やモール中心でゆるく過ごす再調整日。",
  },
  {
    day: "Day 9",
    city: "上海",
    pace: "自由",
    text: "予備日。M50、浦東美術館、静安寺周辺など、体調と気分に合わせて最後の深掘りをする日。",
  },
  {
    day: "Day 10",
    city: "上海",
    pace: "帰国日",
    text: "空港アクセス優先。移動を読みやすくして、最後は余裕を持って日本へ戻る日。",
  },
];

const notes = [
  {
    title: "ホテルは交通の良さを優先",
    text: "初回は静安、人民広場、外灘寄りなど、地下鉄導線が分かりやすい場所を優先すると楽です。",
  },
  {
    title: "支払いと通信は出発前に整える",
    text: "WeChat、Alipay、eSIM を先に準備すると、現地の認知負荷がかなり下がります。",
  },
  {
    title: "昼便と予備日を使う",
    text: "フライトは昼寄り、後半は余白あり。この組み方が体調面の保険になります。",
  },
];

const weatherNotes = [
  {
    title: "5月上旬の服装感",
    text: "日中は軽めでも動けますが、朝晩と屋内冷房で冷えることがあります。半袖だけで押し切るより、薄手の長袖か羽織りを1枚持つ方が安全です。",
    icon: "pace",
  },
  {
    title: "杭州・蘇州は雨の保険を持つ",
    text: "5月は雨が増える時期なので、折りたたみ傘や薄手の防水アウターがあると行動が止まりにくいです。歩き回る旅程なので、靴も濡れにくい方が楽です。",
    icon: "rest",
    links: [
      {
        title: "杭州の5月平均",
        note: "最高26.1℃ / 最低17.4℃ / 月降水量159mmの目安。",
        href: "https://en.climate-data.org/asia/china/zhejiang/hangzhou-2330/t/may-5/",
      },
      {
        title: "蘇州の5月平均",
        note: "最高25.2℃ / 最低17.6℃ / 月降水量148mmの目安。",
        href: "https://en.climate-data.org/asia/china/jiangsu/suzhou-2755/t/may-5/",
      },
    ],
  },
  {
    title: "服装の結論",
    text: "半袖だけで押し切るより、薄手の長袖、歩きやすい靴、折りたたみ傘で整える方が外しにくいです。屋内冷房と夜の移動で冷える前提で考えた方が楽です。",
    icon: "layers",
  },
];

const packingNotes = [
  {
    title: "海外旅行として追加で持つもの",
    text: "パスポート原本だけでなく、顔写真ページの控え、予備カード、少額現金、モバイルバッテリーは分散して持つと事故に強くなります。",
    icon: "wallet",
  },
  {
    title: "中国向けに外しにくいもの",
    text: "eSIM か通信バックアップ、変換プラグ、USB充電器、翻訳アプリ、常備薬。通信と決済が一度に止まると立て直しが重くなるので、充電手段は厚めに見た方がいいです。",
    icon: "wifi",
  },
  {
    title: "体調面の保険",
    text: "水、塩分タブレット、軽食、酔い止め、胃腸薬、睡眠を崩した時の自分の定番を最初から持つ方がいいです。現地で探すより早く、判断負荷も下がります。",
    icon: "phone",
  },
];

const helpNotes = [
  {
    title: "まず使う番号",
    text: "中国国内の共通番号は 警察 110、消防 119、救急 120、交通事故 122 です。盗難や傷害はまず 110、その場で被害届の受理票「報案」を確保する流れが重要です。",
    icon: "move",
    links: [
      {
        title: "外務省: 中国の安全対策基礎データ",
        note: "被害時はすぐ 110 通報、報案の確保が重要と案内されています。",
        href: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_009.html",
      },
    ],
  },
  {
    title: "日本人として頼る先",
    text: "上海・杭州・蘇州の旅行なら、在上海日本国総領事館が管轄です。生命に関わる緊急事態は、代表電話 021-5257-4766 から夜間・休日でも内線 0 で緊急連絡事務所につながります。",
    icon: "phone",
    links: [
      {
        title: "在上海日本国総領事館案内",
        note: "所在地、代表電話、夜間・休日の緊急連絡導線。",
        href: "https://www.shanghai.cn.emb-japan.go.jp/itpr_ja/annai_j.html",
      },
      {
        title: "総領事館の緊急連絡先一覧",
        note: "上海・江蘇・浙江が在上海総領事館の管轄と分かります。",
        href: "https://www.shanghai.cn.emb-japan.go.jp/life/shilingguan.html",
      },
    ],
  },
  {
    title: "カードや旅券で詰まったら",
    text: "カードはまずアプリで利用停止、その後に海外サポートへ連絡。盗難なら警察へ届け出て報案を取り、旅券なら総領事館へ連絡します。出発前にカード会社の海外緊急連絡先をスクショしておくと強いです。",
    icon: "wallet",
    links: [
      {
        title: "外務省: たびレジ",
        note: "短期旅行者向け。安全情報配信と緊急時の安否確認に使えます。",
        href: "https://www.anzen.mofa.go.jp/anzen_campaign/index.html",
      },
      {
        title: "外務省: 海外旅行の安全情報",
        note: "出発前に見ておくべき入口。保険や事前準備もまとまっています。",
        href: "https://www.anzen.mofa.go.jp/trip/",
      },
    ],
  },
];

const weatherCities = [
  { name: "上海", latitude: 31.2304, longitude: 121.4737 },
  { name: "杭州", latitude: 30.2741, longitude: 120.1551 },
  { name: "蘇州", latitude: 31.2989, longitude: 120.5853 },
];

const travelTools = [
  {
    title: "高鉄の予約と駅の流れ",
    text: "上海-杭州-蘇州は高鉄に慣れればかなり楽です。まずは予約方法より、駅で何が起こるかを先に掴むほうが迷いません。",
    icon: "move",
    steps: [
      "予約は Trip.com か 12306 のどちらかに絞る",
      "駅では 手荷物検査 → 改札 → ホーム の順に進む",
      "初回は 出発の45〜60分前 に着く前提で考える",
    ],
    links: [
      {
        title: "まず読む: 日本語で高鉄の乗り方",
        note: "日本人向けに、予約から駅での流れまでを一通り追える記事。",
        href: "https://media.xsight.co.jp/article/1402/",
      },
      {
        title: "予約する: 12306公式",
        note: "公式で直接予約したいときの入口。英語表示あり。",
        href: "https://www.12306.cn/en/",
      },
    ],
  },
  {
    title: "Alipay を先に通す",
    text: "短期旅行なら、まずは Alipay を先に使える状態にするのが分かりやすいです。地下鉄や日常決済まで広く使いやすい側です。",
    icon: "wallet",
    steps: [
      "アプリ登録を済ませる",
      "国際カードを追加して本人確認まで終える",
      "現地では スキャン と 支払いコード表示 の両方を使う",
    ],
    links: [
      {
        title: "日本語案内: Alipay の始め方",
        note: "上海市の日本語ページ。対応カード、始め方、手数料まで必要な範囲に絞られています。",
        href: "https://japanese.shanghai.gov.cn/ja-FAQs-StudyinShanghai/20240329/4394828530e246839d8101f0121b1872.html",
      },
    ],
  },
  {
    title: "WeChat Pay は予備ではなく保険",
    text: "Alipay だけでも動ける場面は多いですが、店やミニプログラム次第で WeChat Pay が効く場面があります。両方登録しておくと止まりにくいです。",
    icon: "phone",
    steps: [
      "WeChat アカウントを先に作る",
      "カード登録と支払いコード表示まで確認する",
      "送金機能ではなく 旅行中の支払い用 と割り切る",
    ],
    links: [
      {
        title: "日本語ガイド: WeChat / Alipay の使い方",
        note: "日本人旅行者向けに、WeChat Pay と Alipay をまとめて確認できます。",
        href: "https://media.xsight.co.jp/article/1286",
      },
    ],
  },
  {
    title: "eSIM は対応確認だけ先に終える",
    text: "通信が入れば、配車、翻訳、予約確認まで全部立て直せます。事前に自分の端末が eSIM 対応かを見るだけでも十分価値があります。",
    icon: "wifi",
    steps: [
      "自分の iPhone が eSIM 対応か確認する",
      "開通は出発前日か当日に合わせる",
      "つながらない時の確認手順を1本だけ持っておく",
    ],
    links: [
      {
        title: "日本語公式: eSIM について",
        note: "Apple の日本語サポート。対応確認と基本設定の入口として十分です。",
        href: "https://support.apple.com/ja-jp/119606",
      },
      {
        title: "困った時: eSIM を設定できない場合",
        note: "つながらない時の確認項目だけを見たい場合はこちら。",
        href: "https://support.apple.com/ja-jp/102478",
      },
    ],
  },
];

const references = [
  {
    city: "上海",
    icon: "skyline",
    label: "超高層と旧租界",
    text: "超高層の圧と、法租界の歩きやすさが同居する都市。まずは広さ、その次に歩いたときのテンポを見ると理解しやすいです。",
    links: [
      {
        title: "公式ガイド: Meet in Shanghai",
        note: "観光、街歩き、展示、交通の入口として使いやすい。",
        href: "https://www.meet-in-shanghai.net/en/index.html",
      },
      {
        title: "体験記事: French Concession の歩き方",
        note: "樹木の多い旧租界を、半日でどう歩くかの雰囲気がつかみやすい。",
        href: "https://chinawondersguide.com/shanghai-french-concession-walking/",
      },
      {
        title: "動画導線: 上海4K歩行ツアーを探す",
        note: "外灘、浦東、法租界などの検索起点。街のテンポ確認向け。",
        href: "https://www.youtube.com/results?search_query=Shanghai+4K+walking+tour+Bund+Pudong+French+Concession",
      },
    ],
  },
  {
    city: "杭州",
    icon: "spark",
    label: "水辺と余白",
    text: "西湖だけだと像がぼやけやすいので、水辺の静けさと実際の散策導線を一緒に見ると雰囲気が入りやすいです。",
    links: [
      {
        title: "現地情報: AI Hangzhou の紹介",
        note: "外国人向けの現地サービス導線が分かる。今の受け入れ方を知るのに便利。",
        href: "https://en.hangzhou.com.cn/News/content/2024-12/09/content_8823620.html",
      },
      {
        title: "体験記事: West Lake Walking Route",
        note: "西湖をどう歩くと疲れにくいか、景色の切れ目と休み方が見える。",
        href: "https://ruqintravel.com/china-destination-guides/west-lake/",
      },
      {
        title: "動画導線: 杭州・西湖の歩行動画を探す",
        note: "水辺の静けさや人の密度を、文章より早くつかめます。",
        href: "https://www.youtube.com/results?search_query=Hangzhou+West+Lake+walking+tour+4k",
      },
    ],
  },
  {
    city: "蘇州",
    icon: "layers",
    label: "庭園と旧市街",
    text: "庭園都市として理解されがちですが、旧市街の水辺や夜の気配まで見ると、静けさだけではない厚みが分かります。",
    links: [
      {
        title: "公式入口: Explore Suzhou",
        note: "都市の見どころと観光の入口をざっと掴むのに向いています。",
        href: "https://english.suzhou.gov.cn/szsenglish/tssz/ExploreSuzhou.shtml",
      },
      {
        title: "体験記事: Suzhou Old Town",
        note: "旧市街の構造と、何を見ると蘇州らしさが分かるかを把握しやすい。",
        href: "https://www.travelchinaguide.com/cityguides/suzhou-old-town.htm",
      },
      {
        title: "動画導線: 蘇州旧市街・庭園の歩行動画を探す",
        note: "運河、夜景、庭園の空気感を事前にイメージしやすい。",
        href: "https://www.youtube.com/results?search_query=Suzhou+old+town+garden+walking+tour+4k",
      },
    ],
  },
];

const fashionTrends = [
  {
    title: "国潮（グオチャオ）と新中式（しんちゅうしき）",
    text: "いまの中国では、中国ブランドや中国らしい意匠を、普段着として今風に着る流れが広がっています。刺繍やボタン、襟元などに伝統要素を少し入れた服が中心で、旅行中にも取り入れやすい雰囲気です。",
    tags: ["中国ブランド", "新中式", "伝統要素×現代服"],
    image: {
      src: "https://video.cgtn.com/news/2024-04-14/1713076312231cVYnp0QX2S0l0M1713076319185.jpg",
      alt: "中国の新中式ファッションを紹介する映像のサムネイル",
      credit: "CGTN",
      href: "https://news.cgtn.com/news/2024-04-14/New-Chinese-style-Chinese-aesthetics-influence-the-fashion-industry-1sN9G1oijok/index.html",
    },
    links: [
      {
        title: "Xinhua: Gen Z と Guochao",
        note: "中国の若い消費者で国潮が強い流れを整理した記事。",
        href: "https://english.news.cn/20260331/793c0280a58a460d902b0838ce1ef5a4/c.html",
      },
      {
        title: "CGTN: Neo-Chinese の広がり",
        note: "新中式が流行語化している背景の整理。",
        href: "https://news.cgtn.com/news/2025-12-19/Design-in-China-The-cultural-renaissance-of-fashion-1JesO5wVpfy/p.html",
      },
    ],
  },
  {
    title: "ストリート寄りの服は淮海中路（わいかいちゅうろ）で見比べやすい",
    text: "オーバーサイズ、ユニセックス、スポーツ寄りの服を見るなら淮海中路が分かりやすいです。大きい路面店や旗艦店が多く、国内ブランドと海外ブランドの差も一度に見比べられます。",
    tags: ["ストリート", "ユニセックス", "旗艦店"],
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Huaihai%20Road%202279.JPG",
      alt: "上海の淮海路の街並み",
      credit: "J. Patrick Fischer / Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Huaihai_Road_2279.JPG",
    },
    links: [
      {
        title: "上海市: Middle Huaihai Road",
        note: "Masonprince など若い層を集めるブランド動向。",
        href: "https://english.shanghai.gov.cn/en-FirstStores/20240815/25cf12f551e547fbb1410bc4e26d9839.html",
      },
    ],
  },
  {
    title: "小物と独立系ショップも一緒に見る",
    text: "いまの若い層は、服一式よりも帽子、アクセサリー、バッグ、小物で雰囲気を整えることも多いです。独立系デザイナーの店やセレクトショップは、巨鹿路や富民路の周辺でまとめて見ると分かりやすいです。",
    tags: ["独立系", "小物", "デザイナーズ"],
    image: {
      src: "https://english.shanghai.gov.cn/en-CityTour/20250314/images/5c4ccf93f0fb4c08aeb35f572fe30428.jpg",
      alt: "巨鹿路のカフェとショップが並ぶ街並み",
      credit: "Jing'an district administration of culture and tourism",
      href: "https://english.shanghai.gov.cn/en-CityTour/20250314/9718ba40a4b6422db85f2dcb6cea7f2f.html",
    },
    links: [
      {
        title: "上海市: Jing'an の trendy stores",
        note: "Labelhood、Xifang などを含む回遊導線。",
        href: "https://english.shanghai.gov.cn/en-TrendyStores/20240313/95a2c50df38b4b148f0ddbb6ae16490f.html",
      },
    ],
  },
];

const fashionAreas = [
  {
    title: "淮海中路（わいかいちゅうろ）",
    text: "最初に歩くならここです。中国の若い層向けの話題店と大手旗艦店をまとめて見られます。いわゆる『今の上海っぽさ』を一番つかみやすい通りです。",
    tags: ["Masonprince", "Adidas", "Uniqlo", "旗艦店集中"],
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Huaihai%20Road%202292.jpg",
      alt: "上海の淮海路に並ぶ商業ビルと通り",
      credit: "J. Patrick Fischer / Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Huaihai_Road_2292.jpg",
    },
    places: [
      {
        name: "Middle Huaihai Road",
        address: "Middle Huaihai Road, Huangpu District, Shanghai",
        map: "https://www.google.com/maps/search/?api=1&query=Middle+Huaihai+Road+Huangpu+Shanghai",
      },
      {
        name: "Masonprince 旗艦店周辺",
        address: "Middle Huaihai Road, Huangpu District",
        map: "https://www.google.com/maps/search/?api=1&query=Masonprince+Middle+Huaihai+Road+Shanghai",
      },
    ],
    links: [
      {
        title: "Middle Huaihai Road",
        note: "若い客層を集める fashion frontier としての整理。",
        href: "https://english.shanghai.gov.cn/en-FirstStores/20240815/25cf12f551e547fbb1410bc4e26d9839.html",
      },
    ],
  },
  {
    title: "巨鹿路（きょろくろ）・富民路（ふみんろ）・長楽路（ちょうらくろ）",
    text: "独立系デザイナーや小さな店を回るならこの三本です。量販店よりも、店ごとの世界観やセレクトを見るエリアで、若い上海の感覚を知るにはかなり向いています。",
    tags: ["Labelhood", "Xifang", "Julu", "Fumin"],
    image: {
      src: "https://img.shine.cn/images/2025/03/14/4d00a195-f5b4-4c10-b8ca-eac6a0e35208_0.jpg",
      alt: "巨鹿路のショップとカフェの外観",
      credit: "Jing'an district administration of culture and tourism",
      href: "https://english.shanghai.gov.cn/en-CityTour/20250314/9718ba40a4b6422db85f2dcb6cea7f2f.html",
    },
    places: [
      {
        name: "Labelhood",
        address: "No 184 Fumin Road, Jing'an District",
        map: "https://www.google.com/maps/search/?api=1&query=184+Fumin+Road+Shanghai+Labelhood",
      },
      {
        name: "Xifang",
        address: "No 720 Changle Road, Jing'an District",
        map: "https://www.google.com/maps/search/?api=1&query=720+Changle+Road+Shanghai+Xifang",
      },
      {
        name: "Labelhood House",
        address: "No 796 Julu Road, Jing'an District",
        map: "https://www.google.com/maps/search/?api=1&query=796+Julu+Road+Shanghai+Labelhood+House",
      },
    ],
    links: [
      {
        title: "Jing'an city walk",
        note: "Labelhood、Xifang などの具体的な並びが分かる。",
        href: "https://english.shanghai.gov.cn/en-TrendyStores/20240313/95a2c50df38b4b148f0ddbb6ae16490f.html",
      },
    ],
  },
  {
    title: "延慶路（えんけいろ）・東湖路（とうころ）・Yan Qing Li",
    text: "服だけでなく、ライフスタイル寄りの店や雑貨も見たいならここです。並木道のある低層エリアで、路地を歩きながら小さな店を見つける楽しさがあります。",
    tags: ["Goodbai", "小規模店", "ライフスタイル", "徐匯"],
    image: {
      src: "https://english.shanghai.gov.cn/en-SpecialtyShoppingAreas/20251225/images/f439d8a73fbc4abf9dc130a6f0a48e2d.png",
      alt: "Yan Qing Li の路地と低層の建物",
      credit: "Shanghai Observer",
      href: "https://english.shanghai.gov.cn/en-SpecialtyShoppingAreas/20251225/41d4b4a69b9c4a9388293fc171463494.html",
    },
    places: [
      {
        name: "Yan Qing Li",
        address: "No 110 Yanqing Road, Xuhui District",
        map: "https://www.google.com/maps/search/?api=1&query=110+Yanqing+Road+Shanghai",
      },
      {
        name: "Goodbai Yanqing Road",
        address: "Yanqing Road area, Xuhui District",
        map: "https://www.google.com/maps/search/?api=1&query=Goodbai+Yanqing+Road+Shanghai",
      },
    ],
    links: [
      {
        title: "Yan Qing Li shopping area",
        note: "若い層向けの小さな店が集まる再開発エリア。",
        href: "https://english.shanghai.gov.cn/en-SpecialtyShoppingAreas/20251225/41d4b4a69b9c4a9388293fc171463494.html",
      },
    ],
  },
  {
    title: "永源路（えいげんろ） / Suhewan",
    text: "ポップアップ、初出店、イベント寄りの店を見るならここです。固定の名店を回るというより、その時点で話題になっている場所を見に行くエリアです。",
    tags: ["ポップアップ", "first stores", "Labelhood", "イベント寄り"],
    image: {
      src: "https://english.shanghai.gov.cn/en-ShoppingCenters/20231217/images/c509fc55de4c7597215644bf7dd8e91f.jpg",
      alt: "蘇州河沿いにある Suhewan MixC World の外観",
      credit: "CFP",
      href: "https://english.shanghai.gov.cn/en-ShoppingCenters/20231217/6ab9aec3b6974e369cd1e58765953f66.html",
    },
    places: [
      {
        name: "Yongyuan Road",
        address: "Yongyuan Road, near West Nanjing Road, Jing'an District",
        map: "https://www.google.com/maps/search/?api=1&query=Yongyuan+Road+Shanghai",
      },
      {
        name: "Suhe Haus / Suhewan",
        address: "Suhewan area, Jing'an District",
        map: "https://www.google.com/maps/search/?api=1&query=Suhewan+Shanghai+Suhe+Haus",
      },
      {
        name: "Peacebird Super Flagship",
        address: "Room A1-1, 1F, No 409 East Nanjing Road",
        map: "https://www.google.com/maps/search/?api=1&query=409+East+Nanjing+Road+Shanghai+Peacebird",
      },
    ],
    links: [
      {
        title: "Yongyuan Road",
        note: "first stores と pop-up が集まる新しい通り。",
        href: "https://english.shanghai.gov.cn/en-FirstStores/20260128/7272bffab0814ae6adf3cb19cf4f578a.html",
      },
      {
        title: "Labelhood at Suhewan",
        note: "中国の若いデザイナー文脈を見る入口。",
        href: "https://english.shanghai.gov.cn/en-LatestEvents/20251016/f7d8ad1fd3a3489c95372df6830ecde2.html",
      },
    ],
  },
];

const highlights = [
  {
    city: "上海",
    image: "./images/shanghai.jpg",
    text: "まずは中国の速度と規模を身体で理解する都市。高層群、金融街、租界の歩きやすさが全部入っています。",
    tags: ["外灘と浦東", "法租界", "巨大商業圏"],
  },
  {
    city: "杭州",
    image: "./images/hangzhou.jpg",
    text: "休息感があるのに、都市としての地力も高い場所。西湖の景色だけで終わらせないと印象が深くなります。",
    tags: ["西湖", "茶畑", "上位都市の落ち着き"],
  },
  {
    city: "蘇州",
    image: "./images/suzhou.jpg",
    text: "古い庭園都市ではなく、歴史と豊かさが今も繋がっている場所として見ると、旅の厚みが出ます。",
    tags: ["庭園", "旧市街", "江南の厚み"],
  },
];

const scenes = [
  {
    title: "上海の街路感",
    image: "./images/shanghai-french.jpg",
    text: "高層群だけでなく、法租界の並木道と低層の街路も上海の魅力です。",
  },
  {
    title: "杭州の茶畑",
    image: "./images/hangzhou-tea.jpg",
    text: "西湖の観光だけではなく、茶畑の地形と静けさで杭州らしさが深まります。",
  },
  {
    title: "蘇州の旧市街入口",
    image: "./images/suzhou-pingjiang.jpg",
    text: "庭園の内側だけでなく、旧市街へ入る導入部の空気も蘇州の体験です。",
  },
];

function iconSvg(name) {
  const icons = {
    move: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M15 7l5 5-5 5"/><circle cx="6.5" cy="12" r="2.5"/></svg>`,
    skyline: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M6 21V9h4v12"/><path d="M13 21V4h5v17"/><path d="M8 12h1"/><path d="M15 8h1"/><path d="M15 12h1"/></svg>`,
    rest: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15c1.5-2.5 3.5-4 7-4s5.5 1.5 7 4"/><path d="M4 15h16"/><path d="M7 10V8"/><path d="M17 10V8"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>`,
    logic: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 11l7-4"/><path d="M8.5 13l7 4"/></svg>`,
    pace: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v7l4 2"/><circle cx="12" cy="12" r="8"/></svg>`,
    plan: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16H6z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>`,
    wallet: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5z"/><path d="M4 8h14"/><path d="M15 13h5"/><circle cx="15.5" cy="13" r="1"/></svg>`,
    wifi: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 9.5a14 14 0 0 1 17 0"/><path d="M6.5 13a9 9 0 0 1 11 0"/><path d="M9.5 16.5a4.5 4.5 0 0 1 5 0"/><circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none"/></svg>`,
    spark: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>`,
  };
  return icons[name] || icons.plan;
}

function weatherCodeMeta(code, isDay = 1) {
  const palette = {
    clear: { label: isDay ? "快晴" : "晴れ", accent: "sunny" },
    cloudy: { label: "くもり", accent: "cloudy" },
    fog: { label: "霧", accent: "fog" },
    drizzle: { label: "霧雨", accent: "rain" },
    rain: { label: "雨", accent: "rain" },
    snow: { label: "雪", accent: "snow" },
    storm: { label: "雷雨", accent: "storm" },
  };

  if (code === 0) return palette.clear;
  if ([1, 2, 3].includes(code)) return palette.cloudy;
  if ([45, 48].includes(code)) return palette.fog;
  if ([51, 53, 55, 56, 57].includes(code)) return palette.drizzle;
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return palette.rain;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return palette.snow;
  if ([95, 96, 99].includes(code)) return palette.storm;
  return { label: "天候データあり", accent: "cloudy" };
}

function weatherIcon(code, isDay = 1) {
  if (code === 0 && isDay) return "☀";
  if (code === 0 && !isDay) return "☾";
  if ([1, 2].includes(code)) return "⛅";
  if ([3, 45, 48].includes(code)) return "☁";
  if ([51, 53, 55, 56, 57].includes(code)) return "🌦";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
  if ([95, 96, 99].includes(code)) return "⛈";
  return "☁";
}

function formatWeatherTimestamp(value) {
  if (typeof value !== "string") return "";
  return value.replace("T", " ").slice(5, 16);
}

function renderCollection(targetId, items, renderer, className) {
  const container = document.getElementById(targetId);
  items.forEach((item) => {
    const node = document.createElement("article");
    node.className = className;
    node.innerHTML = renderer(item);
    container.appendChild(node);
  });
}

function renderSummary() {
  renderCollection(
    "summary",
    summary.map((item, idx) => ({
      ...item,
      icon: ["move", "skyline", "rest", "layers"][idx],
    })),
    (item) => `
      <div class="metric-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
        <div>
          <span class="mini-label">${item.label}</span>
          <strong>${item.title}</strong>
        </div>
      </div>
      <p>${item.text}</p>
    `,
    "metric-card"
  );
}

function renderOverviewFocus() {
  renderCollection(
    "overview-focus",
    overviewFocus.map((item) => ({ ...item, icon: "logic" })),
    (item) => `
      <div class="stack-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
        <strong>${item.title}</strong>
      </div>
      <p>${item.text}</p>
    `,
    "stack-card"
  );
}

function renderTravelTools() {
  renderCollection(
    "travel-tools",
    travelTools,
    (item) => `
      <div class="reference-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
        <div>
          <strong>${item.title}</strong>
        </div>
      </div>
      <p>${item.text}</p>
      <ul class="tool-steps">
        ${item.steps.map((step) => `<li>${step}</li>`).join("")}
      </ul>
      <div class="reference-links">
        ${item.links
          .map(
            (link) => `
              <a href="${link.href}" target="_blank" rel="noreferrer noopener">
                <strong>${link.title}</strong>
                <span>${link.note}</span>
              </a>
            `
          )
          .join("")}
      </div>
    `,
    "tool-card"
  );
}

function renderSupportNotes(targetId, items) {
  renderCollection(
    targetId,
    items,
    (item) => `
      <div class="stack-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
        <strong>${item.title}</strong>
      </div>
      <p>${item.text}</p>
      ${
        item.links
          ? `
            <div class="support-links">
              ${item.links
                .map(
                  (link) => `
                    <a href="${link.href}" target="_blank" rel="noreferrer noopener">
                      <strong>${link.title}</strong>
                      <span>${link.note}</span>
                    </a>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
    `,
    "stack-card support-card"
  );
}

function renderLiveWeatherState(message) {
  const container = document.getElementById("live-weather");
  container.innerHTML = `<div class="weather-status-card">${message}</div>`;
}

function renderLiveWeatherCards(items) {
  const container = document.getElementById("live-weather");
  container.innerHTML = items
    .map((item) => {
      const meta = weatherCodeMeta(item.current.weather_code, item.current.is_day);
      return `
        <article class="weather-card weather-${meta.accent}">
          <div class="weather-card-head">
            <div class="weather-title-row">
              <h4>${item.name}</h4>
              <strong class="weather-inline-temp">${Math.round(item.current.temperature_2m)}°C</strong>
            </div>
            <span class="weather-icon" aria-hidden="true">${weatherIcon(item.current.weather_code, item.current.is_day)}</span>
          </div>
          <div class="weather-chip-row">
            <span class="weather-condition-badge">${meta.label}</span>
            <span class="weather-chip">体感 ${Math.round(item.current.apparent_temperature)}°C</span>
            <span class="weather-chip">風 ${Math.round(item.current.wind_speed_10m)} km/h</span>
            <span class="weather-chip">最高/最低 ${Math.round(item.daily.temperature_2m_max[0])} / ${Math.round(item.daily.temperature_2m_min[0])}°C</span>
            <span class="weather-chip">降水 ${item.daily.precipitation_probability_max[0] ?? 0}%</span>
          </div>
        </article>
      `;
    })
    .join("");
}

async function fetchCityWeather(city) {
  const params = new URLSearchParams({
    latitude: String(city.latitude),
    longitude: String(city.longitude),
    current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day",
    daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    forecast_days: "1",
    timezone: "Asia/Shanghai",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`weather fetch failed: ${city.name}`);
  }

  const data = await response.json();
  return {
    name: city.name,
    current: data.current,
    daily: data.daily,
  };
}

async function loadLiveWeather() {
  const button = document.getElementById("weather-refresh");
  const meta = document.getElementById("weather-meta");
  button.disabled = true;
  renderLiveWeatherState("最新の天気を読み込み中です。");

  try {
    const results = await Promise.all(weatherCities.map(fetchCityWeather));
    renderLiveWeatherCards(results);
    meta.textContent = `上海・杭州・蘇州の現在値を表示しています。最終更新: ${new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date())}`;
  } catch (error) {
    renderLiveWeatherState("天気の取得に失敗しました。時間をおいて更新してください。");
    meta.textContent = "リアルタイム取得に失敗した場合でも、下の気候感と持ち物の目安はそのまま使えます。";
  } finally {
    button.disabled = false;
  }
}

function renderLegend() {
  renderCollection(
    "route-legend",
    routeLegs,
    (item) => `<strong>${item.title}</strong><p>${item.time}</p>`,
    "legend-card"
  );
}

function renderSchedule() {
  renderCollection(
    "schedule-grid",
    schedule,
    (item) => `
      <div class="schedule-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg("plan")}</span>
        <div>
          <h3>${item.day}</h3>
          <div class="schedule-meta">
            <span>${item.city}</span>
            <span>${item.pace}</span>
          </div>
        </div>
      </div>
      <p>${item.text}</p>
    `,
    "schedule-card"
  );
}

function renderReferences() {
  renderCollection(
    "reference-grid",
    references,
    (item) => `
      <div class="reference-body">
        <div class="reference-card-head">
          <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
          <div>
            <span class="mini-label">${item.label}</span>
            <strong>${item.city}を理解するための入口</strong>
          </div>
        </div>
        <p>${item.text}</p>
        <div class="reference-links">
          ${item.links
            .map(
              (link) => `
                <a href="${link.href}" target="_blank" rel="noreferrer noopener">
                  <strong>${link.title}</strong>
                  <span>${link.note}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    `,
    "reference-card"
  );
}

function renderFashionGrid(targetId, items) {
  renderCollection(
    targetId,
    items,
    (item) => `
      ${
        item.image
          ? `
            <figure class="fashion-visual">
              <img src="${item.image.src}" alt="${item.image.alt}" loading="lazy" />
              <figcaption>
                <span>${item.image.alt}</span>
                <a href="${item.image.href}" target="_blank" rel="noreferrer noopener">${item.image.credit}</a>
              </figcaption>
            </figure>
          `
          : ""
      }
      <div class="reference-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg("spark")}</span>
        <strong>${item.title}</strong>
      </div>
      <p>${item.text}</p>
      <div class="fashion-tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      ${
        item.places
          ? `
            <div class="fashion-place-list">
              ${item.places
                .map(
                  (place) => `
                    <div class="fashion-place">
                      <strong>${place.name}</strong>
                      <span>${place.address}</span>
                      <a href="${place.map}" target="_blank" rel="noreferrer noopener">地図で開く</a>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      <div class="fashion-links">
        ${item.links
          .map(
            (link) => `
              <a href="${link.href}" target="_blank" rel="noreferrer noopener">
                <strong>${link.title}</strong>
                <span>${link.note}</span>
              </a>
            `
          )
          .join("")}
      </div>
    `,
    "fashion-card"
  );
}

function renderScenes() {
  renderCollection(
    "scene-grid",
    scenes,
    (item) => `
      <img src="${item.image}" alt="${item.title}" />
      <div class="scene-card-body">
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    `,
    "scene-card"
  );
}

function renderHighlights() {
  renderCollection(
    "highlight-grid",
    highlights,
    (item) => `
      <div class="highlight-visual" style="background-image:url('${item.image}')"></div>
      <div class="highlight-copy">
        <span class="mini-label">この都市で見るべきもの</span>
        <h3>${item.city}</h3>
        <p>${item.text}</p>
        <div class="highlight-tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `,
    "highlight-card"
  );
}

function renderNotes() {
  renderCollection(
    "notes-list",
    notes.map((item, idx) => ({ ...item, icon: ["move", "phone", "pace"][idx] })),
    (item) => `
      <div class="stack-card-head">
        <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
        <strong>${item.title}</strong>
      </div>
      <p>${item.text}</p>
    `,
    "stack-card"
  );
}

function renderDiagram() {
  const container = document.getElementById("route-diagram");
  container.textContent = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 820 320");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", "routeArrow");
  marker.setAttribute("markerWidth", "10");
  marker.setAttribute("markerHeight", "10");
  marker.setAttribute("refX", "8");
  marker.setAttribute("refY", "5");
  marker.setAttribute("orient", "auto");
  const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  arrowPath.setAttribute("d", "M0,0 L10,5 L0,10 z");
  arrowPath.setAttribute("fill", "#2f2924");
  marker.appendChild(arrowPath);
  defs.appendChild(marker);
  svg.appendChild(defs);

  const backdrop = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  backdrop.setAttribute("x", "10");
  backdrop.setAttribute("y", "14");
  backdrop.setAttribute("width", "800");
  backdrop.setAttribute("height", "290");
  backdrop.setAttribute("rx", "24");
  backdrop.setAttribute("fill", "#f8f2e9");
  backdrop.setAttribute("stroke", "rgba(23,20,17,0.08)");
  svg.appendChild(backdrop);

  const badge = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  badge.setAttribute("x", "34");
  badge.setAttribute("y", "34");
  badge.setAttribute("width", "148");
  badge.setAttribute("height", "30");
  badge.setAttribute("rx", "15");
  badge.setAttribute("fill", "rgba(15,89,99,0.08)");
  svg.appendChild(badge);

  const badgeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  badgeText.setAttribute("x", "108");
  badgeText.setAttribute("y", "54");
  badgeText.setAttribute("text-anchor", "middle");
  badgeText.setAttribute("font-size", "13");
  badgeText.setAttribute("font-weight", "700");
  badgeText.setAttribute("fill", "#0f5963");
  badgeText.textContent = "上海起点の周回ルート";
  svg.appendChild(badgeText);

  routeLegs.forEach((leg) => {
    const from = routeStops[leg.from];
    const to = routeStops[leg.to];

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#2f2924");
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("marker-end", "url(#routeArrow)");
    svg.appendChild(line);

    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;

    const orderBadge = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    orderBadge.setAttribute("cx", midX);
    orderBadge.setAttribute("cy", midY - 18);
    orderBadge.setAttribute("r", "16");
    orderBadge.setAttribute("fill", "#ffffff");
    orderBadge.setAttribute("stroke", "#2f2924");
    orderBadge.setAttribute("stroke-width", "2");
    svg.appendChild(orderBadge);

    const orderText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    orderText.setAttribute("x", midX);
    orderText.setAttribute("y", midY - 12);
    orderText.setAttribute("text-anchor", "middle");
    orderText.setAttribute("font-size", "14");
    orderText.setAttribute("font-weight", "700");
    orderText.textContent = String(leg.order);
    svg.appendChild(orderText);

    const timeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    timeText.setAttribute("x", midX);
    timeText.setAttribute("y", midY + 15);
    timeText.setAttribute("text-anchor", "middle");
    timeText.setAttribute("font-size", "13");
    timeText.setAttribute("fill", "#625a52");
    timeText.textContent = leg.time;
    svg.appendChild(timeText);
  });

  routeStops.forEach((stop) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", stop.x);
    circle.setAttribute("cy", stop.y);
    circle.setAttribute("r", "31");
    circle.setAttribute("fill", stop.color);
    svg.appendChild(circle);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", stop.x);
    label.setAttribute("y", stop.y + 6);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-size", "16");
    label.setAttribute("font-weight", "700");
    label.setAttribute("fill", "#ffffff");
    label.textContent = stop.label;
    svg.appendChild(label);

    const stay = document.createElementNS("http://www.w3.org/2000/svg", "text");
    stay.setAttribute("x", stop.x);
    stay.setAttribute("y", stop.y + 52);
    stay.setAttribute("text-anchor", "middle");
    stay.setAttribute("font-size", "12");
    stay.setAttribute("fill", "#625a52");
    stay.textContent = stop.stay;
    svg.appendChild(stay);

    const note = document.createElementNS("http://www.w3.org/2000/svg", "text");
    note.setAttribute("x", stop.x);
    note.setAttribute("y", stop.y - 46);
    note.setAttribute("text-anchor", "middle");
    note.setAttribute("font-size", "12");
    note.setAttribute("font-weight", "700");
    note.setAttribute("fill", stop.color);
    note.textContent = stop.note;
    svg.appendChild(note);
  });

  container.appendChild(svg);
}

renderSummary();
renderOverviewFocus();
renderDiagram();
renderLegend();
renderTravelTools();
renderHighlights();
renderScenes();
renderReferences();
renderFashionGrid("fashion-trend-grid", fashionTrends);
renderFashionGrid("fashion-area-grid", fashionAreas);
renderSchedule();
renderSupportNotes("weather-list", weatherNotes);
renderSupportNotes("packing-list", packingNotes);
renderSupportNotes("help-list", helpNotes);
renderNotes();
loadLiveWeather();

document.getElementById("weather-refresh")?.addEventListener("click", () => {
  loadLiveWeather();
});

window.setInterval(() => {
  loadLiveWeather();
}, 30 * 60 * 1000);
