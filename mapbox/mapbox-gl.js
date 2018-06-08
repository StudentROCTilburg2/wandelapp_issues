(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.mapboxgl = f()
    }
})(function () {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {exports: {}};
                t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }

        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function (_dereq_, module, exports) {
            !function (t, r) {
                "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : t.glMatrix = r()
            }(this, function () {
                "use strict";

                function t() {
                    var t = new Float32Array(3);
                    return t[0] = 0, t[1] = 0, t[2] = 0, t
                }

                function r(t, r, n) {
                    var e = r[0], a = r[1], o = r[2];
                    return t[0] = e * n[0] + a * n[3] + o * n[6], t[1] = e * n[1] + a * n[4] + o * n[7], t[2] = e * n[2] + a * n[5] + o * n[8], t
                }

                function n() {
                    var t = new Float32Array(4);
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
                }

                function e(t, r, n) {
                    var e = r[0], a = r[1], o = r[2], u = r[3];
                    return t[0] = n[0] * e + n[4] * a + n[8] * o + n[12] * u, t[1] = n[1] * e + n[5] * a + n[9] * o + n[13] * u, t[2] = n[2] * e + n[6] * a + n[10] * o + n[14] * u, t[3] = n[3] * e + n[7] * a + n[11] * o + n[15] * u, t
                }

                function a() {
                    var t = new Float32Array(4);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                }

                function o(t, r, n) {
                    var e = r[0], a = r[1], o = r[2], u = r[3], i = Math.sin(n), c = Math.cos(n);
                    return t[0] = e * c + o * i, t[1] = a * c + u * i, t[2] = e * -i + o * c, t[3] = a * -i + u * c, t
                }

                function u(t, r, n) {
                    var e = r[0], a = r[1], o = r[2], u = r[3], i = n[0], c = n[1];
                    return t[0] = e * i, t[1] = a * i, t[2] = o * c, t[3] = u * c, t
                }

                function i() {
                    var t = new Float32Array(9);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }

                function c(t, r) {
                    var n = Math.sin(r), e = Math.cos(r);
                    return t[0] = e, t[1] = n, t[2] = 0, t[3] = -n, t[4] = e, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }

                function f() {
                    var t = new Float32Array(16);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }

                function v(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }

                function s(t, r) {
                    var n = r[0], e = r[1], a = r[2], o = r[3], u = r[4], i = r[5], c = r[6], f = r[7], v = r[8],
                        s = r[9], l = r[10], M = r[11], h = r[12], m = r[13], y = r[14], d = r[15], p = n * i - e * u,
                        w = n * c - a * u, A = n * f - o * u, F = e * c - a * i, x = e * f - o * i, b = a * f - o * c,
                        g = v * m - s * h, j = v * y - l * h, R = v * d - M * h, X = s * y - l * m, Z = s * d - M * m,
                        k = l * d - M * y, q = p * k - w * Z + A * X + F * R - x * j + b * g;
                    return q ? (q = 1 / q, t[0] = (i * k - c * Z + f * X) * q, t[1] = (a * Z - e * k - o * X) * q, t[2] = (m * b - y * x + d * F) * q, t[3] = (l * x - s * b - M * F) * q, t[4] = (c * R - u * k - f * j) * q, t[5] = (n * k - a * R + o * j) * q, t[6] = (y * A - h * b - d * w) * q, t[7] = (v * b - l * A + M * w) * q, t[8] = (u * Z - i * R + f * g) * q, t[9] = (e * R - n * Z - o * g) * q, t[10] = (h * x - m * A + d * p) * q, t[11] = (s * A - v * x - M * p) * q, t[12] = (i * j - u * X - c * g) * q, t[13] = (n * X - e * j + a * g) * q, t[14] = (m * w - h * F - y * p) * q, t[15] = (v * F - s * w + l * p) * q, t) : null
                }

                function l(t, r, n) {
                    var e = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], f = r[6], v = r[7], s = r[8],
                        l = r[9], M = r[10], h = r[11], m = r[12], y = r[13], d = r[14], p = r[15], w = n[0], A = n[1],
                        F = n[2], x = n[3];
                    return t[0] = w * e + A * i + F * s + x * m, t[1] = w * a + A * c + F * l + x * y, t[2] = w * o + A * f + F * M + x * d, t[3] = w * u + A * v + F * h + x * p, w = n[4], A = n[5], F = n[6], x = n[7], t[4] = w * e + A * i + F * s + x * m, t[5] = w * a + A * c + F * l + x * y, t[6] = w * o + A * f + F * M + x * d, t[7] = w * u + A * v + F * h + x * p, w = n[8], A = n[9], F = n[10], x = n[11], t[8] = w * e + A * i + F * s + x * m, t[9] = w * a + A * c + F * l + x * y, t[10] = w * o + A * f + F * M + x * d, t[11] = w * u + A * v + F * h + x * p, w = n[12], A = n[13], F = n[14], x = n[15], t[12] = w * e + A * i + F * s + x * m, t[13] = w * a + A * c + F * l + x * y, t[14] = w * o + A * f + F * M + x * d, t[15] = w * u + A * v + F * h + x * p, t
                }

                function M(t, r, n) {
                    var e, a, o, u, i, c, f, v, s, l, M, h, m = n[0], y = n[1], d = n[2];
                    return r === t ? (t[12] = r[0] * m + r[4] * y + r[8] * d + r[12], t[13] = r[1] * m + r[5] * y + r[9] * d + r[13], t[14] = r[2] * m + r[6] * y + r[10] * d + r[14], t[15] = r[3] * m + r[7] * y + r[11] * d + r[15]) : (e = r[0], a = r[1], o = r[2], u = r[3], i = r[4], c = r[5], f = r[6], v = r[7], s = r[8], l = r[9], M = r[10], h = r[11], t[0] = e, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = c, t[6] = f, t[7] = v, t[8] = s, t[9] = l, t[10] = M, t[11] = h, t[12] = e * m + i * y + s * d + r[12], t[13] = a * m + c * y + l * d + r[13], t[14] = o * m + f * y + M * d + r[14], t[15] = u * m + v * y + h * d + r[15]), t
                }

                function h(t, r, n) {
                    var e = n[0], a = n[1], o = n[2];
                    return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * a, t[5] = r[5] * a, t[6] = r[6] * a, t[7] = r[7] * a, t[8] = r[8] * o, t[9] = r[9] * o, t[10] = r[10] * o, t[11] = r[11] * o, t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15], t
                }

                function m(t, r, n) {
                    var e = Math.sin(n), a = Math.cos(n), o = r[4], u = r[5], i = r[6], c = r[7], f = r[8], v = r[9],
                        s = r[10], l = r[11];
                    return r !== t && (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[4] = o * a + f * e, t[5] = u * a + v * e, t[6] = i * a + s * e, t[7] = c * a + l * e, t[8] = f * a - o * e, t[9] = v * a - u * e, t[10] = s * a - i * e, t[11] = l * a - c * e, t
                }

                function y(t, r, n) {
                    var e = Math.sin(n), a = Math.cos(n), o = r[0], u = r[1], i = r[2], c = r[3], f = r[4], v = r[5],
                        s = r[6], l = r[7];
                    return r !== t && (t[8] = r[8], t[9] = r[9], t[10] = r[10], t[11] = r[11], t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t[0] = o * a + f * e, t[1] = u * a + v * e, t[2] = i * a + s * e, t[3] = c * a + l * e, t[4] = f * a - o * e, t[5] = v * a - u * e, t[6] = s * a - i * e, t[7] = l * a - c * e, t
                }

                function d(t, r, n, e, a) {
                    var o = 1 / Math.tan(r / 2), u = 1 / (e - a);
                    return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + e) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * a * e * u, t[15] = 0, t
                }

                function p(t, r, n, e, a, o, u) {
                    var i = 1 / (r - n), c = 1 / (e - a), f = 1 / (o - u);
                    return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (r + n) * i, t[13] = (a + e) * c, t[14] = (u + o) * f, t[15] = 1, t
                }

                var w = (t(), n(), {
                    vec3: {transformMat3: r},
                    vec4: {transformMat4: e},
                    mat2: {create: a, rotate: o, scale: u},
                    mat3: {create: i, fromRotation: c},
                    mat4: {
                        create: f,
                        identity: v,
                        translate: M,
                        scale: h,
                        multiply: l,
                        perspective: d,
                        rotateX: m,
                        rotateZ: y,
                        invert: s,
                        ortho: p
                    }
                });
                return w
            });
        }, {}],
        2: [function (_dereq_, module, exports) {
            !function (t, e) {
                "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ShelfPack = e()
            }(this, function () {
                function t(t, e, i) {
                    i = i || {}, this.w = t || 64, this.h = e || 64, this.autoResize = !!i.autoResize, this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0
                }

                function e(t, e, i) {
                    this.x = 0, this.y = t, this.w = this.free = e, this.h = i
                }

                function i(t, e, i, s, h, n, r) {
                    this.id = t, this.x = e, this.y = i, this.w = s, this.h = h, this.maxw = n || s, this.maxh = r || h, this.refcount = 0
                }

                return t.prototype.pack = function (t, e) {
                    t = [].concat(t), e = e || {};
                    for (var i, s, h, n, r = [], f = 0; f < t.length; f++) if (i = t[f].w || t[f].width, s = t[f].h || t[f].height, h = t[f].id, i && s) {
                        if (n = this.packOne(i, s, h), !n) continue;
                        e.inPlace && (t[f].x = n.x, t[f].y = n.y, t[f].id = n.id), r.push(n)
                    }
                    if (this.shelves.length > 0) {
                        for (var o = 0, a = 0, u = 0; u < this.shelves.length; u++) {
                            var l = this.shelves[u];
                            a += l.h, o = Math.max(l.w - l.free, o)
                        }
                        this.resize(o, a)
                    }
                    return r
                }, t.prototype.packOne = function (t, i, s) {
                    var h, n, r, f, o = {freebin: -1, shelf: -1, waste: 1 / 0}, a = 0;
                    if ("string" == typeof s || "number" == typeof s) {
                        if (h = this.getBin(s)) return this.ref(h), h;
                        "number" == typeof s && (this.maxId = Math.max(s, this.maxId))
                    } else s = ++this.maxId;
                    for (f = 0; f < this.freebins.length; f++) {
                        if (h = this.freebins[f], i === h.maxh && t === h.maxw) return this.allocFreebin(f, t, i, s);
                        i > h.maxh || t > h.maxw || i <= h.maxh && t <= h.maxw && (r = h.maxw * h.maxh - t * i, r < o.waste && (o.waste = r, o.freebin = f))
                    }
                    for (f = 0; f < this.shelves.length; f++) if (n = this.shelves[f], a += n.h, !(t > n.free)) {
                        if (i === n.h) return this.allocShelf(f, t, i, s);
                        i > n.h || i < n.h && (r = (n.h - i) * t, r < o.waste && (o.freebin = -1, o.waste = r, o.shelf = f))
                    }
                    if (o.freebin !== -1) return this.allocFreebin(o.freebin, t, i, s);
                    if (o.shelf !== -1) return this.allocShelf(o.shelf, t, i, s);
                    if (i <= this.h - a && t <= this.w) return n = new e(a, this.w, i), this.allocShelf(this.shelves.push(n) - 1, t, i, s);
                    if (this.autoResize) {
                        var u, l, c, p;
                        return u = l = this.h, c = p = this.w, (c <= u || t > c) && (p = 2 * Math.max(t, c)), (u < c || i > u) && (l = 2 * Math.max(i, u)), this.resize(p, l), this.packOne(t, i, s)
                    }
                    return null
                }, t.prototype.allocFreebin = function (t, e, i, s) {
                    var h = this.freebins.splice(t, 1)[0];
                    return h.id = s, h.w = e, h.h = i, h.refcount = 0, this.bins[s] = h, this.ref(h), h
                }, t.prototype.allocShelf = function (t, e, i, s) {
                    var h = this.shelves[t], n = h.alloc(e, i, s);
                    return this.bins[s] = n, this.ref(n), n
                }, t.prototype.getBin = function (t) {
                    return this.bins[t]
                }, t.prototype.ref = function (t) {
                    if (1 === ++t.refcount) {
                        var e = t.h;
                        this.stats[e] = (0 | this.stats[e]) + 1
                    }
                    return t.refcount
                }, t.prototype.unref = function (t) {
                    return 0 === t.refcount ? 0 : (0 === --t.refcount && (this.stats[t.h]--, delete this.bins[t.id], this.freebins.push(t)), t.refcount)
                }, t.prototype.clear = function () {
                    this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0
                }, t.prototype.resize = function (t, e) {
                    this.w = t, this.h = e;
                    for (var i = 0; i < this.shelves.length; i++) this.shelves[i].resize(t);
                    return !0
                }, e.prototype.alloc = function (t, e, s) {
                    if (t > this.free || e > this.h) return null;
                    var h = this.x;
                    return this.x += t, this.free -= t, new i(s, h, this.y, t, e, t, this.h)
                }, e.prototype.resize = function (t) {
                    return this.free += t - this.w, this.w = t, !0
                }, t
            });
        }, {}],
        3: [function (_dereq_, module, exports) {
            function UnitBezier(t, i, e, r) {
                this.cx = 3 * t, this.bx = 3 * (e - t) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * i, this.by = 3 * (r - i) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = t, this.p1y = r, this.p2x = e, this.p2y = r
            }

            module.exports = UnitBezier, UnitBezier.prototype.sampleCurveX = function (t) {
                return ((this.ax * t + this.bx) * t + this.cx) * t
            }, UnitBezier.prototype.sampleCurveY = function (t) {
                return ((this.ay * t + this.by) * t + this.cy) * t
            }, UnitBezier.prototype.sampleCurveDerivativeX = function (t) {
                return (3 * this.ax * t + 2 * this.bx) * t + this.cx
            }, UnitBezier.prototype.solveCurveX = function (t, i) {
                "undefined" == typeof i && (i = 1e-6);
                var e, r, s, h, n;
                for (s = t, n = 0; n < 8; n++) {
                    if (h = this.sampleCurveX(s) - t, Math.abs(h) < i) return s;
                    var u = this.sampleCurveDerivativeX(s);
                    if (Math.abs(u) < 1e-6) break;
                    s -= h / u
                }
                if (e = 0, r = 1, s = t, s < e) return e;
                if (s > r) return r;
                for (; e < r;) {
                    if (h = this.sampleCurveX(s), Math.abs(h - t) < i) return s;
                    t > h ? e = s : r = s, s = .5 * (r - e) + e
                }
                return s
            }, UnitBezier.prototype.solve = function (t, i) {
                return this.sampleCurveY(this.solveCurveX(t, i))
            };
        }, {}],
        4: [function (_dereq_, module, exports) {
            !function (e, t) {
                "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.WhooTS = e.WhooTS || {})
            }(this, function (e) {
                function t(e, t, r, n, i, s) {
                    s = s || {};
                    var f = e + "?" + ["bbox=" + o(r, n, i), "format=" + (s.format || "image/png"), "service=" + (s.service || "WMS"), "version=" + (s.version || "1.1.1"), "request=" + (s.request || "GetMap"), "srs=" + (s.srs || "EPSG:3857"), "width=" + (s.width || 256), "height=" + (s.height || 256), "layers=" + t].join("&");
                    return f
                }

                function o(e, t, o) {
                    t = Math.pow(2, o) - t - 1;
                    var n = r(256 * e, 256 * t, o), i = r(256 * (e + 1), 256 * (t + 1), o);
                    return n[0] + "," + n[1] + "," + i[0] + "," + i[1]
                }

                function r(e, t, o) {
                    var r = 2 * Math.PI * 6378137 / 256 / Math.pow(2, o), n = e * r - 2 * Math.PI * 6378137 / 2,
                        i = t * r - 2 * Math.PI * 6378137 / 2;
                    return [n, i]
                }

                e.getURL = t, e.getTileBBox = o, e.getMercCoords = r, Object.defineProperty(e, "__esModule", {value: !0})
            });
        }, {}],
        5: [function (_dereq_, module, exports) {
            "use strict";

            function earcut(e, n, r) {
                r = r || 2;
                var t = n && n.length, i = t ? n[0] * r : e.length, x = linkedList(e, 0, i, r, !0), a = [];
                if (!x) return a;
                var o, l, u, s, v, f, y;
                if (t && (x = eliminateHoles(e, n, x, r)), e.length > 80 * r) {
                    o = u = e[0], l = s = e[1];
                    for (var d = r; d < i; d += r) v = e[d], f = e[d + 1], v < o && (o = v), f < l && (l = f), v > u && (u = v), f > s && (s = f);
                    y = Math.max(u - o, s - l)
                }
                return earcutLinked(x, a, r, o, l, y), a
            }

            function linkedList(e, n, r, t, i) {
                var x, a;
                if (i === signedArea(e, n, r, t) > 0) for (x = n; x < r; x += t) a = insertNode(x, e[x], e[x + 1], a); else for (x = r - t; x >= n; x -= t) a = insertNode(x, e[x], e[x + 1], a);
                return a && equals(a, a.next) && (removeNode(a), a = a.next), a
            }

            function filterPoints(e, n) {
                if (!e) return e;
                n || (n = e);
                var r, t = e;
                do if (r = !1, t.steiner || !equals(t, t.next) && 0 !== area(t.prev, t, t.next)) t = t.next; else {
                    if (removeNode(t), t = n = t.prev, t === t.next) return null;
                    r = !0
                } while (r || t !== n);
                return n
            }

            function earcutLinked(e, n, r, t, i, x, a) {
                if (e) {
                    !a && x && indexCurve(e, t, i, x);
                    for (var o, l, u = e; e.prev !== e.next;) if (o = e.prev, l = e.next, x ? isEarHashed(e, t, i, x) : isEar(e)) n.push(o.i / r), n.push(e.i / r), n.push(l.i / r), removeNode(e), e = l.next, u = l.next; else if (e = l, e === u) {
                        a ? 1 === a ? (e = cureLocalIntersections(e, n, r), earcutLinked(e, n, r, t, i, x, 2)) : 2 === a && splitEarcut(e, n, r, t, i, x) : earcutLinked(filterPoints(e), n, r, t, i, x, 1);
                        break
                    }
                }
            }

            function isEar(e) {
                var n = e.prev, r = e, t = e.next;
                if (area(n, r, t) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev;) {
                    if (pointInTriangle(n.x, n.y, r.x, r.y, t.x, t.y, i.x, i.y) && area(i.prev, i, i.next) >= 0) return !1;
                    i = i.next
                }
                return !0
            }

            function isEarHashed(e, n, r, t) {
                var i = e.prev, x = e, a = e.next;
                if (area(i, x, a) >= 0) return !1;
                for (var o = i.x < x.x ? i.x < a.x ? i.x : a.x : x.x < a.x ? x.x : a.x, l = i.y < x.y ? i.y < a.y ? i.y : a.y : x.y < a.y ? x.y : a.y, u = i.x > x.x ? i.x > a.x ? i.x : a.x : x.x > a.x ? x.x : a.x, s = i.y > x.y ? i.y > a.y ? i.y : a.y : x.y > a.y ? x.y : a.y, v = zOrder(o, l, n, r, t), f = zOrder(u, s, n, r, t), y = e.nextZ; y && y.z <= f;) {
                    if (y !== e.prev && y !== e.next && pointInTriangle(i.x, i.y, x.x, x.y, a.x, a.y, y.x, y.y) && area(y.prev, y, y.next) >= 0) return !1;
                    y = y.nextZ
                }
                for (y = e.prevZ; y && y.z >= v;) {
                    if (y !== e.prev && y !== e.next && pointInTriangle(i.x, i.y, x.x, x.y, a.x, a.y, y.x, y.y) && area(y.prev, y, y.next) >= 0) return !1;
                    y = y.prevZ
                }
                return !0
            }

            function cureLocalIntersections(e, n, r) {
                var t = e;
                do {
                    var i = t.prev, x = t.next.next;
                    !equals(i, x) && intersects(i, t, t.next, x) && locallyInside(i, x) && locallyInside(x, i) && (n.push(i.i / r), n.push(t.i / r), n.push(x.i / r), removeNode(t), removeNode(t.next), t = e = x), t = t.next
                } while (t !== e);
                return t
            }

            function splitEarcut(e, n, r, t, i, x) {
                var a = e;
                do {
                    for (var o = a.next.next; o !== a.prev;) {
                        if (a.i !== o.i && isValidDiagonal(a, o)) {
                            var l = splitPolygon(a, o);
                            return a = filterPoints(a, a.next), l = filterPoints(l, l.next), earcutLinked(a, n, r, t, i, x), void earcutLinked(l, n, r, t, i, x)
                        }
                        o = o.next
                    }
                    a = a.next
                } while (a !== e)
            }

            function eliminateHoles(e, n, r, t) {
                var i, x, a, o, l, u = [];
                for (i = 0, x = n.length; i < x; i++) a = n[i] * t, o = i < x - 1 ? n[i + 1] * t : e.length, l = linkedList(e, a, o, t, !1), l === l.next && (l.steiner = !0), u.push(getLeftmost(l));
                for (u.sort(compareX), i = 0; i < u.length; i++) eliminateHole(u[i], r), r = filterPoints(r, r.next);
                return r
            }

            function compareX(e, n) {
                return e.x - n.x
            }

            function eliminateHole(e, n) {
                if (n = findHoleBridge(e, n)) {
                    var r = splitPolygon(n, e);
                    filterPoints(r, r.next)
                }
            }

            function findHoleBridge(e, n) {
                var r, t = n, i = e.x, x = e.y, a = -(1 / 0);
                do {
                    if (x <= t.y && x >= t.next.y) {
                        var o = t.x + (x - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
                        if (o <= i && o > a) {
                            if (a = o, o === i) {
                                if (x === t.y) return t;
                                if (x === t.next.y) return t.next
                            }
                            r = t.x < t.next.x ? t : t.next
                        }
                    }
                    t = t.next
                } while (t !== n);
                if (!r) return null;
                if (i === a) return r.prev;
                var l, u = r, s = r.x, v = r.y, f = 1 / 0;
                for (t = r.next; t !== u;) i >= t.x && t.x >= s && pointInTriangle(x < v ? i : a, x, s, v, x < v ? a : i, x, t.x, t.y) && (l = Math.abs(x - t.y) / (i - t.x), (l < f || l === f && t.x > r.x) && locallyInside(t, e) && (r = t, f = l)), t = t.next;
                return r
            }

            function indexCurve(e, n, r, t) {
                var i = e;
                do null === i.z && (i.z = zOrder(i.x, i.y, n, r, t)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
                i.prevZ.nextZ = null, i.prevZ = null, sortLinked(i)
            }

            function sortLinked(e) {
                var n, r, t, i, x, a, o, l, u = 1;
                do {
                    for (r = e, e = null, x = null, a = 0; r;) {
                        for (a++, t = r, o = 0, n = 0; n < u && (o++, t = t.nextZ, t); n++) ;
                        for (l = u; o > 0 || l > 0 && t;) 0 === o ? (i = t, t = t.nextZ, l--) : 0 !== l && t ? r.z <= t.z ? (i = r, r = r.nextZ, o--) : (i = t, t = t.nextZ, l--) : (i = r, r = r.nextZ, o--), x ? x.nextZ = i : e = i, i.prevZ = x, x = i;
                        r = t
                    }
                    x.nextZ = null, u *= 2
                } while (a > 1);
                return e
            }

            function zOrder(e, n, r, t, i) {
                return e = 32767 * (e - r) / i, n = 32767 * (n - t) / i, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), n = 16711935 & (n | n << 8), n = 252645135 & (n | n << 4), n = 858993459 & (n | n << 2), n = 1431655765 & (n | n << 1), e | n << 1
            }

            function getLeftmost(e) {
                var n = e, r = e;
                do n.x < r.x && (r = n), n = n.next; while (n !== e);
                return r
            }

            function pointInTriangle(e, n, r, t, i, x, a, o) {
                return (i - a) * (n - o) - (e - a) * (x - o) >= 0 && (e - a) * (t - o) - (r - a) * (n - o) >= 0 && (r - a) * (x - o) - (i - a) * (t - o) >= 0
            }

            function isValidDiagonal(e, n) {
                return e.next.i !== n.i && e.prev.i !== n.i && !intersectsPolygon(e, n) && locallyInside(e, n) && locallyInside(n, e) && middleInside(e, n)
            }

            function area(e, n, r) {
                return (n.y - e.y) * (r.x - n.x) - (n.x - e.x) * (r.y - n.y)
            }

            function equals(e, n) {
                return e.x === n.x && e.y === n.y
            }

            function intersects(e, n, r, t) {
                return !!(equals(e, n) && equals(r, t) || equals(e, t) && equals(r, n)) || area(e, n, r) > 0 != area(e, n, t) > 0 && area(r, t, e) > 0 != area(r, t, n) > 0
            }

            function intersectsPolygon(e, n) {
                var r = e;
                do {
                    if (r.i !== e.i && r.next.i !== e.i && r.i !== n.i && r.next.i !== n.i && intersects(r, r.next, e, n)) return !0;
                    r = r.next
                } while (r !== e);
                return !1
            }

            function locallyInside(e, n) {
                return area(e.prev, e, e.next) < 0 ? area(e, n, e.next) >= 0 && area(e, e.prev, n) >= 0 : area(e, n, e.prev) < 0 || area(e, e.next, n) < 0
            }

            function middleInside(e, n) {
                var r = e, t = !1, i = (e.x + n.x) / 2, x = (e.y + n.y) / 2;
                do r.y > x != r.next.y > x && i < (r.next.x - r.x) * (x - r.y) / (r.next.y - r.y) + r.x && (t = !t), r = r.next; while (r !== e);
                return t
            }

            function splitPolygon(e, n) {
                var r = new Node(e.i, e.x, e.y), t = new Node(n.i, n.x, n.y), i = e.next, x = n.prev;
                return e.next = n, n.prev = e, r.next = i, i.prev = r, t.next = r, r.prev = t, x.next = t, t.prev = x, t
            }

            function insertNode(e, n, r, t) {
                var i = new Node(e, n, r);
                return t ? (i.next = t.next, i.prev = t, t.next.prev = i, t.next = i) : (i.prev = i, i.next = i), i
            }

            function removeNode(e) {
                e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
            }

            function Node(e, n, r) {
                this.i = e, this.x = n, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function signedArea(e, n, r, t) {
                for (var i = 0, x = n, a = r - t; x < r; x += t) i += (e[a] - e[x]) * (e[x + 1] + e[a + 1]), a = x;
                return i
            }

            module.exports = earcut, earcut.deviation = function (e, n, r, t) {
                var i = n && n.length, x = i ? n[0] * r : e.length, a = Math.abs(signedArea(e, 0, x, r));
                if (i) for (var o = 0, l = n.length; o < l; o++) {
                    var u = n[o] * r, s = o < l - 1 ? n[o + 1] * r : e.length;
                    a -= Math.abs(signedArea(e, u, s, r))
                }
                var v = 0;
                for (o = 0; o < t.length; o += 3) {
                    var f = t[o] * r, y = t[o + 1] * r, d = t[o + 2] * r;
                    v += Math.abs((e[f] - e[d]) * (e[y + 1] - e[f + 1]) - (e[f] - e[y]) * (e[d + 1] - e[f + 1]))
                }
                return 0 === a && 0 === v ? 0 : Math.abs((v - a) / a)
            }, earcut.flatten = function (e) {
                for (var n = e[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: n
                }, t = 0, i = 0; i < e.length; i++) {
                    for (var x = 0; x < e[i].length; x++) for (var a = 0; a < n; a++) r.vertices.push(e[i][x][a]);
                    i > 0 && (t += e[i - 1].length, r.holes.push(t))
                }
                return r
            };
        }, {}],
        6: [function (_dereq_, module, exports) {
            function geometry(r) {
                if ("Polygon" === r.type) return polygonArea(r.coordinates);
                if ("MultiPolygon" === r.type) {
                    for (var e = 0, n = 0; n < r.coordinates.length; n++) e += polygonArea(r.coordinates[n]);
                    return e
                }
                return null
            }

            function polygonArea(r) {
                var e = 0;
                if (r && r.length > 0) {
                    e += Math.abs(ringArea(r[0]));
                    for (var n = 1; n < r.length; n++) e -= Math.abs(ringArea(r[n]))
                }
                return e
            }

            function ringArea(r) {
                var e = 0;
                if (r.length > 2) {
                    for (var n, t, o = 0; o < r.length - 1; o++) n = r[o], t = r[o + 1], e += rad(t[0] - n[0]) * (2 + Math.sin(rad(n[1])) + Math.sin(rad(t[1])));
                    e = e * wgs84.RADIUS * wgs84.RADIUS / 2
                }
                return e
            }

            function rad(r) {
                return r * Math.PI / 180
            }

            var wgs84 = _dereq_("wgs84");
            module.exports.geometry = geometry, module.exports.ring = ringArea;
        }, {"wgs84": 41}],
        7: [function (_dereq_, module, exports) {
            function rewind(r, e) {
                switch (r && r.type || null) {
                    case"FeatureCollection":
                        return r.features = r.features.map(curryOuter(rewind, e)), r;
                    case"Feature":
                        return r.geometry = rewind(r.geometry, e), r;
                    case"Polygon":
                    case"MultiPolygon":
                        return correct(r, e);
                    default:
                        return r
                }
            }

            function curryOuter(r, e) {
                return function (n) {
                    return r(n, e)
                }
            }

            function correct(r, e) {
                return "Polygon" === r.type ? r.coordinates = correctRings(r.coordinates, e) : "MultiPolygon" === r.type && (r.coordinates = r.coordinates.map(curryOuter(correctRings, e))), r
            }

            function correctRings(r, e) {
                e = !!e, r[0] = wind(r[0], !e);
                for (var n = 1; n < r.length; n++) r[n] = wind(r[n], e);
                return r
            }

            function wind(r, e) {
                return cw(r) === e ? r : r.reverse()
            }

            function cw(r) {
                return geojsonArea.ring(r) >= 0
            }

            var geojsonArea = _dereq_("geojson-area");
            module.exports = rewind;
        }, {"geojson-area": 6}],
        8: [function (_dereq_, module, exports) {
            "use strict";

            function clip(e, r, t, n, u, i, l, s) {
                if (t /= r, n /= r, l >= t && s <= n) return e;
                if (l > n || s < t) return null;
                for (var h = [], p = 0; p < e.length; p++) {
                    var a, c, o = e[p], f = o.geometry, g = o.type;
                    if (a = o.min[u], c = o.max[u], a >= t && c <= n) h.push(o); else if (!(a > n || c < t)) {
                        var v = 1 === g ? clipPoints(f, t, n, u) : clipGeometry(f, t, n, u, i, 3 === g);
                        v.length && h.push(createFeature(o.tags, g, v, o.id))
                    }
                }
                return h.length ? h : null
            }

            function clipPoints(e, r, t, n) {
                for (var u = [], i = 0; i < e.length; i++) {
                    var l = e[i], s = l[n];
                    s >= r && s <= t && u.push(l)
                }
                return u
            }

            function clipGeometry(e, r, t, n, u, i) {
                for (var l = [], s = 0; s < e.length; s++) {
                    var h, p, a, c = 0, o = 0, f = null, g = e[s], v = g.area, m = g.dist, w = g.outer, S = g.length,
                        d = [];
                    for (p = 0; p < S - 1; p++) h = f || g[p], f = g[p + 1], c = o || h[n], o = f[n], c < r ? o > t ? (d.push(u(h, f, r), u(h, f, t)), i || (d = newSlice(l, d, v, m, w))) : o >= r && d.push(u(h, f, r)) : c > t ? o < r ? (d.push(u(h, f, t), u(h, f, r)), i || (d = newSlice(l, d, v, m, w))) : o <= t && d.push(u(h, f, t)) : (d.push(h), o < r ? (d.push(u(h, f, r)), i || (d = newSlice(l, d, v, m, w))) : o > t && (d.push(u(h, f, t)), i || (d = newSlice(l, d, v, m, w))));
                    h = g[S - 1], c = h[n], c >= r && c <= t && d.push(h), a = d[d.length - 1], i && a && (d[0][0] !== a[0] || d[0][1] !== a[1]) && d.push(d[0]), newSlice(l, d, v, m, w)
                }
                return l
            }

            function newSlice(e, r, t, n, u) {
                return r.length && (r.area = t, r.dist = n, void 0 !== u && (r.outer = u), e.push(r)), []
            }

            module.exports = clip;
            var createFeature = _dereq_("./feature");
        }, {"./feature": 10}],
        9: [function (_dereq_, module, exports) {
            "use strict";

            function convert(e, t) {
                var r = [];
                if ("FeatureCollection" === e.type) for (var o = 0; o < e.features.length; o++) convertFeature(r, e.features[o], t); else "Feature" === e.type ? convertFeature(r, e, t) : convertFeature(r, {geometry: e}, t);
                return r
            }

            function convertFeature(e, t, r) {
                if (null !== t.geometry) {
                    var o, a, i, n, u = t.geometry, c = u.type, l = u.coordinates, s = t.properties, p = t.id;
                    if ("Point" === c) e.push(createFeature(s, 1, [projectPoint(l)], p)); else if ("MultiPoint" === c) e.push(createFeature(s, 1, project(l), p)); else if ("LineString" === c) e.push(createFeature(s, 2, [project(l, r)], p)); else if ("MultiLineString" === c || "Polygon" === c) {
                        for (i = [], o = 0; o < l.length; o++) n = project(l[o], r), "Polygon" === c && (n.outer = 0 === o), i.push(n);
                        e.push(createFeature(s, "Polygon" === c ? 3 : 2, i, p))
                    } else if ("MultiPolygon" === c) {
                        for (i = [], o = 0; o < l.length; o++) for (a = 0; a < l[o].length; a++) n = project(l[o][a], r), n.outer = 0 === a, i.push(n);
                        e.push(createFeature(s, 3, i, p))
                    } else {
                        if ("GeometryCollection" !== c) throw new Error("Input data is not a valid GeoJSON object.");
                        for (o = 0; o < u.geometries.length; o++) convertFeature(e, {
                            geometry: u.geometries[o],
                            properties: s
                        }, r)
                    }
                }
            }

            function project(e, t) {
                for (var r = [], o = 0; o < e.length; o++) r.push(projectPoint(e[o]));
                return t && (simplify(r, t), calcSize(r)), r
            }

            function projectPoint(e) {
                var t = Math.sin(e[1] * Math.PI / 180), r = e[0] / 360 + .5,
                    o = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
                return o = o < 0 ? 0 : o > 1 ? 1 : o, [r, o, 0]
            }

            function calcSize(e) {
                for (var t, r, o = 0, a = 0, i = 0; i < e.length - 1; i++) t = r || e[i], r = e[i + 1], o += t[0] * r[1] - r[0] * t[1], a += Math.abs(r[0] - t[0]) + Math.abs(r[1] - t[1]);
                e.area = Math.abs(o / 2), e.dist = a
            }

            module.exports = convert;
            var simplify = _dereq_("./simplify"), createFeature = _dereq_("./feature");
        }, {"./feature": 10, "./simplify": 12}],
        10: [function (_dereq_, module, exports) {
            "use strict";

            function createFeature(e, t, a, n) {
                var r = {
                    id: n || null,
                    type: t,
                    geometry: a,
                    tags: e || null,
                    min: [1 / 0, 1 / 0],
                    max: [-(1 / 0), -(1 / 0)]
                };
                return calcBBox(r), r
            }

            function calcBBox(e) {
                var t = e.geometry, a = e.min, n = e.max;
                if (1 === e.type) calcRingBBox(a, n, t); else for (var r = 0; r < t.length; r++) calcRingBBox(a, n, t[r]);
                return e
            }

            function calcRingBBox(e, t, a) {
                for (var n, r = 0; r < a.length; r++) n = a[r], e[0] = Math.min(n[0], e[0]), t[0] = Math.max(n[0], t[0]), e[1] = Math.min(n[1], e[1]), t[1] = Math.max(n[1], t[1])
            }

            module.exports = createFeature;
        }, {}],
        11: [function (_dereq_, module, exports) {
            "use strict";

            function geojsonvt(e, t) {
                return new GeoJSONVT(e, t)
            }

            function GeoJSONVT(e, t) {
                t = this.options = extend(Object.create(this.options), t);
                var i = t.debug;
                i && console.time("preprocess data");
                var o = 1 << t.maxZoom, n = convert(e, t.tolerance / (o * t.extent));
                this.tiles = {}, this.tileCoords = [], i && (console.timeEnd("preprocess data"), console.log("index: maxZoom: %d, maxPoints: %d", t.indexMaxZoom, t.indexMaxPoints), console.time("generate tiles"), this.stats = {}, this.total = 0), n = wrap(n, t.buffer / t.extent, intersectX), n.length && this.splitTile(n, 0, 0, 0), i && (n.length && console.log("features: %d, points: %d", this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd("generate tiles"), console.log("tiles generated:", this.total, JSON.stringify(this.stats)))
            }

            function toID(e, t, i) {
                return 32 * ((1 << e) * i + t) + e
            }

            function intersectX(e, t, i) {
                return [i, (i - e[0]) * (t[1] - e[1]) / (t[0] - e[0]) + e[1], 1]
            }

            function intersectY(e, t, i) {
                return [(i - e[1]) * (t[0] - e[0]) / (t[1] - e[1]) + e[0], i, 1]
            }

            function extend(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            }

            function isClippedSquare(e, t, i) {
                var o = e.source;
                if (1 !== o.length) return !1;
                var n = o[0];
                if (3 !== n.type || n.geometry.length > 1) return !1;
                var r = n.geometry[0].length;
                if (5 !== r) return !1;
                for (var s = 0; s < r; s++) {
                    var l = transform.point(n.geometry[0][s], t, e.z2, e.x, e.y);
                    if (l[0] !== -i && l[0] !== t + i || l[1] !== -i && l[1] !== t + i) return !1
                }
                return !0
            }

            module.exports = geojsonvt;
            var convert = _dereq_("./convert"), transform = _dereq_("./transform"), clip = _dereq_("./clip"),
                wrap = _dereq_("./wrap"), createTile = _dereq_("./tile");
            GeoJSONVT.prototype.options = {
                maxZoom: 14,
                indexMaxZoom: 5,
                indexMaxPoints: 1e5,
                solidChildren: !1,
                tolerance: 3,
                extent: 4096,
                buffer: 64,
                debug: 0
            }, GeoJSONVT.prototype.splitTile = function (e, t, i, o, n, r, s) {
                for (var l = [e, t, i, o], a = this.options, u = a.debug, c = null; l.length;) {
                    o = l.pop(), i = l.pop(), t = l.pop(), e = l.pop();
                    var p = 1 << t, d = toID(t, i, o), m = this.tiles[d],
                        f = t === a.maxZoom ? 0 : a.tolerance / (p * a.extent);
                    if (!m && (u > 1 && console.time("creation"), m = this.tiles[d] = createTile(e, p, i, o, f, t === a.maxZoom), this.tileCoords.push({
                            z: t,
                            x: i,
                            y: o
                        }), u)) {
                        u > 1 && (console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t, i, o, m.numFeatures, m.numPoints, m.numSimplified), console.timeEnd("creation"));
                        var h = "z" + t;
                        this.stats[h] = (this.stats[h] || 0) + 1, this.total++
                    }
                    if (m.source = e, n) {
                        if (t === a.maxZoom || t === n) continue;
                        var x = 1 << n - t;
                        if (i !== Math.floor(r / x) || o !== Math.floor(s / x)) continue
                    } else if (t === a.indexMaxZoom || m.numPoints <= a.indexMaxPoints) continue;
                    if (a.solidChildren || !isClippedSquare(m, a.extent, a.buffer)) {
                        m.source = null, u > 1 && console.time("clipping");
                        var g, v, M, T, b, y, S = .5 * a.buffer / a.extent, Z = .5 - S, q = .5 + S, w = 1 + S;
                        g = v = M = T = null, b = clip(e, p, i - S, i + q, 0, intersectX, m.min[0], m.max[0]), y = clip(e, p, i + Z, i + w, 0, intersectX, m.min[0], m.max[0]), b && (g = clip(b, p, o - S, o + q, 1, intersectY, m.min[1], m.max[1]), v = clip(b, p, o + Z, o + w, 1, intersectY, m.min[1], m.max[1])), y && (M = clip(y, p, o - S, o + q, 1, intersectY, m.min[1], m.max[1]), T = clip(y, p, o + Z, o + w, 1, intersectY, m.min[1], m.max[1])), u > 1 && console.timeEnd("clipping"), e.length && (l.push(g || [], t + 1, 2 * i, 2 * o), l.push(v || [], t + 1, 2 * i, 2 * o + 1), l.push(M || [], t + 1, 2 * i + 1, 2 * o), l.push(T || [], t + 1, 2 * i + 1, 2 * o + 1))
                    } else n && (c = t)
                }
                return c
            }, GeoJSONVT.prototype.getTile = function (e, t, i) {
                var o = this.options, n = o.extent, r = o.debug, s = 1 << e;
                t = (t % s + s) % s;
                var l = toID(e, t, i);
                if (this.tiles[l]) return transform.tile(this.tiles[l], n);
                r > 1 && console.log("drilling down to z%d-%d-%d", e, t, i);
                for (var a, u = e, c = t, p = i; !a && u > 0;) u--, c = Math.floor(c / 2), p = Math.floor(p / 2), a = this.tiles[toID(u, c, p)];
                if (!a || !a.source) return null;
                if (r > 1 && console.log("found parent tile z%d-%d-%d", u, c, p), isClippedSquare(a, n, o.buffer)) return transform.tile(a, n);
                r > 1 && console.time("drilling down");
                var d = this.splitTile(a.source, u, c, p, e, t, i);
                if (r > 1 && console.timeEnd("drilling down"), null !== d) {
                    var m = 1 << e - d;
                    l = toID(d, Math.floor(t / m), Math.floor(i / m))
                }
                return this.tiles[l] ? transform.tile(this.tiles[l], n) : null
            };
        }, {"./clip": 8, "./convert": 9, "./tile": 13, "./transform": 14, "./wrap": 15}],
        12: [function (_dereq_, module, exports) {
            "use strict";

            function simplify(t, i) {
                var e, p, r, s, o = i * i, f = t.length, u = 0, n = f - 1, g = [];
                for (t[u][2] = 1, t[n][2] = 1; n;) {
                    for (p = 0, e = u + 1; e < n; e++) r = getSqSegDist(t[e], t[u], t[n]), r > p && (s = e, p = r);
                    p > o ? (t[s][2] = p, g.push(u), g.push(s), u = s) : (n = g.pop(), u = g.pop())
                }
            }

            function getSqSegDist(t, i, e) {
                var p = i[0], r = i[1], s = e[0], o = e[1], f = t[0], u = t[1], n = s - p, g = o - r;
                if (0 !== n || 0 !== g) {
                    var l = ((f - p) * n + (u - r) * g) / (n * n + g * g);
                    l > 1 ? (p = s, r = o) : l > 0 && (p += n * l, r += g * l)
                }
                return n = f - p, g = u - r, n * n + g * g
            }

            module.exports = simplify;
        }, {}],
        13: [function (_dereq_, module, exports) {
            "use strict";

            function createTile(e, n, r, i, t, u) {
                for (var a = {
                    features: [],
                    numPoints: 0,
                    numSimplified: 0,
                    numFeatures: 0,
                    source: null,
                    x: r,
                    y: i,
                    z2: n,
                    transformed: !1,
                    min: [2, 1],
                    max: [-1, 0]
                }, m = 0; m < e.length; m++) {
                    a.numFeatures++, addFeature(a, e[m], t, u);
                    var s = e[m].min, l = e[m].max;
                    s[0] < a.min[0] && (a.min[0] = s[0]), s[1] < a.min[1] && (a.min[1] = s[1]), l[0] > a.max[0] && (a.max[0] = l[0]), l[1] > a.max[1] && (a.max[1] = l[1])
                }
                return a
            }

            function addFeature(e, n, r, i) {
                var t, u, a, m, s = n.geometry, l = n.type, o = [], f = r * r;
                if (1 === l) for (t = 0; t < s.length; t++) o.push(s[t]), e.numPoints++, e.numSimplified++; else for (t = 0; t < s.length; t++) if (a = s[t], i || !(2 === l && a.dist < r || 3 === l && a.area < f)) {
                    var d = [];
                    for (u = 0; u < a.length; u++) m = a[u], (i || m[2] > f) && (d.push(m), e.numSimplified++), e.numPoints++;
                    3 === l && rewind(d, a.outer), o.push(d)
                } else e.numPoints += a.length;
                if (o.length) {
                    var g = {geometry: o, type: l, tags: n.tags || null};
                    null !== n.id && (g.id = n.id), e.features.push(g)
                }
            }

            function rewind(e, n) {
                var r = signedArea(e);
                r < 0 === n && e.reverse()
            }

            function signedArea(e) {
                for (var n, r, i = 0, t = 0, u = e.length, a = u - 1; t < u; a = t++) n = e[t], r = e[a], i += (r[0] - n[0]) * (n[1] + r[1]);
                return i
            }

            module.exports = createTile;
        }, {}],
        14: [function (_dereq_, module, exports) {
            "use strict";

            function transformTile(r, t) {
                if (r.transformed) return r;
                var n, e, o, f = r.z2, a = r.x, s = r.y;
                for (n = 0; n < r.features.length; n++) {
                    var i = r.features[n], u = i.geometry, m = i.type;
                    if (1 === m) for (e = 0; e < u.length; e++) u[e] = transformPoint(u[e], t, f, a, s); else for (e = 0; e < u.length; e++) {
                        var l = u[e];
                        for (o = 0; o < l.length; o++) l[o] = transformPoint(l[o], t, f, a, s)
                    }
                }
                return r.transformed = !0, r
            }

            function transformPoint(r, t, n, e, o) {
                var f = Math.round(t * (r[0] * n - e)), a = Math.round(t * (r[1] * n - o));
                return [f, a]
            }

            exports.tile = transformTile, exports.point = transformPoint;
        }, {}],
        15: [function (_dereq_, module, exports) {
            "use strict";

            function wrap(r, e, t) {
                var o = r, a = clip(r, 1, -1 - e, e, 0, t, -1, 2), s = clip(r, 1, 1 - e, 2 + e, 0, t, -1, 2);
                return (a || s) && (o = clip(r, 1, -e, 1 + e, 0, t, -1, 2) || [], a && (o = shiftFeatureCoords(a, 1).concat(o)), s && (o = o.concat(shiftFeatureCoords(s, -1)))), o
            }

            function shiftFeatureCoords(r, e) {
                for (var t = [], o = 0; o < r.length; o++) {
                    var a, s = r[o], i = s.type;
                    if (1 === i) a = shiftCoords(s.geometry, e); else {
                        a = [];
                        for (var u = 0; u < s.geometry.length; u++) a.push(shiftCoords(s.geometry[u], e))
                    }
                    t.push(createFeature(s.tags, i, a, s.id))
                }
                return t
            }

            function shiftCoords(r, e) {
                var t = [];
                t.area = r.area, t.dist = r.dist;
                for (var o = 0; o < r.length; o++) t.push([r[o][0] + e, r[o][1], r[o][2]]);
                return t
            }

            var clip = _dereq_("./clip"), createFeature = _dereq_("./feature");
            module.exports = wrap;
        }, {"./clip": 8, "./feature": 10}],
        16: [function (_dereq_, module, exports) {
            "use strict";

            function GridIndex(t, r, e) {
                var s = this.cells = [];
                if (t instanceof ArrayBuffer) {
                    this.arrayBuffer = t;
                    var i = new Int32Array(this.arrayBuffer);
                    t = i[0], r = i[1], e = i[2], this.d = r + 2 * e;
                    for (var h = 0; h < this.d * this.d; h++) {
                        var n = i[NUM_PARAMS + h], o = i[NUM_PARAMS + h + 1];
                        s.push(n === o ? null : i.subarray(n, o))
                    }
                    var l = i[NUM_PARAMS + s.length], a = i[NUM_PARAMS + s.length + 1];
                    this.keys = i.subarray(l, a), this.bboxes = i.subarray(a), this.insert = this._insertReadonly
                } else {
                    this.d = r + 2 * e;
                    for (var d = 0; d < this.d * this.d; d++) s.push([]);
                    this.keys = [], this.bboxes = []
                }
                this.n = r, this.extent = t, this.padding = e, this.scale = r / t, this.uid = 0;
                var f = e / r * t;
                this.min = -f, this.max = t + f
            }

            module.exports = GridIndex;
            var NUM_PARAMS = 3;
            GridIndex.prototype.insert = function (t, r, e, s, i) {
                this._forEachCell(r, e, s, i, this._insertCell, this.uid++), this.keys.push(t), this.bboxes.push(r), this.bboxes.push(e), this.bboxes.push(s), this.bboxes.push(i)
            }, GridIndex.prototype._insertReadonly = function () {
                throw"Cannot insert into a GridIndex created from an ArrayBuffer."
            }, GridIndex.prototype._insertCell = function (t, r, e, s, i, h) {
                this.cells[i].push(h)
            }, GridIndex.prototype.query = function (t, r, e, s) {
                var i = this.min, h = this.max;
                if (t <= i && r <= i && h <= e && h <= s) return Array.prototype.slice.call(this.keys);
                var n = [], o = {};
                return this._forEachCell(t, r, e, s, this._queryCell, n, o), n
            }, GridIndex.prototype._queryCell = function (t, r, e, s, i, h, n) {
                var o = this.cells[i];
                if (null !== o) for (var l = this.keys, a = this.bboxes, d = 0; d < o.length; d++) {
                    var f = o[d];
                    if (void 0 === n[f]) {
                        var u = 4 * f;
                        t <= a[u + 2] && r <= a[u + 3] && e >= a[u + 0] && s >= a[u + 1] ? (n[f] = !0, h.push(l[f])) : n[f] = !1
                    }
                }
            }, GridIndex.prototype._forEachCell = function (t, r, e, s, i, h, n) {
                for (var o = this._convertToCellCoord(t), l = this._convertToCellCoord(r), a = this._convertToCellCoord(e), d = this._convertToCellCoord(s), f = o; f <= a; f++) for (var u = l; u <= d; u++) {
                    var y = this.d * u + f;
                    if (i.call(this, t, r, e, s, y, h, n)) return
                }
            }, GridIndex.prototype._convertToCellCoord = function (t) {
                return Math.max(0, Math.min(this.d - 1, Math.floor(t * this.scale) + this.padding))
            }, GridIndex.prototype.toArrayBuffer = function () {
                if (this.arrayBuffer) return this.arrayBuffer;
                for (var t = this.cells, r = NUM_PARAMS + this.cells.length + 1 + 1, e = 0, s = 0; s < this.cells.length; s++) e += this.cells[s].length;
                var i = new Int32Array(r + e + this.keys.length + this.bboxes.length);
                i[0] = this.extent, i[1] = this.n, i[2] = this.padding;
                for (var h = r, n = 0; n < t.length; n++) {
                    var o = t[n];
                    i[NUM_PARAMS + n] = h, i.set(o, h), h += o.length
                }
                return i[NUM_PARAMS + t.length] = h, i.set(this.keys, h), h += this.keys.length, i[NUM_PARAMS + t.length + 1] = h, i.set(this.bboxes, h), h += this.bboxes.length, i.buffer
            };
        }, {}],
        17: [function (_dereq_, module, exports) {
            exports.read = function (a, o, t, r, h) {
                var M, p, w = 8 * h - r - 1, f = (1 << w) - 1, e = f >> 1, i = -7, N = t ? h - 1 : 0, n = t ? -1 : 1,
                    s = a[o + N];
                for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8) ;
                for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8) ;
                if (0 === M) M = 1 - e; else {
                    if (M === f) return p ? NaN : (s ? -1 : 1) * (1 / 0);
                    p += Math.pow(2, r), M -= e
                }
                return (s ? -1 : 1) * p * Math.pow(2, M - r)
            }, exports.write = function (a, o, t, r, h, M) {
                var p, w, f, e = 8 * M - h - 1, i = (1 << e) - 1, N = i >> 1,
                    n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0, s = r ? 0 : M - 1, u = r ? 1 : -1,
                    l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
                for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N), o * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8) ;
                for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8) ;
                a[t + s - u] |= 128 * l
            };
        }, {}],
        18: [function (_dereq_, module, exports) {
            "use strict";

            function kdbush(t, i, e, s, n) {
                return new KDBush(t, i, e, s, n)
            }

            function KDBush(t, i, e, s, n) {
                i = i || defaultGetX, e = e || defaultGetY, n = n || Array, this.nodeSize = s || 64, this.points = t, this.ids = new n(t.length), this.coords = new n(2 * t.length);
                for (var r = 0; r < t.length; r++) this.ids[r] = r, this.coords[2 * r] = i(t[r]), this.coords[2 * r + 1] = e(t[r]);
                sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0)
            }

            function defaultGetX(t) {
                return t[0]
            }

            function defaultGetY(t) {
                return t[1]
            }

            var sort = _dereq_("./sort"), range = _dereq_("./range"), within = _dereq_("./within");
            module.exports = kdbush, KDBush.prototype = {
                range: function (t, i, e, s) {
                    return range(this.ids, this.coords, t, i, e, s, this.nodeSize)
                }, within: function (t, i, e) {
                    return within(this.ids, this.coords, t, i, e, this.nodeSize)
                }
            };
        }, {"./range": 19, "./sort": 20, "./within": 21}],
        19: [function (_dereq_, module, exports) {
            "use strict";

            function range(p, r, s, u, h, e, o) {
                for (var a, t, n = [0, p.length - 1, 0], f = []; n.length;) {
                    var l = n.pop(), v = n.pop(), g = n.pop();
                    if (v - g <= o) for (var i = g; i <= v; i++) a = r[2 * i], t = r[2 * i + 1], a >= s && a <= h && t >= u && t <= e && f.push(p[i]); else {
                        var c = Math.floor((g + v) / 2);
                        a = r[2 * c], t = r[2 * c + 1], a >= s && a <= h && t >= u && t <= e && f.push(p[c]);
                        var d = (l + 1) % 2;
                        (0 === l ? s <= a : u <= t) && (n.push(g), n.push(c - 1), n.push(d)), (0 === l ? h >= a : e >= t) && (n.push(c + 1), n.push(v), n.push(d))
                    }
                }
                return f
            }

            module.exports = range;
        }, {}],
        20: [function (_dereq_, module, exports) {
            "use strict";

            function sortKD(t, a, o, s, r, e) {
                if (!(r - s <= o)) {
                    var f = Math.floor((s + r) / 2);
                    select(t, a, f, s, r, e % 2), sortKD(t, a, o, s, f - 1, e + 1), sortKD(t, a, o, f + 1, r, e + 1)
                }
            }

            function select(t, a, o, s, r, e) {
                for (; r > s;) {
                    if (r - s > 600) {
                        var f = r - s + 1, p = o - s + 1, w = Math.log(f), m = .5 * Math.exp(2 * w / 3),
                            n = .5 * Math.sqrt(w * m * (f - m) / f) * (p - f / 2 < 0 ? -1 : 1),
                            c = Math.max(s, Math.floor(o - p * m / f + n)),
                            h = Math.min(r, Math.floor(o + (f - p) * m / f + n));
                        select(t, a, o, c, h, e)
                    }
                    var i = a[2 * o + e], l = s, M = r;
                    for (swapItem(t, a, s, o), a[2 * r + e] > i && swapItem(t, a, s, r); l < M;) {
                        for (swapItem(t, a, l, M), l++, M--; a[2 * l + e] < i;) l++;
                        for (; a[2 * M + e] > i;) M--
                    }
                    a[2 * s + e] === i ? swapItem(t, a, s, M) : (M++, swapItem(t, a, M, r)), M <= o && (s = M + 1), o <= M && (r = M - 1)
                }
            }

            function swapItem(t, a, o, s) {
                swap(t, o, s), swap(a, 2 * o, 2 * s), swap(a, 2 * o + 1, 2 * s + 1)
            }

            function swap(t, a, o) {
                var s = t[a];
                t[a] = t[o], t[o] = s
            }

            module.exports = sortKD;
        }, {}],
        21: [function (_dereq_, module, exports) {
            "use strict";

            function within(s, p, r, t, u, h) {
                for (var i = [0, s.length - 1, 0], o = [], n = u * u; i.length;) {
                    var e = i.pop(), a = i.pop(), f = i.pop();
                    if (a - f <= h) for (var v = f; v <= a; v++) sqDist(p[2 * v], p[2 * v + 1], r, t) <= n && o.push(s[v]); else {
                        var l = Math.floor((f + a) / 2), c = p[2 * l], q = p[2 * l + 1];
                        sqDist(c, q, r, t) <= n && o.push(s[l]);
                        var D = (e + 1) % 2;
                        (0 === e ? r - u <= c : t - u <= q) && (i.push(f), i.push(l - 1), i.push(D)), (0 === e ? r + u >= c : t + u >= q) && (i.push(l + 1), i.push(a), i.push(D))
                    }
                }
                return o
            }

            function sqDist(s, p, r, t) {
                var u = s - r, h = p - t;
                return u * u + h * h
            }

            module.exports = within;
        }, {}],
        22: [function (_dereq_, module, exports) {
            "use strict";

            function isSupported(e) {
                return !!(isBrowser() && isArraySupported() && isFunctionSupported() && isObjectSupported() && isJSONSupported() && isWorkerSupported() && isUint8ClampedArraySupported() && isWebGLSupportedCached(e && e.failIfMajorPerformanceCaveat))
            }

            function isBrowser() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function isArraySupported() {
                return Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray
            }

            function isFunctionSupported() {
                return Function.prototype && Function.prototype.bind
            }

            function isObjectSupported() {
                return Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions
            }

            function isJSONSupported() {
                return "JSON" in window && "parse" in JSON && "stringify" in JSON
            }

            function isWorkerSupported() {
                return "Worker" in window
            }

            function isUint8ClampedArraySupported() {
                return "Uint8ClampedArray" in window
            }

            function isWebGLSupportedCached(e) {
                return void 0 === isWebGLSupportedCache[e] && (isWebGLSupportedCache[e] = isWebGLSupported(e)), isWebGLSupportedCache[e]
            }

            function isWebGLSupported(e) {
                var t = document.createElement("canvas"), r = Object.create(isSupported.webGLContextAttributes);
                return r.failIfMajorPerformanceCaveat = e, t.probablySupportsContext ? t.probablySupportsContext("webgl", r) || t.probablySupportsContext("experimental-webgl", r) : t.supportsContext ? t.supportsContext("webgl", r) || t.supportsContext("experimental-webgl", r) : t.getContext("webgl", r) || t.getContext("experimental-webgl", r)
            }

            "undefined" != typeof module && module.exports ? module.exports = isSupported : window && (window.mapboxgl = window.mapboxgl || {}, window.mapboxgl.supported = isSupported);
            var isWebGLSupportedCache = {};
            isSupported.webGLContextAttributes = {antialias: !1, alpha: !0, stencil: !0, depth: !0};
        }, {}],
        23: [function (_dereq_, module, exports) {
            "use strict";

            function Buffer(t) {
                var e;
                t && t.length && (e = t, t = e.length);
                var r = new Uint8Array(t || 0);
                return e && r.set(e), r.readUInt32LE = BufferMethods.readUInt32LE, r.writeUInt32LE = BufferMethods.writeUInt32LE, r.readInt32LE = BufferMethods.readInt32LE, r.writeInt32LE = BufferMethods.writeInt32LE, r.readFloatLE = BufferMethods.readFloatLE, r.writeFloatLE = BufferMethods.writeFloatLE, r.readDoubleLE = BufferMethods.readDoubleLE, r.writeDoubleLE = BufferMethods.writeDoubleLE, r.toString = BufferMethods.toString, r.write = BufferMethods.write, r.slice = BufferMethods.slice, r.copy = BufferMethods.copy, r._isBuffer = !0, r
            }

            function encodeString(t) {
                for (var e, r, n = t.length, i = [], o = 0; o < n; o++) {
                    if (e = t.charCodeAt(o), e > 55295 && e < 57344) {
                        if (!r) {
                            e > 56319 || o + 1 === n ? i.push(239, 191, 189) : r = e;
                            continue
                        }
                        if (e < 56320) {
                            i.push(239, 191, 189), r = e;
                            continue
                        }
                        e = r - 55296 << 10 | e - 56320 | 65536, r = null
                    } else r && (i.push(239, 191, 189), r = null);
                    e < 128 ? i.push(e) : e < 2048 ? i.push(e >> 6 | 192, 63 & e | 128) : e < 65536 ? i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128) : i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                }
                return i
            }

            module.exports = Buffer;
            var ieee754 = _dereq_("ieee754"), BufferMethods, lastStr, lastStrEncoded;
            BufferMethods = {
                readUInt32LE: function (t) {
                    return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, writeUInt32LE: function (t, e) {
                    this[e] = t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24
                }, readInt32LE: function (t) {
                    return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + (this[t + 3] << 24)
                }, readFloatLE: function (t) {
                    return ieee754.read(this, t, !0, 23, 4)
                }, readDoubleLE: function (t) {
                    return ieee754.read(this, t, !0, 52, 8)
                }, writeFloatLE: function (t, e) {
                    return ieee754.write(this, t, e, !0, 23, 4)
                }, writeDoubleLE: function (t, e) {
                    return ieee754.write(this, t, e, !0, 52, 8)
                }, toString: function (t, e, r) {
                    var n = "", i = "";
                    e = e || 0, r = Math.min(this.length, r || this.length);
                    for (var o = e; o < r; o++) {
                        var u = this[o];
                        u <= 127 ? (n += decodeURIComponent(i) + String.fromCharCode(u), i = "") : i += "%" + u.toString(16)
                    }
                    return n += decodeURIComponent(i)
                }, write: function (t, e) {
                    for (var r = t === lastStr ? lastStrEncoded : encodeString(t), n = 0; n < r.length; n++) this[e + n] = r[n]
                }, slice: function (t, e) {
                    return this.subarray(t, e)
                }, copy: function (t, e) {
                    e = e || 0;
                    for (var r = 0; r < this.length; r++) t[e + r] = this[r]
                }
            }, BufferMethods.writeInt32LE = BufferMethods.writeUInt32LE, Buffer.byteLength = function (t) {
                return lastStr = t, lastStrEncoded = encodeString(t), lastStrEncoded.length
            }, Buffer.isBuffer = function (t) {
                return !(!t || !t._isBuffer)
            };
        }, {"ieee754": 17}],
        24: [function (_dereq_, module, exports) {
            (function (global) {
                "use strict";

                function Pbf(t) {
                    this.buf = Buffer.isBuffer(t) ? t : new Buffer(t || 0), this.pos = 0, this.length = this.buf.length
                }

                function readVarintRemainder(t, i) {
                    var e, r = i.buf;
                    if (e = r[i.pos++], t += 268435456 * (127 & e), e < 128) return t;
                    if (e = r[i.pos++], t += 34359738368 * (127 & e), e < 128) return t;
                    if (e = r[i.pos++], t += 4398046511104 * (127 & e), e < 128) return t;
                    if (e = r[i.pos++], t += 562949953421312 * (127 & e), e < 128) return t;
                    if (e = r[i.pos++], t += 72057594037927940 * (127 & e), e < 128) return t;
                    if (e = r[i.pos++], t += 0x8000000000000000 * (127 & e), e < 128) return t;
                    throw new Error("Expected varint not more than 10 bytes")
                }

                function writeBigVarint(t, i) {
                    i.realloc(10);
                    for (var e = i.pos + 10; t >= 1;) {
                        if (i.pos >= e) throw new Error("Given varint doesn't fit into 10 bytes");
                        var r = 255 & t;
                        i.buf[i.pos++] = r | (t >= 128 ? 128 : 0), t /= 128
                    }
                }

                function reallocForRawMessage(t, i, e) {
                    var r = i <= 16383 ? 1 : i <= 2097151 ? 2 : i <= 268435455 ? 3 : Math.ceil(Math.log(i) / (7 * Math.LN2));
                    e.realloc(r);
                    for (var s = e.pos - 1; s >= t; s--) e.buf[s + r] = e.buf[s]
                }

                function writePackedVarint(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeVarint(t[e])
                }

                function writePackedSVarint(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeSVarint(t[e])
                }

                function writePackedFloat(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeFloat(t[e])
                }

                function writePackedDouble(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeDouble(t[e])
                }

                function writePackedBoolean(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeBoolean(t[e])
                }

                function writePackedFixed32(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeFixed32(t[e])
                }

                function writePackedSFixed32(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeSFixed32(t[e])
                }

                function writePackedFixed64(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeFixed64(t[e])
                }

                function writePackedSFixed64(t, i) {
                    for (var e = 0; e < t.length; e++) i.writeSFixed64(t[e])
                }

                module.exports = Pbf;
                var Buffer = global.Buffer || _dereq_("./buffer");
                Pbf.Varint = 0, Pbf.Fixed64 = 1, Pbf.Bytes = 2, Pbf.Fixed32 = 5;
                var SHIFT_LEFT_32 = 4294967296, SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32, POW_2_63 = Math.pow(2, 63);
                Pbf.prototype = {
                    destroy: function () {
                        this.buf = null
                    }, readFields: function (t, i, e) {
                        for (e = e || this.length; this.pos < e;) {
                            var r = this.readVarint(), s = r >> 3, n = this.pos;
                            t(s, i, this), this.pos === n && this.skip(r)
                        }
                        return i
                    }, readMessage: function (t, i) {
                        return this.readFields(t, i, this.readVarint() + this.pos)
                    }, readFixed32: function () {
                        var t = this.buf.readUInt32LE(this.pos);
                        return this.pos += 4, t
                    }, readSFixed32: function () {
                        var t = this.buf.readInt32LE(this.pos);
                        return this.pos += 4, t
                    }, readFixed64: function () {
                        var t = this.buf.readUInt32LE(this.pos) + this.buf.readUInt32LE(this.pos + 4) * SHIFT_LEFT_32;
                        return this.pos += 8, t
                    }, readSFixed64: function () {
                        var t = this.buf.readUInt32LE(this.pos) + this.buf.readInt32LE(this.pos + 4) * SHIFT_LEFT_32;
                        return this.pos += 8, t
                    }, readFloat: function () {
                        var t = this.buf.readFloatLE(this.pos);
                        return this.pos += 4, t
                    }, readDouble: function () {
                        var t = this.buf.readDoubleLE(this.pos);
                        return this.pos += 8, t
                    }, readVarint: function () {
                        var t, i, e = this.buf;
                        return i = e[this.pos++], t = 127 & i, i < 128 ? t : (i = e[this.pos++], t |= (127 & i) << 7, i < 128 ? t : (i = e[this.pos++], t |= (127 & i) << 14, i < 128 ? t : (i = e[this.pos++], t |= (127 & i) << 21, i < 128 ? t : readVarintRemainder(t, this))))
                    }, readVarint64: function () {
                        var t = this.pos, i = this.readVarint();
                        if (i < POW_2_63) return i;
                        for (var e = this.pos - 2; 255 === this.buf[e];) e--;
                        e < t && (e = t), i = 0;
                        for (var r = 0; r < e - t + 1; r++) {
                            var s = 127 & ~this.buf[t + r];
                            i += r < 4 ? s << 7 * r : s * Math.pow(2, 7 * r)
                        }
                        return -i - 1
                    }, readSVarint: function () {
                        var t = this.readVarint();
                        return t % 2 === 1 ? (t + 1) / -2 : t / 2
                    }, readBoolean: function () {
                        return Boolean(this.readVarint())
                    }, readString: function () {
                        var t = this.readVarint() + this.pos, i = this.buf.toString("utf8", this.pos, t);
                        return this.pos = t, i
                    }, readBytes: function () {
                        var t = this.readVarint() + this.pos, i = this.buf.slice(this.pos, t);
                        return this.pos = t, i
                    }, readPackedVarint: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readVarint());
                        return i
                    }, readPackedSVarint: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readSVarint());
                        return i
                    }, readPackedBoolean: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readBoolean());
                        return i
                    }, readPackedFloat: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readFloat());
                        return i
                    }, readPackedDouble: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readDouble());
                        return i
                    }, readPackedFixed32: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readFixed32());
                        return i
                    }, readPackedSFixed32: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readSFixed32());
                        return i
                    }, readPackedFixed64: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readFixed64());
                        return i
                    }, readPackedSFixed64: function () {
                        for (var t = this.readVarint() + this.pos, i = []; this.pos < t;) i.push(this.readSFixed64());
                        return i
                    }, skip: function (t) {
                        var i = 7 & t;
                        if (i === Pbf.Varint) for (; this.buf[this.pos++] > 127;) ; else if (i === Pbf.Bytes) this.pos = this.readVarint() + this.pos; else if (i === Pbf.Fixed32) this.pos += 4; else {
                            if (i !== Pbf.Fixed64) throw new Error("Unimplemented type: " + i);
                            this.pos += 8
                        }
                    }, writeTag: function (t, i) {
                        this.writeVarint(t << 3 | i)
                    }, realloc: function (t) {
                        for (var i = this.length || 16; i < this.pos + t;) i *= 2;
                        if (i !== this.length) {
                            var e = new Buffer(i);
                            this.buf.copy(e), this.buf = e, this.length = i
                        }
                    }, finish: function () {
                        return this.length = this.pos, this.pos = 0, this.buf.slice(0, this.length)
                    }, writeFixed32: function (t) {
                        this.realloc(4), this.buf.writeUInt32LE(t, this.pos), this.pos += 4
                    }, writeSFixed32: function (t) {
                        this.realloc(4), this.buf.writeInt32LE(t, this.pos), this.pos += 4
                    }, writeFixed64: function (t) {
                        this.realloc(8), this.buf.writeInt32LE(t & -1, this.pos), this.buf.writeUInt32LE(Math.floor(t * SHIFT_RIGHT_32), this.pos + 4), this.pos += 8
                    }, writeSFixed64: function (t) {
                        this.realloc(8), this.buf.writeInt32LE(t & -1, this.pos), this.buf.writeInt32LE(Math.floor(t * SHIFT_RIGHT_32), this.pos + 4), this.pos += 8
                    }, writeVarint: function (t) {
                        return t = +t, t > 268435455 ? void writeBigVarint(t, this) : (this.realloc(4), this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0), void(t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127)))))
                    }, writeSVarint: function (t) {
                        this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t)
                    }, writeBoolean: function (t) {
                        this.writeVarint(Boolean(t))
                    }, writeString: function (t) {
                        t = String(t);
                        var i = Buffer.byteLength(t);
                        this.writeVarint(i), this.realloc(i), this.buf.write(t, this.pos), this.pos += i
                    }, writeFloat: function (t) {
                        this.realloc(4), this.buf.writeFloatLE(t, this.pos), this.pos += 4
                    }, writeDouble: function (t) {
                        this.realloc(8), this.buf.writeDoubleLE(t, this.pos), this.pos += 8
                    }, writeBytes: function (t) {
                        var i = t.length;
                        this.writeVarint(i), this.realloc(i);
                        for (var e = 0; e < i; e++) this.buf[this.pos++] = t[e]
                    }, writeRawMessage: function (t, i) {
                        this.pos++;
                        var e = this.pos;
                        t(i, this);
                        var r = this.pos - e;
                        r >= 128 && reallocForRawMessage(e, r, this), this.pos = e - 1, this.writeVarint(r), this.pos += r
                    }, writeMessage: function (t, i, e) {
                        this.writeTag(t, Pbf.Bytes), this.writeRawMessage(i, e)
                    }, writePackedVarint: function (t, i) {
                        this.writeMessage(t, writePackedVarint, i)
                    }, writePackedSVarint: function (t, i) {
                        this.writeMessage(t, writePackedSVarint, i)
                    }, writePackedBoolean: function (t, i) {
                        this.writeMessage(t, writePackedBoolean, i)
                    }, writePackedFloat: function (t, i) {
                        this.writeMessage(t, writePackedFloat, i)
                    }, writePackedDouble: function (t, i) {
                        this.writeMessage(t, writePackedDouble, i)
                    }, writePackedFixed32: function (t, i) {
                        this.writeMessage(t, writePackedFixed32, i)
                    }, writePackedSFixed32: function (t, i) {
                        this.writeMessage(t, writePackedSFixed32, i)
                    }, writePackedFixed64: function (t, i) {
                        this.writeMessage(t, writePackedFixed64, i)
                    }, writePackedSFixed64: function (t, i) {
                        this.writeMessage(t, writePackedSFixed64, i)
                    }, writeBytesField: function (t, i) {
                        this.writeTag(t, Pbf.Bytes), this.writeBytes(i)
                    }, writeFixed32Field: function (t, i) {
                        this.writeTag(t, Pbf.Fixed32), this.writeFixed32(i)
                    }, writeSFixed32Field: function (t, i) {
                        this.writeTag(t, Pbf.Fixed32), this.writeSFixed32(i)
                    }, writeFixed64Field: function (t, i) {
                        this.writeTag(t, Pbf.Fixed64), this.writeFixed64(i)
                    }, writeSFixed64Field: function (t, i) {
                        this.writeTag(t, Pbf.Fixed64), this.writeSFixed64(i)
                    }, writeVarintField: function (t, i) {
                        this.writeTag(t, Pbf.Varint), this.writeVarint(i)
                    }, writeSVarintField: function (t, i) {
                        this.writeTag(t, Pbf.Varint), this.writeSVarint(i)
                    }, writeStringField: function (t, i) {
                        this.writeTag(t, Pbf.Bytes), this.writeString(i)
                    }, writeFloatField: function (t, i) {
                        this.writeTag(t, Pbf.Fixed32), this.writeFloat(i)
                    }, writeDoubleField: function (t, i) {
                        this.writeTag(t, Pbf.Fixed64), this.writeDouble(i)
                    }, writeBooleanField: function (t, i) {
                        this.writeVarintField(t, Boolean(i))
                    }
                };
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

        }, {"./buffer": 23}],
        25: [function (_dereq_, module, exports) {
            "use strict";

            function Point(t, n) {
                this.x = t, this.y = n
            }

            module.exports = Point, Point.prototype = {
                clone: function () {
                    return new Point(this.x, this.y)
                }, add: function (t) {
                    return this.clone()._add(t)
                }, sub: function (t) {
                    return this.clone()._sub(t)
                }, mult: function (t) {
                    return this.clone()._mult(t)
                }, div: function (t) {
                    return this.clone()._div(t)
                }, rotate: function (t) {
                    return this.clone()._rotate(t)
                }, matMult: function (t) {
                    return this.clone()._matMult(t)
                }, unit: function () {
                    return this.clone()._unit()
                }, perp: function () {
                    return this.clone()._perp()
                }, round: function () {
                    return this.clone()._round()
                }, mag: function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, equals: function (t) {
                    return this.x === t.x && this.y === t.y
                }, dist: function (t) {
                    return Math.sqrt(this.distSqr(t))
                }, distSqr: function (t) {
                    var n = t.x - this.x, i = t.y - this.y;
                    return n * n + i * i
                }, angle: function () {
                    return Math.atan2(this.y, this.x)
                }, angleTo: function (t) {
                    return Math.atan2(this.y - t.y, this.x - t.x)
                }, angleWith: function (t) {
                    return this.angleWithSep(t.x, t.y)
                }, angleWithSep: function (t, n) {
                    return Math.atan2(this.x * n - this.y * t, this.x * t + this.y * n)
                }, _matMult: function (t) {
                    var n = t[0] * this.x + t[1] * this.y, i = t[2] * this.x + t[3] * this.y;
                    return this.x = n, this.y = i, this
                }, _add: function (t) {
                    return this.x += t.x, this.y += t.y, this
                }, _sub: function (t) {
                    return this.x -= t.x, this.y -= t.y, this
                }, _mult: function (t) {
                    return this.x *= t, this.y *= t, this
                }, _div: function (t) {
                    return this.x /= t, this.y /= t, this
                }, _unit: function () {
                    return this._div(this.mag()), this
                }, _perp: function () {
                    var t = this.y;
                    return this.y = this.x, this.x = -t, this
                }, _rotate: function (t) {
                    var n = Math.cos(t), i = Math.sin(t), s = n * this.x - i * this.y, r = i * this.x + n * this.y;
                    return this.x = s, this.y = r, this
                }, _round: function () {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                }
            }, Point.convert = function (t) {
                return t instanceof Point ? t : Array.isArray(t) ? new Point(t[0], t[1]) : t
            };
        }, {}],
        26: [function (_dereq_, module, exports) {
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined")
            }

            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined")
            }

            function runTimeout(e) {
                if (cachedSetTimeout === setTimeout) return setTimeout(e, 0);
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(e, 0);
                try {
                    return cachedSetTimeout(e, 0)
                } catch (t) {
                    try {
                        return cachedSetTimeout.call(null, e, 0)
                    } catch (t) {
                        return cachedSetTimeout.call(this, e, 0)
                    }
                }
            }

            function runClearTimeout(e) {
                if (cachedClearTimeout === clearTimeout) return clearTimeout(e);
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(e);
                try {
                    return cachedClearTimeout(e)
                } catch (t) {
                    try {
                        return cachedClearTimeout.call(null, e)
                    } catch (t) {
                        return cachedClearTimeout.call(this, e)
                    }
                }
            }

            function cleanUpNextTick() {
                draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue())
            }

            function drainQueue() {
                if (!draining) {
                    var e = runTimeout(cleanUpNextTick);
                    draining = !0;
                    for (var t = queue.length; t;) {
                        for (currentQueue = queue, queue = []; ++queueIndex < t;) currentQueue && currentQueue[queueIndex].run();
                        queueIndex = -1, t = queue.length
                    }
                    currentQueue = null, draining = !1, runClearTimeout(e)
                }
            }

            function Item(e, t) {
                this.fun = e, this.array = t
            }

            function noop() {
            }

            var process = module.exports = {}, cachedSetTimeout, cachedClearTimeout;
            !function () {
                try {
                    cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout
                }
                try {
                    cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout
                }
            }();
            var queue = [], draining = !1, currentQueue, queueIndex = -1;
            process.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var u = 1; u < arguments.length; u++) t[u - 1] = arguments[u];
                queue.push(new Item(e, t)), 1 !== queue.length || draining || runTimeout(drainQueue)
            }, Item.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.binding = function (e) {
                throw new Error("process.binding is not supported")
            }, process.cwd = function () {
                return "/"
            }, process.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }, process.umask = function () {
                return 0
            };
        }, {}],
        27: [function (_dereq_, module, exports) {
            "use strict";

            function partialSort(a, t, r, o, p) {
                for (r = r || 0, o = o || a.length - 1, p = p || defaultCompare; o > r;) {
                    if (o - r > 600) {
                        var f = o - r + 1, e = t - r + 1, l = Math.log(f), s = .5 * Math.exp(2 * l / 3),
                            i = .5 * Math.sqrt(l * s * (f - s) / f) * (e - f / 2 < 0 ? -1 : 1),
                            n = Math.max(r, Math.floor(t - e * s / f + i)),
                            h = Math.min(o, Math.floor(t + (f - e) * s / f + i));
                        partialSort(a, t, n, h, p)
                    }
                    var u = a[t], M = r, w = o;
                    for (swap(a, r, t), p(a[o], u) > 0 && swap(a, r, o); M < w;) {
                        for (swap(a, M, w), M++, w--; p(a[M], u) < 0;) M++;
                        for (; p(a[w], u) > 0;) w--
                    }
                    0 === p(a[r], u) ? swap(a, r, w) : (w++, swap(a, w, o)), w <= t && (r = w + 1), t <= w && (o = w - 1)
                }
            }

            function swap(a, t, r) {
                var o = a[t];
                a[t] = a[r], a[r] = o
            }

            function defaultCompare(a, t) {
                return a < t ? -1 : a > t ? 1 : 0
            }

            module.exports = partialSort;
        }, {}],
        28: [function (_dereq_, module, exports) {
            "use strict";

            function supercluster(t) {
                return new SuperCluster(t)
            }

            function SuperCluster(t) {
                this.options = extend(Object.create(this.options), t), this.trees = new Array(this.options.maxZoom + 1)
            }

            function createCluster(t, e, o, n) {
                return {x: t, y: e, zoom: 1 / 0, id: n, numPoints: o}
            }

            function createPointCluster(t, e) {
                var o = t.geometry.coordinates;
                return createCluster(lngX(o[0]), latY(o[1]), 1, e)
            }

            function getClusterJSON(t) {
                return {
                    type: "Feature",
                    properties: getClusterProperties(t),
                    geometry: {type: "Point", coordinates: [xLng(t.x), yLat(t.y)]}
                }
            }

            function getClusterProperties(t) {
                var e = t.numPoints,
                    o = e >= 1e4 ? Math.round(e / 1e3) + "k" : e >= 1e3 ? Math.round(e / 100) / 10 + "k" : e;
                return {cluster: !0, point_count: e, point_count_abbreviated: o}
            }

            function lngX(t) {
                return t / 360 + .5
            }

            function latY(t) {
                var e = Math.sin(t * Math.PI / 180), o = .5 - .25 * Math.log((1 + e) / (1 - e)) / Math.PI;
                return o < 0 ? 0 : o > 1 ? 1 : o
            }

            function xLng(t) {
                return 360 * (t - .5)
            }

            function yLat(t) {
                var e = (180 - 360 * t) * Math.PI / 180;
                return 360 * Math.atan(Math.exp(e)) / Math.PI - 90
            }

            function extend(t, e) {
                for (var o in e) t[o] = e[o];
                return t
            }

            function getX(t) {
                return t.x
            }

            function getY(t) {
                return t.y
            }

            var kdbush = _dereq_("kdbush");
            module.exports = supercluster, SuperCluster.prototype = {
                options: {
                    minZoom: 0,
                    maxZoom: 16,
                    radius: 40,
                    extent: 512,
                    nodeSize: 64,
                    log: !1
                }, load: function (t) {
                    var e = this.options.log;
                    e && console.time("total time");
                    var o = "prepare " + t.length + " points";
                    e && console.time(o), this.points = t;
                    var n = t.map(createPointCluster);
                    e && console.timeEnd(o);
                    for (var r = this.options.maxZoom; r >= this.options.minZoom; r--) {
                        var i = +Date.now();
                        this.trees[r + 1] = kdbush(n, getX, getY, this.options.nodeSize, Float32Array), n = this._cluster(n, r), e && console.log("z%d: %d clusters in %dms", r, n.length, +Date.now() - i)
                    }
                    return this.trees[this.options.minZoom] = kdbush(n, getX, getY, this.options.nodeSize, Float32Array), e && console.timeEnd("total time"), this
                }, getClusters: function (t, e) {
                    for (var o = this.trees[this._limitZoom(e)], n = o.range(lngX(t[0]), latY(t[3]), lngX(t[2]), latY(t[1])), r = [], i = 0; i < n.length; i++) {
                        var s = o.points[n[i]];
                        r.push(s.id !== -1 ? this.points[s.id] : getClusterJSON(s))
                    }
                    return r
                }, getTile: function (t, e, o) {
                    var n = this.trees[this._limitZoom(t)], r = Math.pow(2, t), i = this.options.extent,
                        s = this.options.radius, u = s / i, a = (o - u) / r, h = (o + 1 + u) / r, l = {features: []};
                    return this._addTileFeatures(n.range((e - u) / r, a, (e + 1 + u) / r, h), n.points, e, o, r, l), 0 === e && this._addTileFeatures(n.range(1 - u / r, a, 1, h), n.points, r, o, r, l), e === r - 1 && this._addTileFeatures(n.range(0, a, u / r, h), n.points, -1, o, r, l), l.features.length ? l : null
                }, _addTileFeatures: function (t, e, o, n, r, i) {
                    for (var s = 0; s < t.length; s++) {
                        var u = e[t[s]];
                        i.features.push({
                            type: 1,
                            geometry: [[Math.round(this.options.extent * (u.x * r - o)), Math.round(this.options.extent * (u.y * r - n))]],
                            tags: u.id !== -1 ? this.points[u.id].properties : getClusterProperties(u)
                        })
                    }
                }, _limitZoom: function (t) {
                    return Math.max(this.options.minZoom, Math.min(t, this.options.maxZoom + 1))
                }, _cluster: function (t, e) {
                    for (var o = [], n = this.options.radius / (this.options.extent * Math.pow(2, e)), r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (!(i.zoom <= e)) {
                            i.zoom = e;
                            for (var s = this.trees[e + 1], u = s.within(i.x, i.y, n), a = !1, h = i.numPoints, l = i.x * h, p = i.y * h, m = 0; m < u.length; m++) {
                                var c = s.points[u[m]];
                                e < c.zoom && (a = !0, c.zoom = e, l += c.x * c.numPoints, p += c.y * c.numPoints, h += c.numPoints)
                            }
                            o.push(a ? createCluster(l / h, p / h, h, -1) : i)
                        }
                    }
                    return o
                }
            };
        }, {"kdbush": 18}],
        29: [function (_dereq_, module, exports) {
            "use strict";

            function TinyQueue(t, i) {
                if (!(this instanceof TinyQueue)) return new TinyQueue(t, i);
                if (this.data = t || [], this.length = this.data.length, this.compare = i || defaultCompare, t) for (var a = Math.floor(this.length / 2); a >= 0; a--) this._down(a)
            }

            function defaultCompare(t, i) {
                return t < i ? -1 : t > i ? 1 : 0
            }

            function swap(t, i, a) {
                var n = t[i];
                t[i] = t[a], t[a] = n
            }

            module.exports = TinyQueue, TinyQueue.prototype = {
                push: function (t) {
                    this.data.push(t), this.length++, this._up(this.length - 1)
                }, pop: function () {
                    var t = this.data[0];
                    return this.data[0] = this.data[this.length - 1], this.length--, this.data.pop(), this._down(0), t
                }, peek: function () {
                    return this.data[0]
                }, _up: function (t) {
                    for (var i = this.data, a = this.compare; t > 0;) {
                        var n = Math.floor((t - 1) / 2);
                        if (!(a(i[t], i[n]) < 0)) break;
                        swap(i, n, t), t = n
                    }
                }, _down: function (t) {
                    for (var i = this.data, a = this.compare, n = this.length; ;) {
                        var e = 2 * t + 1, h = e + 1, s = t;
                        if (e < n && a(i[e], i[s]) < 0 && (s = e), h < n && a(i[h], i[s]) < 0 && (s = h), s === t) return;
                        swap(i, s, t), t = s
                    }
                }
            };
        }, {}],
        30: [function (_dereq_, module, exports) {
            "function" == typeof Object.create ? module.exports = function (t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : module.exports = function (t, e) {
                t.super_ = e;
                var o = function () {
                };
                o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t
            };
        }, {}],
        31: [function (_dereq_, module, exports) {
            module.exports = function (o) {
                return o && "object" == typeof o && "function" == typeof o.copy && "function" == typeof o.fill && "function" == typeof o.readUInt8
            };
        }, {}],
        32: [function (_dereq_, module, exports) {
            (function (process, global) {
                function inspect(e, r) {
                    var t = {seen: [], stylize: stylizeNoColor};
                    return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), isBoolean(r) ? t.showHidden = r : r && exports._extend(t, r), isUndefined(t.showHidden) && (t.showHidden = !1), isUndefined(t.depth) && (t.depth = 2), isUndefined(t.colors) && (t.colors = !1), isUndefined(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = stylizeWithColor), formatValue(t, e, t.depth)
                }

                function stylizeWithColor(e, r) {
                    var t = inspect.styles[r];
                    return t ? "[" + inspect.colors[t][0] + "m" + e + "[" + inspect.colors[t][1] + "m" : e
                }

                function stylizeNoColor(e, r) {
                    return e
                }

                function arrayToHash(e) {
                    var r = {};
                    return e.forEach(function (e, t) {
                        r[e] = !0
                    }), r
                }

                function formatValue(e, r, t) {
                    if (e.customInspect && r && isFunction(r.inspect) && r.inspect !== exports.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                        var n = r.inspect(t, e);
                        return isString(n) || (n = formatValue(e, n, t)), n
                    }
                    var i = formatPrimitive(e, r);
                    if (i) return i;
                    var o = Object.keys(r), s = arrayToHash(o);
                    if (e.showHidden && (o = Object.getOwnPropertyNames(r)), isError(r) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return formatError(r);
                    if (0 === o.length) {
                        if (isFunction(r)) {
                            var u = r.name ? ": " + r.name : "";
                            return e.stylize("[Function" + u + "]", "special")
                        }
                        if (isRegExp(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                        if (isDate(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                        if (isError(r)) return formatError(r)
                    }
                    var c = "", a = !1, l = ["{", "}"];
                    if (isArray(r) && (a = !0, l = ["[", "]"]), isFunction(r)) {
                        var p = r.name ? ": " + r.name : "";
                        c = " [Function" + p + "]"
                    }
                    if (isRegExp(r) && (c = " " + RegExp.prototype.toString.call(r)), isDate(r) && (c = " " + Date.prototype.toUTCString.call(r)), isError(r) && (c = " " + formatError(r)), 0 === o.length && (!a || 0 == r.length)) return l[0] + c + l[1];
                    if (t < 0) return isRegExp(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special");
                    e.seen.push(r);
                    var f;
                    return f = a ? formatArray(e, r, t, s, o) : o.map(function (n) {
                        return formatProperty(e, r, t, s, n, a)
                    }), e.seen.pop(), reduceToSingleString(f, c, l)
                }

                function formatPrimitive(e, r) {
                    if (isUndefined(r)) return e.stylize("undefined", "undefined");
                    if (isString(r)) {
                        var t = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(t, "string")
                    }
                    return isNumber(r) ? e.stylize("" + r, "number") : isBoolean(r) ? e.stylize("" + r, "boolean") : isNull(r) ? e.stylize("null", "null") : void 0
                }

                function formatError(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }

                function formatArray(e, r, t, n, i) {
                    for (var o = [], s = 0, u = r.length; s < u; ++s) hasOwnProperty(r, String(s)) ? o.push(formatProperty(e, r, t, n, String(s), !0)) : o.push("");
                    return i.forEach(function (i) {
                        i.match(/^\d+$/) || o.push(formatProperty(e, r, t, n, i, !0))
                    }), o
                }

                function formatProperty(e, r, t, n, i, o) {
                    var s, u, c;
                    if (c = Object.getOwnPropertyDescriptor(r, i) || {value: r[i]}, c.get ? u = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (u = e.stylize("[Setter]", "special")), hasOwnProperty(n, i) || (s = "[" + i + "]"), u || (e.seen.indexOf(c.value) < 0 ? (u = isNull(t) ? formatValue(e, c.value, null) : formatValue(e, c.value, t - 1), u.indexOf("\n") > -1 && (u = o ? u.split("\n").map(function (e) {
                            return "  " + e
                        }).join("\n").substr(2) : "\n" + u.split("\n").map(function (e) {
                            return "   " + e
                        }).join("\n"))) : u = e.stylize("[Circular]", "special")), isUndefined(s)) {
                        if (o && i.match(/^\d+$/)) return u;
                        s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                    }
                    return s + ": " + u
                }

                function reduceToSingleString(e, r, t) {
                    var n = 0, i = e.reduce(function (e, r) {
                        return n++, r.indexOf("\n") >= 0 && n++, e + r.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                    return i > 60 ? t[0] + ("" === r ? "" : r + "\n ") + " " + e.join(",\n  ") + " " + t[1] : t[0] + r + " " + e.join(", ") + " " + t[1]
                }

                function isArray(e) {
                    return Array.isArray(e)
                }

                function isBoolean(e) {
                    return "boolean" == typeof e
                }

                function isNull(e) {
                    return null === e
                }

                function isNullOrUndefined(e) {
                    return null == e
                }

                function isNumber(e) {
                    return "number" == typeof e
                }

                function isString(e) {
                    return "string" == typeof e
                }

                function isSymbol(e) {
                    return "symbol" == typeof e
                }

                function isUndefined(e) {
                    return void 0 === e
                }

                function isRegExp(e) {
                    return isObject(e) && "[object RegExp]" === objectToString(e)
                }

                function isObject(e) {
                    return "object" == typeof e && null !== e
                }

                function isDate(e) {
                    return isObject(e) && "[object Date]" === objectToString(e)
                }

                function isError(e) {
                    return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error)
                }

                function isFunction(e) {
                    return "function" == typeof e
                }

                function isPrimitive(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
                }

                function objectToString(e) {
                    return Object.prototype.toString.call(e)
                }

                function pad(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }

                function timestamp() {
                    var e = new Date, r = [pad(e.getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":");
                    return [e.getDate(), months[e.getMonth()], r].join(" ")
                }

                function hasOwnProperty(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                }

                var formatRegExp = /%[sdj%]/g;
                exports.format = function (e) {
                    if (!isString(e)) {
                        for (var r = [], t = 0; t < arguments.length; t++) r.push(inspect(arguments[t]));
                        return r.join(" ")
                    }
                    for (var t = 1, n = arguments, i = n.length, o = String(e).replace(formatRegExp, function (e) {
                        if ("%%" === e) return "%";
                        if (t >= i) return e;
                        switch (e) {
                            case"%s":
                                return String(n[t++]);
                            case"%d":
                                return Number(n[t++]);
                            case"%j":
                                try {
                                    return JSON.stringify(n[t++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), s = n[t]; t < i; s = n[++t]) o += isNull(s) || !isObject(s) ? " " + s : " " + inspect(s);
                    return o
                }, exports.deprecate = function (e, r) {
                    function t() {
                        if (!n) {
                            if (process.throwDeprecation) throw new Error(r);
                            process.traceDeprecation ? console.trace(r) : console.error(r), n = !0
                        }
                        return e.apply(this, arguments)
                    }

                    if (isUndefined(global.process)) return function () {
                        return exports.deprecate(e, r).apply(this, arguments)
                    };
                    if (process.noDeprecation === !0) return e;
                    var n = !1;
                    return t
                };
                var debugs = {}, debugEnviron;
                exports.debuglog = function (e) {
                    if (isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || ""), e = e.toUpperCase(), !debugs[e]) if (new RegExp("\\b" + e + "\\b", "i").test(debugEnviron)) {
                        var r = process.pid;
                        debugs[e] = function () {
                            var t = exports.format.apply(exports, arguments);
                            console.error("%s %d: %s", e, r, t)
                        }
                    } else debugs[e] = function () {
                    };
                    return debugs[e]
                }, exports.inspect = inspect, inspect.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                }, inspect.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, exports.isArray = isArray, exports.isBoolean = isBoolean, exports.isNull = isNull, exports.isNullOrUndefined = isNullOrUndefined, exports.isNumber = isNumber, exports.isString = isString, exports.isSymbol = isSymbol, exports.isUndefined = isUndefined, exports.isRegExp = isRegExp, exports.isObject = isObject, exports.isDate = isDate, exports.isError = isError, exports.isFunction = isFunction, exports.isPrimitive = isPrimitive, exports.isBuffer = _dereq_("./support/isBuffer");
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                exports.log = function () {
                    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments))
                }, exports.inherits = _dereq_("inherits"), exports._extend = function (e, r) {
                    if (!r || !isObject(r)) return e;
                    for (var t = Object.keys(r), n = t.length; n--;) e[t[n]] = r[t[n]];
                    return e
                };
            }).call(this, _dereq_('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

        }, {"./support/isBuffer": 31, "_process": 26, "inherits": 30}],
        33: [function (_dereq_, module, exports) {
            module.exports.VectorTile = _dereq_("./lib/vectortile.js"), module.exports.VectorTileFeature = _dereq_("./lib/vectortilefeature.js"), module.exports.VectorTileLayer = _dereq_("./lib/vectortilelayer.js");
        }, {"./lib/vectortile.js": 34, "./lib/vectortilefeature.js": 35, "./lib/vectortilelayer.js": 36}],
        34: [function (_dereq_, module, exports) {
            "use strict";

            function VectorTile(e, r) {
                this.layers = e.readFields(readTile, {}, r)
            }

            function readTile(e, r, i) {
                if (3 === e) {
                    var t = new VectorTileLayer(i, i.readVarint() + i.pos);
                    t.length && (r[t.name] = t)
                }
            }

            var VectorTileLayer = _dereq_("./vectortilelayer");
            module.exports = VectorTile;
        }, {"./vectortilelayer": 36}],
        35: [function (_dereq_, module, exports) {
            "use strict";

            function VectorTileFeature(e, t, r, i, a) {
                this.properties = {}, this.extent = r, this.type = 0, this._pbf = e, this._geometry = -1, this._keys = i, this._values = a, e.readFields(readFeature, this, t)
            }

            function readFeature(e, t, r) {
                1 == e ? t.id = r.readVarint() : 2 == e ? readTag(r, t) : 3 == e ? t.type = r.readVarint() : 4 == e && (t._geometry = r.pos)
            }

            function readTag(e, t) {
                for (var r = e.readVarint() + e.pos; e.pos < r;) {
                    var i = t._keys[e.readVarint()], a = t._values[e.readVarint()];
                    t.properties[i] = a
                }
            }

            function classifyRings(e) {
                var t = e.length;
                if (t <= 1) return [e];
                for (var r, i, a = [], o = 0; o < t; o++) {
                    var n = signedArea(e[o]);
                    0 !== n && (void 0 === i && (i = n < 0), i === n < 0 ? (r && a.push(r), r = [e[o]]) : r.push(e[o]))
                }
                return r && a.push(r), a
            }

            function signedArea(e) {
                for (var t, r, i = 0, a = 0, o = e.length, n = o - 1; a < o; n = a++) t = e[a], r = e[n], i += (r.x - t.x) * (t.y + r.y);
                return i
            }

            var Point = _dereq_("point-geometry");
            module.exports = VectorTileFeature, VectorTileFeature.types = ["Unknown", "Point", "LineString", "Polygon"], VectorTileFeature.prototype.loadGeometry = function () {
                var e = this._pbf;
                e.pos = this._geometry;
                for (var t, r = e.readVarint() + e.pos, i = 1, a = 0, o = 0, n = 0, s = []; e.pos < r;) {
                    if (!a) {
                        var p = e.readVarint();
                        i = 7 & p, a = p >> 3
                    }
                    if (a--, 1 === i || 2 === i) o += e.readSVarint(), n += e.readSVarint(), 1 === i && (t && s.push(t), t = []), t.push(new Point(o, n)); else {
                        if (7 !== i) throw new Error("unknown command " + i);
                        t && t.push(t[0].clone())
                    }
                }
                return t && s.push(t), s
            }, VectorTileFeature.prototype.bbox = function () {
                var e = this._pbf;
                e.pos = this._geometry;
                for (var t = e.readVarint() + e.pos, r = 1, i = 0, a = 0, o = 0, n = 1 / 0, s = -(1 / 0), p = 1 / 0, h = -(1 / 0); e.pos < t;) {
                    if (!i) {
                        var u = e.readVarint();
                        r = 7 & u, i = u >> 3
                    }
                    if (i--, 1 === r || 2 === r) a += e.readSVarint(), o += e.readSVarint(), a < n && (n = a), a > s && (s = a), o < p && (p = o), o > h && (h = o); else if (7 !== r) throw new Error("unknown command " + r)
                }
                return [n, p, s, h]
            }, VectorTileFeature.prototype.toGeoJSON = function (e, t, r) {
                function i(e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t], i = 180 - 360 * (r.y + p) / n;
                        e[t] = [360 * (r.x + s) / n - 180, 360 / Math.PI * Math.atan(Math.exp(i * Math.PI / 180)) - 90]
                    }
                }

                var a, o, n = this.extent * Math.pow(2, r), s = this.extent * e, p = this.extent * t,
                    h = this.loadGeometry(), u = VectorTileFeature.types[this.type];
                switch (this.type) {
                    case 1:
                        var d = [];
                        for (a = 0; a < h.length; a++) d[a] = h[a][0];
                        h = d, i(h);
                        break;
                    case 2:
                        for (a = 0; a < h.length; a++) i(h[a]);
                        break;
                    case 3:
                        for (h = classifyRings(h), a = 0; a < h.length; a++) for (o = 0; o < h[a].length; o++) i(h[a][o])
                }
                1 === h.length ? h = h[0] : u = "Multi" + u;
                var f = {type: "Feature", geometry: {type: u, coordinates: h}, properties: this.properties};
                return "id" in this && (f.id = this.id), f
            };
        }, {"point-geometry": 25}],
        36: [function (_dereq_, module, exports) {
            "use strict";

            function VectorTileLayer(e, t) {
                this.version = 1, this.name = null, this.extent = 4096, this.length = 0, this._pbf = e, this._keys = [], this._values = [], this._features = [], e.readFields(readLayer, this, t), this.length = this._features.length
            }

            function readLayer(e, t, r) {
                15 === e ? t.version = r.readVarint() : 1 === e ? t.name = r.readString() : 5 === e ? t.extent = r.readVarint() : 2 === e ? t._features.push(r.pos) : 3 === e ? t._keys.push(r.readString()) : 4 === e && t._values.push(readValueMessage(r))
            }

            function readValueMessage(e) {
                for (var t = null, r = e.readVarint() + e.pos; e.pos < r;) {
                    var a = e.readVarint() >> 3;
                    t = 1 === a ? e.readString() : 2 === a ? e.readFloat() : 3 === a ? e.readDouble() : 4 === a ? e.readVarint64() : 5 === a ? e.readVarint() : 6 === a ? e.readSVarint() : 7 === a ? e.readBoolean() : null
                }
                return t
            }

            var VectorTileFeature = _dereq_("./vectortilefeature.js");
            module.exports = VectorTileLayer, VectorTileLayer.prototype.feature = function (e) {
                if (e < 0 || e >= this._features.length) throw new Error("feature index out of bounds");
                this._pbf.pos = this._features[e];
                var t = this._pbf.readVarint() + this._pbf.pos;
                return new VectorTileFeature(this._pbf, t, this.extent, this._keys, this._values)
            };
        }, {"./vectortilefeature.js": 35}],
        37: [function (_dereq_, module, exports) {
            function fromVectorTileJs(e) {
                var r = [];
                for (var o in e.layers) r.push(prepareLayer(e.layers[o]));
                var t = new Pbf;
                return vtpb.tile.write({layers: r}, t), t.finish()
            }

            function fromGeojsonVt(e) {
                var r = {};
                for (var o in e) r[o] = new GeoJSONWrapper(e[o].features), r[o].name = o;
                return fromVectorTileJs({layers: r})
            }

            function prepareLayer(e) {
                for (var r = {
                    name: e.name || "",
                    version: e.version || 1,
                    extent: e.extent || 4096,
                    keys: [],
                    values: [],
                    features: []
                }, o = {}, t = {}, n = 0; n < e.length; n++) {
                    var a = e.feature(n);
                    a.geometry = encodeGeometry(a.loadGeometry());
                    var u = [];
                    for (var s in a.properties) {
                        var i = o[s];
                        "undefined" == typeof i && (r.keys.push(s), i = r.keys.length - 1, o[s] = i);
                        var p = wrapValue(a.properties[s]), l = t[p.key];
                        "undefined" == typeof l && (r.values.push(p), l = r.values.length - 1, t[p.key] = l), u.push(i), u.push(l)
                    }
                    a.tags = u, r.features.push(a)
                }
                return r
            }

            function command(e, r) {
                return (r << 3) + (7 & e)
            }

            function zigzag(e) {
                return e << 1 ^ e >> 31
            }

            function encodeGeometry(e) {
                for (var r = [], o = 0, t = 0, n = e.length, a = 0; a < n; a++) {
                    var u = e[a];
                    r.push(command(1, 1));
                    for (var s = 0; s < u.length; s++) {
                        1 === s && r.push(command(2, u.length - 1));
                        var i = u[s].x - o, p = u[s].y - t;
                        r.push(zigzag(i), zigzag(p)), o += i, t += p
                    }
                }
                return r
            }

            function wrapValue(e) {
                var r, o = typeof e;
                return "string" === o ? r = {string_value: e} : "boolean" === o ? r = {bool_value: e} : "number" === o ? r = e % 1 !== 0 ? {double_value: e} : e < 0 ? {sint_value: e} : {uint_value: e} : (e = JSON.stringify(e), r = {string_value: e}), r.key = o + ":" + e, r
            }

            var Pbf = _dereq_("pbf"), vtpb = _dereq_("./vector-tile-pb"),
                GeoJSONWrapper = _dereq_("./lib/geojson_wrapper");
            module.exports = fromVectorTileJs, module.exports.fromVectorTileJs = fromVectorTileJs, module.exports.fromGeojsonVt = fromGeojsonVt, module.exports.GeoJSONWrapper = GeoJSONWrapper;
        }, {"./lib/geojson_wrapper": 38, "./vector-tile-pb": 39, "pbf": 24}],
        38: [function (_dereq_, module, exports) {
            "use strict";

            function GeoJSONWrapper(e) {
                this.features = e, this.length = e.length
            }

            function FeatureWrapper(e) {
                this.id = "number" == typeof e.id ? e.id : void 0, this.type = e.type, this.rawGeometry = 1 === e.type ? [e.geometry] : e.geometry, this.properties = e.tags, this.extent = 4096
            }

            var Point = _dereq_("point-geometry"), VectorTileFeature = _dereq_("vector-tile").VectorTileFeature;
            module.exports = GeoJSONWrapper, GeoJSONWrapper.prototype.feature = function (e) {
                return new FeatureWrapper(this.features[e])
            }, FeatureWrapper.prototype.loadGeometry = function () {
                var e = this.rawGeometry;
                this.geometry = [];
                for (var t = 0; t < e.length; t++) {
                    for (var r = e[t], o = [], a = 0; a < r.length; a++) o.push(new Point(r[a][0], r[a][1]));
                    this.geometry.push(o)
                }
                return this.geometry
            }, FeatureWrapper.prototype.bbox = function () {
                this.geometry || this.loadGeometry();
                for (var e = this.geometry, t = 1 / 0, r = -(1 / 0), o = 1 / 0, a = -(1 / 0), i = 0; i < e.length; i++) for (var p = e[i], n = 0; n < p.length; n++) {
                    var h = p[n];
                    t = Math.min(t, h.x), r = Math.max(r, h.x), o = Math.min(o, h.y), a = Math.max(a, h.y)
                }
                return [t, o, r, a]
            }, FeatureWrapper.prototype.toGeoJSON = VectorTileFeature.prototype.toGeoJSON;
        }, {"point-geometry": 25, "vector-tile": 33}],
        39: [function (_dereq_, module, exports) {
            "use strict";

            function readTile(e, r) {
                return e.readFields(readTileField, {layers: []}, r)
            }

            function readTileField(e, r, i) {
                3 === e && r.layers.push(readLayer(i, i.readVarint() + i.pos))
            }

            function writeTile(e, r) {
                var i;
                if (void 0 !== e.layers) for (i = 0; i < e.layers.length; i++) r.writeMessage(3, writeLayer, e.layers[i])
            }

            function readValue(e, r) {
                return e.readFields(readValueField, {}, r)
            }

            function readValueField(e, r, i) {
                1 === e ? r.string_value = i.readString() : 2 === e ? r.float_value = i.readFloat() : 3 === e ? r.double_value = i.readDouble() : 4 === e ? r.int_value = i.readVarint() : 5 === e ? r.uint_value = i.readVarint() : 6 === e ? r.sint_value = i.readSVarint() : 7 === e && (r.bool_value = i.readBoolean())
            }

            function writeValue(e, r) {
                void 0 !== e.string_value && r.writeStringField(1, e.string_value), void 0 !== e.float_value && r.writeFloatField(2, e.float_value), void 0 !== e.double_value && r.writeDoubleField(3, e.double_value), void 0 !== e.int_value && r.writeVarintField(4, e.int_value), void 0 !== e.uint_value && r.writeVarintField(5, e.uint_value), void 0 !== e.sint_value && r.writeSVarintField(6, e.sint_value), void 0 !== e.bool_value && r.writeBooleanField(7, e.bool_value)
            }

            function readFeature(e, r) {
                var i = e.readFields(readFeatureField, {}, r);
                return void 0 === i.type && (i.type = "Unknown"), i
            }

            function readFeatureField(e, r, i) {
                1 === e ? r.id = i.readVarint() : 2 === e ? r.tags = i.readPackedVarint() : 3 === e ? r.type = i.readVarint() : 4 === e && (r.geometry = i.readPackedVarint())
            }

            function writeFeature(e, r) {
                void 0 !== e.id && r.writeVarintField(1, e.id), void 0 !== e.tags && r.writePackedVarint(2, e.tags), void 0 !== e.type && r.writeVarintField(3, e.type), void 0 !== e.geometry && r.writePackedVarint(4, e.geometry)
            }

            function readLayer(e, r) {
                return e.readFields(readLayerField, {features: [], keys: [], values: []}, r)
            }

            function readLayerField(e, r, i) {
                15 === e ? r.version = i.readVarint() : 1 === e ? r.name = i.readString() : 2 === e ? r.features.push(readFeature(i, i.readVarint() + i.pos)) : 3 === e ? r.keys.push(i.readString()) : 4 === e ? r.values.push(readValue(i, i.readVarint() + i.pos)) : 5 === e && (r.extent = i.readVarint())
            }

            function writeLayer(e, r) {
                void 0 !== e.version && r.writeVarintField(15, e.version), void 0 !== e.name && r.writeStringField(1, e.name);
                var i;
                if (void 0 !== e.features) for (i = 0; i < e.features.length; i++) r.writeMessage(2, writeFeature, e.features[i]);
                if (void 0 !== e.keys) for (i = 0; i < e.keys.length; i++) r.writeStringField(3, e.keys[i]);
                if (void 0 !== e.values) for (i = 0; i < e.values.length; i++) r.writeMessage(4, writeValue, e.values[i]);
                void 0 !== e.extent && r.writeVarintField(5, e.extent)
            }

            var tile = exports.tile = {read: readTile, write: writeTile};
            tile.GeomType = {Unknown: 0, Point: 1, LineString: 2, Polygon: 3}, tile.value = {
                read: readValue,
                write: writeValue
            }, tile.feature = {read: readFeature, write: writeFeature}, tile.layer = {
                read: readLayer,
                write: writeLayer
            };
        }, {}],
        40: [function (_dereq_, module, exports) {
            var bundleFn = arguments[3], sources = arguments[4], cache = arguments[5], stringify = JSON.stringify;
            module.exports = function (r, e) {
                function t(r) {
                    d[r] = !0;
                    for (var e in sources[r][1]) {
                        var n = sources[r][1][e];
                        d[n] || t(n)
                    }
                }

                for (var n, o = Object.keys(cache), a = 0, i = o.length; a < i; a++) {
                    var s = o[a], u = cache[s].exports;
                    if (u === r || u && u.default === r) {
                        n = s;
                        break
                    }
                }
                if (!n) {
                    n = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var f = {}, a = 0, i = o.length; a < i; a++) {
                        var s = o[a];
                        f[s] = s
                    }
                    sources[n] = [Function(["require", "module", "exports"], "(" + r + ")(self)"), f]
                }
                var c = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), l = {};
                l[n] = n, sources[c] = [Function(["require"], "var f = require(" + stringify(n) + ");(f.default ? f.default : f)(self);"), l];
                var d = {};
                t(c);
                var g = "(" + bundleFn + ")({" + Object.keys(d).map(function (r) {
                        return stringify(r) + ":[" + sources[r][0] + "," + stringify(sources[r][1]) + "]"
                    }).join(",") + "},{},[" + stringify(c) + "])",
                    v = window.URL || window.webkitURL || window.mozURL || window.msURL,
                    w = new Blob([g], {type: "text/javascript"});
                if (e && e.bare) return w;
                var h = v.createObjectURL(w), b = new Worker(h);
                return b.objectURL = h, b
            };
        }, {}],
        41: [function (_dereq_, module, exports) {
            module.exports.RADIUS = 6378137, module.exports.FLATTENING = 1 / 298.257223563, module.exports.POLAR_RADIUS = 6356752.3142;
        }, {}],
        42: [function (_dereq_, module, exports) {
            module.exports = {"version": "0.38.0"}
        }, {}],
        43: [function (_dereq_, module, exports) {
            "use strict";

            function serializePaintVertexArrays(r, e) {
                var t = {};
                for (var a in r) {
                    var i = r[a].paintVertexArray;
                    if (0 !== i.length) {
                        var n = i.serialize(e), s = i.constructor.serialize();
                        t[a] = {array: n, type: s}
                    }
                }
                return t
            }

            var ProgramConfiguration = _dereq_("./program_configuration"),
                createVertexArrayType = _dereq_("./vertex_array_type"), Segment = function (r, e) {
                    this.vertexOffset = r, this.primitiveOffset = e, this.vertexLength = 0, this.primitiveLength = 0
                }, ArrayGroup = function (r, e, t) {
                    var a = this;
                    this.globalProperties = {zoom: t};
                    var i = createVertexArrayType(r.layoutAttributes);
                    this.layoutVertexArray = new i;
                    var n = r.elementArrayType;
                    n && (this.elementArray = new n);
                    var s = r.elementArrayType2;
                    s && (this.elementArray2 = new s), this.layerData = {};
                    for (var y = 0, o = e; y < o.length; y += 1) {
                        var p = o[y], l = ProgramConfiguration.createDynamic(r, p, t);
                        a.layerData[p.id] = {
                            layer: p,
                            programConfiguration: l,
                            paintVertexArray: new l.PaintVertexArray,
                            paintPropertyStatistics: l.createPaintPropertyStatistics()
                        }
                    }
                    this.segments = [], this.segments2 = []
                };
            ArrayGroup.prototype.prepareSegment = function (r) {
                var e = this.segments[this.segments.length - 1];
                return (!e || e.vertexLength + r > ArrayGroup.MAX_VERTEX_ARRAY_LENGTH) && (e = new Segment(this.layoutVertexArray.length, this.elementArray.length), this.segments.push(e)), e
            }, ArrayGroup.prototype.prepareSegment2 = function (r) {
                var e = this.segments2[this.segments2.length - 1];
                return (!e || e.vertexLength + r > ArrayGroup.MAX_VERTEX_ARRAY_LENGTH) && (e = new Segment(this.layoutVertexArray.length, this.elementArray2.length), this.segments2.push(e)), e
            }, ArrayGroup.prototype.populatePaintArrays = function (r) {
                var e = this;
                for (var t in e.layerData) {
                    var a = e.layerData[t];
                    0 !== a.paintVertexArray.bytesPerElement && a.programConfiguration.populatePaintArray(a.layer, a.paintVertexArray, a.paintPropertyStatistics, e.layoutVertexArray.length, e.globalProperties, r)
                }
            }, ArrayGroup.prototype.isEmpty = function () {
                return 0 === this.layoutVertexArray.length
            }, ArrayGroup.prototype.serialize = function (r) {
                return {
                    layoutVertexArray: this.layoutVertexArray.serialize(r),
                    elementArray: this.elementArray && this.elementArray.serialize(r),
                    elementArray2: this.elementArray2 && this.elementArray2.serialize(r),
                    paintVertexArrays: serializePaintVertexArrays(this.layerData, r),
                    segments: this.segments,
                    segments2: this.segments2
                }
            }, ArrayGroup.MAX_VERTEX_ARRAY_LENGTH = Math.pow(2, 16) - 1, module.exports = ArrayGroup;
        }, {"./program_configuration": 57, "./vertex_array_type": 59}],
        44: [function (_dereq_, module, exports) {
            "use strict";
            var ArrayGroup = _dereq_("./array_group"), BufferGroup = _dereq_("./buffer_group"),
                util = _dereq_("../util/util"), Bucket = function (r, t) {
                    this.zoom = r.zoom, this.overscaling = r.overscaling, this.layers = r.layers, this.index = r.index, r.arrays ? this.buffers = new BufferGroup(t, r.layers, r.zoom, r.arrays) : this.arrays = new ArrayGroup(t, r.layers, r.zoom)
                };
            Bucket.prototype.populate = function (r, t) {
                for (var e = this, i = 0, a = r; i < a.length; i += 1) {
                    var u = a[i];
                    e.layers[0].filter(u) && (e.addFeature(u), t.featureIndex.insert(u, e.index))
                }
            }, Bucket.prototype.getPaintPropertyStatistics = function () {
                return util.mapObject(this.arrays.layerData, function (r) {
                    return r.paintPropertyStatistics
                })
            }, Bucket.prototype.isEmpty = function () {
                return this.arrays.isEmpty()
            }, Bucket.prototype.serialize = function (r) {
                return {
                    zoom: this.zoom, layerIds: this.layers.map(function (r) {
                        return r.id
                    }), arrays: this.arrays.serialize(r)
                }
            }, Bucket.prototype.destroy = function () {
                this.buffers && (this.buffers.destroy(), this.buffers = null)
            }, module.exports = Bucket, Bucket.deserialize = function (r, t) {
                if (t) {
                    for (var e = {}, i = 0, a = r; i < a.length; i += 1) {
                        var u = a[i], o = u.layerIds.map(function (r) {
                            return t.getLayer(r)
                        }).filter(Boolean);
                        if (0 !== o.length) for (var s = o[0].createBucket(util.extend({layers: o}, u)), n = 0, f = o; n < f.length; n += 1) {
                            var y = f[n];
                            e[y.id] = s
                        }
                    }
                    return e
                }
            };
        }, {"../util/util": 215, "./array_group": 43, "./buffer_group": 51}],
        45: [function (_dereq_, module, exports) {
            "use strict";

            function addCircleVertex(e, r, t, c, i) {
                e.emplaceBack(2 * r + (c + 1) / 2, 2 * t + (i + 1) / 2)
            }

            var Bucket = _dereq_("../bucket"), createElementArrayType = _dereq_("../element_array_type"),
                loadGeometry = _dereq_("../load_geometry"), EXTENT = _dereq_("../extent"), circleInterface = {
                    layoutAttributes: [{name: "a_pos", components: 2, type: "Int16"}],
                    elementArrayType: createElementArrayType(),
                    paintAttributes: [{property: "circle-color", type: "Uint8"}, {
                        property: "circle-radius",
                        type: "Uint16",
                        multiplier: 10
                    }, {property: "circle-blur", type: "Uint16", multiplier: 10}, {
                        property: "circle-opacity",
                        type: "Uint8",
                        multiplier: 255
                    }, {property: "circle-stroke-color", type: "Uint8"}, {
                        property: "circle-stroke-width",
                        type: "Uint16",
                        multiplier: 10
                    }, {property: "circle-stroke-opacity", type: "Uint8", multiplier: 255}]
                }, CircleBucket = function (e) {
                    function r(r) {
                        e.call(this, r, circleInterface)
                    }

                    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.addFeature = function (e) {
                        for (var r = this.arrays, t = 0, c = loadGeometry(e); t < c.length; t += 1) for (var i = c[t], a = 0, p = i; a < p.length; a += 1) {
                            var l = p[a], o = l.x, y = l.y;
                            if (!(o < 0 || o >= EXTENT || y < 0 || y >= EXTENT)) {
                                var n = r.prepareSegment(4), u = n.vertexLength;
                                addCircleVertex(r.layoutVertexArray, o, y, -1, -1), addCircleVertex(r.layoutVertexArray, o, y, 1, -1), addCircleVertex(r.layoutVertexArray, o, y, 1, 1), addCircleVertex(r.layoutVertexArray, o, y, -1, 1), r.elementArray.emplaceBack(u, u + 1, u + 2), r.elementArray.emplaceBack(u, u + 3, u + 2), n.vertexLength += 4, n.primitiveLength += 2
                            }
                        }
                        r.populatePaintArrays(e.properties)
                    }, r
                }(Bucket);
            CircleBucket.programInterface = circleInterface, module.exports = CircleBucket;
        }, {"../bucket": 44, "../element_array_type": 52, "../extent": 53, "../load_geometry": 55}],
        46: [function (_dereq_, module, exports) {
            "use strict";
            var Bucket = _dereq_("../bucket"), createElementArrayType = _dereq_("../element_array_type"),
                loadGeometry = _dereq_("../load_geometry"), earcut = _dereq_("earcut"),
                classifyRings = _dereq_("../../util/classify_rings"), EARCUT_MAX_RINGS = 500, fillInterface = {
                    layoutAttributes: [{name: "a_pos", components: 2, type: "Int16"}],
                    elementArrayType: createElementArrayType(3),
                    elementArrayType2: createElementArrayType(2),
                    paintAttributes: [{property: "fill-color", type: "Uint8"}, {
                        property: "fill-outline-color",
                        type: "Uint8"
                    }, {property: "fill-opacity", type: "Uint8", multiplier: 255}]
                }, FillBucket = function (e) {
                    function t(t) {
                        e.call(this, t, fillInterface)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.addFeature = function (e) {
                        for (var t = this.arrays, r = 0, a = classifyRings(loadGeometry(e), EARCUT_MAX_RINGS); r < a.length; r += 1) {
                            for (var l = a[r], n = 0, p = 0, i = l; p < i.length; p += 1) {
                                var o = i[p];
                                n += o.length
                            }
                            for (var y = t.prepareSegment(n), c = y.vertexLength, u = [], s = [], g = 0, h = l; g < h.length; g += 1) {
                                var m = h[g];
                                if (0 !== m.length) {
                                    m !== l[0] && s.push(u.length / 2);
                                    var f = t.prepareSegment2(m.length), A = f.vertexLength;
                                    t.layoutVertexArray.emplaceBack(m[0].x, m[0].y), t.elementArray2.emplaceBack(A + m.length - 1, A), u.push(m[0].x), u.push(m[0].y);
                                    for (var v = 1; v < m.length; v++) t.layoutVertexArray.emplaceBack(m[v].x, m[v].y), t.elementArray2.emplaceBack(A + v - 1, A + v), u.push(m[v].x), u.push(m[v].y);
                                    f.vertexLength += m.length, f.primitiveLength += m.length
                                }
                            }
                            for (var _ = earcut(u, s), k = 0; k < _.length; k += 3) t.elementArray.emplaceBack(c + _[k], c + _[k + 1], c + _[k + 2]);
                            y.vertexLength += n, y.primitiveLength += _.length / 3
                        }
                        t.populatePaintArrays(e.properties)
                    }, t
                }(Bucket);
            FillBucket.programInterface = fillInterface, module.exports = FillBucket;
        }, {
            "../../util/classify_rings": 197,
            "../bucket": 44,
            "../element_array_type": 52,
            "../load_geometry": 55,
            "earcut": 5
        }],
        47: [function (_dereq_, module, exports) {
            "use strict";

            function addVertex(e, t, r, a, n, o, i, y) {
                e.emplaceBack(t, r, 2 * Math.floor(a * FACTOR) + i, n * FACTOR * 2, o * FACTOR * 2, Math.round(y))
            }

            function isBoundaryEdge(e, t) {
                return e.x === t.x && (e.x < 0 || e.x > EXTENT) || e.y === t.y && (e.y < 0 || e.y > EXTENT)
            }

            var Bucket = _dereq_("../bucket"), createElementArrayType = _dereq_("../element_array_type"),
                loadGeometry = _dereq_("../load_geometry"), EXTENT = _dereq_("../extent"), earcut = _dereq_("earcut"),
                classifyRings = _dereq_("../../util/classify_rings"), EARCUT_MAX_RINGS = 500, fillExtrusionInterface = {
                    layoutAttributes: [{
                        name: "a_pos",
                        components: 2,
                        type: "Int16"
                    }, {name: "a_normal", components: 3, type: "Int16"}, {
                        name: "a_edgedistance",
                        components: 1,
                        type: "Int16"
                    }],
                    elementArrayType: createElementArrayType(3),
                    paintAttributes: [{property: "fill-extrusion-base", type: "Uint16"}, {
                        property: "fill-extrusion-height",
                        type: "Uint16"
                    }, {property: "fill-extrusion-color", type: "Uint8"}]
                }, FACTOR = Math.pow(2, 13), FillExtrusionBucket = function (e) {
                    function t(t) {
                        e.call(this, t, fillExtrusionInterface)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.addFeature = function (e) {
                        for (var t = this.arrays, r = 0, a = classifyRings(loadGeometry(e), EARCUT_MAX_RINGS); r < a.length; r += 1) {
                            for (var n = a[r], o = 0, i = 0, y = n; i < y.length; i += 1) {
                                var l = y[i];
                                o += l.length
                            }
                            for (var u = t.prepareSegment(5 * o), p = [], s = [], c = [], x = 0, f = n; x < f.length; x += 1) {
                                var d = f[x];
                                if (0 !== d.length) {
                                    d !== n[0] && s.push(p.length / 2);
                                    for (var m = 0, h = 0; h < d.length; h++) {
                                        var g = d[h];
                                        if (addVertex(t.layoutVertexArray, g.x, g.y, 0, 0, 1, 1, 0), c.push(u.vertexLength++), h >= 1) {
                                            var A = d[h - 1];
                                            if (!isBoundaryEdge(g, A)) {
                                                var E = g.sub(A)._perp()._unit();
                                                addVertex(t.layoutVertexArray, g.x, g.y, E.x, E.y, 0, 0, m), addVertex(t.layoutVertexArray, g.x, g.y, E.x, E.y, 0, 1, m), m += A.dist(g), addVertex(t.layoutVertexArray, A.x, A.y, E.x, E.y, 0, 0, m), addVertex(t.layoutVertexArray, A.x, A.y, E.x, E.y, 0, 1, m);
                                                var v = u.vertexLength;
                                                t.elementArray.emplaceBack(v, v + 1, v + 2), t.elementArray.emplaceBack(v + 1, v + 2, v + 3), u.vertexLength += 4, u.primitiveLength += 2
                                            }
                                        }
                                        p.push(g.x), p.push(g.y)
                                    }
                                }
                            }
                            for (var _ = earcut(p, s), T = 0; T < _.length; T += 3) t.elementArray.emplaceBack(c[_[T]], c[_[T + 1]], c[_[T + 2]]);
                            u.primitiveLength += _.length / 3
                        }
                        t.populatePaintArrays(e.properties)
                    }, t
                }(Bucket);
            FillExtrusionBucket.programInterface = fillExtrusionInterface, module.exports = FillExtrusionBucket;
        }, {
            "../../util/classify_rings": 197,
            "../bucket": 44,
            "../element_array_type": 52,
            "../extent": 53,
            "../load_geometry": 55,
            "earcut": 5
        }],
        48: [function (_dereq_, module, exports) {
            "use strict";

            function addLineVertex(e, t, r, i, a, n, d) {
                e.emplaceBack(t.x << 1 | i, t.y << 1 | a, Math.round(EXTRUDE_SCALE * r.x) + 128, Math.round(EXTRUDE_SCALE * r.y) + 128, (0 === n ? 0 : n < 0 ? -1 : 1) + 1 | (d * LINE_DISTANCE_SCALE & 63) << 2, d * LINE_DISTANCE_SCALE >> 6)
            }

            var Bucket = _dereq_("../bucket"), createElementArrayType = _dereq_("../element_array_type"),
                loadGeometry = _dereq_("../load_geometry"), EXTENT = _dereq_("../extent"),
                VectorTileFeature = _dereq_("vector-tile").VectorTileFeature, EXTRUDE_SCALE = 63,
                COS_HALF_SHARP_CORNER = Math.cos(37.5 * (Math.PI / 180)), SHARP_CORNER_OFFSET = 15,
                LINE_DISTANCE_BUFFER_BITS = 15, LINE_DISTANCE_SCALE = .5,
                MAX_LINE_DISTANCE = Math.pow(2, LINE_DISTANCE_BUFFER_BITS - 1) / LINE_DISTANCE_SCALE, lineInterface = {
                    layoutAttributes: [{name: "a_pos", components: 2, type: "Int16"}, {
                        name: "a_data",
                        components: 4,
                        type: "Uint8"
                    }],
                    paintAttributes: [{property: "line-color", type: "Uint8"}, {
                        property: "line-blur",
                        multiplier: 10,
                        type: "Uint8"
                    }, {property: "line-opacity", multiplier: 10, type: "Uint8"}, {
                        property: "line-gap-width",
                        multiplier: 10,
                        type: "Uint8",
                        name: "a_gapwidth"
                    }, {property: "line-offset", multiplier: 1, type: "Int8"}],
                    elementArrayType: createElementArrayType()
                }, LineBucket = function (e) {
                    function t(t) {
                        e.call(this, t, lineInterface)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.addFeature = function (e) {
                        for (var t = this, r = this.layers[0].layout, i = r["line-join"], a = r["line-cap"], n = r["line-miter-limit"], d = r["line-round-limit"], s = 0, u = loadGeometry(e, LINE_DISTANCE_BUFFER_BITS); s < u.length; s += 1) {
                            var l = u[s];
                            t.addLine(l, e, i, a, n, d)
                        }
                    }, t.prototype.addLine = function (e, t, r, i, a, n) {
                        for (var d = this, s = t.properties, u = "Polygon" === VectorTileFeature.types[t.type], l = e.length; l >= 2 && e[l - 1].equals(e[l - 2]);) l--;
                        for (var o = 0; o < l - 1 && e[o].equals(e[o + 1]);) o++;
                        if (!(l < (u ? 3 : 2))) {
                            "bevel" === r && (a = 1.05);
                            var p = SHARP_CORNER_OFFSET * (EXTENT / (512 * this.overscaling)), c = e[o], _ = this.arrays,
                                h = _.prepareSegment(10 * l);
                            this.distance = 0;
                            var y, m, E, x, C, v, f, A = i, L = u ? "butt" : i, S = !0;
                            this.e1 = this.e2 = this.e3 = -1, u && (y = e[l - 2], C = c.sub(y)._unit()._perp());
                            for (var V = o; V < l; V++) if (E = u && V === l - 1 ? e[o + 1] : e[V + 1], !E || !e[V].equals(E)) {
                                C && (x = C), y && (m = y), y = e[V], C = E ? E.sub(y)._unit()._perp() : x, x = x || C;
                                var I = x.add(C);
                                0 === I.x && 0 === I.y || I._unit();
                                var T = I.x * C.x + I.y * C.y, N = 0 !== T ? 1 / T : 1 / 0,
                                    b = T < COS_HALF_SHARP_CORNER && m && E;
                                if (b && V > o) {
                                    var R = y.dist(m);
                                    if (R > 2 * p) {
                                        var g = y.sub(y.sub(m)._mult(p / R)._round());
                                        d.distance += g.dist(m), d.addCurrentVertex(g, d.distance, x.mult(1), 0, 0, !1, h), m = g
                                    }
                                }
                                var F = m && E, B = F ? r : E ? A : L;
                                if (F && "round" === B && (N < n ? B = "miter" : N <= 2 && (B = "fakeround")), "miter" === B && N > a && (B = "bevel"), "bevel" === B && (N > 2 && (B = "flipbevel"), N < a && (B = "miter")), m && (d.distance += y.dist(m)), "miter" === B) I._mult(N), d.addCurrentVertex(y, d.distance, I, 0, 0, !1, h); else if ("flipbevel" === B) {
                                    if (N > 100) I = C.clone().mult(-1); else {
                                        var k = x.x * C.y - x.y * C.x > 0 ? -1 : 1, D = N * x.add(C).mag() / x.sub(C).mag();
                                        I._perp()._mult(D * k)
                                    }
                                    d.addCurrentVertex(y, d.distance, I, 0, 0, !1, h), d.addCurrentVertex(y, d.distance, I.mult(-1), 0, 0, !1, h)
                                } else if ("bevel" === B || "fakeround" === B) {
                                    var P = x.x * C.y - x.y * C.x > 0, U = -Math.sqrt(N * N - 1);
                                    if (P ? (f = 0, v = U) : (v = 0, f = U), S || d.addCurrentVertex(y, d.distance, x, v, f, !1, h), "fakeround" === B) {
                                        for (var q = Math.floor(8 * (.5 - (T - .5))), M = void 0, O = 0; O < q; O++) M = C.mult((O + 1) / (q + 1))._add(x)._unit(), d.addPieSliceVertex(y, d.distance, M, P, h);
                                        d.addPieSliceVertex(y, d.distance, I, P, h);
                                        for (var X = q - 1; X >= 0; X--) M = x.mult((X + 1) / (q + 1))._add(C)._unit(), d.addPieSliceVertex(y, d.distance, M, P, h)
                                    }
                                    E && d.addCurrentVertex(y, d.distance, C, -v, -f, !1, h)
                                } else "butt" === B ? (S || d.addCurrentVertex(y, d.distance, x, 0, 0, !1, h), E && d.addCurrentVertex(y, d.distance, C, 0, 0, !1, h)) : "square" === B ? (S || (d.addCurrentVertex(y, d.distance, x, 1, 1, !1, h), d.e1 = d.e2 = -1), E && d.addCurrentVertex(y, d.distance, C, -1, -1, !1, h)) : "round" === B && (S || (d.addCurrentVertex(y, d.distance, x, 0, 0, !1, h), d.addCurrentVertex(y, d.distance, x, 1, 1, !0, h), d.e1 = d.e2 = -1), E && (d.addCurrentVertex(y, d.distance, C, -1, -1, !0, h), d.addCurrentVertex(y, d.distance, C, 0, 0, !1, h)));
                                if (b && V < l - 1) {
                                    var H = y.dist(E);
                                    if (H > 2 * p) {
                                        var w = y.add(E.sub(y)._mult(p / H)._round());
                                        d.distance += w.dist(y), d.addCurrentVertex(w, d.distance, C.mult(1), 0, 0, !1, h), y = w
                                    }
                                }
                                S = !1
                            }
                            _.populatePaintArrays(s)
                        }
                    }, t.prototype.addCurrentVertex = function (e, t, r, i, a, n, d) {
                        var s, u = n ? 1 : 0, l = this.arrays, o = l.layoutVertexArray, p = l.elementArray;
                        s = r.clone(), i && s._sub(r.perp()._mult(i)), addLineVertex(o, e, s, u, 0, i, t), this.e3 = d.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (p.emplaceBack(this.e1, this.e2, this.e3), d.primitiveLength++), this.e1 = this.e2, this.e2 = this.e3, s = r.mult(-1), a && s._sub(r.perp()._mult(a)), addLineVertex(o, e, s, u, 1, -a, t), this.e3 = d.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (p.emplaceBack(this.e1, this.e2, this.e3), d.primitiveLength++), this.e1 = this.e2, this.e2 = this.e3, t > MAX_LINE_DISTANCE / 2 && (this.distance = 0, this.addCurrentVertex(e, this.distance, r, i, a, n, d))
                    }, t.prototype.addPieSliceVertex = function (e, t, r, i, a) {
                        var n = i ? 1 : 0;
                        r = r.mult(i ? -1 : 1);
                        var d = this.arrays, s = d.layoutVertexArray, u = d.elementArray;
                        addLineVertex(s, e, r, 0, n, 0, t), this.e3 = a.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (u.emplaceBack(this.e1, this.e2, this.e3), a.primitiveLength++), i ? this.e2 = this.e3 : this.e1 = this.e3
                    }, t
                }(Bucket);
            LineBucket.programInterface = lineInterface, module.exports = LineBucket;
        }, {"../bucket": 44, "../element_array_type": 52, "../extent": 53, "../load_geometry": 55, "vector-tile": 33}],
        49: [function (_dereq_, module, exports) {
            "use strict";

            function addVertex(e, t, o, a, i, r, n, s, l, c, y, u, p, h) {
                e.emplaceBack(t, o, Math.round(64 * a), Math.round(64 * i), r, n, s, l, packUint8ToFloat(10 * (p || 0), h % 256), packUint8ToFloat(10 * (y || 0), 10 * Math.min(u || 25, 25)), c ? c[0] : void 0, c ? c[1] : void 0, c ? c[2] : void 0)
            }

            function addCollisionBoxVertex(e, t, o, a, i, r) {
                return e.emplaceBack(t.x, t.y, o.x, o.y, Math.round(a.x), Math.round(a.y), 10 * i, 10 * r)
            }

            function getSizeData(e, t, o) {
                var a = {
                    isFeatureConstant: t.isLayoutValueFeatureConstant(o),
                    isZoomConstant: t.isLayoutValueZoomConstant(o)
                };
                if (a.isFeatureConstant && (a.layoutSize = t.getLayoutValue(o, {zoom: e + 1})), !a.isZoomConstant) {
                    for (var i = t.getLayoutValueStopZoomLevels(o), r = 0; r < i.length && i[r] <= e;) r++;
                    r = Math.max(0, r - 1);
                    for (var n = r; n < i.length && i[n] < e + 1;) n++;
                    n = Math.min(i.length - 1, n), a.coveringZoomRange = [i[r], i[n]], t.isLayoutValueFeatureConstant(o) && (a.coveringStopValues = [t.getLayoutValue(o, {zoom: i[r]}), t.getLayoutValue(o, {zoom: i[n]})]), a.functionBase = t.getLayoutProperty(o).base, "undefined" == typeof a.functionBase && (a.functionBase = 1), a.functionType = t.getLayoutProperty(o).type || "exponential"
                }
                return a
            }

            function getSizeAttributeDeclarations(e, t) {
                return e.isLayoutValueZoomConstant(t) && !e.isLayoutValueFeatureConstant(t) ? [{
                    name: "a_size",
                    components: 1,
                    type: "Uint16"
                }] : e.isLayoutValueZoomConstant(t) || e.isLayoutValueFeatureConstant(t) ? [] : [{
                    name: "a_size",
                    components: 3,
                    type: "Uint16"
                }]
            }

            function getSizeVertexData(e, t, o, a, i) {
                return e.isLayoutValueZoomConstant(a) && !e.isLayoutValueFeatureConstant(a) ? [10 * e.getLayoutValue(a, {}, i)] : e.isLayoutValueZoomConstant(a) || e.isLayoutValueFeatureConstant(a) ? null : [10 * e.getLayoutValue(a, {zoom: o[0]}, i), 10 * e.getLayoutValue(a, {zoom: o[1]}, i), 10 * e.getLayoutValue(a, {zoom: 1 + t}, i)]
            }

            var Point = _dereq_("point-geometry"), ArrayGroup = _dereq_("../array_group"),
                BufferGroup = _dereq_("../buffer_group"), createElementArrayType = _dereq_("../element_array_type"),
                EXTENT = _dereq_("../extent"),
                packUint8ToFloat = _dereq_("../../shaders/encode_attribute").packUint8ToFloat,
                Anchor = _dereq_("../../symbol/anchor"), getAnchors = _dereq_("../../symbol/get_anchors"),
                resolveTokens = _dereq_("../../util/token"), Quads = _dereq_("../../symbol/quads"),
                Shaping = _dereq_("../../symbol/shaping"), transformText = _dereq_("../../symbol/transform_text"),
                mergeLines = _dereq_("../../symbol/mergelines"), clipLine = _dereq_("../../symbol/clip_line"),
                util = _dereq_("../../util/util"), scriptDetection = _dereq_("../../util/script_detection"),
                loadGeometry = _dereq_("../load_geometry"),
                CollisionFeature = _dereq_("../../symbol/collision_feature"),
                findPoleOfInaccessibility = _dereq_("../../util/find_pole_of_inaccessibility"),
                classifyRings = _dereq_("../../util/classify_rings"),
                VectorTileFeature = _dereq_("vector-tile").VectorTileFeature, shapeText = Shaping.shapeText,
                shapeIcon = Shaping.shapeIcon, WritingMode = Shaping.WritingMode, getGlyphQuads = Quads.getGlyphQuads,
                getIconQuads = Quads.getIconQuads, elementArrayType = createElementArrayType(),
                layoutAttributes = [{name: "a_pos_offset", components: 4, type: "Int16"}, {
                    name: "a_label_pos",
                    components: 2,
                    type: "Int16"
                }, {name: "a_data", components: 4, type: "Uint16"}], symbolInterfaces = {
                    glyph: {
                        layoutAttributes: layoutAttributes,
                        elementArrayType: elementArrayType,
                        paintAttributes: [{
                            name: "a_fill_color",
                            property: "text-color",
                            type: "Uint8"
                        }, {name: "a_halo_color", property: "text-halo-color", type: "Uint8"}, {
                            name: "a_halo_width",
                            property: "text-halo-width",
                            type: "Uint16",
                            multiplier: 10
                        }, {
                            name: "a_halo_blur",
                            property: "text-halo-blur",
                            type: "Uint16",
                            multiplier: 10
                        }, {name: "a_opacity", property: "text-opacity", type: "Uint8", multiplier: 255}]
                    },
                    icon: {
                        layoutAttributes: layoutAttributes,
                        elementArrayType: elementArrayType,
                        paintAttributes: [{
                            name: "a_fill_color",
                            property: "icon-color",
                            type: "Uint8"
                        }, {name: "a_halo_color", property: "icon-halo-color", type: "Uint8"}, {
                            name: "a_halo_width",
                            property: "icon-halo-width",
                            type: "Uint16",
                            multiplier: 10
                        }, {
                            name: "a_halo_blur",
                            property: "icon-halo-blur",
                            type: "Uint16",
                            multiplier: 10
                        }, {name: "a_opacity", property: "icon-opacity", type: "Uint8", multiplier: 255}]
                    },
                    collisionBox: {
                        layoutAttributes: [{name: "a_pos", components: 2, type: "Int16"}, {
                            name: "a_anchor_pos",
                            components: 2,
                            type: "Int16"
                        }, {name: "a_extrude", components: 2, type: "Int16"}, {
                            name: "a_data",
                            components: 2,
                            type: "Uint8"
                        }], elementArrayType: createElementArrayType(2)
                    }
                }, SymbolBucket = function (e) {
                    var t = this;
                    this.collisionBoxArray = e.collisionBoxArray, this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.sdfIcons = e.sdfIcons, this.iconsNeedLinear = e.iconsNeedLinear, this.fontstack = e.fontstack;
                    var o = this.layers[0];
                    if (this.symbolInterfaces = {
                            glyph: util.extend({}, symbolInterfaces.glyph, {layoutAttributes: [].concat(symbolInterfaces.glyph.layoutAttributes, getSizeAttributeDeclarations(o, "text-size"))}),
                            icon: util.extend({}, symbolInterfaces.icon, {layoutAttributes: [].concat(symbolInterfaces.icon.layoutAttributes, getSizeAttributeDeclarations(o, "icon-size"))}),
                            collisionBox: util.extend({}, symbolInterfaces.collisionBox, {layoutAttributes: [].concat(symbolInterfaces.collisionBox.layoutAttributes)})
                        }, e.arrays) {
                        this.buffers = {};
                        for (var a in e.arrays) e.arrays[a] && (t.buffers[a] = new BufferGroup(t.symbolInterfaces[a], e.layers, e.zoom, e.arrays[a]));
                        this.textSizeData = e.textSizeData, this.iconSizeData = e.iconSizeData
                    } else this.textSizeData = getSizeData(this.zoom, o, "text-size"), this.iconSizeData = getSizeData(this.zoom, o, "icon-size")
                };
            SymbolBucket.prototype.populate = function (e, t) {
                var o = this, a = this.layers[0], i = a.layout, r = i["text-font"],
                    n = (!a.isLayoutValueFeatureConstant("text-field") || i["text-field"]) && r,
                    s = !a.isLayoutValueFeatureConstant("icon-image") || i["icon-image"];
                if (this.features = [], n || s) {
                    for (var l = t.iconDependencies, c = t.glyphDependencies, y = c[r] = c[r] || {}, u = {zoom: this.zoom}, p = 0; p < e.length; p++) {
                        var h = e[p];
                        if (a.filter(h)) {
                            var m = void 0;
                            n && (m = a.getLayoutValue("text-field", u, h.properties), a.isLayoutValueFeatureConstant("text-field") && (m = resolveTokens(h.properties, m)), m = transformText(m, a, u, h.properties));
                            var x = void 0;
                            if (s && (x = a.getLayoutValue("icon-image", u, h.properties), a.isLayoutValueFeatureConstant("icon-image") && (x = resolveTokens(h.properties, x))), (m || x) && (o.features.push({
                                    text: m,
                                    icon: x,
                                    index: p,
                                    sourceLayerIndex: h.sourceLayerIndex,
                                    geometry: loadGeometry(h),
                                    properties: h.properties,
                                    type: VectorTileFeature.types[h.type]
                                }), x && (l[x] = !0), m)) for (var d = 0; d < m.length; d++) y[m.charCodeAt(d)] = !0
                        }
                    }
                    "line" === i["symbol-placement"] && (this.features = mergeLines(this.features))
                }
            }, SymbolBucket.prototype.isEmpty = function () {
                return this.arrays.icon.isEmpty() && this.arrays.glyph.isEmpty() && this.arrays.collisionBox.isEmpty()
            }, SymbolBucket.prototype.getPaintPropertyStatistics = function () {
                for (var e = this, t = {}, o = 0, a = e.layers; o < a.length; o += 1) {
                    var i = a[o];
                    t[i.id] = util.extend({}, e.arrays.icon.layerData[i.id].paintPropertyStatistics, e.arrays.glyph.layerData[i.id].paintPropertyStatistics)
                }
                return t
            }, SymbolBucket.prototype.serialize = function (e) {
                return {
                    zoom: this.zoom,
                    layerIds: this.layers.map(function (e) {
                        return e.id
                    }),
                    sdfIcons: this.sdfIcons,
                    iconsNeedLinear: this.iconsNeedLinear,
                    textSizeData: this.textSizeData,
                    iconSizeData: this.iconSizeData,
                    fontstack: this.fontstack,
                    arrays: util.mapObject(this.arrays, function (t) {
                        return t.isEmpty() ? null : t.serialize(e)
                    })
                }
            }, SymbolBucket.prototype.destroy = function () {
                this.buffers && (this.buffers.icon && this.buffers.icon.destroy(), this.buffers.glyph && this.buffers.glyph.destroy(), this.buffers.collisionBox && this.buffers.collisionBox.destroy(), this.buffers = null)
            }, SymbolBucket.prototype.createArrays = function () {
                var e = this;
                this.arrays = util.mapObject(this.symbolInterfaces, function (t) {
                    return new ArrayGroup(t, e.layers, e.zoom)
                })
            }, SymbolBucket.prototype.prepare = function (e, t) {
                var o = this;
                this.symbolInstances = [];
                var a = 512 * this.overscaling;
                this.tilePixelRatio = EXTENT / a, this.compareText = {}, this.iconsNeedLinear = !1;
                var i = this.layers[0].layout, r = .5, n = .5;
                switch (i["text-anchor"]) {
                    case"right":
                    case"top-right":
                    case"bottom-right":
                        r = 1;
                        break;
                    case"left":
                    case"top-left":
                    case"bottom-left":
                        r = 0
                }
                switch (i["text-anchor"]) {
                    case"bottom":
                    case"bottom-right":
                    case"bottom-left":
                        n = 1;
                        break;
                    case"top":
                    case"top-right":
                    case"top-left":
                        n = 0
                }
                for (var s = "right" === i["text-justify"] ? 1 : "left" === i["text-justify"] ? 0 : .5, l = 24, c = i["text-line-height"] * l, y = "line" !== i["symbol-placement"] ? i["text-max-width"] * l : 0, u = i["text-letter-spacing"] * l, p = this.fontstack = i["text-font"].join(","), h = "map" === i["text-rotation-alignment"] && "line" === i["symbol-placement"], m = 0, x = o.features; m < x.length; m += 1) {
                    var d = x[m], g = void 0;
                    if (d.text) {
                        var f = scriptDetection.allowsVerticalWritingMode(d.text),
                            b = o.layers[0].getLayoutValue("text-offset", {zoom: o.zoom}, d.properties).map(function (e) {
                                return e * l
                            }), v = scriptDetection.allowsLetterSpacing(d.text) ? u : 0;
                        g = {}, g[WritingMode.horizontal] = shapeText(d.text, e[p], y, c, r, n, s, v, b, l, WritingMode.horizontal), g[WritingMode.vertical] = f && h && shapeText(d.text, e[p], y, c, r, n, s, v, b, l, WritingMode.vertical)
                    } else g = {};
                    var S = void 0;
                    if (d.icon) {
                        var I = t[d.icon];
                        I && (S = shapeIcon(I, o.layers[0].getLayoutValue("icon-offset", {zoom: o.zoom}, d.properties)), void 0 === o.sdfIcons ? o.sdfIcons = I.sdf : o.sdfIcons !== I.sdf && util.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"), I.isNativePixelRatio ? 0 === i["icon-rotate"] && o.layers[0].isLayoutValueFeatureConstant("icon-rotate") || (o.iconsNeedLinear = !0) : o.iconsNeedLinear = !0)
                    }
                    (g[WritingMode.horizontal] || S) && o.addFeature(d, g, S)
                }
            }, SymbolBucket.prototype.addFeature = function (e, t, o) {
                var a = this, i = this.layers[0].getLayoutValue("text-size", {zoom: this.zoom + 1}, e.properties),
                    r = this.layers[0].getLayoutValue("icon-size", {zoom: this.zoom + 1}, e.properties),
                    n = this.layers[0].getLayoutValue("text-size", {zoom: 18}, e.properties);
                void 0 === n && (n = i);
                var s = this.layers[0].layout, l = 24, c = i / l, y = this.tilePixelRatio * c,
                    u = this.tilePixelRatio * n / l, p = this.tilePixelRatio * r,
                    h = this.tilePixelRatio * s["symbol-spacing"], m = s["symbol-avoid-edges"],
                    x = s["text-padding"] * this.tilePixelRatio, d = s["icon-padding"] * this.tilePixelRatio,
                    g = s["text-max-angle"] / 180 * Math.PI,
                    f = "map" === s["text-rotation-alignment"] && "line" === s["symbol-placement"],
                    b = "map" === s["icon-rotation-alignment"] && "line" === s["symbol-placement"],
                    v = s["text-allow-overlap"] || s["icon-allow-overlap"] || s["text-ignore-placement"] || s["icon-ignore-placement"],
                    S = s["symbol-placement"], I = h / 2, z = function (i, r) {
                        var n = !(r.x < 0 || r.x > EXTENT || r.y < 0 || r.y > EXTENT);
                        if (!m || n) {
                            var s = n || v;
                            a.addSymbolInstance(r, i, t, o, a.layers[0], s, a.collisionBoxArray, e.index, e.sourceLayerIndex, a.index, y, x, f, p, d, b, {zoom: a.zoom}, e.properties)
                        }
                    };
                if ("line" === S) for (var B = 0, M = clipLine(e.geometry, 0, 0, EXTENT, EXTENT); B < M.length; B += 1) for (var L = M[B], A = getAnchors(L, h, g, t[WritingMode.vertical] || t[WritingMode.horizontal], o, l, u, a.overscaling, EXTENT), _ = 0, T = A; _ < T.length; _ += 1) {
                    var V = T[_], k = t[WritingMode.horizontal];
                    k && a.anchorIsTooClose(k.text, I, V) || z(L, V)
                } else if ("Polygon" === e.type) for (var C = 0, P = classifyRings(e.geometry, 0); C < P.length; C += 1) {
                    var E = P[C], w = findPoleOfInaccessibility(E, 16);
                    z(E[0], new Anchor(w.x, w.y, 0))
                } else if ("LineString" === e.type) for (var F = 0, D = e.geometry; F < D.length; F += 1) {
                    var N = D[F];
                    z(N, new Anchor(N[0].x, N[0].y, 0))
                } else if ("Point" === e.type) for (var q = 0, U = e.geometry; q < U.length; q += 1) for (var W = U[q], R = 0, Q = W; R < Q.length; R += 1) {
                    var Z = Q[R];
                    z([Z], new Anchor(Z.x, Z.y, 0))
                }
            }, SymbolBucket.prototype.anchorIsTooClose = function (e, t, o) {
                var a = this.compareText;
                if (e in a) {
                    for (var i = a[e], r = i.length - 1; r >= 0; r--) if (o.dist(i[r]) < t) return !0
                } else a[e] = [];
                return a[e].push(o), !1
            }, SymbolBucket.prototype.place = function (e, t) {
                var o = this;
                this.createArrays();
                var a = this.layers[0], i = a.layout, r = e.maxScale,
                    n = "map" === i["text-rotation-alignment"] && "line" === i["symbol-placement"],
                    s = "map" === i["icon-rotation-alignment"] && "line" === i["symbol-placement"],
                    l = i["text-allow-overlap"] || i["icon-allow-overlap"] || i["text-ignore-placement"] || i["icon-ignore-placement"];
                if (l) {
                    var c = e.angle, y = Math.sin(c), u = Math.cos(c);
                    this.symbolInstances.sort(function (e, t) {
                        var o = y * e.anchor.x + u * e.anchor.y | 0, a = y * t.anchor.x + u * t.anchor.y | 0;
                        return o - a || t.featureIndex - e.featureIndex
                    })
                }
                for (var p = 0, h = o.symbolInstances; p < h.length; p += 1) {
                    var m = h[p], x = {boxStartIndex: m.textBoxStartIndex, boxEndIndex: m.textBoxEndIndex},
                        d = {boxStartIndex: m.iconBoxStartIndex, boxEndIndex: m.iconBoxEndIndex},
                        g = !(m.textBoxStartIndex === m.textBoxEndIndex),
                        f = !(m.iconBoxStartIndex === m.iconBoxEndIndex), b = i["text-optional"] || !g,
                        v = i["icon-optional"] || !f,
                        S = g ? e.placeCollisionFeature(x, i["text-allow-overlap"], i["symbol-avoid-edges"]) : e.minScale,
                        I = f ? e.placeCollisionFeature(d, i["icon-allow-overlap"], i["symbol-avoid-edges"]) : e.minScale;
                    if (b || v ? !v && S ? S = Math.max(I, S) : !b && I && (I = Math.max(I, S)) : I = S = Math.max(I, S), g && (e.insertCollisionFeature(x, S, i["text-ignore-placement"]), S <= r)) {
                        var z = getSizeVertexData(a, o.zoom, o.textSizeData.coveringZoomRange, "text-size", m.featureProperties);
                        o.addSymbols(o.arrays.glyph, m.glyphQuads, S, z, i["text-keep-upright"], n, e.angle, m.featureProperties, m.writingModes, m.anchor)
                    }
                    if (f && (e.insertCollisionFeature(d, I, i["icon-ignore-placement"]), I <= r)) {
                        var B = getSizeVertexData(a, o.zoom, o.iconSizeData.coveringZoomRange, "icon-size", m.featureProperties);
                        o.addSymbols(o.arrays.icon, m.iconQuads, I, B, i["icon-keep-upright"], s, e.angle, m.featureProperties, null, m.anchor)
                    }
                }
                t && this.addToDebugBuffers(e)
            }, SymbolBucket.prototype.addSymbols = function (e, t, o, a, i, r, n, s, l, c) {
                for (var y = e.elementArray, u = e.layoutVertexArray, p = this.zoom, h = Math.max(Math.log(o) / Math.LN2 + p, 0), m = 0, x = t; m < x.length; m += 1) {
                    var d = x[m], g = (d.anchorAngle + n + Math.PI) % (2 * Math.PI);
                    if (l & WritingMode.vertical) {
                        if (r && d.writingMode === WritingMode.vertical) {
                            if (i && r && g <= 5 * Math.PI / 4 || g > 7 * Math.PI / 4) continue
                        } else if (i && r && g <= 3 * Math.PI / 4 || g > 5 * Math.PI / 4) continue
                    } else if (i && r && (g <= Math.PI / 2 || g > 3 * Math.PI / 2)) continue;
                    var f = d.tl, b = d.tr, v = d.bl, S = d.br, I = d.tex, z = d.anchorPoint,
                        B = Math.max(p + Math.log(d.minScale) / Math.LN2, h),
                        M = Math.min(p + Math.log(d.maxScale) / Math.LN2, 25);
                    if (!(M <= B)) {
                        B === h && (B = 0);
                        var L = Math.round(d.glyphAngle / (2 * Math.PI) * 256), A = e.prepareSegment(4),
                            _ = A.vertexLength;
                        addVertex(u, z.x, z.y, f.x, f.y, c.x, c.y, I.x, I.y, a, B, M, h, L), addVertex(u, z.x, z.y, b.x, b.y, c.x, c.y, I.x + I.w, I.y, a, B, M, h, L), addVertex(u, z.x, z.y, v.x, v.y, c.x, c.y, I.x, I.y + I.h, a, B, M, h, L), addVertex(u, z.x, z.y, S.x, S.y, c.x, c.y, I.x + I.w, I.y + I.h, a, B, M, h, L), y.emplaceBack(_, _ + 1, _ + 2), y.emplaceBack(_ + 1, _ + 2, _ + 3), A.vertexLength += 4, A.primitiveLength += 2
                    }
                }
                e.populatePaintArrays(s)
            }, SymbolBucket.prototype.addToDebugBuffers = function (e) {
                for (var t = this, o = this.arrays.collisionBox, a = o.layoutVertexArray, i = o.elementArray, r = -e.angle, n = e.yStretch, s = 0, l = t.symbolInstances; s < l.length; s += 1) {
                    var c = l[s];
                    c.textCollisionFeature = {
                        boxStartIndex: c.textBoxStartIndex,
                        boxEndIndex: c.textBoxEndIndex
                    }, c.iconCollisionFeature = {boxStartIndex: c.iconBoxStartIndex, boxEndIndex: c.iconBoxEndIndex};
                    for (var y = 0; y < 2; y++) {
                        var u = c[0 === y ? "textCollisionFeature" : "iconCollisionFeature"];
                        if (u) for (var p = u.boxStartIndex; p < u.boxEndIndex; p++) {
                            var h = t.collisionBoxArray.get(p);
                            if (!(1 === e.perspectiveRatio && h.maxScale < 1)) {
                                var m = h.anchorPoint, x = new Point(h.x1, h.y1 * n)._rotate(r),
                                    d = new Point(h.x2, h.y1 * n)._rotate(r), g = new Point(h.x1, h.y2 * n)._rotate(r),
                                    f = new Point(h.x2, h.y2 * n)._rotate(r),
                                    b = Math.max(0, Math.min(25, t.zoom + Math.log(h.maxScale) / Math.LN2)),
                                    v = Math.max(0, Math.min(25, t.zoom + Math.log(h.placementScale) / Math.LN2)),
                                    S = o.prepareSegment(4), I = S.vertexLength;
                                addCollisionBoxVertex(a, m, c.anchor, x, b, v), addCollisionBoxVertex(a, m, c.anchor, d, b, v), addCollisionBoxVertex(a, m, c.anchor, f, b, v), addCollisionBoxVertex(a, m, c.anchor, g, b, v), i.emplaceBack(I, I + 1), i.emplaceBack(I + 1, I + 2), i.emplaceBack(I + 2, I + 3), i.emplaceBack(I + 3, I), S.vertexLength += 4, S.primitiveLength += 4
                            }
                        }
                    }
                }
            }, SymbolBucket.prototype.addSymbolInstance = function (e, t, o, a, i, r, n, s, l, c, y, u, p, h, m, x, d, g) {
                var f, b, v = [], S = [];
                for (var I in o) {
                    var z = parseInt(I, 10);
                    o[z] && (S = S.concat(r ? getGlyphQuads(e, o[z], y, t, i, p, d, g) : []), f = new CollisionFeature(n, t, e, s, l, c, o[z], y, u, p, !1))
                }
                var B = f ? f.boxStartIndex : this.collisionBoxArray.length,
                    M = f ? f.boxEndIndex : this.collisionBoxArray.length;
                a && (v = r ? getIconQuads(e, a, h, t, i, x, o[WritingMode.horizontal], d, g) : [], b = new CollisionFeature(n, t, e, s, l, c, a, h, m, x, !0));
                var L = b ? b.boxStartIndex : this.collisionBoxArray.length,
                    A = b ? b.boxEndIndex : this.collisionBoxArray.length;
                M > SymbolBucket.MAX_INSTANCES && util.warnOnce("Too many symbols being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"), A > SymbolBucket.MAX_INSTANCES && util.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");
                var _ = (o[WritingMode.vertical] ? WritingMode.vertical : 0) | (o[WritingMode.horizontal] ? WritingMode.horizontal : 0);
                this.symbolInstances.push({
                    textBoxStartIndex: B,
                    textBoxEndIndex: M,
                    iconBoxStartIndex: L,
                    iconBoxEndIndex: A,
                    glyphQuads: S,
                    iconQuads: v,
                    anchor: e,
                    featureIndex: s,
                    featureProperties: g,
                    writingModes: _
                })
            }, SymbolBucket.programInterfaces = symbolInterfaces, SymbolBucket.MAX_INSTANCES = 65535, module.exports = SymbolBucket;
        }, {
            "../../shaders/encode_attribute": 80,
            "../../symbol/anchor": 159,
            "../../symbol/clip_line": 161,
            "../../symbol/collision_feature": 163,
            "../../symbol/get_anchors": 165,
            "../../symbol/mergelines": 168,
            "../../symbol/quads": 169,
            "../../symbol/shaping": 170,
            "../../symbol/transform_text": 172,
            "../../util/classify_rings": 197,
            "../../util/find_pole_of_inaccessibility": 203,
            "../../util/script_detection": 210,
            "../../util/token": 214,
            "../../util/util": 215,
            "../array_group": 43,
            "../buffer_group": 51,
            "../element_array_type": 52,
            "../extent": 53,
            "../load_geometry": 55,
            "point-geometry": 25,
            "vector-tile": 33
        }],
        50: [function (_dereq_, module, exports) {
            "use strict";
            var AttributeType = {Int8: "BYTE", Uint8: "UNSIGNED_BYTE", Int16: "SHORT", Uint16: "UNSIGNED_SHORT"},
                Buffer = function (t, e, r) {
                    this.arrayBuffer = t.arrayBuffer, this.length = t.length, this.attributes = e.members, this.itemSize = e.bytesPerElement, this.type = r, this.arrayType = e
                };
            Buffer.fromStructArray = function (t, e) {
                return new Buffer(t.serialize(), t.constructor.serialize(), e)
            }, Buffer.prototype.bind = function (t) {
                var e = t[this.type];
                this.buffer ? t.bindBuffer(e, this.buffer) : (this.gl = t, this.buffer = t.createBuffer(), t.bindBuffer(e, this.buffer), t.bufferData(e, this.arrayBuffer, t.STATIC_DRAW), this.arrayBuffer = null)
            }, Buffer.prototype.enableAttributes = function (t, e) {
                for (var r = this, f = 0; f < this.attributes.length; f++) {
                    var i = r.attributes[f], u = e[i.name];
                    void 0 !== u && t.enableVertexAttribArray(u)
                }
            }, Buffer.prototype.setVertexAttribPointers = function (t, e, r) {
                for (var f = this, i = 0; i < this.attributes.length; i++) {
                    var u = f.attributes[i], s = e[u.name];
                    void 0 !== s && t.vertexAttribPointer(s, u.components, t[AttributeType[u.type]], !1, f.arrayType.bytesPerElement, u.offset + (f.arrayType.bytesPerElement * r || 0))
                }
            }, Buffer.prototype.destroy = function () {
                this.buffer && this.gl.deleteBuffer(this.buffer)
            }, Buffer.BufferType = {VERTEX: "ARRAY_BUFFER", ELEMENT: "ELEMENT_ARRAY_BUFFER"}, module.exports = Buffer;
        }, {}],
        51: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), Buffer = _dereq_("./buffer"),
                ProgramConfiguration = _dereq_("./program_configuration"),
                createVertexArrayType = _dereq_("./vertex_array_type"),
                VertexArrayObject = _dereq_("../render/vertex_array_object"), BufferGroup = function (e, r, t, a) {
                    var f = this, u = createVertexArrayType(e.layoutAttributes);
                    this.layoutVertexBuffer = new Buffer(a.layoutVertexArray, u.serialize(), Buffer.BufferType.VERTEX), a.elementArray && (this.elementBuffer = new Buffer(a.elementArray, e.elementArrayType.serialize(), Buffer.BufferType.ELEMENT)), a.elementArray2 && (this.elementBuffer2 = new Buffer(a.elementArray2, e.elementArrayType2.serialize(), Buffer.BufferType.ELEMENT)), this.layerData = {};
                    for (var n = 0, i = r; n < i.length; n += 1) {
                        var s = i[n], o = a.paintVertexArrays && a.paintVertexArrays[s.id],
                            y = ProgramConfiguration.createDynamic(e, s, t),
                            l = o ? new Buffer(o.array, o.type, Buffer.BufferType.VERTEX) : null;
                        f.layerData[s.id] = {programConfiguration: y, paintVertexBuffer: l}
                    }
                    this.segments = a.segments, this.segments2 = a.segments2;
                    for (var m = 0, B = [f.segments, f.segments2]; m < B.length; m += 1) for (var p = B[m], g = 0, v = p || []; g < v.length; g += 1) {
                        var h = v[g];
                        h.vaos = util.mapObject(f.layerData, function () {
                            return new VertexArrayObject
                        })
                    }
                };
            BufferGroup.prototype.destroy = function () {
                var e = this;
                this.layoutVertexBuffer.destroy(), this.elementBuffer && this.elementBuffer.destroy(), this.elementBuffer2 && this.elementBuffer2.destroy();
                for (var r in e.layerData) {
                    var t = e.layerData[r].paintVertexBuffer;
                    t && t.destroy()
                }
                for (var a = 0, f = [e.segments, e.segments2]; a < f.length; a += 1) for (var u = f[a], n = 0, i = u || []; n < i.length; n += 1) {
                    var s = i[n];
                    for (var o in s.vaos) s.vaos[o].destroy()
                }
            }, module.exports = BufferGroup;
        }, {
            "../render/vertex_array_object": 79,
            "../util/util": 215,
            "./buffer": 50,
            "./program_configuration": 57,
            "./vertex_array_type": 59
        }],
        52: [function (_dereq_, module, exports) {
            "use strict";

            function createElementArrayType(e) {
                return createStructArrayType({members: [{type: "Uint16", name: "vertices", components: e || 3}]})
            }

            var createStructArrayType = _dereq_("../util/struct_array");
            module.exports = createElementArrayType;
        }, {"../util/struct_array": 212}],
        53: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = 8192;
        }, {}],
        54: [function (_dereq_, module, exports) {
            "use strict";

            function translateDistance(e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1])
            }

            function topDownFeatureComparator(e, t) {
                return t - e
            }

            function getLineWidth(e, t) {
                return t > 0 ? t + 2 * e : e
            }

            function translate(e, t, r, i, a) {
                if (!t[0] && !t[1]) return e;
                t = Point.convert(t), "viewport" === r && t._rotate(-i);
                for (var n = [], s = 0; s < e.length; s++) {
                    for (var o = e[s], l = [], u = 0; u < o.length; u++) l.push(o[u].sub(t._mult(a)));
                    n.push(l)
                }
                return n
            }

            function offsetLine(e, t) {
                for (var r = [], i = new Point(0, 0), a = 0; a < e.length; a++) {
                    for (var n = e[a], s = [], o = 0; o < n.length; o++) {
                        var l = n[o - 1], u = n[o], c = n[o + 1], y = 0 === o ? i : u.sub(l)._unit()._perp(),
                            f = o === n.length - 1 ? i : c.sub(u)._unit()._perp(), h = y._add(f)._unit(),
                            d = h.x * f.x + h.y * f.y;
                        h._mult(1 / d), s.push(h._mult(t)._add(u))
                    }
                    r.push(s)
                }
                return r
            }

            var Point = _dereq_("point-geometry"), loadGeometry = _dereq_("./load_geometry"),
                EXTENT = _dereq_("./extent"), featureFilter = _dereq_("../style-spec/feature_filter"),
                createStructArrayType = _dereq_("../util/struct_array"), Grid = _dereq_("grid-index"),
                DictionaryCoder = _dereq_("../util/dictionary_coder"), vt = _dereq_("vector-tile"),
                Protobuf = _dereq_("pbf"), GeoJSONFeature = _dereq_("../util/vectortile_to_geojson"),
                arraysIntersect = _dereq_("../util/util").arraysIntersect,
                intersection = _dereq_("../util/intersection_tests"),
                multiPolygonIntersectsBufferedMultiPoint = intersection.multiPolygonIntersectsBufferedMultiPoint,
                multiPolygonIntersectsMultiPolygon = intersection.multiPolygonIntersectsMultiPolygon,
                multiPolygonIntersectsBufferedMultiLine = intersection.multiPolygonIntersectsBufferedMultiLine,
                FeatureIndexArray = createStructArrayType({
                    members: [{
                        type: "Uint32",
                        name: "featureIndex"
                    }, {type: "Uint16", name: "sourceLayerIndex"}, {type: "Uint16", name: "bucketIndex"}]
                }), FeatureIndex = function (e, t, r) {
                    if (e.grid) {
                        var i = e, a = t;
                        e = i.coord, t = i.overscaling, this.grid = new Grid(i.grid), this.featureIndexArray = new FeatureIndexArray(i.featureIndexArray), this.rawTileData = a, this.bucketLayerIDs = i.bucketLayerIDs, this.paintPropertyStatistics = i.paintPropertyStatistics
                    } else this.grid = new Grid(EXTENT, 16, 0), this.featureIndexArray = new FeatureIndexArray;
                    this.coord = e, this.overscaling = t, this.x = e.x, this.y = e.y, this.z = e.z - Math.log(t) / Math.LN2, this.setCollisionTile(r)
                };
            FeatureIndex.prototype.insert = function (e, t) {
                var r = this, i = this.featureIndexArray.length;
                this.featureIndexArray.emplaceBack(e.index, e.sourceLayerIndex, t);
                for (var a = loadGeometry(e), n = 0; n < a.length; n++) {
                    for (var s = a[n], o = [1 / 0, 1 / 0, -(1 / 0), -(1 / 0)], l = 0; l < s.length; l++) {
                        var u = s[l];
                        o[0] = Math.min(o[0], u.x), o[1] = Math.min(o[1], u.y), o[2] = Math.max(o[2], u.x), o[3] = Math.max(o[3], u.y)
                    }
                    r.grid.insert(i, o[0], o[1], o[2], o[3])
                }
            }, FeatureIndex.prototype.setCollisionTile = function (e) {
                this.collisionTile = e
            }, FeatureIndex.prototype.serialize = function (e) {
                var t = this.grid.toArrayBuffer();
                return e && e.push(t), {
                    coord: this.coord,
                    overscaling: this.overscaling,
                    grid: t,
                    featureIndexArray: this.featureIndexArray.serialize(e),
                    bucketLayerIDs: this.bucketLayerIDs,
                    paintPropertyStatistics: this.paintPropertyStatistics
                }
            }, FeatureIndex.prototype.query = function (e, t) {
                var r = this;
                this.vtLayers || (this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers, this.sourceLayerCoder = new DictionaryCoder(this.vtLayers ? Object.keys(this.vtLayers).sort() : ["_geojsonTileLayer"]));
                var i = {}, a = e.params || {}, n = EXTENT / e.tileSize / e.scale, s = featureFilter(a.filter), o = 0;
                for (var l in t) if (r.hasLayer(l)) {
                    var u = t[l], c = 0;
                    if ("line" === u.type) {
                        var y = getLineWidth(r.getPaintValue("line-width", u), r.getPaintValue("line-gap-width", u)),
                            f = r.getPaintValue("line-offset", u), h = r.getPaintValue("line-translate", u);
                        c = y / 2 + Math.abs(f) + translateDistance(h)
                    } else "fill" === u.type ? c = translateDistance(r.getPaintValue("fill-translate", u)) : "fill-extrusion" === u.type ? c = translateDistance(r.getPaintValue("fill-extrusion-translate", u)) : "circle" === u.type && (c = r.getPaintValue("circle-radius", u) + translateDistance(r.getPaintValue("circle-translate", u)));
                    o = Math.max(o, c * n)
                }
                for (var d = e.queryGeometry.map(function (e) {
                    return e.map(function (e) {
                        return new Point(e.x, e.y)
                    })
                }), g = 1 / 0, p = 1 / 0, v = -(1 / 0), x = -(1 / 0), I = 0; I < d.length; I++) for (var P = d[I], m = 0; m < P.length; m++) {
                    var L = P[m];
                    g = Math.min(g, L.x), p = Math.min(p, L.y), v = Math.max(v, L.x), x = Math.max(x, L.y)
                }
                var M = this.grid.query(g - o, p - o, v + o, x + o);
                M.sort(topDownFeatureComparator), this.filterMatching(i, M, this.featureIndexArray, d, s, a.layers, t, e.bearing, n);
                var b = this.collisionTile.queryRenderedSymbols(d, e.scale);
                return b.sort(), this.filterMatching(i, b, this.collisionTile.collisionBoxArray, d, s, a.layers, t, e.bearing, n), i
            }, FeatureIndex.prototype.filterMatching = function (e, t, r, i, a, n, s, o, l) {
                for (var u, c = this, y = 0; y < t.length; y++) {
                    var f = t[y];
                    if (f !== u) {
                        u = f;
                        var h = r.get(f), d = c.bucketLayerIDs[h.bucketIndex];
                        if (!n || arraysIntersect(n, d)) {
                            var g = c.sourceLayerCoder.decode(h.sourceLayerIndex), p = c.vtLayers[g],
                                v = p.feature(h.featureIndex);
                            if (a(v)) for (var x = null, I = 0; I < d.length; I++) {
                                var P = d[I];
                                if (!(n && n.indexOf(P) < 0)) {
                                    var m = s[P];
                                    if (m) {
                                        var L = void 0;
                                        if ("symbol" !== m.type) if (x || (x = loadGeometry(v)), "line" === m.type) {
                                            L = translate(i, c.getPaintValue("line-translate", m, v), c.getPaintValue("line-translate-anchor", m, v), o, l);
                                            var M = l / 2 * getLineWidth(c.getPaintValue("line-width", m, v), c.getPaintValue("line-gap-width", m, v)),
                                                b = c.getPaintValue("line-offset", m, v);
                                            if (b && (x = offsetLine(x, b * l)), !multiPolygonIntersectsBufferedMultiLine(L, x, M)) continue
                                        } else if ("fill" === m.type || "fill-extrusion" === m.type) {
                                            var V = m.type;
                                            if (L = translate(i, c.getPaintValue(V + "-translate", m, v), c.getPaintValue(V + "-translate-anchor", m, v), o, l), !multiPolygonIntersectsMultiPolygon(L, x)) continue
                                        } else if ("circle" === m.type) {
                                            L = translate(i, c.getPaintValue("circle-translate", m, v), c.getPaintValue("circle-translate-anchor", m, v), o, l);
                                            var w = c.getPaintValue("circle-radius", m, v) * l;
                                            if (!multiPolygonIntersectsBufferedMultiPoint(L, x, w)) continue
                                        }
                                        var F = new GeoJSONFeature(v, c.z, c.x, c.y);
                                        F.layer = m.serialize();
                                        var _ = e[P];
                                        void 0 === _ && (_ = e[P] = []), _.push({featureIndex: f, feature: F})
                                    }
                                }
                            }
                        }
                    }
                }
            }, FeatureIndex.prototype.hasLayer = function (e) {
                var t = this;
                for (var r in t.bucketLayerIDs) for (var i = 0, a = t.bucketLayerIDs[r]; i < a.length; i += 1) {
                    var n = a[i];
                    if (e === n) return !0
                }
                return !1
            }, FeatureIndex.prototype.getPaintValue = function (e, t, r) {
                var i = t.isPaintValueFeatureConstant(e);
                if (i || r) {
                    var a = r ? r.properties : {};
                    return t.getPaintValue(e, {zoom: this.z}, a)
                }
                return this.paintPropertyStatistics[t.id][e].max
            }, module.exports = FeatureIndex;
        }, {
            "../style-spec/feature_filter": 104,
            "../util/dictionary_coder": 199,
            "../util/intersection_tests": 206,
            "../util/struct_array": 212,
            "../util/util": 215,
            "../util/vectortile_to_geojson": 216,
            "./extent": 53,
            "./load_geometry": 55,
            "grid-index": 16,
            "pbf": 24,
            "point-geometry": 25,
            "vector-tile": 33
        }],
        55: [function (_dereq_, module, exports) {
            "use strict";

            function createBounds(e) {
                return {min: -1 * Math.pow(2, e - 1), max: Math.pow(2, e - 1) - 1}
            }

            var util = _dereq_("../util/util"), EXTENT = _dereq_("./extent"),
                boundsLookup = {15: createBounds(15), 16: createBounds(16)};
            module.exports = function (e, t) {
                for (var r = boundsLookup[t || 16], o = EXTENT / e.extent, u = e.loadGeometry(), n = 0; n < u.length; n++) for (var a = u[n], i = 0; i < a.length; i++) {
                    var d = a[i];
                    d.x = Math.round(d.x * o), d.y = Math.round(d.y * o), (d.x < r.min || d.x > r.max || d.y < r.min || d.y > r.max) && util.warnOnce("Geometry exceeds allowed extent, reduce your vector tile buffer size")
                }
                return u
            };
        }, {"../util/util": 215, "./extent": 53}],
        56: [function (_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"),
                PosArray = createStructArrayType({members: [{name: "a_pos", type: "Int16", components: 2}]});
            module.exports = PosArray;
        }, {"../util/struct_array": 212}],
        57: [function (_dereq_, module, exports) {
            "use strict";

            function getPaintAttributeValue(t, r, e, i) {
                if (!t.zoomStops) return r.getPaintValue(t.property, e, i);
                var a = t.zoomStops.map(function (a) {
                    return r.getPaintValue(t.property, util.extend({}, e, {zoom: a}), i)
                });
                return 1 === a.length ? a[0] : a
            }

            function normalizePaintAttribute(t, r) {
                var e = t.name;
                e || (e = t.property.replace(r.type + "-", "").replace(/-/g, "_"));
                var i = "color" === r._paintSpecifications[t.property].type;
                return util.extend({
                    name: "a_" + e,
                    components: i ? 4 : 1,
                    multiplier: i ? 255 : 1,
                    dimensions: i ? 4 : 1
                }, t)
            }

            var createVertexArrayType = _dereq_("./vertex_array_type"), util = _dereq_("../util/util"),
                ProgramConfiguration = function () {
                    this.attributes = [], this.uniforms = [], this.interpolationUniforms = [], this.pragmas = {
                        vertex: {},
                        fragment: {}
                    }, this.cacheKey = "", this.interface = {}
                };
            ProgramConfiguration.createDynamic = function (t, r, e) {
                for (var i = new ProgramConfiguration, a = 0, n = t.paintAttributes || []; a < n.length; a += 1) {
                    var o = n[a], p = normalizePaintAttribute(o, r), u = p.name.slice(2);
                    r.isPaintValueFeatureConstant(p.property) ? i.addZoomAttribute(u, p) : r.isPaintValueZoomConstant(p.property) ? i.addPropertyAttribute(u, p) : i.addZoomAndPropertyAttribute(u, p, r, e)
                }
                return i.PaintVertexArray = createVertexArrayType(i.attributes), i.interface = t, i
            }, ProgramConfiguration.createStatic = function (t) {
                for (var r = new ProgramConfiguration, e = 0, i = t; e < i.length; e += 1) {
                    var a = i[e];
                    r.addUniform(a, "u_" + a)
                }
                return r
            }, ProgramConfiguration.prototype.addUniform = function (t, r) {
                var e = this.getPragmas(t);
                e.define.push("uniform {precision} {type} " + r + ";"), e.initialize.push("{precision} {type} " + t + " = " + r + ";"), this.cacheKey += "/u_" + t
            }, ProgramConfiguration.prototype.addZoomAttribute = function (t, r) {
                this.uniforms.push(r), this.addUniform(t, r.name)
            }, ProgramConfiguration.prototype.addPropertyAttribute = function (t, r) {
                var e = this.getPragmas(t);
                this.attributes.push(r), e.define.push("varying {precision} {type} " + t + ";"), e.vertex.define.push("attribute {precision} {type} " + r.name + ";"), e.vertex.initialize.push(t + " = " + r.name + " / " + r.multiplier + ".0;"), this.cacheKey += "/a_" + t
            }, ProgramConfiguration.prototype.addZoomAndPropertyAttribute = function (t, r, e, i) {
                var a = this, n = this.getPragmas(t);
                n.define.push("varying {precision} {type} " + t + ";");
                var o = e.getPaintValueStopZoomLevels(r.property), p = 0;
                if (o.length > 4) for (; p < o.length - 2 && o[p] < i;) p++;
                var u = "u_" + t + "_t";
                n.vertex.define.push("uniform lowp float " + u + ";"), this.interpolationUniforms.push({
                    name: u,
                    property: r.property,
                    stopOffset: p
                });
                for (var s = [], m = 0; m < 4; m++) s.push(o[Math.min(p + m, o.length - 1)]);
                var f = [];
                if (1 === r.components) this.attributes.push(util.extend({}, r, {
                    components: 4,
                    zoomStops: s
                })), n.vertex.define.push("attribute {precision} vec4 " + r.name + ";"), f.push(r.name); else for (var g = 0; g < 4; g++) {
                    var h = r.name + g;
                    f.push(h), a.attributes.push(util.extend({}, r, {
                        name: h,
                        zoomStops: [s[g]]
                    })), n.vertex.define.push("attribute {precision} {type} " + h + ";")
                }
                n.vertex.initialize.push(t + " = evaluate_zoom_function_" + r.components + "(            " + f.join(", ") + ", " + u + ") / " + r.multiplier + ".0;"), this.cacheKey += "/z_" + t
            }, ProgramConfiguration.prototype.getPragmas = function (t) {
                return this.pragmas[t] || (this.pragmas[t] = {
                    define: [],
                    initialize: []
                }, this.pragmas[t].fragment = {define: [], initialize: []}, this.pragmas[t].vertex = {
                    define: [],
                    initialize: []
                }), this.pragmas[t]
            }, ProgramConfiguration.prototype.applyPragmas = function (t, r) {
                var e = this;
                return t.replace(/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g, function (t, i, a, n, o) {
                    return e.pragmas[o][i].concat(e.pragmas[o][r][i]).join("\n").replace(/{type}/g, n).replace(/{precision}/g, a)
                })
            }, ProgramConfiguration.prototype.createPaintPropertyStatistics = function () {
                for (var t = this, r = {}, e = 0, i = t.attributes; e < i.length; e += 1) {
                    var a = i[e];
                    1 === a.dimensions && (r[a.property] = {max: -(1 / 0)})
                }
                return r
            }, ProgramConfiguration.prototype.populatePaintArray = function (t, r, e, i, a, n) {
                var o = this, p = r.length;
                r.resize(i);
                for (var u = 0, s = o.attributes; u < s.length; u += 1) for (var m = s[u], f = getPaintAttributeValue(m, t, a, n), g = p; g < i; g++) {
                    var h = r.get(g);
                    if (4 === m.components) for (var l = 0; l < 4; l++) h[m.name + l] = f[l] * m.multiplier; else h[m.name] = f * m.multiplier;
                    if (1 === m.dimensions) {
                        var c = e[m.property];
                        c.max = Math.max(c.max, 1 === m.components ? f : Math.max.apply(Math, f))
                    }
                }
            }, ProgramConfiguration.prototype.setUniforms = function (t, r, e, i) {
                for (var a = this, n = 0, o = a.uniforms; n < o.length; n += 1) {
                    var p = o[n], u = e.getPaintValue(p.property, i);
                    4 === p.components ? t.uniform4fv(r[p.name], u) : t.uniform1f(r[p.name], u)
                }
                for (var s = 0, m = a.interpolationUniforms; s < m.length; s += 1) {
                    var f = m[s], g = e.getPaintInterpolationT(f.property, i);
                    t.uniform1f(r[f.name], Math.max(0, Math.min(3, g - f.stopOffset)))
                }
            }, module.exports = ProgramConfiguration;
        }, {"../util/util": 215, "./vertex_array_type": 59}],
        58: [function (_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"), RasterBoundsArray = createStructArrayType({
                members: [{
                    name: "a_pos",
                    type: "Int16",
                    components: 2
                }, {name: "a_texture_pos", type: "Int16", components: 2}]
            });
            module.exports = RasterBoundsArray;
        }, {"../util/struct_array": 212}],
        59: [function (_dereq_, module, exports) {
            "use strict";

            function createVertexArrayType(r) {
                return createStructArrayType({members: r, alignment: 4})
            }

            var createStructArrayType = _dereq_("../util/struct_array");
            module.exports = createVertexArrayType;
        }, {"../util/struct_array": 212}],
        60: [function (_dereq_, module, exports) {
            "use strict";
            var Coordinate = function (o, t, n) {
                this.column = o, this.row = t, this.zoom = n
            };
            Coordinate.prototype.clone = function () {
                return new Coordinate(this.column, this.row, this.zoom)
            }, Coordinate.prototype.zoomTo = function (o) {
                return this.clone()._zoomTo(o)
            }, Coordinate.prototype.sub = function (o) {
                return this.clone()._sub(o)
            }, Coordinate.prototype._zoomTo = function (o) {
                var t = Math.pow(2, o - this.zoom);
                return this.column *= t, this.row *= t, this.zoom = o, this
            }, Coordinate.prototype._sub = function (o) {
                return o = o.zoomTo(this.zoom), this.column -= o.column, this.row -= o.row, this
            }, module.exports = Coordinate;
        }, {}],
        61: [function (_dereq_, module, exports) {
            "use strict";
            var wrap = _dereq_("../util/util").wrap, LngLat = function (t, n) {
                if (isNaN(t) || isNaN(n)) throw new Error("Invalid LngLat object: (" + t + ", " + n + ")");
                if (this.lng = +t, this.lat = +n, this.lat > 90 || this.lat < -90) throw new Error("Invalid LngLat latitude value: must be between -90 and 90")
            };
            LngLat.prototype.wrap = function () {
                return new LngLat(wrap(this.lng, -180, 180), this.lat)
            }, LngLat.prototype.toArray = function () {
                return [this.lng, this.lat]
            }, LngLat.prototype.toString = function () {
                return "LngLat(" + this.lng + ", " + this.lat + ")"
            }, LngLat.convert = function (t) {
                if (t instanceof LngLat) return t;
                if (Array.isArray(t) && 2 === t.length) return new LngLat(Number(t[0]), Number(t[1]));
                if (!Array.isArray(t) && "object" == typeof t && null !== t) return new LngLat(Number(t.lng), Number(t.lat));
                throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")
            }, module.exports = LngLat;
        }, {"../util/util": 215}],
        62: [function (_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("./lng_lat"), LngLatBounds = function (t, n) {
                t && (n ? this.setSouthWest(t).setNorthEast(n) : 4 === t.length ? this.setSouthWest([t[0], t[1]]).setNorthEast([t[2], t[3]]) : this.setSouthWest(t[0]).setNorthEast(t[1]))
            };
            LngLatBounds.prototype.setNorthEast = function (t) {
                return this._ne = t instanceof LngLat ? new LngLat(t.lng, t.lat) : LngLat.convert(t), this
            }, LngLatBounds.prototype.setSouthWest = function (t) {
                return this._sw = t instanceof LngLat ? new LngLat(t.lng, t.lat) : LngLat.convert(t), this
            }, LngLatBounds.prototype.extend = function (t) {
                var n, e, s = this._sw, o = this._ne;
                if (t instanceof LngLat) n = t, e = t; else {
                    if (!(t instanceof LngLatBounds)) return Array.isArray(t) ? t.every(Array.isArray) ? this.extend(LngLatBounds.convert(t)) : this.extend(LngLat.convert(t)) : this;
                    if (n = t._sw, e = t._ne, !n || !e) return this
                }
                return s || o ? (s.lng = Math.min(n.lng, s.lng), s.lat = Math.min(n.lat, s.lat), o.lng = Math.max(e.lng, o.lng), o.lat = Math.max(e.lat, o.lat)) : (this._sw = new LngLat(n.lng, n.lat), this._ne = new LngLat(e.lng, e.lat)), this
            }, LngLatBounds.prototype.getCenter = function () {
                return new LngLat((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2)
            }, LngLatBounds.prototype.getSouthWest = function () {
                return this._sw
            }, LngLatBounds.prototype.getNorthEast = function () {
                return this._ne
            }, LngLatBounds.prototype.getNorthWest = function () {
                return new LngLat(this.getWest(), this.getNorth())
            }, LngLatBounds.prototype.getSouthEast = function () {
                return new LngLat(this.getEast(), this.getSouth())
            }, LngLatBounds.prototype.getWest = function () {
                return this._sw.lng
            }, LngLatBounds.prototype.getSouth = function () {
                return this._sw.lat
            }, LngLatBounds.prototype.getEast = function () {
                return this._ne.lng
            }, LngLatBounds.prototype.getNorth = function () {
                return this._ne.lat
            }, LngLatBounds.prototype.toArray = function () {
                return [this._sw.toArray(), this._ne.toArray()]
            }, LngLatBounds.prototype.toString = function () {
                return "LngLatBounds(" + this._sw.toString() + ", " + this._ne.toString() + ")"
            }, LngLatBounds.convert = function (t) {
                return !t || t instanceof LngLatBounds ? t : new LngLatBounds(t)
            }, module.exports = LngLatBounds;
        }, {"./lng_lat": 61}],
        63: [function (_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("./lng_lat"), Point = _dereq_("point-geometry"), Coordinate = _dereq_("./coordinate"),
                util = _dereq_("../util/util"), interp = _dereq_("../style-spec/util/interpolate"),
                TileCoord = _dereq_("../source/tile_coord"), EXTENT = _dereq_("../data/extent"),
                glmatrix = _dereq_("@mapbox/gl-matrix"), vec4 = glmatrix.vec4, mat4 = glmatrix.mat4,
                mat2 = glmatrix.mat2, Transform = function (t, o, i) {
                    this.tileSize = 512, this._renderWorldCopies = void 0 === i || i, this._minZoom = t || 0, this._maxZoom = o || 22, this.latRange = [-85.05113, 85.05113], this.width = 0, this.height = 0, this._center = new LngLat(0, 0), this.zoom = 0, this.angle = 0, this._fov = .6435011087932844, this._pitch = 0, this._unmodified = !0
                }, prototypeAccessors = {
                    minZoom: {},
                    maxZoom: {},
                    renderWorldCopies: {},
                    worldSize: {},
                    centerPoint: {},
                    size: {},
                    bearing: {},
                    pitch: {},
                    fov: {},
                    zoom: {},
                    center: {},
                    unmodified: {},
                    x: {},
                    y: {},
                    point: {}
                };
            prototypeAccessors.minZoom.get = function () {
                return this._minZoom
            }, prototypeAccessors.minZoom.set = function (t) {
                this._minZoom !== t && (this._minZoom = t, this.zoom = Math.max(this.zoom, t))
            }, prototypeAccessors.maxZoom.get = function () {
                return this._maxZoom
            }, prototypeAccessors.maxZoom.set = function (t) {
                this._maxZoom !== t && (this._maxZoom = t, this.zoom = Math.min(this.zoom, t))
            }, prototypeAccessors.renderWorldCopies.get = function () {
                return this._renderWorldCopies
            }, prototypeAccessors.worldSize.get = function () {
                return this.tileSize * this.scale
            }, prototypeAccessors.centerPoint.get = function () {
                return this.size._div(2)
            }, prototypeAccessors.size.get = function () {
                return new Point(this.width, this.height)
            }, prototypeAccessors.bearing.get = function () {
                return -this.angle / Math.PI * 180
            }, prototypeAccessors.bearing.set = function (t) {
                var o = -util.wrap(t, -180, 180) * Math.PI / 180;
                this.angle !== o && (this._unmodified = !1, this.angle = o, this._calcMatrices(), this.rotationMatrix = mat2.create(), mat2.rotate(this.rotationMatrix, this.rotationMatrix, this.angle))
            }, prototypeAccessors.pitch.get = function () {
                return this._pitch / Math.PI * 180
            }, prototypeAccessors.pitch.set = function (t) {
                var o = util.clamp(t, 0, 60) / 180 * Math.PI;
                this._pitch !== o && (this._unmodified = !1, this._pitch = o, this._calcMatrices())
            }, prototypeAccessors.fov.get = function () {
                return this._fov / Math.PI * 180
            }, prototypeAccessors.fov.set = function (t) {
                t = Math.max(.01, Math.min(60, t)), this._fov !== t && (this._unmodified = !1, this._fov = t / 180 * Math.PI, this._calcMatrices())
            }, prototypeAccessors.zoom.get = function () {
                return this._zoom
            }, prototypeAccessors.zoom.set = function (t) {
                var o = Math.min(Math.max(t, this.minZoom), this.maxZoom);
                this._zoom !== o && (this._unmodified = !1, this._zoom = o, this.scale = this.zoomScale(o), this.tileZoom = Math.floor(o), this.zoomFraction = o - this.tileZoom, this._constrain(), this._calcMatrices())
            }, prototypeAccessors.center.get = function () {
                return this._center
            }, prototypeAccessors.center.set = function (t) {
                t.lat === this._center.lat && t.lng === this._center.lng || (this._unmodified = !1, this._center = t, this._constrain(), this._calcMatrices())
            }, Transform.prototype.coveringZoomLevel = function (t) {
                return (t.roundZoom ? Math.round : Math.floor)(this.zoom + this.scaleZoom(this.tileSize / t.tileSize))
            }, Transform.prototype.getVisibleWrappedCoordinates = function (t) {
                for (var o = this.pointCoordinate(new Point(0, 0), 0), i = this.pointCoordinate(new Point(this.width, 0), 0), e = Math.floor(o.column), r = Math.floor(i.column), n = [t], s = e; s <= r; s++) 0 !== s && n.push(new TileCoord(t.z, t.x, t.y, s));
                return n
            }, Transform.prototype.coveringTiles = function (t) {
                var o = this.coveringZoomLevel(t), i = o;
                if (o < t.minzoom) return [];
                o > t.maxzoom && (o = t.maxzoom);
                var e = this.pointCoordinate(this.centerPoint, o), r = new Point(e.column - .5, e.row - .5),
                    n = [this.pointCoordinate(new Point(0, 0), o), this.pointCoordinate(new Point(this.width, 0), o), this.pointCoordinate(new Point(this.width, this.height), o), this.pointCoordinate(new Point(0, this.height), o)];
                return TileCoord.cover(o, n, t.reparseOverscaled ? i : o, this._renderWorldCopies).sort(function (t, o) {
                    return r.dist(t) - r.dist(o)
                })
            }, Transform.prototype.resize = function (t, o) {
                this.width = t, this.height = o, this.pixelsToGLUnits = [2 / t, -2 / o], this._constrain(), this._calcMatrices()
            }, prototypeAccessors.unmodified.get = function () {
                return this._unmodified
            }, Transform.prototype.zoomScale = function (t) {
                return Math.pow(2, t)
            }, Transform.prototype.scaleZoom = function (t) {
                return Math.log(t) / Math.LN2
            }, Transform.prototype.project = function (t) {
                return new Point(this.lngX(t.lng), this.latY(t.lat))
            }, Transform.prototype.unproject = function (t) {
                return new LngLat(this.xLng(t.x), this.yLat(t.y))
            }, prototypeAccessors.x.get = function () {
                return this.lngX(this.center.lng)
            }, prototypeAccessors.y.get = function () {
                return this.latY(this.center.lat)
            }, prototypeAccessors.point.get = function () {
                return new Point(this.x, this.y)
            }, Transform.prototype.lngX = function (t) {
                return (180 + t) * this.worldSize / 360
            }, Transform.prototype.latY = function (t) {
                var o = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360));
                return (180 - o) * this.worldSize / 360
            }, Transform.prototype.xLng = function (t) {
                return 360 * t / this.worldSize - 180
            }, Transform.prototype.yLat = function (t) {
                var o = 180 - 360 * t / this.worldSize;
                return 360 / Math.PI * Math.atan(Math.exp(o * Math.PI / 180)) - 90
            }, Transform.prototype.setLocationAtPoint = function (t, o) {
                var i = this.pointCoordinate(o)._sub(this.pointCoordinate(this.centerPoint));
                this.center = this.coordinateLocation(this.locationCoordinate(t)._sub(i)), this._renderWorldCopies && (this.center = this.center.wrap())
            }, Transform.prototype.locationPoint = function (t) {
                return this.coordinatePoint(this.locationCoordinate(t))
            }, Transform.prototype.pointLocation = function (t) {
                return this.coordinateLocation(this.pointCoordinate(t))
            }, Transform.prototype.locationCoordinate = function (t) {
                return new Coordinate(this.lngX(t.lng) / this.tileSize, this.latY(t.lat) / this.tileSize, this.zoom).zoomTo(this.tileZoom)
            }, Transform.prototype.coordinateLocation = function (t) {
                var o = t.zoomTo(this.zoom);
                return new LngLat(this.xLng(o.column * this.tileSize), this.yLat(o.row * this.tileSize))
            }, Transform.prototype.pointCoordinate = function (t, o) {
                void 0 === o && (o = this.tileZoom);
                var i = 0, e = [t.x, t.y, 0, 1], r = [t.x, t.y, 1, 1];
                vec4.transformMat4(e, e, this.pixelMatrixInverse), vec4.transformMat4(r, r, this.pixelMatrixInverse);
                var n = e[3], s = r[3], a = e[0] / n, h = r[0] / s, c = e[1] / n, m = r[1] / s, p = e[2] / n,
                    l = r[2] / s, u = p === l ? 0 : (i - p) / (l - p);
                return new Coordinate(interp(a, h, u) / this.tileSize, interp(c, m, u) / this.tileSize, this.zoom)._zoomTo(o)
            }, Transform.prototype.coordinatePoint = function (t) {
                var o = t.zoomTo(this.zoom), i = [o.column * this.tileSize, o.row * this.tileSize, 0, 1];
                return vec4.transformMat4(i, i, this.pixelMatrix), new Point(i[0] / i[3], i[1] / i[3])
            }, Transform.prototype.calculatePosMatrix = function (t, o) {
                var i = t.toCoordinate(o), e = this.worldSize / this.zoomScale(i.zoom),
                    r = mat4.identity(new Float64Array(16));
                return mat4.translate(r, r, [i.column * e, i.row * e, 0]), mat4.scale(r, r, [e / EXTENT, e / EXTENT, 1]), mat4.multiply(r, this.projMatrix, r), new Float32Array(r)
            }, Transform.prototype.cameraToTileDistance = function (t) {
                var o = this.calculatePosMatrix(t.coord, t.sourceMaxZoom), i = [t.tileSize / 2, t.tileSize / 2, 0, 1];
                return vec4.transformMat4(i, i, o), i[3]
            }, Transform.prototype._constrain = function () {
                if (this.center && this.width && this.height && !this._constraining) {
                    this._constraining = !0;
                    var t, o, i, e, r = -90, n = 90, s = -180, a = 180, h = this.size, c = this._unmodified;
                    if (this.latRange) {
                        var m = this.latRange;
                        r = this.latY(m[1]), n = this.latY(m[0]), t = n - r < h.y ? h.y / (n - r) : 0
                    }
                    if (this.lngRange) {
                        var p = this.lngRange;
                        s = this.lngX(p[0]), a = this.lngX(p[1]), o = a - s < h.x ? h.x / (a - s) : 0
                    }
                    var l = Math.max(o || 0, t || 0);
                    if (l) return this.center = this.unproject(new Point(o ? (a + s) / 2 : this.x, t ? (n + r) / 2 : this.y)), this.zoom += this.scaleZoom(l), this._unmodified = c, void(this._constraining = !1);
                    if (this.latRange) {
                        var u = this.y, f = h.y / 2;
                        u - f < r && (e = r + f), u + f > n && (e = n - f)
                    }
                    if (this.lngRange) {
                        var d = this.x, g = h.x / 2;
                        d - g < s && (i = s + g), d + g > a && (i = a - g)
                    }
                    void 0 === i && void 0 === e || (this.center = this.unproject(new Point(void 0 !== i ? i : this.x, void 0 !== e ? e : this.y))), this._unmodified = c, this._constraining = !1
                }
            }, Transform.prototype._calcMatrices = function () {
                if (this.height) {
                    this.cameraToCenterDistance = .5 / Math.tan(this._fov / 2) * this.height;
                    var t = this._fov / 2, o = Math.PI / 2 + this._pitch,
                        i = Math.sin(t) * this.cameraToCenterDistance / Math.sin(Math.PI - o - t),
                        e = Math.cos(Math.PI / 2 - this._pitch) * i + this.cameraToCenterDistance, r = 1.01 * e,
                        n = new Float64Array(16);
                    mat4.perspective(n, this._fov, this.width / this.height, 1, r), mat4.scale(n, n, [1, -1, 1]), mat4.translate(n, n, [0, 0, -this.cameraToCenterDistance]), mat4.rotateX(n, n, this._pitch), mat4.rotateZ(n, n, this.angle), mat4.translate(n, n, [-this.x, -this.y, 0]);
                    var s = this.worldSize / (2 * Math.PI * 6378137 * Math.abs(Math.cos(this.center.lat * (Math.PI / 180))));
                    if (mat4.scale(n, n, [1, 1, s, 1]), this.projMatrix = n, n = mat4.create(), mat4.scale(n, n, [this.width / 2, -this.height / 2, 1]), mat4.translate(n, n, [1, -1, 0]), this.pixelMatrix = mat4.multiply(new Float64Array(16), n, this.projMatrix), n = mat4.invert(new Float64Array(16), this.pixelMatrix), !n) throw new Error("failed to invert matrix");
                    this.pixelMatrixInverse = n
                }
            }, Object.defineProperties(Transform.prototype, prototypeAccessors), module.exports = Transform;
        }, {
            "../data/extent": 53,
            "../source/tile_coord": 95,
            "../style-spec/util/interpolate": 122,
            "../util/util": 215,
            "./coordinate": 60,
            "./lng_lat": 61,
            "@mapbox/gl-matrix": 1,
            "point-geometry": 25
        }],
        64: [function (_dereq_, module, exports) {
            "use strict";
            var browser = _dereq_("./util/browser"), mapboxgl = module.exports = {};
            mapboxgl.version = _dereq_("../package.json").version, mapboxgl.workerCount = Math.max(Math.floor(browser.hardwareConcurrency / 2), 1), mapboxgl.Map = _dereq_("./ui/map"), mapboxgl.NavigationControl = _dereq_("./ui/control/navigation_control"), mapboxgl.GeolocateControl = _dereq_("./ui/control/geolocate_control"), mapboxgl.AttributionControl = _dereq_("./ui/control/attribution_control"), mapboxgl.ScaleControl = _dereq_("./ui/control/scale_control"), mapboxgl.FullscreenControl = _dereq_("./ui/control/fullscreen_control"), mapboxgl.Popup = _dereq_("./ui/popup"), mapboxgl.Marker = _dereq_("./ui/marker"), mapboxgl.Style = _dereq_("./style/style"), mapboxgl.LngLat = _dereq_("./geo/lng_lat"), mapboxgl.LngLatBounds = _dereq_("./geo/lng_lat_bounds"), mapboxgl.Point = _dereq_("point-geometry"), mapboxgl.Evented = _dereq_("./util/evented"), mapboxgl.supported = _dereq_("./util/browser").supported;
            var config = _dereq_("./util/config");
            mapboxgl.config = config;
            var rtlTextPlugin = _dereq_("./source/rtl_text_plugin");
            mapboxgl.setRTLTextPlugin = rtlTextPlugin.setRTLTextPlugin, Object.defineProperty(mapboxgl, "accessToken", {
                get: function () {
                    return config.ACCESS_TOKEN
                }, set: function (o) {
                    config.ACCESS_TOKEN = o
                }
            });
        }, {
            "../package.json": 42,
            "./geo/lng_lat": 61,
            "./geo/lng_lat_bounds": 62,
            "./source/rtl_text_plugin": 90,
            "./style/style": 148,
            "./ui/control/attribution_control": 175,
            "./ui/control/fullscreen_control": 176,
            "./ui/control/geolocate_control": 177,
            "./ui/control/navigation_control": 179,
            "./ui/control/scale_control": 180,
            "./ui/map": 189,
            "./ui/marker": 190,
            "./ui/popup": 191,
            "./util/browser": 194,
            "./util/config": 198,
            "./util/evented": 202,
            "point-geometry": 25
        }],
        65: [function (_dereq_, module, exports) {
            "use strict";

            function drawBackground(r, t, e) {
                var a = r.gl, i = r.transform, n = i.tileSize, o = e.paint["background-color"],
                    l = e.paint["background-pattern"], u = e.paint["background-opacity"],
                    f = !l && 1 === o[3] && 1 === u;
                if (r.isOpaquePass === f) {
                    a.disable(a.STENCIL_TEST), r.setDepthSublayer(0);
                    var s;
                    if (l) {
                        if (pattern.isPatternMissing(l, r)) return;
                        s = r.useProgram("fillPattern", r.basicFillProgramConfiguration), pattern.prepare(l, r, s), r.tileExtentPatternVAO.bind(a, s, r.tileExtentBuffer)
                    } else s = r.useProgram("fill", r.basicFillProgramConfiguration), a.uniform4fv(s.u_color, o), r.tileExtentVAO.bind(a, s, r.tileExtentBuffer);
                    a.uniform1f(s.u_opacity, u);
                    for (var c = i.coveringTiles({tileSize: n}), g = 0, p = c; g < p.length; g += 1) {
                        var d = p[g];
                        l && pattern.setTile({
                            coord: d,
                            tileSize: n
                        }, r, s), a.uniformMatrix4fv(s.u_matrix, !1, r.transform.calculatePosMatrix(d)), a.drawArrays(a.TRIANGLE_STRIP, 0, r.tileExtentBuffer.length)
                    }
                }
            }

            var pattern = _dereq_("./pattern");
            module.exports = drawBackground;
        }, {"./pattern": 77}],
        66: [function (_dereq_, module, exports) {
            "use strict";

            function drawCircles(e, r, t, a) {
                if (!e.isOpaquePass) {
                    var i = e.gl;
                    e.setDepthSublayer(0), e.depthMask(!1), i.disable(i.STENCIL_TEST);
                    for (var s = 0; s < a.length; s++) {
                        var o = a[s], n = r.getTile(o), f = n.getBucket(t);
                        if (f) {
                            var l = f.buffers, m = l.layerData[t.id], u = m.programConfiguration,
                                c = e.useProgram("circle", u);
                            u.setUniforms(i, c, t, {zoom: e.transform.zoom}), "map" === t.paint["circle-pitch-scale"] ? (i.uniform1i(c.u_scale_with_map, !0), i.uniform2f(c.u_extrude_scale, e.transform.pixelsToGLUnits[0] * e.transform.cameraToCenterDistance, e.transform.pixelsToGLUnits[1] * e.transform.cameraToCenterDistance)) : (i.uniform1i(c.u_scale_with_map, !1), i.uniform2fv(c.u_extrude_scale, e.transform.pixelsToGLUnits)), i.uniform1f(c.u_devicepixelratio, browser.devicePixelRatio), i.uniformMatrix4fv(c.u_matrix, !1, e.translatePosMatrix(o.posMatrix, n, t.paint["circle-translate"], t.paint["circle-translate-anchor"]));
                            for (var p = 0, v = l.segments; p < v.length; p += 1) {
                                var x = v[p];
                                x.vaos[t.id].bind(i, c, l.layoutVertexBuffer, l.elementBuffer, m.paintVertexBuffer, x.vertexOffset), i.drawElements(i.TRIANGLES, 3 * x.primitiveLength, i.UNSIGNED_SHORT, 3 * x.primitiveOffset * 2)
                            }
                        }
                    }
                }
            }

            var browser = _dereq_("../util/browser");
            module.exports = drawCircles;
        }, {"../util/browser": 194}],
        67: [function (_dereq_, module, exports) {
            "use strict";

            function drawCollisionDebug(e, r, i, o) {
                var t = e.gl;
                t.enable(t.STENCIL_TEST);
                var a = e.useProgram("collisionBox");
                t.activeTexture(t.TEXTURE1), e.frameHistory.bind(t), t.uniform1i(a.u_fadetexture, 1);
                for (var n = 0; n < o.length; n++) {
                    var f = o[n], l = r.getTile(f), m = l.getBucket(i);
                    if (m) {
                        var u = m.buffers.collisionBox;
                        if (u) {
                            t.uniformMatrix4fv(a.u_matrix, !1, f.posMatrix), e.enableTileClippingMask(f), e.lineWidth(1), t.uniform1f(a.u_scale, Math.pow(2, e.transform.zoom - l.coord.z)), t.uniform1f(a.u_zoom, 10 * e.transform.zoom);
                            var s = Math.max(0, Math.min(25, l.coord.z + Math.log(l.collisionTile.maxScale) / Math.LN2));
                            t.uniform1f(a.u_maxzoom, 10 * s), t.uniform1f(a.u_collision_y_stretch, l.collisionTile.yStretch), t.uniform1f(a.u_pitch, e.transform.pitch / 360 * 2 * Math.PI), t.uniform1f(a.u_camera_to_center_distance, e.transform.cameraToCenterDistance);
                            for (var c = 0, _ = u.segments; c < _.length; c += 1) {
                                var h = _[c];
                                h.vaos[i.id].bind(t, a, u.layoutVertexBuffer, u.elementBuffer, null, h.vertexOffset), t.drawElements(t.LINES, 2 * h.primitiveLength, t.UNSIGNED_SHORT, 2 * h.primitiveOffset * 2)
                            }
                        }
                    }
                }
            }

            module.exports = drawCollisionDebug;
        }, {}],
        68: [function (_dereq_, module, exports) {
            "use strict";

            function drawDebug(r, e, a) {
                for (var t = 0; t < a.length; t++) drawDebugTile(r, e, a[t])
            }

            function drawDebugTile(r, e, a) {
                var t = r.gl;
                t.disable(t.STENCIL_TEST), r.lineWidth(1 * browser.devicePixelRatio);
                var i = a.posMatrix, u = r.useProgram("debug");
                t.uniformMatrix4fv(u.u_matrix, !1, i), t.uniform4f(u.u_color, 1, 0, 0, 1), r.debugVAO.bind(t, u, r.debugBuffer), t.drawArrays(t.LINE_STRIP, 0, r.debugBuffer.length);
                for (var o = createTextVerticies(a.toString(), 50, 200, 5), f = new PosArray, n = 0; n < o.length; n += 2) f.emplaceBack(o[n], o[n + 1]);
                var l = Buffer.fromStructArray(f, Buffer.BufferType.VERTEX), m = new VertexArrayObject;
                m.bind(t, u, l), t.uniform4f(u.u_color, 1, 1, 1, 1);
                for (var s = e.getTile(a).tileSize, g = EXTENT / (Math.pow(2, r.transform.zoom - a.z) * s), x = [[-1, -1], [-1, 1], [1, -1], [1, 1]], d = 0; d < x.length; d++) {
                    var b = x[d];
                    t.uniformMatrix4fv(u.u_matrix, !1, mat4.translate([], i, [g * b[0], g * b[1], 0])), t.drawArrays(t.LINES, 0, l.length)
                }
                t.uniform4f(u.u_color, 0, 0, 0, 1), t.uniformMatrix4fv(u.u_matrix, !1, i), t.drawArrays(t.LINES, 0, l.length)
            }

            function createTextVerticies(r, e, a, t) {
                t = t || 1;
                var i, u, o, f, n, l, m, s, g = [];
                for (i = 0, u = r.length; i < u; i++) if (n = simplexFont[r[i]]) {
                    for (s = null, o = 0, f = n[1].length; o < f; o += 2) n[1][o] === -1 && n[1][o + 1] === -1 ? s = null : (l = e + n[1][o] * t, m = a - n[1][o + 1] * t, s && g.push(s.x, s.y, l, m), s = {
                        x: l,
                        y: m
                    });
                    e += n[0] * t
                }
                return g
            }

            var browser = _dereq_("../util/browser"), mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                EXTENT = _dereq_("../data/extent"), Buffer = _dereq_("../data/buffer"),
                VertexArrayObject = _dereq_("./vertex_array_object"), PosArray = _dereq_("../data/pos_array");
            module.exports = drawDebug;
            var simplexFont = {
                " ": [16, []],
                "!": [10, [5, 21, 5, 7, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
                '"': [16, [4, 21, 4, 14, -1, -1, 12, 21, 12, 14]],
                "#": [21, [11, 25, 4, -7, -1, -1, 17, 25, 10, -7, -1, -1, 4, 12, 18, 12, -1, -1, 3, 6, 17, 6]],
                $: [20, [8, 25, 8, -4, -1, -1, 12, 25, 12, -4, -1, -1, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]],
                "%": [24, [21, 21, 3, 0, -1, -1, 8, 21, 10, 19, 10, 17, 9, 15, 7, 14, 5, 14, 3, 16, 3, 18, 4, 20, 6, 21, 8, 21, 10, 20, 13, 19, 16, 19, 19, 20, 21, 21, -1, -1, 17, 7, 15, 6, 14, 4, 14, 2, 16, 0, 18, 0, 20, 1, 21, 3, 21, 5, 19, 7, 17, 7]],
                "&": [26, [23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18, 13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22, 0, 23, 1, 23, 2]],
                "'": [10, [5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15]],
                "(": [14, [11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7]],
                ")": [14, [3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7]],
                "*": [16, [8, 21, 8, 9, -1, -1, 3, 18, 13, 12, -1, -1, 13, 18, 3, 12]],
                "+": [26, [13, 18, 13, 0, -1, -1, 4, 9, 22, 9]],
                ",": [10, [6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]],
                "-": [26, [4, 9, 22, 9]],
                ".": [10, [5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
                "/": [22, [20, 25, 2, -7]],
                0: [20, [9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4, 17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21]],
                1: [20, [6, 17, 8, 18, 11, 21, 11, 0]],
                2: [20, [4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16, 15, 15, 13, 13, 10, 3, 0, 17, 0]],
                3: [20, [5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]],
                4: [20, [13, 21, 3, 7, 18, 7, -1, -1, 13, 21, 13, 0]],
                5: [20, [15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]],
                6: [20, [16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1, 10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7, 12, 5, 10, 4, 7]],
                7: [20, [17, 21, 7, 0, -1, -1, 3, 21, 17, 21]],
                8: [20, [8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7, 17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9, 12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21]],
                9: [20, [16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6, 20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0, 5, 1, 4, 3]],
                ":": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]],
                ";": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]],
                "<": [24, [20, 18, 4, 9, 20, 0]],
                "=": [26, [4, 12, 22, 12, -1, -1, 4, 6, 22, 6]],
                ">": [24, [4, 18, 20, 9, 4, 0]],
                "?": [18, [3, 16, 3, 17, 4, 19, 5, 20, 7, 21, 11, 21, 13, 20, 14, 19, 15, 17, 15, 15, 14, 13, 13, 12, 9, 10, 9, 7, -1, -1, 9, 2, 8, 1, 9, 0, 10, 1, 9, 2]],
                "@": [27, [18, 13, 17, 15, 15, 16, 12, 16, 10, 15, 9, 14, 8, 11, 8, 8, 9, 6, 11, 5, 14, 5, 16, 6, 17, 8, -1, -1, 12, 16, 10, 14, 9, 11, 9, 8, 10, 6, 11, 5, -1, -1, 18, 16, 17, 8, 17, 6, 19, 5, 21, 5, 23, 7, 24, 10, 24, 12, 23, 15, 22, 17, 20, 19, 18, 20, 15, 21, 12, 21, 9, 20, 7, 19, 5, 17, 4, 15, 3, 12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1, 12, 0, 15, 0, 18, 1, 20, 2, 21, 3, -1, -1, 19, 16, 18, 8, 18, 6, 19, 5]],
                A: [18, [9, 21, 1, 0, -1, -1, 9, 21, 17, 0, -1, -1, 4, 7, 14, 7]],
                B: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, -1, -1, 4, 11, 13, 11, 16, 10, 17, 9, 18, 7, 18, 4, 17, 2, 16, 1, 13, 0, 4, 0]],
                C: [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5]],
                D: [21, [4, 21, 4, 0, -1, -1, 4, 21, 11, 21, 14, 20, 16, 18, 17, 16, 18, 13, 18, 8, 17, 5, 16, 3, 14, 1, 11, 0, 4, 0]],
                E: [19, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11, -1, -1, 4, 0, 17, 0]],
                F: [18, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11]],
                G: [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 18, 8, -1, -1, 13, 8, 18, 8]],
                H: [22, [4, 21, 4, 0, -1, -1, 18, 21, 18, 0, -1, -1, 4, 11, 18, 11]],
                I: [8, [4, 21, 4, 0]],
                J: [16, [12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7]],
                K: [21, [4, 21, 4, 0, -1, -1, 18, 21, 4, 7, -1, -1, 9, 12, 18, 0]],
                L: [17, [4, 21, 4, 0, -1, -1, 4, 0, 16, 0]],
                M: [24, [4, 21, 4, 0, -1, -1, 4, 21, 12, 0, -1, -1, 20, 21, 12, 0, -1, -1, 20, 21, 20, 0]],
                N: [22, [4, 21, 4, 0, -1, -1, 4, 21, 18, 0, -1, -1, 18, 21, 18, 0]],
                O: [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21]],
                P: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 14, 17, 12, 16, 11, 13, 10, 4, 10]],
                Q: [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, -1, -1, 12, 4, 18, -2]],
                R: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, 4, 11, -1, -1, 11, 11, 18, 0]],
                S: [20, [17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]],
                T: [16, [8, 21, 8, 0, -1, -1, 1, 21, 15, 21]],
                U: [22, [4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21]],
                V: [18, [1, 21, 9, 0, -1, -1, 17, 21, 9, 0]],
                W: [24, [2, 21, 7, 0, -1, -1, 12, 21, 7, 0, -1, -1, 12, 21, 17, 0, -1, -1, 22, 21, 17, 0]],
                X: [20, [3, 21, 17, 0, -1, -1, 17, 21, 3, 0]],
                Y: [18, [1, 21, 9, 11, 9, 0, -1, -1, 17, 21, 9, 11]],
                Z: [20, [17, 21, 3, 0, -1, -1, 3, 21, 17, 21, -1, -1, 3, 0, 17, 0]],
                "[": [14, [4, 25, 4, -7, -1, -1, 5, 25, 5, -7, -1, -1, 4, 25, 11, 25, -1, -1, 4, -7, 11, -7]],
                "\\": [14, [0, 21, 14, -3]],
                "]": [14, [9, 25, 9, -7, -1, -1, 10, 25, 10, -7, -1, -1, 3, 25, 10, 25, -1, -1, 3, -7, 10, -7]],
                "^": [16, [6, 15, 8, 18, 10, 15, -1, -1, 3, 12, 8, 17, 13, 12, -1, -1, 8, 17, 8, 0]],
                _: [16, [0, -2, 16, -2]],
                "`": [10, [6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17]],
                a: [19, [15, 14, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                b: [19, [4, 21, 4, 0, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]],
                c: [18, [15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                d: [19, [15, 21, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                e: [18, [3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                f: [12, [10, 21, 8, 21, 6, 20, 5, 17, 5, 0, -1, -1, 2, 14, 9, 14]],
                g: [19, [15, 14, 15, -2, 14, -5, 13, -6, 11, -7, 8, -7, 6, -6, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                h: [19, [4, 21, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]],
                i: [8, [3, 21, 4, 20, 5, 21, 4, 22, 3, 21, -1, -1, 4, 14, 4, 0]],
                j: [10, [5, 21, 6, 20, 7, 21, 6, 22, 5, 21, -1, -1, 6, 14, 6, -3, 5, -6, 3, -7, 1, -7]],
                k: [17, [4, 21, 4, 0, -1, -1, 14, 14, 4, 4, -1, -1, 8, 8, 15, 0]],
                l: [8, [4, 21, 4, 0]],
                m: [30, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0, -1, -1, 15, 10, 18, 13, 20, 14, 23, 14, 25, 13, 26, 10, 26, 0]],
                n: [19, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]],
                o: [19, [8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3, 16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14]],
                p: [19, [4, 14, 4, -7, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]],
                q: [19, [15, 14, 15, -7, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]],
                r: [13, [4, 14, 4, 0, -1, -1, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14]],
                s: [17, [14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6, 14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3]],
                t: [12, [5, 21, 5, 4, 6, 1, 8, 0, 10, 0, -1, -1, 2, 14, 9, 14]],
                u: [19, [4, 14, 4, 4, 5, 1, 7, 0, 10, 0, 12, 1, 15, 4, -1, -1, 15, 14, 15, 0]],
                v: [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0]],
                w: [22, [3, 14, 7, 0, -1, -1, 11, 14, 7, 0, -1, -1, 11, 14, 15, 0, -1, -1, 19, 14, 15, 0]],
                x: [17, [3, 14, 14, 0, -1, -1, 14, 14, 3, 0]],
                y: [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7]],
                z: [17, [14, 14, 3, 0, -1, -1, 3, 14, 14, 14, -1, -1, 3, 0, 14, 0]],
                "{": [14, [9, 25, 7, 24, 6, 23, 5, 21, 5, 19, 6, 17, 7, 16, 8, 14, 8, 12, 6, 10, -1, -1, 7, 24, 6, 22, 6, 20, 7, 18, 8, 17, 9, 15, 9, 13, 8, 11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6, -2, 6, -4, 7, -6, -1, -1, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5, -1, 5, -3, 6, -5, 7, -6, 9, -7]],
                "|": [8, [4, 25, 4, -7]],
                "}": [14, [5, 25, 7, 24, 8, 23, 9, 21, 9, 19, 8, 17, 7, 16, 6, 14, 6, 12, 8, 10, -1, -1, 7, 24, 8, 22, 8, 20, 7, 18, 6, 17, 5, 15, 5, 13, 6, 11, 10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8, -2, 8, -4, 7, -6, -1, -1, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9, -1, 9, -3, 8, -5, 7, -6, 5, -7]],
                "~": [24, [3, 6, 3, 8, 4, 11, 6, 12, 8, 12, 10, 11, 14, 8, 16, 7, 18, 7, 20, 8, 21, 10, -1, -1, 3, 8, 4, 10, 6, 11, 8, 11, 10, 10, 14, 7, 16, 6, 18, 6, 20, 7, 21, 10, 21, 12]]
            };
        }, {
            "../data/buffer": 50,
            "../data/extent": 53,
            "../data/pos_array": 56,
            "../util/browser": 194,
            "./vertex_array_object": 79,
            "@mapbox/gl-matrix": 1
        }],
        69: [function (_dereq_, module, exports) {
            "use strict";

            function drawFill(t, e, r, i) {
                var a = t.gl;
                a.enable(a.STENCIL_TEST);
                var l = !r.paint["fill-pattern"] && r.isPaintValueFeatureConstant("fill-color") && r.isPaintValueFeatureConstant("fill-opacity") && 1 === r.paint["fill-color"][3] && 1 === r.paint["fill-opacity"];
                t.isOpaquePass === l && (t.setDepthSublayer(1), drawFillTiles(t, e, r, i, drawFillTile)), !t.isOpaquePass && r.paint["fill-antialias"] && (t.lineWidth(2), t.depthMask(!1), t.setDepthSublayer(r.getPaintProperty("fill-outline-color") ? 2 : 0), drawFillTiles(t, e, r, i, drawStrokeTile))
            }

            function drawFillTiles(t, e, r, i, a) {
                if (!pattern.isPatternMissing(r.paint["fill-pattern"], t)) for (var l = !0, n = 0, o = i; n < o.length; n += 1) {
                    var f = o[n], s = e.getTile(f), p = s.getBucket(r);
                    p && (t.enableTileClippingMask(f), a(t, e, r, s, f, p.buffers, l), l = !1)
                }
            }

            function drawFillTile(t, e, r, i, a, l, n) {
                for (var o = t.gl, f = l.layerData[r.id], s = setFillProgram("fill", r.paint["fill-pattern"], t, f, r, i, a, n), p = 0, u = l.segments; p < u.length; p += 1) {
                    var g = u[p];
                    g.vaos[r.id].bind(o, s, l.layoutVertexBuffer, l.elementBuffer, f.paintVertexBuffer, g.vertexOffset), o.drawElements(o.TRIANGLES, 3 * g.primitiveLength, o.UNSIGNED_SHORT, 3 * g.primitiveOffset * 2)
                }
            }

            function drawStrokeTile(t, e, r, i, a, l, n) {
                var o = t.gl, f = l.layerData[r.id],
                    s = r.paint["fill-pattern"] && !r.getPaintProperty("fill-outline-color"),
                    p = setFillProgram("fillOutline", s, t, f, r, i, a, n);
                o.uniform2f(p.u_world, o.drawingBufferWidth, o.drawingBufferHeight);
                for (var u = 0, g = l.segments2; u < g.length; u += 1) {
                    var m = g[u];
                    m.vaos[r.id].bind(o, p, l.layoutVertexBuffer, l.elementBuffer2, f.paintVertexBuffer, m.vertexOffset), o.drawElements(o.LINES, 2 * m.primitiveLength, o.UNSIGNED_SHORT, 2 * m.primitiveOffset * 2)
                }
            }

            function setFillProgram(t, e, r, i, a, l, n, o) {
                var f, s = r.currentProgram;
                return e ? (f = r.useProgram(t + "Pattern", i.programConfiguration), (o || f !== s) && (i.programConfiguration.setUniforms(r.gl, f, a, {zoom: r.transform.zoom}), pattern.prepare(a.paint["fill-pattern"], r, f)), pattern.setTile(l, r, f)) : (f = r.useProgram(t, i.programConfiguration), (o || f !== s) && i.programConfiguration.setUniforms(r.gl, f, a, {zoom: r.transform.zoom})), r.gl.uniformMatrix4fv(f.u_matrix, !1, r.translatePosMatrix(n.posMatrix, l, a.paint["fill-translate"], a.paint["fill-translate-anchor"])), f
            }

            var pattern = _dereq_("./pattern");
            module.exports = drawFill;
        }, {"./pattern": 77}],
        70: [function (_dereq_, module, exports) {
            "use strict";

            function draw(e, r, t, a) {
                if (0 !== t.paint["fill-extrusion-opacity"]) {
                    var i = e.gl;
                    i.disable(i.STENCIL_TEST), i.enable(i.DEPTH_TEST), e.depthMask(!0);
                    var n = renderToTexture(i, e);
                    i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT);
                    for (var f = 0; f < a.length; f++) drawExtrusion(e, r, t, a[f]);
                    i.bindFramebuffer(i.FRAMEBUFFER, null), renderTextureToMap(i, e, t, n)
                }
            }

            function renderToTexture(e, r) {
                e.activeTexture(e.TEXTURE1);
                var t = r.viewportTexture;
                t ? e.bindTexture(e.TEXTURE_2D, t) : (t = e.createTexture(), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r.width, r.height, 0, e.RGBA, e.UNSIGNED_BYTE, null), r.viewportTexture = t);
                var a = r.viewportFbo;
                if (a) e.bindFramebuffer(e.FRAMEBUFFER, a); else {
                    a = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, a);
                    var i = e.createRenderbuffer();
                    e.bindRenderbuffer(e.RENDERBUFFER, i), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, r.width, r.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, i), r.viewportFbo = a
                }
                return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0), t
            }

            function renderTextureToMap(e, r, t, a) {
                var i = r.useProgram("extrusionTexture");
                e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, a), e.uniform1f(i.u_opacity, t.paint["fill-extrusion-opacity"]), e.uniform1i(i.u_image, 1);
                var n = mat4.create();
                mat4.ortho(n, 0, r.width, r.height, 0, 0, 1), e.uniformMatrix4fv(i.u_matrix, !1, n), e.disable(e.DEPTH_TEST), e.uniform2f(i.u_world, e.drawingBufferWidth, e.drawingBufferHeight);
                var f = new PosArray;
                f.emplaceBack(0, 0), f.emplaceBack(1, 0), f.emplaceBack(0, 1), f.emplaceBack(1, 1);
                var u = Buffer.fromStructArray(f, Buffer.BufferType.VERTEX), T = new VertexArrayObject;
                T.bind(e, i, u), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), e.enable(e.DEPTH_TEST)
            }

            function drawExtrusion(e, r, t, a) {
                if (!e.isOpaquePass) {
                    var i = r.getTile(a), n = i.getBucket(t);
                    if (n) {
                        var f = n.buffers, u = e.gl, T = t.paint["fill-extrusion-pattern"], o = f.layerData[t.id],
                            E = o.programConfiguration,
                            l = e.useProgram(T ? "fillExtrusionPattern" : "fillExtrusion", E);
                        if (E.setUniforms(u, l, t, {zoom: e.transform.zoom}), T) {
                            if (pattern.isPatternMissing(T, e)) return;
                            pattern.prepare(T, e, l), pattern.setTile(i, e, l), u.uniform1f(l.u_height_factor, -Math.pow(2, a.z) / i.tileSize / 8)
                        }
                        e.gl.uniformMatrix4fv(l.u_matrix, !1, e.translatePosMatrix(a.posMatrix, i, t.paint["fill-extrusion-translate"], t.paint["fill-extrusion-translate-anchor"])), setLight(l, e);
                        for (var s = 0, R = f.segments; s < R.length; s += 1) {
                            var m = R[s];
                            m.vaos[t.id].bind(u, l, f.layoutVertexBuffer, f.elementBuffer, o.paintVertexBuffer, m.vertexOffset), u.drawElements(u.TRIANGLES, 3 * m.primitiveLength, u.UNSIGNED_SHORT, 3 * m.primitiveOffset * 2)
                        }
                    }
                }
            }

            function setLight(e, r) {
                var t = r.gl, a = r.style.light, i = a.calculated.position, n = [i.x, i.y, i.z], f = mat3.create();
                "viewport" === a.calculated.anchor && mat3.fromRotation(f, -r.transform.angle), vec3.transformMat3(n, n, f), t.uniform3fv(e.u_lightpos, n), t.uniform1f(e.u_lightintensity, a.calculated.intensity), t.uniform3fv(e.u_lightcolor, a.calculated.color.slice(0, 3))
            }

            var glMatrix = _dereq_("@mapbox/gl-matrix"), Buffer = _dereq_("../data/buffer"),
                VertexArrayObject = _dereq_("./vertex_array_object"), PosArray = _dereq_("../data/pos_array"),
                pattern = _dereq_("./pattern"), mat3 = glMatrix.mat3, mat4 = glMatrix.mat4, vec3 = glMatrix.vec3;
            module.exports = draw;
        }, {
            "../data/buffer": 50,
            "../data/pos_array": 56,
            "./pattern": 77,
            "./vertex_array_object": 79,
            "@mapbox/gl-matrix": 1
        }],
        71: [function (_dereq_, module, exports) {
            "use strict";

            function drawLineTile(e, i, t, r, a, n, o, l, f) {
                var s, u, m, p, _ = i.gl, d = a.paint["line-dasharray"], g = a.paint["line-pattern"];
                if (l || f) {
                    var v = 1 / pixelsToTileUnits(t, 1, i.transform.tileZoom);
                    if (d) {
                        s = i.lineAtlas.getDash(d.from, "round" === a.layout["line-cap"]), u = i.lineAtlas.getDash(d.to, "round" === a.layout["line-cap"]);
                        var x = s.width * d.fromScale, T = u.width * d.toScale;
                        _.uniform2f(e.u_patternscale_a, v / x, -s.height / 2), _.uniform2f(e.u_patternscale_b, v / T, -u.height / 2), _.uniform1f(e.u_sdfgamma, i.lineAtlas.width / (256 * Math.min(x, T) * browser.devicePixelRatio) / 2)
                    } else if (g) {
                        if (m = i.spriteAtlas.getPattern(g.from), p = i.spriteAtlas.getPattern(g.to), !m || !p) return;
                        _.uniform2f(e.u_pattern_size_a, m.displaySize[0] * g.fromScale / v, p.displaySize[1]), _.uniform2f(e.u_pattern_size_b, p.displaySize[0] * g.toScale / v, p.displaySize[1]), _.uniform2fv(e.u_texsize, i.spriteAtlas.getPixelSize())
                    }
                    _.uniform2f(e.u_gl_units_to_pixels, 1 / i.transform.pixelsToGLUnits[0], 1 / i.transform.pixelsToGLUnits[1])
                }
                l && (d ? (_.uniform1i(e.u_image, 0), _.activeTexture(_.TEXTURE0), i.lineAtlas.bind(_), _.uniform1f(e.u_tex_y_a, s.y), _.uniform1f(e.u_tex_y_b, u.y), _.uniform1f(e.u_mix, d.t)) : g && (_.uniform1i(e.u_image, 0), _.activeTexture(_.TEXTURE0), i.spriteAtlas.bind(_, !0), _.uniform2fv(e.u_pattern_tl_a, m.tl), _.uniform2fv(e.u_pattern_br_a, m.br), _.uniform2fv(e.u_pattern_tl_b, p.tl), _.uniform2fv(e.u_pattern_br_b, p.br), _.uniform1f(e.u_fade, g.t)), _.uniform1f(e.u_width, a.paint["line-width"])), i.enableTileClippingMask(n);
                var h = i.translatePosMatrix(n.posMatrix, t, a.paint["line-translate"], a.paint["line-translate-anchor"]);
                _.uniformMatrix4fv(e.u_matrix, !1, h), _.uniform1f(e.u_ratio, 1 / pixelsToTileUnits(t, 1, i.transform.zoom));
                for (var b = 0, c = r.segments; b < c.length; b += 1) {
                    var S = c[b];
                    S.vaos[a.id].bind(_, e, r.layoutVertexBuffer, r.elementBuffer, o.paintVertexBuffer, S.vertexOffset), _.drawElements(_.TRIANGLES, 3 * S.primitiveLength, _.UNSIGNED_SHORT, 3 * S.primitiveOffset * 2)
                }
            }

            var browser = _dereq_("../util/browser"), pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            module.exports = function (e, i, t, r) {
                if (!e.isOpaquePass) {
                    e.setDepthSublayer(0), e.depthMask(!1);
                    var a = e.gl;
                    if (a.enable(a.STENCIL_TEST), !(t.paint["line-width"] <= 0)) for (var n, o = t.paint["line-dasharray"] ? "lineSDF" : t.paint["line-pattern"] ? "linePattern" : "line", l = !0, f = 0, s = r; f < s.length; f += 1) {
                        var u = s[f], m = i.getTile(u), p = m.getBucket(t);
                        if (p) {
                            var _ = p.buffers.layerData[t.id], d = e.currentProgram,
                                g = e.useProgram(o, _.programConfiguration), v = l || g !== d, x = n !== m.coord.z;
                            v && _.programConfiguration.setUniforms(e.gl, g, t, {zoom: e.transform.zoom}), drawLineTile(g, e, m, p.buffers, t, u, _, v, x), n = m.coord.z, l = !1
                        }
                    }
                }
            };
        }, {"../source/pixels_to_tile_units": 87, "../util/browser": 194}],
        72: [function (_dereq_, module, exports) {
            "use strict";

            function drawRaster(r, t, e, a) {
                if (!r.isOpaquePass) {
                    var i = r.gl;
                    i.enable(i.DEPTH_TEST), r.depthMask(!0), i.depthFunc(i.LESS);
                    for (var o = a.length && a[0].z, n = 0; n < a.length; n++) {
                        var u = a[n];
                        r.setDepthSublayer(u.z - o), drawRasterTile(r, t, e, u)
                    }
                    i.depthFunc(i.LEQUAL)
                }
            }

            function drawRasterTile(r, t, e, a) {
                var i = r.gl;
                i.disable(i.STENCIL_TEST);
                var o = t.getTile(a), n = r.transform.calculatePosMatrix(a, t.getSource().maxzoom);
                o.registerFadeDuration(r.style.animationLoop, e.paint["raster-fade-duration"]);
                var u = r.useProgram("raster");
                i.uniformMatrix4fv(u.u_matrix, !1, n), i.uniform1f(u.u_brightness_low, e.paint["raster-brightness-min"]), i.uniform1f(u.u_brightness_high, e.paint["raster-brightness-max"]), i.uniform1f(u.u_saturation_factor, saturationFactor(e.paint["raster-saturation"])), i.uniform1f(u.u_contrast_factor, contrastFactor(e.paint["raster-contrast"])), i.uniform3fv(u.u_spin_weights, spinWeights(e.paint["raster-hue-rotate"]));
                var s, c, f = o.sourceCache && o.sourceCache.findLoadedParent(a, 0, {}),
                    d = getFadeValues(o, f, e, r.transform);
                i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, o.texture), i.activeTexture(i.TEXTURE1), f ? (i.bindTexture(i.TEXTURE_2D, f.texture), s = Math.pow(2, f.coord.z - o.coord.z), c = [o.coord.x * s % 1, o.coord.y * s % 1]) : i.bindTexture(i.TEXTURE_2D, o.texture), i.uniform2fv(u.u_tl_parent, c || [0, 0]), i.uniform1f(u.u_scale_parent, s || 1), i.uniform1f(u.u_buffer_scale, 1), i.uniform1f(u.u_fade_t, d.mix), i.uniform1f(u.u_opacity, d.opacity * e.paint["raster-opacity"]), i.uniform1i(u.u_image0, 0), i.uniform1i(u.u_image1, 1);
                var m = o.boundsBuffer || r.rasterBoundsBuffer, p = o.boundsVAO || r.rasterBoundsVAO;
                p.bind(i, u, m), i.drawArrays(i.TRIANGLE_STRIP, 0, m.length)
            }

            function spinWeights(r) {
                r *= Math.PI / 180;
                var t = Math.sin(r), e = Math.cos(r);
                return [(2 * e + 1) / 3, (-Math.sqrt(3) * t - e + 1) / 3, (Math.sqrt(3) * t - e + 1) / 3]
            }

            function contrastFactor(r) {
                return r > 0 ? 1 / (1 - r) : 1 + r
            }

            function saturationFactor(r) {
                return r > 0 ? 1 - 1 / (1.001 - r) : -r
            }

            function getFadeValues(r, t, e, a) {
                var i = e.paint["raster-fade-duration"];
                if (r.sourceCache && i > 0) {
                    var o = Date.now(), n = (o - r.timeAdded) / i, u = t ? (o - t.timeAdded) / i : -1,
                        s = r.sourceCache.getSource(),
                        c = a.coveringZoomLevel({tileSize: s.tileSize, roundZoom: s.roundZoom}),
                        f = !t || Math.abs(t.coord.z - c) > Math.abs(r.coord.z - c),
                        d = f && r.refreshedUponExpiration ? 1 : util.clamp(f ? n : 1 - u, 0, 1);
                    return r.refreshedUponExpiration && n >= 1 && (r.refreshedUponExpiration = !1), t ? {
                        opacity: 1,
                        mix: 1 - d
                    } : {opacity: d, mix: 0}
                }
                return {opacity: 1, mix: 0}
            }

            var util = _dereq_("../util/util");
            module.exports = drawRaster;
        }, {"../util/util": 215}],
        73: [function (_dereq_, module, exports) {
            "use strict";

            function drawSymbols(t, e, i, o) {
                if (!t.isOpaquePass) {
                    var a = !(i.layout["text-allow-overlap"] || i.layout["icon-allow-overlap"] || i.layout["text-ignore-placement"] || i.layout["icon-ignore-placement"]),
                        n = t.gl;
                    a ? n.disable(n.STENCIL_TEST) : n.enable(n.STENCIL_TEST), t.setDepthSublayer(0), t.depthMask(!1), drawLayerSymbols(t, e, i, o, !1, i.paint["icon-translate"], i.paint["icon-translate-anchor"], i.layout["icon-rotation-alignment"], i.layout["icon-rotation-alignment"]), drawLayerSymbols(t, e, i, o, !0, i.paint["text-translate"], i.paint["text-translate-anchor"], i.layout["text-rotation-alignment"], i.layout["text-pitch-alignment"]), e.map.showCollisionBoxes && drawCollisionDebug(t, e, i, o)
                }
            }

            function drawLayerSymbols(t, e, i, o, a, n, r, s, l) {
                if (a || !t.style.sprite || t.style.sprite.loaded()) {
                    var u = t.gl, m = "map" === s, f = "map" === l, c = f;
                    c ? u.enable(u.DEPTH_TEST) : u.disable(u.DEPTH_TEST);
                    for (var _, p, y = 0, g = o; y < g.length; y += 1) {
                        var d = g[y], T = e.getTile(d), x = T.getBucket(i);
                        if (x) {
                            var v = a ? x.buffers.glyph : x.buffers.icon;
                            if (v && v.segments.length) {
                                var h = v.layerData[i.id], S = h.programConfiguration, b = a || x.sdfIcons,
                                    z = a ? x.textSizeData : x.iconSizeData;
                                _ && x.fontstack === p || (_ = t.useProgram(b ? "symbolSDF" : "symbolIcon", S), S.setUniforms(u, _, i, {zoom: t.transform.zoom}), setSymbolDrawState(_, t, i, d.z, a, b, m, f, x.fontstack, x.iconsNeedLinear, z)), t.enableTileClippingMask(d), u.uniformMatrix4fv(_.u_matrix, !1, t.translatePosMatrix(d.posMatrix, T, n, r)), u.uniform1f(_.u_collision_y_stretch, T.collisionTile.yStretch), drawTileSymbols(_, S, t, i, T, v, a, b, f), p = x.fontstack
                            }
                        }
                    }
                    c || u.enable(u.DEPTH_TEST)
                }
            }

            function setSymbolDrawState(t, e, i, o, a, n, r, s, l, u, m) {
                var f = e.gl, c = e.transform;
                if (f.uniform1i(t.u_rotate_with_map, r), f.uniform1i(t.u_pitch_with_map, s), f.activeTexture(f.TEXTURE0), f.uniform1i(t.u_texture, 0), f.uniform1f(t.u_is_text, a ? 1 : 0), a) {
                    var _ = l && e.glyphSource.getGlyphAtlas(l);
                    if (!_) return;
                    _.updateTexture(f), f.uniform2f(t.u_texsize, _.width, _.height)
                } else {
                    var p = e.options.rotating || e.options.zooming,
                        y = !i.isLayoutValueFeatureConstant("icon-size") || !i.isLayoutValueZoomConstant("icon-size") || 1 !== i.getLayoutValue("icon-size", {zoom: c.zoom}),
                        g = y || u, d = s || c.pitch;
                    e.spriteAtlas.bind(f, n || p || g || d), f.uniform2fv(t.u_texsize, e.spriteAtlas.getPixelSize())
                }
                if (f.activeTexture(f.TEXTURE1), e.frameHistory.bind(f), f.uniform1i(t.u_fadetexture, 1), f.uniform1f(t.u_zoom, c.zoom), f.uniform1f(t.u_pitch, c.pitch / 360 * 2 * Math.PI), f.uniform1f(t.u_bearing, c.bearing / 360 * 2 * Math.PI), f.uniform1f(t.u_aspect_ratio, c.width / c.height), f.uniform1i(t.u_is_size_zoom_constant, m.isZoomConstant ? 1 : 0), f.uniform1i(t.u_is_size_feature_constant, m.isFeatureConstant ? 1 : 0), m.isZoomConstant || m.isFeatureConstant) if (m.isFeatureConstant && !m.isZoomConstant) {
                    var T;
                    if ("interval" === m.functionType) T = i.getLayoutValue(a ? "text-size" : "icon-size", {zoom: c.zoom}); else {
                        var x = "interval" === m.functionType ? 0 : interpolationFactor(c.zoom, m.functionBase, m.coveringZoomRange[0], m.coveringZoomRange[1]),
                            v = m.coveringStopValues[0], h = m.coveringStopValues[1];
                        T = v + (h - v) * util.clamp(x, 0, 1)
                    }
                    f.uniform1f(t.u_size, T), f.uniform1f(t.u_layout_size, m.layoutSize)
                } else m.isFeatureConstant && m.isZoomConstant && f.uniform1f(t.u_size, m.layoutSize); else {
                    var S = interpolationFactor(c.zoom, m.functionBase, m.coveringZoomRange[0], m.coveringZoomRange[1]);
                    f.uniform1f(t.u_size_t, util.clamp(S, 0, 1))
                }
                f.uniform1f(t.u_camera_to_center_distance, c.cameraToCenterDistance), "line" === i.layout["symbol-placement"] && "map" === i.layout["text-rotation-alignment"] && "viewport" === i.layout["text-pitch-alignment"] && i.layout["text-field"] ? f.uniform1f(t.u_max_camera_distance, 1.5) : f.uniform1f(t.u_max_camera_distance, 10)
            }

            function drawTileSymbols(t, e, i, o, a, n, r, s, l) {
                var u = i.gl, m = i.transform;
                if (l) {
                    var f = pixelsToTileUnits(a, 1, m.zoom);
                    u.uniform2f(t.u_extrude_scale, f, f)
                } else {
                    var c = m.cameraToCenterDistance;
                    u.uniform2f(t.u_extrude_scale, m.pixelsToGLUnits[0] * c, m.pixelsToGLUnits[1] * c)
                }
                if (s) {
                    var _ = (r ? "text" : "icon") + "-halo-width", p = !o.isPaintValueFeatureConstant(_) || o.paint[_],
                        y = (l ? Math.cos(m._pitch) : 1) * m.cameraToCenterDistance;
                    u.uniform1f(t.u_gamma_scale, y), p && (u.uniform1f(t.u_is_halo, 1), drawSymbolElements(n, o, u, t)), u.uniform1f(t.u_is_halo, 0)
                }
                drawSymbolElements(n, o, u, t)
            }

            function drawSymbolElements(t, e, i, o) {
                for (var a = t.layerData[e.id], n = a && a.paintVertexBuffer, r = 0, s = t.segments; r < s.length; r += 1) {
                    var l = s[r];
                    l.vaos[e.id].bind(i, o, t.layoutVertexBuffer, t.elementBuffer, n, l.vertexOffset), i.drawElements(i.TRIANGLES, 3 * l.primitiveLength, i.UNSIGNED_SHORT, 3 * l.primitiveOffset * 2)
                }
            }

            var util = _dereq_("../util/util"), drawCollisionDebug = _dereq_("./draw_collision_debug"),
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units"),
                interpolationFactor = _dereq_("../style-spec/function").interpolationFactor;
            module.exports = drawSymbols;
        }, {
            "../source/pixels_to_tile_units": 87,
            "../style-spec/function": 106,
            "../util/util": 215,
            "./draw_collision_debug": 67
        }],
        74: [function (_dereq_, module, exports) {
            "use strict";
            var FrameHistory = function () {
                this.changeTimes = new Float64Array(256), this.changeOpacities = new Uint8Array(256), this.opacities = new Uint8ClampedArray(256), this.array = new Uint8Array(this.opacities.buffer), this.previousZoom = 0, this.firstFrame = !0
            };
            FrameHistory.prototype.record = function (e, t, i) {
                var r = this;
                this.firstFrame && (e = 0, this.firstFrame = !1), t = Math.floor(10 * t);
                var a;
                if (t < this.previousZoom) for (a = t + 1; a <= this.previousZoom; a++) r.changeTimes[a] = e, r.changeOpacities[a] = r.opacities[a]; else for (a = t; a > this.previousZoom; a--) r.changeTimes[a] = e, r.changeOpacities[a] = r.opacities[a];
                for (a = 0; a < 256; a++) {
                    var s = e - r.changeTimes[a], o = 255 * (i ? s / i : 1);
                    a <= t ? r.opacities[a] = r.changeOpacities[a] + o : r.opacities[a] = r.changeOpacities[a] - o
                }
                this.changed = !0, this.previousZoom = t
            }, FrameHistory.prototype.bind = function (e) {
                this.texture ? (e.bindTexture(e.TEXTURE_2D, this.texture), this.changed && (e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, 256, 1, e.ALPHA, e.UNSIGNED_BYTE, this.array), this.changed = !1)) : (this.texture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this.texture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texImage2D(e.TEXTURE_2D, 0, e.ALPHA, 256, 1, 0, e.ALPHA, e.UNSIGNED_BYTE, this.array))
            }, module.exports = FrameHistory;
        }, {}],
        75: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), LineAtlas = function (t, i) {
                this.width = t, this.height = i, this.nextRow = 0, this.bytes = 4, this.data = new Uint8Array(this.width * this.height * this.bytes), this.positions = {}
            };
            LineAtlas.prototype.setSprite = function (t) {
                this.sprite = t
            }, LineAtlas.prototype.getDash = function (t, i) {
                var e = t.join(",") + i;
                return this.positions[e] || (this.positions[e] = this.addDash(t, i)), this.positions[e]
            }, LineAtlas.prototype.addDash = function (t, i) {
                var e = this, h = i ? 7 : 0, s = 2 * h + 1, a = 128;
                if (this.nextRow + s > this.height) return util.warnOnce("LineAtlas out of space"), null;
                for (var r = 0, n = 0; n < t.length; n++) r += t[n];
                for (var o = this.width / r, E = o / 2, T = t.length % 2 === 1, R = -h; R <= h; R++) for (var u = e.nextRow + h + R, d = e.width * u, l = T ? -t[t.length - 1] : 0, x = t[0], A = 1, _ = 0; _ < this.width; _++) {
                    for (; x < _ / o;) l = x, x += t[A], T && A === t.length - 1 && (x += t[0]), A++;
                    var p = Math.abs(_ - l * o), g = Math.abs(_ - x * o), w = Math.min(p, g), D = A % 2 === 1,
                        U = void 0;
                    if (i) {
                        var f = h ? R / h * (E + 1) : 0;
                        if (D) {
                            var X = E - Math.abs(f);
                            U = Math.sqrt(w * w + X * X)
                        } else U = E - Math.sqrt(w * w + f * f)
                    } else U = (D ? 1 : -1) * w;
                    e.data[3 + 4 * (d + _)] = Math.max(0, Math.min(255, U + a))
                }
                var v = {y: (this.nextRow + h + .5) / this.height, height: 2 * h / this.height, width: r};
                return this.nextRow += s, this.dirty = !0, v
            }, LineAtlas.prototype.bind = function (t) {
                this.texture ? (t.bindTexture(t.TEXTURE_2D, this.texture), this.dirty && (this.dirty = !1, t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this.width, this.height, t.RGBA, t.UNSIGNED_BYTE, this.data))) : (this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, this.data))
            }, module.exports = LineAtlas;
        }, {"../util/util": 215}],
        76: [function (_dereq_, module, exports) {
            "use strict";
            var browser = _dereq_("../util/browser"), mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                FrameHistory = _dereq_("./frame_history"), SourceCache = _dereq_("../source/source_cache"),
                EXTENT = _dereq_("../data/extent"), pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units"),
                util = _dereq_("../util/util"), Buffer = _dereq_("../data/buffer"),
                VertexArrayObject = _dereq_("./vertex_array_object"),
                RasterBoundsArray = _dereq_("../data/raster_bounds_array"), PosArray = _dereq_("../data/pos_array"),
                ProgramConfiguration = _dereq_("../data/program_configuration"), shaders = _dereq_("./shaders"),
                draw = {
                    symbol: _dereq_("./draw_symbol"),
                    circle: _dereq_("./draw_circle"),
                    line: _dereq_("./draw_line"),
                    fill: _dereq_("./draw_fill"),
                    "fill-extrusion": _dereq_("./draw_fill_extrusion"),
                    raster: _dereq_("./draw_raster"),
                    background: _dereq_("./draw_background"),
                    debug: _dereq_("./draw_debug")
                }, Painter = function (e, r) {
                    this.gl = e, this.transform = r, this._tileTextures = {}, this.frameHistory = new FrameHistory, this.setup(), this.numSublayers = SourceCache.maxUnderzooming + SourceCache.maxOverzooming + 1, this.depthEpsilon = 1 / Math.pow(2, 16), this.lineWidthRange = e.getParameter(e.ALIASED_LINE_WIDTH_RANGE), this.basicFillProgramConfiguration = ProgramConfiguration.createStatic(["color", "opacity"]), this.emptyProgramConfiguration = new ProgramConfiguration
                };
            Painter.prototype.resize = function (e, r) {
                var t = this.gl;
                this.width = e * browser.devicePixelRatio, this.height = r * browser.devicePixelRatio, t.viewport(0, 0, this.width, this.height), this.viewportTexture && (this.gl.deleteTexture(this.viewportTexture), this.viewportTexture = null), this.viewportFbo && (this.gl.deleteFramebuffer(this.viewportFbo), this.viewportFbo = null)
            }, Painter.prototype.setup = function () {
                var e = this.gl;
                e.verbose = !0, e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.enable(e.STENCIL_TEST), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), this._depthMask = !1, e.depthMask(!1);
                var r = new PosArray;
                r.emplaceBack(0, 0), r.emplaceBack(EXTENT, 0), r.emplaceBack(0, EXTENT), r.emplaceBack(EXTENT, EXTENT), this.tileExtentBuffer = Buffer.fromStructArray(r, Buffer.BufferType.VERTEX), this.tileExtentVAO = new VertexArrayObject, this.tileExtentPatternVAO = new VertexArrayObject;
                var t = new PosArray;
                t.emplaceBack(0, 0), t.emplaceBack(EXTENT, 0), t.emplaceBack(EXTENT, EXTENT), t.emplaceBack(0, EXTENT), t.emplaceBack(0, 0), this.debugBuffer = Buffer.fromStructArray(t, Buffer.BufferType.VERTEX), this.debugVAO = new VertexArrayObject;
                var i = new RasterBoundsArray;
                i.emplaceBack(0, 0, 0, 0), i.emplaceBack(EXTENT, 0, 32767, 0), i.emplaceBack(0, EXTENT, 0, 32767), i.emplaceBack(EXTENT, EXTENT, 32767, 32767), this.rasterBoundsBuffer = Buffer.fromStructArray(i, Buffer.BufferType.VERTEX), this.rasterBoundsVAO = new VertexArrayObject, this.extTextureFilterAnisotropic = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.extTextureFilterAnisotropic && (this.extTextureFilterAnisotropicMax = e.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT))
            }, Painter.prototype.clearColor = function () {
                var e = this.gl;
                e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
            }, Painter.prototype.clearStencil = function () {
                var e = this.gl;
                e.clearStencil(0), e.stencilMask(255), e.clear(e.STENCIL_BUFFER_BIT)
            }, Painter.prototype.clearDepth = function () {
                var e = this.gl;
                e.clearDepth(1), this.depthMask(!0), e.clear(e.DEPTH_BUFFER_BIT)
            }, Painter.prototype._renderTileClippingMasks = function (e) {
                var r = this, t = this.gl;
                t.colorMask(!1, !1, !1, !1), this.depthMask(!1), t.disable(t.DEPTH_TEST), t.enable(t.STENCIL_TEST), t.stencilMask(255), t.stencilOp(t.KEEP, t.KEEP, t.REPLACE);
                var i = 1;
                this._tileClippingMaskIDs = {};
                for (var a = 0, s = e; a < s.length; a += 1) {
                    var o = s[a], n = r._tileClippingMaskIDs[o.id] = i++;
                    t.stencilFunc(t.ALWAYS, n, 255);
                    var l = r.useProgram("fill", r.basicFillProgramConfiguration);
                    t.uniformMatrix4fv(l.u_matrix, !1, o.posMatrix), r.tileExtentVAO.bind(t, l, r.tileExtentBuffer), t.drawArrays(t.TRIANGLE_STRIP, 0, r.tileExtentBuffer.length)
                }
                t.stencilMask(0), t.colorMask(!0, !0, !0, !0), this.depthMask(!0), t.enable(t.DEPTH_TEST)
            }, Painter.prototype.enableTileClippingMask = function (e) {
                var r = this.gl;
                r.stencilFunc(r.EQUAL, this._tileClippingMaskIDs[e.id], 255)
            }, Painter.prototype.prepareBuffers = function () {
            }, Painter.prototype.render = function (e, r) {
                if (this.style = e, this.options = r, this.lineAtlas = e.lineAtlas, this.spriteAtlas = e.spriteAtlas, this.spriteAtlas.setSprite(e.sprite), this.glyphSource = e.glyphSource, this.frameHistory.record(Date.now(), this.transform.zoom, e.getTransition().duration), this.prepareBuffers(), this.clearColor(), this.clearDepth(), this.showOverdrawInspector(r.showOverdrawInspector), this.depthRange = (e._order.length + 2) * this.numSublayers * this.depthEpsilon, this.isOpaquePass = !0, this.renderPass(), this.isOpaquePass = !1, this.renderPass(), this.options.showTileBoundaries) {
                    var t = this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];
                    t && draw.debug(this, t, t.getVisibleCoordinates())
                }
            }, Painter.prototype.renderPass = function () {
                var e, r, t = this, i = this.style._order;
                this.currentLayer = this.isOpaquePass ? i.length - 1 : 0, this.isOpaquePass ? this._showOverdrawInspector || this.gl.disable(this.gl.BLEND) : this.gl.enable(this.gl.BLEND);
                for (var a = 0; a < i.length; a++) {
                    var s = t.style._layers[i[t.currentLayer]];
                    s.source !== (e && e.id) && (e = t.style.sourceCaches[s.source], r = [], e && (e.prepare && e.prepare(), t.clearStencil(), r = e.getVisibleCoordinates(), e.getSource().isTileClipped && t._renderTileClippingMasks(r)), t.isOpaquePass || r.reverse()), t.renderLayer(t, e, s, r), t.currentLayer += t.isOpaquePass ? -1 : 1
                }
            }, Painter.prototype.depthMask = function (e) {
                e !== this._depthMask && (this._depthMask = e, this.gl.depthMask(e))
            }, Painter.prototype.renderLayer = function (e, r, t, i) {
                t.isHidden(this.transform.zoom) || ("background" === t.type || i.length) && (this.id = t.id, draw[t.type](e, r, t, i))
            }, Painter.prototype.setDepthSublayer = function (e) {
                var r = 1 - ((1 + this.currentLayer) * this.numSublayers + e) * this.depthEpsilon,
                    t = r - 1 + this.depthRange;
                this.gl.depthRange(t, r)
            }, Painter.prototype.translatePosMatrix = function (e, r, t, i) {
                if (!t[0] && !t[1]) return e;
                if ("viewport" === i) {
                    var a = Math.sin(-this.transform.angle), s = Math.cos(-this.transform.angle);
                    t = [t[0] * s - t[1] * a, t[0] * a + t[1] * s]
                }
                var o = [pixelsToTileUnits(r, t[0], this.transform.zoom), pixelsToTileUnits(r, t[1], this.transform.zoom), 0],
                    n = new Float32Array(16);
                return mat4.translate(n, e, o), n
            }, Painter.prototype.saveTileTexture = function (e) {
                var r = this._tileTextures[e.size];
                r ? r.push(e) : this._tileTextures[e.size] = [e]
            }, Painter.prototype.getTileTexture = function (e) {
                var r = this._tileTextures[e];
                return r && r.length > 0 ? r.pop() : null
            }, Painter.prototype.lineWidth = function (e) {
                this.gl.lineWidth(util.clamp(e, this.lineWidthRange[0], this.lineWidthRange[1]))
            }, Painter.prototype.showOverdrawInspector = function (e) {
                if (e || this._showOverdrawInspector) {
                    this._showOverdrawInspector = e;
                    var r = this.gl;
                    if (e) {
                        r.blendFunc(r.CONSTANT_COLOR, r.ONE);
                        var t = 8, i = 1 / t;
                        r.blendColor(i, i, i, 0), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT)
                    } else r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA)
                }
            }, Painter.prototype.createProgram = function (e, r) {
                var t = this.gl, i = t.createProgram(), a = shaders[e],
                    s = "#define MAPBOX_GL_JS\n#define DEVICE_PIXEL_RATIO " + browser.devicePixelRatio.toFixed(1) + "\n";
                this._showOverdrawInspector && (s += "#define OVERDRAW_INSPECTOR;\n");
                var o = r.applyPragmas(s + shaders.prelude.fragmentSource + a.fragmentSource, "fragment"),
                    n = r.applyPragmas(s + shaders.prelude.vertexSource + a.vertexSource, "vertex"),
                    l = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(l, o), t.compileShader(l), t.attachShader(i, l);
                var h = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(h, n), t.compileShader(h), t.attachShader(i, h);
                for (var c = r.interface.layoutAttributes || [], u = 0; u < c.length; u++) t.bindAttribLocation(i, u, c[u].name);
                t.linkProgram(i);
                for (var p = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES), d = {
                    program: i,
                    numAttributes: p
                }, f = 0; f < p; f++) {
                    var g = t.getActiveAttrib(i, f);
                    d[g.name] = t.getAttribLocation(i, g.name)
                }
                for (var T = t.getProgramParameter(i, t.ACTIVE_UNIFORMS), E = 0; E < T; E++) {
                    var m = t.getActiveUniform(i, E);
                    d[m.name] = t.getUniformLocation(i, m.name)
                }
                return d
            }, Painter.prototype._createProgramCached = function (e, r) {
                this.cache = this.cache || {};
                var t = "" + e + (r.cacheKey || "") + (this._showOverdrawInspector ? "/overdraw" : "");
                return this.cache[t] || (this.cache[t] = this.createProgram(e, r)), this.cache[t]
            }, Painter.prototype.useProgram = function (e, r) {
                var t = this.gl, i = this._createProgramCached(e, r || this.emptyProgramConfiguration);
                return this.currentProgram !== i && (t.useProgram(i.program), this.currentProgram = i), i
            }, module.exports = Painter;
        }, {
            "../data/buffer": 50,
            "../data/extent": 53,
            "../data/pos_array": 56,
            "../data/program_configuration": 57,
            "../data/raster_bounds_array": 58,
            "../source/pixels_to_tile_units": 87,
            "../source/source_cache": 92,
            "../util/browser": 194,
            "../util/util": 215,
            "./draw_background": 65,
            "./draw_circle": 66,
            "./draw_debug": 68,
            "./draw_fill": 69,
            "./draw_fill_extrusion": 70,
            "./draw_line": 71,
            "./draw_raster": 72,
            "./draw_symbol": 73,
            "./frame_history": 74,
            "./shaders": 78,
            "./vertex_array_object": 79,
            "@mapbox/gl-matrix": 1
        }],
        77: [function (_dereq_, module, exports) {
            "use strict";
            var pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            exports.isPatternMissing = function (t, r) {
                if (!t) return !1;
                var e = r.spriteAtlas.getPattern(t.from), i = r.spriteAtlas.getPattern(t.to);
                return !e || !i
            }, exports.prepare = function (t, r, e) {
                var i = r.gl, o = r.spriteAtlas.getPattern(t.from), n = r.spriteAtlas.getPattern(t.to);
                i.uniform1i(e.u_image, 0), i.uniform2fv(e.u_pattern_tl_a, o.tl), i.uniform2fv(e.u_pattern_br_a, o.br), i.uniform2fv(e.u_pattern_tl_b, n.tl), i.uniform2fv(e.u_pattern_br_b, n.br), i.uniform2fv(e.u_texsize, r.spriteAtlas.getPixelSize()), i.uniform1f(e.u_mix, t.t), i.uniform2fv(e.u_pattern_size_a, o.displaySize), i.uniform2fv(e.u_pattern_size_b, n.displaySize), i.uniform1f(e.u_scale_a, t.fromScale), i.uniform1f(e.u_scale_b, t.toScale), i.activeTexture(i.TEXTURE0), r.spriteAtlas.bind(i, !0)
            }, exports.setTile = function (t, r, e) {
                var i = r.gl;
                i.uniform1f(e.u_tile_units_to_pixels, 1 / pixelsToTileUnits(t, 1, r.transform.tileZoom));
                var o = Math.pow(2, t.coord.z), n = t.tileSize * Math.pow(2, r.transform.tileZoom) / o,
                    u = n * (t.coord.x + t.coord.w * o), a = n * t.coord.y;
                i.uniform2f(e.u_pixel_coord_upper, u >> 16, a >> 16), i.uniform2f(e.u_pixel_coord_lower, 65535 & u, 65535 & a)
            };
        }, {"../source/pixels_to_tile_units": 87}],
        78: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = {
                prelude: {
                    fragmentSource: "#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",
                    vertexSource: "#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\nfloat evaluate_zoom_function_1(const vec4 values, const float t) {\n    if (t < 1.0) {\n        return mix(values[0], values[1], t);\n    } else if (t < 2.0) {\n        return mix(values[1], values[2], t - 1.0);\n    } else {\n        return mix(values[2], values[3], t - 2.0);\n    }\n}\nvec4 evaluate_zoom_function_4(const vec4 value0, const vec4 value1, const vec4 value2, const vec4 value3, const float t) {\n    if (t < 1.0) {\n        return mix(value0, value1, t);\n    } else if (t < 2.0) {\n        return mix(value1, value2, t - 1.0);\n    } else {\n        return mix(value2, value3, t - 2.0);\n    }\n}\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\n\n// To minimize the number of attributes needed in the mapbox-gl-native shaders,\n// we encode a 4-component color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"
                },
                circle: {
                    fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec2 v_extrude;\nvarying lowp float v_antialiasblur;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    float extrude_length = length(v_extrude);\n    float antialiased_blur = -max(blur, v_antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform vec2 u_extrude_scale;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec2 v_extrude;\nvarying lowp float v_antialiasblur;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    v_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    vec2 extrude = v_extrude * (radius + stroke_width) * u_extrude_scale;\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    gl_Position = u_matrix * vec4(floor(a_pos * 0.5), 0, 1);\n\n    if (u_scale_with_map) {\n        gl_Position.xy += extrude;\n    } else {\n        gl_Position.xy += extrude * gl_Position.w;\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    v_antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n}\n"
                },
                collisionBox: {
                    fragmentSource: "uniform float u_zoom;\n// u_maxzoom is derived from the maximum scale considered by the CollisionTile\n// Labels with placement zoom greater than this value will not be placed,\n// regardless of perspective effects.\nuniform float u_maxzoom;\nuniform sampler2D u_fadetexture;\n\n// v_max_zoom is a collision-box-specific value that controls when line-following\n// collision boxes are used.\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\nvarying float v_perspective_zoom_adjust;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Green = no collisions, label is showing\n    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0) * alpha;\n\n    // Red = collision, label hidden\n    if (texture2D(u_fadetexture, v_fade_tex).a < 1.0) {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n    }\n\n    // Faded black = this collision box is not used at this zoom (for curved labels)\n    if (u_zoom >= v_max_zoom + v_perspective_zoom_adjust) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) * alpha * 0.25;\n    }\n\n    // Faded blue = the placement scale for this label is beyond the CollisionTile\n    // max scale, so it's impossible for this label to show without collision detection\n    // being run again (the label's glyphs haven't even been added to the symbol bucket)\n    if (v_placement_zoom >= u_maxzoom) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0) * alpha * 0.2;\n    }\n}\n",
                    vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_data;\n\nuniform mat4 u_matrix;\nuniform float u_scale;\nuniform float u_pitch;\nuniform float u_collision_y_stretch;\nuniform float u_camera_to_center_distance;\n\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\nvarying float v_perspective_zoom_adjust;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 1.0 + 0.5 * ((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    gl_Position = u_matrix * vec4(a_pos + a_extrude * collision_perspective_ratio * collision_adjustment / u_scale, 0.0, 1.0);\n\n    v_max_zoom = a_data.x;\n    v_placement_zoom = a_data.y;\n\n    v_perspective_zoom_adjust = floor(log2(collision_perspective_ratio * collision_adjustment) * 10.0);\n    v_fade_tex = vec2((v_placement_zoom + v_perspective_zoom_adjust) / 255.0, 0.0);\n}\n"
                },
                debug: {
                    fragmentSource: "uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",
                    vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, step(32767.0, a_pos.x), 1);\n}\n"
                },
                fill: {
                    fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"
                },
                fillOutline: {
                    fragmentSource: "#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"
                },
                fillOutlinePattern: {
                    fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"
                },
                fillPattern: {
                    fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"
                },
                fillExtrusion: {
                    fragmentSource: "varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float ed = a_edgedistance; // use each attrib in order to not trip a VAO assert\n    float t = mod(a_normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(a_normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"
                },
                fillExtrusionPattern: {
                    fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(a_normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = a_normal.x == 1.0 && a_normal.y == 0.0 && a_normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(a_edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(a_normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"
                },
                extrusionTexture: {
                    fragmentSource: "uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"
                },
                line: {
                    fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform mediump float u_width;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"
                },
                linePattern: {
                    fragmentSource: "uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform mediump float u_width;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"
                },
                lineSDF: {
                    fragmentSource: "\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma, 0.5 + u_sdfgamma, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\nuniform mediump float u_width;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset;\n \n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"
                },
                raster: {
                    fragmentSource: "uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos0 = (((a_texture_pos / 32767.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"
                },
                symbolIcon: {
                    fragmentSource: "uniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = texture2D(u_fadetexture, v_fade_tex).a * opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: 'attribute vec4 a_pos_offset;\nattribute vec2 a_label_pos;\nattribute vec4 a_data;\n\n// icon-size data (see symbol_sdf.vertex.glsl for more)\nattribute vec3 a_size;\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_layout_size; // used when size is feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform highp float u_collision_y_stretch;\n\n#pragma mapbox: define lowp float opacity\n\n// matrix is for the vertex position.\nuniform mat4 u_matrix;\n\nuniform bool u_is_text;\nuniform highp float u_zoom;\nuniform bool u_rotate_with_map;\nuniform vec2 u_extrude_scale;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    highp vec2 label_data = unpack_float(a_data[2]);\n    highp float a_labelminzoom = label_data[0];\n    highp vec2 a_zoom = unpack_float(a_data[3]);\n    highp float a_minzoom = a_zoom[0];\n    highp float a_maxzoom = a_zoom[1];\n\n    float size;\n    // In order to accommodate placing labels around corners in\n    // symbol-placement: line, each glyph in a label could have multiple\n    // "quad"s only one of which should be shown at a given zoom level.\n    // The min/max zoom assigned to each quad is based on the font size at\n    // the vector tile\'s zoom level, which might be different than at the\n    // currently rendered zoom level if text-size is zoom-dependent.\n    // Thus, we compensate for this difference by calculating an adjustment\n    // based on the scale of rendered text size relative to layout text size.\n    highp float layoutSize;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n        layoutSize = a_size[2] / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n        layoutSize = size;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n        layoutSize = u_layout_size;\n    } else {\n        size = u_size;\n        layoutSize = u_size;\n    }\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float zoomAdjust = log2(size / layoutSize);\n    highp float adjustedZoom = (u_zoom - zoomAdjust) * 10.0;\n    // result: z = 0 if a_minzoom <= adjustedZoom < a_maxzoom, and 1 otherwise\n    highp float z = 2.0 - step(a_minzoom, adjustedZoom) - (1.0 - step(a_maxzoom, adjustedZoom));\n\n    vec4 projectedPoint = u_matrix * vec4(a_label_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float perspective_ratio = 1.0 + 0.5*((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n\n    vec2 extrude = fontScale * u_extrude_scale * perspective_ratio * (a_offset / 64.0);\n    if (u_rotate_with_map) {\n        gl_Position = u_matrix * vec4(a_pos + extrude, 0, 1);\n        gl_Position.z += z * gl_Position.w;\n    } else {\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n    }\n\n    v_tex = a_tex / u_texsize;\n    // See comments in symbol_sdf.vertex\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    highp float perspective_zoom_adjust = floor(log2(perspective_ratio * collision_adjustment) * 10.0);\n    v_fade_tex = vec2((a_labelminzoom + perspective_zoom_adjust) / 255.0, 0.0);\n}\n'
                },
                symbolSDF: {
                    fragmentSource: "#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\nvarying float v_gamma_scale;\nvarying float v_size;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    float fontScale = u_is_text ? v_size / 24.0 : v_size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, v_tex).a;\n    lowp float fade_alpha = texture2D(u_fadetexture, v_fade_tex).a;\n    highp float gamma_scaled = gamma * v_gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist) * fade_alpha;\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                    vertexSource: "const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec2 a_label_pos;\nattribute vec4 a_data;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature),\n//   layoutSize == text-size(layoutZoomLevel, feature) ]\nattribute vec3 a_size;\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_layout_size; // used when size is feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\n// matrix is for the vertex position.\nuniform mat4 u_matrix;\n\nuniform bool u_is_text;\nuniform highp float u_zoom;\nuniform bool u_rotate_with_map;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform highp float u_bearing;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_max_camera_distance;\nuniform highp float u_collision_y_stretch;\nuniform vec2 u_extrude_scale;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\nvarying float v_gamma_scale;\nvarying float v_size;\n\n// Used below to move the vertex out of the clip space for when the current\n// zoom is out of the glyph's zoom range.\nhighp float clipUnusedGlyphAngles(const highp float render_size,\n                                  const highp float layout_size,\n                                  const highp float min_zoom,\n                                  const highp float max_zoom) {\n    highp float zoom_adjust = log2(render_size / layout_size);\n    highp float adjusted_zoom = (u_zoom - zoom_adjust) * 10.0;\n    // result: 0 if min_zoom <= adjusted_zoom < max_zoom, and 1 otherwise\n    return 2.0 - step(min_zoom, adjusted_zoom) - (1.0 - step(max_zoom, adjusted_zoom));\n}\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n\n    highp vec2 label_data = unpack_float(a_data[2]);\n    highp float a_labelminzoom = label_data[0];\n    highp float a_lineangle = (label_data[1] / 256.0 * 2.0 * PI);\n    highp vec2 a_zoom = unpack_float(a_data[3]);\n    highp float a_minzoom = a_zoom[0];\n    highp float a_maxzoom = a_zoom[1];\n\n    // In order to accommodate placing labels around corners in\n    // symbol-placement: line, each glyph in a label could have multiple\n    // \"quad\"s only one of which should be shown at a given zoom level.\n    // The min/max zoom assigned to each quad is based on the font size at\n    // the vector tile's zoom level, which might be different than at the\n    // currently rendered zoom level if text-size is zoom-dependent.\n    // Thus, we compensate for this difference by calculating an adjustment\n    // based on the scale of rendered text size relative to layout text size.\n    highp float layoutSize;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        v_size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n        layoutSize = a_size[2] / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        v_size = a_size[0] / 10.0;\n        layoutSize = v_size;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        v_size = u_size;\n        layoutSize = u_layout_size;\n    } else {\n        v_size = u_size;\n        layoutSize = u_size;\n    }\n\n    float fontScale = u_is_text ? v_size / 24.0 : v_size;\n\n    vec4 projectedPoint = u_matrix * vec4(a_label_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float perspective_ratio = 1.0 + 0.5*((camera_to_anchor_distance / u_camera_to_center_distance) - 1.0);\n\n    // pitch-alignment: map\n    // rotation-alignment: map | viewport\n    if (u_pitch_with_map) {\n        highp float angle = u_rotate_with_map ? a_lineangle : u_bearing;\n        highp float asin = sin(angle);\n        highp float acos = cos(angle);\n        mat2 RotationMatrix = mat2(acos, asin, -1.0 * asin, acos);\n        vec2 offset = RotationMatrix * a_offset;\n        vec2 extrude = fontScale * u_extrude_scale * perspective_ratio * (offset / 64.0);\n\n        gl_Position = u_matrix * vec4(a_pos + extrude, 0, 1);\n        gl_Position.z += clipUnusedGlyphAngles(v_size*perspective_ratio, layoutSize, a_minzoom, a_maxzoom) * gl_Position.w;\n    // pitch-alignment: viewport\n    // rotation-alignment: map\n    } else if (u_rotate_with_map) {\n        // foreshortening factor to apply on pitched maps\n        // as a label goes from horizontal <=> vertical in angle\n        // it goes from 0% foreshortening to up to around 70% foreshortening\n        highp float pitchfactor = 1.0 - cos(u_pitch * sin(u_pitch * 0.75));\n\n        // use the lineangle to position points a,b along the line\n        // project the points and calculate the label angle in projected space\n        // this calculation allows labels to be rendered unskewed on pitched maps\n        vec4 a = u_matrix * vec4(a_pos, 0, 1);\n        vec4 b = u_matrix * vec4(a_pos + vec2(cos(a_lineangle), sin(a_lineangle)), 0, 1);\n        highp float angle = atan((b[1] / b[3] - a[1] / a[3]) / u_aspect_ratio, b[0] / b[3] - a[0] / a[3]);\n        highp float asin = sin(angle);\n        highp float acos = cos(angle);\n        mat2 RotationMatrix = mat2(acos, -1.0 * asin, asin, acos);\n        highp float foreshortening = (1.0 - pitchfactor) + (pitchfactor * cos(angle * 2.0));\n\n        vec2 offset = RotationMatrix * (vec2(foreshortening, 1.0) * a_offset);\n        vec2 extrude = fontScale * u_extrude_scale * perspective_ratio * (offset / 64.0);\n\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n        gl_Position.z += clipUnusedGlyphAngles(v_size * perspective_ratio, layoutSize, a_minzoom, a_maxzoom) * gl_Position.w;\n    // pitch-alignment: viewport\n    // rotation-alignment: viewport\n    } else {\n        vec2 extrude = fontScale * u_extrude_scale * perspective_ratio * (a_offset / 64.0);\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n    }\n\n    gl_Position.z +=\n        step(u_max_camera_distance * u_camera_to_center_distance, camera_to_anchor_distance) * gl_Position.w;\n\n    v_gamma_scale = gl_Position.w / perspective_ratio;\n\n    v_tex = a_tex / u_texsize;\n    // incidence_stretch is the ratio of how much y space a label takes up on a tile while drawn perpendicular to the viewport vs\n    //  how much space it would take up if it were drawn flat on the tile\n    // Using law of sines, camera_to_anchor/sin(ground_angle) = camera_to_center/sin(incidence_angle)\n    // sin(incidence_angle) = 1/incidence_stretch\n    // Incidence angle 90 -> head on, sin(incidence_angle) = 1, no incidence stretch\n    // Incidence angle 1 -> very oblique, sin(incidence_angle) =~ 0, lots of incidence stretch\n    // ground_angle = u_pitch + PI/2 -> sin(ground_angle) = cos(u_pitch)\n    // This 2D calculation is only exactly correct when gl_Position.x is in the center of the viewport,\n    //  but it's a close enough approximation for our purposes\n    highp float incidence_stretch  = camera_to_anchor_distance / (u_camera_to_center_distance * cos(u_pitch));\n    // incidence_stretch only applies to the y-axis, but without re-calculating the collision tile, we can't\n    // adjust the size of only one axis. So, we do a crude approximation at placement time to get the aspect ratio\n    // about right, and then do the rest of the adjustment here: there will be some extra padding on the x-axis,\n    // but hopefully not too much.\n    // Never make the adjustment less than 1.0: instead of allowing collisions on the x-axis, be conservative on\n    // the y-axis.\n    highp float collision_adjustment = max(1.0, incidence_stretch / u_collision_y_stretch);\n\n    // Floor to 1/10th zoom to dodge precision issues that can cause partially hidden labels\n    highp float perspective_zoom_adjust = floor(log2(perspective_ratio * collision_adjustment) * 10.0);\n    v_fade_tex = vec2((a_labelminzoom + perspective_zoom_adjust) / 255.0, 0.0);\n}\n"
                }
            };
        }, {}],
        79: [function (_dereq_, module, exports) {
            "use strict";
            var VertexArrayObject = function () {
                this.boundProgram = null, this.boundVertexBuffer = null, this.boundVertexBuffer2 = null, this.boundElementBuffer = null, this.boundVertexOffset = null, this.vao = null
            };
            VertexArrayObject.prototype.bind = function (e, t, r, i, n, s) {
                void 0 === e.extVertexArrayObject && (e.extVertexArrayObject = e.getExtension("OES_vertex_array_object"));
                var o = !this.vao || this.boundProgram !== t || this.boundVertexBuffer !== r || this.boundVertexBuffer2 !== n || this.boundElementBuffer !== i || this.boundVertexOffset !== s;
                !e.extVertexArrayObject || o ? (this.freshBind(e, t, r, i, n, s), this.gl = e) : e.extVertexArrayObject.bindVertexArrayOES(this.vao)
            }, VertexArrayObject.prototype.freshBind = function (e, t, r, i, n, s) {
                var o, u = t.numAttributes;
                if (e.extVertexArrayObject) this.vao && this.destroy(), this.vao = e.extVertexArrayObject.createVertexArrayOES(), e.extVertexArrayObject.bindVertexArrayOES(this.vao), o = 0, this.boundProgram = t, this.boundVertexBuffer = r, this.boundVertexBuffer2 = n, this.boundElementBuffer = i, this.boundVertexOffset = s; else {
                    o = e.currentNumAttributes || 0;
                    for (var b = u; b < o; b++) e.disableVertexAttribArray(b)
                }
                r.enableAttributes(e, t), n && n.enableAttributes(e, t), r.bind(e), r.setVertexAttribPointers(e, t, s), n && (n.bind(e), n.setVertexAttribPointers(e, t, s)), i && i.bind(e), e.currentNumAttributes = u
            }, VertexArrayObject.prototype.destroy = function () {
                this.vao && (this.gl.extVertexArrayObject.deleteVertexArrayOES(this.vao), this.vao = null)
            }, module.exports = VertexArrayObject;
        }, {}],
        80: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util");
            exports.packUint8ToFloat = function (t, l) {
                return t = util.clamp(Math.floor(t), 0, 255), l = util.clamp(Math.floor(l), 0, 255), 256 * t + l
            };
        }, {"../util/util": 215}],
        81: [function (_dereq_, module, exports) {
            "use strict";
            var ImageSource = _dereq_("./image_source"), window = _dereq_("../util/window"),
                CanvasSource = function (t) {
                    function i(i, a, s, n) {
                        t.call(this, i, a, s, n), this.options = a, this.animate = !a.hasOwnProperty("animate") || a.animate
                    }

                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.load = function () {
                        if (this.canvas = this.canvas || window.document.getElementById(this.options.canvas), this.width = this.canvas.width, this.height = this.canvas.height, this._hasInvalidDimensions()) return this.fire("error", new Error("Canvas dimensions cannot be less than or equal to zero."));
                        var t;
                        this.play = function () {
                            t = this.map.style.animationLoop.set(1 / 0), this.map._rerender()
                        }, this.pause = function () {
                            this.map.style.animationLoop.cancel(t)
                        }, this._finishLoading()
                    }, i.prototype.getCanvas = function () {
                        return this.canvas
                    }, i.prototype.onAdd = function (t) {
                        this.map || (this.map = t, this.load(), this.canvas && this.animate && this.play())
                    }, i.prototype.prepare = function () {
                        var t = !1;
                        this.canvas.width !== this.width && (this.width = this.canvas.width, t = !0), this.canvas.height !== this.height && (this.height = this.canvas.height, t = !0), this._hasInvalidDimensions() || 0 !== Object.keys(this.tiles).length && this._prepareImage(this.map.painter.gl, this.canvas, t)
                    }, i.prototype.serialize = function () {
                        return {type: "canvas", canvas: this.canvas, coordinates: this.coordinates}
                    }, i.prototype._hasInvalidDimensions = function () {
                        for (var t = this, i = 0, a = [t.canvas.width, t.canvas.height]; i < a.length; i += 1) {
                            var s = a[i];
                            if (isNaN(s) || s <= 0) return !0
                        }
                        return !1
                    }, i
                }(ImageSource);
            module.exports = CanvasSource;
        }, {"../util/window": 196, "./image_source": 85}],
        82: [function (_dereq_, module, exports) {
            "use strict";

            function resolveURL(t) {
                var e = window.document.createElement("a");
                return e.href = t, e.href
            }

            var Evented = _dereq_("../util/evented"), util = _dereq_("../util/util"),
                window = _dereq_("../util/window"), EXTENT = _dereq_("../data/extent"), GeoJSONSource = function (t) {
                    function e(e, o, i, r) {
                        t.call(this), o = o || {}, this.id = e, this.type = "geojson", this.minzoom = 0, this.maxzoom = 18, this.tileSize = 512, this.isTileClipped = !0, this.reparseOverscaled = !0, this.dispatcher = i, this.setEventedParent(r), this._data = o.data, void 0 !== o.maxzoom && (this.maxzoom = o.maxzoom), o.type && (this.type = o.type);
                        var a = EXTENT / this.tileSize;
                        this.workerOptions = util.extend({
                            source: this.id,
                            cluster: o.cluster || !1,
                            geojsonVtOptions: {
                                buffer: (void 0 !== o.buffer ? o.buffer : 128) * a,
                                tolerance: (void 0 !== o.tolerance ? o.tolerance : .375) * a,
                                extent: EXTENT,
                                maxZoom: this.maxzoom
                            },
                            superclusterOptions: {
                                maxZoom: Math.min(o.clusterMaxZoom, this.maxzoom - 1) || this.maxzoom - 1,
                                extent: EXTENT,
                                radius: (o.clusterRadius || 50) * a,
                                log: !1
                            }
                        }, o.workerOptions)
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function () {
                        var t = this;
                        this.fire("dataloading", {dataType: "source"}), this._updateWorkerData(function (e) {
                            return e ? void t.fire("error", {error: e}) : void t.fire("data", {
                                dataType: "source",
                                sourceDataType: "metadata"
                            })
                        })
                    }, e.prototype.onAdd = function (t) {
                        this.load(), this.map = t
                    }, e.prototype.setData = function (t) {
                        var e = this;
                        return this._data = t, this.fire("dataloading", {dataType: "source"}), this._updateWorkerData(function (t) {
                            return t ? e.fire("error", {error: t}) : void e.fire("data", {
                                dataType: "source",
                                sourceDataType: "content"
                            })
                        }), this
                    }, e.prototype._updateWorkerData = function (t) {
                        var e = this, o = util.extend({}, this.workerOptions), i = this._data;
                        "string" == typeof i ? o.url = resolveURL(i) : o.data = JSON.stringify(i), this.workerID = this.dispatcher.send(this.type + ".loadData", o, function (o) {
                            e._loaded = !0, t(o)
                        })
                    }, e.prototype.loadTile = function (t, e) {
                        var o = this, i = t.coord.z > this.maxzoom ? Math.pow(2, t.coord.z - this.maxzoom) : 1, r = {
                            type: this.type,
                            uid: t.uid,
                            coord: t.coord,
                            zoom: t.coord.z,
                            maxZoom: this.maxzoom,
                            tileSize: this.tileSize,
                            source: this.id,
                            overscaling: i,
                            angle: this.map.transform.angle,
                            pitch: this.map.transform.pitch,
                            cameraToCenterDistance: this.map.transform.cameraToCenterDistance,
                            cameraToTileDistance: this.map.transform.cameraToTileDistance(t),
                            showCollisionBoxes: this.map.showCollisionBoxes
                        };
                        t.workerID = this.dispatcher.send("loadTile", r, function (i, r) {
                            if (t.unloadVectorData(), !t.aborted) return i ? e(i) : (t.loadVectorData(r, o.map.painter), t.redoWhenDone && (t.redoWhenDone = !1, t.redoPlacement(o)), e(null))
                        }, this.workerID)
                    }, e.prototype.abortTile = function (t) {
                        t.aborted = !0
                    }, e.prototype.unloadTile = function (t) {
                        t.unloadVectorData(), this.dispatcher.send("removeTile", {
                            uid: t.uid,
                            type: this.type,
                            source: this.id
                        }, function () {
                        }, t.workerID)
                    }, e.prototype.onRemove = function () {
                        this.dispatcher.broadcast("removeSource", {type: this.type, source: this.id}, function () {
                        })
                    }, e.prototype.serialize = function () {
                        return {type: this.type, data: this._data}
                    }, e
                }(Evented);
            module.exports = GeoJSONSource;
        }, {"../data/extent": 53, "../util/evented": 202, "../util/util": 215, "../util/window": 196}],
        83: [function (_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"), rewind = _dereq_("geojson-rewind"),
                GeoJSONWrapper = _dereq_("./geojson_wrapper"), vtpbf = _dereq_("vt-pbf"),
                supercluster = _dereq_("supercluster"), geojsonvt = _dereq_("geojson-vt"),
                VectorTileWorkerSource = _dereq_("./vector_tile_worker_source"), GeoJSONWorkerSource = function (e) {
                    function r(r, t, o) {
                        e.call(this, r, t), o && (this.loadGeoJSON = o), this._geoJSONIndexes = {}
                    }

                    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.loadVectorData = function (e, r) {
                        var t = e.source, o = e.coord;
                        if (!this._geoJSONIndexes[t]) return r(null, null);
                        var n = this._geoJSONIndexes[t].getTile(Math.min(o.z, e.maxZoom), o.x, o.y);
                        if (!n) return r(null, null);
                        var u = new GeoJSONWrapper(n.features);
                        u.name = "_geojsonTileLayer";
                        var a = vtpbf({layers: {_geojsonTileLayer: u}});
                        0 === a.byteOffset && a.byteLength === a.buffer.byteLength || (a = new Uint8Array(a)), u.rawData = a.buffer, r(null, u)
                    }, r.prototype.loadData = function (e, r) {
                        var t = function (t, o) {
                            var n = this;
                            return t ? r(t) : "object" != typeof o ? r(new Error("Input data is not a valid GeoJSON object.")) : (rewind(o, !0), void this._indexData(o, e, function (t, o) {
                                return t ? r(t) : (n._geoJSONIndexes[e.source] = o, void r(null))
                            }))
                        }.bind(this);
                        this.loadGeoJSON(e, t)
                    }, r.prototype.loadGeoJSON = function (e, r) {
                        if (e.url) ajax.getJSON(e.url, r); else {
                            if ("string" != typeof e.data) return r(new Error("Input data is not a valid GeoJSON object."));
                            try {
                                return r(null, JSON.parse(e.data))
                            } catch (e) {
                                return r(new Error("Input data is not a valid GeoJSON object."))
                            }
                        }
                    }, r.prototype.removeSource = function (e) {
                        this._geoJSONIndexes[e.source] && delete this._geoJSONIndexes[e.source]
                    }, r.prototype._indexData = function (e, r, t) {
                        try {
                            r.cluster ? t(null, supercluster(r.superclusterOptions).load(e.features)) : t(null, geojsonvt(e, r.geojsonVtOptions))
                        } catch (e) {
                            return t(e)
                        }
                    }, r
                }(VectorTileWorkerSource);
            module.exports = GeoJSONWorkerSource;
        }, {
            "../util/ajax": 193,
            "./geojson_wrapper": 84,
            "./vector_tile_worker_source": 97,
            "geojson-rewind": 7,
            "geojson-vt": 11,
            "supercluster": 28,
            "vt-pbf": 37
        }],
        84: [function (_dereq_, module, exports) {
            "use strict";
            var Point = _dereq_("point-geometry"), VectorTileFeature = _dereq_("vector-tile").VectorTileFeature,
                EXTENT = _dereq_("../data/extent"), FeatureWrapper = function (e) {
                    var t = this;
                    if (this.type = e.type, 1 === e.type) {
                        this.rawGeometry = [];
                        for (var r = 0; r < e.geometry.length; r++) t.rawGeometry.push([e.geometry[r]])
                    } else this.rawGeometry = e.geometry;
                    this.properties = e.tags, "id" in e && !isNaN(e.id) && (this.id = parseInt(e.id, 10)), this.extent = EXTENT
                };
            FeatureWrapper.prototype.loadGeometry = function () {
                var e = this, t = this.rawGeometry;
                this.geometry = [];
                for (var r = 0; r < t.length; r++) {
                    for (var o = t[r], a = [], i = 0; i < o.length; i++) a.push(new Point(o[i][0], o[i][1]));
                    e.geometry.push(a)
                }
                return this.geometry
            }, FeatureWrapper.prototype.bbox = function () {
                this.geometry || this.loadGeometry();
                for (var e = this.geometry, t = 1 / 0, r = -(1 / 0), o = 1 / 0, a = -(1 / 0), i = 0; i < e.length; i++) for (var p = e[i], n = 0; n < p.length; n++) {
                    var h = p[n];
                    t = Math.min(t, h.x), r = Math.max(r, h.x), o = Math.min(o, h.y), a = Math.max(a, h.y)
                }
                return [t, o, r, a]
            }, FeatureWrapper.prototype.toGeoJSON = function () {
                VectorTileFeature.prototype.toGeoJSON.call(this)
            };
            var GeoJSONWrapper = function (e) {
                this.features = e, this.length = e.length, this.extent = EXTENT
            };
            GeoJSONWrapper.prototype.feature = function (e) {
                return new FeatureWrapper(this.features[e])
            }, module.exports = GeoJSONWrapper;
        }, {"../data/extent": 53, "point-geometry": 25, "vector-tile": 33}],
        85: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), window = _dereq_("../util/window"), TileCoord = _dereq_("./tile_coord"),
                LngLat = _dereq_("../geo/lng_lat"), Point = _dereq_("point-geometry"),
                Evented = _dereq_("../util/evented"), ajax = _dereq_("../util/ajax"),
                EXTENT = _dereq_("../data/extent"), RasterBoundsArray = _dereq_("../data/raster_bounds_array"),
                Buffer = _dereq_("../data/buffer"), VertexArrayObject = _dereq_("../render/vertex_array_object"),
                ImageSource = function (t) {
                    function e(e, o, r, i) {
                        t.call(this), this.id = e, this.dispatcher = r, this.coordinates = o.coordinates, this.type = "image", this.minzoom = 0, this.maxzoom = 22, this.tileSize = 512, this.tiles = {}, this.setEventedParent(i), this.options = o, this.textureLoaded = !1
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function () {
                        var t = this;
                        this.fire("dataloading", {dataType: "source"}), this.url = this.options.url, ajax.getImage(this.options.url, function (e, o) {
                            return e ? t.fire("error", {error: e}) : (t.image = o, void t._finishLoading())
                        })
                    }, e.prototype._finishLoading = function () {
                        this.map && (this.setCoordinates(this.coordinates), this.fire("data", {
                            dataType: "source",
                            sourceDataType: "metadata"
                        }))
                    }, e.prototype.onAdd = function (t) {
                        this.load(), this.map = t, this.image && this.setCoordinates(this.coordinates)
                    }, e.prototype.setCoordinates = function (t) {
                        this.coordinates = t;
                        var e = this.map, o = t.map(function (t) {
                            return e.transform.locationCoordinate(LngLat.convert(t)).zoomTo(0)
                        }), r = this.centerCoord = util.getCoordinatesCenter(o);
                        return r.column = Math.floor(r.column), r.row = Math.floor(r.row), this.coord = new TileCoord(r.zoom, r.column, r.row), this.minzoom = this.maxzoom = r.zoom, this._tileCoords = o.map(function (t) {
                            var e = t.zoomTo(r.zoom);
                            return new Point(Math.round((e.column - r.column) * EXTENT), Math.round((e.row - r.row) * EXTENT))
                        }), this.fire("data", {dataType: "source", sourceDataType: "content"}), this
                    }, e.prototype._setTile = function (t) {
                        this.tiles[t.coord.w] = t;
                        var e = 32767, o = new RasterBoundsArray;
                        o.emplaceBack(this._tileCoords[0].x, this._tileCoords[0].y, 0, 0), o.emplaceBack(this._tileCoords[1].x, this._tileCoords[1].y, e, 0), o.emplaceBack(this._tileCoords[3].x, this._tileCoords[3].y, 0, e), o.emplaceBack(this._tileCoords[2].x, this._tileCoords[2].y, e, e), t.buckets = {}, t.boundsBuffer = Buffer.fromStructArray(o, Buffer.BufferType.VERTEX), t.boundsVAO = new VertexArrayObject
                    }, e.prototype.prepare = function () {
                        0 === Object.keys(this.tiles).length !== 0 && this.image && this._prepareImage(this.map.painter.gl, this.image)
                    }, e.prototype._prepareImage = function (t, e, o) {
                        var r = this;
                        this.textureLoaded ? o ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e) : (e instanceof window.HTMLVideoElement || e instanceof window.ImageData || e instanceof window.HTMLCanvasElement) && (t.bindTexture(t.TEXTURE_2D, this.texture), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, t.RGBA, t.UNSIGNED_BYTE, e)) : (this.textureLoaded = !0, this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e));
                        for (var i in r.tiles) {
                            var a = r.tiles[i];
                            "loaded" !== a.state && (a.state = "loaded", a.texture = r.texture)
                        }
                    }, e.prototype.loadTile = function (t, e) {
                        this.coord && this.coord.toString() === t.coord.toString() ? (this._setTile(t), e(null)) : (t.state = "errored", e(null))
                    }, e.prototype.serialize = function () {
                        return {type: "image", urls: this.url, coordinates: this.coordinates}
                    }, e
                }(Evented);
            module.exports = ImageSource;
        }, {
            "../data/buffer": 50,
            "../data/extent": 53,
            "../data/raster_bounds_array": 58,
            "../geo/lng_lat": 61,
            "../render/vertex_array_object": 79,
            "../util/ajax": 193,
            "../util/evented": 202,
            "../util/util": 215,
            "../util/window": 196,
            "./tile_coord": 95,
            "point-geometry": 25
        }],
        86: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), ajax = _dereq_("../util/ajax"), browser = _dereq_("../util/browser"),
                normalizeURL = _dereq_("../util/mapbox").normalizeSourceURL;
            module.exports = function (r, e) {
                var o = function (r, o) {
                    if (r) return e(r);
                    var i = util.pick(o, ["tiles", "minzoom", "maxzoom", "attribution", "mapbox_logo", "bounds"]);
                    o.vector_layers && (i.vectorLayers = o.vector_layers, i.vectorLayerIds = i.vectorLayers.map(function (r) {
                        return r.id
                    })), e(null, i)
                };
                r.url ? ajax.getJSON(normalizeURL(r.url), o) : browser.frame(o.bind(null, null, r))
            };
        }, {"../util/ajax": 193, "../util/browser": 194, "../util/mapbox": 209, "../util/util": 215}],
        87: [function (_dereq_, module, exports) {
            "use strict";
            var EXTENT = _dereq_("../data/extent");
            module.exports = function (e, t, r) {
                return t * (EXTENT / (e.tileSize * Math.pow(2, r - e.coord.z)))
            };
        }, {"../data/extent": 53}],
        88: [function (_dereq_, module, exports) {
            "use strict";

            function sortTilesIn(e, r) {
                var t = e.coord, o = r.coord;
                return t.z - o.z || t.y - o.y || t.w - o.w || t.x - o.x
            }

            function mergeRenderedFeatureLayers(e) {
                for (var r = {}, t = {}, o = 0, a = e; o < a.length; o += 1) {
                    var n = a[o], u = n.queryResults, i = n.wrappedTileID, d = t[i] = t[i] || {};
                    for (var s in u) for (var l = u[s], c = d[s] = d[s] || {}, f = r[s] = r[s] || [], y = 0, p = l; y < p.length; y += 1) {
                        var v = p[y];
                        c[v.featureIndex] || (c[v.featureIndex] = !0, f.push(v.feature))
                    }
                }
                return r
            }

            var TileCoord = _dereq_("./tile_coord");
            exports.rendered = function (e, r, t, o, a, n) {
                var u = e.tilesIn(t);
                u.sort(sortTilesIn);
                for (var i = [], d = 0; d < u.length; d++) {
                    var s = u[d];
                    s.tile.featureIndex && i.push({
                        wrappedTileID: s.coord.wrapped().id,
                        queryResults: s.tile.featureIndex.query({
                            queryGeometry: s.queryGeometry,
                            scale: s.scale,
                            tileSize: s.tile.tileSize,
                            bearing: n,
                            params: o
                        }, r)
                    })
                }
                return mergeRenderedFeatureLayers(i)
            }, exports.source = function (e, r) {
                for (var t = e.getRenderableIds().map(function (r) {
                    return e.getTileByID(r)
                }), o = [], a = {}, n = 0; n < t.length; n++) {
                    var u = t[n], i = new TileCoord(Math.min(u.sourceMaxZoom, u.coord.z), u.coord.x, u.coord.y, 0).id;
                    a[i] || (a[i] = !0, u.querySourceFeatures(o, r))
                }
                return o
            };
        }, {"./tile_coord": 95}],
        89: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), ajax = _dereq_("../util/ajax"), Evented = _dereq_("../util/evented"),
                loadTileJSON = _dereq_("./load_tilejson"), normalizeURL = _dereq_("../util/mapbox").normalizeTileURL,
                TileBounds = _dereq_("./tile_bounds"), RasterTileSource = function (e) {
                    function t(t, i, r, o) {
                        e.call(this), this.id = t, this.dispatcher = r, this.setEventedParent(o), this.type = "raster", this.minzoom = 0, this.maxzoom = 22, this.roundZoom = !0, this.scheme = "xyz", this.tileSize = 512, this._loaded = !1, this.options = i, util.extend(this, util.pick(i, ["url", "scheme", "tileSize"]))
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.load = function () {
                        var e = this;
                        this.fire("dataloading", {dataType: "source"}), loadTileJSON(this.options, function (t, i) {
                            return t ? e.fire("error", t) : (util.extend(e, i), e.setBounds(i.bounds), e.fire("data", {
                                dataType: "source",
                                sourceDataType: "metadata"
                            }), void e.fire("data", {dataType: "source", sourceDataType: "content"}))
                        })
                    }, t.prototype.onAdd = function (e) {
                        this.load(), this.map = e
                    }, t.prototype.setBounds = function (e) {
                        this.bounds = e, e && (this.tileBounds = new TileBounds(e, this.minzoom, this.maxzoom))
                    }, t.prototype.serialize = function () {
                        return {
                            type: "raster",
                            url: this.url,
                            tileSize: this.tileSize,
                            tiles: this.tiles,
                            bounds: this.bounds
                        }
                    }, t.prototype.hasTile = function (e) {
                        return !this.tileBounds || this.tileBounds.contains(e, this.maxzoom)
                    }, t.prototype.loadTile = function (e, t) {
                        function i(i, r) {
                            if (delete e.request, e.aborted) return this.state = "unloaded", t(null);
                            if (i) return this.state = "errored", t(i);
                            this.map._refreshExpiredTiles && e.setExpiryData(r), delete r.cacheControl, delete r.expires;
                            var o = this.map.painter.gl;
                            e.texture = this.map.painter.getTileTexture(r.width), e.texture ? (o.bindTexture(o.TEXTURE_2D, e.texture), o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, o.RGBA, o.UNSIGNED_BYTE, r)) : (e.texture = o.createTexture(), o.bindTexture(o.TEXTURE_2D, e.texture), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR_MIPMAP_NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), this.map.painter.extTextureFilterAnisotropic && o.texParameterf(o.TEXTURE_2D, this.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, this.map.painter.extTextureFilterAnisotropicMax), o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, r), e.texture.size = r.width), o.generateMipmap(o.TEXTURE_2D), e.state = "loaded", t(null)
                        }

                        var r = normalizeURL(e.coord.url(this.tiles, null, this.scheme), this.url, this.tileSize);
                        e.request = ajax.getImage(r, i.bind(this))
                    }, t.prototype.abortTile = function (e) {
                        e.request && (e.request.abort(), delete e.request)
                    }, t.prototype.unloadTile = function (e) {
                        e.texture && this.map.painter.saveTileTexture(e.texture)
                    }, t
                }(Evented);
            module.exports = RasterTileSource;
        }, {
            "../util/ajax": 193,
            "../util/evented": 202,
            "../util/mapbox": 209,
            "../util/util": 215,
            "./load_tilejson": 86,
            "./tile_bounds": 94
        }],
        90: [function (_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"), Evented = _dereq_("../util/evented"),
                window = _dereq_("../util/window"), pluginRequested = !1, pluginBlobURL = null;
            module.exports.evented = new Evented, module.exports.registerForPluginAvailability = function (e) {
                return pluginBlobURL ? e(pluginBlobURL, module.exports.errorCallback) : module.exports.evented.once("pluginAvailable", e), e
            }, module.exports.setRTLTextPlugin = function (e, l) {
                if (pluginRequested) throw new Error("setRTLTextPlugin cannot be called multiple times.");
                pluginRequested = !0, module.exports.errorCallback = l, ajax.getArrayBuffer(e, function (e, t) {
                    e ? l(e) : (pluginBlobURL = window.URL.createObjectURL(new window.Blob([t.data]), {type: "text/javascript"}), module.exports.evented.fire("pluginAvailable", {
                        pluginBlobURL: pluginBlobURL,
                        errorCallback: l
                    }))
                })
            };
        }, {"../util/ajax": 193, "../util/evented": 202, "../util/window": 196}],
        91: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), sourceTypes = {
                vector: _dereq_("../source/vector_tile_source"),
                raster: _dereq_("../source/raster_tile_source"),
                geojson: _dereq_("../source/geojson_source"),
                video: _dereq_("../source/video_source"),
                image: _dereq_("../source/image_source"),
                canvas: _dereq_("../source/canvas_source")
            };
            exports.create = function (e, r, o, u) {
                if (r = new sourceTypes[r.type](e, r, o, u), r.id !== e) throw new Error("Expected Source id to be " + e + " instead of " + r.id);
                return util.bindAll(["load", "abort", "unload", "serialize", "prepare"], r), r
            }, exports.getType = function (e) {
                return sourceTypes[e]
            }, exports.setType = function (e, r) {
                sourceTypes[e] = r
            };
        }, {
            "../source/canvas_source": 81,
            "../source/geojson_source": 82,
            "../source/image_source": 85,
            "../source/raster_tile_source": 89,
            "../source/vector_tile_source": 96,
            "../source/video_source": 98,
            "../util/util": 215
        }],
        92: [function (_dereq_, module, exports) {
            "use strict";

            function coordinateToTilePoint(e, t, o) {
                var i = o.zoomTo(Math.min(e.z, t));
                return {x: (i.column - (e.x + e.w * Math.pow(2, e.z))) * EXTENT, y: (i.row - e.y) * EXTENT}
            }

            function compareKeyZoom(e, t) {
                return e % 32 - t % 32
            }

            function isRasterType(e) {
                return "raster" === e || "image" === e || "video" === e
            }

            var Source = _dereq_("./source"), Tile = _dereq_("./tile"), Evented = _dereq_("../util/evented"),
                TileCoord = _dereq_("./tile_coord"), Cache = _dereq_("../util/lru_cache"),
                Coordinate = _dereq_("../geo/coordinate"), util = _dereq_("../util/util"),
                EXTENT = _dereq_("../data/extent"), SourceCache = function (e) {
                    function t(t, o, i) {
                        e.call(this), this.id = t, this.dispatcher = i, this.on("data", function (e) {
                            "source" === e.dataType && "metadata" === e.sourceDataType && (this._sourceLoaded = !0), this._sourceLoaded && "source" === e.dataType && "content" === e.sourceDataType && (this.reload(), this.transform && this.update(this.transform))
                        }), this.on("error", function () {
                            this._sourceErrored = !0
                        }), this._source = Source.create(t, o, i, this), this._tiles = {}, this._cache = new Cache(0, this.unloadTile.bind(this)), this._timers = {}, this._cacheTimers = {}, this._isIdRenderable = this._isIdRenderable.bind(this)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onAdd = function (e) {
                        this.map = e, this._source && this._source.onAdd && this._source.onAdd(e)
                    }, t.prototype.onRemove = function (e) {
                        this._source && this._source.onRemove && this._source.onRemove(e)
                    }, t.prototype.loaded = function () {
                        var e = this;
                        if (this._sourceErrored) return !0;
                        if (!this._sourceLoaded) return !1;
                        for (var t in e._tiles) {
                            var o = e._tiles[t];
                            if ("loaded" !== o.state && "errored" !== o.state) return !1
                        }
                        return !0
                    }, t.prototype.getSource = function () {
                        return this._source
                    }, t.prototype.loadTile = function (e, t) {
                        return this._source.loadTile(e, t)
                    }, t.prototype.unloadTile = function (e) {
                        if (this._source.unloadTile) return this._source.unloadTile(e)
                    }, t.prototype.abortTile = function (e) {
                        if (this._source.abortTile) return this._source.abortTile(e)
                    }, t.prototype.serialize = function () {
                        return this._source.serialize()
                    }, t.prototype.prepare = function () {
                        if (this._sourceLoaded && this._source.prepare) return this._source.prepare()
                    }, t.prototype.getIds = function () {
                        return Object.keys(this._tiles).map(Number).sort(compareKeyZoom)
                    }, t.prototype.getRenderableIds = function () {
                        return this.getIds().filter(this._isIdRenderable)
                    }, t.prototype._isIdRenderable = function (e) {
                        return this._tiles[e].hasData() && !this._coveredTiles[e]
                    }, t.prototype.reload = function () {
                        var e = this;
                        this._cache.reset();
                        for (var t in e._tiles) e.reloadTile(t, "reloading")
                    }, t.prototype.reloadTile = function (e, t) {
                        var o = this._tiles[e];
                        o && ("loading" !== o.state && (o.state = t), this.loadTile(o, this._tileLoaded.bind(this, o, e, t)))
                    }, t.prototype._tileLoaded = function (e, t, o, i) {
                        return i ? (e.state = "errored", void(404 !== i.status && this._source.fire("error", {
                            tile: e,
                            error: i
                        }))) : (e.sourceCache = this, e.timeAdded = (new Date).getTime(), "expired" === o && (e.refreshedUponExpiration = !0), this._setTileReloadTimer(t, e), this._source.fire("data", {
                            dataType: "source",
                            tile: e,
                            coord: e.coord
                        }), void(this.map && (this.map.painter.tileExtentVAO.vao = null)))
                    }, t.prototype.getTile = function (e) {
                        return this.getTileByID(e.id)
                    }, t.prototype.getTileByID = function (e) {
                        return this._tiles[e]
                    }, t.prototype.getZoom = function (e) {
                        return e.zoom + e.scaleZoom(e.tileSize / this._source.tileSize)
                    }, t.prototype.findLoadedChildren = function (e, t, o) {
                        var i = this, r = !1;
                        for (var s in i._tiles) {
                            var a = i._tiles[s];
                            if (!(o[s] || !a.hasData() || a.coord.z <= e.z || a.coord.z > t)) {
                                var n = Math.pow(2, Math.min(a.coord.z, i._source.maxzoom) - Math.min(e.z, i._source.maxzoom));
                                if (Math.floor(a.coord.x / n) === e.x && Math.floor(a.coord.y / n) === e.y) for (o[s] = !0, r = !0; a && a.coord.z - 1 > e.z;) {
                                    var c = a.coord.parent(i._source.maxzoom).id;
                                    a = i._tiles[c], a && a.hasData() && (delete o[s], o[c] = !0)
                                }
                            }
                        }
                        return r
                    }, t.prototype.findLoadedParent = function (e, t, o) {
                        for (var i = this, r = e.z - 1; r >= t; r--) {
                            e = e.parent(i._source.maxzoom);
                            var s = i._tiles[e.id];
                            if (s && s.hasData()) return o[e.id] = !0, s;
                            if (i._cache.has(e.id)) return o[e.id] = !0, i._cache.getWithoutRemoving(e.id)
                        }
                    }, t.prototype.updateCacheSize = function (e) {
                        var t = Math.ceil(e.width / e.tileSize) + 1, o = Math.ceil(e.height / e.tileSize) + 1, i = t * o,
                            r = 5;
                        this._cache.setMaxSize(Math.floor(i * r))
                    }, t.prototype.update = function (e) {
                        var o = this;
                        if (this.transform = e, this._sourceLoaded) {
                            var i, r, s, a;
                            this.updateCacheSize(e);
                            var n = (this._source.roundZoom ? Math.round : Math.floor)(this.getZoom(e)),
                                c = Math.max(n - t.maxOverzooming, this._source.minzoom),
                                d = Math.max(n + t.maxUnderzooming, this._source.minzoom), h = {};
                            this._coveredTiles = {};
                            var u;
                            for (this.used ? this._source.coord ? u = e.getVisibleWrappedCoordinates(this._source.coord) : (u = e.coveringTiles({
                                tileSize: this._source.tileSize,
                                minzoom: this._source.minzoom,
                                maxzoom: this._source.maxzoom,
                                roundZoom: this._source.roundZoom,
                                reparseOverscaled: this._source.reparseOverscaled
                            }), this._source.hasTile && (u = u.filter(function (e) {
                                return o._source.hasTile(e)
                            }))) : u = [], i = 0; i < u.length; i++) r = u[i], s = o.addTile(r), h[r.id] = !0, s.hasData() || o.findLoadedChildren(r, d, h) || (a = o.findLoadedParent(r, c, h), a && o.addTile(a.coord));
                            var l = {};
                            if (isRasterType(this._source.type)) for (var m = Object.keys(h), p = 0; p < m.length; p++) {
                                var _ = m[p];
                                r = TileCoord.fromID(_), s = o._tiles[_], s && ("undefined" == typeof s.fadeEndTime || s.fadeEndTime >= Date.now()) && (o.findLoadedChildren(r, d, h) && (h[_] = !0), a = o.findLoadedParent(r, c, l), a && o.addTile(a.coord))
                            }
                            var f;
                            for (f in l) h[f] || (o._coveredTiles[f] = !0);
                            for (f in l) h[f] = !0;
                            var T = util.keysDifference(this._tiles, h);
                            for (i = 0; i < T.length; i++) o.removeTile(+T[i])
                        }
                    }, t.prototype.addTile = function (e) {
                        var t = this._tiles[e.id];
                        if (t) return t;
                        t = this._cache.get(e.id), t && (t.redoPlacement(this._source), this._cacheTimers[e.id] && (clearTimeout(this._cacheTimers[e.id]), this._cacheTimers[e.id] = void 0, this._setTileReloadTimer(e.id, t)));
                        var o = Boolean(t);
                        if (!o) {
                            var i = e.z, r = i > this._source.maxzoom ? Math.pow(2, i - this._source.maxzoom) : 1;
                            t = new Tile(e, this._source.tileSize * r, this._source.maxzoom), this.loadTile(t, this._tileLoaded.bind(this, t, e.id, t.state))
                        }
                        return t.uses++, this._tiles[e.id] = t, o || this._source.fire("dataloading", {
                            tile: t,
                            coord: t.coord,
                            dataType: "source"
                        }), t
                    }, t.prototype._setTileReloadTimer = function (e, t) {
                        var o = this, i = t.getExpiryTimeout();
                        i && (this._timers[e] = setTimeout(function () {
                            o.reloadTile(e, "expired"), o._timers[e] = void 0
                        }, i))
                    }, t.prototype._setCacheInvalidationTimer = function (e, t) {
                        var o = this, i = t.getExpiryTimeout();
                        i && (this._cacheTimers[e] = setTimeout(function () {
                            o._cache.remove(e), o._cacheTimers[e] = void 0
                        }, i))
                    }, t.prototype.removeTile = function (e) {
                        var t = this._tiles[e];
                        if (t && (t.uses--, delete this._tiles[e], this._timers[e] && (clearTimeout(this._timers[e]), this._timers[e] = void 0), !(t.uses > 0))) if (t.stopPlacementThrottler(), t.hasData()) {
                            var o = t.coord.wrapped().id;
                            this._cache.add(o, t), this._setCacheInvalidationTimer(o, t)
                        } else t.aborted = !0, this.abortTile(t), this.unloadTile(t)
                    }, t.prototype.clearTiles = function () {
                        var e = this;
                        for (var t in e._tiles) e.removeTile(t);
                        this._cache.reset()
                    }, t.prototype.tilesIn = function (e) {
                        for (var t = this, o = [], i = this.getIds(), r = 1 / 0, s = 1 / 0, a = -(1 / 0), n = -(1 / 0), c = e[0].zoom, d = 0; d < e.length; d++) {
                            var h = e[d];
                            r = Math.min(r, h.column), s = Math.min(s, h.row), a = Math.max(a, h.column), n = Math.max(n, h.row)
                        }
                        for (var u = 0; u < i.length; u++) {
                            var l = t._tiles[i[u]], m = TileCoord.fromID(i[u]),
                                p = [coordinateToTilePoint(m, l.sourceMaxZoom, new Coordinate(r, s, c)), coordinateToTilePoint(m, l.sourceMaxZoom, new Coordinate(a, n, c))];
                            if (p[0].x < EXTENT && p[0].y < EXTENT && p[1].x >= 0 && p[1].y >= 0) {
                                for (var _ = [], f = 0; f < e.length; f++) _.push(coordinateToTilePoint(m, l.sourceMaxZoom, e[f]));
                                o.push({
                                    tile: l,
                                    coord: m,
                                    queryGeometry: [_],
                                    scale: Math.pow(2, t.transform.zoom - l.coord.z)
                                })
                            }
                        }
                        return o
                    }, t.prototype.redoPlacement = function () {
                        for (var e = this, t = this.getIds(), o = 0; o < t.length; o++) {
                            var i = e.getTileByID(t[o]);
                            i.redoPlacement(e._source)
                        }
                    }, t.prototype.getVisibleCoordinates = function () {
                        for (var e = this, t = this.getRenderableIds().map(TileCoord.fromID), o = 0, i = t; o < i.length; o += 1) {
                            var r = i[o];
                            r.posMatrix = e.transform.calculatePosMatrix(r, e._source.maxzoom)
                        }
                        return t
                    }, t
                }(Evented);
            SourceCache.maxOverzooming = 10, SourceCache.maxUnderzooming = 3, module.exports = SourceCache;
        }, {
            "../data/extent": 53,
            "../geo/coordinate": 60,
            "../util/evented": 202,
            "../util/lru_cache": 208,
            "../util/util": 215,
            "./source": 91,
            "./tile": 93,
            "./tile_coord": 95
        }],
        93: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), Bucket = _dereq_("../data/bucket"),
                FeatureIndex = _dereq_("../data/feature_index"), vt = _dereq_("vector-tile"), Protobuf = _dereq_("pbf"),
                GeoJSONFeature = _dereq_("../util/vectortile_to_geojson"),
                featureFilter = _dereq_("../style-spec/feature_filter"),
                CollisionTile = _dereq_("../symbol/collision_tile"),
                CollisionBoxArray = _dereq_("../symbol/collision_box"), Throttler = _dereq_("../util/throttler"),
                CLOCK_SKEW_RETRY_TIMEOUT = 3e4, Tile = function (e, t, i) {
                    this.coord = e, this.uid = util.uniqueId(), this.uses = 0, this.tileSize = t, this.sourceMaxZoom = i, this.buckets = {}, this.expirationTime = null, this.expiredRequestCount = 0, this.state = "loading", this.placementThrottler = new Throttler(300, this._immediateRedoPlacement.bind(this))
                };
            Tile.prototype.registerFadeDuration = function (e, t) {
                var i = t + this.timeAdded;
                i < Date.now() || this.fadeEndTime && i < this.fadeEndTime || (this.fadeEndTime = i, e.set(this.fadeEndTime - Date.now()))
            }, Tile.prototype.loadVectorData = function (e, t) {
                this.hasData() && this.unloadVectorData(), this.state = "loaded", e && (e.rawTileData && (this.rawTileData = e.rawTileData), this.collisionBoxArray = new CollisionBoxArray(e.collisionBoxArray), this.collisionTile = new CollisionTile(e.collisionTile, this.collisionBoxArray), this.featureIndex = new FeatureIndex(e.featureIndex, this.rawTileData, this.collisionTile), this.buckets = Bucket.deserialize(e.buckets, t.style))
            }, Tile.prototype.reloadSymbolData = function (e, t) {
                var i = this;
                if ("unloaded" !== this.state) {
                    this.collisionTile = new CollisionTile(e.collisionTile, this.collisionBoxArray), this.featureIndex.setCollisionTile(this.collisionTile);
                    for (var o in i.buckets) {
                        var a = i.buckets[o];
                        "symbol" === a.layers[0].type && (a.destroy(), delete i.buckets[o])
                    }
                    util.extend(this.buckets, Bucket.deserialize(e.buckets, t))
                }
            }, Tile.prototype.unloadVectorData = function () {
                var e = this;
                for (var t in e.buckets) e.buckets[t].destroy();
                this.buckets = {}, this.collisionBoxArray = null, this.collisionTile = null, this.featureIndex = null, this.state = "unloaded"
            }, Tile.prototype.redoPlacement = function (e) {
                if ("vector" === e.type || "geojson" === e.type) {
                    if ("loaded" !== this.state) return void(this.redoWhenDone = !0);
                    if (this.collisionTile) {
                        var t = e.map.transform.cameraToTileDistance(this);
                        if (this.angle === e.map.transform.angle && this.pitch === e.map.transform.pitch && this.cameraToCenterDistance === e.map.transform.cameraToCenterDistance && this.showCollisionBoxes === e.map.showCollisionBoxes) {
                            if (this.cameraToTileDistance === t) return;
                            if (this.pitch < 25) return void(this.cameraToTileDistance = t)
                        }
                        this.angle = e.map.transform.angle, this.pitch = e.map.transform.pitch, this.cameraToCenterDistance = e.map.transform.cameraToCenterDistance, this.cameraToTileDistance = t, this.showCollisionBoxes = e.map.showCollisionBoxes, this.placementSource = e, this.state = "reloading", this.placementThrottler.invoke()
                    }
                }
            }, Tile.prototype._immediateRedoPlacement = function () {
                var e = this;
                this.placementSource.dispatcher.send("redoPlacement", {
                    type: this.placementSource.type,
                    uid: this.uid,
                    source: this.placementSource.id,
                    angle: this.angle,
                    pitch: this.pitch,
                    cameraToCenterDistance: this.cameraToCenterDistance,
                    cameraToTileDistance: this.cameraToTileDistance,
                    showCollisionBoxes: this.showCollisionBoxes
                }, function (t, i) {
                    e.reloadSymbolData(i, e.placementSource.map.style), e.placementSource.map.showCollisionBoxes && e.placementSource.fire("data", {
                        tile: e,
                        coord: e.coord,
                        dataType: "source"
                    }), e.placementSource.map && (e.placementSource.map.painter.tileExtentVAO.vao = null), e.state = "loaded", e.redoWhenDone && (e.redoWhenDone = !1, e._immediateRedoPlacement())
                }, this.workerID)
            }, Tile.prototype.getBucket = function (e) {
                return this.buckets[e.id]
            }, Tile.prototype.querySourceFeatures = function (e, t) {
                var i = this;
                if (this.rawTileData) {
                    this.vtLayers || (this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers);
                    var o = t ? t.sourceLayer : void 0, a = this.vtLayers._geojsonTileLayer || this.vtLayers[o];
                    if (a) for (var s = featureFilter(t && t.filter), r = {
                        z: this.coord.z,
                        x: this.coord.x,
                        y: this.coord.y
                    }, l = 0; l < a.length; l++) {
                        var n = a.feature(l);
                        if (s(n)) {
                            var h = new GeoJSONFeature(n, i.coord.z, i.coord.x, i.coord.y);
                            h.tile = r, e.push(h)
                        }
                    }
                }
            }, Tile.prototype.hasData = function () {
                return "loaded" === this.state || "reloading" === this.state || "expired" === this.state
            }, Tile.prototype.setExpiryData = function (e) {
                var t = this.expirationTime;
                if (e.cacheControl) {
                    var i = util.parseCacheControl(e.cacheControl);
                    i["max-age"] && (this.expirationTime = Date.now() + 1e3 * i["max-age"])
                } else e.expires && (this.expirationTime = new Date(e.expires).getTime());
                if (this.expirationTime) {
                    var o = Date.now(), a = !1;
                    if (this.expirationTime > o) a = !1; else if (t) if (this.expirationTime < t) a = !0; else {
                        var s = this.expirationTime - t;
                        s ? this.expirationTime = o + Math.max(s, CLOCK_SKEW_RETRY_TIMEOUT) : a = !0
                    } else a = !0;
                    a ? (this.expiredRequestCount++, this.state = "expired") : this.expiredRequestCount = 0
                }
            }, Tile.prototype.getExpiryTimeout = function () {
                if (this.expirationTime) return this.expiredRequestCount ? 1e3 * (1 << Math.min(this.expiredRequestCount - 1, 31)) : Math.min(this.expirationTime - (new Date).getTime(), Math.pow(2, 31) - 1)
            }, Tile.prototype.stopPlacementThrottler = function () {
                this.placementThrottler.stop(), "reloading" === this.state && (this.state = "loaded")
            }, module.exports = Tile;
        }, {
            "../data/bucket": 44,
            "../data/feature_index": 54,
            "../style-spec/feature_filter": 104,
            "../symbol/collision_box": 162,
            "../symbol/collision_tile": 164,
            "../util/throttler": 213,
            "../util/util": 215,
            "../util/vectortile_to_geojson": 216,
            "pbf": 24,
            "vector-tile": 33
        }],
        94: [function (_dereq_, module, exports) {
            "use strict";
            var LngLatBounds = _dereq_("../geo/lng_lat_bounds"), clamp = _dereq_("../util/util").clamp,
                TileBounds = function (t, n, o) {
                    this.bounds = LngLatBounds.convert(this.validateBounds(t)), this.minzoom = n || 0, this.maxzoom = o || 24
                };
            TileBounds.prototype.validateBounds = function (t) {
                return Array.isArray(t) && 4 === t.length ? [Math.max(-180, t[0]), Math.max(-90, t[1]), Math.min(180, t[2]), Math.min(90, t[3])] : [-180, -90, 180, 90]
            }, TileBounds.prototype.contains = function (t, n) {
                var o = n ? Math.min(t.z, n) : t.z, a = {
                    minX: Math.floor(this.lngX(this.bounds.getWest(), o)),
                    minY: Math.floor(this.latY(this.bounds.getNorth(), o)),
                    maxX: Math.ceil(this.lngX(this.bounds.getEast(), o)),
                    maxY: Math.ceil(this.latY(this.bounds.getSouth(), o))
                }, i = t.x >= a.minX && t.x < a.maxX && t.y >= a.minY && t.y < a.maxY;
                return i
            }, TileBounds.prototype.lngX = function (t, n) {
                return (t + 180) * (Math.pow(2, n) / 360)
            }, TileBounds.prototype.latY = function (t, n) {
                var o = clamp(Math.sin(Math.PI / 180 * t), -.9999, .9999), a = Math.pow(2, n) / (2 * Math.PI);
                return Math.pow(2, n - 1) + .5 * Math.log((1 + o) / (1 - o)) * -a
            }, module.exports = TileBounds;
        }, {"../geo/lng_lat_bounds": 62, "../util/util": 215}],
        95: [function (_dereq_, module, exports) {
            "use strict";

            function edge(t, i) {
                if (t.row > i.row) {
                    var o = t;
                    t = i, i = o
                }
                return {x0: t.column, y0: t.row, x1: i.column, y1: i.row, dx: i.column - t.column, dy: i.row - t.row}
            }

            function scanSpans(t, i, o, r, e) {
                var n = Math.max(o, Math.floor(i.y0)), h = Math.min(r, Math.ceil(i.y1));
                if (t.x0 === i.x0 && t.y0 === i.y0 ? t.x0 + i.dy / t.dy * t.dx < i.x1 : t.x1 - i.dy / t.dy * t.dx < i.x0) {
                    var s = t;
                    t = i, i = s
                }
                for (var a = t.dx / t.dy, d = i.dx / i.dy, y = t.dx > 0, l = i.dx < 0, u = n; u < h; u++) {
                    var x = a * Math.max(0, Math.min(t.dy, u + y - t.y0)) + t.x0,
                        c = d * Math.max(0, Math.min(i.dy, u + l - i.y0)) + i.x0;
                    e(Math.floor(c), Math.ceil(x), u)
                }
            }

            function scanTriangle(t, i, o, r, e, n) {
                var h, s = edge(t, i), a = edge(i, o), d = edge(o, t);
                s.dy > a.dy && (h = s, s = a, a = h), s.dy > d.dy && (h = s, s = d, d = h), a.dy > d.dy && (h = a, a = d, d = h), s.dy && scanSpans(d, s, r, e, n), a.dy && scanSpans(d, a, r, e, n)
            }

            function getQuadkey(t, i, o) {
                for (var r, e = "", n = t; n > 0; n--) r = 1 << n - 1, e += (i & r ? 1 : 0) + (o & r ? 2 : 0);
                return e
            }

            var WhooTS = _dereq_("@mapbox/whoots-js"), Coordinate = _dereq_("../geo/coordinate"),
                TileCoord = function (t, i, o, r) {
                    isNaN(r) && (r = 0), this.z = +t, this.x = +i, this.y = +o, this.w = +r, r *= 2, r < 0 && (r = r * -1 - 1);
                    var e = 1 << this.z;
                    this.id = 32 * (e * e * r + e * this.y + this.x) + this.z, this.posMatrix = null
                };
            TileCoord.prototype.toString = function () {
                return this.z + "/" + this.x + "/" + this.y
            }, TileCoord.prototype.toCoordinate = function (t) {
                var i = Math.min(this.z, void 0 === t ? this.z : t), o = Math.pow(2, i), r = this.y,
                    e = this.x + o * this.w;
                return new Coordinate(e, r, i)
            }, TileCoord.prototype.url = function (t, i, o) {
                var r = WhooTS.getTileBBox(this.x, this.y, this.z), e = getQuadkey(this.z, this.x, this.y);
                return t[(this.x + this.y) % t.length].replace("{prefix}", (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace("{z}", Math.min(this.z, i || this.z)).replace("{x}", this.x).replace("{y}", "tms" === o ? Math.pow(2, this.z) - this.y - 1 : this.y).replace("{quadkey}", e).replace("{bbox-epsg-3857}", r)
            }, TileCoord.prototype.parent = function (t) {
                return 0 === this.z ? null : this.z > t ? new TileCoord(this.z - 1, this.x, this.y, this.w) : new TileCoord(this.z - 1, Math.floor(this.x / 2), Math.floor(this.y / 2), this.w)
            }, TileCoord.prototype.wrapped = function () {
                return new TileCoord(this.z, this.x, this.y, 0)
            }, TileCoord.prototype.children = function (t) {
                if (this.z >= t) return [new TileCoord(this.z + 1, this.x, this.y, this.w)];
                var i = this.z + 1, o = 2 * this.x, r = 2 * this.y;
                return [new TileCoord(i, o, r, this.w), new TileCoord(i, o + 1, r, this.w), new TileCoord(i, o, r + 1, this.w), new TileCoord(i, o + 1, r + 1, this.w)]
            }, TileCoord.cover = function (t, i, o, r) {
                function e(t, i, e) {
                    var s, a, d, y;
                    if (e >= 0 && e <= n) for (s = t; s < i; s++) a = Math.floor(s / n), d = (s % n + n) % n, 0 !== a && r !== !0 || (y = new TileCoord(o, d, e, a), h[y.id] = y)
                }

                void 0 === r && (r = !0);
                var n = 1 << t, h = {};
                return scanTriangle(i[0], i[1], i[2], 0, n, e), scanTriangle(i[2], i[3], i[0], 0, n, e), Object.keys(h).map(function (t) {
                    return h[t]
                })
            }, TileCoord.fromID = function (t) {
                var i = t % 32, o = 1 << i, r = (t - i) / 32, e = r % o, n = (r - e) / o % o,
                    h = Math.floor(r / (o * o));
                return h % 2 !== 0 && (h = h * -1 - 1), h /= 2, new TileCoord(i, e, n, h)
            }, module.exports = TileCoord;
        }, {"../geo/coordinate": 60, "@mapbox/whoots-js": 4}],
        96: [function (_dereq_, module, exports) {
            "use strict";
            var Evented = _dereq_("../util/evented"), util = _dereq_("../util/util"),
                loadTileJSON = _dereq_("./load_tilejson"), normalizeURL = _dereq_("../util/mapbox").normalizeTileURL,
                TileBounds = _dereq_("./tile_bounds"), VectorTileSource = function (e) {
                    function t(t, i, o, r) {
                        if (e.call(this), this.id = t, this.dispatcher = o, this.type = "vector", this.minzoom = 0, this.maxzoom = 22, this.scheme = "xyz", this.tileSize = 512, this.reparseOverscaled = !0, this.isTileClipped = !0, util.extend(this, util.pick(i, ["url", "scheme", "tileSize"])), this._options = util.extend({type: "vector"}, i), 512 !== this.tileSize) throw new Error("vector tile sources must have a tileSize of 512");
                        this.setEventedParent(r)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.load = function () {
                        var e = this;
                        this.fire("dataloading", {dataType: "source"}), loadTileJSON(this._options, function (t, i) {
                            return t ? void e.fire("error", t) : (util.extend(e, i), e.setBounds(i.bounds), e.fire("data", {
                                dataType: "source",
                                sourceDataType: "metadata"
                            }), void e.fire("data", {dataType: "source", sourceDataType: "content"}))
                        })
                    }, t.prototype.setBounds = function (e) {
                        this.bounds = e, e && (this.tileBounds = new TileBounds(e, this.minzoom, this.maxzoom))
                    }, t.prototype.hasTile = function (e) {
                        return !this.tileBounds || this.tileBounds.contains(e, this.maxzoom)
                    }, t.prototype.onAdd = function (e) {
                        this.load(), this.map = e
                    }, t.prototype.serialize = function () {
                        return util.extend({}, this._options)
                    }, t.prototype.loadTile = function (e, t) {
                        function i(i, o) {
                            if (!e.aborted) {
                                if (i) return t(i);
                                this.map._refreshExpiredTiles && e.setExpiryData(o), e.loadVectorData(o, this.map.painter), e.redoWhenDone && (e.redoWhenDone = !1, e.redoPlacement(this)), t(null), e.reloadCallback && (this.loadTile(e, e.reloadCallback), e.reloadCallback = null)
                            }
                        }

                        var o = e.coord.z > this.maxzoom ? Math.pow(2, e.coord.z - this.maxzoom) : 1, r = {
                            url: normalizeURL(e.coord.url(this.tiles, this.maxzoom, this.scheme), this.url),
                            uid: e.uid,
                            coord: e.coord,
                            zoom: e.coord.z,
                            tileSize: this.tileSize * o,
                            type: this.type,
                            source: this.id,
                            overscaling: o,
                            angle: this.map.transform.angle,
                            pitch: this.map.transform.pitch,
                            cameraToCenterDistance: this.map.transform.cameraToCenterDistance,
                            cameraToTileDistance: this.map.transform.cameraToTileDistance(e),
                            showCollisionBoxes: this.map.showCollisionBoxes
                        };
                        e.workerID && "expired" !== e.state ? "loading" === e.state ? e.reloadCallback = t : this.dispatcher.send("reloadTile", r, i.bind(this), e.workerID) : e.workerID = this.dispatcher.send("loadTile", r, i.bind(this))
                    }, t.prototype.abortTile = function (e) {
                        this.dispatcher.send("abortTile", {uid: e.uid, type: this.type, source: this.id}, null, e.workerID)
                    }, t.prototype.unloadTile = function (e) {
                        e.unloadVectorData(), this.dispatcher.send("removeTile", {
                            uid: e.uid,
                            type: this.type,
                            source: this.id
                        }, null, e.workerID)
                    }, t
                }(Evented);
            module.exports = VectorTileSource;
        }, {
            "../util/evented": 202,
            "../util/mapbox": 209,
            "../util/util": 215,
            "./load_tilejson": 86,
            "./tile_bounds": 94
        }],
        97: [function (_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"), vt = _dereq_("vector-tile"), Protobuf = _dereq_("pbf"),
                WorkerTile = _dereq_("./worker_tile"), util = _dereq_("../util/util"),
                VectorTileWorkerSource = function (e, r, t) {
                    this.actor = e, this.layerIndex = r, t && (this.loadVectorData = t), this.loading = {}, this.loaded = {}
                };
            VectorTileWorkerSource.prototype.loadTile = function (e, r) {
                function t(e, t) {
                    return delete this.loading[o][a], e ? r(e) : t ? (i.vectorTile = t, i.parse(t, this.layerIndex, this.actor, function (e, o, a) {
                        if (e) return r(e);
                        var i = {};
                        t.expires && (i.expires = t.expires), t.cacheControl && (i.cacheControl = t.cacheControl), r(null, util.extend({rawTileData: t.rawData}, o, i), a)
                    }), this.loaded[o] = this.loaded[o] || {}, void(this.loaded[o][a] = i)) : r(null, null)
                }

                var o = e.source, a = e.uid;
                this.loading[o] || (this.loading[o] = {});
                var i = this.loading[o][a] = new WorkerTile(e);
                i.abort = this.loadVectorData(e, t.bind(this))
            }, VectorTileWorkerSource.prototype.reloadTile = function (e, r) {
                function t(e, t) {
                    if (this.reloadCallback) {
                        var o = this.reloadCallback;
                        delete this.reloadCallback, this.parse(this.vectorTile, i.layerIndex, i.actor, o)
                    }
                    r(e, t)
                }

                var o = this.loaded[e.source], a = e.uid, i = this;
                if (o && o[a]) {
                    var l = o[a];
                    "parsing" === l.status ? l.reloadCallback = r : "done" === l.status && l.parse(l.vectorTile, this.layerIndex, this.actor, t.bind(l))
                }
            }, VectorTileWorkerSource.prototype.abortTile = function (e) {
                var r = this.loading[e.source], t = e.uid;
                r && r[t] && r[t].abort && (r[t].abort(), delete r[t])
            }, VectorTileWorkerSource.prototype.removeTile = function (e) {
                var r = this.loaded[e.source], t = e.uid;
                r && r[t] && delete r[t]
            }, VectorTileWorkerSource.prototype.loadVectorData = function (e, r) {
                function t(e, t) {
                    if (e) return r(e);
                    var o = new vt.VectorTile(new Protobuf(t.data));
                    o.rawData = t.data, o.cacheControl = t.cacheControl, o.expires = t.expires, r(e, o)
                }

                var o = ajax.getArrayBuffer(e.url, t.bind(this));
                return function () {
                    o.abort()
                }
            }, VectorTileWorkerSource.prototype.redoPlacement = function (e, r) {
                var t = this.loaded[e.source], o = this.loading[e.source], a = e.uid;
                if (t && t[a]) {
                    var i = t[a],
                        l = i.redoPlacement(e.angle, e.pitch, e.cameraToCenterDistance, e.cameraToTileDistance, e.showCollisionBoxes);
                    l.result && r(null, l.result, l.transferables)
                } else o && o[a] && (o[a].angle = e.angle)
            }, module.exports = VectorTileWorkerSource;
        }, {"../util/ajax": 193, "../util/util": 215, "./worker_tile": 100, "pbf": 24, "vector-tile": 33}],
        98: [function (_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"), ImageSource = _dereq_("./image_source"), VideoSource = function (t) {
                function e(e, o, i, r) {
                    t.call(this, e, o, i, r), this.roundZoom = !0, this.type = "video", this.options = o
                }

                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function () {
                    var t = this, e = this.options;
                    this.urls = e.urls, ajax.getVideo(e.urls, function (e, o) {
                        if (e) return t.fire("error", {error: e});
                        t.video = o, t.video.loop = !0;
                        var i;
                        t.video.addEventListener("playing", function () {
                            i = t.map.style.animationLoop.set(1 / 0), t.map._rerender()
                        }), t.video.addEventListener("pause", function () {
                            t.map.style.animationLoop.cancel(i)
                        }), t.map && t.video.play(), t._finishLoading()
                    })
                }, e.prototype.getVideo = function () {
                    return this.video
                }, e.prototype.onAdd = function (t) {
                    this.map || (this.load(), this.map = t, this.video && (this.video.play(), this.setCoordinates(this.coordinates)))
                }, e.prototype.prepare = function () {
                    0 === Object.keys(this.tiles).length || this.video.readyState < 2 || this._prepareImage(this.map.painter.gl, this.video)
                }, e.prototype.serialize = function () {
                    return {type: "video", urls: this.urls, coordinates: this.coordinates}
                }, e
            }(ImageSource);
            module.exports = VideoSource;
        }, {"../util/ajax": 193, "./image_source": 85}],
        99: [function (_dereq_, module, exports) {
            "use strict";
            var Actor = _dereq_("../util/actor"), StyleLayerIndex = _dereq_("../style/style_layer_index"),
                VectorTileWorkerSource = _dereq_("./vector_tile_worker_source"),
                GeoJSONWorkerSource = _dereq_("./geojson_worker_source"),
                globalRTLTextPlugin = _dereq_("./rtl_text_plugin"), Worker = function (e) {
                    var r = this;
                    this.self = e, this.actor = new Actor(e, this), this.layerIndexes = {}, this.workerSourceTypes = {
                        vector: VectorTileWorkerSource,
                        geojson: GeoJSONWorkerSource
                    }, this.workerSources = {}, this.self.registerWorkerSource = function (e, o) {
                        if (r.workerSourceTypes[e]) throw new Error('Worker source with name "' + e + '" already registered.');
                        r.workerSourceTypes[e] = o
                    }, this.self.registerRTLTextPlugin = function (e) {
                        if (globalRTLTextPlugin.applyArabicShaping || globalRTLTextPlugin.processBidirectionalText) throw new Error("RTL text plugin already registered.");
                        globalRTLTextPlugin.applyArabicShaping = e.applyArabicShaping, globalRTLTextPlugin.processBidirectionalText = e.processBidirectionalText
                    }
                };
            Worker.prototype.setLayers = function (e, r) {
                this.getLayerIndex(e).replace(r)
            }, Worker.prototype.updateLayers = function (e, r) {
                this.getLayerIndex(e).update(r.layers, r.removedIds, r.symbolOrder)
            }, Worker.prototype.loadTile = function (e, r, o) {
                this.getWorkerSource(e, r.type).loadTile(r, o)
            }, Worker.prototype.reloadTile = function (e, r, o) {
                this.getWorkerSource(e, r.type).reloadTile(r, o)
            }, Worker.prototype.abortTile = function (e, r) {
                this.getWorkerSource(e, r.type).abortTile(r)
            }, Worker.prototype.removeTile = function (e, r) {
                this.getWorkerSource(e, r.type).removeTile(r)
            }, Worker.prototype.removeSource = function (e, r) {
                var o = this.getWorkerSource(e, r.type);
                void 0 !== o.removeSource && o.removeSource(r)
            }, Worker.prototype.redoPlacement = function (e, r, o) {
                this.getWorkerSource(e, r.type).redoPlacement(r, o)
            }, Worker.prototype.loadWorkerSource = function (e, r, o) {
                try {
                    this.self.importScripts(r.url), o()
                } catch (e) {
                    o(e)
                }
            }, Worker.prototype.loadRTLTextPlugin = function (e, r, o) {
                try {
                    globalRTLTextPlugin.applyArabicShaping || globalRTLTextPlugin.processBidirectionalText || this.self.importScripts(r)
                } catch (e) {
                    o(e)
                }
            }, Worker.prototype.getLayerIndex = function (e) {
                var r = this.layerIndexes[e];
                return r || (r = this.layerIndexes[e] = new StyleLayerIndex), r
            }, Worker.prototype.getWorkerSource = function (e, r) {
                var o = this;
                if (this.workerSources[e] || (this.workerSources[e] = {}), !this.workerSources[e][r]) {
                    var t = {
                        send: function (r, t, i, n) {
                            o.actor.send(r, t, i, n, e)
                        }
                    };
                    this.workerSources[e][r] = new this.workerSourceTypes[r](t, this.getLayerIndex(e))
                }
                return this.workerSources[e][r]
            }, module.exports = function (e) {
                return new Worker(e)
            };
        }, {
            "../style/style_layer_index": 156,
            "../util/actor": 192,
            "./geojson_worker_source": 83,
            "./rtl_text_plugin": 90,
            "./vector_tile_worker_source": 97
        }],
        100: [function (_dereq_, module, exports) {
            "use strict";

            function recalculateLayers(e, i) {
                for (var r = 0, t = e.layers; r < t.length; r += 1) {
                    var o = t[r];
                    o.recalculate(i)
                }
            }

            function serializeBuckets(e, i) {
                return e.filter(function (e) {
                    return !e.isEmpty()
                }).map(function (e) {
                    return e.serialize(i)
                })
            }

            var FeatureIndex = _dereq_("../data/feature_index"), CollisionTile = _dereq_("../symbol/collision_tile"),
                CollisionBoxArray = _dereq_("../symbol/collision_box"),
                DictionaryCoder = _dereq_("../util/dictionary_coder"), util = _dereq_("../util/util"),
                WorkerTile = function (e) {
                    this.coord = e.coord, this.uid = e.uid, this.zoom = e.zoom, this.tileSize = e.tileSize, this.source = e.source, this.overscaling = e.overscaling, this.angle = e.angle, this.pitch = e.pitch, this.cameraToCenterDistance = e.cameraToCenterDistance, this.cameraToTileDistance = e.cameraToTileDistance, this.showCollisionBoxes = e.showCollisionBoxes
                };
            WorkerTile.prototype.parse = function (e, i, r, t) {
                var o = this;
                e.layers || (e = {layers: {_geojsonTileLayer: e}}), this.status = "parsing", this.data = e, this.collisionBoxArray = new CollisionBoxArray;
                var s = new DictionaryCoder(Object.keys(e.layers).sort()),
                    a = new FeatureIndex(this.coord, this.overscaling);
                a.bucketLayerIDs = {};
                var n = {}, l = 0, c = {featureIndex: a, iconDependencies: {}, glyphDependencies: {}},
                    u = i.familiesBySource[this.source];
                for (var h in u) {
                    var y = e.layers[h];
                    if (y) {
                        1 === y.version && util.warnOnce('Vector tile source "' + o.source + '" layer "' + h + '" does not use vector tile spec v2 and therefore may have some rendering errors.');
                        for (var m = s.encode(h), d = [], p = 0; p < y.length; p++) {
                            var v = y.feature(p);
                            v.index = p, v.sourceLayerIndex = m, d.push(v)
                        }
                        for (var f = 0, g = u[h]; f < g.length; f += 1) {
                            var T = g[f], x = T[0];
                            if (!(x.minzoom && o.zoom < x.minzoom || x.maxzoom && o.zoom >= x.maxzoom || x.layout && "none" === x.layout.visibility)) {
                                for (var B = 0, b = T; B < b.length; B += 1) {
                                    var k = b[B];
                                    k.recalculate(o.zoom)
                                }
                                var z = n[x.id] = x.createBucket({
                                    index: l,
                                    layers: T,
                                    zoom: o.zoom,
                                    overscaling: o.overscaling,
                                    collisionBoxArray: o.collisionBoxArray
                                });
                                z.populate(d, c), a.bucketLayerIDs[l] = T.map(function (e) {
                                    return e.id
                                }), l++
                            }
                        }
                    }
                }
                var D = function (e) {
                    o.status = "done", a.paintPropertyStatistics = {};
                    for (var i in n) util.extend(a.paintPropertyStatistics, n[i].getPaintPropertyStatistics());
                    var r = [];
                    t(null, {
                        buckets: serializeBuckets(util.values(n), r),
                        featureIndex: a.serialize(r),
                        collisionTile: e.serialize(r),
                        collisionBoxArray: o.collisionBoxArray.serialize()
                    }, r)
                };
                this.symbolBuckets = [];
                for (var C = i.symbolOrder.length - 1; C >= 0; C--) {
                    var w = n[i.symbolOrder[C]];
                    w && o.symbolBuckets.push(w)
                }
                if (0 === this.symbolBuckets.length) return D(new CollisionTile(this.angle, this.pitch, this.cameraToCenterDistance, this.cameraToTileDistance, this.collisionBoxArray));
                var A = 0, I = Object.keys(c.iconDependencies), O = util.mapObject(c.glyphDependencies, function (e) {
                    return Object.keys(e).map(Number)
                }), L = function (e) {
                    if (e) return t(e);
                    if (A++, 2 === A) {
                        for (var i = new CollisionTile(o.angle, o.pitch, o.cameraToCenterDistance, o.cameraToTileDistance, o.collisionBoxArray), r = 0, s = o.symbolBuckets; r < s.length; r += 1) {
                            var a = s[r];
                            recalculateLayers(a, o.zoom), a.prepare(O, I), a.place(i, o.showCollisionBoxes)
                        }
                        D(i)
                    }
                };
                Object.keys(O).length ? r.send("getGlyphs", {uid: this.uid, stacks: O}, function (e, i) {
                    O = i, L(e)
                }) : L(), I.length ? r.send("getIcons", {icons: I}, function (e, i) {
                    I = i, L(e)
                }) : L()
            }, WorkerTile.prototype.redoPlacement = function (e, i, r, t, o) {
                var s = this;
                if (this.angle = e, this.pitch = i, this.cameraToCenterDistance = r, this.cameraToTileDistance = t, "done" !== this.status) return {};
                for (var a = new CollisionTile(this.angle, this.pitch, this.cameraToCenterDistance, this.cameraToTileDistance, this.collisionBoxArray), n = 0, l = s.symbolBuckets; n < l.length; n += 1) {
                    var c = l[n];
                    recalculateLayers(c, s.zoom), c.place(a, o)
                }
                var u = [];
                return {
                    result: {buckets: serializeBuckets(this.symbolBuckets, u), collisionTile: a.serialize(u)},
                    transferables: u
                }
            }, module.exports = WorkerTile;
        }, {
            "../data/feature_index": 54,
            "../symbol/collision_box": 162,
            "../symbol/collision_tile": 164,
            "../util/dictionary_coder": 199,
            "../util/util": 215
        }],
        101: [function (_dereq_, module, exports) {
            "use strict";

            function deref(r, e) {
                var f = {};
                for (var t in r) "ref" !== t && (f[t] = r[t]);
                return refProperties.forEach(function (r) {
                    r in e && (f[r] = e[r])
                }), f
            }

            function derefLayers(r) {
                r = r.slice();
                for (var e = Object.create(null), f = 0; f < r.length; f++) e[r[f].id] = r[f];
                for (var t = 0; t < r.length; t++) "ref" in r[t] && (r[t] = deref(r[t], e[r[t].ref]));
                return r
            }

            var refProperties = _dereq_("./util/ref_properties");
            module.exports = derefLayers;
        }, {"./util/ref_properties": 124}],
        102: [function (_dereq_, module, exports) {
            "use strict";

            function diffSources(e, r, o, a) {
                e = e || {}, r = r || {};
                var s;
                for (s in e) e.hasOwnProperty(s) && (r.hasOwnProperty(s) || (o.push({
                    command: operations.removeSource,
                    args: [s]
                }), a[s] = !0));
                for (s in r) r.hasOwnProperty(s) && (e.hasOwnProperty(s) ? isEqual(e[s], r[s]) || (o.push({
                    command: operations.removeSource,
                    args: [s]
                }), o.push({
                    command: operations.addSource,
                    args: [s, r[s]]
                }), a[s] = !0) : o.push({command: operations.addSource, args: [s, r[s]]}))
            }

            function diffLayerPropertyChanges(e, r, o, a, s, t) {
                e = e || {}, r = r || {};
                var n;
                for (n in e) e.hasOwnProperty(n) && (isEqual(e[n], r[n]) || o.push({
                    command: t,
                    args: [a, n, r[n], s]
                }));
                for (n in r) r.hasOwnProperty(n) && !e.hasOwnProperty(n) && (isEqual(e[n], r[n]) || o.push({
                    command: t,
                    args: [a, n, r[n], s]
                }))
            }

            function pluckId(e) {
                return e.id
            }

            function indexById(e, r) {
                return e[r.id] = r, e
            }

            function diffLayers(e, r, o) {
                e = e || [], r = r || [];
                var a, s, t, n, i, p, m, u = e.map(pluckId), l = r.map(pluckId), y = e.reduce(indexById, {}),
                    c = r.reduce(indexById, {}), d = u.slice(), h = Object.create(null);
                for (a = 0, s = 0; a < u.length; a++) t = u[a], c.hasOwnProperty(t) ? s++ : (o.push({
                    command: operations.removeLayer,
                    args: [t]
                }), d.splice(d.indexOf(t, s), 1));
                for (a = 0, s = 0; a < l.length; a++) t = l[l.length - 1 - a], d[d.length - 1 - a] !== t && (y.hasOwnProperty(t) ? (o.push({
                    command: operations.removeLayer,
                    args: [t]
                }), d.splice(d.lastIndexOf(t, d.length - s), 1)) : s++, p = d[d.length - a], o.push({
                    command: operations.addLayer,
                    args: [c[t], p]
                }), d.splice(d.length - a, 0, t), h[t] = !0);
                for (a = 0; a < l.length; a++) if (t = l[a], n = y[t], i = c[t], !h[t] && !isEqual(n, i)) if (isEqual(n.source, i.source) && isEqual(n["source-layer"], i["source-layer"]) && isEqual(n.type, i.type)) {
                    diffLayerPropertyChanges(n.layout, i.layout, o, t, null, operations.setLayoutProperty), diffLayerPropertyChanges(n.paint, i.paint, o, t, null, operations.setPaintProperty), isEqual(n.filter, i.filter) || o.push({
                        command: operations.setFilter,
                        args: [t, i.filter]
                    }), isEqual(n.minzoom, i.minzoom) && isEqual(n.maxzoom, i.maxzoom) || o.push({
                        command: operations.setLayerZoomRange,
                        args: [t, i.minzoom, i.maxzoom]
                    });
                    for (m in n) n.hasOwnProperty(m) && "layout" !== m && "paint" !== m && "filter" !== m && "metadata" !== m && "minzoom" !== m && "maxzoom" !== m && (0 === m.indexOf("paint.") ? diffLayerPropertyChanges(n[m], i[m], o, t, m.slice(6), operations.setPaintProperty) : isEqual(n[m], i[m]) || o.push({
                        command: operations.setLayerProperty,
                        args: [t, m, i[m]]
                    }));
                    for (m in i) i.hasOwnProperty(m) && !n.hasOwnProperty(m) && "layout" !== m && "paint" !== m && "filter" !== m && "metadata" !== m && "minzoom" !== m && "maxzoom" !== m && (0 === m.indexOf("paint.") ? diffLayerPropertyChanges(n[m], i[m], o, t, m.slice(6), operations.setPaintProperty) : isEqual(n[m], i[m]) || o.push({
                        command: operations.setLayerProperty,
                        args: [t, m, i[m]]
                    }))
                } else o.push({
                    command: operations.removeLayer,
                    args: [t]
                }), p = d[d.lastIndexOf(t) + 1], o.push({command: operations.addLayer, args: [i, p]})
            }

            function diffStyles(e, r) {
                if (!e) return [{command: operations.setStyle, args: [r]}];
                var o = [];
                try {
                    if (!isEqual(e.version, r.version)) return [{command: operations.setStyle, args: [r]}];
                    isEqual(e.center, r.center) || o.push({
                        command: operations.setCenter,
                        args: [r.center]
                    }), isEqual(e.zoom, r.zoom) || o.push({
                        command: operations.setZoom,
                        args: [r.zoom]
                    }), isEqual(e.bearing, r.bearing) || o.push({
                        command: operations.setBearing,
                        args: [r.bearing]
                    }), isEqual(e.pitch, r.pitch) || o.push({
                        command: operations.setPitch,
                        args: [r.pitch]
                    }), isEqual(e.sprite, r.sprite) || o.push({
                        command: operations.setSprite,
                        args: [r.sprite]
                    }), isEqual(e.glyphs, r.glyphs) || o.push({
                        command: operations.setGlyphs,
                        args: [r.glyphs]
                    }), isEqual(e.transition, r.transition) || o.push({
                        command: operations.setTransition,
                        args: [r.transition]
                    }), isEqual(e.light, r.light) || o.push({command: operations.setLight, args: [r.light]});
                    var a = {}, s = [];
                    diffSources(e.sources, r.sources, s, a);
                    var t = [];
                    e.layers && e.layers.forEach(function (e) {
                        a[e.source] ? o.push({command: operations.removeLayer, args: [e.id]}) : t.push(e)
                    }), o = o.concat(s), diffLayers(t, r.layers, o)
                } catch (e) {
                    console.warn("Unable to compute style diff:", e), o = [{command: operations.setStyle, args: [r]}]
                }
                return o
            }

            var isEqual = _dereq_("lodash.isequal"), operations = {
                setStyle: "setStyle",
                addLayer: "addLayer",
                removeLayer: "removeLayer",
                setPaintProperty: "setPaintProperty",
                setLayoutProperty: "setLayoutProperty",
                setFilter: "setFilter",
                addSource: "addSource",
                removeSource: "removeSource",
                setLayerZoomRange: "setLayerZoomRange",
                setLayerProperty: "setLayerProperty",
                setCenter: "setCenter",
                setZoom: "setZoom",
                setBearing: "setBearing",
                setPitch: "setPitch",
                setSprite: "setSprite",
                setGlyphs: "setGlyphs",
                setTransition: "setTransition",
                setLight: "setLight"
            };
            module.exports = diffStyles, module.exports.operations = operations;
        }, {"lodash.isequal": 115}],
        103: [function (_dereq_, module, exports) {
            "use strict";

            function ValidationError(r, i) {
                for (var t = [], o = arguments.length - 2; o-- > 0;) t[o] = arguments[o + 2];
                this.message = (r ? r + ": " : "") + format.apply(format, t), null !== i && void 0 !== i && i.__line__ && (this.line = i.__line__)
            }

            var format = _dereq_("util").format;
            module.exports = ValidationError;
        }, {"util": 32}],
        104: [function (_dereq_, module, exports) {
            "use strict";

            function createFilter(e) {
                return new Function("f", "var p = (f && f.properties || {}); return " + compile(e))
            }

            function compile(e) {
                if (!e) return "true";
                var i = e[0];
                if (e.length <= 1) return "any" === i ? "false" : "true";
                var n = "==" === i ? compileComparisonOp(e[1], e[2], "===", !1) : "!=" === i ? compileComparisonOp(e[1], e[2], "!==", !1) : "<" === i || ">" === i || "<=" === i || ">=" === i ? compileComparisonOp(e[1], e[2], i, !0) : "any" === i ? compileLogicalOp(e.slice(1), "||") : "all" === i ? compileLogicalOp(e.slice(1), "&&") : "none" === i ? compileNegation(compileLogicalOp(e.slice(1), "||")) : "in" === i ? compileInOp(e[1], e.slice(2)) : "!in" === i ? compileNegation(compileInOp(e[1], e.slice(2))) : "has" === i ? compileHasOp(e[1]) : "!has" === i ? compileNegation(compileHasOp(e[1])) : "true";
                return "(" + n + ")"
            }

            function compilePropertyReference(e) {
                return "$type" === e ? "f.type" : "$id" === e ? "f.id" : "p[" + JSON.stringify(e) + "]"
            }

            function compileComparisonOp(e, i, n, r) {
                var o = compilePropertyReference(e), t = "$type" === e ? types.indexOf(i) : JSON.stringify(i);
                return (r ? "typeof " + o + "=== typeof " + t + "&&" : "") + o + n + t
            }

            function compileLogicalOp(e, i) {
                return e.map(compile).join(i)
            }

            function compileInOp(e, i) {
                "$type" === e && (i = i.map(function (e) {
                    return types.indexOf(e)
                }));
                var n = JSON.stringify(i.sort(compare)), r = compilePropertyReference(e);
                return i.length <= 200 ? n + ".indexOf(" + r + ") !== -1" : "function(v, a, i, j) {while (i <= j) { var m = (i + j) >> 1;    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;}return false; }(" + r + ", " + n + ",0," + (i.length - 1) + ")"
            }

            function compileHasOp(e) {
                return "$id" === e ? '"id" in f' : JSON.stringify(e) + " in p"
            }

            function compileNegation(e) {
                return "!(" + e + ")"
            }

            function compare(e, i) {
                return e < i ? -1 : e > i ? 1 : 0
            }

            module.exports = createFilter;
            var types = ["Unknown", "Point", "LineString", "Polygon"];
        }, {}],
        105: [function (_dereq_, module, exports) {
            "use strict";

            function xyz2lab(r) {
                return r > t3 ? Math.pow(r, 1 / 3) : r / t2 + t0
            }

            function lab2xyz(r) {
                return r > t1 ? r * r * r : t2 * (r - t0)
            }

            function xyz2rgb(r) {
                return 255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055)
            }

            function rgb2xyz(r) {
                return r /= 255, r <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
            }

            function rgbToLab(r) {
                var t = rgb2xyz(r[0]), a = rgb2xyz(r[1]), n = rgb2xyz(r[2]),
                    b = xyz2lab((.4124564 * t + .3575761 * a + .1804375 * n) / Xn),
                    o = xyz2lab((.2126729 * t + .7151522 * a + .072175 * n) / Yn),
                    g = xyz2lab((.0193339 * t + .119192 * a + .9503041 * n) / Zn);
                return [116 * o - 16, 500 * (b - o), 200 * (o - g), r[3]]
            }

            function labToRgb(r) {
                var t = (r[0] + 16) / 116, a = isNaN(r[1]) ? t : t + r[1] / 500, n = isNaN(r[2]) ? t : t - r[2] / 200;
                return t = Yn * lab2xyz(t), a = Xn * lab2xyz(a), n = Zn * lab2xyz(n), [xyz2rgb(3.2404542 * a - 1.5371385 * t - .4985314 * n), xyz2rgb(-.969266 * a + 1.8760108 * t + .041556 * n), xyz2rgb(.0556434 * a - .2040259 * t + 1.0572252 * n), r[3]]
            }

            function rgbToHcl(r) {
                var t = rgbToLab(r), a = t[0], n = t[1], b = t[2], o = Math.atan2(b, n) * rad2deg;
                return [o < 0 ? o + 360 : o, Math.sqrt(n * n + b * b), a, r[3]]
            }

            function hclToRgb(r) {
                var t = r[0] * deg2rad, a = r[1], n = r[2];
                return labToRgb([n, Math.cos(t) * a, Math.sin(t) * a, r[3]])
            }

            var Xn = .95047, Yn = 1, Zn = 1.08883, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1,
                deg2rad = Math.PI / 180, rad2deg = 180 / Math.PI;
            module.exports = {lab: {forward: rgbToLab, reverse: labToRgb}, hcl: {forward: rgbToHcl, reverse: hclToRgb}};
        }, {}],
        106: [function (_dereq_, module, exports) {
            "use strict";

            function identityFunction(t) {
                return t
            }

            function createFunction(t, e) {
                var o, n = "color" === e.type;
                if (isFunctionDefinition(t)) {
                    var r = t.stops && "object" == typeof t.stops[0][0], a = r || void 0 !== t.property, i = r || !a,
                        s = t.type || ("interpolated" === e.function ? "exponential" : "interval");
                    n && (t = extend({}, t), t.stops && (t.stops = t.stops.map(function (t) {
                        return [t[0], parseColor(t[1])]
                    })), t.default ? t.default = parseColor(t.default) : t.default = parseColor(e.default));
                    var u, p, l;
                    if ("exponential" === s) u = evaluateExponentialFunction; else if ("interval" === s) u = evaluateIntervalFunction; else if ("categorical" === s) {
                        u = evaluateCategoricalFunction, p = Object.create(null);
                        for (var c = 0, f = t.stops; c < f.length; c += 1) {
                            var v = f[c];
                            p[v[0]] = v[1]
                        }
                        l = typeof t.stops[0][0]
                    } else {
                        if ("identity" !== s) throw new Error('Unknown function type "' + s + '"');
                        u = evaluateIdentityFunction
                    }
                    var d;
                    if (t.colorSpace && "rgb" !== t.colorSpace) {
                        if (!colorSpaces[t.colorSpace]) throw new Error("Unknown color space: " + t.colorSpace);
                        var y = colorSpaces[t.colorSpace];
                        t = JSON.parse(JSON.stringify(t));
                        for (var F = 0; F < t.stops.length; F++) t.stops[F] = [t.stops[F][0], y.forward(t.stops[F][1])];
                        d = y.reverse
                    } else d = identityFunction;
                    if (r) {
                        for (var h = {}, g = [], C = 0; C < t.stops.length; C++) {
                            var m = t.stops[C], S = m[0].zoom;
                            void 0 === h[S] && (h[S] = {
                                zoom: S,
                                type: t.type,
                                property: t.property,
                                default: t.default,
                                stops: []
                            }, g.push(S)), h[S].stops.push([m[0].value, m[1]])
                        }
                        for (var T = [], x = 0, b = g; x < b.length; x += 1) {
                            var q = b[x];
                            T.push([h[q].zoom, createFunction(h[q], e)])
                        }
                        o = function (o, n) {
                            return d(evaluateExponentialFunction({stops: T, base: t.base}, e, o)(o, n))
                        }, o.isFeatureConstant = !1, o.isZoomConstant = !1
                    } else i ? (o = function (o) {
                        return d(u(t, e, o, p, l))
                    }, o.isFeatureConstant = !0, o.isZoomConstant = !1) : (o = function (o, n) {
                        var r = n[t.property];
                        return void 0 === r ? coalesce(t.default, e.default) : d(u(t, e, r, p, l))
                    }, o.isFeatureConstant = !1, o.isZoomConstant = !0)
                } else n && t && (t = parseColor(t)), o = function () {
                    return t
                }, o.isFeatureConstant = !0, o.isZoomConstant = !0;
                return o
            }

            function coalesce(t, e, o) {
                return void 0 !== t ? t : void 0 !== e ? e : void 0 !== o ? o : void 0
            }

            function evaluateCategoricalFunction(t, e, o, n, r) {
                var a = typeof o === r ? n[o] : void 0;
                return coalesce(a, t.default, e.default)
            }

            function evaluateIntervalFunction(t, e, o) {
                if ("number" !== getType(o)) return coalesce(t.default, e.default);
                var n = t.stops.length;
                if (1 === n) return t.stops[0][1];
                if (o <= t.stops[0][0]) return t.stops[0][1];
                if (o >= t.stops[n - 1][0]) return t.stops[n - 1][1];
                var r = findStopLessThanOrEqualTo(t.stops, o);
                return t.stops[r][1]
            }

            function evaluateExponentialFunction(t, e, o) {
                var n = void 0 !== t.base ? t.base : 1;
                if ("number" !== getType(o)) return coalesce(t.default, e.default);
                var r = t.stops.length;
                if (1 === r) return t.stops[0][1];
                if (o <= t.stops[0][0]) return t.stops[0][1];
                if (o >= t.stops[r - 1][0]) return t.stops[r - 1][1];
                var a = findStopLessThanOrEqualTo(t.stops, o),
                    i = interpolationFactor(o, n, t.stops[a][0], t.stops[a + 1][0]), s = t.stops[a][1],
                    u = t.stops[a + 1][1], p = interpolate[e.type] || identityFunction;
                return "function" == typeof s ? function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var o = s.apply(void 0, t), n = u.apply(void 0, t);
                    if (void 0 !== o && void 0 !== n) return p(o, n, i)
                } : p(s, u, i)
            }

            function evaluateIdentityFunction(t, e, o) {
                return "color" === e.type ? o = parseColor(o) : getType(o) !== e.type && (o = void 0), coalesce(o, t.default, e.default)
            }

            function findStopLessThanOrEqualTo(t, e) {
                for (var o, n, r = t.length, a = 0, i = r - 1, s = 0; a <= i;) {
                    if (s = Math.floor((a + i) / 2), o = t[s][0], n = t[s + 1][0], e === o || e > o && e < n) return s;
                    o < e ? a = s + 1 : o > e && (i = s - 1)
                }
                return Math.max(s - 1, 0)
            }

            function isFunctionDefinition(t) {
                return "object" == typeof t && (t.stops || "identity" === t.type)
            }

            function interpolationFactor(t, e, o, n) {
                var r = n - o, a = t - o;
                return 1 === e ? a / r : (Math.pow(e, a) - 1) / (Math.pow(e, r) - 1)
            }

            var colorSpaces = _dereq_("./color_spaces"), parseColor = _dereq_("../util/parse_color"),
                extend = _dereq_("../util/extend"), getType = _dereq_("../util/get_type"),
                interpolate = _dereq_("../util/interpolate");
            module.exports = createFunction, module.exports.isFunctionDefinition = isFunctionDefinition, module.exports.interpolationFactor = interpolationFactor, module.exports.findStopLessThanOrEqualTo = findStopLessThanOrEqualTo;
        }, {
            "../util/extend": 120,
            "../util/get_type": 121,
            "../util/interpolate": 122,
            "../util/parse_color": 123,
            "./color_spaces": 105
        }],
        107: [function (_dereq_, module, exports) {
            "use strict";

            function key(r) {
                return stringify(refProperties.map(function (e) {
                    return r[e]
                }))
            }

            function groupByLayout(r) {
                for (var e = {}, t = 0; t < r.length; t++) {
                    var i = key(r[t]), u = e[i];
                    u || (u = e[i] = []), u.push(r[t])
                }
                var n = [];
                for (var o in e) n.push(e[o]);
                return n
            }

            var refProperties = _dereq_("./util/ref_properties"), stringify = _dereq_("fast-stable-stringify");
            module.exports = groupByLayout;
        }, {"./util/ref_properties": 124, "fast-stable-stringify": 109}],
        108: [function (_dereq_, module, exports) {
            function clamp_css_byte(e) {
                return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
            }

            function clamp_css_float(e) {
                return e < 0 ? 0 : e > 1 ? 1 : e
            }

            function parse_css_int(e) {
                return clamp_css_byte("%" === e[e.length - 1] ? parseFloat(e) / 100 * 255 : parseInt(e))
            }

            function parse_css_float(e) {
                return clamp_css_float("%" === e[e.length - 1] ? parseFloat(e) / 100 : parseFloat(e))
            }

            function css_hue_to_rgb(e, r, l) {
                return l < 0 ? l += 1 : l > 1 && (l -= 1), 6 * l < 1 ? e + (r - e) * l * 6 : 2 * l < 1 ? r : 3 * l < 2 ? e + (r - e) * (2 / 3 - l) * 6 : e
            }

            function parseCSSColor(e) {
                var r = e.replace(/ /g, "").toLowerCase();
                if (r in kCSSColorTable) return kCSSColorTable[r].slice();
                if ("#" === r[0]) {
                    if (4 === r.length) {
                        var l = parseInt(r.substr(1), 16);
                        return l >= 0 && l <= 4095 ? [(3840 & l) >> 4 | (3840 & l) >> 8, 240 & l | (240 & l) >> 4, 15 & l | (15 & l) << 4, 1] : null
                    }
                    if (7 === r.length) {
                        var l = parseInt(r.substr(1), 16);
                        return l >= 0 && l <= 16777215 ? [(16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, 1] : null
                    }
                    return null
                }
                var a = r.indexOf("("), t = r.indexOf(")");
                if (a !== -1 && t + 1 === r.length) {
                    var n = r.substr(0, a), s = r.substr(a + 1, t - (a + 1)).split(","), o = 1;
                    switch (n) {
                        case"rgba":
                            if (4 !== s.length) return null;
                            o = parse_css_float(s.pop());
                        case"rgb":
                            return 3 !== s.length ? null : [parse_css_int(s[0]), parse_css_int(s[1]), parse_css_int(s[2]), o];
                        case"hsla":
                            if (4 !== s.length) return null;
                            o = parse_css_float(s.pop());
                        case"hsl":
                            if (3 !== s.length) return null;
                            var i = (parseFloat(s[0]) % 360 + 360) % 360 / 360, u = parse_css_float(s[1]),
                                g = parse_css_float(s[2]), d = g <= .5 ? g * (u + 1) : g + u - g * u, c = 2 * g - d;
                            return [clamp_css_byte(255 * css_hue_to_rgb(c, d, i + 1 / 3)), clamp_css_byte(255 * css_hue_to_rgb(c, d, i)), clamp_css_byte(255 * css_hue_to_rgb(c, d, i - 1 / 3)), o];
                        default:
                            return null
                    }
                }
                return null
            }

            var kCSSColorTable = {
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
                rebeccapurple: [102, 51, 153, 1],
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
            try {
                exports.parseCSSColor = parseCSSColor
            } catch (e) {
            }
        }, {}],
        109: [function (_dereq_, module, exports) {
            function sss(r) {
                var e, t, s, n, u, a;
                switch (typeof r) {
                    case"object":
                        if (null === r) return null;
                        if (isArray(r)) {
                            for (s = "[", t = r.length - 1, e = 0; e < t; e++) s += sss(r[e]) + ",";
                            return t > -1 && (s += sss(r[e])), s + "]"
                        }
                        for (n = objKeys(r).sort(), t = n.length, s = "{", u = n[e = 0], a = t > 0 && void 0 !== r[u]; e < t;) a ? (s += '"' + u.replace(strReg, strReplace) + '":' + sss(r[u]), u = n[++e], a = e < t && void 0 !== r[u], a && (s += ",")) : (u = n[++e], a = e < t && void 0 !== r[u]);
                        return s + "}";
                    case"undefined":
                        return null;
                    case"string":
                        return '"' + r.replace(strReg, strReplace) + '"';
                    default:
                        return r
                }
            }

            var toString = {}.toString, isArray = Array.isArray || function (r) {
                return "[object Array]" === toString.call(r)
            }, objKeys = Object.keys || function (r) {
                var e = [];
                for (var t in r) r.hasOwnProperty(t) && e.push(t);
                return e
            }, strReg = /[\u0000-\u001f"\\]/g, strReplace = function (r) {
                var e = r.charCodeAt(0);
                switch (e) {
                    case 34:
                        return '\\"';
                    case 92:
                        return "\\\\";
                    case 12:
                        return "\\f";
                    case 10:
                        return "\\n";
                    case 13:
                        return "\\r";
                    case 9:
                        return "\\t";
                    case 8:
                        return "\\b";
                    default:
                        return e > 15 ? "\\u00" + e.toString(16) : "\\u000" + e.toString(16)
                }
            };
            module.exports = function (r) {
                if (void 0 !== r) return "" + sss(r)
            }, module.exports.stringSearch = strReg, module.exports.stringReplace = strReplace;
        }, {}],
        110: [function (_dereq_, module, exports) {
            function isObjectLike(r) {
                return !!r && "object" == typeof r
            }

            function arraySome(r, e) {
                for (var a = -1, t = r.length; ++a < t;) if (e(r[a], a, r)) return !0;
                return !1
            }

            function baseIsEqual(r, e, a, t, o, n) {
                return r === e || (null == r || null == e || !isObject(r) && !isObjectLike(e) ? r !== r && e !== e : baseIsEqualDeep(r, e, baseIsEqual, a, t, o, n))
            }

            function baseIsEqualDeep(r, e, a, t, o, n, u) {
                var c = isArray(r), s = isArray(e), i = arrayTag, g = arrayTag;
                c || (i = objToString.call(r), i == argsTag ? i = objectTag : i != objectTag && (c = isTypedArray(r))), s || (g = objToString.call(e), g == argsTag ? g = objectTag : g != objectTag && (s = isTypedArray(e)));
                var b = i == objectTag, l = g == objectTag, f = i == g;
                if (f && !c && !b) return equalByTag(r, e, i);
                if (!o) {
                    var y = b && hasOwnProperty.call(r, "__wrapped__"), T = l && hasOwnProperty.call(e, "__wrapped__");
                    if (y || T) return a(y ? r.value() : r, T ? e.value() : e, t, o, n, u)
                }
                if (!f) return !1;
                n || (n = []), u || (u = []);
                for (var j = n.length; j--;) if (n[j] == r) return u[j] == e;
                n.push(r), u.push(e);
                var p = (c ? equalArrays : equalObjects)(r, e, a, t, o, n, u);
                return n.pop(), u.pop(), p
            }

            function equalArrays(r, e, a, t, o, n, u) {
                var c = -1, s = r.length, i = e.length;
                if (s != i && !(o && i > s)) return !1;
                for (; ++c < s;) {
                    var g = r[c], b = e[c], l = t ? t(o ? b : g, o ? g : b, c) : void 0;
                    if (void 0 !== l) {
                        if (l) continue;
                        return !1
                    }
                    if (o) {
                        if (!arraySome(e, function (r) {
                                return g === r || a(g, r, t, o, n, u)
                            })) return !1
                    } else if (g !== b && !a(g, b, t, o, n, u)) return !1
                }
                return !0
            }

            function equalByTag(r, e, a) {
                switch (a) {
                    case boolTag:
                    case dateTag:
                        return +r == +e;
                    case errorTag:
                        return r.name == e.name && r.message == e.message;
                    case numberTag:
                        return r != +r ? e != +e : r == +e;
                    case regexpTag:
                    case stringTag:
                        return r == e + ""
                }
                return !1
            }

            function equalObjects(r, e, a, t, o, n, u) {
                var c = keys(r), s = c.length, i = keys(e), g = i.length;
                if (s != g && !o) return !1;
                for (var b = s; b--;) {
                    var l = c[b];
                    if (!(o ? l in e : hasOwnProperty.call(e, l))) return !1
                }
                for (var f = o; ++b < s;) {
                    l = c[b];
                    var y = r[l], T = e[l], j = t ? t(o ? T : y, o ? y : T, l) : void 0;
                    if (!(void 0 === j ? a(y, T, t, o, n, u) : j)) return !1;
                    f || (f = "constructor" == l)
                }
                if (!f) {
                    var p = r.constructor, v = e.constructor;
                    if (p != v && "constructor" in r && "constructor" in e && !("function" == typeof p && p instanceof p && "function" == typeof v && v instanceof v)) return !1
                }
                return !0
            }

            function isObject(r) {
                var e = typeof r;
                return !!r && ("object" == e || "function" == e)
            }

            var isArray = _dereq_("lodash.isarray"), isTypedArray = _dereq_("lodash.istypedarray"),
                keys = _dereq_("lodash.keys"), argsTag = "[object Arguments]", arrayTag = "[object Array]",
                boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]",
                numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]",
                stringTag = "[object String]", objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty, objToString = objectProto.toString;
            module.exports = baseIsEqual;
        }, {"lodash.isarray": 114, "lodash.istypedarray": 116, "lodash.keys": 117}],
        111: [function (_dereq_, module, exports) {
            function bindCallback(n, t, r) {
                if ("function" != typeof n) return identity;
                if (void 0 === t) return n;
                switch (r) {
                    case 1:
                        return function (r) {
                            return n.call(t, r)
                        };
                    case 3:
                        return function (r, e, u) {
                            return n.call(t, r, e, u)
                        };
                    case 4:
                        return function (r, e, u, c) {
                            return n.call(t, r, e, u, c)
                        };
                    case 5:
                        return function (r, e, u, c, i) {
                            return n.call(t, r, e, u, c, i)
                        }
                }
                return function () {
                    return n.apply(t, arguments)
                }
            }

            function identity(n) {
                return n
            }

            module.exports = bindCallback;
        }, {}],
        112: [function (_dereq_, module, exports) {
            function isObjectLike(t) {
                return !!t && "object" == typeof t
            }

            function getNative(t, o) {
                var e = null == t ? void 0 : t[o];
                return isNative(e) ? e : void 0
            }

            function isFunction(t) {
                return isObject(t) && objToString.call(t) == funcTag
            }

            function isObject(t) {
                var o = typeof t;
                return !!t && ("object" == o || "function" == o)
            }

            function isNative(t) {
                return null != t && (isFunction(t) ? reIsNative.test(fnToString.call(t)) : isObjectLike(t) && reIsHostCtor.test(t))
            }

            var funcTag = "[object Function]", reIsHostCtor = /^\[object .+?Constructor\]$/,
                objectProto = Object.prototype, fnToString = Function.prototype.toString,
                hasOwnProperty = objectProto.hasOwnProperty, objToString = objectProto.toString,
                reIsNative = RegExp("^" + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            module.exports = getNative;
        }, {}],
        113: [function (_dereq_, module, exports) {
            function isArguments(t) {
                return isArrayLikeObject(t) && hasOwnProperty.call(t, "callee") && (!propertyIsEnumerable.call(t, "callee") || objectToString.call(t) == argsTag)
            }

            function isArrayLike(t) {
                return null != t && isLength(t.length) && !isFunction(t)
            }

            function isArrayLikeObject(t) {
                return isObjectLike(t) && isArrayLike(t)
            }

            function isFunction(t) {
                var e = isObject(t) ? objectToString.call(t) : "";
                return e == funcTag || e == genTag
            }

            function isLength(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER
            }

            function isObject(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function isObjectLike(t) {
                return !!t && "object" == typeof t
            }

            var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]",
                genTag = "[object GeneratorFunction]", objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString,
                propertyIsEnumerable = objectProto.propertyIsEnumerable;
            module.exports = isArguments;
        }, {}],
        114: [function (_dereq_, module, exports) {
            function isObjectLike(t) {
                return !!t && "object" == typeof t
            }

            function getNative(t, r) {
                var e = null == t ? void 0 : t[r];
                return isNative(e) ? e : void 0
            }

            function isLength(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER
            }

            function isFunction(t) {
                return isObject(t) && objToString.call(t) == funcTag
            }

            function isObject(t) {
                var r = typeof t;
                return !!t && ("object" == r || "function" == r)
            }

            function isNative(t) {
                return null != t && (isFunction(t) ? reIsNative.test(fnToString.call(t)) : isObjectLike(t) && reIsHostCtor.test(t))
            }

            var arrayTag = "[object Array]", funcTag = "[object Function]",
                reIsHostCtor = /^\[object .+?Constructor\]$/, objectProto = Object.prototype,
                fnToString = Function.prototype.toString, hasOwnProperty = objectProto.hasOwnProperty,
                objToString = objectProto.toString,
                reIsNative = RegExp("^" + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                nativeIsArray = getNative(Array, "isArray"), MAX_SAFE_INTEGER = 9007199254740991,
                isArray = nativeIsArray || function (t) {
                    return isObjectLike(t) && isLength(t.length) && objToString.call(t) == arrayTag
                };
            module.exports = isArray;
        }, {}],
        115: [function (_dereq_, module, exports) {
            function isEqual(a, l, i, e) {
                i = "function" == typeof i ? bindCallback(i, e, 3) : void 0;
                var s = i ? i(a, l) : void 0;
                return void 0 === s ? baseIsEqual(a, l, i) : !!s
            }

            var baseIsEqual = _dereq_("lodash._baseisequal"), bindCallback = _dereq_("lodash._bindcallback");
            module.exports = isEqual;
        }, {"lodash._baseisequal": 110, "lodash._bindcallback": 111}],
        116: [function (_dereq_, module, exports) {
            function isLength(a) {
                return "number" == typeof a && a > -1 && a % 1 == 0 && a <= MAX_SAFE_INTEGER
            }

            function isObjectLike(a) {
                return !!a && "object" == typeof a
            }

            function isTypedArray(a) {
                return isObjectLike(a) && isLength(a.length) && !!typedArrayTags[objectToString.call(a)]
            }

            var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", arrayTag = "[object Array]",
                boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]",
                funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]",
                objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]",
                stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]",
                dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]",
                float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]",
                int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]",
                uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]",
                uint32Tag = "[object Uint32Array]", typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            var objectProto = Object.prototype, objectToString = objectProto.toString;
            module.exports = isTypedArray;
        }, {}],
        117: [function (_dereq_, module, exports) {
            function baseProperty(e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            }

            function isArrayLike(e) {
                return null != e && isLength(getLength(e))
            }

            function isIndex(e, t) {
                return e = "number" == typeof e || reIsUint.test(e) ? +e : -1, t = null == t ? MAX_SAFE_INTEGER : t, e > -1 && e % 1 == 0 && e < t
            }

            function isLength(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER
            }

            function shimKeys(e) {
                for (var t = keysIn(e), r = t.length, n = r && e.length, s = !!n && isLength(n) && (isArray(e) || isArguments(e)), o = -1, i = []; ++o < r;) {
                    var u = t[o];
                    (s && isIndex(u, n) || hasOwnProperty.call(e, u)) && i.push(u)
                }
                return i
            }

            function isObject(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function keysIn(e) {
                if (null == e) return [];
                isObject(e) || (e = Object(e));
                var t = e.length;
                t = t && isLength(t) && (isArray(e) || isArguments(e)) && t || 0;
                for (var r = e.constructor, n = -1, s = "function" == typeof r && r.prototype === e, o = Array(t), i = t > 0; ++n < t;) o[n] = n + "";
                for (var u in e) i && isIndex(u, t) || "constructor" == u && (s || !hasOwnProperty.call(e, u)) || o.push(u);
                return o
            }

            var getNative = _dereq_("lodash._getnative"), isArguments = _dereq_("lodash.isarguments"),
                isArray = _dereq_("lodash.isarray"), reIsUint = /^\d+$/, objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty, nativeKeys = getNative(Object, "keys"),
                MAX_SAFE_INTEGER = 9007199254740991, getLength = baseProperty("length"),
                keys = nativeKeys ? function (e) {
                    var t = null == e ? void 0 : e.constructor;
                    return "function" == typeof t && t.prototype === e || "function" != typeof e && isArrayLike(e) ? shimKeys(e) : isObject(e) ? nativeKeys(e) : []
                } : shimKeys;
            module.exports = keys;
        }, {"lodash._getnative": 112, "lodash.isarguments": 113, "lodash.isarray": 114}],
        118: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = _dereq_("./v8.json");
        }, {"./v8.json": 119}],
        119: [function (_dereq_, module, exports) {
            module.exports = {
                "$version": 8,
                "$root": {
                    "version": {"required": true, "type": "enum", "values": [8]},
                    "name": {"type": "string"},
                    "metadata": {"type": "*"},
                    "center": {"type": "array", "value": "number"},
                    "zoom": {"type": "number"},
                    "bearing": {"type": "number", "default": 0, "period": 360, "units": "degrees"},
                    "pitch": {"type": "number", "default": 0, "units": "degrees"},
                    "light": {"type": "light"},
                    "sources": {"required": true, "type": "sources"},
                    "sprite": {"type": "string"},
                    "glyphs": {"type": "string"},
                    "transition": {"type": "transition"},
                    "layers": {"required": true, "type": "array", "value": "layer"}
                },
                "sources": {"*": {"type": "source"}},
                "source": ["source_tile", "source_geojson", "source_video", "source_image", "source_canvas"],
                "source_tile": {
                    "type": {"required": true, "type": "enum", "values": {"vector": {}, "raster": {}}},
                    "url": {"type": "string"},
                    "tiles": {"type": "array", "value": "string"},
                    "minzoom": {"type": "number", "default": 0},
                    "maxzoom": {"type": "number", "default": 22},
                    "tileSize": {"type": "number", "default": 512, "units": "pixels"},
                    "*": {"type": "*"}
                },
                "source_geojson": {
                    "type": {"required": true, "type": "enum", "values": {"geojson": {}}},
                    "data": {"type": "*"},
                    "maxzoom": {"type": "number", "default": 18},
                    "buffer": {"type": "number", "default": 128, "maximum": 512, "minimum": 0},
                    "tolerance": {"type": "number", "default": 0.375},
                    "cluster": {"type": "boolean", "default": false},
                    "clusterRadius": {"type": "number", "default": 50, "minimum": 0},
                    "clusterMaxZoom": {"type": "number"}
                },
                "source_video": {
                    "type": {"required": true, "type": "enum", "values": {"video": {}}},
                    "urls": {"required": true, "type": "array", "value": "string"},
                    "coordinates": {
                        "required": true,
                        "type": "array",
                        "length": 4,
                        "value": {"type": "array", "length": 2, "value": "number"}
                    }
                },
                "source_image": {
                    "type": {"required": true, "type": "enum", "values": {"image": {}}},
                    "url": {"required": true, "type": "string"},
                    "coordinates": {
                        "required": true,
                        "type": "array",
                        "length": 4,
                        "value": {"type": "array", "length": 2, "value": "number"}
                    }
                },
                "source_canvas": {
                    "type": {"required": true, "type": "enum", "values": {"canvas": {}}},
                    "coordinates": {
                        "required": true,
                        "type": "array",
                        "length": 4,
                        "value": {"type": "array", "length": 2, "value": "number"}
                    },
                    "animate": {"type": "boolean", "default": "true"},
                    "canvas": {"type": "string", "required": true}
                },
                "layer": {
                    "id": {"type": "string", "required": true},
                    "type": {
                        "type": "enum",
                        "values": {
                            "fill": {},
                            "line": {},
                            "symbol": {},
                            "circle": {},
                            "fill-extrusion": {},
                            "raster": {},
                            "background": {}
                        }
                    },
                    "metadata": {"type": "*"},
                    "ref": {"type": "string"},
                    "source": {"type": "string"},
                    "source-layer": {"type": "string"},
                    "minzoom": {"type": "number", "minimum": 0, "maximum": 24},
                    "maxzoom": {"type": "number", "minimum": 0, "maximum": 24},
                    "filter": {"type": "filter"},
                    "layout": {"type": "layout"},
                    "paint": {"type": "paint"},
                    "paint.*": {"type": "paint"}
                },
                "layout": ["layout_fill", "layout_line", "layout_circle", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_background"],
                "layout_background": {
                    "visibility": {
                        "type": "enum",
                        "values": {"visible": {}, "none": {}},
                        "default": "visible"
                    }
                },
                "layout_fill": {
                    "visibility": {
                        "type": "enum",
                        "values": {"visible": {}, "none": {}},
                        "default": "visible"
                    }
                },
                "layout_circle": {
                    "visibility": {
                        "type": "enum",
                        "values": {"visible": {}, "none": {}},
                        "default": "visible"
                    }
                },
                "layout_fill-extrusion": {
                    "visibility": {
                        "type": "enum",
                        "values": {"visible": {}, "none": {}},
                        "default": "visible"
                    }
                },
                "layout_line": {
                    "line-cap": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"butt": {}, "round": {}, "square": {}},
                        "default": "butt"
                    },
                    "line-join": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"bevel": {}, "round": {}, "miter": {}},
                        "default": "miter"
                    },
                    "line-miter-limit": {
                        "type": "number",
                        "default": 2,
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": [{"line-join": "miter"}]
                    },
                    "line-round-limit": {
                        "type": "number",
                        "default": 1.05,
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": [{"line-join": "round"}]
                    },
                    "visibility": {"type": "enum", "values": {"visible": {}, "none": {}}, "default": "visible"}
                },
                "layout_symbol": {
                    "symbol-placement": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"point": {}, "line": {}},
                        "default": "point"
                    },
                    "symbol-spacing": {
                        "type": "number",
                        "default": 250,
                        "minimum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "units": "pixels",
                        "requires": [{"symbol-placement": "line"}]
                    },
                    "symbol-avoid-edges": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false
                    },
                    "icon-allow-overlap": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["icon-image"]
                    },
                    "icon-ignore-placement": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["icon-image"]
                    },
                    "icon-optional": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["icon-image", "text-field"]
                    },
                    "icon-rotation-alignment": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}, "auto": {}},
                        "default": "auto",
                        "requires": ["icon-image"]
                    },
                    "icon-size": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "units": "factor of the original icon size",
                        "requires": ["icon-image"]
                    },
                    "icon-text-fit": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"none": {}, "width": {}, "height": {}, "both": {}},
                        "default": "none",
                        "requires": ["icon-image", "text-field"]
                    },
                    "icon-text-fit-padding": {
                        "type": "array",
                        "value": "number",
                        "length": 4,
                        "default": [0, 0, 0, 0],
                        "units": "pixels",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["icon-image", "text-field", {"icon-text-fit": ["both", "width", "height"]}]
                    },
                    "icon-image": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "property-function": true,
                        "tokens": true
                    },
                    "icon-rotate": {
                        "type": "number",
                        "default": 0,
                        "period": 360,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "units": "degrees",
                        "requires": ["icon-image"]
                    },
                    "icon-padding": {
                        "type": "number",
                        "default": 2,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "units": "pixels",
                        "requires": ["icon-image"]
                    },
                    "icon-keep-upright": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["icon-image", {"icon-rotation-alignment": "map"}, {"symbol-placement": "line"}]
                    },
                    "icon-offset": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "requires": ["icon-image"]
                    },
                    "text-pitch-alignment": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}, "auto": {}},
                        "default": "auto",
                        "requires": ["text-field"]
                    },
                    "text-rotation-alignment": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}, "auto": {}},
                        "default": "auto",
                        "requires": ["text-field"]
                    },
                    "text-field": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "property-function": true,
                        "default": "",
                        "tokens": true
                    },
                    "text-font": {
                        "type": "array",
                        "value": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": ["Open Sans Regular", "Arial Unicode MS Regular"],
                        "requires": ["text-field"]
                    },
                    "text-size": {
                        "type": "number",
                        "default": 16,
                        "minimum": 0,
                        "units": "pixels",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "requires": ["text-field"]
                    },
                    "text-max-width": {
                        "type": "number",
                        "default": 10,
                        "minimum": 0,
                        "units": "ems",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["text-field"]
                    },
                    "text-line-height": {
                        "type": "number",
                        "default": 1.2,
                        "units": "ems",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["text-field"]
                    },
                    "text-letter-spacing": {
                        "type": "number",
                        "default": 0,
                        "units": "ems",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["text-field"]
                    },
                    "text-justify": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"left": {}, "center": {}, "right": {}},
                        "default": "center",
                        "requires": ["text-field"]
                    },
                    "text-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {
                            "center": {},
                            "left": {},
                            "right": {},
                            "top": {},
                            "bottom": {},
                            "top-left": {},
                            "top-right": {},
                            "bottom-left": {},
                            "bottom-right": {}
                        },
                        "default": "center",
                        "requires": ["text-field"]
                    },
                    "text-max-angle": {
                        "type": "number",
                        "default": 45,
                        "units": "degrees",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["text-field", {"symbol-placement": "line"}]
                    },
                    "text-rotate": {
                        "type": "number",
                        "default": 0,
                        "period": 360,
                        "units": "degrees",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "requires": ["text-field"]
                    },
                    "text-padding": {
                        "type": "number",
                        "default": 2,
                        "minimum": 0,
                        "units": "pixels",
                        "function": "interpolated",
                        "zoom-function": true,
                        "requires": ["text-field"]
                    },
                    "text-keep-upright": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": true,
                        "requires": ["text-field", {"text-rotation-alignment": "map"}, {"symbol-placement": "line"}]
                    },
                    "text-transform": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "property-function": true,
                        "values": {"none": {}, "uppercase": {}, "lowercase": {}},
                        "default": "none",
                        "requires": ["text-field"]
                    },
                    "text-offset": {
                        "type": "array",
                        "value": "number",
                        "units": "ems",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "length": 2,
                        "default": [0, 0],
                        "requires": ["text-field"]
                    },
                    "text-allow-overlap": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["text-field"]
                    },
                    "text-ignore-placement": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["text-field"]
                    },
                    "text-optional": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": false,
                        "requires": ["text-field", "icon-image"]
                    },
                    "visibility": {"type": "enum", "values": {"visible": {}, "none": {}}, "default": "visible"}
                },
                "layout_raster": {
                    "visibility": {
                        "type": "enum",
                        "values": {"visible": {}, "none": {}},
                        "default": "visible"
                    }
                },
                "filter": {"type": "array", "value": "*"},
                "filter_operator": {
                    "type": "enum",
                    "values": {
                        "==": {},
                        "!=": {},
                        ">": {},
                        ">=": {},
                        "<": {},
                        "<=": {},
                        "in": {},
                        "!in": {},
                        "all": {},
                        "any": {},
                        "none": {},
                        "has": {},
                        "!has": {}
                    }
                },
                "geometry_type": {"type": "enum", "values": {"Point": {}, "LineString": {}, "Polygon": {}}},
                "function": {
                    "stops": {"type": "array", "value": "function_stop"},
                    "base": {"type": "number", "default": 1, "minimum": 0},
                    "property": {"type": "string", "default": "$zoom"},
                    "type": {
                        "type": "enum",
                        "values": {"identity": {}, "exponential": {}, "interval": {}, "categorical": {}},
                        "default": "exponential"
                    },
                    "colorSpace": {"type": "enum", "values": {"rgb": {}, "lab": {}, "hcl": {}}, "default": "rgb"},
                    "default": {"type": "*", "required": false}
                },
                "function_stop": {
                    "type": "array",
                    "minimum": 0,
                    "maximum": 22,
                    "value": ["number", "color"],
                    "length": 2
                },
                "light": {
                    "anchor": {
                        "type": "enum",
                        "default": "viewport",
                        "values": {"map": {}, "viewport": {}},
                        "transition": false,
                        "zoom-function": true,
                        "property-function": false,
                        "function": "piecewise-constant"
                    },
                    "position": {
                        "type": "array",
                        "default": [1.15, 210, 30],
                        "length": 3,
                        "value": "number",
                        "transition": true,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": false
                    },
                    "color": {
                        "type": "color",
                        "default": "#ffffff",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": false,
                        "transition": true
                    },
                    "intensity": {
                        "type": "number",
                        "default": 0.5,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": false,
                        "transition": true
                    }
                },
                "paint": ["paint_fill", "paint_line", "paint_circle", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_background"],
                "paint_fill": {
                    "fill-antialias": {
                        "type": "boolean",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "default": true
                    },
                    "fill-opacity": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "transition": true
                    },
                    "fill-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": [{"!": "fill-pattern"}]
                    },
                    "fill-outline-color": {
                        "type": "color",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": [{"!": "fill-pattern"}, {"fill-antialias": true}]
                    },
                    "fill-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "fill-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["fill-translate"]
                    },
                    "fill-pattern": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "transition": true
                    }
                },
                "paint_fill-extrusion": {
                    "fill-extrusion-opacity": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": false,
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "transition": true
                    },
                    "fill-extrusion-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": [{"!": "fill-extrusion-pattern"}]
                    },
                    "fill-extrusion-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "fill-extrusion-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["fill-extrusion-translate"]
                    },
                    "fill-extrusion-pattern": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "transition": true
                    },
                    "fill-extrusion-height": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "default": 0,
                        "minimum": 0,
                        "maximum": 65535,
                        "units": "meters",
                        "transition": true
                    },
                    "fill-extrusion-base": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "default": 0,
                        "minimum": 0,
                        "maximum": 65535,
                        "units": "meters",
                        "transition": true,
                        "requires": ["fill-extrusion-height"]
                    }
                },
                "paint_line": {
                    "line-opacity": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "transition": true
                    },
                    "line-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": [{"!": "line-pattern"}]
                    },
                    "line-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "line-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["line-translate"]
                    },
                    "line-width": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "line-gap-width": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "line-offset": {
                        "type": "number",
                        "default": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "line-blur": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "line-dasharray": {
                        "type": "array",
                        "value": "number",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "minimum": 0,
                        "transition": true,
                        "units": "line widths",
                        "requires": [{"!": "line-pattern"}]
                    },
                    "line-pattern": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "transition": true
                    }
                },
                "paint_circle": {
                    "circle-radius": {
                        "type": "number",
                        "default": 5,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "circle-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true
                    },
                    "circle-blur": {
                        "type": "number",
                        "default": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true
                    },
                    "circle-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true
                    },
                    "circle-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "circle-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["circle-translate"]
                    },
                    "circle-pitch-scale": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map"
                    },
                    "circle-stroke-width": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels"
                    },
                    "circle-stroke-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true
                    },
                    "circle-stroke-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true
                    }
                },
                "paint_symbol": {
                    "icon-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["icon-image"]
                    },
                    "icon-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["icon-image"]
                    },
                    "icon-halo-color": {
                        "type": "color",
                        "default": "rgba(0, 0, 0, 0)",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["icon-image"]
                    },
                    "icon-halo-width": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["icon-image"]
                    },
                    "icon-halo-blur": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["icon-image"]
                    },
                    "icon-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["icon-image"]
                    },
                    "icon-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["icon-image", "icon-translate"]
                    },
                    "text-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["text-field"]
                    },
                    "text-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["text-field"]
                    },
                    "text-halo-color": {
                        "type": "color",
                        "default": "rgba(0, 0, 0, 0)",
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "requires": ["text-field"]
                    },
                    "text-halo-width": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["text-field"]
                    },
                    "text-halo-blur": {
                        "type": "number",
                        "default": 0,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "property-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["text-field"]
                    },
                    "text-translate": {
                        "type": "array",
                        "value": "number",
                        "length": 2,
                        "default": [0, 0],
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "pixels",
                        "requires": ["text-field"]
                    },
                    "text-translate-anchor": {
                        "type": "enum",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "values": {"map": {}, "viewport": {}},
                        "default": "map",
                        "requires": ["text-field", "text-translate"]
                    }
                },
                "paint_raster": {
                    "raster-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true
                    },
                    "raster-hue-rotate": {
                        "type": "number",
                        "default": 0,
                        "period": 360,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "degrees"
                    },
                    "raster-brightness-min": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "default": 0,
                        "minimum": 0,
                        "maximum": 1,
                        "transition": true
                    },
                    "raster-brightness-max": {
                        "type": "number",
                        "function": "interpolated",
                        "zoom-function": true,
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "transition": true
                    },
                    "raster-saturation": {
                        "type": "number",
                        "default": 0,
                        "minimum": -1,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true
                    },
                    "raster-contrast": {
                        "type": "number",
                        "default": 0,
                        "minimum": -1,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true
                    },
                    "raster-fade-duration": {
                        "type": "number",
                        "default": 300,
                        "minimum": 0,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "units": "milliseconds"
                    }
                },
                "paint_background": {
                    "background-color": {
                        "type": "color",
                        "default": "#000000",
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true,
                        "requires": [{"!": "background-pattern"}]
                    },
                    "background-pattern": {
                        "type": "string",
                        "function": "piecewise-constant",
                        "zoom-function": true,
                        "transition": true
                    },
                    "background-opacity": {
                        "type": "number",
                        "default": 1,
                        "minimum": 0,
                        "maximum": 1,
                        "function": "interpolated",
                        "zoom-function": true,
                        "transition": true
                    }
                },
                "transition": {
                    "duration": {"type": "number", "default": 300, "minimum": 0, "units": "milliseconds"},
                    "delay": {"type": "number", "default": 0, "minimum": 0, "units": "milliseconds"}
                }
            }
        }, {}],
        120: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = function (r) {
                for (var t = [], e = arguments.length - 1; e-- > 0;) t[e] = arguments[e + 1];
                for (var n = 0, o = t; n < o.length; n += 1) {
                    var a = o[n];
                    for (var f in a) r[f] = a[f]
                }
                return r
            };
        }, {}],
        121: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = function (n) {
                return n instanceof Number ? "number" : n instanceof String ? "string" : n instanceof Boolean ? "boolean" : Array.isArray(n) ? "array" : null === n ? "null" : typeof n
            };
        }, {}],
        122: [function (_dereq_, module, exports) {
            "use strict";

            function interpolate(t, e, n) {
                return t * (1 - n) + e * n
            }

            module.exports = interpolate, interpolate.number = interpolate, interpolate.vec2 = function (t, e, n) {
                return [interpolate(t[0], e[0], n), interpolate(t[1], e[1], n)]
            }, interpolate.color = function (t, e, n) {
                return [interpolate(t[0], e[0], n), interpolate(t[1], e[1], n), interpolate(t[2], e[2], n), interpolate(t[3], e[3], n)]
            }, interpolate.array = function (t, e, n) {
                return t.map(function (t, r) {
                    return interpolate(t, e[r], n)
                })
            };
        }, {}],
        123: [function (_dereq_, module, exports) {
            "use strict";
            var parseColorString = _dereq_("csscolorparser").parseCSSColor;
            module.exports = function (r) {
                if ("string" == typeof r) {
                    var e = parseColorString(r);
                    if (!e) return;
                    return [e[0] / 255 * e[3], e[1] / 255 * e[3], e[2] / 255 * e[3], e[3]]
                }
                return Array.isArray(r) ? r : void 0
            };
        }, {"csscolorparser": 108}],
        124: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
        }, {}],
        125: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = function (n) {
                return n instanceof Number || n instanceof String || n instanceof Boolean ? n.valueOf() : n
            };
        }, {}],
        126: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type"),
                extend = _dereq_("../util/extend");
            module.exports = function (e) {
                var r = _dereq_("./validate_function"), t = _dereq_("./validate_object"), i = {
                    "*": function () {
                        return []
                    },
                    array: _dereq_("./validate_array"),
                    boolean: _dereq_("./validate_boolean"),
                    number: _dereq_("./validate_number"),
                    color: _dereq_("./validate_color"),
                    constants: _dereq_("./validate_constants"),
                    enum: _dereq_("./validate_enum"),
                    filter: _dereq_("./validate_filter"),
                    function: _dereq_("./validate_function"),
                    layer: _dereq_("./validate_layer"),
                    object: _dereq_("./validate_object"),
                    source: _dereq_("./validate_source"),
                    light: _dereq_("./validate_light"),
                    string: _dereq_("./validate_string")
                }, a = e.value, n = e.valueSpec, u = e.key, o = e.styleSpec, l = e.style;
                if ("string" === getType(a) && "@" === a[0]) {
                    if (o.$version > 7) return [new ValidationError(u, a, "constants have been deprecated as of v8")];
                    if (!(a in l.constants)) return [new ValidationError(u, a, 'constant "%s" not found', a)];
                    e = extend({}, e, {value: l.constants[a]})
                }
                return n.function && "object" === getType(a) ? r(e) : n.type && i[n.type] ? i[n.type](e) : t(extend({}, e, {valueSpec: n.type ? o[n.type] : n}))
            };
        }, {
            "../error/validation_error": 103,
            "../util/extend": 120,
            "../util/get_type": 121,
            "./validate_array": 127,
            "./validate_boolean": 128,
            "./validate_color": 129,
            "./validate_constants": 130,
            "./validate_enum": 131,
            "./validate_filter": 132,
            "./validate_function": 133,
            "./validate_layer": 135,
            "./validate_light": 137,
            "./validate_number": 138,
            "./validate_object": 139,
            "./validate_source": 142,
            "./validate_string": 143
        }],
        127: [function (_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"), validate = _dereq_("./validate"),
                ValidationError = _dereq_("../error/validation_error");
            module.exports = function (e) {
                var r = e.value, t = e.valueSpec, a = e.style, n = e.styleSpec, l = e.key,
                    i = e.arrayElementValidator || validate;
                if ("array" !== getType(r)) return [new ValidationError(l, r, "array expected, %s found", getType(r))];
                if (t.length && r.length !== t.length) return [new ValidationError(l, r, "array length %d expected, length %d found", t.length, r.length)];
                if (t["min-length"] && r.length < t["min-length"]) return [new ValidationError(l, r, "array length at least %d expected, length %d found", t["min-length"], r.length)];
                var o = {type: t.value};
                n.$version < 7 && (o.function = t.function), "object" === getType(t.value) && (o = t.value);
                for (var u = [], d = 0; d < r.length; d++) u = u.concat(i({
                    array: r,
                    arrayIndex: d,
                    value: r[d],
                    valueSpec: o,
                    style: a,
                    styleSpec: n,
                    key: l + "[" + d + "]"
                }));
                return u
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121, "./validate": 126}],
        128: [function (_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"), ValidationError = _dereq_("../error/validation_error");
            module.exports = function (e) {
                var r = e.value, o = e.key, t = getType(r);
                return "boolean" !== t ? [new ValidationError(o, r, "boolean expected, %s found", t)] : []
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121}],
        129: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type"),
                parseCSSColor = _dereq_("csscolorparser").parseCSSColor;
            module.exports = function (r) {
                var e = r.key, o = r.value, t = getType(o);
                return "string" !== t ? [new ValidationError(e, o, "color expected, %s found", t)] : null === parseCSSColor(o) ? [new ValidationError(e, o, 'color expected, "%s" found', o)] : []
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121, "csscolorparser": 108}],
        130: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type");
            module.exports = function (r) {
                var e = r.key, t = r.value, a = r.styleSpec;
                if (a.$version > 7) return t ? [new ValidationError(e, t, "constants have been deprecated as of v8")] : [];
                var o = getType(t);
                if ("object" !== o) return [new ValidationError(e, t, "object expected, %s found", o)];
                var n = [];
                for (var i in t) "@" !== i[0] && n.push(new ValidationError(e + "." + i, t[i], 'constants must start with "@"'));
                return n
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121}],
        131: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function (e) {
                var r = e.key, n = e.value, u = e.valueSpec, o = [];
                return Array.isArray(u.values) ? u.values.indexOf(unbundle(n)) === -1 && o.push(new ValidationError(r, n, "expected one of [%s], %s found", u.values.join(", "), n)) : Object.keys(u.values).indexOf(unbundle(n)) === -1 && o.push(new ValidationError(r, n, "expected one of [%s], %s found", Object.keys(u.values).join(", "), n)), o
            };
        }, {"../error/validation_error": 103, "../util/unbundle_jsonlint": 125}],
        132: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), validateEnum = _dereq_("./validate_enum"),
                getType = _dereq_("../util/get_type"), unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function e(r) {
                var t, a = r.value, n = r.key, l = r.styleSpec, s = [];
                if ("array" !== getType(a)) return [new ValidationError(n, a, "array expected, %s found", getType(a))];
                if (a.length < 1) return [new ValidationError(n, a, "filter array must have at least 1 element")];
                switch (s = s.concat(validateEnum({
                    key: n + "[0]",
                    value: a[0],
                    valueSpec: l.filter_operator,
                    style: r.style,
                    styleSpec: r.styleSpec
                })), unbundle(a[0])) {
                    case"<":
                    case"<=":
                    case">":
                    case">=":
                        a.length >= 2 && "$type" === unbundle(a[1]) && s.push(new ValidationError(n, a, '"$type" cannot be use with operator "%s"', a[0]));
                    case"==":
                    case"!=":
                        3 !== a.length && s.push(new ValidationError(n, a, 'filter array for operator "%s" must have 3 elements', a[0]));
                    case"in":
                    case"!in":
                        a.length >= 2 && (t = getType(a[1]), "string" !== t && s.push(new ValidationError(n + "[1]", a[1], "string expected, %s found", t)));
                        for (var o = 2; o < a.length; o++) t = getType(a[o]), "$type" === unbundle(a[1]) ? s = s.concat(validateEnum({
                            key: n + "[" + o + "]",
                            value: a[o],
                            valueSpec: l.geometry_type,
                            style: r.style,
                            styleSpec: r.styleSpec
                        })) : "string" !== t && "number" !== t && "boolean" !== t && s.push(new ValidationError(n + "[" + o + "]", a[o], "string, number, or boolean expected, %s found", t));
                        break;
                    case"any":
                    case"all":
                    case"none":
                        for (var i = 1; i < a.length; i++) s = s.concat(e({
                            key: n + "[" + i + "]",
                            value: a[i],
                            style: r.style,
                            styleSpec: r.styleSpec
                        }));
                        break;
                    case"has":
                    case"!has":
                        t = getType(a[1]), 2 !== a.length ? s.push(new ValidationError(n, a, 'filter array for "%s" operator must have 2 elements', a[0])) : "string" !== t && s.push(new ValidationError(n + "[1]", a[1], "string expected, %s found", t))
                }
                return s
            };
        }, {
            "../error/validation_error": 103,
            "../util/get_type": 121,
            "../util/unbundle_jsonlint": 125,
            "./validate_enum": 131
        }],
        133: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type"),
                validate = _dereq_("./validate"), validateObject = _dereq_("./validate_object"),
                validateArray = _dereq_("./validate_array"), validateNumber = _dereq_("./validate_number"),
                unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function (e) {
                function t(e) {
                    if ("identity" === p) return [new ValidationError(e.key, e.value, 'identity function may not have a "stops" property')];
                    var t = [], a = e.value;
                    return t = t.concat(validateArray({
                        key: e.key,
                        value: a,
                        valueSpec: e.valueSpec,
                        style: e.style,
                        styleSpec: e.styleSpec,
                        arrayElementValidator: r
                    })), "array" === getType(a) && 0 === a.length && t.push(new ValidationError(e.key, a, "array must have at least one stop")), t
                }

                function r(e) {
                    var t = [], r = e.value, o = e.key;
                    if ("array" !== getType(r)) return [new ValidationError(o, r, "array expected, %s found", getType(r))];
                    if (2 !== r.length) return [new ValidationError(o, r, "array length %d expected, length %d found", 2, r.length)];
                    if (c) {
                        if ("object" !== getType(r[0])) return [new ValidationError(o, r, "object expected, %s found", getType(r[0]))];
                        if (void 0 === r[0].zoom) return [new ValidationError(o, r, "object stop key must have zoom")];
                        if (void 0 === r[0].value) return [new ValidationError(o, r, "object stop key must have value")];
                        if (l && l > unbundle(r[0].zoom)) return [new ValidationError(o, r[0].zoom, "stop zoom values must appear in ascending order")];
                        unbundle(r[0].zoom) !== l && (l = unbundle(r[0].zoom), i = void 0, s = {}), t = t.concat(validateObject({
                            key: o + "[0]",
                            value: r[0],
                            valueSpec: {zoom: {}},
                            style: e.style,
                            styleSpec: e.styleSpec,
                            objectElementValidators: {zoom: validateNumber, value: a}
                        }))
                    } else t = t.concat(a({
                        key: o + "[0]",
                        value: r[0],
                        valueSpec: {},
                        style: e.style,
                        styleSpec: e.styleSpec
                    }));
                    return t.concat(validate({
                        key: o + "[1]",
                        value: r[1],
                        valueSpec: u,
                        style: e.style,
                        styleSpec: e.styleSpec
                    }))
                }

                function a(e) {
                    var t = getType(e.value), r = unbundle(e.value);
                    if (n) {
                        if (t !== n) return [new ValidationError(e.key, e.value, "%s stop domain type must match previous stop domain type %s", t, n)]
                    } else n = t;
                    if ("number" !== t && "string" !== t && "boolean" !== t) return [new ValidationError(e.key, e.value, "stop domain value must be a number, string, or boolean")];
                    if ("number" !== t && "categorical" !== p) {
                        var a = "number expected, %s found";
                        return u["property-function"] && void 0 === p && (a += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.'), [new ValidationError(e.key, e.value, a, t)]
                    }
                    return "categorical" !== p || "number" !== t || isFinite(r) && Math.floor(r) === r ? "number" === t && void 0 !== i && r < i ? [new ValidationError(e.key, e.value, "stop domain values must appear in ascending order")] : (i = r, "categorical" === p && r in s ? [new ValidationError(e.key, e.value, "stop domain values must be unique")] : (s[r] = !0, [])) : [new ValidationError(e.key, e.value, "integer expected, found %s", r)]
                }

                function o(e) {
                    return validate({key: e.key, value: e.value, valueSpec: u, style: e.style, styleSpec: e.styleSpec})
                }

                var n, i, l, u = e.valueSpec, p = unbundle(e.value.type), s = {},
                    y = "categorical" !== p && void 0 === e.value.property, d = !y,
                    c = "array" === getType(e.value.stops) && "array" === getType(e.value.stops[0]) && "object" === getType(e.value.stops[0][0]),
                    v = validateObject({
                        key: e.key,
                        value: e.value,
                        valueSpec: e.styleSpec.function,
                        style: e.style,
                        styleSpec: e.styleSpec,
                        objectElementValidators: {stops: t, default: o}
                    });
                return "identity" === p && y && v.push(new ValidationError(e.key, e.value, 'missing required property "property"')), "identity" === p || e.value.stops || v.push(new ValidationError(e.key, e.value, 'missing required property "stops"')), "exponential" === p && "piecewise-constant" === e.valueSpec.function && v.push(new ValidationError(e.key, e.value, "exponential functions not supported")), e.styleSpec.$version >= 8 && (d && !e.valueSpec["property-function"] ? v.push(new ValidationError(e.key, e.value, "property functions not supported")) : y && !e.valueSpec["zoom-function"] && v.push(new ValidationError(e.key, e.value, "zoom functions not supported"))), "categorical" !== p && !c || void 0 !== e.value.property || v.push(new ValidationError(e.key, e.value, '"property" property is required')), v
            };
        }, {
            "../error/validation_error": 103,
            "../util/get_type": 121,
            "../util/unbundle_jsonlint": 125,
            "./validate": 126,
            "./validate_array": 127,
            "./validate_number": 138,
            "./validate_object": 139
        }],
        134: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), validateString = _dereq_("./validate_string");
            module.exports = function (r) {
                var e = r.value, t = r.key, a = validateString(r);
                return a.length ? a : (e.indexOf("{fontstack}") === -1 && a.push(new ValidationError(t, e, '"glyphs" url must include a "{fontstack}" token')), e.indexOf("{range}") === -1 && a.push(new ValidationError(t, e, '"glyphs" url must include a "{range}" token')), a)
            };
        }, {"../error/validation_error": 103, "./validate_string": 143}],
        135: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), unbundle = _dereq_("../util/unbundle_jsonlint"),
                validateObject = _dereq_("./validate_object"), validateFilter = _dereq_("./validate_filter"),
                validatePaintProperty = _dereq_("./validate_paint_property"),
                validateLayoutProperty = _dereq_("./validate_layout_property"), extend = _dereq_("../util/extend");
            module.exports = function (e) {
                var r = [], t = e.value, a = e.key, i = e.style, l = e.styleSpec;
                t.type || t.ref || r.push(new ValidationError(a, t, 'either "type" or "ref" is required'));
                var u = unbundle(t.type), n = unbundle(t.ref);
                if (t.id) for (var o = unbundle(t.id), s = 0; s < e.arrayIndex; s++) {
                    var d = i.layers[s];
                    unbundle(d.id) === o && r.push(new ValidationError(a, t.id, 'duplicate layer id "%s", previously used at line %d', t.id, d.id.__line__))
                }
                if ("ref" in t) {
                    ["type", "source", "source-layer", "filter", "layout"].forEach(function (e) {
                        e in t && r.push(new ValidationError(a, t[e], '"%s" is prohibited for ref layers', e))
                    });
                    var y;
                    i.layers.forEach(function (e) {
                        unbundle(e.id) === n && (y = e)
                    }), y ? y.ref ? r.push(new ValidationError(a, t.ref, "ref cannot reference another ref layer")) : u = unbundle(y.type) : r.push(new ValidationError(a, t.ref, 'ref layer "%s" not found', n))
                } else if ("background" !== u) if (t.source) {
                    var c = i.sources && i.sources[t.source], p = c && unbundle(c.type);
                    c ? "vector" === p && "raster" === u ? r.push(new ValidationError(a, t.source, 'layer "%s" requires a raster source', t.id)) : "raster" === p && "raster" !== u ? r.push(new ValidationError(a, t.source, 'layer "%s" requires a vector source', t.id)) : "vector" !== p || t["source-layer"] || r.push(new ValidationError(a, t, 'layer "%s" must specify a "source-layer"', t.id)) : r.push(new ValidationError(a, t.source, 'source "%s" not found', t.source))
                } else r.push(new ValidationError(a, t, 'missing required property "source"'));
                return r = r.concat(validateObject({
                    key: a,
                    value: t,
                    valueSpec: l.layer,
                    style: e.style,
                    styleSpec: e.styleSpec,
                    objectElementValidators: {
                        "*": function () {
                            return []
                        }, filter: validateFilter, layout: function (e) {
                            return validateObject({
                                layer: t,
                                key: e.key,
                                value: e.value,
                                style: e.style,
                                styleSpec: e.styleSpec,
                                objectElementValidators: {
                                    "*": function (e) {
                                        return validateLayoutProperty(extend({layerType: u}, e))
                                    }
                                }
                            })
                        }, paint: function (e) {
                            return validateObject({
                                layer: t,
                                key: e.key,
                                value: e.value,
                                style: e.style,
                                styleSpec: e.styleSpec,
                                objectElementValidators: {
                                    "*": function (e) {
                                        return validatePaintProperty(extend({layerType: u}, e))
                                    }
                                }
                            })
                        }
                    }
                }))
            };
        }, {
            "../error/validation_error": 103,
            "../util/extend": 120,
            "../util/unbundle_jsonlint": 125,
            "./validate_filter": 132,
            "./validate_layout_property": 136,
            "./validate_object": 139,
            "./validate_paint_property": 140
        }],
        136: [function (_dereq_, module, exports) {
            "use strict";
            var validateProperty = _dereq_("./validate_property");
            module.exports = function (r) {
                return validateProperty(r, "layout")
            };
        }, {"./validate_property": 141}],
        137: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type"),
                validate = _dereq_("./validate");
            module.exports = function (e) {
                var t = e.value, r = e.styleSpec, a = r.light, i = e.style, n = [], o = getType(t);
                if (void 0 === t) return n;
                if ("object" !== o) return n = n.concat([new ValidationError("light", t, "object expected, %s found", o)]);
                for (var l in t) {
                    var c = l.match(/^(.*)-transition$/);
                    n = c && a[c[1]] && a[c[1]].transition ? n.concat(validate({
                        key: l,
                        value: t[l],
                        valueSpec: r.transition,
                        style: i,
                        styleSpec: r
                    })) : a[l] ? n.concat(validate({
                        key: l,
                        value: t[l],
                        valueSpec: a[l],
                        style: i,
                        styleSpec: r
                    })) : n.concat([new ValidationError(l, t[l], 'unknown property "%s"', l)])
                }
                return n
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121, "./validate": 126}],
        138: [function (_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"), ValidationError = _dereq_("../error/validation_error");
            module.exports = function (e) {
                var r = e.key, i = e.value, m = e.valueSpec, a = getType(i);
                return "number" !== a ? [new ValidationError(r, i, "number expected, %s found", a)] : "minimum" in m && i < m.minimum ? [new ValidationError(r, i, "%s is less than the minimum value %s", i, m.minimum)] : "maximum" in m && i > m.maximum ? [new ValidationError(r, i, "%s is greater than the maximum value %s", i, m.maximum)] : []
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121}],
        139: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), getType = _dereq_("../util/get_type"),
                validateSpec = _dereq_("./validate");
            module.exports = function (e) {
                var r = e.key, t = e.value, i = e.valueSpec || {}, a = e.objectElementValidators || {}, o = e.style,
                    l = e.styleSpec, n = [], u = getType(t);
                if ("object" !== u) return [new ValidationError(r, t, "object expected, %s found", u)];
                for (var d in t) {
                    var p = d.split(".")[0], s = i[p] || i["*"], c = void 0;
                    if (a[p]) c = a[p]; else if (i[p]) c = validateSpec; else if (a["*"]) c = a["*"]; else {
                        if (!i["*"]) {
                            n.push(new ValidationError(r, t[d], 'unknown property "%s"', d));
                            continue
                        }
                        c = validateSpec
                    }
                    n = n.concat(c({
                        key: (r ? r + "." : r) + d,
                        value: t[d],
                        valueSpec: s,
                        style: o,
                        styleSpec: l,
                        object: t,
                        objectKey: d
                    }))
                }
                for (var v in i) i[v].required && void 0 === i[v].default && void 0 === t[v] && n.push(new ValidationError(r, t, 'missing required property "%s"', v));
                return n
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121, "./validate": 126}],
        140: [function (_dereq_, module, exports) {
            "use strict";
            var validateProperty = _dereq_("./validate_property");
            module.exports = function (r) {
                return validateProperty(r, "paint")
            };
        }, {"./validate_property": 141}],
        141: [function (_dereq_, module, exports) {
            "use strict";
            var validate = _dereq_("./validate"), ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type");
            module.exports = function (e, t) {
                var r = e.key, i = e.style, a = e.styleSpec, n = e.value, o = e.objectKey, l = a[t + "_" + e.layerType];
                if (!l) return [];
                var y = o.match(/^(.*)-transition$/);
                if ("paint" === t && y && l[y[1]] && l[y[1]].transition) return validate({
                    key: r,
                    value: n,
                    valueSpec: a.transition,
                    style: i,
                    styleSpec: a
                });
                var p = e.valueSpec || l[o];
                if (!p) return [new ValidationError(r, n, 'unknown property "%s"', o)];
                var s;
                if ("string" === getType(n) && p["property-function"] && !p.tokens && (s = /^{([^}]+)}$/.exec(n))) return [new ValidationError(r, n, '"%s" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": %s` }`.', o, JSON.stringify(s[1]))];
                var u = [];
                return "symbol" === e.layerType && "text-field" === o && i && !i.glyphs && u.push(new ValidationError(r, n, 'use of "text-field" requires a style "glyphs" property')), u.concat(validate({
                    key: e.key,
                    value: n,
                    valueSpec: p,
                    style: i,
                    styleSpec: a
                }))
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121, "./validate": 126}],
        142: [function (_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"), unbundle = _dereq_("../util/unbundle_jsonlint"),
                validateObject = _dereq_("./validate_object"), validateEnum = _dereq_("./validate_enum");
            module.exports = function (e) {
                var a = e.value, t = e.key, r = e.styleSpec, l = e.style;
                if (!a.type) return [new ValidationError(t, a, '"type" is required')];
                var u = unbundle(a.type), i = [];
                switch (u) {
                    case"vector":
                    case"raster":
                        if (i = i.concat(validateObject({
                                key: t,
                                value: a,
                                valueSpec: r.source_tile,
                                style: e.style,
                                styleSpec: r
                            })), "url" in a) for (var s in a) ["type", "url", "tileSize"].indexOf(s) < 0 && i.push(new ValidationError(t + "." + s, a[s], 'a source with a "url" property may not include a "%s" property', s));
                        return i;
                    case"geojson":
                        return validateObject({key: t, value: a, valueSpec: r.source_geojson, style: l, styleSpec: r});
                    case"video":
                        return validateObject({key: t, value: a, valueSpec: r.source_video, style: l, styleSpec: r});
                    case"image":
                        return validateObject({key: t, value: a, valueSpec: r.source_image, style: l, styleSpec: r});
                    case"canvas":
                        return validateObject({key: t, value: a, valueSpec: r.source_canvas, style: l, styleSpec: r});
                    default:
                        return validateEnum({
                            key: t + ".type",
                            value: a.type,
                            valueSpec: {values: ["vector", "raster", "geojson", "video", "image", "canvas"]},
                            style: l,
                            styleSpec: r
                        })
                }
            };
        }, {
            "../error/validation_error": 103,
            "../util/unbundle_jsonlint": 125,
            "./validate_enum": 131,
            "./validate_object": 139
        }],
        143: [function (_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"), ValidationError = _dereq_("../error/validation_error");
            module.exports = function (r) {
                var e = r.value, t = r.key, i = getType(e);
                return "string" !== i ? [new ValidationError(t, e, "string expected, %s found", i)] : []
            };
        }, {"../error/validation_error": 103, "../util/get_type": 121}],
        144: [function (_dereq_, module, exports) {
            "use strict";

            function validateStyleMin(e, a) {
                a = a || latestStyleSpec;
                var t = [];
                return t = t.concat(validate({
                    key: "",
                    value: e,
                    valueSpec: a.$root,
                    styleSpec: a,
                    style: e,
                    objectElementValidators: {
                        glyphs: validateGlyphsURL, "*": function () {
                            return []
                        }
                    }
                })), a.$version > 7 && e.constants && (t = t.concat(validateConstants({
                    key: "constants",
                    value: e.constants,
                    style: e,
                    styleSpec: a
                }))), sortErrors(t)
            }

            function sortErrors(e) {
                return [].concat(e).sort(function (e, a) {
                    return e.line - a.line
                })
            }

            function wrapCleanErrors(e) {
                return function () {
                    return sortErrors(e.apply(this, arguments))
                }
            }

            var validateConstants = _dereq_("./validate/validate_constants"), validate = _dereq_("./validate/validate"),
                latestStyleSpec = _dereq_("./reference/latest"),
                validateGlyphsURL = _dereq_("./validate/validate_glyphs_url");
            validateStyleMin.source = wrapCleanErrors(_dereq_("./validate/validate_source")), validateStyleMin.light = wrapCleanErrors(_dereq_("./validate/validate_light")), validateStyleMin.layer = wrapCleanErrors(_dereq_("./validate/validate_layer")), validateStyleMin.filter = wrapCleanErrors(_dereq_("./validate/validate_filter")), validateStyleMin.paintProperty = wrapCleanErrors(_dereq_("./validate/validate_paint_property")), validateStyleMin.layoutProperty = wrapCleanErrors(_dereq_("./validate/validate_layout_property")), module.exports = validateStyleMin;
        }, {
            "./reference/latest": 118,
            "./validate/validate": 126,
            "./validate/validate_constants": 130,
            "./validate/validate_filter": 132,
            "./validate/validate_glyphs_url": 134,
            "./validate/validate_layer": 135,
            "./validate/validate_layout_property": 136,
            "./validate/validate_light": 137,
            "./validate/validate_paint_property": 140,
            "./validate/validate_source": 142
        }],
        145: [function (_dereq_, module, exports) {
            "use strict";
            var AnimationLoop = function () {
                this.n = 0, this.times = []
            };
            AnimationLoop.prototype.stopped = function () {
                return this.times = this.times.filter(function (t) {
                    return t.time >= (new Date).getTime()
                }), !this.times.length
            }, AnimationLoop.prototype.set = function (t) {
                return this.times.push({id: this.n, time: t + (new Date).getTime()}), this.n++
            }, AnimationLoop.prototype.cancel = function (t) {
                this.times = this.times.filter(function (i) {
                    return i.id !== t
                })
            }, module.exports = AnimationLoop;
        }, {}],
        146: [function (_dereq_, module, exports) {
            "use strict";
            var Evented = _dereq_("../util/evented"), ajax = _dereq_("../util/ajax"),
                browser = _dereq_("../util/browser"), normalizeURL = _dereq_("../util/mapbox").normalizeSpriteURL,
                SpritePosition = function () {
                    this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.pixelRatio = 1, this.sdf = !1
                }, ImageSprite = function (t) {
                    function e(e, i) {
                        var r = this;
                        t.call(this), this.base = e, this.retina = browser.devicePixelRatio > 1, this.setEventedParent(i);
                        var a = this.retina ? "@2x" : "";
                        ajax.getJSON(normalizeURL(e, a, ".json"), function (t, e) {
                            return t ? void r.fire("error", {error: t}) : (r.data = e, void(r.imgData && r.fire("data", {dataType: "style"})))
                        }), ajax.getImage(normalizeURL(e, a, ".png"), function (t, e) {
                            return t ? void r.fire("error", {error: t}) : (r.imgData = browser.getImageData(e), r.width = e.width, void(r.data && r.fire("data", {dataType: "style"})))
                        })
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.toJSON = function () {
                        return this.base
                    }, e.prototype.loaded = function () {
                        return !(!this.data || !this.imgData)
                    }, e.prototype.resize = function () {
                        var t = this;
                        if (browser.devicePixelRatio > 1 !== this.retina) {
                            var i = new e(this.base);
                            i.on("data", function () {
                                t.data = i.data, t.imgData = i.imgData, t.width = i.width, t.retina = i.retina
                            })
                        }
                    }, e.prototype.getSpritePosition = function (t) {
                        if (!this.loaded()) return new SpritePosition;
                        var e = this.data && this.data[t];
                        return e && this.imgData ? e : new SpritePosition
                    }, e
                }(Evented);
            module.exports = ImageSprite;
        }, {"../util/ajax": 193, "../util/browser": 194, "../util/evented": 202, "../util/mapbox": 209}],
        147: [function (_dereq_, module, exports) {
            "use strict";
            var styleSpec = _dereq_("../style-spec/reference/latest"), util = _dereq_("../util/util"),
                Evented = _dereq_("../util/evented"), validateStyle = _dereq_("./validate_style"),
                StyleDeclaration = _dereq_("./style_declaration"), StyleTransition = _dereq_("./style_transition"),
                TRANSITION_SUFFIX = "-transition", Light = function (t) {
                    function i(i) {
                        t.call(this), this.properties = ["anchor", "color", "position", "intensity"], this._specifications = styleSpec.light, this.set(i)
                    }

                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.set = function (t) {
                        var i = this;
                        if (!this._validate(validateStyle.light, t)) {
                            this._declarations = {}, this._transitions = {}, this._transitionOptions = {}, this.calculated = {}, t = util.extend({
                                anchor: this._specifications.anchor.default,
                                color: this._specifications.color.default,
                                position: this._specifications.position.default,
                                intensity: this._specifications.intensity.default
                            }, t);
                            for (var e = 0, o = i.properties; e < o.length; e += 1) {
                                var n = o[e];
                                i._declarations[n] = new StyleDeclaration(i._specifications[n], t[n])
                            }
                            return this
                        }
                    }, i.prototype.getLight = function () {
                        return {
                            anchor: this.getLightProperty("anchor"),
                            color: this.getLightProperty("color"),
                            position: this.getLightProperty("position"),
                            intensity: this.getLightProperty("intensity")
                        }
                    }, i.prototype.getLightProperty = function (t) {
                        return util.endsWith(t, TRANSITION_SUFFIX) ? this._transitionOptions[t] : this._declarations[t] && this._declarations[t].value
                    }, i.prototype.getLightValue = function (t, i) {
                        if ("position" === t) {
                            var e = this._transitions[t].calculate(i), o = util.sphericalToCartesian(e);
                            return {x: o[0], y: o[1], z: o[2]}
                        }
                        return this._transitions[t].calculate(i)
                    }, i.prototype.setLight = function (t) {
                        var i = this;
                        if (!this._validate(validateStyle.light, t)) for (var e in t) {
                            var o = t[e];
                            util.endsWith(e, TRANSITION_SUFFIX) ? i._transitionOptions[e] = o : null === o || void 0 === o ? delete i._declarations[e] : i._declarations[e] = new StyleDeclaration(i._specifications[e], o)
                        }
                    }, i.prototype.recalculate = function (t) {
                        var i = this;
                        for (var e in i._declarations) i.calculated[e] = i.getLightValue(e, {zoom: t})
                    }, i.prototype._applyLightDeclaration = function (t, i, e, o, n) {
                        var r = e.transition ? this._transitions[t] : void 0, a = this._specifications[t];
                        if (null !== i && void 0 !== i || (i = new StyleDeclaration(a, a.default)), !r || r.declaration.json !== i.json) {
                            var s = util.extend({duration: 300, delay: 0}, o, this.getLightProperty(t + TRANSITION_SUFFIX)),
                                l = this._transitions[t] = new StyleTransition(a, i, r, s);
                            l.instant() || (l.loopID = n.set(l.endTime - Date.now())), r && n.cancel(r.loopID)
                        }
                    }, i.prototype.updateLightTransitions = function (t, i, e) {
                        var o, n = this;
                        for (o in n._declarations) n._applyLightDeclaration(o, n._declarations[o], t, i, e)
                    }, i.prototype._validate = function (t, i) {
                        return validateStyle.emitErrors(this, t.call(validateStyle, util.extend({
                            value: i,
                            style: {glyphs: !0, sprite: !0},
                            styleSpec: styleSpec
                        })))
                    }, i
                }(Evented);
            module.exports = Light;
        }, {
            "../style-spec/reference/latest": 118,
            "../util/evented": 202,
            "../util/util": 215,
            "./style_declaration": 149,
            "./style_transition": 157,
            "./validate_style": 158
        }],
        148: [function (_dereq_, module, exports) {
            "use strict";
            var Evented = _dereq_("../util/evented"), StyleLayer = _dereq_("./style_layer"),
                ImageSprite = _dereq_("./image_sprite"), Light = _dereq_("./light"),
                GlyphSource = _dereq_("../symbol/glyph_source"), SpriteAtlas = _dereq_("../symbol/sprite_atlas"),
                LineAtlas = _dereq_("../render/line_atlas"), util = _dereq_("../util/util"),
                ajax = _dereq_("../util/ajax"), mapbox = _dereq_("../util/mapbox"),
                browser = _dereq_("../util/browser"), Dispatcher = _dereq_("../util/dispatcher"),
                AnimationLoop = _dereq_("./animation_loop"), validateStyle = _dereq_("./validate_style"),
                Source = _dereq_("../source/source"), QueryFeatures = _dereq_("../source/query_features"),
                SourceCache = _dereq_("../source/source_cache"), styleSpec = _dereq_("../style-spec/reference/latest"),
                MapboxGLFunction = _dereq_("../style-spec/function"),
                getWorkerPool = _dereq_("../util/global_worker_pool"), deref = _dereq_("../style-spec/deref"),
                diff = _dereq_("../style-spec/diff"), rtlTextPlugin = _dereq_("../source/rtl_text_plugin"),
                supportedDiffOperations = util.pick(diff.operations, ["addLayer", "removeLayer", "setPaintProperty", "setLayoutProperty", "setFilter", "addSource", "removeSource", "setLayerZoomRange", "setLight", "setTransition"]),
                ignoredDiffOperations = util.pick(diff.operations, ["setCenter", "setZoom", "setBearing", "setPitch"]),
                Style = function (e) {
                    function t(t, r, i) {
                        var o = this;
                        e.call(this), this.map = r, this.animationLoop = r && r.animationLoop || new AnimationLoop, this.dispatcher = new Dispatcher(getWorkerPool(), this), this.spriteAtlas = new SpriteAtlas(1024, 1024), this.spriteAtlas.setEventedParent(this), this.lineAtlas = new LineAtlas(256, 512), this._layers = {}, this._order = [], this.sourceCaches = {}, this.zoomHistory = {}, this._loaded = !1, util.bindAll(["_redoPlacement"], this), this._resetUpdates(), i = util.extend({validate: "string" != typeof t || !mapbox.isMapboxURL(t)}, i), this.setEventedParent(r), this.fire("dataloading", {dataType: "style"});
                        var s = this;
                        this._rtlTextPluginCallback = rtlTextPlugin.registerForPluginAvailability(function (e) {
                            s.dispatcher.broadcast("loadRTLTextPlugin", e.pluginBlobURL, e.errorCallback);
                            for (var t in s.sourceCaches) s.sourceCaches[t].reload()
                        });
                        var a = function (e, t) {
                            if (e) return void o.fire("error", {error: e});
                            if (!i.validate || !validateStyle.emitErrors(o, validateStyle(t))) {
                                o._loaded = !0, o.stylesheet = t, o.updateClasses();
                                for (var r in t.sources) o.addSource(r, t.sources[r], i);
                                t.sprite && (o.sprite = new ImageSprite(t.sprite, o)), o.glyphSource = new GlyphSource(t.glyphs), o._resolve(), o.fire("data", {dataType: "style"}), o.fire("style.load")
                            }
                        };
                        "string" == typeof t ? ajax.getJSON(mapbox.normalizeStyleURL(t), a) : browser.frame(a.bind(this, null, t)), this.on("data", function (e) {
                            if ("source" === e.dataType && "metadata" === e.sourceDataType) {
                                var t = o.sourceCaches[e.sourceId].getSource();
                                if (t && t.vectorLayerIds) for (var r in o._layers) {
                                    var i = o._layers[r];
                                    i.source === t.id && o._validateLayer(i)
                                }
                            }
                        })
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._validateLayer = function (e) {
                        var t = this.sourceCaches[e.source];
                        if (e.sourceLayer && t) {
                            var r = t.getSource();
                            ("geojson" === r.type || r.vectorLayerIds && r.vectorLayerIds.indexOf(e.sourceLayer) === -1) && this.fire("error", {error: new Error('Source layer "' + e.sourceLayer + '" does not exist on source "' + r.id + '" as specified by style layer "' + e.id + '"')})
                        }
                    }, t.prototype.loaded = function () {
                        var e = this;
                        if (!this._loaded) return !1;
                        if (Object.keys(this._updatedSources).length) return !1;
                        for (var t in e.sourceCaches) if (!e.sourceCaches[t].loaded()) return !1;
                        return !(this.sprite && !this.sprite.loaded())
                    }, t.prototype._resolve = function () {
                        var e = this, t = deref(this.stylesheet.layers);
                        this._order = t.map(function (e) {
                            return e.id
                        }), this._layers = {};
                        for (var r = 0, i = t; r < i.length; r += 1) {
                            var o = i[r];
                            o = StyleLayer.create(o), o.setEventedParent(e, {layer: {id: o.id}}), e._layers[o.id] = o
                        }
                        this.dispatcher.broadcast("setLayers", this._serializeLayers(this._order)), this.light = new Light(this.stylesheet.light)
                    }, t.prototype._serializeLayers = function (e) {
                        var t = this;
                        return e.map(function (e) {
                            return t._layers[e].serialize()
                        })
                    }, t.prototype._applyClasses = function (e, t) {
                        var r = this;
                        if (this._loaded) {
                            e = e || [], t = t || {transition: !0};
                            var i = this.stylesheet.transition || {},
                                o = this._updatedAllPaintProps ? this._layers : this._updatedPaintProps;
                            for (var s in o) {
                                var a = r._layers[s], n = r._updatedPaintProps[s];
                                if (r._updatedAllPaintProps || n.all) a.updatePaintTransitions(e, t, i, r.animationLoop, r.zoomHistory); else for (var l in n) r._layers[s].updatePaintTransition(l, e, t, i, r.animationLoop, r.zoomHistory)
                            }
                            this.light.updateLightTransitions(t, i, this.animationLoop)
                        }
                    }, t.prototype._recalculate = function (e) {
                        var t = this;
                        if (this._loaded) {
                            for (var r in t.sourceCaches) t.sourceCaches[r].used = !1;
                            this._updateZoomHistory(e);
                            for (var i = 0, o = t._order; i < o.length; i += 1) {
                                var s = o[i], a = t._layers[s];
                                a.recalculate(e), !a.isHidden(e) && a.source && (t.sourceCaches[a.source].used = !0)
                            }
                            this.light.recalculate(e);
                            var n = 300;
                            Math.floor(this.z) !== Math.floor(e) && this.animationLoop.set(n), this.z = e
                        }
                    }, t.prototype._updateZoomHistory = function (e) {
                        var t = this.zoomHistory;
                        void 0 === t.lastIntegerZoom && (t.lastIntegerZoom = Math.floor(e), t.lastIntegerZoomTime = 0, t.lastZoom = e), Math.floor(t.lastZoom) < Math.floor(e) ? (t.lastIntegerZoom = Math.floor(e), t.lastIntegerZoomTime = Date.now()) : Math.floor(t.lastZoom) > Math.floor(e) && (t.lastIntegerZoom = Math.floor(e + 1), t.lastIntegerZoomTime = Date.now()), t.lastZoom = e
                    }, t.prototype._checkLoaded = function () {
                        if (!this._loaded) throw new Error("Style is not done loading")
                    }, t.prototype.update = function (e, t) {
                        var r = this;
                        if (this._changed) {
                            var i = Object.keys(this._updatedLayers), o = Object.keys(this._removedLayers);
                            (i.length || o.length || this._updatedSymbolOrder) && this._updateWorkerLayers(i, o);
                            for (var s in r._updatedSources) {
                                var a = r._updatedSources[s];
                                "reload" === a ? r._reloadSource(s) : "clear" === a && r._clearSource(s)
                            }
                            this._applyClasses(e, t), this._resetUpdates(), this.fire("data", {dataType: "style"})
                        }
                    }, t.prototype._updateWorkerLayers = function (e, t) {
                        var r = this, i = this._updatedSymbolOrder ? this._order.filter(function (e) {
                            return "symbol" === r._layers[e].type
                        }) : null;
                        this.dispatcher.broadcast("updateLayers", {
                            layers: this._serializeLayers(e),
                            removedIds: t,
                            symbolOrder: i
                        })
                    }, t.prototype._resetUpdates = function () {
                        this._changed = !1, this._updatedLayers = {}, this._removedLayers = {}, this._updatedSymbolOrder = !1, this._updatedSources = {}, this._updatedPaintProps = {}, this._updatedAllPaintProps = !1
                    }, t.prototype.setState = function (e) {
                        var t = this;
                        if (this._checkLoaded(), validateStyle.emitErrors(this, validateStyle(e))) return !1;
                        e = util.extend({}, e), e.layers = deref(e.layers);
                        var r = diff(this.serialize(), e).filter(function (e) {
                            return !(e.command in ignoredDiffOperations)
                        });
                        if (0 === r.length) return !1;
                        var i = r.filter(function (e) {
                            return !(e.command in supportedDiffOperations)
                        });
                        if (i.length > 0) throw new Error("Unimplemented: " + i.map(function (e) {
                            return e.command
                        }).join(", ") + ".");
                        return r.forEach(function (e) {
                            "setTransition" !== e.command && t[e.command].apply(t, e.args)
                        }), this.stylesheet = e, !0
                    }, t.prototype.addSource = function (e, t, r) {
                        var i = this;
                        if (this._checkLoaded(), void 0 !== this.sourceCaches[e]) throw new Error("There is already a source with this ID");
                        if (!t.type) throw new Error("The type property must be defined, but the only the following properties were given: " + Object.keys(t) + ".");
                        var o = ["vector", "raster", "geojson", "video", "image", "canvas"], s = o.indexOf(t.type) >= 0;
                        if (!s || !this._validate(validateStyle.source, "sources." + e, t, null, r)) {
                            var a = this.sourceCaches[e] = new SourceCache(e, t, this.dispatcher);
                            a.style = this, a.setEventedParent(this, function () {
                                return {isSourceLoaded: i.loaded(), source: a.serialize(), sourceId: e}
                            }), a.onAdd(this.map), this._changed = !0
                        }
                    }, t.prototype.removeSource = function (e) {
                        if (this._checkLoaded(), void 0 === this.sourceCaches[e]) throw new Error("There is no source with this ID");
                        var t = this.sourceCaches[e];
                        delete this.sourceCaches[e], delete this._updatedSources[e], t.setEventedParent(null), t.clearTiles(), t.onRemove && t.onRemove(this.map), this._changed = !0
                    }, t.prototype.getSource = function (e) {
                        return this.sourceCaches[e] && this.sourceCaches[e].getSource()
                    }, t.prototype.addLayer = function (e, t, r) {
                        this._checkLoaded();
                        var i = e.id;
                        if ("object" == typeof e.source && (this.addSource(i, e.source), e = util.extend(e, {source: i})), !this._validate(validateStyle.layer, "layers." + i, e, {arrayIndex: -1}, r)) {
                            var o = StyleLayer.create(e);
                            this._validateLayer(o), o.setEventedParent(this, {layer: {id: i}});
                            var s = t ? this._order.indexOf(t) : this._order.length;
                            if (this._order.splice(s, 0, i), this._layers[i] = o, this._removedLayers[i] && o.source) {
                                var a = this._removedLayers[i];
                                delete this._removedLayers[i], this._updatedSources[o.source] = a.type !== o.type ? "clear" : "reload"
                            }
                            this._updateLayer(o), "symbol" === o.type && (this._updatedSymbolOrder = !0), this.updateClasses(i)
                        }
                    }, t.prototype.moveLayer = function (e, t) {
                        this._checkLoaded(), this._changed = !0;
                        var r = this._layers[e];
                        if (!r) return void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be moved.")});
                        var i = this._order.indexOf(e);
                        this._order.splice(i, 1);
                        var o = t ? this._order.indexOf(t) : this._order.length;
                        this._order.splice(o, 0, e), "symbol" === r.type && (this._updatedSymbolOrder = !0, r.source && !this._updatedSources[r.source] && (this._updatedSources[r.source] = "reload"))
                    }, t.prototype.removeLayer = function (e) {
                        this._checkLoaded();
                        var t = this._layers[e];
                        if (!t) return void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be removed.")});
                        t.setEventedParent(null);
                        var r = this._order.indexOf(e);
                        this._order.splice(r, 1), "symbol" === t.type && (this._updatedSymbolOrder = !0), this._changed = !0, this._removedLayers[e] = t, delete this._layers[e], delete this._updatedLayers[e], delete this._updatedPaintProps[e]
                    }, t.prototype.getLayer = function (e) {
                        return this._layers[e]
                    }, t.prototype.setLayerZoomRange = function (e, t, r) {
                        this._checkLoaded();
                        var i = this.getLayer(e);
                        return i ? void(i.minzoom === t && i.maxzoom === r || (null != t && (i.minzoom = t), null != r && (i.maxzoom = r), this._updateLayer(i))) : void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot have zoom extent.")})
                    }, t.prototype.setFilter = function (e, t) {
                        this._checkLoaded();
                        var r = this.getLayer(e);
                        return r ? void(null !== t && void 0 !== t && this._validate(validateStyle.filter, "layers." + r.id + ".filter", t) || util.deepEqual(r.filter, t) || (r.filter = util.clone(t), this._updateLayer(r))) : void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be filtered.")})
                    }, t.prototype.getFilter = function (e) {
                        return util.clone(this.getLayer(e).filter)
                    }, t.prototype.setLayoutProperty = function (e, t, r) {
                        this._checkLoaded();
                        var i = this.getLayer(e);
                        return i ? void(util.deepEqual(i.getLayoutProperty(t), r) || (i.setLayoutProperty(t, r), this._updateLayer(i))) : void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be styled.")})
                    }, t.prototype.getLayoutProperty = function (e, t) {
                        return this.getLayer(e).getLayoutProperty(t)
                    }, t.prototype.setPaintProperty = function (e, t, r, i) {
                        this._checkLoaded();
                        var o = this.getLayer(e);
                        if (!o) return void this.fire("error", {error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be styled.")});
                        if (!util.deepEqual(o.getPaintProperty(t, i), r)) {
                            var s = o.isPaintValueFeatureConstant(t);
                            o.setPaintProperty(t, r, i);
                            var a = !(r && MapboxGLFunction.isFunctionDefinition(r) && "$zoom" !== r.property && void 0 !== r.property);
                            a && s || this._updateLayer(o), this.updateClasses(e, t)
                        }
                    }, t.prototype.getPaintProperty = function (e, t, r) {
                        return this.getLayer(e).getPaintProperty(t, r)
                    }, t.prototype.getTransition = function () {
                        return util.extend({duration: 300, delay: 0}, this.stylesheet && this.stylesheet.transition)
                    }, t.prototype.updateClasses = function (e, t) {
                        if (this._changed = !0, e) {
                            var r = this._updatedPaintProps;
                            r[e] || (r[e] = {}), r[e][t || "all"] = !0
                        } else this._updatedAllPaintProps = !0
                    }, t.prototype.serialize = function () {
                        var e = this;
                        return util.filterObject({
                            version: this.stylesheet.version,
                            name: this.stylesheet.name,
                            metadata: this.stylesheet.metadata,
                            light: this.stylesheet.light,
                            center: this.stylesheet.center,
                            zoom: this.stylesheet.zoom,
                            bearing: this.stylesheet.bearing,
                            pitch: this.stylesheet.pitch,
                            sprite: this.stylesheet.sprite,
                            glyphs: this.stylesheet.glyphs,
                            transition: this.stylesheet.transition,
                            sources: util.mapObject(this.sourceCaches, function (e) {
                                return e.serialize()
                            }),
                            layers: this._order.map(function (t) {
                                return e._layers[t].serialize()
                            })
                        }, function (e) {
                            return void 0 !== e
                        })
                    }, t.prototype._updateLayer = function (e) {
                        this._updatedLayers[e.id] = !0, e.source && !this._updatedSources[e.source] && (this._updatedSources[e.source] = "reload"), this._changed = !0
                    }, t.prototype._flattenRenderedFeatures = function (e) {
                        for (var t = this, r = [], i = this._order.length - 1; i >= 0; i--) for (var o = t._order[i], s = 0, a = e; s < a.length; s += 1) {
                            var n = a[s], l = n[o];
                            if (l) for (var d = 0, u = l; d < u.length; d += 1) {
                                var h = u[d];
                                r.push(h)
                            }
                        }
                        return r
                    }, t.prototype.queryRenderedFeatures = function (e, t, r, i) {
                        var o = this;
                        t && t.filter && this._validate(validateStyle.filter, "queryRenderedFeatures.filter", t.filter);
                        var s = {};
                        if (t && t.layers) {
                            if (!Array.isArray(t.layers)) return void this.fire("error", {error: "parameters.layers must be an Array."});
                            for (var a = 0, n = t.layers; a < n.length; a += 1) {
                                var l = n[a], d = o._layers[l];
                                if (!d) return void o.fire("error", {error: "The layer '" + l + "' does not exist in the map's style and cannot be queried for features."});
                                s[d.source] = !0
                            }
                        }
                        var u = [];
                        for (var h in o.sourceCaches) if (!t.layers || s[h]) {
                            var c = QueryFeatures.rendered(o.sourceCaches[h], o._layers, e, t, r, i);
                            u.push(c)
                        }
                        return this._flattenRenderedFeatures(u)
                    }, t.prototype.querySourceFeatures = function (e, t) {
                        t && t.filter && this._validate(validateStyle.filter, "querySourceFeatures.filter", t.filter);
                        var r = this.sourceCaches[e];
                        return r ? QueryFeatures.source(r, t) : []
                    }, t.prototype.addSourceType = function (e, t, r) {
                        return Source.getType(e) ? r(new Error('A source type called "' + e + '" already exists.')) : (Source.setType(e, t), t.workerSourceURL ? void this.dispatcher.broadcast("loadWorkerSource", {
                            name: e,
                            url: t.workerSourceURL
                        }, r) : r(null, null))
                    }, t.prototype.getLight = function () {
                        return this.light.getLight()
                    }, t.prototype.setLight = function (e, t) {
                        this._checkLoaded();
                        var r = this.light.getLight(), i = !1;
                        for (var o in e) if (!util.deepEqual(e[o], r[o])) {
                            i = !0;
                            break
                        }
                        if (i) {
                            var s = this.stylesheet.transition || {};
                            this.light.setLight(e), this.light.updateLightTransitions(t || {transition: !0}, s, this.animationLoop)
                        }
                    }, t.prototype._validate = function (e, t, r, i, o) {
                        return (!o || o.validate !== !1) && validateStyle.emitErrors(this, e.call(validateStyle, util.extend({
                            key: t,
                            style: this.serialize(),
                            value: r,
                            styleSpec: styleSpec
                        }, i)))
                    }, t.prototype._remove = function () {
                        var e = this;
                        rtlTextPlugin.evented.off("pluginAvailable", this._rtlTextPluginCallback);
                        for (var t in e.sourceCaches) e.sourceCaches[t].clearTiles();
                        this.dispatcher.remove()
                    }, t.prototype._clearSource = function (e) {
                        this.sourceCaches[e].clearTiles()
                    }, t.prototype._reloadSource = function (e) {
                        this.sourceCaches[e].reload()
                    }, t.prototype._updateSources = function (e) {
                        var t = this;
                        for (var r in t.sourceCaches) t.sourceCaches[r].update(e)
                    }, t.prototype._redoPlacement = function () {
                        var e = this;
                        for (var t in e.sourceCaches) e.sourceCaches[t].redoPlacement()
                    }, t.prototype.getIcons = function (e, t, r) {
                        var i = this, o = function () {
                            i.spriteAtlas.setSprite(i.sprite), i.spriteAtlas.addIcons(t.icons, r)
                        };
                        !this.sprite || this.sprite.loaded() ? o() : this.sprite.on("data", o)
                    }, t.prototype.getGlyphs = function (e, t, r) {
                        function i(e, t, i) {
                            e && console.error(e), n[i] = t, a--, 0 === a && r(null, n)
                        }

                        var o = this, s = t.stacks, a = Object.keys(s).length, n = {};
                        for (var l in s) o.glyphSource.getSimpleGlyphs(l, s[l], t.uid, i)
                    }, t
                }(Evented);
            module.exports = Style;
        }, {
            "../render/line_atlas": 75,
            "../source/query_features": 88,
            "../source/rtl_text_plugin": 90,
            "../source/source": 91,
            "../source/source_cache": 92,
            "../style-spec/deref": 101,
            "../style-spec/diff": 102,
            "../style-spec/function": 106,
            "../style-spec/reference/latest": 118,
            "../symbol/glyph_source": 167,
            "../symbol/sprite_atlas": 171,
            "../util/ajax": 193,
            "../util/browser": 194,
            "../util/dispatcher": 200,
            "../util/evented": 202,
            "../util/global_worker_pool": 204,
            "../util/mapbox": 209,
            "../util/util": 215,
            "./animation_loop": 145,
            "./image_sprite": 146,
            "./light": 147,
            "./style_layer": 150,
            "./validate_style": 158
        }],
        149: [function (_dereq_, module, exports) {
            "use strict";
            var createFunction = _dereq_("../style-spec/function"), util = _dereq_("../util/util"),
                StyleDeclaration = function (t, i) {
                    var o = this;
                    if (this.value = util.clone(i), this.isFunction = createFunction.isFunctionDefinition(i), this.json = JSON.stringify(this.value), this.minimum = t.minimum, this.function = createFunction(this.value, t), this.isFeatureConstant = this.function.isFeatureConstant, this.isZoomConstant = this.function.isZoomConstant, this.isFeatureConstant || this.isZoomConstant) {
                        if (!this.isZoomConstant) {
                            this.stopZoomLevels = [];
                            for (var n = 0, s = o.value.stops; n < s.length; n += 1) {
                                var e = s[n];
                                o.stopZoomLevels.indexOf(e[0]) < 0 && o.stopZoomLevels.push(e[0])
                            }
                        }
                    } else {
                        this.stopZoomLevels = [];
                        for (var a = [], u = 0, l = o.value.stops; u < l.length; u += 1) {
                            var r = l[u], c = r[0].zoom;
                            o.stopZoomLevels.indexOf(c) < 0 && (o.stopZoomLevels.push(c), a.push([c, a.length]))
                        }
                        this._functionInterpolationT = createFunction({
                            type: "exponential",
                            stops: a,
                            base: i.base
                        }, {type: "number"})
                    }
                };
            StyleDeclaration.prototype.calculate = function (t, i) {
                var o = this.function(t && t.zoom, i || {});
                return void 0 !== this.minimum && o < this.minimum ? this.minimum : o
            }, StyleDeclaration.prototype.calculateInterpolationT = function (t) {
                return this.isFeatureConstant || this.isZoomConstant ? 0 : this._functionInterpolationT(t && t.zoom, {})
            }, module.exports = StyleDeclaration;
        }, {"../style-spec/function": 106, "../util/util": 215}],
        150: [function (_dereq_, module, exports) {
            "use strict";

            function getDeclarationValue(t) {
                return t.value
            }

            var util = _dereq_("../util/util"), StyleTransition = _dereq_("./style_transition"),
                StyleDeclaration = _dereq_("./style_declaration"),
                styleSpec = _dereq_("../style-spec/reference/latest"), validateStyle = _dereq_("./validate_style"),
                parseColor = _dereq_("./../style-spec/util/parse_color"), Evented = _dereq_("../util/evented"),
                TRANSITION_SUFFIX = "-transition", StyleLayer = function (t) {
                    function i(i) {
                        var a = this;
                        t.call(this), this.id = i.id, this.metadata = i.metadata, this.type = i.type, this.source = i.source, this.sourceLayer = i["source-layer"], this.minzoom = i.minzoom, this.maxzoom = i.maxzoom, this.filter = i.filter, this.paint = {}, this.layout = {}, this._paintSpecifications = styleSpec["paint_" + this.type], this._layoutSpecifications = styleSpec["layout_" + this.type], this._paintTransitions = {}, this._paintTransitionOptions = {}, this._paintDeclarations = {}, this._layoutDeclarations = {}, this._layoutFunctions = {};
                        var e, o, n = {validate: !1};
                        for (var r in i) {
                            var s = r.match(/^paint(?:\.(.*))?$/);
                            if (s) {
                                var l = s[1] || "";
                                for (e in i[r]) a.setPaintProperty(e, i[r][e], l, n)
                            }
                        }
                        for (o in i.layout) a.setLayoutProperty(o, i.layout[o], n);
                        for (e in a._paintSpecifications) a.paint[e] = a.getPaintValue(e);
                        for (o in a._layoutSpecifications) a._updateLayoutValue(o)
                    }

                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.setLayoutProperty = function (t, i, a) {
                        if (null == i) delete this._layoutDeclarations[t]; else {
                            var e = "layers." + this.id + ".layout." + t;
                            if (this._validate(validateStyle.layoutProperty, e, t, i, a)) return;
                            this._layoutDeclarations[t] = new StyleDeclaration(this._layoutSpecifications[t], i)
                        }
                        this._updateLayoutValue(t)
                    }, i.prototype.getLayoutProperty = function (t) {
                        return this._layoutDeclarations[t] && this._layoutDeclarations[t].value
                    }, i.prototype.getLayoutValue = function (t, i, a) {
                        var e = this._layoutSpecifications[t], o = this._layoutDeclarations[t];
                        return o ? o.calculate(i, a) : e.default
                    }, i.prototype.setPaintProperty = function (t, i, a, e) {
                        var o = "layers." + this.id + (a ? '["paint.' + a + '"].' : ".paint.") + t;
                        if (util.endsWith(t, TRANSITION_SUFFIX)) if (this._paintTransitionOptions[a || ""] || (this._paintTransitionOptions[a || ""] = {}), null === i || void 0 === i) delete this._paintTransitionOptions[a || ""][t]; else {
                            if (this._validate(validateStyle.paintProperty, o, t, i, e)) return;
                            this._paintTransitionOptions[a || ""][t] = i
                        } else if (this._paintDeclarations[a || ""] || (this._paintDeclarations[a || ""] = {}), null === i || void 0 === i) delete this._paintDeclarations[a || ""][t]; else {
                            if (this._validate(validateStyle.paintProperty, o, t, i, e)) return;
                            this._paintDeclarations[a || ""][t] = new StyleDeclaration(this._paintSpecifications[t], i)
                        }
                    }, i.prototype.getPaintProperty = function (t, i) {
                        return i = i || "", util.endsWith(t, TRANSITION_SUFFIX) ? this._paintTransitionOptions[i] && this._paintTransitionOptions[i][t] : this._paintDeclarations[i] && this._paintDeclarations[i][t] && this._paintDeclarations[i][t].value
                    }, i.prototype.getPaintValue = function (t, i, a) {
                        var e = this._paintSpecifications[t], o = this._paintTransitions[t];
                        return o ? o.calculate(i, a) : "color" === e.type && e.default ? parseColor(e.default) : e.default
                    }, i.prototype.getPaintValueStopZoomLevels = function (t) {
                        var i = this._paintTransitions[t];
                        return i ? i.declaration.stopZoomLevels : []
                    }, i.prototype.getLayoutValueStopZoomLevels = function (t) {
                        var i = this._layoutDeclarations[t];
                        return i ? i.stopZoomLevels : []
                    }, i.prototype.getPaintInterpolationT = function (t, i) {
                        var a = this._paintTransitions[t];
                        return a.declaration.calculateInterpolationT(i)
                    }, i.prototype.getLayoutInterpolationT = function (t, i) {
                        var a = this._layoutDeclarations[t];
                        return a.calculateInterpolationT(i)
                    }, i.prototype.isPaintValueFeatureConstant = function (t) {
                        var i = this._paintTransitions[t];
                        return !i || i.declaration.isFeatureConstant
                    }, i.prototype.isLayoutValueFeatureConstant = function (t) {
                        var i = this._layoutDeclarations[t];
                        return !i || i.isFeatureConstant
                    }, i.prototype.isPaintValueZoomConstant = function (t) {
                        var i = this._paintTransitions[t];
                        return !i || i.declaration.isZoomConstant
                    }, i.prototype.isLayoutValueZoomConstant = function (t) {
                        var i = this._layoutDeclarations[t];
                        return !i || i.isZoomConstant
                    }, i.prototype.isHidden = function (t) {
                        return !!(this.minzoom && t < this.minzoom) || (!!(this.maxzoom && t >= this.maxzoom) || "none" === this.layout.visibility)
                    }, i.prototype.updatePaintTransitions = function (t, i, a, e, o) {
                        for (var n = this, r = util.extend({}, this._paintDeclarations[""]), s = 0; s < t.length; s++) util.extend(r, n._paintDeclarations[t[s]]);
                        var l;
                        for (l in r) n._applyPaintDeclaration(l, r[l], i, a, e, o);
                        for (l in n._paintTransitions) l in r || n._applyPaintDeclaration(l, null, i, a, e, o)
                    }, i.prototype.updatePaintTransition = function (t, i, a, e, o, n) {
                        for (var r = this, s = this._paintDeclarations[""][t], l = 0; l < i.length; l++) {
                            var u = r._paintDeclarations[i[l]];
                            u && u[t] && (s = u[t])
                        }
                        this._applyPaintDeclaration(t, s, a, e, o, n)
                    }, i.prototype.recalculate = function (t) {
                        var i = this;
                        for (var a in i._paintTransitions) i.paint[a] = i.getPaintValue(a, {zoom: t});
                        for (var e in i._layoutFunctions) i.layout[e] = i.getLayoutValue(e, {zoom: t})
                    }, i.prototype.serialize = function () {
                        var t = this, i = {
                            id: this.id,
                            type: this.type,
                            source: this.source,
                            "source-layer": this.sourceLayer,
                            metadata: this.metadata,
                            minzoom: this.minzoom,
                            maxzoom: this.maxzoom,
                            filter: this.filter,
                            layout: util.mapObject(this._layoutDeclarations, getDeclarationValue)
                        };
                        for (var a in t._paintDeclarations) {
                            var e = "" === a ? "paint" : "paint." + a;
                            i[e] = util.mapObject(t._paintDeclarations[a], getDeclarationValue)
                        }
                        return util.filterObject(i, function (t, i) {
                            return void 0 !== t && !("layout" === i && !Object.keys(t).length)
                        })
                    }, i.prototype._applyPaintDeclaration = function (t, i, a, e, o, n) {
                        var r = a.transition ? this._paintTransitions[t] : void 0, s = this._paintSpecifications[t];
                        if (null !== i && void 0 !== i || (i = new StyleDeclaration(s, s.default)), !r || r.declaration.json !== i.json) {
                            var l = util.extend({duration: 300, delay: 0}, e, this.getPaintProperty(t + TRANSITION_SUFFIX)),
                                u = this._paintTransitions[t] = new StyleTransition(s, i, r, l, n);
                            u.instant() || (u.loopID = o.set(u.endTime - Date.now())), r && o.cancel(r.loopID)
                        }
                    }, i.prototype._updateLayoutValue = function (t) {
                        var i = this._layoutDeclarations[t];
                        i && i.isFunction ? this._layoutFunctions[t] = !0 : (delete this._layoutFunctions[t], this.layout[t] = this.getLayoutValue(t))
                    }, i.prototype._validate = function (t, i, a, e, o) {
                        return (!o || o.validate !== !1) && validateStyle.emitErrors(this, t.call(validateStyle, {
                            key: i,
                            layerType: this.type,
                            objectKey: a,
                            value: e,
                            styleSpec: styleSpec,
                            style: {glyphs: !0, sprite: !0}
                        }))
                    }, i
                }(Evented);
            module.exports = StyleLayer;
            var subclasses = {
                circle: _dereq_("./style_layer/circle_style_layer"),
                fill: _dereq_("./style_layer/fill_style_layer"),
                "fill-extrusion": _dereq_("./style_layer/fill_extrusion_style_layer"),
                line: _dereq_("./style_layer/line_style_layer"),
                symbol: _dereq_("./style_layer/symbol_style_layer")
            };
            StyleLayer.create = function (t) {
                var i = subclasses[t.type] || StyleLayer;
                return new i(t)
            };
        }, {
            "../style-spec/reference/latest": 118,
            "../util/evented": 202,
            "../util/util": 215,
            "./../style-spec/util/parse_color": 123,
            "./style_declaration": 149,
            "./style_layer/circle_style_layer": 151,
            "./style_layer/fill_extrusion_style_layer": 152,
            "./style_layer/fill_style_layer": 153,
            "./style_layer/line_style_layer": 154,
            "./style_layer/symbol_style_layer": 155,
            "./style_transition": 157,
            "./validate_style": 158
        }],
        151: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"), CircleBucket = _dereq_("../../data/bucket/circle_bucket"),
                CircleStyleLayer = function (e) {
                    function t() {
                        e.apply(this, arguments)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.createBucket = function (e) {
                        return new CircleBucket(e)
                    }, t
                }(StyleLayer);
            module.exports = CircleStyleLayer;
        }, {"../../data/bucket/circle_bucket": 45, "../style_layer": 150}],
        152: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                FillExtrusionBucket = _dereq_("../../data/bucket/fill_extrusion_bucket"),
                FillExtrusionStyleLayer = function (t) {
                    function e() {
                        t.apply(this, arguments)
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPaintValue = function (e, r, o) {
                        var l = t.prototype.getPaintValue.call(this, e, r, o);
                        return "fill-extrusion-color" === e && l && (l[3] = 1), l
                    }, e.prototype.createBucket = function (t) {
                        return new FillExtrusionBucket(t)
                    }, e
                }(StyleLayer);
            module.exports = FillExtrusionStyleLayer;
        }, {"../../data/bucket/fill_extrusion_bucket": 47, "../style_layer": 150}],
        153: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"), FillBucket = _dereq_("../../data/bucket/fill_bucket"),
                FillStyleLayer = function (t) {
                    function o() {
                        t.apply(this, arguments)
                    }

                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.getPaintValue = function (o, l, e) {
                        var i = this;
                        if ("fill-outline-color" === o) {
                            if (void 0 === this.getPaintProperty("fill-outline-color")) return t.prototype.getPaintValue.call(this, "fill-color", l, e);
                            for (var r = this._paintTransitions["fill-outline-color"]; r;) {
                                var n = r && r.declaration && r.declaration.value;
                                if (!n) return t.prototype.getPaintValue.call(i, "fill-color", l, e);
                                r = r.oldTransition
                            }
                        }
                        return t.prototype.getPaintValue.call(this, o, l, e)
                    }, o.prototype.getPaintValueStopZoomLevels = function (o) {
                        return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.getPaintValueStopZoomLevels.call(this, "fill-color") : t.prototype.getPaintValueStopZoomLevels.call(this, o)
                    }, o.prototype.getPaintInterpolationT = function (o, l) {
                        return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.getPaintInterpolationT.call(this, "fill-color", l) : t.prototype.getPaintInterpolationT.call(this, o, l)
                    }, o.prototype.isPaintValueFeatureConstant = function (o) {
                        return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.isPaintValueFeatureConstant.call(this, "fill-color") : t.prototype.isPaintValueFeatureConstant.call(this, o)
                    }, o.prototype.isPaintValueZoomConstant = function (o) {
                        return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.isPaintValueZoomConstant.call(this, "fill-color") : t.prototype.isPaintValueZoomConstant.call(this, o)
                    }, o.prototype.createBucket = function (t) {
                        return new FillBucket(t)
                    }, o
                }(StyleLayer);
            module.exports = FillStyleLayer;
        }, {"../../data/bucket/fill_bucket": 46, "../style_layer": 150}],
        154: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"), LineBucket = _dereq_("../../data/bucket/line_bucket"),
                util = _dereq_("../../util/util"), LineStyleLayer = function (e) {
                    function t() {
                        e.apply(this, arguments)
                    }

                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getPaintValue = function (t, r, o) {
                        var i = e.prototype.getPaintValue.call(this, t, r, o);
                        if (i && "line-dasharray" === t) {
                            var a = this.getPaintValue("line-width", util.extend({}, r, {zoom: Math.floor(r.zoom)}), o);
                            i.fromScale *= a, i.toScale *= a
                        }
                        return i
                    }, t.prototype.createBucket = function (e) {
                        return new LineBucket(e)
                    }, t
                }(StyleLayer);
            module.exports = LineStyleLayer;
        }, {"../../data/bucket/line_bucket": 48, "../../util/util": 215, "../style_layer": 150}],
        155: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"), SymbolBucket = _dereq_("../../data/bucket/symbol_bucket"),
                SymbolStyleLayer = function (t) {
                    function e() {
                        t.apply(this, arguments)
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getLayoutValue = function (e, o, r) {
                        var a = t.prototype.getLayoutValue.call(this, e, o, r);
                        if ("auto" !== a) return a;
                        switch (e) {
                            case"text-rotation-alignment":
                            case"icon-rotation-alignment":
                                return "line" === this.getLayoutValue("symbol-placement", o, r) ? "map" : "viewport";
                            case"text-pitch-alignment":
                                return this.getLayoutValue("text-rotation-alignment", o, r);
                            default:
                                return a
                        }
                    }, e.prototype.createBucket = function (t) {
                        return new SymbolBucket(t)
                    }, e
                }(StyleLayer);
            module.exports = SymbolStyleLayer;
        }, {"../../data/bucket/symbol_bucket": 49, "../style_layer": 150}],
        156: [function (_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("./style_layer"), util = _dereq_("../util/util"),
                featureFilter = _dereq_("../style-spec/feature_filter"),
                groupByLayout = _dereq_("../style-spec/group_by_layout"), StyleLayerIndex = function (e) {
                    e && this.replace(e)
                };
            StyleLayerIndex.prototype.replace = function (e) {
                var r = this;
                this.symbolOrder = [];
                for (var t = 0, i = e; t < i.length; t += 1) {
                    var a = i[t];
                    "symbol" === a.type && r.symbolOrder.push(a.id)
                }
                this._layerConfigs = {}, this._layers = {}, this.update(e, [])
            }, StyleLayerIndex.prototype.update = function (e, r, t) {
                for (var i = this, a = 0, l = e; a < l.length; a += 1) {
                    var y = l[a];
                    i._layerConfigs[y.id] = y;
                    var s = i._layers[y.id] = StyleLayer.create(y);
                    s.updatePaintTransitions({}, {transition: !1}), s.filter = featureFilter(s.filter)
                }
                for (var o = 0, u = r; o < u.length; o += 1) {
                    var n = u[o];
                    delete i._layerConfigs[n], delete i._layers[n]
                }
                t && (this.symbolOrder = t), this.familiesBySource = {};
                for (var f = groupByLayout(util.values(this._layerConfigs)), p = 0, d = f; p < d.length; p += 1) {
                    var h = d[p], c = h.map(function (e) {
                        return i._layers[e.id]
                    }), v = c[0];
                    if (!v.layout || "none" !== v.layout.visibility) {
                        var _ = v.source || "", g = i.familiesBySource[_];
                        g || (g = i.familiesBySource[_] = {});
                        var L = v.sourceLayer || "_geojsonTileLayer", m = g[L];
                        m || (m = g[L] = []), m.push(c)
                    }
                }
            }, module.exports = StyleLayerIndex;
        }, {
            "../style-spec/feature_filter": 104,
            "../style-spec/group_by_layout": 107,
            "../util/util": 215,
            "./style_layer": 150
        }],
        157: [function (_dereq_, module, exports) {
            "use strict";

            function interpZoomTransitioned(t, i, e) {
                if (void 0 !== t && void 0 !== i) return {
                    from: t.to,
                    fromScale: t.toScale,
                    to: i.to,
                    toScale: i.toScale,
                    t: e
                }
            }

            var util = _dereq_("../util/util"), interpolate = _dereq_("../style-spec/util/interpolate"),
                fakeZoomHistory = {lastIntegerZoom: 0, lastIntegerZoomTime: 0, lastZoom: 0},
                StyleTransition = function (t, i, e, o, a) {
                    this.declaration = i, this.startTime = this.endTime = (new Date).getTime(), this.oldTransition = e, this.duration = o.duration || 0, this.delay = o.delay || 0, this.zoomTransitioned = "piecewise-constant" === t.function && t.transition, this.interp = this.zoomTransitioned ? interpZoomTransitioned : interpolate[t.type], this.zoomHistory = a || fakeZoomHistory, this.instant() || (this.endTime = this.startTime + this.duration + this.delay), e && e.endTime <= this.startTime && delete e.oldTransition
                };
            StyleTransition.prototype.instant = function () {
                return !this.oldTransition || !this.interp || 0 === this.duration && 0 === this.delay
            }, StyleTransition.prototype.calculate = function (t, i, e) {
                var o = this._calculateTargetValue(t, i);
                if (this.instant()) return o;
                if (e = e || Date.now(), e >= this.endTime) return o;
                var a = this.oldTransition.calculate(t, i, this.startTime),
                    n = util.easeCubicInOut((e - this.startTime - this.delay) / this.duration);
                return this.interp(a, o, n)
            }, StyleTransition.prototype._calculateTargetValue = function (t, i) {
                if (!this.zoomTransitioned) return this.declaration.calculate(t, i);
                var e = t.zoom, o = this.zoomHistory.lastIntegerZoom, a = e > o ? 2 : .5,
                    n = this.declaration.calculate({zoom: e > o ? e - 1 : e + 1}, i),
                    r = this.declaration.calculate({zoom: e}, i),
                    s = Math.min((Date.now() - this.zoomHistory.lastIntegerZoomTime) / this.duration, 1),
                    l = Math.abs(e - o), u = interpolate(s, 1, l);
                return void 0 !== n && void 0 !== r ? {from: n, fromScale: a, to: r, toScale: 1, t: u} : void 0
            }, module.exports = StyleTransition;
        }, {"../style-spec/util/interpolate": 122, "../util/util": 215}],
        158: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = _dereq_("../style-spec/validate_style.min"), module.exports.emitErrors = function (r, e) {
                if (e && e.length) {
                    for (var t = 0; t < e.length; t++) r.fire("error", {error: new Error(e[t].message)});
                    return !0
                }
                return !1
            };
        }, {"../style-spec/validate_style.min": 144}],
        159: [function (_dereq_, module, exports) {
            "use strict";
            var Point = _dereq_("point-geometry"), Anchor = function (t) {
                function o(o, e, n, r) {
                    t.call(this, o, e), this.angle = n, void 0 !== r && (this.segment = r)
                }

                return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.clone = function () {
                    return new o(this.x, this.y, this.angle, this.segment)
                }, o
            }(Point);
            module.exports = Anchor;
        }, {"point-geometry": 25}],
        160: [function (_dereq_, module, exports) {
            "use strict";

            function checkMaxAngle(e, t, a, r, n) {
                if (void 0 === t.segment) return !0;
                for (var i = t, s = t.segment + 1, f = 0; f > -a / 2;) {
                    if (s--, s < 0) return !1;
                    f -= e[s].dist(i), i = e[s]
                }
                f += e[s].dist(e[s + 1]), s++;
                for (var l = [], o = 0; f < a / 2;) {
                    var u = e[s - 1], c = e[s], g = e[s + 1];
                    if (!g) return !1;
                    var h = u.angleTo(c) - c.angleTo(g);
                    for (h = Math.abs((h + 3 * Math.PI) % (2 * Math.PI) - Math.PI), l.push({
                        distance: f,
                        angleDelta: h
                    }), o += h; f - l[0].distance > r;) o -= l.shift().angleDelta;
                    if (o > n) return !1;
                    s++, f += c.dist(g)
                }
                return !0
            }

            module.exports = checkMaxAngle;
        }, {}],
        161: [function (_dereq_, module, exports) {
            "use strict";

            function clipLine(n, x, y, o, e) {
                for (var r = [], t = 0; t < n.length; t++) for (var i = n[t], u = void 0, d = 0; d < i.length - 1; d++) {
                    var P = i[d], w = i[d + 1];
                    P.x < x && w.x < x || (P.x < x ? P = new Point(x, P.y + (w.y - P.y) * ((x - P.x) / (w.x - P.x)))._round() : w.x < x && (w = new Point(x, P.y + (w.y - P.y) * ((x - P.x) / (w.x - P.x)))._round()), P.y < y && w.y < y || (P.y < y ? P = new Point(P.x + (w.x - P.x) * ((y - P.y) / (w.y - P.y)), y)._round() : w.y < y && (w = new Point(P.x + (w.x - P.x) * ((y - P.y) / (w.y - P.y)), y)._round()), P.x >= o && w.x >= o || (P.x >= o ? P = new Point(o, P.y + (w.y - P.y) * ((o - P.x) / (w.x - P.x)))._round() : w.x >= o && (w = new Point(o, P.y + (w.y - P.y) * ((o - P.x) / (w.x - P.x)))._round()), P.y >= e && w.y >= e || (P.y >= e ? P = new Point(P.x + (w.x - P.x) * ((e - P.y) / (w.y - P.y)), e)._round() : w.y >= e && (w = new Point(P.x + (w.x - P.x) * ((e - P.y) / (w.y - P.y)), e)._round()), u && P.equals(u[u.length - 1]) || (u = [P], r.push(u)), u.push(w)))))
                }
                return r
            }

            var Point = _dereq_("point-geometry");
            module.exports = clipLine;
        }, {"point-geometry": 25}],
        162: [function (_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"), Point = _dereq_("point-geometry"),
                CollisionBoxArray = createStructArrayType({
                    members: [{
                        type: "Int16",
                        name: "anchorPointX"
                    }, {type: "Int16", name: "anchorPointY"}, {type: "Int16", name: "x1"}, {
                        type: "Int16",
                        name: "y1"
                    }, {type: "Int16", name: "x2"}, {type: "Int16", name: "y2"}, {
                        type: "Float32",
                        name: "maxScale"
                    }, {type: "Uint32", name: "featureIndex"}, {
                        type: "Uint16",
                        name: "sourceLayerIndex"
                    }, {type: "Uint16", name: "bucketIndex"}, {type: "Int16", name: "bbox0"}, {
                        type: "Int16",
                        name: "bbox1"
                    }, {type: "Int16", name: "bbox2"}, {type: "Int16", name: "bbox3"}, {
                        type: "Float32",
                        name: "placementScale"
                    }]
                });
            Object.defineProperty(CollisionBoxArray.prototype.StructType.prototype, "anchorPoint", {
                get: function () {
                    return new Point(this.anchorPointX, this.anchorPointY)
                }
            }), module.exports = CollisionBoxArray;
        }, {"../util/struct_array": 212, "point-geometry": 25}],
        163: [function (_dereq_, module, exports) {
            "use strict";
            var CollisionFeature = function (t, e, i, o, a, n, s, l, r, d, u) {
                var h = s.top * l - r, f = s.bottom * l + r, m = s.left * l - r, x = s.right * l + r;
                if (this.boxStartIndex = t.length, d) {
                    var _ = f - h, b = x - m;
                    if (_ > 0) if (_ = Math.max(10 * l, _), u) {
                        var v = e[i.segment + 1].sub(e[i.segment])._unit()._mult(b), c = [i.sub(v), i.add(v)];
                        this._addLineCollisionBoxes(t, c, i, 0, b, _, o, a, n)
                    } else this._addLineCollisionBoxes(t, e, i, i.segment, b, _, o, a, n)
                } else t.emplaceBack(i.x, i.y, m, h, x, f, 1 / 0, o, a, n, 0, 0, 0, 0, 0);
                this.boxEndIndex = t.length
            };
            CollisionFeature.prototype._addLineCollisionBoxes = function (t, e, i, o, a, n, s, l, r) {
                var d = n / 2, u = Math.floor(a / d), h = Math.floor(u / 4), f = -n / 2, m = i, x = o + 1, _ = f,
                    b = -a / 2, v = b - a / 8;
                do {
                    if (x--, x < 0) {
                        if (_ > b) return;
                        x = 0;
                        break
                    }
                    _ -= e[x].dist(m), m = e[x]
                } while (_ > v);
                for (var c = e[x].dist(e[x + 1]), g = -h; g < u + h; g++) {
                    var p = b + g * d;
                    if (!(p < _)) {
                        for (; _ + c < p;) {
                            if (_ += c, x++, x + 1 >= e.length) return;
                            c = e[x].dist(e[x + 1])
                        }
                        var C = p - _, M = e[x], B = e[x + 1], k = B.sub(M)._unit()._mult(C)._add(M)._round(),
                            y = Math.max(Math.abs(p - f) - d / 2, 0), F = a / 2 / y;
                        (g < 0 || g >= u) && (F = Math.min(F, .99)), t.emplaceBack(k.x, k.y, -n / 2, -n / 2, n / 2, n / 2, F, s, l, r, 0, 0, 0, 0, 0)
                    }
                }
            }, module.exports = CollisionFeature;
        }, {}],
        164: [function (_dereq_, module, exports) {
            "use strict";
            var Point = _dereq_("point-geometry"), EXTENT = _dereq_("../data/extent"), Grid = _dereq_("grid-index"),
                intersectionTests = _dereq_("../util/intersection_tests"), CollisionTile = function (t, e, i, a, r) {
                    if ("object" == typeof t) {
                        var o = t;
                        r = e, t = o.angle, e = o.pitch, i = o.cameraToCenterDistance, a = o.cameraToTileDistance, this.grid = new Grid(o.grid), this.ignoredGrid = new Grid(o.ignoredGrid)
                    } else this.grid = new Grid(EXTENT, 12, 6), this.ignoredGrid = new Grid(EXTENT, 12, 0);
                    this.perspectiveRatio = 1 + .5 * (a / i - 1), this.minScale = .5 / this.perspectiveRatio, this.maxScale = 2 / this.perspectiveRatio, this.angle = t, this.pitch = e, this.cameraToCenterDistance = i, this.cameraToTileDistance = a;
                    var n = Math.sin(t), s = Math.cos(t);
                    if (this.rotationMatrix = [s, -n, n, s], this.reverseRotationMatrix = [s, n, -n, s], this.yStretch = Math.max(1, a / (i * Math.cos(e / 180 * Math.PI))), this.collisionBoxArray = r, 0 === r.length) {
                        r.emplaceBack();
                        var l = 32767;
                        r.emplaceBack(0, 0, 0, -l, 0, l, l, 0, 0, 0, 0, 0, 0, 0, 0, 0), r.emplaceBack(EXTENT, 0, 0, -l, 0, l, l, 0, 0, 0, 0, 0, 0, 0, 0, 0), r.emplaceBack(0, 0, -l, 0, l, 0, l, 0, 0, 0, 0, 0, 0, 0, 0, 0), r.emplaceBack(0, EXTENT, -l, 0, l, 0, l, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                    }
                    this.tempCollisionBox = r.get(0), this.edges = [r.get(1), r.get(2), r.get(3), r.get(4)]
                };
            CollisionTile.prototype.serialize = function (t) {
                var e = this.grid.toArrayBuffer(), i = this.ignoredGrid.toArrayBuffer();
                return t && (t.push(e), t.push(i)), {
                    angle: this.angle,
                    pitch: this.pitch,
                    cameraToCenterDistance: this.cameraToCenterDistance,
                    cameraToTileDistance: this.cameraToTileDistance,
                    grid: e,
                    ignoredGrid: i
                }
            }, CollisionTile.prototype.placeCollisionFeature = function (t, e, i) {
                for (var a = this, r = this.collisionBoxArray, o = this.minScale, n = this.rotationMatrix, s = this.yStretch, l = t.boxStartIndex; l < t.boxEndIndex; l++) {
                    var c = r.get(l), h = c.anchorPoint._matMult(n), x = h.x, m = h.y,
                        p = x + c.x1 * a.perspectiveRatio, g = m + c.y1 * s * a.perspectiveRatio,
                        y = x + c.x2 * a.perspectiveRatio, d = m + c.y2 * s * a.perspectiveRatio;
                    if (c.bbox0 = p, c.bbox1 = g, c.bbox2 = y, c.bbox3 = d, !e) for (var u = a.grid.query(p, g, y, d), v = 0; v < u.length; v++) {
                        var M = r.get(u[v]), T = M.anchorPoint._matMult(n);
                        if (o = a.getPlacementScale(o, h, c, T, M), o >= a.maxScale) return o
                    }
                    if (i) {
                        var f = void 0;
                        if (a.angle) {
                            var S = a.reverseRotationMatrix, P = new Point(c.x1, c.y1).matMult(S),
                                b = new Point(c.x2, c.y1).matMult(S), C = new Point(c.x1, c.y2).matMult(S),
                                N = new Point(c.x2, c.y2).matMult(S);
                            f = a.tempCollisionBox, f.anchorPointX = c.anchorPoint.x, f.anchorPointY = c.anchorPoint.y, f.x1 = Math.min(P.x, b.x, C.x, N.x), f.y1 = Math.min(P.y, b.x, C.x, N.x), f.x2 = Math.max(P.x, b.x, C.x, N.x), f.y2 = Math.max(P.y, b.x, C.x, N.x), f.maxScale = c.maxScale
                        } else f = c;
                        for (var w = 0; w < this.edges.length; w++) {
                            var B = a.edges[w];
                            if (o = a.getPlacementScale(o, c.anchorPoint, f, B.anchorPoint, B), o >= a.maxScale) return o
                        }
                    }
                }
                return o
            }, CollisionTile.prototype.queryRenderedSymbols = function (t, e) {
                var i = {}, a = [];
                if (0 === t.length || 0 === this.grid.keys.length && 0 === this.ignoredGrid.keys.length) return a;
                for (var r = this.collisionBoxArray, o = this.rotationMatrix, n = this.yStretch, s = [], l = 1 / 0, c = 1 / 0, h = -(1 / 0), x = -(1 / 0), m = 0; m < t.length; m++) for (var p = t[m], g = 0; g < p.length; g++) {
                    var y = p[g].matMult(o);
                    l = Math.min(l, y.x), c = Math.min(c, y.y), h = Math.max(h, y.x), x = Math.max(x, y.y), s.push(y)
                }
                for (var d = this.grid.query(l, c, h, x), u = this.ignoredGrid.query(l, c, h, x), v = 0; v < u.length; v++) d.push(u[v]);
                for (var M = e / this.perspectiveRatio, T = Math.pow(2, Math.ceil(Math.log(M) / Math.LN2 * 10) / 10), f = 0; f < d.length; f++) {
                    var S = r.get(d[f]), P = S.sourceLayerIndex, b = S.featureIndex;
                    if (void 0 === i[P] && (i[P] = {}), !i[P][b] && !(T < S.placementScale || T > S.maxScale)) {
                        var C = S.anchorPoint.matMult(o), N = C.x + S.x1 / M, w = C.y + S.y1 / M * n,
                            B = C.x + S.x2 / M, G = C.y + S.y2 / M * n,
                            E = [new Point(N, w), new Point(B, w), new Point(B, G), new Point(N, G)];
                        intersectionTests.polygonIntersectsPolygon(s, E) && (i[P][b] = !0, a.push(d[f]))
                    }
                }
                return a
            }, CollisionTile.prototype.getPlacementScale = function (t, e, i, a, r) {
                var o = e.x - a.x, n = e.y - a.y, s = (r.x1 - i.x2) / o, l = (r.x2 - i.x1) / o,
                    c = (r.y1 - i.y2) * this.yStretch / n, h = (r.y2 - i.y1) * this.yStretch / n;
                (isNaN(s) || isNaN(l)) && (s = l = 1), (isNaN(c) || isNaN(h)) && (c = h = 1);
                var x = Math.min(Math.max(s, l), Math.max(c, h)), m = r.maxScale, p = i.maxScale;
                return x > m && (x = m), x > p && (x = p), x > t && x >= r.placementScale && (t = x), t
            }, CollisionTile.prototype.insertCollisionFeature = function (t, e, i) {
                for (var a = this, r = i ? this.ignoredGrid : this.grid, o = this.collisionBoxArray, n = t.boxStartIndex; n < t.boxEndIndex; n++) {
                    var s = o.get(n);
                    s.placementScale = e, e < a.maxScale && (1 === a.perspectiveRatio || s.maxScale >= 1) && r.insert(n, s.bbox0, s.bbox1, s.bbox2, s.bbox3)
                }
            }, module.exports = CollisionTile;
        }, {"../data/extent": 53, "../util/intersection_tests": 206, "grid-index": 16, "point-geometry": 25}],
        165: [function (_dereq_, module, exports) {
            "use strict";

            function getAnchors(e, r, t, n, a, l, o, i, c) {
                var h = n ? .6 * l * o : 0, s = Math.max(n ? n.right - n.left : 0, a ? a.right - a.left : 0),
                    u = 0 === e[0].x || e[0].x === c || 0 === e[0].y || e[0].y === c;
                r - s * o < r / 4 && (r = s * o + r / 4);
                var g = 2 * l, p = u ? r / 2 * i % r : (s / 2 + g) * o * i % r;
                return resample(e, p, r, h, t, s * o, u, !1, c)
            }

            function resample(e, r, t, n, a, l, o, i, c) {
                for (var h = l / 2, s = 0, u = 0; u < e.length - 1; u++) s += e[u].dist(e[u + 1]);
                for (var g = 0, p = r - t, x = [], f = 0; f < e.length - 1; f++) {
                    for (var v = e[f], m = e[f + 1], y = v.dist(m), A = m.angleTo(v); p + t < g + y;) {
                        p += t;
                        var d = (p - g) / y, k = interpolate(v.x, m.x, d), q = interpolate(v.y, m.y, d);
                        if (k >= 0 && k < c && q >= 0 && q < c && p - h >= 0 && p + h <= s) {
                            var M = new Anchor(k, q, A, f)._round();
                            n && !checkMaxAngle(e, M, l, n, a) || x.push(M)
                        }
                    }
                    g += y
                }
                return i || x.length || o || (x = resample(e, g / 2, t, n, a, l, o, !0, c)), x
            }

            var interpolate = _dereq_("../style-spec/util/interpolate"), Anchor = _dereq_("../symbol/anchor"),
                checkMaxAngle = _dereq_("./check_max_angle");
            module.exports = getAnchors;
        }, {"../style-spec/util/interpolate": 122, "../symbol/anchor": 159, "./check_max_angle": 160}],
        166: [function (_dereq_, module, exports) {
            "use strict";
            var ShelfPack = _dereq_("@mapbox/shelf-pack"), util = _dereq_("../util/util"), SIZE_GROWTH_RATE = 4,
                DEFAULT_SIZE = 128, MAX_SIZE = 2048, GlyphAtlas = function () {
                    this.width = DEFAULT_SIZE, this.height = DEFAULT_SIZE, this.atlas = new ShelfPack(this.width, this.height), this.index = {}, this.ids = {}, this.data = new Uint8Array(this.width * this.height)
                };
            GlyphAtlas.prototype.getGlyphs = function () {
                var t, i, e, h = this, r = {};
                for (var s in h.ids) t = s.split("#"), i = t[0], e = t[1], r[i] || (r[i] = []), r[i].push(e);
                return r
            }, GlyphAtlas.prototype.getRects = function () {
                var t, i, e, h = this, r = {};
                for (var s in h.ids) t = s.split("#"), i = t[0], e = t[1], r[i] || (r[i] = {}), r[i][e] = h.index[s];
                return r
            }, GlyphAtlas.prototype.addGlyph = function (t, i, e, h) {
                var r = this;
                if (!e) return null;
                var s = i + "#" + e.id;
                if (this.index[s]) return this.ids[s].indexOf(t) < 0 && this.ids[s].push(t), this.index[s];
                if (!e.bitmap) return null;
                var a = e.width + 2 * h, E = e.height + 2 * h, n = 1, l = a + 2 * n, T = E + 2 * n,
                    u = this.atlas.packOne(l, T);
                if (u || (this.resize(), u = this.atlas.packOne(l, T)), !u) return util.warnOnce("glyph bitmap overflow"), null;
                this.index[s] = u, this.ids[s] = [t];
                for (var d = this.data, p = e.bitmap, A = 0; A < E; A++) for (var _ = r.width * (u.y + A + n) + u.x + n, o = a * A, x = 0; x < a; x++) d[_ + x] = p[o + x];
                return this.dirty = !0, u
            }, GlyphAtlas.prototype.resize = function () {
                var t = this, i = this.width, e = this.height;
                if (!(i >= MAX_SIZE || e >= MAX_SIZE)) {
                    this.texture && (this.gl && this.gl.deleteTexture(this.texture), this.texture = null), this.width *= SIZE_GROWTH_RATE, this.height *= SIZE_GROWTH_RATE, this.atlas.resize(this.width, this.height);
                    for (var h = new ArrayBuffer(this.width * this.height), r = 0; r < e; r++) {
                        var s = new Uint8Array(t.data.buffer, e * r, i),
                            a = new Uint8Array(h, e * r * SIZE_GROWTH_RATE, i);
                        a.set(s)
                    }
                    this.data = new Uint8Array(h)
                }
            }, GlyphAtlas.prototype.bind = function (t) {
                this.gl = t, this.texture ? t.bindTexture(t.TEXTURE_2D, this.texture) : (this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, t.ALPHA, this.width, this.height, 0, t.ALPHA, t.UNSIGNED_BYTE, null))
            }, GlyphAtlas.prototype.updateTexture = function (t) {
                this.bind(t), this.dirty && (t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this.width, this.height, t.ALPHA, t.UNSIGNED_BYTE, this.data), this.dirty = !1)
            }, module.exports = GlyphAtlas;
        }, {"../util/util": 215, "@mapbox/shelf-pack": 2}],
        167: [function (_dereq_, module, exports) {
            "use strict";

            function glyphUrl(t, e, a, l) {
                return l = l || "abc", a.replace("{s}", l[t.length % l.length]).replace("{fontstack}", t).replace("{range}", e)
            }

            var normalizeURL = _dereq_("../util/mapbox").normalizeGlyphsURL, ajax = _dereq_("../util/ajax"),
                verticalizePunctuation = _dereq_("../util/verticalize_punctuation"), Glyphs = _dereq_("../util/glyphs"),
                GlyphAtlas = _dereq_("../symbol/glyph_atlas"), Protobuf = _dereq_("pbf"),
                SimpleGlyph = function (t, e, a) {
                    var l = 1;
                    this.advance = t.advance, this.left = t.left - a - l, this.top = t.top + a + l, this.rect = e
                }, GlyphSource = function (t) {
                    this.url = t && normalizeURL(t), this.atlases = {}, this.stacks = {}, this.loading = {}
                };
            GlyphSource.prototype.getSimpleGlyphs = function (t, e, a, l) {
                var i = this;
                void 0 === this.stacks[t] && (this.stacks[t] = {}), void 0 === this.atlases[t] && (this.atlases[t] = new GlyphAtlas);
                for (var r = {}, o = this.stacks[t], s = this.atlases[t], n = 3, h = {}, p = 0, u = function (e) {
                    var l = Math.floor(e / 256);
                    if (o[l]) {
                        var i = o[l].glyphs[e], u = s.addGlyph(a, t, i, n);
                        i && (r[e] = new SimpleGlyph(i, u, n))
                    } else void 0 === h[l] && (h[l] = [], p++), h[l].push(e)
                }, c = 0; c < e.length; c++) {
                    var y = e[c], f = String.fromCharCode(y);
                    u(y), verticalizePunctuation.lookup[f] && u(verticalizePunctuation.lookup[f].charCodeAt(0))
                }
                p || l(void 0, r, t);
                var v = function (e, o, u) {
                    if (!e) for (var c = i.stacks[t][o] = u.stacks[0], y = 0; y < h[o].length; y++) {
                        var f = h[o][y], v = c.glyphs[f], d = s.addGlyph(a, t, v, n);
                        v && (r[f] = new SimpleGlyph(v, d, n))
                    }
                    p--, p || l(void 0, r, t)
                };
                for (var d in h) i.loadRange(t, d, v)
            }, GlyphSource.prototype.loadRange = function (t, e, a) {
                if (256 * e > 65535) return a("glyphs > 65535 not supported");
                void 0 === this.loading[t] && (this.loading[t] = {});
                var l = this.loading[t];
                if (l[e]) l[e].push(a); else {
                    l[e] = [a];
                    var i = 256 * e + "-" + (256 * e + 255), r = glyphUrl(t, i, this.url);
                    ajax.getArrayBuffer(r, function (t, a) {
                        for (var i = !t && new Glyphs(new Protobuf(a.data)), r = 0; r < l[e].length; r++) l[e][r](t, e, i);
                        delete l[e]
                    })
                }
            }, GlyphSource.prototype.getGlyphAtlas = function (t) {
                return this.atlases[t]
            }, module.exports = GlyphSource;
        }, {
            "../symbol/glyph_atlas": 166,
            "../util/ajax": 193,
            "../util/glyphs": 205,
            "../util/mapbox": 209,
            "../util/verticalize_punctuation": 217,
            "pbf": 24
        }],
        168: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = function (e) {
                function t(t) {
                    g.push(e[t]), l++
                }

                function r(e, t, r) {
                    var n = u[e];
                    return delete u[e], u[t] = n, g[n].geometry[0].pop(), g[n].geometry[0] = g[n].geometry[0].concat(r[0]), n
                }

                function n(e, t, r) {
                    var n = i[t];
                    return delete i[t], i[e] = n, g[n].geometry[0].shift(), g[n].geometry[0] = r[0].concat(g[n].geometry[0]), n
                }

                function o(e, t, r) {
                    var n = r ? t[0][t[0].length - 1] : t[0][0];
                    return e + ":" + n.x + ":" + n.y
                }

                for (var i = {}, u = {}, g = [], l = 0, m = 0; m < e.length; m++) {
                    var y = e[m], c = y.geometry, f = y.text;
                    if (f) {
                        var a = o(f, c), s = o(f, c, !0);
                        if (a in u && s in i && u[a] !== i[s]) {
                            var v = n(a, s, c), d = r(a, s, g[v].geometry);
                            delete i[a], delete u[s], u[o(f, g[d].geometry, !0)] = d, g[v].geometry = null
                        } else a in u ? r(a, s, c) : s in i ? n(a, s, c) : (t(m), i[a] = l - 1, u[s] = l - 1)
                    } else t(m)
                }
                return g.filter(function (e) {
                    return e.geometry
                })
            };
        }, {}],
        169: [function (_dereq_, module, exports) {
            "use strict";

            function SymbolQuad(t, e, n, a, i, o, r, l, u, c, h) {
                this.anchorPoint = t, this.tl = e, this.tr = n, this.bl = a, this.br = i, this.tex = o, this.anchorAngle = r, this.glyphAngle = l, this.minScale = u, this.maxScale = c, this.writingMode = h
            }

            function getIconQuads(t, e, n, a, i, o, r, l, u) {
                var c, h, g, s, m = e.image, d = i.layout, x = 1, f = e.top - x / m.pixelRatio,
                    S = e.left - x / m.pixelRatio, p = e.bottom + x / m.pixelRatio, y = e.right + x / m.pixelRatio;
                if ("none" !== d["icon-text-fit"] && r) {
                    var M = y - S, P = p - f, w = d["text-size"] / 24, v = r.left * w, b = r.right * w, I = r.top * w,
                        Q = r.bottom * w, _ = b - v, G = Q - I, R = d["icon-text-fit-padding"][0],
                        D = d["icon-text-fit-padding"][1], V = d["icon-text-fit-padding"][2],
                        L = d["icon-text-fit-padding"][3], A = "width" === d["icon-text-fit"] ? .5 * (G - P) : 0,
                        B = "height" === d["icon-text-fit"] ? .5 * (_ - M) : 0,
                        E = "width" === d["icon-text-fit"] || "both" === d["icon-text-fit"] ? _ : M,
                        F = "height" === d["icon-text-fit"] || "both" === d["icon-text-fit"] ? G : P;
                    c = new Point(v + B - L, I + A - R), h = new Point(v + B + D + E, I + A - R), g = new Point(v + B + D + E, I + A + V + F), s = new Point(v + B - L, I + A + V + F)
                } else c = new Point(S, f), h = new Point(y, f), g = new Point(y, p), s = new Point(S, p);
                var q = i.getLayoutValue("icon-rotate", l, u) * Math.PI / 180;
                if (o) {
                    var N = a[t.segment];
                    if (t.y === N.y && t.x === N.x && t.segment + 1 < a.length) {
                        var k = a[t.segment + 1];
                        q += Math.atan2(t.y - k.y, t.x - k.x) + Math.PI
                    } else q += Math.atan2(t.y - N.y, t.x - N.x)
                }
                if (q) {
                    var z = Math.sin(q), j = Math.cos(q), C = [j, -z, z, j];
                    c = c.matMult(C), h = h.matMult(C), s = s.matMult(C), g = g.matMult(C)
                }
                var H = {
                    x: m.textureRect.x - x,
                    y: m.textureRect.y - x,
                    w: m.textureRect.w + 2 * x,
                    h: m.textureRect.h + 2 * x
                };
                return [new SymbolQuad(new Point(t.x, t.y), c, h, s, g, H, 0, 0, minScale, 1 / 0)]
            }

            function getGlyphQuads(t, e, n, a, i, o, r, l) {
                for (var u = 24, c = i.getLayoutValue("text-rotate", r, l) * Math.PI / 180, h = i.layout["text-keep-upright"], g = i.getLayoutValue("text-offset", r, l).map(function (t) {
                    return t * u
                }), s = e.positionedGlyphs, m = [], d = minScale, x = 0; x < s.length; x++) {
                    var f = s[x], S = f.glyph;
                    if (S) {
                        var p = S.rect;
                        if (p) {
                            var y = (f.x + S.advance / 2) * n, M = void 0;
                            o ? (M = [], d = Math.max(d, getLineGlyphs(M, t, y, a, t.segment, !1)), h && (d = Math.max(d, getLineGlyphs(M, t, y, a, t.segment, !0)))) : M = [{
                                anchorPoint: new Point(t.x, t.y),
                                upsideDown: !1,
                                angle: 0,
                                maxScale: 1 / 0,
                                minScale: minScale
                            }];
                            for (var P = {
                                upright: calculateBaseQuad(f, S, p, g),
                                upsideDown: calculateBaseQuad(f, S, p, [g[0], -g[1]])
                            }, w = 0; w < M.length; w++) {
                                var v = M[w], b = P[v.upsideDown ? "upsideDown" : "upright"], I = b.tl, Q = b.tr,
                                    _ = b.bl, G = b.br;
                                if (c) {
                                    var R = Math.sin(c), D = Math.cos(c), V = [D, -R, R, D];
                                    I = I.matMult(V), Q = Q.matMult(V), _ = _.matMult(V), G = G.matMult(V)
                                }
                                var L = Math.max(v.minScale, d),
                                    A = (t.angle + (v.upsideDown ? Math.PI : 0) + 2 * Math.PI) % (2 * Math.PI),
                                    B = (v.angle + (v.upsideDown ? Math.PI : 0) + 2 * Math.PI) % (2 * Math.PI);
                                m.push(new SymbolQuad(v.anchorPoint, I, Q, _, G, p, A, B, L, v.maxScale, e.writingMode))
                            }
                        }
                    }
                }
                return m
            }

            function calculateBaseQuad(t, e, n, a) {
                var i = t.x + e.left + a[0], o = t.y - e.top + a[1], r = i + n.w, l = o + n.h,
                    u = new Point(t.x, e.advance / 2), c = new Point(i, o), h = new Point(r, o), g = new Point(i, l),
                    s = new Point(r, l);
                return 0 !== t.angle && (c._sub(u)._rotate(t.angle)._add(u), h._sub(u)._rotate(t.angle)._add(u), g._sub(u)._rotate(t.angle)._add(u), s._sub(u)._rotate(t.angle)._add(u)), {
                    tl: c,
                    tr: h,
                    bl: g,
                    br: s
                }
            }

            function getLineGlyphs(t, e, n, a, i, o) {
                for (var r = n >= 0 ^ o, l = Math.abs(n), u = new Point(e.x, e.y), c = getSegmentEnd(r, a, i), h = {
                    anchor: u,
                    end: c,
                    index: i,
                    minScale: getMinScaleForSegment(l, u, c),
                    maxScale: 1 / 0
                }; ;) {
                    if (insertSegmentGlyph(t, h, r, o), h.minScale <= e.scale) return e.scale;
                    var g = getNextVirtualSegment(h, a, l, r);
                    if (!g) return h.minScale;
                    h = g
                }
            }

            function insertSegmentGlyph(t, e, n, a) {
                var i = Math.atan2(e.end.y - e.anchor.y, e.end.x - e.anchor.x), o = n ? i : i + Math.PI;
                t.push({
                    anchorPoint: e.anchor,
                    upsideDown: a,
                    minScale: e.minScale,
                    maxScale: e.maxScale,
                    angle: (o + 2 * Math.PI) % (2 * Math.PI)
                })
            }

            function getVirtualSegmentAnchor(t, e, n) {
                var a = e.sub(t)._unit();
                return t.sub(a._mult(n))
            }

            function getMinScaleForSegment(t, e, n) {
                var a = e.dist(n);
                return t / a
            }

            function getSegmentEnd(t, e, n) {
                return t ? e[n + 1] : e[n]
            }

            function getNextVirtualSegment(t, e, n, a) {
                for (var i = t.end, o = i, r = t.index; o.equals(i);) {
                    if (a && r + 2 < e.length) r += 1; else {
                        if (a || 0 === r) return null;
                        r -= 1
                    }
                    o = getSegmentEnd(a, e, r)
                }
                var l = getVirtualSegmentAnchor(i, o, t.anchor.dist(t.end));
                return {anchor: l, end: o, index: r, minScale: getMinScaleForSegment(n, l, o), maxScale: t.minScale}
            }

            var Point = _dereq_("point-geometry");
            module.exports = {getIconQuads: getIconQuads, getGlyphQuads: getGlyphQuads, SymbolQuad: SymbolQuad};
            var minScale = .5;
        }, {"point-geometry": 25}],
        170: [function (_dereq_, module, exports) {
            "use strict";

            function PositionedGlyph(e, t, i, n, a) {
                this.codePoint = e, this.x = t, this.y = i, this.glyph = n || null, this.angle = a
            }

            function Shaping(e, t, i, n, a, r, o) {
                this.positionedGlyphs = e, this.text = t, this.top = i, this.bottom = n, this.left = a, this.right = r, this.writingMode = o
            }

            function breakLines(e, t) {
                for (var i = [], n = 0, a = 0, r = t; a < r.length; a += 1) {
                    var o = r[a];
                    i.push(e.substring(n, o)), n = o
                }
                return n < e.length && i.push(e.substring(n, e.length)), i
            }

            function shapeText(e, t, i, n, a, r, o, s, l, h, c) {
                var u = e.trim();
                c === WritingMode.vertical && (u = verticalizePunctuation(u));
                var d, p = [], g = new Shaping(p, u, l[1], l[1], l[0], l[0], c);
                return d = rtlTextPlugin.processBidirectionalText ? rtlTextPlugin.processBidirectionalText(u, determineLineBreaks(u, s, i, t)) : breakLines(u, determineLineBreaks(u, s, i, t)), shapeLines(g, t, d, n, a, r, o, l, c, s, h), !!p.length && g
            }

            function determineAverageLineWidth(e, t, i, n) {
                var a = 0;
                for (var r in e) {
                    var o = n[e.charCodeAt(r)];
                    o && (a += o.advance + t)
                }
                var s = Math.max(1, Math.ceil(a / i));
                return a / s
            }

            function calculateBadness(e, t, i, n) {
                var a = Math.pow(e - t, 2);
                return n ? e < t ? a / 2 : 2 * a : a + Math.abs(i) * i
            }

            function calculatePenalty(e, t) {
                var i = 0;
                return 10 === e && (i -= 1e4), 40 !== e && 65288 !== e || (i += 50), 41 !== t && 65289 !== t || (i += 50), i
            }

            function evaluateBreak(e, t, i, n, a, r) {
                for (var o = null, s = calculateBadness(t, i, a, r), l = 0, h = n; l < h.length; l += 1) {
                    var c = h[l], u = t - c.x, d = calculateBadness(u, i, a, r) + c.badness;
                    d <= s && (o = c, s = d)
                }
                return {index: e, x: t, priorBreak: o, badness: s}
            }

            function leastBadBreaks(e) {
                return e ? leastBadBreaks(e.priorBreak).concat(e.index) : []
            }

            function determineLineBreaks(e, t, i, n) {
                if (!i) return [];
                if (!e) return [];
                for (var a = [], r = determineAverageLineWidth(e, t, i, n), o = 0, s = 0; s < e.length; s++) {
                    var l = e.charCodeAt(s), h = n[l];
                    h && !whitespace[l] && (o += h.advance + t), s < e.length - 1 && (breakable[l] || scriptDetection.charAllowsIdeographicBreaking(l)) && a.push(evaluateBreak(s + 1, o, r, a, calculatePenalty(l, e.charCodeAt(s + 1)), !1))
                }
                return leastBadBreaks(evaluateBreak(e.length, o, r, a, 0, !0))
            }

            function shapeLines(e, t, i, n, a, r, o, s, l, h, c) {
                var u = -17, d = 0, p = u, g = 0, v = e.positionedGlyphs;
                for (var f in i) {
                    var x = i[f].trim();
                    if (x.length) {
                        for (var B = v.length, k = 0; k < x.length; k++) {
                            var y = x.charCodeAt(k), P = t[y];
                            P && (scriptDetection.charHasUprightVerticalOrientation(y) && l !== WritingMode.horizontal ? (v.push(new PositionedGlyph(y, d, 0, P, -Math.PI / 2)), d += c + h) : (v.push(new PositionedGlyph(y, d, p, P, 0)), d += P.advance + h))
                        }
                        if (v.length !== B) {
                            var b = d - h;
                            g = Math.max(b, g), justifyLine(v, t, B, v.length - 1, o)
                        }
                        d = 0, p += n
                    } else p += n
                }
                align(v, o, a, r, g, n, i.length);
                var m = i.length * n;
                e.top += -r * m, e.bottom = e.top + m, e.left += -a * g, e.right = e.left + g
            }

            function justifyLine(e, t, i, n, a) {
                if (a) for (var r = t[e[n].codePoint].advance, o = (e[n].x + r) * a, s = i; s <= n; s++) e[s].x -= o
            }

            function align(e, t, i, n, a, r, o) {
                for (var s = (t - i) * a, l = (-n * o + .5) * r, h = 0; h < e.length; h++) e[h].x += s, e[h].y += l
            }

            function shapeIcon(e, t) {
                var i = t[0], n = t[1], a = i - e.displaySize[0] / 2, r = a + e.displaySize[0],
                    o = n - e.displaySize[1] / 2, s = o + e.displaySize[1];
                return new PositionedIcon(e, o, s, a, r)
            }

            function PositionedIcon(e, t, i, n, a) {
                this.image = e, this.top = t, this.bottom = i, this.left = n, this.right = a
            }

            var scriptDetection = _dereq_("../util/script_detection"),
                verticalizePunctuation = _dereq_("../util/verticalize_punctuation"),
                rtlTextPlugin = _dereq_("../source/rtl_text_plugin"), WritingMode = {horizontal: 1, vertical: 2};
            module.exports = {shapeText: shapeText, shapeIcon: shapeIcon, WritingMode: WritingMode};
            var whitespace = {9: !0, 10: !0, 11: !0, 12: !0, 13: !0, 32: !0}, breakable = {
                10: !0,
                32: !0,
                38: !0,
                40: !0,
                41: !0,
                43: !0,
                45: !0,
                47: !0,
                173: !0,
                183: !0,
                8203: !0,
                8208: !0,
                8211: !0,
                8231: !0
            };
        }, {"../source/rtl_text_plugin": 90, "../util/script_detection": 210, "../util/verticalize_punctuation": 217}],
        171: [function (_dereq_, module, exports) {
            "use strict";

            function spriteAtlasElement(t) {
                var e = {
                    x: t.rect.x + padding,
                    y: t.rect.y + padding,
                    w: t.rect.w - 2 * padding,
                    h: t.rect.h - 2 * padding
                };
                return {
                    sdf: t.sdf,
                    pixelRatio: t.pixelRatio,
                    isNativePixelRatio: t.pixelRatio === browser.devicePixelRatio,
                    textureRect: e,
                    tl: [e.x, e.y],
                    br: [e.x + e.w, e.y + e.h],
                    displaySize: [e.w / t.pixelRatio, e.h / t.pixelRatio]
                }
            }

            function copyBitmap(t, e, i, r, a, h, s, o, n, d, p) {
                var l, u, f = r * e + i, g = o * h + s;
                if (p) for (g -= h, u = -1; u <= d; u++, g += h) for (f = ((u + d) % d + r) * e + i, l = -1; l <= n; l++) a[g + l] = t[f + (l + n) % n]; else for (u = 0; u < d; u++, f += e, g += h) for (l = 0; l < n; l++) a[g + l] = t[f + l]
            }

            var ShelfPack = _dereq_("@mapbox/shelf-pack"), browser = _dereq_("../util/browser"),
                util = _dereq_("../util/util"), window = _dereq_("../util/window"),
                Evented = _dereq_("../util/evented"), padding = 1, SpriteAtlas = function (t) {
                    function e(e, i) {
                        t.call(this), this.images = {}, this.data = !1, this.texture = 0, this.filter = 0, this.width = e * browser.devicePixelRatio, this.height = i * browser.devicePixelRatio, this.shelfPack = new ShelfPack(this.width, this.height), this.dirty = !0
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPixelSize = function () {
                        return [this.width, this.height]
                    }, e.prototype.allocateImage = function (t, e) {
                        var i = t + 2 * padding, r = e + 2 * padding, a = this.shelfPack.packOne(i, r);
                        return a ? a : (util.warnOnce("SpriteAtlas out of space."), null)
                    }, e.prototype.addImage = function (t, e, i) {
                        var r, a, h;
                        if (e instanceof window.HTMLImageElement ? (r = e.width, a = e.height, e = browser.getImageData(e), h = 1) : (r = i.width, a = i.height, h = i.pixelRatio || 1), ArrayBuffer.isView(e) && (e = new Uint32Array(e.buffer)), !(e instanceof Uint32Array)) return this.fire("error", {error: new Error("Image provided in an invalid format. Supported formats are HTMLImageElement and ArrayBufferView.")});
                        if (this.images[t]) return this.fire("error", {error: new Error("An image with this name already exists.")});
                        var s = this.allocateImage(r, a);
                        return s ? (this.images[t] = {
                            rect: s,
                            width: r,
                            height: a,
                            pixelRatio: h,
                            sdf: !1
                        }, this.copy(e, r, s, {
                            x: 0,
                            y: 0,
                            width: r,
                            height: a
                        }, !1), void this.fire("data", {dataType: "style"})) : this.fire("error", {error: new Error("There is not enough space to add this image.")})
                    }, e.prototype.removeImage = function (t) {
                        var e = this.images[t];
                        return delete this.images[t], e ? (this.shelfPack.unref(e.rect), void this.fire("data", {dataType: "style"})) : this.fire("error", {error: new Error("No image with this name exists.")})
                    }, e.prototype.getIcon = function (t) {
                        return this._getImage(t, !1)
                    }, e.prototype.getPattern = function (t) {
                        return this._getImage(t, !0)
                    }, e.prototype._getImage = function (t, e) {
                        if (this.images[t]) return spriteAtlasElement(this.images[t]);
                        if (!this.sprite) return null;
                        var i = this.sprite.getSpritePosition(t);
                        if (!i.width || !i.height) return null;
                        var r = this.allocateImage(i.width, i.height);
                        if (!r) return null;
                        var a = {rect: r, width: i.width, height: i.height, sdf: i.sdf, pixelRatio: i.pixelRatio};
                        if (this.images[t] = a, !this.sprite.imgData) return null;
                        var h = new Uint32Array(this.sprite.imgData.buffer);
                        return this.copy(h, this.sprite.width, r, i, e), spriteAtlasElement(a)
                    }, e.prototype.allocate = function () {
                        var t = this;
                        if (!this.data) {
                            this.data = new Uint32Array(this.width * this.height);
                            for (var e = 0; e < this.data.length; e++) t.data[e] = 0
                        }
                    }, e.prototype.copy = function (t, e, i, r, a) {
                        this.allocate();
                        var h = this.data;
                        copyBitmap(t, e, r.x, r.y, h, this.getPixelSize()[0], i.x + padding, i.y + padding, r.width, r.height, a), this.dirty = !0
                    }, e.prototype.setSprite = function (t) {
                        t && this.canvas && (this.canvas.width = this.width, this.canvas.height = this.height), this.sprite = t
                    }, e.prototype.addIcons = function (t, e) {
                        for (var i = this, r = {}, a = 0, h = t; a < h.length; a += 1) {
                            var s = h[a];
                            r[s] = i.getIcon(s)
                        }
                        e(null, r)
                    }, e.prototype.bind = function (t, e) {
                        var i = !1;
                        this.texture ? t.bindTexture(t.TEXTURE_2D, this.texture) : (this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), i = !0);
                        var r = e ? t.LINEAR : t.NEAREST;
                        r !== this.filter && (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, r), this.filter = r), this.dirty && (this.allocate(), i ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(this.data.buffer)) : t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this.width, this.height, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(this.data.buffer)), this.dirty = !1)
                    }, e
                }(Evented);
            module.exports = SpriteAtlas;
        }, {
            "../util/browser": 194,
            "../util/evented": 202,
            "../util/util": 215,
            "../util/window": 196,
            "@mapbox/shelf-pack": 2
        }],
        172: [function (_dereq_, module, exports) {
            "use strict";
            var rtlTextPlugin = _dereq_("../source/rtl_text_plugin");
            module.exports = function (e, r, t, a) {
                var l = r.getLayoutValue("text-transform", t, a);
                return "uppercase" === l ? e = e.toLocaleUpperCase() : "lowercase" === l && (e = e.toLocaleLowerCase()), rtlTextPlugin.applyArabicShaping && (e = rtlTextPlugin.applyArabicShaping(e)), e
            };
        }, {"../source/rtl_text_plugin": 90}],
        173: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../util/dom"), Point = _dereq_("point-geometry"), handlers = {
                scrollZoom: _dereq_("./handler/scroll_zoom"),
                boxZoom: _dereq_("./handler/box_zoom"),
                dragRotate: _dereq_("./handler/drag_rotate"),
                dragPan: _dereq_("./handler/drag_pan"),
                keyboard: _dereq_("./handler/keyboard"),
                doubleClickZoom: _dereq_("./handler/dblclick_zoom"),
                touchZoomRotate: _dereq_("./handler/touch_zoom_rotate")
            };
            module.exports = function (e, t) {
                function n(e) {
                    h("mouseout", e)
                }

                function o(t) {
                    e.stop(), L = DOM.mousePos(g, t), h("mousedown", t), E = !0
                }

                function r(t) {
                    var n = e.dragRotate && e.dragRotate.isActive();
                    p && !n && h("contextmenu", p), p = null, E = !1, h("mouseup", t)
                }

                function a(t) {
                    if (!(e.dragPan && e.dragPan.isActive() || e.dragRotate && e.dragRotate.isActive())) {
                        for (var n = t.toElement || t.target; n && n !== g;) n = n.parentNode;
                        n === g && h("mousemove", t)
                    }
                }

                function u(t) {
                    e.stop(), f("touchstart", t), !t.touches || t.touches.length > 1 || (b ? (clearTimeout(b), b = null, h("dblclick", t)) : b = setTimeout(l, 300))
                }

                function i(e) {
                    f("touchmove", e)
                }

                function c(e) {
                    f("touchend", e)
                }

                function d(e) {
                    f("touchcancel", e)
                }

                function l() {
                    b = null
                }

                function s(e) {
                    var t = DOM.mousePos(g, e);
                    t.equals(L) && h("click", e)
                }

                function v(e) {
                    h("dblclick", e), e.preventDefault()
                }

                function m(t) {
                    var n = e.dragRotate && e.dragRotate.isActive();
                    E || n ? E && (p = t) : h("contextmenu", t), t.preventDefault()
                }

                function h(t, n) {
                    var o = DOM.mousePos(g, n);
                    return e.fire(t, {lngLat: e.unproject(o), point: o, originalEvent: n})
                }

                function f(t, n) {
                    var o = DOM.touchPos(g, n), r = o.reduce(function (e, t, n, o) {
                        return e.add(t.div(o.length))
                    }, new Point(0, 0));
                    return e.fire(t, {
                        lngLat: e.unproject(r), point: r, lngLats: o.map(function (t) {
                            return e.unproject(t)
                        }, this), points: o, originalEvent: n
                    })
                }

                var g = e.getCanvasContainer(), p = null, E = !1, L = null, b = null;
                for (var q in handlers) e[q] = new handlers[q](e, t), t.interactive && t[q] && e[q].enable(t[q]);
                g.addEventListener("mouseout", n, !1), g.addEventListener("mousedown", o, !1), g.addEventListener("mouseup", r, !1), g.addEventListener("mousemove", a, !1), g.addEventListener("touchstart", u, !1), g.addEventListener("touchend", c, !1), g.addEventListener("touchmove", i, !1), g.addEventListener("touchcancel", d, !1), g.addEventListener("click", s, !1), g.addEventListener("dblclick", v, !1), g.addEventListener("contextmenu", m, !1)
            };
        }, {
            "../util/dom": 201,
            "./handler/box_zoom": 181,
            "./handler/dblclick_zoom": 182,
            "./handler/drag_pan": 183,
            "./handler/drag_rotate": 184,
            "./handler/keyboard": 185,
            "./handler/scroll_zoom": 186,
            "./handler/touch_zoom_rotate": 187,
            "point-geometry": 25
        }],
        174: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), interpolate = _dereq_("../style-spec/util/interpolate"),
                browser = _dereq_("../util/browser"), LngLat = _dereq_("../geo/lng_lat"),
                LngLatBounds = _dereq_("../geo/lng_lat_bounds"), Point = _dereq_("point-geometry"),
                Evented = _dereq_("../util/evented"), Camera = function (t) {
                    function e(e, i) {
                        t.call(this), this.moving = !1, this.transform = e, this._bearingSnap = i.bearingSnap
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getCenter = function () {
                        return this.transform.center
                    }, e.prototype.setCenter = function (t, e) {
                        return this.jumpTo({center: t}, e)
                    }, e.prototype.panBy = function (t, e, i) {
                        return t = Point.convert(t).mult(-1), this.panTo(this.transform.center, util.extend({offset: t}, e), i)
                    }, e.prototype.panTo = function (t, e, i) {
                        return this.easeTo(util.extend({center: t}, e), i)
                    }, e.prototype.getZoom = function () {
                        return this.transform.zoom
                    }, e.prototype.setZoom = function (t, e) {
                        return this.jumpTo({zoom: t}, e), this
                    }, e.prototype.zoomTo = function (t, e, i) {
                        return this.easeTo(util.extend({zoom: t}, e), i)
                    }, e.prototype.zoomIn = function (t, e) {
                        return this.zoomTo(this.getZoom() + 1, t, e), this
                    }, e.prototype.zoomOut = function (t, e) {
                        return this.zoomTo(this.getZoom() - 1, t, e), this
                    }, e.prototype.getBearing = function () {
                        return this.transform.bearing
                    }, e.prototype.setBearing = function (t, e) {
                        return this.jumpTo({bearing: t}, e), this
                    }, e.prototype.rotateTo = function (t, e, i) {
                        return this.easeTo(util.extend({bearing: t}, e), i)
                    }, e.prototype.resetNorth = function (t, e) {
                        return this.rotateTo(0, util.extend({duration: 1e3}, t), e), this
                    }, e.prototype.snapToNorth = function (t, e) {
                        return Math.abs(this.getBearing()) < this._bearingSnap ? this.resetNorth(t, e) : this
                    }, e.prototype.getPitch = function () {
                        return this.transform.pitch
                    }, e.prototype.setPitch = function (t, e) {
                        return this.jumpTo({pitch: t}, e), this
                    }, e.prototype.fitBounds = function (t, e, i) {
                        if (e = util.extend({
                                padding: {top: 0, bottom: 0, right: 0, left: 0},
                                offset: [0, 0],
                                maxZoom: this.transform.maxZoom
                            }, e), "number" == typeof e.padding) {
                            var o = e.padding;
                            e.padding = {top: o, bottom: o, right: o, left: o}
                        }
                        if (!util.deepEqual(Object.keys(e.padding).sort(function (t, e) {
                                return t < e ? -1 : t > e ? 1 : 0
                            }), ["bottom", "left", "right", "top"])) return void util.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'");
                        t = LngLatBounds.convert(t);
                        var n = [e.padding.left - e.padding.right, e.padding.top - e.padding.bottom],
                            r = Math.min(e.padding.right, e.padding.left), a = Math.min(e.padding.top, e.padding.bottom);
                        e.offset = [e.offset[0] + n[0], e.offset[1] + n[1]];
                        var s = Point.convert(e.offset), h = this.transform, p = h.project(t.getNorthWest()),
                            u = h.project(t.getSouthEast()), c = u.sub(p), m = (h.width - 2 * r - 2 * Math.abs(s.x)) / c.x,
                            f = (h.height - 2 * a - 2 * Math.abs(s.y)) / c.y;
                        return f < 0 || m < 0 ? void util.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.") : (e.center = h.unproject(p.add(u).div(2)), e.zoom = Math.min(h.scaleZoom(h.scale * Math.min(m, f)), e.maxZoom), e.bearing = 0, e.linear ? this.easeTo(e, i) : this.flyTo(e, i))
                    }, e.prototype.jumpTo = function (t, e) {
                        this.stop();
                        var i = this.transform, o = !1, n = !1, r = !1;
                        return "zoom" in t && i.zoom !== +t.zoom && (o = !0, i.zoom = +t.zoom), "center" in t && (i.center = LngLat.convert(t.center)), "bearing" in t && i.bearing !== +t.bearing && (n = !0, i.bearing = +t.bearing), "pitch" in t && i.pitch !== +t.pitch && (r = !0, i.pitch = +t.pitch), this.fire("movestart", e).fire("move", e), o && this.fire("zoomstart", e).fire("zoom", e).fire("zoomend", e), n && this.fire("rotate", e), r && this.fire("pitchstart", e).fire("pitch", e).fire("pitchend", e), this.fire("moveend", e)
                    }, e.prototype.easeTo = function (t, e) {
                        var i = this;
                        this.stop(), t = util.extend({
                            offset: [0, 0],
                            duration: 500,
                            easing: util.ease
                        }, t), t.animate === !1 && (t.duration = 0), t.smoothEasing && 0 !== t.duration && (t.easing = this._smoothOutEasing(t.duration));
                        var o = this.transform, n = this.getZoom(), r = this.getBearing(), a = this.getPitch(),
                            s = "zoom" in t ? +t.zoom : n, h = "bearing" in t ? this._normalizeBearing(t.bearing, r) : r,
                            p = "pitch" in t ? +t.pitch : a, u = o.centerPoint.add(Point.convert(t.offset)),
                            c = o.pointLocation(u), m = LngLat.convert(t.center || c);
                        this._normalizeCenter(m);
                        var f, g, d = o.project(c), l = o.project(m).sub(d), v = o.zoomScale(s - n);
                        return t.around && (f = LngLat.convert(t.around), g = o.locationPoint(f)), this.zooming = s !== n, this.rotating = r !== h, this.pitching = p !== a, this._prepareEase(e, t.noMoveStart), clearTimeout(this._onEaseEnd), this._ease(function (t) {
                            if (this.zooming && (o.zoom = interpolate(n, s, t)), this.rotating && (o.bearing = interpolate(r, h, t)), this.pitching && (o.pitch = interpolate(a, p, t)), f) o.setLocationAtPoint(f, g); else {
                                var i = o.zoomScale(o.zoom - n), c = s > n ? Math.min(2, v) : Math.max(.5, v),
                                    m = Math.pow(c, 1 - t), b = o.unproject(d.add(l.mult(t * m)).mult(i));
                                o.setLocationAtPoint(o.renderWorldCopies ? b.wrap() : b, u)
                            }
                            this._fireMoveEvents(e)
                        }, function () {
                            t.delayEndEvents ? i._onEaseEnd = setTimeout(function () {
                                return i._easeToEnd(e)
                            }, t.delayEndEvents) : i._easeToEnd(e)
                        }, t), this
                    }, e.prototype._prepareEase = function (t, e) {
                        this.moving = !0, e || this.fire("movestart", t), this.zooming && this.fire("zoomstart", t), this.pitching && this.fire("pitchstart", t)
                    }, e.prototype._fireMoveEvents = function (t) {
                        this.fire("move", t), this.zooming && this.fire("zoom", t), this.rotating && this.fire("rotate", t), this.pitching && this.fire("pitch", t)
                    }, e.prototype._easeToEnd = function (t) {
                        var e = this.zooming, i = this.pitching;
                        this.moving = !1, this.zooming = !1, this.rotating = !1, this.pitching = !1, e && this.fire("zoomend", t), i && this.fire("pitchend", t), this.fire("moveend", t)
                    }, e.prototype.flyTo = function (t, e) {
                        function i(t) {
                            var e = (M * M - z * z + (t ? -1 : 1) * L * L * E * E) / (2 * (t ? M : z) * L * E);
                            return Math.log(Math.sqrt(e * e + 1) - e)
                        }

                        function o(t) {
                            return (Math.exp(t) - Math.exp(-t)) / 2
                        }

                        function n(t) {
                            return (Math.exp(t) + Math.exp(-t)) / 2
                        }

                        function r(t) {
                            return o(t) / n(t)
                        }

                        var a = this;
                        this.stop(), t = util.extend({offset: [0, 0], speed: 1.2, curve: 1.42, easing: util.ease}, t);
                        var s = this.transform, h = this.getZoom(), p = this.getBearing(), u = this.getPitch(),
                            c = "zoom" in t ? util.clamp(+t.zoom, s.minZoom, s.maxZoom) : h,
                            m = "bearing" in t ? this._normalizeBearing(t.bearing, p) : p, f = "pitch" in t ? +t.pitch : u,
                            g = s.zoomScale(c - h), d = s.centerPoint.add(Point.convert(t.offset)), l = s.pointLocation(d),
                            v = LngLat.convert(t.center || l);
                        this._normalizeCenter(v);
                        var b = s.project(l), y = s.project(v).sub(b), _ = t.curve, z = Math.max(s.width, s.height),
                            M = z / g, E = y.mag();
                        if ("minZoom" in t) {
                            var T = util.clamp(Math.min(t.minZoom, h, c), s.minZoom, s.maxZoom), x = z / s.zoomScale(T - h);
                            _ = Math.sqrt(x / E * 2)
                        }
                        var L = _ * _, j = i(0), Z = function (t) {
                            return n(j) / n(j + _ * t)
                        }, w = function (t) {
                            return z * ((n(j) * r(j + _ * t) - o(j)) / L) / E
                        }, P = (i(1) - j) / _;
                        if (Math.abs(E) < 1e-6 || isNaN(P)) {
                            if (Math.abs(z - M) < 1e-6) return this.easeTo(t, e);
                            var q = M < z ? -1 : 1;
                            P = Math.abs(Math.log(M / z)) / _, w = function () {
                                return 0
                            }, Z = function (t) {
                                return Math.exp(q * _ * t)
                            }
                        }
                        if ("duration" in t) t.duration = +t.duration; else {
                            var B = "screenSpeed" in t ? +t.screenSpeed / _ : +t.speed;
                            t.duration = 1e3 * P / B
                        }
                        return this.zooming = !0, this.rotating = p !== m, this.pitching = f !== u, this._prepareEase(e, !1), this._ease(function (t) {
                            var i = t * P, o = 1 / Z(i);
                            s.zoom = h + s.scaleZoom(o), this.rotating && (s.bearing = interpolate(p, m, t)), this.pitching && (s.pitch = interpolate(u, f, t));
                            var n = s.unproject(b.add(y.mult(w(i))).mult(o));
                            s.setLocationAtPoint(s.renderWorldCopies ? n.wrap() : n, d), this._fireMoveEvents(e)
                        }, function () {
                            return a._easeToEnd(e)
                        }, t), this
                    }, e.prototype.isEasing = function () {
                        return !!this._abortFn
                    }, e.prototype.isMoving = function () {
                        return this.moving
                    }, e.prototype.stop = function () {
                        return this._abortFn && (this._abortFn(), this._finishEase()), this
                    }, e.prototype._ease = function (t, e, i) {
                        this._finishFn = e, this._abortFn = browser.timed(function (e) {
                            t.call(this, i.easing(e)), 1 === e && this._finishEase()
                        }, i.animate === !1 ? 0 : i.duration, this)
                    }, e.prototype._finishEase = function () {
                        delete this._abortFn;
                        var t = this._finishFn;
                        delete this._finishFn, t.call(this)
                    }, e.prototype._normalizeBearing = function (t, e) {
                        t = util.wrap(t, -180, 180);
                        var i = Math.abs(t - e);
                        return Math.abs(t - 360 - e) < i && (t -= 360), Math.abs(t + 360 - e) < i && (t += 360), t
                    }, e.prototype._normalizeCenter = function (t) {
                        var e = this.transform;
                        if (e.renderWorldCopies && !e.lngRange) {
                            var i = t.lng - e.center.lng;
                            t.lng += i > 180 ? -360 : i < -180 ? 360 : 0
                        }
                    }, e.prototype._smoothOutEasing = function (t) {
                        var e = util.ease;
                        if (this._prevEase) {
                            var i = this._prevEase, o = (Date.now() - i.start) / i.duration,
                                n = i.easing(o + .01) - i.easing(o), r = .27 / Math.sqrt(n * n + 1e-4) * .01,
                                a = Math.sqrt(.0729 - r * r);
                            e = util.bezier(r, a, .25, 1)
                        }
                        return this._prevEase = {start: (new Date).getTime(), duration: t, easing: e}, e
                    }, e
                }(Evented);
            module.exports = Camera;
        }, {
            "../geo/lng_lat": 61,
            "../geo/lng_lat_bounds": 62,
            "../style-spec/util/interpolate": 122,
            "../util/browser": 194,
            "../util/evented": 202,
            "../util/util": 215,
            "point-geometry": 25
        }],
        175: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                config = _dereq_("../../util/config"), AttributionControl = function (t) {
                    this.options = t, util.bindAll(["_updateEditLink", "_updateData", "_updateCompact"], this)
                };
            AttributionControl.prototype.getDefaultPosition = function () {
                return "bottom-right"
            }, AttributionControl.prototype.onAdd = function (t) {
                var i = this.options && this.options.compact;
                return this._map = t, this._container = DOM.create("div", "mapboxgl-ctrl mapboxgl-ctrl-attrib"), i && this._container.classList.add("mapboxgl-compact"), this._updateAttributions(), this._updateEditLink(), this._map.on("sourcedata", this._updateData), this._map.on("moveend", this._updateEditLink), void 0 === i && (this._map.on("resize", this._updateCompact), this._updateCompact()), this._container
            }, AttributionControl.prototype.onRemove = function () {
                this._container.parentNode.removeChild(this._container), this._map.off("sourcedata", this._updateData), this._map.off("moveend", this._updateEditLink), this._map.off("resize", this._updateCompact), this._map = void 0
            }, AttributionControl.prototype._updateEditLink = function () {
                this._editLink || (this._editLink = this._container.querySelector(".mapbox-improve-map"));
                var t = [{key: "owner", value: this.styleOwner}, {key: "id", value: this.styleId}, {
                    key: "access_token",
                    value: config.ACCESS_TOKEN
                }];
                if (this._editLink) {
                    var i = t.reduce(function (i, e, o) {
                        return void 0 !== e.value && (i += e.key + "=" + e.value + (o < t.length - 1 ? "&" : "")), i
                    }, "?");
                    this._editLink.href = "https://www.mapbox.com/feedback/" + i + (this._map._hash ? this._map._hash.getHashString(!0) : "")
                }
            }, AttributionControl.prototype._updateData = function (t) {
                t && "metadata" === t.sourceDataType && (this._updateAttributions(), this._updateEditLink())
            }, AttributionControl.prototype._updateAttributions = function () {
                if (this._map.style) {
                    var t = [];
                    if (this._map.style.stylesheet) {
                        var i = this._map.style.stylesheet;
                        this.styleOwner = i.owner, this.styleId = i.id
                    }
                    var e = this._map.style.sourceCaches;
                    for (var o in e) {
                        var n = e[o].getSource();
                        n.attribution && t.indexOf(n.attribution) < 0 && t.push(n.attribution)
                    }
                    t.sort(function (t, i) {
                        return t.length - i.length
                    }), t = t.filter(function (i, e) {
                        for (var o = e + 1; o < t.length; o++) if (t[o].indexOf(i) >= 0) return !1;
                        return !0
                    }), this._container.innerHTML = t.join(" | "), this._editLink = null
                }
            }, AttributionControl.prototype._updateCompact = function () {
                var t = this._map.getCanvasContainer().offsetWidth <= 640;
                this._container.classList[t ? "add" : "remove"]("mapboxgl-compact")
            }, module.exports = AttributionControl;
        }, {"../../util/config": 198, "../../util/dom": 201, "../../util/util": 215}],
        176: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"), FullscreenControl = function () {
                    this._fullscreen = !1, util.bindAll(["_onClickFullscreen", "_changeIcon"], this), "onfullscreenchange" in window.document ? this._fullscreenchange = "fullscreenchange" : "onmozfullscreenchange" in window.document ? this._fullscreenchange = "mozfullscreenchange" : "onwebkitfullscreenchange" in window.document ? this._fullscreenchange = "webkitfullscreenchange" : "onmsfullscreenchange" in window.document && (this._fullscreenchange = "MSFullscreenChange")
                };
            FullscreenControl.prototype.onAdd = function (e) {
                var n = "mapboxgl-ctrl", l = this._container = DOM.create("div", n + " mapboxgl-ctrl-group"),
                    t = this._fullscreenButton = DOM.create("button", n + "-icon " + n + "-fullscreen", this._container);
                return t.setAttribute("aria-label", "Toggle fullscreen"), t.type = "button", this._fullscreenButton.addEventListener("click", this._onClickFullscreen), this._mapContainer = e.getContainer(), window.document.addEventListener(this._fullscreenchange, this._changeIcon), l
            }, FullscreenControl.prototype.onRemove = function () {
                this._container.parentNode.removeChild(this._container), this._map = null, window.document.removeEventListener(this._fullscreenchange, this._changeIcon)
            }, FullscreenControl.prototype._isFullscreen = function () {
                return this._fullscreen
            }, FullscreenControl.prototype._changeIcon = function () {
                var e = window.document.fullscreenElement || window.document.mozFullScreenElement || window.document.webkitFullscreenElement || window.document.msFullscreenElement;
                if (e === this._mapContainer !== this._fullscreen) {
                    this._fullscreen = !this._fullscreen;
                    var n = "mapboxgl-ctrl";
                    this._fullscreenButton.classList.toggle(n + "-shrink"), this._fullscreenButton.classList.toggle(n + "-fullscreen")
                }
            }, FullscreenControl.prototype._onClickFullscreen = function () {
                this._isFullscreen() ? window.document.exitFullscreen ? window.document.exitFullscreen() : window.document.mozCancelFullScreen ? window.document.mozCancelFullScreen() : window.document.msExitFullscreen ? window.document.msExitFullscreen() : window.document.webkitCancelFullScreen && window.document.webkitCancelFullScreen() : this._mapContainer.requestFullscreen ? this._mapContainer.requestFullscreen() : this._mapContainer.mozRequestFullScreen ? this._mapContainer.mozRequestFullScreen() : this._mapContainer.msRequestFullscreen ? this._mapContainer.msRequestFullscreen() : this._mapContainer.webkitRequestFullscreen && this._mapContainer.webkitRequestFullscreen()
            }, module.exports = FullscreenControl;
        }, {"../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        177: [function (_dereq_, module, exports) {
            "use strict";

            function checkGeolocationSupport(t) {
                void 0 !== supportsGeolocation ? t(supportsGeolocation) : void 0 !== window.navigator.permissions ? window.navigator.permissions.query({name: "geolocation"}).then(function (o) {
                    supportsGeolocation = "denied" !== o.state, t(supportsGeolocation)
                }) : (supportsGeolocation = !!window.navigator.geolocation, t(supportsGeolocation))
            }

            var Evented = _dereq_("../../util/evented"), DOM = _dereq_("../../util/dom"),
                window = _dereq_("../../util/window"), util = _dereq_("../../util/util"),
                defaultGeoPositionOptions = {enableHighAccuracy: !1, timeout: 6e3}, className = "mapboxgl-ctrl",
                supportsGeolocation, GeolocateControl = function (t) {
                    function o(o) {
                        t.call(this), this.options = o || {}, util.bindAll(["_onSuccess", "_onError", "_finish", "_setupUI"], this)
                    }

                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.onAdd = function (t) {
                        return this._map = t, this._container = DOM.create("div", className + " " + className + "-group"), checkGeolocationSupport(this._setupUI), this._container
                    }, o.prototype.onRemove = function () {
                        this._container.parentNode.removeChild(this._container), this._map = void 0
                    }, o.prototype._onSuccess = function (t) {
                        this._map.jumpTo({
                            center: [t.coords.longitude, t.coords.latitude],
                            zoom: 17,
                            bearing: 0,
                            pitch: 0
                        }), this.fire("geolocate", t), this._finish()
                    }, o.prototype._onError = function (t) {
                        this.fire("error", t), this._finish()
                    }, o.prototype._finish = function () {
                        this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = void 0
                    }, o.prototype._setupUI = function (t) {
                        t !== !1 && (this._container.addEventListener("contextmenu", function (t) {
                            return t.preventDefault()
                        }), this._geolocateButton = DOM.create("button", className + "-icon " + className + "-geolocate", this._container), this._geolocateButton.type = "button", this._geolocateButton.setAttribute("aria-label", "Geolocate"), this.options.watchPosition && this._geolocateButton.setAttribute("aria-pressed", !1), this._geolocateButton.addEventListener("click", this._onClickGeolocate.bind(this)))
                    }, o.prototype._onClickGeolocate = function () {
                        var t = util.extend(defaultGeoPositionOptions, this.options && this.options.positionOptions || {});
                        this.options.watchPosition ? void 0 !== this._geolocationWatchID ? (this._geolocateButton.classList.remove("mapboxgl-watching"), this._geolocateButton.setAttribute("aria-pressed", !1), window.navigator.geolocation.clearWatch(this._geolocationWatchID), this._geolocationWatchID = void 0) : (this._geolocateButton.classList.add("mapboxgl-watching"), this._geolocateButton.setAttribute("aria-pressed", !0), this._geolocationWatchID = window.navigator.geolocation.watchPosition(this._onSuccess, this._onError, t)) : (window.navigator.geolocation.getCurrentPosition(this._onSuccess, this._onError, t), this._timeoutId = setTimeout(this._finish, 1e4))
                    }, o
                }(Evented);
            module.exports = GeolocateControl;
        }, {"../../util/dom": 201, "../../util/evented": 202, "../../util/util": 215, "../../util/window": 196}],
        178: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"), LogoControl = function () {
                util.bindAll(["_updateLogo"], this)
            };
            LogoControl.prototype.onAdd = function (o) {
                return this._map = o, this._container = DOM.create("div", "mapboxgl-ctrl"), this._map.on("sourcedata", this._updateLogo), this._updateLogo(), this._container
            }, LogoControl.prototype.onRemove = function () {
                this._container.parentNode.removeChild(this._container), this._map.off("sourcedata", this._updateLogo)
            }, LogoControl.prototype.getDefaultPosition = function () {
                return "bottom-left"
            }, LogoControl.prototype._updateLogo = function (o) {
                if (o && "metadata" === o.sourceDataType) if (!this._container.childNodes.length && this._logoRequired()) {
                    var t = DOM.create("a", "mapboxgl-ctrl-logo");
                    t.target = "_blank", t.href = "https://www.mapbox.com/", t.setAttribute("aria-label", "Mapbox logo"), this._container.appendChild(t), this._map.off("data", this._updateLogo)
                } else this._container.childNodes.length && !this._logoRequired() && this.onRemove()
            }, LogoControl.prototype._logoRequired = function () {
                if (this._map.style) {
                    var o = this._map.style.sourceCaches;
                    for (var t in o) {
                        var e = o[t].getSource();
                        if (e.mapbox_logo) return !0
                    }
                    return !1
                }
            }, module.exports = LogoControl;
        }, {"../../util/dom": 201, "../../util/util": 215}],
        179: [function (_dereq_, module, exports) {
            "use strict";

            function copyMouseEvent(t) {
                return new window.MouseEvent(t.type, {
                    button: 2,
                    buttons: 2,
                    bubbles: !0,
                    cancelable: !0,
                    detail: t.detail,
                    view: t.view,
                    screenX: t.screenX,
                    screenY: t.screenY,
                    clientX: t.clientX,
                    clientY: t.clientY,
                    movementX: t.movementX,
                    movementY: t.movementY,
                    ctrlKey: t.ctrlKey,
                    shiftKey: t.shiftKey,
                    altKey: t.altKey,
                    metaKey: t.metaKey
                })
            }

            var DOM = _dereq_("../../util/dom"), window = _dereq_("../../util/window"),
                util = _dereq_("../../util/util"), className = "mapboxgl-ctrl", NavigationControl = function () {
                    util.bindAll(["_rotateCompassArrow"], this)
                };
            NavigationControl.prototype._rotateCompassArrow = function () {
                var t = "rotate(" + this._map.transform.angle * (180 / Math.PI) + "deg)";
                this._compassArrow.style.transform = t
            }, NavigationControl.prototype.onAdd = function (t) {
                return this._map = t, this._container = DOM.create("div", className + " " + className + "-group", t.getContainer()), this._container.addEventListener("contextmenu", this._onContextMenu.bind(this)), this._zoomInButton = this._createButton(className + "-icon " + className + "-zoom-in", "Zoom In", t.zoomIn.bind(t)), this._zoomOutButton = this._createButton(className + "-icon " + className + "-zoom-out", "Zoom Out", t.zoomOut.bind(t)), this._compass = this._createButton(className + "-icon " + className + "-compass", "Reset North", t.resetNorth.bind(t)), this._compassArrow = DOM.create("span", className + "-compass-arrow", this._compass), this._compass.addEventListener("mousedown", this._onCompassDown.bind(this)), this._onCompassMove = this._onCompassMove.bind(this), this._onCompassUp = this._onCompassUp.bind(this), this._map.on("rotate", this._rotateCompassArrow), this._rotateCompassArrow(), this._container
            }, NavigationControl.prototype.onRemove = function () {
                this._container.parentNode.removeChild(this._container), this._map.off("rotate", this._rotateCompassArrow), this._map = void 0
            }, NavigationControl.prototype._onContextMenu = function (t) {
                t.preventDefault()
            }, NavigationControl.prototype._onCompassDown = function (t) {
                0 === t.button && (DOM.disableDrag(), window.document.addEventListener("mousemove", this._onCompassMove), window.document.addEventListener("mouseup", this._onCompassUp), this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)), t.stopPropagation())
            }, NavigationControl.prototype._onCompassMove = function (t) {
                0 === t.button && (this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)), t.stopPropagation())
            }, NavigationControl.prototype._onCompassUp = function (t) {
                0 === t.button && (window.document.removeEventListener("mousemove", this._onCompassMove), window.document.removeEventListener("mouseup", this._onCompassUp), DOM.enableDrag(), this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)), t.stopPropagation())
            }, NavigationControl.prototype._createButton = function (t, o, e) {
                var n = DOM.create("button", t, this._container);
                return n.type = "button", n.setAttribute("aria-label", o), n.addEventListener("click", function () {
                    e()
                }), n
            }, module.exports = NavigationControl;
        }, {"../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        180: [function (_dereq_, module, exports) {
            "use strict";

            function updateScale(t, e, o) {
                var n = o && o.maxWidth || 100, i = t._container.clientHeight / 2,
                    a = getDistance(t.unproject([0, i]), t.unproject([n, i]));
                if (o && "imperial" === o.unit) {
                    var r = 3.2808 * a;
                    if (r > 5280) {
                        var l = r / 5280;
                        setScale(e, n, l, "mi")
                    } else setScale(e, n, r, "ft")
                } else setScale(e, n, a, "m")
            }

            function setScale(t, e, o, n) {
                var i = getRoundNum(o), a = i / o;
                "m" === n && i >= 1e3 && (i /= 1e3, n = "km"), t.style.width = e * a + "px", t.innerHTML = i + n
            }

            function getDistance(t, e) {
                var o = 6371e3, n = Math.PI / 180, i = t.lat * n, a = e.lat * n,
                    r = Math.sin(i) * Math.sin(a) + Math.cos(i) * Math.cos(a) * Math.cos((e.lng - t.lng) * n),
                    l = o * Math.acos(Math.min(r, 1));
                return l
            }

            function getRoundNum(t) {
                var e = Math.pow(10, ("" + Math.floor(t)).length - 1), o = t / e;
                return o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1, e * o
            }

            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"), ScaleControl = function (t) {
                this.options = t, util.bindAll(["_onMove"], this)
            };
            ScaleControl.prototype.getDefaultPosition = function () {
                return "bottom-left"
            }, ScaleControl.prototype._onMove = function () {
                updateScale(this._map, this._container, this.options)
            }, ScaleControl.prototype.onAdd = function (t) {
                return this._map = t, this._container = DOM.create("div", "mapboxgl-ctrl mapboxgl-ctrl-scale", t.getContainer()), this._map.on("move", this._onMove), this._onMove(), this._container
            }, ScaleControl.prototype.onRemove = function () {
                this._container.parentNode.removeChild(this._container), this._map.off("move", this._onMove), this._map = void 0
            }, module.exports = ScaleControl;
        }, {"../../util/dom": 201, "../../util/util": 215}],
        181: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), LngLatBounds = _dereq_("../../geo/lng_lat_bounds"),
                util = _dereq_("../../util/util"), window = _dereq_("../../util/window"),
                BoxZoomHandler = function (o) {
                    this._map = o, this._el = o.getCanvasContainer(), this._container = o.getContainer(), util.bindAll(["_onMouseDown", "_onMouseMove", "_onMouseUp", "_onKeyDown"], this)
                };
            BoxZoomHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, BoxZoomHandler.prototype.isActive = function () {
                return !!this._active
            }, BoxZoomHandler.prototype.enable = function () {
                this.isEnabled() || (this._map.dragPan && this._map.dragPan.disable(), this._el.addEventListener("mousedown", this._onMouseDown, !1), this._map.dragPan && this._map.dragPan.enable(), this._enabled = !0)
            }, BoxZoomHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.removeEventListener("mousedown", this._onMouseDown), this._enabled = !1)
            }, BoxZoomHandler.prototype._onMouseDown = function (o) {
                o.shiftKey && 0 === o.button && (window.document.addEventListener("mousemove", this._onMouseMove, !1), window.document.addEventListener("keydown", this._onKeyDown, !1), window.document.addEventListener("mouseup", this._onMouseUp, !1), DOM.disableDrag(), this._startPos = DOM.mousePos(this._el, o), this._active = !0)
            }, BoxZoomHandler.prototype._onMouseMove = function (o) {
                var e = this._startPos, t = DOM.mousePos(this._el, o);
                this._box || (this._box = DOM.create("div", "mapboxgl-boxzoom", this._container), this._container.classList.add("mapboxgl-crosshair"), this._fireEvent("boxzoomstart", o));
                var n = Math.min(e.x, t.x), i = Math.max(e.x, t.x), s = Math.min(e.y, t.y), a = Math.max(e.y, t.y);
                DOM.setTransform(this._box, "translate(" + n + "px," + s + "px)"), this._box.style.width = i - n + "px", this._box.style.height = a - s + "px"
            }, BoxZoomHandler.prototype._onMouseUp = function (o) {
                if (0 === o.button) {
                    var e = this._startPos, t = DOM.mousePos(this._el, o),
                        n = (new LngLatBounds).extend(this._map.unproject(e)).extend(this._map.unproject(t));
                    this._finish(), e.x === t.x && e.y === t.y ? this._fireEvent("boxzoomcancel", o) : this._map.fitBounds(n, {linear: !0}).fire("boxzoomend", {
                        originalEvent: o,
                        boxZoomBounds: n
                    })
                }
            }, BoxZoomHandler.prototype._onKeyDown = function (o) {
                27 === o.keyCode && (this._finish(), this._fireEvent("boxzoomcancel", o))
            }, BoxZoomHandler.prototype._finish = function () {
                this._active = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !1), window.document.removeEventListener("keydown", this._onKeyDown, !1), window.document.removeEventListener("mouseup", this._onMouseUp, !1), this._container.classList.remove("mapboxgl-crosshair"), this._box && (this._box.parentNode.removeChild(this._box), this._box = null), DOM.enableDrag()
            }, BoxZoomHandler.prototype._fireEvent = function (o, e) {
                return this._map.fire(o, {originalEvent: e})
            }, module.exports = BoxZoomHandler;
        }, {"../../geo/lng_lat_bounds": 62, "../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        182: [function (_dereq_, module, exports) {
            "use strict";
            var DoubleClickZoomHandler = function (o) {
                this._map = o, this._onDblClick = this._onDblClick.bind(this)
            };
            DoubleClickZoomHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, DoubleClickZoomHandler.prototype.enable = function () {
                this.isEnabled() || (this._map.on("dblclick", this._onDblClick), this._enabled = !0)
            }, DoubleClickZoomHandler.prototype.disable = function () {
                this.isEnabled() && (this._map.off("dblclick", this._onDblClick), this._enabled = !1)
            }, DoubleClickZoomHandler.prototype._onDblClick = function (o) {
                this._map.zoomTo(this._map.getZoom() + (o.originalEvent.shiftKey ? -1 : 1), {around: o.lngLat}, o)
            }, module.exports = DoubleClickZoomHandler;
        }, {}],
        183: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"), inertiaLinearity = .3,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1), inertiaMaxSpeed = 1400,
                inertiaDeceleration = 2500, DragPanHandler = function (t) {
                    this._map = t, this._el = t.getCanvasContainer(), util.bindAll(["_onDown", "_onMove", "_onUp", "_onTouchEnd", "_onMouseUp"], this)
                };
            DragPanHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, DragPanHandler.prototype.isActive = function () {
                return !!this._active
            }, DragPanHandler.prototype.enable = function () {
                this.isEnabled() || (this._el.classList.add("mapboxgl-touch-drag-pan"), this._el.addEventListener("mousedown", this._onDown), this._el.addEventListener("touchstart", this._onDown), this._enabled = !0)
            }, DragPanHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.classList.remove("mapboxgl-touch-drag-pan"), this._el.removeEventListener("mousedown", this._onDown), this._el.removeEventListener("touchstart", this._onDown), this._enabled = !1)
            }, DragPanHandler.prototype._onDown = function (t) {
                this._ignoreEvent(t) || this.isActive() || (t.touches ? (window.document.addEventListener("touchmove", this._onMove), window.document.addEventListener("touchend", this._onTouchEnd)) : (window.document.addEventListener("mousemove", this._onMove), window.document.addEventListener("mouseup", this._onMouseUp)), window.addEventListener("blur", this._onMouseUp), this._active = !1, this._startPos = this._pos = DOM.mousePos(this._el, t), this._inertia = [[Date.now(), this._pos]])
            }, DragPanHandler.prototype._onMove = function (t) {
                if (!this._ignoreEvent(t)) {
                    this.isActive() || (this._active = !0, this._map.moving = !0, this._fireEvent("dragstart", t), this._fireEvent("movestart", t));
                    var e = DOM.mousePos(this._el, t), n = this._map;
                    n.stop(), this._drainInertiaBuffer(), this._inertia.push([Date.now(), e]), n.transform.setLocationAtPoint(n.transform.pointLocation(this._pos), e), this._fireEvent("drag", t), this._fireEvent("move", t), this._pos = e, t.preventDefault()
                }
            }, DragPanHandler.prototype._onUp = function (t) {
                var e = this;
                if (this.isActive()) {
                    this._active = !1, this._fireEvent("dragend", t), this._drainInertiaBuffer();
                    var n = function () {
                        e._map.moving = !1, e._fireEvent("moveend", t)
                    }, i = this._inertia;
                    if (i.length < 2) return void n();
                    var o = i[i.length - 1], r = i[0], a = o[1].sub(r[1]), s = (o[0] - r[0]) / 1e3;
                    if (0 === s || o[1].equals(r[1])) return void n();
                    var u = a.mult(inertiaLinearity / s), d = u.mag();
                    d > inertiaMaxSpeed && (d = inertiaMaxSpeed, u._unit()._mult(d));
                    var h = d / (inertiaDeceleration * inertiaLinearity), v = u.mult(-h / 2);
                    this._map.panBy(v, {duration: 1e3 * h, easing: inertiaEasing, noMoveStart: !0}, {originalEvent: t})
                }
            }, DragPanHandler.prototype._onMouseUp = function (t) {
                this._ignoreEvent(t) || (this._onUp(t), window.document.removeEventListener("mousemove", this._onMove), window.document.removeEventListener("mouseup", this._onMouseUp), window.removeEventListener("blur", this._onMouseUp))
            }, DragPanHandler.prototype._onTouchEnd = function (t) {
                this._ignoreEvent(t) || (this._onUp(t), window.document.removeEventListener("touchmove", this._onMove), window.document.removeEventListener("touchend", this._onTouchEnd))
            }, DragPanHandler.prototype._fireEvent = function (t, e) {
                return this._map.fire(t, {originalEvent: e})
            }, DragPanHandler.prototype._ignoreEvent = function (t) {
                var e = this._map;
                if (e.boxZoom && e.boxZoom.isActive()) return !0;
                if (e.dragRotate && e.dragRotate.isActive()) return !0;
                if (t.touches) return t.touches.length > 1;
                if (t.ctrlKey) return !0;
                var n = 1, i = 0;
                return "mousemove" === t.type ? t.buttons & 0 === n : t.button && t.button !== i
            }, DragPanHandler.prototype._drainInertiaBuffer = function () {
                for (var t = this._inertia, e = Date.now(), n = 160; t.length > 0 && e - t[0][0] > n;) t.shift()
            }, module.exports = DragPanHandler;
        }, {"../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        184: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"), inertiaLinearity = .25,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1), inertiaMaxSpeed = 180,
                inertiaDeceleration = 720, DragRotateHandler = function (t, e) {
                    this._map = t, this._el = t.getCanvasContainer(), this._bearingSnap = e.bearingSnap, this._pitchWithRotate = e.pitchWithRotate !== !1, util.bindAll(["_onDown", "_onMove", "_onUp"], this)
                };
            DragRotateHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, DragRotateHandler.prototype.isActive = function () {
                return !!this._active
            }, DragRotateHandler.prototype.enable = function () {
                this.isEnabled() || (this._el.addEventListener("mousedown", this._onDown), this._enabled = !0)
            }, DragRotateHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.removeEventListener("mousedown", this._onDown), this._enabled = !1)
            }, DragRotateHandler.prototype._onDown = function (t) {
                this._ignoreEvent(t) || this.isActive() || (window.document.addEventListener("mousemove", this._onMove), window.document.addEventListener("mouseup", this._onUp), window.addEventListener("blur", this._onUp), this._active = !1, this._inertia = [[Date.now(), this._map.getBearing()]], this._startPos = this._pos = DOM.mousePos(this._el, t), this._center = this._map.transform.centerPoint, t.preventDefault())
            }, DragRotateHandler.prototype._onMove = function (t) {
                if (!this._ignoreEvent(t)) {
                    this.isActive() || (this._active = !0, this._map.moving = !0, this._fireEvent("rotatestart", t), this._fireEvent("movestart", t), this._pitchWithRotate && this._fireEvent("pitchstart", t));
                    var e = this._map;
                    e.stop();
                    var i = this._pos, n = DOM.mousePos(this._el, t), r = .8 * (i.x - n.x), a = (i.y - n.y) * -.5,
                        o = e.getBearing() - r, s = e.getPitch() - a, h = this._inertia, _ = h[h.length - 1];
                    this._drainInertiaBuffer(), h.push([Date.now(), e._normalizeBearing(o, _[1])]), e.transform.bearing = o, this._pitchWithRotate && (this._fireEvent("pitch", t), e.transform.pitch = s), this._fireEvent("rotate", t), this._fireEvent("move", t), this._pos = n
                }
            }, DragRotateHandler.prototype._onUp = function (t) {
                var e = this;
                if (!this._ignoreEvent(t) && (window.document.removeEventListener("mousemove", this._onMove), window.document.removeEventListener("mouseup", this._onUp), window.removeEventListener("blur", this._onUp), this.isActive())) {
                    this._active = !1, this._fireEvent("rotateend", t), this._drainInertiaBuffer();
                    var i = this._map, n = i.getBearing(), r = this._inertia, a = function () {
                        Math.abs(n) < e._bearingSnap ? i.resetNorth({noMoveStart: !0}, {originalEvent: t}) : (e._map.moving = !1, e._fireEvent("moveend", t)), e._pitchWithRotate && e._fireEvent("pitchend", t)
                    };
                    if (r.length < 2) return void a();
                    var o = r[0], s = r[r.length - 1], h = r[r.length - 2], _ = i._normalizeBearing(n, h[1]),
                        v = s[1] - o[1], p = v < 0 ? -1 : 1, d = (s[0] - o[0]) / 1e3;
                    if (0 === v || 0 === d) return void a();
                    var u = Math.abs(v * (inertiaLinearity / d));
                    u > inertiaMaxSpeed && (u = inertiaMaxSpeed);
                    var l = u / (inertiaDeceleration * inertiaLinearity), g = p * u * (l / 2);
                    _ += g, Math.abs(i._normalizeBearing(_, 0)) < this._bearingSnap && (_ = i._normalizeBearing(0, _)), i.rotateTo(_, {
                        duration: 1e3 * l,
                        easing: inertiaEasing,
                        noMoveStart: !0
                    }, {originalEvent: t})
                }
            }, DragRotateHandler.prototype._fireEvent = function (t, e) {
                return this._map.fire(t, {originalEvent: e})
            }, DragRotateHandler.prototype._ignoreEvent = function (t) {
                var e = this._map;
                if (e.boxZoom && e.boxZoom.isActive()) return !0;
                if (e.dragPan && e.dragPan.isActive()) return !0;
                if (t.touches) return t.touches.length > 1;
                var i = t.ctrlKey ? 1 : 2, n = t.ctrlKey ? 0 : 2, r = t.button;
                return "undefined" != typeof InstallTrigger && 2 === t.button && t.ctrlKey && window.navigator.platform.toUpperCase().indexOf("MAC") >= 0 && (r = 0), "mousemove" === t.type ? t.buttons & 0 === i : !this.isActive() && r !== n
            }, DragRotateHandler.prototype._drainInertiaBuffer = function () {
                for (var t = this._inertia, e = Date.now(), i = 160; t.length > 0 && e - t[0][0] > i;) t.shift()
            }, module.exports = DragRotateHandler;
        }, {"../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        185: [function (_dereq_, module, exports) {
            "use strict";

            function easeOut(e) {
                return e * (2 - e)
            }

            var panStep = 100, bearingStep = 15, pitchStep = 10, KeyboardHandler = function (e) {
                this._map = e, this._el = e.getCanvasContainer(), this._onKeyDown = this._onKeyDown.bind(this)
            };
            KeyboardHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, KeyboardHandler.prototype.enable = function () {
                this.isEnabled() || (this._el.addEventListener("keydown", this._onKeyDown, !1), this._enabled = !0)
            }, KeyboardHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.removeEventListener("keydown", this._onKeyDown), this._enabled = !1)
            }, KeyboardHandler.prototype._onKeyDown = function (e) {
                if (!(e.altKey || e.ctrlKey || e.metaKey)) {
                    var t = 0, a = 0, n = 0, r = 0, i = 0;
                    switch (e.keyCode) {
                        case 61:
                        case 107:
                        case 171:
                        case 187:
                            t = 1;
                            break;
                        case 189:
                        case 109:
                        case 173:
                            t = -1;
                            break;
                        case 37:
                            e.shiftKey ? a = -1 : (e.preventDefault(), r = -1);
                            break;
                        case 39:
                            e.shiftKey ? a = 1 : (e.preventDefault(), r = 1);
                            break;
                        case 38:
                            e.shiftKey ? n = 1 : (e.preventDefault(), i = -1);
                            break;
                        case 40:
                            e.shiftKey ? n = -1 : (i = 1, e.preventDefault());
                            break;
                        default:
                            return
                    }
                    var s = this._map, o = s.getZoom(), d = {
                        duration: 300,
                        delayEndEvents: 500,
                        easing: easeOut,
                        zoom: t ? Math.round(o) + t * (e.shiftKey ? 2 : 1) : o,
                        bearing: s.getBearing() + a * bearingStep,
                        pitch: s.getPitch() + n * pitchStep,
                        offset: [-r * panStep, -i * panStep],
                        center: s.getCenter()
                    };
                    s.easeTo(d, {originalEvent: e})
                }
            }, module.exports = KeyboardHandler;
        }, {}],
        186: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                browser = _dereq_("../../util/browser"), window = _dereq_("../../util/window"),
                ua = window.navigator.userAgent.toLowerCase(), firefox = ua.indexOf("firefox") !== -1,
                safari = ua.indexOf("safari") !== -1 && ua.indexOf("chrom") === -1, ScrollZoomHandler = function (e) {
                    this._map = e, this._el = e.getCanvasContainer(), util.bindAll(["_onWheel", "_onTimeout"], this)
                };
            ScrollZoomHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, ScrollZoomHandler.prototype.enable = function (e) {
                this.isEnabled() || (this._el.addEventListener("wheel", this._onWheel, !1), this._el.addEventListener("mousewheel", this._onWheel, !1), this._enabled = !0, this._aroundCenter = e && "center" === e.around)
            }, ScrollZoomHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.removeEventListener("wheel", this._onWheel), this._el.removeEventListener("mousewheel", this._onWheel), this._enabled = !1)
            }, ScrollZoomHandler.prototype._onWheel = function (e) {
                var t;
                "wheel" === e.type ? (t = e.deltaY, firefox && e.deltaMode === window.WheelEvent.DOM_DELTA_PIXEL && (t /= browser.devicePixelRatio), e.deltaMode === window.WheelEvent.DOM_DELTA_LINE && (t *= 40)) : "mousewheel" === e.type && (t = -e.wheelDeltaY, safari && (t /= 3));
                var o = browser.now(), i = o - (this._time || 0);
                this._pos = DOM.mousePos(this._el, e), this._time = o, 0 !== t && t % 4.000244140625 === 0 ? this._type = "wheel" : 0 !== t && Math.abs(t) < 4 ? this._type = "trackpad" : i > 400 ? (this._type = null, this._lastValue = t, this._timeout = setTimeout(this._onTimeout, 40)) : this._type || (this._type = Math.abs(i * t) < 200 ? "trackpad" : "wheel", this._timeout && (clearTimeout(this._timeout), this._timeout = null, t += this._lastValue)), e.shiftKey && t && (t /= 4), this._type && this._zoom(-t, e), e.preventDefault()
            }, ScrollZoomHandler.prototype._onTimeout = function () {
                this._type = "wheel", this._zoom(-this._lastValue)
            }, ScrollZoomHandler.prototype._zoom = function (e, t) {
                if (0 !== e) {
                    var o = this._map, i = 2 / (1 + Math.exp(-Math.abs(e / 100)));
                    e < 0 && 0 !== i && (i = 1 / i);
                    var l = o.ease ? o.ease.to : o.transform.scale, s = o.transform.scaleZoom(l * i);
                    o.zoomTo(s, {
                        duration: "wheel" === this._type ? 200 : 0,
                        around: this._aroundCenter ? o.getCenter() : o.unproject(this._pos),
                        delayEndEvents: 200,
                        smoothEasing: !0
                    }, {originalEvent: t})
                }
            }, module.exports = ScrollZoomHandler;
        }, {"../../util/browser": 194, "../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        187: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"), util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"), inertiaLinearity = .15,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1), inertiaDeceleration = 12, inertiaMaxSpeed = 2.5,
                significantScaleThreshold = .15, significantRotateThreshold = 4, TouchZoomRotateHandler = function (t) {
                    this._map = t, this._el = t.getCanvasContainer(), util.bindAll(["_onStart", "_onMove", "_onEnd"], this)
                };
            TouchZoomRotateHandler.prototype.isEnabled = function () {
                return !!this._enabled
            }, TouchZoomRotateHandler.prototype.enable = function (t) {
                this.isEnabled() || (this._el.classList.add("mapboxgl-touch-zoom-rotate"), this._el.addEventListener("touchstart", this._onStart, !1), this._enabled = !0, this._aroundCenter = t && "center" === t.around)
            }, TouchZoomRotateHandler.prototype.disable = function () {
                this.isEnabled() && (this._el.classList.remove("mapboxgl-touch-zoom-rotate"), this._el.removeEventListener("touchstart", this._onStart), this._enabled = !1)
            }, TouchZoomRotateHandler.prototype.disableRotation = function () {
                this._rotationDisabled = !0
            }, TouchZoomRotateHandler.prototype.enableRotation = function () {
                this._rotationDisabled = !1
            }, TouchZoomRotateHandler.prototype._onStart = function (t) {
                if (2 === t.touches.length) {
                    var e = DOM.mousePos(this._el, t.touches[0]), o = DOM.mousePos(this._el, t.touches[1]);
                    this._startVec = e.sub(o), this._startScale = this._map.transform.scale, this._startBearing = this._map.transform.bearing, this._gestureIntent = void 0, this._inertia = [], window.document.addEventListener("touchmove", this._onMove, !1), window.document.addEventListener("touchend", this._onEnd, !1)
                }
            }, TouchZoomRotateHandler.prototype._onMove = function (t) {
                if (2 === t.touches.length) {
                    var e = DOM.mousePos(this._el, t.touches[0]), o = DOM.mousePos(this._el, t.touches[1]),
                        i = e.add(o).div(2), n = e.sub(o), a = n.mag() / this._startVec.mag(),
                        r = this._rotationDisabled ? 0 : 180 * n.angleWith(this._startVec) / Math.PI, s = this._map;
                    if (this._gestureIntent) {
                        var h = {duration: 0, around: s.unproject(i)};
                        "rotate" === this._gestureIntent && (h.bearing = this._startBearing + r), "zoom" !== this._gestureIntent && "rotate" !== this._gestureIntent || (h.zoom = s.transform.scaleZoom(this._startScale * a)), s.stop(), this._drainInertiaBuffer(), this._inertia.push([Date.now(), a, i]), s.easeTo(h, {originalEvent: t})
                    } else {
                        var u = Math.abs(1 - a) > significantScaleThreshold,
                            l = Math.abs(r) > significantRotateThreshold;
                        l ? this._gestureIntent = "rotate" : u && (this._gestureIntent = "zoom"), this._gestureIntent && (this._startVec = n, this._startScale = s.transform.scale, this._startBearing = s.transform.bearing)
                    }
                    t.preventDefault()
                }
            }, TouchZoomRotateHandler.prototype._onEnd = function (t) {
                window.document.removeEventListener("touchmove", this._onMove), window.document.removeEventListener("touchend", this._onEnd), this._drainInertiaBuffer();
                var e = this._inertia, o = this._map;
                if (e.length < 2) return void o.snapToNorth({}, {originalEvent: t});
                var i = e[e.length - 1], n = e[0], a = o.transform.scaleZoom(this._startScale * i[1]),
                    r = o.transform.scaleZoom(this._startScale * n[1]), s = a - r, h = (i[0] - n[0]) / 1e3, u = i[2];
                if (0 === h || a === r) return void o.snapToNorth({}, {originalEvent: t});
                var l = s * inertiaLinearity / h;
                Math.abs(l) > inertiaMaxSpeed && (l = l > 0 ? inertiaMaxSpeed : -inertiaMaxSpeed);
                var d = 1e3 * Math.abs(l / (inertiaDeceleration * inertiaLinearity)), c = a + l * d / 2e3;
                c < 0 && (c = 0), o.easeTo({
                    zoom: c,
                    duration: d,
                    easing: inertiaEasing,
                    around: this._aroundCenter ? o.getCenter() : o.unproject(u)
                }, {originalEvent: t})
            }, TouchZoomRotateHandler.prototype._drainInertiaBuffer = function () {
                for (var t = this._inertia, e = Date.now(), o = 160; t.length > 2 && e - t[0][0] > o;) t.shift()
            }, module.exports = TouchZoomRotateHandler;
        }, {"../../util/dom": 201, "../../util/util": 215, "../../util/window": 196}],
        188: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"), window = _dereq_("../util/window"), Hash = function () {
                util.bindAll(["_onHashChange", "_updateHash"], this)
            };
            Hash.prototype.addTo = function (t) {
                return this._map = t, window.addEventListener("hashchange", this._onHashChange, !1), this._map.on("moveend", this._updateHash), this
            }, Hash.prototype.remove = function () {
                return window.removeEventListener("hashchange", this._onHashChange, !1), this._map.off("moveend", this._updateHash), delete this._map, this
            }, Hash.prototype.getHashString = function (t) {
                var a = this._map.getCenter(), h = Math.round(100 * this._map.getZoom()) / 100,
                    e = Math.max(0, Math.ceil(Math.log(h) / Math.LN2)),
                    n = Math.round(a.lng * Math.pow(10, e)) / Math.pow(10, e),
                    o = Math.round(a.lat * Math.pow(10, e)) / Math.pow(10, e), i = this._map.getBearing(),
                    s = this._map.getPitch(), r = "";
                return r += t ? "#/" + n + "/" + o + "/" + h : "#" + h + "/" + o + "/" + n, (i || s) && (r += "/" + Math.round(10 * i) / 10), s && (r += "/" + Math.round(s)), r
            }, Hash.prototype._onHashChange = function () {
                var t = window.location.hash.replace("#", "").split("/");
                return t.length >= 3 && (this._map.jumpTo({
                    center: [+t[2], +t[1]],
                    zoom: +t[0],
                    bearing: +(t[3] || 0),
                    pitch: +(t[4] || 0)
                }), !0)
            }, Hash.prototype._updateHash = function () {
                var t = this.getHashString();
                window.history.replaceState("", "", t)
            }, module.exports = Hash;
        }, {"../util/util": 215, "../util/window": 196}],
        189: [function (_dereq_, module, exports) {
            "use strict";

            function removeNode(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }

            var util = _dereq_("../util/util"), browser = _dereq_("../util/browser"),
                window = _dereq_("../util/window"), DOM = _dereq_("../util/dom"), ajax = _dereq_("../util/ajax"),
                Style = _dereq_("../style/style"), AnimationLoop = _dereq_("../style/animation_loop"),
                Painter = _dereq_("../render/painter"), Transform = _dereq_("../geo/transform"),
                Hash = _dereq_("./hash"), bindHandlers = _dereq_("./bind_handlers"), Camera = _dereq_("./camera"),
                LngLat = _dereq_("../geo/lng_lat"), LngLatBounds = _dereq_("../geo/lng_lat_bounds"),
                Point = _dereq_("point-geometry"), AttributionControl = _dereq_("./control/attribution_control"),
                LogoControl = _dereq_("./control/logo_control"), isSupported = _dereq_("mapbox-gl-supported"),
                defaultMinZoom = 0, defaultMaxZoom = 22, defaultOptions = {
                    center: [0, 0],
                    zoom: 0,
                    bearing: 0,
                    pitch: 0,
                    minZoom: defaultMinZoom,
                    maxZoom: defaultMaxZoom,
                    interactive: !0,
                    scrollZoom: !0,
                    boxZoom: !0,
                    dragRotate: !0,
                    dragPan: !0,
                    keyboard: !0,
                    doubleClickZoom: !0,
                    touchZoomRotate: !0,
                    bearingSnap: 7,
                    hash: !1,
                    attributionControl: !0,
                    failIfMajorPerformanceCaveat: !1,
                    preserveDrawingBuffer: !1,
                    trackResize: !0,
                    renderWorldCopies: !0,
                    refreshExpiredTiles: !0
                }, Map = function (t) {
                    function e(e) {
                        var o = this;
                        if (e = util.extend({}, defaultOptions, e), null != e.minZoom && null != e.maxZoom && e.minZoom > e.maxZoom) throw new Error("maxZoom must be greater than minZoom");
                        var i = new Transform(e.minZoom, e.maxZoom, e.renderWorldCopies);
                        if (t.call(this, i, e), this._interactive = e.interactive, this._failIfMajorPerformanceCaveat = e.failIfMajorPerformanceCaveat, this._preserveDrawingBuffer = e.preserveDrawingBuffer, this._trackResize = e.trackResize, this._bearingSnap = e.bearingSnap, this._refreshExpiredTiles = e.refreshExpiredTiles, "string" == typeof e.container) {
                            if (this._container = window.document.getElementById(e.container), !this._container) throw new Error("Container '" + e.container + "' not found.")
                        } else this._container = e.container;
                        this.animationLoop = new AnimationLoop, e.maxBounds && this.setMaxBounds(e.maxBounds), util.bindAll(["_onWindowOnline", "_onWindowResize", "_contextLost", "_contextRestored", "_update", "_render", "_onData", "_onDataLoading"], this), this._setupContainer(), this._setupPainter(), this.on("move", this._update.bind(this, !1)), this.on("zoom", this._update.bind(this, !0)), this.on("moveend", function () {
                            o.animationLoop.set(300), o._rerender()
                        }), "undefined" != typeof window && (window.addEventListener("online", this._onWindowOnline, !1), window.addEventListener("resize", this._onWindowResize, !1)), bindHandlers(this, e), this._hash = e.hash && (new Hash).addTo(this), this._hash && this._hash._onHashChange() || this.jumpTo({
                            center: e.center,
                            zoom: e.zoom,
                            bearing: e.bearing,
                            pitch: e.pitch
                        }), this._classes = [], this.resize(), e.classes && this.setClasses(e.classes), e.style && this.setStyle(e.style), e.attributionControl && this.addControl(new AttributionControl), this.addControl(new LogoControl, e.logoPosition), this.on("style.load", function () {
                            this.transform.unmodified && this.jumpTo(this.style.stylesheet), this.style.update(this._classes, {transition: !1})
                        }), this.on("data", this._onData), this.on("dataloading", this._onDataLoading)
                    }

                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var o = {
                        showTileBoundaries: {},
                        showCollisionBoxes: {},
                        showOverdrawInspector: {},
                        repaint: {},
                        vertices: {}
                    };
                    return e.prototype.addControl = function (t, e) {
                        void 0 === e && t.getDefaultPosition && (e = t.getDefaultPosition()), void 0 === e && (e = "top-right");
                        var o = t.onAdd(this), i = this._controlPositions[e];
                        return e.indexOf("bottom") !== -1 ? i.insertBefore(o, i.firstChild) : i.appendChild(o), this
                    }, e.prototype.removeControl = function (t) {
                        return t.onRemove(this), this
                    }, e.prototype.addClass = function (t, e) {
                        return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."), this._classes.indexOf(t) >= 0 || "" === t ? this : (this._classes.push(t), this._classOptions = e, this.style && this.style.updateClasses(), this._update(!0))
                    }, e.prototype.removeClass = function (t, e) {
                        util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.");
                        var o = this._classes.indexOf(t);
                        return o < 0 || "" === t ? this : (this._classes.splice(o, 1), this._classOptions = e, this.style && this.style.updateClasses(), this._update(!0))
                    }, e.prototype.setClasses = function (t, e) {
                        util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.");
                        for (var o = {}, i = 0; i < t.length; i++) "" !== t[i] && (o[t[i]] = !0);
                        return this._classes = Object.keys(o), this._classOptions = e, this.style && this.style.updateClasses(), this._update(!0)
                    }, e.prototype.hasClass = function (t) {
                        return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."), this._classes.indexOf(t) >= 0
                    }, e.prototype.getClasses = function () {
                        return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."), this._classes
                    }, e.prototype.resize = function () {
                        var t = this._containerDimensions(), e = t[0], o = t[1];
                        return this._resizeCanvas(e, o), this.transform.resize(e, o), this.painter.resize(e, o), this.fire("movestart").fire("move").fire("resize").fire("moveend")
                    }, e.prototype.getBounds = function () {
                        var t = new LngLatBounds(this.transform.pointLocation(new Point(0, this.transform.height)), this.transform.pointLocation(new Point(this.transform.width, 0)));
                        return (this.transform.angle || this.transform.pitch) && (t.extend(this.transform.pointLocation(new Point(this.transform.size.x, 0))), t.extend(this.transform.pointLocation(new Point(0, this.transform.size.y)))), t
                    }, e.prototype.setMaxBounds = function (t) {
                        if (t) {
                            var e = LngLatBounds.convert(t);
                            this.transform.lngRange = [e.getWest(), e.getEast()], this.transform.latRange = [e.getSouth(), e.getNorth()], this.transform._constrain(), this._update()
                        } else null !== t && void 0 !== t || (this.transform.lngRange = [], this.transform.latRange = [], this._update());
                        return this
                    }, e.prototype.setMinZoom = function (t) {
                        if (t = null === t || void 0 === t ? defaultMinZoom : t, t >= defaultMinZoom && t <= this.transform.maxZoom) return this.transform.minZoom = t, this._update(), this.getZoom() < t && this.setZoom(t), this;
                        throw new Error("minZoom must be between " + defaultMinZoom + " and the current maxZoom, inclusive")
                    }, e.prototype.getMinZoom = function () {
                        return this.transform.minZoom
                    }, e.prototype.setMaxZoom = function (t) {
                        if (t = null === t || void 0 === t ? defaultMaxZoom : t, t >= this.transform.minZoom) return this.transform.maxZoom = t, this._update(), this.getZoom() > t && this.setZoom(t), this;
                        throw new Error("maxZoom must be greater than the current minZoom")
                    }, e.prototype.getMaxZoom = function () {
                        return this.transform.maxZoom
                    }, e.prototype.project = function (t) {
                        return this.transform.locationPoint(LngLat.convert(t))
                    }, e.prototype.unproject = function (t) {
                        return this.transform.pointLocation(Point.convert(t))
                    }, e.prototype.on = function (e, o, i) {
                        var r = this;
                        if (void 0 === i) return t.prototype.on.call(this, e, o);
                        var s = function () {
                            if ("mouseenter" === e || "mouseover" === e) {
                                var t = !1, s = function (s) {
                                    var n = r.queryRenderedFeatures(s.point, {layers: [o]});
                                    n.length ? t || (t = !0, i.call(r, util.extend({features: n}, s, {type: e}))) : t = !1
                                }, n = function () {
                                    t = !1
                                };
                                return {layer: o, listener: i, delegates: {mousemove: s, mouseout: n}}
                            }
                            if ("mouseleave" === e || "mouseout" === e) {
                                var a = !1, h = function (t) {
                                    var s = r.queryRenderedFeatures(t.point, {layers: [o]});
                                    s.length ? a = !0 : a && (a = !1, i.call(r, util.extend({}, t, {type: e})))
                                }, l = function (t) {
                                    a && (a = !1, i.call(r, util.extend({}, t, {type: e})))
                                };
                                return {layer: o, listener: i, delegates: {mousemove: h, mouseout: l}}
                            }
                            var u = function (t) {
                                var e = r.queryRenderedFeatures(t.point, {layers: [o]});
                                e.length && i.call(r, util.extend({features: e}, t))
                            };
                            return {layer: o, listener: i, delegates: (d = {}, d[e] = u, d)};
                            var d
                        }();
                        this._delegatedListeners = this._delegatedListeners || {}, this._delegatedListeners[e] = this._delegatedListeners[e] || [], this._delegatedListeners[e].push(s);
                        for (var n in s.delegates) r.on(n, s.delegates[n]);
                        return this
                    }, e.prototype.off = function (e, o, i) {
                        var r = this;
                        if (void 0 === i) return t.prototype.off.call(this, e, o);
                        if (this._delegatedListeners && this._delegatedListeners[e]) for (var s = this._delegatedListeners[e], n = 0; n < s.length; n++) {
                            var a = s[n];
                            if (a.layer === o && a.listener === i) {
                                for (var h in a.delegates) r.off(h, a.delegates[h]);
                                return s.splice(n, 1), r
                            }
                        }
                    }, e.prototype.queryRenderedFeatures = function () {
                        function t(t) {
                            return t instanceof Point || Array.isArray(t)
                        }

                        var e, o = {};
                        return 2 === arguments.length ? (e = arguments[0], o = arguments[1]) : 1 === arguments.length && t(arguments[0]) ? e = arguments[0] : 1 === arguments.length && (o = arguments[0]), this.style ? this.style.queryRenderedFeatures(this._makeQueryGeometry(e), o, this.transform.zoom, this.transform.angle) : []
                    }, e.prototype._makeQueryGeometry = function (t) {
                        var e = this;
                        void 0 === t && (t = [Point.convert([0, 0]), Point.convert([this.transform.width, this.transform.height])]);
                        var o, i = t instanceof Point || "number" == typeof t[0];
                        if (i) {
                            var r = Point.convert(t);
                            o = [r]
                        } else {
                            var s = [Point.convert(t[0]), Point.convert(t[1])];
                            o = [s[0], new Point(s[1].x, s[0].y), s[1], new Point(s[0].x, s[1].y), s[0]]
                        }
                        return o = o.map(function (t) {
                            return e.transform.pointCoordinate(t)
                        })
                    }, e.prototype.querySourceFeatures = function (t, e) {
                        return this.style.querySourceFeatures(t, e)
                    }, e.prototype.setStyle = function (t, e) {
                        var o = (!e || e.diff !== !1) && this.style && t && !(t instanceof Style) && "string" != typeof t;
                        if (o) try {
                            return this.style.setState(t) && this._update(!0), this
                        } catch (t) {
                            util.warnOnce("Unable to perform style diff: " + (t.message || t.error || t) + ".  Rebuilding the style from scratch.")
                        }
                        return this.style && (this.style.setEventedParent(null), this.style._remove(), this.off("rotate", this.style._redoPlacement), this.off("pitch", this.style._redoPlacement), this.off("move", this.style._redoPlacement)), t ? (t instanceof Style ? this.style = t : this.style = new Style(t, this), this.style.setEventedParent(this, {style: this.style}), this.on("rotate", this.style._redoPlacement), this.on("pitch", this.style._redoPlacement), this.on("move", this.style._redoPlacement), this) : (this.style = null, this)
                    }, e.prototype.getStyle = function () {
                        if (this.style) return this.style.serialize()
                    }, e.prototype.isStyleLoaded = function () {
                        return this.style ? this.style.loaded() : util.warnOnce("There is no style added to the map.")
                    }, e.prototype.addSource = function (t, e) {
                        return this.style.addSource(t, e), this._update(!0), this
                    }, e.prototype.isSourceLoaded = function (t) {
                        var e = this.style && this.style.sourceCaches[t];
                        return void 0 === e ? void this.fire("error", {error: new Error("There is no source with ID '" + t + "'")}) : e.loaded()
                    }, e.prototype.areTilesLoaded = function () {
                        var t = this.style && this.style.sourceCaches;
                        for (var e in t) {
                            var o = t[e], i = o._tiles;
                            for (var r in i) {
                                var s = i[r];
                                if ("loaded" !== s.state && "errored" !== s.state) return !1
                            }
                        }
                        return !0
                    }, e.prototype.addSourceType = function (t, e, o) {
                        return this.style.addSourceType(t, e, o)
                    }, e.prototype.removeSource = function (t) {
                        return this.style.removeSource(t), this._update(!0), this
                    }, e.prototype.getSource = function (t) {
                        return this.style.getSource(t)
                    }, e.prototype.addImage = function (t, e, o) {
                        this.style.spriteAtlas.addImage(t, e, o)
                    }, e.prototype.removeImage = function (t) {
                        this.style.spriteAtlas.removeImage(t)
                    }, e.prototype.loadImage = function (t, e) {
                        ajax.getImage(t, e)
                    }, e.prototype.addLayer = function (t, e) {
                        return this.style.addLayer(t, e), this._update(!0), this
                    }, e.prototype.moveLayer = function (t, e) {
                        return this.style.moveLayer(t, e), this._update(!0), this
                    }, e.prototype.removeLayer = function (t) {
                        return this.style.removeLayer(t), this._update(!0), this
                    }, e.prototype.getLayer = function (t) {
                        return this.style.getLayer(t)
                    }, e.prototype.setFilter = function (t, e) {
                        return this.style.setFilter(t, e), this._update(!0), this
                    }, e.prototype.setLayerZoomRange = function (t, e, o) {
                        return this.style.setLayerZoomRange(t, e, o), this._update(!0), this
                    }, e.prototype.getFilter = function (t) {
                        return this.style.getFilter(t)
                    }, e.prototype.setPaintProperty = function (t, e, o, i) {
                        return this.style.setPaintProperty(t, e, o, i), this._update(!0), this
                    }, e.prototype.getPaintProperty = function (t, e, o) {
                        return this.style.getPaintProperty(t, e, o)
                    }, e.prototype.setLayoutProperty = function (t, e, o) {
                        return this.style.setLayoutProperty(t, e, o), this._update(!0), this
                    }, e.prototype.getLayoutProperty = function (t, e) {
                        return this.style.getLayoutProperty(t, e)
                    }, e.prototype.setLight = function (t) {
                        return this.style.setLight(t), this._update(!0), this
                    }, e.prototype.getLight = function () {
                        return this.style.getLight()
                    }, e.prototype.getContainer = function () {
                        return this._container
                    }, e.prototype.getCanvasContainer = function () {
                        return this._canvasContainer
                    }, e.prototype.getCanvas = function () {
                        return this._canvas
                    }, e.prototype._containerDimensions = function () {
                        var t = 0, e = 0;
                        return this._container && (t = this._container.offsetWidth || 400, e = this._container.offsetHeight || 300), [t, e]
                    }, e.prototype._setupContainer = function () {
                        var t = this._container;
                        t.classList.add("mapboxgl-map");
                        var e = this._canvasContainer = DOM.create("div", "mapboxgl-canvas-container", t);
                        this._interactive && e.classList.add("mapboxgl-interactive"), this._canvas = DOM.create("canvas", "mapboxgl-canvas", e), this._canvas.style.position = "absolute", this._canvas.addEventListener("webglcontextlost", this._contextLost, !1), this._canvas.addEventListener("webglcontextrestored", this._contextRestored, !1), this._canvas.setAttribute("tabindex", 0), this._canvas.setAttribute("aria-label", "Map");
                        var o = this._containerDimensions();
                        this._resizeCanvas(o[0], o[1]);
                        var i = this._controlContainer = DOM.create("div", "mapboxgl-control-container", t),
                            r = this._controlPositions = {};
                        ["top-left", "top-right", "bottom-left", "bottom-right"].forEach(function (t) {
                            r[t] = DOM.create("div", "mapboxgl-ctrl-" + t, i)
                        })
                    }, e.prototype._resizeCanvas = function (t, e) {
                        var o = window.devicePixelRatio || 1;
                        this._canvas.width = o * t, this._canvas.height = o * e, this._canvas.style.width = t + "px", this._canvas.style.height = e + "px"
                    }, e.prototype._setupPainter = function () {
                        var t = util.extend({
                                failIfMajorPerformanceCaveat: this._failIfMajorPerformanceCaveat,
                                preserveDrawingBuffer: this._preserveDrawingBuffer
                            }, isSupported.webGLContextAttributes),
                            e = this._canvas.getContext("webgl", t) || this._canvas.getContext("experimental-webgl", t);
                        return e ? void(this.painter = new Painter(e, this.transform)) : void this.fire("error", {error: new Error("Failed to initialize WebGL")})
                    }, e.prototype._contextLost = function (t) {
                        t.preventDefault(), this._frameId && (browser.cancelFrame(this._frameId), this._frameId = null), this.fire("webglcontextlost", {originalEvent: t})
                    }, e.prototype._contextRestored = function (t) {
                        this._setupPainter(), this.resize(), this._update(), this.fire("webglcontextrestored", {originalEvent: t})
                    }, e.prototype.loaded = function () {
                        return !this._styleDirty && !this._sourcesDirty && !(!this.style || !this.style.loaded())
                    }, e.prototype._update = function (t) {
                        return this.style ? (this._styleDirty = this._styleDirty || t, this._sourcesDirty = !0, this._rerender(), this) : this
                    }, e.prototype._render = function () {
                        return this.style && this._styleDirty && (this._styleDirty = !1, this.style.update(this._classes, this._classOptions), this._classOptions = null, this.style._recalculate(this.transform.zoom)), this.style && this._sourcesDirty && (this._sourcesDirty = !1, this.style._updateSources(this.transform)), this.painter.render(this.style, {
                            showTileBoundaries: this.showTileBoundaries,
                            showOverdrawInspector: this._showOverdrawInspector,
                            rotating: this.rotating,
                            zooming: this.zooming
                        }), this.fire("render"), this.loaded() && !this._loaded && (this._loaded = !0, this.fire("load")), this._frameId = null, this.animationLoop.stopped() || (this._styleDirty = !0), (this._sourcesDirty || this._repaint || this._styleDirty) && this._rerender(), this
                    }, e.prototype.remove = function () {
                        this._hash && this._hash.remove(), browser.cancelFrame(this._frameId), this._frameId = null, this.setStyle(null), "undefined" != typeof window && (window.removeEventListener("resize", this._onWindowResize, !1), window.removeEventListener("online", this._onWindowOnline, !1));
                        var t = this.painter.gl.getExtension("WEBGL_lose_context");
                        t && t.loseContext(), removeNode(this._canvasContainer), removeNode(this._controlContainer), this._container.classList.remove("mapboxgl-map"), this.fire("remove")
                    }, e.prototype._rerender = function () {
                        this.style && !this._frameId && (this._frameId = browser.frame(this._render))
                    }, e.prototype._onWindowOnline = function () {
                        this._update()
                    }, e.prototype._onWindowResize = function () {
                        this._trackResize && this.stop().resize()._update()
                    }, o.showTileBoundaries.get = function () {
                        return !!this._showTileBoundaries
                    }, o.showTileBoundaries.set = function (t) {
                        this._showTileBoundaries !== t && (this._showTileBoundaries = t, this._update())
                    }, o.showCollisionBoxes.get = function () {
                        return !!this._showCollisionBoxes
                    }, o.showCollisionBoxes.set = function (t) {
                        this._showCollisionBoxes !== t && (this._showCollisionBoxes = t, this.style._redoPlacement())
                    }, o.showOverdrawInspector.get = function () {
                        return !!this._showOverdrawInspector
                    }, o.showOverdrawInspector.set = function (t) {
                        this._showOverdrawInspector !== t && (this._showOverdrawInspector = t, this._update())
                    }, o.repaint.get = function () {
                        return !!this._repaint
                    }, o.repaint.set = function (t) {
                        this._repaint = t, this._update()
                    }, o.vertices.get = function () {
                        return !!this._vertices
                    }, o.vertices.set = function (t) {
                        this._vertices = t, this._update()
                    }, e.prototype._onData = function (t) {
                        this._update("style" === t.dataType), this.fire(t.dataType + "data", t)
                    }, e.prototype._onDataLoading = function (t) {
                        this.fire(t.dataType + "dataloading", t)
                    }, Object.defineProperties(e.prototype, o), e
                }(Camera);
            module.exports = Map;
        }, {
            "../geo/lng_lat": 61,
            "../geo/lng_lat_bounds": 62,
            "../geo/transform": 63,
            "../render/painter": 76,
            "../style/animation_loop": 145,
            "../style/style": 148,
            "../util/ajax": 193,
            "../util/browser": 194,
            "../util/dom": 201,
            "../util/util": 215,
            "../util/window": 196,
            "./bind_handlers": 173,
            "./camera": 174,
            "./control/attribution_control": 175,
            "./control/logo_control": 178,
            "./hash": 188,
            "mapbox-gl-supported": 22,
            "point-geometry": 25
        }],
        190: [function (_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../util/dom"), LngLat = _dereq_("../geo/lng_lat"), Point = _dereq_("point-geometry"),
                smartWrap = _dereq_("../util/smart_wrap"), Marker = function (t, e) {
                    this._offset = Point.convert(e && e.offset || [0, 0]), this._update = this._update.bind(this), this._onMapClick = this._onMapClick.bind(this), t || (t = DOM.create("div")), t.classList.add("mapboxgl-marker"), this._element = t, this._popup = null
                };
            Marker.prototype.addTo = function (t) {
                return this.remove(), this._map = t, t.getCanvasContainer().appendChild(this._element), t.on("move", this._update), t.on("moveend", this._update), this._update(), this._map.on("click", this._onMapClick), this
            }, Marker.prototype.remove = function () {
                return this._map && (this._map.off("click", this._onMapClick), this._map.off("move", this._update), this._map.off("moveend", this._update), this._map = null), DOM.remove(this._element), this._popup && this._popup.remove(), this
            }, Marker.prototype.getLngLat = function () {
                return this._lngLat
            }, Marker.prototype.setLngLat = function (t) {
                return this._lngLat = LngLat.convert(t), this._pos = null, this._popup && this._popup.setLngLat(this._lngLat), this._update(), this
            }, Marker.prototype.getElement = function () {
                return this._element
            }, Marker.prototype.setPopup = function (t) {
                return this._popup && (this._popup.remove(), this._popup = null), t && (this._popup = t, this._popup.setLngLat(this._lngLat)), this
            }, Marker.prototype._onMapClick = function (t) {
                var e = t.originalEvent.target, p = this._element;
                this._popup && (e === p || p.contains(e)) && this.togglePopup()
            }, Marker.prototype.getPopup = function () {
                return this._popup
            }, Marker.prototype.togglePopup = function () {
                var t = this._popup;
                t && (t.isOpen() ? t.remove() : t.addTo(this._map))
            }, Marker.prototype._update = function (t) {
                this._map && (this._map.transform.renderWorldCopies && (this._lngLat = smartWrap(this._lngLat, this._pos, this._map.transform)), this._pos = this._map.project(this._lngLat)._add(this._offset), t && "moveend" !== t.type || (this._pos = this._pos.round()), DOM.setTransform(this._element, "translate(" + this._pos.x + "px, " + this._pos.y + "px)"))
            }, module.exports = Marker;
        }, {"../geo/lng_lat": 61, "../util/dom": 201, "../util/smart_wrap": 211, "point-geometry": 25}],
        191: [function (_dereq_, module, exports) {
            "use strict";

            function normalizeOffset(t) {
                if (t) {
                    if ("number" == typeof t) {
                        var o = Math.round(Math.sqrt(.5 * Math.pow(t, 2)));
                        return {
                            top: new Point(0, t),
                            "top-left": new Point(o, o),
                            "top-right": new Point(-o, o),
                            bottom: new Point(0, -t),
                            "bottom-left": new Point(o, -o),
                            "bottom-right": new Point(-o, -o),
                            left: new Point(t, 0),
                            right: new Point(-t, 0)
                        }
                    }
                    if (isPointLike(t)) {
                        var e = Point.convert(t);
                        return {
                            top: e,
                            "top-left": e,
                            "top-right": e,
                            bottom: e,
                            "bottom-left": e,
                            "bottom-right": e,
                            left: e,
                            right: e
                        }
                    }
                    return {
                        top: Point.convert(t.top || [0, 0]),
                        "top-left": Point.convert(t["top-left"] || [0, 0]),
                        "top-right": Point.convert(t["top-right"] || [0, 0]),
                        bottom: Point.convert(t.bottom || [0, 0]),
                        "bottom-left": Point.convert(t["bottom-left"] || [0, 0]),
                        "bottom-right": Point.convert(t["bottom-right"] || [0, 0]),
                        left: Point.convert(t.left || [0, 0]),
                        right: Point.convert(t.right || [0, 0])
                    }
                }
                return normalizeOffset(new Point(0, 0))
            }

            function isPointLike(t) {
                return t instanceof Point || Array.isArray(t)
            }

            var util = _dereq_("../util/util"), Evented = _dereq_("../util/evented"), DOM = _dereq_("../util/dom"),
                LngLat = _dereq_("../geo/lng_lat"), Point = _dereq_("point-geometry"),
                window = _dereq_("../util/window"), smartWrap = _dereq_("../util/smart_wrap"),
                defaultOptions = {closeButton: !0, closeOnClick: !0}, Popup = function (t) {
                    function o(o) {
                        t.call(this), this.options = util.extend(Object.create(defaultOptions), o), util.bindAll(["_update", "_onClickClose"], this)
                    }

                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.addTo = function (t) {
                        return this._map = t, this._map.on("move", this._update), this.options.closeOnClick && this._map.on("click", this._onClickClose), this._update(), this
                    }, o.prototype.isOpen = function () {
                        return !!this._map
                    }, o.prototype.remove = function () {
                        return this._content && this._content.parentNode && this._content.parentNode.removeChild(this._content), this._container && (this._container.parentNode.removeChild(this._container), delete this._container), this._map && (this._map.off("move", this._update), this._map.off("click", this._onClickClose), delete this._map), this.fire("close"), this
                    }, o.prototype.getLngLat = function () {
                        return this._lngLat
                    }, o.prototype.setLngLat = function (t) {
                        return this._lngLat = LngLat.convert(t), this._pos = null, this._update(), this
                    }, o.prototype.setText = function (t) {
                        return this.setDOMContent(window.document.createTextNode(t))
                    }, o.prototype.setHTML = function (t) {
                        var o, e = window.document.createDocumentFragment(), n = window.document.createElement("body");
                        for (n.innerHTML = t; ;) {
                            if (o = n.firstChild, !o) break;
                            e.appendChild(o)
                        }
                        return this.setDOMContent(e)
                    }, o.prototype.setDOMContent = function (t) {
                        return this._createContent(), this._content.appendChild(t), this._update(), this
                    }, o.prototype._createContent = function () {
                        this._content && this._content.parentNode && this._content.parentNode.removeChild(this._content), this._content = DOM.create("div", "mapboxgl-popup-content", this._container), this.options.closeButton && (this._closeButton = DOM.create("button", "mapboxgl-popup-close-button", this._content), this._closeButton.type = "button", this._closeButton.setAttribute("aria-label", "Close popup"), this._closeButton.innerHTML = "&#215;", this._closeButton.addEventListener("click", this._onClickClose))
                    }, o.prototype._update = function () {
                        if (this._map && this._lngLat && this._content) {
                            this._container || (this._container = DOM.create("div", "mapboxgl-popup", this._map.getContainer()), this._tip = DOM.create("div", "mapboxgl-popup-tip", this._container), this._container.appendChild(this._content)), this._map.transform.renderWorldCopies && (this._lngLat = smartWrap(this._lngLat, this._pos, this._map.transform)), this._pos = this._map.project(this._lngLat);
                            var t = this.options.anchor, o = normalizeOffset(this.options.offset);
                            if (!t) {
                                var e = this._container.offsetWidth, n = this._container.offsetHeight;
                                t = this._pos.y + o.bottom.y < n ? ["top"] : this._pos.y > this._map.transform.height - n ? ["bottom"] : [], this._pos.x < e / 2 ? t.push("left") : this._pos.x > this._map.transform.width - e / 2 && t.push("right"), t = 0 === t.length ? "bottom" : t.join("-")
                            }
                            var i = this._pos.add(o[t]).round(), r = {
                                top: "translate(-50%,0)",
                                "top-left": "translate(0,0)",
                                "top-right": "translate(-100%,0)",
                                bottom: "translate(-50%,-100%)",
                                "bottom-left": "translate(0,-100%)",
                                "bottom-right": "translate(-100%,-100%)",
                                left: "translate(0,-50%)",
                                right: "translate(-100%,-50%)"
                            }, s = this._container.classList;
                            for (var p in r) s.remove("mapboxgl-popup-anchor-" + p);
                            s.add("mapboxgl-popup-anchor-" + t), DOM.setTransform(this._container, r[t] + " translate(" + i.x + "px," + i.y + "px)")
                        }
                    }, o.prototype._onClickClose = function () {
                        this.remove()
                    }, o
                }(Evented);
            module.exports = Popup;
        }, {
            "../geo/lng_lat": 61,
            "../util/dom": 201,
            "../util/evented": 202,
            "../util/smart_wrap": 211,
            "../util/util": 215,
            "../util/window": 196,
            "point-geometry": 25
        }],
        192: [function (_dereq_, module, exports) {
            "use strict";
            var Actor = function (t, e, a) {
                this.target = t, this.parent = e, this.mapId = a, this.callbacks = {}, this.callbackID = 0, this.receive = this.receive.bind(this), this.target.addEventListener("message", this.receive, !1)
            };
            Actor.prototype.send = function (t, e, a, r, s) {
                var i = a ? this.mapId + ":" + this.callbackID++ : null;
                a && (this.callbacks[i] = a), this.target.postMessage({
                    targetMapId: s,
                    sourceMapId: this.mapId,
                    type: t,
                    id: String(i),
                    data: e
                }, r)
            }, Actor.prototype.receive = function (t) {
                var e, a = this, r = t.data, s = r.id;
                if (!r.targetMapId || this.mapId === r.targetMapId) {
                    var i = function (t, e, r) {
                        a.target.postMessage({
                            sourceMapId: a.mapId,
                            type: "<response>",
                            id: String(s),
                            error: t ? String(t) : null,
                            data: e
                        }, r)
                    };
                    if ("<response>" === r.type) e = this.callbacks[r.id], delete this.callbacks[r.id], e && e(r.error || null, r.data); else if ("undefined" != typeof r.id && this.parent[r.type]) this.parent[r.type](r.sourceMapId, r.data, i); else if ("undefined" != typeof r.id && this.parent.getWorkerSource) {
                        var p = r.type.split("."), d = this.parent.getWorkerSource(r.sourceMapId, p[0]);
                        d[p[1]](r.data, i)
                    } else this.parent[r.type](r.data)
                }
            }, Actor.prototype.remove = function () {
                this.target.removeEventListener("message", this.receive, !1)
            }, module.exports = Actor;
        }, {}],
        193: [function (_dereq_, module, exports) {
            "use strict";

            function sameOrigin(e) {
                var t = window.document.createElement("a");
                return t.href = e, t.protocol === window.document.location.protocol && t.host === window.document.location.host
            }

            var window = _dereq_("./window"), AJAXError = function (e) {
                function t(t, r) {
                    e.call(this, t), this.status = r
                }

                return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
            }(Error);
            exports.getJSON = function (e, t) {
                var r = new window.XMLHttpRequest;
                return r.open("GET", e, !0), r.setRequestHeader("Accept", "application/json"), r.onerror = function (e) {
                    t(e)
                }, r.onload = function () {
                    if (r.status >= 200 && r.status < 300 && r.response) {
                        var e;
                        try {
                            e = JSON.parse(r.response)
                        } catch (e) {
                            return t(e)
                        }
                        t(null, e)
                    } else t(new AJAXError(r.statusText, r.status))
                }, r.send(), r
            }, exports.getArrayBuffer = function (e, t) {
                var r = new window.XMLHttpRequest;
                return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onerror = function (e) {
                    t(e)
                }, r.onload = function () {
                    return 0 === r.response.byteLength && 200 === r.status ? t(new Error("http status 200 returned without content.")) : void(r.status >= 200 && r.status < 300 && r.response ? t(null, {
                        data: r.response,
                        cacheControl: r.getResponseHeader("Cache-Control"),
                        expires: r.getResponseHeader("Expires")
                    }) : t(new AJAXError(r.statusText, r.status)))
                }, r.send(), r
            };
            var transparentPngUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            exports.getImage = function (e, t) {
                return exports.getArrayBuffer(e, function (e, r) {
                    if (e) return t(e);
                    var n = new window.Image, o = window.URL || window.webkitURL;
                    n.onload = function () {
                        t(null, n), o.revokeObjectURL(n.src)
                    };
                    var s = new window.Blob([new Uint8Array(r.data)], {type: "image/png"});
                    n.cacheControl = r.cacheControl, n.expires = r.expires, n.src = r.data.byteLength ? o.createObjectURL(s) : transparentPngUrl
                })
            }, exports.getVideo = function (e, t) {
                var r = window.document.createElement("video");
                r.onloadstart = function () {
                    t(null, r)
                };
                for (var n = 0; n < e.length; n++) {
                    var o = window.document.createElement("source");
                    sameOrigin(e[n]) || (r.crossOrigin = "Anonymous"), o.src = e[n], r.appendChild(o)
                }
                return r
            };
        }, {"./window": 196}],
        194: [function (_dereq_, module, exports) {
            "use strict";
            var window = _dereq_("./window");
            module.exports.now = function () {
                return window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now.bind(Date)
            }();
            var frame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            exports.frame = function (e) {
                return frame(e)
            };
            var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
            exports.cancelFrame = function (e) {
                cancel(e)
            }, exports.timed = function (e, n, t) {
                function o(i) {
                    r || (i = module.exports.now(), i >= a + n ? e.call(t, 1) : (e.call(t, (i - a) / n), exports.frame(o)))
                }

                if (!n) return e.call(t, 1), null;
                var r = !1, a = module.exports.now();
                return exports.frame(o), function () {
                    r = !0
                }
            }, exports.getImageData = function (e) {
                var n = window.document.createElement("canvas"), t = n.getContext("2d");
                return n.width = e.width, n.height = e.height, t.drawImage(e, 0, 0, e.width, e.height), t.getImageData(0, 0, e.width, e.height).data
            }, exports.supported = _dereq_("mapbox-gl-supported"), exports.hardwareConcurrency = window.navigator.hardwareConcurrency || 4, Object.defineProperty(exports, "devicePixelRatio", {
                get: function () {
                    return window.devicePixelRatio
                }
            }), exports.supportsWebp = !1;
            var webpImgTest = window.document.createElement("img");
            webpImgTest.onload = function () {
                exports.supportsWebp = !0
            }, webpImgTest.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";
        }, {"./window": 196, "mapbox-gl-supported": 22}],
        195: [function (_dereq_, module, exports) {
            "use strict";
            var WebWorkify = _dereq_("webworkify"), window = _dereq_("../window"),
                workerURL = window.URL.createObjectURL(new WebWorkify(_dereq_("../../source/worker"), {bare: !0}));
            module.exports = function () {
                return new window.Worker(workerURL)
            };
        }, {"../../source/worker": 99, "../window": 196, "webworkify": 40}],
        196: [function (_dereq_, module, exports) {
            "use strict";
            module.exports = self;
        }, {}],
        197: [function (_dereq_, module, exports) {
            "use strict";

            function compareAreas(e, r) {
                return r.area - e.area
            }

            var quickselect = _dereq_("quickselect"), calculateSignedArea = _dereq_("./util").calculateSignedArea;
            module.exports = function (e, r) {
                var a = e.length;
                if (a <= 1) return [e];
                for (var t, u, c = [], i = 0; i < a; i++) {
                    var l = calculateSignedArea(e[i]);
                    0 !== l && (e[i].area = Math.abs(l), void 0 === u && (u = l < 0), u === l < 0 ? (t && c.push(t), t = [e[i]]) : t.push(e[i]))
                }
                if (t && c.push(t), r > 1) for (var n = 0; n < c.length; n++) c[n].length <= r || (quickselect(c[n], r, 1, c[n].length - 1, compareAreas), c[n] = c[n].slice(0, r));
                return c
            };
        }, {"./util": 215, "quickselect": 27}],
        198: [function (_dereq_, module, exports) {
            "use strict";
            var config = {API_URL: "https://api.mapbox.com", REQUIRE_ACCESS_TOKEN: !0, ACCESS_TOKEN: null};
            module.exports = config;
        }, {}],
        199: [function (_dereq_, module, exports) {
            "use strict";
            var DictionaryCoder = function (r) {
                var t = this;
                this._stringToNumber = {}, this._numberToString = [];
                for (var o = 0; o < r.length; o++) {
                    var i = r[o];
                    t._stringToNumber[i] = o, t._numberToString[o] = i
                }
            };
            DictionaryCoder.prototype.encode = function (r) {
                return this._stringToNumber[r]
            }, DictionaryCoder.prototype.decode = function (r) {
                return this._numberToString[r]
            }, module.exports = DictionaryCoder;
        }, {}],
        200: [function (_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("./util"), Actor = _dereq_("./actor"), Dispatcher = function (t, r) {
                var o = this;
                this.workerPool = t, this.actors = [], this.currentActor = 0, this.id = util.uniqueId();
                for (var i = this.workerPool.acquire(this.id), e = 0; e < i.length; e++) {
                    var s = i[e], c = new Actor(s, r, o.id);
                    c.name = "Worker " + e, o.actors.push(c)
                }
            };
            Dispatcher.prototype.broadcast = function (t, r, o) {
                o = o || function () {
                }, util.asyncAll(this.actors, function (o, i) {
                    o.send(t, r, i)
                }, o)
            }, Dispatcher.prototype.send = function (t, r, o, i, e) {
                return ("number" != typeof i || isNaN(i)) && (i = this.currentActor = (this.currentActor + 1) % this.actors.length), this.actors[i].send(t, r, o, e), i
            }, Dispatcher.prototype.remove = function () {
                this.actors.forEach(function (t) {
                    t.remove()
                }), this.actors = [], this.workerPool.release(this.id)
            }, module.exports = Dispatcher;
        }, {"./actor": 192, "./util": 215}],
        201: [function (_dereq_, module, exports) {
            "use strict";

            function testProp(e) {
                for (var t = 0; t < e.length; t++) if (e[t] in docStyle) return e[t];
                return e[0]
            }

            function suppressClick(e) {
                e.preventDefault(), e.stopPropagation(), window.removeEventListener("click", suppressClick, !0)
            }

            var Point = _dereq_("point-geometry"), window = _dereq_("./window");
            exports.create = function (e, t, o) {
                var n = window.document.createElement(e);
                return t && (n.className = t), o && o.appendChild(n), n
            };
            var docStyle = window.document.documentElement.style,
                selectProp = testProp(["userSelect", "MozUserSelect", "WebkitUserSelect", "msUserSelect"]), userSelect;
            exports.disableDrag = function () {
                selectProp && (userSelect = docStyle[selectProp], docStyle[selectProp] = "none")
            }, exports.enableDrag = function () {
                selectProp && (docStyle[selectProp] = userSelect)
            };
            var transformProp = testProp(["transform", "WebkitTransform"]);
            exports.setTransform = function (e, t) {
                e.style[transformProp] = t
            }, exports.suppressClick = function () {
                window.addEventListener("click", suppressClick, !0), window.setTimeout(function () {
                    window.removeEventListener("click", suppressClick, !0)
                }, 0)
            }, exports.mousePos = function (e, t) {
                var o = e.getBoundingClientRect();
                return t = t.touches ? t.touches[0] : t, new Point(t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop)
            }, exports.touchPos = function (e, t) {
                for (var o = e.getBoundingClientRect(), n = [], r = "touchend" === t.type ? t.changedTouches : t.touches, s = 0; s < r.length; s++) n.push(new Point(r[s].clientX - o.left - e.clientLeft, r[s].clientY - o.top - e.clientTop));
                return n
            }, exports.remove = function (e) {
                e.parentNode && e.parentNode.removeChild(e)
            };
        }, {"./window": 196, "point-geometry": 25}],
        202: [function (_dereq_, module, exports) {
            "use strict";

            function _addEventListener(e, t, n) {
                n[e] = n[e] || [], n[e].push(t)
            }

            function _removeEventListener(e, t, n) {
                if (n && n[e]) {
                    var i = n[e].indexOf(t);
                    i !== -1 && n[e].splice(i, 1)
                }
            }

            var util = _dereq_("./util"), Evented = function () {
            };
            Evented.prototype.on = function (e, t) {
                return this._listeners = this._listeners || {}, _addEventListener(e, t, this._listeners), this
            }, Evented.prototype.off = function (e, t) {
                return _removeEventListener(e, t, this._listeners), _removeEventListener(e, t, this._oneTimeListeners), this
            }, Evented.prototype.once = function (e, t) {
                return this._oneTimeListeners = this._oneTimeListeners || {}, _addEventListener(e, t, this._oneTimeListeners), this
            }, Evented.prototype.fire = function (e, t) {
                var n = this;
                if (this.listens(e)) {
                    t = util.extend({}, t, {type: e, target: this});
                    for (var i = this._listeners && this._listeners[e] ? this._listeners[e].slice() : [], s = 0; s < i.length; s++) i[s].call(n, t);
                    for (var r = this._oneTimeListeners && this._oneTimeListeners[e] ? this._oneTimeListeners[e].slice() : [], o = 0; o < r.length; o++) r[o].call(n, t), _removeEventListener(e, r[o], n._oneTimeListeners);
                    this._eventedParent && this._eventedParent.fire(e, util.extend({}, t, "function" == typeof this._eventedParentData ? this._eventedParentData() : this._eventedParentData))
                } else util.endsWith(e, "error") && console.error(t && t.error || t || "Empty error event");
                return this
            }, Evented.prototype.listens = function (e) {
                return this._listeners && this._listeners[e] && this._listeners[e].length > 0 || this._oneTimeListeners && this._oneTimeListeners[e] && this._oneTimeListeners[e].length > 0 || this._eventedParent && this._eventedParent.listens(e)
            }, Evented.prototype.setEventedParent = function (e, t) {
                return this._eventedParent = e, this._eventedParentData = t, this
            }, module.exports = Evented;
        }, {"./util": 215}],
        203: [function (_dereq_, module, exports) {
            "use strict";

            function compareMax(e, t) {
                return t.max - e.max
            }

            function Cell(e, t, n, r) {
                this.p = new Point(e, t), this.h = n, this.d = pointToPolygonDist(this.p, r), this.max = this.d + this.h * Math.SQRT2
            }

            function pointToPolygonDist(e, t) {
                for (var n = !1, r = 1 / 0, o = 0; o < t.length; o++) for (var i = t[o], l = 0, u = i.length, s = u - 1; l < u; s = l++) {
                    var a = i[l], h = i[s];
                    a.y > e.y != h.y > e.y && e.x < (h.x - a.x) * (e.y - a.y) / (h.y - a.y) + a.x && (n = !n), r = Math.min(r, distToSegmentSquared(e, a, h))
                }
                return (n ? 1 : -1) * Math.sqrt(r)
            }

            function getCentroidCell(e) {
                for (var t = 0, n = 0, r = 0, o = e[0], i = 0, l = o.length, u = l - 1; i < l; u = i++) {
                    var s = o[i], a = o[u], h = s.x * a.y - a.x * s.y;
                    n += (s.x + a.x) * h, r += (s.y + a.y) * h, t += 3 * h
                }
                return new Cell(n / t, r / t, 0, e)
            }

            var Queue = _dereq_("tinyqueue"), Point = _dereq_("point-geometry"),
                distToSegmentSquared = _dereq_("./intersection_tests").distToSegmentSquared;
            module.exports = function (e, t, n) {
                t = t || 1;
                for (var r, o, i, l, u = e[0], s = 0; s < u.length; s++) {
                    var a = u[s];
                    (!s || a.x < r) && (r = a.x), (!s || a.y < o) && (o = a.y), (!s || a.x > i) && (i = a.x), (!s || a.y > l) && (l = a.y)
                }
                var h = i - r, p = l - o, y = Math.min(h, p), x = y / 2, d = new Queue(null, compareMax);
                if (0 === y) return [r, o];
                for (var g = r; g < i; g += y) for (var f = o; f < l; f += y) d.push(new Cell(g + x, f + x, x, e));
                for (var m = getCentroidCell(e), c = d.length; d.length;) {
                    var v = d.pop();
                    (v.d > m.d || !m.d) && (m = v, n && console.log("found best %d after %d probes", Math.round(1e4 * v.d) / 1e4, c)), v.max - m.d <= t || (x = v.h / 2, d.push(new Cell(v.p.x - x, v.p.y - x, x, e)), d.push(new Cell(v.p.x + x, v.p.y - x, x, e)), d.push(new Cell(v.p.x - x, v.p.y + x, x, e)), d.push(new Cell(v.p.x + x, v.p.y + x, x, e)), c += 4)
                }
                return n && (console.log("num probes: " + c), console.log("best distance: " + m.d)), m.p
            };
        }, {"./intersection_tests": 206, "point-geometry": 25, "tinyqueue": 29}],
        204: [function (_dereq_, module, exports) {
            "use strict";
            var WorkerPool = _dereq_("./worker_pool"), globalWorkerPool;
            module.exports = function () {
                return globalWorkerPool || (globalWorkerPool = new WorkerPool), globalWorkerPool
            };
        }, {"./worker_pool": 218}],
        205: [function (_dereq_, module, exports) {
            "use strict";

            function Glyphs(a, e) {
                this.stacks = a.readFields(readFontstacks, [], e)
            }

            function readFontstacks(a, e, r) {
                if (1 === a) {
                    var t = r.readMessage(readFontstack, {glyphs: {}});
                    e.push(t)
                }
            }

            function readFontstack(a, e, r) {
                if (1 === a) e.name = r.readString(); else if (2 === a) e.range = r.readString(); else if (3 === a) {
                    var t = r.readMessage(readGlyph, {});
                    e.glyphs[t.id] = t
                }
            }

            function readGlyph(a, e, r) {
                1 === a ? e.id = r.readVarint() : 2 === a ? e.bitmap = r.readBytes() : 3 === a ? e.width = r.readVarint() : 4 === a ? e.height = r.readVarint() : 5 === a ? e.left = r.readSVarint() : 6 === a ? e.top = r.readSVarint() : 7 === a && (e.advance = r.readVarint())
            }

            module.exports = Glyphs;
        }, {}],
        206: [function (_dereq_, module, exports) {
            "use strict";

            function polygonIntersectsPolygon(n, t) {
                for (var e = 0; e < n.length; e++) if (polygonContainsPoint(t, n[e])) return !0;
                for (var r = 0; r < t.length; r++) if (polygonContainsPoint(n, t[r])) return !0;
                return !!lineIntersectsLine(n, t)
            }

            function multiPolygonIntersectsBufferedMultiPoint(n, t, e) {
                for (var r = 0; r < n.length; r++) for (var o = n[r], i = 0; i < t.length; i++) for (var l = t[i], u = 0; u < l.length; u++) {
                    var s = l[u];
                    if (polygonContainsPoint(o, s)) return !0;
                    if (pointIntersectsBufferedLine(s, o, e)) return !0
                }
                return !1
            }

            function multiPolygonIntersectsMultiPolygon(n, t) {
                if (1 === n.length && 1 === n[0].length) return multiPolygonContainsPoint(t, n[0][0]);
                for (var e = 0; e < t.length; e++) for (var r = t[e], o = 0; o < r.length; o++) if (multiPolygonContainsPoint(n, r[o])) return !0;
                for (var i = 0; i < n.length; i++) {
                    for (var l = n[i], u = 0; u < l.length; u++) if (multiPolygonContainsPoint(t, l[u])) return !0;
                    for (var s = 0; s < t.length; s++) if (lineIntersectsLine(l, t[s])) return !0
                }
                return !1
            }

            function multiPolygonIntersectsBufferedMultiLine(n, t, e) {
                for (var r = 0; r < t.length; r++) for (var o = t[r], i = 0; i < n.length; i++) {
                    var l = n[i];
                    if (l.length >= 3) for (var u = 0; u < o.length; u++) if (polygonContainsPoint(l, o[u])) return !0;
                    if (lineIntersectsBufferedLine(l, o, e)) return !0
                }
                return !1
            }

            function lineIntersectsBufferedLine(n, t, e) {
                if (n.length > 1) {
                    if (lineIntersectsLine(n, t)) return !0;
                    for (var r = 0; r < t.length; r++) if (pointIntersectsBufferedLine(t[r], n, e)) return !0
                }
                for (var o = 0; o < n.length; o++) if (pointIntersectsBufferedLine(n[o], t, e)) return !0;
                return !1
            }

            function lineIntersectsLine(n, t) {
                if (0 === n.length || 0 === t.length) return !1;
                for (var e = 0; e < n.length - 1; e++) for (var r = n[e], o = n[e + 1], i = 0; i < t.length - 1; i++) {
                    var l = t[i], u = t[i + 1];
                    if (lineSegmentIntersectsLineSegment(r, o, l, u)) return !0
                }
                return !1
            }

            function lineSegmentIntersectsLineSegment(n, t, e, r) {
                return isCounterClockwise(n, e, r) !== isCounterClockwise(t, e, r) && isCounterClockwise(n, t, e) !== isCounterClockwise(n, t, r)
            }

            function pointIntersectsBufferedLine(n, t, e) {
                var r = e * e;
                if (1 === t.length) return n.distSqr(t[0]) < r;
                for (var o = 1; o < t.length; o++) {
                    var i = t[o - 1], l = t[o];
                    if (distToSegmentSquared(n, i, l) < r) return !0
                }
                return !1
            }

            function distToSegmentSquared(n, t, e) {
                var r = t.distSqr(e);
                if (0 === r) return n.distSqr(t);
                var o = ((n.x - t.x) * (e.x - t.x) + (n.y - t.y) * (e.y - t.y)) / r;
                return o < 0 ? n.distSqr(t) : o > 1 ? n.distSqr(e) : n.distSqr(e.sub(t)._mult(o)._add(t))
            }

            function multiPolygonContainsPoint(n, t) {
                for (var e, r, o, i = !1, l = 0; l < n.length; l++) {
                    e = n[l];
                    for (var u = 0, s = e.length - 1; u < e.length; s = u++) r = e[u], o = e[s], r.y > t.y != o.y > t.y && t.x < (o.x - r.x) * (t.y - r.y) / (o.y - r.y) + r.x && (i = !i)
                }
                return i
            }

            function polygonContainsPoint(n, t) {
                for (var e = !1, r = 0, o = n.length - 1; r < n.length; o = r++) {
                    var i = n[r], l = n[o];
                    i.y > t.y != l.y > t.y && t.x < (l.x - i.x) * (t.y - i.y) / (l.y - i.y) + i.x && (e = !e)
                }
                return e
            }

            var isCounterClockwise = _dereq_("./util").isCounterClockwise;
            module.exports = {
                multiPolygonIntersectsBufferedMultiPoint: multiPolygonIntersectsBufferedMultiPoint,
                multiPolygonIntersectsMultiPolygon: multiPolygonIntersectsMultiPolygon,
                multiPolygonIntersectsBufferedMultiLine: multiPolygonIntersectsBufferedMultiLine,
                polygonIntersectsPolygon: polygonIntersectsPolygon,
                distToSegmentSquared: distToSegmentSquared
            };
        }, {"./util": 215}],
        207: [function (_dereq_, module, exports) {
            "use strict";
            var unicodeBlockLookup = {
                "Latin-1 Supplement": function (n) {
                    return n >= 128 && n <= 255
                }, Arabic: function (n) {
                    return n >= 1536 && n <= 1791
                }, "Arabic Supplement": function (n) {
                    return n >= 1872 && n <= 1919
                }, "Arabic Extended-A": function (n) {
                    return n >= 2208 && n <= 2303
                }, "Hangul Jamo": function (n) {
                    return n >= 4352 && n <= 4607
                }, "Unified Canadian Aboriginal Syllabics": function (n) {
                    return n >= 5120 && n <= 5759
                }, "Unified Canadian Aboriginal Syllabics Extended": function (n) {
                    return n >= 6320 && n <= 6399
                }, "General Punctuation": function (n) {
                    return n >= 8192 && n <= 8303
                }, "Letterlike Symbols": function (n) {
                    return n >= 8448 && n <= 8527
                }, "Number Forms": function (n) {
                    return n >= 8528 && n <= 8591
                }, "Miscellaneous Technical": function (n) {
                    return n >= 8960 && n <= 9215
                }, "Control Pictures": function (n) {
                    return n >= 9216 && n <= 9279
                }, "Optical Character Recognition": function (n) {
                    return n >= 9280 && n <= 9311
                }, "Enclosed Alphanumerics": function (n) {
                    return n >= 9312 && n <= 9471
                }, "Geometric Shapes": function (n) {
                    return n >= 9632 && n <= 9727
                }, "Miscellaneous Symbols": function (n) {
                    return n >= 9728 && n <= 9983
                }, "Miscellaneous Symbols and Arrows": function (n) {
                    return n >= 11008 && n <= 11263
                }, "CJK Radicals Supplement": function (n) {
                    return n >= 11904 && n <= 12031
                }, "Kangxi Radicals": function (n) {
                    return n >= 12032 && n <= 12255
                }, "Ideographic Description Characters": function (n) {
                    return n >= 12272 && n <= 12287
                }, "CJK Symbols and Punctuation": function (n) {
                    return n >= 12288 && n <= 12351
                }, Hiragana: function (n) {
                    return n >= 12352 && n <= 12447
                }, Katakana: function (n) {
                    return n >= 12448 && n <= 12543
                }, Bopomofo: function (n) {
                    return n >= 12544 && n <= 12591
                }, "Hangul Compatibility Jamo": function (n) {
                    return n >= 12592 && n <= 12687
                }, Kanbun: function (n) {
                    return n >= 12688 && n <= 12703
                }, "Bopomofo Extended": function (n) {
                    return n >= 12704 && n <= 12735
                }, "CJK Strokes": function (n) {
                    return n >= 12736 && n <= 12783
                }, "Katakana Phonetic Extensions": function (n) {
                    return n >= 12784 && n <= 12799
                }, "Enclosed CJK Letters and Months": function (n) {
                    return n >= 12800 && n <= 13055
                }, "CJK Compatibility": function (n) {
                    return n >= 13056 && n <= 13311
                }, "CJK Unified Ideographs Extension A": function (n) {
                    return n >= 13312 && n <= 19903
                }, "Yijing Hexagram Symbols": function (n) {
                    return n >= 19904 && n <= 19967
                }, "CJK Unified Ideographs": function (n) {
                    return n >= 19968 && n <= 40959
                }, "Yi Syllables": function (n) {
                    return n >= 40960 && n <= 42127
                }, "Yi Radicals": function (n) {
                    return n >= 42128 && n <= 42191
                }, "Hangul Jamo Extended-A": function (n) {
                    return n >= 43360 && n <= 43391
                }, "Hangul Syllables": function (n) {
                    return n >= 44032 && n <= 55215
                }, "Hangul Jamo Extended-B": function (n) {
                    return n >= 55216 && n <= 55295
                }, "Private Use Area": function (n) {
                    return n >= 57344 && n <= 63743
                }, "CJK Compatibility Ideographs": function (n) {
                    return n >= 63744 && n <= 64255
                }, "Arabic Presentation Forms-A": function (n) {
                    return n >= 64336 && n <= 65023
                }, "Vertical Forms": function (n) {
                    return n >= 65040 && n <= 65055
                }, "CJK Compatibility Forms": function (n) {
                    return n >= 65072 && n <= 65103
                }, "Small Form Variants": function (n) {
                    return n >= 65104 && n <= 65135
                }, "Arabic Presentation Forms-B": function (n) {
                    return n >= 65136 && n <= 65279
                }, "Halfwidth and Fullwidth Forms": function (n) {
                    return n >= 65280 && n <= 65519
                }
            };
            module.exports = unicodeBlockLookup;
        }, {}],
        208: [function (_dereq_, module, exports) {
            "use strict";
            var LRUCache = function (t, e) {
                this.max = t, this.onRemove = e, this.reset()
            };
            LRUCache.prototype.reset = function () {
                var t = this;
                for (var e in t.data) t.onRemove(t.data[e]);
                return this.data = {}, this.order = [], this
            }, LRUCache.prototype.add = function (t, e) {
                if (this.has(t)) this.order.splice(this.order.indexOf(t), 1), this.data[t] = e, this.order.push(t); else if (this.data[t] = e, this.order.push(t), this.order.length > this.max) {
                    var r = this.get(this.order[0]);
                    r && this.onRemove(r)
                }
                return this
            }, LRUCache.prototype.has = function (t) {
                return t in this.data
            }, LRUCache.prototype.keys = function () {
                return this.order
            }, LRUCache.prototype.get = function (t) {
                if (!this.has(t)) return null;
                var e = this.data[t];
                return delete this.data[t], this.order.splice(this.order.indexOf(t), 1), e
            }, LRUCache.prototype.getWithoutRemoving = function (t) {
                if (!this.has(t)) return null;
                var e = this.data[t];
                return e
            }, LRUCache.prototype.remove = function (t) {
                if (!this.has(t)) return this;
                var e = this.data[t];
                return delete this.data[t], this.onRemove(e), this.order.splice(this.order.indexOf(t), 1), this
            }, LRUCache.prototype.setMaxSize = function (t) {
                var e = this;
                for (this.max = t; this.order.length > this.max;) {
                    var r = e.get(e.order[0]);
                    r && e.onRemove(r)
                }
                return this
            }, module.exports = LRUCache;
        }, {}],
        209: [function (_dereq_, module, exports) {
            "use strict";

            function makeAPIURL(r, e) {
                var t = parseUrl(config.API_URL);
                if (r.protocol = t.protocol, r.authority = t.authority, !config.REQUIRE_ACCESS_TOKEN) return formatUrl(r);
                if (e = e || config.ACCESS_TOKEN, !e) throw new Error("An API access token is required to use Mapbox GL. " + help);
                if ("s" === e[0]) throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). " + help);
                return r.params.push("access_token=" + e), formatUrl(r)
            }

            function isMapboxURL(r) {
                return 0 === r.indexOf("mapbox:")
            }

            function replaceTempAccessToken(r) {
                for (var e = 0; e < r.length; e++) 0 === r[e].indexOf("access_token=tk.") && (r[e] = "access_token=" + (config.ACCESS_TOKEN || ""))
            }

            function parseUrl(r) {
                var e = r.match(urlRe);
                if (!e) throw new Error("Unable to parse URL object");
                return {protocol: e[1], authority: e[2], path: e[3] || "/", params: e[4] ? e[4].split("&") : []}
            }

            function formatUrl(r) {
                var e = r.params.length ? "?" + r.params.join("&") : "";
                return r.protocol + "://" + r.authority + r.path + e
            }

            var config = _dereq_("./config"), browser = _dereq_("./browser"),
                help = "See https://www.mapbox.com/api-documentation/#access-tokens";
            exports.isMapboxURL = isMapboxURL, exports.normalizeStyleURL = function (r, e) {
                if (!isMapboxURL(r)) return r;
                var t = parseUrl(r);
                return t.path = "/styles/v1" + t.path, makeAPIURL(t, e)
            }, exports.normalizeGlyphsURL = function (r, e) {
                if (!isMapboxURL(r)) return r;
                var t = parseUrl(r);
                return t.path = "/fonts/v1" + t.path, makeAPIURL(t, e)
            }, exports.normalizeSourceURL = function (r, e) {
                if (!isMapboxURL(r)) return r;
                var t = parseUrl(r);
                return t.path = "/v4/" + t.authority + ".json", t.params.push("secure"), makeAPIURL(t, e)
            }, exports.normalizeSpriteURL = function (r, e, t, o) {
                var a = parseUrl(r);
                return isMapboxURL(r) ? (a.path = "/styles/v1" + a.path + "/sprite" + e + t, makeAPIURL(a, o)) : (a.path += "" + e + t, formatUrl(a))
            };
            var imageExtensionRe = /(\.(png|jpg)\d*)(?=$)/;
            exports.normalizeTileURL = function (r, e, t) {
                if (!e || !isMapboxURL(e)) return r;
                var o = parseUrl(r), a = browser.devicePixelRatio >= 2 || 512 === t ? "@2x" : "",
                    s = browser.supportsWebp ? ".webp" : "$1";
                return o.path = o.path.replace(imageExtensionRe, "" + a + s), replaceTempAccessToken(o.params), formatUrl(o)
            };
            var urlRe = /^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/;
        }, {"./browser": 194, "./config": 198}],
        210: [function (_dereq_, module, exports) {
            "use strict";
            var isChar = _dereq_("./is_char_in_unicode_block");
            module.exports.allowsIdeographicBreaking = function (a) {
                for (var i = 0, r = a; i < r.length; i += 1) {
                    var s = r[i];
                    if (!exports.charAllowsIdeographicBreaking(s.charCodeAt(0))) return !1
                }
                return !0
            }, module.exports.allowsVerticalWritingMode = function (a) {
                for (var i = 0, r = a; i < r.length; i += 1) {
                    var s = r[i];
                    if (exports.charHasUprightVerticalOrientation(s.charCodeAt(0))) return !0
                }
                return !1
            }, module.exports.allowsLetterSpacing = function (a) {
                for (var i = 0, r = a; i < r.length; i += 1) {
                    var s = r[i];
                    if (!exports.charAllowsLetterSpacing(s.charCodeAt(0))) return !1
                }
                return !0
            }, module.exports.charAllowsLetterSpacing = function (a) {
                return !isChar.Arabic(a) && (!isChar["Arabic Supplement"](a) && (!isChar["Arabic Extended-A"](a) && (!isChar["Arabic Presentation Forms-A"](a) && !isChar["Arabic Presentation Forms-B"](a))))
            }, module.exports.charAllowsIdeographicBreaking = function (a) {
                return !(a < 11904) && (!!isChar["Bopomofo Extended"](a) || (!!isChar.Bopomofo(a) || (!!isChar["CJK Compatibility Forms"](a) || (!!isChar["CJK Compatibility Ideographs"](a) || (!!isChar["CJK Compatibility"](a) || (!!isChar["CJK Radicals Supplement"](a) || (!!isChar["CJK Strokes"](a) || (!!isChar["CJK Symbols and Punctuation"](a) || (!!isChar["CJK Unified Ideographs Extension A"](a) || (!!isChar["CJK Unified Ideographs"](a) || (!!isChar["Enclosed CJK Letters and Months"](a) || (!!isChar["Halfwidth and Fullwidth Forms"](a) || (!!isChar.Hiragana(a) || (!!isChar["Ideographic Description Characters"](a) || (!!isChar["Kangxi Radicals"](a) || (!!isChar["Katakana Phonetic Extensions"](a) || (!!isChar.Katakana(a) || (!!isChar["Vertical Forms"](a) || (!!isChar["Yi Radicals"](a) || !!isChar["Yi Syllables"](a))))))))))))))))))))
            }, exports.charHasUprightVerticalOrientation = function (a) {
                return 746 === a || 747 === a || !(a < 4352) && (!!isChar["Bopomofo Extended"](a) || (!!isChar.Bopomofo(a) || (!(!isChar["CJK Compatibility Forms"](a) || a >= 65097 && a <= 65103) || (!!isChar["CJK Compatibility Ideographs"](a) || (!!isChar["CJK Compatibility"](a) || (!!isChar["CJK Radicals Supplement"](a) || (!!isChar["CJK Strokes"](a) || (!(!isChar["CJK Symbols and Punctuation"](a) || a >= 12296 && a <= 12305 || a >= 12308 && a <= 12319 || 12336 === a) || (!!isChar["CJK Unified Ideographs Extension A"](a) || (!!isChar["CJK Unified Ideographs"](a) || (!!isChar["Enclosed CJK Letters and Months"](a) || (!!isChar["Hangul Compatibility Jamo"](a) || (!!isChar["Hangul Jamo Extended-A"](a) || (!!isChar["Hangul Jamo Extended-B"](a) || (!!isChar["Hangul Jamo"](a) || (!!isChar["Hangul Syllables"](a) || (!!isChar.Hiragana(a) || (!!isChar["Ideographic Description Characters"](a) || (!!isChar.Kanbun(a) || (!!isChar["Kangxi Radicals"](a) || (!!isChar["Katakana Phonetic Extensions"](a) || (!(!isChar.Katakana(a) || 12540 === a) || (!(!isChar["Halfwidth and Fullwidth Forms"](a) || 65288 === a || 65289 === a || 65293 === a || a >= 65306 && a <= 65310 || 65339 === a || 65341 === a || 65343 === a || a >= 65371 && a <= 65503 || 65507 === a || a >= 65512 && a <= 65519) || (!(!isChar["Small Form Variants"](a) || a >= 65112 && a <= 65118 || a >= 65123 && a <= 65126) || (!!isChar["Unified Canadian Aboriginal Syllabics"](a) || (!!isChar["Unified Canadian Aboriginal Syllabics Extended"](a) || (!!isChar["Vertical Forms"](a) || (!!isChar["Yijing Hexagram Symbols"](a) || (!!isChar["Yi Syllables"](a) || !!isChar["Yi Radicals"](a))))))))))))))))))))))))))))))
            }, exports.charHasNeutralVerticalOrientation = function (a) {
                return !(!isChar["Latin-1 Supplement"](a) || 167 !== a && 169 !== a && 174 !== a && 177 !== a && 188 !== a && 189 !== a && 190 !== a && 215 !== a && 247 !== a) || (!(!isChar["General Punctuation"](a) || 8214 !== a && 8224 !== a && 8225 !== a && 8240 !== a && 8241 !== a && 8251 !== a && 8252 !== a && 8258 !== a && 8263 !== a && 8264 !== a && 8265 !== a && 8273 !== a) || (!!isChar["Letterlike Symbols"](a) || (!!isChar["Number Forms"](a) || (!(!isChar["Miscellaneous Technical"](a) || !(a >= 8960 && a <= 8967 || a >= 8972 && a <= 8991 || a >= 8996 && a <= 9e3 || 9003 === a || a >= 9085 && a <= 9114 || a >= 9150 && a <= 9165 || 9167 === a || a >= 9169 && a <= 9179 || a >= 9186 && a <= 9215)) || (!(!isChar["Control Pictures"](a) || 9251 === a) || (!!isChar["Optical Character Recognition"](a) || (!!isChar["Enclosed Alphanumerics"](a) || (!!isChar["Geometric Shapes"](a) || (!(!isChar["Miscellaneous Symbols"](a) || a >= 9754 && a <= 9759) || (!(!isChar["Miscellaneous Symbols and Arrows"](a) || !(a >= 11026 && a <= 11055 || a >= 11088 && a <= 11097 || a >= 11192 && a <= 11243)) || (!!isChar["CJK Symbols and Punctuation"](a) || (!!isChar.Katakana(a) || (!!isChar["Private Use Area"](a) || (!!isChar["CJK Compatibility Forms"](a) || (!!isChar["Small Form Variants"](a) || (!!isChar["Halfwidth and Fullwidth Forms"](a) || (8734 === a || 8756 === a || 8757 === a || a >= 9984 && a <= 10087 || a >= 10102 && a <= 10131 || 65532 === a || 65533 === a)))))))))))))))))
            }, exports.charHasRotatedVerticalOrientation = function (a) {
                return !(exports.charHasUprightVerticalOrientation(a) || exports.charHasNeutralVerticalOrientation(a))
            };
        }, {"./is_char_in_unicode_block": 207}],
        211: [function (_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("../geo/lng_lat");
            module.exports = function (n, t, l) {
                if (n = new LngLat(n.lng, n.lat), t) {
                    var a = new LngLat(n.lng - 360, n.lat), i = new LngLat(n.lng + 360, n.lat),
                        o = l.locationPoint(n).distSqr(t);
                    l.locationPoint(a).distSqr(t) < o ? n = a : l.locationPoint(i).distSqr(t) < o && (n = i)
                }
                for (; Math.abs(n.lng - l.center.lng) > 180;) {
                    var e = l.locationPoint(n);
                    if (e.x >= 0 && e.y >= 0 && e.x <= l.width && e.y <= l.height) break;
                    n.lng > l.center.lng ? n.lng -= 360 : n.lng += 360
                }
                return n
            };
        }, {"../geo/lng_lat": 61}],
        212: [function (_dereq_, module, exports) {
            "use strict";

            function createStructArrayType(t) {
                var e = JSON.stringify(t);
                if (structArrayTypeCache[e]) return structArrayTypeCache[e];
                var r = void 0 === t.alignment ? 1 : t.alignment, i = 0, n = 0, a = ["Uint8"],
                    o = t.members.map(function (t) {
                        a.indexOf(t.type) < 0 && a.push(t.type);
                        var e = sizeOf(t.type), o = i = align(i, Math.max(r, e)), s = t.components || 1;
                        return n = Math.max(n, e), i += e * s, {name: t.name, type: t.type, components: s, offset: o}
                    }), s = align(i, Math.max(n, r)), p = function (t) {
                        function e() {
                            t.apply(this, arguments)
                        }

                        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                    }(Struct);
                p.prototype.alignment = r, p.prototype.size = s;
                for (var y = 0, c = o; y < c.length; y += 1) for (var h = c[y], u = 0; u < h.components; u++) {
                    var f = h.name + (1 === h.components ? "" : u);
                    Object.defineProperty(p.prototype, f, {get: createGetter(h, u), set: createSetter(h, u)})
                }
                var m = function (t) {
                    function e() {
                        t.apply(this, arguments)
                    }

                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(StructArray);
                return m.prototype.members = o, m.prototype.StructType = p, m.prototype.bytesPerElement = s, m.prototype.emplaceBack = createEmplaceBack(o, s), m.prototype._usedTypes = a, structArrayTypeCache[e] = m, m
            }

            function align(t, e) {
                return Math.ceil(t / e) * e
            }

            function sizeOf(t) {
                return viewTypes[t].BYTES_PER_ELEMENT
            }

            function getArrayViewName(t) {
                return t.toLowerCase()
            }

            function createEmplaceBack(t, e) {
                for (var r = [], i = [], n = "var i = this.length;\nthis.resize(this.length + 1);\n", a = 0, o = t; a < o.length; a += 1) {
                    var s = o[a], p = sizeOf(s.type);
                    r.indexOf(p) < 0 && (r.push(p), n += "var o" + p.toFixed(0) + " = i * " + (e / p).toFixed(0) + ";\n");
                    for (var y = 0; y < s.components; y++) {
                        var c = "v" + i.length, h = "o" + p.toFixed(0) + " + " + (s.offset / p + y).toFixed(0);
                        n += "this." + getArrayViewName(s.type) + "[" + h + "] = " + c + ";\n", i.push(c)
                    }
                }
                return n += "return i;", new Function(i.toString(), n)
            }

            function createMemberComponentString(t, e) {
                var r = "this._pos" + sizeOf(t.type).toFixed(0), i = (t.offset / sizeOf(t.type) + e).toFixed(0),
                    n = r + " + " + i;
                return "this._structArray." + getArrayViewName(t.type) + "[" + n + "]"
            }

            function createGetter(t, e) {
                return new Function("return " + createMemberComponentString(t, e) + ";")
            }

            function createSetter(t, e) {
                return new Function("x", createMemberComponentString(t, e) + " = x;")
            }

            module.exports = createStructArrayType;
            var viewTypes = {
                Int8: Int8Array,
                Uint8: Uint8Array,
                Uint8Clamped: Uint8ClampedArray,
                Int16: Int16Array,
                Uint16: Uint16Array,
                Int32: Int32Array,
                Uint32: Uint32Array,
                Float32: Float32Array,
                Float64: Float64Array
            }, Struct = function (t, e) {
                this._structArray = t, this._pos1 = e * this.size, this._pos2 = this._pos1 / 2, this._pos4 = this._pos1 / 4, this._pos8 = this._pos1 / 8
            }, DEFAULT_CAPACITY = 128, RESIZE_MULTIPLIER = 5, StructArray = function (t) {
                this.isTransferred = !1, void 0 !== t ? (this.arrayBuffer = t.arrayBuffer, this.length = t.length, this.capacity = this.arrayBuffer.byteLength / this.bytesPerElement, this._refreshViews()) : (this.capacity = -1, this.resize(0))
            };
            StructArray.serialize = function () {
                return {
                    members: this.prototype.members,
                    alignment: this.prototype.StructType.prototype.alignment,
                    bytesPerElement: this.prototype.bytesPerElement
                }
            }, StructArray.prototype.serialize = function (t) {
                return this._trim(), t && (this.isTransferred = !0, t.push(this.arrayBuffer)), {
                    length: this.length,
                    arrayBuffer: this.arrayBuffer
                }
            }, StructArray.prototype.get = function (t) {
                return new this.StructType(this, t)
            }, StructArray.prototype._trim = function () {
                this.length !== this.capacity && (this.capacity = this.length, this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement), this._refreshViews())
            }, StructArray.prototype.resize = function (t) {
                if (this.length = t, t > this.capacity) {
                    this.capacity = Math.max(t, Math.floor(this.capacity * RESIZE_MULTIPLIER), DEFAULT_CAPACITY), this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);
                    var e = this.uint8;
                    this._refreshViews(), e && this.uint8.set(e)
                }
            }, StructArray.prototype._refreshViews = function () {
                for (var t = this, e = 0, r = t._usedTypes; e < r.length; e += 1) {
                    var i = r[e];
                    t[getArrayViewName(i)] = new viewTypes[i](t.arrayBuffer)
                }
            }, StructArray.prototype.toArray = function (t, e) {
                for (var r = this, i = [], n = t; n < e; n++) {
                    var a = r.get(n);
                    i.push(a)
                }
                return i
            };
            var structArrayTypeCache = {};
        }, {}],
        213: [function (_dereq_, module, exports) {
            "use strict";
            var browser = _dereq_("./browser"), Throttler = function (t, o) {
                this.frequency = t, this.throttledFunction = o, this.lastInvocation = 0
            };
            Throttler.prototype.invoke = function () {
                var t = this;
                if (!this.pendingInvocation) {
                    var o = 0 === this.lastInvocation ? 0 : this.lastInvocation + this.frequency - browser.now();
                    o <= 0 ? (this.lastInvocation = browser.now(), this.throttledFunction()) : this.pendingInvocation = setTimeout(function () {
                        t.pendingInvocation = void 0, t.lastInvocation = browser.now(), t.throttledFunction()
                    }, o)
                }
            }, Throttler.prototype.stop = function () {
                this.pendingInvocation && (clearTimeout(this.pendingInvocation), this.pendingInvocation = void 0)
            }, module.exports = Throttler;
        }, {"./browser": 194}],
        214: [function (_dereq_, module, exports) {
            "use strict";

            function resolveTokens(e, n) {
                return n.replace(/{([^{}]+)}/g, function (n, r) {
                    return r in e ? e[r] : ""
                })
            }

            module.exports = resolveTokens;
        }, {}],
        215: [function (_dereq_, module, exports) {
            "use strict";
            var UnitBezier = _dereq_("@mapbox/unitbezier"), Coordinate = _dereq_("../geo/coordinate"),
                Point = _dereq_("point-geometry");
            exports.easeCubicInOut = function (r) {
                if (r <= 0) return 0;
                if (r >= 1) return 1;
                var e = r * r, t = e * r;
                return 4 * (r < .5 ? t : 3 * (r - e) + t - .75)
            }, exports.bezier = function (r, e, t, n) {
                var o = new UnitBezier(r, e, t, n);
                return function (r) {
                    return o.solve(r)
                }
            }, exports.ease = exports.bezier(.25, .1, .25, 1), exports.clamp = function (r, e, t) {
                return Math.min(t, Math.max(e, r))
            }, exports.wrap = function (r, e, t) {
                var n = t - e, o = ((r - e) % n + n) % n + e;
                return o === e ? t : o
            }, exports.asyncAll = function (r, e, t) {
                if (!r.length) return t(null, []);
                var n = r.length, o = new Array(r.length), a = null;
                r.forEach(function (r, i) {
                    e(r, function (r, e) {
                        r && (a = r), o[i] = e, 0 === --n && t(a, o)
                    })
                })
            }, exports.values = function (r) {
                var e = [];
                for (var t in r) e.push(r[t]);
                return e
            }, exports.keysDifference = function (r, e) {
                var t = [];
                for (var n in r) n in e || t.push(n);
                return t
            }, exports.extend = function (r) {
                for (var e = [], t = arguments.length - 1; t-- > 0;) e[t] = arguments[t + 1];
                for (var n = 0, o = e; n < o.length; n += 1) {
                    var a = o[n];
                    for (var i in a) r[i] = a[i]
                }
                return r
            }, exports.pick = function (r, e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var o = e[n];
                    o in r && (t[o] = r[o])
                }
                return t
            };
            var id = 1;
            exports.uniqueId = function () {
                return id++
            }, exports.bindAll = function (r, e) {
                r.forEach(function (r) {
                    e[r] && (e[r] = e[r].bind(e))
                })
            }, exports.getCoordinatesCenter = function (r) {
                for (var e = 1 / 0, t = 1 / 0, n = -(1 / 0), o = -(1 / 0), a = 0; a < r.length; a++) e = Math.min(e, r[a].column), t = Math.min(t, r[a].row), n = Math.max(n, r[a].column), o = Math.max(o, r[a].row);
                var i = n - e, u = o - t, s = Math.max(i, u), c = Math.max(0, Math.floor(-Math.log(s) / Math.LN2));
                return new Coordinate((e + n) / 2, (t + o) / 2, 0).zoomTo(c)
            }, exports.endsWith = function (r, e) {
                return r.indexOf(e, r.length - e.length) !== -1
            }, exports.mapObject = function (r, e, t) {
                var n = this, o = {};
                for (var a in r) o[a] = e.call(t || n, r[a], a, r);
                return o
            }, exports.filterObject = function (r, e, t) {
                var n = this, o = {};
                for (var a in r) e.call(t || n, r[a], a, r) && (o[a] = r[a]);
                return o
            }, exports.deepEqual = function (r, e) {
                if (Array.isArray(r)) {
                    if (!Array.isArray(e) || r.length !== e.length) return !1;
                    for (var t = 0; t < r.length; t++) if (!exports.deepEqual(r[t], e[t])) return !1;
                    return !0
                }
                if ("object" == typeof r && null !== r && null !== e) {
                    if ("object" != typeof e) return !1;
                    var n = Object.keys(r);
                    if (n.length !== Object.keys(e).length) return !1;
                    for (var o in r) if (!exports.deepEqual(r[o], e[o])) return !1;
                    return !0
                }
                return r === e
            }, exports.clone = function (r) {
                return Array.isArray(r) ? r.map(exports.clone) : "object" == typeof r && r ? exports.mapObject(r, exports.clone) : r
            }, exports.arraysIntersect = function (r, e) {
                for (var t = 0; t < r.length; t++) if (e.indexOf(r[t]) >= 0) return !0;
                return !1
            };
            var warnOnceHistory = {};
            exports.warnOnce = function (r) {
                warnOnceHistory[r] || ("undefined" != typeof console && console.warn(r), warnOnceHistory[r] = !0)
            }, exports.isCounterClockwise = function (r, e, t) {
                return (t.y - r.y) * (e.x - r.x) > (e.y - r.y) * (t.x - r.x)
            }, exports.calculateSignedArea = function (r) {
                for (var e = 0, t = 0, n = r.length, o = n - 1, a = void 0, i = void 0; t < n; o = t++) a = r[t], i = r[o], e += (i.x - a.x) * (a.y + i.y);
                return e
            }, exports.isClosedPolygon = function (r) {
                if (r.length < 4) return !1;
                var e = r[0], t = r[r.length - 1];
                return !(Math.abs(e.x - t.x) > 0 || Math.abs(e.y - t.y) > 0) && Math.abs(exports.calculateSignedArea(r)) > .01
            }, exports.sphericalToCartesian = function (r) {
                var e = r[0], t = r[1], n = r[2];
                return t += 90, t *= Math.PI / 180, n *= Math.PI / 180, [e * Math.cos(t) * Math.sin(n), e * Math.sin(t) * Math.sin(n), e * Math.cos(n)]
            }, exports.parseCacheControl = function (r) {
                var e = /(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,
                    t = {};
                if (r.replace(e, function (r, e, n, o) {
                        var a = n || o;
                        return t[e] = !a || a.toLowerCase(), ""
                    }), t["max-age"]) {
                    var n = parseInt(t["max-age"], 10);
                    isNaN(n) ? delete t["max-age"] : t["max-age"] = n
                }
                return t
            };
        }, {"../geo/coordinate": 60, "@mapbox/unitbezier": 3, "point-geometry": 25}],
        216: [function (_dereq_, module, exports) {
            "use strict";
            var Feature = function (e, t, r, o) {
                this.type = "Feature", this._vectorTileFeature = e, e._z = t, e._x = r, e._y = o, this.properties = e.properties, null != e.id && (this.id = e.id)
            }, prototypeAccessors = {geometry: {}};
            prototypeAccessors.geometry.get = function () {
                return void 0 === this._geometry && (this._geometry = this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x, this._vectorTileFeature._y, this._vectorTileFeature._z).geometry), this._geometry
            }, prototypeAccessors.geometry.set = function (e) {
                this._geometry = e
            }, Feature.prototype.toJSON = function () {
                var e = this, t = {geometry: this.geometry};
                for (var r in e) "_geometry" !== r && "_vectorTileFeature" !== r && (t[r] = e[r]);
                return t
            }, Object.defineProperties(Feature.prototype, prototypeAccessors), module.exports = Feature;
        }, {}],
        217: [function (_dereq_, module, exports) {
            "use strict";
            var scriptDetection = _dereq_("./script_detection");
            module.exports = function (t) {
                for (var o = "", e = 0; e < t.length; e++) {
                    var r = t.charCodeAt(e + 1) || null, l = t.charCodeAt(e - 1) || null,
                        i = (!r || !scriptDetection.charHasRotatedVerticalOrientation(r) || module.exports.lookup[t[e + 1]]) && (!l || !scriptDetection.charHasRotatedVerticalOrientation(l) || module.exports.lookup[t[e - 1]]);
                    o += i && module.exports.lookup[t[e]] ? module.exports.lookup[t[e]] : t[e]
                }
                return o
            }, module.exports.lookup = {
                "!": "︕",
                "#": "＃",
                $: "＄",
                "%": "％",
                "&": "＆",
                "(": "︵",
                ")": "︶",
                "*": "＊",
                "+": "＋",
                ",": "︐",
                "-": "︲",
                ".": "・",
                "/": "／",
                ":": "︓",
                ";": "︔",
                "<": "︿",
                "=": "＝",
                ">": "﹀",
                "?": "︖",
                "@": "＠",
                "[": "﹇",
                "\\": "＼",
                "]": "﹈",
                "^": "＾",
                _: "︳",
                "`": "｀",
                "{": "︷",
                "|": "―",
                "}": "︸",
                "~": "～",
                "¢": "￠",
                "£": "￡",
                "¥": "￥",
                "¦": "￤",
                "¬": "￢",
                "¯": "￣",
                "–": "︲",
                "—": "︱",
                "‘": "﹃",
                "’": "﹄",
                "“": "﹁",
                "”": "﹂",
                "…": "︙",
                "‧": "・",
                "₩": "￦",
                "、": "︑",
                "。": "︒",
                "〈": "︿",
                "〉": "﹀",
                "《": "︽",
                "》": "︾",
                "「": "﹁",
                "」": "﹂",
                "『": "﹃",
                "』": "﹄",
                "【": "︻",
                "】": "︼",
                "〔": "︹",
                "〕": "︺",
                "〖": "︗",
                "〗": "︘",
                "！": "︕",
                "（": "︵",
                "）": "︶",
                "，": "︐",
                "－": "︲",
                "．": "・",
                "：": "︓",
                "；": "︔",
                "＜": "︿",
                "＞": "﹀",
                "？": "︖",
                "［": "﹇",
                "］": "﹈",
                "＿": "︳",
                "｛": "︷",
                "｜": "―",
                "｝": "︸",
                "｟": "︵",
                "｠": "︶",
                "｡": "︒",
                "｢": "﹁",
                "｣": "﹂"
            };
        }, {"./script_detection": 210}],
        218: [function (_dereq_, module, exports) {
            "use strict";
            var WebWorker = _dereq_("./web_worker"), WorkerPool = function () {
                this.active = {}
            };
            WorkerPool.prototype.acquire = function (r) {
                var e = this;
                if (!this.workers) {
                    var o = _dereq_("../").workerCount;
                    for (this.workers = []; this.workers.length < o;) e.workers.push(new WebWorker)
                }
                return this.active[r] = !0, this.workers.slice()
            }, WorkerPool.prototype.release = function (r) {
                delete this.active[r], 0 === Object.keys(this.active).length && (this.workers.forEach(function (r) {
                    r.terminate()
                }), this.workers = null)
            }, module.exports = WorkerPool;
        }, {"../": 64, "./web_worker": 195}]
    }, {}, [64])(64)
});


//# sourceMappingURL=mapbox-gl.js.map
