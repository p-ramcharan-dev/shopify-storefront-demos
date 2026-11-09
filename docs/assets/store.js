(function () {
  "use strict";
  var cfg = window.STORE || { key: "cart-demo", freeShip: 50 };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = function (n) { return "$" + n.toFixed(2); };

  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(cfg.key)) || []; } catch (e) { cart = []; }
  function save() { try { localStorage.setItem(cfg.key, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } }

  var drawer = $(".drawer"), backdrop = $(".drawer-backdrop"), lastFocus = null;

  function render() {
    var count = 0, subtotal = 0;
    var list = $("[data-cart-lines]");
    list.textContent = "";
    cart.forEach(function (line, i) {
      count += line.qty; subtotal += line.qty * line.price;
      var li = document.createElement("li");
      var sw = document.createElement("span"); sw.className = "swatch"; sw.style.background = line.color;
      var mid = document.createElement("div");
      var t = document.createElement("div"); t.className = "line-title"; t.textContent = line.title;
      var m = document.createElement("div"); m.className = "line-meta"; m.textContent = line.option;
      var q = document.createElement("div"); q.className = "qty";
      [["−", -1, "Decrease quantity of "], ["+", 1, "Increase quantity of "]].forEach(function (b, idx) {
        var btn = document.createElement("button"); btn.type = "button"; btn.textContent = b[0];
        btn.setAttribute("aria-label", b[2] + line.title);
        btn.addEventListener("click", function () { change(i, b[1]); });
        if (idx === 1) { var n = document.createElement("span"); n.textContent = line.qty; q.appendChild(n); }
        q.appendChild(btn);
      });
      mid.appendChild(t); mid.appendChild(m); mid.appendChild(q);
      var price = document.createElement("strong"); price.textContent = money(line.qty * line.price);
      li.appendChild(sw); li.appendChild(mid); li.appendChild(price);
      list.appendChild(li);
    });
    if (!cart.length) {
      var empty = document.createElement("li"); empty.className = "empty"; empty.textContent = "Your cart is empty.";
      list.appendChild(empty);
    }
    $$("[data-cart-count]").forEach(function (el) { el.textContent = count; });
    $("[data-cart-subtotal]").textContent = money(subtotal);
    var left = cfg.freeShip - subtotal;
    $("[data-ship-text]").textContent = left > 0 ? money(left) + " away from free shipping" : "You have free shipping";
    $("[data-ship-bar]").style.width = Math.min(100, (subtotal / cfg.freeShip) * 100) + "%";
  }

  function change(i, d) {
    cart[i].qty += d;
    if (cart[i].qty < 1) cart.splice(i, 1);
    save(); render();
  }

  function add(item, qty) {
    var found = cart.filter(function (l) { return l.handle === item.handle && l.option === item.option; })[0];
    if (found) found.qty += qty; else cart.push({ handle: item.handle, title: item.title, price: item.price, option: item.option, color: item.color, qty: qty });
    save(); render(); open();
  }

  function open() {
    lastFocus = document.activeElement;
    drawer.hidden = false; backdrop.hidden = false;
    $("[data-cart-close]", drawer).focus();
  }
  function close() {
    drawer.hidden = true; backdrop.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $$("[data-cart-open]").forEach(function (b) { b.addEventListener("click", open); });
  $$("[data-cart-close]").forEach(function (b) { b.addEventListener("click", close); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) close(); });
  $("[data-checkout]").addEventListener("click", function () { $("[data-checkout-note]").hidden = false; });

  $$("[data-add]").forEach(function (b) {
    b.addEventListener("click", function () {
      add({ handle: b.dataset.handle, title: b.dataset.title, price: parseFloat(b.dataset.price), option: b.dataset.option, color: b.dataset.color }, 1);
    });
  });

  var buy = $("[data-buy]");
  if (buy) {
    var submit = function () {
      var qty = Math.max(1, Math.min(20, parseInt(buy.elements.qty.value, 10) || 1));
      add({ handle: buy.dataset.handle, title: buy.dataset.title, price: parseFloat(buy.dataset.price), option: buy.elements.option.value, color: buy.dataset.color }, qty);
    };
    buy.addEventListener("submit", function (e) { e.preventDefault(); submit(); });
    var sticky = $("[data-sticky]");
    if (sticky && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) { sticky.hidden = entries[0].isIntersecting; }).observe(buy);
      $("[data-sticky-add]").addEventListener("click", submit);
    }
  }

  $$("[data-thumb]").forEach(function (t) {
    t.addEventListener("click", function () {
      $$("[data-slide]").forEach(function (s) { s.hidden = s.dataset.slide !== t.dataset.thumb; });
      $$("[data-thumb]").forEach(function (o) { o.removeAttribute("aria-current"); });
      t.setAttribute("aria-current", "true");
    });
  });

  var form = $("[data-demo-form]");
  if (form) form.addEventListener("submit", function (e) { e.preventDefault(); $("[data-demo-form-note]").hidden = false; form.reset(); });

  render();
})();
