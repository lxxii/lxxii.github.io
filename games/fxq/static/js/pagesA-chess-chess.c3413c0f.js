(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagesA-chess-chess"], {
    "0006": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "dice-wrap", on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.throwDice.apply(void 0, arguments)
                    }
                }
            }, [e.isDicing ? n("v-uni-image", {
                staticClass: "dice-icon",
                attrs: {src: e.diceAnimationImages[e.aniIndex]}
            }) : n("v-uni-image", {staticClass: "dice-icon", attrs: {src: e.diceImages[e.currentPoint]}})], 1)
        }, a = []
    }, "0381": function (e, t, n) {
        "use strict";
        var i = n("871d"), a = n.n(i);
        a.a
    }, "03d7": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("fc8a"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "0538": function (e, t, n) {
        "use strict";
        var i = n("e330"), a = n("59ed"), o = n("861d"), r = n("1a2d"), c = n("f36a"), s = n("40d5"), u = Function,
            l = i([].concat), d = i([].join), f = {}, p = function (e, t, n) {
                if (!r(f, t)) {
                    for (var i = [], a = 0; a < t; a++) i[a] = "a[" + a + "]";
                    f[t] = u("C,a", "return new C(" + d(i, ",") + ")")
                }
                return f[t](e, n)
            };
        e.exports = s ? u.bind : function (e) {
            var t = a(this), n = t.prototype, i = c(arguments, 1), r = function () {
                var n = l(i, c(arguments));
                return this instanceof r ? p(t, n.length, n) : t.apply(e, n)
            };
            return o(n) && (r.prototype = n), r
        }
    }, "05ea": function (e, t, n) {
        var i = n("38aa");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("08691019", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "0676": function (e, t, n) {
        n("d9e2"), n("d401"), e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "0ba4": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ef37"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "0e87": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.showGuide ? n("v-uni-view", {
                staticClass: "guide", on: {
                    touchmove: function (t) {
                        t.stopPropagation(), t.preventDefault(), arguments[0] = t = e.$handleEvent(t)
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "guide-box",
                style: e.guideStyle
            }, [n("v-uni-view", {
                staticClass: "tips guide-step-tips",
                style: e.tipPosition
            }, [n("v-uni-view", {staticClass: "text"}, [e._v(e._s(e.guideInfo.tips))]), n("v-uni-view", {staticClass: "tool-btn"}, [n("v-uni-text", {
                on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.skip.apply(void 0, arguments)
                    }
                }
            }, [e._v("跳过")]), n("v-uni-view", {
                staticClass: "next", on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.next.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.guideInfo.next))])], 1)], 1), n("v-uni-view", {
                staticClass: "arrow",
                style: e.arrowTop
            })], 1), n("v-uni-view", {staticClass: "v-model"})], 1) : e._e()
        }, a = []
    }, "0e95": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3bbb"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "11b0": function (e, t, n) {
        n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), n("a630"), e.exports = function (e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 1301: function (e, t, n) {
        var i = n("8fde");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("5a69fe61", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 1353: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {
                ref: "square",
                staticClass: "square",
                class: ["round0", 1 == e.item.id ? "round5" : "", 7 == e.item.id ? "round1" : "", 8 == e.item.id ? "round4" : "", 14 == e.item.id ? "round2" : "", 15 == e.item.id ? "round3" : "", 21 == e.item.id ? "round1" : "", 22 == e.item.id ? "round4" : "", 27 == e.item.id ? "round6" : "", e.item.id >= 28 && e.item.id <= 31 ? "round9" : "", e.item.id >= 32 && e.item.id <= 36 ? "round5" : "", e.item.id >= 37 && e.item.id <= 39 ? "round10" : "", 40 == e.item.id ? "round8" : "", e.item.id == e.activeManID ? "animationEffect" : "", "end", e.myColorOne, e.myColorTwo, e.myColorInit]
            }, [n("v-uni-view", {staticClass: "square-children"}, [e._t("default")], 2)], 1)
        }, a = []
    }, 1410: function (e, t, n) {
        "use strict";
        var i = n("1919"), a = n.n(i);
        a.a
    }, 1799: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("7f2c5")), o = {
            name: "u-gap", mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default], computed: {
                gapStyle: function () {
                    var e = {
                        backgroundColor: this.bgColor,
                        height: uni.$u.addUnit(this.height),
                        marginTop: uni.$u.addUnit(this.marginTop),
                        marginBottom: uni.$u.addUnit(this.marginBottom)
                    };
                    return uni.$u.deepMerge(e, uni.$u.addStyle(this.customStyle))
                }
            }
        };
        t.default = o
    }, "18f3": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var i = {
            uPopup: n("6c36").default,
            uIcon: n("a6a2").default,
            uLine: n("985f").default,
            uLoadingIcon: n("cf6a").default,
            uGap: n("863a").default
        }, a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("u-popup", {
                attrs: {
                    show: e.show,
                    mode: "bottom",
                    safeAreaInsetBottom: e.safeAreaInsetBottom,
                    round: e.round
                }, on: {
                    close: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.closeHandler.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {staticClass: "u-action-sheet"}, [e.title ? n("v-uni-view", {staticClass: "u-action-sheet__header"}, [n("v-uni-text", {staticClass: "u-action-sheet__header__title u-line-1"}, [e._v(e._s(e.title))]), n("v-uni-view", {
                staticClass: "u-action-sheet__header__icon-wrap",
                on: {
                    click: function (t) {
                        t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                    }
                }
            }, [n("u-icon", {
                attrs: {
                    name: "close",
                    size: "17",
                    color: "#c8c9cc",
                    bold: !0
                }
            })], 1)], 1) : e._e(), e.description ? n("v-uni-text", {
                staticClass: "u-action-sheet__description",
                style: [{marginTop: "" + (e.title && e.description ? 0 : "18px")}]
            }, [e._v(e._s(e.description))]) : e._e(), e._t("default", [e.description ? n("u-line") : e._e(), n("v-uni-view", {staticClass: "u-action-sheet__item-wrap"}, [e._l(e.actions, (function (t, i) {
                return [n("v-uni-view", {
                    staticClass: "u-action-sheet__item-wrap__item",
                    attrs: {
                        "hover-class": t.disabled || t.loading ? "" : "u-action-sheet--hover",
                        "hover-stay-time": 150
                    },
                    on: {
                        click: function (t) {
                            t.stopPropagation(), arguments[0] = t = e.$handleEvent(t), e.selectHandler(i)
                        }
                    }
                }, [t.loading ? n("u-loading-icon", {
                    attrs: {
                        "custom-class": "van-action-sheet__loading",
                        size: "18",
                        mode: "circle"
                    }
                }) : [n("v-uni-text", {
                    staticClass: "u-action-sheet__item-wrap__item__name",
                    style: [e.itemStyle(i)]
                }, [e._v(e._s(t.name))]), t.subname ? n("v-uni-text", {staticClass: "u-action-sheet__item-wrap__item__subname"}, [e._v(e._s(t.subname))]) : e._e()]], 2), i !== e.actions.length - 1 ? n("u-line") : e._e()]
            }))], 2)]), e.cancelText ? n("u-gap", {
                attrs: {
                    bgColor: "#eaeaec",
                    height: "6"
                }
            }) : e._e(), n("v-uni-view", {attrs: {"hover-class": "u-action-sheet--hover"}}, [e.cancelText ? n("v-uni-text", {
                staticClass: "u-action-sheet__cancel-text",
                attrs: {"hover-stay-time": 150},
                on: {
                    touchmove: function (t) {
                        t.stopPropagation(), t.preventDefault(), arguments[0] = t = e.$handleEvent(t)
                    }, click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.cancel.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.cancelText))]) : e._e()], 1)], 2)], 1)
        }, o = []
    }, 1919: function (e, t, n) {
        var i = n("d8fe");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("800e4c30", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 1922: function (e, t, n) {
        var i = n("ca0c");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("3b2beaaa", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 1951: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1799"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "1c01": function (e, t, n) {
        "use strict";
        var i = n("4966"), a = n.n(i);
        a.a
    }, "1c80": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1c85"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "1c85": function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("d3b7");
        var a = i(n("c7eb")), o = i(n("1da1")), r = {
            data: function () {
                return {
                    isDicing: !1,
                    aniIndex: 0,
                    diceAnimationImages: ["/static/newChess/changenew.gif"],
                    diceImages: {
                        1: "/static/newChess/chess1.png",
                        2: "/static/newChess/chess2.png",
                        3: "/static/newChess/chess3.png",
                        4: "/static/newChess/chess4.png",
                        5: "/static/newChess/chess5.png",
                        6: "/static/newChess/chess6.png"
                    },
                    currentPoint: 1,
                    timer: null
                }
            }, beforeDestroy: function () {
                clearInterval(this.timer)
            }, methods: {
                throwDice: function () {
                    var e = this;
                    return (0, o.default)((0, a.default)().mark((function t() {
                        return (0, a.default)().wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isDicing) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e.currentPoint = Math.floor(6 * Math.random() + 1), t.next = 5, e.startAnimation();
                                case 5:
                                    e.$emit("ok", e.currentPoint);
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, startAnimation: function () {
                    var e = this;
                    return (0, o.default)((0, a.default)().mark((function t() {
                        return (0, a.default)().wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise((function (t) {
                                        e.isDicing = !0;
                                        var n = 0;
                                        e.timer = setInterval((function () {
                                            var i = e.aniIndex;
                                            i++, i >= e.diceAnimationImages.length && (i = 0), e.aniIndex = i, n++, n > 8 && (clearInterval(e.timer), e.isDicing = !1, t(!0))
                                        }), 200)
                                    })));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }
        };
        t.default = r
    }, "1d23": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}', ""]), e.exports = t
    }, "1da0": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var i = {
            myBg: n("6fd8").default,
            uLoadingPage: n("2757").default,
            uNavbar: n("86c4").default,
            uIcon: n("a6a2").default,
            uAvatar: n("97cf").default,
            uRow: n("81a8").default,
            uCol: n("d2ea").default,
            ChessboardBlock: n("a183").default,
            uniIcons: n("c361").default,
            myDice: n("6b3b").default,
            uPopup: n("6c36").default,
            uActionSheet: n("c87c").default,
            myButton: n("571b").default
        }, a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {staticClass: "container"}, [e.gameBg ? n("my-bg", {staticClass: "my-bg"}) : e._e(), n("u-loading-page", {
                staticStyle: {"z-index": "999999999999999999"},
                attrs: {
                    "loading-mode": "semicircle",
                    "bg-color": "#0000007F",
                    loading: e.loading,
                    loadingText: "生成棋局中..."
                }
            }), n("u-navbar", {
                ref: "navbar",
                staticClass: "navbar",
                attrs: {title: e.title, placeholder: !0, titleStyle: {color: "#fff"}, leftIconColor: "#fff"},
                on: {
                    leftClick: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.goBack.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                staticStyle: {display: "flex"},
                attrs: {slot: "right"},
                slot: "right"
            }, [n("v-uni-view", {staticClass: "gameguiz"}, [n("u-icon", {
                attrs: {
                    name: "question-circle",
                    size: "25",
                    color: "#fff"
                }, on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.ithuiFlag = !0
                    }
                }
            })], 1), n("v-uni-view", {staticStyle: {width: "10rpx"}}), e.customId ? n("u-icon", {
                attrs: {
                    name: "setting",
                    size: "25",
                    color: "#fff"
                }, on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.rightClick.apply(void 0, arguments)
                    }
                }
            }) : [n("v-uni-view", {staticClass: "myRight"}, [n("u-icon", {
                attrs: {
                    name: "reload",
                    size: "25",
                    color: "#fff"
                }, on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.rightClick.apply(void 0, arguments)
                    }
                }
            }), n("u-icon", {
                staticStyle: {"margin-left": "10rpx"},
                attrs: {name: "list", size: "25", color: "#fff"},
                on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.onMenu.apply(void 0, arguments)
                    }
                }
            })], 1)]], 2)], 1), n("v-uni-view", {staticClass: "body"}, [n("u-avatar", {
                staticClass: "avatar",
                style: {left: e.positionMan.left + "px", top: e.positionMan.top + "px"},
                attrs: {size: e.avaSize, shape: "square", src: e.manAvatar}
            }), n("u-avatar", {
                staticClass: "avatar",
                style: {left: e.positionWoman.left + "px", top: e.positionWoman.top + "px"},
                attrs: {size: e.avaSize, shape: "square", src: e.woManAvatar}
            }), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;flex-direction: row-reverse"
                }
            }, e._l(e.filterDataList.firstLine, (function (t, i) {
                return n("u-col", {
                    key: i, attrs: {span: 12 / 7}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "firstLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [1 == t.id ? n("u-icon", {
                    attrs: {
                        "custom-style": {fontWeight: "bold"},
                        name: "rewind-left-fill",
                        color: "#fff",
                        size: "20"
                    }
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)
            })), 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;"
                }
            }, [n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(-120deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "undo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1)], 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;"
                }
            }, e._l(e.filterDataList.towLine, (function (t, i) {
                return n("u-col", {
                    key: i, attrs: {span: 12 / 7}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "towLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [1 == t.id ? n("u-icon", {
                    attrs: {
                        "custom-style": {fontWeight: "bold"},
                        name: "rewind-left-fill",
                        color: "#fff",
                        size: "20"
                    }
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)
            })), 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;flex-direction: row-reverse"
                }
            }, [n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(120deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "redo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1)], 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;flex-direction: row-reverse"
                }
            }, e._l(e.filterDataList.thereLine, (function (t, i) {
                return n("u-col", {
                    key: i, attrs: {span: 12 / 7}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "thereLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [1 == t.id ? n("u-icon", {
                    attrs: {
                        "custom-style": {fontWeight: "bold"},
                        name: "rewind-left-fill",
                        color: "#fff",
                        size: "20"
                    }
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)
            })), 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;"
                }
            }, [n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(-120deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "undo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1)], 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;"
                }
            }, [e._l(e.filterDataList.foreLine, (function (t, i) {
                return n("u-col", {
                    key: i, attrs: {span: 12 / 7}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "foreLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [1 == t.id ? n("u-icon", {
                    attrs: {
                        "custom-style": {fontWeight: "bold"},
                        name: "rewind-left-fill",
                        color: "#fff",
                        size: "20"
                    }
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)
            })), n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(75deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "redo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1)], 2), n("u-row", {attrs: {gutter: "10rpx"}}, [n("u-col", {attrs: {span: 12 / 7}}, e._l(e.filterDataList.sevenLeftLine, (function (t, i) {
                return n("u-row", {
                    key: i,
                    attrs: {customStyle: "margin-bottom: 15rpx;"}
                }, [n("u-col", {
                    attrs: {span: 12}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "sevenLeftLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [40 == t.id ? n("v-uni-image", {
                    staticClass: "redflag",
                    attrs: {src: "/static/images/redflag.png"}
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)], 1)
            })), 1), n("u-col", {attrs: {span: 12 / 7 * 5}}, [n("u-row", {attrs: {customStyle: "margin-bottom: 15rpx;"}}, [n("v-uni-view", {staticClass: "sifter-box-father"}, [n("v-uni-view", {staticClass: "img-body delete-button"}, [n("v-uni-view", [n("my-dice", {
                on: {
                    ok: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.rotatingScreenNew.apply(void 0, arguments)
                    }
                }, nativeOn: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.go.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1)], 1)], 1), n("u-col", {attrs: {span: 12 / 7}}, e._l(e.filterDataList.fiveRightLine, (function (t, i) {
                return n("u-row", {
                    key: i,
                    attrs: {customStyle: "margin-bottom: 15rpx;"}
                }, [n("u-col", {
                    attrs: {span: 12}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "fiveRightLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [1 == t.id ? n("u-icon", {
                    attrs: {
                        "custom-style": {fontWeight: "bold"},
                        name: "rewind-left-fill",
                        color: "#fff",
                        size: "20"
                    }
                }) : n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)], 1)
            })), 1)], 1), n("u-row", {
                attrs: {
                    gutter: "10rpx",
                    customStyle: "margin-bottom: 15rpx;flex-direction: row-reverse"
                }
            }, [n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(170deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "redo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1), e._l(e.filterDataList.sixBottomLine, (function (t, i) {
                return n("u-col", {
                    key: i, attrs: {span: 12 / 7}, on: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.clickTip(t)
                        }
                    }
                }, [n("v-uni-view", {staticClass: "sixBottomLine refsst"}, [n("ChessboardBlock", {
                    ref: "topRef",
                    refInFor: !0,
                    attrs: {item: t, filletDirection: 1 == t.id ? 6 : "", activeManID: e.walkInfo, mode: e.mode}
                }, [n("v-uni-text", [e._v(e._s(t.id))])], 1)], 1)], 1)
            })), n("u-col", {attrs: {span: 12 / 7}}, [n("v-uni-view", {
                staticClass: "arrow-style",
                staticStyle: {transform: "rotate(-100deg)"}
            }, [n("uni-icons", {
                attrs: {
                    type: "redo-filled",
                    size: "30",
                    color: "#fff"
                }
            })], 1)], 1)], 2)], 1), n("v-uni-view", {
                staticStyle: {
                    position: "fixed",
                    "z-index": "9999"
                }
            }, [n("u-popup", {
                attrs: {show: e.showTip, mode: "center", customStyle: "backgroundColor:transparent"},
                on: {
                    close: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.close.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {staticClass: "tip-box"}, [n("v-uni-view", {staticClass: "tip-top"}, [n("v-uni-text", [e._v("任务")])], 1), n("v-uni-view", {
                staticClass: "tip-text",
                domProps: {innerHTML: e._s(e.descriptiveText)}
            })], 1)], 1)], 1), n("v-uni-view", {
                staticStyle: {
                    position: "fixed",
                    "z-index": "9999"
                }
            }, [n("u-action-sheet", {
                attrs: {
                    show: e.setShow,
                    description: "名称:" + e.title,
                    actions: e.actions,
                    round: 10,
                    cancelText: "取消"
                }, on: {
                    close: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.setShow = !1
                    }, select: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.select.apply(void 0, arguments)
                    }
                }
            })], 1), e.displayCanvas ? n("v-uni-canvas", {
                ref: "canvas",
                attrs: {id: "canvas", type: "2d", "canvas-id": "canvas"}
            }) : e._e(), n("v-uni-view", {
                staticStyle: {
                    position: "fixed",
                    "z-index": "9999"
                }
            }, [n("u-popup", {
                attrs: {bgColor: "transparent", show: e.show, mode: "right"}, on: {
                    close: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.show = !1
                    }
                }
            }, [n("v-uni-view", {staticClass: "opo"}, e._l(e.list, (function (t, i) {
                return n("my-button", {
                    key: t.id,
                    staticClass: "opo-btn",
                    attrs: {color: t.color, str: t.text, disabled: e.mode == t.id},
                    nativeOn: {
                        click: function (n) {
                            arguments[0] = n = e.$handleEvent(n), e.onBtnClick(t)
                        }
                    }
                })
            })), 1)], 1)], 1), n("guideStep", {attrs: {step: e.step}}), n("ithui-bullet-one", {
                attrs: {
                    title: "游戏规则",
                    content: e.content
                }, model: {
                    value: e.ithuiFlag, callback: function (t) {
                        e.ithuiFlag = t
                    }, expression: "ithuiFlag"
                }
            })], 1)
        }, o = []
    }, "1de5": function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t || (t = {}), e = e && e.__esModule ? e.default : e, "string" !== typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
        }
    }, 2236: function (e, t, n) {
        var i = n("5a43");
        e.exports = function (e) {
            if (Array.isArray(e)) return i(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 2757: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("7562"), a = n("e732");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("927c");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "0c0d5caa", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "278c": function (e, t, n) {
        var i = n("c135"), a = n("9b42"), o = n("6613"), r = n("c240");
        e.exports = function (e, t) {
            return i(e) || a(e, t) || o(e, t) || r()
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "2d0d": function (e, t, n) {
        n("4ae1"), n("d3b7"), n("f8c9");
        var i = n("36c6"), a = n("6f8f"), o = n("6b58");
        e.exports = function (e) {
            var t = a();
            return function () {
                var n, a = i(e);
                if (t) {
                    var r = i(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return o(this, n)
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 3256: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ae84"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "34b6": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("38cf"), n("ac1f"), n("a434");
        var i = {
            name: "xky-guideStep", props: {
                step: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, data: function () {
                return {
                    stepName: "step",
                    guideList: [{el: "", tips: "", next: "", style: ""}],
                    repeat: !1,
                    index: 0,
                    showGuide: !0,
                    guideStyle: "",
                    arrowTop: "",
                    tipPosition: "",
                    systemInfo: "",
                    tipWidth: 200
                }
            }, computed: {
                guideInfo: function () {
                    var e = this.guideList[this.index];
                    return e.hasOwnProperty("next") || (this.guideList.length - 1 > this.index ? e.next = "下一步" : e.next = "完成"), e
                }
            }, mounted: function () {
                this.guideList = this.step.guideList, this.stepName = this.step.name, this.step.hasOwnProperty("repeat") && (this.repeat = this.step.repeat);
                var e = uni.getSystemInfoSync();
                this.systemInfo = e;
                var t = uni.getStorageSync(this.stepName);
                !t || this.repeat ? this.getDomInfo() : this.showGuide = !1
            }, methods: {
                viewTips: function (e, t) {
                    if (e) {
                        var n = this.systemInfo.windowWidth - 20;
                        e.width >= n && (e.width = n), 0 == e.left && (e.left = 10);
                        var i = this.systemInfo.windowWidth - e.left, a = 0;
                        i < this.tipWidth && (a = i - this.tipWidth - 30);
                        var o = this.index;
                        e.top += t, uni.pageScrollTo({scrollTop: e.top > 44 ? e.top - 44 : 0, duration: 100});
                        var r = Object.assign(this.guideList[o], e), c = e.height + 9,
                            s = this.systemInfo.windowHeight - e.bottom, u = uni.createSelectorQuery().in(this);
                        this.$nextTick((function () {
                            u.select(".tips").boundingClientRect(), u.selectViewport().scrollOffset();
                            var e = this;
                            u.exec((function (t) {
                                var n = t[0], i = 0;
                                n.hasOwnProperty("height") && (i = n.height), s > i + 5 ? (e.arrowTop = "top:" + c + "px;", e.tipPosition = "top:" + (c + 5) + "px;left:" + a + "px;background: linear-gradient(180deg, #1cbbb4, #0081ff);") : (e.arrowTop = "top: -19px;", e.tipPosition = "top: -14px;left:" + a + "px;transform: translateY(-100%);background: linear-gradient(0deg, #1cbbb4, #0081ff);")
                            }))
                        })), this.guideList.splice(o, 1, r), this.guideStyle = this.getStyle()
                    } else this.index += 1, this.getDomInfo()
                }, getStyle: function () {
                    var e = this.guideInfo, t = e.width, n = e.height, i = e.left, a = e.top, o = e.style,
                        r = void 0 === o ? "border-radius: 8rpx;margin: 0" : o, c = "width:" + t + "px;";
                    return c += "height:" + n + "px;", c += "left:" + i + "px;", c += "top:" + a + "px;", c += "box-shadow: rgb(33 33 33 / 80%) 0px 0px 0px 0px, rgb(33 33 33 / 50%) 0px 0px 0px 5000px;", c += r, c
                }, getDomInfo: function () {
                    var e = this.guideInfo.el, t = uni.createSelectorQuery().in(this.$root);
                    this.$nextTick((function () {
                        t.select(e).boundingClientRect(), t.selectViewport().scrollOffset();
                        var n = this;
                        t.exec((function (e) {
                            var t = e[0], i = e[1].scrollTop;
                            n.viewTips(t, i)
                        }))
                    }))
                }, skip: function () {
                    this.showGuide = !1, uni.setStorageSync(this.stepName, "true"), uni.pageScrollTo({
                        scrollTop: 0,
                        duration: 100
                    })
                }, next: function () {
                    this.index === this.guideList.length - 1 ? (this.showGuide = !1, uni.setStorageSync(this.stepName, "true"), uni.pageScrollTo({
                        scrollTop: 0,
                        duration: 100
                    })) : (this.index += 1, this.getDomInfo())
                }
            }
        };
        t.default = i
    }, "36c6": function (e, t, n) {
        function i(t) {
            return e.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports, i(t)
        }

        n("131a"), n("3410"), e.exports = i, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "38aa": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.ithui-bullet .bullet-box[data-v-6a0e8cf5]{background-color:#fff;width:%?620?%;height:60vh;border-radius:%?20?%;border-width:%?10?%;border-style:solid}.ithui-bullet .bullet-box .top[data-v-6a0e8cf5]{font-size:%?38?%;text-align:center;font-weight:700;margin-top:%?60?%}.ithui-bullet .bullet-box .scroll-Y[data-v-6a0e8cf5]{margin-top:%?20?%;height:48vh}.ithui-bullet .bullet-box .scroll-Y .content[data-v-6a0e8cf5]{margin:0 %?30?%}.ithui-bullet .bullet-close[data-v-6a0e8cf5]{margin-top:%?20?%;display:flex;justify-content:center}', ""]), e.exports = t
    }, "38cf": function (e, t, n) {
        var i = n("23e7"), a = n("1148");
        i({target: "String", proto: !0}, {repeat: a})
    }, 3922: function (e, t, n) {
        "use strict";
        var i = n("e85e"), a = n.n(i);
        a.a
    }, "3bbb": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            name: "my-bg", data: function () {
                return {}
            }
        }
    }, "3c96": function (e, t, n) {
        n("d9e2"), n("d401"), e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "402a": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("71d3"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "431a": function (e, t, n) {
        var i = n("c0fa");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("4b9391fe", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "448a": function (e, t, n) {
        var i = n("2236"), a = n("11b0"), o = n("6613"), r = n("0676");
        e.exports = function (e) {
            return i(e) || a(e) || o(e) || r()
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, 4927: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("cd5a"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, 4966: function (e, t, n) {
        var i = n("685e");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("6d25cdb4", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "4a4b": function (e, t, n) {
        function i(t, n) {
            return e.exports = i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports, i(t, n)
        }

        n("131a"), e.exports = i, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "4ae1": function (e, t, n) {
        var i = n("23e7"), a = n("d066"), o = n("2ba4"), r = n("0538"), c = n("5087"), s = n("825a"), u = n("861d"),
            l = n("7c73"), d = n("d039"), f = a("Reflect", "construct"), p = Object.prototype, h = [].push,
            v = d((function () {
                function e() {
                }

                return !(f((function () {
                }), [], e) instanceof e)
            })), m = !d((function () {
                f((function () {
                }))
            })), b = v || m;
        i({target: "Reflect", stat: !0, forced: b, sham: b}, {
            construct: function (e, t) {
                c(e), s(t);
                var n = arguments.length < 3 ? e : c(arguments[2]);
                if (m && !v) return f(e, t, n);
                if (e == n) {
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3])
                    }
                    var i = [null];
                    return o(h, i, t), new (o(r, e, i))
                }
                var a = n.prototype, d = l(u(a) ? a : p), b = o(e, d, t);
                return u(b) ? b : d
            }
        })
    }, "4fce": function (e, t, n) {
        "use strict";
        var i = n("9680"), a = n.n(i);
        a.a
    }, 5444: function (e, t, n) {
        "use strict";
        var i = n("a51e"), a = n.n(i);
        a.a
    }, "571b": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("f940"), a = n("eafc");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("5444");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "cb0da6ea", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "5a43": function (e, t) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "5bc1": function (e, t, n) {
        "use strict";
        var i = n("1922"), a = n.n(i);
        a.a
    }, "5bc3": function (e, t, n) {
        n("7a82");
        var i = n("a395");

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, i(a.key), a)
            }
        }

        e.exports = function (e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "5bed": function (e, t, n) {
        "use strict";
        n("7a82"), n("498a"), n("4de4"), n("d3b7"), n("d81d"), n("ac1f"), n("5319"), n("00b4"), Object.defineProperty(t, "__esModule", {value: !0}), t.trim = t.isObject = t.isNil = t.isNan = t.size = t.isString = t.validateLocale = t.splitSentences = void 0;
        t.splitSentences = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/\.+/g, ".|").replace(/\?/g, "?|").replace(/\!/g, "!|").split("|").map((function (e) {
                return o(e)
            })).filter(Boolean)
        };
        var i = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
        t.validateLocale = function (e) {
            return "string" === typeof e && i.test(e)
        };
        var a = function (e) {
            return "string" === typeof e || e instanceof String
        };
        t.isString = a;
        t.size = function (e) {
            return e && Array.isArray(e) && e.length ? e.length : 0
        };
        t.isNan = function (e) {
            return "number" === typeof e && isNaN(e)
        };
        t.isNil = function (e) {
            return null === e || void 0 === e
        };
        t.isObject = function (e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        };
        var o = function (e) {
            return a(e) ? e.trim() : ""
        };
        t.trim = o
    }, 6075: function (e, t, n) {
        var i = n("6cb1");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("11850833", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 6311: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                loadingText: {type: [String, Number], default: uni.$u.props.loadingPage.loadingText},
                image: {type: String, default: uni.$u.props.loadingPage.image},
                loadingMode: {type: String, default: uni.$u.props.loadingPage.loadingMode},
                loading: {type: Boolean, default: uni.$u.props.loadingPage.loading},
                bgColor: {type: String, default: uni.$u.props.loadingPage.bgColor},
                color: {type: String, default: uni.$u.props.loadingPage.color},
                fontSize: {type: [String, Number], default: uni.$u.props.loadingPage.fontSize},
                iconSize: {type: [String, Number], default: uni.$u.props.loadingPage.fontSize},
                loadingColor: {type: String, default: uni.$u.props.loadingPage.loadingColor}
            }
        };
        t.default = i
    }, "655b": function (e, t, n) {
        var i = n("8701");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("e805a92a", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 6613: function (e, t, n) {
        n("fb6a"), n("d3b7"), n("a630"), n("3ca3"), n("ac1f"), n("00b4");
        var i = n("5a43");
        e.exports = function (e, t) {
            if (e) {
                if ("string" === typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "66ac": function (e, t, n) {
        "use strict";
        var i = n("431a"), a = n.n(i);
        a.a
    }, "685e": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bubble[data-v-bc1ece7a]{position:absolute;width:200px;height:200px;border-radius:50%;box-shadow:inset 0 0 25px rgba 255,255,255,.25;-webkit-animation:animate_4010-data-v-bc1ece7a 8s ease-in-out infinite;animation:animate_4010-data-v-bc1ece7a 8s ease-in-out infinite}.bubble[data-v-bc1ece7a]:nth-child(2){position:relative;zoom:.45;left:-10px;top:-100px;-webkit-animation-delay:-4s;animation-delay:-4s}.bubble[data-v-bc1ece7a]:nth-child(3){position:relative;zoom:.45;right:-80px;top:-300px;-webkit-animation-delay:-6s;animation-delay:-6s}.bubble[data-v-bc1ece7a]:nth-child(4){position:relative;zoom:.35;left:-120px;bottom:-200px;-webkit-animation-delay:-3s;animation-delay:-3s}.bubble[data-v-bc1ece7a]:nth-child(5){position:relative;zoom:.5;left:0;top:200px;-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes animate_4010-data-v-bc1ece7a{0%,\r\n  100%{-webkit-transform:translateY(-20px);transform:translateY(-20px)}50%{-webkit-transform:translateY(20px);transform:translateY(20px)}}@keyframes animate_4010-data-v-bc1ece7a{0%,\r\n  100%{-webkit-transform:translateY(-20px);transform:translateY(-20px)}50%{-webkit-transform:translateY(20px);transform:translateY(20px)}}.bubble[data-v-bc1ece7a]::before{content:"";position:absolute;top:50px;left:45px;width:30px;height:30px;border-radius:50%;background:#fff;z-index:10;-webkit-filter:blur(2px);filter:blur(2px)}.bubble[data-v-bc1ece7a]::after{content:"";position:absolute;top:80px;left:80px;width:20px;height:20px;border-radius:50%;background:#fff;z-index:10;-webkit-filter:blur(2px);filter:blur(2px)}.bubble uni-text[data-v-bc1ece7a]{position:absolute;border-radius:50%}.bubble uni-text[data-v-bc1ece7a]:nth-child(1){inset:10px;border-left:15px solid #0fb4ff;-webkit-filter:blur(8px);filter:blur(8px)}.bubble uni-text[data-v-bc1ece7a]:nth-child(2){inset:10px;border-right:15px solid #ff4484;-webkit-filter:blur(8px);filter:blur(8px)}.bubble uni-text[data-v-bc1ece7a]:nth-child(3){inset:10px;border-top:15px solid #ffeb3b;-webkit-filter:blur(8px);filter:blur(8px)}.bubble uni-text[data-v-bc1ece7a]:nth-child(4){inset:30px;border-left:15px solid #ff4484;-webkit-filter:blur(12px);filter:blur(12px)}.bubble uni-text[data-v-bc1ece7a]:nth-child(5){inset:10px;border-bottom:10px solid #fff;-webkit-filter:blur(8px);filter:blur(8px);-webkit-transform:rotate(330deg);transform:rotate(330deg)}', ""]), e.exports = t
    }, "6b22": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var i = {uPopup: n("6c36").default, uIcon: n("a6a2").default}, a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {staticClass: "ithui-bullet"}, [n("u-popup", {
                attrs: {
                    show: e.value,
                    zIndex: e.zIndex,
                    overlayOpacity: e.opacity,
                    closeOnClickOverlay: e.closeOnClickOverlay,
                    mode: "center",
                    bgColor: "transparent"
                }, on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.handleCloseOnClickOverlay.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "bullet-box",
                style: {borderColor: e.borderColor, backgroundColor: e.bgColor}
            }, [n("v-uni-view", {staticClass: "top"}, [n("v-uni-view", {
                staticClass: "title",
                style: {color: e.titleColor}
            }, [e._v(e._s(e.title))])], 1), n("v-uni-scroll-view", {
                staticClass: "scroll-Y",
                attrs: {"scroll-top": e.scrollTop, "scroll-y": !0},
                on: {
                    scroll: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.scroll.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "content",
                style: {color: e.color}
            }, [n("v-uni-rich-text", {attrs: {nodes: e.content}})], 1)], 1)], 1), n("v-uni-view", {staticClass: "bullet-close"}, [n("u-icon", {
                attrs: {
                    name: "close-circle",
                    color: "#fff",
                    size: "34"
                }, on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.handleClose.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1)
        }, o = []
    }, "6b3b": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("0006"), a = n("1c80");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("bbda");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "6be8676a", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "6b58": function (e, t, n) {
        n("d9e2"), n("d401");
        var i = n("7037")["default"], a = n("3c96");
        e.exports = function (e, t) {
            if (t && ("object" === i(t) || "function" === typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return a(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "6cb1": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-0c0d5caa], uni-scroll-view[data-v-0c0d5caa], uni-swiper-item[data-v-0c0d5caa]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-page[data-v-0c0d5caa]{display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center}.u-loading-page__warpper[data-v-0c0d5caa]{margin-top:-150px;justify-content:center;align-items:center;color:#c8c8c8;font-size:19px;display:flex;flex-direction:column}.u-loading-page__warpper__loading-icon[data-v-0c0d5caa]{margin-bottom:10px}.u-loading-page__warpper__loading-icon__img[data-v-0c0d5caa]{width:40px;height:40px}.u-loading-page__warpper__text[data-v-0c0d5caa]{font-size:19px;color:#c8c8c8}', ""]), e.exports = t
    }, "6cb13": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = {
            name: "game-button",
            props: {
                color: {default: "#2af598", type: String},
                str: {required: !0, type: String},
                disabled: {type: Boolean, default: !1}
            },
            data: function () {
                return {bgc: ""}
            },
            methods: {}
        };
        t.default = i
    }, "6f8f": function (e, t, n) {
        n("d3b7"), n("f8c9"), n("4ae1"), e.exports = function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "6fd8": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("d6ac"), a = n("0e95");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("1c01");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "bc1ece7a", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "71d3": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                value: {type: Boolean, default: !1},
                zIndex: {type: String | Number, default: 10086},
                opacity: {type: String | Number, default: .5},
                closeOnClickOverlay: {type: Boolean, default: !1},
                title: {type: String, default: "标题"},
                color: {type: String, default: "#333"},
                titleColor: {type: String, default: "#7d4802"},
                borderColor: {type: String, default: "#fad489"},
                bgColor: {type: String, default: "#fffdf1"},
                content: {type: String, default: ""}
            }, data: function () {
                return {scrollTop: 0, old: {scrollTop: 0}}
            }, methods: {
                handleOK: function () {
                    this.$emit("input", !1), this.$emit("confirm")
                }, handleCloseOnClickOverlay: function () {
                    this.closeOnClickOverlay && (this.$emit("input", !1), this.$emit("close"))
                }, handleClose: function () {
                    this.$emit("input", !1), this.$emit("cancel")
                }, scroll: function (e) {
                    this.old.scrollTop = e.detail.scrollTop
                }
            }
        };
        t.default = i
    }, 7562: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var i = {uTransition: n("7b02").default, uLoadingIcon: n("cf6a").default}, a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("u-transition", {
                attrs: {
                    show: e.loading,
                    "custom-style": {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: e.bgColor,
                        display: "flex"
                    }
                }
            }, [n("v-uni-view", {staticClass: "u-loading-page"}, [n("v-uni-view", {staticClass: "u-loading-page__warpper"}, [n("v-uni-view", {staticClass: "u-loading-page__warpper__loading-icon"}, [e.image ? n("v-uni-image", {
                staticClass: "u-loading-page__warpper__loading-icon__img",
                style: {width: e.$u.addUnit(e.iconSize), height: e.$u.addUnit(e.iconSize)},
                attrs: {src: e.image, mode: "widthFit"}
            }) : n("u-loading-icon", {
                attrs: {
                    mode: e.loadingMode,
                    size: e.$u.addUnit(e.iconSize),
                    color: e.loadingColor
                }
            })], 1), e._t("default", [n("v-uni-text", {
                staticClass: "u-loading-page__warpper__text",
                style: {fontSize: e.$u.addUnit(e.fontSize), color: e.color}
            }, [e._v(e._s(e.loadingText))])])], 2)], 1)], 1)
        }, o = []
    }, "75f8": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main-btn[data-v-cb0da6ea]{position:relative;height:%?72?%;width:100%}.main-btn .btn[data-v-cb0da6ea]{position:relative;height:%?72?%;width:100%;line-height:%?72?%;text-align:center;font-size:%?32?%;font-weight:700;cursor:pointer;border-radius:4px;letter-spacing:4px;transition:all .1s ease-in-out}.main-btn .btn .line[data-v-cb0da6ea]{position:absolute;top:0;height:%?72?%;width:100%;overflow:hidden}.main-btn .btn .span[data-v-cb0da6ea]{position:absolute;display:block}.main-btn .btn .span1[data-v-cb0da6ea]{top:0;left:-100%;width:100%;height:2px;-webkit-animation:anim1-data-v-cb0da6ea 4s linear infinite;animation:anim1-data-v-cb0da6ea 4s linear infinite}@-webkit-keyframes anim1-data-v-cb0da6ea{0%{left:-100%}50%,\r\n  100%{left:100%}}@keyframes anim1-data-v-cb0da6ea{0%{left:-100%}50%,\r\n  100%{left:100%}}.main-btn .btn .span2[data-v-cb0da6ea]{right:0;top:-100%;width:2px;height:100%;-webkit-animation:anim2-data-v-cb0da6ea 4s linear infinite;animation:anim2-data-v-cb0da6ea 4s linear infinite;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes anim2-data-v-cb0da6ea{0%{top:-100%}50%,\r\n  100%{top:100%}}@keyframes anim2-data-v-cb0da6ea{0%{top:-100%}50%,\r\n  100%{top:100%}}.main-btn .btn .span3[data-v-cb0da6ea]{bottom:0;right:-100%;width:100%;height:2px;-webkit-animation:anim3-data-v-cb0da6ea 4s linear infinite;animation:anim3-data-v-cb0da6ea 4s linear infinite;-webkit-animation-delay:1.9s;animation-delay:1.9s}@-webkit-keyframes anim3-data-v-cb0da6ea{0%{right:-100%}50%,\r\n  100%{right:100%}}@keyframes anim3-data-v-cb0da6ea{0%{right:-100%}50%,\r\n  100%{right:100%}}.main-btn .btn .span4[data-v-cb0da6ea]{left:0;bottom:-100%;width:2px;height:100%;-webkit-animation:anim4-data-v-cb0da6ea 4s linear infinite;animation:anim4-data-v-cb0da6ea 4s linear infinite;-webkit-animation-delay:2.9s;animation-delay:2.9s}@-webkit-keyframes anim4-data-v-cb0da6ea{0%{bottom:-100%}50%,\r\n  100%{bottom:100%}}@keyframes anim4-data-v-cb0da6ea{0%{bottom:-100%}50%,\r\n  100%{bottom:100%}}.main-btn .onbtn[data-v-cb0da6ea]{opacity:.75}', ""]), e.exports = t
    }, "7d30": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6b22"), a = n("402a");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("de0e");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "6a0e8cf5", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "7ec2": function (e, t, n) {
        n("7a82"), n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), n("b636"), n("944a"), n("0c47"), n("23dc"), n("3410"), n("d9e2"), n("d401"), n("14d9"), n("159b"), n("131a"), n("26e9"), n("fb6a");
        var i = n("7037")["default"];

        function a() {
            "use strict";
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            e.exports = a = function () {
                return t
            }, e.exports.__esModule = !0, e.exports["default"] = e.exports;
            var t = {}, n = Object.prototype, o = n.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                }, c = "function" == typeof Symbol ? Symbol : {}, s = c.iterator || "@@iterator",
                u = c.asyncIterator || "@@asyncIterator", l = c.toStringTag || "@@toStringTag";

            function d(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                d({}, "")
            } catch (T) {
                d = function (e, t, n) {
                    return e[t] = n
                }
            }

            function f(e, t, n, i) {
                var a = t && t.prototype instanceof v ? t : v, o = Object.create(a.prototype), c = new O(i || []);
                return r(o, "_invoke", {value: k(e, n, c)}), o
            }

            function p(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (T) {
                    return {type: "throw", arg: T}
                }
            }

            t.wrap = f;
            var h = {};

            function v() {
            }

            function m() {
            }

            function b() {
            }

            var g = {};
            d(g, s, (function () {
                return this
            }));
            var y = Object.getPrototypeOf, x = y && y(y(L([])));
            x && x !== n && o.call(x, s) && (g = x);
            var _ = b.prototype = v.prototype = Object.create(g);

            function A(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    d(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function w(e, t) {
                var n;
                r(this, "_invoke", {
                    value: function (a, r) {
                        function c() {
                            return new t((function (n, c) {
                                (function n(a, r, c, s) {
                                    var u = p(e[a], e, r);
                                    if ("throw" !== u.type) {
                                        var l = u.arg, d = l.value;
                                        return d && "object" == i(d) && o.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                                            n("next", e, c, s)
                                        }), (function (e) {
                                            n("throw", e, c, s)
                                        })) : t.resolve(d).then((function (e) {
                                            l.value = e, c(l)
                                        }), (function (e) {
                                            return n("throw", e, c, s)
                                        }))
                                    }
                                    s(u.arg)
                                })(a, r, n, c)
                            }))
                        }

                        return n = n ? n.then(c, c) : c()
                    }
                })
            }

            function k(e, t, n) {
                var i = "suspendedStart";
                return function (a, o) {
                    if ("executing" === i) throw new Error("Generator is already running");
                    if ("completed" === i) {
                        if ("throw" === a) throw o;
                        return z()
                    }
                    for (n.method = a, n.arg = o; ;) {
                        var r = n.delegate;
                        if (r) {
                            var c = S(r, n);
                            if (c) {
                                if (c === h) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === i) throw i = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = "executing";
                        var s = p(e, t, n);
                        if ("normal" === s.type) {
                            if (i = n.done ? "completed" : "suspendedYield", s.arg === h) continue;
                            return {value: s.arg, done: n.done}
                        }
                        "throw" === s.type && (i = "completed", n.method = "throw", n.arg = s.arg)
                    }
                }
            }

            function S(e, t) {
                var n = t.method, i = e.iterator[n];
                if (void 0 === i) return t.delegate = null, "throw" === n && e.iterator["return"] && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                var a = p(i, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h;
                var o = a.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
            }

            function C(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function O(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(C, this), this.reset(!0)
            }

            function L(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, i = function t() {
                            for (; ++n < e.length;) if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: z}
            }

            function z() {
                return {value: void 0, done: !0}
            }

            return m.prototype = b, r(_, "constructor", {value: b, configurable: !0}), r(b, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = d(b, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, d(e, l, "GeneratorFunction")), e.prototype = Object.create(_), e
            }, t.awrap = function (e) {
                return {__await: e}
            }, A(w.prototype), d(w.prototype, u, (function () {
                return this
            })), t.AsyncIterator = w, t.async = function (e, n, i, a, o) {
                void 0 === o && (o = Promise);
                var r = new w(f(e, n, i, a), o);
                return t.isGeneratorFunction(n) ? r : r.next().then((function (e) {
                    return e.done ? e.value : r.next()
                }))
            }, A(_), d(_, l, "Generator"), d(_, s, (function () {
                return this
            })), d(_, "toString", (function () {
                return "[object Generator]"
            })), t.keys = function (e) {
                var t = Object(e), n = [];
                for (var i in t) n.push(i);
                return n.reverse(), function e() {
                    for (; n.length;) {
                        var i = n.pop();
                        if (i in t) return e.value = i, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, t.values = L, O.prototype = {
                constructor: O, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !e) for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(n, i) {
                        return r.type = "throw", r.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i], r = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var c = o.call(a, "catchLoc"), s = o.call(a, "finallyLoc");
                            if (c && s) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var r = a ? a.completion : {};
                    return r.type = e, r.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(r)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), h
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var a = i.arg;
                                M(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: L(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), h
                }
            }, t
        }

        e.exports = a, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "7f2c5": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                bgColor: {type: String, default: uni.$u.props.gap.bgColor},
                height: {type: [String, Number], default: uni.$u.props.gap.height},
                marginTop: {type: [String, Number], default: uni.$u.props.gap.marginTop},
                marginBottom: {type: [String, Number], default: uni.$u.props.gap.marginBottom}
            }
        };
        t.default = i
    }, "81a8": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("c4a5"), a = n("d8a9");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("4fce");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "3fa5722e", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "82de": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("v-uni-view", {staticClass: "u-gap", style: [this.gapStyle]})
        }, a = []
    }, "82f2": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1da0"), a = n("0ba4");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("1410");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "2dcef1be", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, 8427: function (e, t, n) {
        var i = n("1d23");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("72ce9180", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "85a0": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("0e87"), a = n("f71d");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("5bc1");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "5eb06c99", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "863a": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("82de"), a = n("1951");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("b342");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "3927d88e", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, 8701: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4b87d063], uni-scroll-view[data-v-4b87d063], uni-swiper-item[data-v-4b87d063]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-avatar[data-v-4b87d063]{display:flex;flex-direction:row;align-items:center;justify-content:center}.u-avatar--circle[data-v-4b87d063]{border-radius:100px}.u-avatar--square[data-v-4b87d063]{border-radius:4px}.u-avatar__image--circle[data-v-4b87d063]{border-radius:100px}.u-avatar__image--square[data-v-4b87d063]{border-radius:4px}', ""]), e.exports = t
    }, "871d": function (e, t, n) {
        var i = n("8c89");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("63de702a", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "8c89": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-4762c2a8], uni-scroll-view[data-v-4762c2a8], uni-swiper-item[data-v-4762c2a8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-reset-button[data-v-4762c2a8]{width:100%}.u-action-sheet[data-v-4762c2a8]{text-align:center}.u-action-sheet__header[data-v-4762c2a8]{position:relative;padding:12px 30px}.u-action-sheet__header__title[data-v-4762c2a8]{font-size:16px;color:#303133;font-weight:700;text-align:center}.u-action-sheet__header__icon-wrap[data-v-4762c2a8]{position:absolute;right:15px;top:15px}.u-action-sheet__description[data-v-4762c2a8]{font-size:13px;color:#909193;margin:18px 15px;text-align:center}.u-action-sheet__item-wrap__item[data-v-4762c2a8]{padding:15px;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-direction:column}.u-action-sheet__item-wrap__item__name[data-v-4762c2a8]{font-size:16px;color:#303133;text-align:center}.u-action-sheet__item-wrap__item__subname[data-v-4762c2a8]{font-size:13px;color:#c0c4cc;margin-top:10px;text-align:center}.u-action-sheet__cancel-text[data-v-4762c2a8]{font-size:16px;color:#606266;text-align:center;padding:16px}.u-action-sheet--hover[data-v-4762c2a8]{background-color:#f2f3f5}', ""]), e.exports = t
    }, "8d66": function (e, t, n) {
        var i = n("d59c");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("127197e0", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "8e83": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("d4e0"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, "8fde": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.end[data-v-193dd72a]{background-color:initial!important;background-color:hsla(0,0%,100%,.2)!important;box-shadow:0 %?2?% %?12?% 0 hsla(0,0%,100%,.1)}.myColorInit2[data-v-193dd72a]{background-color:#ed809f!important}.myColorInit3[data-v-193dd72a]{background-color:#98d5f6!important}.myColorInit4[data-v-193dd72a]{background-color:#395b84!important}.myColorInit5[data-v-193dd72a]{background-color:#b83032!important}.myColorInit6[data-v-193dd72a]{background-color:#ff69b4!important}.myColorInit7[data-v-193dd72a]{background-color:#7f84a7!important}.myColorInit8[data-v-193dd72a]{background-color:#228b22!important}.myColorInit9[data-v-193dd72a]{background-color:#ffa07a!important}.myColorInit10[data-v-193dd72a]{background-color:salmon!important}.myColorOne2[data-v-193dd72a]{background-color:#7ebbf1!important}.myColorOne3[data-v-193dd72a]{background-color:#e9854b!important}.myColorOne4[data-v-193dd72a]{background-color:#8aa0aa!important}.myColorOne5[data-v-193dd72a]{background-color:#d2902e!important}.myColorOne6[data-v-193dd72a]{background-color:#ff4500!important}.myColorOne7[data-v-193dd72a]{background-color:#ff4500!important}.myColorOne8[data-v-193dd72a]{background-color:#8a2be2!important}.myColorOne9[data-v-193dd72a]{background-color:violet!important}.myColorOne10[data-v-193dd72a]{background-color:#00ced1!important}.myColorTwo2[data-v-193dd72a]{background-color:#f8db73!important}.myColorTwo3[data-v-193dd72a]{background-color:#6f91eb!important}.myColorTwo4[data-v-193dd72a]{background-color:#a3c1ad!important}.myColorTwo5[data-v-193dd72a]{background-color:#c95c28!important}.myColorTwo6[data-v-193dd72a]{background-color:purple!important}.myColorTwo7[data-v-193dd72a]{background-color:#8a2be2!important}.myColorTwo8[data-v-193dd72a]{background-color:teal!important}.myColorTwo9[data-v-193dd72a]{background-color:#ff69b4!important}.myColorTwo10[data-v-193dd72a]{background-color:gold!important}.round1[data-v-193dd72a]{border-top-left-radius:%?50?%!important}.round2[data-v-193dd72a]{border-top-right-radius:%?50?%!important}.round3[data-v-193dd72a]{border-bottom-right-radius:%?50?%!important}.round4[data-v-193dd72a]{border-bottom-left-radius:%?50?%!important}.round5[data-v-193dd72a]{border-top-left-radius:%?50?%!important;border-bottom-left-radius:%?50?%!important}.round6[data-v-193dd72a]{border-top-right-radius:%?50?%!important;border-bottom-right-radius:%?50?%!important}.round7[data-v-193dd72a]{border-top-right-radius:%?50?%!important;border-top-left-radius:%?50?%!important}.round8[data-v-193dd72a]{border-radius:%?50?%!important}.round9[data-v-193dd72a]{border-bottom-right-radius:%?50?%!important;border-bottom-left-radius:%?50?%!important}.round10[data-v-193dd72a]{border-top-right-radius:%?50?%!important;border-top-left-radius:%?50?%!important}@-webkit-keyframes dance6123-data-v-193dd72a{to{background-position:100px}}@keyframes dance6123-data-v-193dd72a{to{background-position:100px}}.animationEffect[data-v-193dd72a]{background-image:linear-gradient(90deg,#fa5252,#fa5252 16.65%,#be4bdb 0,#be4bdb 33.3%,#4c6ef5 0,#4c6ef5 49.95%,#40c057 0,#40c057 66.6%,#fab005 0,#fab005 83.25%,#fd7e14 0,#fd7e14 100%,#fa5252 0);-webkit-animation:2s linear dance6123-data-v-193dd72a infinite;animation:2s linear dance6123-data-v-193dd72a infinite;-webkit-transform:scale(1.1) translateY(-1px);transform:scale(1.1) translateY(-1px)}.square[data-v-193dd72a]{overflow:hidden;border-radius:%?10?%;width:100%;padding-top:100%;\r\n  /* 或者使用 padding-bottom: 100%; */position:relative;transition:.3s all ease-in-out}.square .character[data-v-193dd72a]{display:flex;align-items:center;justify-content:center;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;height:80%;border-radius:50%;transition:all 1s}.square .square-children[data-v-193dd72a]{color:#fff;font-weight:700;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}', ""]), e.exports = t
    }, "927c": function (e, t, n) {
        "use strict";
        var i = n("6075"), a = n.n(i);
        a.a
    }, 9680: function (e, t, n) {
        var i = n("aad8");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("7e4ed67a", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "970b": function (e, t, n) {
        n("d9e2"), n("d401"), e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "97cf": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("983c"), a = n("8e83");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("bb27");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "4b87d063", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "983c": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var i = {uIcon: n("a6a2").default, "u-Text": n("4dd3").default}, a = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "u-avatar",
                class: ["u-avatar--" + e.shape],
                style: [{
                    backgroundColor: e.text || e.icon ? e.randomBgColor ? e.colors["" !== e.colorIndex ? e.colorIndex : e.$u.random(0, 19)] : e.bgColor : "transparent",
                    width: e.$u.addUnit(e.size),
                    height: e.$u.addUnit(e.size)
                }, e.$u.addStyle(e.customStyle)],
                on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.clickHandler.apply(void 0, arguments)
                    }
                }
            }, [e._t("default", [e.mpAvatar && e.allowMp ? void 0 : e.icon ? n("u-icon", {
                attrs: {
                    name: e.icon,
                    size: e.fontSize,
                    color: e.color
                }
            }) : e.text ? n("u--text", {
                attrs: {
                    text: e.text,
                    size: e.fontSize,
                    color: e.color,
                    align: "center",
                    customStyle: "justify-content: center"
                }
            }) : n("v-uni-image", {
                staticClass: "u-avatar__image",
                class: ["u-avatar__image--" + e.shape],
                style: [{width: e.$u.addUnit(e.size), height: e.$u.addUnit(e.size)}],
                attrs: {src: e.avatarUrl || e.defaultUrl, mode: e.mode},
                on: {
                    error: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.errorHandler.apply(void 0, arguments)
                    }
                }
            })])], 2)
        }, o = []
    }, "985f": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ce99"), a = n("3256");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("f85c");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "2f0e5305", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, "9b42": function (e, t, n) {
        n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), n("14d9"), e.exports = function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var i, a, o, r, c = [], s = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        s = !1
                    } else for (; !(s = (i = o.call(n)).done) && (c.push(i.value), c.length !== t); s = !0) ;
                } catch (l) {
                    u = !0, a = l
                } finally {
                    try {
                        if (!s && null != n["return"] && (r = n["return"](), Object(r) !== r)) return
                    } finally {
                        if (u) throw a
                    }
                }
                return c
            }
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, "9c08": function (e, t, n) {
        var i = n("24fb"), a = n("1de5"), o = n("9d52");
        t = i(!1);
        var r = a(o);
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uniui-color[data-v-0a75b799]:before{content:"\\e6cf"}.uniui-wallet[data-v-0a75b799]:before{content:"\\e6b1"}.uniui-settings-filled[data-v-0a75b799]:before{content:"\\e6ce"}.uniui-auth-filled[data-v-0a75b799]:before{content:"\\e6cc"}.uniui-shop-filled[data-v-0a75b799]:before{content:"\\e6cd"}.uniui-staff-filled[data-v-0a75b799]:before{content:"\\e6cb"}.uniui-vip-filled[data-v-0a75b799]:before{content:"\\e6c6"}.uniui-plus-filled[data-v-0a75b799]:before{content:"\\e6c7"}.uniui-folder-add-filled[data-v-0a75b799]:before{content:"\\e6c8"}.uniui-color-filled[data-v-0a75b799]:before{content:"\\e6c9"}.uniui-tune-filled[data-v-0a75b799]:before{content:"\\e6ca"}.uniui-calendar-filled[data-v-0a75b799]:before{content:"\\e6c0"}.uniui-notification-filled[data-v-0a75b799]:before{content:"\\e6c1"}.uniui-wallet-filled[data-v-0a75b799]:before{content:"\\e6c2"}.uniui-medal-filled[data-v-0a75b799]:before{content:"\\e6c3"}.uniui-gift-filled[data-v-0a75b799]:before{content:"\\e6c4"}.uniui-fire-filled[data-v-0a75b799]:before{content:"\\e6c5"}.uniui-refreshempty[data-v-0a75b799]:before{content:"\\e6bf"}.uniui-location-filled[data-v-0a75b799]:before{content:"\\e6af"}.uniui-person-filled[data-v-0a75b799]:before{content:"\\e69d"}.uniui-personadd-filled[data-v-0a75b799]:before{content:"\\e698"}.uniui-back[data-v-0a75b799]:before{content:"\\e6b9"}.uniui-forward[data-v-0a75b799]:before{content:"\\e6ba"}.uniui-arrow-right[data-v-0a75b799]:before{content:"\\e6bb"}.uniui-arrowthinright[data-v-0a75b799]:before{content:"\\e6bb"}.uniui-arrow-left[data-v-0a75b799]:before{content:"\\e6bc"}.uniui-arrowthinleft[data-v-0a75b799]:before{content:"\\e6bc"}.uniui-arrow-up[data-v-0a75b799]:before{content:"\\e6bd"}.uniui-arrowthinup[data-v-0a75b799]:before{content:"\\e6bd"}.uniui-arrow-down[data-v-0a75b799]:before{content:"\\e6be"}.uniui-arrowthindown[data-v-0a75b799]:before{content:"\\e6be"}.uniui-bottom[data-v-0a75b799]:before{content:"\\e6b8"}.uniui-arrowdown[data-v-0a75b799]:before{content:"\\e6b8"}.uniui-right[data-v-0a75b799]:before{content:"\\e6b5"}.uniui-arrowright[data-v-0a75b799]:before{content:"\\e6b5"}.uniui-top[data-v-0a75b799]:before{content:"\\e6b6"}.uniui-arrowup[data-v-0a75b799]:before{content:"\\e6b6"}.uniui-left[data-v-0a75b799]:before{content:"\\e6b7"}.uniui-arrowleft[data-v-0a75b799]:before{content:"\\e6b7"}.uniui-eye[data-v-0a75b799]:before{content:"\\e651"}.uniui-eye-filled[data-v-0a75b799]:before{content:"\\e66a"}.uniui-eye-slash[data-v-0a75b799]:before{content:"\\e6b3"}.uniui-eye-slash-filled[data-v-0a75b799]:before{content:"\\e6b4"}.uniui-info-filled[data-v-0a75b799]:before{content:"\\e649"}.uniui-reload[data-v-0a75b799]:before{content:"\\e6b2"}.uniui-micoff-filled[data-v-0a75b799]:before{content:"\\e6b0"}.uniui-map-pin-ellipse[data-v-0a75b799]:before{content:"\\e6ac"}.uniui-map-pin[data-v-0a75b799]:before{content:"\\e6ad"}.uniui-location[data-v-0a75b799]:before{content:"\\e6ae"}.uniui-starhalf[data-v-0a75b799]:before{content:"\\e683"}.uniui-star[data-v-0a75b799]:before{content:"\\e688"}.uniui-star-filled[data-v-0a75b799]:before{content:"\\e68f"}.uniui-calendar[data-v-0a75b799]:before{content:"\\e6a0"}.uniui-fire[data-v-0a75b799]:before{content:"\\e6a1"}.uniui-medal[data-v-0a75b799]:before{content:"\\e6a2"}.uniui-font[data-v-0a75b799]:before{content:"\\e6a3"}.uniui-gift[data-v-0a75b799]:before{content:"\\e6a4"}.uniui-link[data-v-0a75b799]:before{content:"\\e6a5"}.uniui-notification[data-v-0a75b799]:before{content:"\\e6a6"}.uniui-staff[data-v-0a75b799]:before{content:"\\e6a7"}.uniui-vip[data-v-0a75b799]:before{content:"\\e6a8"}.uniui-folder-add[data-v-0a75b799]:before{content:"\\e6a9"}.uniui-tune[data-v-0a75b799]:before{content:"\\e6aa"}.uniui-auth[data-v-0a75b799]:before{content:"\\e6ab"}.uniui-person[data-v-0a75b799]:before{content:"\\e699"}.uniui-email-filled[data-v-0a75b799]:before{content:"\\e69a"}.uniui-phone-filled[data-v-0a75b799]:before{content:"\\e69b"}.uniui-phone[data-v-0a75b799]:before{content:"\\e69c"}.uniui-email[data-v-0a75b799]:before{content:"\\e69e"}.uniui-personadd[data-v-0a75b799]:before{content:"\\e69f"}.uniui-chatboxes-filled[data-v-0a75b799]:before{content:"\\e692"}.uniui-contact[data-v-0a75b799]:before{content:"\\e693"}.uniui-chatbubble-filled[data-v-0a75b799]:before{content:"\\e694"}.uniui-contact-filled[data-v-0a75b799]:before{content:"\\e695"}.uniui-chatboxes[data-v-0a75b799]:before{content:"\\e696"}.uniui-chatbubble[data-v-0a75b799]:before{content:"\\e697"}.uniui-upload-filled[data-v-0a75b799]:before{content:"\\e68e"}.uniui-upload[data-v-0a75b799]:before{content:"\\e690"}.uniui-weixin[data-v-0a75b799]:before{content:"\\e691"}.uniui-compose[data-v-0a75b799]:before{content:"\\e67f"}.uniui-qq[data-v-0a75b799]:before{content:"\\e680"}.uniui-download-filled[data-v-0a75b799]:before{content:"\\e681"}.uniui-pyq[data-v-0a75b799]:before{content:"\\e682"}.uniui-sound[data-v-0a75b799]:before{content:"\\e684"}.uniui-trash-filled[data-v-0a75b799]:before{content:"\\e685"}.uniui-sound-filled[data-v-0a75b799]:before{content:"\\e686"}.uniui-trash[data-v-0a75b799]:before{content:"\\e687"}.uniui-videocam-filled[data-v-0a75b799]:before{content:"\\e689"}.uniui-spinner-cycle[data-v-0a75b799]:before{content:"\\e68a"}.uniui-weibo[data-v-0a75b799]:before{content:"\\e68b"}.uniui-videocam[data-v-0a75b799]:before{content:"\\e68c"}.uniui-download[data-v-0a75b799]:before{content:"\\e68d"}.uniui-help[data-v-0a75b799]:before{content:"\\e679"}.uniui-navigate-filled[data-v-0a75b799]:before{content:"\\e67a"}.uniui-plusempty[data-v-0a75b799]:before{content:"\\e67b"}.uniui-smallcircle[data-v-0a75b799]:before{content:"\\e67c"}.uniui-minus-filled[data-v-0a75b799]:before{content:"\\e67d"}.uniui-micoff[data-v-0a75b799]:before{content:"\\e67e"}.uniui-closeempty[data-v-0a75b799]:before{content:"\\e66c"}.uniui-clear[data-v-0a75b799]:before{content:"\\e66d"}.uniui-navigate[data-v-0a75b799]:before{content:"\\e66e"}.uniui-minus[data-v-0a75b799]:before{content:"\\e66f"}.uniui-image[data-v-0a75b799]:before{content:"\\e670"}.uniui-mic[data-v-0a75b799]:before{content:"\\e671"}.uniui-paperplane[data-v-0a75b799]:before{content:"\\e672"}.uniui-close[data-v-0a75b799]:before{content:"\\e673"}.uniui-help-filled[data-v-0a75b799]:before{content:"\\e674"}.uniui-paperplane-filled[data-v-0a75b799]:before{content:"\\e675"}.uniui-plus[data-v-0a75b799]:before{content:"\\e676"}.uniui-mic-filled[data-v-0a75b799]:before{content:"\\e677"}.uniui-image-filled[data-v-0a75b799]:before{content:"\\e678"}.uniui-locked-filled[data-v-0a75b799]:before{content:"\\e668"}.uniui-info[data-v-0a75b799]:before{content:"\\e669"}.uniui-locked[data-v-0a75b799]:before{content:"\\e66b"}.uniui-camera-filled[data-v-0a75b799]:before{content:"\\e658"}.uniui-chat-filled[data-v-0a75b799]:before{content:"\\e659"}.uniui-camera[data-v-0a75b799]:before{content:"\\e65a"}.uniui-circle[data-v-0a75b799]:before{content:"\\e65b"}.uniui-checkmarkempty[data-v-0a75b799]:before{content:"\\e65c"}.uniui-chat[data-v-0a75b799]:before{content:"\\e65d"}.uniui-circle-filled[data-v-0a75b799]:before{content:"\\e65e"}.uniui-flag[data-v-0a75b799]:before{content:"\\e65f"}.uniui-flag-filled[data-v-0a75b799]:before{content:"\\e660"}.uniui-gear-filled[data-v-0a75b799]:before{content:"\\e661"}.uniui-home[data-v-0a75b799]:before{content:"\\e662"}.uniui-home-filled[data-v-0a75b799]:before{content:"\\e663"}.uniui-gear[data-v-0a75b799]:before{content:"\\e664"}.uniui-smallcircle-filled[data-v-0a75b799]:before{content:"\\e665"}.uniui-map-filled[data-v-0a75b799]:before{content:"\\e666"}.uniui-map[data-v-0a75b799]:before{content:"\\e667"}.uniui-refresh-filled[data-v-0a75b799]:before{content:"\\e656"}.uniui-refresh[data-v-0a75b799]:before{content:"\\e657"}.uniui-cloud-upload[data-v-0a75b799]:before{content:"\\e645"}.uniui-cloud-download-filled[data-v-0a75b799]:before{content:"\\e646"}.uniui-cloud-download[data-v-0a75b799]:before{content:"\\e647"}.uniui-cloud-upload-filled[data-v-0a75b799]:before{content:"\\e648"}.uniui-redo[data-v-0a75b799]:before{content:"\\e64a"}.uniui-images-filled[data-v-0a75b799]:before{content:"\\e64b"}.uniui-undo-filled[data-v-0a75b799]:before{content:"\\e64c"}.uniui-more[data-v-0a75b799]:before{content:"\\e64d"}.uniui-more-filled[data-v-0a75b799]:before{content:"\\e64e"}.uniui-undo[data-v-0a75b799]:before{content:"\\e64f"}.uniui-images[data-v-0a75b799]:before{content:"\\e650"}.uniui-paperclip[data-v-0a75b799]:before{content:"\\e652"}.uniui-settings[data-v-0a75b799]:before{content:"\\e653"}.uniui-search[data-v-0a75b799]:before{content:"\\e654"}.uniui-redo-filled[data-v-0a75b799]:before{content:"\\e655"}.uniui-list[data-v-0a75b799]:before{content:"\\e644"}.uniui-mail-open-filled[data-v-0a75b799]:before{content:"\\e63a"}.uniui-hand-down-filled[data-v-0a75b799]:before{content:"\\e63c"}.uniui-hand-down[data-v-0a75b799]:before{content:"\\e63d"}.uniui-hand-up-filled[data-v-0a75b799]:before{content:"\\e63e"}.uniui-hand-up[data-v-0a75b799]:before{content:"\\e63f"}.uniui-heart-filled[data-v-0a75b799]:before{content:"\\e641"}.uniui-mail-open[data-v-0a75b799]:before{content:"\\e643"}.uniui-heart[data-v-0a75b799]:before{content:"\\e639"}.uniui-loop[data-v-0a75b799]:before{content:"\\e633"}.uniui-pulldown[data-v-0a75b799]:before{content:"\\e632"}.uniui-scan[data-v-0a75b799]:before{content:"\\e62a"}.uniui-bars[data-v-0a75b799]:before{content:"\\e627"}.uniui-cart-filled[data-v-0a75b799]:before{content:"\\e629"}.uniui-checkbox[data-v-0a75b799]:before{content:"\\e62b"}.uniui-checkbox-filled[data-v-0a75b799]:before{content:"\\e62c"}.uniui-shop[data-v-0a75b799]:before{content:"\\e62f"}.uniui-headphones[data-v-0a75b799]:before{content:"\\e630"}.uniui-cart[data-v-0a75b799]:before{content:"\\e631"}@font-face{font-family:uniicons;src:url(' + r + ') format("truetype")}.uni-icons[data-v-0a75b799]{font-family:uniicons;text-decoration:none;text-align:center}', ""]), e.exports = t
    }, "9d52": function (e, t, n) {
        e.exports = n.p + "static/fonts/uniicons.b6d3756e.ttf"
    }, "9f69": function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = {
            id: "2852637",
            name: "uniui图标库",
            font_family: "uniicons",
            css_prefix_text: "uniui-",
            description: "",
            glyphs: [{
                icon_id: "25027049",
                name: "yanse",
                font_class: "color",
                unicode: "e6cf",
                unicode_decimal: 59087
            }, {
                icon_id: "25027048",
                name: "wallet",
                font_class: "wallet",
                unicode: "e6b1",
                unicode_decimal: 59057
            }, {
                icon_id: "25015720",
                name: "settings-filled",
                font_class: "settings-filled",
                unicode: "e6ce",
                unicode_decimal: 59086
            }, {
                icon_id: "25015434",
                name: "shimingrenzheng-filled",
                font_class: "auth-filled",
                unicode: "e6cc",
                unicode_decimal: 59084
            }, {
                icon_id: "24934246",
                name: "shop-filled",
                font_class: "shop-filled",
                unicode: "e6cd",
                unicode_decimal: 59085
            }, {
                icon_id: "24934159",
                name: "staff-filled-01",
                font_class: "staff-filled",
                unicode: "e6cb",
                unicode_decimal: 59083
            }, {
                icon_id: "24932461",
                name: "VIP-filled",
                font_class: "vip-filled",
                unicode: "e6c6",
                unicode_decimal: 59078
            }, {
                icon_id: "24932462",
                name: "plus_circle_fill",
                font_class: "plus-filled",
                unicode: "e6c7",
                unicode_decimal: 59079
            }, {
                icon_id: "24932463",
                name: "folder_add-filled",
                font_class: "folder-add-filled",
                unicode: "e6c8",
                unicode_decimal: 59080
            }, {
                icon_id: "24932464",
                name: "yanse-filled",
                font_class: "color-filled",
                unicode: "e6c9",
                unicode_decimal: 59081
            }, {
                icon_id: "24932465",
                name: "tune-filled",
                font_class: "tune-filled",
                unicode: "e6ca",
                unicode_decimal: 59082
            }, {
                icon_id: "24932455",
                name: "a-rilidaka-filled",
                font_class: "calendar-filled",
                unicode: "e6c0",
                unicode_decimal: 59072
            }, {
                icon_id: "24932456",
                name: "notification-filled",
                font_class: "notification-filled",
                unicode: "e6c1",
                unicode_decimal: 59073
            }, {
                icon_id: "24932457",
                name: "wallet-filled",
                font_class: "wallet-filled",
                unicode: "e6c2",
                unicode_decimal: 59074
            }, {
                icon_id: "24932458",
                name: "paihangbang-filled",
                font_class: "medal-filled",
                unicode: "e6c3",
                unicode_decimal: 59075
            }, {
                icon_id: "24932459",
                name: "gift-filled",
                font_class: "gift-filled",
                unicode: "e6c4",
                unicode_decimal: 59076
            }, {
                icon_id: "24932460",
                name: "fire-filled",
                font_class: "fire-filled",
                unicode: "e6c5",
                unicode_decimal: 59077
            }, {
                icon_id: "24928001",
                name: "refreshempty",
                font_class: "refreshempty",
                unicode: "e6bf",
                unicode_decimal: 59071
            }, {
                icon_id: "24926853",
                name: "location-ellipse",
                font_class: "location-filled",
                unicode: "e6af",
                unicode_decimal: 59055
            }, {
                icon_id: "24926735",
                name: "person-filled",
                font_class: "person-filled",
                unicode: "e69d",
                unicode_decimal: 59037
            }, {
                icon_id: "24926703",
                name: "personadd-filled",
                font_class: "personadd-filled",
                unicode: "e698",
                unicode_decimal: 59032
            }, {
                icon_id: "24923351",
                name: "back",
                font_class: "back",
                unicode: "e6b9",
                unicode_decimal: 59065
            }, {
                icon_id: "24923352",
                name: "forward",
                font_class: "forward",
                unicode: "e6ba",
                unicode_decimal: 59066
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrow-right",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrowthinright",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrow-left",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrowthinleft",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrow-up",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrowthinup",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrow-down",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrowthindown",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "bottom",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "arrowdown",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "right",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "arrowright",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "top",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "arrowup",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "left",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "arrowleft",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923334",
                name: "eye",
                font_class: "eye",
                unicode: "e651",
                unicode_decimal: 58961
            }, {
                icon_id: "24923335",
                name: "eye-filled",
                font_class: "eye-filled",
                unicode: "e66a",
                unicode_decimal: 58986
            }, {
                icon_id: "24923336",
                name: "eye-slash",
                font_class: "eye-slash",
                unicode: "e6b3",
                unicode_decimal: 59059
            }, {
                icon_id: "24923337",
                name: "eye-slash-filled",
                font_class: "eye-slash-filled",
                unicode: "e6b4",
                unicode_decimal: 59060
            }, {
                icon_id: "24923305",
                name: "info-filled",
                font_class: "info-filled",
                unicode: "e649",
                unicode_decimal: 58953
            }, {
                icon_id: "24923299",
                name: "reload-01",
                font_class: "reload",
                unicode: "e6b2",
                unicode_decimal: 59058
            }, {
                icon_id: "24923195",
                name: "mic_slash_fill",
                font_class: "micoff-filled",
                unicode: "e6b0",
                unicode_decimal: 59056
            }, {
                icon_id: "24923165",
                name: "map-pin-ellipse",
                font_class: "map-pin-ellipse",
                unicode: "e6ac",
                unicode_decimal: 59052
            }, {
                icon_id: "24923166",
                name: "map-pin",
                font_class: "map-pin",
                unicode: "e6ad",
                unicode_decimal: 59053
            }, {
                icon_id: "24923167",
                name: "location",
                font_class: "location",
                unicode: "e6ae",
                unicode_decimal: 59054
            }, {
                icon_id: "24923064",
                name: "starhalf",
                font_class: "starhalf",
                unicode: "e683",
                unicode_decimal: 59011
            }, {
                icon_id: "24923065",
                name: "star",
                font_class: "star",
                unicode: "e688",
                unicode_decimal: 59016
            }, {
                icon_id: "24923066",
                name: "star-filled",
                font_class: "star-filled",
                unicode: "e68f",
                unicode_decimal: 59023
            }, {
                icon_id: "24899646",
                name: "a-rilidaka",
                font_class: "calendar",
                unicode: "e6a0",
                unicode_decimal: 59040
            }, {
                icon_id: "24899647",
                name: "fire",
                font_class: "fire",
                unicode: "e6a1",
                unicode_decimal: 59041
            }, {
                icon_id: "24899648",
                name: "paihangbang",
                font_class: "medal",
                unicode: "e6a2",
                unicode_decimal: 59042
            }, {
                icon_id: "24899649",
                name: "font",
                font_class: "font",
                unicode: "e6a3",
                unicode_decimal: 59043
            }, {
                icon_id: "24899650",
                name: "gift",
                font_class: "gift",
                unicode: "e6a4",
                unicode_decimal: 59044
            }, {
                icon_id: "24899651",
                name: "link",
                font_class: "link",
                unicode: "e6a5",
                unicode_decimal: 59045
            }, {
                icon_id: "24899652",
                name: "notification",
                font_class: "notification",
                unicode: "e6a6",
                unicode_decimal: 59046
            }, {
                icon_id: "24899653",
                name: "staff",
                font_class: "staff",
                unicode: "e6a7",
                unicode_decimal: 59047
            }, {
                icon_id: "24899654",
                name: "VIP",
                font_class: "vip",
                unicode: "e6a8",
                unicode_decimal: 59048
            }, {
                icon_id: "24899655",
                name: "folder_add",
                font_class: "folder-add",
                unicode: "e6a9",
                unicode_decimal: 59049
            }, {
                icon_id: "24899656",
                name: "tune",
                font_class: "tune",
                unicode: "e6aa",
                unicode_decimal: 59050
            }, {
                icon_id: "24899657",
                name: "shimingrenzheng",
                font_class: "auth",
                unicode: "e6ab",
                unicode_decimal: 59051
            }, {
                icon_id: "24899565",
                name: "person",
                font_class: "person",
                unicode: "e699",
                unicode_decimal: 59033
            }, {
                icon_id: "24899566",
                name: "email-filled",
                font_class: "email-filled",
                unicode: "e69a",
                unicode_decimal: 59034
            }, {
                icon_id: "24899567",
                name: "phone-filled",
                font_class: "phone-filled",
                unicode: "e69b",
                unicode_decimal: 59035
            }, {
                icon_id: "24899568",
                name: "phone",
                font_class: "phone",
                unicode: "e69c",
                unicode_decimal: 59036
            }, {
                icon_id: "24899570",
                name: "email",
                font_class: "email",
                unicode: "e69e",
                unicode_decimal: 59038
            }, {
                icon_id: "24899571",
                name: "personadd",
                font_class: "personadd",
                unicode: "e69f",
                unicode_decimal: 59039
            }, {
                icon_id: "24899558",
                name: "chatboxes-filled",
                font_class: "chatboxes-filled",
                unicode: "e692",
                unicode_decimal: 59026
            }, {
                icon_id: "24899559",
                name: "contact",
                font_class: "contact",
                unicode: "e693",
                unicode_decimal: 59027
            }, {
                icon_id: "24899560",
                name: "chatbubble-filled",
                font_class: "chatbubble-filled",
                unicode: "e694",
                unicode_decimal: 59028
            }, {
                icon_id: "24899561",
                name: "contact-filled",
                font_class: "contact-filled",
                unicode: "e695",
                unicode_decimal: 59029
            }, {
                icon_id: "24899562",
                name: "chatboxes",
                font_class: "chatboxes",
                unicode: "e696",
                unicode_decimal: 59030
            }, {
                icon_id: "24899563",
                name: "chatbubble",
                font_class: "chatbubble",
                unicode: "e697",
                unicode_decimal: 59031
            }, {
                icon_id: "24881290",
                name: "upload-filled",
                font_class: "upload-filled",
                unicode: "e68e",
                unicode_decimal: 59022
            }, {
                icon_id: "24881292",
                name: "upload",
                font_class: "upload",
                unicode: "e690",
                unicode_decimal: 59024
            }, {
                icon_id: "24881293",
                name: "weixin",
                font_class: "weixin",
                unicode: "e691",
                unicode_decimal: 59025
            }, {
                icon_id: "24881274",
                name: "compose",
                font_class: "compose",
                unicode: "e67f",
                unicode_decimal: 59007
            }, {
                icon_id: "24881275",
                name: "qq",
                font_class: "qq",
                unicode: "e680",
                unicode_decimal: 59008
            }, {
                icon_id: "24881276",
                name: "download-filled",
                font_class: "download-filled",
                unicode: "e681",
                unicode_decimal: 59009
            }, {
                icon_id: "24881277",
                name: "pengyouquan",
                font_class: "pyq",
                unicode: "e682",
                unicode_decimal: 59010
            }, {
                icon_id: "24881279",
                name: "sound",
                font_class: "sound",
                unicode: "e684",
                unicode_decimal: 59012
            }, {
                icon_id: "24881280",
                name: "trash-filled",
                font_class: "trash-filled",
                unicode: "e685",
                unicode_decimal: 59013
            }, {
                icon_id: "24881281",
                name: "sound-filled",
                font_class: "sound-filled",
                unicode: "e686",
                unicode_decimal: 59014
            }, {
                icon_id: "24881282",
                name: "trash",
                font_class: "trash",
                unicode: "e687",
                unicode_decimal: 59015
            }, {
                icon_id: "24881284",
                name: "videocam-filled",
                font_class: "videocam-filled",
                unicode: "e689",
                unicode_decimal: 59017
            }, {
                icon_id: "24881285",
                name: "spinner-cycle",
                font_class: "spinner-cycle",
                unicode: "e68a",
                unicode_decimal: 59018
            }, {
                icon_id: "24881286",
                name: "weibo",
                font_class: "weibo",
                unicode: "e68b",
                unicode_decimal: 59019
            }, {
                icon_id: "24881288",
                name: "videocam",
                font_class: "videocam",
                unicode: "e68c",
                unicode_decimal: 59020
            }, {
                icon_id: "24881289",
                name: "download",
                font_class: "download",
                unicode: "e68d",
                unicode_decimal: 59021
            }, {
                icon_id: "24879601",
                name: "help",
                font_class: "help",
                unicode: "e679",
                unicode_decimal: 59001
            }, {
                icon_id: "24879602",
                name: "navigate-filled",
                font_class: "navigate-filled",
                unicode: "e67a",
                unicode_decimal: 59002
            }, {
                icon_id: "24879603",
                name: "plusempty",
                font_class: "plusempty",
                unicode: "e67b",
                unicode_decimal: 59003
            }, {
                icon_id: "24879604",
                name: "smallcircle",
                font_class: "smallcircle",
                unicode: "e67c",
                unicode_decimal: 59004
            }, {
                icon_id: "24879605",
                name: "minus-filled",
                font_class: "minus-filled",
                unicode: "e67d",
                unicode_decimal: 59005
            }, {
                icon_id: "24879606",
                name: "micoff",
                font_class: "micoff",
                unicode: "e67e",
                unicode_decimal: 59006
            }, {
                icon_id: "24879588",
                name: "closeempty",
                font_class: "closeempty",
                unicode: "e66c",
                unicode_decimal: 58988
            }, {
                icon_id: "24879589",
                name: "clear",
                font_class: "clear",
                unicode: "e66d",
                unicode_decimal: 58989
            }, {
                icon_id: "24879590",
                name: "navigate",
                font_class: "navigate",
                unicode: "e66e",
                unicode_decimal: 58990
            }, {
                icon_id: "24879591",
                name: "minus",
                font_class: "minus",
                unicode: "e66f",
                unicode_decimal: 58991
            }, {
                icon_id: "24879592",
                name: "image",
                font_class: "image",
                unicode: "e670",
                unicode_decimal: 58992
            }, {
                icon_id: "24879593",
                name: "mic",
                font_class: "mic",
                unicode: "e671",
                unicode_decimal: 58993
            }, {
                icon_id: "24879594",
                name: "paperplane",
                font_class: "paperplane",
                unicode: "e672",
                unicode_decimal: 58994
            }, {
                icon_id: "24879595",
                name: "close",
                font_class: "close",
                unicode: "e673",
                unicode_decimal: 58995
            }, {
                icon_id: "24879596",
                name: "help-filled",
                font_class: "help-filled",
                unicode: "e674",
                unicode_decimal: 58996
            }, {
                icon_id: "24879597",
                name: "plus-filled",
                font_class: "paperplane-filled",
                unicode: "e675",
                unicode_decimal: 58997
            }, {
                icon_id: "24879598",
                name: "plus",
                font_class: "plus",
                unicode: "e676",
                unicode_decimal: 58998
            }, {
                icon_id: "24879599",
                name: "mic-filled",
                font_class: "mic-filled",
                unicode: "e677",
                unicode_decimal: 58999
            }, {
                icon_id: "24879600",
                name: "image-filled",
                font_class: "image-filled",
                unicode: "e678",
                unicode_decimal: 59e3
            }, {
                icon_id: "24855900",
                name: "locked-filled",
                font_class: "locked-filled",
                unicode: "e668",
                unicode_decimal: 58984
            }, {
                icon_id: "24855901",
                name: "info",
                font_class: "info",
                unicode: "e669",
                unicode_decimal: 58985
            }, {
                icon_id: "24855903",
                name: "locked",
                font_class: "locked",
                unicode: "e66b",
                unicode_decimal: 58987
            }, {
                icon_id: "24855884",
                name: "camera-filled",
                font_class: "camera-filled",
                unicode: "e658",
                unicode_decimal: 58968
            }, {
                icon_id: "24855885",
                name: "chat-filled",
                font_class: "chat-filled",
                unicode: "e659",
                unicode_decimal: 58969
            }, {
                icon_id: "24855886",
                name: "camera",
                font_class: "camera",
                unicode: "e65a",
                unicode_decimal: 58970
            }, {
                icon_id: "24855887",
                name: "circle",
                font_class: "circle",
                unicode: "e65b",
                unicode_decimal: 58971
            }, {
                icon_id: "24855888",
                name: "checkmarkempty",
                font_class: "checkmarkempty",
                unicode: "e65c",
                unicode_decimal: 58972
            }, {
                icon_id: "24855889",
                name: "chat",
                font_class: "chat",
                unicode: "e65d",
                unicode_decimal: 58973
            }, {
                icon_id: "24855890",
                name: "circle-filled",
                font_class: "circle-filled",
                unicode: "e65e",
                unicode_decimal: 58974
            }, {
                icon_id: "24855891",
                name: "flag",
                font_class: "flag",
                unicode: "e65f",
                unicode_decimal: 58975
            }, {
                icon_id: "24855892",
                name: "flag-filled",
                font_class: "flag-filled",
                unicode: "e660",
                unicode_decimal: 58976
            }, {
                icon_id: "24855893",
                name: "gear-filled",
                font_class: "gear-filled",
                unicode: "e661",
                unicode_decimal: 58977
            }, {
                icon_id: "24855894",
                name: "home",
                font_class: "home",
                unicode: "e662",
                unicode_decimal: 58978
            }, {
                icon_id: "24855895",
                name: "home-filled",
                font_class: "home-filled",
                unicode: "e663",
                unicode_decimal: 58979
            }, {
                icon_id: "24855896",
                name: "gear",
                font_class: "gear",
                unicode: "e664",
                unicode_decimal: 58980
            }, {
                icon_id: "24855897",
                name: "smallcircle-filled",
                font_class: "smallcircle-filled",
                unicode: "e665",
                unicode_decimal: 58981
            }, {
                icon_id: "24855898",
                name: "map-filled",
                font_class: "map-filled",
                unicode: "e666",
                unicode_decimal: 58982
            }, {
                icon_id: "24855899",
                name: "map",
                font_class: "map",
                unicode: "e667",
                unicode_decimal: 58983
            }, {
                icon_id: "24855825",
                name: "refresh-filled",
                font_class: "refresh-filled",
                unicode: "e656",
                unicode_decimal: 58966
            }, {
                icon_id: "24855826",
                name: "refresh",
                font_class: "refresh",
                unicode: "e657",
                unicode_decimal: 58967
            }, {
                icon_id: "24855808",
                name: "cloud-upload",
                font_class: "cloud-upload",
                unicode: "e645",
                unicode_decimal: 58949
            }, {
                icon_id: "24855809",
                name: "cloud-download-filled",
                font_class: "cloud-download-filled",
                unicode: "e646",
                unicode_decimal: 58950
            }, {
                icon_id: "24855810",
                name: "cloud-download",
                font_class: "cloud-download",
                unicode: "e647",
                unicode_decimal: 58951
            }, {
                icon_id: "24855811",
                name: "cloud-upload-filled",
                font_class: "cloud-upload-filled",
                unicode: "e648",
                unicode_decimal: 58952
            }, {
                icon_id: "24855813",
                name: "redo",
                font_class: "redo",
                unicode: "e64a",
                unicode_decimal: 58954
            }, {
                icon_id: "24855814",
                name: "images-filled",
                font_class: "images-filled",
                unicode: "e64b",
                unicode_decimal: 58955
            }, {
                icon_id: "24855815",
                name: "undo-filled",
                font_class: "undo-filled",
                unicode: "e64c",
                unicode_decimal: 58956
            }, {
                icon_id: "24855816",
                name: "more",
                font_class: "more",
                unicode: "e64d",
                unicode_decimal: 58957
            }, {
                icon_id: "24855817",
                name: "more-filled",
                font_class: "more-filled",
                unicode: "e64e",
                unicode_decimal: 58958
            }, {
                icon_id: "24855818",
                name: "undo",
                font_class: "undo",
                unicode: "e64f",
                unicode_decimal: 58959
            }, {
                icon_id: "24855819",
                name: "images",
                font_class: "images",
                unicode: "e650",
                unicode_decimal: 58960
            }, {
                icon_id: "24855821",
                name: "paperclip",
                font_class: "paperclip",
                unicode: "e652",
                unicode_decimal: 58962
            }, {
                icon_id: "24855822",
                name: "settings",
                font_class: "settings",
                unicode: "e653",
                unicode_decimal: 58963
            }, {
                icon_id: "24855823",
                name: "search",
                font_class: "search",
                unicode: "e654",
                unicode_decimal: 58964
            }, {
                icon_id: "24855824",
                name: "redo-filled",
                font_class: "redo-filled",
                unicode: "e655",
                unicode_decimal: 58965
            }, {
                icon_id: "24841702",
                name: "list",
                font_class: "list",
                unicode: "e644",
                unicode_decimal: 58948
            }, {
                icon_id: "24841489",
                name: "mail-open-filled",
                font_class: "mail-open-filled",
                unicode: "e63a",
                unicode_decimal: 58938
            }, {
                icon_id: "24841491",
                name: "hand-thumbsdown-filled",
                font_class: "hand-down-filled",
                unicode: "e63c",
                unicode_decimal: 58940
            }, {
                icon_id: "24841492",
                name: "hand-thumbsdown",
                font_class: "hand-down",
                unicode: "e63d",
                unicode_decimal: 58941
            }, {
                icon_id: "24841493",
                name: "hand-thumbsup-filled",
                font_class: "hand-up-filled",
                unicode: "e63e",
                unicode_decimal: 58942
            }, {
                icon_id: "24841494",
                name: "hand-thumbsup",
                font_class: "hand-up",
                unicode: "e63f",
                unicode_decimal: 58943
            }, {
                icon_id: "24841496",
                name: "heart-filled",
                font_class: "heart-filled",
                unicode: "e641",
                unicode_decimal: 58945
            }, {
                icon_id: "24841498",
                name: "mail-open",
                font_class: "mail-open",
                unicode: "e643",
                unicode_decimal: 58947
            }, {
                icon_id: "24841488",
                name: "heart",
                font_class: "heart",
                unicode: "e639",
                unicode_decimal: 58937
            }, {
                icon_id: "24839963",
                name: "loop",
                font_class: "loop",
                unicode: "e633",
                unicode_decimal: 58931
            }, {
                icon_id: "24839866",
                name: "pulldown",
                font_class: "pulldown",
                unicode: "e632",
                unicode_decimal: 58930
            }, {
                icon_id: "24813798",
                name: "scan",
                font_class: "scan",
                unicode: "e62a",
                unicode_decimal: 58922
            }, {
                icon_id: "24813786",
                name: "bars",
                font_class: "bars",
                unicode: "e627",
                unicode_decimal: 58919
            }, {
                icon_id: "24813788",
                name: "cart-filled",
                font_class: "cart-filled",
                unicode: "e629",
                unicode_decimal: 58921
            }, {
                icon_id: "24813790",
                name: "checkbox",
                font_class: "checkbox",
                unicode: "e62b",
                unicode_decimal: 58923
            }, {
                icon_id: "24813791",
                name: "checkbox-filled",
                font_class: "checkbox-filled",
                unicode: "e62c",
                unicode_decimal: 58924
            }, {
                icon_id: "24813794",
                name: "shop",
                font_class: "shop",
                unicode: "e62f",
                unicode_decimal: 58927
            }, {
                icon_id: "24813795",
                name: "headphones",
                font_class: "headphones",
                unicode: "e630",
                unicode_decimal: 58928
            }, {icon_id: "24813796", name: "cart", font_class: "cart", unicode: "e631", unicode_decimal: 58929}]
        }
    }, a183: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1353"), a = n("03d7");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("bd51");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "193dd72a", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, a395: function (e, t, n) {
        var i = n("7037")["default"], a = n("e50d");
        e.exports = function (e) {
            var t = a(e, "string");
            return "symbol" === i(t) ? t : String(t)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, a484: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                gutter: {type: [String, Number], default: uni.$u.props.row.gutter},
                justify: {type: String, default: uni.$u.props.row.justify},
                align: {type: String, default: uni.$u.props.row.align}
            }
        };
        t.default = i
    }, a51e: function (e, t, n) {
        var i = n("75f8");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("7c3db156", i, !0, {sourceMap: !1, shadowMode: !1})
    }, a576: function (e, t, n) {
        (function (i) {
            var a, o, r = n("7037").default, c = n("ed6d").default, s = n("2d0d").default, u = n("278c").default,
                l = n("448a").default, d = n("7ec2").default, f = n("970b").default, p = n("5bc3").default;
            n("d3b7"), n("cb29"), n("159b"), n("4de4"), n("14d9"), n("d9e2"), n("d401"), n("99af"), n("e25e"), a = [t], o = function (e) {
                "use strict";

                function t(e, t, n, i) {
                    return new (n || (n = Promise))((function (a, o) {
                        function r(e) {
                            try {
                                s(i.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function c(e) {
                            try {
                                s(i["throw"](e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function s(e) {
                            e.done ? a(e.value) : function (e) {
                                return e instanceof n ? e : new n((function (t) {
                                    t(e)
                                }))
                            }(e.value).then(r, c)
                        }

                        s((i = i.apply(e, t || [])).next())
                    }))
                }

                var n, a = function () {
                    function e(t) {
                        f(this, e), this.paint = null, this.paint = t
                    }

                    return p(e, [{
                        key: "fillStyle", set: function (e) {
                            this.paint.fillStyle = e
                        }
                    }, {
                        key: "lineWidth", set: function (e) {
                            this.paint.lineWidth = e
                        }
                    }, {
                        key: "strokeStyle", set: function (e) {
                            this.paint.strokeStyle = e
                        }
                    }, {
                        key: "draw", value: function () {
                            this.paint.draw()
                        }
                    }, {
                        key: "strokeRect", value: function (e, t, n, i) {
                            this.paint.strokeRect(e, t, n, i)
                        }
                    }, {
                        key: "fillRect", value: function (e, t, n, i) {
                            this.paint.fillRect(e, t, n, i)
                        }
                    }, {
                        key: "stroke", value: function () {
                            this.paint.stroke()
                        }
                    }, {
                        key: "clearRect", value: function (e, t, n, i) {
                            "undefined" != typeof uni && this.paint.draw ? this.draw() : this.paint.clearRect(e, t, n, i)
                        }
                    }, {
                        key: "save", value: function () {
                            this.paint.save()
                        }
                    }, {
                        key: "rotate", value: function (e) {
                            this.paint.rotate(e)
                        }
                    }, {
                        key: "beginPath", value: function () {
                            this.paint.beginPath()
                        }
                    }, {
                        key: "closePath", value: function () {
                            this.paint.closePath()
                        }
                    }, {
                        key: "restore", value: function () {
                            this.paint.restore()
                        }
                    }, {
                        key: "translate", value: function (e, t) {
                            this.paint.translate(e, t)
                        }
                    }, {
                        key: "fill", value: function () {
                            this.paint.fill()
                        }
                    }, {
                        key: "arc", value: function (e, t, n, i, a) {
                            this.paint.arc(e, t, n, i, a)
                        }
                    }, {
                        key: "scale", value: function (e, t) {
                            this.paint.scale(e, t)
                        }
                    }, {
                        key: "moveTo", value: function (e, t) {
                            this.paint.moveTo(e, t)
                        }
                    }, {
                        key: "lineTo", value: function (e, t) {
                            this.paint.lineTo(e, t)
                        }
                    }, {
                        key: "fillText", value: function (e, t, n, i) {
                            this.paint.fillText(e, t, n, i)
                        }
                    }, {
                        key: "update", value: function () {
                        }
                    }]), e
                }(), o = function () {
                    function e() {
                        f(this, e), this.sampleSize = 60, this.value = 0, this._sample_ = [], this._index_ = 0, this._lastTick_ = 0
                    }

                    return p(e, [{
                        key: "tick", value: function () {
                            var e = Date;
                            if ("undefined" != typeof performance && (e = performance), !this._lastTick_) return this._lastTick_ = e.now(), 0;
                            var t = e.now(), n = .001 * (t - this._lastTick_), i = 1 / n;
                            this._sample_[this._index_] = i >> 0;
                            for (var a = 0, o = 0; o < this._sample_.length; o++) a += this._sample_[o];
                            return a = Math.round(a / this._sample_.length), this.value = a, this._lastTick_ = t, this._index_++, this._index_ === this.sampleSize && (this._index_ = 0), this.value
                        }
                    }]), e
                }(), h = function () {
                    function e(t, n) {
                        f(this, e), this.width = 0, this.height = 0, this.width = t, this.height = n
                    }

                    return p(e, [{
                        key: "toJson", value: function () {
                            return {width: this.width, height: this.height}
                        }
                    }, {
                        key: "toArray", value: function () {
                            return [this.width, this.height]
                        }
                    }]), e
                }();
                (function (e) {
                    e[e["running"] = 0] = "running", e[e["stop"] = 1] = "stop"
                })(n || (n = {})), e.CanvasSize = new h(0, 0);
                var v = {grivity: .98}, m = function () {
                    function r() {
                        f(this, r), this.canvasSize = new h(300, 300), this.animationState = n.stop, this.onFinished = function () {
                        }, this.shapeList = [], this.hasBeenDispose = !1, this.revoveryShape = [], this.fpsUtil = new o, this.displayFPS = !1
                    }

                    return p(r, [{
                        key: "init", value: function (t, n, i) {
                            t && (this.paint = new a(t)), n && (this.canvasSize.width = n.width, this.canvasSize.height = n.height, e.CanvasSize = this.canvasSize), i && (i.onFinished && (this.onFinished = i.onFinished), i.displayFps && (this.displayFPS = i.displayFps), v.grivity = i.gravity || .3)
                        }
                    }, {
                        key: "update", value: function (e) {
                            var t = this;
                            if (this.animationState !== n.stop) {
                                if (this.paint.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height), 0 == this.shapeList.length) return this.animationFinished();
                                var i = this.canvasSize.width >> 1, a = this.canvasSize.height >> 1;
                                if (this.shapeList.forEach((function (e, n) {
                                    e.position.x < i && e.position.x > ~i && e.position.y < a || e.disable(), e.update(t.paint)
                                })), this.recovery(), this.displayFPS) {
                                    var o = this.fpsUtil.tick();
                                    this.paint.fillStyle = "black", this.paint.fillText("FPS:" + o, 10, 20)
                                }
                                e((function () {
                                    t.update(e)
                                }))
                            }
                        }
                    }, {
                        key: "animationFinished", value: function () {
                            var e;
                            this.animationState = n.stop, null === (e = this.onFinished) || void 0 === e || e.call(this)
                        }
                    }, {
                        key: "recovery", value: function () {
                            var e = this;
                            this.shapeList = this.shapeList.filter((function (t, n) {
                                return t.alive || e.revoveryShape.push(t), t.alive
                            }))
                        }
                    }, {
                        key: "recover", value: function (e) {
                            return t(this, void 0, void 0, d().mark((function t() {
                                var n, i, a, o, r;
                                return d().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.hasBeenDispose) {
                                                t.next = 2;
                                                break
                                            }
                                            throw new Error("This CanvasRender has been destroyed!");
                                        case 2:
                                            if (n = this.revoveryShape.length, !(e > n)) {
                                                t.next = 9;
                                                break
                                            }
                                            for (i = [], a = 0; a < n; a++) i.push(this.revoveryShape.pop());
                                            return t.abrupt("return", Promise.resolve(i));
                                        case 9:
                                            for (o = [], r = 0; r < e; r++) o.push(this.revoveryShape.pop());
                                            return t.abrupt("return", Promise.resolve(o));
                                        case 12:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "dispose", value: function () {
                            this.hasBeenDispose || (this.hasBeenDispose = !0, this.animationState = n.stop, this.paint.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height), this.paint = this.shapeList = this.revoveryShape = this.fpsUtil = null)
                        }
                    }, {
                        key: "run", value: function () {
                            var e = this;
                            if (this.hasBeenDispose) return i.error("CanvasRender has been destroyed!");
                            var t = function (e) {
                                setTimeout(e, 1e3 / 60)
                            };
                            "undefined" != typeof requestIdleCallback && (t = requestAnimationFrame), t((function () {
                                0 != e.shapeList.length && e.update(t)
                            }))
                        }
                    }, {
                        key: "add", value: function (e) {
                            var t;
                            this.animationState == n.stop && (this.animationState = n.running, this.run()), (t = this.shapeList).push.apply(t, l(e))
                        }
                    }]), r
                }(), b = function () {
                    function t() {
                        f(this, t)
                    }

                    return p(t, null, [{
                        key: "transformTo2D", value: function (t, n, i) {
                            return {x: .5 * e.CanvasSize.width + i.x + t.x, y: .5 * e.CanvasSize.height + i.y + t.y}
                        }
                    }, {
                        key: "rotateX", value: function (e, t) {
                            var n = Math.cos(t), i = Math.sin(t), a = e.y * n - e.z * i, o = e.z * n + e.y * i,
                                r = [e.x, a, o];
                            return r
                        }
                    }, {
                        key: "rotateZ", value: function (e, t) {
                            var n = Math.cos(t), i = Math.sin(t), a = e.x * n - e.y * i, o = e.x * i + e.y * n;
                            return [a, o, e.z]
                        }
                    }, {
                        key: "rotateY", value: function (e, t) {
                            var n = Math.cos(t), i = Math.sin(t), a = e.x * n - e.z * i, o = e.z * n + e.x * i;
                            return [a, e.y, o]
                        }
                    }]), t
                }(), g = function () {
                    function e() {
                        f(this, e)
                    }

                    return p(e, null, [{
                        key: "rotateX", value: function (t, n) {
                            t.points.forEach((function (t) {
                                var i = b.rotateX(t, e.PI * n);
                                t.setPoint(i)
                            }))
                        }
                    }, {
                        key: "rotateY", value: function (t, n) {
                            t.points.forEach((function (t) {
                                var i = b.rotateY(t, e.PI * n);
                                t.setPoint(i)
                            }))
                        }
                    }, {
                        key: "rotateZ", value: function (t, n) {
                            t.points.forEach((function (t) {
                                var i = b.rotateZ(t, e.PI * n);
                                t.setPoint(i)
                            }))
                        }
                    }]), e
                }();
                g.PI = Math.PI / 180;
                var y = function () {
                    function e(t, n) {
                        f(this, e), this.x = 0, this.y = 0, this.x = t, this.y = n
                    }

                    return p(e, [{
                        key: "add", value: function (e) {
                            this.x += e.x, this.y += e.y
                        }
                    }, {
                        key: "sub", value: function (e) {
                            return this.x -= e.x, this.y -= e.y, this
                        }
                    }, {
                        key: "mult", value: function (e) {
                            return this.x *= e.x, this.y *= e.y, this
                        }
                    }, {
                        key: "div", value: function (e) {
                            return this.x /= e.x, this.y /= e.y, this
                        }
                    }, {
                        key: "mag", value: function () {
                            return Math.sqrt(this.x * this.x + this.y * this.y)
                        }
                    }, {
                        key: "dist", value: function (e) {
                            var t = this.x - e.x, n = this.y - e.y;
                            return Math.sqrt(t * t + n * n)
                        }
                    }, {
                        key: "normalize", value: function () {
                            var e = this.mag();
                            return this.x /= e, this.y /= e, this
                        }
                    }, {
                        key: "clamp", value: function (e) {
                            var t = u(e, 2), n = t[0], i = t[1];
                            this.x = Math.min(Math.max(this.x, i), n), this.y = Math.min(Math.max(this.y, i), n)
                        }
                    }, {
                        key: "copy", value: function () {
                            return new e(this.x, this.y)
                        }
                    }, {
                        key: "set", value: function (e) {
                            this.x = e.x, this.y = e.y
                        }
                    }, {
                        key: "setXY", value: function (e, t) {
                            this.x = e, this.y = t
                        }
                    }, {
                        key: "toJson", value: function () {
                            return {x: this.x, y: this.y}
                        }
                    }, {
                        key: "toArray", value: function () {
                            return [this.x, this.y]
                        }
                    }], [{
                        key: "dist", value: function (t, n) {
                            var i = e.sub(t, n);
                            return e.mag(i)
                        }
                    }, {
                        key: "mag", value: function (e) {
                            return Math.sqrt(e.x * e.x + e.y * e.y)
                        }
                    }, {
                        key: "sub", value: function (t, n) {
                            return new e(t.x - n.x, t.y - n.y)
                        }
                    }]), e
                }(), x = function (e) {
                    c(n, e);
                    var t = s(n);

                    function n(e, i) {
                        var a;
                        return f(this, n), a = t.call(this, e, i), a.x = 0, a.y = 0, a.z = 0, a.x = e, a.y = i, a
                    }

                    return p(n, [{
                        key: "setPoint", value: function (e) {
                            var t = u(e, 3), n = t[0], i = t[1], a = t[2];
                            this.x = n, this.y = i, this.z = a
                        }
                    }, {
                        key: "toArray", value: function () {
                            return [this.x, this.y]
                        }
                    }]), n
                }(y), _ = function () {
                    function e() {
                        f(this, e), this.points = [], this.position = new y(0, 0), this.vector = new y(0, 0), this._alive = !0, this.gravity = v.grivity
                    }

                    return p(e, [{
                        key: "alive", get: function () {
                            return this._alive
                        }
                    }, {
                        key: "relive", value: function () {
                            this._alive = !0
                        }
                    }, {
                        key: "disable", value: function () {
                            this._alive = !1
                        }
                    }, {
                        key: "update", value: function (e) {
                            this.move(), this.material.update(e, this.position, this);
                            var t = function () {
                                return 20 * Math.random()
                            };
                            g.rotateX(this, t() - this.vector.y), g.rotateY(this, t() - this.vector.x), g.rotateZ(this, t() - this.vector.y)
                        }
                    }, {
                        key: "move", value: function () {
                            Math.abs(this.vector.x) > .2 && (this.vector.x *= .9), Math.abs(this.vector.y) > 1 && (this.vector.y *= .9), this.vector.y += this.gravity, this.vector.x += Math.random() > .5 ? -.2 : .2, this.position.add(this.vector)
                        }
                    }, {
                        key: "reset", value: function (e) {
                            this.relive(), this.material.opacity = 1, this.position.setXY(e.position.x, e.position.y), this.vector.setXY(e.vector.x, e.vector.y)
                        }
                    }]), e
                }(), A = function () {
                    function e(t) {
                        f(this, e), this.A = new x(0, 0), this.points = [], this.opacity = 1, this.points = t;
                        var n = w.RandomColor;
                        this._color = n.color, this._color_key = n.key
                    }

                    return p(e, [{
                        key: "update", value: function (e, t, n) {
                            if (this.opacity <= .05) return n.disable();
                            this.opacity -= .004, this.draw(e, t)
                        }
                    }, {
                        key: "draw", value: function (e, t) {
                            var n = this;
                            e.beginPath(), this._color[3] = this.opacity, e.fillStyle = w.rgba(this._color), this.points.forEach((function (i) {
                                var a = b.transformTo2D(i, n.A, t);
                                e.lineTo(a.x, a.y)
                            })), e.closePath(), e.fill()
                        }
                    }]), e
                }(), w = function () {
                    function e() {
                        f(this, e)
                    }

                    return p(e, null, [{
                        key: "setColors", value: function (t) {
                            0 != t.length && (e._colors = [], t.forEach((function (t) {
                                t instanceof Array ? e._colors.push(t) : "string" === typeof t && e._colors.push(k.transformHexToRGB(t))
                            })))
                        }
                    }, {
                        key: "RandomColor", get: function () {
                            var t = e._colors, n = Math.random() * t.length >> 0, i = t[n];
                            return {key: n, color: l(i)}
                        }
                    }, {
                        key: "rgba", value: function (e) {
                            var t = u(e, 4), n = t[0], i = t[1], a = t[2], o = t[3];
                            return "rgba(".concat(n, ",").concat(i, ",").concat(a, ",").concat(o, ")")
                        }
                    }]), e
                }();
                w._colors = [[253, 101, 255], [163, 253, 130], [183, 128, 253], [89, 214, 255], [253, 186, 96], [251, 253, 113]];
                var k = function () {
                    function e() {
                        f(this, e)
                    }

                    return p(e, null, [{
                        key: "transformHexToRGB", value: function (e) {
                            var t = e.length, n = e;
                            if (t < 6) for (var i = 0; i < 6 - t; i++) n += "0";
                            for (var a = [], o = 0; o <= 2; o++) {
                                var r = n.substr(2 * o, 2);
                                a[o] = parseInt(r, 16)
                            }
                            return a
                        }
                    }]), e
                }(), S = function (e) {
                    c(n, e);
                    var t = s(n);

                    function n(e) {
                        var i;
                        return f(this, n), i = t.call(this), i._originPoints = [], i.scale = 1, i._originPoints = e.points, i.scale = e.scale || 1, i.createPosints(e.points), i.material = new A(i.points), e.position && (i.position = e.position), e.vector && (i.vector = e.vector), i
                    }

                    return p(n, [{
                        key: "originPoints", get: function () {
                            return this._originPoints
                        }
                    }, {
                        key: "createPosints", value: function () {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length, n = 0; n < t; n++) {
                                var i = u(e[n], 2), a = i[0], o = i[1];
                                1 != this.scale && (a *= this.scale, o *= this.scale), this.points.push(new x(a, o))
                            }
                        }
                    }]), n
                }(_), C = function (e) {
                    c(n, e);
                    var t = s(n);

                    function n(e) {
                        var i;
                        return f(this, n), i = t.call(this), i.size = e.size, i.createPosints(e.count), i.material = new A(i.points), i.vector = e.vector, i.position = e.position, i
                    }

                    return p(n, [{
                        key: "createPosints", value: function (e) {
                            for (var t = 2 * Math.PI, n = this.size.width >> 1, i = t / e, a = 0; a < e; a++) {
                                var o = new x(Math.cos(a * i) * n, Math.sin(a * i) * n);
                                this.points.push(o)
                            }
                        }
                    }]), n
                }(_), M = function () {
                    function e() {
                        f(this, e)
                    }

                    return p(e, null, [{
                        key: "constructorIs", value: function (e, t) {
                            return "object" == r(e) && e.constructor.name === t
                        }
                    }]), e
                }(), O = p((function e() {
                    f(this, e)
                }));
                O.POLYGON = "Polygon", O.CUSTOM = "CustomShape";
                var L = function () {
                    function e(t, n) {
                        f(this, e), this.shapeTypes = [3, 4, 15], this.PI = Math.PI / 180, this.count = 30, this.limitAngle = [90, 270];
                        var a = n || {}, o = a.limitAngle, r = a.count, c = a.shapeTypes, s = a.colors;
                        void 0 != t ? (this.canvasRender = t, this.limitAngle = o || [0, 360], this.count = r || 30, this.shapeTypes = c || [3, 4, 5, 6, 15], s && w.setColors(s)) : i.error("CanvasRender不能为空")
                    }

                    return p(e, [{
                        key: "getRandomClamp", value: function (e) {
                            var t = u(e, 2), n = t[0], i = t[1], a = Math.random() * (i - n + 1) + n;
                            return a
                        }
                    }, {
                        key: "create", value: function (e) {
                            return t(this, void 0, void 0, d().mark((function t() {
                                var n, i, a, o, r, c, s, u, f, p, v, m, b, g, x, _, A, w, k, L, z, T, I, P, $, j;
                                return d().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return n = e.x, i = e.y, a = e.clampforce, o = e.radius, r = a || [20, 40], c = [], t.next = 5, this.canvasRender.recover(this.count);
                                        case 5:
                                            for (s = t.sent, u = s.length, f = 0; f < u; f++) p = s[f], v = this.getRandomClamp(this.limitAngle) * this.PI, m = this.getRandomClamp(r), b = Math.cos(v) * m, g = Math.sin(v) * m, p.reset({
                                                position: new y(n, i),
                                                vector: new y(b, g)
                                            });
                                            c.push.apply(c, l(s)), x = 0;
                                        case 10:
                                            if (!(x < this.count - u)) {
                                                t.next = 29;
                                                break
                                            }
                                            if (_ = this.shapeTypes[Math.random() * this.shapeTypes.length >> 0], A = this.getRandomClamp(this.limitAngle) * this.PI, w = this.getRandomClamp(r), k = Math.cos(A) * w, L = Math.sin(A) * w, !M.constructorIs(_, O.CUSTOM)) {
                                                t.next = 22;
                                                break
                                            }
                                            return z = _, T = z, I = new S({
                                                points: T.originPoints,
                                                position: new y(n, i),
                                                vector: new y(k, L),
                                                scale: T.scale
                                            }), c.push(I), t.abrupt("continue", 26);
                                        case 22:
                                            P = _, $ = P, j = new C({
                                                size: new h(o, o),
                                                count: $,
                                                position: new y(n, i),
                                                vector: new y(k, L)
                                            }), c.push(j);
                                        case 26:
                                            x++, t.next = 10;
                                            break;
                                        case 29:
                                            return t.abrupt("return", Promise.resolve(c));
                                        case 30:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "fire", value: function (e) {
                            return t(this, void 0, void 0, d().mark((function t() {
                                var n;
                                return d().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e;
                                        case 2:
                                            n = t.sent, this.canvasRender.add(n);
                                        case 4:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }]), e
                }(), z = function () {
                    function e(t) {
                        var n = this;
                        f(this, e), this.render = new m;
                        var i = t.paint, a = t.canvasWidth, o = t.canvasHeight, r = t.displayFps, c = void 0 !== r && r;
                        this.render.init(i, {width: a, height: o}, {
                            displayFps: c, onFinished: function () {
                                n.render.dispose()
                            }
                        })
                    }

                    return p(e, [{
                        key: "run", value: function (e) {
                            var t = null !== e && void 0 !== e ? e : {}, n = t.shapeTypes,
                                i = void 0 === n ? [3, 4, 5, 10] : n, a = t.x, o = void 0 === a ? 0 : a, r = t.y,
                                c = void 0 === r ? 0 : r, s = t.radius, u = void 0 === s ? 10 : s, l = t.clampforce,
                                d = void 0 === l ? [30, 90] : l, f = t.count, p = void 0 === f ? 90 : f,
                                h = new L(this.render, {count: p, limitAngle: [225, 310], shapeTypes: i}),
                                v = h.create({x: o, y: c, radius: u, clampforce: d});
                            h.fire(v)
                        }
                    }]), e
                }();
                e.CanvasRender = m, e.Confetti = z, e.ConfettiEjector = L, e.CustomShape = S, e.Polygon = C
            }.apply(t, a), void 0 === o || (e.exports = o)
        }).call(this, n("5a52")["default"])
    }, a877: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {
                ref: "u-col",
                staticClass: "u-col",
                class: ["u-col-" + e.span],
                style: [e.colStyle],
                on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.clickHandler.apply(void 0, arguments)
                    }
                }
            }, [e._t("default")], 2)
        }, a = []
    }, aad8: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3fa5722e], uni-scroll-view[data-v-3fa5722e], uni-swiper-item[data-v-3fa5722e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-row[data-v-3fa5722e]{display:flex;flex-direction:row}', ""]), e.exports = t
    }, ae84: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("fab2")), o = {
            name: "u-line", mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default], computed: {
                lineStyle: function () {
                    var e = {};
                    return e.margin = this.margin, "row" === this.direction ? (e.borderBottomWidth = "1px", e.borderBottomStyle = this.dashed ? "dashed" : "solid", e.width = uni.$u.addUnit(this.length), this.hairline && (e.transform = "scaleY(0.5)")) : (e.borderLeftWidth = "1px", e.borderLeftStyle = this.dashed ? "dashed" : "solid", e.height = uni.$u.addUnit(this.length), this.hairline && (e.transform = "scaleX(0.5)")), e.borderColor = this.color, uni.$u.deepMerge(e, uni.$u.addStyle(this.customStyle))
                }
            }
        };
        t.default = o
    }, b342: function (e, t, n) {
        "use strict";
        var i = n("8427"), a = n.n(i);
        a.a
    }, b977: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("c7eb")), o = i(n("1da1")), r = i(n("fc2f")), c = {
            name: "u-col", mixins: [uni.$u.mpMixin, uni.$u.mixin, r.default], data: function () {
                return {width: 0, parentData: {gutter: 0}, gridNum: 12}
            }, computed: {
                uJustify: function () {
                    return "end" == this.justify || "start" == this.justify ? "flex-" + this.justify : "around" == this.justify || "between" == this.justify ? "space-" + this.justify : this.justify
                }, uAlignItem: function () {
                    return "top" == this.align ? "flex-start" : "bottom" == this.align ? "flex-end" : this.align
                }, colStyle: function () {
                    var e = {
                        paddingLeft: uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter) / 2),
                        paddingRight: uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter) / 2),
                        alignItems: this.uAlignItem,
                        justifyContent: this.uJustify,
                        textAlign: this.textAlign,
                        flex: "0 0 ".concat(100 / this.gridNum * this.span, "%"),
                        marginLeft: 100 / 12 * this.offset + "%"
                    };
                    return uni.$u.deepMerge(e, uni.$u.addStyle(this.customStyle))
                }
            }, mounted: function () {
                this.init()
            }, methods: {
                init: function () {
                    var e = this;
                    return (0, o.default)((0, a.default)().mark((function t() {
                        return (0, a.default)().wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.updateParentData(), t.next = 3, e.parent.getComponentWidth();
                                case 3:
                                    e.width = t.sent;
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, updateParentData: function () {
                    this.getParentData("u-row")
                }, clickHandler: function (e) {
                    this.$emit("click")
                }
            }
        };
        t.default = c
    }, bb27: function (e, t, n) {
        "use strict";
        var i = n("655b"), a = n.n(i);
        a.a
    }, bbda: function (e, t, n) {
        "use strict";
        var i = n("e84b"), a = n.n(i);
        a.a
    }, bd51: function (e, t, n) {
        "use strict";
        var i = n("1301"), a = n.n(i);
        a.a
    }, be6b: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("cd4c")), o = i(n("09bd")), r = i(n("c500")), c = {
            name: "u-action-sheet", mixins: [a.default, o.default, uni.$u.mixin, r.default], data: function () {
                return {}
            }, computed: {
                itemStyle: function () {
                    var e = this;
                    return function (t) {
                        var n = {};
                        return e.actions[t].color && (n.color = e.actions[t].color), e.actions[t].fontSize && (n.fontSize = uni.$u.addUnit(e.actions[t].fontSize)), e.actions[t].disabled && (n.color = "#c0c4cc"), n
                    }
                }
            }, methods: {
                closeHandler: function () {
                    this.closeOnClickOverlay && this.$emit("close")
                }, cancel: function () {
                    this.$emit("close")
                }, selectHandler: function (e) {
                    var t = this.actions[e];
                    !t || t.disabled || t.loading || (this.$emit("select", t), this.closeOnClickAction && this.$emit("close"))
                }
            }
        };
        t.default = c
    }, c0fa: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-91d5fe04], uni-scroll-view[data-v-91d5fe04], uni-swiper-item[data-v-91d5fe04]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-col[data-v-91d5fe04]{padding:0;box-sizing:border-box}.u-col-0[data-v-91d5fe04]{width:0}.u-col-1[data-v-91d5fe04]{width:calc(100%/12)}.u-col-2[data-v-91d5fe04]{width:calc(100%/12 * 2)}.u-col-3[data-v-91d5fe04]{width:calc(100%/12 * 3)}.u-col-4[data-v-91d5fe04]{width:calc(100%/12 * 4)}.u-col-5[data-v-91d5fe04]{width:calc(100%/12 * 5)}.u-col-6[data-v-91d5fe04]{width:calc(100%/12 * 6)}.u-col-7[data-v-91d5fe04]{width:calc(100%/12 * 7)}.u-col-8[data-v-91d5fe04]{width:calc(100%/12 * 8)}.u-col-9[data-v-91d5fe04]{width:calc(100%/12 * 9)}.u-col-10[data-v-91d5fe04]{width:calc(100%/12 * 10)}.u-col-11[data-v-91d5fe04]{width:calc(100%/12 * 11)}.u-col-12[data-v-91d5fe04]{width:calc(100%/12 * 12)}', ""]), e.exports = t
    }, c135: function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) return e
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, c240: function (e, t, n) {
        n("d9e2"), n("d401"), e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, c361: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("c391"), a = n("4927");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("3922");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "0a75b799", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, c391: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-text", {
                staticClass: "uni-icons",
                class: ["uniui-" + e.type, e.customPrefix, e.customPrefix ? e.type : ""],
                style: {color: e.color, "font-size": e.iconSize},
                on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e._onClick.apply(void 0, arguments)
                    }
                }
            })
        }, a = []
    }, c4a5: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {
                ref: "u-row", staticClass: "u-row", style: [e.rowStyle], on: {
                    click: function (t) {
                        arguments[0] = t = e.$handleEvent(t), e.clickHandler.apply(void 0, arguments)
                    }
                }
            }, [e._t("default")], 2)
        }, a = []
    }, c500: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a4d3"), n("e01a"), n("a9e3");
        var i = {
            props: {
                show: {type: Boolean, default: uni.$u.props.actionSheet.show},
                title: {type: String, default: uni.$u.props.actionSheet.title},
                description: {type: String, default: uni.$u.props.actionSheet.description},
                actions: {type: Array, default: uni.$u.props.actionSheet.actions},
                cancelText: {type: String, default: uni.$u.props.actionSheet.cancelText},
                closeOnClickAction: {type: Boolean, default: uni.$u.props.actionSheet.closeOnClickAction},
                safeAreaInsetBottom: {type: Boolean, default: uni.$u.props.actionSheet.safeAreaInsetBottom},
                openType: {type: String, default: uni.$u.props.actionSheet.openType},
                closeOnClickOverlay: {type: Boolean, default: uni.$u.props.actionSheet.closeOnClickOverlay},
                round: {type: [Boolean, String, Number], default: uni.$u.props.actionSheet.round}
            }
        };
        t.default = i
    }, c87c: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("18f3"), a = n("cf2e");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("0381");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "4762c2a8", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, c8c7: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("b977"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, ca0c: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.v-model[data-v-5eb06c99]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:1000}.guide[data-v-5eb06c99]{z-index:1001}.guide .guide-box[data-v-5eb06c99]{position:absolute;z-index:10001;transition:all .2s}.guide .guide-box[data-v-5eb06c99]::before{content:"";height:100%;width:100%;border:1px dashed #fff;border-radius:%?8?%;position:absolute;top:%?-8?%;left:%?-8?%;padding:%?7?%}.guide .guide-box .arrow[data-v-5eb06c99]{height:%?20?%;width:%?20?%;background:#1cbbb4;position:absolute;top:%?144?%;left:45%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.guide .guide-box .tips[data-v-5eb06c99]{width:%?400?%;background:linear-gradient(180deg,#1cbbb4,#0081ff);box-shadow:0 2px 9px 0 rgba(0,0,0,.1);color:#fff;position:absolute;top:%?152?%;left:-50%;padding:%?15?% %?20?%;font-size:%?28?%;border-radius:%?12?%}.guide .guide-box .tips .tool-btn[data-v-5eb06c99]{display:flex;justify-content:space-between;align-items:center;padding-right:%?0?%;margin-top:%?20?%}.guide .guide-box .tips .tool-btn .next[data-v-5eb06c99]{background:#fff;height:%?48?%;width:%?100?%;text-align:center;border-radius:%?8?%;color:#666;line-height:%?48?%;font-size:%?24?%}', ""]), e.exports = t
    }, cd5a: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("ac1f"), n("00b4"), n("a9e3"), n("7db0"), n("d3b7");
        var a = i(n("9f69")), o = {
            name: "UniIcons",
            emits: ["click"],
            props: {
                type: {type: String, default: ""},
                color: {type: String, default: "#333333"},
                size: {type: [Number, String], default: 16},
                customPrefix: {type: String, default: ""}
            },
            data: function () {
                return {icons: a.default.glyphs}
            },
            computed: {
                unicode: function () {
                    var e = this, t = this.icons.find((function (t) {
                        return t.font_class === e.type
                    }));
                    return t ? unescape("%u".concat(t.unicode)) : ""
                }, iconSize: function () {
                    return function (e) {
                        return "number" === typeof e || /^[0-9]*$/g.test(e) ? e + "px" : e
                    }(this.size)
                }
            },
            methods: {
                _onClick: function () {
                    this.$emit("click")
                }
            }
        };
        t.default = o
    }, ce99: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("v-uni-view", {staticClass: "u-line", style: [this.lineStyle]})
        }, a = []
    }, cf2e: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("be6b"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, d2ea: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a877"), a = n("c8c7");
        for (var o in a) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("66ac");
        var r = n("f0c5"),
            c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "91d5fe04", null, !1, i["a"], void 0);
        t["default"] = c.exports
    }, d4e0: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("c975");
        var a = i(n("e9c6")), o = {
            name: "u-avatar", mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default], data: function () {
                return {
                    colors: ["#ffb34b", "#f2bba9", "#f7a196", "#f18080", "#88a867", "#bfbf39", "#89c152", "#94d554", "#f19ec2", "#afaae4", "#e1b0df", "#c38cc1", "#72dcdc", "#9acdcb", "#77b1cc", "#448aca", "#86cefa", "#98d1ee", "#73d1f1", "#80a7dc"],
                    avatarUrl: this.src,
                    allowMp: !1
                }
            }, watch: {
                src: {
                    immediate: !0, handler: function (e) {
                        this.avatarUrl = e, e || this.errorHandler()
                    }
                }
            }, computed: {
                imageStyle: function () {
                    return {}
                }
            }, created: function () {
                this.init()
            }, methods: {
                init: function () {
                }, isImg: function () {
                    return -1 !== this.src.indexOf("/")
                }, errorHandler: function () {
                    this.avatarUrl = this.defaultUrl || "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJVi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUulaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAAD0m2R8ODaXU33tsDSAAAAAAAAAlb9HyWZcnJd9PcBHAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NR8MH80tEBRs7HYivyzlN8lovaBPzduvY0m6eK10TXtAyAarO55lpJK54orolr+4GqO/Xaea1FvqbXvA+Z77kNeW3GPbV+4DJfzcm/pcm3H6Vou5AdAFLC2ed2Pjv1txa8sV8T6wOL+yZEKu1JXFy4MDBOE4ScZxcZLinoB8gAAAAAAAAAAAB242LeyJ+C3GvN9C7QLmJtePYpKS+5c+p8F2IDYAANJqj1T4oCfk7Nj3G5Wn9qXJax7gJ93Z82D8sVNc4v30A6Xg5i42Z+iLfqARwcyT0sz9MWvWBps7LlTf5Grce9/oBTxdtxseklHxT+uWr9AGoAB138ezfj4bsFJdD6V2MCPm7RdtJzs1uW1xXzL3gTgAAAAAAAAADRhYc8q74I6RWs5ckB6GxYtWLat21SK731sDsAAAAAAAAAAAAAAAASt021NO/YjrxuQXT1oCOAAAAAAABzGLlJRSq26JAelwsWONYjbXxcZvmwO8AAAAAAAAAAAAAAAAAAef3TEWPkVivx3NY9T6UBiAAAAAABo2+VmGXblddIJ8eivRUD0oAAAAAAAAAAAAAAAAAAAYt4tKeFKVNYNSXfRgefAAAAAAAAr7VuSSWPedKaW5v1MCsAAAAAAAAAAAAAAAAAAIe6bj96Ts2n+JPzSXzP3ATgAAAAAAAAFbbt1UUrOQ9FpC4/UwK6aaqtU+DAAAAAAAAAAAAAAA4lKMIuUmoxWrb4ARNx3R3q2rLpa4Sl0y/YCcAAAAAAAAAAANmFud7G8r89r6X0dgFvGzLGRGtuWvTF6NAdwAAAAAAAAAAAy5W442PVN+K59EePp5ARMvOv5MvO6QXCC4AZwAAAAAAAAAAAAAcxlKLUotprg1owN+PvORborq+7Hnwl3gUbO74VzRydt8pKn68ANcJwmqwkpLmnUDkAAAAfNy9atqtyagut0AxXt5xIV8Fbj6lRd7Am5G65V6qUvtwfyx94GMAAAAAAAAAAAAAAAAAAAOU2nVOj5gdsc3LiqRvTpyqwOxbnnrhdfpSfrQB7pnv/AGvuS9gHXPMy5/Fem1yq0v0A6W29XqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
                }, clickHandler: function () {
                    this.$emit("click", this.name)
                }
            }
        };
        t.default = o
    }, d59c: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-2f0e5305], uni-scroll-view[data-v-2f0e5305], uni-swiper-item[data-v-2f0e5305]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line[data-v-2f0e5305]{vertical-align:middle}', ""]), e.exports = t
    }, d6ac: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("v-uni-view", [t("v-uni-view", {staticClass: "bubble"}, [t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text")], 1), t("v-uni-view", {staticClass: "bubble"}, [t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text")], 1), t("v-uni-view", {staticClass: "bubble"}, [t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text")], 1), t("v-uni-view", {staticClass: "bubble"}, [t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text")], 1), t("v-uni-view", {staticClass: "bubble"}, [t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text"), t("v-uni-text")], 1)], 1)
        }, a = []
    }, d8a9: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e416"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, d8fe: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myRight[data-v-2dcef1be]{display:flex}.navbar[data-v-2dcef1be] .u-navbar__content{background-color:rgba(31,31,39,.6235294117647059)!important}.sifter-box-father[data-v-2dcef1be]{box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:center}.arrow-style[data-v-2dcef1be]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.opo[data-v-2dcef1be]{width:50vw;height:100%;padding:0 %?50?%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background-color:initial!important;background-image:radial-gradient(transparent 1px,rgba(0,0,0,.396078431372549) 0);-webkit-backdrop-filter:saturate(50%) blur(4px);backdrop-filter:saturate(50%) blur(4px);background-size:4px 4px}.opo-btn[data-v-2dcef1be]{margin-bottom:10px}.refsst[data-v-2dcef1be]{width:100%;height:100%}#canvas[data-v-2dcef1be]{position:fixed;width:100vw;height:100vh;top:0;left:0;pointer-events:none;z-index:999999}.redflag[data-v-2dcef1be]{width:%?50?%;height:%?50?%}.top-text[data-v-2dcef1be]{color:#333!important}.sifter-img-active[data-v-2dcef1be]{-webkit-transform:scale(1.2);transform:scale(1.2)}.avatar[data-v-2dcef1be]{position:absolute;z-index:999;transition:all .4s cubic-bezier(.25,1,.3,1);pointer-events:none}.tip-box[data-v-2dcef1be]{color:#fff;height:%?450?%;width:70vw;border-radius:%?20?%;display:flex;flex-direction:column;align-items:center;padding:%?30?% %?40?%;background-color:rgba(44,44,49,.5019607843137255);-webkit-backdrop-filter:blur(%?20?%);backdrop-filter:blur(%?20?%);box-shadow:0 %?2?% %?24?% 0 #2c2c31}.tip-box .tip-top[data-v-2dcef1be]{display:flex;align-items:center;font-size:%?35?%;font-weight:700}.tip-box .tip-text[data-v-2dcef1be]{text-align:center;line-height:1.5em;font-size:%?32?%;display:flex;flex-direction:column;align-items:center;margin-top:%?60?%;color:#fff}.my-bg[data-v-2dcef1be]{position:absolute;top:20px;opacity:.8}.container[data-v-2dcef1be]{position:fixed;left:0;top:0;bottom:0;right:0;display:flex;flex-direction:column}.container .body[data-v-2dcef1be]{position:relative;overflow-y:scroll;flex:1;padding:%?35?% %?45?%;padding-bottom:calc(%?50?% + constant(safe-area-inset-bottom));padding-bottom:calc(%?50?% + env(safe-area-inset-bottom))}.container .body .sifter-box[data-v-2dcef1be]{width:100%;background-color:hsla(0,0%,100%,.1803921568627451);border-radius:%?20?%;padding:%?50?% 0;background-color:#282828}.container .body .sifter-box .sifter-top-tip[data-v-2dcef1be]{width:%?200?%;height:%?65?%;border-radius:%?15?%;font-weight:700;display:flex;align-items:center;justify-content:center;position:absolute;top:%?-35?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background-color:#e9854b;color:#fff}.container .body .sifter-box .sifter-text[data-v-2dcef1be]{line-height:1.4em}.img-body .sifter-img[data-v-2dcef1be]{width:%?150?%;height:%?150?%;transition:all .4s cubic-bezier(.25,1,.3,1)}.delete-button[data-v-2dcef1be]{background-color:#000;color:#fff;font-size:44px;border:.5px solid rgba(0,0,0,.1);padding-top:8px;border-radius:15px 15px 12px 12px;cursor:pointer;position:relative;will-change:transform;transition:all .1s ease-in-out 0s;-webkit-user-select:none;user-select:none;background-image:linear-gradient(90deg,rgba(0,0,0,.8),transparent),linear-gradient(180deg,rgba(0,0,0,.8),transparent);background-position:100% 100%,100% 100%;background-size:100% 100%,100% 100%;background-repeat:no-repeat;box-shadow:inset -4px -10px 0 hsla(0,0%,100%,.4),inset -4px -8px 0 rgba(0,0,0,.3),0 2px 1px rgba(0,0,0,.3),0 2px 1px hsla(0,0%,100%,.1);-webkit-transform:perspective(70px) rotateX(5deg) rotateY(0deg);transform:perspective(70px) rotateX(5deg) rotateY(0deg)}.delete-button[data-v-2dcef1be]::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-image:linear-gradient(180deg,hsla(0,0%,100%,.2),rgba(0,0,0,.5));z-index:-1;border-radius:15px;box-shadow:inset 4px 0 0 hsla(0,0%,100%,.1),inset 4px -8px 0 rgba(0,0,0,.3);transition:all .1s ease-in-out 0s}.delete-button[data-v-2dcef1be]::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-image:linear-gradient(90deg,rgba(0,0,0,.8),transparent),linear-gradient(180deg,rgba(0,0,0,.8),transparent);background-position:100% 100%,100% 100%;background-size:100% 100%,100% 100%;background-repeat:no-repeat;z-index:-1;border-radius:15px;transition:all .1s ease-in-out 0s}.delete-button[data-v-2dcef1be]:active{will-change:transform;-webkit-transform:perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(.96);transform:perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(.96);border:.25px solid rgba(0,0,0,.2);box-shadow:inset -4px -8px 0 hsla(0,0%,100%,.2),inset -4px -6px 0 rgba(0,0,0,.8),0 1px 0 rgba(0,0,0,.9),0 1px 0 hsla(0,0%,100%,.2);transition:all .1s ease-in-out 0s}.delete-button[data-v-2dcef1be]::after:active{background-image:linear-gradient(180deg,rgba(0,0,0,.5),hsla(0,0%,100%,.2))}.delete-button[data-v-2dcef1be]:active::before{content:"";display:block;position:absolute;top:5%;left:20%;width:50%;height:80%;background-color:hsla(0,0%,100%,.1);-webkit-animation:overlay-data-v-2dcef1be .1s ease-in-out 0s;animation:overlay-data-v-2dcef1be .1s ease-in-out 0s;pointer-events:none}@-webkit-keyframes overlay-data-v-2dcef1be{from{opacity:0}to{opacity:1}}@keyframes overlay-data-v-2dcef1be{from{opacity:0}to{opacity:1}}.delete-button[data-v-2dcef1be]:focus{outline:none}', ""]), e.exports = t
    }, dde1: function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.dice-wrap .dice-icon[data-v-6be8676a]{width:%?172?%;height:%?172?%;transition:all 2s}', ""]), e.exports = t
    }, de0e: function (e, t, n) {
        "use strict";
        var i = n("05ea"), a = n.n(i);
        a.a
    }, e416: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("c7eb")), o = i(n("1da1"));
        n("a9e3"), n("d3b7");
        var r = i(n("a484")), c = {
            name: "u-row", mixins: [uni.$u.mpMixin, uni.$u.mixin, r.default], data: function () {
                return {}
            }, computed: {
                uJustify: function () {
                    return "end" == this.justify || "start" == this.justify ? "flex-" + this.justify : "around" == this.justify || "between" == this.justify ? "space-" + this.justify : this.justify
                }, uAlignItem: function () {
                    return "top" == this.align ? "flex-start" : "bottom" == this.align ? "flex-end" : this.align
                }, rowStyle: function () {
                    var e = {alignItems: this.uAlignItem, justifyContent: this.uJustify};
                    return this.gutter && (e.marginLeft = uni.$u.addUnit(-Number(this.gutter) / 2), e.marginRight = uni.$u.addUnit(-Number(this.gutter) / 2)), uni.$u.deepMerge(e, uni.$u.addStyle(this.customStyle))
                }
            }, methods: {
                clickHandler: function (e) {
                    this.$emit("click")
                }, getComponentWidth: function () {
                    var e = this;
                    return (0, o.default)((0, a.default)().mark((function t() {
                        return (0, a.default)().wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, uni.$u.sleep();
                                case 2:
                                    return t.abrupt("return", new Promise((function (t) {
                                        e.$uGetRect(".u-row").then((function (e) {
                                            t(e.width)
                                        }))
                                    })));
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }
        };
        t.default = c
    }, e50d: function (e, t, n) {
        n("8172"), n("efec"), n("a4d3"), n("e01a"), n("d3b7"), n("d9e2"), n("d401"), n("a9e3");
        var i = n("7037")["default"];
        e.exports = function (e, t) {
            if ("object" !== i(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var a = n.call(e, t || "default");
                if ("object" !== i(a)) return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, e732: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e8b6"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, e84b: function (e, t, n) {
        var i = n("dde1");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("d9ea195c", i, !0, {sourceMap: !1, shadowMode: !1})
    }, e85e: function (e, t, n) {
        var i = n("9c08");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("ecf0306e", i, !0, {sourceMap: !1, shadowMode: !1})
    }, e8b6: function (e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = i(n("6311")), o = {
            name: "u-loading-page", mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default], data: function () {
                return {}
            }, methods: {}
        };
        t.default = o
    }, e9c6: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3"), n("ac1f"), n("00b4");
        var i = {
            props: {
                src: {type: String, default: uni.$u.props.avatar.src},
                shape: {type: String, default: uni.$u.props.avatar.shape},
                size: {type: [String, Number], default: uni.$u.props.avatar.size},
                mode: {type: String, default: uni.$u.props.avatar.mode},
                text: {type: String, default: uni.$u.props.avatar.text},
                bgColor: {type: String, default: uni.$u.props.avatar.bgColor},
                color: {type: String, default: uni.$u.props.avatar.color},
                fontSize: {type: [String, Number], default: uni.$u.props.avatar.fontSize},
                icon: {type: String, default: uni.$u.props.avatar.icon},
                mpAvatar: {type: Boolean, default: uni.$u.props.avatar.mpAvatar},
                randomBgColor: {type: Boolean, default: uni.$u.props.avatar.randomBgColor},
                defaultUrl: {type: String, default: uni.$u.props.avatar.defaultUrl},
                colorIndex: {
                    type: [String, Number], validator: function (e) {
                        return uni.$u.test.range(e, [0, 19]) || "" === e
                    }, default: uni.$u.props.avatar.colorIndex
                },
                name: {type: String, default: uni.$u.props.avatar.name}
            }
        };
        t.default = i
    }, e9d3: function (e, t, n) {
        "use strict";
        n("7a82"), n("d9e2"), n("d401"), n("d3b7"), n("159b"), n("b64b"), n("7db0"), n("ac1f"), n("5319"), n("acd8"), n("498a"), n("14d9"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = n("5bed");

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        var o = function () {
            function e() {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this.browserSupport = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window, this.synthesisVoice = null
            }

            return function (e, t, n) {
                t && a(e.prototype, t), n && a(e, n)
            }(e, [{
                key: "init", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise((function (n, a) {
                        e.browserSupport || a("Your browser does not support Speech Synthesis");
                        var o = (0, i.isNil)(t.listeners) ? {} : t.listeners,
                            r = !!(0, i.isNil)(t.splitSentences) || t.splitSentences,
                            c = (0, i.isNil)(t.lang) ? void 0 : t.lang, s = (0, i.isNil)(t.volume) ? 1 : t.volume,
                            u = (0, i.isNil)(t.rate) ? 1 : t.rate, l = (0, i.isNil)(t.pitch) ? 1 : t.pitch,
                            d = (0, i.isNil)(t.voice) ? void 0 : t.voice;
                        Object.keys(o).forEach((function (e) {
                            var t = o[e];
                            "onvoiceschanged" !== e && (speechSynthesis[e] = function (e) {
                                t && t(e)
                            })
                        })), e._loadVoices().then((function (t) {
                            o["onvoiceschanged"] && o["onvoiceschanged"](t), !(0, i.isNil)(c) && e.setLanguage(c), !(0, i.isNil)(d) && e.setVoice(d), !(0, i.isNil)(s) && e.setVolume(s), !(0, i.isNil)(u) && e.setRate(u), !(0, i.isNil)(l) && e.setPitch(l), !(0, i.isNil)(r) && e.setSplitSentences(r), n({
                                voices: t,
                                lang: e.lang,
                                voice: e.voice,
                                volume: e.volume,
                                rate: e.rate,
                                pitch: e.pitch,
                                splitSentences: e.splitSentences,
                                browserSupport: e.browserSupport
                            })
                        })).catch((function (e) {
                            a(e)
                        }))
                    }))
                }
            }, {
                key: "_fetchVoices", value: function () {
                    return new Promise((function (e, t) {
                        setTimeout((function () {
                            var n = speechSynthesis.getVoices();
                            return (0, i.size)(n) > 0 ? e(n) : t("Could not fetch voices")
                        }), 100)
                    }))
                }
            }, {
                key: "_loadVoices", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                    return this._fetchVoices().catch((function (n) {
                        if (0 === t) throw n;
                        return e._loadVoices(t - 1)
                    }))
                }
            }, {
                key: "hasBrowserSupport", value: function () {
                    return this.browserSupport
                }
            }, {
                key: "setVoice", value: function (e) {
                    var t, n = speechSynthesis.getVoices();
                    if ((0, i.isString)(e) && (t = n.find((function (t) {
                        return t.name === e
                    }))), (0, i.isObject)(e) && (t = e), !t) throw"Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.";
                    this.synthesisVoice = t
                }
            }, {
                key: "setLanguage", value: function (e) {
                    if (e = e.replace("_", "-"), !(0, i.validateLocale)(e)) throw"Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)";
                    this.lang = e
                }
            }, {
                key: "setVolume", value: function (e) {
                    if (e = parseFloat(e), !(!(0, i.isNan)(e) && e >= 0 && e <= 1)) throw"Error setting volume. Please verify your volume value is a number between 0 and 1.";
                    this.volume = e
                }
            }, {
                key: "setRate", value: function (e) {
                    if (e = parseFloat(e), !(!(0, i.isNan)(e) && e >= 0 && e <= 10)) throw"Error setting rate. Please verify your volume value is a number between 0 and 10.";
                    this.rate = e
                }
            }, {
                key: "setPitch", value: function (e) {
                    if (e = parseFloat(e), !(!(0, i.isNan)(e) && e >= 0 && e <= 2)) throw"Error setting pitch. Please verify your pitch value is a number between 0 and 2.";
                    this.pitch = e
                }
            }, {
                key: "setSplitSentences", value: function (e) {
                    this.splitSentences = e
                }
            }, {
                key: "speak", value: function (e) {
                    var t = this;
                    return new Promise((function (n, a) {
                        var o = e.text, r = e.listeners, c = void 0 === r ? {} : r, s = e.queue, u = void 0 === s || s,
                            l = (0, i.trim)(o);
                        (0, i.isNil)(l) && n(), !u && t.cancel();
                        var d = [], f = t.splitSentences ? (0, i.splitSentences)(l) : [l];
                        f.forEach((function (e, o) {
                            var r = o === (0, i.size)(f) - 1, s = new SpeechSynthesisUtterance;
                            t.synthesisVoice && (s.voice = t.synthesisVoice), t.lang && (s.lang = t.lang), t.volume && (s.volume = t.volume), t.rate && (s.rate = t.rate), t.pitch && (s.pitch = t.pitch), s.text = e, Object.keys(c).forEach((function (e) {
                                var t = c[e];
                                s[e] = function (i) {
                                    t && t(i), "onerror" === e && a({
                                        utterances: d,
                                        lastUtterance: s,
                                        error: i
                                    }), "onend" === e && r && n({utterances: d, lastUtterance: s})
                                }
                            })), d.push(s), speechSynthesis.speak(s)
                        }))
                    }))
                }
            }, {
                key: "pending", value: function () {
                    return speechSynthesis.pending
                }
            }, {
                key: "paused", value: function () {
                    return speechSynthesis.paused
                }
            }, {
                key: "speaking", value: function () {
                    return speechSynthesis.speaking
                }
            }, {
                key: "pause", value: function () {
                    speechSynthesis.pause()
                }
            }, {
                key: "resume", value: function () {
                    speechSynthesis.resume()
                }
            }, {
                key: "cancel", value: function () {
                    speechSynthesis.cancel()
                }
            }]), e
        }(), r = o;
        t.default = r
    }, eafc: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6cb13"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, ed6d: function (e, t, n) {
        n("d9e2"), n("d401"), n("7a82");
        var i = n("4a4b");
        e.exports = function (e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && i(e, t)
        }, e.exports.__esModule = !0, e.exports["default"] = e.exports
    }, ef37: function (e, t, n) {
        "use strict";
        (function (e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("d3b7"), n("159b"), n("b64b"), n("14d9"), n("4e82"), n("caad"), n("ac1f"), n("4de4"), n("7db0");
            var a = i(n("c7eb")), o = i(n("1da1")), r = i(n("5530")), c = i(n("7d30")), s = i(n("85a0")), u = n("aaec"),
                l = n("6e13"), d = n("26cb"), f = i(n("e9d3")), p = n("a576"), h = n("acf4"), v = n("218b"),
                m = new p.CanvasRender, b = new p.CanvasRender,
                g = ["/static/chess/sifter1.gif", "/static/chess/sifter2.gif", "/static/chess/sifter3.gif", "/static/chess/sifter4.gif", "/static/chess/sifter5.gif", "/static/chess/sifter6.gif"],
                y = {
                    components: {guideStep: s.default, "ithui-bullet-one": c.default},
                    data: function () {
                        return {
                            ithuiFlag: !1,
                            content: "1.摇筛子自动走棋<br>\n\t\t\t\t\t2.每个格子都有任务，也可以自行商量执行其他任务<br>\n\t\t\t\t\t3.率先走到终点的一方，获得胜利",
                            step: {
                                name: "workbenchKey",
                                guideList: [{
                                    el: ".gameguiz",
                                    tips: "游戏规则",
                                    style: "border-radius: 8rpx;margin: 0"
                                }, {
                                    el: ".myRight",
                                    tips: "重新开始/切换模式",
                                    style: "border-radius: 8rpx;margin: 0"
                                }, {
                                    el: ".sifter-box-father",
                                    tips: "开始游戏，转动筛子",
                                    style: "border-radius: 8rpx;margin: 0",
                                    next: "下一步"
                                }]
                            },
                            list: [],
                            show: !1,
                            manAvatar: "/static/avatar/man.png",
                            woManAvatar: "/static/avatar/woman.png",
                            filterDataList: [],
                            walkInfo: 0,
                            showTip: !1,
                            sifterImg: g[0],
                            location: {man: 1, woman: 1},
                            party: 1,
                            positionMan: {top: -50, left: 0},
                            positionWoman: {top: -50, left: 350},
                            flag: !1,
                            sifterActive: !1,
                            descriptiveText: "",
                            avaSize: 0,
                            customId: "",
                            title: "基础模式",
                            setShow: !1,
                            actions: [{id: 1, name: "重玩"}, {id: 2, name: "编辑规则"}, {
                                id: 3,
                                name: "删除",
                                subname: "注意，删除后不可恢复"
                            }],
                            speech: null,
                            speechFlag: !0,
                            speechInitFlag: !1,
                            mp3: null,
                            mode: 1,
                            displayCanvas: !0,
                            canvasSize: {width: 0, height: 0},
                            canvas: null,
                            loading: !0,
                            navBarHeight: 44
                        }
                    },
                    computed: (0, r.default)((0, r.default)({}, (0, d.mapState)(["gameBg", "voiceOpen", "userCustomList", "soundFlag", "lockVip", "code", "userCode"])), {}, {
                        mapFilterDataList: function () {
                            var e = this, t = [];
                            return Object.keys(this.filterDataList).forEach((function (n) {
                                e.filterDataList[n].forEach((function (e) {
                                    t.push(e)
                                }))
                            })), t = t.sort((function (e, t) {
                                return e.id - t.id
                            })), t
                        }
                    }),
                    onReady: function () {
                        this.initRenders()
                    },
                    beforeDestroy: function () {
                        this.voiceOpen && (this.speech.cancel(), this.speech = null), this.soundFlag && (this.mp3.pause(), this.mp3 = null), this.dispose_anvasRender()
                    },
                    onLoad: function (e) {
                        if ((0, l.sett)(), this.mode = e.mode, this.customId = e.customId, !this.lockVip) {
                            if (!["1", "2"].includes(this.mode)) {
                                uni.showToast({title: "暂无权限请先配置识别码!", icon: "none"});
                                var t = setTimeout((function () {
                                    clearTimeout(t), uni.reLaunch({url: "/"})
                                }), 2e3);
                                return
                            }
                        }
                        this.initVip(), this.voiceOpen && this.initSpeechInit(), this.soundFlag && this.initAudio(), this.initLocal()
                    },
                    methods: (0, r.default)((0, r.default)({}, (0, d.mapMutations)(["setUserCustomList"])), {}, {
                        haveCode: function () {
                            return (0, h.decrypt)(this.code) != (0, v.encryptNumber)((0, h.decrypt)(this.userCode))
                        }, onBtnClick: function (e) {
                            this.mode != e.id ? e.id && uni.redirectTo({url: "/pagesA/chess/chess?mode=".concat(e.id)}) : uni.showToast({
                                title: "当前已在此模式下",
                                icon: "none"
                            })
                        }, initVip: function () {
                            var e = [{id: 1, text: "基础模式", color: "#3498DB"}, {
                                id: 2,
                                text: "恋爱版",
                                color: "#FF69B4"
                            }];
                            this.lockVip && e.push({id: 3, text: "情侣版", color: "#9ACD32"}, {
                                id: 4,
                                text: "高级版",
                                color: "rgb(10, 185, 156)"
                            }, {id: 5, text: "私密版", color: "#FF00FF"}, {
                                id: 6,
                                text: "私密进阶版",
                                color: "#FF0000"
                            }, {id: 7, text: "SM", color: "#FFFF00"}, {id: 8, text: "男仆版", color: "#00FF00"}, {
                                id: 9,
                                text: "女仆版",
                                color: "#00FFFF"
                            }, {id: 10, text: "组合模式", color: "#6495ED"}), this.list = e
                        }, onMenu: function () {
                            this.show = !this.show
                        }, getPainter: function () {
                            var e = this;
                            return (0, o.default)((0, a.default)().mark((function t() {
                                return (0, a.default)().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new Promise(function () {
                                                var t = (0, o.default)((0, a.default)().mark((function t(n) {
                                                    var i;
                                                    return (0, a.default)().wrap((function (t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                i = uni.createSelectorQuery(), i.select("#canvas").fields({
                                                                    node: !0,
                                                                    size: !0
                                                                }).exec(function () {
                                                                    var t = (0, o.default)((0, a.default)().mark((function t(i) {
                                                                        var o;
                                                                        return (0, a.default)().wrap((function (t) {
                                                                            while (1) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    if (o = i[0].node, o && n(o.getContext("2d")), !(null !== o && void 0 !== o && o.width || null !== o && void 0 !== o && o.height)) {
                                                                                        t.next = 8;
                                                                                        break
                                                                                    }
                                                                                    return t.next = 5, uni.getSystemInfo();
                                                                                case 5:
                                                                                    t.sent[1].pixelRatio, o.width = i[0].width, o.height = i[0].height;
                                                                                case 8:
                                                                                    e.canvas = o, n(uni.createCanvasContext("canvas", e));
                                                                                case 10:
                                                                                case"end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t)
                                                                    })));
                                                                    return function (e) {
                                                                        return t.apply(this, arguments)
                                                                    }
                                                                }());
                                                            case 2:
                                                            case"end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                })));
                                                return function (e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }()));
                                        case 1:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }, dispose_anvasRender: function () {
                        }, initRenders: function () {
                            var t = this;
                            return (0, o.default)((0, a.default)().mark((function n() {
                                var i, o, r, c;
                                return (0, a.default)().wrap((function (n) {
                                    while (1) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.getPainter();
                                        case 2:
                                            return i = n.sent, n.next = 5, t.getCanvasSize();
                                        case 5:
                                            o = n.sent, uni.createCanvasContext("canvas"), r = o.width, c = o.height, t.canvasSize.width = r, t.canvasSize.height = c, m.init(i, {
                                                width: o.width,
                                                height: o.height
                                            }, {
                                                onFinished: function () {
                                                }, grivaty: .5
                                            }), b.init(i, {width: o.width, height: o.height}, {
                                                onFinished: function () {
                                                    e.log("完成")
                                                }, grivaty: .5
                                            });
                                        case 12:
                                        case"end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }, getCanvasSize: function () {
                            return new Promise((function (e, t) {
                                uni.createSelectorQuery().select("#canvas").boundingClientRect((function (t) {
                                    e(t)
                                })).exec()
                            }))
                        }, easy: function () {
                            var e = this;
                            return (0, o.default)((0, a.default)().mark((function t() {
                                var n, i, o, r;
                                return (0, a.default)().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.getPainter();
                                        case 2:
                                            return n = t.sent, t.next = 5, e.getCanvasSize();
                                        case 5:
                                            i = t.sent, o = i.width, r = i.height, e.canvasSize.width = o, e.canvasSize.height = r, new p.Confetti({
                                                paint: n,
                                                canvasWidth: i.width,
                                                canvasHeight: i.height
                                            }).run({});
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }, sides: function () {
                            var e = new p.ConfettiEjector(m, {limitAngle: [-90, 0], count: 60}),
                                t = new p.ConfettiEjector(m, {limitAngle: [180, 270], count: 60}), n = e.create({
                                    x: -this.canvasSize.width / 2 + 20,
                                    y: -200,
                                    clampforce: [10, 60],
                                    radius: 10
                                }), i = t.create({
                                    x: this.canvasSize.width / 2 - 20,
                                    y: -200,
                                    clampforce: [10, 60],
                                    radius: 10
                                });
                            e.fire(n), t.fire(i)
                        }, initAudio: function () {
                            this.mp3 = new Audio("/static/audio/shaizi.mp3")
                        }, initSpeechInit: function () {
                            var e = this;
                            this.speech = new f.default, this.speech.init({
                                volume: 1,
                                lang: "zh-CN",
                                rate: 1.2,
                                pitch: 1.3
                            }).then((function () {
                                e.speechFlag = e.speech.hasBrowserSupport()
                            }))
                        }, select: function (e) {
                            var t = this;
                            1 != e.id ? 2 != e.id ? 3 != e.id || uni.showModal({
                                content: "确定要删除吗?",
                                success: function (e) {
                                    if (e.confirm) {
                                        var n = t.userCustomList.filter((function (e) {
                                            return e.id != t.customId
                                        }));
                                        t.setUserCustomList(n), uni.showToast({
                                            title: "".concat(t.title, " 删除成功!"),
                                            icon: "none"
                                        }), setTimeout((function () {
                                            uni.reLaunch({url: "/"})
                                        }), 1e3)
                                    }
                                }
                            }) : uni.reLaunch({url: "/pagesA/custom/custom?editId=".concat(this.customId)}) : this.initLocal()
                        }, rightClick: function () {
                            var e = this;
                            this.customId ? this.setShow = !0 : uni.showModal({
                                content: "是否确定重新开始？",
                                success: function (t) {
                                    t.confirm && e.initLocal()
                                }
                            })
                        }, goBack: function () {
                            uni.reLaunch({url: "/"})
                        }, close: function () {
                            (this.location.woman >= 40 || this.location.man >= 40) && this.initLocal(), this.showTip = !1
                        }, clickTip: function (e) {
                            1 != e.id && (this.descriptiveText = e.text, this.showTip = !0)
                        }, initLocal: function () {
                            var e = this;
                            if (this.customId && this.userCustomList.length) try {
                                var t = this.userCustomList.find((function (t) {
                                    return t.id == e.customId
                                }));
                                t && (this.title = t.title, uni.setNavigationBarTitle({title: t.title}), this.filterDataList = this.$_.cloneDeep((0, u.filterCustomList)(t.arr)))
                            } catch (i) {
                                uni.showToast({
                                    title: "自定义数据已失效，请重新配置!",
                                    icon: "none"
                                }), this.setUserCustomList([]);
                                setTimeout((function () {
                                    clearTimeout(null), uni.reLaunch({url: "/"})
                                }), 1500)
                            } else {
                                var n = this.$_.cloneDeep((0, u.filterDataList)(this.mode));
                                this.title = n.title, this.filterDataList = n.arr
                            }
                            this.party = (0, l.getRandomIntInclusive)(0, 1), this.location.man = 1, this.location.woman = 1;
                            setTimeout((0, o.default)((0, a.default)().mark((function t() {
                                return (0, a.default)().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return clearTimeout(null), t.next = 3, e.initXYDom();
                                        case 3:
                                            e.changeLocal(1), e.changeLocal(1, 1), e.loading = !1;
                                        case 6:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 200)
                        }, initXYDom: function () {
                            var e = this;
                            return (0, o.default)((0, a.default)().mark((function t() {
                                var n, i;
                                return (0, a.default)().wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return n = uni.createSelectorQuery().in(e).select(".navbar"), t.next = 3, n.boundingClientRect((function (t) {
                                                e.navBarHeight = t.height
                                            })).exec();
                                        case 3:
                                            return i = uni.createSelectorQuery().in(e).select(".firstLine"), t.next = 6, i.boundingClientRect((function (t) {
                                                e.avaSize = .8 * t.width
                                            })).exec();
                                        case 6:
                                            return t.next = 8, e.getPosition(".firstLine", e.filterDataList.firstLine);
                                        case 8:
                                            return e.filterDataList.firstLine = t.sent, t.next = 11, e.getPosition(".towLine", e.filterDataList.towLine);
                                        case 11:
                                            return e.filterDataList.towLine = t.sent, t.next = 14, e.getPosition(".thereLine", e.filterDataList.thereLine);
                                        case 14:
                                            return e.filterDataList.thereLine = t.sent, t.next = 17, e.getPosition(".foreLine", e.filterDataList.foreLine);
                                        case 17:
                                            return e.filterDataList.foreLine = t.sent, t.next = 20, e.getPosition(".fiveRightLine", e.filterDataList.fiveRightLine);
                                        case 20:
                                            return e.filterDataList.fiveRightLine = t.sent, t.next = 23, e.getPosition(".sixBottomLine", e.filterDataList.sixBottomLine);
                                        case 23:
                                            return e.filterDataList.sixBottomLine = t.sent, t.next = 26, e.getPosition(".sevenLeftLine", e.filterDataList.sevenLeftLine);
                                        case 26:
                                            e.filterDataList.sevenLeftLine = t.sent;
                                        case 27:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }, getPosition: function (e, t) {
                            var n = this;
                            return new Promise((function (i, a) {
                                var o = [], c = uni.createSelectorQuery().in(n).selectAll(e);
                                c.boundingClientRect((function (e) {
                                    t.forEach((function (t, i) {
                                        var a = (e[i].width - n.avaSize) / 2;
                                        o.push((0, r.default)((0, r.default)({}, t), {}, {
                                            left: e[i].left + a,
                                            top: e[i].top + a - n.navBarHeight
                                        }))
                                    })), i(o)
                                })).exec()
                            }))
                        }, changeLocal: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = this.mapFilterDataList.find((function (t) {
                                    return t.id == e
                                }));
                            n && (1 == t ? (this.positionWoman.top = n.top, this.positionWoman.left = n.left) : (this.positionMan.top = n.top, this.positionMan.left = n.left))
                        }, playVoice: function (e) {
                            this.voiceOpen && this.speechFlag && this.speech.speak({text: e})
                        }, go: function () {
                            !this.speechInitFlag && this.voiceOpen && (this.speech.speak({text: "游戏开始"}), this.speechInitFlag = !0)
                        }, rotatingScreenNew: function (t) {
                            var n = this;
                            if (!this.flag) {
                                this.flag = !0;
                                this.voiceOpen || (this.speechInitFlag = !0), this.speechInitFlag && this.soundFlag && (this.mp3.loop = !1, this.mp3.play()), !this.speechInitFlag && this.voiceOpen && (this.speech.speak({text: "游戏开始"}), this.speechInitFlag = !0);
                                var i = this, a = t;
                                1 === this.party ? this.location.woman + a >= 40 && (a = 40 - this.location.woman) : this.location.man + a >= 40 && (a = 40 - this.location.man), 1 === this.party ? (0, l.timer)((function (e) {
                                    if (i.location.woman++, i.walkInfo = i.location.woman, i.changeLocal(i.location.woman, 1), i.location.woman >= 40) return i.descriptiveText = "<view>女方胜利</view><view>可要求对方做任何事情</view>", i.showTip = !0, void setTimeout((function () {
                                        i.sides()
                                    }), 400)
                                }), 400, a).then((function (e) {
                                    n.party = 0, n.flag = !1;
                                    var t = setTimeout((function () {
                                        clearTimeout(t), n.walkInfo = 0
                                    }), 400);
                                    n.location.woman >= 40 || (n.descriptiveText = n.mapFilterDataList[n.location.woman - 1].text, n.showTip = !0, n.playVoice(n.descriptiveText))
                                })) : (0, l.timer)((function (e) {
                                    if (i.location.man++, i.walkInfo = i.location.man, i.changeLocal(i.location.man, 0), i.location.man >= 40) return i.descriptiveText = "<view>男方胜利</view><view>可要求对方做任何事情</view>", i.showTip = !0, void setTimeout((function () {
                                        i.sides()
                                    }), 400)
                                }), 400, a).then((function (t) {
                                    n.party = 1, e.log(11), n.flag = !1;
                                    var i = setTimeout((function () {
                                        clearTimeout(i), n.walkInfo = 0
                                    }), 400);
                                    n.location.man >= 40 || (n.descriptiveText = n.mapFilterDataList[n.location.man - 1].text, n.showTip = !0, n.playVoice(n.descriptiveText))
                                }))
                            }
                        }
                    })
                };
            t.default = y
        }).call(this, n("5a52")["default"])
    }, f71d: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("34b6"), a = n.n(i);
        for (var o in i) ["default"].indexOf(o) < 0 && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    }, f85c: function (e, t, n) {
        "use strict";
        var i = n("8d66"), a = n.n(i);
        a.a
    }, f8c9: function (e, t, n) {
        var i = n("23e7"), a = n("da84"), o = n("d44e");
        i({global: !0}, {Reflect: {}}), o(a.Reflect, "Reflect", !0)
    }, f940: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return i
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "a", (function () {
        }));
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("v-uni-view", {staticClass: "main-btn"}, [n("v-uni-view", {
                staticClass: "btn",
                class: {onbtn: this.disabled},
                style: [{color: e.color}, {"box-shadow": "0 0 1px " + e.color}],
                attrs: {"hover-class": "onbtn", "hover-stay-time": "100"}
            }, [n("v-uni-text", {staticClass: "no0"}, [e._v(e._s(e.str))]), n("v-uni-view", {staticClass: "line"}, [n("v-uni-text", {
                class: {"span span1": !this.disabled},
                style: {background: "linear-gradient(90deg, transparent," + e.color + ")"}
            }), n("v-uni-text", {
                class: {"span span2": !this.disabled},
                style: {background: "linear-gradient(180deg, transparent," + e.color + ")"}
            }), n("v-uni-text", {
                class: {"span span3": !this.disabled},
                style: {background: "linear-gradient(270deg, transparent," + e.color + ")"}
            }), n("v-uni-text", {
                class: {"span span4": !this.disabled},
                style: {background: "linear-gradient(360deg, transparent," + e.color + ")"}
            })], 1)], 1)], 1)
        }, a = []
    }, fab2: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                color: {type: String, default: uni.$u.props.line.color},
                length: {type: [String, Number], default: uni.$u.props.line.length},
                direction: {type: String, default: uni.$u.props.line.direction},
                hairline: {type: Boolean, default: uni.$u.props.line.hairline},
                margin: {type: [String, Number], default: uni.$u.props.line.margin},
                dashed: {type: Boolean, default: uni.$u.props.line.dashed}
            }
        };
        t.default = i
    }, fc2f: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                span: {type: [String, Number], default: uni.$u.props.col.span},
                offset: {type: [String, Number], default: uni.$u.props.col.offset},
                justify: {type: String, default: uni.$u.props.col.justify},
                align: {type: String, default: uni.$u.props.col.align},
                textAlign: {type: String, default: uni.$u.props.col.textAlign}
            }
        };
        t.default = i
    }, fc8a: function (e, t, n) {
        "use strict";
        n("7a82"), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n("a9e3");
        var i = {
            props: {
                filletDirection: {type: [String, Number], default: 0},
                item: {type: Object, default: {}},
                activeManID: {type: [String, Number], default: 0},
                mode: {type: [String, Number], defalut: ""}
            }, data: function () {
                return {myColorOne: "", myColorTwo: "", myColorInit: ""}
            }, created: function () {
                this.classFilter()
            }, methods: {
                classFilter: function () {
                    var e = this;
                    if (this.mode > 1) if (this.item.id % 2 === 0) var t = setTimeout((function () {
                        clearTimeout(t), e.myColorOne = "myColorOne".concat(e.mode)
                    }), 200); else if (this.item.id % 3 === 0) var n = setTimeout((function () {
                        clearTimeout(n), e.myColorTwo = "myColorTwo".concat(e.mode)
                    }), 400); else var i = setTimeout((function () {
                        clearTimeout(i), e.myColorInit = "myColorInit".concat(e.mode)
                    }), 600)
                }
            }
        };
        t.default = i
    }
}]);
