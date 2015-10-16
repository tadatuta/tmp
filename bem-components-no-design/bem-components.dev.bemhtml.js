(function(global) {
var buildBemXjst = function(exports, __bem_xjst_libs__){
if (typeof Vow === "undefined") { global.Vow = __bem_xjst_libs__.vow || __bem_xjst_libs__.Vow; }
var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null, $$once = false, $$wrap = false;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$wrap = undefined;
    $$once = undefined;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "content") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$mr = __$m1[$$block];
        if (__$mr) {
            __$mr = __$mr(__$wrapThis(__$ctx), __$ref);
            if (__$mr !== __$ref) return __$mr;
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "radio-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        } else if (__$t === "modal") {
            if (!$$elem) {
                return {
                    block: "popup",
                    js: {
                        zIndexGroupLevel: __$ctx.ctx.zIndexGroupLevel || 20
                    },
                    mods: {
                        autoclosable: $$mods.autoclosable
                    }
                };
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "dropdown") {
            if ($$elem === "switcher") {
                var __$r = __$b37(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$r = __$g5(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            }
        }
        return undefined;
        if ($$block === "ua" && !$$elem) {
            return false;
        }
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a1 & 1048576) === 0) {
            var __$r = __$b143(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b144(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b145(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b146(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b147(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    throw new Error("Match failed, no templates found");
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    }, resetApplyNext = context.resetApplyNext || function() {};
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
        this._resetApplyNext = resetApplyNext;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = function xmlEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    BEMContext.prototype.attrEscape = function attrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    };
    BEMContext.prototype.jsAttrEscape = function jsAttrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/'/g, "&#39;");
    };
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
}, function() {
    (function(global, bem_) {
        if (bem_.I18N) {
            return;
        }
        global.BEM = bem_;
        var i18n = global.BEM.I18N = function(keyset, key) {
            return key;
        };
        i18n.keyset = function() {
            return i18n;
        };
        i18n.key = function(key) {
            return key;
        };
        i18n.lang = function() {
            return;
        };
    })(this, typeof BEM === "undefined" ? {} : BEM);
}, function(exports, context) {
    var BEMContext = exports.BEMContext || context.BEMContext;
    if (!BEMContext) {
        throw Error("Seems like you have no base templates from i-bem.bemhtml");
    }
    BEMContext.prototype.require = function(lib) {
        return __bem_xjst_libs__[lib];
    };
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_checkedOption"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_selectTextId"] = undefined;
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
        ctx["_optionsIds"] = undefined;
        ctx["_val"] = undefined;
        ctx["_menuItemDisabled"] = undefined;
        ctx["_firstItem"] = undefined;
        ctx["_checkedItems"] = undefined;
        ctx["_menuMods"] = undefined;
        ctx["_input"] = undefined;
        ctx["__$a1"] = 0;
        ctx["_dropdown"] = undefined;
        ctx["_popupId"] = undefined;
        ctx["_isRealButton"] = undefined;
        ctx["_attach"] = undefined;
        ctx["_pageInit"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["__$a1"] = 0;
    }
});

var __$m1 = {
    textarea: function(__$ctx, __$ref) {
        if (!$$elem) {
            var __$r = __$b149(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    radio: function(__$ctx, __$ref) {
        var __$t = $$elem;
        if (__$t === "text") {
            return {
                role: "presentation"
            };
        } else if (__$t === "control") {
            var __$r = __$b151(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    select: function(__$ctx, __$ref) {
        if ($$elem === "control") {
            return {
                type: "hidden",
                name: __$ctx._select.name,
                value: __$ctx.ctx.val,
                disabled: $$mods.disabled ? "disabled" : undefined
            };
        }
        return __$ref;
    },
    button: function(__$ctx, __$ref) {
        if ($$elem === "text" && __$ctx._select) {
            return {
                id: __$ctx._selectTextId
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                if ($$mods["type"] === "link" && (__$ctx.__$a1 & 64) === 0) {
                    var __$r = __$b154(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$t = $$mods["togglable"];
                if (__$t === "radio") {
                    if ((__$ctx.__$a1 & 128) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$265() {
                            var __$r__$266;
                            var __$l0__$267 = __$ctx.__$a1;
                            __$ctx.__$a1 = __$ctx.__$a1 | 128;
                            __$r__$266 = applyc(__$ctx, __$ref);
                            __$ctx.__$a1 = __$l0__$267;
                            return __$r__$266;
                        }(), {
                            "aria-pressed": !!$$mods.checked
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "check") {
                    if ((__$ctx.__$a1 & 256) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$268() {
                            var __$r__$269;
                            var __$l0__$270 = __$ctx.__$a1;
                            __$ctx.__$a1 = __$ctx.__$a1 | 256;
                            __$r__$269 = applyc(__$ctx, __$ref);
                            __$ctx.__$a1 = __$l0__$270;
                            return __$r__$269;
                        }(), {
                            "aria-pressed": !!$$mods.checked
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (__$ctx._isRealButton && (__$ctx.__$a1 & 2048) === 0) {
                var __$r = __$b157(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b158(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    menu: function(__$ctx, __$ref) {
        var __$t = $$elem;
        if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 262144) === 0) {
                var __$r = __$ctx.extend(function __$lb__$113() {
                    var __$r__$114;
                    var __$l0__$115 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$114 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$115;
                    return __$r__$114;
                }(), {
                    "aria-label": undefined,
                    "aria-labelledby": __$ctx.generateId()
                });
                if (__$r !== __$ref) return __$r;
            }
            return {
                role: "group"
            };
        }
        if (!$$elem) {
            var __$r = __$b161(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    "radio-group": function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                role: "radiogroup"
            };
        }
        return __$ref;
    },
    progressbar: function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                role: "progressbar",
                "aria-valuenow": __$ctx._val + "%"
            };
        }
        return __$ref;
    },
    modal: function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                role: "dialog",
                "aria-hidden": true
            };
        }
        return __$ref;
    },
    link: function(__$ctx, __$ref) {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && !__$ctx.ctx.url && $$mods["pseudo"] === true && (__$ctx.__$a0 & 67108864) === 0) {
                var __$r = __$ctx.extend(function __$lb__$163() {
                    var __$r__$164;
                    var __$l0__$165 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 67108864;
                    __$r__$164 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$165;
                    return __$r__$164;
                }(), {
                    role: "button"
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b166(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    "menu-item": function(__$ctx, __$ref) {
        if (!$$elem) {
            var __$r = __$b167(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    input: function(__$ctx, __$ref) {
        var __$t = $$elem;
        if (__$t === "control") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["type"];
                if (__$t === "search") {
                    if ((__$ctx.__$a0 & 4194304) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$145() {
                            var __$r__$146;
                            var __$l0__$147 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
                            __$r__$146 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$147;
                            return __$r__$146;
                        }(), {
                            type: "search"
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "password") {
                    if ((__$ctx.__$a0 & 8388608) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$148() {
                            var __$r__$149;
                            var __$l0__$150 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
                            __$r__$149 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$150;
                            return __$r__$149;
                        }(), {
                            type: "password"
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            var __$r = __$b170(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    image: function(__$ctx, __$ref) {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content === "undefined" && (__$ctx.__$a0 & 33554432) === 0) {
                var __$r = __$b171(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            return {
                role: "img"
            };
        }
        return __$ref;
    },
    popup: function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                "aria-hidden": true
            };
        }
        return __$ref;
    },
    "control-group": function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                role: "group"
            };
        }
        return __$ref;
    },
    "checkbox-group": function(__$ctx, __$ref) {
        if (!$$elem) {
            return {
                role: "group"
            };
        }
        return __$ref;
    },
    checkbox: function(__$ctx, __$ref) {
        var __$t = $$elem;
        if (__$t === "text") {
            return {
                role: "presentation"
            };
        } else if (__$t === "control") {
            var __$r = __$b177(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    attach: function(__$ctx, __$ref) {
        if ($$elem === "control") {
            var __$r = __$b178(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    icon: function(__$ctx, __$ref) {
        if (!$$elem) {
            var __$r = __$b179(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return __$ref;
    },
    page: function(__$ctx, __$ref) {
        var __$t = $$elem;
        if (__$t === "js") {
            var __$r = __$b180(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return {
                    rel: "stylesheet",
                    href: __$ctx.ctx.url
                };
            }
        } else if (__$t === "favicon") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
        }
        return __$ref;
    }
};

function __$b2(__$ctx, __$ref) {
    var ctx__$84 = __$ctx.ctx, mods__$85 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$85.mode === "radio-check" ? "check" : "radio",
            checked: mods__$85.checked,
            disabled: mods__$85.disabled,
            theme: mods__$85.theme,
            size: mods__$85.size
        },
        title: ctx__$84.title,
        content: [ ctx__$84.icon, typeof ctx__$84.text !== "undefined" ? {
            elem: "text",
            content: ctx__$84.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$85.checked,
        disabled: mods__$85.disabled,
        name: ctx__$84.name,
        val: ctx__$84.val
    } ];
}

function __$b3(__$ctx, __$ref) {
    var ctx__$88 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$88.name,
            val: ctx__$88.val
        }
    }, ctx__$88.text && {
        elem: "text",
        content: ctx__$88.text
    } ];
}

function __$b8(__$ctx, __$ref) {
    var res__$19 = __$ctx._checkedOptions.map(function(option) {
        return {
            elem: "control",
            val: option.val
        };
    });
    res__$19.push(function __$lb__$20() {
        var __$r__$21;
        var __$l0__$22 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$21 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$22;
        return __$r__$21;
    }());
    return res__$19;
}

function __$b9(__$ctx, __$ref) {
    var checkedOptions__$23 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$23.length === 1 ? checkedOptions__$23[0].text : checkedOptions__$23.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b13(__$ctx, __$ref) {
    var ctx__$281 = __$ctx.ctx, content__$282 = [ ctx__$281.icon ];
    "text" in ctx__$281 && content__$282.push({
        elem: "text",
        content: ctx__$281.text
    });
    return content__$282;
}

function __$b15(__$ctx, __$ref) {
    var mods__$81 = $$mods, ctx__$82 = __$ctx.ctx, isValDef__$83 = typeof ctx__$82.val !== "undefined";
    return (ctx__$82.options || []).map(function(option, i) {
        return [ !!i && !mods__$81.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$81.type,
                mode: mods__$81.mode,
                theme: mods__$81.theme,
                size: mods__$81.size,
                checked: isValDef__$83 && ctx__$82.val === option.val,
                disabled: option.disabled || mods__$81.disabled
            },
            name: ctx__$82.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b21(__$ctx, __$ref) {
    var mods__$247 = $$mods, ctx__$248 = __$ctx.ctx, val__$249 = ctx__$248.val, isValDef__$250 = typeof val__$249 !== "undefined";
    if (isValDef__$250 && !Array.isArray(val__$249)) throw Error("checkbox-group: val must be an array");
    return (ctx__$248.options || []).map(function(option, i) {
        return [ !!i && !mods__$247.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$247.type,
                theme: mods__$247.theme,
                size: mods__$247.size,
                checked: isValDef__$250 && val__$249.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$247.disabled
            },
            name: ctx__$248.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b22(__$ctx, __$ref) {
    var ctx__$251 = __$ctx.ctx, mods__$252 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$252.checked,
            disabled: mods__$252.disabled,
            theme: mods__$252.theme,
            size: mods__$252.size
        },
        attrs: {
            role: "checkbox",
            "aria-pressed": undefined,
            "aria-checked": !!mods__$252.checked
        },
        title: ctx__$251.title,
        content: [ ctx__$251.icon, typeof ctx__$251.text !== "undefined" ? {
            elem: "text",
            content: ctx__$251.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$252.checked,
        disabled: mods__$252.disabled,
        name: ctx__$251.name,
        val: ctx__$251.val
    } ];
}

function __$b23(__$ctx, __$ref) {
    var ctx__$255 = __$ctx.ctx, mods__$256 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$256.checked,
            disabled: mods__$256.disabled,
            name: ctx__$255.name,
            val: ctx__$255.val
        }
    }, ctx__$255.text && {
        elem: "text",
        content: ctx__$255.text
    } ];
}

function __$b24(__$ctx, __$ref) {
    var ctx__$300 = __$ctx.ctx, button__$301 = ctx__$300.button;
    __$ctx.isSimple(button__$301) && (button__$301 = {
        block: "button",
        tag: "span",
        text: button__$301
    });
    var attachMods__$302 = $$mods, buttonMods__$303 = button__$301.mods || (button__$301.mods = {});
    [ "size", "theme", "disabled", "focused" ].forEach(function(mod) {
        buttonMods__$303[mod] || (buttonMods__$303[mod] = attachMods__$302[mod]);
    });
    return [ button__$301, {
        elem: "no-file",
        content: __$ctx.ctx.noFileText
    } ];
}

function __$b25(__$ctx, __$ref) {
    var ctx__$310 = __$ctx.ctx, cond__$311 = ctx__$310.condition.replace("<", "lt").replace(">", "gt").replace("=", "e"), hasNegation__$312 = cond__$311.indexOf("!") > -1, includeOthers__$313 = ctx__$310.msieOnly === false, hasNegationOrIncludeOthers__$314 = hasNegation__$312 || includeOthers__$313;
    return [ "<!--[if " + cond__$311 + "]>", includeOthers__$313 ? "<!" : "", hasNegationOrIncludeOthers__$314 ? "-->" : "", function __$lb__$315() {
        var __$r__$316;
        var __$l0__$317 = __$ctx.__$a1;
        __$ctx.__$a1 = __$ctx.__$a1 | 16384;
        __$r__$316 = applyc(__$ctx, __$ref);
        __$ctx.__$a1 = __$l0__$317;
        return __$r__$316;
    }(), hasNegationOrIncludeOthers__$314 ? "<!--" : "", "<![endif]-->" ];
}

function __$b37(__$ctx, __$ref) {
    var dropdown__$218 = __$ctx._dropdown;
    return [ dropdown__$218 ].concat(dropdown__$218.switcher.mix || [], dropdown__$218.mix || []);
}

function __$b88(__$ctx, __$ref) {
    var ctx__$57 = __$ctx.ctx;
    return {
        name: ctx__$57.name,
        optionsMaxHeight: ctx__$57.optionsMaxHeight
    };
}

function __$b102(__$ctx, __$ref) {
    var ctx__$206 = __$ctx.ctx;
    return {
        mainOffset: ctx__$206.mainOffset,
        secondaryOffset: ctx__$206.secondaryOffset,
        viewportOffset: ctx__$206.viewportOffset,
        directions: ctx__$206.directions,
        zIndexGroupLevel: ctx__$206.zIndexGroupLevel
    };
}

function __$b107(__$ctx, __$ref) {
    var checkedOptions__$5 = __$ctx._checkedOptions, firstOption__$6 = __$ctx._firstOption;
    if (firstOption__$6 && !checkedOptions__$5.length) {
        firstOption__$6.checked = true;
        checkedOptions__$5 = [ firstOption__$6 ];
    }
    var __$r__$8;
    var __$l0__$9 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$5[0];
    var __$r__$11;
    var __$l1__$12 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$12;
    __$r__$8 = __$r__$11;
    __$ctx._checkedOption = __$l0__$9;
    return __$r__$8;
}

function __$b109(__$ctx, __$ref) {
    var select__$43 = __$ctx._select, mods__$44 = $$mods;
    var __$r__$46;
    var __$l0__$47 = $$mode;
    $$mode = "";
    var __$l1__$48 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$44.size,
            theme: mods__$44.theme,
            view: mods__$44.view,
            focused: mods__$44.focused,
            disabled: mods__$44.disabled,
            checked: mods__$44.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        attrs: {
            role: "listbox",
            "aria-owns": __$ctx._optionsIds.join(" "),
            "aria-multiselectable": mods__$44.mode === "check" ? "true" : undefined,
            "aria-labelledby": __$ctx._selectTextId
        },
        id: select__$43.id,
        tabIndex: select__$43.tabIndex,
        content: [ function __$lb__$49() {
            var __$r__$50;
            var __$l3__$51 = $$mode;
            $$mode = "content";
            __$r__$50 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$51;
            return __$r__$50;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$52;
    var __$l2__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$53;
    __$r__$46 = __$r__$52;
    $$mode = __$l0__$47;
    __$ctx.ctx = __$l1__$48;
    return __$r__$46;
}

function __$b110(__$ctx, __$ref) {
    var mods__$27 = $$mods, optionToMenuItem__$28 = function(option) {
        var res__$29 = {
            block: "menu-item",
            mods: {
                disabled: mods__$27.disabled || option.disabled
            },
            attrs: {
                role: "option"
            },
            id: option.id,
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$29.js.text = option.text;
            res__$29.content = [ option.icon, res__$29.content ];
        }
        return res__$29;
    };
    var __$r__$31;
    var __$l0__$32 = $$mode;
    $$mode = "";
    var __$l1__$33 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$27.size,
            theme: mods__$27.theme,
            disabled: mods__$27.disabled,
            mode: mods__$27.mode
        },
        val: __$ctx._select.val,
        attrs: {
            role: undefined,
            tabindex: undefined
        },
        content: __$ctx._select.options.map(function(optionOrGroup) {
            return optionOrGroup.group ? {
                elem: "group",
                title: optionOrGroup.title,
                content: optionOrGroup.group.map(optionToMenuItem__$28)
            } : optionToMenuItem__$28(optionOrGroup);
        })
    };
    var __$r__$35;
    var __$l2__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$36;
    __$r__$31 = __$r__$35;
    $$mode = __$l0__$32;
    __$ctx.ctx = __$l1__$33;
    return __$r__$31;
}

function __$b111(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var _this__$58 = __$wrapThis(__$ctx), ctx__$59 = __$ctx.ctx, isValDef__$60 = typeof ctx__$59.val !== "undefined", isModeCheck__$61 = $$mods.mode === "check", firstOption__$62, checkedOptions__$63 = [], optionIds__$64 = [], containsVal__$65 = function(val) {
        return isValDef__$60 && (isModeCheck__$61 ? ctx__$59.val.indexOf(val) > -1 : ctx__$59.val === val);
    }, iterateOptions__$66 = function(content) {
        var i__$67 = 0, option__$68;
        while (option__$68 = content[i__$67++]) {
            if (option__$68.group) {
                iterateOptions__$66(option__$68.group);
            } else {
                firstOption__$62 || (firstOption__$62 = option__$68);
                optionIds__$64.push(option__$68.id = _this__$58.generateId());
                if (containsVal__$65(option__$68.val)) {
                    option__$68.checked = true;
                    checkedOptions__$63.push(option__$68);
                }
            }
        }
    };
    iterateOptions__$66(ctx__$59.options);
    var __$r__$70;
    var __$l0__$71 = __$ctx._select;
    __$ctx._select = ctx__$59;
    var __$l1__$72 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$63;
    var __$l2__$73 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$62;
    var __$l3__$74 = __$ctx._optionsIds;
    __$ctx._optionsIds = optionIds__$64;
    var __$r__$76;
    var __$l4__$77 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$76 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l4__$77;
    __$r__$70 = __$r__$76;
    __$ctx._select = __$l0__$71;
    __$ctx._checkedOptions = __$l1__$72;
    __$ctx._firstOption = __$l2__$73;
    __$ctx._optionsIds = __$l3__$74;
    return __$r__$70;
}

function __$b112(__$ctx, __$ref) {
    var tag__$290 = function __$lb__$291() {
        var __$r__$292;
        var __$l2__$293 = $$mode;
        $$mode = "tag";
        __$r__$292 = applyc(__$ctx, __$ref);
        $$mode = __$l2__$293;
        return __$r__$292;
    }(), isRealButton__$294 = tag__$290 === "button" && (!$$mods.type || $$mods.type === "submit");
    var __$r__$295;
    var __$l0__$296 = __$ctx._isRealButton;
    __$ctx._isRealButton = isRealButton__$294;
    var __$r__$298;
    var __$l1__$299 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 4096;
    __$r__$298 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l1__$299;
    __$r__$295 = __$r__$298;
    __$ctx._isRealButton = __$l0__$296;
    return __$r__$295;
}

function __$b113(__$ctx, __$ref) {
    (__$ctx._firstItem.mods || (__$ctx._firstItem.mods = {})).checked = true;
    var __$r__$108;
    var __$l0__$109 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
    __$r__$108 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$109;
    return __$r__$108;
}

function __$b114(__$ctx, __$ref) {
    var ctx__$128 = __$ctx.ctx, mods__$129 = $$mods, firstItem__$130, checkedItems__$131 = [];
    if (ctx__$128.content) {
        var isValDef__$132 = typeof ctx__$128.val !== "undefined", containsVal__$133 = function(val) {
            return isValDef__$132 && (mods__$129.mode === "check" ? ctx__$128.val.indexOf(val) > -1 : ctx__$128.val === val);
        }, iterateItems__$134 = function(content) {
            var i__$135 = 0, itemOrGroup__$136;
            while (itemOrGroup__$136 = content[i__$135++]) {
                if (itemOrGroup__$136.block === "menu-item") {
                    firstItem__$130 || (firstItem__$130 = itemOrGroup__$136);
                    if (containsVal__$133(itemOrGroup__$136.val)) {
                        (itemOrGroup__$136.mods = itemOrGroup__$136.mods || {}).checked = true;
                        checkedItems__$131.push(itemOrGroup__$136);
                    }
                } else if (itemOrGroup__$136.content) {
                    iterateItems__$134(itemOrGroup__$136.content);
                }
            }
        };
        if (!__$ctx.isArray(ctx__$128.content)) throw Error("menu: content must be an array of the menu items");
        iterateItems__$134(ctx__$128.content);
    }
    var __$r__$138;
    var __$l0__$139 = __$ctx._firstItem;
    __$ctx._firstItem = firstItem__$130;
    var __$l1__$140 = __$ctx._checkedItems;
    __$ctx._checkedItems = checkedItems__$131;
    var __$l2__$141 = __$ctx._menuMods;
    __$ctx._menuMods = mods__$129;
    var __$r__$143;
    var __$l3__$144 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
    __$r__$143 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$144;
    __$r__$138 = __$r__$143;
    __$ctx._firstItem = __$l0__$139;
    __$ctx._checkedItems = __$l1__$140;
    __$ctx._menuMods = __$l2__$141;
    return __$r__$138;
}

function __$b115(__$ctx, __$ref) {
    if ($$mods.type !== "button") throw Error("Modifier mode=radio-check can be only with modifier type=button");
    var __$r__$79;
    var __$l0__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$80;
    return __$r__$79;
}

function __$b117(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    var __$r__$99;
    var __$l0__$100 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$99 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$100;
    return __$r__$99;
}

function __$b118(__$ctx, __$ref) {
    var ctx__$172 = __$ctx.ctx;
    typeof ctx__$172.url === "object" && (ctx__$172.url = __$ctx.reapply(ctx__$172.url));
    var __$r__$174;
    var __$l0__$175 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 268435456;
    __$r__$174 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$175;
    return __$r__$174;
}

function __$b120(__$ctx, __$ref) {
    var mods__$123 = $$mods;
    mods__$123.theme = mods__$123.theme || __$ctx._menuMods.theme;
    mods__$123.disabled = mods__$123.disabled || __$ctx._menuMods.disabled;
    var __$r__$125;
    var __$l0__$126 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$125 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$126;
    return __$r__$125;
}

function __$b122(__$ctx, __$ref) {
    var dropdown__$191 = __$ctx._dropdown, switcher__$192 = dropdown__$191.switcher;
    if (Array.isArray(switcher__$192)) return switcher__$192;
    var res__$193 = __$ctx.isSimple(switcher__$192) ? {
        block: "button",
        text: switcher__$192
    } : switcher__$192;
    if (res__$193.block === "button") {
        var resMods__$194 = res__$193.mods || (res__$193.mods = {}), resAttrs__$195 = res__$193.attrs || (res__$193.attrs = {}), dropdownMods__$196 = $$mods;
        resMods__$194.size || (resMods__$194.size = dropdownMods__$196.size);
        resMods__$194.theme || (resMods__$194.theme = dropdownMods__$196.theme);
        resMods__$194.disabled = dropdownMods__$196.disabled;
        resAttrs__$195["aria-haspopup"] = true;
        resAttrs__$195["aria-controls"] = __$ctx._popupId;
        resAttrs__$195["aria-expanded"] = false;
        var __$r__$198;
        var __$l3__$199 = $$mode;
        $$mode = "mix";
        __$r__$198 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$199;
        res__$193.mix = __$r__$198;
    }
    var __$r__$200;
    var __$l0__$201 = $$mode;
    $$mode = "";
    var __$l1__$202 = __$ctx.ctx;
    __$ctx.ctx = res__$193;
    var __$r__$204;
    var __$l2__$205 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 1;
    __$r__$204 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$205;
    __$r__$200 = __$r__$204;
    $$mode = __$l0__$201;
    __$ctx.ctx = __$l1__$202;
    return __$r__$200;
}

function __$b123(__$ctx, __$ref) {
    var dropdown__$176 = __$ctx._dropdown, switcher__$177 = dropdown__$176.switcher;
    if (Array.isArray(switcher__$177)) return switcher__$177;
    var res__$178 = __$ctx.isSimple(switcher__$177) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: switcher__$177
    } : switcher__$177;
    if (res__$178.block === "link") {
        var resMods__$179 = res__$178.mods || (res__$178.mods = {}), resAttrs__$180 = res__$178.attrs || (res__$178.attrs = {}), dropdownMods__$181 = $$mods;
        resMods__$179.theme || (resMods__$179.theme = dropdownMods__$181.theme);
        resMods__$179.disabled = dropdownMods__$181.disabled;
        resAttrs__$180["aria-haspopup"] = true;
        resAttrs__$180["aria-controls"] = __$ctx._popupId;
        resAttrs__$180["aria-expanded"] = false;
        var __$r__$183;
        var __$l3__$184 = $$mode;
        $$mode = "mix";
        __$r__$183 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$184;
        res__$178.mix = __$r__$183;
    }
    var __$r__$185;
    var __$l0__$186 = $$mode;
    $$mode = "";
    var __$l1__$187 = __$ctx.ctx;
    __$ctx.ctx = res__$178;
    var __$r__$189;
    var __$l2__$190 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 536870912;
    __$r__$189 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$190;
    __$r__$185 = __$r__$189;
    $$mode = __$l0__$186;
    __$ctx.ctx = __$l1__$187;
    return __$r__$185;
}

function __$b124(__$ctx, __$ref) {
    var dropdown__$219 = __$ctx._dropdown, switcher__$220 = dropdown__$219.switcher;
    switcher__$220.block && (switcher__$220.mix = function __$lb__$221() {
        var __$r__$222;
        var __$l3__$223 = $$mode;
        $$mode = "mix";
        __$r__$222 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$223;
        return __$r__$222;
    }());
    var __$r__$224;
    var __$l0__$225 = $$mode;
    $$mode = "";
    var __$l1__$226 = __$ctx.ctx;
    __$ctx.ctx = switcher__$220;
    var __$r__$228;
    var __$l2__$229 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 4;
    __$r__$228 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$229;
    __$r__$224 = __$r__$228;
    $$mode = __$l0__$225;
    __$ctx.ctx = __$l1__$226;
    return __$r__$224;
}

function __$b125(__$ctx, __$ref) {
    var dropdown__$207 = __$ctx._dropdown, popup__$208 = dropdown__$207.popup;
    if (__$ctx.isSimple(popup__$208) || popup__$208.block !== "popup") {
        popup__$208 = {
            block: "popup",
            content: popup__$208
        };
    }
    var popupMods__$209 = popup__$208.mods || (popup__$208.mods = {}), popupAttrs__$210 = popup__$208.attrs || (popup__$208.attrs = {});
    popupMods__$209.theme || (popupMods__$209.theme = $$mods.theme);
    popupMods__$209.hasOwnProperty("autoclosable") || (popupMods__$209.autoclosable = true);
    popupMods__$209.target = "anchor";
    popupAttrs__$210.id = __$ctx._popupId;
    popup__$208.mix = [ dropdown__$207 ].concat(popup__$208.mix || []);
    var __$r__$212;
    var __$l0__$213 = $$mode;
    $$mode = "";
    var __$l1__$214 = __$ctx.ctx;
    __$ctx.ctx = popup__$208;
    var __$r__$216;
    var __$l2__$217 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 2;
    __$r__$216 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$217;
    __$r__$212 = __$r__$216;
    $$mode = __$l0__$213;
    __$ctx.ctx = __$l1__$214;
    return __$r__$212;
}

function __$b126(__$ctx, __$ref) {
    var ctx__$230 = __$ctx.ctx;
    ctx__$230.js = __$ctx.extend(function __$lb__$231() {
        var __$r__$232;
        var __$l3__$233 = $$mode;
        $$mode = "js";
        __$r__$232 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$233;
        return __$r__$232;
    }(), ctx__$230.js);
    var __$r__$234;
    var __$l0__$235 = __$ctx._dropdown;
    __$ctx._dropdown = ctx__$230;
    var __$l1__$236 = __$ctx._popupId;
    __$ctx._popupId = __$ctx.generateId();
    var __$r__$238;
    var __$l2__$239 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 8;
    __$r__$238 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$239;
    __$r__$234 = __$r__$238;
    __$ctx._dropdown = __$l0__$235;
    __$ctx._popupId = __$l1__$236;
    return __$r__$234;
}

function __$b129(__$ctx, __$ref) {
    var url__$322 = __$ctx.ctx.url;
    var __$r__$324;
    var __$l0__$325 = $$mode;
    $$mode = "";
    var __$l1__$326 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$322 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$328;
    var __$l2__$329 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 65536;
    __$r__$328 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$329;
    __$r__$324 = __$r__$328;
    $$mode = __$l0__$325;
    __$ctx.ctx = __$l1__$326;
    return __$r__$324;
}

function __$b130(__$ctx, __$ref) {
    var ie__$330 = __$ctx.ctx.ie, hideRule__$331 = !ie__$330 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$330 === "!IE" ? [ ie__$330, "<!-->", "<!--" ] : [ ie__$330, "", "" ];
    var __$r__$333;
    var __$l0__$334 = $$mode;
    $$mode = "";
    var __$l1__$335 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$331[0] + "]>" + hideRule__$331[1], __$ctx.ctx, hideRule__$331[2] + "<![endif]-->" ];
    var __$r__$337;
    var __$l2__$338 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 131072;
    __$r__$337 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$338;
    __$r__$333 = __$r__$337;
    $$mode = __$l0__$334;
    __$ctx.ctx = __$l1__$335;
    return __$r__$333;
}

function __$b131(__$ctx, __$ref) {
    var ctx__$342 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$342.nonce;
    var __$r__$344;
    var __$l0__$345 = __$ctx._pageInit;
    __$ctx._pageInit = true;
    var __$r__$347;
    var __$l1__$348 = $$mode;
    $$mode = "";
    var __$l2__$349 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$342.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$342.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$342.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$342.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$342.nonce
                }
            }, ctx__$342.head, ctx__$342.styles, ctx__$342.favicon ? {
                elem: "favicon",
                url: ctx__$342.favicon
            } : "" ]
        }, ctx__$342 ]
    } ];
    var __$r__$351;
    var __$l3__$352 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 524288;
    __$r__$351 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l3__$352;
    __$r__$347 = __$r__$351;
    $$mode = __$l1__$348;
    __$ctx.ctx = __$l2__$349;
    __$r__$344 = __$r__$347;
    __$ctx._pageInit = __$l0__$345;
    return __$r__$344;
}

function __$b132(__$ctx, __$ref) {
    if (!__$ctx.ctx) return "";
    var ctx__$353 = __$ctx.ctx, keyset__$354 = ctx__$353.keyset, key__$355 = ctx__$353.key, params__$356 = ctx__$353.params || {};
    if (!(keyset__$354 || key__$355)) return "";
    if (typeof ctx__$353.content === "undefined" || ctx__$353.content !== null) {
        params__$356.content = exports.apply(ctx__$353.content);
    }
    __$ctx._buf.push(BEM.I18N(keyset__$354, key__$355, params__$356));
    return;
}

function __$b133(__$ctx, __$ref) {
    var BEM_INTERNAL__$357 = __$ctx.BEM.INTERNAL, ctx__$358 = __$ctx.ctx, isBEM__$359, tag__$360, res__$361;
    var __$r__$363;
    var __$l0__$364 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$365 = $$block;
    var __$r__$367;
    var __$l1__$368 = $$mode;
    $$mode = "tag";
    __$r__$367 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$368;
    tag__$360 = __$r__$367;
    typeof tag__$360 !== "undefined" || (tag__$360 = ctx__$358.tag);
    typeof tag__$360 !== "undefined" || (tag__$360 = "div");
    if (tag__$360) {
        var jsParams__$369, js__$370;
        if (vBlock__$365 && ctx__$358.js !== false) {
            var __$r__$371;
            var __$l2__$372 = $$mode;
            $$mode = "js";
            __$r__$371 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$372;
            js__$370 = __$r__$371;
            js__$370 = js__$370 ? __$ctx.extend(ctx__$358.js, js__$370 === true ? {} : js__$370) : ctx__$358.js === true ? {} : ctx__$358.js;
            js__$370 && ((jsParams__$369 = {})[BEM_INTERNAL__$357.buildClass(vBlock__$365, ctx__$358.elem)] = js__$370);
        }
        __$ctx._str += "<" + tag__$360;
        var __$r__$373;
        var __$l3__$374 = $$mode;
        $$mode = "bem";
        __$r__$373 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$374;
        isBEM__$359 = __$r__$373;
        typeof isBEM__$359 !== "undefined" || (isBEM__$359 = typeof ctx__$358.bem !== "undefined" ? ctx__$358.bem : ctx__$358.block || ctx__$358.elem);
        var __$r__$376;
        var __$l4__$377 = $$mode;
        $$mode = "cls";
        __$r__$376 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$377;
        var cls__$375 = __$r__$376;
        cls__$375 || (cls__$375 = ctx__$358.cls);
        var addJSInitClass__$378 = ctx__$358.block && jsParams__$369 && !ctx__$358.elem;
        if (isBEM__$359 || cls__$375) {
            __$ctx._str += ' class="';
            if (isBEM__$359) {
                __$ctx._str += BEM_INTERNAL__$357.buildClasses(vBlock__$365, ctx__$358.elem, ctx__$358.elemMods || ctx__$358.mods);
                var __$r__$380;
                var __$l5__$381 = $$mode;
                $$mode = "mix";
                __$r__$380 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$381;
                var mix__$379 = __$r__$380;
                ctx__$358.mix && (mix__$379 = mix__$379 ? [].concat(mix__$379, ctx__$358.mix) : ctx__$358.mix);
                if (mix__$379) {
                    var visited__$382 = {}, visitedKey__$383 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$382[visitedKey__$383(vBlock__$365, $$elem)] = true;
                    __$ctx.isArray(mix__$379) || (mix__$379 = [ mix__$379 ]);
                    for (var i__$384 = 0; i__$384 < mix__$379.length; i__$384++) {
                        var mixItem__$385 = mix__$379[i__$384];
                        typeof mixItem__$385 === "string" && (mixItem__$385 = {
                            block: mixItem__$385
                        });
                        var hasItem__$386 = mixItem__$385.block && (vBlock__$365 !== ctx__$358.block || mixItem__$385.block !== vBlock__$365) || mixItem__$385.elem, mixBlock__$387 = mixItem__$385.block || mixItem__$385._block || $$block, mixElem__$388 = mixItem__$385.elem || mixItem__$385._elem || $$elem;
                        hasItem__$386 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$357[hasItem__$386 ? "buildClasses" : "buildModsClasses"](mixBlock__$387, mixItem__$385.elem || mixItem__$385._elem || (mixItem__$385.block ? undefined : $$elem), mixItem__$385.elemMods || mixItem__$385.mods);
                        if (mixItem__$385.js) {
                            (jsParams__$369 || (jsParams__$369 = {}))[BEM_INTERNAL__$357.buildClass(mixBlock__$387, mixItem__$385.elem)] = mixItem__$385.js === true ? {} : mixItem__$385.js;
                            addJSInitClass__$378 || (addJSInitClass__$378 = mixBlock__$387 && !mixItem__$385.elem);
                        }
                        if (hasItem__$386 && !visited__$382[visitedKey__$383(mixBlock__$387, mixElem__$388)]) {
                            visited__$382[visitedKey__$383(mixBlock__$387, mixElem__$388)] = true;
                            var __$r__$390;
                            var __$l6__$391 = $$mode;
                            $$mode = "mix";
                            var __$l7__$392 = $$block;
                            $$block = mixBlock__$387;
                            var __$l8__$393 = $$elem;
                            $$elem = mixElem__$388;
                            __$r__$390 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$391;
                            $$block = __$l7__$392;
                            $$elem = __$l8__$393;
                            var nestedMix__$389 = __$r__$390;
                            if (nestedMix__$389) {
                                Array.isArray(nestedMix__$389) || (nestedMix__$389 = [ nestedMix__$389 ]);
                                for (var j__$394 = 0; j__$394 < nestedMix__$389.length; j__$394++) {
                                    var nestedItem__$395 = nestedMix__$389[j__$394];
                                    if (!nestedItem__$395.block && !nestedItem__$395.elem || !visited__$382[visitedKey__$383(nestedItem__$395.block, nestedItem__$395.elem)]) {
                                        nestedItem__$395._block = mixBlock__$387;
                                        nestedItem__$395._elem = mixElem__$388;
                                        mix__$379.splice(i__$384 + 1, 0, nestedItem__$395);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$375 && (__$ctx._str += isBEM__$359 ? " " + cls__$375 : cls__$375);
            __$ctx._str += addJSInitClass__$378 ? ' i-bem"' : '"';
        }
        if (isBEM__$359 && jsParams__$369) {
            __$ctx._str += " data-bem='" + __$ctx.jsAttrEscape(JSON.stringify(jsParams__$369)) + "'";
        }
        var __$r__$397;
        var __$l9__$398 = $$mode;
        $$mode = "attrs";
        __$r__$397 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$398;
        var attrs__$396 = __$r__$397;
        attrs__$396 = __$ctx.extend(attrs__$396, ctx__$358.attrs);
        if (attrs__$396) {
            var name__$399, attr__$400;
            for (name__$399 in attrs__$396) {
                attr__$400 = attrs__$396[name__$399];
                if (typeof attr__$400 === "undefined") continue;
                __$ctx._str += " " + name__$399 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$400) ? attr__$400 : __$ctx.reapply(attr__$400)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$360)) {
        __$ctx._str += "/>";
    } else {
        tag__$360 && (__$ctx._str += ">");
        var __$r__$402;
        var __$l10__$403 = $$mode;
        $$mode = "content";
        __$r__$402 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$403;
        var content__$401 = __$r__$402;
        if (content__$401 || content__$401 === 0) {
            __$ctx._resetApplyNext(__$wrapThis(__$ctx));
            isBEM__$359 = vBlock__$365 || $$elem;
            var __$r__$404;
            var __$l11__$405 = $$mode;
            $$mode = "";
            var __$l12__$406 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$407 = __$ctx.position;
            __$ctx.position = isBEM__$359 ? 1 : __$ctx.position;
            var __$l14__$408 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$359 ? 1 : __$ctx._listLength;
            var __$l15__$409 = __$ctx.ctx;
            __$ctx.ctx = content__$401;
            __$r__$404 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$405;
            __$ctx._notNewList = __$l12__$406;
            __$ctx.position = __$l13__$407;
            __$ctx._listLength = __$l14__$408;
            __$ctx.ctx = __$l15__$409;
        }
        tag__$360 && (__$ctx._str += "</" + tag__$360 + ">");
    }
    res__$361 = __$ctx._str;
    __$r__$363 = undefined;
    __$ctx._str = __$l0__$364;
    __$ctx._buf.push(res__$361);
    return;
}

function __$b143(__$ctx, __$ref) {
    var __$r__$411;
    var __$l0__$412 = $$mode;
    $$mode = "";
    var __$l1__$413 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$415;
    var __$l2__$416 = __$ctx.__$a1;
    __$ctx.__$a1 = __$ctx.__$a1 | 1048576;
    __$r__$415 = applyc(__$ctx, __$ref);
    __$ctx.__$a1 = __$l2__$416;
    __$r__$411 = __$r__$415;
    $$mode = __$l0__$412;
    __$ctx.ctx = __$l1__$413;
    return;
}

function __$b144(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$417 = __$ctx.ctx;
    if (ctx__$417 && ctx__$417 !== true || ctx__$417 === 0) {
        __$ctx._str += ctx__$417 + "";
    }
    return;
}

function __$b145(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b146(__$ctx, __$ref) {
    var ctx__$418 = __$ctx.ctx, len__$419 = ctx__$418.length, i__$420 = 0, prevPos__$421 = __$ctx.position, prevNotNewList__$422 = __$ctx._notNewList;
    if (prevNotNewList__$422) {
        __$ctx._listLength += len__$419 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$419;
    }
    __$ctx._notNewList = true;
    while (i__$420 < len__$419) (function __$lb__$423() {
        var __$r__$424;
        var __$l0__$425 = __$ctx.ctx;
        __$ctx.ctx = ctx__$418[i__$420++];
        __$r__$424 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$425;
        return __$r__$424;
    })();
    prevNotNewList__$422 || (__$ctx.position = prevPos__$421);
    return;
}

function __$b147(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$426 = __$ctx.ctx.block, vElem__$427 = __$ctx.ctx.elem, block__$428 = __$ctx._currBlock || $$block;
    var __$r__$430;
    var __$l0__$431 = $$mode;
    $$mode = "default";
    var __$l1__$432 = $$block;
    $$block = vBlock__$426 || (vElem__$427 ? block__$428 : undefined);
    var __$l2__$433 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$426 || vElem__$427 ? undefined : block__$428;
    var __$l3__$434 = $$elem;
    $$elem = vElem__$427;
    var __$l4__$435 = $$mods;
    $$mods = vBlock__$426 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$436 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$430 = undefined;
    $$mode = __$l0__$431;
    $$block = __$l1__$432;
    __$ctx._currBlock = __$l2__$433;
    $$elem = __$l3__$434;
    $$mods = __$l4__$435;
    $$elemMods = __$l5__$436;
    return;
}

function __$b149(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx, attrs__$1 = {
        id: ctx__$0.id,
        name: ctx__$0.name,
        tabindex: ctx__$0.tabIndex,
        placeholder: ctx__$0.placeholder
    };
    ctx__$0.autocomplete === false && (attrs__$1.autocomplete = "off");
    $$mods.disabled && (attrs__$1.disabled = "disabled");
    return attrs__$1;
}

function __$b151(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx, attrs__$87 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$86.name,
        value: ctx__$86.val
    };
    ctx__$86.checked && (attrs__$87.checked = "checked");
    ctx__$86.disabled && (attrs__$87.disabled = "disabled");
    return attrs__$87;
}

function __$b154(__$ctx, __$ref) {
    var ctx__$260 = __$ctx.ctx, attrs__$261 = {
        role: "link"
    };
    ctx__$260.target && (attrs__$261.target = ctx__$260.target);
    $$mods.disabled ? attrs__$261["aria-disabled"] = true : attrs__$261.href = ctx__$260.url;
    return __$ctx.extend(function __$lb__$262() {
        var __$r__$263;
        var __$l0__$264 = __$ctx.__$a1;
        __$ctx.__$a1 = __$ctx.__$a1 | 64;
        __$r__$263 = applyc(__$ctx, __$ref);
        __$ctx.__$a1 = __$l0__$264;
        return __$r__$263;
    }(), attrs__$261);
}

function __$b157(__$ctx, __$ref) {
    var ctx__$283 = __$ctx.ctx, attrs__$284 = {
        type: $$mods.type || "button",
        name: ctx__$283.name,
        value: ctx__$283.val
    };
    $$mods.disabled && (attrs__$284.disabled = "disabled");
    return __$ctx.extend(function __$lb__$285() {
        var __$r__$286;
        var __$l0__$287 = __$ctx.__$a1;
        __$ctx.__$a1 = __$ctx.__$a1 | 2048;
        __$r__$286 = applyc(__$ctx, __$ref);
        __$ctx.__$a1 = __$l0__$287;
        return __$r__$286;
    }(), attrs__$284);
}

function __$b158(__$ctx, __$ref) {
    var ctx__$288 = __$ctx.ctx, attrs__$289 = {
        role: "button",
        tabindex: ctx__$288.tabIndex,
        id: ctx__$288.id,
        title: ctx__$288.title
    };
    $$mods.disabled && !__$ctx._isRealButton && (attrs__$289["aria-disabled"] = true);
    return attrs__$289;
}

function __$b161(__$ctx, __$ref) {
    var attrs__$127 = {
        role: "menu"
    };
    $$mods.disabled ? attrs__$127["aria-disabled"] = true : attrs__$127.tabindex = 0;
    return attrs__$127;
}

function __$b166(__$ctx, __$ref) {
    var ctx__$169 = __$ctx.ctx, attrs__$170 = {
        role: "link"
    }, tabIndex__$171;
    if (!$$mods.disabled) {
        if (ctx__$169.url) {
            attrs__$170.href = ctx__$169.url;
            tabIndex__$171 = ctx__$169.tabIndex;
        } else {
            tabIndex__$171 = ctx__$169.tabIndex || 0;
        }
    } else {
        attrs__$170["aria-disabled"] = true;
    }
    typeof tabIndex__$171 === "undefined" || (attrs__$170.tabindex = tabIndex__$171);
    ctx__$169.title && (attrs__$170.title = ctx__$169.title);
    ctx__$169.target && (attrs__$170.target = ctx__$169.target);
    return attrs__$170;
}

function __$b167(__$ctx, __$ref) {
    var mods__$119 = $$mods, menuMode__$120 = __$ctx._menuMods && __$ctx._menuMods.mode, role__$121 = menuMode__$120 ? menuMode__$120 === "check" ? "menuitemcheckbox" : "menuitemradio" : "menuitem", attrs__$122 = {
        role: role__$121,
        id: __$ctx.generateId(),
        "aria-disabled": mods__$119.disabled,
        "aria-checked": menuMode__$120 && !!mods__$119.checked
    };
    return attrs__$122;
}

function __$b170(__$ctx, __$ref) {
    var input__$151 = __$ctx._input, attrs__$152 = {
        id: input__$151.id,
        name: input__$151.name,
        value: input__$151.val,
        maxlength: input__$151.maxLength,
        tabindex: input__$151.tabIndex,
        placeholder: input__$151.placeholder
    };
    input__$151.autocomplete === false && (attrs__$152.autocomplete = "off");
    $$mods.disabled && (attrs__$152.disabled = "disabled");
    return attrs__$152;
}

function __$b171(__$ctx, __$ref) {
    var ctx__$159 = __$ctx.ctx;
    return __$ctx.extend(function __$lb__$160() {
        var __$r__$161;
        var __$l0__$162 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 33554432;
        __$r__$161 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$162;
        return __$r__$161;
    }(), {
        role: undefined,
        src: ctx__$159.url,
        width: ctx__$159.width,
        height: ctx__$159.height,
        alt: ctx__$159.alt,
        title: ctx__$159.title
    });
}

function __$b177(__$ctx, __$ref) {
    var attrs__$253 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$254 = __$ctx.ctx;
    attrs__$253.name = ctx__$254.name;
    attrs__$253.value = ctx__$254.val;
    ctx__$254.checked && (attrs__$253.checked = "checked");
    ctx__$254.disabled && (attrs__$253.disabled = "disabled");
    return attrs__$253;
}

function __$b178(__$ctx, __$ref) {
    var attrs__$271 = {
        type: "file"
    }, attach__$272 = __$ctx._attach;
    if (attach__$272) {
        attrs__$271.name = attach__$272.name;
        attach__$272.mods && attach__$272.mods.disabled && (attrs__$271.disabled = "disabled");
        attach__$272.tabIndex && (attrs__$271.tabindex = attach__$272.tabIndex);
    }
    return attrs__$271;
}

function __$b179(__$ctx, __$ref) {
    var attrs__$276 = {}, url__$277 = __$ctx.ctx.url;
    if (url__$277) attrs__$276.style = "background-image:url(" + url__$277 + ")";
    return attrs__$276;
}

function __$b180(__$ctx, __$ref) {
    var attrs__$321 = {};
    if (__$ctx.ctx.url) {
        attrs__$321.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$321.nonce = __$ctx._nonceCsp;
    }
    return attrs__$321;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "textarea") {
        if (!$$elem) {
            return __$ctx.ctx.val;
        }
    } else if (__$t === "radio") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b3(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio") {
            return [ {
                elem: "text",
                content: __$ctx._checkedOption.text
            } ];
        }
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio") {
                    if ((__$ctx.__$a0 & 1) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOption.val
                        }, function __$lb__$2() {
                            var __$r__$3;
                            var __$l0__$4 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 1;
                            __$r__$3 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$4;
                            return __$r__$3;
                        }() ];
                    }
                } else if (__$t === "radio-check") {
                    if (__$ctx._checkedOptions[0] && (__$ctx.__$a0 & 4) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOptions[0].val
                        }, function __$lb__$13() {
                            var __$r__$14;
                            var __$l0__$15 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4;
                            __$r__$14 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$15;
                            return __$r__$14;
                        }() ];
                    }
                }
            }
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio-check") {
            return [ {
                elem: "text",
                content: (__$ctx._checkedOptions[0] || __$ctx._select).text
            } ];
        }
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b8(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "check") {
            var __$r = __$b9(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!$$elem) {
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    target: "anchor",
                    theme: $$mods.theme,
                    autoclosable: true
                },
                directions: [ "bottom-left", "bottom-right", "top-left", "top-right" ],
                content: {
                    block: $$block,
                    mods: $$mods,
                    elem: "menu"
                }
            } ];
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (__$ctx._attach && (__$ctx.__$a1 & 512) === 0) {
                return [ {
                    block: "attach",
                    elem: "control"
                }, function __$lb__$273() {
                    var __$r__$274;
                    var __$l0__$275 = __$ctx.__$a1;
                    __$ctx.__$a1 = __$ctx.__$a1 | 512;
                    __$r__$274 = applyc(__$ctx, __$ref);
                    __$ctx.__$a1 = __$l0__$275;
                    return __$r__$274;
                }() ];
            }
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b13(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 131072) === 0) {
            return [ {
                elem: "group-title",
                attrs: {
                    role: "presentation",
                    id: __$ctx.generateId()
                },
                content: __$ctx.ctx.title
            }, function __$lb__$110() {
                var __$r__$111;
                var __$l0__$112 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                __$r__$111 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$112;
                return __$r__$111;
            }() ];
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            var __$r = __$b15(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "progressbar") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            return {
                elem: "bar",
                attrs: {
                    style: "width:" + __$ctx._val + "%"
                }
            };
        }
    } else if (__$t === "modal") {
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            return {
                elem: "table",
                content: {
                    elem: "cell",
                    content: {
                        elem: "content",
                        content: function __$lb__$95() {
                            var __$r__$96;
                            var __$l0__$97 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                            __$r__$96 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$97;
                            return __$r__$96;
                        }()
                    }
                }
            };
        }
    } else if (__$t === "input") {
        if ($$elem === "box" && $$mods && $$mods["has-clear"] === true) {
            return [ __$ctx.ctx.content, {
                elem: "clear"
            } ];
        }
        if (!$$elem) {
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b21(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b22(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b23(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "attach") {
        if (!$$elem) {
            var __$r = __$b24(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if ($$elem === "conditional-comment" && (__$ctx.__$a1 & 16384) === 0) {
            var __$r = __$b25(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!$$elem && (__$ctx.__$a1 & 262144) === 0) {
            return [ function __$lb__$339() {
                var __$r__$340;
                var __$l0__$341 = __$ctx.__$a1;
                __$ctx.__$a1 = __$ctx.__$a1 | 262144;
                __$r__$340 = applyc(__$ctx, __$ref);
                __$ctx.__$a1 = __$l0__$341;
                return __$r__$340;
            }(), __$ctx.ctx.scripts ];
        }
    } else if (__$t === "ua") {
        if (!$$elem && (__$ctx.__$a1 & 32768) === 0) {
            return [ function __$lb__$318() {
                var __$r__$319;
                var __$l0__$320 = __$ctx.__$a1;
                __$ctx.__$a1 = __$ctx.__$a1 | 32768;
                __$r__$319 = applyc(__$ctx, __$ref);
                __$ctx.__$a1 = __$l0__$320;
                return __$r__$319;
            }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
        }
    }
    return __$ctx.ctx.content;
    if ($$block === "ua" && !$$elem) {
        return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
    }
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "textarea") {
        if (!$$elem) {
            return "textarea";
        }
    } else if (__$t === "spin") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "text") {
            return "span";
        } else if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            return "input";
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "link") {
                return "a";
            }
            if (__$ctx._attach) {
                return "span";
            }
        }
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && !__$ctx.ctx.url && $$mods["pseudo"] === true) {
                return "span";
            }
            return "a";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        } else if (__$t === "clear") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "image") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content === "undefined") {
                return "img";
            }
            return "span";
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "checkbox") {
        var __$t = $$elem;
        if (__$t === "text") {
            return "span";
        } else if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "attach") {
        var __$t = $$elem;
        if (__$t === "text") {
            return "span";
        } else if (__$t === "control") {
            return "input";
        } else if (__$t === "clear") {
            return "span";
        } else if (__$t === "file") {
            return "span";
        } else if (__$t === "no-file") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "conditional-comment") {
            return false;
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        } else if (__$t === "head") {
            return "head";
        }
        if (!$$elem) {
            return "body";
        }
    }
    return undefined;
    if ($$block === "ua" && !$$elem) {
        return "script";
    }
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "textarea") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "radio") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio-check") {
                    if ((__$ctx.__$a0 & 8) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$16() {
                            var __$r__$17;
                            var __$l0__$18 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 8;
                            __$r__$17 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$18;
                            return __$r__$17;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "check") {
                    if ((__$ctx.__$a0 & 32) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$24() {
                            var __$r__$25;
                            var __$l0__$26 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 32;
                            __$r__$25 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$26;
                            return __$r__$25;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 512) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$54() {
                        var __$r__$55;
                        var __$l0__$56 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 512;
                        __$r__$55 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$56;
                        return __$r__$55;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b88(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                if ($$mods && $$mods["type"] === "link" && $$mods["disabled"] === true && (__$ctx.__$a1 & 32) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$257() {
                        var __$r__$258;
                        var __$l0__$259 = __$ctx.__$a1;
                        __$ctx.__$a1 = __$ctx.__$a1 | 32;
                        __$r__$258 = applyc(__$ctx, __$ref);
                        __$ctx.__$a1 = __$l0__$259;
                        return __$r__$258;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                if ($$mods["focused"] === true && (__$ctx.__$a1 & 1024) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$278() {
                        var __$r__$279;
                        var __$l0__$280 = __$ctx.__$a1;
                        __$ctx.__$a1 = __$ctx.__$a1 | 1024;
                        __$r__$279 = applyc(__$ctx, __$ref);
                        __$ctx.__$a1 = __$l0__$280;
                        return __$r__$279;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            return true;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 524288) === 0) {
                var __$r = __$ctx.extend(function __$lb__$116() {
                    var __$r__$117;
                    var __$l0__$118 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
                    __$r__$117 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$118;
                    return __$r__$117;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "progressbar") {
        if (!$$elem) {
            return {
                val: __$ctx._val
            };
        }
    } else if (__$t === "modal") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 134217728) === 0) {
                var __$r = __$ctx.extend(function __$lb__$166() {
                    var __$r__$167;
                    var __$l0__$168 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 134217728;
                    __$r__$167 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$168;
                    return __$r__$167;
                }(), {
                    url: __$ctx.ctx.url
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                val: __$ctx.ctx.val
            };
        }
    } else if (__$t === "input") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "dropdown") {
        if (!$$elem) {
            return {
                id: __$ctx.generateId()
            };
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b102(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "checkbox") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "attach") {
        if (!$$elem) {
            return true;
        }
    }
    return undefined;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 2) === 0) {
        var __$r = __$b107(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    var __$t = $$elem;
    if (__$t === "button") {
        if ((__$ctx.__$a0 & 128) === 0) {
            var __$r__$38;
            var __$l0__$39 = __$ctx._selectTextId;
            __$ctx._selectTextId = __$ctx.generateId();
            var __$r__$41;
            var __$l1__$42 = __$ctx.__$a0;
            __$ctx.__$a0 = __$ctx.__$a0 | 128;
            __$r__$41 = applyc(__$ctx, __$ref);
            __$ctx.__$a0 = __$l1__$42;
            __$r__$38 = __$r__$41;
            __$ctx._selectTextId = __$l0__$39;
            var __$r = __$r__$38;
            if (__$r !== __$ref) return __$r;
        }
        if ((__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b109(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ((__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b110(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 1024) === 0) {
        var __$r = __$b111(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    return __$ref;
}

function __$g4(__$ctx, __$ref) {
    var __$t = $$elem;
    if (__$t === "switcher") {
        var __$t = $$mods;
        if (__$t) {
            var __$t = $$mods["switcher"];
            if (__$t === "button") {
                if ((__$ctx.__$a1 & 1) === 0) {
                    var __$r = __$b122(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            } else if (__$t === "link") {
                if ((__$ctx.__$a0 & 536870912) === 0) {
                    var __$r = __$b123(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if ((__$ctx.__$a1 & 4) === 0) {
            var __$r = __$b124(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "popup") {
        if ((__$ctx.__$a1 & 2) === 0) {
            var __$r = __$b125(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$t = !$$elem;
    if (__$t) {
        if ((__$ctx.__$a1 & 8) === 0) {
            var __$r = __$b126(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ((__$ctx.__$a1 & 16) === 0) {
            var __$r__$241;
            var __$l0__$242 = $$mode;
            $$mode = "";
            var __$l1__$243 = __$ctx.ctx;
            __$ctx.ctx = [ {
                elem: "switcher"
            }, {
                elem: "popup"
            } ];
            var __$r__$245;
            var __$l2__$246 = __$ctx.__$a1;
            __$ctx.__$a1 = __$ctx.__$a1 | 16;
            __$r__$245 = applyc(__$ctx, __$ref);
            __$ctx.__$a1 = __$l2__$246;
            __$r__$241 = __$r__$245;
            $$mode = __$l0__$242;
            __$ctx.ctx = __$l1__$243;
            var __$r = __$r__$241;
            if (__$r !== __$ref) return __$r;
        }
    }
    return __$ref;
}

function __$g5(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a1 & 4096) === 0) {
            var __$r = __$b112(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && __$ctx._firstItem && __$ctx._checkedItems && !__$ctx._checkedItems.length && (__$ctx.__$a0 & 65536) === 0) {
                var __$r = __$b113(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 2097152) === 0) {
                var __$r = __$b114(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "radio-group") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio-check" && (__$ctx.__$a0 & 2048) === 0) {
            var __$r = __$b115(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "progressbar") {
        if (!$$elem && (__$ctx.__$a0 & 4096) === 0) {
            var __$r__$90;
            var __$l0__$91 = __$ctx._val;
            __$ctx._val = __$ctx.ctx.val || 0;
            var __$r__$93;
            var __$l1__$94 = __$ctx.__$a0;
            __$ctx.__$a0 = __$ctx.__$a0 | 4096;
            __$r__$93 = applyc(__$ctx, __$ref);
            __$ctx.__$a0 = __$l1__$94;
            __$r__$90 = __$r__$93;
            __$ctx._val = __$l0__$91;
            var __$r = __$r__$90;
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if (__$ctx._menuItemDisabled && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b117(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 268435456) === 0) {
                var __$r = __$b118(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods && $$mods["type"] === "link" && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && (__$ctx.__$a0 & 32768) === 0) {
                var __$r__$102;
                var __$l0__$103 = __$ctx._menuItemDisabled;
                __$ctx._menuItemDisabled = true;
                var __$r__$105;
                var __$l1__$106 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                __$r__$105 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l1__$106;
                __$r__$102 = __$r__$105;
                __$ctx._menuItemDisabled = __$l0__$103;
                var __$r = __$r__$102;
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuMods && (__$ctx.__$a0 & 1048576) === 0) {
                var __$r = __$b120(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 16777216) === 0) {
            var __$r__$154;
            var __$l0__$155 = __$ctx._input;
            __$ctx._input = __$ctx.ctx;
            var __$r__$157;
            var __$l1__$158 = __$ctx.__$a0;
            __$ctx.__$a0 = __$ctx.__$a0 | 16777216;
            __$r__$157 = applyc(__$ctx, __$ref);
            __$ctx.__$a0 = __$l1__$158;
            __$r__$154 = __$r__$157;
            __$ctx._input = __$l0__$155;
            var __$r = __$r__$154;
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "dropdown") {
        var __$r = __$g4(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attach") {
        if (!$$elem && (__$ctx.__$a1 & 8192) === 0) {
            var __$r__$305;
            var __$l0__$306 = __$ctx._attach;
            __$ctx._attach = __$ctx.ctx;
            var __$r__$308;
            var __$l1__$309 = __$ctx.__$a1;
            __$ctx.__$a1 = __$ctx.__$a1 | 8192;
            __$r__$308 = applyc(__$ctx, __$ref);
            __$ctx.__$a1 = __$l1__$309;
            __$r__$305 = __$r__$308;
            __$ctx._attach = __$l0__$306;
            var __$r = __$r__$305;
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = __$ctx.ctx.hasOwnProperty("ie");
            if (__$t) {
                if (__$ctx.ctx.ie === true && (__$ctx.__$a1 & 65536) === 0) {
                    var __$r = __$b129(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if ((__$ctx.__$a1 & 131072) === 0) {
                    var __$r = __$b130(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._pageInit && (__$ctx.__$a1 & 524288) === 0) {
            var __$r = __$b131(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "i-bem") {
        if ($$elem === "i18n") {
            var __$r = __$b132(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b133(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$wrapThis(ctx) {
    ctx._mode = $$mode;
    ctx.block = $$block;
    ctx.elem = $$elem;
    ctx.elemMods = $$elemMods;
    ctx.mods = $$mods;
    return ctx;
}


    return exports;
};

var defineAsGlobal = true;
if(typeof module === "object" && typeof module.exports === "object") {
    exports["BEMHTML"] = buildBemXjst({}, {});
    defineAsGlobal = false;
}
if(typeof modules === "object") {
    modules.define("BEMHTML", [], function(provide) {
        provide(buildBemXjst({}, {}));
    });
    defineAsGlobal = false;
}
if(defineAsGlobal) {
    global["BEMHTML"] = buildBemXjst({}, {});
}
})(this);