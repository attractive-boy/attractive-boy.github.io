try {
    ! function (e) {
        "function" == typeof define && define.amd ? define(e) : e()
    }(function () {
        "use strict"; /*表情包映射生成*/
        var emojiMap = new Object();
        for (let i = 0; i <= 112; i++) {
            var key = "img" + i;
            var value = i + ".png";
            emojiMap[key] = value;
        }
        var e, t, n = (function (t, e) {
            ! function (e, t, n, o, r) {
                if ("customElements" in n) r();
                else {
                    if (n.AWAITING_WEB_COMPONENTS_POLYFILL) return n.AWAITING_WEB_COMPONENTS_POLYFILL.then(r);
                    var a = n.AWAITING_WEB_COMPONENTS_POLYFILL = c();
                    a.then(r);
                    var i = n.WEB_COMPONENTS_POLYFILL || "//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",
                        s = n.ES6_CORE_POLYFILL || "//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";
                    "Promise" in n ? l(i).then(function () {
                        a.isDone = !0, a.exec()
                    }) : l(s).then(function () {
                        l(i).then(function () {
                            a.isDone = !0, a.exec()
                        })
                    })
                }

                function c() {
                    var t = [];
                    return t.isDone = !1, t.exec = function () {
                        t.splice(0).forEach(function (e) {
                            e()
                        })
                    }, t.then = function (e) {
                        return t.isDone ? e() : t.push(e), t
                    }, t
                }

                function l(e) {
                    var t = c(),
                        n = o.createElement("script");
                    return n.type = "text/javascript", n.readyState ? n.onreadystatechange = function () {
                        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, t.isDone = !0, t.exec())
                    } : n.onload = function () {
                        t.isDone = !0, t.exec()
                    }, n.src = e, o.getElementsByTagName("head")[0].appendChild(n), n.then = t.then, n
                }
            }(0, 0, window, document, function () {
                var e;
                e = function () {
                    return o = {}, r.m = n = [function (e, t) {
                        e.exports = function (n) {
                            var i = [];
                            return i.toString = function () {
                                return this.map(function (e) {
                                    var t = function (e, t) {
                                        var n, o = e[1] || "",
                                            r = e[3];
                                        if (!r) return o;
                                        if (t && "function" == typeof btoa) {
                                            var a = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                                i = r.sources.map(function (e) {
                                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                                });
                                            return [o].concat(i).concat([a]).join("\n")
                                        }
                                        return [o].join("\n")
                                    }(e, n);
                                    return e[2] ? "@media " + e[2] + "{" + t + "}" : t
                                }).join("")
                            }, i.i = function (e, t) {
                                "string" == typeof e && (e = [
                                    [null, e, ""]
                                ]);
                                for (var n = {}, o = 0; o < this.length; o++) {
                                    var r = this[o][0];
                                    "number" == typeof r && (n[r] = !0)
                                }
                                for (o = 0; o < e.length; o++) {
                                    var a = e[o];
                                    "number" == typeof a[0] && n[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), i.push(a))
                                }
                            }, i
                        }
                    }, function (e, t, n) {
                        var o = n(3);
                        e.exports = "string" == typeof o ? o : o.toString()
                    }, function (e, t, n) {
                        var o = n(4);
                        e.exports = "string" == typeof o ? o : o.toString()
                    }, function (e, t, n) {
                        (e.exports = n(0)(!1)).push([e.i, "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}", ""])
                    }, function (e, t, n) {
                        (e.exports = n(0)(!1)).push([e.i, '.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}', ""])
                    }, function (e, t, n) {
                        n.r(t), n.d(t, "BoxIconElement", function () {
                            return w
                        });

                        function o() {
                            return !!h.ShadyCSS
                        }
                        var r, a, i, s, c = n(1),
                            l = n.n(c),
                            f = n(2),
                            m = n.n(f),
                            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            },
                            u = function (e, t, n) {
                                return t && g(e.prototype, t), n && g(e, n), e
                            },
                            p = (a = (r = Object).getPrototypeOf || function (e) {
                                return e.__proto__
                            }, i = r.setPrototypeOf || function (e, t) {
                                return e.__proto__ = t, e
                            }, s = "object" === ("undefined" == typeof Reflect ? "undefined" : d(Reflect)) ? Reflect.construct : function (e, t, n) {
                                var o, r = [null];
                                return r.push.apply(r, t), o = e.bind.apply(e, r), i(new o, n.prototype)
                            }, function (e) {
                                var t = a(e);
                                return i(e, i(function () {
                                    return s(t, arguments, a(this).constructor)
                                }, t))
                            }),
                            h = window,
                            b = {},
                            y = document.createElement("template");

                        function g(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        y.innerHTML = '\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n' + l.a + "\n" + m.a + '\n</style>\n<div id="icon"></div>';
                        var w = p((function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(v, HTMLElement), u(v, null, [{
                            key: "getIconSvg",
                            value: function (e, t) {
                                var o = this.cdnUrl + "/regular/bx-" + e + ".svg";
                                return "solid" === t ? o = this.cdnUrl + "/solid/bxs-" + e + ".svg" : "logo" === t && (o = this.cdnUrl + "/logos/bxl-" + e + ".svg"), o && b[o] || (b[o] = new Promise(function (e, t) {
                                    var n = new XMLHttpRequest;
                                    n.addEventListener("load", function () {
                                        this.status < 200 || 300 <= this.status ? t(new Error(this.status + " " + this.responseText)) : e(this.responseText)
                                    }), n.onerror = t, n.onabort = t, n.open("GET", o), n.send()
                                })), b[o]
                            }
                        }, {
                            key: "define",
                            value: function (e) {
                                e = e || this.tagName, o() && h.ShadyCSS.prepareTemplate(y, e), customElements.define(e, this)
                            }
                        }, {
                            key: "cdnUrl",
                            get: function () {
                                return "//unpkg.com/boxicons@2.0.9/svg"
                            }
                        }, {
                            key: "tagName",
                            get: function () {
                                return "box-icon"
                            }
                        }, {
                            key: "observedAttributes",
                            get: function () {
                                return ["type", "name", "color", "size", "rotate", "flip", "animation", "border", "pull"]
                            }
                        }]), u(v, [{
                            key: "attributeChangedCallback",
                            value: function (e, t, n) {
                                var o, r, a, i, s, c, l, f, m = this._state.$iconHolder;
                                switch (e) {
                                    case "type":
                                        l = n, (f = (c = this)._state).$iconHolder.textContent = "", f.type && (f.type = null), f.type = !l || "solid" !== l && "logo" !== l ? "regular" : l, void 0 !== f.currentName && c.constructor.getIconSvg(f.currentName, f.type).then(function (e) {
                                            f.type === l && (f.$iconHolder.innerHTML = e)
                                        }).catch(function (e) {
                                            console.error("Failed to load icon: " + f.currentName + "\n" + e)
                                        });
                                        break;
                                    case "name":
                                        i = n, (s = (a = this)._state).currentName = i, s.$iconHolder.textContent = "", i && void 0 !== s.type && a.constructor.getIconSvg(i, s.type).then(function (e) {
                                            s.currentName === i && (s.$iconHolder.innerHTML = e)
                                        }).catch(function (e) {
                                            console.error("Failed to load icon: " + i + "\n" + e)
                                        });
                                        break;
                                    case "color":
                                        m.style.fill = n || "";
                                        break;
                                    case "size":
                                        o = n, (r = this._state).size && (r.$iconHolder.style.width = r.$iconHolder.style.height = "", r.size = r.sizeType = null), o && !/^(xs|sm|md|lg)$/.test(r.size) && (r.size = o.trim(), r.$iconHolder.style.width = r.$iconHolder.style.height = r.size);
                                        break;
                                    case "rotate":
                                        t && m.classList.remove("bx-rotate-" + t), n && m.classList.add("bx-rotate-" + n);
                                        break;
                                    case "flip":
                                        t && m.classList.remove("bx-flip-" + t), n && m.classList.add("bx-flip-" + n);
                                        break;
                                    case "animation":
                                        t && m.classList.remove("bx-" + t), n && m.classList.add("bx-" + n)
                                }
                            }
                        }, {
                            key: "connectedCallback",
                            value: function () {
                                o() && h.ShadyCSS.styleElement(this)
                            }
                        }]), v));

                        function v() {
                            ! function (e) {
                                if (!(e instanceof v)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            var e = function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
                            return e.$ui = e.attachShadow({
                                mode: "open"
                            }), e.$ui.appendChild(e.ownerDocument.importNode(y.content, !0)), o() && h.ShadyCSS.styleElement(e), e._state = {
                                $iconHolder: e.$ui.getElementById("icon"),
                                type: e.getAttribute("type")
                            }, e
                        } (t.default = w).define()
                    }], r.c = o, r.d = function (e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function (t, e) {
                        if (1 & e && (t = r(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                            for (var o in t) r.d(n, o, function (e) {
                                return t[e]
                            }.bind(null, o));
                        return n
                    }, r.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        } : function () {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 5);

                    function r(e) {
                        if (o[e]) return o[e].exports;
                        var t = o[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                    }
                    var n, o
                }, t.exports = e()
            })
        }(e = {
            exports: {}
        }, e.exports), e.exports);

        function m(e, t) {
            if (e) {
                "string" == typeof e ? e = document.querySelectorAll(e) : e.tagName && (e = [e]);
                for (var n = 0; n < e.length; n++)(" " + e[n].className + " ").indexOf(" " + t + " ") < 0 && (e[n].className += " " + t)
            }
        }

        function d(e, t) {
            if (e) {
                "string" == typeof e ? e = document.querySelectorAll(e) : e.tagName && (e = [e]);
                for (var n = new RegExp("(^| )" + t + "($| )", "g"), o = 0; o < e.length; o++) e[o].className = e[o].className.replace(n, " ")
            }
        }

        function u(n, o) {
            var r;
            return function () {
                var e = o || this,
                    t = arguments;
                r = r || setTimeout(function () {
                    n.apply(e, t), r = null
                }, 80)
            }
        } (t = n) && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") && t.default, n.BoxIconElement,
            function () {
                document.querySelectorAll(".cases .item").forEach(function (t) {
                    t.addEventListener("mouseover", function (e) {
                        e.preventDefault(), d(document.getElementsByClassName("img__active"), "img__active"), d(document.getElementsByClassName("sub__active"), "sub__active"), m(t.children[0], "img__active"), m(document.getElementById("sub-" + t.dataset.icon), "sub__active")
                    }, !1)
                }), document.querySelectorAll("pre code").forEach(function (e) {
                    hljs.highlightBlock(e)
                }), document.querySelector(".post-toc-html") && document.querySelector(".post-inner-html") && tocbot.init({
                    tocSelector: ".post-toc-html",
                    contentSelector: ".post-inner-html",
                    headingSelector: "h1, h2, h3"
                });
                var n = document.body.scrollHeight || document.documentElement.scrollHeight,
                    o = window.innerHeight || document.documentElement.clientHeight;
                window.addEventListener("scroll", u(function () {
                    var e = n - o,
                        t = (document.body.scrollTop || document.documentElement.scrollTop) / e;
                    NProgress.set(t)
                })), NProgress.configure({
                    showSpinner: !1,
                    minimum: 0
                }), $("#backtop").click(function () {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 800)
                }), 
                // $(".share > .share-item").hover(function () {
                //     m($(this).children(".n-icon"), $(this).children(".n-icon")[0].classList[1] + "-select")
                // }, function () {
                //     d($(this).children(".n-icon"), $(this).children(".n-icon")[0].classList[2])
                // }),
                 $(".footer-info > .social").hover(function () {
                    m($(this).children(".n-icon"), $(this).children(".n-icon")[0].classList[1] + "-select")
                }, function () {
                    d($(this).children(".n-icon"), $(this).children(".n-icon")[0].classList[2])
                }), $("#mobile-menu-open").click(function () {
                    $(".header-menu-mobile-menu").fadeIn(300), m($("body"), "mobile-menu-fixed")
                }), $("#mobile-menu-close").click(function () {
                    $(".header-menu-mobile-menu").fadeOut(300), d($("body"), "mobile-menu-fixed")
                }), window.addEventListener("scroll", u(function () {
                    100 < (document.documentElement.scrollTop || document.body.scrollTop) ? (m(".sidebar", "sidebar-fixed"), $("#backtop").fadeIn(300)) : (d(".sidebar", "sidebar-fixed"), $("#backtop").fadeOut(300))
                }));
                var e = document.querySelector("#widget");
                if (e && new PerfectScrollbar(e), window.aomori_logo_typed_animated && new Typed("#typed", {
                    stringsElement: "#typed-strings",
                    fadeOut: !0,
                    fadeOutDelay: 800,
                    typeSpeed: 100,
                    showCursor: !1
                }), window.aomori_search_algolia) {
                    var t = document.querySelector("#search-ps");
                    t && new PerfectScrollbar(t);
                    var r = document.querySelector('meta[property="algolia:search"]').dataset,
                        a = algoliasearch(r.applicationId, r.apiKey).initIndex(r.indexName);
                    $("#search").on("keyup", u(function (e) {
                        a.search($("#search").val()).then(function (e) {
                            var t = e.hits;
                            if ($(".search-result").slideDown(), t.length) {
                                var n = "";
                                t.forEach(function (e) {
                                    n += '<a class="search-result-item" href="'.concat(e.permalink, '"><h1>').concat(e.title, "</h1><p>").concat(dayjs(e.date).format("YYYY-MM-DD"), "</p></a>")
                                }), $(".search-result").html(n)
                            } else $(".search-result").html("Nothing at all.")
                        })
                    })), $("#search").on("focusin", function () {
                        m($(".search"), "search-focus")
                    }), $("#search").on("focusout", function () {
                        d($(".search"), "search-focus"), $(".search-result").slideUp()
                    })
                }
                var i = new Swiper(".swiper-container", {
                    autoplay: {
                        delay: 1e4
                    },
                    autoHeight: !0,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletActiveClass: "article-gallery-active"
                    }
                });
                i.slides && i.slides.length <= 1 && i.destroy();
                var s = {
                    title: !1,
                    toolbar: {
                        zoomIn: !0,
                        zoomOut: !0,
                        reset: !0,
                        prev: !0,
                        next: !0
                    },
                    keyboard: !1
                },
                    c = $(".article-gallery");
                c && 0 < c.length && c.viewer(s);
                var l = $(".article-entry");
                l && 0 < l.length && l.viewer(s);
                var f = $(".photography-item");
                f && 0 < f.length && f.viewer(s), window.isPost && Array.from($("article video")).map(function (e) {
                    return new Plyr(e)
                }), Array.from($("article .article-video-plyr")).map(function (e) {
                    return new Plyr(e)
                }), new LazyLoad, window.aomori.disqusjs && window.aomori.disqusjs.enable && new DisqusJS({
                    shortname: window.aomori.disqusjs.shortname,
                    siteName: window.aomori.disqusjs.siteName,
                    api: window.aomori.disqusjs.api,
                    apikey: window.aomori.disqusjs.apikey,
                    nesting: window.aomori.disqusjs.nesting,
                    nocomment: window.aomori.disqusjs.nocomment,
                    admin: window.aomori.disqusjs.admin,
                    adminLabel: window.aomori.disqusjs.adminLabel
                })
            }(), window.aomori && window.aomori.gitalk && (window.aomori.gitalk.id = md5(window.location.href), new Gitalk(window.aomori.gitalk).render("gitalk-container")), window.aomori.valine && window.aomori.valine.enable && new Valine({
                el: "#valine-container",
                appId: window.aomori.valine.appId,
                appKey: window.aomori.valine.appKey,
                placeholder: "说点什么吧宝贝~\n昵称框支持直接输入QQ号自动导入昵称和头像哦~",
                avatar: "",
                enableQQ: true,
                requiredFields: ['nick', 'mail'],
                emojiCDN: 'https://index.attractiveboy.top/picture/blue_and_friends/',
                emojiMaps: emojiMap,
                visitor: true,
            })
    });
} catch (error) { }