const routeStops = [
  { name: "Shanghai", label: "上海", x: 110, y: 150, color: "#b5442a" },
  { name: "Nanjing", label: "南京", x: 300, y: 95, color: "#c79a2b" },
  { name: "Suzhou", label: "蘇州", x: 500, y: 95, color: "#1d5c63" },
  { name: "Hangzhou", label: "杭州", x: 500, y: 220, color: "#3f7d4c" },
  { name: "Shanghai Return", label: "上海", x: 690, y: 150, color: "#b5442a" },
];

const routeLegs = [
  { from: 0, to: 1, order: 1, time: "1.5h" },
  { from: 1, to: 2, order: 2, time: "1h" },
  { from: 2, to: 3, order: 3, time: "1.5h" },
  { from: 3, to: 4, order: 4, time: "1h" },
];

const schedule = [
  { day: "Day 1-4", text: "上海滞在。街の規模感、地下鉄、金融街、夜景をつかむ。" },
  { day: "Day 5-6", text: "杭州へ移動。西湖だけでなく、上位都市の空気感も見る。" },
  { day: "Day 7", text: "蘇州へ。旧市街と都市圏の豊かさを短く体験する。" },
  { day: "Day 8-10", text: "上海へ戻って予備日を確保。最終調整して帰国。" },
];

function renderDiagram() {
  const container = document.getElementById("route-diagram");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 800 300");

  routeLegs.forEach((leg) => {
    const from = routeStops[leg.from];
    const to = routeStops[leg.to];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#2b2722");
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    svg.appendChild(line);

    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;

    const badge = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    badge.setAttribute("cx", midX);
    badge.setAttribute("cy", midY - 16);
    badge.setAttribute("r", "16");
    badge.setAttribute("fill", "#fdf9f2");
    badge.setAttribute("stroke", "#2b2722");
    badge.setAttribute("stroke-width", "2");
    svg.appendChild(badge);

    const order = document.createElementNS("http://www.w3.org/2000/svg", "text");
    order.setAttribute("x", midX);
    order.setAttribute("y", midY - 11);
    order.setAttribute("text-anchor", "middle");
    order.setAttribute("font-size", "14");
    order.setAttribute("font-weight", "700");
    order.textContent = String(leg.order);
    svg.appendChild(order);

    const time = document.createElementNS("http://www.w3.org/2000/svg", "text");
    time.setAttribute("x", midX);
    time.setAttribute("y", midY + 12);
    time.setAttribute("text-anchor", "middle");
    time.setAttribute("font-size", "13");
    time.setAttribute("fill", "#6a6257");
    time.textContent = leg.time;
    svg.appendChild(time);
  });

  routeStops.forEach((stop) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    node.setAttribute("cx", stop.x);
    node.setAttribute("cy", stop.y);
    node.setAttribute("r", "28");
    node.setAttribute("fill", stop.color);
    svg.appendChild(node);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", stop.x);
    label.setAttribute("y", stop.y + 5);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-size", "15");
    label.setAttribute("font-weight", "700");
    label.setAttribute("fill", "#ffffff");
    label.textContent = stop.label;
    svg.appendChild(label);
  });

  container.appendChild(svg);
}

function renderSchedule() {
  const container = document.getElementById("schedule");
  schedule.forEach((item) => {
    const card = document.createElement("article");
    card.className = "schedule-card";
    card.innerHTML = `<h3>${item.day}</h3><p>${item.text}</p>`;
    container.appendChild(card);
  });
}

renderDiagram();
renderSchedule();
