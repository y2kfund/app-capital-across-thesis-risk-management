import { defineComponent as Kc, h as ag, shallowRef as xa, inject as vn, toRefs as og, computed as jt, getCurrentInstance as sg, watch as dn, watchEffect as Qc, onMounted as lg, onBeforeUnmount as jc, isRef as ug, unref as Ae, nextTick as Jc, ref as $n, createElementBlock as ve, openBlock as de, createElementVNode as lt, toDisplayString as Kr, Fragment as fg, renderList as hg, normalizeClass as cg, createTextVNode as dr, createCommentVNode as vg, createVNode as dg } from "vue";
import { useQueryClient as tv, useQuery as ev } from "@tanstack/vue-query";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Zs = function(r, t) {
  return Zs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, Zs(r, t);
};
function vt(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Zs(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var pg = /* @__PURE__ */ function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
}(), gg = /* @__PURE__ */ function() {
  function r() {
    this.browser = new pg(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), z = new gg();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (z.wxa = !0, z.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? z.worker = !0 : !z.hasGlobalWindow || "Deno" in window ? (z.node = !0, z.svgSupported = !0) : yg(navigator.userAgent, z);
function yg(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
var Xl = 12, _g = "sans-serif", Yr = Xl + "px " + _g, mg = 20, wg = 100, Sg = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function Tg(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - mg) / wg;
    t[i] = n;
  }
  return t;
}
var bg = Tg(Sg), Pi = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = Pi.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || Yr), r.measureText(e);
      e = e || "", i = i || Yr;
      var a = /((?:\d+)?\.?\d*)px/.exec(i), o = a && +a[1] || Xl, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var l = 0; l < e.length; l++) {
          var u = bg[e[l]];
          s += u == null ? o : u * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  }
}, rv = hr([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), iv = hr([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), Ii = Object.prototype.toString, vo = Array.prototype, Cg = vo.forEach, xg = vo.filter, ql = vo.slice, Dg = vo.map, Gu = (function() {
}).constructor, Xn = Gu ? Gu.prototype : null, Zl = "__proto__", Eg = 2311;
function nv() {
  return Eg++;
}
function zr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function Q(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Ii.call(r);
  if (e === "[object Array]") {
    if (!gn(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = Q(r[i]);
    }
  } else if (iv[e]) {
    if (!gn(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!rv[e] && !gn(r) && !bi(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== Zl && (t[o] = Q(r[o]));
  }
  return t;
}
function ut(r, t, e) {
  if (!F(t) || !F(r))
    return e ? Q(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Zl) {
      var n = r[i], a = t[i];
      F(a) && F(n) && !N(a) && !N(n) && !bi(a) && !bi(n) && !Uu(a) && !Uu(n) && !gn(a) && !gn(n) ? ut(n, a, e) : (e || !(i in r)) && (r[i] = Q(t[i]));
    }
  return r;
}
function R(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== Zl && (r[e] = t[e]);
  return r;
}
function ft(r, t, e) {
  for (var i = gt(t), n = 0, a = i.length; n < a; n++) {
    var o = i[n];
    r[o] == null && (r[o] = t[o]);
  }
  return r;
}
function at(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function Ag(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var n in e)
    e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  r.prototype.constructor = r, r.superClass = t;
}
function qe(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && r[a] == null && (r[a] = t[a]);
    }
  else
    ft(r, t);
}
function Xt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function E(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === Cg)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function Z(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Kl(r);
  if (r.map && r.map === Dg)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function hr(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function ue(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Kl(r);
  if (r.filter && r.filter === xg)
    return r.filter(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    t.call(e, r[n], n, r) && i.push(r[n]);
  return i;
}
function gt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function Mg(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(ql.call(arguments)));
  };
}
var ot = Xn && J(Xn.bind) ? Xn.call.bind(Xn.bind) : Mg;
function St(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(ql.call(arguments)));
  };
}
function N(r) {
  return Array.isArray ? Array.isArray(r) : Ii.call(r) === "[object Array]";
}
function J(r) {
  return typeof r == "function";
}
function k(r) {
  return typeof r == "string";
}
function za(r) {
  return Ii.call(r) === "[object String]";
}
function yt(r) {
  return typeof r == "number";
}
function F(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Uu(r) {
  return !!rv[Ii.call(r)];
}
function Vt(r) {
  return !!iv[Ii.call(r)];
}
function bi(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function po(r) {
  return r.colorStops != null;
}
function Pg(r) {
  return r.image != null;
}
function Ig(r) {
  return Ii.call(r) === "[object RegExp]";
}
function av(r) {
  return r !== r;
}
function Mn() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++)
    if (r[e] != null)
      return r[e];
}
function W(r, t) {
  return r ?? t;
}
function pn(r, t, e) {
  return r ?? t ?? e;
}
function Kl(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return ql.apply(r, t);
}
function ov(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function q(r, t) {
  if (!r)
    throw new Error(t);
}
function Ie(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var sv = "__ec_primitive__";
function Ks(r) {
  r[sv] = !0;
}
function gn(r) {
  return r[sv];
}
var Lg = function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return gt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var i in e)
      e.hasOwnProperty(i) && t(e[i], i);
  }, r;
}(), lv = typeof Map == "function";
function Rg() {
  return lv ? /* @__PURE__ */ new Map() : new Lg();
}
var Og = function() {
  function r(t) {
    var e = N(t);
    this.data = Rg();
    var i = this;
    t instanceof r ? t.each(n) : t && E(t, n);
    function n(a, o) {
      e ? i.set(a, o) : i.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(i, n) {
      t.call(e, i, n);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return lv ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function j(r) {
  return new Og(r);
}
function Ng(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function go(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && R(e, t), e;
}
function uv(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function $r(r, t) {
  return r.hasOwnProperty(t);
}
function $t() {
}
var kg = 180 / Math.PI;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Qs = function(r, t) {
  return Qs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, Qs(r, t);
};
function rt(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Qs(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function Li(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function Bg(r) {
  return [r[0], r[1]];
}
function Wu(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function Fg(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function Vg(r) {
  return Math.sqrt(zg(r));
}
function zg(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function Oo(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function Hg(r, t) {
  var e = Vg(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function js(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Js = js;
function Gg(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var _i = Gg;
function No(r, t, e, i) {
  return r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r;
}
function Re(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function di(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function pi(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var Qr = /* @__PURE__ */ function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), Ug = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Qr(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new Qr(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, l = this._dropTarget;
      this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Qr(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Qr(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new Qr(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Qr(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}(), Fe = function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, i, n) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (n = i, i = e, e = null), !i || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === i)
        return this;
    var l = {
      h: i,
      query: e,
      ctx: n || this,
      callAtLast: i.zrEventfulCallAtLast
    }, u = a[t].length - 1, f = a[t][u];
    return f && f.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (i[t]) {
        for (var n = [], a = 0, o = i[t].length; a < o; a++)
          i[t][a].h !== e && n.push(i[t][a]);
        i[t] = n;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else
      delete i[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = n.length, l = 0; l < s; l++) {
        var u = n[l];
        if (!(a && a.filter && u.query != null && !a.filter(t, u.query)))
          switch (o) {
            case 0:
              u.h.call(u.ctx);
              break;
            case 1:
              u.h.call(u.ctx, e[0]);
              break;
            case 2:
              u.h.call(u.ctx, e[0], e[1]);
              break;
            default:
              u.h.apply(u.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = e[o - 1], l = n.length, u = 0; u < l; u++) {
        var f = n[u];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
}(), Wg = Math.log(2);
function tl(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var l = Math.round(Math.log((1 << s) - 1 & ~n) / Wg);
    return r[e][l];
  }
  for (var u = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var h = 0, v = 0, c = 0; v < s; v++) {
    var d = 1 << v;
    d & n || (h += (c % 2 ? -1 : 1) * r[e][v] * tl(r, t - 1, f, u, n | d, a), c++);
  }
  return a[o] = h, h;
}
function Yu(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = tl(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * tl(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(l, u, f) {
      var h = u * a[6] + f * a[7] + 1;
      l[0] = (u * a[0] + f * a[1] + a[2]) / h, l[1] = (u * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var $u = "___zrEVENTSAVED", ko = [];
function Yg(r, t, e, i, n) {
  return el(ko, t, i, n, !0) && el(r, e, ko[0], ko[1]);
}
function el(r, t, e, i, n) {
  if (t.getBoundingClientRect && z.domSupported && !fv(t)) {
    var a = t[$u] || (t[$u] = {}), o = $g(t, a), s = Xg(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function $g(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, l = a % 2, u = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[l] + ":0",
      n[u] + ":0",
      i[1 - l] + ":auto",
      n[1 - u] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return e;
}
function Xg(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
    var f = r[u].getBoundingClientRect(), h = 2 * u, v = f.left, c = f.top;
    o.push(v, c), l = l && a && v === a[h] && c === a[h + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
  }
  return l && n ? n : (t.srcCoords = o, t[i] = e ? Yu(s, o) : Yu(o, s));
}
function fv(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var qg = /([&<>"'])/g, Zg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Gt(r) {
  return r == null ? "" : (r + "").replace(qg, function(t, e) {
    return Zg[e];
  });
}
var Kg = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Bo = [], Qg = z.browser.firefox && +z.browser.version.split(".")[0] < 39;
function rl(r, t, e, i) {
  return e = e || {}, i ? Xu(r, t, e) : Qg && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Xu(r, t, e), e;
}
function Xu(r, t, e) {
  if (z.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (fv(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (el(Bo, r, i, n)) {
      e.zrX = Bo[0], e.zrY = Bo[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Ql(r) {
  return r || window.event;
}
function oe(r, t, e) {
  if (t = Ql(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && rl(r, o, t, e);
  } else {
    rl(r, t, t, e);
    var a = jg(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && Kg.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function jg(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function Jg(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function ty(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var hv = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, ey = function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, i) {
    return this._doTrack(t, e, i), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, i) {
    var n = t.touches;
    if (n) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = n.length; o < s; o++) {
        var l = n[o], u = rl(i, l, {});
        a.points.push([u.zrX, u.zrY]), a.touches.push(l);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Fo)
      if (Fo.hasOwnProperty(e)) {
        var i = Fo[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
}();
function qu(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function ry(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var Fo = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = qu(i) / qu(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = ry(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function mi() {
  return [1, 0, 0, 1, 0, 0];
}
function jl(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function iy(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function wi(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
}
function il(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function Jl(r, t, e, i) {
  i === void 0 && (i = [0, 0]);
  var n = t[0], a = t[2], o = t[4], s = t[1], l = t[3], u = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = n * h + s * f, r[1] = -n * f + s * h, r[2] = a * h + l * f, r[3] = -a * f + h * l, r[4] = h * (o - i[0]) + f * (u - i[1]) + i[0], r[5] = h * (u - i[1]) - f * (o - i[0]) + i[1], r;
}
function ny(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function cv(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * i;
  return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -i * l, r[3] = e * l, r[4] = (i * s - o * n) * l, r[5] = (a * n - e * s) * l, r) : null;
}
var G = function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(e * e + i * i);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, i = this.y;
      return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, i) {
    t.x = e, t.y = i;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, i) {
    t.x = e.x + i.x, t.y = e.y + i.y;
  }, r.sub = function(t, e, i) {
    t.x = e.x - i.x, t.y = e.y - i.y;
  }, r.scale = function(t, e, i) {
    t.x = e.x * i, t.y = e.y * i;
  }, r.scaleAndAdd = function(t, e, i, n) {
    t.x = e.x + i.x * n, t.y = e.y + i.y * n;
  }, r.lerp = function(t, e, i, n) {
    var a = 1 - n;
    t.x = a * e.x + n * i.x, t.y = a * e.y + n * i.y;
  }, r;
}(), qn = Math.min, Zn = Math.max, pr = new G(), gr = new G(), yr = new G(), _r = new G(), Fi = new G(), Vi = new G(), it = function() {
  function r(t, e, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }
  return r.prototype.union = function(t) {
    var e = qn(t.x, this.x), i = qn(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Zn(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Zn(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, n = t.height / e.height, a = mi();
    return il(a, a, [-e.x, -e.y]), ny(a, a, [i, n]), il(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, l = t.x, u = t.x + t.width, f = t.y, h = t.y + t.height, v = !(a < l || u < n || s < f || h < o);
    if (e) {
      var c = 1 / 0, d = 0, y = Math.abs(a - l), p = Math.abs(u - n), g = Math.abs(s - f), _ = Math.abs(h - o), m = Math.min(y, p), w = Math.min(g, _);
      a < l || u < n ? m > d && (d = m, y < p ? G.set(Vi, -y, 0) : G.set(Vi, p, 0)) : m < c && (c = m, y < p ? G.set(Fi, y, 0) : G.set(Fi, -p, 0)), s < f || h < o ? w > d && (d = w, g < _ ? G.set(Vi, 0, -g) : G.set(Vi, 0, _)) : m < c && (c = m, g < _ ? G.set(Fi, 0, g) : G.set(Fi, 0, -_));
    }
    return e && G.copy(e, v ? Fi : Vi), v;
  }, r.prototype.contain = function(t, e) {
    var i = this;
    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    r.copy(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t.x, t.y, t.width, t.height);
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
  }, r.applyTransform = function(t, e, i) {
    if (!i) {
      t !== e && r.copy(t, e);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var n = i[0], a = i[3], o = i[4], s = i[5];
      t.x = e.x * n + o, t.y = e.y * a + s, t.width = e.width * n, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    pr.x = yr.x = e.x, pr.y = _r.y = e.y, gr.x = _r.x = e.x + e.width, gr.y = yr.y = e.y + e.height, pr.transform(i), _r.transform(i), gr.transform(i), yr.transform(i), t.x = qn(pr.x, gr.x, yr.x, _r.x), t.y = qn(pr.y, gr.y, yr.y, _r.y);
    var l = Zn(pr.x, gr.x, yr.x, _r.x), u = Zn(pr.y, gr.y, yr.y, _r.y);
    t.width = l - t.x, t.height = u - t.y;
  }, r;
}(), vv = "silent";
function ay(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: oy
  };
}
function oy() {
  hv(this.event);
}
var sy = function(r) {
  rt(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(Fe), zi = /* @__PURE__ */ function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), ly = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Vo = new it(0, 0, 0, 0), dv = function(r) {
  rt(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new zi(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new sy(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new Ug(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (E(ly, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = pv(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var l = this._hovered = a ? new zi(i, n) : this.findHover(i, n), u = l.target, f = this.proxy;
    f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new zi(0, 0);
  }, t.prototype.dispatch = function(e, i) {
    var n = this[e];
    n && n.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var i = this.proxy;
    i.setCursor && i.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, i, n) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + i, s = ay(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
        typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new zi(e, i);
    if (Zu(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], l = this._pointerSize, u = l / 2, f = new it(e - u, i - u, l, l), h = a.length - 1; h >= 0; h--) {
        var v = a[h];
        v !== n && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (Vo.copy(v.getBoundingRect()), v.transform && Vo.applyTransform(v.transform), Vo.intersect(f) && s.push(v));
      }
      if (s.length)
        for (var c = 4, d = Math.PI / 12, y = Math.PI * 2, p = 0; p < u; p += c)
          for (var g = 0; g < y; g += d) {
            var _ = e + p * Math.cos(g), m = i + p * Math.sin(g);
            if (Zu(s, o, _, m, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new ey());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new zi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(Fe);
E(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  dv.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = pv(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Js(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function uy(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, n = void 0, a = !1; i; ) {
      if (i.ignoreClip && (a = !0), !a) {
        var o = i.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      i.silent && (n = !0);
      var s = i.__hostTarget;
      i = s || i.parent;
    }
    return n ? vv : !0;
  }
  return !1;
}
function Zu(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = uy(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== vv)) {
      t.target = o;
      break;
    }
  }
}
function pv(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
var gv = 32, Hi = 7;
function fy(r) {
  for (var t = 0; r >= gv; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function Ku(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    hy(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function hy(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function Qu(r, t, e, i, n) {
  for (i === t && i++; i < e; i++) {
    for (var a = r[i], o = t, s = i, l; o < s; )
      l = o + s >>> 1, n(a, r[l]) < 0 ? s = l : o = l + 1;
    var u = i - o;
    switch (u) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; u > 0; )
          r[o + u] = r[o + u - 1], u--;
    }
    r[o] = a;
  }
}
function zo(r, t, e, i, n, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + n]) > 0) {
    for (s = i - n; l < s && a(r, t[e + n + l]) > 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += n, l += n;
  } else {
    for (s = n + 1; l < s && a(r, t[e + n - l]) <= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = n - l, l = n - u;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : l = f;
  }
  return l;
}
function Ho(r, t, e, i, n, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + n]) < 0) {
    for (s = n + 1; l < s && a(r, t[e + n - l]) < 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = n - l, l = n - u;
  } else {
    for (s = i - n; l < s && a(r, t[e + n + l]) >= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += n, l += n;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) < 0 ? l = f : o = f + 1;
  }
  return l;
}
function cy(r, t) {
  var e = Hi, i, n, a = 0, o = [];
  i = [], n = [];
  function s(c, d) {
    i[a] = c, n[a] = d, a += 1;
  }
  function l() {
    for (; a > 1; ) {
      var c = a - 2;
      if (c >= 1 && n[c - 1] <= n[c] + n[c + 1] || c >= 2 && n[c - 2] <= n[c] + n[c - 1])
        n[c - 1] < n[c + 1] && c--;
      else if (n[c] > n[c + 1])
        break;
      f(c);
    }
  }
  function u() {
    for (; a > 1; ) {
      var c = a - 2;
      c > 0 && n[c - 1] < n[c + 1] && c--, f(c);
    }
  }
  function f(c) {
    var d = i[c], y = n[c], p = i[c + 1], g = n[c + 1];
    n[c] = y + g, c === a - 3 && (i[c + 1] = i[c + 2], n[c + 1] = n[c + 2]), a--;
    var _ = Ho(r[p], r, d, y, 0, t);
    d += _, y -= _, y !== 0 && (g = zo(r[d + y - 1], r, p, g, g - 1, t), g !== 0 && (y <= g ? h(d, y, p, g) : v(d, y, p, g)));
  }
  function h(c, d, y, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[c + g];
    var _ = 0, m = y, w = c;
    if (r[w++] = r[m++], --p === 0) {
      for (g = 0; g < d; g++)
        r[w + g] = o[_ + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[_];
      return;
    }
    for (var S = e, T, b, x; ; ) {
      T = 0, b = 0, x = !1;
      do
        if (t(r[m], o[_]) < 0) {
          if (r[w++] = r[m++], b++, T = 0, --p === 0) {
            x = !0;
            break;
          }
        } else if (r[w++] = o[_++], T++, b = 0, --d === 1) {
          x = !0;
          break;
        }
      while ((T | b) < S);
      if (x)
        break;
      do {
        if (T = Ho(r[m], o, _, d, 0, t), T !== 0) {
          for (g = 0; g < T; g++)
            r[w + g] = o[_ + g];
          if (w += T, _ += T, d -= T, d <= 1) {
            x = !0;
            break;
          }
        }
        if (r[w++] = r[m++], --p === 0) {
          x = !0;
          break;
        }
        if (b = zo(o[_], r, m, p, 0, t), b !== 0) {
          for (g = 0; g < b; g++)
            r[w + g] = r[m + g];
          if (w += b, m += b, p -= b, p === 0) {
            x = !0;
            break;
          }
        }
        if (r[w++] = o[_++], --d === 1) {
          x = !0;
          break;
        }
        S--;
      } while (T >= Hi || b >= Hi);
      if (x)
        break;
      S < 0 && (S = 0), S += 2;
    }
    if (e = S, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[_];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[w + g] = o[_ + g];
    }
  }
  function v(c, d, y, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = r[y + g];
    var _ = c + d - 1, m = p - 1, w = y + p - 1, S = 0, T = 0;
    if (r[w--] = r[_--], --d === 0) {
      for (S = w - (p - 1), g = 0; g < p; g++)
        r[S + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, _ -= d, T = w + 1, S = _ + 1, g = d - 1; g >= 0; g--)
        r[T + g] = r[S + g];
      r[w] = o[m];
      return;
    }
    for (var b = e; ; ) {
      var x = 0, C = 0, D = !1;
      do
        if (t(o[m], r[_]) < 0) {
          if (r[w--] = r[_--], x++, C = 0, --d === 0) {
            D = !0;
            break;
          }
        } else if (r[w--] = o[m--], C++, x = 0, --p === 1) {
          D = !0;
          break;
        }
      while ((x | C) < b);
      if (D)
        break;
      do {
        if (x = d - Ho(o[m], r, c, d, d - 1, t), x !== 0) {
          for (w -= x, _ -= x, d -= x, T = w + 1, S = _ + 1, g = x - 1; g >= 0; g--)
            r[T + g] = r[S + g];
          if (d === 0) {
            D = !0;
            break;
          }
        }
        if (r[w--] = o[m--], --p === 1) {
          D = !0;
          break;
        }
        if (C = p - zo(r[_], o, 0, p, p - 1, t), C !== 0) {
          for (w -= C, m -= C, p -= C, T = w + 1, S = m + 1, g = 0; g < C; g++)
            r[T + g] = o[S + g];
          if (p <= 1) {
            D = !0;
            break;
          }
        }
        if (r[w--] = r[_--], --d === 0) {
          D = !0;
          break;
        }
        b--;
      } while (x >= Hi || C >= Hi);
      if (D)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (e = b, e < 1 && (e = 1), p === 1) {
      for (w -= d, _ -= d, T = w + 1, S = _ + 1, g = d - 1; g >= 0; g--)
        r[T + g] = r[S + g];
      r[w] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (S = w - (p - 1), g = 0; g < p; g++)
        r[S + g] = o[g];
    }
  }
  return {
    mergeRuns: l,
    forceMergeRuns: u,
    pushRun: s
  };
}
function Da(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < gv) {
      a = Ku(r, e, i, t), Qu(r, e, i, e + a, t);
      return;
    }
    var o = cy(r, t), s = fy(n);
    do {
      if (a = Ku(r, e, i, t), a < s) {
        var l = n;
        l > s && (l = s), Qu(r, e, e + l, e + a, t), a = l;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Jt = 1, on = 2, ci = 4, ju = !1;
function Go() {
  ju || (ju = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Ju(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var vy = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Ju;
  }
  return r.prototype.traverse = function(t, e) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(e), i;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++)
      this._updateAndAddDisplayable(e[n], null, t);
    i.length = this._displayListLen, Da(i, Ju);
  }, r.prototype._updateAndAddDisplayable = function(t, e, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var n = t.getClipPath();
      if (t.ignoreClip)
        e = null;
      else if (n) {
        e ? e = e.slice() : e = [];
        for (var a = n, o = t; a; )
          a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), l = 0; l < s.length; l++) {
          var u = s[l];
          t.__dirty && (u.__dirty |= Jt), this._updateAndAddDisplayable(u, e, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Go(), f.z = 0), isNaN(f.z2) && (Go(), f.z2 = 0), isNaN(f.zlevel) && (Go(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, e, i);
      var v = t.getTextGuideLine();
      v && this._updateAndAddDisplayable(v, e, i);
      var c = t.getTextContent();
      c && this._updateAndAddDisplayable(c, e, i);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, i = t.length; e < i; e++)
        this.delRoot(t[e]);
      return;
    }
    var n = at(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
}(), Ha;
Ha = z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
var yn = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - yn.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? yn.bounceIn(r * 2) * 0.5 : yn.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, Kn = Math.pow, ur = Math.sqrt, Ga = 1e-8, yv = 1e-4, tf = ur(3), Qn = 1 / 3, Me = Li(), fe = Li(), Si = Li();
function ar(r) {
  return r > -Ga && r < Ga;
}
function _v(r) {
  return r > Ga || r < -Ga;
}
function kt(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function ef(r, t, e, i, n) {
  var a = 1 - n;
  return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n);
}
function mv(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - n, f = s * s - 3 * o * l, h = s * l - 9 * o * u, v = l * l - 3 * s * u, c = 0;
  if (ar(f) && ar(h))
    if (ar(s))
      a[0] = 0;
    else {
      var d = -l / s;
      d >= 0 && d <= 1 && (a[c++] = d);
    }
  else {
    var y = h * h - 4 * f * v;
    if (ar(y)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g);
    } else if (y > 0) {
      var _ = ur(y), m = f * s + 1.5 * o * (-h + _), w = f * s + 1.5 * o * (-h - _);
      m < 0 ? m = -Kn(-m, Qn) : m = Kn(m, Qn), w < 0 ? w = -Kn(-w, Qn) : w = Kn(w, Qn);
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d);
    } else {
      var S = (2 * f * s - 3 * o * h) / (2 * ur(f * f * f)), T = Math.acos(S) / 3, b = ur(f), x = Math.cos(T), d = (-s - 2 * b * x) / (3 * o), g = (-s + b * (x + tf * Math.sin(T))) / (3 * o), C = (-s + b * (x - tf * Math.sin(T))) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g), C >= 0 && C <= 1 && (a[c++] = C);
    }
  }
  return c;
}
function wv(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
  if (ar(o)) {
    if (_v(a)) {
      var u = -s / a;
      u >= 0 && u <= 1 && (n[l++] = u);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (ar(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = ur(f), u = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
      u >= 0 && u <= 1 && (n[l++] = u), v >= 0 && v <= 1 && (n[l++] = v);
    }
  }
  return l;
}
function Ua(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, l = (i - e) * n + e, u = (s - o) * n + o, f = (l - s) * n + s, h = (f - u) * n + u;
  a[0] = r, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = f, a[6] = l, a[7] = i;
}
function dy(r, t, e, i, n, a, o, s, l, u, f) {
  var h, v = 5e-3, c = 1 / 0, d, y, p, g;
  Me[0] = l, Me[1] = u;
  for (var _ = 0; _ < 1; _ += 0.05)
    fe[0] = kt(r, e, n, o, _), fe[1] = kt(t, i, a, s, _), p = _i(Me, fe), p < c && (h = _, c = p);
  c = 1 / 0;
  for (var m = 0; m < 32 && !(v < yv); m++)
    d = h - v, y = h + v, fe[0] = kt(r, e, n, o, d), fe[1] = kt(t, i, a, s, d), p = _i(fe, Me), d >= 0 && p < c ? (h = d, c = p) : (Si[0] = kt(r, e, n, o, y), Si[1] = kt(t, i, a, s, y), g = _i(Si, Me), y <= 1 && g < c ? (h = y, c = g) : v *= 0.5);
  return ur(c);
}
function py(r, t, e, i, n, a, o, s, l) {
  for (var u = r, f = t, h = 0, v = 1 / l, c = 1; c <= l; c++) {
    var d = c * v, y = kt(r, e, n, o, d), p = kt(t, i, a, s, d), g = y - u, _ = p - f;
    h += Math.sqrt(g * g + _ * _), u = y, f = p;
  }
  return h;
}
function Ut(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function rf(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function gy(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, l = 0;
  if (ar(a)) {
    if (_v(o)) {
      var u = -s / o;
      u >= 0 && u <= 1 && (n[l++] = u);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (ar(f)) {
      var u = -o / (2 * a);
      u >= 0 && u <= 1 && (n[l++] = u);
    } else if (f > 0) {
      var h = ur(f), u = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
      u >= 0 && u <= 1 && (n[l++] = u), v >= 0 && v <= 1 && (n[l++] = v);
    }
  }
  return l;
}
function Sv(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function Wa(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function yy(r, t, e, i, n, a, o, s, l) {
  var u, f = 5e-3, h = 1 / 0;
  Me[0] = o, Me[1] = s;
  for (var v = 0; v < 1; v += 0.05) {
    fe[0] = Ut(r, e, n, v), fe[1] = Ut(t, i, a, v);
    var c = _i(Me, fe);
    c < h && (u = v, h = c);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < yv); d++) {
    var y = u - f, p = u + f;
    fe[0] = Ut(r, e, n, y), fe[1] = Ut(t, i, a, y);
    var c = _i(fe, Me);
    if (y >= 0 && c < h)
      u = y, h = c;
    else {
      Si[0] = Ut(r, e, n, p), Si[1] = Ut(t, i, a, p);
      var g = _i(Si, Me);
      p <= 1 && g < h ? (u = p, h = g) : f *= 0.5;
    }
  }
  return ur(h);
}
function _y(r, t, e, i, n, a, o) {
  for (var s = r, l = t, u = 0, f = 1 / o, h = 1; h <= o; h++) {
    var v = h * f, c = Ut(r, e, n, v), d = Ut(t, i, a, v), y = c - s, p = d - l;
    u += Math.sqrt(y * y + p * p), s = c, l = d;
  }
  return u;
}
var my = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Tv(r) {
  var t = r && my.exec(r);
  if (t) {
    var e = t[1].split(","), i = +Ie(e[0]), n = +Ie(e[1]), a = +Ie(e[2]), o = +Ie(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(l) {
      return l <= 0 ? 0 : l >= 1 ? 1 : mv(0, i, a, 1, l, s) && kt(0, n, o, 1, s[0]);
    };
  }
}
var wy = function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || $t, this.ondestroy = t.ondestroy || $t, this.onrestart = t.onrestart || $t, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var i = this._life, n = t - this._startTime - this._pausedTime, a = n / i;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var l = n % i;
        this._startTime = t - l, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = J(t) ? t : yn[t] || Tv(t);
  }, r;
}(), bv = /* @__PURE__ */ function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), Sy = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new bv(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
}(), zn = function() {
  function r(t) {
    this._list = new Sy(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var l = i.head;
        i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l;
      }
      s ? s.value = e : s = new bv(e), s.key = t, i.insertEntry(s), n[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], i = this._list;
    if (e != null)
      return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
}(), nf = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function _n(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function af(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Uo(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? _n(parseFloat(t) / 100 * 255) : _n(parseInt(t, 10));
}
function mn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? af(parseFloat(t) / 100) : af(parseFloat(t));
}
function Wo(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function ae(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function nl(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var Cv = new zn(20), jn = null;
function jr(r, t) {
  jn && nl(jn, t), jn = Cv.put(r, jn || t.slice());
}
function Hr(r, t) {
  if (r) {
    t = t || [];
    var e = Cv.get(r);
    if (e)
      return nl(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in nf)
      return nl(t, nf[i]), jr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          ae(t, 0, 0, 0, 1);
          return;
        }
        return ae(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), jr(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          ae(t, 0, 0, 0, 1);
          return;
        }
        return ae(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), jr(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var l = i.substr(0, o), u = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (l) {
        case "rgba":
          if (u.length !== 4)
            return u.length === 3 ? ae(t, +u[0], +u[1], +u[2], 1) : ae(t, 0, 0, 0, 1);
          f = mn(u.pop());
        case "rgb":
          if (u.length >= 3)
            return ae(t, Uo(u[0]), Uo(u[1]), Uo(u[2]), u.length === 3 ? f : mn(u[3])), jr(r, t), t;
          ae(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (u.length !== 4) {
            ae(t, 0, 0, 0, 1);
            return;
          }
          return u[3] = mn(u[3]), of(u, t), jr(r, t), t;
        case "hsl":
          if (u.length !== 3) {
            ae(t, 0, 0, 0, 1);
            return;
          }
          return of(u, t), jr(r, t), t;
        default:
          return;
      }
    }
    ae(t, 0, 0, 0, 1);
  }
}
function of(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = mn(r[1]), n = mn(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], ae(t, _n(Wo(o, a, e + 1 / 3) * 255), _n(Wo(o, a, e) * 255), _n(Wo(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function sf(r, t) {
  var e = Hr(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      e[i] = e[i] * (1 - t) | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return tu(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function tu(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Ya(r, t) {
  var e = Hr(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var lf = new zn(100);
function uf(r) {
  if (k(r)) {
    var t = lf.get(r);
    return t || (t = sf(r, -0.1), lf.put(r, t)), t;
  } else if (po(r)) {
    var e = R({}, r);
    return e.colorStops = Z(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: sf(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function Ty(r) {
  return r.type === "linear";
}
function by(r) {
  return r.type === "radial";
}
(function() {
  return z.hasGlobalWindow && J(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && zr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var al = Array.prototype.slice;
function We(r, t, e) {
  return (t - r) * e + r;
}
function Yo(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = We(t[a], e[a], i);
  return r;
}
function Cy(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = We(t[o][s], e[o][s], i);
  }
  return r;
}
function Jn(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function ff(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function xy(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Dy(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var l = a; l < o; l++)
          i.push(e === 1 ? n[l] : al.call(n[l]));
    }
    for (var u = i[0] && i[0].length, l = 0; l < i.length; l++)
      if (e === 1)
        isNaN(i[l]) && (i[l] = n[l]);
      else
        for (var f = 0; f < u; f++)
          isNaN(i[l][f]) && (i[l][f] = n[l][f]);
  }
}
function Ea(r) {
  if (Xt(r)) {
    var t = r.length;
    if (Xt(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(al.call(r[i]));
      return e;
    }
    return al.call(r);
  }
  return r;
}
function Aa(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Ey(r) {
  return Xt(r && r[0]) ? 2 : 1;
}
var ta = 0, Ma = 1, xv = 2, sn = 3, ol = 4, sl = 5, hf = 6;
function cf(r) {
  return r === ol || r === sl;
}
function ea(r) {
  return r === Ma || r === xv;
}
var Gi = [0, 0, 0, 0], Ay = function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, i) {
    this._needsSort = !0;
    var n = this.keyframes, a = n.length, o = !1, s = hf, l = e;
    if (Xt(e)) {
      var u = Ey(e);
      s = u, (u === 1 && !yt(e[0]) || u === 2 && !yt(e[0][0])) && (o = !0);
    } else if (yt(e) && !av(e))
      s = ta;
    else if (k(e))
      if (!isNaN(+e))
        s = ta;
      else {
        var f = Hr(e);
        f && (l = f, s = sn);
      }
    else if (po(e)) {
      var h = R({}, l);
      h.colorStops = Z(e.colorStops, function(c) {
        return {
          offset: c.offset,
          color: Hr(c.color)
        };
      }), Ty(e) ? s = ol : by(e) && (s = sl), l = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === hf) && (o = !0), this.discrete = this.discrete || o;
    var v = {
      time: t,
      value: l,
      rawValue: e,
      percent: 0
    };
    return i && (v.easing = i, v.easingFunc = J(i) ? i : yn[i] || Tv(i)), n.push(v), v;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(y, p) {
      return y.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, l = ea(n), u = cf(n), f = 0; f < a; f++) {
      var h = i[f], v = h.value, c = o.value;
      h.percent = h.time / t, s || (l && f !== a - 1 ? Dy(v, c, n) : u && xy(v.colorStops, c.colorStops));
    }
    if (!s && n !== sl && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === ta ? i[f].additiveValue = i[f].value - d : n === sn ? i[f].additiveValue = Jn([], i[f].value, d, -1) : ea(n) && (i[f].additiveValue = n === Ma ? Jn([], i[f].value, d, -1) : ff([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === sn, f, h = this._lastFr, v = Math.min, c, d;
      if (s === 1)
        c = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var y = v(h + 1, s - 1);
          for (f = y; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = v(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = v(f - 1, s - 2);
        }
        d = o[f + 1], c = o[f];
      }
      if (c && d) {
        this._lastFr = f, this._lastFrP = e;
        var p = d.percent - c.percent, g = p === 0 ? 1 : v((e - c.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var _ = i ? this._additiveValue : u ? Gi : t[l];
        if ((ea(a) || u) && !_ && (_ = this._additiveValue = []), this.discrete)
          t[l] = g < 1 ? c.rawValue : d.rawValue;
        else if (ea(a))
          a === Ma ? Yo(_, c[n], d[n], g) : Cy(_, c[n], d[n], g);
        else if (cf(a)) {
          var m = c[n], w = d[n], S = a === ol;
          t[l] = {
            type: S ? "linear" : "radial",
            x: We(m.x, w.x, g),
            y: We(m.y, w.y, g),
            colorStops: Z(m.colorStops, function(b, x) {
              var C = w.colorStops[x];
              return {
                offset: We(b.offset, C.offset, g),
                color: Aa(Yo([], b.color, C.color, g))
              };
            }),
            global: w.global
          }, S ? (t[l].x2 = We(m.x2, w.x2, g), t[l].y2 = We(m.y2, w.y2, g)) : t[l].r = We(m.r, w.r, g);
        } else if (u)
          Yo(_, c[n], d[n], g), i || (t[l] = Aa(_));
        else {
          var T = We(c[n], d[n], g);
          i ? this._additiveValue = T : t[l] = T;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === ta ? t[i] = t[i] + n : e === sn ? (Hr(t[i], Gi), Jn(Gi, Gi, n, 1), t[i] = Aa(Gi)) : e === Ma ? Jn(t[i], t[i], n, 1) : e === xv && ff(t[i], t[i], n, 1);
  }, r;
}(), eu = function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      zr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = n, this._allowDiscrete = i;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, i) {
    return this.whenWithKeys(t, e, gt(e), i);
  }, r.prototype.whenWithKeys = function(t, e, i, n) {
    for (var a = this._tracks, o = 0; o < i.length; o++) {
      var s = i[o], l = a[s];
      if (!l) {
        l = a[s] = new Ay(s);
        var u = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, v = h[h.length - 1];
          u = v && v.value, f.valType === sn && u && (u = Aa(u));
        } else
          u = this._target[s];
        if (u == null)
          continue;
        t > 0 && l.addKeyframe(0, Ea(u), n), this._trackKeys.push(s);
      }
      l.addKeyframe(t, Ea(e[s]), n);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, i = 0; i < e; i++)
        t[i].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var i = 0; i < e.length; i++)
        e[i].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++)
      t[e[i]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, i = this._additiveAnimators;
    if (i)
      for (var n = 0; n < i.length; n++) {
        var a = i[n].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], l = this._getAdditiveTrack(o), u = s.keyframes, f = u.length;
        if (s.prepare(n, l), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = u[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            i.push(s);
      }
      if (i.length || this._force) {
        var v = new wy({
          life: n,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(c) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var y = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  y = !0;
                  break;
                }
              y || (e._additiveAnimators = null);
            }
            for (var p = 0; p < i.length; p++)
              i[p].step(e._target, c);
            var g = e._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](e._target, c);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return Z(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
      var o = i[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < n.length; a++)
      if (!i[n[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, i) {
    if (t) {
      e = e || this._trackKeys;
      for (var n = 0; n < e.length; n++) {
        var a = e[n], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, l = s[i ? 0 : s.length - 1];
          l && (t[a] = Ea(l.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || gt(t);
    for (var i = 0; i < e.length; i++) {
      var n = e[i], a = this._tracks[n];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
}();
function gi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var My = function(r) {
  rt(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, e = e || {}, i.stage = e.stage || {}, i;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var i = e.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var i = e.prev, n = e.next;
      i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var i = e.getClip();
    i && this.removeClip(i), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var i = gi() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (Ha(i), !e._paused && e.update());
    }
    Ha(i);
  }, t.prototype.start = function() {
    this._running || (this._time = gi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = gi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += gi() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var i = e.next;
      e.prev = e.next = e.animation = null, e = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, i) {
    i = i || {}, this.start();
    var n = new eu(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(Fe), Py = 300, $o = z.domSupported, Xo = function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, i = Z(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
}(), vf = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, df = !1;
function ll(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function Iy(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function qo(r) {
  r && (r.zrByTouch = !0);
}
function Ly(r, t) {
  return oe(r.dom, new Ry(r, t), !0);
}
function Dv(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var Ry = /* @__PURE__ */ function() {
  function r(t, e) {
    this.stopPropagation = $t, this.stopImmediatePropagation = $t, this.preventDefault = $t, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), ge = {
  mousedown: function(r) {
    r = oe(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = oe(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = oe(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = oe(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    Dv(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    df = !0, r = oe(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    df || (r = oe(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = oe(this.dom, r), qo(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), ge.mousemove.call(this, r), ge.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = oe(this.dom, r), qo(r), this.handler.processGesture(r, "change"), ge.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = oe(this.dom, r), qo(r), this.handler.processGesture(r, "end"), ge.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < Py && ge.click.call(this, r);
  },
  pointerdown: function(r) {
    ge.mousedown.call(this, r);
  },
  pointermove: function(r) {
    ll(r) || ge.mousemove.call(this, r);
  },
  pointerup: function(r) {
    ge.mouseup.call(this, r);
  },
  pointerout: function(r) {
    ll(r) || ge.mouseout.call(this, r);
  }
};
E(["click", "dblclick", "contextmenu"], function(r) {
  ge[r] = function(t) {
    t = oe(this.dom, t), this.trigger(r, t);
  };
});
var ul = {
  pointermove: function(r) {
    ll(r) || ul.mousemove.call(this, r);
  },
  pointerup: function(r) {
    ul.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function Oy(r, t) {
  var e = t.domHandlers;
  z.pointerEventsSupported ? E(Xo.pointer, function(i) {
    Pa(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : (z.touchEventsSupported && E(Xo.touch, function(i) {
    Pa(t, i, function(n) {
      e[i].call(r, n), Iy(t);
    });
  }), E(Xo.mouse, function(i) {
    Pa(t, i, function(n) {
      n = Ql(n), t.touching || e[i].call(r, n);
    });
  }));
}
function Ny(r, t) {
  z.pointerEventsSupported ? E(vf.pointer, e) : z.touchEventsSupported || E(vf.mouse, e);
  function e(i) {
    function n(a) {
      a = Ql(a), Dv(r, a.target) || (a = Ly(r, a), t.domHandlers[i].call(r, a));
    }
    Pa(t, i, n, { capture: !0 });
  }
}
function Pa(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, Jg(r.domTarget, t, e, i);
}
function Zo(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && ty(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var pf = /* @__PURE__ */ function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), ky = function(r) {
  rt(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new pf(e, ge), $o && (n._globalHandlerScope = new pf(document, ul)), Oy(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    Zo(this._localHandlerScope), $o && Zo(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, $o && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? Ny(this, i) : Zo(i);
    }
  }, t;
}(Fe), Ev = 1;
z.hasGlobalWindow && (Ev = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var $a = Ev, fl = 0.4, hl = "#333", cl = "#ccc", By = "#eee", gf = jl, yf = 5e-5;
function mr(r) {
  return r > yf || r < -yf;
}
var wr = [], Jr = [], Ko = mi(), Qo = Math.abs, ru = function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return r.getLocalTransform(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return mr(this.rotation) || mr(this.x) || mr(this.y) || mr(this.scaleX - 1) || mr(this.scaleY - 1) || mr(this.skewX) || mr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (gf(i), this.invTransform = null);
      return;
    }
    i = i || mi(), e ? this.getLocalTransform(i) : gf(i), t && (e ? wi(i, t, i) : iy(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(wr);
      var i = wr[0] < 0 ? -1 : 1, n = wr[1] < 0 ? -1 : 1, a = ((wr[0] - i) * e + i) / wr[0] || 0, o = ((wr[1] - n) * e + n) / wr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || mi(), cv(this.invTransform, t);
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = Math.atan2(t[1], t[0]), a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || mi(), wi(Jr, t.invTransform, e), e = Jr);
      var i = this.originX, n = this.originY;
      (i || n) && (Ko[4] = i, Ko[5] = n, wi(Jr, e, Ko), Jr[4] -= i, Jr[5] -= n, e = Jr), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], n = this.invTransform;
    return n && Re(i, i, n), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], n = this.transform;
    return n && Re(i, i, n), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && Qo(t[0] - 1) > 1e-10 && Qo(t[3] - 1) > 1e-10 ? Math.sqrt(Qo(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    Fy(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || l) {
      var d = i + s, y = n + l;
      e[4] = -d * a - v * y * o, e[5] = -y * o - c * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = c * a, e[2] = v * o, u && Jl(e, e, u), e[4] += i + f, e[5] += n + h, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), Pn = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Fy(r, t) {
  for (var e = 0; e < Pn.length; e++) {
    var i = Pn[e];
    r[i] = t[i];
  }
}
var _f = {};
function te(r, t) {
  t = t || Yr;
  var e = _f[t];
  e || (e = _f[t] = new zn(500));
  var i = e.get(r);
  return i == null && (i = Pi.measureText(r, t).width, e.put(r, i)), i;
}
function mf(r, t, e, i) {
  var n = te(r, t), a = iu(t), o = ln(0, n, e), s = vi(0, a, i), l = new it(o, s, n, a);
  return l;
}
function Av(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return mf(n[0], t, e, i);
  for (var o = new it(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var l = mf(n[s], t, e, i);
    s === 0 ? o.copy(l) : o.union(l);
  }
  return o;
}
function ln(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function vi(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function iu(r) {
  return te("国", r);
}
function Ci(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function Mv(r, t, e) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", h = "top";
  if (i instanceof Array)
    l += Ci(i[0], e.width), u += Ci(i[1], e.height), f = null, h = null;
  else
    switch (i) {
      case "left":
        l -= n, u += s, f = "right", h = "middle";
        break;
      case "right":
        l += n + o, u += s, h = "middle";
        break;
      case "top":
        l += o / 2, u -= n, f = "center", h = "bottom";
        break;
      case "bottom":
        l += o / 2, u += a + n, f = "center";
        break;
      case "inside":
        l += o / 2, u += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        l += n, u += s, h = "middle";
        break;
      case "insideRight":
        l += o - n, u += s, f = "right", h = "middle";
        break;
      case "insideTop":
        l += o / 2, u += n, f = "center";
        break;
      case "insideBottom":
        l += o / 2, u += a - n, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        l += n, u += n;
        break;
      case "insideTopRight":
        l += o - n, u += n, f = "right";
        break;
      case "insideBottomLeft":
        l += n, u += a - n, h = "bottom";
        break;
      case "insideBottomRight":
        l += o - n, u += a - n, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = l, r.y = u, r.align = f, r.verticalAlign = h, r;
}
var jo = "__zr_normal__", Jo = Pn.concat(["ignore"]), Vy = hr(Pn, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), ti = {}, zy = new it(0, 0, 0, 0), yo = function() {
  function r(t) {
    this.id = nv(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, i) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var n = this.transform;
    n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, n = i.local, a = e.innerTransformable, o = void 0, s = void 0, l = !1;
      a.parent = n ? this : null;
      var u = !1;
      if (a.copyTransform(e), i.position != null) {
        var f = zy;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(ti, i, f) : Mv(ti, i, f), a.x = ti.x, a.y = ti.y, o = ti.align, s = ti.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var v = void 0, c = void 0;
          h === "center" ? (v = f.width * 0.5, c = f.height * 0.5) : (v = Ci(h[0], f.width), c = Ci(h[1], f.height)), u = !0, a.originX = -a.x + v + (n ? 0 : f.x), a.originY = -a.y + c + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], u || (a.originX = -d[0], a.originY = -d[1]));
      var y = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, _ = void 0, m = void 0;
      y && this.canBeInsideText() ? (g = i.insideFill, _ = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(g), m = !0)) : (g = i.outsideFill, _ = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || _ !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (l = !0, p.fill = g, p.stroke = _, p.autoStroke = m, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= Jt, l && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? cl : hl;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Hr(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, tu(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, R(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (F(t))
      for (var i = t, n = gt(i), a = 0; a < n.length; a++) {
        var o = n[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
      var n = this.animators[i], a = n.__fromStateTransition;
      if (!(n.getLoop() || a && a !== jo)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Jo);
  }, r.prototype._savePrimaryToNormal = function(t, e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(jo, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === jo, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, l = this.stateTransition;
      if (!(at(s, t) >= 0 && (e || s.length === 1))) {
        var u;
        if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
          zr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(u);
        var f = !!(u && u.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !i && !this.__inHover && l && l.duration > 0, l);
        var h = this._textContent, v = this._textGuide;
        return h && h.useState(t, e, i, f), v && v.useState(t, e, i, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Jt), u;
      }
    }
  }, r.prototype.useStates = function(t, e, i) {
    if (!t.length)
      this.clearStates();
    else {
      var n = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var l = 0; l < o; l++)
          if (t[l] !== a[l]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var l = 0; l < o; l++) {
        var u = t[l], f = void 0;
        this.stateProxy && (f = this.stateProxy(u, t)), f || (f = this.states[u]), f && n.push(f);
      }
      var h = n[o - 1], v = !!(h && h.hoverLayer || i);
      v && this._toggleHoverLayerFlag(!0);
      var c = this._mergeStates(n), d = this.stateTransition;
      this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
      var y = this._textContent, p = this._textGuide;
      y && y.useStates(t, e, v), p && p.useStates(t, e, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Jt);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this.silent, e = this.parent; !t && e; ) {
      if (e.silent) {
        t = !0;
        break;
      }
      e = e.parent;
    }
    return t;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = at(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var n = this.currentStates.slice(), a = at(n, t), o = at(n, e) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      R(e, a), a.textConfig && (i = i || {}, R(i, a.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, n, a, o) {
    var s = !(e && n);
    e && e.textConfig ? (this.textConfig = R({}, n ? this.textConfig : i.textConfig), R(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
    for (var l = {}, u = !1, f = 0; f < Jo.length; f++) {
      var h = Jo[f], v = a && Vy[h];
      e && e[h] != null ? v ? (u = !0, l[h] = e[h]) : this[h] = e[h] : s && i[h] != null && (v ? (u = !0, l[h] = i[h]) : this[h] = i[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var c = this.animators[f], d = c.targetName;
        c.getLoop() || c.__changeFinalValue(d ? (e || i)[d] : e || i);
      }
    u && this._transitionState(t, l, o);
  }, r.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var e = this.__zr;
    e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    if (e !== t) {
      if (e && e !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new ru(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), R(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= Jt;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var e = this._textContent, i = this._textGuide;
    e && (e.__inHover = t), i && (i.__inHover = t);
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.addAnimator(e[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.removeAnimator(e[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, i) {
    var n = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !n) {
      zr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new eu(n, e, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(e);
    }).done(function() {
      var a = n.animators, o = at(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
      var s = i[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, i) {
    ts(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    ts(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = ts(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Jt;
    var e = {};
    function i(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function n(a, o, s, l) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && i(a, s, l), !this[o]) {
            var f = this[o] = [];
            u(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && i(a, s, l), this[s] = f[0], this[l] = f[1], this[o] = f, u(this, f);
        }
      });
      function u(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(v) {
            f[s] = v;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[l];
          },
          set: function(v) {
            f[l] = v;
          }
        });
      }
    }
    Object.defineProperty && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
  }(), r;
}();
qe(yo, Fe);
qe(yo, ru);
function ts(r, t, e, i, n) {
  e = e || {};
  var a = [];
  Pv(r, "", r, t, e, i, a, n);
  var o = a.length, s = !1, l = e.done, u = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? l && l() : u && u());
  }, h = function() {
    o--, o <= 0 && (s ? l && l() : u && u());
  };
  o || l && l(), a.length > 0 && e.during && a[0].during(function(d, y) {
    e.during(y);
  });
  for (var v = 0; v < a.length; v++) {
    var c = a[v];
    f && c.done(f), h && c.aborted(h), e.force && c.duration(e.duration), c.start(e.easing);
  }
  return a;
}
function es(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function Hy(r) {
  return Xt(r[0]);
}
function Gy(r, t, e) {
  if (Xt(t[e]))
    if (Xt(r[e]) || (r[e] = []), Vt(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), es(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (Hy(n))
        for (var s = n[0].length, l = 0; l < o; l++)
          a[l] ? es(a[l], n[l], s) : a[l] = Array.prototype.slice.call(n[l]);
      else
        es(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function Uy(r, t) {
  return r === t || Xt(r) && Xt(t) && Wy(r, t);
}
function Wy(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function Pv(r, t, e, i, n, a, o, s) {
  for (var l = gt(i), u = n.duration, f = n.delay, h = n.additive, v = n.setToFinal, c = !F(a), d = r.animators, y = [], p = 0; p < l.length; p++) {
    var g = l[p], _ = i[g];
    if (_ != null && e[g] != null && (c || a[g]))
      if (F(_) && !Xt(_) && !po(_)) {
        if (t) {
          s || (e[g] = _, r.updateDuringAnimation(t));
          continue;
        }
        Pv(r, g, e[g], _, n, a && a[g], o, s);
      } else
        y.push(g);
    else s || (e[g] = _, r.updateDuringAnimation(t), y.push(g));
  }
  var m = y.length;
  if (!h && m)
    for (var w = 0; w < d.length; w++) {
      var S = d[w];
      if (S.targetName === t) {
        var T = S.stopTracks(y);
        if (T) {
          var b = at(d, S);
          d.splice(b, 1);
        }
      }
    }
  if (n.force || (y = ue(y, function(A) {
    return !Uy(i[A], e[A]);
  }), m = y.length), m > 0 || n.force && !o.length) {
    var x = void 0, C = void 0, D = void 0;
    if (s) {
      C = {}, v && (x = {});
      for (var w = 0; w < m; w++) {
        var g = y[w];
        C[g] = e[g], v ? x[g] = i[g] : e[g] = i[g];
      }
    } else if (v) {
      D = {};
      for (var w = 0; w < m; w++) {
        var g = y[w];
        D[g] = Ea(e[g]), Gy(e, i, g);
      }
    }
    var S = new eu(e, !1, !1, h ? ue(d, function(M) {
      return M.targetName === t;
    }) : null);
    S.targetName = t, n.scope && (S.scope = n.scope), v && x && S.whenWithKeys(0, x, y), D && S.whenWithKeys(0, D, y), S.whenWithKeys(u ?? 500, s ? C : i, y).delay(f || 0), r.addAnimator(S, t), o.push(S);
  }
}
var me = function(r) {
  rt(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var i = this._children, n = 0; n < i.length; n++)
      if (i[n].name === e)
        return i[n];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), process.env.NODE_ENV !== "production" && e.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(e, i) {
    if (e && e !== this && e.parent !== this && i && i.parent === this) {
      var n = this._children, a = n.indexOf(i);
      a >= 0 && (n.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, i) {
    var n = at(this._children, e);
    return n >= 0 && this.replaceAt(i, n), this;
  }, t.prototype.replaceAt = function(e, i) {
    var n = this._children, a = n[i];
    if (e && e !== this && e.parent !== this && e !== a) {
      n[i] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var i = this.__zr;
    i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(e) {
    var i = this.__zr, n = this._children, a = at(n, e);
    return a < 0 ? this : (n.splice(a, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
      var a = e[n];
      i && a.removeSelfFromZr(i), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, i) {
    for (var n = this._children, a = 0; a < n.length; a++) {
      var o = n[a];
      e.call(i, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, i) {
    for (var n = 0; n < this._children.length; n++) {
      var a = this._children[n], o = e.call(i, a);
      a.isGroup && !o && a.traverse(e, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var i = new it(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var l = n[s];
      if (!(l.ignore || l.invisible)) {
        var u = l.getBoundingRect(), f = l.getLocalTransform(a);
        f ? (it.applyTransform(i, u, f), o = o || i.clone(), o.union(i)) : (o = o || u.clone(), o.union(u));
      }
    }
    return o || i;
  }, t;
}(yo);
me.prototype.type = "group";
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var un = {}, Iv = {};
function Yy(r) {
  delete Iv[r];
}
function $y(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Ya(r, 1) < fl;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += Ya(t[n].color, 1);
    return e /= i, e < fl;
  }
  return !1;
}
var Xy = function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new vy(), o = i.renderer || "canvas";
    if (un[o] || (o = gt(un)[0]), process.env.NODE_ENV !== "production" && !un[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new un[o](e, a, i, t), l = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var u = !z.node && !z.worker && !l ? new ky(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, h = f == null || f === "auto" ? z.touchEventsSupported : !!f, v = 44, c;
    h && (c = W(i.pointerSize, v)), this.handler = new dv(a, s, u, s.root, c), this.animation = new My({
      stage: {
        update: l ? null : function() {
          return n._flush(!0);
        }
      }
    }), l || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = $y(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(!1);
  }, r.prototype._flush = function(t) {
    var e, i = gi();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var n = gi();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: n - i
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed)
      return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, i) {
    return this._disposed || this.handler.on(t, e, i), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof me && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, Yy(this.id));
  }, r;
}();
function wf(r, t) {
  var e = new Xy(nv(), r, t);
  return Iv[e.id] = e, e;
}
function qy(r, t) {
  un[r] = t;
}
var Sf = 1e-4, Lv = 20;
function Zy(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function Ky(r, t, e, i) {
  var n = t[0], a = t[1], o = e[0], s = e[1], l = a - n, u = s - o;
  if (l === 0)
    return u === 0 ? o : (o + s) / 2;
  {
    if (r === n)
      return o;
    if (r === a)
      return s;
  }
  return (r - n) / l * u + o;
}
function mt(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return k(r) ? Zy(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function Qy(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), Lv), r = (+r).toFixed(t), e ? r : +r;
}
function Tf(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return jy(r);
}
function jy(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function Jy(r, t) {
  var e = hr(r, function(c, d) {
    return c + (isNaN(d) ? 0 : d);
  }, 0);
  if (e === 0)
    return [];
  for (var i = Math.pow(10, t), n = Z(r, function(c) {
    return (isNaN(c) ? 0 : c) / e * i * 100;
  }), a = i * 100, o = Z(n, function(c) {
    return Math.floor(c);
  }), s = hr(o, function(c, d) {
    return c + d;
  }, 0), l = Z(n, function(c, d) {
    return c - o[d];
  }); s < a; ) {
    for (var u = Number.NEGATIVE_INFINITY, f = null, h = 0, v = l.length; h < v; ++h)
      l[h] > u && (u = l[h], f = h);
    ++o[f], l[f] = 0, ++s;
  }
  return Z(o, function(c) {
    return c / i;
  });
}
function t_(r, t) {
  var e = Math.max(Tf(r), Tf(t)), i = r + t;
  return e > Lv ? i : Qy(i, e);
}
function Rv(r) {
  var t = Math.PI * 2;
  return (r % t + t) % t;
}
function Xa(r) {
  return r > -Sf && r < Sf;
}
var e_ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function _o(r) {
  if (r instanceof Date)
    return r;
  if (k(r)) {
    var t = e_.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Math.round(r));
}
function qa(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !k(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function Ov(r) {
  return !isNaN(qa(r));
}
function Nv() {
  return Math.round(Math.random() * 9);
}
function kv(r, t) {
  return t === 0 ? r : kv(t, r % t);
}
function bf(r, t) {
  return r == null ? t : t == null ? r : r * t / kv(r, t);
}
var r_ = "[ECharts] ", Cf = {}, i_ = typeof console < "u" && console.warn && console.log;
function mo(r, t, e) {
  if (i_) {
    if (e) {
      if (Cf[t])
        return;
      Cf[t] = !0;
    }
    console[r](r_ + t);
  }
}
function n_(r, t) {
  mo("log", r, t);
}
function _e(r, t) {
  mo("warn", r, t);
}
function Lt(r, t) {
  mo("error", r, t);
}
function Ne(r) {
  process.env.NODE_ENV !== "production" && mo("warn", "DEPRECATED: " + r, !0);
}
function wt(r, t, e) {
  process.env.NODE_ENV !== "production" && Ne((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function Za() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : av(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : J(n) ? "function () { ... }" : Ig(n) ? n + "" : null;
    };
    e = Z(r, function(n) {
      if (k(n))
        return n;
      var a = i(n);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(n, function(o, s) {
            var l = i(s);
            return l ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return e;
}
function Wt(r) {
  throw new Error(r);
}
var Bv = "series\0", a_ = "\0_ec_\0";
function Bt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function vl(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var xf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function wo(r) {
  return F(r) && !N(r) && !(r instanceof Date) ? r.value : r;
}
function o_(r) {
  return F(r) && !(r instanceof Array);
}
function s_(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = j();
  E(t, function(l, u) {
    if (!F(l)) {
      t[u] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (l.id != null && !Ef(l.id) && Df(l.id), l.name != null && !Ef(l.name) && Df(l.name));
  });
  var s = l_(r, o, e);
  return (i || n) && u_(s, r, o, t), i && f_(s, t), i || n ? h_(s, t, n) : a && c_(s, t), v_(s), s;
}
function l_(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || xi(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function u_(r, t, e, i) {
  E(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = wn(n.id), s = e.get(o);
      if (s != null) {
        var l = r[s];
        q(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = n, l.existing = t[s], i[a] = null;
      }
    }
  });
}
function f_(r, t) {
  E(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !xi(e) && !xi(a) && Fv("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function h_(r, t, e) {
  E(t, function(i) {
    if (i) {
      for (
        var n, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (n = r[a]) && (n.newOption || xi(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !Fv("id", i, n.existing));
      )
        a++;
      n ? (n.newOption = i, n.brandNew = e) : r.push({
        newOption: i,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function c_(r, t) {
  E(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function v_(r) {
  var t = j();
  E(r, function(e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }), E(r, function(e) {
    var i = e.newOption;
    q(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {});
  }), E(r, function(e, i) {
    var n = e.existing, a = e.newOption, o = e.keyInfo;
    if (F(a)) {
      if (o.name = a.name != null ? wn(a.name) : n ? n.name : Bv + i, n)
        o.id = wn(n.id);
      else if (a.id != null)
        o.id = wn(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function Fv(r, t, e) {
  var i = Oe(t[r], null), n = Oe(e[r], null);
  return i != null && n != null && i === n;
}
function wn(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return Oe(r, "");
}
function Oe(r, t) {
  return r == null ? t : k(r) ? r : yt(r) || za(r) ? r + "" : t;
}
function Df(r) {
  process.env.NODE_ENV !== "production" && _e("`" + r + "` is invalid id or name. Must be a string or number.");
}
function Ef(r) {
  return za(r) || Ov(r);
}
function nu(r) {
  var t = r.name;
  return !!(t && t.indexOf(Bv));
}
function xi(r) {
  return r && r.id != null && wn(r.id).indexOf(a_) === 0;
}
function d_(r, t, e) {
  E(r, function(i) {
    var n = i.newOption;
    F(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = p_(t, n, i.existing, e));
  });
}
function p_(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function Hn(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return N(t.dataIndex) ? Z(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return N(t.name) ? Z(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function Tt() {
  var r = "__ec_inner_" + g_++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var g_ = Nv();
function rs(r, t, e) {
  var i = au(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, l = e ? e.defaultMainType : null;
  return !n && l && a.set(l, {}), a.each(function(u, f) {
    var h = Gn(r, f, u, {
      useDefault: l === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function au(r, t) {
  var e;
  if (k(r)) {
    var i = {};
    i[r + "Index"] = 0, e = i;
  } else
    e = r;
  var n = j(), a = {}, o = !1;
  return E(e, function(s, l) {
    if (l === "dataIndex" || l === "dataIndexInside") {
      a[l] = s;
      return;
    }
    var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], h = (u[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && at(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var v = n.get(f) || n.set(f, {});
      v[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: n,
    others: a
  };
}
var ou = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Gn(r, t, e, i) {
  i = i || ou;
  var n = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: n != null || a != null || o != null
  };
  if (!s.specified) {
    var l = void 0;
    return s.models = i.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
  }
  return n === "none" || n === !1 ? (q(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (n === "all" && (q(i.enableAll, '`"all"` is not a valid value on index option.'), n = a = o = null), s.models = r.queryComponents({
    mainType: t,
    index: n,
    id: a,
    name: o
  }), s);
}
function Vv(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function y_(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function __(r) {
  return r === "auto" ? z.domSupported ? "html" : "richText" : r || "html";
}
var m_ = ".", Sr = "___EC__COMPONENT__CONTAINER___", zv = "___EC__EXTENDED_CLASS___";
function Le(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(m_);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function w_(r) {
  q(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function S_(r) {
  return !!(r && r[zv]);
}
function su(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && E(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var i = this, n;
    return T_(i) ? n = /** @class */
    function(a) {
      vt(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, Ag(n, this)), R(n.prototype, e), n[zv] = !0, n.extend = this.extend, n.superCall = x_, n.superApply = D_, n.superClass = i, n;
  };
}
function T_(r) {
  return J(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function Hv(r, t) {
  r.extend = t.extend;
}
var b_ = Math.round(Math.random() * 10);
function C_(r) {
  var t = ["__\0is_clz", b_++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && q(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function x_(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function D_(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function lu(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      w_(n), i.prototype.type = n;
      var a = Le(n);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = i;
      else if (a.sub !== Sr) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, r.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[Sr] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(i) {
    var n = Le(i), a = [], o = t[n.main];
    return o && o[Sr] ? E(o, function(s, l) {
      l !== Sr && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = Le(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return E(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = Le(i), a = t[n.main];
    return a && a[Sr];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[Sr]) && (n = t[i.main] = {}, n[Sr] = !0), n;
  }
}
function In(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var l = r[s][1];
      if (!(n && at(n, l) >= 0 || a && at(a, l) < 0)) {
        var u = i.getShallow(l, t);
        u != null && (o[r[s][0]] = u);
      }
    }
    return o;
  };
}
var E_ = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], A_ = In(E_), M_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return A_(this, t, e);
    }, r;
  }()
), dl = new zn(50);
function P_(r) {
  if (typeof r == "string") {
    var t = dl.get(r);
    return t && t.image;
  } else
    return r;
}
function Gv(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = dl.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !So(t) && a.pending.push(o)) : (t = Pi.loadImage(r, Af, Af), t.__zrImageSrc = r, dl.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function Af() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function So(r) {
  return r && r.width && r.height;
}
var is = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function I_(r, t, e, i, n, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Uv(e, i, n, a);
  for (var s = !1, l = {}, u = 0, f = o.length; u < f; u++)
    Wv(l, o[u], a), o[u] = l.textLine, s = s || l.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function Uv(r, t, e, i) {
  i = i || {};
  var n = R({}, i);
  n.font = t, e = W(e, "..."), n.maxIterations = W(i.maxIterations, 2);
  var a = n.minChar = W(i.minChar, 0);
  n.cnCharWidth = te("国", t);
  var o = n.ascCharWidth = te("a", t);
  n.placeholder = W(i.placeholder, "");
  for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++)
    s -= o;
  var u = te(e, t);
  return u > s && (e = "", u = 0), s = r - u, n.ellipsis = e, n.ellipsisWidth = u, n.contentWidth = s, n.containerWidth = r, n;
}
function Wv(r, t, e) {
  var i = e.containerWidth, n = e.font, a = e.contentWidth;
  if (!i) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = te(t, n);
  if (o <= i) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var l = s === 0 ? L_(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, l), o = te(t, n);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function L_(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function R_(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, n = t.font, a = e === "truncate", o = iu(n), s = W(t.lineHeight, o), l = !!t.backgroundColor, u = t.lineOverflow === "truncate", f = !1, h = t.width, v;
  h != null && (e === "break" || e === "breakAll") ? v = r ? Yv(r, t.font, h, e === "breakAll", 0).lines : [] : v = r ? r.split(`
`) : [];
  var c = v.length * s, d = W(t.height, c);
  if (c > d && u) {
    var y = Math.floor(d / s);
    f = f || v.length > y, v = v.slice(0, y);
  }
  if (r && a && h != null)
    for (var p = Uv(h, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), g = {}, _ = 0; _ < v.length; _++)
      Wv(g, v[_], p), v[_] = g.textLine, f = f || g.isTruncated;
  for (var m = d, w = 0, _ = 0; _ < v.length; _++)
    w = Math.max(te(v[_], n), w);
  h == null && (h = w);
  var S = w;
  return i && (m += i[0] + i[2], S += i[1] + i[3], h += i[1] + i[3]), l && (S = h), {
    lines: v,
    height: d,
    outerWidth: S,
    outerHeight: m,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: w,
    contentHeight: c,
    width: h,
    isTruncated: f
  };
}
var O_ = /* @__PURE__ */ function() {
  function r() {
  }
  return r;
}(), Mf = /* @__PURE__ */ function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), N_ = /* @__PURE__ */ function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
}();
function k_(r, t) {
  var e = new N_();
  if (r != null && (r += ""), !r)
    return e;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = is.lastIndex = 0, l; (l = is.exec(r)) != null; ) {
    var u = l.index;
    u > s && ns(e, r.substring(s, u), t, o), ns(e, l[2], t, o, l[1]), s = is.lastIndex;
  }
  s < r.length && ns(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, v = 0, c = t.padding, d = a === "truncate", y = t.lineOverflow === "truncate", p = {};
  function g($, K, U) {
    $.width = K, $.lineHeight = U, h += U, v = Math.max(v, K);
  }
  t: for (var _ = 0; _ < e.lines.length; _++) {
    for (var m = e.lines[_], w = 0, S = 0, T = 0; T < m.tokens.length; T++) {
      var b = m.tokens[T], x = b.styleName && t.rich[b.styleName] || {}, C = b.textPadding = x.padding, D = C ? C[1] + C[3] : 0, A = b.font = x.font || t.font;
      b.contentHeight = iu(A);
      var M = W(x.height, b.contentHeight);
      if (b.innerHeight = M, C && (M += C[0] + C[2]), b.height = M, b.lineHeight = pn(x.lineHeight, t.lineHeight, M), b.align = x && x.align || t.align, b.verticalAlign = x && x.verticalAlign || "middle", y && n != null && h + b.lineHeight > n) {
        var I = e.lines.length;
        T > 0 ? (m.tokens = m.tokens.slice(0, T), g(m, S, w), e.lines = e.lines.slice(0, _ + 1)) : e.lines = e.lines.slice(0, _), e.isTruncated = e.isTruncated || e.lines.length < I;
        break t;
      }
      var P = x.width, L = P == null || P === "auto";
      if (typeof P == "string" && P.charAt(P.length - 1) === "%")
        b.percentWidth = P, f.push(b), b.contentWidth = te(b.text, A);
      else {
        if (L) {
          var O = x.backgroundColor, V = O && O.image;
          V && (V = P_(V), So(V) && (b.width = Math.max(b.width, V.width * M / V.height)));
        }
        var Y = d && i != null ? i - S : null;
        Y != null && Y < b.width ? !L || Y < D ? (b.text = "", b.width = b.contentWidth = 0) : (I_(p, b.text, Y - D, A, t.ellipsis, { minChar: t.truncateMinChar }), b.text = p.text, e.isTruncated = e.isTruncated || p.isTruncated, b.width = b.contentWidth = te(b.text, A)) : b.contentWidth = te(b.text, A);
      }
      b.width += D, S += b.width, x && (w = Math.max(w, b.lineHeight));
    }
    g(m, S, w);
  }
  e.outerWidth = e.width = W(i, v), e.outerHeight = e.height = W(n, h), e.contentHeight = h, e.contentWidth = v, c && (e.outerWidth += c[1] + c[3], e.outerHeight += c[0] + c[2]);
  for (var _ = 0; _ < f.length; _++) {
    var b = f[_], B = b.percentWidth;
    b.width = parseInt(B, 10) / 100 * e.width;
  }
  return e;
}
function ns(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, l = o.font || e.font, u = !1, f, h;
  if (i) {
    var v = o.padding, c = v ? v[1] + v[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Ci(o.width, i.width) + c;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), u = !0), i.accumWidth = d;
    } else {
      var y = Yv(t, l, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = y.accumWidth + c, h = y.linesWidths, f = y.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], _ = new O_();
    if (_.styleName = n, _.text = g, _.isLineHolder = !g && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[p] : te(g, l), !p && !u) {
      var m = (s[s.length - 1] || (s[0] = new Mf())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = _ : (g || !w || a) && m.push(_);
    } else
      s.push(new Mf([_]));
  }
}
function B_(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var F_ = hr(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function V_(r) {
  return B_(r) ? !!F_[r] : !0;
}
function Yv(r, t, e, i, n) {
  for (var a = [], o = [], s = "", l = "", u = 0, f = 0, h = 0; h < r.length; h++) {
    var v = r.charAt(h);
    if (v === `
`) {
      l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
      continue;
    }
    var c = te(v, t), d = i ? !1 : !V_(v);
    if (a.length ? f + c > e : n + f + c > e) {
      f ? (s || l) && (d ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += v, u += c, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = v, f = c)) : d ? (a.push(l), o.push(u), l = v, u = c) : (a.push(v), o.push(c));
      continue;
    }
    f += c, d ? (l += v, u += c) : (l && (s += l, l = "", u = 0), s += v);
  }
  return !a.length && !s && (s = r, l = "", u = 0), l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += n), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var pl = "__zr_style_" + Math.round(Math.random() * 10), Gr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, To = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Gr[pl] = !0;
var Pf = ["z", "z2", "invisible"], z_ = ["invisible"], Un = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var i = gt(e), n = 0; n < i.length; n++) {
      var a = i[n];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, i, n, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && H_(this, e, i) || o && !o[0] && !o[3])
      return !1;
    if (n && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var l = this.parent; l; ) {
        if (l.ignore)
          return !1;
        l = l.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, i) {
    return this.rectContain(e, i);
  }, t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.rectContain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    return a.contain(n[0], n[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, n = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, l = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new it(0, 0, 0, 0)), i ? it.applyTransform(e, n, i) : e.copy(n), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
      var u = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new it(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : R(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= on, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & on);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~on;
  }, t.prototype.createStyle = function(e) {
    return go(Gr, e);
  }, t.prototype.useStyle = function(e) {
    e[pl] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[pl];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, Pf);
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var l = !(i && a), u;
    if (i && i.style ? o ? a ? u = i.style : (u = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(u, i.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(u, i.style)) : l && (u = n.style), u)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(l ? {} : f), l)
          for (var h = gt(f), v = 0; v < h.length; v++) {
            var c = h[v];
            c in u && (u[c] = u[c], this.style[c] = f[c]);
          }
        for (var d = gt(u), v = 0; v < d.length; v++) {
          var c = d[v];
          this.style[c] = this.style[c];
        }
        this._transitionState(e, {
          style: u
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(u);
    for (var y = this.__inHover ? z_ : Pf, v = 0; v < y.length; v++) {
      var c = y[v];
      i && i[c] != null ? this[c] = i[c] : l && n[c] != null && (this[c] = n[c]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (n = n || {}, this._mergeStyle(n, o.style));
    }
    return n && (i.style = n), i;
  }, t.prototype._mergeStyle = function(e, i) {
    return R(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return To;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Jt | on;
  }(), t;
}(yo), as = new it(0, 0, 0, 0), os = new it(0, 0, 0, 0);
function H_(r, t, e) {
  return as.copy(r.getBoundingRect()), r.transform && as.applyTransform(r.transform), os.width = t, os.height = e, !as.intersect(os);
}
var he = Math.min, ce = Math.max, ss = Math.sin, ls = Math.cos, Tr = Math.PI * 2, ra = Li(), ia = Li(), na = Li();
function If(r, t, e, i, n, a) {
  n[0] = he(r, e), n[1] = he(t, i), a[0] = ce(r, e), a[1] = ce(t, i);
}
var Lf = [], Rf = [];
function G_(r, t, e, i, n, a, o, s, l, u) {
  var f = wv, h = kt, v = f(r, e, n, o, Lf);
  l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
  for (var c = 0; c < v; c++) {
    var d = h(r, e, n, o, Lf[c]);
    l[0] = he(d, l[0]), u[0] = ce(d, u[0]);
  }
  v = f(t, i, a, s, Rf);
  for (var c = 0; c < v; c++) {
    var y = h(t, i, a, s, Rf[c]);
    l[1] = he(y, l[1]), u[1] = ce(y, u[1]);
  }
  l[0] = he(r, l[0]), u[0] = ce(r, u[0]), l[0] = he(o, l[0]), u[0] = ce(o, u[0]), l[1] = he(t, l[1]), u[1] = ce(t, u[1]), l[1] = he(s, l[1]), u[1] = ce(s, u[1]);
}
function U_(r, t, e, i, n, a, o, s) {
  var l = Sv, u = Ut, f = ce(he(l(r, e, n), 1), 0), h = ce(he(l(t, i, a), 1), 0), v = u(r, e, n, f), c = u(t, i, a, h);
  o[0] = he(r, n, v), o[1] = he(t, a, c), s[0] = ce(r, n, v), s[1] = ce(t, a, c);
}
function W_(r, t, e, i, n, a, o, s, l) {
  var u = di, f = pi, h = Math.abs(n - a);
  if (h % Tr < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - i, l[0] = r + e, l[1] = t + i;
    return;
  }
  if (ra[0] = ls(n) * e + r, ra[1] = ss(n) * i + t, ia[0] = ls(a) * e + r, ia[1] = ss(a) * i + t, u(s, ra, ia), f(l, ra, ia), n = n % Tr, n < 0 && (n = n + Tr), a = a % Tr, a < 0 && (a = a + Tr), n > a && !o ? a += Tr : n < a && o && (n += Tr), o) {
    var v = a;
    a = n, n = v;
  }
  for (var c = 0; c < a; c += Math.PI / 2)
    c > n && (na[0] = ls(c) * e + r, na[1] = ss(c) * i + t, u(s, na, s), f(l, na, l));
}
var tt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, br = [], Cr = [], Ce = [], Qe = [], xe = [], De = [], us = Math.min, fs = Math.max, xr = Math.cos, Dr = Math.sin, Ge = Math.abs, gl = Math.PI, ir = gl * 2, hs = typeof Float32Array < "u", Ui = [];
function cs(r) {
  var t = Math.round(r / gl * 1e8) / 1e8;
  return t % 2 * gl;
}
function $v(r, t) {
  var e = cs(r[0]);
  e < 0 && (e += ir);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= ir ? n = e + ir : t && e - n >= ir ? n = e - ir : !t && e > n ? n = e + (ir - cs(e - n)) : t && e < n && (n = e - (ir - cs(n - e))), r[0] = e, r[1] = n;
}
var Di = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = Ge(i / $a / t) || 0, this._uy = Ge(i / $a / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(tt.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = Ge(t - this._xi), n = Ge(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(tt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(tt.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(tt.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), Ui[0] = n, Ui[1] = a, $v(Ui, o), n = Ui[0], a = Ui[1];
    var s = a - n;
    return this.addData(tt.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = xr(a) * i + t, this._yi = Dr(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(tt.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(tt.Z);
    var t = this._ctx, e = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = i, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    var e = t.length;
    !(this.data && this.data.length === e) && hs && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++)
      this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
      i += t[a].len();
    hs && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
    for (var a = 0; a < e; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[n++] = o[s];
    this._len = n;
  }, r.prototype.addData = function(t, e, i, n, a, o, s, l, u) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, hs && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    Ce[0] = Ce[1] = xe[0] = xe[1] = Number.MAX_VALUE, Qe[0] = Qe[1] = De[0] = De[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], l = o === 1;
      switch (l && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case tt.M:
          e = n = t[o++], i = a = t[o++], xe[0] = n, xe[1] = a, De[0] = n, De[1] = a;
          break;
        case tt.L:
          If(e, i, t[o], t[o + 1], xe, De), e = t[o++], i = t[o++];
          break;
        case tt.C:
          G_(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], xe, De), e = t[o++], i = t[o++];
          break;
        case tt.Q:
          U_(e, i, t[o++], t[o++], t[o], t[o + 1], xe, De), e = t[o++], i = t[o++];
          break;
        case tt.A:
          var u = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], d = t[o++] + c;
          o += 1;
          var y = !t[o++];
          l && (n = xr(c) * h + u, a = Dr(c) * v + f), W_(u, f, h, v, c, d, y, xe, De), e = xr(d) * h + u, i = Dr(d) * v + f;
          break;
        case tt.R:
          n = e = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          If(n, a, n + p, a + g, xe, De);
          break;
        case tt.Z:
          e = n, i = a;
          break;
      }
      di(Ce, Ce, xe), pi(Qe, Qe, De);
    }
    return o === 0 && (Ce[0] = Ce[1] = Qe[0] = Qe[1] = 0), new it(Ce[0], Ce[1], Qe[0] - Ce[0], Qe[1] - Ce[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, l = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var u = this._pathSegLen, f = 0, h = 0, v = 0; v < e; ) {
      var c = t[v++], d = v === 1;
      d && (a = t[v], o = t[v + 1], s = a, l = o);
      var y = -1;
      switch (c) {
        case tt.M:
          a = s = t[v++], o = l = t[v++];
          break;
        case tt.L: {
          var p = t[v++], g = t[v++], _ = p - a, m = g - o;
          (Ge(_) > i || Ge(m) > n || v === e - 1) && (y = Math.sqrt(_ * _ + m * m), a = p, o = g);
          break;
        }
        case tt.C: {
          var w = t[v++], S = t[v++], p = t[v++], g = t[v++], T = t[v++], b = t[v++];
          y = py(a, o, w, S, p, g, T, b, 10), a = T, o = b;
          break;
        }
        case tt.Q: {
          var w = t[v++], S = t[v++], p = t[v++], g = t[v++];
          y = _y(a, o, w, S, p, g, 10), a = p, o = g;
          break;
        }
        case tt.A:
          var x = t[v++], C = t[v++], D = t[v++], A = t[v++], M = t[v++], I = t[v++], P = I + M;
          v += 1, d && (s = xr(M) * D + x, l = Dr(M) * A + C), y = fs(D, A) * us(ir, Math.abs(I)), a = xr(P) * D + x, o = Dr(P) * A + C;
          break;
        case tt.R: {
          s = a = t[v++], l = o = t[v++];
          var L = t[v++], O = t[v++];
          y = L * 2 + O * 2;
          break;
        }
        case tt.Z: {
          var _ = s - a, m = l - o;
          y = Math.sqrt(_ * _ + m * m), a = s, o = l;
          break;
        }
      }
      y >= 0 && (u[h++] = y, f += y);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, l, u, f, h, v, c = e < 1, d, y, p = 0, g = 0, _, m = 0, w, S;
    if (!(c && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, y = this._pathLen, _ = e * y, !_)))
      t: for (var T = 0; T < o; ) {
        var b = i[T++], x = T === 1;
        switch (x && (u = i[T], f = i[T + 1], s = u, l = f), b !== tt.L && m > 0 && (t.lineTo(w, S), m = 0), b) {
          case tt.M:
            s = u = i[T++], l = f = i[T++], t.moveTo(u, f);
            break;
          case tt.L: {
            h = i[T++], v = i[T++];
            var C = Ge(h - u), D = Ge(v - f);
            if (C > n || D > a) {
              if (c) {
                var A = d[g++];
                if (p + A > _) {
                  var M = (_ - p) / A;
                  t.lineTo(u * (1 - M) + h * M, f * (1 - M) + v * M);
                  break t;
                }
                p += A;
              }
              t.lineTo(h, v), u = h, f = v, m = 0;
            } else {
              var I = C * C + D * D;
              I > m && (w = h, S = v, m = I);
            }
            break;
          }
          case tt.C: {
            var P = i[T++], L = i[T++], O = i[T++], V = i[T++], Y = i[T++], B = i[T++];
            if (c) {
              var A = d[g++];
              if (p + A > _) {
                var M = (_ - p) / A;
                Ua(u, P, O, Y, M, br), Ua(f, L, V, B, M, Cr), t.bezierCurveTo(br[1], Cr[1], br[2], Cr[2], br[3], Cr[3]);
                break t;
              }
              p += A;
            }
            t.bezierCurveTo(P, L, O, V, Y, B), u = Y, f = B;
            break;
          }
          case tt.Q: {
            var P = i[T++], L = i[T++], O = i[T++], V = i[T++];
            if (c) {
              var A = d[g++];
              if (p + A > _) {
                var M = (_ - p) / A;
                Wa(u, P, O, M, br), Wa(f, L, V, M, Cr), t.quadraticCurveTo(br[1], Cr[1], br[2], Cr[2]);
                break t;
              }
              p += A;
            }
            t.quadraticCurveTo(P, L, O, V), u = O, f = V;
            break;
          }
          case tt.A:
            var $ = i[T++], K = i[T++], U = i[T++], _t = i[T++], bt = i[T++], Zt = i[T++], Te = i[T++], ee = !i[T++], Kt = U > _t ? U : _t, xt = Ge(U - _t) > 1e-3, dt = bt + Zt, H = !1;
            if (c) {
              var A = d[g++];
              p + A > _ && (dt = bt + Zt * (_ - p) / A, H = !0), p += A;
            }
            if (xt && t.ellipse ? t.ellipse($, K, U, _t, Te, bt, dt, ee) : t.arc($, K, Kt, bt, dt, ee), H)
              break t;
            x && (s = xr(bt) * U + $, l = Dr(bt) * _t + K), u = xr(dt) * U + $, f = Dr(dt) * _t + K;
            break;
          case tt.R:
            s = u = i[T], l = f = i[T + 1], h = i[T++], v = i[T++];
            var X = i[T++], be = i[T++];
            if (c) {
              var A = d[g++];
              if (p + A > _) {
                var Ct = _ - p;
                t.moveTo(h, v), t.lineTo(h + us(Ct, X), v), Ct -= X, Ct > 0 && t.lineTo(h + X, v + us(Ct, be)), Ct -= be, Ct > 0 && t.lineTo(h + fs(X - Ct, 0), v + be), Ct -= X, Ct > 0 && t.lineTo(h, v + fs(be - Ct, 0));
                break t;
              }
              p += A;
            }
            t.rect(h, v, X, be);
            break;
          case tt.Z:
            if (c) {
              var A = d[g++];
              if (p + A > _) {
                var M = (_ - p) / A;
                t.lineTo(u * (1 - M) + s * M, f * (1 - M) + l * M);
                break t;
              }
              p += A;
            }
            t.closePath(), u = s, f = l;
        }
      }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = tt, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
function ei(r, t, e, i, n, a, o) {
  if (n === 0)
    return !1;
  var s = n, l = 0, u = r;
  if (o > t + s && o > i + s || o < t - s && o < i - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    l = (t - i) / (r - e), u = (r * i - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = l * a - o + u, h = f * f / (l * l + 1);
  return h <= s / 2 * s / 2;
}
function Y_(r, t, e, i, n, a, o, s, l, u, f) {
  if (l === 0)
    return !1;
  var h = l;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || u > r + h && u > e + h && u > n + h && u > o + h || u < r - h && u < e - h && u < n - h && u < o - h)
    return !1;
  var v = dy(r, t, e, i, n, a, o, s, u, f);
  return v <= h / 2;
}
function $_(r, t, e, i, n, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  if (l > t + u && l > i + u && l > a + u || l < t - u && l < i - u && l < a - u || s > r + u && s > e + u && s > n + u || s < r - u && s < e - u && s < n - u)
    return !1;
  var f = yy(r, t, e, i, n, a, s, l);
  return f <= u / 2;
}
var Of = Math.PI * 2;
function aa(r) {
  return r %= Of, r < 0 && (r += Of), r;
}
var Wi = Math.PI * 2;
function X_(r, t, e, i, n, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  s -= r, l -= t;
  var f = Math.sqrt(s * s + l * l);
  if (f - u > e || f + u < e)
    return !1;
  if (Math.abs(i - n) % Wi < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = aa(n), n = aa(h);
  } else
    i = aa(i), n = aa(n);
  i > n && (n += Wi);
  var v = Math.atan2(l, s);
  return v < 0 && (v += Wi), v >= i && v <= n || v + Wi >= i && v + Wi <= n;
}
function Er(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var l = o * (e - r) + r;
  return l === n ? 1 / 0 : l > n ? s : 0;
}
var je = Di.CMD, Ar = Math.PI * 2, q_ = 1e-4;
function Z_(r, t) {
  return Math.abs(r - t) < q_;
}
var Ot = [-1, -1, -1], le = [-1, -1];
function K_() {
  var r = le[0];
  le[0] = le[1], le[1] = r;
}
function Q_(r, t, e, i, n, a, o, s, l, u) {
  if (u > t && u > i && u > a && u > s || u < t && u < i && u < a && u < s)
    return 0;
  var f = mv(t, i, a, s, u, Ot);
  if (f === 0)
    return 0;
  for (var h = 0, v = -1, c = void 0, d = void 0, y = 0; y < f; y++) {
    var p = Ot[y], g = p === 0 || p === 1 ? 0.5 : 1, _ = kt(r, e, n, o, p);
    _ < l || (v < 0 && (v = wv(t, i, a, s, le), le[1] < le[0] && v > 1 && K_(), c = kt(t, i, a, s, le[0]), v > 1 && (d = kt(t, i, a, s, le[1]))), v === 2 ? p < le[0] ? h += c < t ? g : -g : p < le[1] ? h += d < c ? g : -g : h += s < d ? g : -g : p < le[0] ? h += c < t ? g : -g : h += s < c ? g : -g);
  }
  return h;
}
function j_(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var l = gy(t, i, a, s, Ot);
  if (l === 0)
    return 0;
  var u = Sv(t, i, a);
  if (u >= 0 && u <= 1) {
    for (var f = 0, h = Ut(t, i, a, u), v = 0; v < l; v++) {
      var c = Ot[v] === 0 || Ot[v] === 1 ? 0.5 : 1, d = Ut(r, e, n, Ot[v]);
      d < o || (Ot[v] < u ? f += h < t ? c : -c : f += a < h ? c : -c);
    }
    return f;
  } else {
    var c = Ot[0] === 0 || Ot[0] === 1 ? 0.5 : 1, d = Ut(r, e, n, Ot[0]);
    return d < o ? 0 : a < t ? c : -c;
  }
}
function J_(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var l = Math.sqrt(e * e - s * s);
  Ot[0] = -l, Ot[1] = l;
  var u = Math.abs(i - n);
  if (u < 1e-4)
    return 0;
  if (u >= Ar - 1e-4) {
    i = 0, n = Ar;
    var f = a ? 1 : -1;
    return o >= Ot[0] + r && o <= Ot[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += Ar, n += Ar);
  for (var v = 0, c = 0; c < 2; c++) {
    var d = Ot[c];
    if (d + r > o) {
      var y = Math.atan2(s, d), f = a ? 1 : -1;
      y < 0 && (y = Ar + y), (y >= i && y <= n || y + Ar >= i && y + Ar <= n) && (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), v += f);
    }
  }
  return v;
}
function Xv(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, h = 0, v, c, d = 0; d < o; ) {
    var y = a[d++], p = d === 1;
    switch (y === je.M && d > 1 && (e || (s += Er(l, u, f, h, i, n))), p && (l = a[d], u = a[d + 1], f = l, h = u), y) {
      case je.M:
        f = a[d++], h = a[d++], l = f, u = h;
        break;
      case je.L:
        if (e) {
          if (ei(l, u, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Er(l, u, a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case je.C:
        if (e) {
          if (Y_(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Q_(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case je.Q:
        if (e) {
          if ($_(l, u, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += j_(l, u, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case je.A:
        var g = a[d++], _ = a[d++], m = a[d++], w = a[d++], S = a[d++], T = a[d++];
        d += 1;
        var b = !!(1 - a[d++]);
        v = Math.cos(S) * m + g, c = Math.sin(S) * w + _, p ? (f = v, h = c) : s += Er(l, u, v, c, i, n);
        var x = (i - g) * w / m + g;
        if (e) {
          if (X_(g, _, w, S, S + T, b, t, x, n))
            return !0;
        } else
          s += J_(g, _, w, S, S + T, b, x, n);
        l = Math.cos(S + T) * m + g, u = Math.sin(S + T) * w + _;
        break;
      case je.R:
        f = l = a[d++], h = u = a[d++];
        var C = a[d++], D = a[d++];
        if (v = f + C, c = h + D, e) {
          if (ei(f, h, v, h, t, i, n) || ei(v, h, v, c, t, i, n) || ei(v, c, f, c, t, i, n) || ei(f, c, f, h, t, i, n))
            return !0;
        } else
          s += Er(v, h, v, c, i, n), s += Er(f, c, f, h, i, n);
        break;
      case je.Z:
        if (e) {
          if (ei(l, u, f, h, t, i, n))
            return !0;
        } else
          s += Er(l, u, f, h, i, n);
        l = f, u = h;
        break;
    }
  }
  return !e && !Z_(u, h) && (s += Er(l, u, f, h, i, n) || 0), s !== 0;
}
function tm(r, t, e) {
  return Xv(r, 0, !1, t, e);
}
function em(r, t, e, i) {
  return Xv(r, t, !0, e, i);
}
var qv = ft({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, Gr), rm = {
  style: ft({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, To.style)
}, vs = Pn.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), st = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var n = this._decalEl = this._decalEl || new t();
      n.buildPath === t.prototype.buildPath && (n.buildPath = function(l) {
        e.buildPath(l, e.shape);
      }), n.silent = !0;
      var a = n.style;
      for (var o in i)
        a[o] !== i[o] && (a[o] = i[o]);
      a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
      for (var s = 0; s < vs.length; ++s)
        n[vs[s]] = this[vs[s]];
      n.__dirty |= Jt;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var i = gt(e);
    this.shape = this.getDefaultShape();
    var n = this.getDefaultStyle();
    n && this.useStyle(n);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = e[o];
      o === "style" ? this.style ? R(this.style, s) : this.useStyle(s) : o === "shape" ? R(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (k(e)) {
        var i = Ya(e, 0);
        return i > 0.5 ? hl : i > 0.2 ? By : cl;
      } else if (e)
        return cl;
    }
    return hl;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (k(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = Ya(e, 0) < fl;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~ci;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Di(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return !(i == null || i === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, i = this.style, n = !e;
    if (n) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & ci) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || n) {
        s.copy(e);
        var l = i.strokeNoScale ? this.getLineScale() : 1, u = i.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          u = Math.max(u, f ?? 4);
        }
        l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect(), o = this.style;
    if (e = n[0], i = n[1], a.contain(e, i)) {
      var s = this.path;
      if (this.hasStroke()) {
        var l = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
        if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), em(s, l / u, e, i)))
          return !0;
      }
      if (this.hasFill())
        return tm(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= ci, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
  }, t.prototype.setShape = function(e, i) {
    var n = this.shape;
    return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : R(n, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & ci);
  }, t.prototype.createStyle = function(e) {
    return go(qv, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = R({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var l = !(i && a), u;
    if (i && i.shape ? o ? a ? u = i.shape : (u = R({}, n.shape), R(u, i.shape)) : (u = R({}, a ? this.shape : n.shape), R(u, i.shape)) : l && (u = n.shape), u)
      if (o) {
        this.shape = R({}, this.shape);
        for (var f = {}, h = gt(u), v = 0; v < h.length; v++) {
          var c = h[v];
          typeof u[c] == "object" ? this.shape[c] = u[c] : f[c] = u[c];
        }
        this._transitionState(e, {
          shape: f
        }, s);
      } else
        this.shape = u, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
    }
    return n && (i.shape = n), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return rm;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = function(a) {
      rt(o, a);
      function o(s) {
        var l = a.call(this, s) || this;
        return e.init && e.init.call(l, s), l;
      }
      return o.prototype.getDefaultStyle = function() {
        return Q(e.style);
      }, o.prototype.getDefaultShape = function() {
        return Q(e.shape);
      }, o;
    }(t);
    for (var n in e)
      typeof e[n] == "function" && (i.prototype[n] = e[n]);
    return i;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = Jt | on | ci;
  }(), t;
}(Un), im = ft({
  strokeFirst: !0,
  font: Yr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, qv), Ka = function(r) {
  rt(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return i != null && i !== "none" && e.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(e) {
    return go(im, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var n = Av(i, e.font, e.textAlign, e.textBaseline);
      if (n.x += e.x || 0, n.y += e.y || 0, this.hasStroke()) {
        var a = e.lineWidth;
        n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a;
      }
      this._rect = n;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  }(), t;
}(Un);
Ka.prototype.type = "tspan";
var nm = ft({
  x: 0,
  y: 0
}, Gr), am = {
  style: ft({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, To.style)
};
function om(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Xr = function(r) {
  rt(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return go(nm, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = om(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return am;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new it(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(Un);
Xr.prototype.type = "image";
function sm(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, l, u, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
  var h;
  s + l > n && (h = s + l, s *= n / h, l *= n / h), u + f > n && (h = u + f, u *= n / h, f *= n / h), l + u > a && (h = l + u, l *= a / h, u *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, i), r.lineTo(e + n - l, i), l !== 0 && r.arc(e + n - l, i + l, l, -Math.PI / 2, 0), r.lineTo(e + n, i + a - u), u !== 0 && r.arc(e + n - u, i + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var yi = Math.round;
function Zv(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (yi(i * 2) === yi(n * 2) && (r.x1 = r.x2 = Br(i, s, !0)), yi(a * 2) === yi(o * 2) && (r.y1 = r.y2 = Br(a, s, !0))), r;
  }
}
function Kv(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Br(i, s, !0), r.y = Br(n, s, !0), r.width = Math.max(Br(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Br(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Br(r, t, e) {
  if (!t)
    return r;
  var i = yi(r * 2);
  return (i + yi(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var lm = /* @__PURE__ */ function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), um = {}, Ft = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new lm();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var l = Kv(um, i, this.style);
      n = l.x, a = l.y, o = l.width, s = l.height, l.r = i.r, i = l;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? sm(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(st);
Ft.prototype.type = "rect";
var Nf = {
  fill: "#000"
}, kf = 2, fm = {
  style: ft({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, To.style)
}, Rt = function(r) {
  rt(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = Nf, i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var i = this._children[e];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, pm(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new it(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], l = s.getBoundingRect(), u = s.getLocalTransform(n);
        u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Nf;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i)
      return e;
    var n = i.rich, a = e.rich || n && {};
    return R(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var n = gt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      e[o] = e[o] || {}, R(e[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return fm;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || Yr, n = e.padding, a = Uf(e), o = R_(a, e), s = ds(e), l = !!e.backgroundColor, u = o.outerHeight, f = o.outerWidth, h = o.contentWidth, v = o.lines, c = o.lineHeight, d = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var y = e.x || 0, p = e.y || 0, g = e.align || d.align || "left", _ = e.verticalAlign || d.verticalAlign || "top", m = y, w = vi(p, o.contentHeight, _);
    if (s || n) {
      var S = ln(y, f, g), T = vi(p, u, _);
      s && this._renderBackground(e, e, S, T, f, u);
    }
    w += c / 2, n && (m = Gf(y, g, n), _ === "top" ? w += n[0] : _ === "bottom" && (w -= n[2]));
    for (var b = 0, x = !1, C = Hf("fill" in e ? e.fill : (x = !0, d.fill)), D = zf("stroke" in e ? e.stroke : !l && (!d.autoStroke || x) ? (b = kf, d.stroke) : null), A = e.textShadowBlur > 0, M = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), I = o.calculatedLineHeight, P = 0; P < v.length; P++) {
      var L = this._getOrCreateChild(Ka), O = L.createStyle();
      L.useStyle(O), O.text = v[P], O.x = m, O.y = w, O.textAlign = g, O.textBaseline = "middle", O.opacity = e.opacity, O.strokeFirst = !0, A && (O.shadowBlur = e.textShadowBlur || 0, O.shadowColor = e.textShadowColor || "transparent", O.shadowOffsetX = e.textShadowOffsetX || 0, O.shadowOffsetY = e.textShadowOffsetY || 0), O.stroke = D, O.fill = C, D && (O.lineWidth = e.lineWidth || b, O.lineDash = e.lineDash, O.lineDashOffset = e.lineDashOffset || 0), O.font = i, Ff(O, e), w += c, M && L.setBoundingRect(new it(ln(O.x, h, O.textAlign), vi(O.y, I, O.textBaseline), h, I));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = Uf(e), n = k_(i, e), a = n.width, o = n.outerWidth, s = n.outerHeight, l = e.padding, u = e.x || 0, f = e.y || 0, h = this._defaultStyle, v = e.align || h.align, c = e.verticalAlign || h.verticalAlign;
    this.isTruncated = !!n.isTruncated;
    var d = ln(u, o, v), y = vi(f, s, c), p = d, g = y;
    l && (p += l[3], g += l[0]);
    var _ = p + a;
    ds(e) && this._renderBackground(e, e, d, y, o, s);
    for (var m = !!e.backgroundColor, w = 0; w < n.lines.length; w++) {
      for (var S = n.lines[w], T = S.tokens, b = T.length, x = S.lineHeight, C = S.width, D = 0, A = p, M = _, I = b - 1, P = void 0; D < b && (P = T[D], !P.align || P.align === "left"); )
        this._placeToken(P, e, x, g, A, "left", m), C -= P.width, A += P.width, D++;
      for (; I >= 0 && (P = T[I], P.align === "right"); )
        this._placeToken(P, e, x, g, M, "right", m), C -= P.width, M -= P.width, I--;
      for (A += (a - (A - p) - (_ - M) - C) / 2; D <= I; )
        P = T[D], this._placeToken(P, e, x, g, A + P.width / 2, "center", m), A += P.width, D++;
      g += x;
    }
  }, t.prototype._placeToken = function(e, i, n, a, o, s, l) {
    var u = i.rich[e.styleName] || {};
    u.text = e.text;
    var f = e.verticalAlign, h = a + n / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + n - e.height / 2);
    var v = !e.isLineHolder && ds(u);
    v && this._renderBackground(u, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var c = !!u.backgroundColor, d = e.textPadding;
    d && (o = Gf(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var y = this._getOrCreateChild(Ka), p = y.createStyle();
    y.useStyle(p);
    var g = this._defaultStyle, _ = !1, m = 0, w = Hf("fill" in u ? u.fill : "fill" in i ? i.fill : (_ = !0, g.fill)), S = zf("stroke" in u ? u.stroke : "stroke" in i ? i.stroke : !c && !l && (!g.autoStroke || _) ? (m = kf, g.stroke) : null), T = u.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = e.text, p.x = o, p.y = h, T && (p.shadowBlur = u.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = u.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = u.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = u.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || Yr, p.opacity = pn(u.opacity, i.opacity, 1), Ff(p, u), S && (p.lineWidth = pn(u.lineWidth, i.lineWidth, m), p.lineDash = W(u.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = S), w && (p.fill = w);
    var b = e.contentWidth, x = e.contentHeight;
    y.setBoundingRect(new it(ln(p.x, b, p.textAlign), vi(p.y, x, p.textBaseline), b, x));
  }, t.prototype._renderBackground = function(e, i, n, a, o, s) {
    var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, h = l && l.image, v = l && !h, c = e.borderRadius, d = this, y, p;
    if (v || e.lineHeight || u && f) {
      y = this._getOrCreateChild(Ft), y.useStyle(y.createStyle()), y.style.fill = null;
      var g = y.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = c, y.dirtyShape();
    }
    if (v) {
      var _ = y.style;
      _.fill = l || null, _.fillOpacity = W(e.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(Xr), p.onload = function() {
        d.dirtyStyle();
      };
      var m = p.style;
      m.image = l.image, m.x = n, m.y = a, m.width = o, m.height = s;
    }
    if (u && f) {
      var _ = y.style;
      _.lineWidth = u, _.stroke = f, _.strokeOpacity = W(e.strokeOpacity, 1), _.lineDash = e.borderDash, _.lineDashOffset = e.borderDashOffset || 0, y.strokeContainThreshold = 0, y.hasFill() && y.hasStroke() && (_.strokeFirst = !0, _.lineWidth *= 2);
    }
    var w = (y || p).style;
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = pn(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return dm(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      vm(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && Ie(i) || e.textFont || e.font;
  }, t;
}(Un), hm = { left: !0, right: 1, center: 1 }, cm = { top: 1, bottom: 1, middle: 1 }, Bf = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function vm(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Xl + "px" : r + "px";
}
function Ff(r, t) {
  for (var e = 0; e < Bf.length; e++) {
    var i = Bf[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function dm(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function pm(r) {
  return Vf(r), E(r.rich, Vf), r;
}
function Vf(r) {
  if (r) {
    r.font = Rt.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || hm[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || cm[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = ov(r.padding));
  }
}
function zf(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Hf(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Gf(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function Uf(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function ds(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var nt = Tt(), gm = function(r, t, e, i) {
  if (i) {
    var n = nt(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, n.ssrType = "chart", i.type === "group" && i.traverse(function(a) {
      var o = nt(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, Wf = 1, Yf = {}, Qv = Tt(), uu = Tt(), jv = 0, fu = 1, hu = 2, ke = ["emphasis", "blur", "select"], Qa = ["normal", "emphasis", "blur", "select"], ym = 10, _m = 9, Ur = "highlight", Ia = "downplay", Sn = "select", La = "unselect", Tn = "toggleSelect";
function ri(r) {
  return r != null && r !== "none";
}
function bo(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Jv(r) {
  bo(r, "emphasis", hu);
}
function td(r) {
  r.hoverState === hu && bo(r, "normal", jv);
}
function cu(r) {
  bo(r, "blur", fu);
}
function ed(r) {
  r.hoverState === fu && bo(r, "normal", jv);
}
function mm(r) {
  r.selected = !0;
}
function wm(r) {
  r.selected = !1;
}
function $f(r, t, e) {
  t(r, e);
}
function Ze(r, t, e) {
  $f(r, t, e), r.isGroup && r.traverse(function(i) {
    $f(i, t, e);
  });
}
function Sm(r, t, e, i) {
  for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], l = n[s];
    a[s] = l ?? (i && i[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var u = r.animators[o];
    u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t);
  }
  return a;
}
function Tm(r, t, e, i) {
  var n = e && at(e, "select") >= 0, a = !1;
  if (r instanceof st) {
    var o = Qv(r), s = n && o.selectFill || o.normalFill, l = n && o.selectStroke || o.normalStroke;
    if (ri(s) || ri(l)) {
      i = i || {};
      var u = i.style || {};
      u.fill === "inherit" ? (a = !0, i = R({}, i), u = R({}, u), u.fill = s) : !ri(u.fill) && ri(s) ? (a = !0, i = R({}, i), u = R({}, u), u.fill = uf(s)) : !ri(u.stroke) && ri(l) && (a || (i = R({}, i), u = R({}, u)), u.stroke = uf(l)), i.style = u;
    }
  }
  if (i && i.z2 == null) {
    a || (i = R({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? ym);
  }
  return i;
}
function bm(r, t, e) {
  if (e && e.z2 == null) {
    e = R({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? _m);
  }
  return e;
}
function Cm(r, t, e) {
  var i = at(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : Sm(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = R({}, e), o = R({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function ps(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return Tm(this, r, t, e);
    if (r === "blur")
      return Cm(this, r, e);
    if (r === "select")
      return bm(this, r, e);
  }
  return e;
}
function xm(r) {
  r.stateProxy = ps;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = ps), e && (e.stateProxy = ps);
}
function Xf(r, t) {
  !ad(r, t) && !r.__highByOuter && Ze(r, Jv);
}
function qf(r, t) {
  !ad(r, t) && !r.__highByOuter && Ze(r, td);
}
function yl(r, t) {
  r.__highByOuter |= 1 << (t || 0), Ze(r, Jv);
}
function _l(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Ze(r, td);
}
function Dm(r) {
  Ze(r, cu);
}
function rd(r) {
  Ze(r, ed);
}
function id(r) {
  Ze(r, mm);
}
function nd(r) {
  Ze(r, wm);
}
function ad(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function od(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = uu(a), s = n === "series", l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(l), o.isBlured && (l.group.traverse(function(u) {
      ed(u);
    }), s && e.push(a)), o.isBlured = !1;
  }), E(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function ml(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(u, f) {
    for (var h = 0; h < f.length; h++) {
      var v = u.getItemGraphicEl(f[h]);
      v && rd(v);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var l = [];
    n.eachSeries(function(u) {
      var f = o === u, h = u.coordinateSystem;
      h && h.master && (h = h.master);
      var v = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !v || t === "series" && f)) {
        var c = i.getViewOfSeriesModel(u);
        if (c.group.traverse(function(p) {
          p.__highByOuter && f && t === "self" || cu(p);
        }), Xt(t))
          a(u.getData(), t);
        else if (F(t))
          for (var d = gt(t), y = 0; y < d.length; y++)
            a(u.getData(d[y]), t[d[y]]);
        l.push(u), uu(u).isBlured = !0;
      }
    }), n.eachComponent(function(u, f) {
      if (u !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(l, !0, n);
      }
    });
  }
}
function wl(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      uu(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        cu(a);
      });
    }
  }
}
function Em(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && Lt("Unknown dataType " + t.dataType);
    return;
  }
  var a = Hn(n, t);
  a = (N(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), l = 0; !o && l < s; )
      o = n.getItemGraphicEl(l++);
  if (o) {
    var u = nt(o);
    ml(i, u.focus, u.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && ml(i, f, h, e);
  }
}
function vu(r, t, e, i) {
  var n = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return n;
  var a = i.getModel().getComponent(r, t);
  if (!a)
    return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return n;
  for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
    if (process.env.NODE_ENV !== "production" && !Ei(s[u]) && Lt("param should be highDownDispatcher"), nt(s[u]).focus === "self") {
      l = !0;
      break;
    }
  return {
    focusSelf: l,
    dispatchers: s
  };
}
function Am(r, t, e) {
  process.env.NODE_ENV !== "production" && !Ei(r) && Lt("param should be highDownDispatcher");
  var i = nt(r), n = vu(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && wl(i.componentMainType, i.componentIndex, e), E(a, function(s) {
    return Xf(s, t);
  })) : (ml(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && wl(i.componentMainType, i.componentIndex, e), Xf(r, t));
}
function Mm(r, t, e) {
  process.env.NODE_ENV !== "production" && !Ei(r) && Lt("param should be highDownDispatcher"), od(e);
  var i = nt(r), n = vu(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? E(n, function(a) {
    return qf(a, t);
  }) : qf(r, t);
}
function Pm(r, t, e) {
  if (Tl(t)) {
    var i = t.dataType, n = r.getData(i), a = Hn(n, t);
    N(a) || (a = [a]), r[t.type === Tn ? "toggleSelect" : t.type === Sn ? "select" : "unselect"](a, i);
  }
}
function Zf(r) {
  var t = r.getAllData();
  E(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? id(a) : nd(a);
    });
  });
}
function Im(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var i = e.getAllData();
    E(i, function(n) {
      n.data;
      var a = n.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function Sl(r, t, e) {
  sd(r, !0), Ze(r, xm), Om(r, t, e);
}
function Lm(r) {
  sd(r, !1);
}
function Rm(r, t, e, i) {
  i ? Lm(r) : Sl(r, t, e);
}
function Om(r, t, e) {
  var i = nt(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
var Kf = ["emphasis", "blur", "select"], Nm = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function km(r, t, e, i) {
  e = e || "itemStyle";
  for (var n = 0; n < Kf.length; n++) {
    var a = Kf[n], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[Nm[e]]();
  }
}
function sd(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function Ei(r) {
  return !!(r && r.__highDownDispatcher);
}
function Bm(r) {
  var t = Yf[r];
  return t == null && Wf <= 32 && (t = Yf[r] = Wf++), t;
}
function Tl(r) {
  var t = r.type;
  return t === Sn || t === La || t === Tn;
}
function Qf(r) {
  var t = r.type;
  return t === Ur || t === Ia;
}
function Fm(r) {
  var t = Qv(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var ii = Di.CMD, Vm = [[], [], []], jf = Math.sqrt, zm = Math.atan2;
function Hm(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, l, u, f = ii.M, h = ii.C, v = ii.L, c = ii.R, d = ii.A, y = ii.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (n = e[o++], s = o, a = 0, n) {
        case f:
          a = 1;
          break;
        case v:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case y:
          a = 2;
          break;
        case d:
          var p = t[4], g = t[5], _ = jf(t[0] * t[0] + t[1] * t[1]), m = jf(t[2] * t[2] + t[3] * t[3]), w = zm(-t[1] / m, t[0] / _);
          e[o] *= _, e[o++] += p, e[o] *= m, e[o++] += g, e[o++] *= _, e[o++] *= m, e[o++] += w, e[o++] += w, o += 2, s = o;
          break;
        case c:
          u[0] = e[o++], u[1] = e[o++], Re(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], Re(u, u, t), e[s++] = u[0], e[s++] = u[1];
      }
      for (l = 0; l < a; l++) {
        var S = Vm[l];
        S[0] = e[o++], S[1] = e[o++], Re(S, S, t), e[s++] = S[0], e[s++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var gs = Math.sqrt, oa = Math.sin, sa = Math.cos, Yi = Math.PI;
function Jf(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function bl(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Jf(r) * Jf(t));
}
function th(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(bl(r, t));
}
function eh(r, t, e, i, n, a, o, s, l, u, f) {
  var h = l * (Yi / 180), v = sa(h) * (r - e) / 2 + oa(h) * (t - i) / 2, c = -1 * oa(h) * (r - e) / 2 + sa(h) * (t - i) / 2, d = v * v / (o * o) + c * c / (s * s);
  d > 1 && (o *= gs(d), s *= gs(d));
  var y = (n === a ? -1 : 1) * gs((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, p = y * o * c / s, g = y * -s * v / o, _ = (r + e) / 2 + sa(h) * p - oa(h) * g, m = (t + i) / 2 + oa(h) * p + sa(h) * g, w = th([1, 0], [(v - p) / o, (c - g) / s]), S = [(v - p) / o, (c - g) / s], T = [(-1 * v - p) / o, (-1 * c - g) / s], b = th(S, T);
  if (bl(S, T) <= -1 && (b = Yi), bl(S, T) >= 1 && (b = 0), b < 0) {
    var x = Math.round(b / Yi * 1e6) / 1e6;
    b = Yi * 2 + x % 2 * Yi;
  }
  f.addData(u, _, m, o, s, w, b, h, a);
}
var Gm = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, Um = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function Wm(r) {
  var t = new Di();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = Di.CMD, l = r.match(Gm);
  if (!l)
    return t;
  for (var u = 0; u < l.length; u++) {
    for (var f = l[u], h = f.charAt(0), v = void 0, c = f.match(Um) || [], d = c.length, y = 0; y < d; y++)
      c[y] = parseFloat(c[y]);
    for (var p = 0; p < d; ) {
      var g = void 0, _ = void 0, m = void 0, w = void 0, S = void 0, T = void 0, b = void 0, x = e, C = i, D = void 0, A = void 0;
      switch (h) {
        case "l":
          e += c[p++], i += c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "L":
          e = c[p++], i = c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "m":
          e += c[p++], i += c[p++], v = s.M, t.addData(v, e, i), n = e, a = i, h = "l";
          break;
        case "M":
          e = c[p++], i = c[p++], v = s.M, t.addData(v, e, i), n = e, a = i, h = "L";
          break;
        case "h":
          e += c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "H":
          e = c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "v":
          i += c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "V":
          i = c[p++], v = s.L, t.addData(v, e, i);
          break;
        case "C":
          v = s.C, t.addData(v, c[p++], c[p++], c[p++], c[p++], c[p++], c[p++]), e = c[p - 2], i = c[p - 1];
          break;
        case "c":
          v = s.C, t.addData(v, c[p++] + e, c[p++] + i, c[p++] + e, c[p++] + i, c[p++] + e, c[p++] + i), e += c[p - 2], i += c[p - 1];
          break;
        case "S":
          g = e, _ = i, D = t.len(), A = t.data, o === s.C && (g += e - A[D - 4], _ += i - A[D - 3]), v = s.C, x = c[p++], C = c[p++], e = c[p++], i = c[p++], t.addData(v, g, _, x, C, e, i);
          break;
        case "s":
          g = e, _ = i, D = t.len(), A = t.data, o === s.C && (g += e - A[D - 4], _ += i - A[D - 3]), v = s.C, x = e + c[p++], C = i + c[p++], e += c[p++], i += c[p++], t.addData(v, g, _, x, C, e, i);
          break;
        case "Q":
          x = c[p++], C = c[p++], e = c[p++], i = c[p++], v = s.Q, t.addData(v, x, C, e, i);
          break;
        case "q":
          x = c[p++] + e, C = c[p++] + i, e += c[p++], i += c[p++], v = s.Q, t.addData(v, x, C, e, i);
          break;
        case "T":
          g = e, _ = i, D = t.len(), A = t.data, o === s.Q && (g += e - A[D - 4], _ += i - A[D - 3]), e = c[p++], i = c[p++], v = s.Q, t.addData(v, g, _, e, i);
          break;
        case "t":
          g = e, _ = i, D = t.len(), A = t.data, o === s.Q && (g += e - A[D - 4], _ += i - A[D - 3]), e += c[p++], i += c[p++], v = s.Q, t.addData(v, g, _, e, i);
          break;
        case "A":
          m = c[p++], w = c[p++], S = c[p++], T = c[p++], b = c[p++], x = e, C = i, e = c[p++], i = c[p++], v = s.A, eh(x, C, e, i, T, b, m, w, S, v, t);
          break;
        case "a":
          m = c[p++], w = c[p++], S = c[p++], T = c[p++], b = c[p++], x = e, C = i, e += c[p++], i += c[p++], v = s.A, eh(x, C, e, i, T, b, m, w, S, v, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (v = s.Z, t.addData(v), e = n, i = a), o = v;
  }
  return t.toStatic(), t;
}
var ld = function(r) {
  rt(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(st);
function ud(r) {
  return r.setData != null;
}
function fd(r, t) {
  var e = Wm(r), i = R({}, t);
  return i.buildPath = function(n) {
    if (ud(n)) {
      n.setData(e.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      e.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    Hm(e, n), this.dirtyShape();
  }, i;
}
function Ym(r, t) {
  return new ld(fd(r, t));
}
function $m(r, t) {
  var e = fd(r, t), i = function(n) {
    rt(a, n);
    function a(o) {
      var s = n.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  }(ld);
  return i;
}
function Xm(r, t) {
  for (var e = [], i = r.length, n = 0; n < i; n++) {
    var a = r[n];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new st(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (ud(s)) {
      s.appendPath(e);
      var l = s.getContext();
      l && s.rebuildPath(l, 1);
    }
  }, o;
}
var qm = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), Co = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new qm();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(st);
Co.prototype.type = "circle";
var Zm = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
}(), du = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Zm();
  }, t.prototype.buildPath = function(e, i) {
    var n = 0.5522848, a = i.cx, o = i.cy, s = i.rx, l = i.ry, u = s * n, f = l * n;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
  }, t;
}(st);
du.prototype.type = "ellipse";
var hd = Math.PI, ys = hd * 2, Mr = Math.sin, ni = Math.cos, Km = Math.acos, At = Math.atan2, rh = Math.abs, bn = Math.sqrt, fn = Math.max, Ee = Math.min, pe = 1e-4;
function Qm(r, t, e, i, n, a, o, s) {
  var l = e - r, u = i - t, f = o - n, h = s - a, v = h * l - f * u;
  if (!(v * v < pe))
    return v = (f * (t - a) - h * (r - n)) / v, [r + v * l, t + v * u];
}
function la(r, t, e, i, n, a, o) {
  var s = r - e, l = t - i, u = (o ? a : -a) / bn(s * s + l * l), f = u * l, h = -u * s, v = r + f, c = t + h, d = e + f, y = i + h, p = (v + d) / 2, g = (c + y) / 2, _ = d - v, m = y - c, w = _ * _ + m * m, S = n - a, T = v * y - d * c, b = (m < 0 ? -1 : 1) * bn(fn(0, S * S * w - T * T)), x = (T * m - _ * b) / w, C = (-T * _ - m * b) / w, D = (T * m + _ * b) / w, A = (-T * _ + m * b) / w, M = x - p, I = C - g, P = D - p, L = A - g;
  return M * M + I * I > P * P + L * L && (x = D, C = A), {
    cx: x,
    cy: C,
    x0: -f,
    y0: -h,
    x1: x * (n / S - 1),
    y1: C * (n / S - 1)
  };
}
function jm(r) {
  var t;
  if (N(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function Jm(r, t) {
  var e, i = fn(t.r, 0), n = fn(t.r0 || 0, 0), a = i > 0, o = n > 0;
  if (!(!a && !o)) {
    if (a || (i = n, n = 0), n > i) {
      var s = i;
      i = n, n = s;
    }
    var l = t.startAngle, u = t.endAngle;
    if (!(isNaN(l) || isNaN(u))) {
      var f = t.cx, h = t.cy, v = !!t.clockwise, c = rh(u - l), d = c > ys && c % ys;
      if (d > pe && (c = d), !(i > pe))
        r.moveTo(f, h);
      else if (c > ys - pe)
        r.moveTo(f + i * ni(l), h + i * Mr(l)), r.arc(f, h, i, l, u, !v), n > pe && (r.moveTo(f + n * ni(u), h + n * Mr(u)), r.arc(f, h, n, u, l, v));
      else {
        var y = void 0, p = void 0, g = void 0, _ = void 0, m = void 0, w = void 0, S = void 0, T = void 0, b = void 0, x = void 0, C = void 0, D = void 0, A = void 0, M = void 0, I = void 0, P = void 0, L = i * ni(l), O = i * Mr(l), V = n * ni(u), Y = n * Mr(u), B = c > pe;
        if (B) {
          var $ = t.cornerRadius;
          $ && (e = jm($), y = e[0], p = e[1], g = e[2], _ = e[3]);
          var K = rh(i - n) / 2;
          if (m = Ee(K, g), w = Ee(K, _), S = Ee(K, y), T = Ee(K, p), C = b = fn(m, w), D = x = fn(S, T), (b > pe || x > pe) && (A = i * ni(u), M = i * Mr(u), I = n * ni(l), P = n * Mr(l), c < hd)) {
            var U = Qm(L, O, I, P, A, M, V, Y);
            if (U) {
              var _t = L - U[0], bt = O - U[1], Zt = A - U[0], Te = M - U[1], ee = 1 / Mr(Km((_t * Zt + bt * Te) / (bn(_t * _t + bt * bt) * bn(Zt * Zt + Te * Te))) / 2), Kt = bn(U[0] * U[0] + U[1] * U[1]);
              C = Ee(b, (i - Kt) / (ee + 1)), D = Ee(x, (n - Kt) / (ee - 1));
            }
          }
        }
        if (!B)
          r.moveTo(f + L, h + O);
        else if (C > pe) {
          var xt = Ee(g, C), dt = Ee(_, C), H = la(I, P, L, O, i, xt, v), X = la(A, M, V, Y, i, dt, v);
          r.moveTo(f + H.cx + H.x0, h + H.cy + H.y0), C < b && xt === dt ? r.arc(f + H.cx, h + H.cy, C, At(H.y0, H.x0), At(X.y0, X.x0), !v) : (xt > 0 && r.arc(f + H.cx, h + H.cy, xt, At(H.y0, H.x0), At(H.y1, H.x1), !v), r.arc(f, h, i, At(H.cy + H.y1, H.cx + H.x1), At(X.cy + X.y1, X.cx + X.x1), !v), dt > 0 && r.arc(f + X.cx, h + X.cy, dt, At(X.y1, X.x1), At(X.y0, X.x0), !v));
        } else
          r.moveTo(f + L, h + O), r.arc(f, h, i, l, u, !v);
        if (!(n > pe) || !B)
          r.lineTo(f + V, h + Y);
        else if (D > pe) {
          var xt = Ee(y, D), dt = Ee(p, D), H = la(V, Y, A, M, n, -dt, v), X = la(L, O, I, P, n, -xt, v);
          r.lineTo(f + H.cx + H.x0, h + H.cy + H.y0), D < x && xt === dt ? r.arc(f + H.cx, h + H.cy, D, At(H.y0, H.x0), At(X.y0, X.x0), !v) : (dt > 0 && r.arc(f + H.cx, h + H.cy, dt, At(H.y0, H.x0), At(H.y1, H.x1), !v), r.arc(f, h, n, At(H.cy + H.y1, H.cx + H.x1), At(X.cy + X.y1, X.cx + X.x1), v), xt > 0 && r.arc(f + X.cx, h + X.cy, xt, At(X.y1, X.x1), At(X.y0, X.x0), !v));
        } else
          r.lineTo(f + V, h + Y), r.arc(f, h, n, u, l, v);
      }
      r.closePath();
    }
  }
}
var t0 = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
}(), Wn = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new t0();
  }, t.prototype.buildPath = function(e, i) {
    Jm(e, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(st);
Wn.prototype.type = "sector";
var e0 = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
}(), pu = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new e0();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.PI * 2;
    e.moveTo(n + i.r, a), e.arc(n, a, i.r, 0, o, !1), e.moveTo(n + i.r0, a), e.arc(n, a, i.r0, 0, o, !0);
  }, t;
}(st);
pu.prototype.type = "ring";
function r0(r, t, e, i) {
  var n = [], a = [], o = [], s = [], l, u, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var v = 0, c = r.length; v < c; v++)
      di(f, f, r[v]), pi(h, h, r[v]);
    di(f, f, i[0]), pi(h, h, i[1]);
  }
  for (var v = 0, c = r.length; v < c; v++) {
    var d = r[v];
    if (e)
      l = r[v ? v - 1 : c - 1], u = r[(v + 1) % c];
    else if (v === 0 || v === c - 1) {
      n.push(Bg(r[v]));
      continue;
    } else
      l = r[v - 1], u = r[v + 1];
    Fg(a, u, l), Oo(a, a, t);
    var y = js(d, l), p = js(d, u), g = y + p;
    g !== 0 && (y /= g, p /= g), Oo(o, a, -y), Oo(s, a, p);
    var _ = Wu([], d, o), m = Wu([], d, s);
    i && (pi(_, _, f), di(_, _, h), pi(m, m, f), di(m, m, h)), n.push(_), n.push(m);
  }
  return e && n.push(n.shift()), n;
}
function cd(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = r0(n, i, e, t.smoothConstraint);
      r.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
        var l = a[s * 2], u = a[s * 2 + 1], f = n[(s + 1) % o];
        r.bezierCurveTo(l[0], l[1], u[0], u[1], f[0], f[1]);
      }
    } else {
      r.moveTo(n[0][0], n[0][1]);
      for (var s = 1, h = n.length; s < h; s++)
        r.lineTo(n[s][0], n[s][1]);
    }
    e && r.closePath();
  }
}
var i0 = /* @__PURE__ */ function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), gu = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new i0();
  }, t.prototype.buildPath = function(e, i) {
    cd(e, i, !0);
  }, t;
}(st);
gu.prototype.type = "polygon";
var n0 = /* @__PURE__ */ function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), Yn = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new n0();
  }, t.prototype.buildPath = function(e, i) {
    cd(e, i, !1);
  }, t;
}(st);
Yn.prototype.type = "polyline";
var a0 = {}, o0 = /* @__PURE__ */ function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), Ri = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new o0();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var l = Zv(a0, i, this.style);
      n = l.x1, a = l.y1, o = l.x2, s = l.y2;
    } else
      n = i.x1, a = i.y1, o = i.x2, s = i.y2;
    var u = i.percent;
    u !== 0 && (e.moveTo(n, a), u < 1 && (o = n * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var i = this.shape;
    return [
      i.x1 * (1 - e) + i.x2 * e,
      i.y1 * (1 - e) + i.y2 * e
    ];
  }, t;
}(st);
Ri.prototype.type = "line";
var zt = [], s0 = /* @__PURE__ */ function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
}();
function ih(r, t, e) {
  var i = r.cpx2, n = r.cpy2;
  return i != null || n != null ? [
    (e ? ef : kt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? ef : kt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? rf : Ut)(r.x1, r.cpx1, r.x2, t),
    (e ? rf : Ut)(r.y1, r.cpy1, r.y2, t)
  ];
}
var yu = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new s0();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.x1, a = i.y1, o = i.x2, s = i.y2, l = i.cpx1, u = i.cpy1, f = i.cpx2, h = i.cpy2, v = i.percent;
    v !== 0 && (e.moveTo(n, a), f == null || h == null ? (v < 1 && (Wa(n, l, o, v, zt), l = zt[1], o = zt[2], Wa(a, u, s, v, zt), u = zt[1], s = zt[2]), e.quadraticCurveTo(l, u, o, s)) : (v < 1 && (Ua(n, l, f, o, v, zt), l = zt[1], f = zt[2], o = zt[3], Ua(a, u, h, s, v, zt), u = zt[1], h = zt[2], s = zt[3]), e.bezierCurveTo(l, u, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return ih(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var i = ih(this.shape, e, !0);
    return Hg(i, i);
  }, t;
}(st);
yu.prototype.type = "bezier-curve";
var l0 = /* @__PURE__ */ function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
}(), xo = function(r) {
  rt(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new l0();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, l = i.endAngle, u = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, l, !u);
  }, t;
}(st);
xo.prototype.type = "arc";
var u0 = function(r) {
  rt(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, i = this.shapeChanged(), n = 0; n < e.length; n++)
      i = i || e[n].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < e.length; n++)
      e[n].path || e[n].createPathProxy(), e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, i) {
    for (var n = i.paths || [], a = 0; a < n.length; a++)
      n[a].buildPath(e, n[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], i = 0; i < e.length; i++)
      e[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), st.prototype.getBoundingRect.call(this);
  }, t;
}(st), vd = function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
}(), f0 = function(r) {
  rt(t, r);
  function t(e, i, n, a, o, s) {
    var l = r.call(this, o) || this;
    return l.x = e ?? 0, l.y = i ?? 0, l.x2 = n ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
  }
  return t;
}(vd), h0 = function(r) {
  rt(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = i ?? 0.5, s.r = n ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(vd), Pr = [0, 0], Ir = [0, 0], ua = new G(), fa = new G(), ja = function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++)
      this._corners[i] = new G();
    for (var i = 0; i < 2; i++)
      this._axes[i] = new G();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var i = this._corners, n = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
    if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, l), i[3].set(a, l), e)
      for (var u = 0; u < 4; u++)
        i[u].transform(e);
    G.sub(n[0], i[1], i[0]), G.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
    for (var u = 0; u < 2; u++)
      this._origin[u] = n[u].dot(i[0]);
  }, r.prototype.intersect = function(t, e) {
    var i = !0, n = !e;
    return ua.set(1 / 0, 1 / 0), fa.set(0, 0), !this._intersectCheckOneSide(this, t, ua, fa, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, ua, fa, n, -1) && (i = !1, n) || n || G.copy(e, i ? ua : fa), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, n, a, o) {
    for (var s = !0, l = 0; l < 2; l++) {
      var u = this._axes[l];
      if (this._getProjMinMaxOnAxis(l, t._corners, Pr), this._getProjMinMaxOnAxis(l, e._corners, Ir), Pr[1] < Ir[0] || Pr[0] > Ir[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(Ir[0] - Pr[1]), h = Math.abs(Pr[0] - Ir[1]);
        Math.min(f, h) > n.len() && (f < h ? G.scale(n, u, -f * o) : G.scale(n, u, h * o));
      } else if (i) {
        var f = Math.abs(Ir[0] - Pr[1]), h = Math.abs(Pr[0] - Ir[1]);
        Math.min(f, h) < i.len() && (f < h ? G.scale(i, u, f * o) : G.scale(i, u, -h * o));
      }
    }
    return s;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, i) {
    for (var n = this._axes[t], a = this._origin, o = e[0].dot(n) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
      var f = e[u].dot(n) + a[t];
      s = Math.min(f, s), l = Math.max(f, l);
    }
    i[0] = s, i[1] = l;
  }, r;
}(), c0 = [], v0 = function(r) {
  rt(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, i) {
    i ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, i) {
    i = i || !1;
    for (var n = 0; n < e.length; n++)
      this.addDisplayable(e[n], i);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var i = this._cursor; i < this._displayables.length; i++)
      e && e(this._displayables[i]);
    for (var i = 0; i < this._temporaryDisplayables.length; i++)
      e && e(this._temporaryDisplayables[i]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new it(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var n = this._displayables[i], a = n.getBoundingRect().clone();
        n.needLocalTransform() && a.applyTransform(n.getLocalTransform(c0)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    if (a.contain(n[0], n[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, i))
          return !0;
      }
    return !1;
  }, t;
}(Un), d0 = Tt();
function p0(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), l = r === "update";
  if (s) {
    var u = void 0, f = void 0, h = void 0;
    i ? (u = W(i.duration, 200), f = W(i.easing, "cubicOut"), h = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), J(h) && (h = h(e, n)), J(u) && (u = u(e));
    var v = {
      duration: u || 0,
      delay: h,
      easing: f
    };
    return v;
  } else
    return null;
}
function _u(r, t, e, i, n, a, o) {
  var s = !1, l;
  J(n) ? (o = a, a = n, n = null) : F(n) && (a = n.cb, o = n.during, s = n.isFrom, l = n.removeOpt, n = n.dataIndex);
  var u = r === "leave";
  u || t.stopAnimation("leave");
  var f = p0(r, i, n, u ? l || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
  if (f && f.duration > 0) {
    var h = f.duration, v = f.delay, c = f.easing, d = {
      duration: h,
      delay: v || 0,
      easing: c,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !u,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function Ai(r, t, e, i, n, a) {
  _u("update", r, t, e, i, n, a);
}
function Ra(r, t, e, i, n, a) {
  _u("enter", r, t, e, i, n, a);
}
function Cn(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function dd(r, t, e, i, n, a) {
  Cn(r) || _u("leave", r, t, e, i, n, a);
}
function nh(r, t, e, i) {
  r.removeTextContent(), r.removeTextGuideLine(), dd(r, {
    style: {
      opacity: 0
    }
  }, t, e, i);
}
function pd(r, t, e) {
  function i() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(n) {
    n.isGroup || nh(n, t, e, i);
  }) : nh(r, t, e, i);
}
function g0(r) {
  d0(r).oldStyle = r.style;
}
var Ja = Math.max, to = Math.min, Cl = {};
function y0(r) {
  return st.extend(r);
}
var _0 = $m;
function m0(r, t) {
  return _0(r, t);
}
function we(r, t) {
  Cl[r] = t;
}
function w0(r) {
  if (Cl.hasOwnProperty(r))
    return Cl[r];
}
function mu(r, t, e, i) {
  var n = Ym(r, t);
  return e && (i === "center" && (e = yd(e, n.getBoundingRect())), _d(n, e)), n;
}
function gd(r, t, e) {
  var i = new Xr({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(n) {
      if (e === "center") {
        var a = {
          width: n.width,
          height: n.height
        };
        i.setStyle(yd(t, a));
      }
    }
  });
  return i;
}
function yd(r, t) {
  var e = t.width / t.height, i = r.height * e, n;
  i <= r.width ? n = r.height : (i = r.width, n = i / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - i / 2,
    y: o - n / 2,
    width: i,
    height: n
  };
}
var S0 = Xm;
function _d(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function wu(r, t) {
  return Zv(r, r, {
    lineWidth: t
  }), r;
}
function T0(r) {
  return Kv(r.shape, r.shape, r.style), r;
}
var b0 = Br;
function C0(r, t) {
  for (var e = jl([]); r && r !== t; )
    wi(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function Su(r, t, e) {
  return t && !Xt(t) && (t = ru.getLocalTransform(t)), e && (t = cv([], t)), Re([], r, t);
}
function x0(r, t, e) {
  var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -i : r === "right" ? i : 0, r === "top" ? -n : r === "bottom" ? n : 0];
  return a = Su(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function ah(r) {
  return !r.isGroup;
}
function D0(r) {
  return r.shape != null;
}
function E0(r, t, e) {
  if (!r || !t)
    return;
  function i(o) {
    var s = {};
    return o.traverse(function(l) {
      ah(l) && l.anid && (s[l.anid] = l);
    }), s;
  }
  function n(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return D0(o) && (s.shape = R({}, o.shape)), s;
  }
  var a = i(r);
  t.traverse(function(o) {
    if (ah(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var l = n(o);
        o.attr(n(s)), Ai(o, l, e, nt(o).dataIndex);
      }
    }
  });
}
function A0(r, t) {
  return Z(r, function(e) {
    var i = e[0];
    i = Ja(i, t.x), i = to(i, t.x + t.width);
    var n = e[1];
    return n = Ja(n, t.y), n = to(n, t.y + t.height), [i, n];
  });
}
function M0(r, t) {
  var e = Ja(r.x, t.x), i = to(r.x + r.width, t.x + t.width), n = Ja(r.y, t.y), a = to(r.y + r.height, t.y + t.height);
  if (i >= e && a >= n)
    return {
      x: e,
      y: n,
      width: i - e,
      height: a - n
    };
}
function Tu(r, t, e) {
  var i = R({
    rectHover: !0
  }, t), n = i.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (n.image = r.slice(8), ft(n, e), new Xr(i)) : mu(r.replace("path://", ""), i, e, "center");
}
function P0(r, t, e, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (md(r, t, e, i, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function md(r, t, e, i, n, a, o, s) {
  var l = e - r, u = i - t, f = o - n, h = s - a, v = _s(f, h, l, u);
  if (I0(v))
    return !1;
  var c = r - n, d = t - a, y = _s(c, d, l, u) / v;
  if (y < 0 || y > 1)
    return !1;
  var p = _s(c, d, f, h) / v;
  return !(p < 0 || p > 1);
}
function _s(r, t, e, i) {
  return r * i - e * t;
}
function I0(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Do(r) {
  var t = r.itemTooltipOption, e = r.componentModel, i = r.itemName, n = k(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: i,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var l = r.formatterParamsExtra;
  l && E(gt(l), function(f) {
    $r(s, f) || (s[f] = l[f], s.$vars.push(f));
  });
  var u = nt(r.el);
  u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
    name: i,
    option: ft({
      content: i,
      encodeHTMLContent: !0,
      formatterParams: s
    }, n)
  };
}
function oh(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function wd(r, t) {
  if (r)
    if (N(r))
      for (var e = 0; e < r.length; e++)
        oh(r[e], t);
    else
      oh(r, t);
}
we("circle", Co);
we("ellipse", du);
we("sector", Wn);
we("ring", pu);
we("polygon", gu);
we("polyline", Yn);
we("rect", Ft);
we("line", Ri);
we("bezierCurve", yu);
we("arc", xo);
const L0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: xo,
  BezierCurve: yu,
  BoundingRect: it,
  Circle: Co,
  CompoundPath: u0,
  Ellipse: du,
  Group: me,
  Image: Xr,
  IncrementalDisplayable: v0,
  Line: Ri,
  LinearGradient: f0,
  OrientedBoundingRect: ja,
  Path: st,
  Point: G,
  Polygon: gu,
  Polyline: Yn,
  RadialGradient: h0,
  Rect: Ft,
  Ring: pu,
  Sector: Wn,
  Text: Rt,
  applyTransform: Su,
  clipPointsByRect: A0,
  clipRectByRect: M0,
  createIcon: Tu,
  extendPath: m0,
  extendShape: y0,
  getShapeClass: w0,
  getTransform: C0,
  groupTransition: E0,
  initProps: Ra,
  isElementRemoved: Cn,
  lineLineIntersect: md,
  linePolygonIntersect: P0,
  makeImage: gd,
  makePath: mu,
  mergePath: S0,
  registerShape: we,
  removeElement: dd,
  removeElementWithFadeOut: pd,
  resizePath: _d,
  setTooltipConfig: Do,
  subPixelOptimize: b0,
  subPixelOptimizeLine: wu,
  subPixelOptimizeRect: T0,
  transformDirection: x0,
  traverseElements: wd,
  updateProps: Ai
}, Symbol.toStringTag, { value: "Module" }));
var Eo = {};
function R0(r, t) {
  for (var e = 0; e < ke.length; e++) {
    var i = ke[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function sh(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = J(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var l = {
    normal: s
  }, u = 0; u < ke.length; u++) {
    var f = ke[u], h = t[f];
    l[f] = W(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return l;
}
function Sd(r, t, e, i) {
  e = e || Eo;
  for (var n = r instanceof Rt, a = !1, o = 0; o < Qa.length; o++) {
    var s = t[Qa[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var l = n ? r : r.getTextContent();
  if (a) {
    n || (l || (l = new Rt(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
    var u = sh(e, t), f = t.normal, h = !!f.getShallow("show"), v = cr(f, i, e, !1, !n);
    v.text = u.normal, n || r.setTextConfig(lh(f, e, !1));
    for (var o = 0; o < ke.length; o++) {
      var c = ke[o], s = t[c];
      if (s) {
        var d = l.ensureState(c), y = !!W(s.getShallow("show"), h);
        if (y !== h && (d.ignore = !y), d.style = cr(s, i, e, !0, !n), d.style.text = u[c], !n) {
          var p = r.ensureState(c);
          p.textConfig = lh(s, e, !0);
        }
      }
    }
    l.silent = !!f.getShallow("silent"), l.style.x != null && (v.x = l.style.x), l.style.y != null && (v.y = l.style.y), l.ignore = !h, l.useStyle(v), l.dirty(), e.enableTextSetter && (F0(l).setLabelText = function(g) {
      var _ = sh(e, t, g);
      R0(l, _);
    });
  } else l && (l.ignore = !0);
  r.dirty();
}
function O0(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < ke.length; i++) {
    var n = ke[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function cr(r, t, e, i, n) {
  var a = {};
  return N0(a, r, e, i, n), t && R(a, t), a;
}
function lh(r, t, e) {
  t = t || {};
  var i = {}, n, a = r.getShallow("rotate"), o = W(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return n = r.getShallow("position") || (e ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", i;
}
function N0(r, t, e, i, n) {
  e = e || Eo;
  var a = t.ecModel, o = a && a.option.textStyle, s = k0(t), l;
  if (s) {
    l = {};
    for (var u in s)
      if (s.hasOwnProperty(u)) {
        var f = t.getModel(["rich", u]);
        ch(l[u] = {}, f, o, e, i, n, !1, !0);
      }
  }
  l && (r.rich = l);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var v = t.get("minMargin");
  v != null && (r.margin = v), ch(r, t, o, e, i, n, !0, !1);
}
function k0(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Eo).rich;
    if (e) {
      t = t || {};
      for (var i = gt(e), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var uh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], fh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], hh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function ch(r, t, e, i, n, a, o, s) {
  e = !n && e || Eo;
  var l = i && i.inheritColor, u = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = W(t.getShallow("opacity"), e.opacity);
  (u === "inherit" || u === "auto") && (process.env.NODE_ENV !== "production" && u === "auto" && wt("color: 'auto'", "color: 'inherit'"), l ? u = l : u = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && wt("color: 'auto'", "color: 'inherit'"), l ? f = l : f = null), a || (u = u || e.color, f = f || e.textBorderColor), u != null && (r.fill = u), f != null && (r.stroke = f);
  var v = W(t.getShallow("textBorderWidth"), e.textBorderWidth);
  v != null && (r.lineWidth = v);
  var c = W(t.getShallow("textBorderType"), e.textBorderType);
  c != null && (r.lineDash = c);
  var d = W(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (r.opacity = h), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var y = 0; y < uh.length; y++) {
    var p = uh[y], g = W(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var y = 0; y < fh.length; y++) {
    var p = fh[y], g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var _ = t.getShallow("baseline");
    _ != null && (r.verticalAlign = _);
  }
  if (!o || !i.disableBox) {
    for (var y = 0; y < hh.length; y++) {
      var p = hh[y], g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (r.borderDash = m), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && wt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && wt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = l);
  }
}
function B0(r, t) {
  var e = t && t.getModel("textStyle");
  return Ie([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var F0 = Tt(), V0 = ["textStyle", "color"], ms = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], ws = new Rt(), z0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(V0) : null);
    }, r.prototype.getFont = function() {
      return B0({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < ms.length; i++)
        e[ms[i]] = this.getShallow(ms[i]);
      return ws.useStyle(e), ws.update(), ws.getBoundingRect();
    }, r;
  }()
), Td = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], H0 = In(Td), G0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return H0(this, t);
    }, r;
  }()
), bd = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], U0 = In(bd), W0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return U0(this, t, e);
    }, r;
  }()
), ct = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.parentModel = e, this.ecModel = i, this.option = t;
    }
    return r.prototype.init = function(t, e, i) {
    }, r.prototype.mergeOption = function(t, e) {
      ut(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var i = this.option, n = i == null ? i : i[t];
      if (n == null && !e) {
        var a = this.parentModel;
        a && (n = a.getShallow(t));
      }
      return n;
    }, r.prototype.getModel = function(t, e) {
      var i = t != null, n = i ? this.parsePath(t) : null, a = i ? this._doGet(n) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(Q(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!z.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var i = this.option;
      if (!t)
        return i;
      for (var n = 0; n < t.length && !(t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++)
        ;
      return i == null && e && (i = e._doGet(this.resolveParentPath(t), e.parentModel)), i;
    }, r;
  }()
);
su(ct);
C_(ct);
qe(ct, G0);
qe(ct, W0);
qe(ct, M_);
qe(ct, z0);
var Y0 = Math.round(Math.random() * 10);
function Ao(r) {
  return [r || "", Y0++].join("_");
}
function $0(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = Le(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = Le(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function X0(r, t) {
  r.topologicalTravel = function(a, o, s, l) {
    if (!a.length)
      return;
    var u = e(o), f = u.graph, h = u.noEntryList, v = {};
    for (E(a, function(_) {
      v[_] = !0;
    }); h.length; ) {
      var c = h.pop(), d = f[c], y = !!v[c];
      y && (s.call(l, c, d.originalDeps.slice()), delete v[c]), E(d.successor, y ? g : p);
    }
    E(v, function() {
      var _ = "";
      throw process.env.NODE_ENV !== "production" && (_ = Za("Circular dependency may exists: ", v, a, o)), new Error(_);
    });
    function p(_) {
      f[_].entryCount--, f[_].entryCount === 0 && h.push(_);
    }
    function g(_) {
      v[_] = !0, p(_);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return E(a, function(l) {
      var u = i(o, l), f = u.originalDeps = t(l), h = n(f, a);
      u.entryCount = h.length, u.entryCount === 0 && s.push(l), E(h, function(v) {
        at(u.predecessor, v) < 0 && u.predecessor.push(v);
        var c = i(o, v);
        at(c.successor, v) < 0 && c.successor.push(l);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function i(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function n(a, o) {
    var s = [];
    return E(a, function(l) {
      at(o, l) >= 0 && s.push(l);
    }), s;
  }
}
function q0(r, t) {
  return ut(ut({}, r, !0), t, !0);
}
const Z0 = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, K0 = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var eo = "ZH", bu = "EN", Ti = bu, Oa = {}, Cu = {}, Cd = z.domSupported ? function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || Ti).toUpperCase()
  );
  return r.indexOf(eo) > -1 ? eo : Ti;
}() : Ti;
function xd(r, t) {
  r = r.toUpperCase(), Cu[r] = new ct(t), Oa[r] = t;
}
function Q0(r) {
  if (k(r)) {
    var t = Oa[r.toUpperCase()] || {};
    return r === eo || r === bu ? Q(t) : ut(Q(t), Q(Oa[Ti]), !1);
  } else
    return ut(Q(r), Q(Oa[Ti]), !1);
}
function j0(r) {
  return Cu[r];
}
function J0() {
  return Cu[Ti];
}
xd(bu, Z0);
xd(eo, K0);
function Je(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function Dd(r, t, e, i) {
  var n = _o(r), a = n[tw(e)](), o = n[ew(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = n[rw(e)](), u = n["get" + (e ? "UTC" : "") + "Day"](), f = n[iw(e)](), h = (f - 1) % 12 + 1, v = n[nw(e)](), c = n[aw(e)](), d = n[ow(e)](), y = f >= 12 ? "pm" : "am", p = y.toUpperCase(), g = i instanceof ct ? i : j0(Cd) || J0(), _ = g.getModel("time"), m = _.get("month"), w = _.get("monthAbbr"), S = _.get("dayOfWeek"), T = _.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, y + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Je(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, m[o - 1]).replace(/{MMM}/g, w[o - 1]).replace(/{MM}/g, Je(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Je(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, S[u]).replace(/{ee}/g, T[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Je(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Je(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Je(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, Je(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, Je(d, 3)).replace(/{S}/g, d + "");
}
function tw(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function ew(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function rw(r) {
  return r ? "getUTCDate" : "getDate";
}
function iw(r) {
  return r ? "getUTCHours" : "getHours";
}
function nw(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function aw(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function ow(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function sw(r) {
  if (!Ov(r))
    return k(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function Ed(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, i) {
    return i.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var Mo = ov;
function xl(r, t, e) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && Ie(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var l = o ? _o(r) : r;
    if (isNaN(+l)) {
      if (s)
        return "-";
    } else return Dd(l, i, e);
  }
  if (t === "ordinal")
    return za(r) ? n(r) : yt(r) && a(r) ? r + "" : "-";
  var u = qa(r);
  return a(u) ? sw(u) : za(r) ? n(r) : typeof r == "boolean" ? r + "" : "-";
}
var vh = ["a", "b", "c", "d", "e", "f", "g"], Ss = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function Ad(r, t, e) {
  N(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = vh[a];
    r = r.replace(Ss(o), Ss(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var l = 0; l < n.length; l++) {
      var u = t[s][n[l]];
      r = r.replace(Ss(vh[l], s), e ? Gt(u) : u);
    }
  return r;
}
function lw(r, t) {
  var e = k(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, i = e.color, n = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!i)
    return "";
  if (a === "html")
    return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Gt(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Gt(i) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: n === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: i
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: i
    }
  };
}
function Ln(r, t) {
  return t = t || "transparent", k(r) ? r : F(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
function dh(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    e.opener = null, e.location.href = r;
  } else
    window.open(r, t);
}
var Na = E, uw = ["left", "right", "top", "bottom", "width", "height"], ha = [["width", "left", "right"], ["height", "top", "bottom"]];
function xu(r, t, e, i, n) {
  var a = 0, o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function(l, u) {
    var f = l.getBoundingRect(), h = t.childAt(u + 1), v = h && h.getBoundingRect(), c, d;
    if (r === "horizontal") {
      var y = f.width + (v ? -v.x + f.x : 0);
      c = a + y, c > i || l.newline ? (a = 0, c = y, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (v ? -v.y + f.y : 0);
      d = o + p, d > n || l.newline ? (a += s + e, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = c + e : o = d + e);
  });
}
var xn = xu;
St(xu, "vertical");
St(xu, "horizontal");
function Rn(r, t, e) {
  e = Mo(e || 0);
  var i = t.width, n = t.height, a = mt(r.left, i), o = mt(r.top, n), s = mt(r.right, i), l = mt(r.bottom, n), u = mt(r.width, i), f = mt(r.height, n), h = e[2] + e[0], v = e[1] + e[3], c = r.aspect;
  switch (isNaN(u) && (u = i - s - v - a), isNaN(f) && (f = n - l - h - o), c != null && (isNaN(u) && isNaN(f) && (c > i / n ? u = i * 0.8 : f = n * 0.8), isNaN(u) && (u = c * f), isNaN(f) && (f = u / c)), isNaN(a) && (a = i - s - u - v), isNaN(o) && (o = n - l - f - h), r.left || r.right) {
    case "center":
      a = i / 2 - u / 2 - e[3];
      break;
    case "right":
      a = i - u - v;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = n / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = n - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(u) && (u = i - v - a - (s || 0)), isNaN(f) && (f = n - h - o - (l || 0));
  var d = new it(a + e[3], o + e[0], u, f);
  return d.margin = e, d;
}
function ro(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return F(t) ? t : t ? {
    type: t
  } : null;
}
function On(r, t, e) {
  var i = e && e.ignoreSize;
  !N(i) && (i = [i, i]);
  var n = o(ha[0], 0), a = o(ha[1], 1);
  u(ha[0], r, n), u(ha[1], r, a);
  function o(f, h) {
    var v = {}, c = 0, d = {}, y = 0, p = 2;
    if (Na(f, function(m) {
      d[m] = r[m];
    }), Na(f, function(m) {
      s(t, m) && (v[m] = d[m] = t[m]), l(v, m) && c++, l(d, m) && y++;
    }), i[h])
      return l(t, f[1]) ? d[f[2]] = null : l(t, f[2]) && (d[f[1]] = null), d;
    if (y === p || !c)
      return d;
    if (c >= p)
      return v;
    for (var g = 0; g < f.length; g++) {
      var _ = f[g];
      if (!s(v, _) && s(r, _)) {
        v[_] = r[_];
        break;
      }
    }
    return v;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function l(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function u(f, h, v) {
    Na(f, function(c) {
      h[c] = v[c];
    });
  }
}
function Du(r) {
  return fw({}, r);
}
function fw(r, t) {
  return t && r && Na(uw, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var hw = Tt(), et = (
  /** @class */
  function(r) {
    vt(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = Ao("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = ro(this), a = n ? Du(e) : {}, o = i.getTheme();
      ut(e, o.get(this.mainType)), ut(e, this.getDefaultOption()), n && On(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      ut(this.option, e, !0);
      var n = ro(this);
      n && On(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!S_(e))
        return e.defaultOption;
      var i = hw(this);
      if (!i.defaultOption) {
        for (var n = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && n.push(o), a = a.superClass;
        }
        for (var s = {}, l = n.length - 1; l >= 0; l--)
          s = ut(s, n[l], !0);
        i.defaultOption = s;
      }
      return i.defaultOption;
    }, t.prototype.getReferringComponents = function(e, i) {
      var n = e + "Index", a = e + "Id";
      return Gn(this.ecModel, e, {
        index: this.get(n, !0),
        id: this.get(a, !0)
      }, i);
    }, t.prototype.getBoxLayoutParams = function() {
      var e = this;
      return {
        left: e.get("left"),
        top: e.get("top"),
        right: e.get("right"),
        bottom: e.get("bottom"),
        width: e.get("width"),
        height: e.get("height")
      };
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    }(), t;
  }(ct)
);
Hv(et, ct);
lu(et);
$0(et);
X0(et, cw);
function cw(r) {
  var t = [];
  return E(et.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = Z(t, function(e) {
    return Le(e).main;
  }), r !== "dataset" && at(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var Md = "";
typeof navigator < "u" && (Md = navigator.platform || "");
var ai = "rgba(0, 0, 0, 0.2)";
const vw = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: ai,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: ai,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: ai,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: ai,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: ai,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: ai,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: Md.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var Dl = j(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), Ve = "original", qt = "arrayRows", Se = "objectRows", ze = "keyedColumns", $e = "typedArray", Pd = "unknown", Xe = "column", Oi = "row", Dt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, dw = Tt();
function pw(r) {
  dw(r).datasetMap = j();
}
function gw(r, t, e) {
  var i = {}, n = Id(r);
  if (!n)
    return i;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === Se || a === ze) && E(o, function(f, h) {
    (F(f) ? f.name : f) === "name" && (s = h);
  });
  var l = function() {
    for (var f = {}, h = {}, v = [], c = 0, d = Math.min(5, e); c < d; c++) {
      var y = Rd(t.data, a, t.seriesLayoutBy, o, t.startIndex, c);
      v.push(y);
      var p = y === Dt.Not;
      if (p && f.v == null && c !== s && (f.v = c), (f.n == null || f.n === f.v || !p && v[f.n] === Dt.Not) && (f.n = c), g(f) && v[f.n] !== Dt.Not)
        return f;
      p || (y === Dt.Might && h.v == null && c !== s && (h.v = c), (h.n == null || h.n === h.v) && (h.n = c));
    }
    function g(_) {
      return _.v != null && _.n != null;
    }
    return g(f) ? f : g(h) ? h : null;
  }();
  if (l) {
    i.value = [l.v];
    var u = s ?? l.n;
    i.itemName = [u], i.seriesName = [u];
  }
  return i;
}
function Id(r) {
  var t = r.get("data", !0);
  if (!t)
    return Gn(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, ou).models[0];
}
function yw(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Gn(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, ou).models;
}
function Ld(r, t) {
  return Rd(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function Rd(r, t, e, i, n, a) {
  var o, s = 5;
  if (Vt(r))
    return Dt.Not;
  var l, u;
  if (i) {
    var f = i[a];
    F(f) ? (l = f.name, u = f.type) : k(f) && (l = f);
  }
  if (u != null)
    return u === "ordinal" ? Dt.Must : Dt.Not;
  if (t === qt) {
    var h = r;
    if (e === Oi) {
      for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
        if ((o = w(v[n + c])) != null)
          return o;
    } else
      for (var c = 0; c < h.length && c < s; c++) {
        var d = h[n + c];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === Se) {
    var y = r;
    if (!l)
      return Dt.Not;
    for (var c = 0; c < y.length && c < s; c++) {
      var p = y[c];
      if (p && (o = w(p[l])) != null)
        return o;
    }
  } else if (t === ze) {
    var g = r;
    if (!l)
      return Dt.Not;
    var v = g[l];
    if (!v || Vt(v))
      return Dt.Not;
    for (var c = 0; c < v.length && c < s; c++)
      if ((o = w(v[c])) != null)
        return o;
  } else if (t === Ve)
    for (var _ = r, c = 0; c < _.length && c < s; c++) {
      var p = _[c], m = wo(p);
      if (!N(m))
        return Dt.Not;
      if ((o = w(m[a])) != null)
        return o;
    }
  function w(S) {
    var T = k(S);
    if (S != null && Number.isFinite(Number(S)) && S !== "")
      return T ? Dt.Might : Dt.Not;
    if (T && S !== "-")
      return Dt.Must;
  }
  return Dt.Not;
}
var _w = j();
function mw(r, t, e) {
  var i = _w.get(t);
  if (!i)
    return e;
  var n = i(r);
  if (!n)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      q(xi(n[a]));
  return e.concat(n);
}
var ph = Tt();
Tt();
var Eu = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = Bt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return Sw(this, ph, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      Tw(this, ph);
    }, r;
  }()
);
function ww(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function Sw(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
  if (u.hasOwnProperty(n))
    return u[n];
  var f = o == null || !i ? e : ww(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[l];
    return n && (u[n] = h), s.paletteIdx = (l + 1) % f.length, h;
  }
}
function Tw(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var ca, $i, gh, Ts = "\0_ec_inner", yh = 1, bw = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, Cw = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, io = {};
function xw(r) {
  E(r, function(t, e) {
    if (!et.hasClass(e)) {
      var i = bw[e];
      i && !io[i] && (Lt("Component " + e + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), io[i] = !0);
    }
  });
}
var Au = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new ct(a), this._locale = new ct(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      process.env.NODE_ENV !== "production" && (q(e != null, "option is null/undefined"), q(e[Ts] !== yh, "please use chart.getOption()"));
      var a = wh(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, wh(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && xw(o), !this.option || e === "recreate" ? gh(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (n = !0, this._mergeOption(s, i));
      }
      if (!e || e === "recreate" || e === "media") {
        var l = a.getMediaOption(this);
        l.length && E(l, function(u) {
          n = !0, this._mergeOption(u, i);
        }, this);
      }
      return n;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, i) {
      var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = j(), u = i && i.replaceMergeMainTypeMap;
      pw(this), E(e, function(h, v) {
        h != null && (et.hasClass(v) ? v && (s.push(v), l.set(v, !0)) : n[v] = n[v] == null ? Q(h) : ut(n[v], h, !0));
      }), u && u.each(function(h, v) {
        et.hasClass(v) && !l.get(v) && (s.push(v), l.set(v, !0));
      }), et.topologicalTravel(s, et.getAllClassMainTypes(), f, this);
      function f(h) {
        var v = mw(this, h, Bt(e[h])), c = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          c ? u && u.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), y = s_(c, v, d);
        d_(y, h, et), n[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], _ = 0, m, w;
        E(y, function(S, T) {
          var b = S.existing, x = S.newOption;
          if (!x)
            b && (b.mergeOption({}, this), b.optionUpdated({}, !1));
          else {
            var C = h === "series", D = et.getClass(
              h,
              S.keyInfo.subType,
              !C
              // Give a more detailed warn later if series don't exists
            );
            if (!D) {
              if (process.env.NODE_ENV !== "production") {
                var A = S.keyInfo.subType, M = Cw[A];
                io[A] || (io[A] = !0, Lt(M ? "Series " + A + ` is used but not imported.
import { ` + M + ` } from 'echarts/charts';
echarts.use([` + M + "]);" : "Unknown series " + A));
              }
              return;
            }
            if (h === "tooltip") {
              if (m) {
                process.env.NODE_ENV !== "production" && (w || (_e("Currently only one tooltip component is allowed."), w = !0));
                return;
              }
              m = !0;
            }
            if (b && b.constructor === D)
              b.name = S.keyInfo.name, b.mergeOption(x, this), b.optionUpdated(x, !1);
            else {
              var I = R({
                componentIndex: T
              }, S.keyInfo);
              b = new D(x, this, this, I), R(b, I), S.brandNew && (b.__requireNewView = !0), b.init(x, this, this), b.optionUpdated(null, !0);
            }
          }
          b ? (p.push(b.option), g.push(b), _++) : (p.push(void 0), g.push(void 0));
        }, this), n[h] = p, a.set(h, g), o.set(h, _), h === "series" && ca(this);
      }
      this._seriesIndices || ca(this);
    }, t.prototype.getOption = function() {
      var e = Q(this.option);
      return E(e, function(i, n) {
        if (et.hasClass(n)) {
          for (var a = Bt(i), o = a.length, s = !1, l = o - 1; l >= 0; l--)
            a[l] && !xi(a[l]) ? s = !0 : (a[l] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[Ts], e;
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, i) {
      var n = this._componentsMap.get(e);
      if (n) {
        var a = n[i || 0];
        if (a)
          return a;
        if (i == null) {
          for (var o = 0; o < n.length; o++)
            if (n[o])
              return n[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var i = e.mainType;
      if (!i)
        return [];
      var n = e.index, a = e.id, o = e.name, s = this._componentsMap.get(i);
      if (!s || !s.length)
        return [];
      var l;
      return n != null ? (l = [], E(Bt(n), function(u) {
        s[u] && l.push(s[u]);
      })) : a != null ? l = _h("id", a, s) : o != null ? l = _h("name", o, s) : l = ue(s, function(u) {
        return !!u;
      }), mh(l, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : ue(this._componentsMap.get(n), function(u) {
        return !!u;
      });
      return l(mh(o, e));
      function s(u) {
        var f = n + "Index", h = n + "Id", v = n + "Name";
        return u && (u[f] != null || u[h] != null || u[v] != null) ? {
          mainType: n,
          // subType will be filtered finally.
          index: u[f],
          id: u[h],
          name: u[v]
        } : null;
      }
      function l(u) {
        return e.filter ? ue(u, e.filter) : u;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (J(e)) {
        var o = i, s = e;
        a.each(function(h, v) {
          for (var c = 0; h && c < h.length; c++) {
            var d = h[c];
            d && s.call(o, v, d, d.componentIndex);
          }
        });
      } else
        for (var l = k(e) ? a.get(e) : F(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
          var f = l[u];
          f && i.call(n, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var i = Oe(e, null);
      return ue(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return ue(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return ue(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      $i(this), E(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      E(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      $i(this), E(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return E(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return $i(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      $i(this);
      var n = [];
      E(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = j(n);
    }, t.prototype.restoreData = function(e) {
      ca(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        et.hasClass(o) && n.push(o);
      }), et.topologicalTravel(n, et.getAllClassMainTypes(), function(a) {
        E(i.get(a), function(o) {
          o && (a !== "series" || !Dw(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      ca = function(e) {
        var i = e._seriesIndices = [];
        E(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = j(i);
      }, $i = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, gh = function(e, i) {
        e.option = {}, e.option[Ts] = yh, e._componentsMap = j({
          series: []
        }), e._componentsCount = j();
        var n = i.aria;
        F(n) && n.enabled == null && (n.enabled = !0), Ew(i, e._theme.option), ut(i, vw, !1), e._mergeOption(i, null);
      };
    }(), t;
  }(ct)
);
function Dw(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function Ew(r, t) {
  var e = r.color && !r.colorLayer;
  E(t, function(i, n) {
    n === "colorLayer" && e || et.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? ut(r[n], i, !1) : Q(i) : r[n] == null && (r[n] = i));
  });
}
function _h(r, t, e) {
  if (N(t)) {
    var i = j();
    return E(t, function(a) {
      if (a != null) {
        var o = Oe(a, null);
        o != null && i.set(a, !0);
      }
    }), ue(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = Oe(t, null);
    return ue(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function mh(r, t) {
  return t.hasOwnProperty("subType") ? ue(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function wh(r) {
  var t = j();
  return r && E(Bt(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && q(et.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
qe(Au, Eu);
var Aw = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], Od = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      E(Aw, function(e) {
        this[e] = ot(t[e], t);
      }, this);
    }
    return r;
  }()
), bs = {}, Nd = (
  /** @class */
  function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var i = [];
      E(bs, function(n, a) {
        var o = n.create(t, e);
        i = i.concat(o || []);
      }), this._coordinateSystems = i;
    }, r.prototype.update = function(t, e) {
      E(this._coordinateSystems, function(i) {
        i.update && i.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      bs[t] = e;
    }, r.get = function(t) {
      return bs[t];
    }, r;
  }()
), Mw = /^(min|max)?(.+)$/, Pw = (
  /** @class */
  function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (E(Bt(t.series), function(o) {
        o && o.data && Vt(o.data) && Ks(o.data);
      }), E(Bt(t.dataset), function(o) {
        o && o.source && Vt(o.source) && Ks(o.source);
      })), t = Q(t);
      var n = this._optionBackup, a = Iw(t, e, !n);
      this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], Q(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, i = this._timelineOptions;
      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = Q(
          // FIXME:TS as TimelineModel or quivlant interface
          i[n.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!n.length && !a)
        return s;
      for (var l = 0, u = n.length; l < u; l++)
        Lw(n[l].query, e, i) && o.push(l);
      return !o.length && a && (o = [-1]), o.length && !Ow(o, this._currentMediaIndices) && (s = Z(o, function(f) {
        return Q(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  }()
);
function Iw(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, h = !!(l || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (N(u) ? E(u, function(c) {
    process.env.NODE_ENV !== "production" && c && !c.option && F(c.query) && F(c.query.option) && Lt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), c && c.option && (c.query ? i.push(c) : n || (n = c));
  }) : process.env.NODE_ENV !== "production" && Lt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), v(a), E(l, function(c) {
    return v(c);
  }), E(i, function(c) {
    return v(c.option);
  });
  function v(c) {
    E(t, function(d) {
      d(c, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: l || [],
    mediaDefault: n,
    mediaList: i
  };
}
function Lw(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return E(r, function(a, o) {
    var s = o.match(Mw);
    if (!(!s || !s[1] || !s[2])) {
      var l = s[1], u = s[2].toLowerCase();
      Rw(i[u], a, l) || (n = !1);
    }
  }), n;
}
function Rw(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function Ow(r, t) {
  return r.join(",") === t.join(",");
}
var re = E, Nn = F, Sh = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Cs(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = Sh.length; e < i; e++) {
      var n = Sh[e], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && wt("itemStyle.normal." + n, n), r[n] = r[n] || {}, r[n].normal ? ut(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && wt("itemStyle.emphasis." + n, "emphasis." + n), r[n] = r[n] || {}, r[n].emphasis ? ut(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function It(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && Ne("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, ft(r[t], i)) : r[t] = i), n && (process.env.NODE_ENV !== "production" && Ne(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function hn(r) {
  It(r, "itemStyle"), It(r, "lineStyle"), It(r, "areaStyle"), It(r, "label"), It(r, "labelLine"), It(r, "upperLabel"), It(r, "edgeLabel");
}
function pt(r, t) {
  var e = Nn(r) && r[t], i = Nn(e) && e.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && Ne("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = xf.length; n < a; n++) {
      var o = xf[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
  }
}
function se(r) {
  r && (hn(r), pt(r, "label"), r.emphasis && pt(r.emphasis, "label"));
}
function Nw(r) {
  if (Nn(r)) {
    Cs(r), hn(r), pt(r, "label"), pt(r, "upperLabel"), pt(r, "edgeLabel"), r.emphasis && (pt(r.emphasis, "label"), pt(r.emphasis, "upperLabel"), pt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (Cs(t), se(t));
    var e = r.markLine;
    e && (Cs(e), se(e));
    var i = r.markArea;
    i && se(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Vt(a))
        for (var o = 0; o < a.length; o++)
          se(a[o]);
      E(r.categories, function(u) {
        hn(u);
      });
    }
    if (n && !Vt(n))
      for (var o = 0; o < n.length; o++)
        se(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        se(s[o]);
    if (e = r.markLine, e && e.data)
      for (var l = e.data, o = 0; o < l.length; o++)
        N(l[o]) ? (se(l[o][0]), se(l[o][1])) : se(l[o]);
    r.type === "gauge" ? (pt(r, "axisLabel"), pt(r, "title"), pt(r, "detail")) : r.type === "treemap" ? (It(r.breadcrumb, "itemStyle"), E(r.levels, function(u) {
      hn(u);
    })) : r.type === "tree" && hn(r.leaves);
  }
}
function Ue(r) {
  return N(r) ? r : r ? [r] : [];
}
function Th(r) {
  return (N(r) ? r[0] : r) || {};
}
function kw(r, t) {
  re(Ue(r.series), function(i) {
    Nn(i) && Nw(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), re(e, function(i) {
    re(Ue(r[i]), function(n) {
      n && (pt(n, "axisLabel"), pt(n.axisPointer, "label"));
    });
  }), re(Ue(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    pt(n, "axisLabel"), pt(n && n.axisPointer, "label");
  }), re(Ue(r.calendar), function(i) {
    It(i, "itemStyle"), pt(i, "dayLabel"), pt(i, "monthLabel"), pt(i, "yearLabel");
  }), re(Ue(r.radar), function(i) {
    pt(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && Ne("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && Ne("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && re(i.indicator, function(n) {
      n.text && wt("text", "name", "radar.indicator");
    });
  }), re(Ue(r.geo), function(i) {
    Nn(i) && (se(i), re(Ue(i.regions), function(n) {
      se(n);
    }));
  }), re(Ue(r.timeline), function(i) {
    se(i), It(i, "label"), It(i, "itemStyle"), It(i, "controlStyle", !0);
    var n = i.data;
    N(n) && E(n, function(a) {
      F(a) && (It(a, "label"), It(a, "itemStyle"));
    });
  }), re(Ue(r.toolbox), function(i) {
    It(i, "iconStyle"), re(i.feature, function(n) {
      It(n, "iconStyle");
    });
  }), pt(Th(r.axisPointer), "label"), pt(Th(r.tooltip).axisPointer, "label");
}
function Bw(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function Fw(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  a[n[s]] == null && (a[n[s]] = e);
}
function bh(r) {
  r && E(Vw, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var Vw = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], zw = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], xs = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Xi(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < xs.length; e++) {
      var i = xs[e][1], n = xs[e][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && wt(i, n));
    }
}
function Ch(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && wt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function xh(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && wt("downplay", "blur", "sunburst"));
}
function Hw(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && wt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function kd(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && kd(r[e].children, t);
}
function Bd(r, t) {
  kw(r, t), r.series = Bt(r.series), E(r.series, function(e) {
    if (F(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && wt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && wt("clockWise", "clockwise")), Ch(e.label);
        var n = e.data;
        if (n && !Vt(n))
          for (var a = 0; a < n.length; a++)
            Ch(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && wt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = Bw(e, "pointer.color");
        o != null && Fw(e, "itemStyle.color", o);
      } else if (i === "bar") {
        Xi(e), Xi(e.backgroundStyle), Xi(e.emphasis);
        var n = e.data;
        if (n && !Vt(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (Xi(n[a]), Xi(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && wt("highlightPolicy", "emphasis.focus", "sunburst"))), xh(e), kd(e.data, xh);
      } else i === "graph" || i === "sankey" ? Hw(e) : i === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && wt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && Ne("`mapLocation` is not used anymore."), ft(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && wt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), bh(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), E(zw, function(e) {
    var i = r[e];
    i && (N(i) || (i = [i]), E(i, function(n) {
      bh(n);
    }));
  });
}
function Gw(r) {
  var t = j();
  r.eachSeries(function(e) {
    var i = e.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      n.length && a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(o);
    }
  }), t.each(Uw);
}
function Uw(r) {
  E(r, function(t, e) {
    var i = [], n = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(u, f, h) {
      var v = o.get(t.stackedDimension, h);
      if (isNaN(v))
        return n;
      var c, d;
      s ? d = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
      for (var y = NaN, p = e - 1; p >= 0; p--) {
        var g = r[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
          var _ = g.data.getByRawIndex(g.stackResultDimension, d);
          if (l === "all" || l === "positive" && _ > 0 || l === "negative" && _ < 0 || l === "samesign" && v >= 0 && _ > 0 || l === "samesign" && v <= 0 && _ < 0) {
            v = t_(v, _), y = _;
            break;
          }
        }
      }
      return i[0] = v, i[1] = y, i;
    });
  });
}
var Po = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === ze ? {} : []), this.sourceFormat = t.sourceFormat || Pd, this.seriesLayoutBy = t.seriesLayoutBy || Xe, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && Ld(this, i) === Dt.Must && (n.type = "ordinal");
        }
    }
    return r;
  }()
);
function Mu(r) {
  return r instanceof Po;
}
function El(r, t, e) {
  e = e || Vd(r);
  var i = t.seriesLayoutBy, n = Yw(r, e, i, t.sourceHeader, t.dimensions), a = new Po({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: Q(t)
  });
  return a;
}
function Fd(r) {
  return new Po({
    data: r,
    sourceFormat: Vt(r) ? $e : Ve
  });
}
function Ww(r) {
  return new Po({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: Q(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function Vd(r) {
  var t = Pd;
  if (Vt(r))
    t = $e;
  else if (N(r)) {
    r.length === 0 && (t = qt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (N(n) || Vt(n)) {
          t = qt;
          break;
        } else if (F(n)) {
          t = Se;
          break;
        }
      }
    }
  } else if (F(r)) {
    for (var a in r)
      if ($r(r, a) && Xt(r[a])) {
        t = ze;
        break;
      }
  }
  return t;
}
function Yw(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Dh(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === qt) {
    var s = r;
    i === "auto" || i == null ? Eh(function(u) {
      u != null && u !== "-" && (k(u) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = yt(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Eh(function(u, f) {
      n[f] = u != null ? u + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === Oi ? s.length : s[0] ? s[0].length : null;
  } else if (t === Se)
    n || (n = $w(r));
  else if (t === ze)
    n || (n = [], E(r, function(u, f) {
      n.push(f);
    }));
  else if (t === Ve) {
    var l = wo(r[0]);
    a = N(l) && l.length || 1;
  } else t === $e && process.env.NODE_ENV !== "production" && q(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: Dh(n),
    dimensionsDetectedCount: a
  };
}
function $w(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return gt(e);
}
function Dh(r) {
  if (r) {
    var t = j();
    return Z(r, function(e, i) {
      e = F(e) ? e : {
        name: e
      };
      var n = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (n.name == null)
        return n;
      n.name += "", n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? n.name += "-" + a.count++ : t.set(n.name, {
        count: 1
      }), n;
    });
  }
}
function Eh(r, t, e, i) {
  if (t === Oi)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function zd(r) {
  var t = r.sourceFormat;
  return t === Se || t === ze;
}
var Lr, Rr, Or, Ah, Mh, Hd = (
  /** @class */
  function() {
    function r(t, e) {
      var i = Mu(t) ? t : Fd(t);
      this._source = i;
      var n = this._data = i.data;
      if (i.sourceFormat === $e) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = n;
      }
      Mh(this, n, i);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    }(), r.internalField = function() {
      var t;
      Mh = function(o, s, l) {
        var u = l.sourceFormat, f = l.seriesLayoutBy, h = l.startIndex, v = l.dimensionsDefine, c = Ah[Pu(u, f)];
        if (process.env.NODE_ENV !== "production" && q(c, "Invalide sourceFormat: " + u), R(o, c), u === $e)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = Gd(u, f);
          o.getItem = ot(d, null, s, h, v);
          var y = Ud(u, f);
          o.count = ot(y, null, s, h, v);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var l = this._data, u = this._dimSize, f = u * o, h = 0; h < u; h++)
          s[h] = l[f + h];
        return s;
      }, i = function(o, s, l, u) {
        for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
          for (var c = u[v], d = c[0] == null ? 1 / 0 : c[0], y = c[1] == null ? -1 / 0 : c[1], p = s - o, g = l[v], _ = 0; _ < p; _++) {
            var m = f[_ * h + v];
            g[o + _] = m, m < d && (d = m), m > y && (y = m);
          }
          c[0] = d, c[1] = y;
        }
      }, n = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      Ah = (t = {}, t[qt + "_" + Xe] = {
        pure: !0,
        appendData: a
      }, t[qt + "_" + Oi] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Se] = {
        pure: !0,
        appendData: a
      }, t[ze] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          E(o, function(l, u) {
            for (var f = s[u] || (s[u] = []), h = 0; h < (l || []).length; h++)
              f.push(l[h]);
          });
        }
      }, t[Ve] = {
        appendData: a
      }, t[$e] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && q(Vt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), r;
  }()
), Ph = function(r, t, e, i) {
  return r[i];
}, Xw = (Lr = {}, Lr[qt + "_" + Xe] = function(r, t, e, i) {
  return r[i + t];
}, Lr[qt + "_" + Oi] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var l = o[s];
    a[s] = l ? l[i] : null;
  }
  return a;
}, Lr[Se] = Ph, Lr[ze] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var l = r[s];
    a[o] = l ? l[i] : null;
  }
  return a;
}, Lr[Ve] = Ph, Lr);
function Gd(r, t) {
  var e = Xw[Pu(r, t)];
  return process.env.NODE_ENV !== "production" && q(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var Ih = function(r, t, e) {
  return r.length;
}, qw = (Rr = {}, Rr[qt + "_" + Xe] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, Rr[qt + "_" + Oi] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, Rr[Se] = Ih, Rr[ze] = function(r, t, e) {
  var i = e[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = r[i];
  return n ? n.length : 0;
}, Rr[Ve] = Ih, Rr);
function Ud(r, t) {
  var e = qw[Pu(r, t)];
  return process.env.NODE_ENV !== "production" && q(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var Ds = function(r, t, e) {
  return r[t];
}, Zw = (Or = {}, Or[qt] = Ds, Or[Se] = function(r, t, e) {
  return r[e];
}, Or[ze] = Ds, Or[Ve] = function(r, t, e) {
  var i = wo(r);
  return i instanceof Array ? i[t] : i;
}, Or[$e] = Ds, Or);
function Wd(r) {
  var t = Zw[r];
  return process.env.NODE_ENV !== "production" && q(t, 'Do not support get value on "' + r + '".'), t;
}
function Pu(r, t) {
  return r === qt ? r + "_" + t : r;
}
function no(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return Wd(a)(i, o, s);
      } else {
        var l = i;
        return a === Ve && (l = wo(i)), l;
      }
    }
  }
}
var Kw = /\{@(.+?)\}/g, Qw = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var i = this.getData(e), n = this.getRawValue(t, e), a = i.getRawIndex(t), o = i.getName(t), s = i.getRawDataItem(t), l = i.getItemVisual(t, "style"), u = l && l[i.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, h = this.mainType, v = h === "series", c = i.userOutput && i.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: v ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: v ? this.id : null,
        seriesName: v ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: n,
        color: u,
        borderColor: f,
        dimensionNames: c ? c.fullDimensions : null,
        encode: c ? c.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, i, n, a, o) {
      e = e || "normal";
      var s = this.getData(i), l = this.getDataParams(t, i);
      if (o && (l.value = o.interpolatedValue), n != null && N(l.value) && (l.value = l.value[n]), !a) {
        var u = s.getItemModel(t);
        a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (J(a))
        return l.status = e, l.dimensionIndex = n, a(l);
      if (k(a)) {
        var f = Ad(a, l);
        return f.replace(Kw, function(h, v) {
          var c = v.length, d = v;
          d.charAt(0) === "[" && d.charAt(c - 1) === "]" && (d = +d.slice(1, c - 1), process.env.NODE_ENV !== "production" && isNaN(d) && Lt("Invalide label formatter: @" + v + ", only support @[0], @[1], @[2], ..."));
          var y = no(s, t, d);
          if (o && N(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (y = o.interpolatedValue[p]);
          }
          return y != null ? y + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return no(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  }()
);
function Lh(r) {
  var t, e;
  return F(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + Za(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Dn(r) {
  return new jw(r);
}
var jw = (
  /** @class */
  function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, i = t && t.skip;
      if (this._dirty && e) {
        var n = this.context;
        n.data = n.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !i && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, l = f(t && t.modBy), u = t && t.modDataCount || 0;
      (o !== l || s !== u) && (a = "reset");
      function f(_) {
        return !(_ >= 1) && (_ = 1), _;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(i)), this._modBy = l, this._modDataCount = u;
      var v = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && q(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && q(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var c = this._dueIndex, d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
        if (!i && (h || c < d)) {
          var y = this._progress;
          if (N(y))
            for (var p = 0; p < y.length; p++)
              this._doProgress(y[p], c, d, l, u);
          else
            this._doProgress(y, c, d, l, u);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && q(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, i, n, a) {
      Rh.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: Rh.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), N(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var n = this._downstream;
      return n && n.dirty(), i;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && q(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  }()
), Rh = /* @__PURE__ */ function() {
  var r, t, e, i, n, a = {
    reset: function(l, u, f, h) {
      t = l, r = u, e = f, i = h, n = Math.ceil(i / e), a.next = e > 1 && i > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var l = t % n * e + Math.ceil(t / n), u = t >= r ? null : l < i ? l : t;
    return t++, u;
  }
}();
function ka(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !yt(r) && r != null && r !== "-" && (r = +_o(r)), r == null || r === "" ? NaN : Number(r));
}
j({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +_o(r);
  },
  trim: function(r) {
    return k(r) ? Ie(r) : r;
  }
});
var Jw = (
  /** @class */
  function() {
    function r(t, e) {
      var i = t === "desc";
      this._resultLT = i ? 1 : -1, e == null && (e = i ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var i = yt(t) ? t : qa(t), n = yt(e) ? e : qa(e), a = isNaN(i), o = isNaN(n);
      if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
        var s = k(t), l = k(e);
        s && (i = l ? t : 0), l && (n = s ? e : 0);
      }
      return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
    }, r;
  }()
), t1 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return ka(t, e);
    }, r;
  }()
);
function e1(r, t) {
  var e = new t1(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Xe && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Wt(o));
  var s = [], l = {}, u = r.dimensionsDefine;
  if (u)
    E(u, function(y, p) {
      var g = y.name, _ = {
        index: p,
        name: g,
        displayName: y.displayName
      };
      if (s.push(_), g != null) {
        var m = "";
        $r(l, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), Wt(m)), l[g] = _;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = Gd(n, Xe);
  t.__isBuiltIn && (e.getRawDataItem = function(y) {
    return h(i, a, s, y);
  }, e.getRawData = ot(r1, null, r)), e.cloneRawData = ot(i1, null, r);
  var v = Ud(n, Xe);
  e.count = ot(v, null, i, a, s);
  var c = Wd(n);
  e.retrieveValue = function(y, p) {
    var g = h(i, a, s, y);
    return d(g, p);
  };
  var d = e.retrieveValueFromItem = function(y, p) {
    if (y != null) {
      var g = s[p];
      if (g)
        return c(y, p, g.name);
    }
  };
  return e.getDimensionInfo = ot(n1, null, s, l), e.cloneAllDimensionInfo = ot(a1, null, s), e;
}
function r1(r) {
  var t = r.sourceFormat;
  if (!Iu(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), Wt(e);
  }
  return r.data;
}
function i1(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Iu(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), Wt(i);
  }
  if (t === qt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === Se) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(R({}, e[a]));
    return n;
  }
}
function n1(r, t, e) {
  if (e != null) {
    if (yt(e) || !isNaN(e) && !$r(t, e))
      return r[e];
    if ($r(t, e))
      return t[e];
  }
}
function a1(r) {
  return Q(r);
}
var Yd = j();
function o1(r) {
  r = Q(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), Wt(e));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), Wt(e));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, Yd.set(t, r);
}
function s1(r, t, e) {
  var i = Bt(r), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Wt(a));
  for (var o = 0, s = n; o < s; o++) {
    var l = i[o];
    t = l1(l, t, e, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function l1(r, t, e, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), Wt(n)), F(r) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof r + "."), Wt(n));
  var a = r.type, o = Yd.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), Wt(n));
  var s = Z(t, function(f) {
    return e1(f, o);
  }), l = Bt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: Q(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var u = Z(l, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", Za(f.data), "- transform result dimensions:", Za(f.dimensions)].join(`
`);
    }).join(`
`);
    n_(u);
  }
  return Z(l, function(f, h) {
    var v = "";
    F(f) || (process.env.NODE_ENV !== "production" && (v = "A transform should not return some empty results."), Wt(v)), f.data || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be not be null or undefined"), Wt(v));
    var c = Vd(f.data);
    Iu(c) || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be array rows or object rows."), Wt(v));
    var d, y = t[0];
    if (y && h === 0 && !f.dimensions) {
      var p = y.startIndex;
      p && (f.data = y.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: Xe,
        sourceHeader: p,
        dimensions: y.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Xe,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return El(f.data, d, null);
  });
}
function Iu(r) {
  return r === qt || r === Se;
}
var Io = "undefined", u1 = typeof Uint32Array === Io ? Array : Uint32Array, f1 = typeof Uint16Array === Io ? Array : Uint16Array, $d = typeof Int32Array === Io ? Array : Int32Array, Oh = typeof Float64Array === Io ? Array : Float64Array, Xd = {
  float: Oh,
  int: $d,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Oh
}, Es;
function oi(r) {
  return r > 65535 ? u1 : f1;
}
function si() {
  return [1 / 0, -1 / 0];
}
function h1(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Nh(r, t, e, i, n) {
  var a = Xd[e || "float"];
  if (n) {
    var o = r[t], s = o && o.length;
    if (s !== i) {
      for (var l = new a(i), u = 0; u < s; u++)
        l[u] = o[u];
      r[t] = l;
    }
  } else
    r[t] = new a(i);
}
var Al = (
  /** @class */
  function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = j();
    }
    return r.prototype.initData = function(t, e, i) {
      process.env.NODE_ENV !== "production" && q(J(t.getItem) && J(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = Es[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [];
      var o = zd(n);
      this._dimensions = Z(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && q(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var i = this._calcDimNameToIdx, n = this._dimensions, a = i.get(t);
      if (a != null) {
        if (n[a].type === e)
          return a;
      } else
        a = n.length;
      return n[a] = {
        type: e
      }, i.set(t, a), this._chunks[a] = new Xd[e || "float"](this._rawCount), this._rawExtent[a] = si(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = si());
      for (var l = a[t], u = o; u < s; u++) {
        var f = i[u] = e.parseAndCollect(i[u]);
        isNaN(f) || (l[0] = Math.min(f, l[0]), l[1] = Math.max(f, l[1]));
      }
      n.ordinalMeta = e, n.ordinalOffset = s, n.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], i = e.ordinalMeta;
      return i;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && q(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, i = this.count();
      e.appendData(t);
      var n = e.count();
      return e.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n];
    }, r.prototype.appendValues = function(t, e) {
      for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
        var f = n[u];
        Nh(i, u, f.type, l, !0);
      }
      for (var h = [], v = s; v < l; v++)
        for (var c = v - s, d = 0; d < a; d++) {
          var f = n[d], y = Es.arrayRows.call(this, t[c] || h, f.property, c, d);
          i[d][v] = y;
          var p = o[d];
          y < p[0] && (p[0] = y), y > p[1] && (p[1] = y);
        }
      return this._rawCount = this._count = l, {
        start: s,
        end: l
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = Z(o, function(_) {
        return _.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        l[f] || (l[f] = si()), Nh(a, f, h.type, e, i);
      }
      if (n.fillStorage)
        n.fillStorage(t, e, a, l);
      else
        for (var v = [], c = t; c < e; c++) {
          v = n.getItem(c, v);
          for (var d = 0; d < s; d++) {
            var y = a[d], p = this._dimValueGetter(v, u[d], c, d);
            y[c] = p;
            var g = l[d];
            p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      !n.persistent && n.clean && n.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var i = this._chunks[t];
      return i ? i[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var i = [], n = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          n.push(a);
      } else
        n = t;
      for (var a = 0, o = n.length; a < o; a++)
        i.push(this.get(n[a], e));
      return i;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var i = this._chunks[t];
      return i ? i[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], i = 0;
      if (e)
        for (var n = 0, a = this.count(); n < a; n++) {
          var o = this.get(t, n);
          isNaN(o) || (i += o);
        }
      return i;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(a) {
        isNaN(a) || e.push(a);
      });
      var i = e.sort(function(a, o) {
        return a - o;
      }), n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, i = e[t];
      if (i != null && i < this._count && i === t)
        return t;
      for (var n = 0, a = this._count - 1; n <= a; ) {
        var o = (n + a) / 2 | 0;
        if (e[o] < t)
          n = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      var n = this._chunks, a = n[t], o = [];
      if (!a)
        return o;
      i == null && (i = 1 / 0);
      for (var s = 1 / 0, l = -1, u = 0, f = 0, h = this.count(); f < h; f++) {
        var v = this.getRawIndex(f), c = e - a[v], d = Math.abs(c);
        d <= i && ((d < s || d === s && c >= 0 && l < 0) && (s = d, l = c, u = 0), c === l && (o[u++] = f));
      }
      return o.length = u, o;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var i = e.constructor, n = this._count;
        if (i === Array) {
          t = new i(n);
          for (var a = 0; a < n; a++)
            t[a] = e[a];
        } else
          t = new i(e.buffer, 0, n);
      } else {
        var i = oi(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = oi(i._rawCount), o = new a(n), s = [], l = t.length, u = 0, f = t[0], h = i._chunks, v = 0; v < n; v++) {
        var c = void 0, d = i.getRawIndex(v);
        if (l === 0)
          c = e(v);
        else if (l === 1) {
          var y = h[f][d];
          c = e(y, v);
        } else {
          for (var p = 0; p < l; p++)
            s[p] = h[t[p]][d];
          s[p] = v, c = e.apply(null, s);
        }
        c && (o[u++] = d);
      }
      return u < n && (i._indices = o), i._count = u, i._extent = [], i._updateGetRawIdx(), i;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), i = e._count;
      if (!i)
        return this;
      var n = gt(t), a = n.length;
      if (!a)
        return this;
      var o = e.count(), s = oi(e._rawCount), l = new s(o), u = 0, f = n[0], h = t[f][0], v = t[f][1], c = e._chunks, d = !1;
      if (!e._indices) {
        var y = 0;
        if (a === 1) {
          for (var p = c[n[0]], g = 0; g < i; g++) {
            var _ = p[g];
            (_ >= h && _ <= v || isNaN(_)) && (l[u++] = y), y++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = c[n[0]], m = c[n[1]], w = t[n[1]][0], S = t[n[1]][1], g = 0; g < i; g++) {
            var _ = p[g], T = m[g];
            (_ >= h && _ <= v || isNaN(_)) && (T >= w && T <= S || isNaN(T)) && (l[u++] = y), y++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var b = e.getRawIndex(g), _ = c[n[0]][b];
            (_ >= h && _ <= v || isNaN(_)) && (l[u++] = b);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var x = !0, b = e.getRawIndex(g), C = 0; C < a; C++) {
              var D = n[C], _ = c[D][b];
              (_ < t[D][0] || _ > t[D][1]) && (x = !1);
            }
            x && (l[u++] = e.getRawIndex(g));
          }
      return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var i = this.clone(t);
      return this._updateDims(i, t, e), i;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, i) {
      for (var n = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
        u[e[f]] = si();
      for (var h = 0; h < s; h++) {
        for (var v = t.getRawIndex(h), c = 0; c < o; c++)
          l[c] = n[e[c]][v];
        l[o] = h;
        var d = i && i.apply(null, l);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var y = e[f], p = d[f], g = u[y], _ = n[y];
            _ && (_[v] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, h, v, c = new (oi(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
      c[s++] = u;
      for (var d = 1; d < o - 1; d += l) {
        for (var y = Math.min(d + l, o - 1), p = Math.min(d + l * 2, o), g = (p + y) / 2, _ = 0, m = y; m < p; m++) {
          var w = this.getRawIndex(m), S = a[w];
          isNaN(S) || (_ += S);
        }
        _ /= p - y;
        var T = d, b = Math.min(d + l, o), x = d - 1, C = a[u];
        f = -1, v = T;
        for (var D = -1, A = 0, m = T; m < b; m++) {
          var w = this.getRawIndex(m), S = a[w];
          if (isNaN(S)) {
            A++, D < 0 && (D = w);
            continue;
          }
          h = Math.abs((x - g) * (S - C) - (x - m) * (_ - C)), h > f && (f = h, v = w);
        }
        A > 0 && A < b - T && (c[s++] = Math.min(D, v), v = Math.max(D, v)), c[s++] = v, u = v;
      }
      return c[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = c, i.getRawIndex = this._getRawIdx, i;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var i = this.clone([t], !0), n = i._chunks, a = Math.floor(1 / e), o = n[t], s = this.count(), l = new (oi(this._rawCount))(Math.ceil(s / a) * 2), u = 0, f = 0; f < s; f += a) {
        var h = f, v = o[this.getRawIndex(h)], c = f, d = o[this.getRawIndex(c)], y = a;
        f + a > s && (y = s - f);
        for (var p = 0; p < y; p++) {
          var g = this.getRawIndex(f + p), _ = o[g];
          _ < v && (v = _, h = f + p), _ > d && (d = _, c = f + p);
        }
        var m = this.getRawIndex(h), w = this.getRawIndex(c);
        h < c ? (l[u++] = m, l[u++] = w) : (l[u++] = w, l[u++] = m);
      }
      return i._count = u, i._indices = l, i._updateGetRawIdx(), i;
    }, r.prototype.downSample = function(t, e, i, n) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), h = a._rawExtent[t] = si(), v = new (oi(this._rawCount))(Math.ceil(f / l)), c = 0, d = 0; d < f; d += l) {
        l > f - d && (l = f - d, s.length = l);
        for (var y = 0; y < l; y++) {
          var p = this.getRawIndex(d + y);
          s[y] = u[p];
        }
        var g = i(s), _ = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
        u[_] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), v[c++] = _;
      }
      return a._count = c, a._indices = v, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (i) {
            case 0:
              e(a);
              break;
            case 1:
              e(n[t[0]][s], a);
              break;
            case 2:
              e(n[t[0]][s], n[t[1]][s], a);
              break;
            default:
              for (var l = 0, u = []; l < i; l++)
                u[l] = n[t[l]][s];
              u[l] = a, e.apply(null, u);
          }
        }
    }, r.prototype.getDataExtent = function(t) {
      var e = this._chunks[t], i = si();
      if (!e)
        return i;
      var n = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = i;
      for (var s = o[0], l = o[1], u = 0; u < n; u++) {
        var f = this.getRawIndex(u), h = e[f];
        h < s && (s = h), h > l && (l = h);
      }
      return o = [s, l], this._extent[t] = o, o;
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
        i.push(n[a][e]);
      return i;
    }, r.prototype.clone = function(t, e) {
      var i = new r(), n = this._chunks, a = t && hr(t, function(s, l) {
        return s[l] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? h1(n[o]) : n[o];
      else
        i._chunks = n;
      return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = Q(this._extent), t._rawExtent = Q(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var i = this._indices.length;
          e = new t(i);
          for (var n = 0; n < i; n++)
            e[n] = this._indices[n];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = function() {
      function t(e, i, n, a) {
        return ka(e[a], this._dimensions[a]);
      }
      Es = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return ka(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return ka(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    }(), r;
  }()
), c1 = (
  /** @class */
  function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), i = !!e.length, n, a;
      if (qi(t)) {
        var o = t, s = void 0, l = void 0, u = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), l = Vt(s) ? $e : Ve, a = [];
        var h = this._getSourceMetaRawOption() || {}, v = u && u.metaRawOption || {}, c = W(h.seriesLayoutBy, v.seriesLayoutBy) || null, d = W(h.sourceHeader, v.sourceHeader), y = W(h.dimensions, v.dimensions), p = c !== v.seriesLayoutBy || !!d != !!v.sourceHeader || y;
        n = p ? [El(s, {
          seriesLayoutBy: c,
          sourceHeader: d,
          dimensions: y
        }, l)] : [];
      } else {
        var g = t;
        if (i) {
          var _ = this._applyTransform(e);
          n = _.sourceList, a = _.upstreamSignList;
        } else {
          var m = g.get("source", !0);
          n = [El(m, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && q(n && a), this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && q(n != null || i != null), n != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), kh(a));
      }
      var o, s = [], l = [];
      return E(t, function(u) {
        u.prepareSource();
        var f = u.getSource(n || 0), h = "";
        n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), kh(h)), s.push(f), l.push(u._getVersionSign());
      }), i ? o = s1(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [Ww(s[0])]), {
        sourceList: o,
        upstreamSignList: l
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var i = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var i = this._getUpstreamSourceManagers();
        return i[0] && i[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && q(qi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var l = this._getUpstreamSourceManagers()[0];
        qi(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, i) : (s = new Al(), s.initData(new Hd(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (qi(t)) {
        var e = Id(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return Z(yw(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (qi(t))
        e = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: i,
        dimensions: n
      };
    }, r;
  }()
);
function qi(r) {
  return r.mainType === "series";
}
function kh(r) {
  throw new Error(r);
}
var v1 = "line-height:1";
function qd(r) {
  var t = r.lineHeight;
  return t == null ? v1 : "line-height:" + Gt(t + "") + "px";
}
function Zd(r, t) {
  var e = r.color || "#6e7079", i = r.fontSize || 12, n = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + Gt(i + "") + "px;color:" + Gt(e) + ";font-weight:" + Gt(n + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + Gt(o + "") + "px;color:" + Gt(a) + ";font-weight:" + Gt(s + "")
  } : {
    nameStyle: {
      fontSize: i,
      fill: e,
      fontWeight: n
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var d1 = [0, 10, 20, 30], p1 = ["", `
`, `

`, `


`];
function kn(r, t) {
  return t.type = r, t;
}
function Ml(r) {
  return r.type === "section";
}
function Kd(r) {
  return Ml(r) ? g1 : y1;
}
function Qd(r) {
  if (Ml(r)) {
    var t = 0, e = r.blocks.length, i = e > 1 || e > 0 && !r.noHeader;
    return E(r.blocks, function(n) {
      var a = Qd(n);
      a >= t && (t = a + +(i && // 0 always can not be readable gap level.
      (!a || Ml(n) && !n.noHeader)));
    }), t;
  }
  return 0;
}
function g1(r, t, e, i) {
  var n = t.noHeader, a = _1(Qd(t)), o = [], s = t.blocks || [];
  q(!s || N(s)), s = s || [];
  var l = r.orderMode;
  if (t.sortBlocks && l) {
    s = s.slice();
    var u = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if ($r(u, l)) {
      var f = new Jw(u[l], null);
      s.sort(function(y, p) {
        return f.evaluate(y.sortParam, p.sortParam);
      });
    } else l === "seriesDesc" && s.reverse();
  }
  E(s, function(y, p) {
    var g = t.valueFormatter, _ = Kd(y)(
      // Inherit valueFormatter
      g ? R(R({}, r), {
        valueFormatter: g
      }) : r,
      y,
      p > 0 ? a.html : 0,
      i
    );
    _ != null && o.push(_);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : Pl(i, o.join(""), n ? e : a.html);
  if (n)
    return h;
  var v = xl(t.header, "ordinal", r.useUTC), c = Zd(i, r.renderMode).nameStyle, d = qd(i);
  return r.renderMode === "richText" ? jd(r, v, c) + a.richText + h : Pl(i, '<div style="' + c + ";" + d + ';">' + Gt(v) + "</div>" + h, e);
}
function y1(r, t, e, i) {
  var n = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(w) {
    return w = N(w) ? w : [w], Z(w, function(S, T) {
      return xl(S, N(c) ? c[T] : c, u);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", n), v = a ? "" : xl(l, "ordinal", u), c = t.valueType, d = o ? [] : f(t.value, t.dataIndex), y = !s || !a, p = !s && a, g = Zd(i, n), _ = g.nameStyle, m = g.valueStyle;
    return n === "richText" ? (s ? "" : h) + (a ? "" : jd(r, v, _)) + (o ? "" : S1(r, d, y, p, m)) : Pl(i, (s ? "" : h) + (a ? "" : m1(v, !s, _)) + (o ? "" : w1(d, y, p, m)), e);
  }
}
function Bh(r, t, e, i, n, a) {
  if (r) {
    var o = Kd(r), s = {
      useUTC: n,
      renderMode: e,
      orderMode: i,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function _1(r) {
  return {
    html: d1[r],
    richText: p1[r]
  };
}
function Pl(r, t, e) {
  var i = '<div style="clear:both"></div>', n = "margin: " + e + "px 0 0", a = qd(r);
  return '<div style="' + n + ";" + a + ';">' + t + i + "</div>";
}
function m1(r, t, e) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + i + '">' + Gt(r) + "</span>";
}
function w1(r, t, e, i) {
  var n = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + n : "";
  return r = N(r) ? r : [r], '<span style="' + a + ";" + i + '">' + Z(r, function(o) {
    return Gt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function jd(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function S1(r, t, e, i, n) {
  var a = [n], o = i ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(N(t) ? t.join("  ") : t, a);
}
function T1(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return Ln(i);
}
function Jd(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var As = (
  /** @class */
  function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = Nv();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, i) {
      var n = i === "richText" ? this._generateStyleName() : null, a = lw({
        color: e,
        type: t,
        renderMode: i,
        markerId: n
      });
      return k(a) ? a : (process.env.NODE_ENV !== "production" && q(n), this.richTextStyles[n] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var i = {};
      N(e) ? E(e, function(a) {
        return R(i, a);
      }) : R(i, e);
      var n = this._generateStyleName();
      return this.richTextStyles[n] = i, "{" + n + "|" + t + "}";
    }, r;
  }()
);
function b1(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = N(s), u = T1(t, e), f, h, v, c;
  if (o > 1 || l && !o) {
    var d = C1(s, t, e, a, u);
    f = d.inlineValues, h = d.inlineValueTypes, v = d.blocks, c = d.inlineValues[0];
  } else if (o) {
    var y = n.getDimensionInfo(a[0]);
    c = f = no(n, e, a[0]), h = y.type;
  } else
    c = f = l ? s[0] : s;
  var p = nu(t), g = p && t.name || "", _ = n.getName(e), m = i ? g : _;
  return kn("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !p,
    sortParam: c,
    blocks: [kn("nameValue", {
      markerType: "item",
      markerColor: u,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: m,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Ie(m),
      value: f,
      valueType: h,
      dataIndex: e
    })].concat(v || [])
  });
}
function C1(r, t, e, i, n) {
  var a = t.getData(), o = hr(r, function(h, v, c) {
    var d = a.getDimensionInfo(c);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], l = [], u = [];
  i.length ? E(i, function(h) {
    f(no(a, e, h), h);
  }) : E(r, f);
  function f(h, v) {
    var c = a.getDimensionInfo(v);
    !c || c.otherDims.tooltip === !1 || (o ? u.push(kn("nameValue", {
      markerType: "subItem",
      markerColor: n,
      name: c.displayName,
      value: h,
      valueType: c.type
    })) : (s.push(h), l.push(c.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: l,
    blocks: u
  };
}
var tr = Tt();
function va(r, t) {
  return r.getName(t) || r.getId(t);
}
var x1 = "__universalTransitionEnabled", vr = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Dn({
        count: E1,
        reset: A1
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = tr(this).sourceManager = new c1(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      Vh(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && q(o, "getInitialData returned invalid data."), tr(this).dataBeforeProcessed = o, Fh(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = ro(this), a = n ? Du(e) : {}, o = this.subType;
      et.hasClass(o) && (o += "Series"), ut(e, i.getTheme().get(this.subType)), ut(e, this.getDefaultOption()), vl(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && On(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = ut(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = ro(this);
      n && On(this.option, e, n);
      var a = tr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      Vh(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, tr(this).dataBeforeProcessed = o, Fh(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Vt(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && vl(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = Il(this);
      if (i) {
        var n = i.context.data;
        return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
      } else
        return tr(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var i = Il(this);
      if (i) {
        var n = i.context;
        n.outputData = e, i !== this.dataTask && (n.data = e);
      }
      tr(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return j(e);
    }, t.prototype.getSourceManager = function() {
      return tr(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return tr(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, i, n) {
      return b1({
        series: this,
        dataIndex: e,
        multipleSeries: i
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (z.node && !(e && e.ssr))
        return !1;
      var i = this.getShallow("animation");
      return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, i, n) {
      var a = this.ecModel, o = Eu.prototype.getColorFromPalette.call(this, e, i, n);
      return o || (o = a.getColorFromPalette(e, i, n)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, i) {
      this._innerSelect(this.getData(i), e);
    }, t.prototype.unselect = function(e, i) {
      var n = this.option.selectedMap;
      if (n) {
        var a = this.option.selectedMode, o = this.getData(i);
        if (a === "series" || n === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var l = e[s], u = va(o, l);
          n[u] = !1, this._selectedDataIndicesMap[u] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, i) {
      for (var n = [], a = 0; a < e.length; a++)
        n[0] = e[a], this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, i = gt(e), n = [], a = 0; a < i.length; a++) {
        var o = e[i[a]];
        o >= 0 && n.push(o);
      }
      return n;
    }, t.prototype.isSelected = function(e, i) {
      var n = this.option.selectedMap;
      if (!n)
        return !1;
      var a = this.getData(i);
      return (n === "all" || n[va(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[x1])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, i) {
      var n, a, o = this.option, s = o.selectedMode, l = i.length;
      if (!(!s || !l)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          F(o.selectedMap) || (o.selectedMap = {});
          for (var u = o.selectedMap, f = 0; f < l; f++) {
            var h = i[f], v = va(e, h);
            u[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var c = i[l - 1], v = va(e, c);
          o.selectedMap = (n = {}, n[v] = !0, n), this._selectedDataIndicesMap = (a = {}, a[v] = e.getRawIndex(c), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var i = [];
        e.hasItemOption && e.each(function(n) {
          var a = e.getRawDataItem(n);
          a && a.selected && i.push(n);
        }), i.length > 0 && this._innerSelect(e, i);
      }
    }, t.registerClass = function(e) {
      return et.registerClass(e);
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    }(), t;
  }(et)
);
qe(vr, Qw);
qe(vr, Eu);
Hv(vr, et);
function Fh(r) {
  var t = r.name;
  nu(r) || (r.name = D1(r) || t);
}
function D1(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return E(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function E1(r) {
  return r.model.getRawData().count();
}
function A1(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), M1;
}
function M1(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Vh(r, t) {
  E(Ng(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, St(P1, t));
  });
}
function P1(r, t) {
  var e = Il(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function Il(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var i = e.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(r.uid));
    }
    return i;
  }
}
var Be = (
  /** @class */
  function() {
    function r() {
      this.group = new me(), this.uid = Ao("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
    }, r.prototype.updateLayout = function(t, e, i, n) {
    }, r.prototype.updateVisual = function(t, e, i, n) {
    }, r.prototype.toggleBlurSeries = function(t, e, i) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  }()
);
su(Be);
lu(Be);
function I1() {
  var r = Tt();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var tp = Tt(), L1 = I1(), fr = (
  /** @class */
  function() {
    function r() {
      this.group = new me(), this.uid = Ao("viewChart"), this.renderTask = Dn({
        plan: R1,
        reset: O1
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, r.prototype.highlight = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Lt("Unknown dataType " + n.dataType);
        return;
      }
      Hh(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Lt("Unknown dataType " + n.dataType);
        return;
      }
      Hh(a, n, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateLayout = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateVisual = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.eachRendered = function(t) {
      wd(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      tp(t).updateMethod = e;
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.type = "chart";
    }(), r;
  }()
);
function zh(r, t, e) {
  r && Ei(r) && (t === "emphasis" ? yl : _l)(r, e);
}
function Hh(r, t, e) {
  var i = Hn(r, t), n = t && t.highlightKey != null ? Bm(t.highlightKey) : null;
  i != null ? E(Bt(i), function(a) {
    zh(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    zh(a, e, n);
  });
}
su(fr, ["dispose"]);
lu(fr);
function R1(r) {
  return L1(r.model);
}
function O1(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && tp(n).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return l !== "render" && o[l](t, e, i, n), N1[l];
}
var N1 = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
}, ao = "\0__throttleOriginMethod", Gh = "\0__throttleRate", Uh = "\0__throttleType";
function Lu(r, t, e) {
  var i, n = 0, a = 0, o = null, s, l, u, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
  }
  var v = function() {
    for (var c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    i = (/* @__PURE__ */ new Date()).getTime(), l = this, u = c;
    var y = f || t, p = f || e;
    f = null, s = i - (p ? n : a) - y, clearTimeout(o), p ? o = setTimeout(h, y) : s >= 0 ? h() : o = setTimeout(h, -s), n = i;
  };
  return v.clear = function() {
    o && (clearTimeout(o), o = null);
  }, v.debounceNextCall = function(c) {
    f = c;
  }, v;
}
function ep(r, t, e, i) {
  var n = r[t];
  if (n) {
    var a = n[ao] || n, o = n[Uh], s = n[Gh];
    if (s !== e || o !== i) {
      if (e == null || !i)
        return r[t] = a;
      n = r[t] = Lu(a, e, i === "debounce"), n[ao] = a, n[Uh] = i, n[Gh] = e;
    }
    return n;
  }
}
function Ll(r, t) {
  var e = r[t];
  e && e[ao] && (e.clear && e.clear(), r[t] = e[ao]);
}
var Wh = Tt(), Yh = {
  itemStyle: In(bd, !0),
  lineStyle: In(Td, !0)
}, k1 = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function rp(r, t) {
  var e = r.visualStyleMapper || Yh[t];
  return e || (console.warn("Unknown style type '" + t + "'."), Yh.itemStyle);
}
function ip(r, t) {
  var e = r.visualDrawType || k1[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var B1 = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = rp(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var l = ip(r, i), u = o[l], f = J(u) ? u : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[l] || f || h) {
      var v = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[l] || (o[l] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || J(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || J(o.stroke) ? v : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(c, d) {
          var y = r.getDataParams(d), p = R({}, o);
          p[l] = f(y), c.setItemVisual(d, "style", p);
        }
      };
  }
}, Zi = new ct(), F1 = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = rp(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var l = o.getRawDataItem(s);
          if (l && l[i]) {
            Zi.option = l[i];
            var u = n(Zi), f = o.ensureUniqueItemVisual(s, "style");
            R(f, u), Zi.option.decal && (o.setItemVisual(s, "decal", Zi.option.decal), Zi.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, V1 = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = j();
    r.eachSeries(function(e) {
      var i = e.getColorBy();
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), Wh(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = Wh(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = ip(e, s);
        a.each(function(u) {
          var f = a.getRawIndex(u);
          n[f] = u;
        }), i.each(function(u) {
          var f = n[u], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var v = a.ensureUniqueItemVisual(f, "style"), c = i.getName(u) || u + "", d = i.count();
            v[l] = e.getColorFromPalette(c, o, d);
          }
        });
      }
    });
  }
}, da = Math.PI;
function z1(r, t) {
  t = t || {}, ft(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new me(), i = new Ft({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(i);
  var n = new Rt({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Ft({
    style: {
      fill: "none"
    },
    textContent: n,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new xo({
    shape: {
      startAngle: -da / 2,
      endAngle: -da / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: da * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: da * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = n.getBoundingRect().width, l = t.showSpinner ? t.spinnerRadius : 0, u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: u,
      cy: f
    }), a.setShape({
      x: u - l,
      y: f - l,
      width: l * 2,
      height: l * 2
    }), i.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var np = (
  /** @class */
  function() {
    function r(t, e, i, n) {
      this._stageTaskMap = j(), this.ecInstance = t, this.api = e, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(i) {
        var n = i.overallTask;
        n && n.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, a = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex, o = a ? i.step : null, s = n && n.modDataCount, l = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: l,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var i = this._pipelineMap.get(t.uid), n = t.getData(), a = n.count(), o = i.progressiveEnabled && e.incrementalPrepareRender && a >= i.threshold, s = t.get("large") && a >= t.get("largeThreshold"), l = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = i.context = {
        progressiveRender: o,
        modDataCount: l,
        large: s
      };
    }, r.prototype.restorePipelines = function(t) {
      var e = this, i = e._pipelineMap = j();
      t.eachSeries(function(n) {
        var a = n.getProgressive(), o = n.uid;
        i.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: n.getProgressiveThreshold(),
          progressiveEnabled: a && !(n.preventIncremental && n.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0
        }), e._pipe(n, n.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), i = this.api;
      E(this._allHandlers, function(n) {
        var a = t.get(n.uid) || t.set(n.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), q(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, e, i), n.overallReset && this._createOverallStageTask(n, a, e, i);
      }, this);
    }, r.prototype.prepareView = function(t, e, i, n) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, i) {
      this._performStageTasks(this._visualHandlers, t, e, i);
    }, r.prototype._performStageTasks = function(t, e, i, n) {
      n = n || {};
      var a = !1, o = this;
      E(t, function(l, u) {
        if (!(n.visualType && n.visualType !== l.visualType)) {
          var f = o._stageTaskMap.get(l.uid), h = f.seriesTaskMap, v = f.overallTask;
          if (v) {
            var c, d = v.agentStubMap;
            d.each(function(p) {
              s(n, p) && (p.dirty(), c = !0);
            }), c && v.dirty(), o.updatePayload(v, i);
            var y = o.getPerformArgs(v, n.block);
            d.each(function(p) {
              p.perform(y);
            }), v.perform(y) && (a = !0);
          } else h && h.each(function(p, g) {
            s(n, p) && p.dirty();
            var _ = o.getPerformArgs(p, n.block);
            _.skip = !l.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(_) && (a = !0);
          });
        }
      });
      function s(l, u) {
        return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(i) {
        e = i.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, i, n) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = j(), l = t.seriesType, u = t.getTargetSeries;
      t.createOnAllSeries ? i.eachRawSeries(f) : l ? i.eachRawSeriesByType(l, f) : u && u(i, n).each(f);
      function f(h) {
        var v = h.uid, c = s.set(v, o && o.get(v) || Dn({
          plan: Y1,
          reset: $1,
          count: q1
        }));
        c.context = {
          model: h,
          ecModel: i,
          api: n,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, c);
      }
    }, r.prototype._createOverallStageTask = function(t, e, i, n) {
      var a = this, o = e.overallTask = e.overallTask || Dn({
        reset: H1
      });
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, l = o.agentStubMap = j(), u = t.seriesType, f = t.getTargetSeries, h = !0, v = !1, c = "";
      process.env.NODE_ENV !== "production" && (c = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), q(!t.createOnAllSeries, c), u ? i.eachRawSeriesByType(u, d) : f ? f(i, n).each(d) : (h = !1, E(i.getSeries(), d));
      function d(y) {
        var p = y.uid, g = l.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (v = !0, Dn({
          reset: G1,
          onDirty: W1
        })));
        g.context = {
          model: y,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(y, g);
      }
      v && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var i = t.uid, n = this._pipelineMap.get(i);
      !n.head && (n.head = e), n.tail && n.tail.pipe(e), n.tail = e, e.__idxInPipeline = n.count++, e.__pipeline = n;
    }, r.wrapStageHandler = function(t, e) {
      return J(t) && (t = {
        overallReset: t,
        seriesType: Z1(t)
      }), t.uid = Ao("stageHandler"), e && (t.visualType = e), t;
    }, r;
  }()
);
function H1(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function G1(r) {
  return r.overallProgress && U1;
}
function U1() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function W1() {
  this.agent && this.agent.dirty();
}
function Y1(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function $1(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Bt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? Z(t, function(e, i) {
    return ap(i);
  }) : X1;
}
var X1 = ap(0);
function ap(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else n && n.progress && n.progress(t, i);
  };
}
function q1(r) {
  return r.data.count();
}
function Z1(r) {
  oo = null;
  try {
    r(Bn, op);
  } catch {
  }
  return oo;
}
var Bn = {}, op = {}, oo;
sp(Bn, Au);
sp(op, Od);
Bn.eachSeriesByType = Bn.eachRawSeriesByType = function(r) {
  oo = r;
};
Bn.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (oo = r.subType);
};
function sp(r, t) {
  for (var e in t.prototype)
    r[e] = $t;
}
var $h = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const K1 = {
  color: $h,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], $h]
};
var Pt = "#B9B8CE", Xh = "#100C2A", pa = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Pt
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, qh = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], lp = {
  darkMode: !0,
  color: qh,
  backgroundColor: Xh,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: Pt
    },
    pageTextStyle: {
      color: Pt
    }
  },
  textStyle: {
    color: Pt
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: Pt
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Pt
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: Pt
    }
  },
  timeline: {
    lineStyle: {
      color: Pt
    },
    label: {
      color: Pt
    },
    controlStyle: {
      color: Pt,
      borderColor: Pt
    }
  },
  calendar: {
    itemStyle: {
      color: Xh
    },
    dayLabel: {
      color: Pt
    },
    monthLabel: {
      color: Pt
    },
    yearLabel: {
      color: Pt
    }
  },
  timeAxis: pa(),
  logAxis: pa(),
  valueAxis: pa(),
  categoryAxis: pa(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: qh
  },
  gauge: {
    title: {
      color: Pt
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Pt
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
lp.categoryAxis.splitLine.show = !1;
var Q1 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (k(t)) {
        var a = Le(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        E(t, function(l, u) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var v = o[h], c = u.lastIndexOf(v);
            if (c > 0 && c === u.length - v.length) {
              var d = u.slice(0, c);
              d !== "data" && (e.mainType = d, e[v.toLowerCase()] = l, f = !0);
            }
          }
          s.hasOwnProperty(u) && (i[u] = l, f = !0), f || (n[u] = l);
        });
      }
      return {
        cptQuery: e,
        dataQuery: i,
        otherQuery: n
      };
    }, r.prototype.filter = function(t, e) {
      var i = this.eventInfo;
      if (!i)
        return !0;
      var n = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
      if (!o || !s)
        return !0;
      var l = e.cptQuery, u = e.dataQuery;
      return f(l, o, "mainType") && f(l, o, "subType") && f(l, o, "index", "componentIndex") && f(l, o, "name") && f(l, o, "id") && f(u, a, "name") && f(u, a, "dataIndex") && f(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, a));
      function f(h, v, c, d) {
        return h[c] == null || v[d || c] === h[c];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  }()
), Rl = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Zh = Rl.concat(["symbolKeepAspect"]), j1 = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < Rl.length; o++) {
      var s = Rl[o], l = r.get(s);
      J(l) ? (a = !0, n[s] = l) : i[s] = l;
    }
    if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(R({
      legendIcon: r.legendIcon || i.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, i)), t.isSeriesFiltered(r))
      return;
    var u = gt(n);
    function f(h, v) {
      for (var c = r.getRawValue(v), d = r.getDataParams(v), y = 0; y < u.length; y++) {
        var p = u[y];
        h.setItemVisual(v, p, n[p](c, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, J1 = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < Zh.length; s++) {
        var l = Zh[s], u = o.getShallow(l, !0);
        u != null && n.setItemVisual(a, l, u);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function tS(r, t, e) {
  switch (e) {
    case "color":
      var i = r.getItemVisual(t, "style");
      return i[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function eS(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function rS(r, t) {
  function e(i, n) {
    var a = [];
    return i.eachComponent({
      mainType: "series",
      subType: r,
      query: n
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  E([[r + "ToggleSelect", "toggleSelect"], [r + "Select", "select"], [r + "UnSelect", "unselect"]], function(i) {
    t(i[0], function(n, a, o) {
      n = R({}, n), process.env.NODE_ENV !== "production" && wt(n.type, i[1]), o.dispatchAction(R(n, {
        type: i[1],
        seriesIndex: e(a, n)
      }));
    });
  });
}
function li(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && Ne("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, l = o.option.selectedMap, u = n.selected, f = 0; f < u.length; f++)
      if (u[f].seriesIndex === s) {
        var h = o.getData(), v = Hn(h, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: N(v) ? h.getName(v[0]) : h.getName(v),
          selected: k(l) ? l : R({}, l)
        });
      }
  }));
}
function iS(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (li("map", "selectchanged", t, n, i), li("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (li("map", "selected", t, n, i), li("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (li("map", "unselected", t, n, i), li("pie", "unselected", t, n, i));
  });
}
function cn(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var nS = Math.round(Math.random() * 9), aS = typeof Object.defineProperty == "function", oS = function() {
  function r() {
    this._id = "__ec_inner_" + nS++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return aS ? Object.defineProperty(i, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : i[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
}(), sS = st.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i + a), r.lineTo(e - n, i + a), r.closePath();
  }
}), lS = st.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i), r.lineTo(e, i + a), r.lineTo(e - n, i), r.closePath();
  }
}), uS = st.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, i = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o), l = i - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, h = Math.sin(u), v = Math.cos(u), c = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - h * c, l + s + v * c, e, i - d, e, i), r.bezierCurveTo(e, i - d, e - f + h * c, l + s + v * c, e - f, l + s), r.closePath();
  }
}), fS = st.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, i = t.width, n = t.x, a = t.y, o = i / 3 * 2;
    r.moveTo(n, a), r.lineTo(n + o, a + e), r.lineTo(n, a + e / 4 * 3), r.lineTo(n - o, a + e), r.lineTo(n, a), r.closePath();
  }
}), hS = {
  line: Ri,
  rect: Ft,
  roundRect: Ft,
  square: Ft,
  circle: Co,
  diamond: lS,
  pin: uS,
  arrow: fS,
  triangle: sS
}, cS = {
  line: function(r, t, e, i, n) {
    n.x1 = r, n.y1 = t + i / 2, n.x2 = r + e, n.y2 = t + i / 2;
  },
  rect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i;
  },
  roundRect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i, n.r = Math.min(e, i) / 4;
  },
  square: function(r, t, e, i, n) {
    var a = Math.min(e, i);
    n.x = r, n.y = t, n.width = a, n.height = a;
  },
  circle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.r = Math.min(e, i) / 2;
  },
  diamond: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  },
  pin: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  arrow: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  triangle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  }
}, Ol = {};
E(hS, function(r, t) {
  Ol[t] = new r();
});
var vS = st.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = Mv(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = Ol[i];
      n || (i = "rect", n = Ol[i]), cS[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function dS(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function Ru(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var l;
  return r.indexOf("image://") === 0 ? l = gd(r.slice(8), new it(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = mu(r.slice(7), {}, new it(t, e, i, n), o ? "center" : "cover") : l = new vS({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), l.__isEmptyBrush = s, l.setColor = dS, a && l.setColor(a), l;
}
function pS(r, t) {
  if (r != null)
    return N(r) || (r = [r, r]), [mt(r[0], t[0]) || 0, mt(W(r[1], r[0]), t[1]) || 0];
}
function Fr(r) {
  return isFinite(r);
}
function gS(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = Fr(i) ? i : 0, n = Fr(n) ? n : 1, a = Fr(a) ? a : 0, o = Fr(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function yS(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, l = l * a), o = Fr(o) ? o : 0.5, s = Fr(s) ? s : 0.5, l = l >= 0 && Fr(l) ? l : 0.5;
  var u = r.createRadialGradient(o, s, 0, o, s, l);
  return u;
}
function Nl(r, t, e) {
  for (var i = t.type === "radial" ? yS(r, t, e) : gS(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function _S(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function ga(r) {
  return parseInt(r, 10);
}
function ya(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || ga(s[i]) || ga(r.style[i])) - (ga(s[a]) || 0) - (ga(s[o]) || 0) | 0;
}
function mS(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : yt(r) ? [r] : N(r) ? r : null;
}
function up(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && mS(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = Z(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var wS = new Di(!0);
function so(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Kh(r) {
  return typeof r == "string" && r !== "none";
}
function lo(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Qh(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function jh(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function kl(r, t, e) {
  var i = Gv(t.image, t.__image, e);
  if (So(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * kg), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function SS(r, t, e, i) {
  var n, a = so(e), o = lo(e), s = e.strokePercent, l = s < 1, u = !t.path;
  (!t.silent || l) && u && t.createPathProxy();
  var f = t.path || wS, h = t.__dirty;
  if (!i) {
    var v = e.fill, c = e.stroke, d = o && !!v.colorStops, y = a && !!c.colorStops, p = o && !!v.image, g = a && !!c.image, _ = void 0, m = void 0, w = void 0, S = void 0, T = void 0;
    (d || y) && (T = t.getBoundingRect()), d && (_ = h ? Nl(r, v, T) : t.__canvasFillGradient, t.__canvasFillGradient = _), y && (m = h ? Nl(r, c, T) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (w = h || !t.__canvasFillPattern ? kl(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (S = h || !t.__canvasStrokePattern ? kl(r, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? r.fillStyle = _ : p && (w ? r.fillStyle = w : o = !1), y ? r.strokeStyle = m : g && (S ? r.strokeStyle = S : a = !1);
  }
  var b = t.getGlobalScale();
  f.setScale(b[0], b[1], t.segmentIgnoreThreshold);
  var x, C;
  r.setLineDash && e.lineDash && (n = up(t), x = n[0], C = n[1]);
  var D = !0;
  (u || h & ci) && (f.setDPR(r.dpr), l ? f.setContext(null) : (f.setContext(r), D = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), D && f.rebuildPath(r, l ? s : 1), x && (r.setLineDash(x), r.lineDashOffset = C), i || (e.strokeFirst ? (a && jh(r, e), o && Qh(r, e)) : (o && Qh(r, e), a && jh(r, e))), x && r.setLineDash([]);
}
function TS(r, t, e) {
  var i = t.__image = Gv(e.image, t.__image, t, t.onload);
  if (!(!i || !So(i))) {
    var n = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = i.width / i.height;
    if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = i.width, s = i.height), e.sWidth && e.sHeight) {
      var u = e.sx || 0, f = e.sy || 0;
      r.drawImage(i, u, f, e.sWidth, e.sHeight, n, a, o, s);
    } else if (e.sx && e.sy) {
      var u = e.sx, f = e.sy, h = o - u, v = s - f;
      r.drawImage(i, u, f, h, v, n, a, o, s);
    } else
      r.drawImage(i, n, a, o, s);
  }
}
function bS(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || Yr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = up(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (so(e) && r.strokeText(n, e.x, e.y), lo(e) && r.fillText(n, e.x, e.y)) : (lo(e) && r.fillText(n, e.x, e.y), so(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var Jh = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], tc = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function fp(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    Yt(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Gr.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (Yt(r, n), a = !0), r.globalCompositeOperation = t.blend || Gr.blend);
  for (var s = 0; s < Jh.length; s++) {
    var l = Jh[s];
    (i || t[l] !== e[l]) && (a || (Yt(r, n), a = !0), r[l] = r.dpr * (t[l] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (Yt(r, n), a = !0), r.shadowColor = t.shadowColor || Gr.shadowColor), a;
}
function ec(r, t, e, i, n) {
  var a = Fn(t, n.inHover), o = i ? null : e && Fn(e, n.inHover) || {};
  if (a === o)
    return !1;
  var s = fp(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (Yt(r, n), s = !0), Kh(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (Yt(r, n), s = !0), Kh(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (Yt(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== u && (s || (Yt(r, n), s = !0), r.lineWidth = u);
  }
  for (var f = 0; f < tc.length; f++) {
    var h = tc[f], v = h[0];
    (i || a[v] !== o[v]) && (s || (Yt(r, n), s = !0), r[v] = a[v] || h[1]);
  }
  return s;
}
function CS(r, t, e, i, n) {
  return fp(r, Fn(t, n.inHover), e && Fn(e, n.inHover), i, n);
}
function hp(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function xS(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), hp(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function DS(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var rc = 1, ic = 2, nc = 3, ac = 4;
function ES(r) {
  var t = lo(r), e = so(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Yt(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Fn(r, t) {
  return t && r.__hoverStyle || r.style;
}
function cp(r, t) {
  Vr(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Vr(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~Jt, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, l = !1;
  if ((!o || _S(a, o)) && (o && o.length && (Yt(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (Yt(r, e), r.save(), xS(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var u = e.prevEl;
  u || (l = s = !0);
  var f = t instanceof st && t.autoBatch && ES(t.style);
  s || DS(n, u.transform) ? (Yt(r, e), hp(r, t)) : f || Yt(r, e);
  var h = Fn(t, e.inHover);
  t instanceof st ? (e.lastDrawType !== rc && (l = !0, e.lastDrawType = rc), ec(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), SS(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Ka ? (e.lastDrawType !== nc && (l = !0, e.lastDrawType = nc), ec(r, t, u, l, e), bS(r, t, h)) : t instanceof Xr ? (e.lastDrawType !== ic && (l = !0, e.lastDrawType = ic), CS(r, t, u, l, e), TS(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== ac && (l = !0, e.lastDrawType = ac), AS(r, t, e)), f && i && Yt(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function AS(r, t, e) {
  var i = t.getDisplayables(), n = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover
  }, o, s;
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var l = i[o];
    l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Vr(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  for (var u = 0, f = n.length; u < f; u++) {
    var l = n[u];
    l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Vr(r, l, a, u === f - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var Ms = new oS(), oc = new zn(100), sc = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Bl(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && Ms.delete(r);
  var a = Ms.get(r);
  if (a)
    return a;
  var o = ft(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, Ms.set(r, s), r.dirty = !1, s;
  function l(u) {
    for (var f = [e], h = !0, v = 0; v < sc.length; ++v) {
      var c = o[sc[v]];
      if (c != null && !N(c) && !k(c) && !yt(c) && typeof c != "boolean") {
        h = !1;
        break;
      }
      f.push(c);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var y = oc.get(d);
      y && (n ? u.svgElement = y : u.image = y);
    }
    var p = dp(o.dashArrayX), g = MS(o.dashArrayY), _ = vp(o.symbol), m = PS(p), w = pp(g), S = !n && Pi.createCanvas(), T = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, b = C(), x;
    S && (S.width = b.width * e, S.height = b.height * e, x = S.getContext("2d")), D(), h && oc.put(d, S || T), u.image = S, u.svgElement = T, u.svgWidth = b.width, u.svgHeight = b.height;
    function C() {
      for (var A = 1, M = 0, I = m.length; M < I; ++M)
        A = bf(A, m[M]);
      for (var P = 1, M = 0, I = _.length; M < I; ++M)
        P = bf(P, _[M].length);
      A *= P;
      var L = w * m.length * _.length;
      if (process.env.NODE_ENV !== "production") {
        var O = function(V) {
          console.warn("Calculated decal size is greater than " + V + " due to decal option settings so " + V + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + V + " to be larger to avoid incontinuity.");
        };
        A > o.maxTileWidth && O("maxTileWidth"), L > o.maxTileHeight && O("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(L, o.maxTileHeight))
      };
    }
    function D() {
      x && (x.clearRect(0, 0, S.width, S.height), o.backgroundColor && (x.fillStyle = o.backgroundColor, x.fillRect(0, 0, S.width, S.height)));
      for (var A = 0, M = 0; M < g.length; ++M)
        A += g[M];
      if (A <= 0)
        return;
      for (var I = -w, P = 0, L = 0, O = 0; I < b.height; ) {
        if (P % 2 === 0) {
          for (var V = L / 2 % _.length, Y = 0, B = 0, $ = 0; Y < b.width * 2; ) {
            for (var K = 0, M = 0; M < p[O].length; ++M)
              K += p[O][M];
            if (K <= 0)
              break;
            if (B % 2 === 0) {
              var U = (1 - o.symbolSize) * 0.5, _t = Y + p[O][B] * U, bt = I + g[P] * U, Zt = p[O][B] * o.symbolSize, Te = g[P] * o.symbolSize, ee = $ / 2 % _[V].length;
              Kt(_t, bt, Zt, Te, _[V][ee]);
            }
            Y += p[O][B], ++$, ++B, B === p[O].length && (B = 0);
          }
          ++O, O === p.length && (O = 0);
        }
        I += g[P], ++L, ++P, P === g.length && (P = 0);
      }
      function Kt(xt, dt, H, X, be) {
        var Ct = n ? 1 : e, Ke = Ru(be, xt * Ct, dt * Ct, H * Ct, X * Ct, o.color, o.symbolKeepAspect);
        if (n) {
          var He = i.painter.renderOneToVNode(Ke);
          He && T.children.push(He);
        } else
          cp(x, Ke);
      }
    }
  }
}
function vp(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (k(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!k(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return vp([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    k(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function dp(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (yt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!yt(r[i])) {
      e = !1;
      break;
    }
  if (e)
    return dp([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (yt(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = Z(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function MS(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (yt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = Z(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function PS(r) {
  return Z(r, function(t) {
    return pp(t);
  });
}
function pp(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function IS(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var l = i.ensureUniqueItemVisual(o, "style");
          l.decal = Bl(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = Bl(n, t);
      }
    }
  });
}
var ye = new Fe(), uo = {};
function LS(r, t) {
  process.env.NODE_ENV !== "production" && uo[r] && Lt("Already has an implementation of " + r + "."), uo[r] = t;
}
function RS(r) {
  return process.env.NODE_ENV !== "production" && (uo[r] || Lt("Implementation of " + r + " doesn't exists.")), uo[r];
}
var OS = 1, NS = 800, kS = 900, BS = 1e3, FS = 2e3, VS = 5e3, gp = 1e3, zS = 1100, Ou = 2e3, yp = 3e3, HS = 4e3, Lo = 4500, GS = 4600, US = 5e3, WS = 6e3, _p = 7e3, YS = {
  PROCESSOR: {
    FILTER: BS,
    SERIES_FILTER: NS,
    STATISTIC: VS
  },
  VISUAL: {
    LAYOUT: gp,
    PROGRESSIVE_LAYOUT: zS,
    GLOBAL: Ou,
    CHART: yp,
    POST_CHART_LAYOUT: GS,
    COMPONENT: HS,
    BRUSH: US,
    CHART_ITEM: Lo,
    ARIA: WS,
    DECAL: _p
  }
}, Mt = "__flagInMainProcess", Ht = "__pendingUpdate", Ps = "__needsUpdateStatus", lc = /^[a-zA-Z0-9_]+$/, Is = "__connectUpdateStatus", uc = 0, $S = 1, XS = 2;
function mp(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      Qt(this.id);
      return;
    }
    return Sp(this, r, t);
  };
}
function wp(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Sp(this, r, t);
  };
}
function Sp(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), Fe.prototype[t].apply(r, e);
}
var Tp = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  }(Fe)
), bp = Tp.prototype;
bp.on = wp("on");
bp.off = wp("off");
var ui, Ls, _a, er, Rs, Os, Ns, Ki, Qi, fc, hc, ks, cc, ma, vc, Cp, ie, dc, xp = (
  /** @class */
  function(r) {
    vt(t, r);
    function t(e, i, n) {
      var a = r.call(this, new Q1()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, k(i) && (i = Dp[i]), a._dom = e;
      var o = "canvas", s = "auto", l = !1;
      if (process.env.NODE_ENV !== "production") {
        var u = (
          /* eslint-disable-next-line */
          z.hasGlobalWindow ? window : global
        );
        u && (o = W(u.__ECHARTS__DEFAULT__RENDERER__, o), s = W(u.__ECHARTS__DEFAULT__COARSE_POINTER, s), l = W(u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, l));
      }
      n.ssr;
      var f = a._zr = wf(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: W(n.useDirtyRect, l),
        useCoarsePointer: W(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = Lu(ot(f.flush, f), 17), i = Q(i), i && Bd(i, !0), a._theme = i, a._locale = Q0(n.locale || Cd), a._coordSysMgr = new Nd();
      var h = a._api = vc(a);
      function v(c, d) {
        return c.__prio - d.__prio;
      }
      return Da(ho, v), Da(Fl, v), a._scheduler = new np(a, h, Fl, ho), a._messageCenter = new Tp(), a._initEvents(), a.resize = ot(a.resize, a), f.animation.on("frame", a._onframe, a), fc(f, a), hc(f, a), Ks(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        dc(this);
        var e = this._scheduler;
        if (this[Ht]) {
          var i = this[Ht].silent;
          this[Mt] = !0;
          try {
            ui(this), er.update.call(this, null, this[Ht].updateParams);
          } catch (l) {
            throw this[Mt] = !1, this[Ht] = null, l;
          }
          this._zr.flush(), this[Mt] = !1, this[Ht] = null, Ki.call(this, i), Qi.call(this, i);
        } else if (e.unfinished) {
          var n = OS, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), Os(this, a), e.performVisualTasks(a), ma(this, this._model, o, "remain", {}), n -= +/* @__PURE__ */ new Date() - s;
          } while (n > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, i, n) {
      if (this[Mt]) {
        process.env.NODE_ENV !== "production" && Lt("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      var a, o, s;
      if (F(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[Mt] = !0, !this._model || i) {
        var l = new Pw(this._api), u = this._theme, f = this._model = new Au();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, Vl);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (n)
        this[Ht] = {
          silent: a,
          updateParams: h
        }, this[Mt] = !1, this.getZr().wakeUp();
      else {
        try {
          ui(this), er.update.call(this, null, h);
        } catch (v) {
          throw this[Ht] = null, this[Mt] = !1, v;
        }
        this._ssr || this._zr.flush(), this[Ht] = null, this[Mt] = !1, Ki.call(this, a), Qi.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      Ne("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || z.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && wt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return i.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return i.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      if (z.svgSupported) {
        var e = this._zr, i = e.storage.getDisplayList();
        return E(i, function(n) {
          n.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      e = e || {};
      var i = e.excludeComponents, n = this._model, a = [], o = this;
      E(i, function(l) {
        n.eachComponent({
          mainType: l
        }, function(u) {
          var f = o._componentsMap[u.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return E(a, function(l) {
        l.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (pc[n]) {
        var l = s, u = s, f = -s, h = -s, v = [], c = e && e.pixelRatio || this.getDevicePixelRatio();
        E(An, function(m, w) {
          if (m.group === n) {
            var S = i ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(Q(e)), T = m.getDom().getBoundingClientRect();
            l = a(T.left, l), u = a(T.top, u), f = o(T.right, f), h = o(T.bottom, h), v.push({
              dom: S,
              left: T.left,
              top: T.top
            });
          }
        }), l *= c, u *= c, f *= c, h *= c;
        var d = f - l, y = h - u, p = Pi.createCanvas(), g = wf(p, {
          renderer: i ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: y
        }), i) {
          var _ = "";
          return E(v, function(m) {
            var w = m.left - l, S = m.top - u;
            _ += '<g transform="translate(' + w + "," + S + ')">' + m.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new Ft({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: y
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), E(v, function(m) {
            var w = new Xr({
              style: {
                x: m.left * c - l,
                y: m.top * c - u,
                image: m.dom
              }
            });
            g.add(w);
          }), g.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, i) {
      return Rs(this, "convertToPixel", e, i);
    }, t.prototype.convertFromPixel = function(e, i) {
      return Rs(this, "convertFromPixel", e, i);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      var n = this._model, a, o = rs(n, e);
      return E(o, function(s, l) {
        l.indexOf("Models") >= 0 && E(s, function(u) {
          var f = u.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(i);
          else if (l === "seriesModels") {
            var h = this._chartsMap[u.__viewId];
            h && h.containPoint ? a = a || h.containPoint(i, u) : process.env.NODE_ENV !== "production" && _e(l + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && _e(l + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, i) {
      var n = this._model, a = rs(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || _e("There is no specified series model"));
      var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return l != null ? tS(s, l, i) : eS(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      E(qS, function(i) {
        var n = function(a) {
          var o = e.getModel(), s = a.target, l, u = i === "globalout";
          if (u ? l = {} : s && cn(s, function(d) {
            var y = nt(d);
            if (y && y.dataIndex != null) {
              var p = y.dataModel || o.getSeriesByIndex(y.seriesIndex);
              return l = p && p.getDataParams(y.dataIndex, y.dataType, s) || {}, !0;
            } else if (y.eventData)
              return l = R({}, y.eventData), !0;
          }, !0), l) {
            var f = l.componentType, h = l.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = l.seriesIndex);
            var v = f && h != null && o.getComponent(f, h), c = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !u && !(v && c) && _e("model or view can not be found by params"), l.event = a, l.type = i, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: l,
              model: v,
              view: c
            }, e.trigger(i, l);
          }
        };
        n.zrEventfulCallAtLast = !0, e._zr.on(i, n, e);
      }), E(En, function(i, n) {
        e._messageCenter.on(n, function(a) {
          this.trigger(n, a);
        }, e);
      }), E(["selectchanged"], function(i) {
        e._messageCenter.on(i, function(n) {
          this.trigger(i, n);
        }, e);
      }), iS(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && Vv(this.getDom(), ku, "");
      var i = this, n = i._api, a = i._model;
      E(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), E(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete An[i.id];
    }, t.prototype.resize = function(e) {
      if (this[Mt]) {
        process.env.NODE_ENV !== "production" && Lt("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      this._zr.resize(e);
      var i = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!i) {
        var n = i.resetOption("media"), a = e && e.silent;
        this[Ht] && (a == null && (a = this[Ht].silent), n = !0, this[Ht] = null), this[Mt] = !0;
        try {
          n && ui(this), er.update.call(this, {
            type: "resize",
            animation: R({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[Mt] = !1, o;
        }
        this[Mt] = !1, Ki.call(this, a), Qi.call(this, a);
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      if (F(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !zl[e]) {
        process.env.NODE_ENV !== "production" && _e("Loading effects " + e + " not exists.");
        return;
      }
      var n = zl[e](this._api, i), a = this._zr;
      this._loadingFX = n, a.add(n);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = R({}, e);
      return i.type = En[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      if (F(i) || (i = {
        silent: !!i
      }), !!fo[e.type] && this._model) {
        if (this[Mt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        Ns.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && z.browser.weChat && this._throttledZrFlush(), Ki.call(this, n), Qi.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      ye.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        Qt(this.id);
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      process.env.NODE_ENV !== "production" && q(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      ui = function(h) {
        var v = h._scheduler;
        v.restorePipelines(h._model), v.prepareStageTasks(), Ls(h, !0), Ls(h, !1), v.plan();
      }, Ls = function(h, v) {
        for (var c = h._model, d = h._scheduler, y = v ? h._componentsViews : h._chartsViews, p = v ? h._componentsMap : h._chartsMap, g = h._zr, _ = h._api, m = 0; m < y.length; m++)
          y[m].__alive = !1;
        v ? c.eachComponent(function(T, b) {
          T !== "series" && w(b);
        }) : c.eachSeries(w);
        function w(T) {
          var b = T.__requireNewView;
          T.__requireNewView = !1;
          var x = "_ec_" + T.id + "_" + T.type, C = !b && p[x];
          if (!C) {
            var D = Le(T.type), A = v ? Be.getClass(D.main, D.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              fr.getClass(D.sub)
            );
            process.env.NODE_ENV !== "production" && q(A, D.sub + " does not exist."), C = new A(), C.init(c, _), p[x] = C, y.push(C), g.add(C.group);
          }
          T.__viewId = C.__id = x, C.__alive = !0, C.__model = T, C.group.__ecComponentInfo = {
            mainType: T.mainType,
            index: T.componentIndex
          }, !v && d.prepareView(C, T, c, _);
        }
        for (var m = 0; m < y.length; ) {
          var S = y[m];
          S.__alive ? m++ : (!v && S.renderTask.dispose(), g.remove(S.group), S.dispose(c, _), y.splice(m, 1), p[S.__id] === S && delete p[S.__id], S.__id = S.group.__ecComponentInfo = null);
        }
      }, _a = function(h, v, c, d, y) {
        var p = h._model;
        if (p.setUpdatePayload(c), !d) {
          E([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var g = {};
        g[d + "Id"] = c[d + "Id"], g[d + "Index"] = c[d + "Index"], g[d + "Name"] = c[d + "Name"];
        var _ = {
          mainType: d,
          query: g
        };
        y && (_.subType = y);
        var m = c.excludeSeriesId, w;
        m != null && (w = j(), E(Bt(m), function(T) {
          var b = Oe(T, null);
          b != null && w.set(b, !0);
        })), p && p.eachComponent(_, function(T) {
          var b = w && w.get(T.id) != null;
          if (!b)
            if (Qf(c))
              if (T instanceof vr)
                c.type === Ur && !c.notBlur && !T.get(["emphasis", "disabled"]) && Em(T, c, h._api);
              else {
                var x = vu(T.mainType, T.componentIndex, c.name, h._api), C = x.focusSelf, D = x.dispatchers;
                c.type === Ur && C && !c.notBlur && wl(T.mainType, T.componentIndex, h._api), D && E(D, function(A) {
                  c.type === Ur ? yl(A) : _l(A);
                });
              }
            else Tl(c) && T instanceof vr && (Pm(T, c, h._api), Zf(T), ie(h));
        }, h), p && p.eachComponent(_, function(T) {
          var b = w && w.get(T.id) != null;
          b || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][T.__viewId]);
        }, h);
        function S(T) {
          T && T.__alive && T[v] && T[v](T.__model, p, h._api, c);
        }
      }, er = {
        prepareAndUpdate: function(h) {
          ui(this), er.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, v) {
          var c = this._model, d = this._api, y = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (c) {
            c.setUpdatePayload(h), g.restoreData(c, h), g.performSeriesTasks(c), p.create(c, d), g.performDataProcessorTasks(c, h), Os(this, c), p.update(c, d), e(c), g.performVisualTasks(c, h), ks(this, c, d, h, v);
            var _ = c.get("backgroundColor") || "transparent", m = c.get("darkMode");
            y.setBackgroundColor(_), m != null && m !== "auto" && y.setDarkMode(m), ye.trigger("afterupdate", c, d);
          }
        },
        updateTransform: function(h) {
          var v = this, c = this._model, d = this._api;
          if (c) {
            c.setUpdatePayload(h);
            var y = [];
            c.eachComponent(function(g, _) {
              if (g !== "series") {
                var m = v.getViewOfComponentModel(_);
                if (m && m.__alive)
                  if (m.updateTransform) {
                    var w = m.updateTransform(_, c, d, h);
                    w && w.update && y.push(m);
                  } else
                    y.push(m);
              }
            });
            var p = j();
            c.eachSeries(function(g) {
              var _ = v._chartsMap[g.__viewId];
              if (_.updateTransform) {
                var m = _.updateTransform(g, c, d, h);
                m && m.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), e(c), this._scheduler.performVisualTasks(c, h, {
              setDirty: !0,
              dirtyMap: p
            }), ma(this, c, d, h, {}, p), ye.trigger("afterupdate", c, d);
          }
        },
        updateView: function(h) {
          var v = this._model;
          v && (v.setUpdatePayload(h), fr.markUpdateMethod(h, "updateView"), e(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0
          }), ks(this, v, this._api, h, {}), ye.trigger("afterupdate", v, this._api));
        },
        updateVisual: function(h) {
          var v = this, c = this._model;
          c && (c.setUpdatePayload(h), c.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), fr.markUpdateMethod(h, "updateVisual"), e(c), this._scheduler.performVisualTasks(c, h, {
            visualType: "visual",
            setDirty: !0
          }), c.eachComponent(function(d, y) {
            if (d !== "series") {
              var p = v.getViewOfComponentModel(y);
              p && p.__alive && p.updateVisual(y, c, v._api, h);
            }
          }), c.eachSeries(function(d) {
            var y = v._chartsMap[d.__viewId];
            y.updateVisual(d, c, v._api, h);
          }), ye.trigger("afterupdate", c, this._api));
        },
        updateLayout: function(h) {
          er.update.call(this, h);
        }
      }, Rs = function(h, v, c, d) {
        if (h._disposed) {
          Qt(h.id);
          return;
        }
        for (var y = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, _ = rs(y, c), m = 0; m < p.length; m++) {
          var w = p[m];
          if (w[v] && (g = w[v](y, _, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && _e("No coordinate system that supports " + v + " found by the given finder.");
      }, Os = function(h, v) {
        var c = h._chartsMap, d = h._scheduler;
        v.eachSeries(function(y) {
          d.updateStreamModes(y, c[y.__viewId]);
        });
      }, Ns = function(h, v) {
        var c = this, d = this.getModel(), y = h.type, p = h.escapeConnect, g = fo[y], _ = g.actionInfo, m = (_.update || "update").split(":"), w = m.pop(), S = m[0] != null && Le(m[0]);
        this[Mt] = !0;
        var T = [h], b = !1;
        h.batch && (b = !0, T = Z(h.batch, function(P) {
          return P = ft(R({}, P), h), P.batch = null, P;
        }));
        var x = [], C, D = Tl(h), A = Qf(h);
        if (A && od(this._api), E(T, function(P) {
          if (C = g.action(P, c._model, c._api), C = C || R({}, P), C.type = _.event || C.type, x.push(C), A) {
            var L = au(h), O = L.queryOptionMap, V = L.mainTypeSpecified, Y = V ? O.keys()[0] : "series";
            _a(c, w, P, Y), ie(c);
          } else D ? (_a(c, w, P, "series"), ie(c)) : S && _a(c, w, P, S.main, S.sub);
        }), w !== "none" && !A && !D && !S)
          try {
            this[Ht] ? (ui(this), er.update.call(this, h), this[Ht] = null) : er[w].call(this, h);
          } catch (P) {
            throw this[Mt] = !1, P;
          }
        if (b ? C = {
          type: _.event || y,
          escapeConnect: p,
          batch: x
        } : C = x[0], this[Mt] = !1, !v) {
          var M = this._messageCenter;
          if (M.trigger(C.type, C), D) {
            var I = {
              type: "selectchanged",
              escapeConnect: p,
              selected: Im(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            M.trigger(I.type, I);
          }
        }
      }, Ki = function(h) {
        for (var v = this._pendingActions; v.length; ) {
          var c = v.shift();
          Ns.call(this, c, h);
        }
      }, Qi = function(h) {
        !h && this.trigger("updated");
      }, fc = function(h, v) {
        h.on("rendered", function(c) {
          v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !v[Ht] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished");
        });
      }, hc = function(h, v) {
        h.on("mouseover", function(c) {
          var d = c.target, y = cn(d, Ei);
          y && (Am(y, c, v._api), ie(v));
        }).on("mouseout", function(c) {
          var d = c.target, y = cn(d, Ei);
          y && (Mm(y, c, v._api), ie(v));
        }).on("click", function(c) {
          var d = c.target, y = cn(d, function(_) {
            return nt(_).dataIndex != null;
          }, !0);
          if (y) {
            var p = y.selected ? "unselect" : "select", g = nt(y);
            v._api.dispatchAction({
              type: p,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function e(h) {
        h.clearColorPalette(), h.eachSeries(function(v) {
          v.clearColorPalette();
        });
      }
      function i(h) {
        var v = [], c = [], d = !1;
        if (h.eachComponent(function(_, m) {
          var w = m.get("zlevel") || 0, S = m.get("z") || 0, T = m.getZLevelKey();
          d = d || !!T, (_ === "series" ? c : v).push({
            zlevel: w,
            z: S,
            idx: m.componentIndex,
            type: _,
            key: T
          });
        }), d) {
          var y = v.concat(c), p, g;
          Da(y, function(_, m) {
            return _.zlevel === m.zlevel ? _.z - m.z : _.zlevel - m.zlevel;
          }), E(y, function(_) {
            var m = h.getComponent(_.type, _.idx), w = _.zlevel, S = _.key;
            p != null && (w = Math.max(p, w)), S ? (w === p && S !== g && w++, g = S) : g && (w === p && w++, g = ""), p = w, m.setZLevel(w);
          });
        }
      }
      ks = function(h, v, c, d, y) {
        i(v), cc(h, v, c, d, y), E(h._chartsViews, function(p) {
          p.__alive = !1;
        }), ma(h, v, c, d, y), E(h._chartsViews, function(p) {
          p.__alive || p.remove(v, c);
        });
      }, cc = function(h, v, c, d, y, p) {
        E(p || h._componentsViews, function(g) {
          var _ = g.__model;
          u(_, g), g.render(_, v, c, d), s(_, g), f(_, g);
        });
      }, ma = function(h, v, c, d, y, p) {
        var g = h._scheduler;
        y = R(y || {}, {
          updatedSeries: v.getSeries()
        }), ye.trigger("series:beforeupdate", v, c, y);
        var _ = !1;
        v.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          w.__alive = !0;
          var S = w.renderTask;
          g.updatePayload(S, d), u(m, w), p && p.get(m.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (_ = !0), w.group.silent = !!m.get("silent"), o(m, w), Zf(m);
        }), g.unfinished = _ || g.unfinished, ye.trigger("series:layoutlabels", v, c, y), ye.trigger("series:transition", v, c, y), v.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          s(m, w), f(m, w);
        }), a(h, v), ye.trigger("series:afterupdate", v, c, y);
      }, ie = function(h) {
        h[Ps] = !0, h.getZr().wakeUp();
      }, dc = function(h) {
        h[Ps] && (h.getZr().storage.traverse(function(v) {
          Cn(v) || n(v);
        }), h[Ps] = !1);
      };
      function n(h) {
        for (var v = [], c = h.currentStates, d = 0; d < c.length; d++) {
          var y = c[d];
          y === "emphasis" || y === "blur" || y === "select" || v.push(y);
        }
        h.selected && h.states.select && v.push("select"), h.hoverState === hu && h.states.emphasis ? v.push("emphasis") : h.hoverState === fu && h.states.blur && v.push("blur"), h.useStates(v);
      }
      function a(h, v) {
        var c = h._zr, d = c.storage, y = 0;
        d.traverse(function(p) {
          p.isGroup || y++;
        }), y > v.get("hoverLayerThreshold") && !z.node && !z.worker && v.eachSeries(function(p) {
          if (!p.preventUsingHoverLayer) {
            var g = h._chartsMap[p.__viewId];
            g.__alive && g.eachRendered(function(_) {
              _.states.emphasis && (_.states.emphasis.hoverLayer = !0);
            });
          }
        });
      }
      function o(h, v) {
        var c = h.get("blendMode") || null;
        v.eachRendered(function(d) {
          d.isGroup || (d.style.blend = c);
        });
      }
      function s(h, v) {
        if (!h.preventAutoZ) {
          var c = h.get("z") || 0, d = h.get("zlevel") || 0;
          v.eachRendered(function(y) {
            return l(y, c, d, -1 / 0), !0;
          });
        }
      }
      function l(h, v, c, d) {
        var y = h.getTextContent(), p = h.getTextGuideLine(), g = h.isGroup;
        if (g)
          for (var _ = h.childrenRef(), m = 0; m < _.length; m++)
            d = Math.max(l(_[m], v, c, d), d);
        else
          h.z = v, h.zlevel = c, d = Math.max(h.z2, d);
        if (y && (y.z = v, y.zlevel = c, isFinite(d) && (y.z2 = d + 2)), p) {
          var w = h.textGuideLineConfig;
          p.z = v, p.zlevel = c, isFinite(d) && (p.z2 = d + (w && w.showAbove ? 1 : -1));
        }
        return d;
      }
      function u(h, v) {
        v.eachRendered(function(c) {
          if (!Cn(c)) {
            var d = c.getTextContent(), y = c.getTextGuideLine();
            c.stateTransition && (c.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), y && y.stateTransition && (y.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
          }
        });
      }
      function f(h, v) {
        var c = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), y = c.get("duration"), p = y > 0 ? {
          duration: y,
          delay: c.get("delay"),
          easing: c.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        v.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (Cn(g))
              return;
            if (g instanceof st && Fm(g), g.__dirty) {
              var _ = g.prevStates;
              _ && g.useStates(_);
            }
            if (d) {
              g.stateTransition = p;
              var m = g.getTextContent(), w = g.getTextGuideLine();
              m && (m.stateTransition = p), w && (w.stateTransition = p);
            }
            g.__dirty && n(g);
          }
        });
      }
      vc = function(h) {
        return new /** @class */
        (function(v) {
          vt(c, v);
          function c() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return c.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, c.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var y = d.__ecComponentInfo;
              if (y != null)
                return h._model.getComponent(y.mainType, y.index);
              d = d.parent;
            }
          }, c.prototype.enterEmphasis = function(d, y) {
            yl(d, y), ie(h);
          }, c.prototype.leaveEmphasis = function(d, y) {
            _l(d, y), ie(h);
          }, c.prototype.enterBlur = function(d) {
            Dm(d), ie(h);
          }, c.prototype.leaveBlur = function(d) {
            rd(d), ie(h);
          }, c.prototype.enterSelect = function(d) {
            id(d), ie(h);
          }, c.prototype.leaveSelect = function(d) {
            nd(d), ie(h);
          }, c.prototype.getModel = function() {
            return h.getModel();
          }, c.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, c.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, c;
        }(Od))(h);
      }, Cp = function(h) {
        function v(c, d) {
          for (var y = 0; y < c.length; y++) {
            var p = c[y];
            p[Is] = d;
          }
        }
        E(En, function(c, d) {
          h._messageCenter.on(d, function(y) {
            if (pc[h.group] && h[Is] !== uc) {
              if (y && y.escapeConnect)
                return;
              var p = h.makeActionFromEvent(y), g = [];
              E(An, function(_) {
                _ !== h && _.group === h.group && g.push(_);
              }), v(g, uc), E(g, function(_) {
                _[Is] !== $S && _.dispatchAction(p);
              }), v(g, XS);
            }
          });
        });
      };
    }(), t;
  }(Fe)
), Nu = xp.prototype;
Nu.on = mp("on");
Nu.off = mp("off");
Nu.one = function(r, t, e) {
  var i = this;
  Ne("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var qS = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Qt(r) {
  process.env.NODE_ENV !== "production" && _e("Instance " + r + " has been disposed");
}
var fo = {}, En = {}, Fl = [], Vl = [], ho = [], Dp = {}, zl = {}, An = {}, pc = {}, ZS = +/* @__PURE__ */ new Date() - 0, ku = "_echarts_instance_";
function KS(r, t, e) {
  var i = !(e && e.ssr);
  if (i) {
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("Initialize failed: invalid dom.");
    var n = QS(r);
    if (n)
      return process.env.NODE_ENV !== "production" && _e("There is a chart instance already initialized on the dom."), n;
    process.env.NODE_ENV !== "production" && bi(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && _e("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new xp(r, t, e);
  return a.id = "ec_" + ZS++, An[a.id] = a, i && Vv(r, ku, a.id), Cp(a), ye.trigger("afterinit", a), a;
}
function QS(r) {
  return An[y_(r, ku)];
}
function Ep(r, t) {
  Dp[r] = t;
}
function Ap(r) {
  at(Vl, r) < 0 && Vl.push(r);
}
function Mp(r, t) {
  Fu(Fl, r, t, FS);
}
function jS(r) {
  Bu("afterinit", r);
}
function JS(r) {
  Bu("afterupdate", r);
}
function Bu(r, t) {
  ye.on(r, t);
}
function Ni(r, t, e) {
  J(t) && (e = t, t = "");
  var i = F(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || i).toLowerCase(), t = r.event, !En[t] && (q(lc.test(i) && lc.test(t)), fo[i] || (fo[i] = {
    action: e,
    actionInfo: r
  }), En[t] = i);
}
function tT(r, t) {
  Nd.register(r, t);
}
function eT(r, t) {
  Fu(ho, r, t, gp, "layout");
}
function qr(r, t) {
  Fu(ho, r, t, yp, "visual");
}
var gc = [];
function Fu(r, t, e, i, n) {
  if ((J(t) || F(t)) && (e = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    E(r, function(o) {
      q(o.__raw !== e);
    });
  }
  if (!(at(gc, e) >= 0)) {
    gc.push(e);
    var a = np.wrapStageHandler(e, n);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function Pp(r, t) {
  zl[r] = t;
}
function rT(r, t, e) {
  var i = RS("registerMap");
  i && i(r, t, e);
}
var iT = o1;
qr(Ou, B1);
qr(Lo, F1);
qr(Lo, V1);
qr(Ou, j1);
qr(Lo, J1);
qr(_p, IS);
Ap(Bd);
Mp(kS, Gw);
Pp("default", z1);
Ni({
  type: Ur,
  event: Ur,
  update: Ur
}, $t);
Ni({
  type: Ia,
  event: Ia,
  update: Ia
}, $t);
Ni({
  type: Sn,
  event: Sn,
  update: Sn
}, $t);
Ni({
  type: La,
  event: La,
  update: La
}, $t);
Ni({
  type: Tn,
  event: Tn,
  update: Tn
}, $t);
Ep("light", K1);
Ep("dark", lp);
function ji(r) {
  return r == null ? 0 : r.length || 1;
}
function yc(r) {
  return r;
}
var nT = (
  /** @class */
  function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || yc, this._newKeyGetter = n || yc, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, i = {}, n = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(e, i, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = n[o], l = i[s], u = ji(l);
        if (u > 1) {
          var f = l.shift();
          l.length === 1 && (i[s] = l[0]), this._update && this._update(f, o);
        } else u === 1 ? (i[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, i);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, i = {}, n = {}, a = [], o = [];
      this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(e, n, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var l = a[s], u = i[l], f = n[l], h = ji(u), v = ji(f);
        if (h > 1 && v === 1)
          this._updateManyToOne && this._updateManyToOne(f, u), n[l] = null;
        else if (h === 1 && v > 1)
          this._updateOneToMany && this._updateOneToMany(f, u), n[l] = null;
        else if (h === 1 && v === 1)
          this._update && this._update(f, u), n[l] = null;
        else if (h > 1 && v > 1)
          this._updateManyToMany && this._updateManyToMany(f, u), n[l] = null;
        else if (h > 1)
          for (var c = 0; c < h; c++)
            this._remove && this._remove(u[c]);
        else
          this._remove && this._remove(u);
      }
      this._performRestAdd(o, n);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i], a = e[n], o = ji(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[n] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, i, n) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[n](t[o], o);
        if (a || (i[o] = s), !!e) {
          var l = e[s], u = ji(l);
          u === 0 ? (e[s] = o, a && i.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
        }
      }
    }, r;
  }()
), aT = (
  /** @class */
  function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  }()
);
function oT(r, t) {
  var e = {}, i = e.encode = {}, n = j(), a = [], o = [], s = {};
  E(r.dimensions, function(v) {
    var c = r.getDimensionInfo(v), d = c.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && q(Dl.get(d) == null);
      var y = c.coordDimIndex;
      Bs(i, d)[y] = v, c.isExtraCoord || (n.set(d, 1), sT(c.type) && (a[0] = v), Bs(s, d)[y] = r.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
    }
    Dl.each(function(p, g) {
      var _ = Bs(i, g), m = c.otherDims[g];
      m != null && m !== !1 && (_[m] = c.name);
    });
  });
  var l = [], u = {};
  n.each(function(v, c) {
    var d = i[c];
    u[c] = d[0], l = l.concat(d);
  }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = Z(l, function(v) {
    return r.getDimensionInfo(v).storeDimIndex;
  }), e.encodeFirstDimNotExtra = u;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new aT(s, t), e;
}
function Bs(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function sT(r) {
  return !(r === "ordinal" || r === "time");
}
var Ba = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      this.otherDims = {}, t != null && R(this, t);
    }
    return r;
  }()
), lT = Tt(), uT = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, Ip = (
  /** @class */
  function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Rp(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return W(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = zd(this.source), i = !Op(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
        var l = void 0, u = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          l = e ? h.name : null, u = h.type, f = h.ordinalMeta, s++;
        else {
          var v = this.getSourceDimension(o);
          v && (l = e ? v.name : null, u = v.type);
        }
        a.push({
          property: l,
          type: u,
          ordinalMeta: f
        }), e && l != null && (!h || !h.isCalculationCoord) && (n += i ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), n += "$", n += uT[u] || "f", f && (n += f.uid), n += "$";
      }
      var c = this.source, d = [c.seriesLayoutBy, c.startIndex, n].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
        var n = void 0, a = this.dimensions[i];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (n = a.name), i++;
        else {
          var o = this.getSourceDimension(e);
          o && (n = o.name);
        }
        t.push(n);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  }()
);
function fT(r) {
  return r instanceof Ip;
}
function Lp(r) {
  for (var t = j(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = F(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function Rp(r) {
  var t = lT(r);
  return t.dimNameMap || (t.dimNameMap = Lp(r.dimensionsDefine));
}
function Op(r) {
  return r > 30;
}
var Ji = F, rr = Z, hT = typeof Int32Array > "u" ? Array : Int32Array, cT = "e\0\0", _c = -1, vT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], dT = ["_approximateExtent"], mc, wa, tn, fi, Fs, en, Vs, pT = (
  /** @class */
  function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var i, n = !1;
      fT(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < i.length; f++) {
        var h = i[f], v = k(h) ? new Ba({
          name: h
        }) : h instanceof Ba ? h : new Ba(h), c = v.name;
        v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
        var d = v.otherDims = v.otherDims || {};
        o.push(c), a[c] = v, u[c] != null && (l = !0), v.createInvertedIndices && (s[c] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && q(n || v.storeDimIndex >= 0), n && (v.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var y = this._dimIdxToName = j();
        E(o, function(p) {
          y.set(a[p].storeDimIndex, p);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var i = this._dimIdxToName.get(e);
      if (i != null)
        return i;
      var n = this._schema.getSourceDimension(e);
      if (n)
        return n.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var i = this._getDimInfo(t);
      return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (yt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && e == null)
        throw new Error("Unknown dimension " + t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(i) {
        return e.hasOwnProperty(i) ? e[i] : void 0;
      } : function(i) {
        return e[i];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var i = this._dimSummary;
      if (e == null)
        return i.encodeFirstDimNotExtra[t];
      var n = i.encode[t];
      return n ? n[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, i = e.encode[t];
      return (i || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, i) {
      var n = this, a;
      if (t instanceof Al && (a = t), !a) {
        var o = this.dimensions, s = Mu(t) || Xt(t) ? new Hd(t, o.length) : t;
        a = new Al();
        var l = rr(o, function(u) {
          return {
            type: n._dimInfos[u].type,
            property: u
          };
        });
        a.initData(s, l, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = oT(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e && e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var l = s - n;
          this._nameList[s] = e[l], o && Vs(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
        var n = this._dimInfos[e[i]];
        n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== $e && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var i = this._store, n = i.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, l = s === Ve;
        if (l && !n.pure)
          for (var u = [], f = t; f < e; f++) {
            var h = n.getItem(f, u);
            if (!this.hasItemOption && o_(h) && (this.hasItemOption = !0), h) {
              var v = h.name;
              a[f] == null && v != null && (a[f] = Oe(v, null));
              var c = h.id;
              o[f] == null && c != null && (o[f] = Oe(c, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Vs(this, f);
        mc(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Ji(t) ? R(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = tn(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return wa(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.get(n.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.getByRawIndex(n.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var i = this, n = this._store;
      return N(t) ? n.getValues(rr(t, function(a) {
        return i._getStoreDimIndex(a);
      }), e) : n.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length; i < n; i++)
        if (isNaN(this._store.get(e[i], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, i = this._store.count(); e < i; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var i = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !i)
        throw new Error("Do not supported yet");
      var n = i && i[e];
      return n == null || isNaN(n) ? _c : n;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
    }, r.prototype.each = function(t, e, i) {
      J(t) && (i = e, e = t, t = []);
      var n = i || this, a = rr(fi(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? ot(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      J(t) && (i = e, e = t, t = []);
      var n = i || this, a = rr(fi(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? ot(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = gt(t);
      return E(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      J(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = rr(fi(t), this._getStoreDimIndex, this), s = en(this);
      return s._store = this._store.map(o, a ? ot(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = this, o = i || n || this;
      process.env.NODE_ENV !== "production" && E(fi(t), function(l) {
        var u = a.getDimensionInfo(l);
        u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = rr(fi(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? ot(e, o) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = en(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var i = en(this);
      return i._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = en(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new ct(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new nT(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return wa(t, i);
      }, function(i) {
        return wa(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Ji(t) ? R(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), N(a) ? a = a.slice() : Ji(a) && (a = R({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, Ji(e) ? R(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Ji(t) ? R(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, i) {
      this._itemLayouts[t] = i ? R(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var i = this.hostModel && this.hostModel.seriesIndex;
      gm(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      E(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : rr(this.dimensions, this._getDimInfo, this), this.hostModel)), Fs(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      J(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(Kl(arguments)));
      });
    }, r.internalField = function() {
      mc = function(t) {
        var e = t._invertedIndicesMap;
        E(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new hT(o.categories.length);
            for (var l = 0; l < i.length; l++)
              i[l] = _c;
            for (var l = 0; l < s.count(); l++)
              i[s.get(a.storeDimIndex, l)] = l;
          }
        });
      }, tn = function(t, e, i) {
        return Oe(t._getCategory(e, i), null);
      }, wa = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = tn(t, t._idDimIdx, e)), i == null && (i = cT + e), i;
      }, fi = function(t) {
        return N(t) || (t = t != null ? [t] : []), t;
      }, en = function(t) {
        var e = new r(t._schema ? t._schema : rr(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Fs(e, t), e;
      }, Fs = function(t, e) {
        E(vT.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, E(dT, function(i) {
          t[i] = Q(e[i]);
        }), t._calculationInfo = R({}, e._calculationInfo);
      }, Vs = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], l = n[e];
        if (s == null && a != null && (i[e] = s = tn(t, a, e)), l == null && o != null && (n[e] = l = tn(t, o, e)), l == null && s != null) {
          var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
          l = s, f > 1 && (l += "__ec__" + f), n[e] = l;
        }
      };
    }(), r;
  }()
);
function gT(r, t) {
  Mu(r) || (r = Fd(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = j(), a = [], o = _T(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && Op(o), l = i === r.dimensionsDefine, u = l ? Rp(r) : Lp(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = j(f), v = new $d(o), c = 0; c < v.length; c++)
    v[c] = -1;
  function d(C) {
    var D = v[C];
    if (D < 0) {
      var A = i[C], M = F(A) ? A : {
        name: A
      }, I = new Ba(), P = M.name;
      P != null && u.get(P) != null && (I.name = I.displayName = P), M.type != null && (I.type = M.type), M.displayName != null && (I.displayName = M.displayName);
      var L = a.length;
      return v[C] = L, I.storeDimIndex = C, a.push(I), I;
    }
    return a[D];
  }
  if (!s)
    for (var c = 0; c < o; c++)
      d(c);
  h.each(function(C, D) {
    var A = Bt(C).slice();
    if (A.length === 1 && !k(A[0]) && A[0] < 0) {
      h.set(D, !1);
      return;
    }
    var M = h.set(D, []);
    E(A, function(I, P) {
      var L = k(I) ? u.get(I) : I;
      L != null && L < o && (M[P] = L, p(d(L), D, P));
    });
  });
  var y = 0;
  E(e, function(C) {
    var D, A, M, I;
    if (k(C))
      D = C, I = {};
    else {
      I = C, D = I.name;
      var P = I.ordinalMeta;
      I.ordinalMeta = null, I = R({}, I), I.ordinalMeta = P, A = I.dimsDef, M = I.otherDims, I.name = I.coordDim = I.coordDimIndex = I.dimsDef = I.otherDims = null;
    }
    var L = h.get(D);
    if (L !== !1) {
      if (L = Bt(L), !L.length)
        for (var O = 0; O < (A && A.length || 1); O++) {
          for (; y < o && d(y).coordDim != null; )
            y++;
          y < o && L.push(y++);
        }
      E(L, function(V, Y) {
        var B = d(V);
        if (l && I.type != null && (B.type = I.type), p(ft(B, I), D, Y), B.name == null && A) {
          var $ = A[Y];
          !F($) && ($ = {
            name: $
          }), B.name = B.displayName = $.name, B.defaultTooltip = $.defaultTooltip;
        }
        M && ft(B.otherDims, M);
      });
    }
  });
  function p(C, D, A) {
    Dl.get(D) != null ? C.otherDims[D] = A : (C.coordDim = D, C.coordDimIndex = A, n.set(D, !0));
  }
  var g = t.generateCoord, _ = t.generateCoordCount, m = _ != null;
  _ = g ? _ || 1 : 0;
  var w = g || "value";
  function S(C) {
    C.name == null && (C.name = C.coordDim);
  }
  if (s)
    E(a, function(C) {
      S(C);
    }), a.sort(function(C, D) {
      return C.storeDimIndex - D.storeDimIndex;
    });
  else
    for (var T = 0; T < o; T++) {
      var b = d(T), x = b.coordDim;
      x == null && (b.coordDim = mT(w, n, m), b.coordDimIndex = 0, (!g || _ <= 0) && (b.isExtraCoord = !0), _--), S(b), b.type == null && (Ld(r, T) === Dt.Must || b.isExtraCoord && (b.otherDims.itemName != null || b.otherDims.seriesName != null)) && (b.type = "ordinal");
    }
  return yT(a), new Ip({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function yT(r) {
  for (var t = j(), e = 0; e < r.length; e++) {
    var i = r[e], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function _T(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return E(t, function(a) {
    var o;
    F(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function mT(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
function Np(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function wT(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function ST(r) {
  return r.type === "category" && wT(r.getLabelModel()) === 0;
}
var wc = [], TT = {
  registerPreprocessor: Ap,
  registerProcessor: Mp,
  registerPostInit: jS,
  registerPostUpdate: JS,
  registerUpdateLifecycle: Bu,
  registerAction: Ni,
  registerCoordinateSystem: tT,
  registerLayout: eT,
  registerVisual: qr,
  registerTransform: iT,
  registerLoading: Pp,
  registerMap: rT,
  registerImpl: LS,
  PRIORITY: YS,
  ComponentModel: et,
  ComponentView: Be,
  SeriesModel: vr,
  ChartView: fr,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    et.registerClass(r);
  },
  registerComponentView: function(r) {
    Be.registerClass(r);
  },
  registerSeriesModel: function(r) {
    vr.registerClass(r);
  },
  registerChartView: function(r) {
    fr.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    et.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    qy(r, t);
  }
};
function Mi(r) {
  if (N(r)) {
    E(r, function(t) {
      Mi(t);
    });
    return;
  }
  at(wc, r) >= 0 || (wc.push(r), J(r) && (r = {
    install: r
  }), r.install(TT));
}
function kp(r, t, e, i, n, a, o, s) {
  var l = n - r, u = a - t, f = e - r, h = i - t, v = Math.sqrt(f * f + h * h);
  f /= v, h /= v;
  var c = l * f + u * h, d = c / v;
  d *= v;
  var y = o[0] = r + d * f, p = o[1] = t + d * h;
  return Math.sqrt((y - n) * (y - n) + (p - a) * (p - a));
}
var or = new G(), ht = new G(), Et = new G(), sr = new G(), Pe = new G(), co = [], Nt = new G();
function bT(r, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, or.fromArray(r[0]), ht.fromArray(r[1]), Et.fromArray(r[2]), G.sub(sr, or, ht), G.sub(Pe, Et, ht);
    var e = sr.len(), i = Pe.len();
    if (!(e < 1e-3 || i < 1e-3)) {
      sr.scale(1 / e), Pe.scale(1 / i);
      var n = sr.dot(Pe), a = Math.cos(t);
      if (a < n) {
        var o = kp(ht.x, ht.y, Et.x, Et.y, or.x, or.y, co);
        Nt.fromArray(co), Nt.scaleAndAdd(Pe, o / Math.tan(Math.PI - t));
        var s = Et.x !== ht.x ? (Nt.x - ht.x) / (Et.x - ht.x) : (Nt.y - ht.y) / (Et.y - ht.y);
        if (isNaN(s))
          return;
        s < 0 ? G.copy(Nt, ht) : s > 1 && G.copy(Nt, Et), Nt.toArray(r[1]);
      }
    }
  }
}
function CT(r, t, e) {
  if (e <= 180 && e > 0) {
    e = e / 180 * Math.PI, or.fromArray(r[0]), ht.fromArray(r[1]), Et.fromArray(r[2]), G.sub(sr, ht, or), G.sub(Pe, Et, ht);
    var i = sr.len(), n = Pe.len();
    if (!(i < 1e-3 || n < 1e-3)) {
      sr.scale(1 / i), Pe.scale(1 / n);
      var a = sr.dot(t), o = Math.cos(e);
      if (a < o) {
        var s = kp(ht.x, ht.y, Et.x, Et.y, or.x, or.y, co);
        Nt.fromArray(co);
        var l = Math.PI / 2, u = Math.acos(Pe.dot(t)), f = l + u - e;
        if (f >= l)
          G.copy(Nt, Et);
        else {
          Nt.scaleAndAdd(Pe, s / Math.tan(Math.PI / 2 - f));
          var h = Et.x !== ht.x ? (Nt.x - ht.x) / (Et.x - ht.x) : (Nt.y - ht.y) / (Et.y - ht.y);
          if (isNaN(h))
            return;
          h < 0 ? G.copy(Nt, ht) : h > 1 && G.copy(Nt, Et);
        }
        Nt.toArray(r[1]);
      }
    }
  }
}
function zs(r, t, e, i) {
  var n = e === "normal", a = n ? r : r.ensureState(e);
  a.ignore = t;
  var o = i.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = i.getModel("lineStyle").getLineStyle();
  n ? r.useStyle(s) : a.style = s;
}
function xT(r, t) {
  var e = t.smooth, i = t.points;
  if (i)
    if (r.moveTo(i[0][0], i[0][1]), e > 0 && i.length >= 3) {
      var n = Js(i[0], i[1]), a = Js(i[1], i[2]);
      if (!n || !a) {
        r.lineTo(i[1][0], i[1][1]), r.lineTo(i[2][0], i[2][1]);
        return;
      }
      var o = Math.min(n, a) * e, s = No([], i[1], i[0], o / n), l = No([], i[1], i[2], o / a), u = No([], s, l, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1]);
    } else
      for (var f = 1; f < i.length; f++)
        r.lineTo(i[f][0], i[f][1]);
}
function DT(r, t, e) {
  var i = r.getTextGuideLine(), n = r.getTextContent();
  if (!n) {
    i && r.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = n.ignore, l = 0; l < Qa.length; l++) {
    var u = Qa[l], f = t[u], h = u === "normal";
    if (f) {
      var v = f.get("show"), c = h ? s : W(n.states[u] && n.states[u].ignore, s);
      if (c || !W(v, o)) {
        var d = h ? i : i && i.states[u];
        d && (d.ignore = !0), i && zs(i, !0, u, f);
        continue;
      }
      i || (i = new Yn(), r.setTextGuideLine(i), !h && (s || !o) && zs(i, !0, "normal", t.normal), r.stateProxy && (i.stateProxy = r.stateProxy)), zs(i, !1, u, f);
    }
  }
  if (i) {
    ft(i.style, e), i.style.fill = null;
    var y = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
    p.showAbove = y || !1, i.buildPath = xT;
  }
}
function ET(r, t) {
  t = t || "labelLine";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < ke.length; i++) {
    var n = ke[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function AT(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, l = n.style.margin || 0, u = o.clone();
      u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
      var f = s ? new ja(o, a) : null;
      t.push({
        label: n,
        labelLine: i.labelLine,
        rect: u,
        localRect: o,
        obb: f,
        priority: i.priority,
        defaultAttr: i.defaultAttr,
        layoutOption: i.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function MT(r, t, e, i, n, a) {
  var o = r.length;
  if (o < 2)
    return;
  r.sort(function(T, b) {
    return T.rect[t] - b.rect[t];
  });
  for (var s = 0, l, u = !1, f = 0; f < o; f++) {
    var h = r[f], v = h.rect;
    l = v[t] - s, l < 0 && (v[t] -= l, h.label[t] -= l, u = !0), s = v[t] + v[e];
  }
  var c = r[0], d = r[o - 1], y, p;
  g(), y < 0 && w(-y, 0.8), p < 0 && w(p, 0.8), g(), _(y, p, 1), _(p, y, -1), g(), y < 0 && S(-y), p < 0 && S(p);
  function g() {
    y = c.rect[t] - i, p = n - d.rect[t] - d.rect[e];
  }
  function _(T, b, x) {
    if (T < 0) {
      var C = Math.min(b, -T);
      if (C > 0) {
        m(C * x, 0, o);
        var D = C + T;
        D < 0 && w(-D * x, 1);
      } else
        w(-T * x, 1);
    }
  }
  function m(T, b, x) {
    T !== 0 && (u = !0);
    for (var C = b; C < x; C++) {
      var D = r[C], A = D.rect;
      A[t] += T, D.label[t] += T;
    }
  }
  function w(T, b) {
    for (var x = [], C = 0, D = 1; D < o; D++) {
      var A = r[D - 1].rect, M = Math.max(r[D].rect[t] - A[t] - A[e], 0);
      x.push(M), C += M;
    }
    if (C) {
      var I = Math.min(Math.abs(T) / C, b);
      if (T > 0)
        for (var D = 0; D < o - 1; D++) {
          var P = x[D] * I;
          m(P, 0, D + 1);
        }
      else
        for (var D = o - 1; D > 0; D--) {
          var P = x[D - 1] * I;
          m(-P, D, o);
        }
    }
  }
  function S(T) {
    var b = T < 0 ? -1 : 1;
    T = Math.abs(T);
    for (var x = Math.ceil(T / (o - 1)), C = 0; C < o - 1; C++)
      if (b > 0 ? m(x, 0, C + 1) : m(-x, o - C - 1, o), T -= x, T <= 0)
        return;
  }
  return u;
}
function PT(r, t, e, i) {
  return MT(r, "y", "height", t, e);
}
function IT(r) {
  var t = [];
  r.sort(function(y, p) {
    return p.priority - y.priority;
  });
  var e = new it(0, 0, 0, 0);
  function i(y) {
    if (!y.ignore) {
      var p = y.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    y.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var a = r[n], o = a.axisAligned, s = a.localRect, l = a.transform, u = a.label, f = a.labelLine;
    e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
    for (var h = a.obb, v = !1, c = 0; c < t.length; c++) {
      var d = t[c];
      if (e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          v = !0;
          break;
        }
        if (d.obb || (d.obb = new ja(d.localRect, d.transform)), h || (h = new ja(s, l)), h.intersect(d.obb)) {
          v = !0;
          break;
        }
      }
    }
    v ? (i(u), f && i(f)) : (u.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function Sc(r, t, e) {
  var i = Pi.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
var Hs = function(r) {
  rt(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || $a, typeof e == "string" ? o = Sc(e, i, n) : F(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (uv(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = Sc("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, l = !1, u = new it(0, 0, 0, 0);
    function f(_) {
      if (!(!_.isFinite() || _.isZero()))
        if (o.length === 0) {
          var m = new it(0, 0, 0, 0);
          m.copy(_), o.push(m);
        } else {
          for (var w = !1, S = 1 / 0, T = 0, b = 0; b < o.length; ++b) {
            var x = o[b];
            if (x.intersect(_)) {
              var C = new it(0, 0, 0, 0);
              C.copy(x), C.union(_), o[b] = C, w = !0;
              break;
            } else if (l) {
              u.copy(_), u.union(x);
              var D = _.width * _.height, A = x.width * x.height, M = u.width * u.height, I = M - D - A;
              I < S && (S = I, T = b);
            }
          }
          if (l && (o[T].union(_), w = !0), !w) {
            var m = new it(0, 0, 0, 0);
            m.copy(_), o.push(m);
          }
          l || (l = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var v = e[h];
      if (v) {
        var c = v.shouldBePainted(n, a, !0, !0), d = v.__isRendered && (v.__dirty & Jt || !c) ? v.getPrevPaintRect() : null;
        d && f(d);
        var y = c && (v.__dirty & Jt || !v.__isRendered) ? v.getPaintRect() : null;
        y && f(y);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var v = i[h], c = v && v.shouldBePainted(n, a, !0, !0);
      if (v && (!c || !v.__zr) && v.__isRendered) {
        var d = v.getPrevPaintRect();
        d && f(d);
      }
    }
    var p;
    do {
      p = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var g = h + 1; g < o.length; )
          o[h].intersect(o[g]) ? (p = !0, o[h].union(o[g]), o.splice(g, 1)) : g++;
        h++;
      }
    } while (p);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, i) {
    var n = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = i + "px"), a.width = e * n, a.height = i * n, s && (s.width = e * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n));
  }, t.prototype.clear = function(e, i, n) {
    var a = this.dom, o = this.ctx, s = a.width, l = a.height;
    i = i || this.clearColor;
    var u = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, v = this;
    u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, l / h));
    var c = this.domBack;
    function d(y, p, g, _) {
      if (o.clearRect(y, p, g, _), i && i !== "transparent") {
        var m = void 0;
        if (po(i)) {
          var w = i.global || i.__width === g && i.__height === _;
          m = w && i.__canvasGradient || Nl(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: _
          }), i.__canvasGradient = m, i.__width = g, i.__height = _;
        } else Pg(i) && (i.scaleX = i.scaleX || h, i.scaleY = i.scaleY || h, m = kl(o, i, {
          dirty: function() {
            v.setUnpainted(), v.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = m || i, o.fillRect(y, p, g, _), o.restore();
      }
      u && (o.save(), o.globalAlpha = f, o.drawImage(c, y, p, g, _), o.restore());
    }
    !n || u ? d(0, 0, s, l) : n.length && E(n, function(y) {
      d(y.x * h, y.y * h, y.width * h, y.height * h);
    });
  }, t;
}(Fe), Tc = 1e5, Nr = 314159, Sa = 0.01, LT = 1e-3;
function RT(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function OT(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
var NT = function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = R({}, i || {}), this.dpr = i.devicePixelRatio || $a, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (uv(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var l = this._layers;
    if (a) {
      var f = t, h = f.width, v = f.height;
      i.width != null && (h = i.width), i.height != null && (v = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = v * this.dpr, this._width = h, this._height = v;
      var c = new Hs(f, this, this.dpr);
      c.__builtin__ = !0, c.initContext(), l[Nr] = c, c.zlevel = Nr, s.push(Nr), this._domRoot = t;
    } else {
      this._width = ya(t, 0, i), this._height = ya(t, 1, i);
      var u = this._domRoot = OT(this._width, this._height);
      t.appendChild(u);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e = this.storage.getDisplayList(!0), i = this._prevDisplayList, n = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e, i, t, this._redrawId);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var l = a === 0 ? this._backgroundColor : null;
        s.refresh(l);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
  }, r.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, r.prototype._paintHoverList = function(t) {
    var e = t.length, i = this._hoverlayer;
    if (i && i.clear(), !!e) {
      for (var n = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, a, o = 0; o < e; o++) {
        var s = t[o];
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(Tc)), a || (a = i.ctx, a.save()), Vr(a, s, n, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(Tc);
  }, r.prototype.paintOne = function(t, e) {
    cp(t, e);
  }, r.prototype._paintList = function(t, e, i, n) {
    if (this._redrawId === n) {
      i = i || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, e, i), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(u) {
          u.afterBrush && u.afterBrush();
        });
      else {
        var l = this;
        Ha(function() {
          l._paintList(t, e, i, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(Nr).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, e, i);
    });
  }, r.prototype._doPaintList = function(t, e, i) {
    for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var l = this._zlevelList[s], u = this._layers[l];
      u.__builtin__ && u !== this._hoverlayer && (u.__dirty || i) && a.push(u);
    }
    for (var f = !0, h = !1, v = function(y) {
      var p = a[y], g = p.ctx, _ = o && p.createRepaintRects(t, e, c._width, c._height), m = i ? p.__startIndex : p.__drawIndex, w = !i && p.incremental && Date.now, S = w && Date.now(), T = p.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, T, _);
      else if (m === p.__startIndex) {
        var b = t[m];
        (!b.incremental || !b.notClear || i) && p.clear(!1, T, _);
      }
      m === -1 && (console.error("For some unknown reason. drawIndex is -1"), m = p.__startIndex);
      var x, C = function(I) {
        var P = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: n._width,
          viewHeight: n._height
        };
        for (x = m; x < p.__endIndex; x++) {
          var L = t[x];
          if (L.__inHover && (h = !0), n._doPaintEl(L, p, o, I, P, x === p.__endIndex - 1), w) {
            var O = Date.now() - S;
            if (O > 15)
              break;
          }
        }
        P.prevElClipPaths && g.restore();
      };
      if (_)
        if (_.length === 0)
          x = p.__endIndex;
        else
          for (var D = c.dpr, A = 0; A < _.length; ++A) {
            var M = _[A];
            g.save(), g.beginPath(), g.rect(M.x * D, M.y * D, M.width * D, M.height * D), g.clip(), C(M), g.restore();
          }
      else
        g.save(), C(), g.restore();
      p.__drawIndex = x, p.__drawIndex < p.__endIndex && (f = !1);
    }, c = this, d = 0; d < a.length; d++)
      v(d);
    return z.wxa && E(this._layers, function(y) {
      y && y.ctx && y.ctx.draw && y.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, i, n, a, o) {
    var s = e.ctx;
    if (i) {
      var l = t.getPaintRect();
      (!n || l && l.intersect(n)) && (Vr(s, t, a, o), t.setPrevPaintRect(l));
    } else
      Vr(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = Nr);
    var i = this._layers[t];
    return i || (i = new Hs("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? ut(i, this._layerConfig[t], !0) : this._layerConfig[t - Sa] && ut(i, this._layerConfig[t - Sa], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, l = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && zr("ZLevel " + t + " has been used already");
      return;
    }
    if (!RT(e)) {
      process.env.NODE_ENV !== "production" && zr("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > n[0]) {
      for (l = 0; l < a - 1 && !(n[l] < t && n[l + 1] > t); l++)
        ;
      s = i[n[l]];
    }
    if (n.splice(l + 1, 0, t), i[t] = e, !e.virtual)
      if (s) {
        var u = s.dom;
        u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom);
      } else
        o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, r.prototype.eachLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n];
      t.call(e, this._layers[a], a);
    }
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ && t.call(e, o, a);
    }
  }, r.prototype.eachOtherLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ || t.call(e, o, a);
    }
  }, r.prototype.getLayers = function() {
    return this._layers;
  }, r.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(h, v) {
      h.__dirty = h.__used = !1;
    });
    function e(h) {
      a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var n = t[i];
        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var a = null, o = 0, s, l;
    for (l = 0; l < t.length; l++) {
      var n = t[l], u = n.zlevel, f = void 0;
      s !== u && (s = u, o = 0), n.incremental ? (f = this.getLayer(u + LT, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(u + (o > 0 ? Sa : 0), this._needsManuallyCompositing), f.__builtin__ || zr("ZLevel " + u + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== l && (f.__dirty = !0), f.__startIndex = l, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = l, e(l), a = f), n.__dirty & Jt && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = l));
    }
    e(l), this.eachBuiltinLayer(function(h, v) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, E(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? ut(i[t], e, !0) : i[t] = e;
      for (var n = 0; n < this._zlevelList.length; n++) {
        var a = this._zlevelList[n];
        if (a === t || a === t + Sa) {
          var o = this._layers[a];
          ut(o, i[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, i = this._zlevelList, n = e[t];
    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(at(i, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      if (t != null && (n.width = t), e != null && (n.height = e), t = ya(a, 0, n), e = ya(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
        i.style.width = t + "px", i.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(Nr).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[Nr].dom;
    var e = new Hs("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var i = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var n = e.dom.width, a = e.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? i.drawImage(h.dom, 0, 0, n, a) : h.renderToCanvas && (i.save(), h.renderToCanvas(i), i.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
        var f = s[l];
        Vr(i, f, o, l === u - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
function kT(r) {
  r.registerPainter("canvas", NT);
}
function Ta(r, t, e) {
  var i = r.get("borderRadius");
  if (i == null)
    return e ? {
      cornerRadius: 0
    } : null;
  N(i) || (i = [i, i, i, i]);
  var n = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: Z(i, function(a) {
      return Ci(a, n);
    })
  };
}
var bc = Math.PI * 2, ba = Math.PI / 180;
function Bp(r, t) {
  return Rn(r.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function Fp(r, t) {
  var e = Bp(r, t), i = r.get("center"), n = r.get("radius");
  N(n) || (n = [0, n]);
  var a = mt(e.width, t.getWidth()), o = mt(e.height, t.getHeight()), s = Math.min(a, o), l = mt(n[0], s / 2), u = mt(n[1], s / 2), f, h, v = r.coordinateSystem;
  if (v) {
    var c = v.dataToPoint(i);
    f = c[0] || 0, h = c[1] || 0;
  } else
    N(i) || (i = [i, i]), f = mt(i[0], a) + e.x, h = mt(i[1], o) + e.y;
  return {
    cx: f,
    cy: h,
    r0: l,
    r: u
  };
}
function BT(r, t, e) {
  t.eachSeriesByType(r, function(i) {
    var n = i.getData(), a = n.mapDimension("value"), o = Bp(i, e), s = Fp(i, e), l = s.cx, u = s.cy, f = s.r, h = s.r0, v = -i.get("startAngle") * ba, c = i.get("endAngle"), d = i.get("padAngle") * ba;
    c = c === "auto" ? v - bc : -c * ba;
    var y = i.get("minAngle") * ba, p = y + d, g = 0;
    n.each(a, function(V) {
      !isNaN(V) && g++;
    });
    var _ = n.getSum(a), m = Math.PI / (_ || g) * 2, w = i.get("clockwise"), S = i.get("roseType"), T = i.get("stillShowZeroSum"), b = n.getDataExtent(a);
    b[0] = 0;
    var x = w ? 1 : -1, C = [v, c], D = x * d / 2;
    $v(C, !w), v = C[0], c = C[1];
    var A = Vp(i);
    A.startAngle = v, A.endAngle = c, A.clockwise = w;
    var M = Math.abs(c - v), I = M, P = 0, L = v;
    if (n.setLayout({
      viewRect: o,
      r: f
    }), n.each(a, function(V, Y) {
      var B;
      if (isNaN(V)) {
        n.setItemLayout(Y, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: w,
          cx: l,
          cy: u,
          r0: h,
          r: S ? NaN : f
        });
        return;
      }
      S !== "area" ? B = _ === 0 && T ? m : V * m : B = M / g, B < p ? (B = p, I -= p) : P += V;
      var $ = L + x * B, K = 0, U = 0;
      d > B ? (K = L + x * B / 2, U = K) : (K = L + D, U = $ - D), n.setItemLayout(Y, {
        angle: B,
        startAngle: K,
        endAngle: U,
        clockwise: w,
        cx: l,
        cy: u,
        r0: h,
        r: S ? Ky(V, b, [h, f]) : f
      }), L = $;
    }), I < bc && g)
      if (I <= 1e-3) {
        var O = M / g;
        n.each(a, function(V, Y) {
          if (!isNaN(V)) {
            var B = n.getItemLayout(Y);
            B.angle = O;
            var $ = 0, K = 0;
            O < d ? ($ = v + x * (Y + 1 / 2) * O, K = $) : ($ = v + x * Y * O + D, K = v + x * (Y + 1) * O - D), B.startAngle = $, B.endAngle = K;
          }
        });
      } else
        m = I / P, L = v, n.each(a, function(V, Y) {
          if (!isNaN(V)) {
            var B = n.getItemLayout(Y), $ = B.angle === p ? p : V * m, K = 0, U = 0;
            $ < d ? (K = L + x * $ / 2, U = K) : (K = L + D, U = L + x * $ - D), B.startAngle = K, B.endAngle = U, L += x * $;
          }
        });
  });
}
var Vp = Tt();
function FT(r) {
  return {
    seriesType: r,
    reset: function(t, e) {
      var i = e.findComponents({
        mainType: "legend"
      });
      if (!(!i || !i.length)) {
        var n = t.getData();
        n.filterSelf(function(a) {
          for (var o = n.getName(a), s = 0; s < i.length; s++)
            if (!i[s].isSelected(o))
              return !1;
          return !0;
        });
      }
    }
  };
}
var VT = Math.PI / 180;
function Cc(r, t, e, i, n, a, o, s, l, u) {
  if (r.length < 2)
    return;
  function f(y) {
    for (var p = y.rB, g = p * p, _ = 0; _ < y.list.length; _++) {
      var m = y.list[_], w = Math.abs(m.label.y - e), S = i + m.len, T = S * S, b = Math.sqrt(Math.abs((1 - w * w / g) * T)), x = t + (b + m.len2) * n, C = x - m.label.x, D = m.targetTextWidth - C * n;
      zp(m, D, !0), m.label.x = x;
    }
  }
  function h(y) {
    for (var p = {
      list: [],
      maxY: 0
    }, g = {
      list: [],
      maxY: 0
    }, _ = 0; _ < y.length; _++)
      if (y[_].labelAlignTo === "none") {
        var m = y[_], w = m.label.y > e ? g : p, S = Math.abs(m.label.y - e);
        if (S >= w.maxY) {
          var T = m.label.x - t - m.len2 * n, b = i + m.len, x = Math.abs(T) < b ? Math.sqrt(S * S / (1 - T * T / b / b)) : b;
          w.rB = x, w.maxY = S;
        }
        w.list.push(m);
      }
    f(p), f(g);
  }
  for (var v = r.length, c = 0; c < v; c++)
    if (r[c].position === "outer" && r[c].labelAlignTo === "labelLine") {
      var d = r[c].label.x - u;
      r[c].linePoints[1][0] += d, r[c].label.x = u;
    }
  PT(r, l, l + o) && h(r);
}
function zT(r, t, e, i, n, a, o, s) {
  for (var l = [], u = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, v = 0; v < r.length; v++) {
    var c = r[v].label;
    Gs(r[v]) || (c.x < t ? (f = Math.min(f, c.x), l.push(r[v])) : (h = Math.max(h, c.x), u.push(r[v])));
  }
  for (var v = 0; v < r.length; v++) {
    var d = r[v];
    if (!Gs(d) && d.linePoints) {
      if (d.labelStyleWidth != null)
        continue;
      var c = d.label, y = d.linePoints, p = void 0;
      d.labelAlignTo === "edge" ? c.x < t ? p = y[2][0] - d.labelDistance - o - d.edgeDistance : p = o + n - d.edgeDistance - y[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? c.x < t ? p = f - o - d.bleedMargin : p = o + n - h - d.bleedMargin : c.x < t ? p = c.x - o - d.bleedMargin : p = o + n - c.x - d.bleedMargin, d.targetTextWidth = p, zp(d, p);
    }
  }
  Cc(u, t, e, i, 1, n, a, o, s, h), Cc(l, t, e, i, -1, n, a, o, s, f);
  for (var v = 0; v < r.length; v++) {
    var d = r[v];
    if (!Gs(d) && d.linePoints) {
      var c = d.label, y = d.linePoints, g = d.labelAlignTo === "edge", _ = c.style.padding, m = _ ? _[1] + _[3] : 0, w = c.style.backgroundColor ? 0 : m, S = d.rect.width + w, T = y[1][0] - y[2][0];
      g ? c.x < t ? y[2][0] = o + d.edgeDistance + S + d.labelDistance : y[2][0] = o + n - d.edgeDistance - S - d.labelDistance : (c.x < t ? y[2][0] = c.x + d.labelDistance : y[2][0] = c.x - d.labelDistance, y[1][0] = y[2][0] + T), y[1][1] = y[2][1] = c.y;
    }
  }
}
function zp(r, t, e) {
  if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
    var i = r.label, n = i.style, a = r.rect, o = n.backgroundColor, s = n.padding, l = s ? s[1] + s[3] : 0, u = n.overflow, f = a.width + (o ? 0 : l);
    if (t < f || e) {
      var h = a.height;
      if (u && u.match("break")) {
        i.setStyle("backgroundColor", null), i.setStyle("width", t - l);
        var v = i.getBoundingRect();
        i.setStyle("width", Math.ceil(v.width)), i.setStyle("backgroundColor", o);
      } else {
        var c = t - l, d = t < f ? c : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          e ? c > r.unconstrainedWidth ? null : c : null
        );
        i.setStyle("width", d);
      }
      var y = i.getBoundingRect();
      a.width = y.width;
      var p = (i.style.margin || 0) + 2.1;
      a.height = y.height + p, a.y -= (a.height - h) / 2;
    }
  }
}
function Gs(r) {
  return r.position === "center";
}
function HT(r) {
  var t = r.getData(), e = [], i, n, a = !1, o = (r.get("minShowLabelAngle") || 0) * VT, s = t.getLayout("viewRect"), l = t.getLayout("r"), u = s.width, f = s.x, h = s.y, v = s.height;
  function c(T) {
    T.ignore = !0;
  }
  function d(T) {
    if (!T.ignore)
      return !0;
    for (var b in T.states)
      if (T.states[b].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(T) {
    var b = t.getItemGraphicEl(T), x = b.shape, C = b.getTextContent(), D = b.getTextGuideLine(), A = t.getItemModel(T), M = A.getModel("label"), I = M.get("position") || A.get(["emphasis", "label", "position"]), P = M.get("distanceToLabelLine"), L = M.get("alignTo"), O = mt(M.get("edgeDistance"), u), V = M.get("bleedMargin"), Y = A.getModel("labelLine"), B = Y.get("length");
    B = mt(B, u);
    var $ = Y.get("length2");
    if ($ = mt($, u), Math.abs(x.endAngle - x.startAngle) < o) {
      E(C.states, c), C.ignore = !0, D && (E(D.states, c), D.ignore = !0);
      return;
    }
    if (d(C)) {
      var K = (x.startAngle + x.endAngle) / 2, U = Math.cos(K), _t = Math.sin(K), bt, Zt, Te, ee;
      i = x.cx, n = x.cy;
      var Kt = I === "inside" || I === "inner";
      if (I === "center")
        bt = x.cx, Zt = x.cy, ee = "center";
      else {
        var xt = (Kt ? (x.r + x.r0) / 2 * U : x.r * U) + i, dt = (Kt ? (x.r + x.r0) / 2 * _t : x.r * _t) + n;
        if (bt = xt + U * 3, Zt = dt + _t * 3, !Kt) {
          var H = xt + U * (B + l - x.r), X = dt + _t * (B + l - x.r), be = H + (U < 0 ? -1 : 1) * $, Ct = X;
          L === "edge" ? bt = U < 0 ? f + O : f + u - O : bt = be + (U < 0 ? -P : P), Zt = Ct, Te = [[xt, dt], [H, X], [be, Ct]];
        }
        ee = Kt ? "center" : L === "edge" ? U > 0 ? "right" : "left" : U > 0 ? "left" : "right";
      }
      var Ke = Math.PI, He = 0, ki = M.get("rotate");
      if (yt(ki))
        He = ki * (Ke / 180);
      else if (I === "center")
        He = 0;
      else if (ki === "radial" || ki === !0) {
        var ig = U < 0 ? -K + Ke : -K;
        He = ig;
      } else if (ki === "tangential" && I !== "outside" && I !== "outer") {
        var Zr = Math.atan2(U, _t);
        Zr < 0 && (Zr = Ke * 2 + Zr);
        var ng = _t > 0;
        ng && (Zr = Ke + Zr), He = Zr - Ke;
      }
      if (a = !!He, C.x = bt, C.y = Zt, C.rotation = He, C.setStyle({
        verticalAlign: "middle"
      }), Kt) {
        C.setStyle({
          align: ee
        });
        var Ro = C.states.select;
        Ro && (Ro.x += C.x, Ro.y += C.y);
      } else {
        var Bi = C.getBoundingRect().clone();
        Bi.applyTransform(C.getComputedTransform());
        var Hu = (C.style.margin || 0) + 2.1;
        Bi.y -= Hu / 2, Bi.height += Hu, e.push({
          label: C,
          labelLine: D,
          position: I,
          len: B,
          len2: $,
          minTurnAngle: Y.get("minTurnAngle"),
          maxSurfaceAngle: Y.get("maxSurfaceAngle"),
          surfaceNormal: new G(U, _t),
          linePoints: Te,
          textAlign: ee,
          labelDistance: P,
          labelAlignTo: L,
          edgeDistance: O,
          bleedMargin: V,
          rect: Bi,
          unconstrainedWidth: Bi.width,
          labelStyleWidth: C.style.width
        });
      }
      b.setTextConfig({
        inside: Kt
      });
    }
  }), !a && r.get("avoidLabelOverlap") && zT(e, i, n, l, u, v, f, h);
  for (var y = 0; y < e.length; y++) {
    var p = e[y], g = p.label, _ = p.labelLine, m = isNaN(g.x) || isNaN(g.y);
    if (g) {
      g.setStyle({
        align: p.textAlign
      }), m && (E(g.states, c), g.ignore = !0);
      var w = g.states.select;
      w && (w.x += g.x, w.y += g.y);
    }
    if (_) {
      var S = p.linePoints;
      m || !S ? (E(_.states, c), _.ignore = !0) : (bT(S, p.minTurnAngle), CT(S, p.surfaceNormal, p.maxSurfaceAngle), _.setShape({
        points: S
      }), g.__hostTarget.textGuideLineConfig = {
        anchor: new G(S[0][0], S[0][1])
      });
    }
  }
}
var GT = (
  /** @class */
  function(r) {
    vt(t, r);
    function t(e, i, n) {
      var a = r.call(this) || this;
      a.z2 = 2;
      var o = new Rt();
      return a.setTextContent(o), a.updateData(e, i, n, !0), a;
    }
    return t.prototype.updateData = function(e, i, n, a) {
      var o = this, s = e.hostModel, l = e.getItemModel(i), u = l.getModel("emphasis"), f = e.getItemLayout(i), h = R(Ta(l.getModel("itemStyle"), f, !0), f);
      if (isNaN(h.startAngle)) {
        o.setShape(h);
        return;
      }
      if (a) {
        o.setShape(h);
        var v = s.getShallow("animationType");
        s.ecModel.ssr ? (Ra(o, {
          scaleX: 0,
          scaleY: 0
        }, s, {
          dataIndex: i,
          isFrom: !0
        }), o.originX = h.cx, o.originY = h.cy) : v === "scale" ? (o.shape.r = f.r0, Ra(o, {
          shape: {
            r: f.r
          }
        }, s, i)) : n != null ? (o.setShape({
          startAngle: n,
          endAngle: n
        }), Ra(o, {
          shape: {
            startAngle: f.startAngle,
            endAngle: f.endAngle
          }
        }, s, i)) : (o.shape.endAngle = f.startAngle, Ai(o, {
          shape: {
            endAngle: f.endAngle
          }
        }, s, i));
      } else
        g0(o), Ai(o, {
          shape: h
        }, s, i);
      o.useStyle(e.getItemVisual(i, "style")), km(o, l);
      var c = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), y = Math.cos(c) * d, p = Math.sin(c) * d, g = l.getShallow("cursor");
      g && o.attr("cursor", g), this._updateLabel(s, e, i), o.ensureState("emphasis").shape = R({
        r: f.r + (u.get("scale") && u.get("scaleSize") || 0)
      }, Ta(u.getModel("itemStyle"), f)), R(o.ensureState("select"), {
        x: y,
        y: p,
        shape: Ta(l.getModel(["select", "itemStyle"]), f)
      }), R(o.ensureState("blur"), {
        shape: Ta(l.getModel(["blur", "itemStyle"]), f)
      });
      var _ = o.getTextGuideLine(), m = o.getTextContent();
      _ && R(_.ensureState("select"), {
        x: y,
        y: p
      }), R(m.ensureState("select"), {
        x: y,
        y: p
      }), Rm(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
    }, t.prototype._updateLabel = function(e, i, n) {
      var a = this, o = i.getItemModel(n), s = o.getModel("labelLine"), l = i.getItemVisual(n, "style"), u = l && l.fill, f = l && l.opacity;
      Sd(a, O0(o), {
        labelFetcher: i.hostModel,
        labelDataIndex: n,
        inheritColor: u,
        defaultOpacity: f,
        defaultText: e.getFormattedLabel(n, "normal") || i.getName(n)
      });
      var h = a.getTextContent();
      a.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      }), h.attr({
        z2: 10
      });
      var v = e.get(["label", "position"]);
      if (v !== "outside" && v !== "outer")
        a.removeTextGuideLine();
      else {
        var c = this.getTextGuideLine();
        c || (c = new Yn(), this.setTextGuideLine(c)), DT(this, ET(o), {
          stroke: u,
          opacity: pn(s.get(["lineStyle", "opacity"]), f, 1)
        });
      }
    }, t;
  }(Wn)
), UT = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.ignoreLabelLineUpdate = !0, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      var o = e.getData(), s = this._data, l = this.group, u;
      if (!s && o.count() > 0) {
        for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
          f = o.getItemLayout(h);
        f && (u = f.startAngle);
      }
      if (this._emptyCircleSector && l.remove(this._emptyCircleSector), o.count() === 0 && e.get("showEmptyCircle")) {
        var v = Vp(e), c = new Wn({
          shape: R(Fp(e, n), v)
        });
        c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, l.add(c);
      }
      o.diff(s).add(function(d) {
        var y = new GT(o, d, u);
        o.setItemGraphicEl(d, y), l.add(y);
      }).update(function(d, y) {
        var p = s.getItemGraphicEl(y);
        p.updateData(o, d, u), p.off("click"), l.add(p), o.setItemGraphicEl(d, p);
      }).remove(function(d) {
        var y = s.getItemGraphicEl(d);
        pd(y, e, d);
      }).execute(), HT(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, t.prototype.dispose = function() {
    }, t.prototype.containPoint = function(e, i) {
      var n = i.getData(), a = n.getItemLayout(0);
      if (a) {
        var o = e[0] - a.cx, s = e[1] - a.cy, l = Math.sqrt(o * o + s * s);
        return l <= a.r && l >= a.r0;
      }
    }, t.type = "pie", t;
  }(fr)
);
function WT(r, t, e) {
  t = N(t) && {
    coordDimensions: t
  } || R({
    encodeDefine: r.getEncode()
  }, t);
  var i = r.getSource(), n = gT(i, t).dimensions, a = new pT(n, r);
  return a.initData(i, e), a;
}
var YT = (
  /** @class */
  function() {
    function r(t, e) {
      this._getDataWithEncodedVisual = t, this._getRawData = e;
    }
    return r.prototype.getAllNames = function() {
      var t = this._getRawData();
      return t.mapArray(t.getName);
    }, r.prototype.containName = function(t) {
      var e = this._getRawData();
      return e.indexOfName(t) >= 0;
    }, r.prototype.indexOfName = function(t) {
      var e = this._getDataWithEncodedVisual();
      return e.indexOfName(t);
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._getDataWithEncodedVisual();
      return i.getItemVisual(t, e);
    }, r;
  }()
), $T = Tt(), XT = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e) {
      r.prototype.init.apply(this, arguments), this.legendVisualProvider = new YT(ot(this.getData, this), ot(this.getRawData, this)), this._defaultLabelLine(e);
    }, t.prototype.mergeOption = function() {
      r.prototype.mergeOption.apply(this, arguments);
    }, t.prototype.getInitialData = function() {
      return WT(this, {
        coordDimensions: ["value"],
        encodeDefaulter: St(gw, this)
      });
    }, t.prototype.getDataParams = function(e) {
      var i = this.getData(), n = $T(i), a = n.seats;
      if (!a) {
        var o = [];
        i.each(i.mapDimension("value"), function(l) {
          o.push(l);
        }), a = n.seats = Jy(o, i.hostModel.get("percentPrecision"));
      }
      var s = r.prototype.getDataParams.call(this, e);
      return s.percent = a[e] || 0, s.$vars.push("percent"), s;
    }, t.prototype._defaultLabelLine = function(e) {
      vl(e, "labelLine", ["show"]);
      var i = e.labelLine, n = e.emphasis.labelLine;
      i.show = i.show && e.label.show, n.show = n.show && e.emphasis.label.show;
    }, t.type = "series.pie", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "75%"],
      // 默认顺时针
      clockwise: !0,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: !0,
      // cursor: null,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: !0,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: !0,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 15,
        smooth: !1,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: !0,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: !0
      },
      emphasis: {
        scale: !0,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: !0,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    }, t;
  }(vr)
);
function qT(r) {
  return {
    seriesType: r,
    reset: function(t, e) {
      var i = t.getData();
      i.filterSelf(function(n) {
        var a = i.mapDimension("value"), o = i.get(a, n);
        return !(yt(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function ZT(r) {
  r.registerChartView(UT), r.registerSeriesModel(XT), rS("pie", r.registerAction), r.registerLayout(St(BT, "pie")), r.registerProcessor(FT("pie")), r.registerProcessor(qT("pie"));
}
function xc(r, t, e) {
  e = e || {};
  var i = r.coordinateSystem, n = t.axis, a = {}, o = n.getAxesOnZeroOf()[0], s = n.position, l = o ? "onZero" : s, u = n.dim, f = i.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], v = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = t.get("offset") || 0, d = u === "x" ? [h[2] - c, h[3] + c] : [h[0] - c, h[1] + c];
  if (o) {
    var y = o.toGlobalCoord(o.dataToCoord(0));
    d[v.onZero] = Math.max(Math.min(y, d[1]), d[0]);
  }
  a.position = [u === "y" ? d[v[l]] : h[0], u === "x" ? d[v[l]] : h[3]], a.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var p = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[v[s]] - d[v.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Mn(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var g = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = l === "top" ? -g : g, a.z2 = 1, a;
}
var lr = Math.PI, Wr = (
  /** @class */
  function() {
    function r(t, e) {
      this.group = new me(), this.opt = e, this.axisModel = t, ft(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function() {
          return !0;
        }
      });
      var i = new me({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation
      });
      i.updateTransform(), this._transformGroup = i;
    }
    return r.prototype.hasBuilder = function(t) {
      return !!Dc[t];
    }, r.prototype.add = function(t) {
      Dc[t](this.opt, this.axisModel, this.group, this._transformGroup);
    }, r.prototype.getGroup = function() {
      return this.group;
    }, r.innerTextLayout = function(t, e, i) {
      var n = Rv(e - t), a, o;
      return Xa(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : Xa(n - lr) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < lr ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
        rotation: n,
        textAlign: a,
        textVerticalAlign: o
      };
    }, r.makeAxisEventDataBase = function(t) {
      var e = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return e[t.mainType + "Index"] = t.componentIndex, e;
    }, r.isLabelSilent = function(t) {
      var e = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, r;
  }()
), Dc = {
  axisLine: function(r, t, e, i) {
    var n = t.get(["axisLine", "show"]);
    if (n === "auto" && r.handleAutoShown && (n = r.handleAutoShown("axisLine")), !!n) {
      var a = t.axis.getExtent(), o = i.transform, s = [a[0], 0], l = [a[1], 0], u = s[0] > l[0];
      o && (Re(s, s, o), Re(l, l, o));
      var f = R({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new Ri({
        shape: {
          x1: s[0],
          y1: s[1],
          x2: l[0],
          y2: l[1]
        },
        style: f,
        strokeContainThreshold: r.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      wu(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
      var v = t.get(["axisLine", "symbol"]);
      if (v != null) {
        var c = t.get(["axisLine", "symbolSize"]);
        k(v) && (v = [v, v]), (k(c) || yt(c)) && (c = [c, c]);
        var d = pS(t.get(["axisLine", "symbolOffset"]) || 0, c), y = c[0], p = c[1];
        E([{
          rotate: r.rotation + Math.PI / 2,
          offset: d[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: d[1],
          r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
        }], function(g, _) {
          if (v[_] !== "none" && v[_] != null) {
            var m = Ru(v[_], -y / 2, -p / 2, y, p, f.stroke, !0), w = g.r + g.offset, S = u ? l : s;
            m.attr({
              rotation: g.rotate,
              x: S[0] + w * Math.cos(r.rotation),
              y: S[1] - w * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), e.add(m);
          }
        });
      }
    }
  },
  axisTickLabel: function(r, t, e, i) {
    var n = jT(e, i, t, r), a = tb(e, i, t, r);
    if (QT(t, a, n), JT(e, i, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = AT(Z(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      IT(o);
    }
  },
  axisName: function(r, t, e, i) {
    var n = Mn(r.axisName, t.get("name"));
    if (n) {
      var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), l = t.get("nameGap") || 0, u = t.axis.getExtent(), f = u[0] > u[1] ? -1 : 1, h = [
        a === "start" ? u[0] - f * l : a === "end" ? u[1] + f * l : (u[0] + u[1]) / 2,
        // Reuse labelOffset.
        Ac(a) ? r.labelOffset + o * l : 0
      ], v, c = t.get("nameRotate");
      c != null && (c = c * lr / 180);
      var d;
      Ac(a) ? v = Wr.innerTextLayout(
        r.rotation,
        c ?? r.rotation,
        // Adapt to axis.
        o
      ) : (v = KT(r.rotation, a, c || 0, u), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(v.rotation)), !isFinite(d) && (d = null)));
      var y = s.getFont(), p = t.get("nameTruncate", !0) || {}, g = p.ellipsis, _ = Mn(r.nameTruncateMaxWidth, p.maxWidth, d), m = new Rt({
        x: h[0],
        y: h[1],
        rotation: v.rotation,
        silent: Wr.isLabelSilent(t),
        style: cr(s, {
          text: n,
          font: y,
          overflow: "truncate",
          width: _,
          ellipsis: g,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || v.textAlign,
          verticalAlign: s.get("verticalAlign") || v.textVerticalAlign
        }),
        z2: 1
      });
      if (Do({
        el: m,
        componentModel: t,
        itemName: n
      }), m.__fullText = n, m.anid = "name", t.get("triggerEvent")) {
        var w = Wr.makeAxisEventDataBase(t);
        w.targetType = "axisName", w.name = n, nt(m).eventData = w;
      }
      i.add(m), m.updateTransform(), e.add(m), m.decomposeTransform();
    }
  }
};
function KT(r, t, e, i) {
  var n = Rv(e - r), a, o, s = i[0] > i[1], l = t === "start" && !s || t !== "start" && s;
  return Xa(n - lr / 2) ? (o = l ? "bottom" : "top", a = "center") : Xa(n - lr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", n < lr * 1.5 && n > lr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
    rotation: n,
    textAlign: a,
    textVerticalAlign: o
  };
}
function QT(r, t, e) {
  if (!ST(r.axis)) {
    var i = r.get(["axisLabel", "showMinLabel"]), n = r.get(["axisLabel", "showMaxLabel"]);
    t = t || [], e = e || [];
    var a = t[0], o = t[1], s = t[t.length - 1], l = t[t.length - 2], u = e[0], f = e[1], h = e[e.length - 1], v = e[e.length - 2];
    i === !1 ? (ne(a), ne(u)) : Ec(a, o) && (i ? (ne(o), ne(f)) : (ne(a), ne(u))), n === !1 ? (ne(s), ne(h)) : Ec(l, s) && (n ? (ne(l), ne(v)) : (ne(s), ne(h)));
  }
}
function ne(r) {
  r && (r.ignore = !0);
}
function Ec(r, t) {
  var e = r && r.getBoundingRect().clone(), i = t && t.getBoundingRect().clone();
  if (!(!e || !i)) {
    var n = jl([]);
    return Jl(n, n, -r.rotation), e.applyTransform(wi([], n, r.getLocalTransform())), i.applyTransform(wi([], n, t.getLocalTransform())), e.intersect(i);
  }
}
function Ac(r) {
  return r === "middle" || r === "center";
}
function Hp(r, t, e, i, n) {
  for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
    var u = r[l].coord;
    o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (Re(o, o, t), Re(s, s, t));
    var f = new Ri({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    wu(f.shape, f.style.lineWidth), f.anid = n + "_" + r[l].tickValue, a.push(f);
  }
  return a;
}
function jT(r, t, e, i) {
  var n = e.axis, a = e.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")), !(!o || n.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), l = i.tickDirection * a.get("length"), u = n.getTicksCoords(), f = Hp(u, t.transform, l, ft(s.getLineStyle(), {
      stroke: e.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      r.add(f[h]);
    return f;
  }
}
function JT(r, t, e, i) {
  var n = e.axis, a = e.getModel("minorTick");
  if (!(!a.get("show") || n.scale.isBlank())) {
    var o = n.getMinorTicksCoords();
    if (o.length)
      for (var s = a.getModel("lineStyle"), l = i * a.get("length"), u = ft(s.getLineStyle(), ft(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = Hp(o[f], t.transform, l, u, "minorticks_" + f), v = 0; v < h.length; v++)
          r.add(h[v]);
  }
}
function tb(r, t, e, i) {
  var n = e.axis, a = Mn(i.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || n.scale.isBlank())) {
    var o = e.getModel("axisLabel"), s = o.get("margin"), l = n.getViewLabels(), u = (Mn(i.labelRotate, o.get("rotate")) || 0) * lr / 180, f = Wr.innerTextLayout(i.rotation, u, i.labelDirection), h = e.getCategories && e.getCategories(!0), v = [], c = Wr.isLabelSilent(e), d = e.get("triggerEvent");
    return E(l, function(y, p) {
      var g = n.scale.type === "ordinal" ? n.scale.getRawOrdinalNumber(y.tickValue) : y.tickValue, _ = y.formattedLabel, m = y.rawLabel, w = o;
      if (h && h[g]) {
        var S = h[g];
        F(S) && S.textStyle && (w = new ct(S.textStyle, o, e.ecModel));
      }
      var T = w.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), b = n.dataToCoord(g), x = w.getShallow("align", !0) || f.textAlign, C = W(w.getShallow("alignMinLabel", !0), x), D = W(w.getShallow("alignMaxLabel", !0), x), A = w.getShallow("verticalAlign", !0) || w.getShallow("baseline", !0) || f.textVerticalAlign, M = W(w.getShallow("verticalAlignMinLabel", !0), A), I = W(w.getShallow("verticalAlignMaxLabel", !0), A), P = new Rt({
        x: b,
        y: i.labelOffset + i.labelDirection * s,
        rotation: f.rotation,
        silent: c,
        z2: 10 + (y.level || 0),
        style: cr(w, {
          text: _,
          align: p === 0 ? C : p === l.length - 1 ? D : x,
          verticalAlign: p === 0 ? M : p === l.length - 1 ? I : A,
          fill: J(T) ? T(
            // (1) In category axis with data zoom, tick is not the original
            // index of axis.data. So tick should not be exposed to user
            // in category axis.
            // (2) Compatible with previous version, which always use formatted label as
            // input. But in interval scale the formatted label is like '223,445', which
            // maked user replace ','. So we modify it to return original val but remain
            // it as 'string' to avoid error in replacing.
            n.type === "category" ? m : n.type === "value" ? g + "" : g,
            p
          ) : T
        })
      });
      if (P.anid = "label_" + g, Do({
        el: P,
        componentModel: e,
        itemName: _,
        formatterParamsExtra: {
          isTruncated: function() {
            return P.isTruncated;
          },
          value: m,
          tickIndex: p
        }
      }), d) {
        var L = Wr.makeAxisEventDataBase(e);
        L.targetType = "axisLabel", L.value = m, L.tickIndex = p, n.type === "category" && (L.dataIndex = g), nt(P).eventData = L;
      }
      t.add(P), P.updateTransform(), v.push(P), r.add(P), P.decomposeTransform();
    }), v;
  }
}
function eb(r, t) {
  var e = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return rb(e, r, t), e.seriesInvolved && nb(e, r), e;
}
function rb(r, t, e) {
  var i = t.getComponent("tooltip"), n = t.getComponent("axisPointer"), a = n.get("link", !0) || [], o = [];
  E(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var l = Vn(s.model), u = r.coordSysAxesInfo[l] = {};
    r.coordSysMap[l] = s;
    var f = s.model, h = f.getModel("tooltip", i);
    if (E(s.getAxes(), St(y, !1, null)), s.getTooltipAxes && i && h.get("show")) {
      var v = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (v || c) && E(d.baseAxes, St(y, c ? "cross" : !0, v)), c && E(d.otherAxes, St(y, "cross", !1));
    }
    function y(p, g, _) {
      var m = _.model.getModel("axisPointer", n), w = m.get("show");
      if (!(!w || w === "auto" && !p && !Hl(m))) {
        g == null && (g = m.get("triggerTooltip")), m = p ? ib(_, h, n, t, p, g) : m;
        var S = m.get("snap"), T = m.get("triggerEmphasis"), b = Vn(_.model), x = g || S || _.type === "category", C = r.axesInfo[b] = {
          key: b,
          axis: _,
          coordSys: s,
          axisPointerModel: m,
          triggerTooltip: g,
          triggerEmphasis: T,
          involveSeries: x,
          snap: S,
          useHandle: Hl(m),
          seriesModels: [],
          linkGroup: null
        };
        u[b] = C, r.seriesInvolved = r.seriesInvolved || x;
        var D = ab(a, _);
        if (D != null) {
          var A = o[D] || (o[D] = {
            axesInfo: {}
          });
          A.axesInfo[b] = C, A.mapper = a[D].mapper, C.linkGroup = A;
        }
      }
    }
  });
}
function ib(r, t, e, i, n, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
  E(s, function(v) {
    l[v] = Q(o.get(v));
  }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
  var u = l.label || (l.label = {});
  if (u.show == null && (u.show = !1), n === "cross") {
    var f = o.get(["label", "show"]);
    if (u.show = f ?? !0, !a) {
      var h = l.lineStyle = o.get("crossStyle");
      h && ft(u, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new ct(l, e, i));
}
function nb(r, t) {
  t.eachSeries(function(e) {
    var i = e.coordinateSystem, n = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !i || n === "none" || n === !1 || n === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || E(r.coordSysAxesInfo[Vn(i.model)], function(o) {
      var s = o.axis;
      i.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function ab(r, t) {
  for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
    var a = r[n] || {};
    if (Us(a[i + "AxisId"], e.id) || Us(a[i + "AxisIndex"], e.componentIndex) || Us(a[i + "AxisName"], e.name))
      return n;
  }
}
function Us(r, t) {
  return r === "all" || N(r) && at(r, t) >= 0 || r === t;
}
function ob(r) {
  var t = Vu(r);
  if (t) {
    var e = t.axisPointerModel, i = t.axis.scale, n = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = i.parse(o));
    var s = Hl(e);
    a == null && (n.status = s ? "show" : "hide");
    var l = i.getExtent().slice();
    l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
    (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Vu(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Vn(r)];
}
function sb(r) {
  var t = Vu(r);
  return t && t.axisPointerModel;
}
function Hl(r) {
  return !!r.get(["handle", "show"]);
}
function Vn(r) {
  return r.type + "||" + r.id;
}
var Ws = {}, lb = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.axisPointerClass && ob(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, n, !0);
    }, t.prototype.updateAxisPointer = function(e, i, n, a) {
      this._doUpdateAxisPointerClass(e, n, !1);
    }, t.prototype.remove = function(e, i) {
      var n = this._axisPointer;
      n && n.remove(i);
    }, t.prototype.dispose = function(e, i) {
      this._disposeAxisPointer(i), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, i, n) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = sb(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, i, n) : this._disposeAxisPointer(i);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, i) {
      if (process.env.NODE_ENV !== "production" && Ws[e])
        throw new Error("axisPointer " + e + " exists");
      Ws[e] = i;
    }, t.getAxisPointerClass = function(e) {
      return e && Ws[e];
    }, t.type = "axis", t;
  }(Be)
), kr = Tt(), Mc = Q, Ys = ot, ub = (
  /** @class */
  function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, i, n) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = i, !(!n && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, l = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), l && l.hide();
          return;
        }
        s && s.show(), l && l.show();
        var u = {};
        this.makeElOption(u, a, t, e, i);
        var f = u.graphicKey;
        f !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new me(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), i.getZr().add(s);
        else {
          var v = St(Pc, e, h);
          this.updatePointerEl(s, u, v), this.updateLabelEl(s, u, v, e);
        }
        Lc(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var i = e.get("animation"), n = t.axis, a = n.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (i === "auto" || i == null) {
        var s = this.animationThreshold;
        if (a && n.getBandWidth() > s)
          return !0;
        if (o) {
          var l = Vu(t).seriesDataCount, u = n.getExtent();
          return Math.abs(u[0] - u[1]) / l > s;
        }
        return !1;
      }
      return i === !0;
    }, r.prototype.makeElOption = function(t, e, i, n, a) {
    }, r.prototype.createPointerEl = function(t, e, i, n) {
      var a = e.pointer;
      if (a) {
        var o = kr(t).pointerEl = new L0[a.type](Mc(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, i, n) {
      if (e.label) {
        var a = kr(t).labelEl = new Rt(Mc(e.label));
        t.add(a), Ic(a, n);
      }
    }, r.prototype.updatePointerEl = function(t, e, i) {
      var n = kr(t).pointerEl;
      n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, i, n) {
      var a = kr(t).labelEl;
      a && (a.setStyle(e.label.style), i(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), Ic(a, n));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          n && i.remove(n), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, n = this._handle = Tu(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(u) {
            hv(u.event);
          },
          onmousedown: Ys(this._onHandleDragMove, this, 0, 0),
          drift: Ys(this._onHandleDragMove, this),
          ondragend: Ys(this._onHandleDragEnd, this)
        }), i.add(n)), Lc(n, e, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var l = a.get("size");
        N(l) || (l = [l, l]), n.scaleX = l[0] / 2, n.scaleY = l[1] / 2, ep(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      Pc(this._axisPointerModel, !e && this._moveAnimation, this._handle, $s(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var i = this._handle;
      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform($s(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr($s(n)), kr(i).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, i = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: i.axis.dim,
            axisIndex: i.componentIndex
          }]
        });
      }
    }, r.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, r.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(), i = this._group, n = this._handle;
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), Ll(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, i) {
      return i = i || 0, {
        x: t[i],
        y: t[1 - i],
        width: e[i],
        height: e[1 - i]
      };
    }, r;
  }()
);
function Pc(r, t, e, i) {
  Gp(kr(e).lastProp, i) || (kr(e).lastProp = i, t ? Ai(e, i, r) : (e.stopAnimation(), e.attr(i)));
}
function Gp(r, t) {
  if (F(r) && F(t)) {
    var e = !0;
    return E(t, function(i, n) {
      e = e && Gp(r[n], i);
    }), !!e;
  } else
    return r === t;
}
function Ic(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function $s(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function Lc(r, t, e) {
  var i = t.get("z"), n = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = e);
  });
}
function fb(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), i;
  return t === "line" ? (i = e.getLineStyle(), i.fill = null) : t === "shadow" && (i = e.getAreaStyle(), i.stroke = null), i;
}
function hb(r, t, e, i, n) {
  var a = e.get("value"), o = Up(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), l = Mo(s.get("padding") || 0), u = s.getFont(), f = Av(o, u), h = n.position, v = f.width + l[1] + l[3], c = f.height + l[0] + l[2], d = n.align;
  d === "right" && (h[0] -= v), d === "center" && (h[0] -= v / 2);
  var y = n.verticalAlign;
  y === "bottom" && (h[1] -= c), y === "middle" && (h[1] -= c / 2), cb(h, v, c, i);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: cr(s, {
      text: o,
      font: u,
      fill: s.getTextColor(),
      padding: l,
      backgroundColor: p
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function cb(r, t, e, i) {
  var n = i.getWidth(), a = i.getHeight();
  r[0] = Math.min(r[0] + t, n) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function Up(r, t, e, i, n) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: n.precision
  }), o = n.formatter;
  if (o) {
    var s = {
      value: Np(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    E(i, function(l) {
      var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, h = u && u.getDataParams(f);
      h && s.seriesData.push(h);
    }), k(o) ? a = o.replace("{value}", a) : J(o) && (a = o(s));
  }
  return a;
}
function Wp(r, t, e) {
  var i = mi();
  return Jl(i, i, e.rotation), il(i, i, e.position), Su([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], i);
}
function vb(r, t, e, i, n, a) {
  var o = Wr.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = n.get(["label", "margin"]), hb(t, i, n, a, {
    position: Wp(i.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function db(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function pb(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
var gb = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, i, n, a, o) {
      var s = n.axis, l = s.grid, u = a.get("type"), f = Rc(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(i, !0));
      if (u && u !== "none") {
        var v = fb(a), c = yb[u](s, h, f);
        c.style = v, e.graphicKey = c.type, e.pointer = c;
      }
      var d = xc(l.model, n);
      vb(
        // @ts-ignore
        i,
        e,
        d,
        n,
        a,
        o
      );
    }, t.prototype.getHandleTransform = function(e, i, n) {
      var a = xc(i.axis.grid.model, i, {
        labelInside: !1
      });
      a.labelMargin = n.get(["handle", "margin"]);
      var o = Wp(i.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, i, n, a) {
      var o = n.axis, s = o.grid, l = o.getGlobalExtent(!0), u = Rc(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
      h[f] += i[f], h[f] = Math.min(l[1], h[f]), h[f] = Math.max(l[0], h[f]);
      var v = (u[1] + u[0]) / 2, c = [v, v];
      c[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: c,
        tooltipOption: d[f]
      };
    }, t;
  }(ub)
);
function Rc(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var yb = {
  line: function(r, t, e) {
    var i = db([t, e[0]], [t, e[1]], Oc(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(r, t, e) {
    var i = Math.max(1, r.getBandWidth()), n = e[1] - e[0];
    return {
      type: "Rect",
      shape: pb([t - i / 2, e[0]], [i, n], Oc(r))
    };
  }
};
function Oc(r) {
  return r.dim === "x" ? 0 : 1;
}
var _b = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    }, t;
  }(et)
), Ye = Tt(), mb = E;
function Yp(r, t, e) {
  if (!z.node) {
    var i = t.getZr();
    Ye(i).records || (Ye(i).records = {}), wb(i, t);
    var n = Ye(i).records[r] || (Ye(i).records[r] = {});
    n.handler = e;
  }
}
function wb(r, t) {
  if (Ye(r).initialized)
    return;
  Ye(r).initialized = !0, e("click", St(Nc, "click")), e("mousemove", St(Nc, "mousemove")), e("globalout", Tb);
  function e(i, n) {
    r.on(i, function(a) {
      var o = bb(t);
      mb(Ye(r).records, function(s) {
        s && n(s, a, o.dispatchAction);
      }), Sb(o.pendings, t);
    });
  }
}
function Sb(r, t) {
  var e = r.showTip.length, i = r.hideTip.length, n;
  e ? n = r.showTip[e - 1] : i && (n = r.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n));
}
function Tb(r, t, e) {
  r.handler("leave", null, e);
}
function Nc(r, t, e, i) {
  t.handler(r, e, i);
}
function bb(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(i) {
    var n = t[i.type];
    n ? n.push(i) : (i.dispatchAction = e, r.dispatchAction(i));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function Gl(r, t) {
  if (!z.node) {
    var e = t.getZr(), i = (Ye(e).records || {})[r];
    i && (Ye(e).records[r] = null);
  }
}
var Cb = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n) {
      var a = i.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
      Yp("axisPointer", n, function(s, l, u) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
          type: "updateAxisPointer",
          currTrigger: s,
          x: l && l.offsetX,
          y: l && l.offsetY
        });
      });
    }, t.prototype.remove = function(e, i) {
      Gl("axisPointer", i);
    }, t.prototype.dispose = function(e, i) {
      Gl("axisPointer", i);
    }, t.type = "axisPointer", t;
  }(Be)
);
function $p(r, t) {
  var e = [], i = r.seriesIndex, n;
  if (i == null || !(n = t.getSeriesByIndex(i)))
    return {
      point: []
    };
  var a = n.getData(), o = Hn(a, r);
  if (o == null || o < 0 || N(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), l = n.coordinateSystem;
  if (n.getTooltipPosition)
    e = n.getTooltipPosition(o) || [];
  else if (l && l.dataToPoint)
    if (r.isStacked) {
      var u = l.getBaseAxis(), f = l.getOtherAxis(u), h = f.dim, v = u.dim, c = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(v), y = [];
      y[c] = a.get(d, o), y[1 - c] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(y) || [];
    } else
      e = l.dataToPoint(a.getValues(Z(l.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform), e = [p.x + p.width / 2, p.y + p.height / 2];
  }
  return {
    point: e,
    el: s
  };
}
var kc = Tt();
function xb(r, t, e) {
  var i = r.currTrigger, n = [r.x, r.y], a = r, o = r.dispatchAction || ot(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Fa(n) && (n = $p({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var l = Fa(n), u = a.axesInfo, f = s.axesInfo, h = i === "leave" || Fa(n), v = {}, c = {}, d = {
      list: [],
      map: {}
    }, y = {
      showPointer: St(Eb, c),
      showTooltip: St(Ab, d)
    };
    E(s.coordSysMap, function(g, _) {
      var m = l || g.containPoint(n);
      E(s.coordSysAxesInfo[_], function(w, S) {
        var T = w.axis, b = Lb(u, w);
        if (!h && m && (!u || b)) {
          var x = b && b.value;
          x == null && !l && (x = T.pointToData(n)), x != null && Bc(w, x, y, !1, v);
        }
      });
    });
    var p = {};
    return E(f, function(g, _) {
      var m = g.linkGroup;
      m && !c[_] && E(m.axesInfo, function(w, S) {
        var T = c[S];
        if (w !== g && T) {
          var b = T.value;
          m.mapper && (b = g.axis.scale.parse(m.mapper(b, Fc(w), Fc(g)))), p[g.key] = b;
        }
      });
    }), E(p, function(g, _) {
      Bc(f[_], g, y, !0, v);
    }), Mb(c, f, v), Pb(d, n, r, o), Ib(f, o, e), v;
  }
}
function Bc(r, t, e, i, n) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = Db(t, r), s = o.payloadBatch, l = o.snapToValue;
    s[0] && n.seriesIndex == null && R(n, s[0]), !i && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
  }
}
function Db(r, t) {
  var e = t.axis, i = e.dim, n = r, a = [], o = Number.MAX_VALUE, s = -1;
  return E(t.seriesModels, function(l, u) {
    var f = l.getData().mapDimensionsAll(i), h, v;
    if (l.getAxisTooltipData) {
      var c = l.getAxisTooltipData(f, r, e);
      v = c.dataIndices, h = c.nestestValue;
    } else {
      if (v = l.getData().indicesOfNearest(
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !v.length)
        return;
      h = l.getData().get(f[0], v[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var d = r - h, y = Math.abs(d);
      y <= o && ((y < o || d >= 0 && s < 0) && (o = y, s = d, n = h, a.length = 0), E(v, function(p) {
        a.push({
          seriesIndex: l.seriesIndex,
          dataIndexInside: p,
          dataIndex: l.getData().getRawIndex(p)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: n
  };
}
function Eb(r, t, e, i) {
  r[t.key] = {
    value: e,
    payloadBatch: i
  };
}
function Ab(r, t, e, i) {
  var n = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var l = t.coordSys.model, u = Vn(l), f = r.map[u];
    f || (f = r.map[u] = {
      coordSysId: l.id,
      coordSysIndex: l.componentIndex,
      coordSysType: l.type,
      coordSysMainType: l.mainType,
      dataByAxis: []
    }, r.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: i,
      // Caustion: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: n.slice()
    });
  }
}
function Mb(r, t, e) {
  var i = e.axesInfo = [];
  E(t, function(n, a) {
    var o = n.axisPointerModel.option, s = r[a];
    s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
      axisDim: n.axis.dim,
      axisIndex: n.axis.model.componentIndex,
      value: o.value
    });
  });
}
function Pb(r, t, e, i) {
  if (Fa(t) || !r.list.length) {
    i({
      type: "hideTip"
    });
    return;
  }
  var n = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  i({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: n.dataIndexInside,
    dataIndex: n.dataIndex,
    seriesIndex: n.seriesIndex,
    dataByCoordSys: r.list
  });
}
function Ib(r, t, e) {
  var i = e.getZr(), n = "axisPointerLastHighlights", a = kc(i)[n] || {}, o = kc(i)[n] = {};
  E(r, function(u, f) {
    var h = u.axisPointerModel.option;
    h.status === "show" && u.triggerEmphasis && E(h.seriesDataIndices, function(v) {
      var c = v.seriesIndex + " | " + v.dataIndex;
      o[c] = v;
    });
  });
  var s = [], l = [];
  E(a, function(u, f) {
    !o[f] && l.push(u);
  }), E(o, function(u, f) {
    !a[f] && s.push(u);
  }), l.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: l
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function Lb(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var i = r[e];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function Fc(r) {
  var t = r.axis.model, e = {}, i = e.axisDim = r.axis.dim;
  return e.axisIndex = e[i + "AxisIndex"] = t.componentIndex, e.axisName = e[i + "AxisName"] = t.name, e.axisId = e[i + "AxisId"] = t.id, e;
}
function Fa(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function Rb(r) {
  lb.registerAxisPointerClass("CartesianAxisPointer", gb), r.registerComponentModel(_b), r.registerComponentView(Cb), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !N(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = eb(t, e);
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, xb);
}
function Ob(r, t) {
  var e = Mo(t.get("padding")), i = t.getItemStyle(["color", "opacity"]);
  return i.fill = t.get("backgroundColor"), r = new Ft({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: i,
    silent: !0,
    z2: -1
  }), r;
}
var Nb = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    }, t;
  }(et)
);
function Xp(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function qp(r) {
  if (z.domSupported) {
    for (var t = document.documentElement.style, e = 0, i = r.length; e < i; e++)
      if (r[e] in t)
        return r[e];
  }
}
var Zp = qp(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), kb = qp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function Kp(r, t) {
  if (!r)
    return t;
  t = Ed(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function Bb(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var Fb = Kp(kb, "transition"), zu = Kp(Zp, "transform"), Vb = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (z.transform3dSupported ? "will-change:transform;" : "");
function zb(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function Hb(r, t, e) {
  if (!k(e) || e === "inside")
    return "";
  var i = r.get("backgroundColor"), n = r.get("borderWidth");
  t = Ln(t);
  var a = zb(e), o = Math.max(Math.round(n) * 1.5, 6), s = "", l = zu + ":", u;
  at(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
  var f = u * Math.PI / 180, h = o + n, v = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), c = Math.round(((v - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (v - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + c + "px";
  var d = t + " solid " + n + "px;", y = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
  return '<div style="' + y.join("") + '"></div>';
}
function Gb(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)", i = " " + r / 2 + "s " + e, n = "opacity" + i + ",visibility" + i;
  return t || (i = " " + r + "s " + e, n += z.transformSupported ? "," + zu + i : ",left" + i + ",top" + i), Fb + ":" + n;
}
function Vc(r, t, e) {
  var i = r.toFixed(0) + "px", n = t.toFixed(0) + "px";
  if (!z.transformSupported)
    return e ? "top:" + n + ";left:" + i + ";" : [["top", n], ["left", i]];
  var a = z.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + zu + ":" + o + ";" : [["top", 0], ["left", 0], [Zp, o]];
}
function Ub(r) {
  var t = [], e = r.get("fontSize"), i = r.getTextColor();
  i && t.push("color:" + i), t.push("font:" + r.getFont());
  var n = W(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + n + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, l = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + l + "px " + o + "px " + a), E(["decoration", "align"], function(u) {
    var f = r.get(u);
    f && t.push("text-" + u + ":" + f);
  }), t.join(";");
}
function Wb(r, t, e) {
  var i = [], n = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), l = r.get("shadowOffsetX"), u = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = Jd(r, "html"), v = l + "px " + u + "px " + o + "px " + s;
  return i.push("box-shadow:" + v), t && n && i.push(Gb(n, e)), a && i.push("background-color:" + a), E(["width", "color", "radius"], function(c) {
    var d = "border-" + c, y = Ed(d), p = r.get(y);
    p != null && i.push(d + ":" + p + (c === "color" ? "" : "px"));
  }), i.push(Ub(f)), h != null && i.push("padding:" + Mo(h).join("px ") + "px"), i.join(";") + ";";
}
function zc(r, t, e, i, n) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && Yg(r, o, e, i, n);
  } else {
    r[0] = i, r[1] = n;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var Yb = (
  /** @class */
  function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, z.wxa)
        return null;
      var i = document.createElement("div");
      i.domBelongToZr = !0, this.el = i;
      var n = this._zr = t.getZr(), a = e.appendTo, o = a && (k(a) ? document.querySelector(a) : bi(a) ? a : J(a) && a(t.getDom()));
      zc(this._styleCoord, n, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(i), this._api = t, this._container = o;
      var s = this;
      i.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, i.onmousemove = function(l) {
        if (l = l || window.event, !s._enterable) {
          var u = n.handler, f = n.painter.getViewportRoot();
          oe(f, l, !0), u.dispatch("mousemove", l);
        }
      }, i.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), i = Bb(e, "position"), n = e.style;
        n.position !== "absolute" && i !== "absolute" && (n.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var i = this.el, n = i.style, a = this._styleCoord;
      i.innerHTML ? n.cssText = Vb + Wb(t, !this._firstShow, this._longHide) + Vc(a[0], a[1], !0) + ("border-color:" + Ln(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (k(a) && i.get("trigger") === "item" && !Xp(i) && (s = Hb(i, n, a)), k(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", N(t) || (t = [t]);
        for (var l = 0; l < t.length; l++)
          bi(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
        if (s && o.childNodes.length) {
          var u = document.createElement("div");
          u.innerHTML = s, o.appendChild(u);
        }
      }
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, r.prototype.moveTo = function(t, e) {
      if (this.el) {
        var i = this._styleCoord;
        if (zc(i, this._zr, this._container, t, e), i[0] != null && i[1] != null) {
          var n = this.el.style, a = Vc(i[0], i[1]);
          E(a, function(o) {
            n[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      e.visibility = "hidden", e.opacity = "0", z.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(ot(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this.el.parentNode;
      t && t.removeChild(this.el), this.el = this._container = null;
    }, r;
  }()
), $b = (
  /** @class */
  function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), Gc(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this;
      F(t) && Wt(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = i.getModel("textStyle");
      this.el = new Rt({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: n,
          textShadowColor: s.get("textShadowColor"),
          fill: i.get(["textStyle", "color"]),
          padding: Jd(i, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: i.get("z")
      }), E(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
        o.el.style[u] = i.get(u);
      }), E(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
        o.el.style[u] = s.get(u) || 0;
      }), this._zr.add(this.el);
      var l = this;
      this.el.on("mouseover", function() {
        l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0;
      }), this.el.on("mouseout", function() {
        l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), i = Hc(t.style);
      return [e.width + i.left + i.right, e.height + i.top + i.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var i = this.el;
      if (i) {
        var n = this._styleCoord;
        Gc(n, this._zr, t, e), t = n[0], e = n[1];
        var a = i.style, o = nr(a.borderWidth || 0), s = Hc(a);
        i.x = t + o + s.left, i.y = e + o + s.top, i.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(ot(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  }()
);
function nr(r) {
  return Math.max(0, r);
}
function Hc(r) {
  var t = nr(r.shadowBlur || 0), e = nr(r.shadowOffsetX || 0), i = nr(r.shadowOffsetY || 0);
  return {
    left: nr(t - e),
    right: nr(t + e),
    top: nr(t - i),
    bottom: nr(t + i)
  };
}
function Gc(r, t, e, i) {
  r[0] = e, r[1] = i, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var Xb = new Ft({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), qb = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, i) {
      if (!(z.node || !i.getDom())) {
        var n = e.getComponent("tooltip"), a = this._renderMode = __(n.get("renderMode"));
        this._tooltipContent = a === "richText" ? new $b(i) : new Yb(i, {
          appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, i, n) {
      if (!(z.node || !n.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = i, this._api = n;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? ep(this, "_updatePosition", 50, "fixRate") : Ll(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, i = e.get("triggerOn");
      Yp("itemTooltip", this._api, ot(function(n, a, o) {
        i !== "none" && (i.indexOf(n) >= 0 ? this._tryShow(a, o) : n === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, i = this._ecModel, n = this._api, a = e.get("triggerOn");
      if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !n.isDisposed() && o.manuallyShowTip(e, i, n, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, i, n, a) {
      if (!(a.from === this.uid || z.node || !n.getDom())) {
        var o = Uc(a, n);
        this._ticket = "";
        var s = a.dataByCoordSys, l = jb(a, i, n);
        if (l) {
          var u = l.el.getBoundingRect().clone();
          u.applyTransform(l.el.transform), this._tryShow({
            offsetX: u.x + u.width / 2,
            offsetY: u.y + u.height / 2,
            target: l.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = Xb;
          f.x = a.x, f.y = a.y, f.update(), nt(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(e, i, n, a))
            return;
          var h = $p(a, i), v = h.point[0], c = h.point[1];
          v != null && c != null && this._tryShow({
            offsetX: v,
            offsetY: c,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (n.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: n.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, i, n, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(Uc(a, n));
    }, t.prototype._manuallyAxisShowTip = function(e, i, n, a) {
      var o = a.seriesIndex, s = a.dataIndex, l = i.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || l == null)) {
        var u = i.getSeriesByIndex(o);
        if (u) {
          var f = u.getData(), h = rn([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return n.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, i) {
      var n = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (n) {
          var s = nt(n);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null;
          var l, u;
          cn(n, function(f) {
            if (nt(f).dataIndex != null)
              return l = f, !0;
            if (nt(f).tooltipConfig != null)
              return u = f, !0;
          }, !0), l ? this._showSeriesItemTooltip(e, l, i) : u ? this._showComponentItemTooltip(e, u, i) : this._hide(i);
        } else
          this._lastDataByCoordSys = null, this._hide(i);
      }
    }, t.prototype._showOrMove = function(e, i) {
      var n = e.get("showDelay");
      i = ot(i, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(i, n) : i();
    }, t.prototype._showAxisTooltip = function(e, i) {
      var n = this._ecModel, a = this._tooltipModel, o = [i.offsetX, i.offsetY], s = rn([i.tooltipOption], a), l = this._renderMode, u = [], f = kn("section", {
        blocks: [],
        noHeader: !0
      }), h = [], v = new As();
      E(e, function(_) {
        E(_.dataByAxis, function(m) {
          var w = n.getComponent(m.axisDim + "Axis", m.axisIndex), S = m.value;
          if (!(!w || S == null)) {
            var T = Up(S, w.axis, n, m.seriesDataIndices, m.valueLabelOpt), b = kn("section", {
              header: T,
              noHeader: !Ie(T),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(b), E(m.seriesDataIndices, function(x) {
              var C = n.getSeriesByIndex(x.seriesIndex), D = x.dataIndexInside, A = C.getDataParams(D);
              if (!(A.dataIndex < 0)) {
                A.axisDim = m.axisDim, A.axisIndex = m.axisIndex, A.axisType = m.axisType, A.axisId = m.axisId, A.axisValue = Np(w.axis, {
                  value: S
                }), A.axisValueLabel = T, A.marker = v.makeTooltipMarker("item", Ln(A.color), l);
                var M = Lh(C.formatTooltip(D, !0, null)), I = M.frag;
                if (I) {
                  var P = rn([C], a).get("valueFormatter");
                  b.blocks.push(P ? R({
                    valueFormatter: P
                  }, I) : I);
                }
                M.text && h.push(M.text), u.push(A);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var c = i.position, d = s.get("order"), y = Bh(f, v, l, d, n.get("useUTC"), s.get("textStyle"));
      y && h.unshift(y);
      var p = l === "richText" ? `

` : "<br/>", g = h.join(p);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, c, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, g, u, Math.random() + "", o[0], o[1], c, null, v);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, i, n) {
      var a = this._ecModel, o = nt(i), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, h = o.dataType, v = u.getData(h), c = this._renderMode, d = e.positionDefault, y = rn([v.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), p = y.get("trigger");
      if (!(p != null && p !== "item")) {
        var g = u.getDataParams(f, h), _ = new As();
        g.marker = _.makeTooltipMarker("item", Ln(g.color), c);
        var m = Lh(u.formatTooltip(f, !1, h)), w = y.get("order"), S = y.get("valueFormatter"), T = m.frag, b = T ? Bh(S ? R({
          valueFormatter: S
        }, T) : T, _, c, w, a.get("useUTC"), y.get("textStyle")) : m.text, x = "item_" + u.name + "_" + f;
        this._showOrMove(y, function() {
          this._showTooltipContent(y, b, g, x, e.offsetX, e.offsetY, e.position, e.target, _);
        }), n({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: v.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, i, n) {
      var a = this._renderMode === "html", o = nt(i), s = o.tooltipConfig, l = s.option || {}, u = l.encodeHTMLContent;
      if (k(l)) {
        var f = l;
        l = {
          content: f,
          // Fixed formatter
          formatter: f
        }, u = !0;
      }
      u && a && l.content && (l = Q(l), l.content = Gt(l.content));
      var h = [l], v = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      v && h.push(v), h.push({
        formatter: l.content
      });
      var c = e.positionDefault, d = rn(h, this._tooltipModel, c ? {
        position: c
      } : null), y = d.get("content"), p = Math.random() + "", g = new As();
      this._showOrMove(d, function() {
        var _ = Q(d.get("formatterParams") || {});
        this._showTooltipContent(d, y, _, p, e.offsetX, e.offsetY, e.position, i, g);
      }), n({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, i, n, a, o, s, l, u, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(e.get("enterable"));
        var v = e.get("formatter");
        l = l || e.get("position");
        var c = i, d = this._getNearestPoint([o, s], n, e.get("trigger"), e.get("borderColor")), y = d.color;
        if (v)
          if (k(v)) {
            var p = e.ecModel.get("useUTC"), g = N(n) ? n[0] : n, _ = g && g.axisType && g.axisType.indexOf("time") >= 0;
            c = v, _ && (c = Dd(g.axisValue, c, p)), c = Ad(c, n, !0);
          } else if (J(v)) {
            var m = ot(function(w, S) {
              w === this._ticket && (h.setContent(S, f, e, y, l), this._updatePosition(e, l, o, s, h, n, u));
            }, this);
            this._ticket = a, c = v(n, a, m);
          } else
            c = v;
        h.setContent(c, f, e, y, l), h.show(e, y), this._updatePosition(e, l, o, s, h, n, u);
      }
    }, t.prototype._getNearestPoint = function(e, i, n, a) {
      if (n === "axis" || N(i))
        return {
          color: a || (this._renderMode === "html" ? "#fff" : "none")
        };
      if (!N(i))
        return {
          color: a || i.color || i.borderColor
        };
    }, t.prototype._updatePosition = function(e, i, n, a, o, s, l) {
      var u = this._api.getWidth(), f = this._api.getHeight();
      i = i || e.get("position");
      var h = o.getSize(), v = e.get("align"), c = e.get("verticalAlign"), d = l && l.getBoundingRect().clone();
      if (l && d.applyTransform(l.transform), J(i) && (i = i([n, a], s, o.el, d, {
        viewSize: [u, f],
        contentSize: h.slice()
      })), N(i))
        n = mt(i[0], u), a = mt(i[1], f);
      else if (F(i)) {
        var y = i;
        y.width = h[0], y.height = h[1];
        var p = Rn(y, {
          width: u,
          height: f
        });
        n = p.x, a = p.y, v = null, c = null;
      } else if (k(i) && l) {
        var g = Qb(i, d, h, e.get("borderWidth"));
        n = g[0], a = g[1];
      } else {
        var g = Zb(n, a, o, u, f, v ? null : 20, c ? null : 20);
        n = g[0], a = g[1];
      }
      if (v && (n -= Wc(v) ? h[0] / 2 : v === "right" ? h[0] : 0), c && (a -= Wc(c) ? h[1] / 2 : c === "bottom" ? h[1] : 0), Xp(e)) {
        var g = Kb(n, a, o, u, f);
        n = g[0], a = g[1];
      }
      o.moveTo(n, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, i) {
      var n = this._lastDataByCoordSys, a = this._cbParamsList, o = !!n && n.length === e.length;
      return o && E(n, function(s, l) {
        var u = s.dataByAxis || [], f = e[l] || {}, h = f.dataByAxis || [];
        o = o && u.length === h.length, o && E(u, function(v, c) {
          var d = h[c] || {}, y = v.seriesDataIndices || [], p = d.seriesDataIndices || [];
          o = o && v.value === d.value && v.axisType === d.axisType && v.axisId === d.axisId && y.length === p.length, o && E(y, function(g, _) {
            var m = p[_];
            o = o && g.seriesIndex === m.seriesIndex && g.dataIndex === m.dataIndex;
          }), a && E(v.seriesDataIndices, function(g) {
            var _ = g.seriesIndex, m = i[_], w = a[_];
            m && w && w.data !== m.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = i, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, i) {
      z.node || !i.getDom() || (Ll(this, "_updatePosition"), this._tooltipContent.dispose(), Gl("itemTooltip", i));
    }, t.type = "tooltip", t;
  }(Be)
);
function rn(r, t, e) {
  var i = t.ecModel, n;
  e ? (n = new ct(e, i, i), n = new ct(t.option, n, i)) : n = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof ct && (o = o.get("tooltip", !0)), k(o) && (o = {
      formatter: o
    }), o && (n = new ct(o, n, i)));
  }
  return n;
}
function Uc(r, t) {
  return r.dispatchAction || ot(t.dispatchAction, t);
}
function Zb(r, t, e, i, n, a, o) {
  var s = e.getSize(), l = s[0], u = s[1];
  return a != null && (r + l + a + 2 > i ? r -= l + a : r += a), o != null && (t + u + o > n ? t -= u + o : t += o), [r, t];
}
function Kb(r, t, e, i, n) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, i) - o, t = Math.min(t + s, n) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function Qb(r, t, e, i) {
  var n = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * i) + 8, s = 0, l = 0, u = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + u / 2 - n / 2, l = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + u / 2 - n / 2, l = t.y - a - o;
      break;
    case "bottom":
      s = t.x + u / 2 - n / 2, l = t.y + f + o;
      break;
    case "left":
      s = t.x - n - o, l = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + u + o, l = t.y + f / 2 - a / 2;
  }
  return [s, l];
}
function Wc(r) {
  return r === "center" || r === "middle";
}
function jb(r, t, e) {
  var i = au(r).queryOptionMap, n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = Gn(t, n, i.get(n), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), l;
      if (s.group.traverse(function(u) {
        var f = nt(u).tooltipConfig;
        if (f && f.name === r.name)
          return l = u, !0;
      }), l)
        return {
          componentMainType: n,
          componentIndex: o.componentIndex,
          el: l
        };
    }
  }
}
function Jb(r) {
  Mi(Rb), r.registerComponentModel(Nb), r.registerComponentView(qb), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, $t), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, $t);
}
var tC = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, e;
    }
    return t.type = "title", t.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    }, t;
  }(et)
), eC = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n) {
      if (this.group.removeAll(), !!e.get("show")) {
        var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), l = e.get("textAlign"), u = W(e.get("textBaseline"), e.get("textVerticalAlign")), f = new Rt({
          style: cr(o, {
            text: e.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = f.getBoundingRect(), v = e.get("subtext"), c = new Rt({
          style: cr(s, {
            text: v,
            fill: s.getTextColor(),
            y: h.height + e.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), d = e.get("link"), y = e.get("sublink"), p = e.get("triggerEvent", !0);
        f.silent = !d && !p, c.silent = !y && !p, d && f.on("click", function() {
          dh(d, "_" + e.get("target"));
        }), y && c.on("click", function() {
          dh(y, "_" + e.get("subtarget"));
        }), nt(f).eventData = nt(c).eventData = p ? {
          componentType: "title",
          componentIndex: e.componentIndex
        } : null, a.add(f), v && a.add(c);
        var g = a.getBoundingRect(), _ = e.getBoxLayoutParams();
        _.width = g.width, _.height = g.height;
        var m = Rn(_, {
          width: n.getWidth(),
          height: n.getHeight()
        }, e.get("padding"));
        l || (l = e.get("left") || e.get("right"), l === "middle" && (l = "center"), l === "right" ? m.x += m.width : l === "center" && (m.x += m.width / 2)), u || (u = e.get("top") || e.get("bottom"), u === "center" && (u = "middle"), u === "bottom" ? m.y += m.height : u === "middle" && (m.y += m.height / 2), u = u || "top"), a.x = m.x, a.y = m.y, a.markRedraw();
        var w = {
          align: l,
          verticalAlign: u
        };
        f.setStyle(w), c.setStyle(w), g = a.getBoundingRect();
        var S = m.margin, T = e.getItemStyle(["color", "opacity"]);
        T.fill = e.get("backgroundColor");
        var b = new Ft({
          shape: {
            x: g.x - S[3],
            y: g.y - S[0],
            width: g.width + S[1] + S[3],
            height: g.height + S[0] + S[2],
            r: e.get("borderRadius")
          },
          style: T,
          subPixelOptimize: !0,
          silent: !0
        });
        a.add(b);
      }
    }, t.type = "title", t;
  }(Be)
);
function rC(r) {
  r.registerComponentModel(tC), r.registerComponentView(eC);
}
var iC = function(r, t) {
  if (t === "all")
    return {
      type: "all",
      title: r.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: r.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, Ul = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var i = e.selector, n = this.ecModel;
      i === !0 && (i = e.selector = ["all", "inverse"]), N(i) && E(i, function(a, o) {
        k(a) && (a = {
          type: a
        }), i[o] = ut(a, iC(n, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var i = !1, n = 0; n < e.length; n++) {
          var a = e[n].get("name");
          if (this.isSelected(a)) {
            this.select(a), i = !0;
            break;
          }
        }
        !i && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var i = [], n = [];
      e.eachRawSeries(function(l) {
        var u = l.name;
        n.push(u);
        var f;
        if (l.legendVisualProvider) {
          var h = l.legendVisualProvider, v = h.getAllNames();
          e.isSeriesFiltered(l) || (n = n.concat(v)), v.length ? i = i.concat(v) : f = !0;
        } else
          f = !0;
        f && nu(l) && i.push(l.name);
      }), this._availableNames = n;
      var a = this.get("data") || i, o = j(), s = Z(a, function(l) {
        return (k(l) || yt(l)) && (l = {
          name: l
        }), o.get(l.name) ? null : (o.set(l.name, !0), new ct(l, this, this.ecModel));
      }, this);
      this._data = ue(s, function(l) {
        return !!l;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var i = this.option.selected, n = this.get("selectedMode");
      if (n === "single") {
        var a = this._data;
        E(a, function(o) {
          i[o.get("name")] = !1;
        });
      }
      i[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var i = this.option.selected;
      i.hasOwnProperty(e) || (i[e] = !0), this[i[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, i = this.option.selected;
      E(e, function(n) {
        i[n.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, i = this.option.selected;
      E(e, function(n) {
        var a = n.get("name", !0);
        i.hasOwnProperty(a) || (i[a] = !0), i[a] = !i[a];
      });
    }, t.prototype.isSelected = function(e) {
      var i = this.option.selected;
      return !(i.hasOwnProperty(e) && !i[e]) && at(this._availableNames, e) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      }
    }, t;
  }(et)
), hi = St, Wl = E, Ca = me, Qp = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new Ca()), this.group.add(this._selectorGroup = new Ca()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, i, n) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var l = e.get("selector", !0), u = e.get("selectorPosition", !0);
        l && (!u || u === "auto") && (u = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, i, n, l, s, u);
        var f = e.getBoxLayoutParams(), h = {
          width: n.getWidth(),
          height: n.getHeight()
        }, v = e.get("padding"), c = Rn(f, h, v), d = this.layoutInner(e, o, c, a, l, u), y = Rn(ft({
          width: d.width,
          height: d.height
        }, f), h, v);
        this.group.x = y.x - d.x, this.group.y = y.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = Ob(d, e));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, i, n, a, o, s, l) {
      var u = this.getContentGroup(), f = j(), h = i.get("selectedMode"), v = [];
      n.eachRawSeries(function(c) {
        !c.get("legendHoverLink") && v.push(c.id);
      }), Wl(i.getData(), function(c, d) {
        var y = c.get("name");
        if (!this.newlineDisabled && (y === "" || y === `
`)) {
          var p = new Ca();
          p.newline = !0, u.add(p);
          return;
        }
        var g = n.getSeriesByName(y)[0];
        if (!f.get(y)) {
          if (g) {
            var _ = g.getData(), m = _.getVisual("legendLineStyle") || {}, w = _.getVisual("legendIcon"), S = _.getVisual("style"), T = this._createItem(g, y, d, c, i, e, m, S, w, h, a);
            T.on("click", hi(Yc, y, null, a, v)).on("mouseover", hi(Yl, g.name, null, a, v)).on("mouseout", hi($l, g.name, null, a, v)), n.ssr && T.eachChild(function(b) {
              var x = nt(b);
              x.seriesIndex = g.seriesIndex, x.dataIndex = d, x.ssrType = "legend";
            }), f.set(y, !0);
          } else
            n.eachRawSeries(function(b) {
              if (!f.get(y) && b.legendVisualProvider) {
                var x = b.legendVisualProvider;
                if (!x.containName(y))
                  return;
                var C = x.indexOfName(y), D = x.getItemVisual(C, "style"), A = x.getItemVisual(C, "legendIcon"), M = Hr(D.fill);
                M && M[3] === 0 && (M[3] = 0.2, D = R(R({}, D), {
                  fill: tu(M, "rgba")
                }));
                var I = this._createItem(b, y, d, c, i, e, {}, D, A, h, a);
                I.on("click", hi(Yc, null, y, a, v)).on("mouseover", hi(Yl, null, y, a, v)).on("mouseout", hi($l, null, y, a, v)), n.ssr && I.eachChild(function(P) {
                  var L = nt(P);
                  L.seriesIndex = b.seriesIndex, L.dataIndex = d, L.ssrType = "legend";
                }), f.set(y, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(y) || console.warn(y + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, i, a, s, l);
    }, t.prototype._createSelector = function(e, i, n, a, o) {
      var s = this.getSelectorGroup();
      Wl(e, function(u) {
        var f = u.type, h = new Rt({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            n.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: i.id
            });
          }
        });
        s.add(h);
        var v = i.getModel("selectorLabel"), c = i.getModel(["emphasis", "selectorLabel"]);
        Sd(h, {
          normal: v,
          emphasis: c
        }, {
          defaultText: u.title
        }), Sl(h);
      });
    }, t.prototype._createItem = function(e, i, n, a, o, s, l, u, f, h, v) {
      var c = e.visualDrawType, d = o.get("itemWidth"), y = o.get("itemHeight"), p = o.isSelected(i), g = a.get("symbolRotate"), _ = a.get("symbolKeepAspect"), m = a.get("icon");
      f = m || f || "roundRect";
      var w = nC(f, a, l, u, c, p, v), S = new Ca(), T = a.getModel("textStyle");
      if (J(e.getLegendIcon) && (!m || m === "inherit"))
        S.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: g,
          itemStyle: w.itemStyle,
          lineStyle: w.lineStyle,
          symbolKeepAspect: _
        }));
      else {
        var b = m === "inherit" && e.getData().getVisual("symbol") ? g === "inherit" ? e.getData().getVisual("symbolRotate") : g : 0;
        S.add(aC({
          itemWidth: d,
          itemHeight: y,
          icon: f,
          iconRotate: b,
          itemStyle: w.itemStyle,
          symbolKeepAspect: _
        }));
      }
      var x = s === "left" ? d + 5 : -5, C = s, D = o.get("formatter"), A = i;
      k(D) && D ? A = D.replace("{name}", i ?? "") : J(D) && (A = D(i));
      var M = p ? T.getTextColor() : a.get("inactiveColor");
      S.add(new Rt({
        style: cr(T, {
          text: A,
          x,
          y: y / 2,
          fill: M,
          align: C,
          verticalAlign: "middle"
        }, {
          inheritColor: M
        })
      }));
      var I = new Ft({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && Do({
        el: I,
        componentModel: o,
        itemName: i,
        itemTooltipOption: P.option
      }), S.add(I), S.eachChild(function(L) {
        L.silent = !0;
      }), I.silent = !h, this.getContentGroup().add(S), Sl(S), S.__legendDataIndex = n, S;
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var l = this.getContentGroup(), u = this.getSelectorGroup();
      xn(e.get("orient"), l, e.get("itemGap"), n.width, n.height);
      var f = l.getBoundingRect(), h = [-f.x, -f.y];
      if (u.markRedraw(), l.markRedraw(), o) {
        xn(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          u,
          e.get("selectorItemGap", !0)
        );
        var v = u.getBoundingRect(), c = [-v.x, -v.y], d = e.get("selectorButtonGap", !0), y = e.getOrient().index, p = y === 0 ? "width" : "height", g = y === 0 ? "height" : "width", _ = y === 0 ? "y" : "x";
        s === "end" ? c[y] += f[p] + d : h[y] += v[p] + d, c[1 - y] += f[g] / 2 - v[g] / 2, u.x = c[0], u.y = c[1], l.x = h[0], l.y = h[1];
        var m = {
          x: 0,
          y: 0
        };
        return m[p] = f[p] + d + v[p], m[g] = Math.max(f[g], v[g]), m[_] = Math.min(0, v[_] + c[1 - y]), m;
      } else
        return l.x = h[0], l.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  }(Be)
);
function nC(r, t, e, i, n, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0), Wl(p, function(_, m) {
      p[m] === "inherit" && (p[m] = g[m]);
    });
  }
  var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = l.getShallow("decal");
  u.decal = !h || h === "inherit" ? i.decal : Bl(h, o), u.fill === "inherit" && (u.fill = i[n]), u.stroke === "inherit" && (u.stroke = i[f]), u.opacity === "inherit" && (u.opacity = (n === "fill" ? i : e).opacity), s(u, i);
  var v = t.getModel("lineStyle"), c = v.getLineStyle();
  if (s(c, e), u.fill === "auto" && (u.fill = i.fill), u.stroke === "auto" && (u.stroke = i.fill), c.stroke === "auto" && (c.stroke = i.fill), !a) {
    var d = t.get("inactiveBorderWidth"), y = u[f];
    u.lineWidth = d === "auto" ? i.lineWidth > 0 && y ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), c.stroke = v.get("inactiveColor"), c.lineWidth = v.get("inactiveWidth");
  }
  return {
    itemStyle: u,
    lineStyle: c
  };
}
function aC(r) {
  var t = r.icon || "roundRect", e = Ru(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function Yc(r, t, e, i) {
  $l(r, t, e, i), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), Yl(r, t, e, i);
}
function jp(r) {
  for (var t = r.getZr().storage.getDisplayList(), e, i = 0, n = t.length; i < n && !(e = t[i].states.emphasis); )
    i++;
  return e && e.hoverLayer;
}
function Yl(r, t, e, i) {
  jp(e) || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function $l(r, t, e, i) {
  jp(e) || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function oC(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var i = 0; i < t.length; i++)
      if (!t[i].isSelected(e.name))
        return !1;
    return !0;
  });
}
function nn(r, t, e) {
  var i = r === "allSelect" || r === "inverseSelect", n = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    i ? s[r]() : s[r](t.name), $c(s, n), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    E(n, function(l, u) {
      s[l ? "select" : "unSelect"](u);
    }), $c(s, o);
  }), i ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function $c(r, t) {
  var e = t || {};
  return E(r.getData(), function(i) {
    var n = i.get("name");
    if (!(n === `
` || n === "")) {
      var a = r.isSelected(n);
      $r(e, n) ? e[n] = e[n] && a : e[n] = a;
    }
  }), e;
}
function sC(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", St(nn, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", St(nn, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", St(nn, "inverseSelect")), r.registerAction("legendSelect", "legendselected", St(nn, "select")), r.registerAction("legendUnSelect", "legendunselected", St(nn, "unSelect"));
}
function Jp(r) {
  r.registerComponentModel(Ul), r.registerComponentView(Qp), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, oC), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), sC(r);
}
var lC = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, i, n) {
      var a = Du(e);
      r.prototype.init.call(this, e, i, n), Xc(this, e, a);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), Xc(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = q0(Ul.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    }), t;
  }(Ul)
);
function Xc(r, t, e) {
  var i = r.getOrient(), n = [1, 1];
  n[i.index] = 0, On(t, e, {
    type: "box",
    ignoreSize: !!n
  });
}
var qc = me, Xs = ["width", "height"], qs = ["x", "y"], uC = (
  /** @class */
  function(r) {
    vt(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new qc()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new qc());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, i, n, a, o, s, l) {
      var u = this;
      r.prototype.renderInner.call(this, e, i, n, a, o, s, l);
      var f = this._controllerGroup, h = i.get("pageIconSize", !0), v = N(h) ? h : [h, h];
      d("pagePrev", 0);
      var c = i.getModel("pageTextStyle");
      f.add(new Rt({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: c.getTextColor(),
          font: c.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(y, p) {
        var g = y + "DataIndex", _ = Tu(i.get("pageIcons", !0)[i.getOrient().name][p], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: ot(u._pageGo, u, g, i, a)
        }, {
          x: -v[0] / 2,
          y: -v[1] / 2,
          width: v[0],
          height: v[1]
        });
        _.name = y, f.add(_);
      }
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var l = this.getSelectorGroup(), u = e.getOrient().index, f = Xs[u], h = qs[u], v = Xs[1 - u], c = qs[1 - u];
      o && xn(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        l,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), y = l.getBoundingRect(), p = [-y.x, -y.y], g = Q(n);
      o && (g[f] = n[f] - y[f] - d);
      var _ = this._layoutContentAndController(e, a, g, u, f, v, c, h);
      if (o) {
        if (s === "end")
          p[u] += _[f] + d;
        else {
          var m = y[f] + d;
          p[u] -= m, _[h] -= m;
        }
        _[f] += y[f] + d, p[1 - u] += _[c] + _[v] / 2 - y[v] / 2, _[v] = Math.max(_[v], y[v]), _[c] = Math.min(_[c], y[c] + p[1 - u]), l.x = p[0], l.y = p[1], l.markRedraw();
      }
      return _;
    }, t.prototype._layoutContentAndController = function(e, i, n, a, o, s, l, u) {
      var f = this.getContentGroup(), h = this._containerGroup, v = this._controllerGroup;
      xn(e.get("orient"), f, e.get("itemGap"), a ? n.width : null, a ? null : n.height), xn(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        v,
        e.get("pageButtonItemGap", !0)
      );
      var c = f.getBoundingRect(), d = v.getBoundingRect(), y = this._showController = c[o] > n[o], p = [-c.x, -c.y];
      i || (p[a] = f[u]);
      var g = [0, 0], _ = [-d.x, -d.y], m = W(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (y) {
        var w = e.get("pageButtonPosition", !0);
        w === "end" ? _[a] += n[o] - d[o] : g[a] += d[o] + m;
      }
      _[1 - a] += c[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(g), v.setPosition(_);
      var S = {
        x: 0,
        y: 0
      };
      if (S[o] = y ? n[o] : c[o], S[s] = Math.max(c[s], d[s]), S[l] = Math.min(0, d[l] + _[1 - a]), h.__rectSize = n[o], y) {
        var T = {
          x: 0,
          y: 0
        };
        T[o] = Math.max(n[o] - d[o] - m, 0), T[s] = S[s], h.setClipPath(new Ft({
          shape: T
        })), h.__rectSize = T[o];
      } else
        v.eachChild(function(x) {
          x.attr({
            invisible: !0,
            silent: !0
          });
        });
      var b = this._getPageInfo(e);
      return b.pageIndex != null && Ai(
        f,
        {
          x: b.contentPosition[0],
          y: b.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        y ? e : null
      ), this._updatePageInfoView(e, b), S;
    }, t.prototype._pageGo = function(e, i, n) {
      var a = this._getPageInfo(i)[e];
      a != null && n.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: i.id
      });
    }, t.prototype._updatePageInfoView = function(e, i) {
      var n = this._controllerGroup;
      E(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", v = i[h] != null, c = n.childOfName(f);
        c && (c.setStyle("fill", v ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), c.cursor = v ? "pointer" : "default");
      });
      var a = n.childOfName("pageText"), o = e.get("pageFormatter"), s = i.pageIndex, l = s != null ? s + 1 : 0, u = i.pageCount;
      a && o && a.setStyle("text", k(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
        current: l,
        total: u
      }));
    }, t.prototype._getPageInfo = function(e) {
      var i = e.get("scrollDataIndex", !0), n = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = Xs[o], l = qs[o], u = this._findTargetItemIndex(i), f = n.children(), h = f[u], v = f.length, c = v ? 1 : 0, d = {
        contentPosition: [n.x, n.y],
        pageCount: c,
        pageIndex: c - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var y = w(h);
      d.contentPosition[o] = -y.s;
      for (var p = u + 1, g = y, _ = y, m = null; p <= v; ++p)
        m = w(f[p]), // Half of the last item is out of the window.
        (!m && _.e > g.s + a || m && !S(m, g.s)) && (_.i > g.i ? g = _ : g = m, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), _ = m;
      for (var p = u - 1, g = y, _ = y, m = null; p >= -1; --p)
        m = w(f[p]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!m || !S(_, m.s)) && g.i < _.i && (_ = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = m;
      return d;
      function w(T) {
        if (T) {
          var b = T.getBoundingRect(), x = b[l] + T[l];
          return {
            s: x,
            e: x + b[s],
            i: T.__legendDataIndex
          };
        }
      }
      function S(T, b) {
        return T.e >= b && T.s <= b + a;
      }
    }, t.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var i, n = this.getContentGroup(), a;
      return n.eachChild(function(o, s) {
        var l = o.__legendDataIndex;
        a == null && l != null && (a = s), l === e && (i = s);
      }), i ?? a;
    }, t.type = "legend.scroll", t;
  }(Qp)
);
function fC(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var i = t.scrollDataIndex;
    i != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(n) {
      n.setScrollDataIndex(i);
    });
  });
}
function hC(r) {
  Mi(Jp), r.registerComponentModel(lC), r.registerComponentView(uC), fC(r);
}
function cC(r) {
  Mi(Jp), Mi(hC);
}
const vC = [
  "getWidth",
  "getHeight",
  "getDom",
  "getOption",
  "resize",
  "dispatchAction",
  "convertToPixel",
  "convertFromPixel",
  "containPixel",
  "getDataURL",
  "getConnectedDataURL",
  "appendData",
  "clear",
  "isDisposed",
  "dispose"
];
function dC(r) {
  function t(i) {
    return (...n) => {
      if (!r.value)
        throw new Error("ECharts is not initialized yet.");
      return r.value[i].apply(r.value, n);
    };
  }
  function e() {
    const i = /* @__PURE__ */ Object.create(null);
    return vC.forEach((n) => {
      i[n] = t(n);
    }), i;
  }
  return e();
}
function pC(r, t, e) {
  dn(
    [e, r, t],
    ([i, n, a], o, s) => {
      let l = null;
      if (i && n && a) {
        const { offsetWidth: u, offsetHeight: f } = i, h = a === !0 ? {} : a, { throttle: v = 100, onResize: c } = h;
        let d = !1;
        const y = () => {
          n.resize(), c == null || c();
        }, p = v ? Lu(y, v) : y;
        l = new ResizeObserver(() => {
          !d && (d = !0, i.offsetWidth === u && i.offsetHeight === f) || p();
        }), l.observe(i);
      }
      s(() => {
        l && (l.disconnect(), l = null);
      });
    }
  );
}
const gC = {
  autoresize: [Boolean, Object]
}, yC = /^on[^a-z]/, tg = (r) => yC.test(r);
function _C(r) {
  const t = {};
  for (const e in r)
    tg(e) || (t[e] = r[e]);
  return t;
}
function Va(r, t) {
  const e = ug(r) ? Ae(r) : r;
  return e && typeof e == "object" && "value" in e ? e.value || t : e || t;
}
const mC = "ecLoadingOptions";
function wC(r, t, e) {
  const i = vn(mC, {}), n = jt(() => ({
    ...Va(i, {}),
    ...e == null ? void 0 : e.value
  }));
  Qc(() => {
    const a = r.value;
    a && (t.value ? a.showLoading(n.value) : a.hideLoading());
  });
}
const SC = {
  loading: Boolean,
  loadingOptions: Object
};
let an = null;
const eg = "x-vue-echarts";
function TC() {
  if (an != null)
    return an;
  if (typeof HTMLElement > "u" || typeof customElements > "u")
    return an = !1;
  try {
    new Function(
      "tag",
      // Use esbuild repl to keep build process simple
      // https://esbuild.github.io/try/#dAAwLjIzLjAALS1taW5pZnkAY2xhc3MgRUNoYXJ0c0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7CiAgX19kaXNwb3NlID0gbnVsbDsKCiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7CiAgICBpZiAodGhpcy5fX2Rpc3Bvc2UpIHsKICAgICAgdGhpcy5fX2Rpc3Bvc2UoKTsKICAgICAgdGhpcy5fX2Rpc3Bvc2UgPSBudWxsOwogICAgfQogIH0KfQoKaWYgKGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpID09IG51bGwpIHsKICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnLCBFQ2hhcnRzRWxlbWVudCk7Cn0K
      "class EChartsElement extends HTMLElement{__dispose=null;disconnectedCallback(){this.__dispose&&(this.__dispose(),this.__dispose=null)}}customElements.get(tag)==null&&customElements.define(tag,EChartsElement);"
    )(eg);
  } catch {
    return an = !1;
  }
  return an = !0;
}
document.head.appendChild(document.createElement("style")).textContent = `x-vue-echarts{display:block;width:100%;height:100%;min-width:0}
`;
const bC = TC(), CC = "ecTheme", xC = "ecInitOptions", DC = "ecUpdateOptions", Zc = /(^&?~?!?)native:/;
var EC = Kc({
  name: "echarts",
  props: {
    option: Object,
    theme: {
      type: [Object, String]
    },
    initOptions: Object,
    updateOptions: Object,
    group: String,
    manualUpdate: Boolean,
    ...gC,
    ...SC
  },
  emits: {},
  inheritAttrs: !1,
  setup(r, { attrs: t }) {
    const e = xa(), i = xa(), n = xa(), a = vn(CC, null), o = vn(xC, null), s = vn(DC, null), { autoresize: l, manualUpdate: u, loading: f, loadingOptions: h } = og(r), v = jt(
      () => n.value || r.option || null
    ), c = jt(
      () => r.theme || Va(a, {})
    ), d = jt(
      () => r.initOptions || Va(o, {})
    ), y = jt(
      () => r.updateOptions || Va(s, {})
    ), p = jt(() => _C(t)), g = {}, _ = sg().proxy.$listeners, m = {};
    _ ? Object.keys(_).forEach((C) => {
      Zc.test(C) ? g[C.replace(Zc, "$1")] = _[C] : m[C] = _[C];
    }) : Object.keys(t).filter((C) => tg(C)).forEach((C) => {
      let D = C.charAt(2).toLowerCase() + C.slice(3);
      if (D.indexOf("native:") === 0) {
        const A = `on${D.charAt(7).toUpperCase()}${D.slice(
          8
        )}`;
        g[A] = t[C];
        return;
      }
      D.substring(D.length - 4) === "Once" && (D = `~${D.substring(0, D.length - 4)}`), m[D] = t[C];
    });
    function w(C) {
      if (!e.value)
        return;
      const D = i.value = KS(
        e.value,
        c.value,
        d.value
      );
      r.group && (D.group = r.group), Object.keys(m).forEach((I) => {
        let P = m[I];
        if (!P)
          return;
        let L = I.toLowerCase();
        L.charAt(0) === "~" && (L = L.substring(1), P.__once__ = !0);
        let O = D;
        if (L.indexOf("zr:") === 0 && (O = D.getZr(), L = L.substring(3)), P.__once__) {
          delete P.__once__;
          const V = P;
          P = (...Y) => {
            V(...Y), O.off(L, P);
          };
        }
        O.on(L, P);
      });
      function A() {
        D && !D.isDisposed() && D.resize();
      }
      function M() {
        const I = C || v.value;
        I && D.setOption(I, y.value);
      }
      l.value ? Jc(() => {
        A(), M();
      }) : M();
    }
    function S(C, D) {
      r.manualUpdate && (n.value = C), i.value ? i.value.setOption(C, D || {}) : w(C);
    }
    function T() {
      i.value && (i.value.dispose(), i.value = void 0);
    }
    let b = null;
    dn(
      u,
      (C) => {
        typeof b == "function" && (b(), b = null), C || (b = dn(
          () => r.option,
          (D, A) => {
            D && (i.value ? i.value.setOption(D, {
              // mutating `option` will lead to `notMerge: false` and
              // replacing it with new reference will lead to `notMerge: true`
              notMerge: D !== A,
              ...y.value
            }) : w());
          },
          { deep: !0 }
        ));
      },
      {
        immediate: !0
      }
    ), dn(
      [c, d],
      () => {
        T(), w();
      },
      {
        deep: !0
      }
    ), Qc(() => {
      r.group && i.value && (i.value.group = r.group);
    });
    const x = dC(i);
    return wC(i, f, h), pC(i, l, e), lg(() => {
      w();
    }), jc(() => {
      bC && e.value ? e.value.__dispose = T : T();
    }), {
      chart: i,
      root: e,
      setOption: S,
      nonEventAttrs: p,
      nativeListeners: g,
      ...x
    };
  },
  render() {
    const r = { ...this.nonEventAttrs, ...this.nativeListeners };
    return r.ref = "root", r.class = r.class ? ["echarts"].concat(r.class) : "echarts", ag(eg, r);
  }
});
const AC = Symbol.for("y2kfund.supabase");
function rg() {
  const r = vn(AC, null);
  if (!r) throw new Error("[@y2kfund/core] Supabase client not found. Did you install createCore()?");
  return r;
}
async function MC(r, t) {
  if (!t)
    return console.log("⚠️ No userId provided, showing all positions"), [];
  try {
    console.log("👤 Fetching accessible accounts for user:", t);
    const { data: e, error: i } = await r.schema("hf").from("user_account_access").select("internal_account_id").eq("user_id", t).eq("is_active", !0);
    if (i)
      return console.error("❌ Error fetching user account access:", i), [];
    if (!e || e.length === 0)
      return console.log("⚠️ No account access found for user, showing all positions"), [];
    const n = e.map((a) => a.internal_account_id);
    return console.log("✅ User has access to accounts:", n), n;
  } catch (e) {
    return console.error("❌ Exception fetching account access:", e), [];
  }
}
const PC = {
  top20: (r) => ["relativeCapitalDeployed", "top20", r]
};
function IC(r, t) {
  if (!r) return "";
  if (t === "STK" || t === "FUND")
    return r;
  if (t === "OPT") {
    const e = r.match(/^([A-Z]+)/);
    return e ? e[1] : r.split(/\s+/)[0];
  }
  return r;
}
function LC(r, t) {
  return t === "STK" || t === "FUND" ? !0 : t === "OPT" ? r.includes(" P ") || r.includes(" P[") : !1;
}
function RC(r) {
  const t = rg(), e = tv(), i = PC.top20(r), n = ev({
    queryKey: i,
    queryFn: async () => {
      console.log("🔍 [Top20Capital] Querying with:", {
        userId: r || "none (all accounts)"
      });
      const o = await MC(t, r);
      r && o.length === 0 ? console.log("⚠️ User has no account access restrictions - showing all accounts") : o.length > 0 && console.log("🔒 User has access to accounts:", o);
      const { data: s, error: l } = await t.schema("hf").from("positions").select("fetched_at").order("fetched_at", { ascending: !1 }).limit(1).single();
      if (l)
        throw console.error("❌ Error fetching latest fetched_at:", l), l;
      if (!s || !s.fetched_at)
        return console.log("⚠️ No positions found in database"), [];
      const u = s.fetched_at;
      console.log("📅 Latest fetched_at:", u);
      let f = t.schema("hf").from("positions").select("*").eq("fetched_at", u).in("asset_class", ["STK", "OPT", "FUND"]);
      o.length > 0 && (f = f.in("internal_account_id", o));
      const { data: h, error: v } = await f;
      if (v)
        throw console.error("❌ Error fetching positions:", v), v;
      if (!h || h.length === 0)
        return console.log("📊 No positions found matching criteria"), [];
      console.log(`✅ Fetched ${h.length} position(s) from database`);
      const c = h.filter(
        (C) => LC(C.symbol, C.asset_class)
      );
      if (console.log(`🔽 Filtered to ${c.length} position(s) (STK + FUND + PUT options)`), c.length === 0)
        return console.log("⚠️ No positions after filtering"), [];
      const d = /* @__PURE__ */ new Map();
      c.forEach((C) => {
        const D = IC(C.symbol, C.asset_class);
        if (!D) return;
        const A = Math.abs(C.accounting_quantity ?? C.qty ?? 0);
        d.has(D) || d.set(D, {
          totalQuantity: 0,
          positions: []
        });
        const M = d.get(D);
        M.totalQuantity += A, M.positions.push(C);
      }), console.log(`📦 Grouped into ${d.size} unique symbol(s)`);
      const [y, p] = await Promise.all([
        t.schema("hf").from("user_accounts_master").select("internal_account_id, legal_entity"),
        r ? t.schema("hf").from("user_account_alias").select("internal_account_id, alias").eq("user_id", r) : { data: [], error: null }
      ]);
      y.error && console.error("⚠️ Error fetching accounts:", y.error);
      const g = new Map(
        (p.data || []).map((C) => [C.internal_account_id, C.alias])
      ), _ = new Map(
        (y.data || []).map((C) => [C.internal_account_id, C.legal_entity])
      );
      console.log(`📋 Fetched ${_.size} account(s), ${g.size} alias(es)`), d.forEach((C) => {
        C.positions = C.positions.map((D) => {
          let A = D.internal_account_id;
          if (g.has(D.internal_account_id))
            A = g.get(D.internal_account_id);
          else if (_.has(D.internal_account_id)) {
            const M = _.get(D.internal_account_id);
            M && (A = M);
          }
          return {
            ...D,
            account_display_name: A
          };
        });
      });
      const m = Array.from(d.keys());
      if (m.length === 0)
        return console.log("⚠️ No unique symbols found"), [];
      console.log("💰 Fetching market prices for symbols:", m);
      const { data: w, error: S } = await t.schema("hf").from("market_price").select("symbol, market_price").in("symbol", m).order("id", { ascending: !1 });
      S && console.warn("⚠️ Error fetching market prices:", S);
      const T = /* @__PURE__ */ new Map();
      w && w.forEach((C) => {
        T.has(C.symbol) || T.set(C.symbol, C.market_price);
      }), console.log(`📊 Fetched prices for ${T.size} symbol(s)`);
      const b = [];
      d.forEach((C, D) => {
        const A = T.get(D) ?? null, M = A ? C.totalQuantity * A : 0;
        b.push({
          symbolRoot: D,
          totalQuantity: C.totalQuantity,
          currentMarketPrice: A,
          capitalInvested: M,
          positionCount: C.positions.length,
          positions: C.positions
        });
      }), b.sort((C, D) => D.capitalInvested - C.capitalInvested);
      const x = b.slice(0, 20);
      return console.log("✅ Top 20 positions by capital invested:", {
        totalGroups: b.length,
        top20Count: x.length,
        top20Symbols: x.map((C) => `${C.symbolRoot}: $${C.capitalInvested.toFixed(2)}`)
      }), x;
    },
    enabled: !0,
    // Always enabled
    staleTime: 6e4,
    // 1 minute cache
    retry: 2
    // Retry failed queries up to 2 times
  }), a = t.channel("top20-capital-deployed").on(
    "postgres_changes",
    {
      schema: "hf",
      table: "positions",
      event: "*"
    },
    () => {
      console.log("🔄 Positions table changed, invalidating top 20 capital query"), e.invalidateQueries({ queryKey: i });
    }
  ).subscribe();
  return {
    ...n,
    _cleanup: () => {
      var o;
      console.log("🧹 Cleaning up top 20 capital subscription"), (o = a == null ? void 0 : a.unsubscribe) == null || o.call(a);
    }
  };
}
const OC = {
  all: (r) => ["capitalAcrossThesis", r]
};
function NC(r) {
  const t = rg(), e = tv(), i = OC.all(r), n = RC(r), a = ev({
    queryKey: i,
    queryFn: async () => {
      console.log("📊 [CapitalAcrossThesis] Starting query for userId:", r || "all accounts");
      const s = n.data.value;
      if (!s || s.length === 0)
        return console.log("⚠️ No top 20 positions found"), [];
      console.log(`✅ Retrieved ${s.length} top positions`);
      const l = s.map((g) => g.symbolRoot);
      console.log("📋 Symbol roots:", l);
      const { data: u, error: f } = await t.schema("hf").from("positionsAndThesisConnection").select("*").in("symbol_root", l);
      if (f)
        throw console.error("❌ Error fetching thesis connections:", f), f;
      console.log(`🔗 Found ${(u == null ? void 0 : u.length) || 0} thesis connection(s)`);
      const h = /* @__PURE__ */ new Map();
      u && u.forEach((g) => {
        h.has(g.symbol_root) || h.set(g.symbol_root, []), h.get(g.symbol_root).push(g.thesis_id);
      });
      const v = Array.from(
        new Set(
          (u == null ? void 0 : u.map((g) => g.thesis_id)) || []
        )
      );
      let c = /* @__PURE__ */ new Map();
      if (v.length > 0) {
        const { data: g, error: _ } = await t.schema("hf").from("thesisMaster").select("*").in("id", v);
        if (_)
          throw console.error("❌ Error fetching thesis master:", _), _;
        console.log(`📚 Fetched ${(g == null ? void 0 : g.length) || 0} thesis record(s)`), g && g.forEach((w) => {
          c.set(w.id, w);
        });
        const m = Array.from(
          new Set(
            (g == null ? void 0 : g.map((w) => w.parent_thesis_id).filter((w) => w !== null)) || []
          )
        );
        if (m.length > 0) {
          const { data: w, error: S } = await t.schema("hf").from("thesisMaster").select("*").in("id", m);
          S && console.error("❌ Error fetching parent thesis:", S), console.log(`👪 Fetched ${(w == null ? void 0 : w.length) || 0} parent thesis record(s)`), w && w.forEach((T) => {
            c.set(T.id, T);
          });
        }
      }
      const d = /* @__PURE__ */ new Map(), y = (g, _, m = null, w = null) => {
        const S = g || "UNASSIGNED";
        return d.has(S) || d.set(S, {
          thesisId: g,
          thesisTitle: _,
          parentThesisId: m,
          parentThesisTitle: w,
          totalCapital: 0,
          symbols: /* @__PURE__ */ new Map()
        }), d.get(S);
      };
      s.forEach((g) => {
        const _ = g.symbolRoot, m = h.get(_) || [];
        if (m.length === 0) {
          const w = y(null, "Unassigned");
          w.totalCapital += g.capitalInvested, w.symbols.set(_, {
            symbolRoot: g.symbolRoot,
            capitalInvested: g.capitalInvested,
            totalQuantity: g.totalQuantity,
            currentMarketPrice: g.currentMarketPrice,
            positionCount: g.positionCount
          });
        } else {
          const w = g.capitalInvested / m.length;
          m.forEach((S) => {
            const T = c.get(S);
            if (!T) {
              console.warn(`⚠️ Thesis ${S} not found in thesisMaster`);
              return;
            }
            let b = null;
            if (T.parent_thesis_id) {
              const D = c.get(T.parent_thesis_id);
              b = (D == null ? void 0 : D.title) || null;
            }
            const x = y(
              T.id,
              T.title,
              T.parent_thesis_id,
              b
            );
            x.totalCapital += w;
            const C = x.symbols.get(_);
            C ? C.capitalInvested += w : x.symbols.set(_, {
              symbolRoot: g.symbolRoot,
              capitalInvested: w,
              totalQuantity: g.totalQuantity,
              currentMarketPrice: g.currentMarketPrice,
              positionCount: g.positionCount
            });
          });
        }
      });
      const p = [];
      return d.forEach((g) => {
        p.push({
          thesisId: g.thesisId,
          thesisTitle: g.thesisTitle,
          parentThesisId: g.parentThesisId,
          parentThesisTitle: g.parentThesisTitle,
          totalCapital: g.totalCapital,
          symbolCount: g.symbols.size,
          symbols: Array.from(g.symbols.values())
        });
      }), p.sort((g, _) => _.totalCapital - g.totalCapital), console.log("✅ Capital across thesis calculated:", {
        thesisCount: p.length,
        totalCapital: p.reduce((g, _) => g + _.totalCapital, 0),
        breakdown: p.map((g) => ({
          thesis: g.thesisTitle,
          parent: g.parentThesisTitle || "none",
          capital: `$${g.totalCapital.toFixed(2)}`,
          symbols: g.symbolCount
        }))
      }), p;
    },
    enabled: jt(() => !!n.data.value && n.data.value.length > 0),
    // Only run when top20 data is available
    staleTime: 6e4,
    // 1 minute cache
    retry: 2
  }), o = t.channel("capital-across-thesis").on(
    "postgres_changes",
    {
      schema: "hf",
      table: "positionsAndThesisConnection",
      event: "*"
    },
    () => {
      console.log("🔄 positionsAndThesisConnection changed, invalidating query"), e.invalidateQueries({ queryKey: i });
    }
  ).on(
    "postgres_changes",
    {
      schema: "hf",
      table: "thesisMaster",
      event: "*"
    },
    () => {
      console.log("🔄 thesisMaster changed, invalidating query"), e.invalidateQueries({ queryKey: i });
    }
  ).subscribe();
  return {
    ...a,
    _cleanup: () => {
      var s;
      console.log("🧹 Cleaning up capital across thesis subscription"), (s = o == null ? void 0 : o.unsubscribe) == null || s.call(o);
    }
  };
}
const kC = { class: "capital-across-thesis-view" }, BC = {
  key: 0,
  class: "loading"
}, FC = {
  key: 1,
  class: "error"
}, VC = {
  key: 2,
  class: "content"
}, zC = { class: "breadcrumb" }, HC = ["onClick"], GC = {
  key: 0,
  class: "separator"
}, UC = { class: "chart-container" }, WC = { class: "instructions" }, YC = { key: 0 }, $C = { key: 1 }, XC = { key: 2 }, qC = { class: "summary-stats" }, ZC = { class: "stat-card" }, KC = { class: "stat-value" }, QC = { class: "stat-card" }, jC = { class: "stat-value" }, JC = { class: "stat-card" }, tx = { class: "stat-value" }, ex = { class: "stat-card" }, rx = { class: "stat-value" }, ix = {
  key: 3,
  class: "empty-state"
}, nx = /* @__PURE__ */ Kc({
  __name: "CapitalAcrossThesis",
  props: {
    userId: { default: "4fbec15d-2316-4805-b2a4-5cd2115a5ac8" }
  },
  setup(r) {
    Mi([
      kT,
      ZT,
      rC,
      Jb,
      cC
    ]);
    const t = r, { data: e, isLoading: i, error: n } = NC(t.userId), a = $n([
      { label: "All Thesis", level: "parent" }
    ]), o = $n("parent"), s = $n(null), l = $n(null), u = (w) => w >= 1e6 ? `$${(w / 1e6).toFixed(2)}M` : w >= 1e3 ? `$${(w / 1e3).toFixed(2)}K` : `$${w.toFixed(2)}`, f = (w) => {
      const S = [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc",
        "#d4ec59",
        "#5ab1ef",
        "#ffb980",
        "#d87a80",
        "#8d98b3",
        "#e5cf0d"
      ];
      return S[w % S.length];
    }, h = jt(() => {
      if (!e.value || e.value.length === 0) return [];
      const w = /* @__PURE__ */ new Map();
      return e.value.forEach((S) => {
        const T = S.parentThesisId || "NO_PARENT", b = S.parentThesisTitle || (S.thesisId === null ? "Unassigned" : "No Parent Thesis");
        w.has(T) || w.set(T, {
          parentThesisId: S.parentThesisId,
          parentThesisTitle: b,
          totalCapital: 0,
          childTheses: []
        });
        const x = w.get(T);
        x.totalCapital += S.totalCapital, x.childTheses.push(S);
      }), Array.from(w.values()).sort((S, T) => T.totalCapital - S.totalCapital);
    }), v = jt(() => {
      if (!s.value) return [];
      const w = h.value.find(
        (S) => (S.parentThesisId || "NO_PARENT") === s.value
      );
      return (w == null ? void 0 : w.childTheses) || [];
    }), c = jt(() => {
      var S;
      if (!l.value) return [];
      const w = (S = e.value) == null ? void 0 : S.find(
        (T) => (T.thesisId || "UNASSIGNED") === l.value
      );
      return (w == null ? void 0 : w.symbols) || [];
    }), d = jt(() => {
      var w;
      if (o.value === "parent")
        return "Capital Distribution by Parent Thesis";
      if (o.value === "child") {
        const S = h.value.find(
          (T) => (T.parentThesisId || "NO_PARENT") === s.value
        );
        return `Child Thesis under "${S == null ? void 0 : S.parentThesisTitle}"`;
      } else {
        const S = (w = e.value) == null ? void 0 : w.find(
          (T) => (T.thesisId || "UNASSIGNED") === l.value
        );
        return `Symbols in "${S == null ? void 0 : S.thesisTitle}"`;
      }
    }), y = jt(() => {
      if (o.value === "parent") {
        const w = h.value.reduce((S, T) => S + T.totalCapital, 0);
        return `Total Capital: ${u(w)}`;
      } else if (o.value === "child") {
        const w = v.value.reduce((S, T) => S + T.totalCapital, 0);
        return `Total Capital: ${u(w)}`;
      } else {
        const w = c.value.reduce((S, T) => S + T.capitalInvested, 0);
        return `Total Capital: ${u(w)}`;
      }
    }), p = jt(() => {
      let w = [];
      return o.value === "parent" ? w = h.value.map((S, T) => ({
        name: S.parentThesisTitle,
        value: S.totalCapital,
        itemStyle: { color: f(T) },
        // Store parent ID for drill-down
        parentThesisId: S.parentThesisId || "NO_PARENT"
      })) : o.value === "child" ? w = v.value.map((S, T) => ({
        name: S.thesisTitle,
        value: S.totalCapital,
        itemStyle: { color: f(T) },
        // Store child thesis ID for drill-down
        thesisId: S.thesisId || "UNASSIGNED"
      })) : w = c.value.map((S, T) => ({
        name: S.symbolRoot,
        value: S.capitalInvested,
        itemStyle: { color: f(T) }
      })), {
        title: {
          subtext: y.value,
          left: "center",
          top: 10,
          textStyle: {
            fontSize: 13,
            fontWeight: "normal",
            color: "#1565c0",
            lineHeight: 20
          },
          subtextStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#333"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: (S) => {
            const T = S.percent.toFixed(2), b = u(S.value);
            return `<strong>${S.name}</strong><br/>Capital: ${b}<br/>Percentage: ${T}%`;
          }
        },
        legend: {
          orient: "vertical",
          right: 110,
          top: "center",
          type: "scroll",
          pageButtonPosition: "end",
          formatter: (S) => {
            const T = w.find((b) => b.name === S);
            return T ? `${S}: ${u(T.value)}` : S;
          }
        },
        series: [
          {
            name: d.value,
            type: "pie",
            radius: ["40%", "70%"],
            // Donut chart
            center: ["35%", "50%"],
            avoidLabelOverlap: !0,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: !0,
              formatter: (S) => `${S.name}
${S.percent.toFixed(1)}%`
            },
            emphasis: {
              label: {
                show: !0,
                fontSize: 16,
                fontWeight: "bold"
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: w
          }
        ]
      };
    }), g = xa(), _ = (w) => {
      if (console.log("🖱️ Chart clicked!", {
        currentView: o.value,
        clickedData: w.data,
        name: w.name
      }), o.value === "parent") {
        const S = w.data.parentThesisId;
        console.log("⬇️ Drilling down to child thesis:", S), s.value = S, o.value = "child", a.value.push({
          label: w.name,
          level: "child",
          parentThesisId: S
        });
      } else if (o.value === "child") {
        const S = w.data.thesisId;
        console.log("⬇️ Drilling down to symbols:", S), l.value = S, o.value = "symbol", a.value.push({
          label: w.name,
          level: "symbol",
          thesisId: S
        });
      } else
        console.log("ℹ️ Already at symbol level, no further drill-down");
    }, m = (w) => {
      const S = a.value[w];
      S.level === "parent" ? (o.value = "parent", s.value = null, l.value = null) : S.level === "child" ? (o.value = "child", s.value = S.parentThesisId || null, l.value = null) : S.level === "symbol" && (o.value = "symbol", l.value = S.thesisId || null), a.value = a.value.slice(0, w + 1);
    };
    return dn(e, async (w) => {
      w && w.length > 0 && (console.log("📊 Thesis data loaded, waiting for chart to render..."), await Jc(), setTimeout(() => {
        var S;
        if (console.log("⏰ Attempting to attach event listener..."), console.log("📊 chartRef.value:", g.value), g.value) {
          console.log("✅ chartRef.value exists");
          const T = (S = g.value) == null ? void 0 : S.chart;
          console.log("📊 Chart instance:", T), T ? (console.log("✅ Attaching click handler to chart instance"), T.on("click", _)) : (console.error("❌ Chart instance not found"), console.log("📊 Available properties:", Object.keys(g.value)));
        } else
          console.error("❌ chartRef.value is still null/undefined");
      }, 300));
    }, { immediate: !0 }), jc(() => {
      var w;
      if (g.value) {
        const S = (w = g.value) == null ? void 0 : w.chart;
        S && S.off("click", _);
      }
    }), (w, S) => (de(), ve("div", kC, [
      S[9] || (S[9] = lt("h2", null, "Capital Deployment by Investment Thesis", -1)),
      S[10] || (S[10] = lt("p", { class: "subtitle" }, "Analyze capital deployment across investment theses with drill-down capability", -1)),
      Ae(i) || !Ae(e) ? (de(), ve("div", BC, [...S[0] || (S[0] = [
        lt("p", null, "Loading capital data...", -1)
      ])])) : Ae(n) ? (de(), ve("div", FC, [
        lt("p", null, "Error loading data: " + Kr(Ae(n)), 1)
      ])) : Ae(e).length > 0 ? (de(), ve("div", VC, [
        lt("div", zC, [
          (de(!0), ve(fg, null, hg(a.value, (T, b) => (de(), ve("span", {
            key: b,
            class: cg(["breadcrumb-item", { active: b === a.value.length - 1 }]),
            onClick: (x) => m(b)
          }, [
            dr(Kr(T.label) + " ", 1),
            b < a.value.length - 1 ? (de(), ve("span", GC, "›")) : vg("", !0)
          ], 10, HC))), 128))
        ]),
        lt("div", UC, [
          dg(Ae(EC), {
            ref_key: "chartRef",
            ref: g,
            class: "chart",
            option: p.value,
            autoresize: ""
          }, null, 8, ["option"])
        ]),
        lt("div", WC, [
          o.value === "parent" ? (de(), ve("p", YC, [...S[1] || (S[1] = [
            dr(" 💡 ", -1),
            lt("strong", null, "Click on any parent thesis slice", -1),
            dr(" to drill down into child theses ", -1)
          ])])) : o.value === "child" ? (de(), ve("p", $C, [...S[2] || (S[2] = [
            dr(" 💡 ", -1),
            lt("strong", null, "Click on any child thesis slice", -1),
            dr(" to see symbols, or use breadcrumb to go back ", -1)
          ])])) : (de(), ve("p", XC, [...S[3] || (S[3] = [
            dr(" 💡 ", -1),
            lt("strong", null, "Symbol level reached", -1),
            dr(" - Use breadcrumb navigation to go back ", -1)
          ])]))
        ]),
        lt("div", qC, [
          lt("div", ZC, [
            S[4] || (S[4] = lt("div", { class: "stat-label" }, "Total Thesis Groups", -1)),
            lt("div", KC, Kr(h.value.length), 1)
          ]),
          lt("div", QC, [
            S[5] || (S[5] = lt("div", { class: "stat-label" }, "Total Child Theses", -1)),
            lt("div", jC, Kr(Ae(e).length), 1)
          ]),
          lt("div", JC, [
            S[6] || (S[6] = lt("div", { class: "stat-label" }, "Total Capital Deployed", -1)),
            lt("div", tx, Kr(u(Ae(e).reduce((T, b) => T + b.totalCapital, 0))), 1)
          ]),
          lt("div", ex, [
            S[7] || (S[7] = lt("div", { class: "stat-label" }, "Unique Symbols", -1)),
            lt("div", rx, Kr(new Set(Ae(e).flatMap((T) => T.symbols.map((b) => b.symbolRoot))).size), 1)
          ])
        ])
      ])) : (de(), ve("div", ix, [...S[8] || (S[8] = [
        lt("p", null, "No capital data available. Please check your positions and thesis assignments.", -1)
      ])]))
    ]));
  }
}), ax = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [i, n] of t)
    e[i] = n;
  return e;
}, lx = /* @__PURE__ */ ax(nx, [["__scopeId", "data-v-c78f7b84"]]);
export {
  lx as capitalAcrossThesis,
  lx as default
};
