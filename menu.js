// ALL MENU CONTENT LIVES HERE. Edit names, descriptions (d) and prices (p, kwacha) only.
const PAGES = [
{ head: true, cols: [
 [
  { t: "STARTERS", items: [
   { n: "Greek Salads", p: 70, d: "Fresh lettuce, tomatoes, onions, cucumber, feta cheese and olives." },
   { n: "Skewed Wings", p: 150, d: "4 lemon and herb wings on bamboo served with chips." },
   { n: "Hungarian Sausage", p: 100, d: "Prepared to your liking served with our B Hive accomplishments." } ] },
  { t: "MAIN SELECTIONS", items: [
   { n: "B-Hive Big Bream Fish", p: 300, d: "Foiled: stuffed with tomatoes, onion, chillies and marinated in B-Hive special spices. Fried: marinated with lemon and special B-Hive spices. Charcoal Grilled: flavoured with lemon, B-Hive spices." },
   { n: "T-Bone (500g)", p: 250, d: "Tenderly marinated and garlic flavoured served with nshima/chips." } ] }
 ],
 [
  { note: "All light meals and snacks are served with French fries and side salad", items: [
   { n: "Pork Chops", p: 200, d: "Sweet/savory marinated and served with chips or nshima." },
   { n: "BBQ Chicken", p: 150, d: "Marinated 1/4 chicken prepared to your liking served with chips." },
   { n: "Southern Chicken Pieces", p: 150, d: "Two chicken pieces nicely marinated and coated in special butter and bread crumbs served with potato wedges." },
   { n: "Chicken Gizzards", p: 120, d: "Two chicken pieces nicely marinated and coated in special butter and bread crumbs served with potato wedges." },
   { n: "Spare Ribs", p: 220, d: "Succulent pork prepared in sweet marinate sauce served with chips." },
   { n: "Chicken Schnitzel", p: 150, d: "Chicken breast seasoned and coated, served with chips and a side salad." } ] }
 ] ] },
{ cols: [
 [
  { items: [ { n: "B-Hive Chicken", p: 600, d: "Natural bred village chicken, potatoes and carrots with fresh chillies." } ] },
  { note: "All stews are served with nshima, rice, or boiled potatoes with seasonal veggies.", items: [] },
  { t: "B-HIVE PLATTER", items: [
   { n: "Platter for 2", p: 350, d: "2 short ribs, 2 wings, 3 chic nuggets, potato wedges and salads." },
   { n: "Platter for 4", p: 650, d: "4 wings, 4 short ribs, nuggets, potato wedges and green salads." },
   { n: "Chicken Espatada", p: 150, d: "Tender chicken breast well seasoned, served with chips." },
   { n: "Vimbombo", p: 100, d: "Beef trotters naturally prepared with enhanced flavour." },
   { n: "Nshima with Eggs", p: 60, d: "Cooked to the desire of the client; boiled, fried or scrambled." },
   { n: "Nshima Set", p: 50, d: "Prepared in tomato, onion gravy to the desire of the client." } ] }
 ],
 [
  { items: [
   { n: "Village Chicken", p: 150, d: "Prepared in traditional style." },
   { n: "Guinea Fowl", p: 150, d: "Prepared in traditional style." } ] },
  { t: "GOAT MENU", items: [
   { n: "Foiled Goat with Vegetables", p: 150 }, { n: "Foiled Goat with Potatoes", p: 150 },
   { n: "Foiled Goat with Okra", p: 150 }, { n: "Goat Soup", p: 150 }, { n: "Grilled Goat", p: 150 },
   { n: "Goat Offals", p: 150 }, { n: "Goat Head", p: 150 }, { n: "Goat Stew", p: 150 } ] },
  { t: "WRAPS", items: [ { n: "Chicken Tortilla", p: 120 }, { n: "Vegetable", p: 100 } ] },
  { t: "B-HIVE EXTRAS", items: [ { n: "Plain Nshima", p: 30 }, { n: "Plain Chips", p: 30 }, { n: "Plain Rice", p: 30 } ] },
  { t: "STEWS", items: [
   { n: "Beef Stew", p: 120 }, { n: "Chicken Stew", p: 150 }, { n: "Beef Sausage", p: 150 }, { n: "Vinkubala", p: 70 } ] }
 ] ] }
];

function h(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
function item(i) {
  const d = h("div", "item"), r = h("div", "row");
  r.append(h("span", "name", i.n));
  if (i.p != null) r.append(h("span", "dots"), h("span", "price", "K" + i.p));
  d.append(r);
  if (i.d) d.append(h("p", "desc", i.d));
  return d;
}
function section(s) {
  const e = h("section");
  if (s.t) e.append(h("h2", null, s.t));
  if (s.note) e.append(h("p", "note", s.note));
  s.items.forEach(i => e.append(item(i)));
  return e;
}
const root = document.getElementById("menu");
PAGES.forEach(p => {
  const pg = h("article", "page");
  if (p.head) {
    const hd = h("header", "head");
    const lc = h("div", "logo-crop"), im = h("img");
    im.src = "img/bhive_logo.jpeg"; im.alt = "Bhive"; lc.append(im);
    hd.append(lc, h("span", "title", "MENU"));
    pg.append(hd);
  }
  const cols = h("div", "cols");
  p.cols.forEach(c => { const col = h("div"); c.forEach(s => col.append(section(s))); cols.append(col); });
  pg.append(cols, h("p", "foot", "Prices in Kwacha (K) • Bhive"));
  root.append(pg);
});
