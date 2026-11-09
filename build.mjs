// Static generator for the portfolio and its concept demo stores.
// Run: node portfolio/build.mjs   -> writes docs/ (served by GitHub Pages)
import { mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { stores } from "./stores.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "docs");
const me = JSON.parse(readFileSync(join(root, "site.config.json"), "utf8"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const money = (n) => "$" + n.toFixed(2);
const out = (path, body) => {
  const full = join(dist, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, body);
};

/* ---------- product illustrations (inline SVG, no image requests) ---------- */
const svgOpen = (label, extra = "") => `<svg viewBox="0 0 400 400" role="img" aria-label="${esc(label)}" ${extra}>`;

function artBeads([a, b, c], seed) {
  const p0 = [50, 90 + seed * 12], p1 = [200, 440 - seed * 30], p2 = [350, 90 + seed * 12];
  let dots = "";
  const n = 15 + seed * 2;
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    const x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0];
    const y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
    const r = 9 + ((i * 7 + seed * 3) % 4) * 3;
    const fill = [a, b, c][(i + seed) % 3];
    dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}" stroke="rgba(0,0,0,.18)"/><circle cx="${(x - r / 3).toFixed(1)}" cy="${(y - r / 3).toFixed(1)}" r="${(r / 4).toFixed(1)}" fill="rgba(255,255,255,.55)"/>`;
  }
  return `<rect width="400" height="400" fill="${c}" opacity=".35"/><path d="M${p0} Q${p1} ${p2}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2"/>${dots}`;
}

function artYarn([a, b, c], seed, id) {
  let strands = "";
  for (let i = 0; i < 16; i++) {
    const ang = (i * 23 + seed * 40) % 180;
    const off = ((i * 37) % 160) - 80;
    strands += `<path d="M40 ${200 + off} Q200 ${200 + off + (i % 2 ? 70 : -70)} 360 ${200 + off}" transform="rotate(${ang} 200 200)" fill="none" stroke="${i % 3 ? b : "rgba(0,0,0,.18)"}" stroke-width="${i % 3 ? 7 : 2}" stroke-linecap="round"/>`;
  }
  return `<rect width="400" height="400" fill="${c}"/><defs><clipPath id="${id}"><circle cx="200" cy="200" r="120"/></clipPath></defs><circle cx="200" cy="200" r="120" fill="${a}"/><g clip-path="url(#${id})">${strands}</g><circle cx="200" cy="200" r="120" fill="none" stroke="rgba(0,0,0,.2)" stroke-width="2"/><path d="M300 265 q50 40 20 80 t-60 20" fill="none" stroke="${a}" stroke-width="7" stroke-linecap="round"/>`;
}

function artQuilt([a, b, c], seed) {
  const cols = [a, b, c, "#ffffff"];
  let cells = "";
  const n = 4, s = 80, o = 40;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x = o + i * s, y = o + j * s;
    const k = (i * 3 + j * 5 + seed * 2) % 4;
    const c1 = cols[k], c2 = cols[(k + 1 + seed) % 4];
    const flip = (i + j + seed) % 2;
    cells += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${c1}"/>` +
      (flip ? `<path d="M${x} ${y}h${s}v${s}z" fill="${c2}"/>` : `<path d="M${x} ${y}v${s}h${s}z" fill="${c2}"/>`);
  }
  return `<rect width="400" height="400" fill="${c}" opacity=".45"/>${cells}<rect x="${o}" y="${o}" width="${n * s}" height="${n * s}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2" stroke-dasharray="6 5"/>`;
}

function artModel([a, b, c], seed) {
  const rot = [-18, 12, -40][seed % 3];
  let grid = "";
  for (let i = 0; i <= 8; i++) grid += `<path d="M${i * 50} 0V400M0 ${i * 50}H400" stroke="rgba(255,255,255,.06)"/>`;
  return `<rect width="400" height="400" fill="#1a2027"/>${grid}<circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="2"/>` +
    `<g transform="rotate(${rot} 200 200)">` +
    `<path d="M200 60 C214 60 220 110 220 150 L220 290 C220 320 210 345 200 350 C190 345 180 320 180 290 L180 150 C180 110 186 60 200 60z" fill="${a}" stroke="rgba(0,0,0,.4)"/>` +
    `<path d="M180 160 L45 215 L45 240 L180 225z M220 160 L355 215 L355 240 L220 225z" fill="${a}" stroke="rgba(0,0,0,.4)"/>` +
    `<path d="M185 300 L140 325 L140 338 L190 330z M215 300 L260 325 L260 338 L210 330z" fill="${a}" stroke="rgba(0,0,0,.4)"/>` +
    `<path d="M192 110 h16 v30 h-16z" fill="#9fd3ff" opacity=".8"/>` +
    `<path d="M60 213 l20 -8 v28 l-20 3z M340 213 l-20 -8 v28 l20 3z" fill="${b}"/>` +
    `<circle cx="110" cy="212" r="11" fill="${c}"/><circle cx="110" cy="212" r="5" fill="${b}"/><circle cx="290" cy="212" r="11" fill="${c}"/><circle cx="290" cy="212" r="5" fill="${b}"/>` +
    `<path d="M186 62 h28 v8 h-28z" fill="${b}"/></g>`;
}

const ART = { beads: artBeads, yarn: artYarn, quilt: artQuilt, model: artModel };
const VIEW = ["front view", "detail view", "alternate angle"];
function art(store, product, seed = 0, extra = "") {
  const label = `${product.title} from ${store.name}, ${VIEW[seed % 3]} (illustration)`;
  return svgOpen(label, extra) + ART[store.motif](product.colors, seed, `clip-${product.handle}-${seed}`) + "</svg>";
}

/* ---------- shared store chrome ---------- */
const stars = (n) => `<span class="stars" aria-hidden="true">${"★".repeat(n)}${"☆".repeat(5 - n)}</span>`;
const avg = (s) => (s.reviews.reduce((t, r) => t + r.stars, 0) / s.reviews.length).toFixed(1);

function shell(store, { title, description, body, depthHome, canonicalNote = "" }) {
  const t = store.theme;
  const vars = `--bg:${t.bg};--ink:${t.ink};--muted:${t.muted};--accent:${t.accent};--accent-ink:${t.accentInk};--card:${t.card};--line:${t.line};--soft:${t.soft};--font:${store.font}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="noindex">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<link rel="stylesheet" href="../../assets/store.css">
<style>:root{${vars}}</style>
${canonicalNote}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="demo-ribbon">Concept demo with a fictional brand and sample content · <a href="../../index.html">Back to portfolio</a></div>
<p class="announce">${esc(store.announcement)}</p>
<header class="site-header">
  <a class="logo" href="index.html">${esc(store.name)}</a>
  <nav aria-label="Main"><a href="index.html#shop">Shop</a><a href="index.html#story">Our story</a><a href="index.html#shipping">Shipping</a></nav>
  <button class="cart-btn" type="button" data-cart-open aria-haspopup="dialog">Cart <span class="cart-count" data-cart-count>0</span></button>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div><strong>${esc(store.name)}</strong><p>${esc(store.tagline)}</p></div>
  <div id="shipping"><strong>Shipping and returns</strong><p>${esc(store.announcement)}. Returns accepted within 30 days on unused items.</p></div>
  <div><strong>About this page</strong><p>This is a concept storefront built by ${esc(me.name)} to show Shopify front-end work. It is not a real shop and nothing can be purchased.</p></div>
</footer>
<div class="drawer-backdrop" data-cart-close hidden></div>
<aside class="drawer" role="dialog" aria-modal="true" aria-label="Cart" hidden>
  <div class="drawer-head"><h2>Your cart</h2><button type="button" data-cart-close aria-label="Close cart">×</button></div>
  <div class="ship-meter"><p data-ship-text></p><div class="bar"><span data-ship-bar></span></div></div>
  <ul class="cart-lines" data-cart-lines></ul>
  <div class="drawer-foot"><p class="subtotal">Subtotal <strong data-cart-subtotal>$0.00</strong></p><button class="btn" type="button" data-checkout>Check out</button><p class="note" data-checkout-note hidden>Checkout is switched off in this demo.</p></div>
</aside>
<script>window.STORE=${JSON.stringify({ key: "cart-" + store.slug, freeShip: store.freeShip })}</script>
<script src="../../assets/store.js" defer></script>
</body>
</html>`;
}

function card(store, p) {
  return `<li class="card">
  <a href="${p.handle}.html" class="card-media">${art(store, p, 0)}</a>
  <div class="card-body">
    <h3><a href="${p.handle}.html">${esc(p.title)}</a></h3>
    <p class="blurb">${esc(p.blurb)}</p>
    <div class="card-row"><span class="price">${money(p.price)}</span>
    <button class="btn small" type="button" data-add data-handle="${p.handle}" data-title="${esc(p.title)}" data-price="${p.price}" data-option="${esc(store.options[0])}" data-color="${p.colors[0]}">Add<span class="vh"> ${esc(p.title)} to cart</span></button></div>
  </div>
</li>`;
}

function homePage(store) {
  const body = `<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">${esc(store.hero.eyebrow)}</p>
    <h1>${esc(store.hero.title)}</h1>
    <p class="lede">${esc(store.hero.text)}</p>
    <a class="btn" href="#shop">Shop the collection</a>
  </div>
  <div class="hero-art">${art(store, store.products[0], 1)}</div>
</section>
<ul class="trust">
  <li><strong>Ships fast</strong><span>${esc(store.announcement.split(" · ")[1] || store.announcement)}</span></li>
  <li><strong>30-day returns</strong><span>On unused items, no forms to fill in</span></li>
  <li><strong>${avg(store)} out of 5</strong><span>From ${store.reviews.length} sample reviews</span></li>
</ul>
<section id="shop" class="section">
  <h2>Shop the collection</h2>
  <ul class="grid">${store.products.map((p) => card(store, p)).join("\n")}</ul>
</section>
<section id="story" class="section story">
  <div><h2>${esc(store.story.title)}</h2><p>${esc(store.story.text)}</p></div>
  <div class="story-art">${art(store, store.products[2], 2)}</div>
</section>
<section class="section newsletter">
  <h2>New arrivals, once a month</h2>
  <form data-demo-form><label class="vh" for="nl">Email address</label><input id="nl" type="email" placeholder="you@example.com" required autocomplete="email"><button class="btn" type="submit">Sign up</button></form>
  <p class="note" data-demo-form-note hidden>Thanks. This is a demo, so nothing was sent.</p>
</section>`;
  return shell(store, { title: `${store.name} | ${store.tagline}`, description: store.hero.text, body });
}

function productPage(store, p) {
  const related = store.products.filter((x) => x.handle !== p.handle).slice(0, 3);
  const ld = {
    "@context": "https://schema.org", "@type": "Product", name: p.title, description: p.desc,
    brand: { "@type": "Brand", name: store.name },
    offers: { "@type": "Offer", price: p.price.toFixed(2), priceCurrency: "USD", availability: "https://schema.org/InStock" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: avg(store), reviewCount: store.reviews.length }
  };
  const body = `<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <a href="index.html#shop">Shop</a> / <span aria-current="page">${esc(p.title)}</span></nav>
<section class="pdp">
  <div class="gallery">
    <div class="gallery-main">${[0, 1, 2].map((s) => `<div data-slide="${s}"${s ? " hidden" : ""}>${art(store, p, s)}</div>`).join("")}</div>
    <div class="thumbs" role="group" aria-label="Product images">${[0, 1, 2].map((s) => `<button type="button" data-thumb="${s}" aria-label="Show ${VIEW[s]}"${s ? "" : ' aria-current="true"'}>${art(store, p, s, 'aria-hidden="true"')}</button>`).join("")}</div>
  </div>
  <div class="pdp-info">
    <h1>${esc(p.title)}</h1>
    <p class="pdp-price">${money(p.price)}</p>
    <a class="rating" href="#reviews">${stars(Math.round(avg(store)))} ${avg(store)} · ${store.reviews.length} reviews</a>
    <p class="lede">${esc(p.desc)}</p>
    <form class="buy" data-buy data-handle="${p.handle}" data-title="${esc(p.title)}" data-price="${p.price}" data-color="${p.colors[0]}">
      <label>${esc(store.optionName)}<select name="option">${store.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select></label>
      <label>Quantity<input name="qty" type="number" min="1" max="20" value="1" inputmode="numeric"></label>
      <button class="btn wide" type="submit">Add to cart · ${money(p.price)}</button>
    </form>
    <ul class="assure">
      <li><strong>Shipping</strong> ${esc(store.announcement.split(" · ").join(". "))}.</li>
      <li><strong>Returns</strong> 30 days on unused items.</li>
    </ul>
    <details open><summary>Details</summary><ul class="specs">${p.specs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></details>
    <details><summary>Care and questions</summary><p>Care notes are listed in the details above. For anything else, reply to your order email and a person will answer.</p></details>
  </div>
</section>
<section id="reviews" class="section">
  <h2>Reviews <span class="tag">sample content</span></h2>
  <ul class="reviews">${store.reviews.map((r) => `<li><p class="r-head">${stars(r.stars)}<span class="vh">${r.stars} out of 5 stars</span> <strong>${esc(r.name)}</strong></p><p>${esc(r.text)}</p></li>`).join("")}</ul>
</section>
<section class="section">
  <h2>You may also like</h2>
  <ul class="grid three">${related.map((r) => card(store, r)).join("\n")}</ul>
</section>
<div class="sticky-atc" data-sticky hidden><span>${esc(p.title)} · ${money(p.price)}</span><button class="btn small" type="button" data-sticky-add>Add to cart</button></div>`;
  return shell(store, {
    title: `${p.title} | ${store.name}`, description: p.desc, body,
    canonicalNote: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`
  });
}

/* ---------- portfolio home ---------- */
const services = [
  ["Theme health", "Move a store off a retired theme (Debut, Supply, Minimal, Pop) onto a current Online Store 2.0 theme without losing its look, or patch the old one where a rebuild is not needed."],
  ["Product pages that answer questions", "Shipping times, returns, sizing and specs next to the buy button, plus a gallery, reviews and a sticky add-to-cart on phones."],
  ["Speed", "Lazy-loaded and correctly sized images, old script libraries removed, and render-blocking code moved out of the way."],
  ["Search and sharing", "One H1 per page, clean titles and descriptions, product structured data and a share image so links look right in search results and messages."],
  ["Accessibility basics", "Descriptive alt text, a skip link, keyboard-usable menus and carts, and readable colour contrast."],
  ["Small fixes, done properly", "Broken characters, duplicate titles, missing policy pages, clumsy navigation. Changes are made on a copy of the theme and shown to you before anything goes live."]
];

function portfolioPage() {
  const cards = stores.map((s) => `<li class="demo" style="--a:${s.theme.accent};--b:${s.theme.bg};--i:${s.theme.ink}">
  <a class="demo-art" href="demos/${s.slug}/index.html" aria-label="Open the ${esc(s.name)} demo">${art(s, s.products[0], 1, 'preserveAspectRatio="xMidYMid slice"')}</a>
  <div class="demo-body">
    <p class="kicker">Concept store</p>
    <h3>${esc(s.name)}</h3>
    <p>${esc(s.tagline)}.</p>
    <ul>${s.demonstrates.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
    <p class="links"><a class="btn" href="demos/${s.slug}/index.html">Open demo</a> <a href="demos/${s.slug}/${s.products[0].handle}.html">See a product page</a></p>
  </div>
</li>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(me.name)} | Shopify fixes and storefront builds</title>
<meta name="description" content="${esc(me.name)} is a freelance Shopify developer who fixes slow, dated or confusing storefronts for small shops. Four working demo stores inside.">
<meta property="og:title" content="${esc(me.name)} | Shopify fixes and storefront builds">
<meta property="og:description" content="Fixes for slow, dated or confusing Shopify storefronts, with four working demo stores.">
<link rel="stylesheet" href="assets/portfolio.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><a class="name" href="#main">${esc(me.name)}</a><nav aria-label="Main"><a href="#work">Demos</a><a href="#services">What I fix</a><a href="#process">How it works</a><a class="cta" href="#contact">Get a free audit</a></nav></header>
<main id="main">
<section class="intro">
  <p class="kicker">${esc(me.role)}</p>
  <h1>I fix the parts of a Shopify store that quietly cost it sales.</h1>
  <p class="lede">Retired themes, slow pages, product listings that leave shoppers guessing, links that share without a picture. I find the problems, show you exactly where they are, and fix them on a copy of your theme so nothing breaks while I work.</p>
  <p><a class="btn" href="#work">See the demo stores</a> <a class="btn ghost" href="#contact">Ask for a free audit</a></p>
</section>
<section id="work" class="block">
  <h2>Demo stores</h2>
  <p class="sub">Four concept storefronts with fictional brands and sample content. Each one is a working build: browse the catalogue, open a product, add to cart. They show the kind of result I aim for on a real store.</p>
  <ul class="demos">${cards}</ul>
</section>
<section id="services" class="block">
  <h2>What I fix</h2>
  <ul class="services">${services.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("")}</ul>
</section>
<section id="process" class="block">
  <h2>How it works</h2>
  <ol class="steps">
    <li><h3>Free audit</h3><p>I go through your public storefront and send a short list of specific problems, each with the page it is on and why it matters.</p></li>
    <li><h3>You pick</h3><p>Choose the fixes you care about. One item or the whole list. Nothing starts until you say so.</p></li>
    <li><h3>Preview, then publish</h3><p>I work on a duplicate of your theme. You get a preview link, check it on your own phone, and publish when you are happy.</p></li>
  </ol>
</section>
<section id="contact" class="block contact">
  <h2>Want me to look at your store?</h2>
  <p>Send me your store address and I will reply with what I find. No obligation.</p>
  <p><a class="btn" href="mailto:${esc(me.email)}?subject=Store%20audit%20request">${esc(me.email)}</a></p>
</section>
</main>
<footer class="foot"><p>© ${new Date().getFullYear()} ${esc(me.name)}. Demo stores use fictional brands, sample reviews and illustrated products.</p></footer>
</body>
</html>`;
}

/* ---------- write ---------- */
rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, "assets"), { recursive: true });
for (const f of ["store.css", "store.js", "portfolio.css"]) copyFileSync(join(root, "assets", f), join(dist, "assets", f));
out(".nojekyll", "");
out("index.html", portfolioPage());
let pages = 1;
for (const s of stores) {
  out(`demos/${s.slug}/index.html`, homePage(s)); pages++;
  for (const p of s.products) { out(`demos/${s.slug}/${p.handle}.html`, productPage(s, p)); pages++; }
}
console.log(`Built ${pages} pages into ${dist}`);
