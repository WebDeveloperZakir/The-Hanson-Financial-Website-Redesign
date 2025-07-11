! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    class n extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-elementor-kit.jkit-tabs",
                    tab: "li.tab-nav",
                    content: ".tab-content-list"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $tab: this.$element.find(e.tab),
                $content: this.$element.find(e.content)
            }
        }
        slideOverMoved(e, t, n) {
            let i = t.elements.$wrapper.find(".tab-nav-list"),
                a = i.find(".tab-nav").eq(e).outerHeight(),
                s = i.find(".tab-nav").eq(e).outerWidth(),
                o = i.find(".tab-nav").eq(e).position().left,
                r = i.find(".tab-nav").eq(e).position().top;
            n && new ResizeObserver((() => {
                a = i.find(".tab-nav").eq(e).outerHeight(), s = i.find(".tab-nav").eq(e).outerWidth(), o = i.find(".tab-nav").eq(e).position().left, r = i.find(".tab-nav").eq(e).position().top, i.find(".tab-nav-cloned").css({
                    opacity: 1,
                    width: s + "px",
                    height: a + "px",
                    left: o + "px",
                    top: r + "px"
                })
            })).observe(i.find(".tab-nav.active")[0]), i.find(".tab-nav-cloned").css({
                opacity: 1,
                width: s + "px",
                height: a + "px",
                left: o + "px",
                top: r + "px"
            })
        }
        bindEvents() {
            const e = this,
                t = "yes" === e.$element.find(".tab-nav-list").data("toggle"),
                n = e.elements.$wrapper.find(".tab-nav-list");
            t && e.$element.find("li.tab-nav.active").find(".tab-content").slideDown(), e.elements.$tab.on("click", (function() {
                if (jQuery(this).hasClass("active")) return;
                const i = jQuery(this),
                    a = e.$element.find(".tab-nav.active"),
                    s = i.data("tab");
                e.elements.$tab.removeClass("active"), t && (e.elements.$tab.find(".tab-content").slideUp(), jQuery(this).find(".tab-content").slideDown()), jQuery(this).addClass("active"), e.elements.$content.find(".tab-content").removeClass("active"), e.elements.$content.find("." + s).addClass("active"), n.hasClass("over") && (n.addClass("moving"), e.slideOverMoved(i.index(), e, t)), n.hasClass("slide") && (e.$element.find(".tab-nav").removeClass("right"), a.index() < i.index() ? a.addClass("right") : i.addClass("right"))
            })), n.hasClass("over") && (n.append('<li class="tab-nav tab-nav-cloned"></li>'), e.slideOverMoved(n.find(".active").index(), e, t), n.addClass("moving"), jQuery(window).on("resize", (function() {
                const i = n.find(".active").index();
                e.slideOverMoved(i, e, t)
            })))
        }
        onElementChange(e) {
            if (-1 !== ["st_tab_wrap_responsive", "st_tab_full_width", "st_tab_horizontal_alignment_responsive", "st_tab_vertical_alignment_responsive"].indexOf(e)) {
                const e = this.elements.$wrapper.find(".tab-nav.active").index(),
                    t = "yes" === $this.$element.find(".tab-nav-list").data("toggle");
                this.slideOverMoved(e, this, t)
            }
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_tabs.default", (e => {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }))
    }))
}]);