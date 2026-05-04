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

const reasons = [
  {
    title: "上海は初回の中国旅行として正解率が高い",
    text: "短時間フライトで行けて、都市インフラ、決済、物流、巨大商業圏のスケールを一気に理解できます。",
  },
  {
    title: "広げすぎると旅が移動に食われる",
    text: "北京や深圳まで足すと面白い反面、ホテル移動と長距離移動が増え、体調面のブレに弱くなります。",
  },
  {
    title: "江南圏だけでも中国の厚みは十分見える",
    text: "上海、杭州、蘇州だけで、現代性、文化の厚み、富の蓄積、交通の成熟までしっかり拾えます。",
  },
];

const routeStops = [
  { label: "上海", stay: "Day 1-4", x: 120, y: 170, color: "#a93f25" },
  { label: "杭州", stay: "Day 5-6", x: 340, y: 230, color: "#0f5963" },
  { label: "蘇州", stay: "Day 7", x: 560, y: 92, color: "#456543" },
  { label: "上海", stay: "Day 8-10", x: 710, y: 170, color: "#a93f25" },
];

const routeLegs = [
  { from: 0, to: 1, order: 1, time: "高鉄 約1h", title: "上海 → 杭州" },
  { from: 1, to: 2, order: 2, time: "高鉄 約1.5-2h", title: "杭州 → 蘇州" },
  { from: 2, to: 3, order: 3, time: "高鉄 約30-40m", title: "蘇州 → 上海" },
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

const impressions = [
  {
    title: "上海で残るもの",
    text: "世界都市として競争している圧力、速度、視界の広さ。初回のインパクトはここが最大です。",
  },
  {
    title: "杭州で残るもの",
    text: "豊かな上位都市の落ち着き。観光地だけではない、生活と新しさの両立が見えます。",
  },
  {
    title: "蘇州で残るもの",
    text: "歴史のある土地が、今も経済圏として強いまま残っている感覚。古いだけで終わりません。",
  },
];

const references = [
  {
    city: "上海",
    icon: "skyline",
    image: "./images/shanghai.jpg",
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
    image: "./images/hangzhou.jpg",
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
    image: "./images/suzhou.jpg",
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

function renderReasons() {
  renderCollection(
    "reasons",
    reasons.map((item) => ({ ...item, icon: "logic" })),
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
        <h3>${item.day}</h3>
      </div>
      <div class="schedule-meta">
        <span>${item.city}</span>
        <span>${item.pace}</span>
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
      <div class="reference-visual" style="background-image:url('${item.image}')">
        <div class="reference-visual-copy">
          <span class="mini-label">${item.label}</span>
          <h3>${item.city}</h3>
          <p>${item.text}</p>
        </div>
      </div>
      <div class="reference-body">
        <div class="reference-card-head">
          <span class="icon-chip" aria-hidden="true">${iconSvg(item.icon)}</span>
          <strong>${item.city}を理解するための入口</strong>
        </div>
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

function renderHighlights() {
  renderCollection(
    "highlight-grid",
    highlights,
    (item) => `
      <div class="highlight-visual" style="background-image:url('${item.image}')">
        <div class="highlight-copy">
          <span class="mini-label">この都市で見るべきもの</span>
          <h3>${item.city}</h3>
          <p>${item.text}</p>
          <div class="highlight-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
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

function renderImpressions() {
  renderCollection(
    "impressions",
    impressions.map((item) => ({ ...item, icon: "spark" })),
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
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 820 320");

  const backdrop = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  backdrop.setAttribute("x", "10");
  backdrop.setAttribute("y", "14");
  backdrop.setAttribute("width", "800");
  backdrop.setAttribute("height", "290");
  backdrop.setAttribute("rx", "24");
  backdrop.setAttribute("fill", "#f8f2e9");
  backdrop.setAttribute("stroke", "rgba(23,20,17,0.08)");
  svg.appendChild(backdrop);

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
  });

  container.appendChild(svg);
}

renderSummary();
renderReasons();
renderDiagram();
renderLegend();
renderHighlights();
renderReferences();
renderSchedule();
renderNotes();
renderImpressions();
