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
renderSchedule();
renderNotes();
