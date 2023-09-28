/*
 * External libs
 */
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = k.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(R) || [""]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt())
    }, k.fx.stop = function() {
        it = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});

// Underscore.js 1.3.1
(function() {
    function q(a, c, d) {
        if (a === c) return a !== 0 || 1 / a == 1 / c;
        if (a == null || c == null) return a === c;
        if (a._chain) a = a._wrapped;
        if (c._chain) c = c._wrapped;
        if (a.isEqual && b.isFunction(a.isEqual)) return a.isEqual(c);
        if (c.isEqual && b.isFunction(c.isEqual)) return c.isEqual(a);
        var e = l.call(a);
        if (e != l.call(c)) return false;
        switch (e) {
            case "[object String]":
                return a == String(c);
            case "[object Number]":
                return a != +a ? c != +c : a == 0 ? 1 / a == 1 / c : a == +c;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +c;
            case "[object RegExp]":
                return a.source ==
                    c.source && a.global == c.global && a.multiline == c.multiline && a.ignoreCase == c.ignoreCase
        }
        if (typeof a != "object" || typeof c != "object") return false;
        for (var f = d.length; f--;)
            if (d[f] == a) return true;
        d.push(a);
        var f = 0,
            g = true;
        if (e == "[object Array]") {
            if (f = a.length, g = f == c.length)
                for (; f--;)
                    if (!(g = f in a == f in c && q(a[f], c[f], d))) break
        } else {
            if ("constructor" in a != "constructor" in c || a.constructor != c.constructor) return false;
            for (var h in a)
                if (b.has(a, h) && (f++, !(g = b.has(c, h) && q(a[h], c[h], d)))) break;
            if (g) {
                for (h in c)
                    if (b.has(c,
                            h) && !f--) break;
                g = !f
            }
        }
        d.pop();
        return g
    }
    var r = this,
        G = r._,
        n = {},
        k = Array.prototype,
        o = Object.prototype,
        i = k.slice,
        H = k.unshift,
        l = o.toString,
        I = o.hasOwnProperty,
        w = k.forEach,
        x = k.map,
        y = k.reduce,
        z = k.reduceRight,
        A = k.filter,
        B = k.every,
        C = k.some,
        p = k.indexOf,
        D = k.lastIndexOf,
        o = Array.isArray,
        J = Object.keys,
        s = Function.prototype.bind,
        b = function(a) {
            return new m(a)
        };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) exports = module.exports = b;
        exports._ = b
    } else r._ = b;
    b.VERSION = "1.3.1";
    var j = b.each =
        b.forEach = function(a, c, d) {
            if (a != null)
                if (w && a.forEach === w) a.forEach(c, d);
                else if (a.length === +a.length)
                for (var e = 0, f = a.length; e < f; e++) {
                    if (e in a && c.call(d, a[e], e, a) === n) break
                } else
                    for (e in a)
                        if (b.has(a, e) && c.call(d, a[e], e, a) === n) break
        };
    b.map = b.collect = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        if (x && a.map === x) return a.map(c, b);
        j(a, function(a, g, h) {
            e[e.length] = c.call(b, a, g, h)
        });
        if (a.length === +a.length) e.length = a.length;
        return e
    };
    b.reduce = b.foldl = b.inject = function(a, c, d, e) {
        var f = arguments.length > 2;
        a ==
            null && (a = []);
        if (y && a.reduce === y) return e && (c = b.bind(c, e)), f ? a.reduce(c, d) : a.reduce(c);
        j(a, function(a, b, i) {
            f ? d = c.call(e, d, a, b, i) : (d = a, f = true)
        });
        if (!f) throw new TypeError("Reduce of empty array with no initial value");
        return d
    };
    b.reduceRight = b.foldr = function(a, c, d, e) {
        var f = arguments.length > 2;
        a == null && (a = []);
        if (z && a.reduceRight === z) return e && (c = b.bind(c, e)), f ? a.reduceRight(c, d) : a.reduceRight(c);
        var g = b.toArray(a).reverse();
        e && !f && (c = b.bind(c, e));
        return f ? b.reduce(g, c, d, e) : b.reduce(g, c)
    };
    b.find = b.detect =
        function(a, c, b) {
            var e;
            E(a, function(a, g, h) {
                if (c.call(b, a, g, h)) return e = a, true
            });
            return e
        };
    b.filter = b.select = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        if (A && a.filter === A) return a.filter(c, b);
        j(a, function(a, g, h) {
            c.call(b, a, g, h) && (e[e.length] = a)
        });
        return e
    };
    b.reject = function(a, c, b) {
        var e = [];
        if (a == null) return e;
        j(a, function(a, g, h) {
            c.call(b, a, g, h) || (e[e.length] = a)
        });
        return e
    };
    b.every = b.all = function(a, c, b) {
        var e = true;
        if (a == null) return e;
        if (B && a.every === B) return a.every(c, b);
        j(a, function(a, g, h) {
            if (!(e =
                    e && c.call(b, a, g, h))) return n
        });
        return e
    };
    var E = b.some = b.any = function(a, c, d) {
        c || (c = b.identity);
        var e = false;
        if (a == null) return e;
        if (C && a.some === C) return a.some(c, d);
        j(a, function(a, b, h) {
            if (e || (e = c.call(d, a, b, h))) return n
        });
        return !!e
    };
    b.include = b.contains = function(a, c) {
        var b = false;
        if (a == null) return b;
        return p && a.indexOf === p ? a.indexOf(c) != -1 : b = E(a, function(a) {
            return a === c
        })
    };
    b.invoke = function(a, c) {
        var d = i.call(arguments, 2);
        return b.map(a, function(a) {
            return (b.isFunction(c) ? c || a : a[c]).apply(a, d)
        })
    };
    b.pluck =
        function(a, c) {
            return b.map(a, function(a) {
                return a[c]
            })
        };
    b.max = function(a, c, d) {
        if (!c && b.isArray(a)) return Math.max.apply(Math, a);
        if (!c && b.isEmpty(a)) return -Infinity;
        var e = {
            computed: -Infinity
        };
        j(a, function(a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b >= e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.min = function(a, c, d) {
        if (!c && b.isArray(a)) return Math.min.apply(Math, a);
        if (!c && b.isEmpty(a)) return Infinity;
        var e = {
            computed: Infinity
        };
        j(a, function(a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b < e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.shuffle = function(a) {
        var b = [],
            d;
        j(a, function(a, f) {
            f == 0 ? b[0] = a : (d = Math.floor(Math.random() * (f + 1)), b[f] = b[d], b[d] = a)
        });
        return b
    };
    b.sortBy = function(a, c, d) {
        return b.pluck(b.map(a, function(a, b, g) {
            return {
                value: a,
                criteria: c.call(d, a, b, g)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            return c < d ? -1 : c > d ? 1 : 0
        }), "value")
    };
    b.groupBy = function(a, c) {
        var d = {},
            e = b.isFunction(c) ? c : function(a) {
                return a[c]
            };
        j(a, function(a, b) {
            var c = e(a, b);
            (d[c] || (d[c] = [])).push(a)
        });
        return d
    };
    b.sortedIndex = function(a,
        c, d) {
        d || (d = b.identity);
        for (var e = 0, f = a.length; e < f;) {
            var g = e + f >> 1;
            d(a[g]) < d(c) ? e = g + 1 : f = g
        }
        return e
    };
    b.toArray = function(a) {
        return !a ? [] : a.toArray ? a.toArray() : b.isArray(a) ? i.call(a) : b.isArguments(a) ? i.call(a) : b.values(a)
    };
    b.size = function(a) {
        return b.toArray(a).length
    };
    b.first = b.head = function(a, b, d) {
        return b != null && !d ? i.call(a, 0, b) : a[0]
    };
    b.initial = function(a, b, d) {
        return i.call(a, 0, a.length - (b == null || d ? 1 : b))
    };
    b.last = function(a, b, d) {
        return b != null && !d ? i.call(a, Math.max(a.length - b, 0)) : a[a.length - 1]
    };
    b.rest =
        b.tail = function(a, b, d) {
            return i.call(a, b == null || d ? 1 : b)
        };
    b.compact = function(a) {
        return b.filter(a, function(a) {
            return !!a
        })
    };
    b.flatten = function(a, c) {
        return b.reduce(a, function(a, e) {
            if (b.isArray(e)) return a.concat(c ? e : b.flatten(e));
            a[a.length] = e;
            return a
        }, [])
    };
    b.without = function(a) {
        return b.difference(a, i.call(arguments, 1))
    };
    b.uniq = b.unique = function(a, c, d) {
        var d = d ? b.map(a, d) : a,
            e = [];
        b.reduce(d, function(d, g, h) {
            if (0 == h || (c === true ? b.last(d) != g : !b.include(d, g))) d[d.length] = g, e[e.length] = a[h];
            return d
        }, []);
        return e
    };
    b.union = function() {
        return b.uniq(b.flatten(arguments, true))
    };
    b.intersection = b.intersect = function(a) {
        var c = i.call(arguments, 1);
        return b.filter(b.uniq(a), function(a) {
            return b.every(c, function(c) {
                return b.indexOf(c, a) >= 0
            })
        })
    };
    b.difference = function(a) {
        var c = b.flatten(i.call(arguments, 1));
        return b.filter(a, function(a) {
            return !b.include(c, a)
        })
    };
    b.zip = function() {
        for (var a = i.call(arguments), c = b.max(b.pluck(a, "length")), d = Array(c), e = 0; e < c; e++) d[e] = b.pluck(a, "" + e);
        return d
    };
    b.indexOf = function(a, c,
        d) {
        if (a == null) return -1;
        var e;
        if (d) return d = b.sortedIndex(a, c), a[d] === c ? d : -1;
        if (p && a.indexOf === p) return a.indexOf(c);
        for (d = 0, e = a.length; d < e; d++)
            if (d in a && a[d] === c) return d;
        return -1
    };
    b.lastIndexOf = function(a, b) {
        if (a == null) return -1;
        if (D && a.lastIndexOf === D) return a.lastIndexOf(b);
        for (var d = a.length; d--;)
            if (d in a && a[d] === b) return d;
        return -1
    };
    b.range = function(a, b, d) {
        arguments.length <= 1 && (b = a || 0, a = 0);
        for (var d = arguments[2] || 1, e = Math.max(Math.ceil((b - a) / d), 0), f = 0, g = Array(e); f < e;) g[f++] = a, a += d;
        return g
    };
    var F = function() {};
    b.bind = function(a, c) {
        var d, e;
        if (a.bind === s && s) return s.apply(a, i.call(arguments, 1));
        if (!b.isFunction(a)) throw new TypeError;
        e = i.call(arguments, 2);
        return d = function() {
            if (!(this instanceof d)) return a.apply(c, e.concat(i.call(arguments)));
            F.prototype = a.prototype;
            var b = new F,
                g = a.apply(b, e.concat(i.call(arguments)));
            return Object(g) === g ? g : b
        }
    };
    b.bindAll = function(a) {
        var c = i.call(arguments, 1);
        c.length == 0 && (c = b.functions(a));
        j(c, function(c) {
            a[c] = b.bind(a[c], a)
        });
        return a
    };
    b.memoize = function(a,
        c) {
        var d = {};
        c || (c = b.identity);
        return function() {
            var e = c.apply(this, arguments);
            return b.has(d, e) ? d[e] : d[e] = a.apply(this, arguments)
        }
    };
    b.delay = function(a, b) {
        var d = i.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(a, d)
        }, b)
    };
    b.defer = function(a) {
        return b.delay.apply(b, [a, 1].concat(i.call(arguments, 1)))
    };
    b.throttle = function(a, c) {
        var d, e, f, g, h, i = b.debounce(function() {
            h = g = false
        }, c);
        return function() {
            d = this;
            e = arguments;
            var b;
            f || (f = setTimeout(function() {
                f = null;
                h && a.apply(d, e);
                i()
            }, c));
            g ? h = true :
                a.apply(d, e);
            i();
            g = true
        }
    };
    b.debounce = function(a, b) {
        var d;
        return function() {
            var e = this,
                f = arguments;
            clearTimeout(d);
            d = setTimeout(function() {
                d = null;
                a.apply(e, f)
            }, b)
        }
    };
    b.once = function(a) {
        var b = false,
            d;
        return function() {
            if (b) return d;
            b = true;
            return d = a.apply(this, arguments)
        }
    };
    b.wrap = function(a, b) {
        return function() {
            var d = [a].concat(i.call(arguments, 0));
            return b.apply(this, d)
        }
    };
    b.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, d = a.length - 1; d >= 0; d--) b = [a[d].apply(this, b)];
            return b[0]
        }
    };
    b.after = function(a, b) {
        return a <= 0 ? b() : function() {
            if (--a < 1) return b.apply(this, arguments)
        }
    };
    b.keys = J || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var c = [],
            d;
        for (d in a) b.has(a, d) && (c[c.length] = d);
        return c
    };
    b.values = function(a) {
        return b.map(a, b.identity)
    };
    b.functions = b.methods = function(a) {
        var c = [],
            d;
        for (d in a) b.isFunction(a[d]) && c.push(d);
        return c.sort()
    };
    b.extend = function(a) {
        j(i.call(arguments, 1), function(b) {
            for (var d in b) a[d] = b[d]
        });
        return a
    };
    b.defaults = function(a) {
        j(i.call(arguments,
            1), function(b) {
            for (var d in b) a[d] == null && (a[d] = b[d])
        });
        return a
    };
    b.clone = function(a) {
        return !b.isObject(a) ? a : b.isArray(a) ? a.slice() : b.extend({}, a)
    };
    b.tap = function(a, b) {
        b(a);
        return a
    };
    b.isEqual = function(a, b) {
        return q(a, b, [])
    };
    b.isEmpty = function(a) {
        if (b.isArray(a) || b.isString(a)) return a.length === 0;
        for (var c in a)
            if (b.has(a, c)) return false;
        return true
    };
    b.isElement = function(a) {
        return !!(a && a.nodeType == 1)
    };
    b.isArray = o || function(a) {
        return l.call(a) == "[object Array]"
    };
    b.isObject = function(a) {
        return a === Object(a)
    };
    b.isArguments = function(a) {
        return l.call(a) == "[object Arguments]"
    };
    if (!b.isArguments(arguments)) b.isArguments = function(a) {
        return !(!a || !b.has(a, "callee"))
    };
    b.isFunction = function(a) {
        return l.call(a) == "[object Function]"
    };
    b.isString = function(a) {
        return l.call(a) == "[object String]"
    };
    b.isNumber = function(a) {
        return l.call(a) == "[object Number]"
    };
    b.isNaN = function(a) {
        return a !== a
    };
    b.isBoolean = function(a) {
        return a === true || a === false || l.call(a) == "[object Boolean]"
    };
    b.isDate = function(a) {
        return l.call(a) == "[object Date]"
    };
    b.isRegExp = function(a) {
        return l.call(a) == "[object RegExp]"
    };
    b.isNull = function(a) {
        return a === null
    };
    b.isUndefined = function(a) {
        return a === void 0
    };
    b.has = function(a, b) {
        return I.call(a, b)
    };
    b.noConflict = function() {
        r._ = G;
        return this
    };
    b.identity = function(a) {
        return a
    };
    b.times = function(a, b, d) {
        for (var e = 0; e < a; e++) b.call(d, e)
    };
    b.escape = function(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    b.mixin = function(a) {
        j(b.functions(a),
            function(c) {
                K(c, b[c] = a[c])
            })
    };
    var L = 0;
    b.uniqueId = function(a) {
        var b = L++;
        return a ? a + b : b
    };
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var t = /.^/,
        u = function(a) {
            return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
        };
    b.template = function(a, c) {
        var d = b.templateSettings,
            d = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.escape || t, function(a, b) {
                return "',_.escape(" +
                    u(b) + "),'"
            }).replace(d.interpolate || t, function(a, b) {
                return "'," + u(b) + ",'"
            }).replace(d.evaluate || t, function(a, b) {
                return "');" + u(b).replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            e = new Function("obj", "_", d);
        return c ? e(c, b) : function(a) {
            return e.call(this, a, b)
        }
    };
    b.chain = function(a) {
        return b(a).chain()
    };
    var m = function(a) {
        this._wrapped = a
    };
    b.prototype = m.prototype;
    var v = function(a, c) {
            return c ? b(a).chain() : a
        },
        K = function(a, c) {
            m.prototype[a] =
                function() {
                    var a = i.call(arguments);
                    H.call(a, this._wrapped);
                    return v(c.apply(b, a), this._chain)
                }
        };
    b.mixin(b);
    j("pop,push,reverse,shift,sort,splice,unshift".split(","), function(a) {
        var b = k[a];
        m.prototype[a] = function() {
            var d = this._wrapped;
            b.apply(d, arguments);
            var e = d.length;
            (a == "shift" || a == "splice") && e === 0 && delete d[0];
            return v(d, this._chain)
        }
    });
    j(["concat", "join", "slice"], function(a) {
        var b = k[a];
        m.prototype[a] = function() {
            return v(b.apply(this._wrapped, arguments), this._chain)
        }
    });
    m.prototype.chain = function() {
        this._chain =
            true;
        return this
    };
    m.prototype.value = function() {
        return this._wrapped
    }
}).call(this);

// TweenMax.js 1.18.0
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    _ = n.prototype = i.to({}, .1, {}),
                    u = [];
                n.version = "1.18.0", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, _.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                    }
                    return this
                }, _.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === a) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, o.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, a, o, _, c, f) {
                    o = o || 0;
                    var p, m, d, g, v = a.delay || 0,
                        y = [],
                        T = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(f || a.callbackScope || this, c || u)
                        },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, d = 0; p >= d; d++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (x && r(m, t, d), w) {
                            w = m.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            r(m.startAt, t, d)
                        }
                        m.delay = v, d === p && _ && (m.onComplete = T), y[d] = new n(t[d], e, m), v += o
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
                }, n.delayedCall = function(t, e, i, s, r) {
                    return new n(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(c(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    f = n.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, l = f(0 != r),
                        h = l.length,
                        _ = i && s && r;
                    for (o = 0; h > o; o++) a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, _, u, c, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (_ in f)
                                for (a = f[_].target.parentNode; a;) a === t && (r = r.concat(f[_].tweens)), a = a.parentNode;
                            for (c = r.length, u = 0; c > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = f(r), l = i && s && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, _.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, _.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, _.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    l = n.isArray,
                    h = n.lazyTweens,
                    _ = n.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    c = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.18.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, l, h, _) {
                    var u, p, d = new s({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: _,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), p = 0; t.length > p; p++) u = c(r), u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && f(u, t, p), d.to(t[p], e, u, p * n);
                    return this.add(d, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var h, _, u, c, f, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(c = r[u]) && (c = new s({
                                tweens: c
                            })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, s, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, l, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        p = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (s = this._first; s && t >= s._startTime && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);) {
                                if (s._active || f >= s._startTime && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = s.prototype = new t;
                return h.constructor = s, h.kill()._gc = !1, s.version = "1.18.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        x = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (_ = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : y >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else if (0 === p && 0 > y && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = p + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (s = this._first; s && t >= s._startTime && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                        c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & x),
                            b = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = x * p, x > this._cycle ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = k, this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || _ || c)) return d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);) {
                            if (s._active || m >= s._startTime && !s._paused && !s._gc) {
                                if (c === s) {
                                    for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = l
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (s = 0; l > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (l + h) / 2,
                            c = (h + _) / 2,
                            f = (c - u) / 8;
                        return r.b = l + (t - l) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, o) {
                        var h, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (h = 0; w > h; h++) f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[h], T = i[h], x = .25 * (T + y) * r / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = l(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = l(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, l, h, _, u, c, f = [];
                        if (n)
                            for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof(c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (l = 0; o > l; l++) h = t[l][s], _ = t[l + 1][s], f[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                        return f[l] = new a(t[l][s], 0, 0, t[l + 1][s]), f
                    },
                    u = function(t, n, a, l, u, c) {
                        var f, p, m, d, g, v, y, T, x = {},
                            w = [],
                            b = c || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) p = w[f], m = x[p], h(m, n, a, l, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, l, h, _, u, c, f, p, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (h = v.length; --h > -1;) {
                            for (c = v[h], m[c] = l = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2), l[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === d ? 0 : l[_ + 3], l[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, l = e.values || [],
                                h = {},
                                _ = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, l, h, _, u, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (h = c - 1; h > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (l = Math.round(l)), f[n] ? p[n](l) : p[n] = l;
                            if (this._autoRotate) {
                                var d, g, v, y, T, x, w, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, l = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](l) : p[n] = l)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, _, u, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    d = {};
                                if (0 > f) return o;
                                for (h = 0; f >= h; h++) u = i(t, c[h], a, o, l, f !== h), p[h] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    F = 180 / Math.PI,
                    I = {},
                    E = document,
                    N = function(t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
                    },
                    L = N("div"),
                    X = N("img"),
                    B = a._internals = {
                        _specialProps: l
                    },
                    j = navigator.userAgent,
                    Y = function() {
                        var t = j.indexOf("Android"),
                            e = N("a");
                        return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || Number(j.substr(t + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), f = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    U = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, l, h, _ = A.test(i),
                            u = t,
                            c = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                                c[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || ke === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
                        return Y || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Re && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (l[a] = s[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    le = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    he = a.parseColor = function(t, e) {
                        var i, s, r, n, a, o, l, h, _, u, c;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t]) i = oe[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = c = t.match(d), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = le(a + 1 / 3, s, r), i[1] = le(a, s, r), i[2] = le(a - 1 / 3, s, r);
                                else i = t.match(d) || oe.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = oe.black;
                        return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    _e = function(t, e) {
                        var i, s, r, n = t.match(ue) || [],
                            a = 0,
                            o = n.length ? "" : t;
                        for (i = 0; n.length > i; i++) s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = he(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o
                    },
                    ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in oe) ue += "|" + h + "\\b";
                ue = RegExp(ue + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ue.lastIndex = 0, ue.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _e(t[0], e), t[1] = _e(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var ce = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(ue) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)
                                for (; _ > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, _ > c--)
                                for (; _ > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    fe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    pe = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    me = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, l, h, _, u = s,
                            c = {},
                            f = {},
                            p = i._transform,
                            m = I;
                        for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (h = new pe(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], c[o] = s[l], n || (h = new pe(s, l, o, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: h,
                            pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, c) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof me || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
                    }),
                    de = function(t, e, i, s, r, n) {
                        var a = new me(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    ge = a.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
                        i = i || n || "", a = new me(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, c, f, p, m, v, y, T, x, w, b, P, k, S = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            O = S.length,
                            A = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = l, a.setRatio = h, ue.lastIndex = 0, u = 0; O > u; u++)
                            if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ue.test(p)) P = "," === m.charAt(m.length - 1) ? ")," : ")", k = -1 !== m.indexOf("hsl") && Y, p = he(p, k), m = he(m, k), x = p.length + m.length > 6, x && !Y && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (Y || (x = !1), k ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], re(m[0], p[0]), ",", !1, !0).appendXtra("", p[1], re(m[1], p[1]), "%,", !1).appendXtra("", p[2], re(m[2], p[2]), x ? "%," : "%" + P, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : P, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, P, !1))), ue.lastIndex = 0;
                        else if (v = p.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, u = 1; a.l > u; u++) P += a["xs" + u] + a.data["xn" + u];
                            a.e = P + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ve = 9;
                for (h = me.prototype, h.l = h.pr = 0; --ve > 0;) h["xn" + ve] = 0, h["xs" + ve] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new me(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ye = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Te = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ye(n[s], e)
                    },
                    xe = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Te(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = ye.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, c = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return ge(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    Te(t, {
                        parser: function(t, s, r, n, a, o) {
                            var l = new me(t, r, 0, 0, a, 2, r, !1, i);
                            return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = c || f;
                var we, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pe = W("transform"),
                    ke = V + "transform",
                    Se = W("transformOrigin"),
                    Re = null !== W("perspective"),
                    Oe = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Re ? a.defaultForce3D || "auto" : !1
                    },
                    Ae = window.SVGElement,
                    Ce = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    De = E.documentElement,
                    Me = function() {
                        var t, e, i, s = m || /Android/i.test(j) && !window.chrome;
                        return E.createElementNS && !s && (t = Ce("svg", De), e = Ce("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Pe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Re), De.removeChild(t)), s
                    }(),
                    ze = function(t, e, i, s, r) {
                        var n, o, l, h, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform,
                            x = Ee(t, !0);
                        T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = h * (p / g) + _ * (-f / g) + (f * d - p * m) / g, l = h * (-c / g) + _ * (u / g) - (u * d - c * m) / g, h = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = l), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = _ - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    Fe = function(t) {
                        return !!(Ae && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Ee = function(t, e) {
                        var i, s, r, n, a, o = t._gsTransform || new Oe,
                            l = 1e5;
                        if (Pe ? s = Q(t, ke, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Fe(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (s = t.style[Pe], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = r.length; --ve > -1;) n = Number(r[ve]), r[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ne = B.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var o, l, h, _, u, c, f = s ? t._gsTransform || new Oe : new Oe,
                            p = 0 > f.scaleX,
                            m = 2e-5,
                            d = 1e5,
                            g = Re ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Fe(t)), f.svg && (ze(t, Q(t, Se, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || Me), o = Ee(t), o !== Ie) {
                            if (16 === o.length) {
                                var y, T, x, w, b, P = o[0],
                                    k = o[1],
                                    S = o[2],
                                    R = o[3],
                                    O = o[4],
                                    A = o[5],
                                    C = o[6],
                                    D = o[7],
                                    M = o[8],
                                    z = o[9],
                                    I = o[10],
                                    E = o[12],
                                    N = o[13],
                                    L = o[14],
                                    X = o[11],
                                    B = Math.atan2(C, I);
                                f.zOrigin && (L = -f.zOrigin, E = M * L - o[12], N = z * L - o[13], L = I * L + f.zOrigin - o[14]), f.rotationX = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + I * b, M = O * -b + M * w, z = A * -b + z * w, I = C * -b + I * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, I), f.rotationY = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - I * b, z = k * b + z * w, I = S * b + I * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + I * I) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = E, f.y = N, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Re && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var j = o.length >= 6,
                                    Y = j ? o[0] : 1,
                                    U = o[1] || 0,
                                    q = o[2] || 0,
                                    V = j ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(Y * Y + U * U), _ = Math.sqrt(V * V + q * q), u = Y || U ? Math.atan2(U, Y) * F : f.rotation || 0, c = q || V ? Math.atan2(q, V) * F + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = _, f.rotation = u, f.skewX = c, Re && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                            }
                            f.zOrigin = g;
                            for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (we && t.style[Pe] ? e.delayedCall(.001, function() {
                            je(t.style, Pe)
                        }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Le = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -h, h = -i, e = c.filter, u.filter = "";
                            var f, p, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                                w = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * l), b += p - (f * h + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, k, S, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * d)) / 2 + b), ve = 0; 4 > ve; ve++) k = ee[ve], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ve ? -s.ieOffsetX : -s.ieOffsetY : 2 > ve ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ve || 2 === ve ? 1 : R))) + "px"
                            }
                        }
                    },
                    Xe = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, l, h, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data,
                            S = this.t.style,
                            R = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            C = k.scaleX,
                            D = k.scaleY,
                            M = k.scaleZ,
                            F = k.x,
                            I = k.y,
                            E = k.z,
                            N = k.svg,
                            L = k.perspective,
                            X = k.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || A || O) && (!we || !N) && Re)) return R || k.skewX || N ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, we && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), F += .01 * k.xPercent * m.width, I += .01 * k.yPercent * m.height), m = 1e-6, m > F && F > -m && (F = 0), m > I && I > -m && (I = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + F + "," + I + ")", N && we ? this.t.setAttribute("transform", "matrix(" + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + I + ")", void 0;
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            if (!(A || O || 1 !== M || L || N)) return S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + I + "px," + E + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        h = 1, s = a = o = l = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, h = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, l = h * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, h *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, h *= M, c *= M), 1 !== D && (i *= D, n *= D, l *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || N) && (p && (F += s * -p, I += a * -p, E += h * -p + p), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > F && F > -m && (F = w), m > I && I > -m && (I = w), m > E && E > -m && (E = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > l && l > -m ? w : l) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > h && h > -m ? w : h) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += F + x + I + x + E + x + (L ? 1 + -E / L : 1) + ")", S[Pe] = T
                    };
                h = Oe.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, l) {
                        if (s._lastParsedTransform === l) return n;
                        s._lastParsedTransform = l;
                        var h, _, u, c, f, p, m, d, g, v, y = t._gsTransform,
                            T = t.style,
                            x = 1e-6,
                            w = be.length,
                            b = l,
                            P = {},
                            k = "transformOrigin";
                        if (l.display ? (c = Q(t, "display"), T.display = "block", h = Ne(t, r, !0, l.parseTransform), T.display = c) : h = Ne(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof b.transform && Pe) c = L.style, c[Pe] = b.transform, c.display = "block", c.position = "absolute", E.body.appendChild(L), _ = Ne(L, null, !1), E.body.removeChild(L), _.perspective || (_.perspective = h.perspective), null != b.xPercent && (_.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (_.yPercent = ne(b.yPercent, h.yPercent));
                        else if ("object" == typeof b) {
                            if (_ = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                                    scaleZ: ne(b.scaleZ, h.scaleZ),
                                    x: ne(b.x, h.x),
                                    y: ne(b.y, h.y),
                                    z: ne(b.z, h.z),
                                    xPercent: ne(b.xPercent, h.xPercent),
                                    yPercent: ne(b.yPercent, h.yPercent),
                                    perspective: ne(b.transformPerspective, h.perspective)
                                }, d = b.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (c in d) b[c] = d[c];
                                else b.rotation = d;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (_.x = 0, _.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (_.y = 0, _.yPercent = ne(b.y, h.yPercent)), _.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Re && (_.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), _.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), _.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX), _.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY), (u = _.skewY - h.skewY) && (_.skewX += u, _.rotation += u)
                        }
                        for (Re && null != b.force3D && (h.force3D = b.force3D, m = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || _.z || _.rotationX || _.rotationY || _.perspective, p || null == b.scale || (_.scaleZ = 1); --w > -1;) i = be[w], f = _[i] - h[i], (f > x || -x > f || null != b[i] || null != I[i]) && (m = !0, n = new me(h, i, h[i], f, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return f = b.transformOrigin, h.svg && (f || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, ze(t, se(f), _, b.svgOrigin, b.smoothOrigin), n = de(h, "xOrigin", (y ? h : _).xOrigin, _.xOrigin, n, k), n = de(h, "yOrigin", (y ? h : _).yOrigin, _.yOrigin, n, k), (g !== h.xOffset || v !== h.yOffset) && (n = de(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, k), n = de(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, k)), f = we ? null : "0px 0px"), (f || Re && p && h.zOrigin) && (Pe ? (m = !0, i = Se, f = (f || Q(t, i, r, !1, "50% 50%")) + "", n = new me(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Re ? (c = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, n.xs0 = n.e = f[0] + " " + (f[1] || "50%") + " 0px", n = new me(h, "zOrigin", 0, 0, n, -1, n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = f) : se(f + "", h)), m && (s._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), Te("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Te("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = W(b[l])), u = _ = Q(t, b[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = h = o[l], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, h = parseFloat(_) + p + g)), a = ge(P, b[l], u + " " + _, c + " " + h, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ce("0px 0px 0px 0px", !1, !0)
                }), Te("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h, _, u, c, f = "background-position",
                            p = r || Z(t, null),
                            d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                            for (o = d.split(" "), l = g.split(" "), X.setAttribute("src", c), h = 2; --h > -1;) d = o[h], _ = -1 !== d.indexOf("%"), _ !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), Te("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), Te("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Te("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Te("transformStyle", {
                    prefix: !0
                }), Te("backfaceVisibility", {
                    prefix: !0
                }), Te("userSelect", {
                    prefix: !0
                }), Te("margin", {
                    parser: fe("marginTop,marginRight,marginBottom,marginLeft")
                }), Te("padding", {
                    parser: fe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Te("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), Te("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Te("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), Te("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
                    }
                }), Te("borderWidth", {
                    parser: fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Te("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new me(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Be = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
                };
                Te("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new me(l, "opacity", o, e - o, n) : (n = new me(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Be), h && (n = new me(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var je = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ye = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : je(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Te("className", {
                    parser: function(t, e, s, n, a, o, l) {
                        var h, _, u, c, f, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new me(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, _, K(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, h.difs, a, o)
                    }
                });
                var Ue = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), je(a, i);
                        r && (je(a, Pe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (Te("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new me(t, s, 0, 0, n, 2), n.setRatio = Ue, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;) xe(h[ve]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, f, m, d, g, v, y, T, x, b = t.style;
                    if (u && "" === b.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, h = K(t, r), b.cssText = d + ";" + e, h = J(t, h, K(t)).difs, !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = d), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Pe ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new me(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = Pe ? Xe : Le, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, o, h, u, c, f, p, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = he(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ge(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + h : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && h && (h = $(t, a, h, p), "%" === m ? (h /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m || "rem" === m ? h /= $(t, a, 1, m) : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new me(v, a, u || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new me(v, a, h, u - h, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = ge(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3
                };
                var qe = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new me(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = qe, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ve = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ve(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ve(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, l = e.to(t, i, s),
                        h = [l],
                        _ = [],
                        u = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Ve(t, _, c), l.render(i, !0, !0), Ve(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                        if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            h.push(e.fromTo(c[r], i, o, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[n[a]] = 1;
                    for (a = n.length; --a > -1;)
                        for (t = n[a], i = r._firstPT; i;) s = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
                    return !1
                }, i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e) {
                        var i;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = n._class,
                    h = function(e, i) {
                        var s = l("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    p = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = h[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, l = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                m = function(s, r, n, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, c, f, d, g = r.length, v = g; --g > -1;)(_ = p[r[g]] || new m(r[g], [])).gsClass ? (o[g] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && n)
                            for (u = ("com.greensock." + s).split("."), c = u.pop(), f = l(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, d = "undefined" != typeof module && module.exports, !d && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && d && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? g("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
                h.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, l, h = this,
                    u = S(),
                    f = e !== !1 && P,
                    p = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - m), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && h.dispatchEvent(d)
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    p = t || 1 / _, m = Math.min(e, p, 0)
                }, h.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
                }, h.fps(t), setTimeout(function() {
                    f && 5 > h.frame && h.useRAF(!1)
                }, 1500)
            }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                    o || a.wake();
                    var i = this.vars.useFrames ? G : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new h.Ticker, n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var A = function() {
                o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (F.length && Q(), this.render(t, e, !1), F.length && Q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = C.prototype = new O, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? V[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new O, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.18.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var F = [],
                I = {},
                E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                L = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [t, e],
                        c = 0,
                        f = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(E) || [], n = e.match(E) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++) _ = n[o], h = e.substr(c, e.indexOf(_, c) - c), f += h || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || o >= r.length ? f += _ : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), c += _.length;
                    return f += e.substr(c), f && u.push(f), u.setRatio = N, u
                },
                X = function(t, e, i, s, r, n, a, o) {
                    var l, h, _ = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        c = "string" == typeof s && "=" === s.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: _,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            r: n,
                            pr: 0,
                            c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (f.fp = a, l = L(_, s, o || D.defaultStringFilter, f), f = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : c || (f.c = parseFloat(s) - parseFloat(_) || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                B = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: F,
                    blobDif: L
                },
                j = D._plugins = {},
                Y = B.tweenLookup = {},
                U = 0,
                q = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                G = O._rootFramesTimeline = new C,
                W = O._rootTimeline = new C,
                Z = 30,
                Q = B.lazyRender = function() {
                    var t, e = F.length;
                    for (I = {}; --e > -1;) t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0
                };
            W._startTime = a.time, G._startTime = a.frame, W._active = G._active = !0, setTimeout(Q, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (F.length && Q(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), F.length && Q(), a.frame >= Z) {
                    Z = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in Y) {
                        for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Y[i]
                    }
                    if (i = W._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var $ = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = Y[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return Y[n].tweens
                },
                H = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                K = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = r.length, n = 0; l > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + _,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !H(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                J = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in n) q[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, l, h, _;
                if (null == e) return !1;
                I[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars)
                    if (_ = this.vars[n], q[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (j[n] && (l = new j[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: n,
                            pg: 1,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[n] = X.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, F.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !H(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var te = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = te.prototype
            }, !0);
            if (n = te.prototype, te.version = "1.18.0", te.API = 2, n._firstPT = null, n._addTween = X, n.setRatio = N, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, te.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === te.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            te.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new te(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, te.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function(s, p) {
    var m = {},
        l = m.lib = {},
        n = function() {},
        r = l.Base = {
            extend: function(b) {
                n.prototype = this;
                var h = new n;
                b && h.mixIn(b);
                h.hasOwnProperty("init") || (h.init = function() {
                    h.$super.init.apply(this, arguments)
                });
                h.init.prototype = h;
                h.$super = this;
                return h
            },
            create: function() {
                var b = this.extend();
                b.init.apply(b, arguments);
                return b
            },
            init: function() {},
            mixIn: function(b) {
                for (var h in b) b.hasOwnProperty(h) && (this[h] = b[h]);
                b.hasOwnProperty("toString") && (this.toString = b.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        q = l.WordArray = r.extend({
            init: function(b, h) {
                b = this.words = b || [];
                this.sigBytes = h != p ? h : 4 * b.length
            },
            toString: function(b) {
                return (b || t).stringify(this)
            },
            concat: function(b) {
                var h = this.words,
                    a = b.words,
                    j = this.sigBytes;
                b = b.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var g = 0; g < b; g++) h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - 8 * (g % 4) & 255) << 24 - 8 * ((j + g) % 4);
                else if (65535 < a.length)
                    for (g = 0; g < b; g += 4) h[j + g >>> 2] = a[g >>> 2];
                else h.push.apply(h, a);
                this.sigBytes += b;
                return this
            },
            clamp: function() {
                var b = this.words,
                    h = this.sigBytes;
                b[h >>> 2] &= 4294967295 <<
                    32 - 8 * (h % 4);
                b.length = s.ceil(h / 4)
            },
            clone: function() {
                var b = r.clone.call(this);
                b.words = this.words.slice(0);
                return b
            },
            random: function(b) {
                for (var h = [], a = 0; a < b; a += 4) h.push(4294967296 * s.random() | 0);
                return new q.init(h, b)
            }
        }),
        v = m.enc = {},
        t = v.Hex = {
            stringify: function(b) {
                var a = b.words;
                b = b.sigBytes;
                for (var g = [], j = 0; j < b; j++) {
                    var k = a[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    g.push((k >>> 4).toString(16));
                    g.push((k & 15).toString(16))
                }
                return g.join("")
            },
            parse: function(b) {
                for (var a = b.length, g = [], j = 0; j < a; j += 2) g[j >>> 3] |= parseInt(b.substr(j,
                    2), 16) << 24 - 4 * (j % 8);
                return new q.init(g, a / 2)
            }
        },
        a = v.Latin1 = {
            stringify: function(b) {
                var a = b.words;
                b = b.sigBytes;
                for (var g = [], j = 0; j < b; j++) g.push(String.fromCharCode(a[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return g.join("")
            },
            parse: function(b) {
                for (var a = b.length, g = [], j = 0; j < a; j++) g[j >>> 2] |= (b.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new q.init(g, a)
            }
        },
        u = v.Utf8 = {
            stringify: function(b) {
                try {
                    return decodeURIComponent(escape(a.stringify(b)))
                } catch (g) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(b) {
                return a.parse(unescape(encodeURIComponent(b)))
            }
        },
        g = l.BufferedBlockAlgorithm = r.extend({
            reset: function() {
                this._data = new q.init;
                this._nDataBytes = 0
            },
            _append: function(b) {
                "string" == typeof b && (b = u.parse(b));
                this._data.concat(b);
                this._nDataBytes += b.sigBytes
            },
            _process: function(b) {
                var a = this._data,
                    g = a.words,
                    j = a.sigBytes,
                    k = this.blockSize,
                    m = j / (4 * k),
                    m = b ? s.ceil(m) : s.max((m | 0) - this._minBufferSize, 0);
                b = m * k;
                j = s.min(4 * b, j);
                if (b) {
                    for (var l = 0; l < b; l += k) this._doProcessBlock(g, l);
                    l = g.splice(0, b);
                    a.sigBytes -= j
                }
                return new q.init(l, j)
            },
            clone: function() {
                var b = r.clone.call(this);
                b._data = this._data.clone();
                return b
            },
            _minBufferSize: 0
        });
    l.Hasher = g.extend({
        cfg: r.extend(),
        init: function(b) {
            this.cfg = this.cfg.extend(b);
            this.reset()
        },
        reset: function() {
            g.reset.call(this);
            this._doReset()
        },
        update: function(b) {
            this._append(b);
            this._process();
            return this
        },
        finalize: function(b) {
            b && this._append(b);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(a, g) {
                return (new b.init(g)).finalize(a)
            }
        },
        _createHmacHelper: function(b) {
            return function(a, g) {
                return (new k.HMAC.init(b,
                    g)).finalize(a)
            }
        }
    });
    var k = m.algo = {};
    return m
}(Math);
(function(s) {
    function p(a, k, b, h, l, j, m) {
        a = a + (k & b | ~k & h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function m(a, k, b, h, l, j, m) {
        a = a + (k & h | b & ~h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function l(a, k, b, h, l, j, m) {
        a = a + (k ^ b ^ h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function n(a, k, b, h, l, j, m) {
        a = a + (b ^ (k | ~h)) + l + m;
        return (a << j | a >>> 32 - j) + k
    }
    for (var r = CryptoJS, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; 64 > u; u++) a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;
    q = q.MD5 = t.extend({
        _doReset: function() {
            this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(g, k) {
            for (var b = 0; 16 > b; b++) {
                var h = k + b,
                    w = g[h];
                g[h] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360
            }
            var b = this._hash.words,
                h = g[k + 0],
                w = g[k + 1],
                j = g[k + 2],
                q = g[k + 3],
                r = g[k + 4],
                s = g[k + 5],
                t = g[k + 6],
                u = g[k + 7],
                v = g[k + 8],
                x = g[k + 9],
                y = g[k + 10],
                z = g[k + 11],
                A = g[k + 12],
                B = g[k + 13],
                C = g[k + 14],
                D = g[k + 15],
                c = b[0],
                d = b[1],
                e = b[2],
                f = b[3],
                c = p(c, d, e, f, h, 7, a[0]),
                f = p(f, c, d, e, w, 12, a[1]),
                e = p(e, f, c, d, j, 17, a[2]),
                d = p(d, e, f, c, q, 22, a[3]),
                c = p(c, d, e, f, r, 7, a[4]),
                f = p(f, c, d, e, s, 12, a[5]),
                e = p(e, f, c, d, t, 17, a[6]),
                d = p(d, e, f, c, u, 22, a[7]),
                c = p(c, d, e, f, v, 7, a[8]),
                f = p(f, c, d, e, x, 12, a[9]),
                e = p(e, f, c, d, y, 17, a[10]),
                d = p(d, e, f, c, z, 22, a[11]),
                c = p(c, d, e, f, A, 7, a[12]),
                f = p(f, c, d, e, B, 12, a[13]),
                e = p(e, f, c, d, C, 17, a[14]),
                d = p(d, e, f, c, D, 22, a[15]),
                c = m(c, d, e, f, w, 5, a[16]),
                f = m(f, c, d, e, t, 9, a[17]),
                e = m(e, f, c, d, z, 14, a[18]),
                d = m(d, e, f, c, h, 20, a[19]),
                c = m(c, d, e, f, s, 5, a[20]),
                f = m(f, c, d, e, y, 9, a[21]),
                e = m(e, f, c, d, D, 14, a[22]),
                d = m(d, e, f, c, r, 20, a[23]),
                c = m(c, d, e, f, x, 5, a[24]),
                f = m(f, c, d, e, C, 9, a[25]),
                e = m(e, f, c, d, q, 14, a[26]),
                d = m(d, e, f, c, v, 20, a[27]),
                c = m(c, d, e, f, B, 5, a[28]),
                f = m(f, c,
                    d, e, j, 9, a[29]),
                e = m(e, f, c, d, u, 14, a[30]),
                d = m(d, e, f, c, A, 20, a[31]),
                c = l(c, d, e, f, s, 4, a[32]),
                f = l(f, c, d, e, v, 11, a[33]),
                e = l(e, f, c, d, z, 16, a[34]),
                d = l(d, e, f, c, C, 23, a[35]),
                c = l(c, d, e, f, w, 4, a[36]),
                f = l(f, c, d, e, r, 11, a[37]),
                e = l(e, f, c, d, u, 16, a[38]),
                d = l(d, e, f, c, y, 23, a[39]),
                c = l(c, d, e, f, B, 4, a[40]),
                f = l(f, c, d, e, h, 11, a[41]),
                e = l(e, f, c, d, q, 16, a[42]),
                d = l(d, e, f, c, t, 23, a[43]),
                c = l(c, d, e, f, x, 4, a[44]),
                f = l(f, c, d, e, A, 11, a[45]),
                e = l(e, f, c, d, D, 16, a[46]),
                d = l(d, e, f, c, j, 23, a[47]),
                c = n(c, d, e, f, h, 6, a[48]),
                f = n(f, c, d, e, u, 10, a[49]),
                e = n(e, f, c, d,
                    C, 15, a[50]),
                d = n(d, e, f, c, s, 21, a[51]),
                c = n(c, d, e, f, A, 6, a[52]),
                f = n(f, c, d, e, q, 10, a[53]),
                e = n(e, f, c, d, y, 15, a[54]),
                d = n(d, e, f, c, w, 21, a[55]),
                c = n(c, d, e, f, v, 6, a[56]),
                f = n(f, c, d, e, D, 10, a[57]),
                e = n(e, f, c, d, t, 15, a[58]),
                d = n(d, e, f, c, B, 21, a[59]),
                c = n(c, d, e, f, r, 6, a[60]),
                f = n(f, c, d, e, z, 10, a[61]),
                e = n(e, f, c, d, j, 15, a[62]),
                d = n(d, e, f, c, x, 21, a[63]);
            b[0] = b[0] + c | 0;
            b[1] = b[1] + d | 0;
            b[2] = b[2] + e | 0;
            b[3] = b[3] + f | 0
        },
        _doFinalize: function() {
            var a = this._data,
                k = a.words,
                b = 8 * this._nDataBytes,
                h = 8 * a.sigBytes;
            k[h >>> 5] |= 128 << 24 - h % 32;
            var l = s.floor(b /
                4294967296);
            k[(h + 64 >>> 9 << 4) + 15] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
            k[(h + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            a.sigBytes = 4 * (k.length + 1);
            this._process();
            a = this._hash;
            k = a.words;
            for (b = 0; 4 > b; b++) h = k[b], k[b] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = t.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    r.MD5 = t._createHelper(q);
    r.HmacMD5 = t._createHmacHelper(q)
})(Math);


/**
 * @license jCanvas v20.1.3
 * Copyright 2017 Caleb Evans
 * Released under the MIT license
 */
! function(a, b, c) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = function(a, b) {
        return c(a, b)
    } : c(a, b)
}("undefined" != typeof window ? window.jQuery : {}, "undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a) {
        var b, c = this;
        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
        return c
    }

    function d() {
        qa(this, d.baseDefaults)
    }

    function e(a) {
        return "string" === sa(a)
    }

    function f(a) {
        return !isNaN(oa(a)) && !isNaN(pa(a))
    }

    function g(a) {
        return a && a.getContext ? a.getContext("2d") : null
    }

    function h(a) {
        var b, c;
        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (c = a[b], "string" === sa(c) && f(c) && "text" !== b && (a[b] = pa(c)));
        void 0 !== a.text && (a.text = String(a.text))
    }

    function i(a) {
        return a = qa({}, a), a.masks = a.masks.slice(0), a
    }

    function j(a, b) {
        var c;
        a.save(), c = i(b.transforms), b.savedTransforms.push(c)
    }

    function k(a, b) {
        0 === b.savedTransforms.length ? b.transforms = i(Fa) : (a.restore(), b.transforms = b.savedTransforms.pop())
    }

    function l(a, b, c, d) {
        c[d] && (ta(c[d]) ? b[d] = c[d].call(a, c) : b[d] = c[d])
    }

    function m(a, b, c) {
        l(a, b, c, "fillStyle"), l(a, b, c, "strokeStyle"), b.lineWidth = c.strokeWidth, c.rounded ? b.lineCap = b.lineJoin = "round" : (b.lineCap = c.strokeCap, b.lineJoin = c.strokeJoin, b.miterLimit = c.miterLimit), c.strokeDash || (c.strokeDash = []), b.setLineDash && b.setLineDash(c.strokeDash), b.webkitLineDash = c.strokeDash, b.lineDashOffset = b.webkitLineDashOffset = b.mozDashOffset = c.strokeDashOffset, b.shadowOffsetX = c.shadowX, b.shadowOffsetY = c.shadowY, b.shadowBlur = c.shadowBlur, b.shadowColor = c.shadowColor, b.globalAlpha = c.opacity, b.globalCompositeOperation = c.compositing, c.imageSmoothing && (b.imageSmoothingEnabled = c.imageSmoothing)
    }

    function n(a, b, c) {
        c.mask && (c.autosave && j(a, b), a.clip(), b.transforms.masks.push(c._args))
    }

    function o(a, b) {
        b._transformed && a.restore()
    }

    function p(a, b, c) {
        var d;
        c.closed && b.closePath(), c.shadowStroke && 0 !== c.strokeWidth ? (b.stroke(), b.fill(), b.shadowColor = "transparent", b.shadowBlur = 0, b.stroke()) : (b.fill(), "transparent" !== c.fillStyle && (b.shadowColor = "transparent"), 0 !== c.strokeWidth && b.stroke()), c.closed || b.closePath(), o(b, c), c.mask && (d = r(a), n(b, d, c))
    }

    function q(a, b, c, d, e) {
        c._toRad = c.inDegrees ? va / 180 : 1, c._transformed = !0, b.save(), c.fromCenter || c._centered || void 0 === d || (void 0 === e && (e = d), c.x += d / 2, c.y += e / 2, c._centered = !0), c.rotate && R(b, c, null), 1 === c.scale && 1 === c.scaleX && 1 === c.scaleY || S(b, c, null), (c.translate || c.translateX || c.translateY) && T(b, c, null)
    }

    function r(b) {
        var c, d = Ea.dataCache;
        return d._canvas === b && d._data ? c = d._data : (c = a.data(b, "jCanvas"), c || (c = {
            canvas: b,
            layers: [],
            layer: {
                names: {},
                groups: {}
            },
            eventHooks: {},
            intersecting: [],
            lastIntersected: null,
            cursor: a(b).css("cursor"),
            drag: {
                layer: null,
                dragging: !1
            },
            event: {
                type: null,
                x: null,
                y: null
            },
            events: {},
            transforms: i(Fa),
            savedTransforms: [],
            animating: !1,
            animated: null,
            pixelRatio: 1,
            scaled: !1,
            redrawOnMousemove: !1
        }, a.data(b, "jCanvas", c)), d._canvas = b, d._data = c), c
    }

    function s(a, b, c) {
        var d;
        for (d in Ia.events) Object.prototype.hasOwnProperty.call(Ia.events, d) && (c[d] || c.cursors && c.cursors[d]) && u(a, b, c, d);
        b.events.mouseout || (a.bind("mouseout.jCanvas", function() {
            var c, d = b.drag.layer;
            for (d && (b.drag = {}, F(a, b, d, "dragcancel")), c = 0; c < b.layers.length; c += 1) d = b.layers[c], d._hovered && a.triggerLayerEvent(b.layers[c], "mouseout");
            a.drawLayers()
        }), b.events.mouseout = !0)
    }

    function t(a, b, c, d) {
        Ia.events[d](a, b), c._event = !0
    }

    function u(a, b, c, d) {
        t(a, b, c, d), "mouseover" !== d && "mouseout" !== d && "mousemove" !== d || (b.redrawOnMousemove = !0)
    }

    function v(a, b, c) {
        var d, e, f;
        if (c.draggable || c.cursors) {
            for (d = ["mousedown", "mousemove", "mouseup"], f = 0; f < d.length; f += 1) e = d[f], t(a, b, c, e);
            c._event = !0
        }
    }

    function w(a, b, c, d) {
        var f = b.layer.names;
        d ? void 0 !== d.name && e(c.name) && c.name !== d.name && delete f[c.name] : d = c, e(d.name) && (f[d.name] = c)
    }

    function x(a, b, c, d) {
        var e, f, g, h, i, j = b.layer.groups;
        if (d) {
            if (void 0 !== d.groups && null !== c.groups)
                for (g = 0; g < c.groups.length; g += 1)
                    if (f = c.groups[g], e = j[f]) {
                        for (i = 0; i < e.length; i += 1)
                            if (e[i] === c) {
                                h = i, e.splice(i, 1);
                                break
                            }
                        0 === e.length && delete j[f]
                    }
        } else d = c;
        if (void 0 !== d.groups && null !== d.groups)
            for (g = 0; g < d.groups.length; g += 1) f = d.groups[g], e = j[f], e || (e = j[f] = [], e.name = f), void 0 === h && (h = e.length), e.splice(h, 0, c)
    }

    function y(a) {
        var b, c, d, e;
        for (b = null, c = a.intersecting.length - 1; c >= 0; c -= 1)
            if (b = a.intersecting[c], b._masks) {
                for (e = b._masks.length - 1; e >= 0; e -= 1)
                    if (d = b._masks[e], !d.intersects) {
                        b.intersects = !1;
                        break
                    }
                if (b.intersects && !b.intangible) break
            }
        return b && b.intangible && (b = null), b
    }

    function z(a, b, c, d) {
        c && c.visible && c._method && (c._next = d || null, c._method && c._method.call(a, c))
    }

    function A(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m;
        if (g = b.drag, e = g.layer, h = e && e.dragGroups || [], d = b.layers, "mousemove" === c || "touchmove" === c) {
            if (g.dragging || (g.dragging = !0, e.dragging = !0, e.bringToFront && (d.splice(e.index, 1), e.index = d.push(e)), e._startX = e.x, e._startY = e.y, e._endX = e._eventX, e._endY = e._eventY, F(a, b, e, "dragstart")), g.dragging)
                for (l = e._eventX - (e._endX - e._startX), m = e._eventY - (e._endY - e._startY), e.updateDragX && (l = e.updateDragX.call(a[0], e, l)), e.updateDragY && (m = e.updateDragY.call(a[0], e, m)), e.dx = l - e.x, e.dy = m - e.y, "y" !== e.restrictDragToAxis && (e.x = l), "x" !== e.restrictDragToAxis && (e.y = m), F(a, b, e, "drag"), k = 0; k < h.length; k += 1)
                    if (j = h[k], i = b.layer.groups[j], e.groups && i)
                        for (f = 0; f < i.length; f += 1) i[f] !== e && ("y" !== e.restrictDragToAxis && "y" !== i[f].restrictDragToAxis && (i[f].x += e.dx), "x" !== e.restrictDragToAxis && "x" !== i[f].restrictDragToAxis && (i[f].y += e.dy))
        } else "mouseup" !== c && "touchend" !== c || (g.dragging && (e.dragging = !1, g.dragging = !1, b.redrawOnMousemove = b.originalRedrawOnMousemove, F(a, b, e, "dragstop")), b.drag = {})
    }

    function B(b, c, d) {
        var e;
        c.cursors && (e = c.cursors[d]), -1 !== a.inArray(e, Ga.cursors) && (e = Ga.prefix + e), e && b.css({
            cursor: e
        })
    }

    function C(a, b) {
        a.css({
            cursor: b.cursor
        })
    }

    function D(a, b, c, d, e) {
        d[c] && b._running && !b._running[c] && (b._running[c] = !0, d[c].call(a[0], b, e), b._running[c] = !1)
    }

    function E(b, c) {
        return !(b.disableEvents || b.intangible && -1 !== a.inArray(c, Ha))
    }

    function F(a, b, c, d, e) {
        E(c, d) && ("mouseout" !== d && B(a, c, d), D(a, c, d, c, e), D(a, c, d, b.eventHooks, e), D(a, c, d, Ia.eventHooks, e))
    }

    function G(b, d, f, g) {
        var i, j, k, l = d._layer ? f : d;
        return d._args = f, (d.draggable || d.dragGroups) && (d.layer = !0, d.draggable = !0), d._method || (g ? d._method = g : d.method ? d._method = a.fn[d.method] : d.type && (d._method = a.fn[Da.drawings[d.type]])), d.layer && !d._layer ? (i = a(b), j = r(b), k = j.layers, (null === l.name || e(l.name) && void 0 === j.layer.names[l.name]) && (h(d), l = new c(d), l.canvas = b, l.layer = !0, l._layer = !0, l._running = {}, null !== l.data ? l.data = qa({}, l.data) : l.data = {}, null !== l.groups ? l.groups = l.groups.slice(0) : l.groups = [], w(i, j, l), x(i, j, l), s(i, j, l), v(i, j, l), d._event = l._event, l._method === a.fn.drawText && i.measureText(l), null === l.index && (l.index = k.length), k.splice(l.index, 0, l), d._args = l, F(i, j, l, "add"))) : d.layer || h(d), l
    }

    function H(a) {
        var b, c;
        for (c = 0; c < Ga.props.length; c += 1) b = Ga.props[c], a[b] = a["_" + b]
    }

    function I(a, b) {
        var c, d;
        for (d = 0; d < Ga.props.length; d += 1) c = Ga.props[d], void 0 !== a[c] && (a["_" + c] = a[c], Ga.propsObj[c] = !0, b && delete a[c])
    }

    function J(a, b, c) {
        var d, e, f, g;
        for (d in c)
            if (Object.prototype.hasOwnProperty.call(c, d) && (e = c[d], ta(e) && (c[d] = e.call(a, b, d)), "object" === sa(e) && ua(e))) {
                for (f in e) Object.prototype.hasOwnProperty.call(e, f) && (g = e[f], void 0 !== b[d] && (b[d + "." + f] = b[d][f], c[d + "." + f] = g));
                delete c[d]
            }
        return c
    }

    function K(a) {
        var b;
        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && -1 !== b.indexOf(".") && delete a[b]
    }

    function L(b) {
        var c, d, e = [],
            f = 1;
        return "transparent" === b ? b = "rgba(0, 0, 0, 0)" : b.match(/^([a-z]+|#[0-9a-f]+)$/gi) && (d = ja.head, c = d.style.color, d.style.color = b, b = a.css(d, "color"), d.style.color = c), b.match(/^rgb/gi) && (e = b.match(/(\d+(\.\d+)?)/gi), b.match(/%/gi) && (f = 2.55), e[0] *= f, e[1] *= f, e[2] *= f, void 0 !== e[3] ? e[3] = pa(e[3]) : e[3] = 1), e
    }

    function M(a) {
        var b, c = 3;
        for ("array" !== sa(a.start) && (a.start = L(a.start), a.end = L(a.end)), a.now = [], 1 === a.start[3] && 1 === a.end[3] || (c = 4), b = 0; b < c; b += 1) a.now[b] = a.start[b] + (a.end[b] - a.start[b]) * a.pos, b < 3 && (a.now[b] = wa(a.now[b]));
        1 !== a.start[3] || 1 !== a.end[3] ? a.now = "rgba(" + a.now.join(",") + ")" : (a.now.slice(0, 3), a.now = "rgb(" + a.now.join(",") + ")"), a.elem.nodeName ? a.elem.style[a.prop] = a.now : a.elem[a.prop] = a.now
    }

    function N(a) {
        return Da.touchEvents[a] && (a = Da.touchEvents[a]), a
    }

    function O(a) {
        return Da.mouseEvents[a] && (a = Da.mouseEvents[a]), a
    }

    function P(a) {
        Ia.events[a] = function(b, c) {
            function d(a) {
                g.x = a.offsetX, g.y = a.offsetY, g.type = e, g.event = a, ("mousemove" !== a.type || c.redrawOnMousemove || c.drag.dragging) && b.drawLayers({
                    resetFire: !0
                }), a.preventDefault()
            }
            var e, f, g;
            g = c.event, e = "mouseover" === a || "mouseout" === a ? "mousemove" : a, f = N(e), c.events[e] || (f !== e ? b.bind(e + ".jCanvas " + f + ".jCanvas", d) : b.bind(e + ".jCanvas", d), c.events[e] = !0)
        }
    }

    function Q(a, b, c) {
        var d, e, f, g, h, i, j, k;
        (d = c._args) && (e = r(a), f = e.event, null !== f.x && null !== f.y && (i = f.x * e.pixelRatio, j = f.y * e.pixelRatio, g = b.isPointInPath(i, j) || b.isPointInStroke && b.isPointInStroke(i, j)), h = e.transforms, d.eventX = f.x, d.eventY = f.y, d.event = f.event, k = e.transforms.rotate, i = d.eventX, j = d.eventY, 0 !== k ? (d._eventX = i * za(-k) - j * ya(-k), d._eventY = j * za(-k) + i * ya(-k)) : (d._eventX = i, d._eventY = j), d._eventX /= h.scaleX, d._eventY /= h.scaleY, g && e.intersecting.push(d), d.intersects = Boolean(g))
    }

    function R(a, b, c) {
        b._toRad = b.inDegrees ? va / 180 : 1, a.translate(b.x, b.y), a.rotate(b.rotate * b._toRad), a.translate(-b.x, -b.y), c && (c.rotate += b.rotate * b._toRad)
    }

    function S(a, b, c) {
        1 !== b.scale && (b.scaleX = b.scaleY = b.scale), a.translate(b.x, b.y), a.scale(b.scaleX, b.scaleY), a.translate(-b.x, -b.y), c && (c.scaleX *= b.scaleX, c.scaleY *= b.scaleY)
    }

    function T(a, b, c) {
        b.translate && (b.translateX = b.translateY = b.translate), a.translate(b.translateX, b.translateY), c && (c.translateX += b.translateX, c.translateY += b.translateY)
    }

    function U(a) {
        for (; a < 0;) a += 2 * va;
        return a
    }

    function V(a, b) {
        return a.x + a.radius * za(b)
    }

    function W(a, b) {
        return a.y + a.radius * ya(b)
    }

    function X(a, b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o;
        c === d ? (m = 0, n = 0) : (m = c.x, n = c.y), d.inDegrees || 360 !== d.end || (d.end = 2 * va), d.start *= c._toRad, d.end *= c._toRad, d.start -= va / 2, d.end -= va / 2, o = va / 180, d.ccw && (o *= -1), e = V(d, d.start + o), f = W(d, d.start + o), g = V(d, d.start), h = W(d, d.start), Z(a, b, c, d, e, f, g, h), b.arc(d.x + m, d.y + n, d.radius, d.start, d.end, d.ccw), i = V(d, d.end + o), j = W(d, d.end + o), k = V(d, d.end), l = W(d, d.end), $(a, b, c, d, k, l, i, j)
    }

    function Y(a, b, c, d, e, f, g, h) {
        var i, j, k, l, m, n, o;
        d.arrowRadius && !c.closed && (o = Aa(h - f, g - e), o -= va, m = c.strokeWidth * za(o), n = c.strokeWidth * ya(o), i = g + d.arrowRadius * za(o + d.arrowAngle / 2), j = h + d.arrowRadius * ya(o + d.arrowAngle / 2), k = g + d.arrowRadius * za(o - d.arrowAngle / 2), l = h + d.arrowRadius * ya(o - d.arrowAngle / 2), b.moveTo(i - m, j - n), b.lineTo(g - m, h - n), b.lineTo(k - m, l - n), b.moveTo(g - m, h - n), b.lineTo(g + m, h + n), b.moveTo(g, h))
    }

    function Z(a, b, c, d, e, f, g, h) {
        d._arrowAngleConverted || (d.arrowAngle *= c._toRad, d._arrowAngleConverted = !0), d.startArrow && Y(a, b, c, d, e, f, g, h)
    }

    function $(a, b, c, d, e, f, g, h) {
        d._arrowAngleConverted || (d.arrowAngle *= c._toRad, d._arrowAngleConverted = !0), d.endArrow && Y(a, b, c, d, e, f, g, h)
    }

    function _(a, b, c, d) {
        var e, f, g;
        for (e = 2, Z(a, b, c, d, d.x2 + c.x, d.y2 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y);;) {
            if (f = d["x" + e], g = d["y" + e], void 0 === f || void 0 === g) break;
            b.lineTo(f + c.x, g + c.y), e += 1
        }
        e -= 1, $(a, b, c, d, d["x" + (e - 1)] + c.x, d["y" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y)
    }

    function aa(a, b, c, d) {
        var e, f, g, h, i;
        for (e = 2, Z(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y);;) {
            if (f = d["x" + e], g = d["y" + e], h = d["cx" + (e - 1)], i = d["cy" + (e - 1)], void 0 === f || void 0 === g || void 0 === h || void 0 === i) break;
            b.quadraticCurveTo(h + c.x, i + c.y, f + c.x, g + c.y), e += 1
        }
        e -= 1, $(a, b, c, d, d["cx" + (e - 1)] + c.x, d["cy" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y)
    }

    function ba(a, b, c, d) {
        var e, f, g, h, i, j, k, l;
        for (e = 2, f = 1, Z(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y);;) {
            if (g = d["x" + e], h = d["y" + e], i = d["cx" + f], j = d["cy" + f], k = d["cx" + (f + 1)], l = d["cy" + (f + 1)], void 0 === g || void 0 === h || void 0 === i || void 0 === j || void 0 === k || void 0 === l) break;
            b.bezierCurveTo(i + c.x, j + c.y, k + c.x, l + c.y, g + c.x, h + c.y), e += 1, f += 2
        }
        e -= 1, f -= 2, $(a, b, c, d, d["cx" + (f + 1)] + c.x, d["cy" + (f + 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y)
    }

    function ca(a, b, c) {
        return b *= a._toRad, b -= va / 2, c * za(b)
    }

    function da(a, b, c) {
        return b *= a._toRad, b -= va / 2, c * ya(b)
    }

    function ea(a, b, c, d) {
        var e, f, g, h, i, j, k, l, m, n, o;
        for (c === d ? (h = 0, i = 0) : (h = c.x, i = c.y), e = 1, j = l = n = d.x + h, k = m = o = d.y + i, Z(a, b, c, d, j + ca(c, d.a1, d.l1), k + da(c, d.a1, d.l1), j, k), void 0 !== d.x && void 0 !== d.y && b.moveTo(j, k);;) {
            if (f = d["a" + e], g = d["l" + e], void 0 === f || void 0 === g) break;
            l = n, m = o, n += ca(c, f, g), o += da(c, f, g), b.lineTo(n, o), e += 1
        }
        $(a, b, c, d, l, m, n, o)
    }

    function fa(a, b, c) {
        isNaN(oa(c.fontSize)) || (c.fontSize += "px"), b.font = c.fontStyle + " " + c.fontSize + " " + c.fontFamily
    }

    function ga(b, c, d, e) {
        var f, g, h, i = Ea.propCache;
        if (i.text === d.text && i.fontStyle === d.fontStyle && i.fontSize === d.fontSize && i.fontFamily === d.fontFamily && i.maxWidth === d.maxWidth && i.lineHeight === d.lineHeight) d.width = i.width, d.height = i.height;
        else {
            for (d.width = c.measureText(e[0]).width, h = 1; h < e.length; h += 1)(g = c.measureText(e[h]).width) > d.width && (d.width = g);
            f = b.style.fontSize, b.style.fontSize = d.fontSize, d.height = pa(a.css(b, "fontSize")) * e.length * d.lineHeight, b.style.fontSize = f
        }
    }

    function ha(a, b) {
        var c, d, e, f, g, h, i = String(b.text),
            j = b.maxWidth,
            k = i.split("\n"),
            l = [];
        for (e = 0; e < k.length; e += 1) {
            if (f = k[e], g = f.split(" "), c = [], d = "", 1 === g.length || a.measureText(f).width < j) c = [f];
            else {
                for (h = 0; h < g.length; h += 1) a.measureText(d + g[h]).width > j && ("" !== d && c.push(d), d = ""), d += g[h], h !== g.length - 1 && (d += " ");
                c.push(d)
            }
            l = l.concat(c.join("\n").replace(/((\n))|($)/gi, "$2").split("\n"))
        }
        return l
    }
    var ia, ja = b.document,
        ka = b.Image,
        la = b.Array,
        ma = b.getComputedStyle,
        na = b.Math,
        oa = b.Number,
        pa = b.parseFloat,
        qa = a.extend,
        ra = a.inArray,
        sa = function(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        },
        ta = a.isFunction,
        ua = a.isPlainObject,
        va = na.PI,
        wa = na.round,
        xa = na.abs,
        ya = na.sin,
        za = na.cos,
        Aa = na.atan2,
        Ba = la.prototype.slice,
        Ca = a.event.fix,
        Da = {},
        Ea = {
            dataCache: {},
            propCache: {},
            imageCache: {}
        },
        Fa = {
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 0,
            translateY: 0,
            masks: []
        },
        Ga = {},
        Ha = ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "touchstart", "touchmove", "touchend"],
        Ia = {
            events: {},
            eventHooks: {},
            future: {}
        };
    d.baseDefaults = {
            align: "center",
            arrowAngle: 90,
            arrowRadius: 0,
            autosave: !0,
            baseline: "middle",
            bringToFront: !1,
            ccw: !1,
            closed: !1,
            compositing: "source-over",
            concavity: 0,
            cornerRadius: 0,
            count: 1,
            cropFromCenter: !0,
            crossOrigin: null,
            cursors: null,
            disableEvents: !1,
            draggable: !1,
            dragGroups: null,
            groups: null,
            data: null,
            dx: null,
            dy: null,
            end: 360,
            eventX: null,
            eventY: null,
            fillStyle: "transparent",
            fontStyle: "normal",
            fontSize: "12pt",
            fontFamily: "sans-serif",
            fromCenter: !0,
            height: null,
            imageSmoothing: !0,
            inDegrees: !0,
            intangible: !1,
            index: null,
            letterSpacing: null,
            lineHeight: 1,
            layer: !1,
            mask: !1,
            maxWidth: null,
            miterLimit: 10,
            name: null,
            opacity: 1,
            r1: null,
            r2: null,
            radius: 0,
            repeat: "repeat",
            respectAlign: !1,
            restrictDragToAxis: null,
            rotate: 0,
            rounded: !1,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            shadowBlur: 0,
            shadowColor: "transparent",
            shadowStroke: !1,
            shadowX: 0,
            shadowY: 0,
            sHeight: null,
            sides: 0,
            source: "",
            spread: 0,
            start: 0,
            strokeCap: "butt",
            strokeDash: null,
            strokeDashOffset: 0,
            strokeJoin: "miter",
            strokeStyle: "transparent",
            strokeWidth: 1,
            sWidth: null,
            sx: null,
            sy: null,
            text: "",
            translate: 0,
            translateX: 0,
            translateY: 0,
            type: null,
            visible: !0,
            width: null,
            x: 0,
            y: 0
        }, ia = new d, c.prototype = ia, Ia.extend = function(b) {
            return b.name && (b.props && qa(ia, b.props), a.fn[b.name] = function a(d) {
                var e, f, h, i, j = this;
                for (f = 0; f < j.length; f += 1) e = j[f], (h = g(e)) && (i = new c(d), G(e, i, d, a), m(e, h, i), b.fn.call(e, h, i));
                return j
            }, b.type && (Da.drawings[b.type] = b.name)), a.fn[b.name]
        }, a.fn.getEventHooks = function() {
            var a, b, c = this,
                d = {};
            return 0 !== c.length && (a = c[0], b = r(a), d = b.eventHooks), d
        }, a.fn.setEventHooks = function(a) {
            var b, c, d = this;
            for (b = 0; b < d.length; b += 1) c = r(d[b]), qa(c.eventHooks, a);
            return d
        }, a.fn.getLayers = function(a) {
            var b, c, d, e, f, g = this,
                h = [];
            if (0 !== g.length)
                if (b = g[0], c = r(b), d = c.layers, ta(a))
                    for (f = 0; f < d.length; f += 1) e = d[f], a.call(b, e) && h.push(e);
                else h = d;
            return h
        }, a.fn.getLayer = function(a) {
            var b, c, d, f, g, h, i = this;
            if (0 !== i.length)
                if (b = i[0], c = r(b), d = c.layers, h = sa(a), a && a.layer) f = a;
                else if ("number" === h) a < 0 && (a = d.length + a), f = d[a];
            else if ("regexp" === h) {
                for (g = 0; g < d.length; g += 1)
                    if (e(d[g].name) && d[g].name.match(a)) {
                        f = d[g];
                        break
                    }
            } else f = c.layer.names[a];
            return f
        }, a.fn.getLayerGroup = function(a) {
            var b, c, d, e, f, g = this,
                h = sa(a);
            if (0 !== g.length)
                if (b = g[0], "array" === h) f = a;
                else if ("regexp" === h) {
                c = r(b), d = c.layer.groups;
                for (e in d)
                    if (e.match(a)) {
                        f = d[e];
                        break
                    }
            } else c = r(b), f = c.layer.groups[a];
            return f
        }, a.fn.getLayerIndex = function(a) {
            var b = this,
                c = b.getLayers(),
                d = b.getLayer(a);
            return ra(d, c)
        }, a.fn.setLayer = function(b, c) {
            var d, e, g, i, j, k, l, m = this;
            for (e = 0; e < m.length; e += 1)
                if (d = a(m[e]), g = r(m[e]), i = a(m[e]).getLayer(b)) {
                    w(d, g, i, c), x(d, g, i, c), h(c);
                    for (j in c) Object.prototype.hasOwnProperty.call(c, j) && (k = c[j], l = sa(k), "object" === l && ua(k) ? (i[j] = qa({}, k), h(i[j])) : "array" === l ? i[j] = k.slice(0) : "string" === l ? 0 === k.indexOf("+=") ? i[j] += pa(k.substr(2)) : 0 === k.indexOf("-=") ? i[j] -= pa(k.substr(2)) : !isNaN(k) && f(k) && "text" !== j ? i[j] = pa(k) : i[j] = k : i[j] = k);
                    s(d, g, i), v(d, g, i), !1 === a.isEmptyObject(c) && F(d, g, i, "change", c)
                }
            return m
        }, a.fn.setLayers = function(b, c) {
            var d, e, f, g, h = this;
            for (e = 0; e < h.length; e += 1)
                for (d = a(h[e]), f = d.getLayers(c), g = 0; g < f.length; g += 1) d.setLayer(f[g], b);
            return h
        }, a.fn.setLayerGroup = function(b, c) {
            var d, e, f, g, h = this;
            for (e = 0; e < h.length; e += 1)
                if (d = a(h[e]), f = d.getLayerGroup(b))
                    for (g = 0; g < f.length; g += 1) d.setLayer(f[g], c);
            return h
        }, a.fn.moveLayer = function(b, c) {
            var d, e, f, g, h, i = this;
            for (e = 0; e < i.length; e += 1) d = a(i[e]), f = r(i[e]), g = f.layers, (h = d.getLayer(b)) && (h.index = ra(h, g), g.splice(h.index, 1), g.splice(c, 0, h), c < 0 && (c = g.length + c), h.index = c, F(d, f, h, "move"));
            return i
        }, a.fn.removeLayer = function(b) {
            var c, d, e, f, g, h = this;
            for (d = 0; d < h.length; d += 1) c = a(h[d]), e = r(h[d]), f = c.getLayers(), (g = c.getLayer(b)) && (g.index = ra(g, f), f.splice(g.index, 1), delete g._layer, w(c, e, g, {
                name: null
            }), x(c, e, g, {
                groups: null
            }), F(c, e, g, "remove"));
            return h
        }, a.fn.removeLayers = function(b) {
            var c, d, e, f, g, h, i = this;
            for (d = 0; d < i.length; d += 1) {
                for (c = a(i[d]), e = r(i[d]), f = c.getLayers(b), h = 0; h < f.length; h += 1) g = f[h], c.removeLayer(g), h -= 1;
                e.layer.names = {}, e.layer.groups = {}
            }
            return i
        }, a.fn.removeLayerGroup = function(b) {
            var c, d, e, f, g = this;
            if (void 0 !== b)
                for (d = 0; d < g.length; d += 1)
                    if (c = a(g[d]), e = c.getLayerGroup(b))
                        for (e = e.slice(0), f = 0; f < e.length; f += 1) c.removeLayer(e[f]);
            return g
        }, a.fn.addLayerToGroup = function(b, c) {
            var d, e, f, g = this,
                h = [c];
            for (e = 0; e < g.length; e += 1) d = a(g[e]), f = d.getLayer(b), f.groups && (h = f.groups.slice(0), -1 === ra(c, f.groups) && h.push(c)), d.setLayer(f, {
                groups: h
            });
            return g
        }, a.fn.removeLayerFromGroup = function(b, c) {
            var d, e, f, g, h = this,
                i = [];
            for (e = 0; e < h.length; e += 1) d = a(h[e]), f = d.getLayer(b), f.groups && -1 !== (g = ra(c, f.groups)) && (i = f.groups.slice(0), i.splice(g, 1), d.setLayer(f, {
                groups: i
            }));
            return h
        }, Ga.cursors = ["grab", "grabbing", "zoom-in", "zoom-out"], Ga.prefix = function() {
            var a = ma(ja.documentElement, "");
            return "-" + (Ba.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1] + "-"
        }(), a.fn.triggerLayerEvent = function(b, c) {
            var d, e, f, g = this;
            for (e = 0; e < g.length; e += 1) d = a(g[e]), f = r(g[e]), (b = d.getLayer(b)) && F(d, f, b, c);
            return g
        }, a.fn.drawLayer = function(b) {
            var c, d, e, f, h = this;
            for (c = 0; c < h.length; c += 1) e = a(h[c]), (d = g(h[c])) && (f = e.getLayer(b), z(e, d, f));
            return h
        }, a.fn.drawLayers = function(b) {
            var c, d, e, f, h, j, k, l, m, n, o, p, q, s = this,
                t = b || {};
            for (l = t.index, l || (l = 0), d = 0; d < s.length; d += 1)
                if (c = a(s[d]), e = g(s[d])) {
                    for (n = r(s[d]), !1 !== t.clear && c.clearCanvas(), f = n.layers, k = l; k < f.length; k += 1)
                        if (h = f[k], h.index = k, t.resetFire && (h._fired = !1), z(c, e, h, k + 1), h._masks = n.transforms.masks.slice(0), h._method === a.fn.drawImage && h.visible) {
                            q = !0;
                            break
                        }
                    if (q) break;
                    m = k, h = y(n), o = n.event, p = o.type, n.drag.layer && A(c, n, p), j = n.lastIntersected, null === j || h === j || !j._hovered || j._fired || n.drag.dragging || (n.lastIntersected = null, j._fired = !0, j._hovered = !1, F(c, n, j, "mouseout"), C(c, n)), h && (h[p] || (p = O(p)), h._event && h.intersects && (n.lastIntersected = h, (h.mouseover || h.mouseout || h.cursors) && !n.drag.dragging && (h._hovered || h._fired || (h._fired = !0, h._hovered = !0, F(c, n, h, "mouseover"))), h._fired || (h._fired = !0, o.type = null, F(c, n, h, p)), !h.draggable || h.disableEvents || "mousedown" !== p && "touchstart" !== p || (n.drag.layer = h, n.originalRedrawOnMousemove = n.redrawOnMousemove, n.redrawOnMousemove = !0))), null !== h || n.drag.dragging || C(c, n), m === f.length && (n.intersecting.length = 0, n.transforms = i(Fa), n.savedTransforms.length = 0)
                }
            return s
        }, a.fn.addLayer = function(a) {
            var b, d, e = this;
            for (b = 0; b < e.length; b += 1) g(e[b]) && (d = new c(a), d.layer = !0, G(e[b], d, a));
            return e
        }, Ga.props = ["width", "height", "opacity", "lineHeight"], Ga.propsObj = {}, a.fn.animateLayer = function() {
            var b, c, d, e, f, h = this,
                i = Ba.call(arguments, 0);
            for ("object" === sa(i[2]) ? (i.splice(2, 0, i[2].duration || null), i.splice(3, 0, i[3].easing || null), i.splice(4, 0, i[4].complete || null), i.splice(5, 0, i[5].step || null)) : (void 0 === i[2] ? (i.splice(2, 0, null), i.splice(3, 0, null), i.splice(4, 0, null)) : ta(i[2]) && (i.splice(2, 0, null), i.splice(3, 0, null)), void 0 === i[3] ? (i[3] = null, i.splice(4, 0, null)) : ta(i[3]) && i.splice(3, 0, null)), c = 0; c < h.length; c += 1) b = a(h[c]), g(h[c]) && (d = r(h[c]), (e = b.getLayer(i[0])) && e._method !== a.fn.draw && (f = qa({}, i[1]), f = J(h[c], e, f), I(f, !0), I(e), e.style = Ga.propsObj, a(e).animate(f, {
                duration: i[2],
                easing: a.easing[i[3]] ? i[3] : null,
                complete: function(a, b, c) {
                    return function() {
                        H(c), K(c), b.animating && b.animated !== c || a.drawLayers(), c._animating = !1, b.animating = !1, b.animated = null, i[4] && i[4].call(a[0], c), F(a, b, c, "animateend")
                    }
                }(b, d, e),
                step: function(a, b, c) {
                    return function(d, e) {
                        var f, g, h, j = !1;
                        "_" === e.prop[0] && (j = !0, e.prop = e.prop.replace("_", ""), c[e.prop] = c["_" + e.prop]), -1 !== e.prop.indexOf(".") && (f = e.prop.split("."), g = f[0], h = f[1], c[g] && (c[g][h] = e.now)), c._pos !== e.pos && (c._pos = e.pos, c._animating || b.animating || (c._animating = !0, b.animating = !0, b.animated = c), b.animating && b.animated !== c || a.drawLayers()), i[5] && i[5].call(a[0], d, e, c), F(a, b, c, "animate", e), j && (e.prop = "_" + e.prop)
                    }
                }(b, d, e)
            }), F(b, d, e, "animatestart")));
            return h
        }, a.fn.animateLayerGroup = function(b) {
            var c, d, e, f, g = this,
                h = Ba.call(arguments, 0);
            for (d = 0; d < g.length; d += 1)
                if (c = a(g[d]), e = c.getLayerGroup(b))
                    for (f = 0; f < e.length; f += 1) h[0] = e[f], c.animateLayer.apply(c, h);
            return g
        }, a.fn.delayLayer = function(b, c) {
            var d, e, f, g, h = this;
            for (c = c || 0, e = 0; e < h.length; e += 1) d = a(h[e]), f = r(h[e]), (g = d.getLayer(b)) && (a(g).delay(c), F(d, f, g, "delay"));
            return h
        }, a.fn.delayLayerGroup = function(b, c) {
            var d, e, f, g, h, i = this;
            for (c = c || 0, e = 0; e < i.length; e += 1)
                if (d = a(i[e]), f = d.getLayerGroup(b))
                    for (h = 0; h < f.length; h += 1) g = f[h], d.delayLayer(g, c);
            return i
        }, a.fn.stopLayer = function(b, c) {
            var d, e, f, g, h = this;
            for (e = 0; e < h.length; e += 1) d = a(h[e]), f = r(h[e]), (g = d.getLayer(b)) && (a(g).stop(c), F(d, f, g, "stop"));
            return h
        }, a.fn.stopLayerGroup = function(b, c) {
            var d, e, f, g, h, i = this;
            for (e = 0; e < i.length; e += 1)
                if (d = a(i[e]), f = d.getLayerGroup(b))
                    for (h = 0; h < f.length; h += 1) g = f[h], d.stopLayer(g, c);
            return i
        },
        function(b) {
            var c;
            for (c = 0; c < b.length; c += 1) a.fx.step[b[c]] = M
        }(["color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "fillStyle", "outlineColor", "strokeStyle", "shadowColor"]), Da.touchEvents = {
            mousedown: "touchstart",
            mouseup: "touchend",
            mousemove: "touchmove"
        }, Da.mouseEvents = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        },
        function(a) {
            var b;
            for (b = 0; b < a.length; b += 1) P(a[b])
        }(["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "touchstart", "touchmove", "touchend", "pointerdown", "pointermove", "pointerup", "contextmenu"]), a.event.fix = function(b) {
            var c, d, e;
            if (b = Ca.call(a.event, b), d = b.originalEvent)
                if (e = d.changedTouches, void 0 !== b.pageX && void 0 === b.offsetX) try {
                    c = a(b.currentTarget).offset(), c && (b.offsetX = b.pageX - c.left, b.offsetY = b.pageY - c.top)
                } catch (a) {} else if (e) try {
                    c = a(b.currentTarget).offset(), c && (b.offsetX = e[0].pageX - c.left, b.offsetY = e[0].pageY - c.top)
                } catch (a) {}
            return b
        }, Da.drawings = {
            arc: "drawArc",
            bezier: "drawBezier",
            ellipse: "drawEllipse",
            function: "draw",
            image: "drawImage",
            line: "drawLine",
            path: "drawPath",
            polygon: "drawPolygon",
            slice: "drawSlice",
            quadratic: "drawQuadratic",
            rectangle: "drawRect",
            text: "drawText",
            vector: "drawVector",
            save: "saveCanvas",
            restore: "restoreCanvas",
            rotate: "rotateCanvas",
            scale: "scaleCanvas",
            translate: "translateCanvas"
        }, a.fn.draw = function a(b) {
            var d, e, f = this,
                h = new c(b);
            if (Da.drawings[h.type] && "function" !== h.type) f[Da.drawings[h.type]](b);
            else
                for (d = 0; d < f.length; d += 1)(e = g(f[d])) && (h = new c(b), G(f[d], h, b, a), h.visible && h.fn && h.fn.call(f[d], e, h));
            return f
        }, a.fn.clearCanvas = function a(b) {
            var d, e, f = this,
                h = new c(b);
            for (d = 0; d < f.length; d += 1)(e = g(f[d])) && (null === h.width || null === h.height ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, f[d].width, f[d].height), e.restore()) : (G(f[d], h, b, a), q(f[d], e, h, h.width, h.height), e.clearRect(h.x - h.width / 2, h.y - h.height / 2, h.width, h.height), o(e, h)));
            return f
        }, a.fn.saveCanvas = function a(b) {
            var d, e, f, h, i, k = this;
            for (d = 0; d < k.length; d += 1)
                if (e = g(k[d]))
                    for (h = r(k[d]), f = new c(b), G(k[d], f, b, a), i = 0; i < f.count; i += 1) j(e, h);
            return k
        }, a.fn.restoreCanvas = function a(b) {
            var d, e, f, h, i, j = this;
            for (d = 0; d < j.length; d += 1)
                if (e = g(j[d]))
                    for (h = r(j[d]), f = new c(b), G(j[d], f, b, a), i = 0; i < f.count; i += 1) k(e, h);
            return j
        }, a.fn.rotateCanvas = function a(b) {
            var d, e, f, h, i = this;
            for (d = 0; d < i.length; d += 1)(e = g(i[d])) && (h = r(i[d]), f = new c(b), G(i[d], f, b, a), f.autosave && j(e, h), R(e, f, h.transforms));
            return i
        }, a.fn.scaleCanvas = function a(b) {
            var d, e, f, h, i = this;
            for (d = 0; d < i.length; d += 1)(e = g(i[d])) && (h = r(i[d]), f = new c(b), G(i[d], f, b, a), f.autosave && j(e, h), S(e, f, h.transforms));
            return i
        }, a.fn.translateCanvas = function a(b) {
            var d, e, f, h, i = this;
            for (d = 0; d < i.length; d += 1)(e = g(i[d])) && (h = r(i[d]), f = new c(b), G(i[d], f, b, a), f.autosave && j(e, h), T(e, f, h.transforms));
            return i
        }, a.fn.drawRect = function a(b) {
            var d, e, f, h, i, j, k, l, n, o = this;
            for (d = 0; d < o.length; d += 1)(e = g(o[d])) && (f = new c(b), G(o[d], f, b, a), f.visible && (q(o[d], e, f, f.width, f.height), m(o[d], e, f), e.beginPath(), f.width && f.height && (h = f.x - f.width / 2, i = f.y - f.height / 2, l = xa(f.cornerRadius), l ? (j = f.x + f.width / 2, k = f.y + f.height / 2, f.width < 0 && (n = h, h = j, j = n), f.height < 0 && (n = i, i = k, k = n), j - h - 2 * l < 0 && (l = (j - h) / 2), k - i - 2 * l < 0 && (l = (k - i) / 2), e.moveTo(h + l, i), e.lineTo(j - l, i), e.arc(j - l, i + l, l, 3 * va / 2, 2 * va, !1), e.lineTo(j, k - l), e.arc(j - l, k - l, l, 0, va / 2, !1), e.lineTo(h + l, k), e.arc(h + l, k - l, l, va / 2, va, !1), e.lineTo(h, i + l), e.arc(h + l, i + l, l, va, 3 * va / 2, !1), f.closed = !0) : e.rect(h, i, f.width, f.height)), Q(o[d], e, f), p(o[d], e, f)));
            return o
        }, a.fn.drawArc = function a(b) {
            var d, e, f, h = this;
            for (d = 0; d < h.length; d += 1)(e = g(h[d])) && (f = new c(b), G(h[d], f, b, a), f.visible && (q(h[d], e, f, 2 * f.radius), m(h[d], e, f), e.beginPath(), X(h[d], e, f, f), Q(h[d], e, f), p(h[d], e, f)));
            return h
        }, a.fn.drawEllipse = function a(b) {
            var d, e, f, h, i, j = this;
            for (d = 0; d < j.length; d += 1)(e = g(j[d])) && (f = new c(b), G(j[d], f, b, a), f.visible && (q(j[d], e, f, f.width, f.height), m(j[d], e, f), h = f.width * (4 / 3), i = f.height, e.beginPath(), e.moveTo(f.x, f.y - i / 2), e.bezierCurveTo(f.x - h / 2, f.y - i / 2, f.x - h / 2, f.y + i / 2, f.x, f.y + i / 2), e.bezierCurveTo(f.x + h / 2, f.y + i / 2, f.x + h / 2, f.y - i / 2, f.x, f.y - i / 2), Q(j[d], e, f), f.closed = !0, p(j[d], e, f)));
            return j
        }, a.fn.drawPolygon = function a(b) {
            var d, e, f, h, i, j, k, l, n, o, r = this;
            for (d = 0; d < r.length; d += 1)
                if ((e = g(r[d])) && (f = new c(b), G(r[d], f, b, a), f.visible)) {
                    for (q(r[d], e, f, 2 * f.radius), m(r[d], e, f), i = 2 * va / f.sides, j = i / 2, h = j + va / 2, k = f.radius * za(j), e.beginPath(), o = 0; o < f.sides; o += 1) l = f.x + f.radius * za(h), n = f.y + f.radius * ya(h), e.lineTo(l, n), f.concavity && (l = f.x + (k + -k * f.concavity) * za(h + j), n = f.y + (k + -k * f.concavity) * ya(h + j), e.lineTo(l, n)), h += i;
                    Q(r[d], e, f), f.closed = !0, p(r[d], e, f)
                }
            return r
        }, a.fn.drawSlice = function a(b) {
            var d, e, f, h, i, j, k = this;
            for (d = 0; d < k.length; d += 1)(e = g(k[d])) && (f = new c(b), G(k[d], f, b, a), f.visible && (q(k[d], e, f, 2 * f.radius), m(k[d], e, f), f.start *= f._toRad, f.end *= f._toRad, f.start -= va / 2, f.end -= va / 2, f.start = U(f.start), f.end = U(f.end), f.end < f.start && (f.end += 2 * va), h = (f.start + f.end) / 2, i = f.radius * f.spread * za(h), j = f.radius * f.spread * ya(h), f.x += i, f.y += j, e.beginPath(), e.arc(f.x, f.y, f.radius, f.start, f.end, f.ccw), e.lineTo(f.x, f.y), Q(k[d], e, f), f.closed = !0, p(k[d], e, f)));
            return k
        }, a.fn.drawLine = function a(b) {
            var d, e, f, h = this;
            for (d = 0; d < h.length; d += 1)(e = g(h[d])) && (f = new c(b), G(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), _(h[d], e, f, f), Q(h[d], e, f), p(h[d], e, f)));
            return h
        }, a.fn.drawQuadratic = function a(b) {
            var d, e, f, h = this;
            for (d = 0; d < h.length; d += 1)(e = g(h[d])) && (f = new c(b), G(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), aa(h[d], e, f, f), Q(h[d], e, f), p(h[d], e, f)));
            return h
        }, a.fn.drawBezier = function a(b) {
            var d, e, f, h = this;
            for (d = 0; d < h.length; d += 1)(e = g(h[d])) && (f = new c(b), G(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), ba(h[d], e, f, f), Q(h[d], e, f), p(h[d], e, f)));
            return h
        }, a.fn.drawVector = function a(b) {
            var d, e, f, h = this;
            for (d = 0; d < h.length; d += 1)(e = g(h[d])) && (f = new c(b), G(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), ea(h[d], e, f, f), Q(h[d], e, f), p(h[d], e, f)));
            return h
        }, a.fn.drawPath = function a(b) {
            var d, e, f, h, i, j = this;
            for (d = 0; d < j.length; d += 1)
                if ((e = g(j[d])) && (f = new c(b), G(j[d], f, b, a), f.visible)) {
                    for (q(j[d], e, f), m(j[d], e, f), e.beginPath(), h = 1;;) {
                        if (void 0 === (i = f["p" + h])) break;
                        i = new c(i), "line" === i.type ? _(j[d], e, f, i) : "quadratic" === i.type ? aa(j[d], e, f, i) : "bezier" === i.type ? ba(j[d], e, f, i) : "vector" === i.type ? ea(j[d], e, f, i) : "arc" === i.type && X(j[d], e, f, i), h += 1
                    }
                    Q(j[d], e, f), p(j[d], e, f)
                }
            return j
        }, a.fn.drawText = function a(b) {
            var d, e, f, h, i, j, k, l, n, p, r, s, t, u, v = this;
            for (d = 0; d < v.length; d += 1)
                if ((e = g(v[d])) && (f = new c(b), G(v[d], f, b, a), f.visible)) {
                    if (e.textBaseline = f.baseline, e.textAlign = f.align, fa(v[d], e, f), i = null !== f.maxWidth ? ha(e, f) : f.text.toString().split("\n"), ga(v[d], e, f, i), h && (h.width = f.width, h.height = f.height), q(v[d], e, f, f.width, f.height), m(v[d], e, f), t = f.x, "left" === f.align ? f.respectAlign ? f.x += f.width / 2 : t -= f.width / 2 : "right" === f.align && (f.respectAlign ? f.x -= f.width / 2 : t += f.width / 2), f.radius)
                        for (l = pa(f.fontSize), null === f.letterSpacing && (f.letterSpacing = l / 500), k = 0; k < i.length; k += 1) {
                            for (e.save(), e.translate(f.x, f.y), j = i[k], f.flipArcText && (p = j.split(""), p.reverse(), j = p.join("")), n = j.length, e.rotate(-va * f.letterSpacing * (n - 1) / 2), s = 0; s < n; s += 1) r = j[s], 0 !== s && e.rotate(va * f.letterSpacing), e.save(), e.translate(0, -f.radius), f.flipArcText && e.scale(-1, -1), e.fillText(r, 0, 0), "transparent" !== f.fillStyle && (e.shadowColor = "transparent"), 0 !== f.strokeWidth && e.strokeText(r, 0, 0), e.restore();
                            f.radius -= l, f.letterSpacing += l / (1e3 * va), e.restore()
                        } else
                            for (k = 0; k < i.length; k += 1) j = i[k], u = f.y + k * f.height / i.length - (i.length - 1) * f.height / i.length / 2, e.shadowColor = f.shadowColor, e.fillText(j, t, u), "transparent" !== f.fillStyle && (e.shadowColor = "transparent"), 0 !== f.strokeWidth && e.strokeText(j, t, u);
                    u = 0, "top" === f.baseline ? u += f.height / 2 : "bottom" === f.baseline && (u -= f.height / 2), f._event && (e.beginPath(), e.rect(f.x - f.width / 2, f.y - f.height / 2 + u, f.width, f.height), Q(v[d], e, f), e.closePath()), o(e, f)
                }
            return Ea.propCache = f, v
        }, a.fn.measureText = function(a) {
            var b, d, e, f = this;
            return d = f.getLayer(a), (!d || d && !d._layer) && (d = new c(a)), b = g(f[0]), b && (fa(f[0], b, d), e = null !== d.maxWidth ? ha(b, d) : d.text.split("\n"), ga(f[0], b, d, e)), d
        }, a.fn.drawImage = function b(d) {
            function e(a, b, c, d, e) {
                null === d.width && null === d.sWidth && (d.width = d.sWidth = s.width), null === d.height && null === d.sHeight && (d.height = d.sHeight = s.height), e && (e.width = d.width, e.height = d.height), null !== d.sWidth && null !== d.sHeight && null !== d.sx && null !== d.sy ? (null === d.width && (d.width = d.sWidth), null === d.height && (d.height = d.sHeight), d.cropFromCenter && (d.sx += d.sWidth / 2, d.sy += d.sHeight / 2), d.sy - d.sHeight / 2 < 0 && (d.sy = d.sHeight / 2), d.sy + d.sHeight / 2 > s.height && (d.sy = s.height - d.sHeight / 2), d.sx - d.sWidth / 2 < 0 && (d.sx = d.sWidth / 2), d.sx + d.sWidth / 2 > s.width && (d.sx = s.width - d.sWidth / 2), q(a, b, d, d.width, d.height), m(a, b, d), b.drawImage(s, d.sx - d.sWidth / 2, d.sy - d.sHeight / 2, d.sWidth, d.sHeight, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height)) : (q(a, b, d, d.width, d.height), m(a, b, d), b.drawImage(s, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height)), b.beginPath(), b.rect(d.x - d.width / 2, d.y - d.height / 2, d.width, d.height), Q(a, b, d), b.closePath(), o(b, d), n(b, c, d)
            }

            function f(b, c, d, f, g) {
                return function() {
                    var h = a(b);
                    e(b, c, d, f, g), f.layer ? F(h, d, g, "load") : f.load && f.load.call(h[0], g), f.layer && (g._masks = d.transforms.masks.slice(0), f._next && h.drawLayers({
                        clear: !1,
                        resetFire: !0,
                        index: f._next
                    }))
                }
            }
            var h, i, j, k, l, p, s, t, u, v = this,
                w = Ea.imageCache;
            for (i = 0; i < v.length; i += 1) h = v[i], (j = g(v[i])) && (k = r(v[i]), l = new c(d), p = G(v[i], l, d, b), l.visible && (u = l.source, t = u.getContext, u.src || t ? s = u : u && (w[u] && w[u].complete ? s = w[u] : (s = new ka, u.match(/^data:/i) || (s.crossOrigin = l.crossOrigin), s.src = u, w[u] = s)), s && (s.complete || t ? f(h, j, k, l, p)() : (s.onload = f(h, j, k, l, p), s.src = s.src))));
            return v
        }, a.fn.createPattern = function(b) {
            function d() {
                j = e.createPattern(h, f.repeat), f.load && f.load.call(l[0], j)
            }
            var e, f, h, i, j, k, l = this;
            return e = g(l[0]), e ? (f = new c(b), k = f.source, ta(k) ? (h = a("<canvas />")[0], h.width = f.width,
                h.height = f.height, i = g(h), k.call(h, i), d()) : (i = k.getContext, k.src || i ? h = k : (h = new ka, k.match(/^data:/i) || (h.crossOrigin = f.crossOrigin), h.src = k), h.complete || i ? d() : (h.onload = d, h.src = h.src))) : j = null, j
        }, a.fn.createGradient = function(a) {
            var b, d, e, f, h, i, j, k, l, m, n = this,
                o = [];
            if (d = new c(a), b = g(n[0])) {
                for (d.x1 = d.x1 || 0, d.y1 = d.y1 || 0, d.x2 = d.x2 || 0, d.y2 = d.y2 || 0, e = null !== d.r1 && null !== d.r2 ? b.createRadialGradient(d.x1, d.y1, d.r1, d.x2, d.y2, d.r2) : b.createLinearGradient(d.x1, d.y1, d.x2, d.y2), j = 1; void 0 !== d["c" + j]; j += 1) void 0 !== d["s" + j] ? o.push(d["s" + j]) : o.push(null);
                for (f = o.length, null === o[0] && (o[0] = 0), null === o[f - 1] && (o[f - 1] = 1), j = 0; j < f; j += 1) {
                    if (null !== o[j]) {
                        for (l = 1, m = 0, h = o[j], k = j + 1; k < f; k += 1) {
                            if (null !== o[k]) {
                                i = o[k];
                                break
                            }
                            l += 1
                        }
                        h > i && (o[k] = o[j])
                    } else null === o[j] && (m += 1, o[j] = h + m * ((i - h) / l));
                    e.addColorStop(o[j], d["c" + (j + 1)])
                }
            } else e = null;
            return e
        }, a.fn.setPixels = function a(b) {
            var d, e, f, h, i, j, k, l, m, n, o = this;
            for (e = 0; e < o.length; e += 1)
                if (d = o[e], f = g(d), h = r(o[e]), f && (i = new c(b), G(d, i, b, a), q(o[e], f, i, i.width, i.height), null !== i.width && null !== i.height || (i.width = d.width, i.height = d.height, i.x = i.width / 2, i.y = i.height / 2), 0 !== i.width && 0 !== i.height)) {
                    if (k = f.getImageData((i.x - i.width / 2) * h.pixelRatio, (i.y - i.height / 2) * h.pixelRatio, i.width * h.pixelRatio, i.height * h.pixelRatio), l = k.data, n = l.length, i.each)
                        for (m = 0; m < n; m += 4) j = {
                            r: l[m],
                            g: l[m + 1],
                            b: l[m + 2],
                            a: l[m + 3]
                        }, i.each.call(d, j, i), l[m] = j.r, l[m + 1] = j.g, l[m + 2] = j.b, l[m + 3] = j.a;
                    f.putImageData(k, (i.x - i.width / 2) * h.pixelRatio, (i.y - i.height / 2) * h.pixelRatio), f.restore()
                }
            return o
        }, a.fn.getCanvasImage = function(a, b) {
            var c, d = this,
                e = null;
            return 0 !== d.length && (c = d[0], c.toDataURL && (void 0 === b && (b = 1), e = c.toDataURL("image/" + a, b))), e
        }, a.fn.detectPixelRatio = function(a) {
            var c, d, e, f, h, i, j, k, l, m = this;
            for (d = 0; d < m.length; d += 1) c = m[d], e = g(c), l = r(m[d]), l.scaled || (f = b.devicePixelRatio || 1, h = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, i = f / h, 1 !== i && (j = c.width, k = c.height, c.width = j * i, c.height = k * i, c.style.width = j + "px", c.style.height = k + "px", e.scale(i, i)), l.pixelRatio = i, l.scaled = !0, a && a.call(c, i));
            return m
        }, Ia.clearCache = function() {
            var a;
            for (a in Ea) Object.prototype.hasOwnProperty.call(Ea, a) && (Ea[a] = {})
        }, a.support.canvas = void 0 !== a("<canvas />")[0].getContext, qa(Ia, {
            defaults: ia,
            setGlobalProps: m,
            transformShape: q,
            detectEvents: Q,
            closePath: p,
            setCanvasFont: fa,
            measureText: ga
        }), a.jCanvas = Ia, a.jCanvasObject = c
});

/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() {
        try {
            return require("moment")
        } catch (t) {}
    }()) : "function" == typeof define && define.amd ? define(["require"], function(t) {
        return e(function() {
            try {
                return t("moment")
            } catch (t) {}
        }())
    }) : t.Chart = e(t.moment)
}(this, function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
        rgb2hsl: i,
        rgb2hsv: n,
        rgb2hwb: a,
        rgb2cmyk: o,
        rgb2keyword: s,
        rgb2xyz: l,
        rgb2lab: d,
        rgb2lch: function(t) {
            return x(d(t))
        },
        hsl2rgb: u,
        hsl2hsv: function(t) {
            var e = t[0],
                i = t[1] / 100,
                n = t[2] / 100;
            if (0 === n) return [0, 0, 0];
            return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
        },
        hsl2hwb: function(t) {
            return a(u(t))
        },
        hsl2cmyk: function(t) {
            return o(u(t))
        },
        hsl2keyword: function(t) {
            return s(u(t))
        },
        hsv2rgb: h,
        hsv2hsl: function(t) {
            var e, i, n = t[0],
                a = t[1] / 100,
                o = t[2] / 100;
            return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
        },
        hsv2hwb: function(t) {
            return a(h(t))
        },
        hsv2cmyk: function(t) {
            return o(h(t))
        },
        hsv2keyword: function(t) {
            return s(h(t))
        },
        hwb2rgb: c,
        hwb2hsl: function(t) {
            return i(c(t))
        },
        hwb2hsv: function(t) {
            return n(c(t))
        },
        hwb2cmyk: function(t) {
            return o(c(t))
        },
        hwb2keyword: function(t) {
            return s(c(t))
        },
        cmyk2rgb: f,
        cmyk2hsl: function(t) {
            return i(f(t))
        },
        cmyk2hsv: function(t) {
            return n(f(t))
        },
        cmyk2hwb: function(t) {
            return a(f(t))
        },
        cmyk2keyword: function(t) {
            return s(f(t))
        },
        keyword2rgb: w,
        keyword2hsl: function(t) {
            return i(w(t))
        },
        keyword2hsv: function(t) {
            return n(w(t))
        },
        keyword2hwb: function(t) {
            return a(w(t))
        },
        keyword2cmyk: function(t) {
            return o(w(t))
        },
        keyword2lab: function(t) {
            return d(w(t))
        },
        keyword2xyz: function(t) {
            return l(w(t))
        },
        xyz2rgb: p,
        xyz2lab: m,
        xyz2lch: function(t) {
            return x(m(t))
        },
        lab2xyz: v,
        lab2rgb: y,
        lab2lch: x,
        lch2lab: k,
        lch2xyz: function(t) {
            return v(k(t))
        },
        lch2rgb: function(t) {
            return y(k(t))
        }
    };

    function i(t) {
        var e, i, n = t[0] / 255,
            a = t[1] / 255,
            o = t[2] / 255,
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
    }

    function n(t) {
        var e, i, n = t[0],
            a = t[1],
            o = t[2],
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
    }

    function a(t) {
        var e = t[0],
            n = t[1],
            a = t[2];
        return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))]
    }

    function o(t) {
        var e, i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
    }

    function s(t) {
        return _[JSON.stringify(t)]
    }

    function l(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
    }

    function d(t) {
        var e = l(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
    }

    function u(t) {
        var e, i, n, a, o, r = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [o = 255 * l, o, o];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
        for (var d = 0; d < 3; d++)(n = r + 1 / 3 * -(d - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * o;
        return a
    }

    function h(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * n * (1 - i),
            s = 255 * n * (1 - i * o),
            l = 255 * n * (1 - i * (1 - o));
        n *= 255;
        switch (a) {
            case 0:
                return [n, l, r];
            case 1:
                return [s, n, r];
            case 2:
                return [r, n, l];
            case 3:
                return [r, s, n];
            case 4:
                return [l, r, n];
            case 5:
                return [n, r, s]
        }
    }

    function c(t) {
        var e, i, n, a, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            d = s + l;
        switch (d > 1 && (s /= d, l /= d), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
            default:
                case 6:
                case 0:
                r = i,
            g = a,
            b = s;
            break;
            case 1:
                    r = a,
                g = i,
                b = s;
                break;
            case 2:
                    r = s,
                g = i,
                b = a;
                break;
            case 3:
                    r = s,
                g = a,
                b = i;
                break;
            case 4:
                    r = a,
                g = s,
                b = i;
                break;
            case 5:
                    r = i,
                g = s,
                b = a
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function f(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
    }

    function p(t) {
        var e, i, n, a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }

    function m(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }

    function v(t) {
        var e, i, n, a, o = t[0],
            r = t[1],
            s = t[2];
        return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
    }

    function x(t) {
        var e, i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
    }

    function y(t) {
        return p(v(t))
    }

    function k(t) {
        var e, i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
    }

    function w(t) {
        return M[t]
    }
    var M = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        _ = {};
    for (var C in M) _[JSON.stringify(M[C])] = C;
    var S = function() {
        return new T
    };
    for (var P in e) {
        S[P + "Raw"] = function(t) {
            return function(i) {
                return "number" == typeof i && (i = Array.prototype.slice.call(arguments)), e[t](i)
            }
        }(P);
        var I = /(\w+)2(\w+)/.exec(P),
            A = I[1],
            D = I[2];
        (S[A] = S[A] || {})[D] = S[P] = function(t) {
            return function(i) {
                "number" == typeof i && (i = Array.prototype.slice.call(arguments));
                var n = e[t](i);
                if ("string" == typeof n || void 0 === n) return n;
                for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
                return n
            }
        }(P)
    }
    var T = function() {
        this.convs = {}
    };
    T.prototype.routeSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
    }, T.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, T.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
            var i = this.space,
                n = this.convs[i];
            e = S[i][t](n), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
        T.prototype[t] = function(e) {
            return this.routeSpace(t, arguments)
        }
    });
    var F = S,
        L = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        R = {
            getRgba: O,
            getHsla: z,
            getRgb: function(t) {
                var e = O(t);
                return e && e.slice(0, 3)
            },
            getHsl: function(t) {
                var e = z(t);
                return e && e.slice(0, 3)
            },
            getHwb: B,
            getAlpha: function(t) {
                var e = O(t);
                if (e) return e[3];
                if (e = z(t)) return e[3];
                if (e = B(t)) return e[3]
            },
            hexString: function(t, e) {
                var e = void 0 !== e && 3 === t.length ? e : t[3];
                return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (e >= 0 && e < 1 ? H(Math.round(255 * e)) : "")
            },
            rgbString: function(t, e) {
                if (e < 1 || t[3] && t[3] < 1) return N(t, e);
                return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: N,
            percentString: function(t, e) {
                if (e < 1 || t[3] && t[3] < 1) return W(t, e);
                var i = Math.round(t[0] / 255 * 100),
                    n = Math.round(t[1] / 255 * 100),
                    a = Math.round(t[2] / 255 * 100);
                return "rgb(" + i + "%, " + n + "%, " + a + "%)"
            },
            percentaString: W,
            hslString: function(t, e) {
                if (e < 1 || t[3] && t[3] < 1) return V(t, e);
                return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: V,
            hwbString: function(t, e) {
                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function(t) {
                return j[t.slice(0, 3)]
            }
        };

    function O(t) {
        if (t) {
            var e = [0, 0, 0],
                i = 1,
                n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = "";
            if (n) {
                a = (n = n[1])[3];
                for (var o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16);
                a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                a = n[2], n = n[1];
                for (o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);
                a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
                i = parseFloat(n[4])
            } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
                i = parseFloat(n[4])
            } else if (n = t.match(/(\w+)/)) {
                if ("transparent" == n[1]) return [0, 0, 0, 0];
                if (!(e = L[n[1]])) return
            }
            for (o = 0; o < e.length; o++) e[o] = E(e[o], 0, 255);
            return i = i || 0 == i ? E(i, 0, 1) : 1, e[3] = i, e
        }
    }

    function z(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function B(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function N(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function W(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function V(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function E(t, e, i) {
        return Math.min(Math.max(e, t), i)
    }

    function H(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var j = {};
    for (var q in L) j[L[q]] = q;
    var Y = function(t) {
        return t instanceof Y ? t : this instanceof Y ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = R.getRgba(t)) ? this.setValues("rgb", e) : (e = R.getHsla(t)) ? this.setValues("hsl", e) : (e = R.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new Y(t);
        var e
    };
    Y.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return R.hexString(this.values.rgb)
        },
        rgbString: function() {
            return R.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return R.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return R.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return R.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return R.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return R.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return R.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                var n = t[i] / 255;
                e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                i = t.luminosity();
            return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                i = (e[0] + t) % 360;
            return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var i = t,
                n = void 0 === e ? .5 : e,
                a = 2 * n - 1,
                o = this.alpha() - i.alpha(),
                r = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
                s = 1 - r;
            return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, i = new Y,
                n = this.values,
                a = i.values;
            for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
            return i
        }
    }, Y.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, Y.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, Y.prototype.getValues = function(t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
    }, Y.prototype.setValues = function(t, e) {
        var i, n, a = this.values,
            o = this.spaces,
            r = this.maxes,
            s = 1;
        if (this.valid = !0, "alpha" === t) s = e;
        else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
            s = e.a
        } else if (void 0 !== e[o[t][0]]) {
            var l = o[t];
            for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
            s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(n);
        for (var d in o) d !== t && (a[d] = F[t][d](a[t]));
        return !0
    }, Y.prototype.setSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
    }, Y.prototype.setChannel = function(t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
    }, "undefined" != typeof window && (window.Color = Y);
    var U, X = Y,
        K = {
            noop: function() {},
            uid: (U = 0, function() {
                return U++
            }),
            isNullOrUndef: function(t) {
                return null == t
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            },
            isObject: function(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            },
            isFinite: function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function(t, e) {
                return void 0 === t ? e : t
            },
            valueAtIndexOrDefault: function(t, e, i) {
                return K.valueOrDefault(K.isArray(t) ? t[e] : t, i)
            },
            callback: function(t, e, i) {
                if (t && "function" == typeof t.call) return t.apply(i, e)
            },
            each: function(t, e, i, n) {
                var a, o, r;
                if (K.isArray(t))
                    if (o = t.length, n)
                        for (a = o - 1; a >= 0; a--) e.call(i, t[a], a);
                    else
                        for (a = 0; a < o; a++) e.call(i, t[a], a);
                else if (K.isObject(t))
                    for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) e.call(i, t[r[a]], r[a])
            },
            arrayEquals: function(t, e) {
                var i, n, a, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (i = 0, n = t.length; i < n; ++i)
                    if (a = t[i], o = e[i], a instanceof Array && o instanceof Array) {
                        if (!K.arrayEquals(a, o)) return !1
                    } else if (a !== o) return !1;
                return !0
            },
            clone: function(t) {
                if (K.isArray(t)) return t.map(K.clone);
                if (K.isObject(t)) {
                    for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = K.clone(t[i[a]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, i, n) {
                var a = e[t],
                    o = i[t];
                K.isObject(a) && K.isObject(o) ? K.merge(a, o, n) : e[t] = K.clone(o)
            },
            _mergerIf: function(t, e, i) {
                var n = e[t],
                    a = i[t];
                K.isObject(n) && K.isObject(a) ? K.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = K.clone(a))
            },
            merge: function(t, e, i) {
                var n, a, o, r, s, l = K.isArray(e) ? e : [e],
                    d = l.length;
                if (!K.isObject(t)) return t;
                for (n = (i = i || {}).merger || K._merger, a = 0; a < d; ++a)
                    if (e = l[a], K.isObject(e))
                        for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) n(o[s], t, e, i);
                return t
            },
            mergeIf: function(t, e) {
                return K.merge(t, e, {
                    merger: K._mergerIf
                })
            },
            extend: function(t) {
                for (var e = function(e, i) {
                        t[i] = e
                    }, i = 1, n = arguments.length; i < n; ++i) K.each(arguments[i], e);
                return t
            },
            inherits: function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = K.inherits, t && K.extend(i.prototype, t), i.__super__ = e.prototype, i
            }
        },
        G = K;
    K.callCallback = K.callback, K.indexOf = function(t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
    }, K.getValueOrDefault = K.valueOrDefault, K.getValueAtIndexOrDefault = K.valueAtIndexOrDefault;
    var Z = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - Z.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * Z.easeInBounce(2 * t) : .5 * Z.easeOutBounce(2 * t - 1) + .5
            }
        },
        $ = {
            effects: Z
        };
    G.easingEffects = Z;
    var J = Math.PI,
        Q = J / 180,
        tt = 2 * J,
        et = J / 2,
        it = J / 4,
        nt = 2 * J / 3,
        at = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, i, n, a, o) {
                if (o) {
                    var r = Math.min(o, a / 2, n / 2),
                        s = e + r,
                        l = i + r,
                        d = e + n - r,
                        u = i + a - r;
                    t.moveTo(e, l), s < d && l < u ? (t.arc(s, l, r, -J, -et), t.arc(d, l, r, -et, 0), t.arc(d, u, r, 0, et), t.arc(s, u, r, et, J)) : s < d ? (t.moveTo(s, i), t.arc(d, l, r, -et, et), t.arc(s, l, r, et, J + et)) : l < u ? (t.arc(s, l, r, -J, 0), t.arc(s, u, r, 0, J)) : t.arc(s, l, r, -J, J), t.closePath(), t.moveTo(e, i)
                } else t.rect(e, i, n, a)
            },
            drawPoint: function(t, e, i, n, a, o) {
                var r, s, l, d, u, h = (o || 0) * Q;
                if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
                    if (!(isNaN(i) || i <= 0)) {
                        switch (t.beginPath(), e) {
                            default: t.arc(n, a, i, 0, tt),
                            t.closePath();
                            break;
                            case "triangle":
                                    t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += nt,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                h += nt,
                                t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i),
                                t.closePath();
                                break;
                            case "rectRounded":
                                    d = i - (u = .516 * i),
                                s = Math.cos(h + it) * d,
                                l = Math.sin(h + it) * d,
                                t.arc(n - s, a - l, u, h - J, h - et),
                                t.arc(n + l, a - s, u, h - et, h),
                                t.arc(n + s, a + l, u, h, h + et),
                                t.arc(n - l, a + s, u, h + et, h + J),
                                t.closePath();
                                break;
                            case "rect":
                                    if (!o) {
                                    d = Math.SQRT1_2 * i, t.rect(n - d, a - d, 2 * d, 2 * d);
                                    break
                                }h += it;
                            case "rectRot":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + l, a - s),
                                t.lineTo(n + s, a + l),
                                t.lineTo(n - l, a + s),
                                t.closePath();
                                break;
                            case "crossRot":
                                    h += it;
                            case "cross":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "star":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s),
                                h += it,
                                s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l),
                                t.moveTo(n + l, a - s),
                                t.lineTo(n - l, a + s);
                                break;
                            case "line":
                                    s = Math.cos(h) * i,
                                l = Math.sin(h) * i,
                                t.moveTo(n - s, a - l),
                                t.lineTo(n + s, a + l);
                                break;
                            case "dash":
                                    t.moveTo(n, a),
                                t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i)
                        }
                        t.fill(), t.stroke()
                    }
                } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
            },
            _isPointInArea: function(t, e) {
                return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, i, n) {
                var a = i.steppedLine;
                if (a) {
                    if ("middle" === a) {
                        var o = (e.x + i.x) / 2;
                        t.lineTo(o, n ? i.y : e.y), t.lineTo(o, n ? e.y : i.y)
                    } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                    t.lineTo(i.x, i.y)
                } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
            }
        },
        ot = at;
    G.clear = at.clear, G.drawRoundedRectangle = function(t) {
        t.beginPath(), at.roundedRect.apply(at, arguments)
    };
    var rt = {
        _set: function(t, e) {
            return G.merge(this[t] || (this[t] = {}), e)
        }
    };
    rt._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var st = rt,
        lt = G.valueOrDefault;
    var dt = {
            toLineHeight: function(t, e) {
                var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!i || "normal" === i[1]) return 1.2 * e;
                switch (t = +i[2], i[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function(t) {
                var e, i, n, a;
                return G.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                    top: e,
                    right: i,
                    bottom: n,
                    left: a,
                    height: e + n,
                    width: a + i
                }
            },
            _parseFont: function(t) {
                var e = st.global,
                    i = lt(t.fontSize, e.defaultFontSize),
                    n = {
                        family: lt(t.fontFamily, e.defaultFontFamily),
                        lineHeight: G.options.toLineHeight(lt(t.lineHeight, e.defaultLineHeight), i),
                        size: i,
                        style: lt(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return n.string = function(t) {
                    return !t || G.isNullOrUndef(t.size) || G.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(n), n
            },
            resolve: function(t, e, i) {
                var n, a, o;
                for (n = 0, a = t.length; n < a; ++n)
                    if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && G.isArray(o) && (o = o[i]), void 0 !== o)) return o
            }
        },
        ut = G,
        ht = $,
        ct = ot,
        ft = dt;
    ut.easing = ht, ut.canvas = ct, ut.options = ft;
    var gt = function(t) {
        ut.extend(this, t), this.initialize.apply(this, arguments)
    };
    ut.extend(gt.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = ut.clone(t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                i = e._model,
                n = e._start,
                a = e._view;
            return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function(t, e, i, n) {
                var a, o, r, s, l, d, u, h, c, f = Object.keys(i);
                for (a = 0, o = f.length; a < o; ++a)
                    if (d = i[r = f[a]], e.hasOwnProperty(r) || (e[r] = d), (s = e[r]) !== d && "_" !== r[0]) {
                        if (t.hasOwnProperty(r) || (t[r] = s), (u = typeof d) == typeof(l = t[r]))
                            if ("string" === u) {
                                if ((h = X(l)).valid && (c = X(d)).valid) {
                                    e[r] = c.mix(h, n).rgbString();
                                    continue
                                }
                            } else if (ut.isFinite(l) && ut.isFinite(d)) {
                            e[r] = l + (d - l) * n;
                            continue
                        }
                        e[r] = d
                    }
            }(n, a, i, t), e) : (e._view = i, e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return ut.isNumber(this._model.x) && ut.isNumber(this._model.y)
        }
    }), gt.extend = ut.inherits;
    var pt = gt,
        mt = pt.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        vt = mt;
    Object.defineProperty(mt.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(mt.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), st._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: ut.noop,
            onComplete: ut.noop
        }
    });
    var bt = {
            animations: [],
            request: null,
            addAnimation: function(t, e, i, n) {
                var a, o, r = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                    if (r[a].chart === t) return void(r[a] = e);
                r.push(e), 1 === r.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = ut.findIndex(this.animations, function(e) {
                    return e.chart === t
                }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = ut.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, i, n, a = this.animations, o = 0; o < a.length;) e = (t = a[o]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(o, 1)) : ++o
            }
        },
        xt = ut.options.resolve,
        yt = ["push", "pop", "shift", "splice", "unshift"];

    function kt(t, e) {
        var i = t._chartjs;
        if (i) {
            var n = i.listeners,
                a = n.indexOf(e); - 1 !== a && n.splice(a, 1), n.length > 0 || (yt.forEach(function(e) {
                delete t[e]
            }), delete t._chartjs)
        }
    }
    var wt = function(t, e) {
        this.initialize(t, e)
    };
    ut.extend(wt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        initialize: function(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements()
        },
        updateIndex: function(t) {
            this.index = t
        },
        linkScales: function() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function(t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function() {
            this.update(!0)
        },
        destroy: function() {
            this._data && kt(this._data, this)
        },
        createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            })
        },
        createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            })
        },
        addElements: function() {
            var t, e, i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;
            for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var t, e, i = this,
                n = i.getDataset(),
                a = n.data || (n.data = []);
            i._data !== a && (i._data && kt(i._data, i), a && Object.isExtensible(a) && (e = i, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }), yt.forEach(function(e) {
                var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    n = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            a = n.apply(this, e);
                        return ut.each(t._chartjs.listeners, function(t) {
                            "function" == typeof t[i] && t[i].apply(t, e)
                        }), a
                    }
                })
            }))), i._data = a), i.resyncElements()
        },
        update: ut.noop,
        transition: function(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
        },
        removeHoverStyle: function(t) {
            ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                o = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = xt([n.hoverBackgroundColor, e.hoverBackgroundColor, o(a.backgroundColor)], void 0, i), a.borderColor = xt([n.hoverBorderColor, e.hoverBorderColor, o(a.borderColor)], void 0, i), a.borderWidth = xt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i)
        },
        resyncElements: function() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
        },
        insertElements: function(t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function() {
            this.getMeta().data.pop()
        },
        onDataShift: function() {
            this.getMeta().data.shift()
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length)
        }
    }), wt.extend = ut.inherits;
    var Mt = wt;
    st._set("global", {
        elements: {
            arc: {
                backgroundColor: st.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var _t = pt.extend({
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var i = this._view;
                if (i) {
                    for (var n = ut.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) s += 2 * Math.PI;
                    for (; a > s;) a -= 2 * Math.PI;
                    for (; a < r;) a += 2 * Math.PI;
                    var l = a >= r && a <= s,
                        d = o >= i.innerRadius && o <= i.outerRadius;
                    return l && d
                }
                return !1
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    i = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            getArea: function() {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * i,
                    y: t.y + Math.sin(e) * i
                }
            },
            draw: function() {
                var t, e = this._chart.ctx,
                    i = this._view,
                    n = i.startAngle,
                    a = i.endAngle,
                    o = "inner" === i.borderAlign ? .33 : 0;
                e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - o, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = o / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > o ? (t = o / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - o, a + t, n - t, !0)) : e.arc(i.x, i.y, o, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore()
            }
        }),
        Ct = ut.valueOrDefault,
        St = st.global.defaultColor;
    st._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: St,
                borderWidth: 3,
                borderColor: St,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var Pt = pt.extend({
            draw: function() {
                var t, e, i, n, a = this._view,
                    o = this._chart.ctx,
                    r = a.spanGaps,
                    s = this._children.slice(),
                    l = st.global,
                    d = l.elements.line,
                    u = -1;
                for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = a.borderCapStyle || d.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || d.borderDash), o.lineDashOffset = Ct(a.borderDashOffset, d.borderDashOffset), o.lineJoin = a.borderJoinStyle || d.borderJoinStyle, o.lineWidth = Ct(a.borderWidth, d.borderWidth), o.strokeStyle = a.borderColor || l.defaultColor, o.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = ut.previousItem(s, t), n = e._view, 0 === t ? n.skip || (o.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? o.moveTo(n.x, n.y) : ut.canvas.lineTo(o, i._view, e._view), u = t));
                o.stroke(), o.restore()
            }
        }),
        It = ut.valueOrDefault,
        At = st.global.defaultColor;

    function Dt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    st._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: At,
                borderColor: At,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var Tt = pt.extend({
            inRange: function(t, e) {
                var i = this._view;
                return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
            },
            inLabelRange: Dt,
            inXRange: Dt,
            inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            },
            getCenterPoint: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function(t) {
                var e = this._view,
                    i = this._chart.ctx,
                    n = e.pointStyle,
                    a = e.rotation,
                    o = e.radius,
                    r = e.x,
                    s = e.y,
                    l = st.global,
                    d = l.defaultColor;
                e.skip || (void 0 === t || ut.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || d, i.lineWidth = It(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || d, ut.canvas.drawPoint(i, n, o, r, s, a))
            }
        }),
        Ft = st.global.defaultColor;

    function Lt(t) {
        return t && void 0 !== t.width
    }

    function Rt(t) {
        var e, i, n, a, o;
        return Lt(t) ? (o = t.width / 2, e = t.x - o, i = t.x + o, n = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - o, a = t.y + o), {
            left: e,
            top: n,
            right: i,
            bottom: a
        }
    }

    function Ot(t, e, i) {
        return t === e ? i : t === i ? e : t
    }

    function zt(t, e, i) {
        var n, a, o, r, s = t.borderWidth,
            l = function(t) {
                var e = t.borderSkipped,
                    i = {};
                return e ? (t.horizontal ? t.base > t.x && (e = Ot(e, "left", "right")) : t.base < t.y && (e = Ot(e, "bottom", "top")), i[e] = !0, i) : i
            }(t);
        return ut.isObject(s) ? (n = +s.top || 0, a = +s.right || 0, o = +s.bottom || 0, r = +s.left || 0) : n = a = o = r = +s || 0, {
            t: l.top || n < 0 ? 0 : n > i ? i : n,
            r: l.right || a < 0 ? 0 : a > e ? e : a,
            b: l.bottom || o < 0 ? 0 : o > i ? i : o,
            l: l.left || r < 0 ? 0 : r > e ? e : r
        }
    }

    function Bt(t, e, i) {
        var n = null === e,
            a = null === i,
            o = !(!t || n && a) && Rt(t);
        return o && (n || e >= o.left && e <= o.right) && (a || i >= o.top && i <= o.bottom)
    }
    st._set("global", {
        elements: {
            rectangle: {
                backgroundColor: Ft,
                borderColor: Ft,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var Nt = pt.extend({
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view,
                    i = function(t) {
                        var e = Rt(t),
                            i = e.right - e.left,
                            n = e.bottom - e.top,
                            a = zt(t, i / 2, n / 2);
                        return {
                            outer: {
                                x: e.left,
                                y: e.top,
                                w: i,
                                h: n
                            },
                            inner: {
                                x: e.left + a.l,
                                y: e.top + a.t,
                                w: i - a.l - a.r,
                                h: n - a.t - a.b
                            }
                        }
                    }(e),
                    n = i.outer,
                    a = i.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === a.w && n.h === a.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return Bt(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var i = this._view;
                return Lt(i) ? Bt(i, t, null) : Bt(i, null, e)
            },
            inXRange: function(t) {
                return Bt(this._view, t, null)
            },
            inYRange: function(t) {
                return Bt(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, i = this._view;
                return Lt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return Lt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        Wt = {},
        Vt = _t,
        Et = Pt,
        Ht = Tt,
        jt = Nt;
    Wt.Arc = Vt, Wt.Line = Et, Wt.Point = Ht, Wt.Rectangle = jt;
    var qt = ut.options.resolve;
    st._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    });
    var Yt = Mt.extend({
            dataElementType: Wt.Rectangle,
            initialize: function() {
                var t;
                Mt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
            },
            update: function(t) {
                var e, i, n = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
            },
            updateElement: function(t, e, i) {
                var n = this,
                    a = n.getMeta(),
                    o = n.getDataset(),
                    r = n._resolveElementOptions(t, e);
                t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                    backgroundColor: r.backgroundColor,
                    borderColor: r.borderColor,
                    borderSkipped: r.borderSkipped,
                    borderWidth: r.borderWidth,
                    datasetLabel: o.label,
                    label: n.chart.data.labels[e]
                }, n._updateElementGeometry(t, e, i), t.pivot()
            },
            _updateElementGeometry: function(t, e, i) {
                var n = this,
                    a = t._model,
                    o = n._getValueScale(),
                    r = o.getBasePixel(),
                    s = o.isHorizontal(),
                    l = n._ruler || n.getRuler(),
                    d = n.calculateBarValuePixels(n.index, e),
                    u = n.calculateBarIndexPixels(n.index, e, l);
                a.horizontal = s, a.base = i ? r : d.base, a.x = s ? i ? r : d.head : u.center, a.y = s ? u.center : i ? r : d.head, a.height = s ? u.size : void 0, a.width = s ? void 0 : u.size
            },
            _getStacks: function(t) {
                var e, i, n = this.chart,
                    a = this._getIndexScale().options.stacked,
                    o = void 0 === t ? n.data.datasets.length : t + 1,
                    r = [];
                for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                return r
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var i = this._getStacks(t),
                    n = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === n ? i.length - 1 : n
            },
            getRuler: function() {
                var t, e, i = this._getIndexScale(),
                    n = this.getStackCount(),
                    a = this.index,
                    o = i.isHorizontal(),
                    r = o ? i.left : i.top,
                    s = r + (o ? i.width : i.height),
                    l = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
                return {
                    min: ut.isNullOrUndef(i.options.barThickness) ? function(t, e) {
                        var i, n, a, o, r = t.isHorizontal() ? t.width : t.height,
                            s = t.getTicks();
                        for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, Math.abs(e[a] - e[a - 1]));
                        for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
                        return r
                    }(i, l) : -1,
                    pixels: l,
                    start: r,
                    end: s,
                    stackCount: n,
                    scale: i
                }
            },
            calculateBarValuePixels: function(t, e) {
                var i, n, a, o, r, s, l = this.chart,
                    d = this.getMeta(),
                    u = this._getValueScale(),
                    h = u.isHorizontal(),
                    c = l.data.datasets,
                    f = +u.getRightValue(c[t].data[e]),
                    g = u.options.minBarLength,
                    p = u.options.stacked,
                    m = d.stack,
                    v = 0;
                if (p || void 0 === p && void 0 !== m)
                    for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === m && n.controller._getValueScaleId() === u.id && l.isDatasetVisible(i) && (a = +u.getRightValue(c[i].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
                return o = u.getPixelForValue(v), s = (r = u.getPixelForValue(v + f)) - o, void 0 !== g && Math.abs(s) < g && (s = g, r = f >= 0 && !h || f < 0 && h ? o - g : o + g), {
                    size: s,
                    base: o,
                    head: r,
                    center: r + s / 2
                }
            },
            calculateBarIndexPixels: function(t, e, i) {
                var n = i.scale.options,
                    a = "flex" === n.barThickness ? function(t, e, i) {
                        var n, a = e.pixels,
                            o = a[t],
                            r = t > 0 ? a[t - 1] : null,
                            s = t < a.length - 1 ? a[t + 1] : null,
                            l = i.categoryPercentage;
                        return null === r && (r = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - r), n = o - (o - Math.min(r, s)) / 2 * l, {
                            chunk: Math.abs(s - r) / 2 * l / e.stackCount,
                            ratio: i.barPercentage,
                            start: n
                        }
                    }(e, i, n) : function(t, e, i) {
                        var n, a, o = i.barThickness,
                            r = e.stackCount,
                            s = e.pixels[t];
                        return ut.isNullOrUndef(o) ? (n = e.min * i.categoryPercentage, a = i.barPercentage) : (n = o * r, a = 1), {
                            chunk: n / r,
                            ratio: a,
                            start: s - n / 2
                        }
                    }(e, i, n),
                    o = this.getStackIndex(t, this.getMeta().stack),
                    r = a.start + a.chunk * o + a.chunk / 2,
                    s = Math.min(ut.valueOrDefault(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
                return {
                    base: r - s / 2,
                    head: r + s / 2,
                    center: r,
                    size: s
                }
            },
            draw: function() {
                var t = this.chart,
                    e = this._getValueScale(),
                    i = this.getMeta().data,
                    n = this.getDataset(),
                    a = i.length,
                    o = 0;
                for (ut.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(n.data[o])) || i[o].draw();
                ut.canvas.unclipArea(t.ctx)
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, o = this.chart,
                    r = o.data.datasets[this.index],
                    s = t.custom || {},
                    l = o.options.elements.rectangle,
                    d = {},
                    u = {
                        chart: o,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: this.index
                    },
                    h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
                for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = qt([s[a], r[a], l[a]], u, e);
                return d
            }
        }),
        Ut = ut.valueOrDefault,
        Xt = ut.options.resolve;
    st._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "",
                        n = e.datasets[t.datasetIndex].data[t.index];
                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                }
            }
        }
    });
    var Kt = Mt.extend({
            dataElementType: Wt.Point,
            update: function(t) {
                var e = this,
                    i = e.getMeta().data;
                ut.each(i, function(i, n) {
                    e.updateElement(i, n, t)
                })
            },
            updateElement: function(t, e, i) {
                var n = this,
                    a = n.getMeta(),
                    o = t.custom || {},
                    r = n.getScaleForId(a.xAxisID),
                    s = n.getScaleForId(a.yAxisID),
                    l = n._resolveElementOptions(t, e),
                    d = n.getDataset().data[e],
                    u = n.index,
                    h = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof d ? d : NaN, e, u),
                    c = i ? s.getBasePixel() : s.getPixelForValue(d, e, u);
                t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: i ? 0 : l.radius,
                    skip: o.skip || isNaN(h) || isNaN(c),
                    x: h,
                    y: c
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = ut.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Ut(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Ut(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Ut(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
            },
            _resolveElementOptions: function(t, e) {
                var i, n, a, o = this.chart,
                    r = o.data.datasets[this.index],
                    s = t.custom || {},
                    l = o.options.elements.point,
                    d = r.data[e],
                    u = {},
                    h = {
                        chart: o,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: this.index
                    },
                    c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                for (i = 0, n = c.length; i < n; ++i) u[a = c[i]] = Xt([s[a], r[a], l[a]], h, e);
                return u.radius = Xt([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e), u
            }
        }),
        Gt = ut.options.resolve,
        Zt = ut.valueOrDefault;
    st._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
                        var a = t.getDatasetMeta(0),
                            o = e.datasets[0],
                            r = a.data[n],
                            s = r && r.custom || {},
                            l = t.options.elements.arc;
                        return {
                            text: i,
                            fillStyle: Gt([s.backgroundColor, o.backgroundColor, l.backgroundColor], void 0, n),
                            strokeStyle: Gt([s.borderColor, o.borderColor, l.borderColor], void 0, n),
                            lineWidth: Gt([s.borderWidth, o.borderWidth, l.borderWidth], void 0, n),
                            hidden: isNaN(o.data[n]) || a.data[n].hidden,
                            index: n
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, o = e.index,
                    r = this.chart;
                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                r.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var i = e.labels[t.index],
                        n = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return ut.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                }
            }
        }
    });
    var $t = Mt.extend({
        dataElementType: Wt.Arc,
        linkScales: ut.noop,
        getRingIndex: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
        },
        update: function(t) {
            var e, i, n = this,
                a = n.chart,
                o = a.chartArea,
                r = a.options,
                s = o.right - o.left,
                l = o.bottom - o.top,
                d = Math.min(s, l),
                u = {
                    x: 0,
                    y: 0
                },
                h = n.getMeta(),
                c = h.data,
                f = r.cutoutPercentage,
                g = r.circumference,
                p = n._getRingWeight(n.index);
            if (g < 2 * Math.PI) {
                var m = r.rotation % (2 * Math.PI),
                    v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
                    b = {
                        x: Math.cos(m),
                        y: Math.sin(m)
                    },
                    x = {
                        x: Math.cos(v),
                        y: Math.sin(v)
                    },
                    y = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v,
                    k = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                    w = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
                    M = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                    _ = f / 100,
                    C = {
                        x: w ? -1 : Math.min(b.x * (b.x < 0 ? 1 : _), x.x * (x.x < 0 ? 1 : _)),
                        y: M ? -1 : Math.min(b.y * (b.y < 0 ? 1 : _), x.y * (x.y < 0 ? 1 : _))
                    },
                    S = {
                        x: y ? 1 : Math.max(b.x * (b.x > 0 ? 1 : _), x.x * (x.x > 0 ? 1 : _)),
                        y: k ? 1 : Math.max(b.y * (b.y > 0 ? 1 : _), x.y * (x.y > 0 ? 1 : _))
                    },
                    P = {
                        width: .5 * (S.x - C.x),
                        height: .5 * (S.y - C.y)
                    };
                d = Math.min(s / P.width, l / P.height), u = {
                    x: -.5 * (S.x + C.x),
                    y: -.5 * (S.y + C.y)
                }
            }
            for (e = 0, i = c.length; e < i; ++e) c[e]._options = n._resolveElementOptions(c[e], e);
            for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0), e = 0, i = c.length; e < i; ++e) n.updateElement(c[e], e, t)
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = n.chart,
                o = a.chartArea,
                r = a.options,
                s = r.animation,
                l = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                u = r.rotation,
                h = r.rotation,
                c = n.getDataset(),
                f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (r.circumference / (2 * Math.PI)),
                g = i && s.animateScale ? 0 : n.innerRadius,
                p = i && s.animateScale ? 0 : n.outerRadius,
                m = t._options || {};
            ut.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + a.offsetX,
                    y: d + a.offsetY,
                    startAngle: u,
                    endAngle: h,
                    circumference: f,
                    outerRadius: p,
                    innerRadius: g,
                    label: ut.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                }
            });
            var v = t._model;
            i && s.animateRotate || (v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
        },
        calculateTotal: function() {
            var t, e = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return ut.each(i.data, function(i, a) {
                t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t))
            }), n
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, i, n, a, o, r, s, l, d = 0,
                u = this.chart;
            if (!t)
                for (e = 0, i = u.data.datasets.length; e < i; ++e)
                    if (u.isDatasetVisible(e)) {
                        t = (n = u.getDatasetMeta(e)).data, e !== this.index && (o = n.controller);
                        break
                    }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e) a = t[e], "inner" !== (r = o ? o._resolveElementOptions(a, e) : a._options).borderAlign && (s = r.borderWidth, d = (l = r.hoverBorderWidth) > (d = s > d ? s : d) ? l : d);
            return d
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Zt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Zt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Zt(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, o = this.chart,
                r = this.getDataset(),
                s = t.custom || {},
                l = o.options.elements.arc,
                d = {},
                u = {
                    chart: o,
                    dataIndex: e,
                    dataset: r,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = Gt([s[a], r[a], l[a]], u, e);
            return d
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        },
        _getRingWeight: function(t) {
            return Math.max(Zt(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    st._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    });
    var Jt = Yt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        Qt = ut.valueOrDefault,
        te = ut.options.resolve,
        ee = ut.canvas._isPointInArea;

    function ie(t, e) {
        return Qt(t.showLine, e.showLines)
    }
    st._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var ne = Mt.extend({
            datasetElementType: Wt.Line,
            dataElementType: Wt.Point,
            update: function(t) {
                var e, i, n = this,
                    a = n.getMeta(),
                    o = a.dataset,
                    r = a.data || [],
                    s = n.getScaleForId(a.yAxisID),
                    l = n.getDataset(),
                    d = ie(l, n.chart.options);
                for (d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._model = n._resolveLineOptions(o), o.pivot()), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);
                for (d && 0 !== o._model.tension && n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
            },
            updateElement: function(t, e, i) {
                var n, a, o = this,
                    r = o.getMeta(),
                    s = t.custom || {},
                    l = o.getDataset(),
                    d = o.index,
                    u = l.data[e],
                    h = o.getScaleForId(r.yAxisID),
                    c = o.getScaleForId(r.xAxisID),
                    f = r.dataset._model,
                    g = o._resolvePointOptions(t, e);
                n = c.getPixelForValue("object" == typeof u ? u : NaN, e, d), a = i ? h.getBasePixel() : o.calculatePointY(u, e, d), t._xScale = c, t._yScale = h, t._options = g, t._datasetIndex = d, t._index = e, t._model = {
                    x: n,
                    y: a,
                    skip: s.skip || isNaN(n) || isNaN(a),
                    radius: g.radius,
                    pointStyle: g.pointStyle,
                    rotation: g.rotation,
                    backgroundColor: g.backgroundColor,
                    borderColor: g.borderColor,
                    borderWidth: g.borderWidth,
                    tension: Qt(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: g.hitRadius
                }
            },
            _resolvePointOptions: function(t, e) {
                var i, n, a, o = this.chart,
                    r = o.data.datasets[this.index],
                    s = t.custom || {},
                    l = o.options.elements.point,
                    d = {},
                    u = {
                        chart: o,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: this.index
                    },
                    h = {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    c = Object.keys(h);
                for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = te([s[a], r[h[a]], r[a], l[a]], u, e);
                return d
            },
            _resolveLineOptions: function(t) {
                var e, i, n, a = this.chart,
                    o = a.data.datasets[this.index],
                    r = t.custom || {},
                    s = a.options,
                    l = s.elements.line,
                    d = {},
                    u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
                for (e = 0, i = u.length; e < i; ++e) d[n = u[e]] = te([r[n], o[n], l[n]]);
                return d.spanGaps = Qt(o.spanGaps, s.spanGaps), d.tension = Qt(o.lineTension, l.tension), d.steppedLine = te([r.steppedLine, o.steppedLine, l.stepped]), d
            },
            calculatePointY: function(t, e, i) {
                var n, a, o, r = this.chart,
                    s = this.getMeta(),
                    l = this.getScaleForId(s.yAxisID),
                    d = 0,
                    u = 0;
                if (l.options.stacked) {
                    for (n = 0; n < i; n++)
                        if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                            var h = Number(l.getRightValue(a.data[e]));
                            h < 0 ? u += h || 0 : d += h || 0
                        }
                    var c = Number(l.getRightValue(t));
                    return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c)
                }
                return l.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, i, n, a = this.chart,
                    o = this.getMeta(),
                    r = o.dataset._model,
                    s = a.chartArea,
                    l = o.data || [];

                function d(t, e, i) {
                    return Math.max(Math.min(t, i), e)
                }
                if (r.spanGaps && (l = l.filter(function(t) {
                        return !t._model.skip
                    })), "monotone" === r.cubicInterpolationMode) ut.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = ut.splineCurve(ut.previousItem(l, t)._model, i, ut.nextItem(l, t)._model, r.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, ee(i, s) && (t > 0 && ee(l[t - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && ee(l[t + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)))
            },
            draw: function() {
                var t, e = this.chart,
                    i = this.getMeta(),
                    n = i.data || [],
                    a = e.chartArea,
                    o = n.length,
                    r = 0;
                for (ie(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, {
                        left: a.left,
                        right: a.right,
                        top: a.top - t,
                        bottom: a.bottom + t
                    }), i.dataset.draw(), ut.canvas.unclipArea(e.ctx)); r < o; ++r) n[r].draw(a)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    i = t._options,
                    n = ut.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Qt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Qt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Qt(i.hoverBorderWidth, i.borderWidth), e.radius = Qt(i.hoverRadius, i.radius)
            }
        }),
        ae = ut.options.resolve;
    st._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
                n = i.datasets,
                a = i.labels;
            if (n.length)
                for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
                        var a = t.getDatasetMeta(0),
                            o = e.datasets[0],
                            r = a.data[n].custom || {},
                            s = t.options.elements.arc;
                        return {
                            text: i,
                            fillStyle: ae([r.backgroundColor, o.backgroundColor, s.backgroundColor], void 0, n),
                            strokeStyle: ae([r.borderColor, o.borderColor, s.borderColor], void 0, n),
                            lineWidth: ae([r.borderWidth, o.borderWidth, s.borderWidth], void 0, n),
                            hidden: isNaN(o.data[n]) || a.data[n].hidden,
                            index: n
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var i, n, a, o = e.index,
                    r = this.chart;
                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                r.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var oe = Mt.extend({
        dataElementType: Wt.Arc,
        linkScales: ut.noop,
        update: function(t) {
            var e, i, n, a = this,
                o = a.getDataset(),
                r = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                d = a._angles = [],
                u = r.data;
            for (a._updateRadius(), r.count = a.countVisibleElements(), e = 0, i = o.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), d[e] = n, s += n;
            for (e = 0, i = u.length; e < i; ++e) u[e]._options = a._resolveElementOptions(u[e], e), a.updateElement(u[e], e, t)
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                i = e.chartArea,
                n = e.options,
                a = Math.min(i.right - i.left, i.bottom - i.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = n.chart,
                o = n.getDataset(),
                r = a.options,
                s = r.animation,
                l = a.scale,
                d = a.data.labels,
                u = l.xCenter,
                h = l.yCenter,
                c = r.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                g = n._starts[e],
                p = g + (t.hidden ? 0 : n._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                v = t._options || {};
            ut.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: u,
                    y: h,
                    innerRadius: 0,
                    outerRadius: i ? m : f,
                    startAngle: i && s.animateRotate ? c : g,
                    endAngle: i && s.animateRotate ? c : p,
                    label: ut.valueAtIndexOrDefault(d, e, d[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var t = this.getDataset(),
                e = this.getMeta(),
                i = 0;
            return ut.each(e.data, function(e, n) {
                isNaN(t.data[n]) || e.hidden || i++
            }), i
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor,
                a = ut.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth)
        },
        _resolveElementOptions: function(t, e) {
            var i, n, a, o = this.chart,
                r = this.getDataset(),
                s = t.custom || {},
                l = o.options.elements.arc,
                d = {},
                u = {
                    chart: o,
                    dataIndex: e,
                    dataset: r,
                    datasetIndex: this.index
                },
                h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
            for (i = 0, n = h.length; i < n; ++i) d[a = h[i]] = ae([s[a], r[a], l[a]], u, e);
            return d
        },
        _computeAngle: function(t) {
            var e = this,
                i = this.getMeta().count,
                n = e.getDataset(),
                a = e.getMeta();
            if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
            var o = {
                chart: e.chart,
                dataIndex: t,
                dataset: n,
                datasetIndex: e.index
            };
            return ae([e.chart.options.elements.arc.angle, 2 * Math.PI / i], o, t)
        }
    });
    st._set("pie", ut.clone(st.doughnut)), st._set("pie", {
        cutoutPercentage: 0
    });
    var re = $t,
        se = ut.valueOrDefault,
        le = ut.options.resolve;
    st._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    });
    var de = Mt.extend({
        datasetElementType: Wt.Line,
        dataElementType: Wt.Point,
        linkScales: ut.noop,
        update: function(t) {
            var e, i, n = this,
                a = n.getMeta(),
                o = a.dataset,
                r = a.data || [],
                s = n.chart.scale,
                l = n.getDataset();
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._loop = !0, o._model = n._resolveLineOptions(o), o.pivot(), e = 0, i = r.length; e < i; ++e) n.updateElement(r[e], e, t);
            for (n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) r[e].pivot()
        },
        updateElement: function(t, e, i) {
            var n = this,
                a = t.custom || {},
                o = n.getDataset(),
                r = n.chart.scale,
                s = r.getPointPositionForValue(e, o.data[e]),
                l = n._resolvePointOptions(t, e),
                d = n.getMeta().dataset._model,
                u = i ? r.xCenter : s.x,
                h = i ? r.yCenter : s.y;
            t._scale = r, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
                x: u,
                y: h,
                skip: a.skip || isNaN(u) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: se(a.tension, d ? d.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolvePointOptions: function(t, e) {
            var i, n, a, o = this.chart,
                r = o.data.datasets[this.index],
                s = t.custom || {},
                l = o.options.elements.point,
                d = {},
                u = {
                    chart: o,
                    dataIndex: e,
                    dataset: r,
                    datasetIndex: this.index
                },
                h = {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                c = Object.keys(h);
            for (i = 0, n = c.length; i < n; ++i) d[a = c[i]] = le([s[a], r[h[a]], r[a], l[a]], u, e);
            return d
        },
        _resolveLineOptions: function(t) {
            var e, i, n, a = this.chart,
                o = a.data.datasets[this.index],
                r = t.custom || {},
                s = a.options.elements.line,
                l = {},
                d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
            for (e = 0, i = d.length; e < i; ++e) l[n = d[e]] = le([r[n], o[n], s[n]]);
            return l.tension = se(o.lineTension, s.tension), l
        },
        updateBezierControlPoints: function() {
            var t, e, i, n, a = this.getMeta(),
                o = this.chart.chartArea,
                r = a.data || [];

            function s(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }
            for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = ut.splineCurve(ut.previousItem(r, t, !0)._model, i, ut.nextItem(r, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, o.left, o.right), i.controlPointPreviousY = s(n.previous.y, o.top, o.bottom), i.controlPointNextX = s(n.next.x, o.left, o.right), i.controlPointNextY = s(n.next.y, o.top, o.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                i = t._options,
                n = ut.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = se(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = se(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = se(i.hoverBorderWidth, i.borderWidth), e.radius = se(i.hoverRadius, i.radius)
        }
    });
    st._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    });
    var ue = {
        bar: Yt,
        bubble: Kt,
        doughnut: $t,
        horizontalBar: Jt,
        line: ne,
        polarArea: oe,
        pie: re,
        radar: de,
        scatter: ne
    };

    function he(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : ut.getRelativePosition(t, e)
    }

    function ce(t, e) {
        var i, n, a, o, r;
        for (n = 0, o = t.data.datasets.length; n < o; ++n)
            if (t.isDatasetVisible(n))
                for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                    var s = i.data[a];
                    s._view.skip || e(s)
                }
    }

    function fe(t, e) {
        var i = [];
        return ce(t, function(t) {
            t.inRange(e.x, e.y) && i.push(t)
        }), i
    }

    function ge(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY,
            o = [];
        return ce(t, function(t) {
            if (!i || t.inRange(e.x, e.y)) {
                var r = t.getCenterPoint(),
                    s = n(e, r);
                s < a ? (o = [t], a = s) : s === a && o.push(t)
            }
        }), o
    }

    function pe(t) {
        var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
        return function(t, n) {
            var a = e ? Math.abs(t.x - n.x) : 0,
                o = i ? Math.abs(t.y - n.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2))
        }
    }

    function me(t, e, i) {
        var n = he(e, t);
        i.axis = i.axis || "x";
        var a = pe(i.axis),
            o = i.intersect ? fe(t, n) : ge(t, n, !1, a),
            r = [];
        return o.length ? (t.data.datasets.forEach(function(e, i) {
            if (t.isDatasetVisible(i)) {
                var n = t.getDatasetMeta(i).data[o[0]._index];
                n && !n._view.skip && r.push(n)
            }
        }), r) : []
    }
    var ve = {
        modes: {
            single: function(t, e) {
                var i = he(e, t),
                    n = [];
                return ce(t, function(t) {
                    if (t.inRange(i.x, i.y)) return n.push(t), n
                }), n.slice(0, 1)
            },
            label: me,
            index: me,
            dataset: function(t, e, i) {
                var n = he(e, t);
                i.axis = i.axis || "xy";
                var a = pe(i.axis),
                    o = i.intersect ? fe(t, n) : ge(t, n, !1, a);
                return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
            },
            "x-axis": function(t, e) {
                return me(t, e, {
                    intersect: !1
                })
            },
            point: function(t, e) {
                return fe(t, he(e, t))
            },
            nearest: function(t, e, i) {
                var n = he(e, t);
                i.axis = i.axis || "xy";
                var a = pe(i.axis);
                return ge(t, n, i.intersect, a)
            },
            x: function(t, e, i) {
                var n = he(e, t),
                    a = [],
                    o = !1;
                return ce(t, function(t) {
                    t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                }), i.intersect && !o && (a = []), a
            },
            y: function(t, e, i) {
                var n = he(e, t),
                    a = [],
                    o = !1;
                return ce(t, function(t) {
                    t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                }), i.intersect && !o && (a = []), a
            }
        }
    };

    function be(t, e) {
        return ut.where(t, function(t) {
            return t.position === e
        })
    }

    function xe(t, e) {
        t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
        }), t.sort(function(t, i) {
            var n = e ? i : t,
                a = e ? t : i;
            return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight
        }), t.forEach(function(t) {
            delete t._tmpIndex_
        })
    }

    function ye(t, e) {
        ut.each(t, function(t) {
            e[t.position] += t.isHorizontal() ? t.height : t.width
        })
    }
    st._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var ke = {
        defaults: {},
        addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
        },
        removeBox: function(t, e) {
            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
        },
        configure: function(t, e, i) {
            for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
        },
        update: function(t, e, i) {
            if (t) {
                var n = t.options.layout || {},
                    a = ut.options.toPadding(n.padding),
                    o = a.left,
                    r = a.right,
                    s = a.top,
                    l = a.bottom,
                    d = be(t.boxes, "left"),
                    u = be(t.boxes, "right"),
                    h = be(t.boxes, "top"),
                    c = be(t.boxes, "bottom"),
                    f = be(t.boxes, "chartArea");
                xe(d, !0), xe(u, !1), xe(h, !0), xe(c, !1);
                var g, p = d.concat(u),
                    m = h.concat(c),
                    v = p.concat(m),
                    b = e - o - r,
                    x = i - s - l,
                    y = (e - b / 2) / p.length,
                    k = b,
                    w = x,
                    M = {
                        top: s,
                        left: o,
                        bottom: l,
                        right: r
                    },
                    _ = [];
                ut.each(v, function(t) {
                    var e, i = t.isHorizontal();
                    i ? (e = t.update(t.fullWidth ? b : k, x / 2), w -= e.height) : (e = t.update(y, w), k -= e.width), _.push({
                        horizontal: i,
                        width: e.width,
                        box: t
                    })
                }), g = function(t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        a = 0;
                    return ut.each(t, function(t) {
                        if (t.getPadding) {
                            var o = t.getPadding();
                            e = Math.max(e, o.top), i = Math.max(i, o.left), n = Math.max(n, o.bottom), a = Math.max(a, o.right)
                        }
                    }), {
                        top: e,
                        left: i,
                        bottom: n,
                        right: a
                    }
                }(v), ut.each(p, T), ye(p, M), ut.each(m, T), ye(m, M), ut.each(p, function(t) {
                    var e = ut.findNextWhere(_, function(e) {
                            return e.box === t
                        }),
                        i = {
                            left: 0,
                            right: 0,
                            top: M.top,
                            bottom: M.bottom
                        };
                    e && t.update(e.width, w, i)
                }), ye(v, M = {
                    top: s,
                    left: o,
                    bottom: l,
                    right: r
                });
                var C = Math.max(g.left - M.left, 0);
                M.left += C, M.right += Math.max(g.right - M.right, 0);
                var S = Math.max(g.top - M.top, 0);
                M.top += S, M.bottom += Math.max(g.bottom - M.bottom, 0);
                var P = i - M.top - M.bottom,
                    I = e - M.left - M.right;
                I === k && P === w || (ut.each(p, function(t) {
                    t.height = P
                }), ut.each(m, function(t) {
                    t.fullWidth || (t.width = I)
                }), w = P, k = I);
                var A = o + C,
                    D = s + S;
                ut.each(d.concat(h), F), A += k, D += w, ut.each(u, F), ut.each(c, F), t.chartArea = {
                    left: M.left,
                    top: M.top,
                    right: M.left + k,
                    bottom: M.top + w
                }, ut.each(f, function(e) {
                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, w)
                })
            }

            function T(t) {
                var e = ut.findNextWhere(_, function(e) {
                    return e.box === t
                });
                if (e)
                    if (e.horizontal) {
                        var i = {
                            left: Math.max(M.left, g.left),
                            right: Math.max(M.right, g.right),
                            top: 0,
                            bottom: 0
                        };
                        t.update(t.fullWidth ? b : k, x / 2, i)
                    } else t.update(e.width, w)
            }

            function F(t) {
                t.isHorizontal() ? (t.left = t.fullWidth ? o : M.left, t.right = t.fullWidth ? e - r : M.left + k, t.top = D, t.bottom = D + t.height, D = t.bottom) : (t.left = A, t.right = A + t.width, t.top = M.top, t.bottom = M.top + w, A = t.right)
            }
        }
    };
    var we, Me = (we = Object.freeze({
            default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
        })) && we.default || we,
        _e = "$chartjs",
        Ce = "chartjs-size-monitor",
        Se = "chartjs-render-monitor",
        Pe = "chartjs-render-animation",
        Ie = ["animationstart", "webkitAnimationStart"],
        Ae = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function De(t, e) {
        var i = ut.getStyle(t, e),
            n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0
    }
    var Te = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function Fe(t, e, i) {
        t.addEventListener(e, i, Te)
    }

    function Le(t, e, i) {
        t.removeEventListener(e, i, Te)
    }

    function Re(t, e, i, n, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== i ? i : null,
            y: void 0 !== n ? n : null
        }
    }

    function Oe(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }

    function ze(t, e, i) {
        var n, a, o, r, s = t[_e] || (t[_e] = {}),
            l = s.resizer = function(t) {
                var e = Oe(Ce),
                    i = Oe(Ce + "-expand"),
                    n = Oe(Ce + "-shrink");
                i.appendChild(Oe()), n.appendChild(Oe()), e.appendChild(i), e.appendChild(n), e._reset = function() {
                    i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6
                };
                var a = function() {
                    e._reset(), t()
                };
                return Fe(i, "scroll", a.bind(i, "expand")), Fe(n, "scroll", a.bind(n, "shrink")), e
            }((n = function() {
                if (s.resizer) {
                    var n = i.options.maintainAspectRatio && t.parentNode,
                        a = n ? n.clientWidth : 0;
                    e(Re("resize", i)), n && n.clientWidth < a && i.canvas && e(Re("resize", i))
                }
            }, o = !1, r = [], function() {
                r = Array.prototype.slice.call(arguments), a = a || this, o || (o = !0, ut.requestAnimFrame.call(window, function() {
                    o = !1, n.apply(a, r)
                }))
            }));
        ! function(t, e) {
            var i = t[_e] || (t[_e] = {}),
                n = i.renderProxy = function(t) {
                    t.animationName === Pe && e()
                };
            ut.each(Ie, function(e) {
                Fe(t, e, n)
            }), i.reflow = !!t.offsetParent, t.classList.add(Se)
        }(t, function() {
            if (s.resizer) {
                var e = t.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
            }
        })
    }

    function Be(t) {
        var e = t[_e] || {},
            i = e.resizer;
        delete e.resizer,
            function(t) {
                var e = t[_e] || {},
                    i = e.renderProxy;
                i && (ut.each(Ie, function(e) {
                    Le(t, e, i)
                }), delete e.renderProxy), t.classList.remove(Se)
            }(t), i && i.parentNode && i.parentNode.removeChild(i)
    }
    var Ne = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function() {
            var t, e, i;
            this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = Me, i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))))
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return this._ensureLoaded(), i && i.canvas === t ? (function(t, e) {
                var i = t.style,
                    n = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t[_e] = {
                        initial: {
                            height: n,
                            width: a,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", null === a || "" === a) {
                    var o = De(t, "width");
                    void 0 !== o && (t.width = o)
                }
                if (null === n || "" === n)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var r = De(t, "height");
                        void 0 !== o && (t.height = r)
                    }
            }(t, e), i) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[_e]) {
                var i = e[_e].initial;
                ["height", "width"].forEach(function(t) {
                    var n = i[t];
                    ut.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                }), ut.each(i.style || {}, function(t, i) {
                    e.style[i] = t
                }), e.width = e.width, delete e[_e]
            }
        },
        addEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = i[_e] || (i[_e] = {});
                Fe(n, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                    i(function(t, e) {
                        var i = Ae[t.type] || t.type,
                            n = ut.getRelativePosition(t, e);
                        return Re(i, e, n.x, n.y, t)
                    }(e, t))
                })
            } else ze(n, i, t)
        },
        removeEventListener: function(t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = ((i[_e] || {}).proxies || {})[t.id + "_" + e];
                a && Le(n, e, a)
            } else Be(n)
        }
    };
    ut.addEvent = Fe, ut.removeEvent = Le;
    var We = Ne._enabled ? Ne : {
            acquireContext: function(t) {
                return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
            }
        },
        Ve = ut.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, We);
    st._set("global", {
        plugins: {}
    });
    var Ee = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                    -1 === e.indexOf(t) && e.push(t)
                }), this._cacheId++
            },
            unregister: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                    var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                }), this._cacheId++
            },
            clear: function() {
                this._plugins = [], this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(t, e, i) {
                var n, a, o, r, s, l = this.descriptors(t),
                    d = l.length;
                for (n = 0; n < d; ++n)
                    if ("function" == typeof(s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var i = [],
                    n = [],
                    a = t && t.config || {},
                    o = a.options && a.options.plugins || {};
                return this._plugins.concat(a.plugins || []).forEach(function(t) {
                    if (-1 === i.indexOf(t)) {
                        var e = t.id,
                            a = o[e];
                        !1 !== a && (!0 === a && (a = ut.clone(st.global.plugins[e])), i.push(t), n.push({
                            plugin: t,
                            options: a || {}
                        }))
                    }
                }), e.descriptors = n, e.id = this._cacheId, n
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        He = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, i) {
                this.constructors[t] = e, this.defaults[t] = ut.clone(i)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? ut.merge({}, [st.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                ut.each(t.scales, function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, ke.addBox(t, e)
                })
            }
        },
        je = ut.valueOrDefault;
    st._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: ut.noop,
                title: function(t, e) {
                    var i = "",
                        n = e.labels,
                        a = n ? n.length : 0;
                    if (t.length > 0) {
                        var o = t[0];
                        o.label ? i = o.label : o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index])
                    }
                    return i
                },
                afterTitle: ut.noop,
                beforeBody: ut.noop,
                beforeLabel: ut.noop,
                label: function(t, e) {
                    var i = e.datasets[t.datasetIndex].label || "";
                    return i && (i += ": "), ut.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                },
                labelColor: function(t, e) {
                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: i.borderColor,
                        backgroundColor: i.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: ut.noop,
                afterBody: ut.noop,
                beforeFooter: ut.noop,
                footer: ut.noop,
                afterFooter: ut.noop
            }
        }
    });
    var qe = {
        average: function(t) {
            if (!t.length) return !1;
            var e, i, n = 0,
                a = 0,
                o = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                var r = t[e];
                if (r && r.hasValue()) {
                    var s = r.tooltipPosition();
                    n += s.x, a += s.y, ++o
                }
            }
            return {
                x: n / o,
                y: a / o
            }
        },
        nearest: function(t, e) {
            var i, n, a, o = e.x,
                r = e.y,
                s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
                var l = t[i];
                if (l && l.hasValue()) {
                    var d = l.getCenterPoint(),
                        u = ut.distanceBetweenPoints(e, d);
                    u < s && (s = u, a = l)
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                o = h.x, r = h.y
            }
            return {
                x: o,
                y: r
            }
        }
    };

    function Ye(t, e) {
        return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Ue(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Xe(t) {
        var e = st.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: je(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: je(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: je(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: je(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: je(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: je(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: je(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: je(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: je(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function Ke(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function Ge(t) {
        return Ye([], Ue(t))
    }
    var Ze = pt.extend({
            initialize: function() {
                this._model = Xe(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this._options.callbacks,
                    e = t.beforeTitle.apply(this, arguments),
                    i = t.title.apply(this, arguments),
                    n = t.afterTitle.apply(this, arguments),
                    a = [];
                return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n))
            },
            getBeforeBody: function() {
                return Ge(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function(t, e) {
                var i = this,
                    n = i._options.callbacks,
                    a = [];
                return ut.each(t, function(t) {
                    var o = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    Ye(o.before, Ue(n.beforeLabel.call(i, t, e))), Ye(o.lines, n.label.call(i, t, e)), Ye(o.after, Ue(n.afterLabel.call(i, t, e))), a.push(o)
                }), a
            },
            getAfterBody: function() {
                return Ge(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function() {
                var t = this._options.callbacks,
                    e = t.beforeFooter.apply(this, arguments),
                    i = t.footer.apply(this, arguments),
                    n = t.afterFooter.apply(this, arguments),
                    a = [];
                return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n))
            },
            update: function(t) {
                var e, i, n, a, o, r, s, l, d, u, h = this,
                    c = h._options,
                    f = h._model,
                    g = h._model = Xe(c),
                    p = h._active,
                    m = h._data,
                    v = {
                        xAlign: f.xAlign,
                        yAlign: f.yAlign
                    },
                    b = {
                        x: f.x,
                        y: f.y
                    },
                    x = {
                        width: f.width,
                        height: f.height
                    },
                    y = {
                        x: f.caretX,
                        y: f.caretY
                    };
                if (p.length) {
                    g.opacity = 1;
                    var k = [],
                        w = [];
                    y = qe[c.position].call(h, p, h._eventPosition);
                    var M = [];
                    for (e = 0, i = p.length; e < i; ++e) M.push((n = p[e], a = void 0, o = void 0, r = void 0, s = void 0, l = void 0, d = void 0, u = void 0, a = n._xScale, o = n._yScale || n._scale, r = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, d = l._getIndexScale(), u = l._getValueScale(), {
                        xLabel: a ? a.getLabelForIndex(r, s) : "",
                        yLabel: o ? o.getLabelForIndex(r, s) : "",
                        label: d ? "" + d.getLabelForIndex(r, s) : "",
                        value: u ? "" + u.getLabelForIndex(r, s) : "",
                        index: r,
                        datasetIndex: s,
                        x: n._model.x,
                        y: n._model.y
                    }));
                    c.filter && (M = M.filter(function(t) {
                        return c.filter(t, m)
                    })), c.itemSort && (M = M.sort(function(t, e) {
                        return c.itemSort(t, e, m)
                    })), ut.each(M, function(t) {
                        k.push(c.callbacks.labelColor.call(h, t, h._chart)), w.push(c.callbacks.labelTextColor.call(h, t, h._chart))
                    }), g.title = h.getTitle(M, m), g.beforeBody = h.getBeforeBody(M, m), g.body = h.getBody(M, m), g.afterBody = h.getAfterBody(M, m), g.footer = h.getFooter(M, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = k, g.labelTextColors = w, g.dataPoints = M, x = function(t, e) {
                        var i = t._chart.ctx,
                            n = 2 * e.yPadding,
                            a = 0,
                            o = e.body,
                            r = o.reduce(function(t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        r += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length,
                            l = e.footer.length,
                            d = e.titleFontSize,
                            u = e.bodyFontSize,
                            h = e.footerFontSize;
                        n += s * d, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * u, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;
                        var c = 0,
                            f = function(t) {
                                a = Math.max(a, i.measureText(t).width + c)
                            };
                        return i.font = ut.fontString(d, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, f), i.font = ut.fontString(u, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? u + 2 : 0, ut.each(o, function(t) {
                            ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f)
                        }), c = 0, i.font = ut.fontString(h, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, f), {
                            width: a += 2 * e.xPadding,
                            height: n
                        }
                    }(this, g), b = function(t, e, i, n) {
                        var a = t.x,
                            o = t.y,
                            r = t.caretSize,
                            s = t.caretPadding,
                            l = t.cornerRadius,
                            d = i.xAlign,
                            u = i.yAlign,
                            h = r + s,
                            c = l + s;
                        return "right" === d ? a -= e.width : "center" === d && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === u ? o += h : o -= "bottom" === u ? e.height + h : e.height / 2, "center" === u ? "left" === d ? a += h : "right" === d && (a -= h) : "left" === d ? a -= c : "right" === d && (a += c), {
                            x: a,
                            y: o
                        }
                    }(g, x, v = function(t, e) {
                        var i, n, a, o, r, s = t._model,
                            l = t._chart,
                            d = t._chart.chartArea,
                            u = "center",
                            h = "center";
                        s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                        var c = (d.left + d.right) / 2,
                            f = (d.top + d.bottom) / 2;
                        "center" === h ? (i = function(t) {
                            return t <= c
                        }, n = function(t) {
                            return t > c
                        }) : (i = function(t) {
                            return t <= e.width / 2
                        }, n = function(t) {
                            return t >= l.width - e.width / 2
                        }), a = function(t) {
                            return t + e.width + s.caretSize + s.caretPadding > l.width
                        }, o = function(t) {
                            return t - e.width - s.caretSize - s.caretPadding < 0
                        }, r = function(t) {
                            return t <= f ? "top" : "bottom"
                        }, i(s.x) ? (u = "left", a(s.x) && (u = "center", h = r(s.y))) : n(s.x) && (u = "right", o(s.x) && (u = "center", h = r(s.y)));
                        var g = t._options;
                        return {
                            xAlign: g.xAlign ? g.xAlign : u,
                            yAlign: g.yAlign ? g.yAlign : h
                        }
                    }(this, x), h._chart)
                } else g.opacity = 0;
                return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h
            },
            drawCaret: function(t, e) {
                var i = this._chart.ctx,
                    n = this._view,
                    a = this.getCaretPosition(t, e, n);
                i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
            },
            getCaretPosition: function(t, e, i) {
                var n, a, o, r, s, l, d = i.caretSize,
                    u = i.cornerRadius,
                    h = i.xAlign,
                    c = i.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height;
                if ("center" === c) s = g + m / 2, "left" === h ? (a = (n = f) - d, o = n, r = s + d, l = s - d) : (a = (n = f + p) + d, o = n, r = s - d, l = s + d);
                else if ("left" === h ? (n = (a = f + u + d) - d, o = a + d) : "right" === h ? (n = (a = f + p - u - d) - d, o = a + d) : (n = (a = i.caretX) - d, o = a + d), "top" === c) s = (r = g) - d, l = r;
                else {
                    s = (r = g + m) + d, l = r;
                    var v = o;
                    o = n, n = v
                }
                return {
                    x1: n,
                    x2: a,
                    x3: o,
                    y1: r,
                    y2: s,
                    y3: l
                }
            },
            drawTitle: function(t, e, i) {
                var n = e.title;
                if (n.length) {
                    t.x = Ke(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
                    var a, o, r = e.titleFontSize,
                        s = e.titleSpacing;
                    for (i.fillStyle = e.titleFontColor, i.font = ut.fontString(r, e._titleFontStyle, e._titleFontFamily), a = 0, o = n.length; a < o; ++a) i.fillText(n[a], t.x, t.y), t.y += r + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s)
                }
            },
            drawBody: function(t, e, i) {
                var n, a = e.bodyFontSize,
                    o = e.bodySpacing,
                    r = e._bodyAlign,
                    s = e.body,
                    l = e.displayColors,
                    d = e.labelColors,
                    u = 0,
                    h = l ? Ke(e, "left") : 0;
                i.textAlign = r, i.textBaseline = "top", i.font = ut.fontString(a, e._bodyFontStyle, e._bodyFontFamily), t.x = Ke(e, r);
                var c = function(e) {
                    i.fillText(e, t.x + u, t.y), t.y += a + o
                };
                i.fillStyle = e.bodyFontColor, ut.each(e.beforeBody, c), u = l && "right" !== r ? "center" === r ? a / 2 + 1 : a + 2 : 0, ut.each(s, function(o, r) {
                    n = e.labelTextColors[r], i.fillStyle = n, ut.each(o.before, c), ut.each(o.lines, function(o) {
                        l && (i.fillStyle = e.legendColorBackground, i.fillRect(h, t.y, a, a), i.lineWidth = 1, i.strokeStyle = d[r].borderColor, i.strokeRect(h, t.y, a, a), i.fillStyle = d[r].backgroundColor, i.fillRect(h + 1, t.y + 1, a - 2, a - 2), i.fillStyle = n), c(o)
                    }), ut.each(o.after, c)
                }), u = 0, ut.each(e.afterBody, c), t.y -= o
            },
            drawFooter: function(t, e, i) {
                var n = e.footer;
                n.length && (t.x = Ke(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = e.footerFontColor, i.font = ut.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), ut.each(n, function(n) {
                    i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                }))
            },
            drawBackground: function(t, e, i, n) {
                i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
                var a = e.xAlign,
                    o = e.yAlign,
                    r = t.x,
                    s = t.y,
                    l = n.width,
                    d = n.height,
                    u = e.cornerRadius;
                i.beginPath(), i.moveTo(r + u, s), "top" === o && this.drawCaret(t, n), i.lineTo(r + l - u, s), i.quadraticCurveTo(r + l, s, r + l, s + u), "center" === o && "right" === a && this.drawCaret(t, n), i.lineTo(r + l, s + d - u), i.quadraticCurveTo(r + l, s + d, r + l - u, s + d), "bottom" === o && this.drawCaret(t, n), i.lineTo(r + u, s + d), i.quadraticCurveTo(r, s + d, r, s + d - u), "center" === o && "left" === a && this.drawCaret(t, n), i.lineTo(r, s + u), i.quadraticCurveTo(r, s, r + u, s), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var i = {
                            width: e.width,
                            height: e.height
                        },
                        n = {
                            x: e.x,
                            y: e.y
                        },
                        a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && o && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore())
                }
            },
            handleEvent: function(t) {
                var e, i = this,
                    n = i._options;
                return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !ut.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                    x: t.x,
                    y: t.y
                }, i.update(!0), i.pivot())), e
            }
        }),
        $e = qe,
        Je = Ze;
    Je.positioners = $e;
    var Qe = ut.valueOrDefault;

    function ti() {
        return ut.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, o, r, s = i[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a) r = i[t][a], o = Qe(r.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || r.type && r.type !== e[t][a].type ? ut.merge(e[t][a], [He.getScaleDefaults(o), r]) : ut.merge(e[t][a], r)
                } else ut._merger(t, e, i, n)
            }
        })
    }

    function ei() {
        return ut.merge({}, [].slice.call(arguments), {
            merger: function(t, e, i, n) {
                var a = e[t] || {},
                    o = i[t];
                "scales" === t ? e[t] = ti(a, o) : "scale" === t ? e[t] = ut.merge(a, [He.getScaleDefaults(o.type), o]) : ut._merger(t, e, i, n)
            }
        })
    }

    function ii(t) {
        return "top" === t || "bottom" === t
    }
    st._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var ni = function(t, e) {
        return this.construct(t, e), this
    };
    ut.extend(ni.prototype, {
        construct: function(t, e) {
            var i = this;
            e = function(t) {
                var e = (t = t || {}).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = ei(st.global, st[t.type], t.options || {}), t
            }(e);
            var n = Ve.acquireContext(t, e),
                a = n && n.canvas,
                o = a && a.height,
                r = a && a.width;
            i.id = ut.uid(), i.ctx = n, i.canvas = a, i.config = e, i.width = r, i.height = o, i.aspectRatio = o ? r / o : null, i.options = e.options, i._bufferedRender = !1, i.chart = i, i.controller = i, ni.instances[i.id] = i, Object.defineProperty(i, "data", {
                get: function() {
                    return i.config.data
                },
                set: function(t) {
                    i.config.data = t
                }
            }), n && a ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function() {
            var t = this;
            return Ee.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), Ee.notify(t, "afterInit"), t
        },
        clear: function() {
            return ut.canvas.clear(this), this
        },
        stop: function() {
            return bt.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                a = i.maintainAspectRatio && e.aspectRatio || null,
                o = Math.max(0, Math.floor(ut.getMaximumWidth(n))),
                r = Math.max(0, Math.floor(a ? o / a : ut.getMaximumHeight(n)));
            if ((e.width !== o || e.height !== r) && (n.width = e.width = o, n.height = e.height = r, n.style.width = o + "px", n.style.height = r + "px", ut.retinaScale(e, i.devicePixelRatio), !t)) {
                var s = {
                    width: o,
                    height: r
                };
                Ee.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
                    duration: i.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            ut.each(e.xAxes, function(t, e) {
                t.id = t.id || "x-axis-" + e
            }), ut.each(e.yAxes, function(t, e) {
                t.id = t.id || "y-axis-" + e
            }), i && (i.id = i.id || "scale")
        },
        buildOrUpdateScales: function() {
            var t = this,
                e = t.options,
                i = t.scales || {},
                n = [],
                a = Object.keys(i).reduce(function(t, e) {
                    return t[e] = !1, t
                }, {});
            e.scales && (n = n.concat((e.scales.xAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                }
            }), (e.scales.yAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                }
            }))), e.scale && n.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), ut.each(n, function(e) {
                var n = e.options,
                    o = n.id,
                    r = Qe(n.type, e.dtype);
                ii(n.position) !== ii(e.dposition) && (n.position = e.dposition), a[o] = !0;
                var s = null;
                if (o in i && i[o].type === r)(s = i[o]).options = n, s.ctx = t.ctx, s.chart = t;
                else {
                    var l = He.getScaleConstructor(r);
                    if (!l) return;
                    s = new l({
                        id: o,
                        type: r,
                        options: n,
                        ctx: t.ctx,
                        chart: t
                    }), i[s.id] = s
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
            }), ut.each(a, function(t, e) {
                t || delete i[e]
            }), t.scales = i, He.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var t = this,
                e = [];
            return ut.each(t.data.datasets, function(i, n) {
                var a = t.getDatasetMeta(n),
                    o = i.type || t.config.type;
                if (a.type && a.type !== o && (t.destroyDatasetMeta(n), a = t.getDatasetMeta(n)), a.type = o, a.controller) a.controller.updateIndex(n), a.controller.linkScales();
                else {
                    var r = ue[a.type];
                    if (void 0 === r) throw new Error('"' + a.type + '" is not a chart type.');
                    a.controller = new r(t, n), e.push(a.controller)
                }
            }, t), e
        },
        resetElements: function() {
            var t = this;
            ut.each(t.data.datasets, function(e, i) {
                t.getDatasetMeta(i).controller.reset()
            }, t)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, i, n = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), i = (e = n).options, ut.each(e.scales, function(t) {
                    ke.removeBox(e, t)
                }), i = ei(st.global, st[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), Ee._invalidate(n), !1 !== Ee.notify(n, "beforeUpdate")) {
                n.tooltip._data = n.data;
                var a = n.buildOrUpdateControllers();
                ut.each(n.data.datasets, function(t, e) {
                    n.getDatasetMeta(e).controller.buildOrUpdateElements()
                }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && ut.each(a, function(t) {
                    t.reset()
                }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Ee.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : n.render(t)
            }
        },
        updateLayout: function() {
            !1 !== Ee.notify(this, "beforeLayout") && (ke.update(this, this.width, this.height), Ee.notify(this, "afterScaleUpdate"), Ee.notify(this, "afterLayout"))
        },
        updateDatasets: function() {
            if (!1 !== Ee.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                Ee.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
                i = {
                    meta: e,
                    index: t
                };
            !1 !== Ee.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), Ee.notify(this, "afterDatasetUpdate", [i]))
        },
        render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var i = e.options.animation,
                n = Qe(t.duration, i && i.duration),
                a = t.lazy;
            if (!1 !== Ee.notify(e, "beforeRender")) {
                var o = function(t) {
                    Ee.notify(e, "afterRender"), ut.callback(i && i.onComplete, [t], e)
                };
                if (i && n) {
                    var r = new vt({
                        numSteps: n / 16.66,
                        easing: t.easing || i.easing,
                        render: function(t, e) {
                            var i = ut.easing.effects[e.easing],
                                n = e.currentStep,
                                a = n / e.numSteps;
                            t.draw(i(a), a, n)
                        },
                        onAnimationProgress: i.onProgress,
                        onAnimationComplete: o
                    });
                    bt.addAnimation(e, r, n, a)
                } else e.draw(), o(new vt({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e = this;
            e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== Ee.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function(t) {
                t.draw(e.chartArea)
            }, e), e.drawDatasets(t), e._drawTooltip(t), Ee.notify(e, "afterDraw", [t]))
        },
        transition: function(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        drawDatasets: function(t) {
            var e = this;
            if (!1 !== Ee.notify(e, "beforeDatasetsDraw", [t])) {
                for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                Ee.notify(e, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
                    meta: i,
                    index: t,
                    easingValue: e
                };
            !1 !== Ee.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), Ee.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function(t) {
            var e = this.tooltip,
                i = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== Ee.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), Ee.notify(this, "afterTooltipDraw", [i]))
        },
        getElementAtEvent: function(t) {
            return ve.modes.single(this, t)
        },
        getElementsAtEvent: function(t) {
            return ve.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function(t) {
            return ve.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function(t, e, i) {
            var n = ve.modes[e];
            return "function" == typeof n ? n(this, t, i) : []
        },
        getDatasetAtEvent: function(t) {
            return ve.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null
            }), i
        },
        getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function() {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e])
        },
        destroy: function() {
            var t, e, i = this,
                n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
            n && (i.unbindEvents(), ut.canvas.clear(i), Ve.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Ee.notify(i, "destroy"), delete ni.instances[i.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new Je({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t)
        },
        bindEvents: function() {
            var t = this,
                e = t._listeners = {},
                i = function() {
                    t.eventHandler.apply(t, arguments)
                };
            ut.each(t.options.events, function(n) {
                Ve.addEventListener(t, n, i), e[n] = i
            }), t.options.responsive && (i = function() {
                t.resize()
            }, Ve.addEventListener(t, "resize", i), e.resize = i)
        },
        unbindEvents: function() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, ut.each(e, function(e, i) {
                Ve.removeEventListener(t, i, e)
            }))
        },
        updateHoverStyle: function(t, e, i) {
            var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
            for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
        },
        eventHandler: function(t) {
            var e = this,
                i = e.tooltip;
            if (!1 !== Ee.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var n = e.handleEvent(t);
                i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Ee.notify(e, "afterEvent", [t]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e, i = this,
                n = i.options || {},
                a = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ut.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ut.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
        }
    }), ni.instances = {};
    var ai = ni;
    ni.Controller = ni, ni.types = {}, ut.configMerge = ei, ut.scaleMerge = ti;

    function oi() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function ri(t) {
        this.options = t || {}
    }
    ut.extend(ri.prototype, {
        formats: oi,
        parse: oi,
        format: oi,
        add: oi,
        diff: oi,
        startOf: oi,
        endOf: oi,
        _create: function(t) {
            return t
        }
    }), ri.override = function(t) {
        ut.extend(ri.prototype, t)
    };
    var si = {
            _date: ri
        },
        li = {
            formatters: {
                values: function(t) {
                    return ut.isArray(t) ? t : "" + t
                },
                linear: function(t, e, i) {
                    var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                    Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                    var a = ut.log10(Math.abs(n)),
                        o = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                            var r = ut.log10(Math.abs(t));
                            o = t.toExponential(Math.floor(r) - Math.floor(a))
                        } else {
                            var s = -1 * Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                        }
                    else o = "0";
                    return o
                },
                logarithmic: function(t, e, i) {
                    var n = t / Math.pow(10, Math.floor(ut.log10(t)));
                    return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                }
            }
        },
        di = ut.valueOrDefault,
        ui = ut.valueAtIndexOrDefault;

    function hi(t) {
        var e, i, n = [];
        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
        return n
    }

    function ci(t, e, i) {
        return ut.isArray(e) ? ut.longestText(t, i, e) : t.measureText(e).width
    }
    st._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: li.formatters.values,
            minor: {},
            major: {}
        }
    });
    var fi = pt.extend({
            getPadding: function() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            mergeTicksOptions: function() {
                var t = this.options.ticks;
                for (var e in !1 === t.minor && (t.minor = {
                        display: !1
                    }), !1 === t.major && (t.major = {
                        display: !1
                    }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function() {
                ut.callback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, i) {
                var n, a, o, r, s, l, d = this;
                for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = ut.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, n = 0, a = o.length; n < a; ++n) r = o[n], (l = s[n]) ? l.label = r : s.push(l = {
                    label: r,
                    major: !1
                });
                return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
            },
            afterUpdate: function() {
                ut.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                ut.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
                ut.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                ut.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: ut.noop,
            afterDataLimits: function() {
                ut.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                ut.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: ut.noop,
            afterBuildTicks: function(t) {
                var e = this;
                return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
            },
            beforeTickToLabelConversion: function() {
                ut.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var t = this.options.ticks;
                this.ticks = this.ticks.map(t.userCallback || t.callback, this)
            },
            afterTickToLabelConversion: function() {
                ut.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                ut.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var t = this,
                    e = t.ctx,
                    i = t.options.ticks,
                    n = hi(t._ticks),
                    a = ut.options._parseFont(i);
                e.font = a.string;
                var o = i.minRotation || 0;
                if (n.length && t.options.display && t.isHorizontal())
                    for (var r, s = ut.longestText(e, a.string, n, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > d && o < i.maxRotation;) {
                        var u = ut.toRadians(o);
                        if (r = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
                            o--;
                            break
                        }
                        o++, l = r * s
                    }
                t.labelRotation = o
            },
            afterCalculateTickRotation: function() {
                ut.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                ut.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var t = this,
                    e = t.minSize = {
                        width: 0,
                        height: 0
                    },
                    i = hi(t._ticks),
                    n = t.options,
                    a = n.ticks,
                    o = n.scaleLabel,
                    r = n.gridLines,
                    s = t._isVisible(),
                    l = n.position,
                    d = t.isHorizontal(),
                    u = ut.options._parseFont,
                    h = u(a),
                    c = n.gridLines.tickMarkLength;
                if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && r.drawTicks ? c : 0, e.height = d ? s && r.drawTicks ? c : 0 : t.maxHeight, o.display && s) {
                    var f = u(o),
                        g = ut.options.toPadding(o.padding),
                        p = f.lineHeight + g.height;
                    d ? e.height += p : e.width += p
                }
                if (a.display && s) {
                    var m = ut.longestText(t.ctx, h.string, i, t.longestTextCache),
                        v = ut.numberOfLabelLines(i),
                        b = .5 * h.size,
                        x = t.options.ticks.padding;
                    if (t._maxLabelLines = v, t.longestLabelWidth = m, d) {
                        var y = ut.toRadians(t.labelRotation),
                            k = Math.cos(y),
                            w = Math.sin(y) * m + h.lineHeight * v + b;
                        e.height = Math.min(t.maxHeight, e.height + w + x), t.ctx.font = h.string;
                        var M, _, C = ci(t.ctx, i[0], h.string),
                            S = ci(t.ctx, i[i.length - 1], h.string),
                            P = t.getPixelForTick(0) - t.left,
                            I = t.right - t.getPixelForTick(i.length - 1);
                        0 !== t.labelRotation ? (M = "bottom" === l ? k * C : k * b, _ = "bottom" === l ? k * b : k * S) : (M = C / 2, _ = S / 2), t.paddingLeft = Math.max(M - P, 0) + 3, t.paddingRight = Math.max(_ - I, 0) + 3
                    } else a.mirror ? m = 0 : m += x + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2
                }
                t.handleMargins(), t.width = e.width, t.height = e.height
            },
            handleMargins: function() {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
                ut.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(t) {
                if (ut.isNullOrUndef(t)) return NaN;
                if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: ut.noop,
            getPixelForValue: ut.noop,
            getValueForPixel: ut.noop,
            getPixelForTick: function(t) {
                var e = this,
                    i = e.options.offset;
                if (e.isHorizontal()) {
                    var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                        a = n * t + e.paddingLeft;
                    i && (a += n / 2);
                    var o = e.left + a;
                    return o += e.isFullWidth() ? e.margins.left : 0
                }
                var r = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (r / (e._ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
                var e = this;
                if (e.isHorizontal()) {
                    var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                        n = e.left + i;
                    return n += e.isFullWidth() ? e.margins.left : 0
                }
                return e.top + t * e.height
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var t = this.min,
                    e = this.max;
                return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            },
            _autoSkip: function(t) {
                var e, i, n = this,
                    a = n.isHorizontal(),
                    o = n.options.ticks.minor,
                    r = t.length,
                    s = !1,
                    l = o.maxTicksLimit,
                    d = n._tickSize() * (r - 1),
                    u = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.PaddingBottom),
                    h = [];
                for (d > u && (s = 1 + Math.floor(d / u)), r > l && (s = Math.max(s, 1 + Math.floor(r / l))), e = 0; e < r; e++) i = t[e], s > 1 && e % s > 0 && delete i.label, h.push(i);
                return h
            },
            _tickSize: function() {
                var t = this,
                    e = t.isHorizontal(),
                    i = t.options.ticks.minor,
                    n = ut.toRadians(t.labelRotation),
                    a = Math.abs(Math.cos(n)),
                    o = Math.abs(Math.sin(n)),
                    r = i.autoSkipPadding || 0,
                    s = t.longestLabelWidth + r || 0,
                    l = ut.options._parseFont(i),
                    d = t._maxLabelLines * l.lineHeight + r || 0;
                return e ? d * a > s * o ? s / a : d / o : d * o < s * a ? d / a : s / o
            },
            _isVisible: function() {
                var t, e, i, n = this.chart,
                    a = this.options.display;
                if ("auto" !== a) return !!a;
                for (t = 0, e = n.data.datasets.length; t < e; ++t)
                    if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
                return !1
            },
            draw: function(t) {
                var e = this,
                    i = e.options;
                if (e._isVisible()) {
                    var n, a, o, r = e.chart,
                        s = e.ctx,
                        l = st.global.defaultFontColor,
                        d = i.ticks.minor,
                        u = i.ticks.major || d,
                        h = i.gridLines,
                        c = i.scaleLabel,
                        f = i.position,
                        g = 0 !== e.labelRotation,
                        p = d.mirror,
                        m = e.isHorizontal(),
                        v = ut.options._parseFont,
                        b = d.display && d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                        x = di(d.fontColor, l),
                        y = v(d),
                        k = y.lineHeight,
                        w = di(u.fontColor, l),
                        M = v(u),
                        _ = d.padding,
                        C = d.labelOffset,
                        S = h.drawTicks ? h.tickMarkLength : 0,
                        P = di(c.fontColor, l),
                        I = v(c),
                        A = ut.options.toPadding(c.padding),
                        D = ut.toRadians(e.labelRotation),
                        T = [],
                        F = h.drawBorder ? ui(h.lineWidth, 0, 0) : 0,
                        L = ut._alignPixel;
                    "top" === f ? (n = L(r, e.bottom, F), a = e.bottom - S, o = n - F / 2) : "bottom" === f ? (n = L(r, e.top, F), a = n + F / 2, o = e.top + S) : "left" === f ? (n = L(r, e.right, F), a = e.right - S, o = n - F / 2) : (n = L(r, e.left, F), a = n + F / 2, o = e.left + S);
                    if (ut.each(b, function(n, s) {
                            if (!ut.isNullOrUndef(n.label)) {
                                var l, d, u, c, v, b, x, y, w, M, P, I, A, R, O, z, B = n.label;
                                s === e.zeroLineIndex && i.offset === h.offsetGridLines ? (l = h.zeroLineWidth, d = h.zeroLineColor, u = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (l = ui(h.lineWidth, s), d = ui(h.color, s), u = h.borderDash || [], c = h.borderDashOffset || 0);
                                var N = ut.isArray(B) ? B.length : 1,
                                    W = function(t, e, i) {
                                        var n = t.getPixelForTick(e);
                                        return i && (1 === t.getTicks().length ? n -= t.isHorizontal() ? Math.max(n - t.left, t.right - n) : Math.max(n - t.top, t.bottom - n) : n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
                                    }(e, s, h.offsetGridLines);
                                if (m) {
                                    var V = S + _;
                                    W < e.left - 1e-7 && (d = "rgba(0,0,0,0)"), v = x = w = P = L(r, W, l), b = a, y = o, A = e.getPixelForTick(s) + C, "top" === f ? (M = L(r, t.top, F) + F / 2, I = t.bottom, O = ((g ? 1 : .5) - N) * k, z = g ? "left" : "center", R = e.bottom - V) : (M = t.top, I = L(r, t.bottom, F) - F / 2, O = (g ? 0 : .5) * k, z = g ? "right" : "center", R = e.top + V)
                                } else {
                                    var E = (p ? 0 : S) + _;
                                    W < e.top - 1e-7 && (d = "rgba(0,0,0,0)"), v = a, x = o, b = y = M = I = L(r, W, l), R = e.getPixelForTick(s) + C, O = (1 - N) * k / 2, "left" === f ? (w = L(r, t.left, F) + F / 2, P = t.right, z = p ? "left" : "right", A = e.right - E) : (w = t.left, P = L(r, t.right, F) - F / 2, z = p ? "right" : "left", A = e.left + E)
                                }
                                T.push({
                                    tx1: v,
                                    ty1: b,
                                    tx2: x,
                                    ty2: y,
                                    x1: w,
                                    y1: M,
                                    x2: P,
                                    y2: I,
                                    labelX: A,
                                    labelY: R,
                                    glWidth: l,
                                    glColor: d,
                                    glBorderDash: u,
                                    glBorderDashOffset: c,
                                    rotation: -1 * D,
                                    label: B,
                                    major: n.major,
                                    textOffset: O,
                                    textAlign: z
                                })
                            }
                        }), ut.each(T, function(t) {
                            var e = t.glWidth,
                                i = t.glColor;
                            if (h.display && e && i && (s.save(), s.lineWidth = e, s.strokeStyle = i, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? M.string : y.string, s.fillStyle = t.major ? w : x, s.textBaseline = "middle", s.textAlign = t.textAlign;
                                var n = t.label,
                                    a = t.textOffset;
                                if (ut.isArray(n))
                                    for (var o = 0; o < n.length; ++o) s.fillText("" + n[o], 0, a), a += k;
                                else s.fillText(n, 0, a);
                                s.restore()
                            }
                        }), c.display) {
                        var R, O, z = 0,
                            B = I.lineHeight / 2;
                        if (m) R = e.left + (e.right - e.left) / 2, O = "bottom" === f ? e.bottom - B - A.bottom : e.top + B + A.top;
                        else {
                            var N = "left" === f;
                            R = N ? e.left + B + A.top : e.right - B - A.top, O = e.top + (e.bottom - e.top) / 2, z = N ? -.5 * Math.PI : .5 * Math.PI
                        }
                        s.save(), s.translate(R, O), s.rotate(z), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = P, s.font = I.string, s.fillText(c.labelString, 0, 0), s.restore()
                    }
                    if (F) {
                        var W, V, E, H, j = F,
                            q = ui(h.lineWidth, b.length - 1, 0);
                        m ? (W = L(r, e.left, j) - j / 2, V = L(r, e.right, q) + q / 2, E = H = n) : (E = L(r, e.top, j) - j / 2, H = L(r, e.bottom, q) + q / 2, W = V = n), s.lineWidth = F, s.strokeStyle = ui(h.color, 0), s.beginPath(), s.moveTo(W, E), s.lineTo(V, H), s.stroke()
                    }
                }
            }
        }),
        gi = fi.extend({
            getLabels: function() {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
            },
            determineDataLimits: function() {
                var t, e = this,
                    i = e.getLabels();
                e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
            },
            buildTicks: function() {
                var t = this,
                    e = t.getLabels();
                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
            },
            getLabelForIndex: function(t, e) {
                var i = this,
                    n = i.chart;
                return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i.ticks[t - i.minIndex]
            },
            getPixelForValue: function(t, e) {
                var i, n = this,
                    a = n.options.offset,
                    o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                    t = i || t;
                    var r = n.getLabels().indexOf(t);
                    e = -1 !== r ? r : e
                }
                if (n.isHorizontal()) {
                    var s = n.width / o,
                        l = s * (e - n.minIndex);
                    return a && (l += s / 2), n.left + l
                }
                var d = n.height / o,
                    u = d * (e - n.minIndex);
                return a && (u += d / 2), n.top + u
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
            },
            getValueForPixel: function(t) {
                var e = this,
                    i = e.options.offset,
                    n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                    a = e.isHorizontal(),
                    o = (a ? e.width : e.height) / n;
                return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
            },
            getBasePixel: function() {
                return this.bottom
            }
        }),
        pi = {
            position: "bottom"
        };
    gi._defaults = pi;
    var mi = ut.noop,
        vi = ut.isNullOrUndef;
    var bi = fi.extend({
            getRightValue: function(t) {
                return "string" == typeof t ? +t : fi.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var i = ut.sign(t.min),
                        n = ut.sign(t.max);
                    i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0)
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    o = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this.options.ticks,
                    i = e.stepSize,
                    n = e.maxTicksLimit;
                return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: mi,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = t.getTickLimit(),
                    n = {
                        maxTicks: i = Math.max(2, i),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    a = t.ticks = function(t, e) {
                        var i, n, a, o, r = [],
                            s = t.stepSize,
                            l = s || 1,
                            d = t.maxTicks - 1,
                            u = t.min,
                            h = t.max,
                            c = t.precision,
                            f = e.min,
                            g = e.max,
                            p = ut.niceNum((g - f) / d / l) * l;
                        if (p < 1e-14 && vi(u) && vi(h)) return [f, g];
                        (o = Math.ceil(g / p) - Math.floor(f / p)) > d && (p = ut.niceNum(o * p / d / l) * l), s || vi(c) ? i = Math.pow(10, ut._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!vi(u) && ut.almostWhole(u / p, p / 1e3) && (n = u), !vi(h) && ut.almostWhole(h / p, p / 1e3) && (a = h)), o = (a - n) / p, o = ut.almostEquals(o, Math.round(o), p / 1e3) ? Math.round(o) : Math.ceil(o), n = Math.round(n * i) / i, a = Math.round(a * i) / i, r.push(vi(u) ? n : u);
                        for (var m = 1; m < o; ++m) r.push(Math.round((n + m * p) * i) / i);
                        return r.push(vi(h) ? a : h), r
                    }(n, t);
                t.handleDirectionalChanges(), t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), fi.prototype.convertTicksToLabels.call(t)
            }
        }),
        xi = {
            position: "left",
            ticks: {
                callback: li.formatters.linear
            }
        },
        yi = bi.extend({
            determineDataLimits: function() {
                var t = this,
                    e = t.options,
                    i = t.chart,
                    n = i.data.datasets,
                    a = t.isHorizontal();

                function o(e) {
                    return a ? e.xAxisID === t.id : e.yAxisID === t.id
                }
                t.min = null, t.max = null;
                var r = e.stacked;
                if (void 0 === r && ut.each(n, function(t, e) {
                        if (!r) {
                            var n = i.getDatasetMeta(e);
                            i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0)
                        }
                    }), e.stacked || r) {
                    var s = {};
                    ut.each(n, function(n, a) {
                        var r = i.getDatasetMeta(a),
                            l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
                        void 0 === s[l] && (s[l] = {
                            positiveValues: [],
                            negativeValues: []
                        });
                        var d = s[l].positiveValues,
                            u = s[l].negativeValues;
                        i.isDatasetVisible(a) && o(r) && ut.each(n.data, function(i, n) {
                            var a = +t.getRightValue(i);
                            isNaN(a) || r.data[n].hidden || (d[n] = d[n] || 0, u[n] = u[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? u[n] += a : d[n] += a)
                        })
                    }), ut.each(s, function(e) {
                        var i = e.positiveValues.concat(e.negativeValues),
                            n = ut.min(i),
                            a = ut.max(i);
                        t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a)
                    })
                } else ut.each(n, function(e, n) {
                    var a = i.getDatasetMeta(n);
                    i.isDatasetVisible(n) && o(a) && ut.each(e.data, function(e, i) {
                        var n = +t.getRightValue(e);
                        isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                    })
                });
                t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                var t;
                return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
                var e = this,
                    i = e.start,
                    n = +e.getRightValue(t),
                    a = e.end - i;
                return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i)
            },
            getValueForPixel: function(t) {
                var e = this,
                    i = e.isHorizontal(),
                    n = i ? e.width : e.height,
                    a = (i ? t - e.left : e.bottom - t) / n;
                return e.start + (e.end - e.start) * a
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticksAsNumbers[t])
            }
        }),
        ki = xi;
    yi._defaults = ki;
    var wi = ut.valueOrDefault;
    var Mi = {
        position: "left",
        ticks: {
            callback: li.formatters.logarithmic
        }
    };

    function _i(t, e) {
        return ut.isFinite(t) && t >= 0 ? t : e
    }
    var Ci = fi.extend({
            determineDataLimits: function() {
                var t = this,
                    e = t.options,
                    i = t.chart,
                    n = i.data.datasets,
                    a = t.isHorizontal();

                function o(e) {
                    return a ? e.xAxisID === t.id : e.yAxisID === t.id
                }
                t.min = null, t.max = null, t.minNotZero = null;
                var r = e.stacked;
                if (void 0 === r && ut.each(n, function(t, e) {
                        if (!r) {
                            var n = i.getDatasetMeta(e);
                            i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0)
                        }
                    }), e.stacked || r) {
                    var s = {};
                    ut.each(n, function(n, a) {
                        var r = i.getDatasetMeta(a),
                            l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
                        i.isDatasetVisible(a) && o(r) && (void 0 === s[l] && (s[l] = []), ut.each(n.data, function(e, i) {
                            var n = s[l],
                                a = +t.getRightValue(e);
                            isNaN(a) || r.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a)
                        }))
                    }), ut.each(s, function(e) {
                        if (e.length > 0) {
                            var i = ut.min(e),
                                n = ut.max(e);
                            t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? n : Math.max(t.max, n)
                        }
                    })
                } else ut.each(n, function(e, n) {
                    var a = i.getDatasetMeta(n);
                    i.isDatasetVisible(n) && o(a) && ut.each(e.data, function(e, i) {
                        var n = +t.getRightValue(e);
                        isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                    })
                });
                this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                t.min = _i(e.min, t.min), t.max = _i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1)
            },
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    i = !t.isHorizontal(),
                    n = {
                        min: _i(e.min),
                        max: _i(e.max)
                    },
                    a = t.ticks = function(t, e) {
                        var i, n, a = [],
                            o = wi(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
                            r = Math.floor(ut.log10(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, r));
                        0 === o ? (i = Math.floor(ut.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(o), o = n * Math.pow(10, i)) : (i = Math.floor(ut.log10(o)), n = Math.floor(o / Math.pow(10, i)));
                        var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                        do {
                            a.push(o), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), o = Math.round(n * Math.pow(10, i) * l) / l
                        } while (i < r || i === r && n < s);
                        var d = wi(t.max, o);
                        return a.push(d), a
                    }(n, t);
                t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(), fi.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.tickValues[t])
            },
            _getFirstTickValue: function(t) {
                var e = Math.floor(ut.log10(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
            },
            getPixelForValue: function(t) {
                var e, i, n, a, o, r = this,
                    s = r.options.ticks,
                    l = s.reverse,
                    d = ut.log10,
                    u = r._getFirstTickValue(r.minNotZero),
                    h = 0;
                return t = +r.getRightValue(t), l ? (n = r.end, a = r.start, o = -1) : (n = r.start, a = r.end, o = 1), r.isHorizontal() ? (e = r.width, i = l ? r.right : r.left) : (e = r.height, o *= -1, i = l ? r.top : r.bottom), t !== n && (0 === n && (e -= h = wi(s.fontSize, st.global.defaultFontSize), n = u), 0 !== t && (h += e / (d(a) - d(n)) * (d(t) - d(n))), i += o * h), i
            },
            getValueForPixel: function(t) {
                var e, i, n, a, o = this,
                    r = o.options.ticks,
                    s = r.reverse,
                    l = ut.log10,
                    d = o._getFirstTickValue(o.minNotZero);
                if (s ? (i = o.end, n = o.start) : (i = o.start, n = o.end), o.isHorizontal() ? (e = o.width, a = s ? o.right - t : t - o.left) : (e = o.height, a = s ? t - o.top : o.bottom - t), a !== i) {
                    if (0 === i) {
                        var u = wi(r.fontSize, st.global.defaultFontSize);
                        a -= u, e -= u, i = d
                    }
                    a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a)
                }
                return a
            }
        }),
        Si = Mi;
    Ci._defaults = Si;
    var Pi = ut.valueOrDefault,
        Ii = ut.valueAtIndexOrDefault,
        Ai = ut.options.resolve,
        Di = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: li.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function Ti(t) {
        var e = t.options;
        return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
    }

    function Fi(t) {
        var e = t.ticks;
        return e.display && t.display ? Pi(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function Li(t, e, i, n, a) {
        return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
        } : t < n || t > a ? {
            start: e - i,
            end: e
        } : {
            start: e,
            end: e + i
        }
    }

    function Ri(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function Oi(t, e, i, n) {
        var a, o, r = i.y + n / 2;
        if (ut.isArray(e))
            for (a = 0, o = e.length; a < o; ++a) t.fillText(e[a], i.x, r), r += n;
        else t.fillText(e, i.x, r)
    }

    function zi(t, e, i) {
        90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
    }

    function Bi(t) {
        return ut.isNumber(t) ? t : 0
    }
    var Ni = bi.extend({
            setDimensions: function() {
                var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Fi(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
            },
            determineDataLimits: function() {
                var t = this,
                    e = t.chart,
                    i = Number.POSITIVE_INFINITY,
                    n = Number.NEGATIVE_INFINITY;
                ut.each(e.data.datasets, function(a, o) {
                    if (e.isDatasetVisible(o)) {
                        var r = e.getDatasetMeta(o);
                        ut.each(a.data, function(e, a) {
                            var o = +t.getRightValue(e);
                            isNaN(o) || r.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n))
                        })
                    }
                }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / Fi(this.options))
            },
            convertTicksToLabels: function() {
                var t = this;
                bi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
                var t = this.options;
                t.display && t.pointLabels.display ? function(t) {
                    var e, i, n, a = ut.options._parseFont(t.options.pointLabels),
                        o = {
                            l: 0,
                            r: t.width,
                            t: 0,
                            b: t.height - t.paddingTop
                        },
                        r = {};
                    t.ctx.font = a.string, t._pointLabelSizes = [];
                    var s, l, d, u = Ti(t);
                    for (e = 0; e < u; e++) {
                        n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, d = t.pointLabels[e] || "", i = ut.isArray(d) ? {
                            w: ut.longestText(s, s.font, d),
                            h: d.length * l
                        } : {
                            w: s.measureText(d).width,
                            h: l
                        }, t._pointLabelSizes[e] = i;
                        var h = t.getIndexAngle(e),
                            c = ut.toDegrees(h) % 360,
                            f = Li(c, n.x, i.w, 0, 180),
                            g = Li(c, n.y, i.h, 90, 270);
                        f.start < o.l && (o.l = f.start, r.l = h), f.end > o.r && (o.r = f.end, r.r = h), g.start < o.t && (o.t = g.start, r.t = h), g.end > o.b && (o.b = g.end, r.b = h)
                    }
                    t.setReductions(t.drawingArea, o, r)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function(t, e, i) {
                var n = this,
                    a = e.l / Math.sin(i.l),
                    o = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                    r = -e.t / Math.cos(i.t),
                    s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
                a = Bi(a), o = Bi(o), r = Bi(r), s = Bi(s), n.drawingArea = Math.min(Math.floor(t - (a + o) / 2), Math.floor(t - (r + s) / 2)), n.setCenterPoint(a, o, r, s)
            },
            setCenterPoint: function(t, e, i, n) {
                var a = this,
                    o = a.width - e - a.drawingArea,
                    r = t + a.drawingArea,
                    s = i + a.drawingArea,
                    l = a.height - a.paddingTop - n - a.drawingArea;
                a.xCenter = Math.floor((r + o) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop)
            },
            getIndexAngle: function(t) {
                return t * (2 * Math.PI / Ti(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (null === t) return 0;
                var i = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
                var t = this.min,
                    e = this.max;
                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
            },
            draw: function() {
                var t = this,
                    e = t.options,
                    i = e.gridLines,
                    n = e.ticks;
                if (e.display) {
                    var a = t.ctx,
                        o = this.getIndexAngle(0),
                        r = ut.options._parseFont(n);
                    (e.angleLines.display || e.pointLabels.display) && function(t) {
                        var e = t.ctx,
                            i = t.options,
                            n = i.angleLines,
                            a = i.gridLines,
                            o = i.pointLabels,
                            r = Pi(n.lineWidth, a.lineWidth),
                            s = Pi(n.color, a.color),
                            l = Fi(i);
                        e.save(), e.lineWidth = r, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Ai([n.borderDash, a.borderDash, []])), e.lineDashOffset = Ai([n.borderDashOffset, a.borderDashOffset, 0]));
                        var d = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            u = ut.options._parseFont(o);
                        e.font = u.string, e.textBaseline = "middle";
                        for (var h = Ti(t) - 1; h >= 0; h--) {
                            if (n.display && r && s) {
                                var c = t.getPointPosition(h, d);
                                e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(c.x, c.y), e.stroke()
                            }
                            if (o.display) {
                                var f = 0 === h ? l / 2 : 0,
                                    g = t.getPointPosition(h, d + f + 5),
                                    p = Ii(o.fontColor, h, st.global.defaultFontColor);
                                e.fillStyle = p;
                                var m = t.getIndexAngle(h),
                                    v = ut.toDegrees(m);
                                e.textAlign = Ri(v), zi(v, t._pointLabelSizes[h], g), Oi(e, t.pointLabels[h] || "", g, u.lineHeight)
                            }
                        }
                        e.restore()
                    }(t), ut.each(t.ticks, function(e, s) {
                        if (s > 0 || n.reverse) {
                            var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                            if (i.display && 0 !== s && function(t, e, i, n) {
                                    var a, o = t.ctx,
                                        r = e.circular,
                                        s = Ti(t),
                                        l = Ii(e.color, n - 1),
                                        d = Ii(e.lineWidth, n - 1);
                                    if ((r || s) && l && d) {
                                        if (o.save(), o.strokeStyle = l, o.lineWidth = d, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), r) o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);
                                        else {
                                            a = t.getPointPosition(0, i), o.moveTo(a.x, a.y);
                                            for (var u = 1; u < s; u++) a = t.getPointPosition(u, i), o.lineTo(a.x, a.y)
                                        }
                                        o.closePath(), o.stroke(), o.restore()
                                    }
                                }(t, i, l, s), n.display) {
                                var d = Pi(n.fontColor, st.global.defaultFontColor);
                                if (a.font = r.string, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(o), n.showLabelBackdrop) {
                                    var u = a.measureText(e).width;
                                    a.fillStyle = n.backdropColor, a.fillRect(-u / 2 - n.backdropPaddingX, -l - r.size / 2 - n.backdropPaddingY, u + 2 * n.backdropPaddingX, r.size + 2 * n.backdropPaddingY)
                                }
                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = d, a.fillText(e, 0, -l), a.restore()
                            }
                        }
                    })
                }
            }
        }),
        Wi = Di;
    Ni._defaults = Wi;
    var Vi = ut.valueOrDefault,
        Ei = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Hi = Number.MAX_SAFE_INTEGER || 9007199254740991,
        ji = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 15, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 15, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        qi = Object.keys(ji);

    function Yi(t, e) {
        return t - e
    }

    function Ui(t) {
        var e, i, n, a = {},
            o = [];
        for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
        return o
    }

    function Xi(t, e, i, n) {
        var a = function(t, e, i) {
                for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
                    if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
                        lo: null,
                        hi: o
                    };
                    if (o[e] < i) r = n + 1;
                    else {
                        if (!(a[e] > i)) return {
                            lo: a,
                            hi: o
                        };
                        s = n - 1
                    }
                }
                return {
                    lo: o,
                    hi: null
                }
            }(t, e, i),
            o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = r[e] - o[e],
            l = s ? (i - o[e]) / s : 0,
            d = (r[n] - o[n]) * l;
        return o[n] + d
    }

    function Ki(t, e) {
        var i = t._adapter,
            n = t.options.time,
            a = n.parser,
            o = a || n.format,
            r = e;
        return "function" == typeof a && (r = a(r)), ut.isFinite(r) || (r = "string" == typeof o ? i.parse(r, o) : i.parse(r)), null !== r ? +r : (a || "function" != typeof o || (r = o(e), ut.isFinite(r) || (r = i.parse(r))), r)
    }

    function Gi(t, e) {
        if (ut.isNullOrUndef(e)) return null;
        var i = t.options.time,
            n = Ki(t, t.getRightValue(e));
        return null === n ? n : (i.round && (n = +t._adapter.startOf(n, i.round)), n)
    }

    function Zi(t) {
        for (var e = qi.indexOf(t) + 1, i = qi.length; e < i; ++e)
            if (ji[qi[e]].common) return qi[e]
    }

    function $i(t, e, i, n) {
        var a, o = t._adapter,
            r = t.options,
            s = r.time,
            l = s.unit || function(t, e, i, n) {
                var a, o, r, s = qi.length;
                for (a = qi.indexOf(t); a < s - 1; ++a)
                    if (r = (o = ji[qi[a]]).steps ? o.steps[o.steps.length - 1] : Hi, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return qi[a];
                return qi[s - 1]
            }(s.minUnit, e, i, n),
            d = Zi(l),
            u = Vi(s.stepSize, s.unitStepSize),
            h = "week" === l && s.isoWeekday,
            c = r.ticks.major.enabled,
            f = ji[l],
            g = e,
            p = i,
            m = [];
        for (u || (u = function(t, e, i, n) {
                var a, o, r, s = e - t,
                    l = ji[i],
                    d = l.size,
                    u = l.steps;
                if (!u) return Math.ceil(s / (n * d));
                for (a = 0, o = u.length; a < o && (r = u[a], !(Math.ceil(s / (d * r)) <= n)); ++a);
                return r
            }(e, i, l, n)), h && (g = +o.startOf(g, "isoWeek", h), p = +o.startOf(p, "isoWeek", h)), g = +o.startOf(g, h ? "day" : l), (p = +o.startOf(p, h ? "day" : l)) < i && (p = +o.add(p, 1, l)), a = g, c && d && !h && !s.round && (a = +o.startOf(a, d), a = +o.add(a, ~~((g - a) / (f.size * u)) * u, l)); a < p; a = +o.add(a, u, l)) m.push(+a);
        return m.push(+a), m
    }
    var Ji = fi.extend({
            initialize: function() {
                this.mergeTicksOptions(), fi.prototype.initialize.call(this)
            },
            update: function() {
                var t = this.options,
                    e = t.time || (t.time = {}),
                    i = this._adapter = new si._date(t.adapters.date);
                return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, i.formats()), fi.prototype.update.apply(this, arguments)
            },
            getRightValue: function(t) {
                return t && void 0 !== t.t && (t = t.t), fi.prototype.getRightValue.call(this, t)
            },
            determineDataLimits: function() {
                var t, e, i, n, a, o, r = this,
                    s = r.chart,
                    l = r._adapter,
                    d = r.options.time,
                    u = d.unit || "day",
                    h = Hi,
                    c = Ei,
                    f = [],
                    g = [],
                    p = [],
                    m = s.data.labels || [];
                for (t = 0, i = m.length; t < i; ++t) p.push(Gi(r, m[t]));
                for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                    if (s.isDatasetVisible(t))
                        if (a = s.data.datasets[t].data, ut.isObject(a[0]))
                            for (g[t] = [], e = 0, n = a.length; e < n; ++e) o = Gi(r, a[e]), f.push(o), g[t][e] = o;
                        else {
                            for (e = 0, n = p.length; e < n; ++e) f.push(p[e]);
                            g[t] = p.slice(0)
                        }
                else g[t] = [];
                p.length && (p = Ui(p).sort(Yi), h = Math.min(h, p[0]), c = Math.max(c, p[p.length - 1])), f.length && (f = Ui(f).sort(Yi), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = Gi(r, d.min) || h, c = Gi(r, d.max) || c, h = h === Hi ? +l.startOf(Date.now(), u) : h, c = c === Ei ? +l.endOf(Date.now(), u) + 1 : c, r.min = Math.min(h, c), r.max = Math.max(h + 1, c), r._horizontal = r.isHorizontal(), r._table = [], r._timestamps = {
                    data: f,
                    datasets: g,
                    labels: p
                }
            },
            buildTicks: function() {
                var t, e, i, n = this,
                    a = n.min,
                    o = n.max,
                    r = n.options,
                    s = r.time,
                    l = [],
                    d = [];
                switch (r.ticks.source) {
                    case "data":
                        l = n._timestamps.data;
                        break;
                    case "labels":
                        l = n._timestamps.labels;
                        break;
                    case "auto":
                    default:
                        l = $i(n, a, o, n.getLabelCapacity(a))
                }
                for ("ticks" === r.bounds && l.length && (a = l[0], o = l[l.length - 1]), a = Gi(n, s.min) || a, o = Gi(n, s.max) || o, t = 0, e = l.length; t < e; ++t)(i = l[t]) >= a && i <= o && d.push(i);
                return n.min = a, n.max = o, n._unit = s.unit || function(t, e, i, n, a) {
                        var o, r;
                        for (o = qi.length - 1; o >= qi.indexOf(i); o--)
                            if (r = qi[o], ji[r].common && t._adapter.diff(a, n, r) >= e.length) return r;
                        return qi[i ? qi.indexOf(i) : 0]
                    }(n, d, s.minUnit, n.min, n.max), n._majorUnit = Zi(n._unit), n._table = function(t, e, i, n) {
                        if ("linear" === n || !t.length) return [{
                            time: e,
                            pos: 0
                        }, {
                            time: i,
                            pos: 1
                        }];
                        var a, o, r, s, l, d = [],
                            u = [e];
                        for (a = 0, o = t.length; a < o; ++a)(s = t[a]) > e && s < i && u.push(s);
                        for (u.push(i), a = 0, o = u.length; a < o; ++a) l = u[a + 1], r = u[a - 1], s = u[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || d.push({
                            time: s,
                            pos: a / (o - 1)
                        });
                        return d
                    }(n._timestamps.data, a, o, r.distribution), n._offsets = function(t, e, i, n, a) {
                        var o, r, s = 0,
                            l = 0;
                        return a.offset && e.length && (a.time.min || (o = Xi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Xi(t, "time", e[1], "pos") - o) / 2), a.time.max || (r = Xi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? r : (r - Xi(t, "time", e[e.length - 2], "pos")) / 2)), {
                            start: s,
                            end: l
                        }
                    }(n._table, d, 0, 0, r), r.ticks.reverse && d.reverse(),
                    function(t, e, i) {
                        var n, a, o, r, s = [];
                        for (n = 0, a = e.length; n < a; ++n) o = e[n], r = !!i && o === +t._adapter.startOf(o, i), s.push({
                            value: o,
                            major: r
                        });
                        return s
                    }(n, d, n._majorUnit)
            },
            getLabelForIndex: function(t, e) {
                var i = this,
                    n = i._adapter,
                    a = i.chart.data,
                    o = i.options.time,
                    r = a.labels && t < a.labels.length ? a.labels[t] : "",
                    s = a.datasets[e].data[t];
                return ut.isObject(s) && (r = i.getRightValue(s)), o.tooltipFormat ? n.format(Ki(i, r), o.tooltipFormat) : "string" == typeof r ? r : n.format(Ki(i, r), o.displayFormats.datetime)
            },
            tickFormatFunction: function(t, e, i, n) {
                var a = this._adapter,
                    o = this.options,
                    r = o.time.displayFormats,
                    s = r[this._unit],
                    l = this._majorUnit,
                    d = r[l],
                    u = +a.startOf(t, l),
                    h = o.ticks.major,
                    c = h.enabled && l && d && t === u,
                    f = a.format(t, n || (c ? d : s)),
                    g = c ? h : o.ticks.minor,
                    p = Vi(g.callback, g.userCallback);
                return p ? p(f, e, i) : f
            },
            convertTicksToLabels: function(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
                return n
            },
            getPixelForOffset: function(t) {
                var e = this,
                    i = e.options.ticks.reverse,
                    n = e._horizontal ? e.width : e.height,
                    a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
                    o = Xi(e._table, "time", t, "pos"),
                    r = n * (e._offsets.start + o) / (e._offsets.start + 1 + e._offsets.end);
                return i ? a - r : a + r
            },
            getPixelForValue: function(t, e, i) {
                var n = null;
                if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Gi(this, t)), null !== n) return this.getPixelForOffset(n)
            },
            getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
            },
            getValueForPixel: function(t) {
                var e = this,
                    i = e._horizontal ? e.width : e.height,
                    n = e._horizontal ? e.left : e.top,
                    a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
                    o = Xi(e._table, "pos", a, "time");
                return e._adapter._create(o)
            },
            getLabelWidth: function(t) {
                var e = this.options.ticks,
                    i = this.ctx.measureText(t).width,
                    n = ut.toRadians(e.maxRotation),
                    a = Math.cos(n),
                    o = Math.sin(n);
                return i * a + Vi(e.fontSize, st.global.defaultFontSize) * o
            },
            getLabelCapacity: function(t) {
                var e = this,
                    i = e.options.time.displayFormats.millisecond,
                    n = e.tickFormatFunction(t, 0, [], i),
                    a = e.getLabelWidth(n),
                    o = e.isHorizontal() ? e.width : e.height,
                    r = Math.floor(o / a);
                return r > 0 ? r : 1
            }
        }),
        Qi = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                autoSkip: !1,
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        };
    Ji._defaults = Qi;
    var tn = {
            category: gi,
            linear: yi,
            logarithmic: Ci,
            radialLinear: Ni,
            time: Ji
        },
        en = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    si._date.override("function" == typeof t ? {
        _id: "moment",
        formats: function() {
            return en
        },
        parse: function(e, i) {
            return "string" == typeof e && "string" == typeof i ? e = t(e, i) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
        },
        format: function(e, i) {
            return t(e).format(i)
        },
        add: function(e, i, n) {
            return t(e).add(i, n).valueOf()
        },
        diff: function(e, i, n) {
            return t.duration(t(e).diff(t(i))).as(n)
        },
        startOf: function(e, i, n) {
            return e = t(e), "isoWeek" === i ? e.isoWeekday(n).valueOf() : e.startOf(i).valueOf()
        },
        endOf: function(e, i) {
            return t(e).endOf(i).valueOf()
        },
        _create: function(e) {
            return t(e)
        }
    } : {}), st._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var nn = {
        dataset: function(t) {
            var e = t.fill,
                i = t.chart,
                n = i.getDatasetMeta(e),
                a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                o = a.length || 0;
            return o ? function(t, e) {
                return e < o && a[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                i = e ? e.x : null,
                n = e ? e.y : null;
            return function(t) {
                return {
                    x: null === i ? t.x : i,
                    y: null === n ? t.y : n
                }
            }
        }
    };

    function an(t, e, i) {
        var n, a = t._model || {},
            o = a.fill;
        if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
        switch (o) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return o;
            default:
                return !1
        }
    }

    function on(t) {
        var e, i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            o = null;
        if (isFinite(a)) return null;
        if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
            if (void 0 !== o.x && void 0 !== o.y) return o;
            if (ut.isFinite(o)) return {
                x: (e = n.isHorizontal()) ? o : null,
                y: e ? null : o
            }
        }
        return null
    }

    function rn(t, e, i) {
        var n, a = t[e].fill,
            o = [e];
        if (!i) return a;
        for (; !1 !== a && -1 === o.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(n = t[a])) return !1;
            if (n.visible) return a;
            o.push(a), a = n.fill
        }
        return !1
    }

    function sn(t) {
        var e = t.fill,
            i = "dataset";
        return !1 === e ? null : (isFinite(e) || (i = "boundary"), nn[i](t))
    }

    function ln(t) {
        return t && !t.skip
    }

    function dn(t, e, i, n, a) {
        var o;
        if (n && a) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) ut.canvas.lineTo(t, e[o - 1], e[o]);
            for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o) ut.canvas.lineTo(t, i[o], i[o - 1], !0)
        }
    }
    var un = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var i, n, a, o, r = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = [];
                for (n = 0; n < r; ++n) o = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Wt.Line && (o = {
                    visible: t.isDatasetVisible(n),
                    fill: an(a, n, r),
                    chart: t,
                    el: a
                }), i.$filler = o, l.push(o);
                for (n = 0; n < r; ++n)(o = l[n]) && (o.fill = rn(l, n, s), o.boundary = on(o), o.mapper = sn(o))
            },
            beforeDatasetDraw: function(t, e) {
                var i = e.meta.$filler;
                if (i) {
                    var n = t.ctx,
                        a = i.el,
                        o = a._view,
                        r = a._children || [],
                        s = i.mapper,
                        l = o.backgroundColor || st.global.defaultColor;
                    s && l && r.length && (ut.canvas.clipArea(n, t.chartArea), function(t, e, i, n, a, o) {
                        var r, s, l, d, u, h, c, f = e.length,
                            g = n.spanGaps,
                            p = [],
                            m = [],
                            v = 0,
                            b = 0;
                        for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r) u = i(d = e[l = r % f]._view, l, n), h = ln(d), c = ln(u), h && c ? (v = p.push(d), b = m.push(u)) : v && b && (g ? (h && p.push(d), c && m.push(u)) : (dn(t, p, m, v, b), v = b = 0, p = [], m = []));
                        dn(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill()
                    }(n, r, s, o, l, a._loop), ut.canvas.unclipArea(n))
                }
            }
        },
        hn = ut.noop,
        cn = ut.valueOrDefault;

    function fn(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    st._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var i = e.datasetIndex,
                    n = this.chart,
                    a = n.getDatasetMeta(i);
                a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data;
                    return ut.isArray(e.datasets) ? e.datasets.map(function(e, i) {
                        return {
                            text: e.label,
                            fillStyle: ut.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                            hidden: !t.isDatasetVisible(i),
                            lineCap: e.borderCapStyle,
                            lineDash: e.borderDash,
                            lineDashOffset: e.borderDashOffset,
                            lineJoin: e.borderJoinStyle,
                            lineWidth: e.borderWidth,
                            strokeStyle: e.borderColor,
                            pointStyle: e.pointStyle,
                            datasetIndex: i
                        }
                    }, this) : []
                }
            }
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
            return e.push("</ul>"), e.join("")
        }
    });
    var gn = pt.extend({
        initialize: function(t) {
            ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: hn,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: hn,
        beforeSetDimensions: hn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: hn,
        beforeBuildLabels: hn,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                i = ut.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (i = i.filter(function(i) {
                return e.filter(i, t.chart.data)
            })), t.options.reverse && i.reverse(), t.legendItems = i
        },
        afterBuildLabels: hn,
        beforeFit: hn,
        fit: function() {
            var t = this,
                e = t.options,
                i = e.labels,
                n = e.display,
                a = t.ctx,
                o = ut.options._parseFont(i),
                r = o.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                d = t.isHorizontal();
            if (d ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n)
                if (a.font = o.string, d) {
                    var u = t.lineWidths = [0],
                        h = 0;
                    a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function(t, e) {
                        var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
                        (0 === e || u[u.length - 1] + n + i.padding > l.width) && (h += r + i.padding, u[u.length - (e > 0 ? 0 : 1)] = i.padding), s[e] = {
                            left: 0,
                            top: 0,
                            width: n,
                            height: r
                        }, u[u.length - 1] += n + i.padding
                    }), l.height += h
                } else {
                    var c = i.padding,
                        f = t.columnWidths = [],
                        g = i.padding,
                        p = 0,
                        m = 0,
                        v = r + c;
                    ut.each(t.legendItems, function(t, e) {
                        var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
                        e > 0 && m + v > l.height - c && (g += p + i.padding, f.push(p), p = 0, m = 0), p = Math.max(p, n), m += v, s[e] = {
                            left: 0,
                            top: 0,
                            width: n,
                            height: r
                        }
                    }), g += p, f.push(p), l.width += g
                }
            t.width = l.width, t.height = l.height
        },
        afterFit: hn,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var t = this,
                e = t.options,
                i = e.labels,
                n = st.global,
                a = n.defaultColor,
                o = n.elements.line,
                r = t.width,
                s = t.lineWidths;
            if (e.display) {
                var l, d = t.ctx,
                    u = cn(i.fontColor, n.defaultFontColor),
                    h = ut.options._parseFont(i),
                    c = h.size;
                d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = u, d.fillStyle = u, d.font = h.string;
                var f = fn(i, c),
                    g = t.legendHitBoxes,
                    p = t.isHorizontal();
                l = p ? {
                    x: t.left + (r - s[0]) / 2 + i.padding,
                    y: t.top + i.padding,
                    line: 0
                } : {
                    x: t.left + i.padding,
                    y: t.top + i.padding,
                    line: 0
                };
                var m = c + i.padding;
                ut.each(t.legendItems, function(n, u) {
                    var h = d.measureText(n.text).width,
                        v = f + c / 2 + h,
                        b = l.x,
                        x = l.y;
                    p ? u > 0 && b + v + i.padding > t.left + t.minSize.width && (x = l.y += m, l.line++, b = l.x = t.left + (r - s[l.line]) / 2 + i.padding) : u > 0 && x + m > t.top + t.minSize.height && (b = l.x = b + t.columnWidths[l.line] + i.padding, x = l.y = t.top + i.padding, l.line++),
                        function(t, i, n) {
                            if (!(isNaN(f) || f <= 0)) {
                                d.save();
                                var r = cn(n.lineWidth, o.borderWidth);
                                if (d.fillStyle = cn(n.fillStyle, a), d.lineCap = cn(n.lineCap, o.borderCapStyle), d.lineDashOffset = cn(n.lineDashOffset, o.borderDashOffset), d.lineJoin = cn(n.lineJoin, o.borderJoinStyle), d.lineWidth = r, d.strokeStyle = cn(n.strokeStyle, a), d.setLineDash && d.setLineDash(cn(n.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                                    var s = f * Math.SQRT2 / 2,
                                        l = t + f / 2,
                                        u = i + c / 2;
                                    ut.canvas.drawPoint(d, n.pointStyle, s, l, u)
                                } else 0 !== r && d.strokeRect(t, i, f, c), d.fillRect(t, i, f, c);
                                d.restore()
                            }
                        }(b, x, n), g[u].left = b, g[u].top = x,
                        function(t, e, i, n) {
                            var a = c / 2,
                                o = f + a + t,
                                r = e + a;
                            d.fillText(i.text, o, r), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, r), d.lineTo(o + n, r), d.stroke())
                        }(b, x, n, h), p ? l.x += v + i.padding : l.y += m
                })
            }
        },
        _getLegendItemAt: function(t, e) {
            var i, n, a, o = this;
            if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom)
                for (a = o.legendHitBoxes, i = 0; i < a.length; ++i)
                    if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return o.legendItems[i];
            return null
        },
        handleEvent: function(t) {
            var e, i = this,
                n = i.options,
                a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!n.onHover && !n.onLeave) return
            } else {
                if ("click" !== a) return;
                if (!n.onClick) return
            }
            e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e))
        }
    });

    function pn(t, e) {
        var i = new gn({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        ke.configure(t, i, e), ke.addBox(t, i), t.legend = i
    }
    var mn = {
            id: "legend",
            _element: gn,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && pn(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    i = t.legend;
                e ? (ut.mergeIf(e, st.global.legend), i ? (ke.configure(t, i, e), i.options = e) : pn(t, e)) : i && (ke.removeBox(t, i), delete t.legend)
            },
            afterEvent: function(t, e) {
                var i = t.legend;
                i && i.handleEvent(e)
            }
        },
        vn = ut.noop;
    st._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var bn = pt.extend({
        initialize: function(t) {
            ut.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: vn,
        update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: vn,
        beforeSetDimensions: vn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: vn,
        beforeBuildLabels: vn,
        buildLabels: vn,
        afterBuildLabels: vn,
        beforeFit: vn,
        fit: function() {
            var t = this,
                e = t.options,
                i = e.display,
                n = t.minSize,
                a = ut.isArray(e.text) ? e.text.length : 1,
                o = ut.options._parseFont(e),
                r = i ? a * o.lineHeight + 2 * e.padding : 0;
            t.isHorizontal() ? (n.width = t.maxWidth, n.height = r) : (n.width = r, n.height = t.maxHeight), t.width = n.width, t.height = n.height
        },
        afterFit: vn,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                i = t.options;
            if (i.display) {
                var n, a, o, r = ut.options._parseFont(i),
                    s = r.lineHeight,
                    l = s / 2 + i.padding,
                    d = 0,
                    u = t.top,
                    h = t.left,
                    c = t.bottom,
                    f = t.right;
                e.fillStyle = ut.valueOrDefault(i.fontColor, st.global.defaultFontColor), e.font = r.string, t.isHorizontal() ? (a = h + (f - h) / 2, o = u + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, o = u + (c - u) / 2, n = c - u, d = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, o), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle";
                var g = i.text;
                if (ut.isArray(g))
                    for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, n), p += s;
                else e.fillText(g, 0, 0, n);
                e.restore()
            }
        }
    });

    function xn(t, e) {
        var i = new bn({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        ke.configure(t, i, e), ke.addBox(t, i), t.titleBlock = i
    }
    var yn = {},
        kn = un,
        wn = mn,
        Mn = {
            id: "title",
            _element: bn,
            beforeInit: function(t) {
                var e = t.options.title;
                e && xn(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    i = t.titleBlock;
                e ? (ut.mergeIf(e, st.global.title), i ? (ke.configure(t, i, e), i.options = e) : xn(t, e)) : i && (ke.removeBox(t, i), delete t.titleBlock)
            }
        };
    for (var _n in yn.filler = kn, yn.legend = wn, yn.title = Mn, ai.helpers = ut,
            function() {
                function t(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function i(i, n, a) {
                    var o = document.defaultView,
                        r = ut._getParentNode(i),
                        s = o.getComputedStyle(i)[n],
                        l = o.getComputedStyle(r)[n],
                        d = e(s),
                        u = e(l),
                        h = Number.POSITIVE_INFINITY;
                    return d || u ? Math.min(d ? t(s, i, a) : h, u ? t(l, r, a) : h) : "none"
                }
                ut.where = function(t, e) {
                    if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return ut.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, ut.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                    return t.findIndex(e, i)
                } : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, ut.findNextWhere = function(t, e, i) {
                    ut.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, ut.findPreviousWhere = function(t, e, i) {
                    ut.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, ut.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, ut.almostEquals = function(t, e, i) {
                    return Math.abs(t - e) < i
                }, ut.almostWhole = function(t, e) {
                    var i = Math.round(t);
                    return i - e < t && i + e > t
                }, ut.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, ut.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, ut.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, ut.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                        i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e
                }, ut.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, ut.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, ut._decimalPlaces = function(t) {
                    if (ut.isFinite(t)) {
                        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                        return i
                    }
                }, ut.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        a = Math.sqrt(i * i + n * n),
                        o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: a
                    }
                }, ut.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, ut.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, ut._alignPixel = function(t, e, i) {
                    var n = t.currentDevicePixelRatio,
                        a = i / 2;
                    return Math.round((e - a) * n) / n + a
                }, ut.splineCurve = function(t, e, i, n) {
                    var a = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        d = s / (s + l),
                        u = l / (s + l),
                        h = n * (d = isNaN(d) ? 0 : d),
                        c = n * (u = isNaN(u) ? 0 : u);
                    return {
                        previous: {
                            x: o.x - h * (r.x - a.x),
                            y: o.y - h * (r.y - a.y)
                        },
                        next: {
                            x: o.x + c * (r.x - a.x),
                            y: o.y + c * (r.y - a.y)
                        }
                    }
                }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function(t) {
                    var e, i, n, a, o, r, s, l, d, u = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        h = u.length;
                    for (e = 0; e < h; ++e)
                        if (!(n = u[e]).model.skip) {
                            if (i = e > 0 ? u[e - 1] : null, (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip) {
                                var c = a.model.x - n.model.x;
                                n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0
                            }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                        }
                    for (e = 0; e < h - 1; ++e) n = u[e], a = u[e + 1], n.model.skip || a.model.skip || (ut.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, r = a.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = o * s * n.deltaK, a.mK = r * s * n.deltaK)));
                    for (e = 0; e < h; ++e)(n = u[e]).model.skip || (i = e > 0 ? u[e - 1] : null, a = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
                }, ut.nextItem = function(t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, ut.previousItem = function(t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, ut.niceNum = function(t, e) {
                    var i = Math.floor(ut.log10(t)),
                        n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, ut.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, ut.getRelativePosition = function(t, e) {
                    var i, n, a = t.originalEvent || t,
                        o = t.target || t.srcElement,
                        r = o.getBoundingClientRect(),
                        s = a.touches;
                    s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
                    var l = parseFloat(ut.getStyle(o, "padding-left")),
                        d = parseFloat(ut.getStyle(o, "padding-top")),
                        u = parseFloat(ut.getStyle(o, "padding-right")),
                        h = parseFloat(ut.getStyle(o, "padding-bottom")),
                        c = r.right - r.left - l - u,
                        f = r.bottom - r.top - d - h;
                    return {
                        x: i = Math.round((i - r.left - l) / c * o.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - r.top - d) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, ut.getConstraintWidth = function(t) {
                    return i(t, "max-width", "clientWidth")
                }, ut.getConstraintHeight = function(t) {
                    return i(t, "max-height", "clientHeight")
                }, ut._calculatePadding = function(t, e, i) {
                    return (e = ut.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, ut._getParentNode = function(t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, ut.getMaximumWidth = function(t) {
                    var e = ut._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var i = e.clientWidth,
                        n = i - ut._calculatePadding(e, "padding-left", i) - ut._calculatePadding(e, "padding-right", i),
                        a = ut.getConstraintWidth(t);
                    return isNaN(a) ? n : Math.min(n, a)
                }, ut.getMaximumHeight = function(t) {
                    var e = ut._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var i = e.clientHeight,
                        n = i - ut._calculatePadding(e, "padding-top", i) - ut._calculatePadding(e, "padding-bottom", i),
                        a = ut.getConstraintHeight(t);
                    return isNaN(a) ? n : Math.min(n, a)
                }, ut.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, ut.retinaScale = function(t, e) {
                    var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas,
                            a = t.height,
                            o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px")
                    }
                }, ut.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                }, ut.longestText = function(t, e, i, n) {
                    var a = (n = n || {}).data = n.data || {},
                        o = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (a = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;
                    var r = 0;
                    ut.each(i, function(e) {
                        null != e && !0 !== ut.isArray(e) ? r = ut.measureText(t, a, o, r, e) : ut.isArray(e) && ut.each(e, function(e) {
                            null == e || ut.isArray(e) || (r = ut.measureText(t, a, o, r, e))
                        })
                    });
                    var s = o.length / 2;
                    if (s > i.length) {
                        for (var l = 0; l < s; l++) delete a[o[l]];
                        o.splice(0, s)
                    }
                    return r
                }, ut.measureText = function(t, e, i, n, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n
                }, ut.numberOfLabelLines = function(t) {
                    var e = 1;
                    return ut.each(t, function(t) {
                        ut.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, ut.color = X ? function(t) {
                    return t instanceof CanvasGradient && (t = st.global.defaultColor), X(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, ut.getHoverColor = function(t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString()
                }
            }(), ai._adapters = si, ai.Animation = vt, ai.animationService = bt, ai.controllers = ue, ai.DatasetController = Mt, ai.defaults = st, ai.Element = pt, ai.elements = Wt, ai.Interaction = ve, ai.layouts = ke, ai.platform = Ve, ai.plugins = Ee, ai.Scale = fi, ai.scaleService = He, ai.Ticks = li, ai.Tooltip = Je, ai.helpers.each(tn, function(t, e) {
                ai.scaleService.registerScaleType(e, t, t._defaults)
            }), yn) yn.hasOwnProperty(_n) && ai.plugins.register(yn[_n]);
    ai.platform.initialize();
    var Cn = ai;
    return "undefined" != typeof window && (window.Chart = ai), ai.Chart = ai, ai.Legend = yn.legend._element, ai.Title = yn.title._element, ai.pluginService = ai.plugins, ai.PluginBase = ai.Element.extend({}), ai.canvasHelpers = ai.helpers.canvas, ai.layoutService = ai.layouts, ai.LinearScaleBase = bi, ai.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(t) {
        ai[t] = function(e, i) {
            return new ai(e, ai.helpers.merge(i || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }))
        }
    }), Cn
});

/**
 * jQuery CSS Customizable Scrollbar v0.2.11
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b("undefined" != typeof exports ? require("jquery") : a.jQuery)
}(this, function(a) {
    "use strict";

    function h(b) {
        if (c.webkit && !b) return {
            height: 0,
            width: 0
        };
        if (!c.data.outer) {
            var d = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            c.data.inner = a("<div>").css(a.extend({}, d)), c.data.outer = a("<div>").css(a.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, d)).append(c.data.inner).appendTo("body")
        }
        return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
            width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
        }
    }

    function i() {
        var a = h(!0);
        return !(a.height || a.width)
    }

    function j(a) {
        var b = a.originalEvent;
        return (!b.axis || b.axis !== b.HORIZONTAL_AXIS) && !b.wheelDeltaX
    }
    var b = !1,
        c = {
            data: {
                index: 0,
                name: "scrollbar"
            },
            firefox: /firefox/i.test(navigator.userAgent),
            macosx: /mac/i.test(navigator.platform),
            msedge: /edge\/\d+/i.test(navigator.userAgent),
            msie: /(msie|trident)/i.test(navigator.userAgent),
            mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
            overlay: null,
            scroll: null,
            scrolls: [],
            webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
        };
    c.scrolls.add = function(a) {
        this.remove(a).push(a)
    }, c.scrolls.remove = function(b) {
        for (; a.inArray(b, this) >= 0;) this.splice(a.inArray(b, this), 1);
        return this
    };
    var d = {
            autoScrollSize: !0,
            autoUpdate: !0,
            debug: !1,
            disableBodyScroll: !1,
            duration: 200,
            ignoreMobile: !1,
            ignoreOverlay: !1,
            isRtl: !1,
            scrollStep: 30,
            showArrows: !1,
            stepScrolling: !0,
            scrollx: null,
            scrolly: null,
            onDestroy: null,
            onFallback: null,
            onInit: null,
            onScroll: null,
            onUpdate: null
        },
        e = function(b) {
            c.scroll || (c.overlay = i(), c.scroll = h(), g(), a(window).resize(function() {
                var a = !1;
                if (c.scroll && (c.scroll.height || c.scroll.width)) {
                    var b = h();
                    b.height === c.scroll.height && b.width === c.scroll.width || (c.scroll = b, a = !0)
                }
                g(a)
            })), this.container = b, this.namespace = ".scrollbar_" + c.data.index++, this.options = a.extend({}, d, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, b.data(c.data.name, this), c.scrolls.add(this)
        };
    e.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(c.data.name), c.scrolls.remove(this);
                var b = this.container.scrollLeft(),
                    d = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(b).scrollTop(d), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), a(document).add("body").off(this.namespace), a.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(b) {
            var d = this,
                e = this.container,
                f = this.containerWrapper || e,
                g = this.namespace,
                h = a.extend(this.options, b || {}),
                i = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                k = this.wrapper,
                l = {},
                m = {
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop()
                };
            if (c.mobile && h.ignoreMobile || c.overlay && h.ignoreOverlay || c.macosx && !c.webkit) return a.isFunction(h.onFallback) && h.onFallback.apply(this, [e]), !1;
            if (k) l = {
                height: "auto",
                "margin-bottom": c.scroll.height * -1 + "px",
                "max-height": ""
            }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.css(l);
            else {
                if (this.wrapper = k = a("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position", "absolute" === e.css("position") ? "absolute" : "relative").insertBefore(e).append(e), h.isRtl && k.addClass("scroll--rtl"), e.is("textarea") && (this.containerWrapper = f = a("<div>").insertBefore(e).append(e), k.addClass("scroll-textarea")), l = {
                        height: "auto",
                        "margin-bottom": c.scroll.height * -1 + "px",
                        "max-height": ""
                    }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.addClass("scroll-content").css(l), e.on("scroll" + g, function(b) {
                        var f = e.scrollLeft(),
                            g = e.scrollTop();
                        if (h.isRtl) switch (!0) {
                            case c.firefox:
                                f = Math.abs(f);
                            case c.msedge || c.msie:
                                f = e[0].scrollWidth - e[0].clientWidth - f
                        }
                        a.isFunction(h.onScroll) && h.onScroll.call(d, {
                            maxScroll: i.y.maxScrollOffset,
                            scroll: g,
                            size: i.y.size,
                            visible: i.y.visible
                        }, {
                            maxScroll: i.x.maxScrollOffset,
                            scroll: f,
                            size: i.x.size,
                            visible: i.x.visible
                        }), i.x.isVisible && i.x.scroll.bar.css("left", f * i.x.kx + "px"), i.y.isVisible && i.y.scroll.bar.css("top", g * i.y.kx + "px")
                    }), k.on("scroll" + g, function() {
                        k.scrollTop(0).scrollLeft(0)
                    }), h.disableBodyScroll) {
                    var n = function(a) {
                        j(a) ? i.y.isVisible && i.y.mousewheel(a) : i.x.isVisible && i.x.mousewheel(a)
                    };
                    k.on("MozMousePixelScroll" + g, n), k.on("mousewheel" + g, n), c.mobile && k.on("touchstart" + g, function(b) {
                        var c = b.originalEvent.touches && b.originalEvent.touches[0] || b,
                            d = {
                                pageX: c.pageX,
                                pageY: c.pageY
                            },
                            f = {
                                left: e.scrollLeft(),
                                top: e.scrollTop()
                            };
                        a(document).on("touchmove" + g, function(a) {
                            var b = a.originalEvent.targetTouches && a.originalEvent.targetTouches[0] || a;
                            e.scrollLeft(f.left + d.pageX - b.pageX), e.scrollTop(f.top + d.pageY - b.pageY), a.preventDefault()
                        }), a(document).on("touchend" + g, function() {
                            a(document).off(g)
                        })
                    })
                }
                a.isFunction(h.onInit) && h.onInit.apply(this, [e])
            }
            a.each(i, function(b, f) {
                var k = null,
                    l = 1,
                    m = "x" === b ? "scrollLeft" : "scrollTop",
                    n = h.scrollStep,
                    o = function() {
                        var a = e[m]();
                        e[m](a + n), 1 == l && a + n >= p && (a = e[m]()), l == -1 && a + n <= p && (a = e[m]()), e[m]() == a && k && k()
                    },
                    p = 0;
                f.scroll || (f.scroll = d._getScroll(h["scroll" + b]).addClass("scroll-" + b), h.showArrows && f.scroll.addClass("scroll-element_arrows_visible"), f.mousewheel = function(a) {
                    if (!f.isVisible || "x" === b && j(a)) return !0;
                    if ("y" === b && !j(a)) return i.x.mousewheel(a), !0;
                    var c = a.originalEvent.wheelDelta * -1 || a.originalEvent.detail,
                        g = f.size - f.visible - f.offset;
                    return c || ("x" === b && a.originalEvent.deltaX ? c = 40 * a.originalEvent.deltaX : "y" === b && a.originalEvent.deltaY && (c = 40 * a.originalEvent.deltaY)), (c > 0 && p < g || c < 0 && p > 0) && (p += c, p < 0 && (p = 0), p > g && (p = g), d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = p, setTimeout(function() {
                        d.scrollTo && (e.stop().animate(d.scrollTo, 240, "linear", function() {
                            p = e[m]()
                        }), d.scrollTo = null)
                    }, 1)), a.preventDefault(), !1
                }, f.scroll.on("MozMousePixelScroll" + g, f.mousewheel).on("mousewheel" + g, f.mousewheel).on("mouseenter" + g, function() {
                    p = e[m]()
                }), f.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + g, function(g) {
                    if (1 != g.which) return !0;
                    l = 1;
                    var i = {
                            eventOffset: g["x" === b ? "pageX" : "pageY"],
                            maxScrollValue: f.size - f.visible - f.offset,
                            scrollbarOffset: f.scroll.bar.offset()["x" === b ? "left" : "top"],
                            scrollbarSize: f.scroll.bar["x" === b ? "outerWidth" : "outerHeight"]()
                        },
                        j = 0,
                        q = 0;
                    if (a(this).hasClass("scroll-arrow")) {
                        if (l = a(this).hasClass("scroll-arrow_more") ? 1 : -1, n = h.scrollStep * l, p = l > 0 ? i.maxScrollValue : 0, h.isRtl) switch (!0) {
                            case c.firefox:
                                p = l > 0 ? 0 : i.maxScrollValue * -1;
                                break;
                            case c.msie || c.msedge:
                        }
                    } else l = i.eventOffset > i.scrollbarOffset + i.scrollbarSize ? 1 : i.eventOffset < i.scrollbarOffset ? -1 : 0, "x" === b && h.isRtl && (c.msie || c.msedge) && (l *= -1), n = Math.round(.75 * f.visible) * l, p = i.eventOffset - i.scrollbarOffset - (h.stepScrolling ? 1 == l ? i.scrollbarSize : 0 : Math.round(i.scrollbarSize / 2)), p = e[m]() + p / f.kx;
                    return d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = h.stepScrolling ? e[m]() + n : p, h.stepScrolling && (k = function() {
                        p = e[m](), clearInterval(q), clearTimeout(j), j = 0, q = 0
                    }, j = setTimeout(function() {
                        q = setInterval(o, 40)
                    }, h.duration + 100)), setTimeout(function() {
                        d.scrollTo && (e.animate(d.scrollTo, h.duration), d.scrollTo = null)
                    }, 1), d._handleMouseDown(k, g)
                }), f.scroll.bar.on("mousedown" + g, function(i) {
                    if (1 != i.which) return !0;
                    var j = i["x" === b ? "pageX" : "pageY"],
                        k = e[m]();
                    return f.scroll.addClass("scroll-draggable"), a(document).on("mousemove" + g, function(a) {
                        var d = parseInt((a["x" === b ? "pageX" : "pageY"] - j) / f.kx, 10);
                        "x" === b && h.isRtl && (c.msie || c.msedge) && (d *= -1), e[m](k + d)
                    }), d._handleMouseDown(function() {
                        f.scroll.removeClass("scroll-draggable"), p = e[m]()
                    }, i)
                }))
            }), a.each(i, function(a, b) {
                var c = "scroll-scroll" + a + "_visible",
                    d = "x" == a ? i.y : i.x;
                b.scroll.removeClass(c), d.scroll.removeClass(c), f.removeClass(c)
            }), a.each(i, function(b, c) {
                a.extend(c, "x" == b ? {
                    offset: parseInt(e.css("left"), 10) || 0,
                    size: e.prop("scrollWidth"),
                    visible: k.width()
                } : {
                    offset: parseInt(e.css("top"), 10) || 0,
                    size: e.prop("scrollHeight"),
                    visible: k.height()
                })
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), a.isFunction(h.onUpdate) && h.onUpdate.apply(this, [e]), a.each(i, function(a, b) {
                var c = "x" === a ? "left" : "top",
                    d = "x" === a ? "outerWidth" : "outerHeight",
                    f = "x" === a ? "width" : "height",
                    g = parseInt(e.css(c), 10) || 0,
                    i = b.size,
                    j = b.visible + g,
                    k = b.scroll.size[d]() + (parseInt(b.scroll.size.css(c), 10) || 0);
                h.autoScrollSize && (b.scrollbarSize = parseInt(k * j / i, 10), b.scroll.bar.css(f, b.scrollbarSize + "px")), b.scrollbarSize = b.scroll.bar[d](), b.kx = (k - b.scrollbarSize) / (i - j) || 1, b.maxScrollOffset = i - j
            }), e.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll")
        },
        _getScroll: function(b) {
            var c = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return c[b] && (b = c[b]), b || (b = c.simple), b = "string" == typeof b ? a(b).appendTo(this.wrapper) : a(b), a.extend(b, {
                bar: b.find(".scroll-bar"),
                size: b.find(".scroll-element_size"),
                track: b.find(".scroll-element_track")
            }), b
        },
        _handleMouseDown: function(b, c) {
            var d = this.namespace;
            return a(document).on("blur" + d, function() {
                a(document).add("body").off(d), b && b()
            }), a(document).on("dragstart" + d, function(a) {
                return a.preventDefault(), !1
            }), a(document).on("mouseup" + d, function() {
                a(document).add("body").off(d), b && b()
            }), a("body").on("selectstart" + d, function(a) {
                return a.preventDefault(), !1
            }), c && c.preventDefault(), !1
        },
        _updateScroll: function(b, d) {
            var e = this.container,
                f = this.containerWrapper || e,
                g = "scroll-scroll" + b + "_visible",
                h = "x" === b ? this.scrolly : this.scrollx,
                i = parseInt(this.container.css("x" === b ? "left" : "top"), 10) || 0,
                j = this.wrapper,
                k = d.size,
                l = d.visible + i;
            d.isVisible = k - l > 1, d.isVisible ? (d.scroll.addClass(g), h.scroll.addClass(g), f.addClass(g)) : (d.scroll.removeClass(g), h.scroll.removeClass(g), f.removeClass(g)), "y" === b && (e.is("textarea") || k < l ? f.css({
                height: l + c.scroll.height + "px",
                "max-height": "none"
            }) : f.css({
                "max-height": l + c.scroll.height + "px"
            })), d.size == e.prop("scrollWidth") && h.size == e.prop("scrollHeight") && d.visible == j.width() && h.visible == j.height() && d.offset == (parseInt(e.css("left"), 10) || 0) && h.offset == (parseInt(e.css("top"), 10) || 0) || (a.extend(this.scrollx, {
                offset: parseInt(e.css("left"), 10) || 0,
                size: e.prop("scrollWidth"),
                visible: j.width()
            }), a.extend(this.scrolly, {
                offset: parseInt(e.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: j.height()
            }), this._updateScroll("x" === b ? "y" : "x", h))
        }
    };
    var f = e;
    a.fn.scrollbar = function(b, d) {
        return "string" != typeof b && (d = b, b = "init"), "undefined" == typeof d && (d = []), a.isArray(d) || (d = [d]), this.not("body, .scroll-wrapper").each(function() {
            var e = a(this),
                g = e.data(c.data.name);
            (g || "init" === b) && (g || (g = new f(e)), g[b] && g[b].apply(g, d))
        }), this
    }, a.fn.scrollbar.options = d;
    var g = function() {
        var a = 0,
            d = 0;
        return function(e) {
            var f, h, i, j, k, l, m;
            for (f = 0; f < c.scrolls.length; f++) j = c.scrolls[f], h = j.container, i = j.options, k = j.wrapper, l = j.scrollx, m = j.scrolly, (e || i.autoUpdate && k && k.is(":visible") && (h.prop("scrollWidth") != l.size || h.prop("scrollHeight") != m.size || k.width() != l.visible || k.height() != m.visible)) && (j.init(), i.debug && (window.console && console.log({
                scrollHeight: h.prop("scrollHeight") + ":" + j.scrolly.size,
                scrollWidth: h.prop("scrollWidth") + ":" + j.scrollx.size,
                visibleHeight: k.height() + ":" + j.scrolly.visible,
                visibleWidth: k.width() + ":" + j.scrollx.visible
            }, !0), d++));
            b && d > 10 ? (window.console && console.log("Scroll updates exceed 10"), g = function() {}) : (clearTimeout(a), a = setTimeout(g, 300))
        }
    }();
    window.angular && ! function(a) {
        a.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var b = d;
            return {
                setOptions: function(c) {
                    a.extend(b, c)
                },
                $get: function() {
                    return {
                        options: a.copy(b)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(a, b) {
            return {
                restrict: "AC",
                link: function(c, d, e) {
                    var f = b(e.jqueryScrollbar),
                        g = f(c);
                    d.scrollbar(g || a.options).on("$destroy", function() {
                        d.scrollbar("destroy")
                    })
                }
            }
        }])
    }(window.angular)
});

/*** FingerPrint ***/

/*
 * Fingerprintjs2 2.0.6 - Modern & flexible browser fingerprint library v2
 * https://github.com/Valve/fingerprintjs2
 * Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/* global define */
(function(name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) {
        define(definition)
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition()
    } else if (context.exports) {
        context.exports = definition()
    } else {
        context[name] = definition()
    }
})('Fingerprint2', this, function() {
    'use strict'

    /// MurmurHash3 related functions

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Add = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] + n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] + n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] + n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += m[0] + n[0]
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Multiply = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] * n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] * n[3]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[2] += m[3] * n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] * n[3]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[2] * n[2]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[3] * n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    var x64Rotl = function(m, n) {
        n %= 64
        if (n === 32) {
            return [m[1], m[0]]
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
        } else {
            n -= 32
            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
        }
    }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    var x64LeftShift = function(m, n) {
        n %= 64
        if (n === 0) {
            return m
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
        } else {
            return [m[1] << (n - 32), 0]
        }
    }
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    var x64Xor = function(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]]
    }
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    var x64Fmix = function(h) {
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
        h = x64Xor(h, [0, h[0] >>> 1])
        return h
    }

    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    var x64hash128 = function(key, seed) {
        key = key || ''
        seed = seed || 0
        var remainder = key.length % 16
        var bytes = key.length - remainder
        var h1 = [0, seed]
        var h2 = [0, seed]
        var k1 = [0, 0]
        var k2 = [0, 0]
        var c1 = [0x87c37b91, 0x114253d5]
        var c2 = [0x4cf5ad43, 0x2745937f]
        for (var i = 0; i < bytes; i = i + 16) {
            k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
            k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
            k1 = x64Multiply(k1, c1)
            k1 = x64Rotl(k1, 31)
            k1 = x64Multiply(k1, c2)
            h1 = x64Xor(h1, k1)
            h1 = x64Rotl(h1, 27)
            h1 = x64Add(h1, h2)
            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
            k2 = x64Multiply(k2, c2)
            k2 = x64Rotl(k2, 33)
            k2 = x64Multiply(k2, c1)
            h2 = x64Xor(h2, k2)
            h2 = x64Rotl(h2, 31)
            h2 = x64Add(h2, h1)
            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
        }
        k1 = [0, 0]
        k2 = [0, 0]
        switch (remainder) {
            case 15:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
                // fallthrough
            case 14:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
                // fallthrough
            case 13:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
                // fallthrough
            case 12:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
                // fallthrough
            case 11:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
                // fallthrough
            case 10:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
                // fallthrough
            case 9:
                k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
                k2 = x64Multiply(k2, c2)
                k2 = x64Rotl(k2, 33)
                k2 = x64Multiply(k2, c1)
                h2 = x64Xor(h2, k2)
                // fallthrough
            case 8:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
                // fallthrough
            case 7:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
                // fallthrough
            case 6:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
                // fallthrough
            case 5:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
                // fallthrough
            case 4:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
                // fallthrough
            case 3:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
                // fallthrough
            case 2:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
                // fallthrough
            case 1:
                k1 = x64Xor(k1, [0, key.charCodeAt(i)])
                k1 = x64Multiply(k1, c1)
                k1 = x64Rotl(k1, 31)
                k1 = x64Multiply(k1, c2)
                h1 = x64Xor(h1, k1)
                // fallthrough
        }
        h1 = x64Xor(h1, [0, key.length])
        h2 = x64Xor(h2, [0, key.length])
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        h1 = x64Fmix(h1)
        h2 = x64Fmix(h2)
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
    }

    var defaultOptions = {
        preprocessor: null,
        audio: {
            timeout: 1000,
            // On iOS 11, audio context can only be used in response to user interaction.
            // We require users to explicitly enable audio fingerprinting on iOS 11.
            // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
            excludeIOS11: true
        },
        fonts: {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            userDefinedFonts: [],
            extendedJsFonts: false
        },
        screen: {
            // To ensure consistent fingerprints when users rotate their mobile devices
            detectScreenOrientation: true
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: false
        },
        extraComponents: [],
        excludes: {
            // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
            'enumerateDevices': true,
            // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
            'pixelRatio': true,
            // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
            'doNotTrack': true,
            // uses js fonts already
            'fontsFlash': true
        },
        NOT_AVAILABLE: 'not available',
        ERROR: 'error',
        EXCLUDED: 'excluded'
    }

    var each = function(obj, iterator) {
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator)
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                iterator(obj[i], i, obj)
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iterator(obj[key], key, obj)
                }
            }
        }
    }

    var map = function(obj, iterator) {
        var results = []
        // Not using strict equality so that this acts as a
        // shortcut to checking for `null` and `undefined`.
        if (obj == null) {
            return results
        }
        if (Array.prototype.map && obj.map === Array.prototype.map) {
            return obj.map(iterator)
        }
        each(obj, function(value, index, list) {
            results.push(iterator(value, index, list))
        })
        return results
    }

    var extendSoft = function(target, source) {
        if (source == null) {
            return target
        }
        var value
        var key
        for (key in source) {
            value = source[key]
            if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
                target[key] = value
            }
        }
        return target
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    var enumerateDevicesKey = function(done, options) {
        if (!isEnumerateDevicesSupported()) {
            return done(options.NOT_AVAILABLE)
        }
        navigator.mediaDevices.enumerateDevices().then(function(devices) {
                done(devices.map(function(device) {
                    return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
                }))
            })
            .catch(function(error) {
                done(error)
            })
    }

    var isEnumerateDevicesSupported = function() {
        return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    }
    // Inspired by and based on https://github.com/cozylife/audio-fingerprint
    var audioKey = function(done, options) {
        var audioOptions = options.audio
        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
            // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
            return done(options.EXCLUDED)
        }

        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

        if (AudioContext == null) {
            return done(options.NOT_AVAILABLE)
        }

        var context = new AudioContext(1, 44100, 44100)

        var oscillator = context.createOscillator()
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(10000, context.currentTime)

        var compressor = context.createDynamicsCompressor()
        each([
            ['threshold', -50],
            ['knee', 40],
            ['ratio', 12],
            ['reduction', -20],
            ['attack', 0],
            ['release', 0.25]
        ], function(item) {
            if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
                compressor[item[0]].setValueAtTime(item[1], context.currentTime)
            }
        })

        oscillator.connect(compressor)
        compressor.connect(context.destination)
        oscillator.start(0)
        context.startRendering()

        var audioTimeoutId = setTimeout(function() {
            console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
            context.oncomplete = function() {}
            context = null
            return done('audioTimeout')
        }, audioOptions.timeout)

        context.oncomplete = function(event) {
            var fingerprint
            try {
                clearTimeout(audioTimeoutId)
                fingerprint = event.renderedBuffer.getChannelData(0)
                    .slice(4500, 5000)
                    .reduce(function(acc, val) {
                        return acc + Math.abs(val)
                    }, 0)
                    .toString()
                oscillator.disconnect()
                compressor.disconnect()
            } catch (error) {
                done(error)
                return
            }
            done(fingerprint)
        }
    }
    var UserAgent = function(done) {
        done(navigator.userAgent)
    }
    var webdriver = function(done, options) {
        done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
    }
    var languageKey = function(done, options) {
        done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
    }
    var colorDepthKey = function(done, options) {
        done(window.screen.colorDepth || options.NOT_AVAILABLE)
    }
    var deviceMemoryKey = function(done, options) {
        done(navigator.deviceMemory || options.NOT_AVAILABLE)
    }
    var pixelRatioKey = function(done, options) {
        done(window.devicePixelRatio || options.NOT_AVAILABLE)
    }
    var screenResolutionKey = function(done, options) {
        done(getScreenResolution(options))
    }
    var getScreenResolution = function(options) {
        var resolution = [window.screen.width, window.screen.height]
        if (options.screen.detectScreenOrientation) {
            resolution.sort().reverse()
        }
        return resolution
    }
    var availableScreenResolutionKey = function(done, options) {
        done(getAvailableScreenResolution(options))
    }
    var getAvailableScreenResolution = function(options) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var available = [window.screen.availHeight, window.screen.availWidth]
            if (options.screen.detectScreenOrientation) {
                available.sort().reverse()
            }
            return available
        }
        // headless browsers
        return options.NOT_AVAILABLE
    }
    var timezoneOffset = function(done) {
        done(new Date().getTimezoneOffset())
    }
    var timezone = function(done, options) {
        if (window.Intl && window.Intl.DateTimeFormat) {
            done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var sessionStorageKey = function(done, options) {
        done(hasSessionStorage(options))
    }
    var localStorageKey = function(done, options) {
        done(hasLocalStorage(options))
    }
    var indexedDbKey = function(done, options) {
        done(hasIndexedDB(options))
    }
    var addBehaviorKey = function(done) {
        // body might not be defined at this point or removed programmatically
        done(!!(document.body && document.body.addBehavior))
    }
    var openDatabaseKey = function(done) {
        done(!!window.openDatabase)
    }
    var cpuClassKey = function(done, options) {
        done(getNavigatorCpuClass(options))
    }
    var platformKey = function(done, options) {
        done(getNavigatorPlatform(options))
    }
    var doNotTrackKey = function(done, options) {
        done(getDoNotTrack(options))
    }
    var canvasKey = function(done, options) {
        if (isCanvasSupported()) {
            done(getCanvasFp(options))
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglKey = function(done, options) {
        if (isWebGlSupported()) {
            done(getWebglFp())
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglVendorAndRendererKey = function(done) {
        if (isWebGlSupported()) {
            done(getWebglVendorAndRenderer())
            return
        }
        done()
    }
    var adBlockKey = function(done) {
        done(getAdBlock())
    }
    var hasLiedLanguagesKey = function(done) {
        done(getHasLiedLanguages())
    }
    var hasLiedResolutionKey = function(done) {
        done(getHasLiedResolution())
    }
    var hasLiedOsKey = function(done) {
        done(getHasLiedOs())
    }
    var hasLiedBrowserKey = function(done) {
        done(getHasLiedBrowser())
    }
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    var flashFontsKey = function(done, options) {
        // we do flash if swfobject is loaded
        if (!hasSwfObjectLoaded()) {
            return done('swf object not loaded')
        }
        if (!hasMinFlashInstalled()) {
            return done('flash not installed')
        }
        if (!options.fonts.swfPath) {
            return done('missing options.fonts.swfPath')
        }
        loadSwfAndDetectFonts(function(fonts) {
            done(fonts)
        }, options)
    }
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    var jsFontsKey = function(done, options) {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ['monospace', 'sans-serif', 'serif']

        var fontList = [
            'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
            'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
            'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
            'Geneva', 'Georgia',
            'Helvetica', 'Helvetica Neue',
            'Impact',
            'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
            'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
            'Palatino', 'Palatino Linotype',
            'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
            'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
            'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
        ]

        if (options.fonts.extendedJsFonts) {
            var extendedFontList = [
                'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
                'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
                'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
                'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
                'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
                'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
                'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
                'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
                'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
                'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
                'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
                'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
                'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
                'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
                'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
                'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
                'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
                'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
                'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
                'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
                'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
                'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
                'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
                'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
                'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
                'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
                'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
                'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
                'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
                'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
                'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF'
            ]
            fontList = fontList.concat(extendedFontList)
        }

        fontList = fontList.concat(options.fonts.userDefinedFonts)

        // remove duplicate fonts
        fontList = fontList.filter(function(font, position) {
            return fontList.indexOf(font) === position
        })

        // we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = 'mmmmmmmmmmlli'

        // we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px'

        var h = document.getElementsByTagName('body')[0]

        // div to load spans for the base fonts
        var baseFontsDiv = document.createElement('div')

        // div to load spans for the fonts to detect
        var fontsDiv = document.createElement('div')

        var defaultWidth = {}
        var defaultHeight = {}

        // creates a span where the fonts will be loaded
        var createSpan = function() {
            var s = document.createElement('span')
            /*
             * We need this css as in some weird browser this
             * span elements shows up for a microSec which creates a
             * bad user experience
             */
            s.style.position = 'absolute'
            s.style.left = '-9999px'
            s.style.fontSize = testSize

            // css font reset to reset external styles
            s.style.fontStyle = 'normal'
            s.style.fontWeight = 'normal'
            s.style.letterSpacing = 'normal'
            s.style.lineBreak = 'auto'
            s.style.lineHeight = 'normal'
            s.style.textTransform = 'none'
            s.style.textAlign = 'left'
            s.style.textDecoration = 'none'
            s.style.textShadow = 'none'
            s.style.whiteSpace = 'normal'
            s.style.wordBreak = 'normal'
            s.style.wordSpacing = 'normal'

            s.innerHTML = testString
            return s
        }

        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan()
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
            return s
        }

        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function() {
            var spans = []
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan()
                s.style.fontFamily = baseFonts[index]
                baseFontsDiv.appendChild(s)
                spans.push(s)
            }
            return spans
        }

        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function() {
            var spans = {}
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = []
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j])
                    fontsDiv.appendChild(s)
                    fontSpans.push(s)
                }
                spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
            }
            return spans
        }

        // checks if a font is available
        var isFontAvailable = function(fontSpans) {
            var detected = false
            for (var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                if (detected) {
                    return detected
                }
            }
            return detected
        }

        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans()

        // add the spans to the DOM
        h.appendChild(baseFontsDiv)

        // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
        }

        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans()

        // add all the spans to the DOM
        h.appendChild(fontsDiv)

        // check available fonts
        var available = []
        for (var i = 0, l = fontList.length; i < l; i++) {
            if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i])
            }
        }

        // remove spans from DOM
        h.removeChild(fontsDiv)
        h.removeChild(baseFontsDiv)
        done(available)
    }
    var pluginsComponent = function(done, options) {
        if (isIE()) {
            if (!options.plugins.excludeIE) {
                done(getIEPlugins(options))
            } else {
                done(options.EXCLUDED)
            }
        } else {
            done(getRegularPlugins(options))
        }
    }
    var getRegularPlugins = function(options) {
        if (navigator.plugins == null) {
            return options.NOT_AVAILABLE
        }

        var plugins = []
        // plugins isn't defined in Node envs.
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
            if (navigator.plugins[i]) {
                plugins.push(navigator.plugins[i])
            }
        }

        // sorting plugins only for those user agents, that we know randomize the plugins
        // every time we try to enumerate them
        if (pluginsShouldBeSorted(options)) {
            plugins = plugins.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
        }
        return map(plugins, function(p) {
            var mimeTypes = map(p, function(mt) {
                return [mt.type, mt.suffixes]
            })
            return [p.name, p.description, mimeTypes]
        })
    }
    var getIEPlugins = function(options) {
        var result = []
        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
            var names = [
                'AcroPDF.PDF', // Adobe PDF reader 7+
                'Adodb.Stream',
                'AgControl.AgControl', // Silverlight
                'DevalVRXCtrl.DevalVRXCtrl.1',
                'MacromediaFlashPaper.MacromediaFlashPaper',
                'Msxml2.DOMDocument',
                'Msxml2.XMLHTTP',
                'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
                'QuickTime.QuickTime', // QuickTime
                'QuickTimeCheckObject.QuickTimeCheck.1',
                'RealPlayer',
                'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
                'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
                'Scripting.Dictionary',
                'SWCtl.SWCtl', // ShockWave player
                'Shell.UIHelper',
                'ShockwaveFlash.ShockwaveFlash', // flash plugin
                'Skype.Detection',
                'TDCCtl.TDCCtl',
                'WMPlayer.OCX', // Windows media player
                'rmocx.RealPlayer G2 Control',
                'rmocx.RealPlayer G2 Control.1'
            ]
            // starting to detect plugins in IE
            result = map(names, function(name) {
                try {
                    // eslint-disable-next-line no-new
                    new window.ActiveXObject(name)
                    return name
                } catch (e) {
                    return options.ERROR
                }
            })
        } else {
            result.push(options.NOT_AVAILABLE)
        }
        if (navigator.plugins) {
            result = result.concat(getRegularPlugins(options))
        }
        return result
    }
    var pluginsShouldBeSorted = function(options) {
        var should = false
        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
            var re = options.plugins.sortPluginsFor[i]
            if (navigator.userAgent.match(re)) {
                should = true
                break
            }
        }
        return should
    }
    var touchSupportKey = function(done) {
        done(getTouchSupport())
    }
    var hardwareConcurrencyKey = function(done, options) {
        done(getHardwareConcurrency(options))
    }
    var hasSessionStorage = function(options) {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return options.ERROR // SecurityError when referencing it means it exists
        }
    }

    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    var hasLocalStorage = function(options) {
        try {
            return !!window.localStorage
        } catch (e) {
            return options.ERROR // SecurityError when referencing it means it exists
        }
    }
    var hasIndexedDB = function(options) {
        try {
            return !!window.indexedDB
        } catch (e) {
            return options.ERROR // SecurityError when referencing it means it exists
        }
    }
    var getHardwareConcurrency = function(options) {
        if (navigator.hardwareConcurrency) {
            return navigator.hardwareConcurrency
        }
        return options.NOT_AVAILABLE
    }
    var getNavigatorCpuClass = function(options) {
        return navigator.cpuClass || options.NOT_AVAILABLE
    }
    var getNavigatorPlatform = function(options) {
        if (navigator.platform) {
            return navigator.platform
        } else {
            return options.NOT_AVAILABLE
        }
    }
    var getDoNotTrack = function(options) {
        if (navigator.doNotTrack) {
            return navigator.doNotTrack
        } else if (navigator.msDoNotTrack) {
            return navigator.msDoNotTrack
        } else if (window.doNotTrack) {
            return window.doNotTrack
        } else {
            return options.NOT_AVAILABLE
        }
    }
    // This is a crude and primitive touch screen detection.
    // It's not possible to currently reliably detect the  availability of a touch screen
    // with a JS, without actually subscribing to a touch event.
    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
    // https://github.com/Modernizr/Modernizr/issues/548
    // method returns an array of 3 values:
    // maxTouchPoints, the success or failure of creating a TouchEvent,
    // and the availability of the 'ontouchstart' property

    var getTouchSupport = function() {
        var maxTouchPoints = 0
        var touchEvent
        if (typeof navigator.maxTouchPoints !== 'undefined') {
            maxTouchPoints = navigator.maxTouchPoints
        } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
            maxTouchPoints = navigator.msMaxTouchPoints
        }
        try {
            document.createEvent('TouchEvent')
            touchEvent = true
        } catch (_) {
            touchEvent = false
        }
        var touchStart = 'ontouchstart' in window
        return [maxTouchPoints, touchEvent, touchStart]
    }
    // https://www.browserleaks.com/canvas#how-does-it-work

    var getCanvasFp = function(options) {
        var result = []
        // Very simple now, need to make it more complex (geo shapes etc)
        var canvas = document.createElement('canvas')
        canvas.width = 2000
        canvas.height = 200
        canvas.style.display = 'inline'
        var ctx = canvas.getContext('2d')
        // detect browser support of canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
        ctx.rect(0, 0, 10, 10)
        ctx.rect(2, 2, 6, 6)
        result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

        ctx.textBaseline = 'alphabetic'
        ctx.fillStyle = '#f60'
        ctx.fillRect(125, 1, 62, 20)
        ctx.fillStyle = '#069'
        // https://github.com/Valve/fingerprintjs2/issues/66
        if (options.dontUseFakeFontInCanvas) {
            ctx.font = '11pt Arial'
        } else {
            ctx.font = '11pt no-real-font-123'
        }
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
        ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
        ctx.font = '18pt Arial'
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

        // canvas blending
        // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
        // http://jsfiddle.net/NDYV8/16/
        ctx.globalCompositeOperation = 'multiply'
        ctx.fillStyle = 'rgb(255,0,255)'
        ctx.beginPath()
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(0,255,255)'
        ctx.beginPath()
        ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,255,0)'
        ctx.beginPath()
        ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,0,255)'
        // canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // http://jsfiddle.net/NDYV8/19/
        ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
        ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
        ctx.fill('evenodd')

        if (canvas.toDataURL) {
            result.push('canvas fp:' + canvas.toDataURL())
        }
        return result
    }
    var getWebglFp = function() {
        var gl
        var fa2s = function(fa) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0)
            gl.enable(gl.DEPTH_TEST)
            gl.depthFunc(gl.LEQUAL)
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            return '[' + fa[0] + ', ' + fa[1] + ']'
        }
        var maxAnisotropy = function(gl) {
            var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
            if (ext) {
                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                if (anisotropy === 0) {
                    anisotropy = 2
                }
                return anisotropy
            } else {
                return null
            }
        }

        gl = getWebglCanvas()
        if (!gl) {
            return null
        }
        // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
        // First it draws a gradient object with shaders and convers the image to the Base64 string.
        // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
        // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
        var result = []
        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
        var vertexPosBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        vertexPosBuffer.itemSize = 3
        vertexPosBuffer.numItems = 3
        var program = gl.createProgram()
        var vshader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(vshader, vShaderTemplate)
        gl.compileShader(vshader)
        var fshader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(fshader, fShaderTemplate)
        gl.compileShader(fshader)
        gl.attachShader(program, vshader)
        gl.attachShader(program, fshader)
        gl.linkProgram(program)
        gl.useProgram(program)
        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
        gl.enableVertexAttribArray(program.vertexPosArray)
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
        gl.uniform2f(program.offsetUniform, 1, 1)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
        try {
            result.push(gl.canvas.toDataURL())
        } catch (e) {
            /* .toDataURL may be absent or broken (blocked by extension) */
        }
        result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
        result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
        result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
        result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
        result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
        result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
        result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
        result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
        result.push('webgl max anisotropy:' + maxAnisotropy(gl))
        result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
        result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
        result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
        result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
        result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
        result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
        result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
        result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
        result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
        result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
        result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
        result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
        result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
        result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
        result.push('webgl version:' + gl.getParameter(gl.VERSION))

        try {
            // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
            var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
            if (extensionDebugRendererInfo) {
                result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
                result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
            }
        } catch (e) { /* squelch */ }

        if (!gl.getShaderPrecisionFormat) {
            return result
        }

        each(['FLOAT', 'INT'], function(numType) {
            each(['VERTEX', 'FRAGMENT'], function(shader) {
                each(['HIGH', 'MEDIUM', 'LOW'], function(numSize) {
                    each(['precision', 'rangeMin', 'rangeMax'], function(key) {
                        var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                        if (key !== 'precision') {
                            key = 'precision ' + key
                        }
                        var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
                        result.push(line)
                    })
                })
            })
        })
        return result
    }
    var getWebglVendorAndRenderer = function() {
        /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
        try {
            var glContext = getWebglCanvas()
            var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
            return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
        } catch (e) {
            return null
        }
    }
    var getAdBlock = function() {
        var ads = document.createElement('div')
        ads.innerHTML = '&nbsp;'
        ads.className = 'adsbox'
        var result = false
        try {
            // body may not exist, that's why we need try/catch
            document.body.appendChild(ads)
            result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
            document.body.removeChild(ads)
        } catch (e) {
            result = false
        }
        return result
    }
    var getHasLiedLanguages = function() {
        // We check if navigator.language is equal to the first language of navigator.languages
        if (typeof navigator.languages !== 'undefined') {
            try {
                var firstLanguages = navigator.languages[0].substr(0, 2)
                if (firstLanguages !== navigator.language.substr(0, 2)) {
                    return true
                }
            } catch (err) {
                return true
            }
        }
        return false
    }
    var getHasLiedResolution = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
    var getHasLiedOs = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var oscpu = navigator.oscpu
        var platform = navigator.platform.toLowerCase()
        var os
        // We extract the OS from the user agent (respect the order of the if else if statement)
        if (userAgent.indexOf('windows phone') >= 0) {
            os = 'Windows Phone'
        } else if (userAgent.indexOf('win') >= 0) {
            os = 'Windows'
        } else if (userAgent.indexOf('android') >= 0) {
            os = 'Android'
        } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) {
            os = 'Linux'
        } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
            os = 'iOS'
        } else if (userAgent.indexOf('mac') >= 0) {
            os = 'Mac'
        } else {
            os = 'Other'
        }
        // We detect if the person uses a mobile device
        var mobileDevice = (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0))

        if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
            return true
        }

        // We compare oscpu with the OS extracted from the UA
        if (typeof oscpu !== 'undefined') {
            oscpu = oscpu.toLowerCase()
            if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
                return true
            } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
                return true
            } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
                return true
            } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
                return true
            }
        }

        // We compare platform with the OS extracted from the UA
        if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
            return true
        } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
            return true
        } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
            return true
        } else if ((platform.indexOf('win') < 0 && platform.indexOf('linux') < 0 && platform.indexOf('mac') < 0 && platform.indexOf('iphone') < 0) !== (os === 'Other')) {
            return true
        }

        return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
    }
    var getHasLiedBrowser = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var productSub = navigator.productSub

        // we extract the browser from the user agent (respect the order of the tests)
        var browser
        if (userAgent.indexOf('firefox') >= 0) {
            browser = 'Firefox'
        } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
            browser = 'Opera'
        } else if (userAgent.indexOf('chrome') >= 0) {
            browser = 'Chrome'
        } else if (userAgent.indexOf('safari') >= 0) {
            browser = 'Safari'
        } else if (userAgent.indexOf('trident') >= 0) {
            browser = 'Internet Explorer'
        } else {
            browser = 'Other'
        }

        if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
            return true
        }

        // eslint-disable-next-line no-eval
        var tempRes = eval.toString().length
        if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
            return true
        } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
            return true
        } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
            return true
        }

        // We create an error to see how it is handled
        var errFirefox
        try {
            // eslint-disable-next-line no-throw-literal
            throw 'a'
        } catch (err) {
            try {
                err.toSource()
                errFirefox = true
            } catch (errOfErr) {
                errFirefox = false
            }
        }
        return errFirefox && browser !== 'Firefox' && browser !== 'Other'
    }
    var isCanvasSupported = function() {
        var elem = document.createElement('canvas')
        return !!(elem.getContext && elem.getContext('2d'))
    }
    var isWebGlSupported = function() {
        // code taken from Modernizr
        if (!isCanvasSupported()) {
            return false
        }

        var glContext = getWebglCanvas()
        return !!window.WebGLRenderingContext && !!glContext
    }
    var isIE = function() {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            return true
        } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
            return true
        }
        return false
    }
    var hasSwfObjectLoaded = function() {
        return typeof window.swfobject !== 'undefined'
    }
    var hasMinFlashInstalled = function() {
        return window.swfobject.hasFlashPlayerVersion('9.0.0')
    }
    var addFlashDivNode = function(options) {
        var node = document.createElement('div')
        node.setAttribute('id', options.fonts.swfContainerId)
        document.body.appendChild(node)
    }
    var loadSwfAndDetectFonts = function(done, options) {
        var hiddenCallback = '___fp_swf_loaded'
        window[hiddenCallback] = function(fonts) {
            done(fonts)
        }
        var id = options.fonts.swfContainerId
        addFlashDivNode()
        var flashvars = {
            onReady: hiddenCallback
        }
        var flashparams = {
            allowScriptAccess: 'always',
            menu: 'false'
        }
        window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
    }
    var getWebglCanvas = function() {
        var canvas = document.createElement('canvas')
        var gl = null
        try {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        } catch (e) { /* squelch */ }
        if (!gl) {
            gl = null
        }
        return gl
    }

    var components = [
        // {key: 'userAgent', getData: UserAgent},
        {
            key: 'webdriver',
            getData: webdriver
        },
        {
            key: 'language',
            getData: languageKey
        },
        {
            key: 'colorDepth',
            getData: colorDepthKey
        },
        {
            key: 'deviceMemory',
            getData: deviceMemoryKey
        },
        {
            key: 'pixelRatio',
            getData: pixelRatioKey
        },
        {
            key: 'hardwareConcurrency',
            getData: hardwareConcurrencyKey
        },
        {
            key: 'screenResolution',
            getData: screenResolutionKey
        },
        {
            key: 'availableScreenResolution',
            getData: availableScreenResolutionKey
        },
        {
            key: 'timezoneOffset',
            getData: timezoneOffset
        },
        {
            key: 'timezone',
            getData: timezone
        },
        {
            key: 'sessionStorage',
            getData: sessionStorageKey
        },
        {
            key: 'localStorage',
            getData: localStorageKey
        },
        //{key: 'indexedDb', getData: indexedDbKey},
        {
            key: 'addBehavior',
            getData: addBehaviorKey
        },
        {
            key: 'openDatabase',
            getData: openDatabaseKey
        },
        {
            key: 'cpuClass',
            getData: cpuClassKey
        },
        {
            key: 'platform',
            getData: platformKey
        },
        {
            key: 'doNotTrack',
            getData: doNotTrackKey
        },
        {
            key: 'plugins',
            getData: pluginsComponent
        },
        {
            key: 'webgl',
            getData: webglKey
        },
        {
            key: 'webglVendorAndRenderer',
            getData: webglVendorAndRendererKey
        },
        {
            key: 'canvas',
            getData: canvasKey
        },
        // {key: 'adBlock', getData: adBlockKey},
        {
            key: 'hasLiedLanguages',
            getData: hasLiedLanguagesKey
        },
        {
            key: 'hasLiedResolution',
            getData: hasLiedResolutionKey
        },
        {
            key: 'hasLiedOs',
            getData: hasLiedOsKey
        },
        {
            key: 'hasLiedBrowser',
            getData: hasLiedBrowserKey
        },
        {
            key: 'touchSupport',
            getData: touchSupportKey
        },
        {
            key: 'fonts',
            getData: jsFontsKey,
            pauseBefore: true
        },
        {
            key: 'fontsFlash',
            getData: flashFontsKey,
            pauseBefore: true
        },
        {
            key: 'audio',
            getData: audioKey
        },
        {
            key: 'enumerateDevices',
            getData: enumerateDevicesKey
        }
    ]

    var Fingerprint2 = function(options) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }

    Fingerprint2.get = function(options, callback) {
        if (!callback) {
            callback = options
            options = {}
        } else if (!options) {
            options = {}
        }
        extendSoft(options, defaultOptions)
        options.components = options.extraComponents.concat(components)

        var keys = {
            data: [],
            addPreprocessedComponent: function(key, value) {
                if (typeof options.preprocessor === 'function') {
                    value = options.preprocessor(key, value)
                }
                keys.data.push({
                    key: key,
                    value: value
                })
            }
        }

        var i = -1
        var chainComponents = function(alreadyWaited) {
            i += 1
            if (i >= options.components.length) { // on finish
                callback(keys.data)
                return
            }
            var component = options.components[i]

            if (options.excludes[component.key]) {
                chainComponents(false) // skip
                return
            }

            if (!alreadyWaited && component.pauseBefore) {
                i -= 1
                setTimeout(function() {
                    chainComponents(true)
                }, 1)
                return
            }

            try {
                component.getData(function(value) {
                    keys.addPreprocessedComponent(component.key, value)
                    chainComponents(false)
                }, options)
            } catch (error) {
                // main body error
                keys.addPreprocessedComponent(component.key, String(error))
                chainComponents(false)
            }
        }

        chainComponents(false)
    }

    Fingerprint2.getPromise = function(options) {
        return new Promise(function(resolve, reject) {
            Fingerprint2.get(options, resolve)
        })
    }

    Fingerprint2.getV18 = function(options, callback) {
        if (callback == null) {
            callback = options
            options = {}
        }
        return Fingerprint2.get(options, function(components) {
            var newComponents = []
            for (var i = 0; i < components.length; i++) {
                var component = components[i]
                if (component.value === (options.NOT_AVAILABLE || 'not available')) {
                    newComponents.push({
                        key: component.key,
                        value: 'unknown'
                    })
                } else if (component.key === 'plugins') {
                    newComponents.push({
                        key: 'plugins',
                        value: map(component.value, function(p) {
                            var mimeTypes = map(p[2], function(mt) {
                                if (mt.join) {
                                    return mt.join('~')
                                }
                                return mt
                            }).join(',')
                            return [p[0], p[1], mimeTypes].join('::')
                        })
                    })
                } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
                    newComponents.push({
                        key: component.key,
                        value: component.value.join('~')
                    })
                } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
                    if (component.value) {
                        newComponents.push({
                            key: component.key,
                            value: 1
                        })
                    } else {
                        // skip
                        continue
                    }
                } else {
                    if (component.value) {
                        newComponents.push(component.value.join ? {
                            key: component.key,
                            value: component.value.join(';')
                        } : component)
                    } else {
                        newComponents.push({
                            key: component.key,
                            value: component.value
                        })
                    }
                }
            }
            var murmur = x64hash128(map(newComponents, function(component) {
                return component.value
            }).join('~~~'), 31)
            callback(murmur, newComponents)
        })
    }

    Fingerprint2.x64hash128 = x64hash128
    Fingerprint2.VERSION = '2.0.6'
    return Fingerprint2
})