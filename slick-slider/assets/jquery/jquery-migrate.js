/*! jQuery Migrate v3.3.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function (s, n) {
        "use strict";

        function e(e) {
            return 0 <= function (e, t) {
                var r, n = /^(\d+)\.(\d+)\.(\d+)/,
                    i = n.exec(e) || [],
                    o = n.exec(t) || [];
                for (r = 1; r <= 3; r++) {
                    if (+i[r] > +o[r]) return 1;
                    if (+i[r] < +o[r]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.0", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return u(n), r
                },
                set: function (e) {
                    u(n), r = e
                }
            })
        }

        function i(e, t, r, n) {
            e[t] = function () {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var o, a = {},
            c = s.fn.init,
            d = s.find,
            l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            p = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (o in s.fn.init = function (e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), c.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function (t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && l.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(p, function (e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return d.apply(this, r)
            }, d) Object.prototype.hasOwnProperty.call(d, o) && (s.find[o] = d[o]);
        if (i(s.fn, "size", function () {
                return this.length
            }, "jQuery.fn.size() is deprecated and removed; use the .length property"), i(s, "parseJSON", function () {
                return JSON.parse.apply(null, arguments)
            }, "jQuery.parseJSON is deprecated; use JSON.parse"), i(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), i(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && i(s, "trim", function (e) {
                return null == e ? "" : (e + "").replace(f, "")
            }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && i(s, "nodeName", function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, "jQuery.nodeName is deprecated"), e("3.3.0") && (i(s, "isNumeric", function (e) {
                var t = typeof e;
                return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                a["[object " + t + "]"] = t.toLowerCase()
            }), i(s, "type", function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[Object.prototype.toString.call(e)] || "object" : typeof e
            }, "jQuery.type is deprecated"), i(s, "isFunction", function (e) {
                return "function" == typeof e
            }, "jQuery.isFunction() is deprecated"), i(s, "isWindow", function (e) {
                return null != e && e === e.window
            }, "jQuery.isWindow() is deprecated"), i(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), s.ajax) {
            var y = s.ajax;
            s.ajax = function () {
                var e = y.apply(this, arguments);
                return e.promise && (i(e, "success", e.done, "jQXHR.success is deprecated and removed"), i(e, "error", e.fail, "jQXHR.error is deprecated and removed"), i(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
            }
        }
        var m = s.fn.removeAttr,
            g = s.fn.toggleClass,
            h = /\S+/g;

        function v(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function (e) {
            var r = this;
            return s.each(e.match(h), function (e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), m.apply(this, arguments)
        };
        var j, Q = !(s.fn.toggleClass = function (t) {
                return void 0 !== t && "boolean" != typeof t ? g.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : s.data(this, "__className__") || "")
                }))
            }),
            b = /^[a-z]/,
            w = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function () {
                var e;
                return Q = !0, e = r.apply(this, arguments), Q = !1, e
            })
        }), s.swap = function (e, t, r, n) {
            var i, o, a = {};
            for (o in Q || u("jQuery.swap() is undocumented and deprecated"), t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = r.apply(e, n || []), t) e.style[o] = a[o];
            return i
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function () {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), j = s.fn.css, s.fn.css = function (e, t) {
            var r = this;
            return "string" != typeof e && s.each(e, function (e, t) {
                s.fn.css.call(r, e, t)
            }), "number" != typeof t || function (e) {
                return b.test(e) && w.test(e[0].toUpperCase() + e.slice(1))
            }(v(e)) || u("Use of number-typed values is deprecated in jQuery.fn.css"), j.apply(this, arguments)
        };
        var x = s.data;
        if (s.data = function (e, t, r) {
                var n, i, o;
                if (t && "object" == typeof t && 2 === arguments.length) {
                    for (o in n = s.hasData(e) && x.call(this, e), i = {}, t) o !== v(o) ? (u("jQuery.data() always sets/gets camelCased names: " + o), n[o] = t[o]) : i[o] = t[o];
                    return x.call(this, e, i), t
                }
                return t && "string" == typeof t && t !== v(t) && (n = s.hasData(e) && x.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : x.apply(this, arguments)
            }, s.fx) {
            var A, k, M = s.Tween.prototype.run,
                S = function (e) {
                    return e
                };
            s.Tween.prototype.run = function () {
                1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = S), M.apply(this, arguments)
            }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return n.document.hidden || u(k), A
                },
                set: function (e) {
                    u(k), A = e
                }
            })
        }
        var H = s.fn.load,
            R = s.event.add,
            N = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                i = s.event.props;
            if (i.length) {
                u("jQuery.event.props are deprecated and removed: " + i.join());
                while (i.length) s.event.addProp(i.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (i = n.props) && i.length))
                while (i.length) s.event.addProp(i.pop());
            return t = N.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function (e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), R.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function (e, t) {
            s.fn[t] = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? H.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
            s.fn[r] = function (e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function () {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function () {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function (e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function (e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function (e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function (e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function (e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function C(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function T(e) {
            var t = e.replace(P, "<$1></$2>");
            t !== e && C(e) !== C(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var P = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            s.htmlPrefilter = function (e) {
                return T(e), e.replace(P, "<$1></$2>")
            }
        }, s.htmlPrefilter = function (e) {
            return T(e), q(e)
        };
        var D = s.fn.offset;
        if (s.fn.offset = function () {
                var e, t = this[0];
                if (t && t.nodeType) return e = (t.ownerDocument || n.document).documentElement, s.contains(e, t) ? D.apply(this, arguments) : (u("jQuery.fn.offset() requires an element connected to a document"), {
                    top: 0,
                    left: 0
                });
                u("jQuery.fn.offset() requires a valid DOM element")
            }, s.ajax) {
            var E = s.param;
            s.param = function (e, t) {
                var r = s.ajaxSettings && s.ajaxSettings.traditional;
                return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), E.call(this, e, t)
            }
        }
        var _ = s.fn.andSelf || s.fn.addBack;
        if (s.fn.andSelf = function () {
                return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), _.apply(this, arguments)
            }, s.Deferred) {
            var F = s.Deferred,
                O = [
                    ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
                ];
            s.Deferred = function (e) {
                var o = F(),
                    a = o.promise();
                return o.pipe = a.pipe = function () {
                    var i = arguments;
                    return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
                        s.each(O, function (e, t) {
                            var r = "function" == typeof i[e] && i[e];
                            o[t[1]](function () {
                                var e = r && r.apply(this, arguments);
                                e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                            })
                        }), i = null
                    }).promise()
                }, e && e.call(o, o), o
            }, s.Deferred.exceptionHook = F.exceptionHook
        }
        return s
    });
