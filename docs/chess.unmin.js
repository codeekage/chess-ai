(function() {
    var aa = "pawn knight bishop rook queen king".split(" ");

    function ba(a, b) {
        return "abcdefgh" [b] + "12345678" [a]
    }

    function ca(a) {
        return "abcdefgh".indexOf(a[0]) + 8 * "12345678".indexOf(a[1])
    }

    function h(a) {
        return ba(a >>> 3, a & 7)
    };

    function ea(a, b) {
        this.a = a >>> 0;
        this.b = b >>> 0
    }

    function fa(a) {
        a >>>= 0;
        a -= a >>> 1 & 1431655765;
        a = (a & 858993459) + (a >>> 2 & 858993459);
        return 16843009 * (a + (a >>> 4) & 252645135) >>> 24
    }

    function ga(a) {
        a >>>= 0;
        return (a & a - 1) >>> 0
    }

    function ha(a) {
        a >>>= 0;
        return fa((a & -a) - 1)
    }

    function k(a) {
        return fa(a.a) + fa(a.b)
    }

    function ia(a) {
        return a.a ? ha(a.a) : 32 + ha(a.b)
    }

    function m(a) {
        var b = ia(a);
        a.a ? a.a = ga(a.a) : a.b = ga(a.b);
        return b
    }

    function q(a) {
        return !a.a && !a.b
    }

    function r(a, b) {
        b >>>= 0;
        return 32 > b ? !(a.a & 1 << b) : !(a.b & 1 << b - 32)
    }

    function t(a, b) {
        b >>>= 0;
        32 > b ? a.a = (a.a | 1 << b) >>> 0 : a.b = (a.b | 1 << b - 32) >>> 0;
        return a
    }

    function ja(a, b) {
        b >>>= 0;
        32 > b ? a.a = (a.a & ~(1 << b)) >>> 0 : a.b = (a.b & ~(1 << b - 32)) >>> 0
    }

    function w(a, b) {
        a.a = (a.a & b.a) >>> 0;
        a.b = (a.b & b.b) >>> 0;
        return a
    }

    function x(a, b) {
        a.a = (a.a & ~b.a) >>> 0;
        a.b = (a.b & ~b.b) >>> 0;
        return a
    }

    function y(a, b) {
        a.a = (a.a | b.a) >>> 0;
        a.b = (a.b | b.b) >>> 0;
        return a
    }

    function ka(a, b) {
        a.a = (a.a ^ b.a) >>> 0;
        a.b = (a.b ^ b.b) >>> 0
    }

    function la(a) {
        a.a = ~a.a >>> 0;
        a.b = ~a.b >>> 0;
        return a
    }

    function z(a, b) {
        b >>>= 0;
        31 < b ? (a.b = a.a << b - 32 >>> 0, a.a = 0) : 0 < b && (a.b = (a.b << b | a.a >>> 32 - b) >>> 0, a.a = a.a << b >>> 0);
        return a
    }

    function A(a, b) {
        b >>>= 0;
        31 < b ? (a.a = a.b >>> b - 32, a.b = 0) : 0 < b && (a.a = (a.a >>> b | a.b << 32 - b) >>> 0, a.b >>>= b);
        return a
    }

    function B(a, b) {
        63 < b || -63 > b ? a.a = a.b = 0 : 0 < b ? z(a, b) : 0 > b && A(a, -b);
        return a
    }

    function ma(a, b) {
        return a.a === b.a && a.b === b.b
    }

    function D(a) {
        return E(a.a, a.b)
    }

    function E(a, b) {
        return new ea(a, b)
    }

    function G(a) {
        return t(E(0, 0), a)
    }

    function na() {
        var a = oa;
        return B(w(E(270549120, 16909320), B(E(4294967295, 4294967295), 8 * a)), a)
    }

    function pa() {
        var a = qa;
        return B(w(E(134480385, 2151686160), B(E(4294967295, 4294967295), 8 * -a)), a)
    }

    function ra() {
        var a = t(E(0, 0), sa),
            b = x(A(D(a), 1), I[7]),
            d = x(x(A(D(a), 2), I[7]), I[6]),
            c = x(z(D(a), 1), I[0]),
            a = x(x(z(D(a), 2), I[0]), I[1]),
            d = y(d, a),
            b = y(b, c);
        return y(y(y(z(D(d), 8), A(d, 8)), z(D(b), 16)), A(b, 16))
    }

    function ta() {
        var a = t(E(0, 0), ua),
            b = y(x(A(D(a), 1), I[7]), x(z(D(a), 1), I[0])),
            d = A(y(D(a), b), 8),
            a = z(y(D(a), b), 8);
        return y(y(b, d), a)
    }
    for (var va = E(4294967295, 4294967295), wa = E(1437226410, 1437226410), xa = E(2857740885, 2857740885), ya = [], za = 0; 8 > za; ++za) ya.push(z(E(16843009, 16843009), za));
    for (var I = ya, J = [], Aa = 0; 8 > Aa; ++Aa) J.push(z(E(255, 0), 8 * Aa));
    for (var Ba = [], oa = -7; 8 > oa; ++oa) Ba.push(na());
    for (var Ca = [], qa = -7; 8 > qa; ++qa) Ca.push(pa());
    for (var Da = [], sa = 0; 64 > sa; ++sa) Da.push(ra());
    for (var Ea = [], ua = 0; 64 > ua; ++ua) Ea.push(ta());

    function Fa(a, b) {
        this.b = a >>> 0;
        this.a = b >>> 0
    }
    for (var Ga = [], Ha = 0; 1586 > Ha; ++Ha) Ga.push(1 + 4294967295 * Math.random() >>> 0);

    function K(a, b) {
        a.b = (a.b ^ Ga[b]) >>> 0;
        a.a = (a.a ^ Ga[b + 1]) >>> 0
    }

    function L(a, b) {
        0 <= b && K(a, 1570 + (b & 7))
    };

    function M(a, b, d, c, e) {
        this.value = b & 63 | (a & 63) << 6 | (d & 15) << 12 | (c & 7) << 16 | ((e | 0) & 7) << 19
    }

    function N(a) {
        return a.value >>> 6 & 63
    }

    function O(a) {
        return a.value >>> 12 & 15
    }

    function P(a) {
        return a.value >>> 16 & 7
    }

    function Ia(a) {
        return 2 === O(a) || 3 === O(a)
    }

    function Ja(a) {
        return 5 !== O(a) ? a.value & 63 : (a.value & 63) + (N(a) < (a.value & 63) ? -8 : 8)
    };

    function Ka() {
        this.b = new Fa(0, 0);
        this.a = [y(D(J[1]), J[6]), y(y(y(G(1), G(6)), G(57)), G(62)), y(y(y(G(2), G(5)), G(58)), G(61)), y(y(y(G(0), G(7)), G(56)), G(63)), y(G(3), G(59)), y(G(4), G(60)), y(D(J[0]), J[1]), y(D(J[6]), J[7])];
        this.h = [];
        this.c = 0;
        this.g = 15;
        this.f = -1;
        this.l = 0;
        this.i = [];
        this.j = [];
        for (var a = this.h.length = 0; 64 > a; ++a) {
            var b;
            a: {
                for (b = 0; 5 >= b; ++b)
                    if (!r(this.a[b], a)) break a;
                b = null
            }
            this.h.push(b)
        }
        this.b = new Fa(0, 0);
        this.c && K(this.b, 0);
        for (a = 0; 1 >= a; ++a)
            for (b = 0; 5 >= b; ++b)
                for (var d = this.b, c = b, e = a, f = Q(this, b, a),
                        f = D(f); !q(f);) {
                    var g = m(f);
                    K(d, 2 + c + 6 * e + 12 * g)
                }
        K(this.b, 1538 + this.g);
        L(this.b, this.f);
        this.m = []
    }
    var R = [7, 63, 0, 56],
        La = [la(z(E(16843009, 16843009), 7)), va, la(z(E(16843009, 16843009), 0))];

    function S(a, b, d) {
        d = Ma(a, !!d);
        return b ? d : d.filter(Ka.prototype.o, a)
    }

    function Q(a, b, d) {
        return w(D(a.a[b]), a.a[6 + d])
    }

    function Na(a) {
        return y(D(a.a[6]), a.a[7])
    }

    function T(a) {
        return Oa(a, a.c ^ 1, ia(Q(a, 5, a.c)))
    }

    function U(a, b, d, c) {
        var e = E(0, 0);
        d = 8 * d + c;
        c = La[1 + c];
        for (B(a, d); !q(w(a, c)); B(x(a, b), d)) y(e, a);
        return e
    }

    function Ra(a, b) {
        return y(y(y(U(D(a), b, 1, 1), U(D(a), b, 1, -1)), U(D(a), b, -1, 1)), U(D(a), b, -1, -1))
    }

    function Sa(a, b) {
        return y(y(y(U(D(a), b, 0, 1), U(D(a), b, 0, -1)), U(D(a), b, 1, 0)), U(D(a), b, -1, 0))
    }

    function Oa(a, b, d) {
        var c, e = Q(a, 0, b),
            f = 0 === b;
        c = B(x(D(e), I[0]), f ? 7 : -9);
        e = B(x(D(e), I[7]), f ? 9 : -7);
        c = y(c, e);
        if (!r(c, d)) return !0;
        c = Q(a, 1, b);
        if (!q(w(D(Da[d]), c))) return !0;
        c = Q(a, 5, b);
        if (!q(w(D(Ea[d]), c))) return !0;
        c = Na(a);
        e = Q(a, 4, b);
        f = y(D(Q(a, 2, b)), e);
        f = Ra(f, c);
        if (!r(f, d)) return !0;
        a = y(D(Q(a, 3, b)), e);
        a = Sa(a, c);
        return r(a, d) ? !1 : !0
    }

    function W(a, b, d) {
        K(a.b, 1538 + a.g);
        a.g &= ~(1 << b + (d ? 0 : 2));
        K(a.b, 1538 + a.g)
    }

    function Ta(a, b, d) {
        if (!(a.g & 1 << b + (d ? 0 : 2))) return !1;
        var c = d ? 1 : -1,
            e = 0 === b ? 4 : 60,
            f = Na(a);
        (c = !r(f, e + c) || !r(f, e + 2 * c) || !d && !r(f, e + 3 * c)) || (c = b ^ 1, d = d ? 1 : -1, b = 0 === b ? 4 : 60, c = !(!Oa(a, c, b) && !Oa(a, c, b + d) && !Oa(a, c, b + 2 * d)));
        return c ? !1 : !0
    }

    function Ua(a) {
        var b = a.b;
        return 3 <= a.m.reduce(function(a, c) {
            return a + (c.b === b.b && c.a === b.a ? 1 : 0)
        }, 0)
    }

    function Va(a) {
        if (!q(a.a[0]) || !q(a.a[3]) || !q(a.a[4])) return !1;
        if (4 > k(a.a[6]) + k(a.a[7])) return !0;
        if (!q(a.a[1])) return !1;
        a = a.a[2];
        return ma(w(D(a), wa), a) || ma(w(D(a), xa), a) ? !0 : !1
    }

    function Wa(a) {
        return 100 <= a.l || Ua(a) || Va(a)
    }

    function Ma(a, b) {
        function d(a, b, d) {
            for (; !q(a);) {
                var c = m(a);
                f.push(new M(c - b, c, d, 0, F.h[c]))
            }
        }

        function c(a, b, c) {
            d(D(a), b, c ? 15 : 11);
            d(D(a), b, c ? 14 : 10);
            d(D(a), b, c ? 13 : 9);
            d(D(a), b, c ? 12 : 8)
        }

        function e(a, b, c) {
            for (; !q(b);) {
                var d = m(b);
                r(gb, d) && f.push(new M(a, d, r(p, d) ? 0 : 4, c, F.h[d]))
            }
        }
        var f = [],
            g = a.c,
            p = a.a[6 + (g ^ 1)],
            l = Na(a),
            F = a,
            n = 1 - 2 * g,
            C = 8 * n,
            v = Q(a, 0, g),
            u = J[g ? 0 : 7];
        if (!b) {
            var H = x(x(B(w(D(v), J[g ? 6 : 1]), 2 * C), l), B(D(l), C));
            d(H, 2 * C, 1);
            H = x(B(D(v), C), l);
            d(x(D(H), u), C, 0);
            c(w(D(H), u), C, !1)
        }
        var Pa = I[g ? 7 : 0],
            H = C - n,
            V = w(B(x(D(v),
                Pa), H), p);
        d(x(D(V), u), H, 4);
        c(w(D(V), u), H, !0);
        var V = I[g ? 0 : 7],
            C = C + n,
            Qa = w(B(x(D(v), V), C), p);
        d(x(D(Qa), u), C, 4);
        c(w(D(Qa), u), C, !0);
        0 <= a.f && (u = B(x(w(G(a.f + n), v), Pa), H), d(u, H, 5), n = B(x(w(G(a.f - n), v), V), C), d(n, C, 5));
        for (var gb = a.a[6 + g], n = b ? p : va, v = D(Q(a, 1, g)); !q(v);) u = m(v), e(u, w(D(Da[u]), n), 1);
        for (v = D(Q(a, 4, g)); !q(v);) u = m(v), e(u, w(y(Ra(G(u), l), Sa(G(u), l)), n), 4);
        for (v = D(Q(a, 2, g)); !q(v);) u = m(v), e(u, w(Ra(G(u), l), n), 2);
        for (v = D(Q(a, 3, g)); !q(v);) u = m(v), e(u, w(Sa(G(u), l), n), 3);
        l = ia(Q(a, 5, g));
        e(l, w(D(Ea[l]), n), 5);
        b ||
            (Ta(a, g, !0) && f.push(new M(l, l + 2, 2, 5, null)), Ta(a, g, !1) && f.push(new M(l, l - 2, 3, 5, null)));
        return f
    }

    function Xa(a, b, d, c, e) {
        var f = y(G(c), G(e));
        ka(a.a[b], f);
        ka(a.a[6 + d], f);
        a.h[c] = null;
        a.h[e] = b;
        K(a.b, 2 + b + 6 * d + 12 * c);
        K(a.b, 2 + b + 6 * d + 12 * e)
    }

    function Ya(a, b, d, c, e) {
        ja(a.a[b], e);
        t(a.a[d], e);
        a.h[e] = d;
        K(a.b, 2 + b + 6 * c + 12 * e);
        K(a.b, 2 + d + 6 * c + 12 * e)
    }

    function Za(a, b) {
        if (O(b) & 4) {
            var d = b.value >>> 19 & 7,
                c = a.c ^ 1,
                e = Ja(b);
            ja(a.a[d], e);
            ja(a.a[6 + c], e);
            a.h[e] = null;
            K(a.b, 2 + d + 6 * c + 12 * e)
        }
        Ia(b) && (d = a.c, c = 2 === O(b), e = R[d + (c ? 0 : 2)], Xa(a, 3, d, e, e + (c ? -2 : 3)));
        Xa(a, P(b), a.c, N(b), b.value & 63);
        O(b) & 8 && Ya(a, 0, O(b) & 8 ? 1 + (O(b) & 3) : 0, a.c, b.value & 63)
    }

    function $a(a, b) {
        O(b) & 8 && Ya(a, O(b) & 8 ? 1 + (O(b) & 3) : 0, 0, a.c, b.value & 63);
        Xa(a, P(b), a.c, b.value & 63, N(b));
        if (Ia(b)) {
            var d = a.c,
                c = 2 === O(b),
                e = R[d + (c ? 0 : 2)];
            Xa(a, 3, d, e + (c ? -2 : 3), e)
        }
        O(b) & 4 && (d = b.value >>> 19 & 7, c = a.c ^ 1, e = Ja(b), t(a.a[d], e), t(a.a[6 + c], e), a.h[e] = d, K(a.b, 2 + d + 6 * c + 12 * e))
    }
    Ka.prototype.o = function(a) {
        Za(this, a);
        var b = T(this);
        $a(this, a);
        return !b
    };

    function X(a, b) {
        var d = a.b;
        a.m.push(new Fa(d.b, d.a));
        Za(a, b);
        if (T(a)) return $a(a, b), a.m.pop(), !1;
        a.i.push(b);
        a.j.push(a.f);
        a.j.push(a.g);
        a.j.push(a.l);
        L(a.b, a.f);
        a.f = 1 === O(b) ? b.value & 63 : -1;
        L(a.b, a.f);
        d = a.c;
        5 === P(b) ? (W(a, d, !0), W(a, d, !1)) : 3 === P(b) && (N(b) === R[d + 0] ? W(a, d, !0) : N(b) === R[d + 2] && W(a, d, !1));
        d ^= 1;
        3 === (b.value >>> 19 & 7) && (Ja(b) === R[d + 0] ? W(a, d, !0) : Ja(b) === R[d + 2] && W(a, d, !1));
        O(b) & 4 || 0 === P(b) ? a.l = 0 : ++a.l;
        a.c = d;
        K(a.b, 0);
        return !0
    }

    function Y(a) {
        if (a.i.length) {
            var b = a.i.pop();
            a.c ^= 1;
            K(a.b, 0);
            $a(a, b);
            a.j.pop();
            K(a.b, 1538 + a.g);
            a.g = a.j.pop();
            K(a.b, 1538 + a.g);
            L(a.b, a.f);
            a.f = a.j.pop();
            L(a.b, a.f);
            a.m.pop()
        }
    };
    var ab = [100, 300, 300, 500, 900, 2E4],
        bb = [
            [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0],
            [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0, -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0, 5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50],
            [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 5, 5, 10, 10,
                5, 5, -10, -10, 0, 10, 10, 10, 10, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0, 5, -10, -20, -10, -10, -10, -10, -10, -10, -20
            ],
            [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0],
            [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0, 5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10, -5, -5, -10, -10, -20],
            [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20, -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20]
        ],
        cb = ab[0] / 2;

    function db(a, b) {
        for (var d = 0, c = 0; 5 > c; ++c) d += k(Q(a, c, b)) * ab[c];
        1 < k(Q(a, 2, b)) && (d += cb);
        return d
    }

    function eb(a, b) {
        for (var d = 0, c = 0; 5 >= c; ++c)
            for (var e = D(Q(a, c, b)); !q(e);) var f = m(e),
                d = d + bb[c][b ? f : 56 ^ f];
        return d
    }

    function fb(a) {
        function b(a) {
            function b(a) {
                var c = O(a) & 4 ? (1 + (a.value >>> 19 & 7)) / (1 + P(a)) : 0,
                    c = 6 * c + P(a),
                    c = 16 * c + O(a),
                    c = 64 * c + (a.value & 63);
                return c = 64 * c + N(a)
            }
            a.sort(function(a, c) {
                return b(c) - b(a)
            });
            return a
        }

        function d(a, c, g) {
            if (Wa(a)) return 0;
            var f, p = db(a, 0) - db(a, 1);
            f = eb(a, 0) - eb(a, 1);
            f = p + f;
            ++e;
            if (p = 0 === a.c) {
                if (f >= g) return g;
                c = f > c ? f : c
            } else {
                if (f <= c) return c;
                g = f < g ? f : g
            }
            f = b(S(a, !0, !T(a)));
            for (var l = 0; l < f.length; ++l)
                if (X(a, f[l])) {
                    var n = d(a, c, g);
                    Y(a);
                    if (p) {
                        if (n >= g) return g;
                        c = n > c ? n : c
                    } else {
                        if (n <= c) return c;
                        g = n < g ?
                            n : g
                    }
                }
            return p ? c : g
        }

        function c(a, e, g, f) {
            if (1 > e) return d(a, g, f);
            for (var p = b(S(a, !0, !1)), l = 0 === a.c, n = !1, F = 0; F < p.length; ++F)
                if (X(a, p[F])) {
                    var n = !0,
                        da = c(a, e - 1, g, f);
                    Y(a);
                    l ? g = da > g ? da : g : f = da < f ? da : f;
                    if (f <= g) break
                }
            if (!n) {
                if (!T(a)) return 0;
                a = ab[5];
                return l ? -a : a
            }
            return Wa(a) ? 0 : l ? g : f
        }
        for (var e = 0, f = null, g = -Infinity, p = Infinity, l = b(S(a, !0)), F = 0; F < l.length; ++F)
            if (X(a, l[F])) {
                var n = c(a, 3, g, p);
                Y(a);
                0 === a.c ? n > g && (g = n, f = l[F]) : n < p && (p = n, f = l[F])
            }
        return f
    };

    function hb() {
        this.a = new Ka
    }

    function ib() {
        var a = $("<table>"),
            b = "<tr><th></th>" + "abcdefgh".split("").map(function(a) {
                return '<th class="file">' + a + "</th>"
            }).join("") + "<th></th></tr>";
        a.append(b);
        for (var d = 0; 8 > d; ++d) {
            var c = 7 - d,
                e = $("<tr>");
            a.append(e);
            var f = '<th class="rank">' + (8 - d) + "</th>";
            e.append(f);
            for (var g = 0; 8 > g; ++g) {
                var p = $("<td>"),
                    l = (c + g) % 2 ? "light" : "dark";
                p.attr("id", ba(c, g));
                p.attr("title", "Algebraic: " + ba(c, g) + "\nRank: " + c + "\nFile: " + g + "\nIndex: " + (g + 8 * c) + "\nColor: " + l);
                p.addClass(l);
                e.append(p)
            }
            e.append(f)
        }
        a.append(b);
        $("#chessboard").append(a)
    }

    function jb() {
        $("#chessboard table tr td, #chessboard table tr td div").removeClass("from to positional capture double-push en-passant promotion castle king-castle queen-castle")
    }

    function kb() {
        $("#chessboard table tr td div.ui-draggable").draggable("destroy");
        $("#chessboard table tr td.ui-droppable").droppable("destroy")
    }

    function lb(a) {
        var b = S(a.a);
        $("#moves").html('<a href="#" id="undo" class="' + (a.a.i.length ? "can" : "cannot") + '">undo</a><br/><a href="#" id="auto" class="' + (0 < b.length ? "can" : "cannot") + '">auto</a><br/>' + b.map(function(a, b) {
            return '<a href="#" id="' + b + '">' + (Ia(a) ? "0-0" + (3 === O(a) ? "-0" : "") : " NBRQK".charAt(P(a)) + h(N(a)) + (O(a) & 4 ? "x" : "-") + h(a.value & 63) + (5 === O(a) ? "e.p." : "") + (O(a) & 8 ? " NBRQK".charAt(O(a) & 8 ? 1 + (O(a) & 3) : 0) : "")) + "</a><br/>"
        }).join(""));
        $("#chessboard table tr td, #chessboard table tr td div").removeClass("can-move");
        b.forEach(function(a) {
            a = $("#" + h(N(a)));
            a.add(a.children()).addClass("can-move")
        });
        var d = !1;
        $("#chessboard table tr td div.can-move").mouseenter(function() {
            if (!d) {
                var c = $(this),
                    e = c.parent(),
                    f = ca("" + e.attr("id")),
                    e = e.add(c);
                e.toggleClass("from", b.some(function(a) {
                    return N(a) === f
                }));
                e.hasClass("from") && (b.forEach(function(a) {
                    if (N(a) === f) {
                        var b = $("#" + h(a.value & 63)),
                            b = b.add(b.children());
                        b.addClass("to");
                        b.addClass(0 === O(a) ? "positional" : "");
                        b.addClass(O(a) & 4 ? "capture" : "");
                        b.addClass(1 === O(a) ? "double-push" :
                            "");
                        b.addClass(5 === O(a) ? "en-passant" : "");
                        b.addClass(O(a) & 8 ? "promotion" : "");
                        b.addClass(Ia(a) ? "castle" : "");
                        b.addClass(2 === O(a) ? "king-castle" : "");
                        b.addClass(3 === O(a) ? "queen-castle" : "")
                    }
                }), kb(), $("#chessboard table tr td.to").droppable({
                    drop: function() {
                        var c = ca("" + $(this).attr("id")),
                            d = b.filter(function(a) {
                                return N(a) === f && (a.value & 63) === c
                            });
                        0 < d.length ? (X(a.a, d[0]), Z(a)) : (jb(), kb())
                    }
                }), c.draggable({
                    start: function() {
                        d = !0
                    },
                    stop: function() {
                        d = !1
                    },
                    containment: "#chessboard table",
                    zIndex: 10,
                    revert: "invalid"
                }))
            }
        }).mouseleave(function() {
            d ||
                jb()
        });
        $("#moves a").click(function() {
            var c = $(this).attr("id");
            "undo" === c ? (Y(a.a), Y(a.a), Z(a)) : "auto" === c ? mb(a) : (X(a.a, b[parseInt(c, 10)]), Z(a))
        })
    }

    function mb(a) {
        $("#moves").html("");
        var b = $("#dim");
        b.fadeIn(function() {
            var d = fb(a.a);
            if (!d) throw Error("Move not found");
            X(a.a, d);
            var c = $("#" + h(N(d))),
                d = $("#" + h(d.value & 63)),
                e = d.offset().left - c.offset().left,
                f = d.offset().top - c.offset().top,
                g = c.children("div");
            g.css({
                position: "relative",
                top: "0px",
                left: "0px"
            });
            b.fadeOut(function() {
                g.animate({
                    top: f + "px",
                    left: e + "px"
                }, function() {
                    Z(a)
                })
            })
        })
    }

    function Z(a) {
        jb();
        kb();
        $("#chessboard table tr td div").remove();
        $("#chessboard table tr td").removeClass("white black turn last-move " + aa.join(" "));
        for (var b = a.a.a[6], d = a.a.a[7], c = 0; 64 > c; ++c)
            for (var e = $("#" + h(c)), f = 0; 5 >= f; ++f)
                if (!r(a.a.a[f], c)) {
                    var g = 0 === a.a.c ? !r(b, c) : !r(d, c),
                        p = $("<div>");
                    p.attr("title", e.attr("title") + "\nPiece: " + aa[f] + "\nColor: " + (r(b, c) ? "black" : "white"));
                    p.text("\u2659\u265f\u2658\u265e\u2657\u265d\u2656\u265c\u2655\u265b\u2654\u265a".charAt(2 * f + (r(b, c) ? 1 : 0)));
                    var l = p.add(e);
                    l.addClass(aa[f]);
                    l.toggleClass("white", !r(b, c));
                    l.toggleClass("black", !r(d, c));
                    l.toggleClass("turn", g);
                    e.append(p);
                    break
                }
        b = a.a;
        if (b = b.i.length ? b.i[b.i.length - 1] : null) $("#" + h(N(b))).addClass("last-move"), $("#" + h(b.value & 63)).addClass("last-move");
        b = a.a;
        b = S(b).length ? 100 <= b.l ? 3 : Ua(b) ? 4 : Va(b) ? 5 : 0 : T(b) ? 1 : 2;
        0 === b && 1 === a.a.c ? mb(a) : (lb(a), $("#dim").css({
            display: "none"
        }), 1 === b ? $("#moves").append("&#35;<br/>" + (a.a.c ? "1-0" : "0-1")) : 0 !== b && $("#moves").append("&frac12;-&frac12;"))
    };
    window.makeChessGame = function() {
        ib();
        Z(new hb)
    };
})();