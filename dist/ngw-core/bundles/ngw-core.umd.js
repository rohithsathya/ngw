(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngw-core', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngw-core'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    // @Injectable({
    //   providedIn: 'root'
    // })
    var HelperService = /** @class */ (function () {
        function HelperService() {
            this.themeColors = ['default', 'primary', 'secondary', 'success', 'error', 'warning'];
            this.defaultColor = this.themeColors[0];
        }
        /**
         * checks if the given theme color is valid theme color or not, if invalid returns default theme color
         * @param color theme color to be validated
         * @returns returns a valid theme color, if invalid returns 'default'
         */
        HelperService.prototype.sanitizeThemeColor = function (color) {
            return this.themeColors.indexOf(color.toLowerCase()) > -1 ? color.toLowerCase() : this.defaultColor;
        };
        /**
         * returns the css color variable for the theme color(default,primary...) otherwise returns the same value
         * @param color color to be sanitized
         * @returns sanitized color
         */
        HelperService.prototype.sanitizeColor = function (color) {
            var colorLC = color ? color.toLowerCase() : '';
            var themeColor = this.themeColors.find(function (tc) {
                return colorLC.indexOf(tc) >= 0;
            });
            return themeColor ? "var(--ngw-" + colorLC + ")" : colorLC;
        };
        /**
        * Apply the given style poperty to given element.
        * @param el Element for which style needs to be applied
        * @param propertyName style porperty that needs to be set
        * @param propertyValue style value that need to be set
        */
        HelperService.prototype.applyStyle = function (el, propertyName, propertyValue) {
            el.nativeElement.style[propertyName] = propertyValue;
        };
        /**
         * sanitize and Apply the given style poperty to given element.
         * @param el Element for which style needs to be applied
         * @param propertyName style porperty that needs to be set
         * @param propertyValue style value that need to be set
         */
        HelperService.prototype.sanitizeAndApplyStyle = function (el, propertyName, propertyValue) {
            el.nativeElement.style[propertyName] = this.sanitizeColor(propertyValue);
        };
        /**
         * Extracts and returns CSS style obj for given css properties from the given HTML Element
         * @param el Element from which styles needs to be extracted
         * @param props Style properties to be extracted
         * @returns style object for given style properties
         */
        HelperService.prototype.getStyleObject = function (el, props) {
            var styleObj = {};
            props.forEach(function (prop, i) {
                styleObj[prop] = el.nativeElement.style[prop];
            });
            return styleObj;
        };
        /**
         * sets the style of the HTML element with given style
         * @param el HTML element for which style needs to be set
         * @param props set of CSS style proeprties
         * @param styleObj CSS styles with values to be set
         */
        HelperService.prototype.setStyleObject = function (el, props, styleObj) {
            props.forEach(function (prop, i) {
                el.nativeElement.style[prop] = styleObj[prop];
            });
        };
        HelperService.prototype.sanitizeShadowValue = function (shadow) {
            var shdowToApply;
            if (shadow == "1") {
                shdowToApply = '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)';
            }
            else if (shadow == "2") {
                shdowToApply = '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)';
            }
            else if (shadow == "3") {
                shdowToApply = '0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)';
            }
            else if (shadow == "4") {
                shdowToApply = '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)';
            }
            else if (shadow == "5") {
                shdowToApply = '0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%)';
            }
            else {
                shdowToApply = shadow;
            }
            return shdowToApply;
        };
        return HelperService;
    }());
    HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
    HelperService.ɵprov = i0.ɵɵdefineInjectable({ token: HelperService, factory: HelperService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HelperService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var BgColorDirective = /** @class */ (function () {
        function BgColorDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.bgColor = '';
        }
        BgColorDirective.prototype.ngOnChanges = function (changes) {
            if (changes.bgColor) {
                this.apply();
            }
        };
        BgColorDirective.prototype.apply = function () {
            this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.bgColor);
        };
        return BgColorDirective;
    }());
    BgColorDirective.ɵfac = function BgColorDirective_Factory(t) { return new (t || BgColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    BgColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: BgColorDirective, selectors: [["", "bgColor", ""]], inputs: { bgColor: "bgColor" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BgColorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[bgColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { bgColor: [{
                    type: i0.Input
                }] });
    })();

    var BorderDirective = /** @class */ (function () {
        function BorderDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.border = '';
            this.borderWidth = '';
            this.borderColor = '';
            this.borderStyle = '';
        }
        BorderDirective.prototype.ngOnChanges = function (changes) {
            if (changes.border) {
                this.helper.applyStyle(this.el, 'border', this.border);
            }
            if (changes.borderColor) {
                this.helper.sanitizeAndApplyStyle(this.el, 'borderColor', this.borderColor);
            }
            if (changes.borderWidth) {
                this.helper.applyStyle(this.el, 'borderWidth', this.borderWidth);
            }
            if (changes.borderStyle) {
                this.helper.applyStyle(this.el, 'borderStyle', this.borderStyle);
            }
        };
        return BorderDirective;
    }());
    BorderDirective.ɵfac = function BorderDirective_Factory(t) { return new (t || BorderDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    BorderDirective.ɵdir = i0.ɵɵdefineDirective({ type: BorderDirective, selectors: [["", "border", ""], ["", "border.width", ""], ["", "border.color", ""], ["", "border.style", ""]], inputs: { border: "border", borderWidth: ["border.width", "borderWidth"], borderColor: ["border.color", "borderColor"], borderStyle: ["border.style", "borderStyle"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BorderDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[border],[border.width],[border.color],[border.style]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { border: [{
                    type: i0.Input,
                    args: ['border']
                }], borderWidth: [{
                    type: i0.Input,
                    args: ['border.width']
                }], borderColor: [{
                    type: i0.Input,
                    args: ['border.color']
                }], borderStyle: [{
                    type: i0.Input,
                    args: ['border.style']
                }] });
    })();

    var EllipsisDirective = /** @class */ (function () {
        function EllipsisDirective(el) {
            this.el = el;
        }
        EllipsisDirective.prototype.ngAfterViewInit = function () {
            this.el.nativeElement.classList.add("ngw-ellipsis");
        };
        return EllipsisDirective;
    }());
    EllipsisDirective.ɵfac = function EllipsisDirective_Factory(t) { return new (t || EllipsisDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    EllipsisDirective.ɵdir = i0.ɵɵdefineDirective({ type: EllipsisDirective, selectors: [["", "ellipsis", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EllipsisDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ellipsis]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, null);
    })();

    var FitDirective = /** @class */ (function () {
        function FitDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.fit = ''; //valid options : contain,cover,fill,none,scale-down
        }
        FitDirective.prototype.ngOnChanges = function (changes) {
            if (changes.fit) {
                this.helper.applyStyle(this.el, 'objectFit', this.fit);
            }
        };
        return FitDirective;
    }());
    FitDirective.ɵfac = function FitDirective_Factory(t) { return new (t || FitDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    FitDirective.ɵdir = i0.ɵɵdefineDirective({ type: FitDirective, selectors: [["", "fit", ""]], inputs: { fit: "fit" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FitDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[fit]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { fit: [{
                    type: i0.Input,
                    args: ['fit']
                }] });
    })();

    var FontSizeDirective = /** @class */ (function () {
        function FontSizeDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.fontSize = '';
        }
        FontSizeDirective.prototype.ngOnChanges = function (changes) {
            if (changes.fontSize) {
                this.helper.applyStyle(this.el, 'fontSize', this.fontSize);
            }
        };
        return FontSizeDirective;
    }());
    FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    FontSizeDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontSizeDirective, selectors: [["", "fontSize", ""]], inputs: { fontSize: "fontSize" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[fontSize]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { fontSize: [{
                    type: i0.Input,
                    args: ['fontSize']
                }] });
    })();

    var FontWeightDirective = /** @class */ (function () {
        function FontWeightDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.fontWeight = '';
        }
        FontWeightDirective.prototype.ngOnChanges = function (changes) {
            if (changes.fontWeight) {
                this.helper.applyStyle(this.el, 'fontWeight', this.fontWeight);
            }
        };
        return FontWeightDirective;
    }());
    FontWeightDirective.ɵfac = function FontWeightDirective_Factory(t) { return new (t || FontWeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    FontWeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontWeightDirective, selectors: [["", "fontWeight", ""]], inputs: { fontWeight: "fontWeight" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[fontWeight]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { fontWeight: [{
                    type: i0.Input,
                    args: ['fontWeight']
                }] });
    })();

    var GradientBgColorDirective = /** @class */ (function () {
        function GradientBgColorDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.gradientBgColor = '';
        }
        GradientBgColorDirective.prototype.ngOnChanges = function (changes) {
            if (changes.gradientBgColor) {
                this.gradientBgColor = this.helper.sanitizeThemeColor(this.gradientBgColor);
                var biValue = "linear-gradient(to right, var(--ngw-" + this.gradientBgColor + "-600),var(--ngw-" + this.gradientBgColor + "-500),var(--ngw-" + this.gradientBgColor + "-400,rgba(91,33,182,0)))";
                this.helper.applyStyle(this.el, 'backgroundImage', biValue);
            }
        };
        return GradientBgColorDirective;
    }());
    GradientBgColorDirective.ɵfac = function GradientBgColorDirective_Factory(t) { return new (t || GradientBgColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    GradientBgColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: GradientBgColorDirective, selectors: [["", "gradientBgColor", ""]], inputs: { gradientBgColor: "gradientBgColor" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GradientBgColorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[gradientBgColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { gradientBgColor: [{
                    type: i0.Input,
                    args: ['gradientBgColor']
                }] });
    })();

    var HeightDirective = /** @class */ (function () {
        function HeightDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.height = '';
        }
        HeightDirective.prototype.ngOnChanges = function (changes) {
            if (changes.height) {
                this.helper.applyStyle(this.el, 'height', this.height);
            }
        };
        return HeightDirective;
    }());
    HeightDirective.ɵfac = function HeightDirective_Factory(t) { return new (t || HeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    HeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: HeightDirective, selectors: [["", "height", ""]], inputs: { height: "height" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeightDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[height]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { height: [{
                    type: i0.Input,
                    args: ['height']
                }] });
    })();

    var MarginDirective = /** @class */ (function () {
        function MarginDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.margin = '';
            this.marginTop = '';
            this.marginLeft = '';
            this.marginBottom = '';
            this.marginRight = '';
            this.marginX = '';
            this.marginY = '';
        }
        MarginDirective.prototype.ngOnChanges = function (changes) {
            if (changes.margin) {
                this.helper.applyStyle(this.el, 'margin', this.margin);
            }
            if (changes.marginTop) {
                this.helper.applyStyle(this.el, 'marginTop', this.marginTop);
            }
            if (changes.marginLeft) {
                this.helper.applyStyle(this.el, 'marginLeft', this.marginLeft);
            }
            if (changes.marginBottom) {
                this.helper.applyStyle(this.el, 'marginBottom', this.marginBottom);
            }
            if (changes.marginRight) {
                this.helper.applyStyle(this.el, 'marginRight', this.marginRight);
            }
            if (changes.marginX) {
                this.helper.applyStyle(this.el, 'marginLeft', this.marginX);
                this.helper.applyStyle(this.el, 'marginRight', this.marginX);
            }
            if (changes.marginY) {
                this.helper.applyStyle(this.el, 'marginTop', this.marginY);
                this.helper.applyStyle(this.el, 'marginBottom', this.marginY);
            }
        };
        return MarginDirective;
    }());
    MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    MarginDirective.ɵdir = i0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "margin", ""], ["", "margin.top", ""], ["", "margin.left", ""], ["", "margin.bottom", ""], ["", "margin.right", ""], ["", "margin.x", ""], ["", "margin.y", ""]], inputs: { margin: "margin", marginTop: ["margin.top", "marginTop"], marginLeft: ["margin.left", "marginLeft"], marginBottom: ["margin.bottom", "marginBottom"], marginRight: ["margin.right", "marginRight"], marginX: ["margin.x", "marginX"], marginY: ["margin.y", "marginY"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarginDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { margin: [{
                    type: i0.Input,
                    args: ['margin']
                }], marginTop: [{
                    type: i0.Input,
                    args: ['margin.top']
                }], marginLeft: [{
                    type: i0.Input,
                    args: ['margin.left']
                }], marginBottom: [{
                    type: i0.Input,
                    args: ['margin.bottom']
                }], marginRight: [{
                    type: i0.Input,
                    args: ['margin.right']
                }], marginX: [{
                    type: i0.Input,
                    args: ['margin.x']
                }], marginY: [{
                    type: i0.Input,
                    args: ['margin.y']
                }] });
    })();

    var PaddingDirective = /** @class */ (function () {
        function PaddingDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.padding = '';
            this.paddingTop = '';
            this.paddingLeft = '';
            this.paddingBottom = '';
            this.paddingRight = '';
            this.paddingX = '';
            this.paddingY = '';
        }
        PaddingDirective.prototype.ngOnChanges = function (changes) {
            if (changes.padding) {
                this.helper.applyStyle(this.el, 'padding', this.padding);
            }
            if (changes.paddingTop) {
                this.helper.applyStyle(this.el, 'paddingTop', this.paddingTop);
            }
            if (changes.paddingLeft) {
                this.helper.applyStyle(this.el, 'paddingLeft', this.paddingLeft);
            }
            if (changes.paddingBottom) {
                this.helper.applyStyle(this.el, 'paddingBottom', this.paddingBottom);
            }
            if (changes.paddingRight) {
                this.helper.applyStyle(this.el, 'paddingRight', this.paddingRight);
            }
            if (changes.paddingX) {
                this.helper.applyStyle(this.el, 'paddingLeft', this.paddingX);
                this.helper.applyStyle(this.el, 'paddingRight', this.paddingX);
            }
            if (changes.paddingY) {
                this.helper.applyStyle(this.el, 'paddingTop', this.paddingY);
                this.helper.applyStyle(this.el, 'paddingBottom', this.paddingY);
            }
        };
        return PaddingDirective;
    }());
    PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    PaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "padding", ""], ["", "padding.top", ""], ["", "padding.left", ""], ["", "padding.bottom", ""], ["", "padding.right", ""], ["", "padding.x", ""], ["", "padding.y", ""]], inputs: { padding: "padding", paddingTop: ["padding.top", "paddingTop"], paddingLeft: ["padding.left", "paddingLeft"], paddingBottom: ["padding.bottom", "paddingBottom"], paddingRight: ["padding.right", "paddingRight"], paddingX: ["padding.x", "paddingX"], paddingY: ["padding.y", "paddingY"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { padding: [{
                    type: i0.Input,
                    args: ['padding']
                }], paddingTop: [{
                    type: i0.Input,
                    args: ['padding.top']
                }], paddingLeft: [{
                    type: i0.Input,
                    args: ['padding.left']
                }], paddingBottom: [{
                    type: i0.Input,
                    args: ['padding.bottom']
                }], paddingRight: [{
                    type: i0.Input,
                    args: ['padding.right']
                }], paddingX: [{
                    type: i0.Input,
                    args: ['padding.x']
                }], paddingY: [{
                    type: i0.Input,
                    args: ['padding.y']
                }] });
    })();

    var PositionDirective = /** @class */ (function () {
        function PositionDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.position = '';
        }
        PositionDirective.prototype.ngOnChanges = function (changes) {
            if (changes.position) {
                this.helper.applyStyle(this.el, 'position', this.position);
            }
        };
        return PositionDirective;
    }());
    PositionDirective.ɵfac = function PositionDirective_Factory(t) { return new (t || PositionDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    PositionDirective.ɵdir = i0.ɵɵdefineDirective({ type: PositionDirective, selectors: [["", "position", ""]], inputs: { position: "position" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PositionDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[position]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { position: [{
                    type: i0.Input,
                    args: ['position']
                }] });
    })();

    var RadiusDirective = /** @class */ (function () {
        function RadiusDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.radius = '';
            this.radiusTopLeft = '';
            this.radiusTopRight = '';
            this.radiusBottomLeft = '';
            this.radiusBottomRight = '';
        }
        RadiusDirective.prototype.ngOnChanges = function (changes) {
            changes.radius ? this.helper.applyStyle(this.el, 'borderRadius', this.radius) : '';
            changes.radiusTopLeft ? this.helper.applyStyle(this.el, 'borderTopLeftRadius', this.radiusTopLeft) : '';
            changes.radiusTopRight ? this.helper.applyStyle(this.el, 'borderTopRightRadius', this.radiusTopRight) : '';
            changes.radiusBottomLeft ? this.helper.applyStyle(this.el, 'borderBottomLeftRadius', this.radiusBottomLeft) : '';
            changes.radiusBottomRight ? this.helper.applyStyle(this.el, 'borderBottomRightRadius', this.radiusBottomRight) : '';
        };
        return RadiusDirective;
    }());
    RadiusDirective.ɵfac = function RadiusDirective_Factory(t) { return new (t || RadiusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    RadiusDirective.ɵdir = i0.ɵɵdefineDirective({ type: RadiusDirective, selectors: [["", "radius", ""], ["", "radius.topLeft", ""], ["", "radius.topRadius", ""], ["", "radius.bottomLeft", ""], ["", "radius.bottomRight", ""]], inputs: { radius: "radius", radiusTopLeft: ["radius.topLeft", "radiusTopLeft"], radiusTopRight: ["radius.topRight", "radiusTopRight"], radiusBottomLeft: ["radius.bottomLeft", "radiusBottomLeft"], radiusBottomRight: ["radius.bottomRight", "radiusBottomRight"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadiusDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { radius: [{
                    type: i0.Input,
                    args: ['radius']
                }], radiusTopLeft: [{
                    type: i0.Input,
                    args: ['radius.topLeft']
                }], radiusTopRight: [{
                    type: i0.Input,
                    args: ['radius.topRight']
                }], radiusBottomLeft: [{
                    type: i0.Input,
                    args: ['radius.bottomLeft']
                }], radiusBottomRight: [{
                    type: i0.Input,
                    args: ['radius.bottomRight']
                }] });
    })();

    var ShadowDirective = /** @class */ (function () {
        function ShadowDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.shadow = '';
        }
        ShadowDirective.prototype.ngOnChanges = function (changes) {
            if (changes.shadow) {
                var shdowToApply = this.helper.sanitizeShadowValue(this.shadow);
                this.helper.applyStyle(this.el, 'boxShadow', shdowToApply);
            }
        };
        return ShadowDirective;
    }());
    ShadowDirective.ɵfac = function ShadowDirective_Factory(t) { return new (t || ShadowDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    ShadowDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShadowDirective, selectors: [["", "shadow", ""]], inputs: { shadow: "shadow" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShadowDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[shadow]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { shadow: [{
                    type: i0.Input,
                    args: ['shadow']
                }] });
    })();

    var TextColorDirective = /** @class */ (function () {
        function TextColorDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.textColor = '';
        }
        TextColorDirective.prototype.ngOnChanges = function (changes) {
            changes.textColor ? this.helper.sanitizeAndApplyStyle(this.el, 'color', this.textColor) : '';
        };
        return TextColorDirective;
    }());
    TextColorDirective.ɵfac = function TextColorDirective_Factory(t) { return new (t || TextColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    TextColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: TextColorDirective, selectors: [["", "textColor", ""]], inputs: { textColor: "textColor" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextColorDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[textColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { textColor: [{
                    type: i0.Input,
                    args: ['textColor']
                }] });
    })();

    var WidthDirective = /** @class */ (function () {
        function WidthDirective(el, helper) {
            this.el = el;
            this.helper = helper;
        }
        WidthDirective.prototype.ngOnChanges = function (changes) {
            changes.width ? this.helper.applyStyle(this.el, 'width', this.width) : '';
        };
        return WidthDirective;
    }());
    WidthDirective.ɵfac = function WidthDirective_Factory(t) { return new (t || WidthDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    WidthDirective.ɵdir = i0.ɵɵdefineDirective({ type: WidthDirective, selectors: [["", "width", ""]], inputs: { width: "width" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidthDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[width]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { width: [{
                    type: i0.Input,
                    args: ['width']
                }] });
    })();

    var BgColorHoverDirective = /** @class */ (function () {
        function BgColorHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverBgColor = '';
            this.propertiesToSet = ['backgroundColor'];
            this.backupValues = {};
        }
        BgColorHoverDirective.prototype.onMouseEnter = function () {
            if (this.hoverBgColor) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.hoverBgColor);
            }
        };
        BgColorHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return BgColorHoverDirective;
    }());
    BgColorHoverDirective.ɵfac = function BgColorHoverDirective_Factory(t) { return new (t || BgColorHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    BgColorHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: BgColorHoverDirective, selectors: [["", "hover.bgColor", ""]], hostBindings: function BgColorHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function BgColorHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BgColorHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverBgColor: ["hover.bgColor", "hoverBgColor"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BgColorHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.bgColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverBgColor: [{
                    type: i0.Input,
                    args: ['hover.bgColor']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var BorderHoverDirective = /** @class */ (function () {
        function BorderHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverBorder = '';
            this.hoverBorderWidth = '';
            this.hoverBorderColor = '';
            this.hoverBorderStyle = '';
            this.propertiesToSet = ['border', 'borderWidth', 'borderColor', 'borderStyle'];
            this.backupValues = {};
        }
        BorderHoverDirective.prototype.onMouseEnter = function () {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.hoverBorder ? this.helper.applyStyle(this.el, 'border', this.hoverBorder) : '';
            this.hoverBorderWidth ? this.helper.applyStyle(this.el, 'borderWidth', this.hoverBorderWidth) : '';
            this.hoverBorderColor ? this.helper.sanitizeAndApplyStyle(this.el, 'borderColor', this.hoverBorderColor) : '';
            this.hoverBorderStyle ? this.helper.applyStyle(this.el, 'borderStyle', this.hoverBorderStyle) : '';
        };
        BorderHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return BorderHoverDirective;
    }());
    BorderHoverDirective.ɵfac = function BorderHoverDirective_Factory(t) { return new (t || BorderHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    BorderHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: BorderHoverDirective, selectors: [["", "hover.border", ""], ["", "hover.border.width", ""], ["", "hover.border.color", ""], ["", "hover.border.style", ""]], hostBindings: function BorderHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function BorderHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BorderHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverBorder: ["hover.border", "hoverBorder"], hoverBorderWidth: ["hover.border.width", "hoverBorderWidth"], hoverBorderColor: ["hover.border.color", "hoverBorderColor"], hoverBorderStyle: ["hover.border.style", "hoverBorderStyle"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BorderHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverBorder: [{
                    type: i0.Input,
                    args: ['hover.border']
                }], hoverBorderWidth: [{
                    type: i0.Input,
                    args: ['hover.border.width']
                }], hoverBorderColor: [{
                    type: i0.Input,
                    args: ['hover.border.color']
                }], hoverBorderStyle: [{
                    type: i0.Input,
                    args: ['hover.border.style']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var FontSizeHoverDirective = /** @class */ (function () {
        function FontSizeHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverFontSize = '';
            this.propertiesToSet = ['fontSize'];
            this.backupValues = {};
        }
        FontSizeHoverDirective.prototype.onMouseEnter = function () {
            if (this.hoverFontSize) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverFontSize);
            }
        };
        FontSizeHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return FontSizeHoverDirective;
    }());
    FontSizeHoverDirective.ɵfac = function FontSizeHoverDirective_Factory(t) { return new (t || FontSizeHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    FontSizeHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontSizeHoverDirective, selectors: [["", "hover.fontSize", ""]], hostBindings: function FontSizeHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function FontSizeHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontSizeHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverFontSize: ["hover.fontSize", "hoverFontSize"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.fontSize]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverFontSize: [{
                    type: i0.Input,
                    args: ['hover.fontSize']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var FontWeightHoverDirective = /** @class */ (function () {
        function FontWeightHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.propValue = '';
            this.propertiesToSet = ['fontWeight'];
            this.backupValues = {};
        }
        FontWeightHoverDirective.prototype.onMouseEnter = function () {
            if (this.propValue) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
            }
        };
        FontWeightHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return FontWeightHoverDirective;
    }());
    FontWeightHoverDirective.ɵfac = function FontWeightHoverDirective_Factory(t) { return new (t || FontWeightHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    FontWeightHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontWeightHoverDirective, selectors: [["", "hover.fontWeight", ""]], hostBindings: function FontWeightHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function FontWeightHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontWeightHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { propValue: ["hover.fontWeight", "propValue"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.fontWeight]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { propValue: [{
                    type: i0.Input,
                    args: ['hover.fontWeight']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var HeightHoverDirective = /** @class */ (function () {
        function HeightHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.propValue = '';
            this.propertiesToSet = ['height'];
            this.backupValues = {};
        }
        HeightHoverDirective.prototype.onMouseEnter = function () {
            if (this.propValue) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
            }
        };
        HeightHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return HeightHoverDirective;
    }());
    HeightHoverDirective.ɵfac = function HeightHoverDirective_Factory(t) { return new (t || HeightHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    HeightHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: HeightHoverDirective, selectors: [["", "hover.height", ""]], hostBindings: function HeightHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function HeightHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HeightHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { propValue: ["hover.height", "propValue"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeightHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.height]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { propValue: [{
                    type: i0.Input,
                    args: ['hover.height']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var MarginHoverDirective = /** @class */ (function () {
        function MarginHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverMargin = '';
            this.hoverMarginTop = '';
            this.hoverMarginLeft = '';
            this.hoverMarginBottom = '';
            this.hoverMarginRight = '';
            this.hoverMarginX = '';
            this.hoverMarginY = '';
            this.propertiesToSet = ['margin', 'marginTop', 'marginLeft', 'marginBottom', 'marginRight'];
            this.backupValues = {};
        }
        MarginHoverDirective.prototype.onMouseEnter = function () {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            if (this.hoverMarginX) {
                this.hoverMarginLeft = this.hoverMarginX;
                this.hoverMarginRight = this.hoverMarginX;
            }
            if (this.hoverMarginY) {
                this.hoverMarginTop = this.hoverMarginY;
                this.hoverMarginBottom = this.hoverMarginY;
            }
            this.hoverMargin ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverMargin) : '';
            this.hoverMarginTop ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverMarginTop) : '';
            this.hoverMarginLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverMarginLeft) : '';
            this.hoverMarginBottom ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverMarginBottom) : '';
            this.hoverMarginRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverMarginRight) : '';
        };
        MarginHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return MarginHoverDirective;
    }());
    MarginHoverDirective.ɵfac = function MarginHoverDirective_Factory(t) { return new (t || MarginHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    MarginHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: MarginHoverDirective, selectors: [["", "hover.margin", ""], ["", "hover.margin.top", ""], ["", "hover.margin.left", ""], ["", "hover.margin.bottom", ""], ["", "hover.margin.right", ""], ["", "hover.margin.x", ""], ["", "hover.margin.y", ""]], hostBindings: function MarginHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function MarginHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MarginHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverMargin: ["hover.margin", "hoverMargin"], hoverMarginTop: ["hover.margin.top", "hoverMarginTop"], hoverMarginLeft: ["hover.margin.left", "hoverMarginLeft"], hoverMarginBottom: ["hover.margin.bottom", "hoverMarginBottom"], hoverMarginRight: ["hover.margin.right", "hoverMarginRight"], hoverMarginX: ["hover.margin.x", "hoverMarginX"], hoverMarginY: ["hover.margin.y", "hoverMarginY"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarginHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverMargin: [{
                    type: i0.Input,
                    args: ['hover.margin']
                }], hoverMarginTop: [{
                    type: i0.Input,
                    args: ['hover.margin.top']
                }], hoverMarginLeft: [{
                    type: i0.Input,
                    args: ['hover.margin.left']
                }], hoverMarginBottom: [{
                    type: i0.Input,
                    args: ['hover.margin.bottom']
                }], hoverMarginRight: [{
                    type: i0.Input,
                    args: ['hover.margin.right']
                }], hoverMarginX: [{
                    type: i0.Input,
                    args: ['hover.margin.x']
                }], hoverMarginY: [{
                    type: i0.Input,
                    args: ['hover.margin.y']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var PaddingHoverDirective = /** @class */ (function () {
        function PaddingHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverpadding = '';
            this.hoverpaddingTop = '';
            this.hoverpaddingLeft = '';
            this.hoverpaddingBottom = '';
            this.hoverpaddingRight = '';
            this.hoverpaddingX = '';
            this.hoverpaddingY = '';
            this.propertiesToSet = ['padding', 'paddingTop', 'paddingLeft', 'paddingBottom', 'paddingRight'];
            this.backupValues = {};
        }
        PaddingHoverDirective.prototype.onMouseEnter = function () {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            if (this.hoverpaddingX) {
                this.hoverpaddingLeft = this.hoverpaddingX;
                this.hoverpaddingRight = this.hoverpaddingX;
            }
            if (this.hoverpaddingY) {
                this.hoverpaddingTop = this.hoverpaddingY;
                this.hoverpaddingBottom = this.hoverpaddingY;
            }
            this.hoverpadding ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverpadding) : '';
            this.hoverpaddingTop ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverpaddingTop) : '';
            this.hoverpaddingLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverpaddingLeft) : '';
            this.hoverpaddingBottom ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverpaddingBottom) : '';
            this.hoverpaddingRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverpaddingRight) : '';
        };
        PaddingHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return PaddingHoverDirective;
    }());
    PaddingHoverDirective.ɵfac = function PaddingHoverDirective_Factory(t) { return new (t || PaddingHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    PaddingHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingHoverDirective, selectors: [["", "hover.padding", ""], ["", "hover.padding.top", ""], ["", "hover.padding.left", ""], ["", "hover.padding.bottom", ""], ["", "hover.padding.right", ""], ["", "hover.padding.x", ""], ["", "hover.padding.y", ""]], hostBindings: function PaddingHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function PaddingHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function PaddingHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverpadding: ["hover.padding", "hoverpadding"], hoverpaddingTop: ["hover.padding.top", "hoverpaddingTop"], hoverpaddingLeft: ["hover.padding.left", "hoverpaddingLeft"], hoverpaddingBottom: ["hover.padding.bottom", "hoverpaddingBottom"], hoverpaddingRight: ["hover.padding.right", "hoverpaddingRight"], hoverpaddingX: ["hover.padding.x", "hoverpaddingX"], hoverpaddingY: ["hover.padding.y", "hoverpaddingY"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverpadding: [{
                    type: i0.Input,
                    args: ['hover.padding']
                }], hoverpaddingTop: [{
                    type: i0.Input,
                    args: ['hover.padding.top']
                }], hoverpaddingLeft: [{
                    type: i0.Input,
                    args: ['hover.padding.left']
                }], hoverpaddingBottom: [{
                    type: i0.Input,
                    args: ['hover.padding.bottom']
                }], hoverpaddingRight: [{
                    type: i0.Input,
                    args: ['hover.padding.right']
                }], hoverpaddingX: [{
                    type: i0.Input,
                    args: ['hover.padding.x']
                }], hoverpaddingY: [{
                    type: i0.Input,
                    args: ['hover.padding.y']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var RadiusHoverDirective = /** @class */ (function () {
        function RadiusHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.hoverRadius = '';
            this.hoverRadiusTopLeft = '';
            this.hoverRadiusTopRight = '';
            this.hoverRadiusBottomLeft = '';
            this.hoverRadiusBottomRight = '';
            this.propertiesToSet = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'];
            this.backupValues = {};
        }
        RadiusHoverDirective.prototype.onMouseEnter = function () {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.hoverRadius ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverRadius) : '';
            this.hoverRadiusTopLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverRadiusTopLeft) : '';
            this.hoverRadiusTopRight ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverRadiusTopRight) : '';
            this.hoverRadiusBottomLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverRadiusBottomLeft) : '';
            this.hoverRadiusBottomRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverRadiusBottomRight) : '';
        };
        RadiusHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return RadiusHoverDirective;
    }());
    RadiusHoverDirective.ɵfac = function RadiusHoverDirective_Factory(t) { return new (t || RadiusHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    RadiusHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: RadiusHoverDirective, selectors: [["", "hover.radius", ""], ["", "hover.radius.topLeft", ""], ["", "hover.radius.topRight", ""], ["", "hover.radius.bottomLeft", ""], ["", "hover.radius.bottomRight", ""]], hostBindings: function RadiusHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function RadiusHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function RadiusHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { hoverRadius: ["hover.radius", "hoverRadius"], hoverRadiusTopLeft: ["hover.radius.topLeft", "hoverRadiusTopLeft"], hoverRadiusTopRight: ["hover.radius.topRight", "hoverRadiusTopRight"], hoverRadiusBottomLeft: ["hover.radius.bottomLeft", "hoverRadiusBottomLeft"], hoverRadiusBottomRight: ["hover.radius.bottomRight", "hoverRadiusBottomRight"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadiusHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { hoverRadius: [{
                    type: i0.Input,
                    args: ['hover.radius']
                }], hoverRadiusTopLeft: [{
                    type: i0.Input,
                    args: ['hover.radius.topLeft']
                }], hoverRadiusTopRight: [{
                    type: i0.Input,
                    args: ['hover.radius.topRight']
                }], hoverRadiusBottomLeft: [{
                    type: i0.Input,
                    args: ['hover.radius.bottomLeft']
                }], hoverRadiusBottomRight: [{
                    type: i0.Input,
                    args: ['hover.radius.bottomRight']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var ShadowHoverDirective = /** @class */ (function () {
        function ShadowHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.propValue = '';
            this.propertiesToSet = ['boxShadow'];
            this.backupValues = {};
        }
        ShadowHoverDirective.prototype.onMouseEnter = function () {
            if (this.propValue) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                var shdowToApply = this.helper.sanitizeShadowValue(this.propValue);
                this.helper.applyStyle(this.el, this.propertiesToSet[0], shdowToApply);
            }
        };
        ShadowHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return ShadowHoverDirective;
    }());
    ShadowHoverDirective.ɵfac = function ShadowHoverDirective_Factory(t) { return new (t || ShadowHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    ShadowHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShadowHoverDirective, selectors: [["", "hover.shadow", ""]], hostBindings: function ShadowHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function ShadowHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ShadowHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { propValue: ["hover.shadow", "propValue"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShadowHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.shadow]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { propValue: [{
                    type: i0.Input,
                    args: ['hover.shadow']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var TextColorHoverDirective = /** @class */ (function () {
        function TextColorHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.propValue = '';
            this.propertiesToSet = ['color'];
            this.backupValues = {};
        }
        TextColorHoverDirective.prototype.onMouseEnter = function () {
            if (this.propValue) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.sanitizeAndApplyStyle(this.el, this.propertiesToSet[0], this.propValue);
            }
        };
        TextColorHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return TextColorHoverDirective;
    }());
    TextColorHoverDirective.ɵfac = function TextColorHoverDirective_Factory(t) { return new (t || TextColorHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    TextColorHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: TextColorHoverDirective, selectors: [["", "hover.textColor", ""]], hostBindings: function TextColorHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function TextColorHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TextColorHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { propValue: ["hover.textColor", "propValue"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextColorHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.textColor]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { propValue: [{
                    type: i0.Input,
                    args: ['hover.textColor']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var WidthHoverDirective = /** @class */ (function () {
        function WidthHoverDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.propValue = '';
            this.propertiesToSet = ['width'];
            this.backupValues = {};
        }
        WidthHoverDirective.prototype.onMouseEnter = function () {
            if (this.propValue) {
                this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
                this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
            }
        };
        WidthHoverDirective.prototype.onMouseLeave = function () {
            this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
        };
        return WidthHoverDirective;
    }());
    WidthHoverDirective.ɵfac = function WidthHoverDirective_Factory(t) { return new (t || WidthHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    WidthHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: WidthHoverDirective, selectors: [["", "hover.width", ""]], hostBindings: function WidthHoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function WidthHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function WidthHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, inputs: { propValue: ["hover.width", "propValue"] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidthHoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[hover.width]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { propValue: [{
                    type: i0.Input,
                    args: ['hover.width']
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var RowDirective = /** @class */ (function () {
        function RowDirective(el, helper) {
            this.el = el;
            this.helper = helper;
        }
        RowDirective.prototype.ngAfterViewInit = function () {
            this.helper.applyStyle(this.el, 'display', 'flex');
            this.helper.applyStyle(this.el, 'flexDirection', 'row');
            this.helper.applyStyle(this.el, 'flexWrap', 'wrap');
        };
        return RowDirective;
    }());
    RowDirective.ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    RowDirective.ɵdir = i0.ɵɵdefineDirective({ type: RowDirective, selectors: [["", "row", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RowDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[row]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, null);
    })();

    var ColDirective = /** @class */ (function () {
        function ColDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.col = ''; //0-100%, fill
            this.colLg = '';
            this.colMd = '';
            this.colSm = '';
        }
        ColDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.helper.applyStyle(this.el, 'overflow', 'auto');
            this.helper.applyStyle(this.el, 'boxSizing', 'border-box');
            //@ts-ignore
            this.observer = new ResizeObserver(function (entries) {
                var width = entries[0].contentRect.width;
                _this.apply(width);
            });
            //attach resize observer to body element
            var bodyEle = document.getElementsByTagName('body') ? document.getElementsByTagName('body')[0] : null;
            if (bodyEle && this.observer) {
                this.observer.observe(bodyEle);
            }
        };
        ColDirective.prototype.ngOnChanges = function (changes) {
            if (changes.col || changes.colLg || changes.colMd || changes.colSm) {
                window ? this.apply(window.innerWidth) : null;
            }
        };
        ColDirective.prototype.ngOnDestroy = function () {
            var _a;
            try {
                (_a = this.observer) === null || _a === void 0 ? void 0 : _a.unObserve(this.el.nativeElement);
            }
            catch (e) { }
        };
        ColDirective.prototype.apply = function (width) {
            var styleToApply = '';
            if (width <= 600 && this.colSm) {
                styleToApply = this.colSm ? this.colSm : this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
            }
            else if (width <= 959 && this.colSm) {
                styleToApply = this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
            }
            else {
                styleToApply = this.colLg ? this.colLg : this.col;
            }
            if (styleToApply) {
                if (styleToApply.toLocaleLowerCase() == 'fill') {
                    this.helper.applyStyle(this.el, 'flex', '1 1 0');
                }
                else if (styleToApply.includes('%')) {
                    this.helper.applyStyle(this.el, 'flex', "0 0 " + styleToApply);
                }
                else {
                    console.warn("Invalid col val, should be b/w 0 amd 100% (with %) or fill");
                    this.helper.applyStyle(this.el, 'flex', "0 0 auto");
                }
            }
            else {
                this.helper.applyStyle(this.el, 'flex', "0 0 auto");
            }
        };
        return ColDirective;
    }());
    ColDirective.ɵfac = function ColDirective_Factory(t) { return new (t || ColDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    ColDirective.ɵdir = i0.ɵɵdefineDirective({ type: ColDirective, selectors: [["", "col", ""], ["", "col.lg", ""], ["", "col.md", ""], ["", "col.sm", ""]], inputs: { col: "col", colLg: ["col.lg", "colLg"], colMd: ["col.md", "colMd"], colSm: ["col.sm", "colSm"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[col],[col.lg],[col.md],[col.sm]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { col: [{
                    type: i0.Input,
                    args: ['col']
                }], colLg: [{
                    type: i0.Input,
                    args: ['col.lg']
                }], colMd: [{
                    type: i0.Input,
                    args: ['col.md']
                }], colSm: [{
                    type: i0.Input,
                    args: ['col.sm']
                }] });
    })();

    var AlignDirective = /** @class */ (function () {
        function AlignDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.align = '';
            this.alignX = '';
            this.alignY = '';
        }
        AlignDirective.prototype.ngOnChanges = function (changes) {
            if (changes.align || changes.alignX || changes.alignY) {
                this.apply();
            }
        };
        AlignDirective.prototype.apply = function () {
            var alignVal = this.align ? this.align.toLowerCase() : '';
            if (alignVal == 'topleft') {
                this.alignX = 'left';
                this.alignY = 'top';
            }
            else if (alignVal == 'topcenter') {
                this.alignX = 'center';
                this.alignY = 'top';
            }
            else if (alignVal == 'topright') {
                this.alignX = 'right';
                this.alignY = 'top';
            }
            else if (alignVal == 'centerleft') {
                this.alignX = 'left';
                this.alignY = 'center';
            }
            else if (alignVal == 'centercenter') {
                this.alignX = 'center';
                this.alignY = 'center';
            }
            else if (alignVal == 'centerright') {
                this.alignX = 'right';
                this.alignY = 'center';
            }
            else if (alignVal == 'bottomleft') {
                this.alignX = 'left';
                this.alignY = 'bottom';
            }
            else if (alignVal == 'bottomcenter') {
                this.alignX = 'center';
                this.alignY = 'bottom';
            }
            else if (alignVal == 'bottomright') {
                this.alignX = 'right';
                this.alignY = 'bottom';
            }
            if (this.alignX) {
                var jc = this.alignX == 'left' ? 'flex-start' : this.alignX; //justify contents
                jc = this.alignX == 'right' ? 'flex-end' : this.alignX;
                this.helper.applyStyle(this.el, 'textAlign', this.alignX);
                this.helper.applyStyle(this.el, 'justifyContent', jc);
            }
            if (this.alignY) {
                var ai = this.alignY == 'top' ? 'flex-start' : this.alignY; //align items
                ai = this.alignX == 'bottom' ? 'flex-end' : this.alignY;
                this.helper.applyStyle(this.el, 'display', 'flex');
                this.helper.applyStyle(this.el, 'alignItems', ai);
            }
        };
        return AlignDirective;
    }());
    AlignDirective.ɵfac = function AlignDirective_Factory(t) { return new (t || AlignDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    AlignDirective.ɵdir = i0.ɵɵdefineDirective({ type: AlignDirective, selectors: [["", "align", ""], ["", "align.x", ""], ["", "align.y", ""]], inputs: { align: "align", alignX: ["align.x", "alignX"], alignY: ["align.y", "alignY"] }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlignDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[align],[align.x],[align.y]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { align: [{
                    type: i0.Input,
                    args: ['align']
                }], alignX: [{
                    type: i0.Input,
                    args: ['align.x']
                }], alignY: [{
                    type: i0.Input,
                    args: ['align.y']
                }] });
    })();

    var NgwBtnDirective = /** @class */ (function () {
        function NgwBtnDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.type = '';
            this.color = '';
        }
        NgwBtnDirective.prototype.ngOnChanges = function (changes) {
            if (changes.type || changes.color) {
                this.apply();
            }
        };
        NgwBtnDirective.prototype.apply = function () {
            this.themeColor = this.helper.sanitizeThemeColor(this.color);
            this.themeColorText = this.helper.sanitizeThemeColor(this.color) == 'default' ? 'default-contrast' : this.helper.sanitizeThemeColor(this.color);
            this.type = this.type ? this.type.toLowerCase() : 'default';
            var classList = this.el.nativeElement.classList;
            classList.add('ngw-btn');
            var textColorClass = "ngw-text-color-" + this.themeColor + "-contrast";
            var themeTextColorClass = "ngw-text-color-" + this.themeColorText;
            var bgColorClass = "ngw-bg-color-" + this.themeColor;
            var hoverBgColorClass = "ngw-bg-hover-color-" + this.themeColor + "-400";
            var borderColorClass = "ngw-border-color-" + this.themeColor + "-600";
            var hoverBorderColorClass = "ngw-border-hover-color-" + this.themeColor + "-600";
            var hoverLightBgColorClass = "ngw-bg-hover-color-" + this.themeColor + "-50";
            if (this.type == 'outline') {
                classList.add('ngw-btn-outline');
                classList.add('ngw-text-button');
                classList.add(borderColorClass);
                classList.add(themeTextColorClass);
                classList.add(hoverLightBgColorClass);
            }
            else if (this.type == 'flat') {
                classList.add('ngw-btn-flat');
                classList.add('ngw-text-button');
                classList.add(textColorClass);
                classList.add(borderColorClass);
                classList.add(bgColorClass);
                classList.add(hoverBgColorClass);
            }
            else if (this.type == 'raised') {
                classList.add('ngw-btn-raised');
                classList.add('ngw-text-button');
                classList.add(textColorClass);
                classList.add(borderColorClass);
                classList.add(bgColorClass);
                classList.add(hoverBgColorClass);
            }
            else if (this.type == 'icon') {
                classList.add('ngw-btn-icon');
                classList.add('ngw-text-button');
                classList.add(themeTextColorClass);
                classList.add(hoverBorderColorClass);
                classList.add(hoverLightBgColorClass);
            }
            else if (this.type == 'link') {
                classList.add('ngw-btn-link');
                classList.add('ngw-text-color-primary');
            }
            else {
                classList.add('ngw-text-button');
                classList.add(themeTextColorClass);
                classList.add(hoverLightBgColorClass);
            }
        };
        return NgwBtnDirective;
    }());
    NgwBtnDirective.ɵfac = function NgwBtnDirective_Factory(t) { return new (t || NgwBtnDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    NgwBtnDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwBtnDirective, selectors: [["", "ngwBtn", ""]], inputs: { type: ["ngwBtn", "type"], color: "color" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwBtnDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ngwBtn]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { type: [{
                    type: i0.Input,
                    args: ['ngwBtn']
                }], color: [{
                    type: i0.Input,
                    args: ['color']
                }] });
    })();

    var NgwFormControlDirective = /** @class */ (function () {
        function NgwFormControlDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.color = '';
            this.el.nativeElement.classList.add("ngw-form-control");
        }
        NgwFormControlDirective.prototype.ngOnChanges = function (changes) {
            if (changes.color) {
                this.apply();
            }
        };
        NgwFormControlDirective.prototype.apply = function () {
            var _this = this;
            this.helper.themeColors.map(function (c) {
                _this.el.nativeElement.classList.remove("ngw-border-color-" + c + "-600"); //remove any theme class that might have been added
            });
            var sanitizedColor = this.helper.sanitizeThemeColor(this.color);
            this.el.nativeElement.classList.add("ngw-border-color-" + sanitizedColor + "-600");
        };
        return NgwFormControlDirective;
    }());
    NgwFormControlDirective.ɵfac = function NgwFormControlDirective_Factory(t) { return new (t || NgwFormControlDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    NgwFormControlDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwFormControlDirective, selectors: [["", "ngwFormControl", ""]], inputs: { color: "color" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwFormControlDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ngwFormControl]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { color: [{
                    type: i0.Input,
                    args: ['color']
                }] });
    })();

    var NgwTypoDirective = /** @class */ (function () {
        function NgwTypoDirective(el, helper) {
            this.el = el;
            this.helper = helper;
            this.type = ''; //headline,title,subheading-2,subheading-1,caption
        }
        NgwTypoDirective.prototype.ngOnChanges = function (changes) {
            if (changes.type || changes.muted) {
                this.apply();
            }
        };
        NgwTypoDirective.prototype.apply = function () {
            var isMuted = this.muted !== undefined && this.muted.toString().toLowerCase() == 'true' ? true : false;
            if (isMuted) {
                this.el.nativeElement.classList.add("ngw-text-muted");
            }
            else {
                this.el.nativeElement.classList.remove("ngw-text-muted");
            }
            this.el.nativeElement.classList.add("ngw-text-" + this.type.toLowerCase());
        };
        return NgwTypoDirective;
    }());
    NgwTypoDirective.ɵfac = function NgwTypoDirective_Factory(t) { return new (t || NgwTypoDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(HelperService)); };
    NgwTypoDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwTypoDirective, selectors: [["", "ngwTypo", ""]], inputs: { type: ["ngwTypo", "type"], muted: "muted" }, features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwTypoDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ngwTypo]'
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: HelperService }]; }, { type: [{
                    type: i0.Input,
                    args: ['ngwTypo']
                }], muted: [{
                    type: i0.Input,
                    args: ['muted']
                }] });
    })();

    var componentsList = [
        BgColorDirective,
        BorderDirective,
        EllipsisDirective,
        FitDirective,
        FontSizeDirective,
        FontWeightDirective,
        GradientBgColorDirective,
        HeightDirective,
        MarginDirective,
        PaddingDirective,
        PositionDirective,
        RadiusDirective,
        ShadowDirective,
        TextColorDirective,
        WidthDirective,
        BgColorHoverDirective,
        BorderHoverDirective,
        FontSizeHoverDirective,
        FontWeightHoverDirective,
        HeightHoverDirective,
        MarginHoverDirective,
        PaddingHoverDirective,
        RadiusHoverDirective,
        ShadowHoverDirective,
        TextColorHoverDirective,
        WidthHoverDirective,
        RowDirective,
        ColDirective,
        AlignDirective,
        NgwBtnDirective,
        NgwFormControlDirective,
        NgwTypoDirective
    ];
    var NgwCoreModule = /** @class */ (function () {
        function NgwCoreModule() {
            NgwCoreModule.setupNgw();
        }
        NgwCoreModule.setupNgw = function () {
            var _a, _b;
            var css = "\n\n      h1,h2,h3,h4,h5,h6,p,div{\n        color :var(--ngw-default-contrast);\n      }\n\n      .ngw-text-muted{\n        color:var(--ngw-default-900);\n      }\n\n      .ngw-ellipsis{\n        white-space:nowrap;\n        overflow:hidden;\n        text-overflow:ellipsis;\n      }\n\n      /* Typography*/\n\n      .ngw-text-headline {\n          font-family: 'Roboto', sans-serif;\n          font-size: 24px;\n          font-weight: normal;\n          letter-spacing: normal;\n          margin: 0 0 16px;\n      }\n\n      .ngw-text-title {\n          font-family: 'Roboto', sans-serif;\n          font-size: 20px;\n          font-weight: 500;\n          letter-spacing: normal;\n          margin: 0 0 16px;\n      }\n\n      .ngw-text-subheading-2 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 16px;\n          font-weight: 500;\n          letter-spacing: normal;\n          margin: 0 0 16px;\n      }\n\n      .ngw-text-subheading-1 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 15px;\n          font-weight: 400;\n          letter-spacing: normal;\n          margin: 0 0 16px;\n      }\n\n      .ngw-text-body-2 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 14px;\n          font-weight: 500;\n          letter-spacing: normal;\n          margin: 0 0 12px;\n      }\n\n      .ngw-text-body-1 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 14px;\n          font-weight: 400;\n          letter-spacing: normal;\n          margin: 0 0 12px;\n      }\n\n      .ngw-text-body {\n          font-family: 'Roboto', sans-serif;\n          font-size: 14px;\n          font-weight: 400;\n          letter-spacing: normal;\n          margin: 0 0 12px;\n      }\n\n      .ngw-text-caption {\n          font-family: 'Roboto', sans-serif;\n          font-size: 12px;\n          font-weight: 400;\n          letter-spacing: normal;\n          margin: 0 0 12px;\n      }\n\n      .ngw-text-button {\n          font-family: 'Roboto', sans-serif;\n          font-size: 14px;\n          font-weight: 500;\n          letter-spacing: normal;\n          text-transform: uppercase;\n      }\n\n      .ngw-text-display-4 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 112px;\n          font-weight: 300;\n          letter-spacing: -0.7px;\n          margin: 0 0 56px;\n      }\n\n      .ngw-text-display-3 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 56px;\n          font-weight: 400;\n          letter-spacing: -0.28px;\n          margin: 0 0 64px;\n      }\n\n      .ngw-text-display-2 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 45px;\n          font-weight: 400;\n          letter-spacing: -0.07px;\n          margin: 0 0 64px;\n      }\n\n      .ngw-text-display-1 {\n          font-family: 'Roboto', sans-serif;\n          font-size: 34px;\n          font-weight: 400;\n          letter-spacing: normal;\n          margin: 0 0 64px;\n      }\n\n\n      /**\n      *Form Control\n      **/\n\n      .ngw-form-control {\n          box-sizing: border-box;\n          width: 100%;\n          padding: 6px 12px;\n          font-size: 14px;\n          line-height: 1.42857143;\n          border-style: solid;\n          border-width: 1px;\n          border-color: var(--ngw-default-400);\n          border-radius: 4px;\n          transition: all ease-in-out 0.15s, ;\n      }\n\n      .ngw-form-control:focus {\n          border-color: var(--ngw-primary-200);\n          outline: 0;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--ngw-primary-200);\n      }\n\n      .ngw-form-control[disabled],\n      .ngw-form-control[readonly] {\n          background-color: #eeeeee;\n          opacity: 1;\n          cursor: not-allowed;\n      }\n\n\n      /**\n      *Button\n      **/\n\n      .ngw-btn {\n          text-align: center;\n          white-space: nowrap;\n          vertical-align: middle;\n          touch-action: manipulation;\n          cursor: pointer;\n          background-color: transparent;\n          background-image: none;\n          user-select: none;\n          text-decoration: none;\n          outline: none;\n          padding: 6px 12px;\n          line-height: 1.42857143;\n          border-radius: 4px;\n          border: none;\n          justify-content: center;\n          display: inline-flex;\n          align-items: center;\n          transition: opacity 200ms cubic-bezier(0.35, 0, 0.25, 1), background-color 200ms cubic-bezier(0.35, 0, 0.25, 1);\n      }\n\n      .ngw-btn.disabled,\n      .ngw-btn[disabled] {\n          cursor: not-allowed;\n          filter: alpha(opacity=65);\n          opacity: 0.65;\n          box-shadow: none;\n      }\n\n      .ngw-btn-outline {\n          border-width: 1px;\n          border-style: solid;\n      }\n\n      .ngw-btn-flat {\n          border-width: 1px;\n          border-style: solid;\n      }\n\n      .ngw-btn-raised {\n          border-width: 1px;\n          border-style: solid;\n          box-shadow: 0 2px 1px -1px rgb(0 0 0 /20%), 0 1px 1px 0 rgb(0 0 0 /14%), 0 1px 3px 0 rgb(0 0 0 /12%);\n      }\n\n      .ngw-btn-icon {\n          padding: 0;\n          min-width: 0;\n          width: 40px;\n          height: 40px;\n          flex-shrink: 0;\n          line-height: 40px;\n          border-radius: 50%;\n      }\n\n      .ngw-btn-link {\n          margin: inherit;\n          padding: inherit;\n          text-transform: none;\n          display: inline-block;\n          -webkit-appearance: button;\n          cursor: pointer;\n          user-select: none;\n          border-radius: 0;\n          background-color: transparent;\n          box-shadow: none;\n          border-color: transparent;\n      }\n\n      .ngw-btn-link:hover {\n          text-decoration: underline;\n      }\n\n\n    ";
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement("style");
            head.appendChild(style);
            style.appendChild(document.createTextNode(css));
            var colors = NgwCoreModule.configObj.colors;
            var colorClassCss = '';
            //for each key value pair, 500 is actual color, create css variable
            for (var color in colors) {
                for (var colorCode in colors[color]) {
                    (_a = document === null || document === void 0 ? void 0 : document.documentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty("--ngw-" + color + "-" + colorCode, colors[color][colorCode]);
                    colorClassCss += NgwCoreModule.getColorCss(color, colorCode);
                }
                //add 500 as defualt color
                (_b = document === null || document === void 0 ? void 0 : document.documentElement) === null || _b === void 0 ? void 0 : _b.style.setProperty("--ngw-" + color, colors[color]["500"]);
                colorClassCss += NgwCoreModule.getColorCss(color, "");
            }
            style = document.createElement("style");
            head.appendChild(style);
            style.appendChild(document.createTextNode(colorClassCss));
        };
        NgwCoreModule.configure = function (config) {
            //check if config object is valid
            var isValidConfigObj = config && config.colors && config.colors.default && config.colors.primary ? true : false;
            NgwCoreModule.configObj = isValidConfigObj ? config : NgwCoreModule.configObj;
            NgwCoreModule.setupNgw();
            return {
                ngModule: NgwCoreModule
            };
        };
        NgwCoreModule.getColorCss = function (color, colorCode) {
            var cssVarName = colorCode ? "--ngw-" + color + "-" + colorCode : "--ngw-" + color;
            var className = colorCode ? color + "-" + colorCode : "" + color;
            return "\n        .ngw-text-color-" + className + ",.ngw-text-hover-color-" + className + ":hover{\n          color:var(" + cssVarName + ");\n        }\n        .ngw-bg-color-" + className + ",.ngw-bg-hover-color-" + className + ":hover{\n          background-color:var(" + cssVarName + ");\n        }\n        .ngw-border-color-" + className + ",.ngw-border-hover-color-" + className + ":hover{\n          border-color:var(" + cssVarName + ");\n        }\n    ";
        };
        return NgwCoreModule;
    }());
    NgwCoreModule.configObj = {
        "darkMode": false,
        "colors": {
            "default": {
                "50": "#f0f0f0",
                "100": "#fafafa",
                "200": "#f5f5f5",
                "300": "#f0f0f0",
                "400": "#dedede",
                "500": "#ffffff",
                "600": "#979797",
                "700": "#818181",
                "800": "#606060",
                "900": "#3c3c3c",
                "contrast": "#3c3c3c"
            },
            "primary": {
                "50": "#efe5fd",
                "100": "#d4bff9",
                "200": "#b794f6",
                "300": "#9965f4",
                "400": "#7e3ff2",
                "500": "#6002ee",
                "600": "#5300e8",
                "700": "#3d00e0",
                "800": "#1d00db",
                "900": "#0000d6",
                "contrast": "#fff"
            },
            "secondary": {
                "50": "#ffe5ed",
                "100": "#ffbdd3",
                "200": "#ff92b6",
                "300": "#ff6598",
                "400": "#ff4080",
                "500": "#ff1869",
                "600": "#ed1466",
                "700": "#d70f61",
                "800": "#c2075e",
                "900": "#9d0058",
                "contrast": "#fff"
            },
            "success": {
                "50": "#e7f5e7",
                "100": "#c5e5c4",
                "200": "#a0d49f",
                "300": "#7ac478",
                "400": "#5cb85c",
                "500": "#3eab3e",
                "600": "#359c35",
                "700": "#298a2b",
                "800": "#1c7a20",
                "900": "#005b0b",
                "contrast": "#fff"
            },
            "warning": {
                "50": "#fdf2e0",
                "100": "#fadfb2",
                "200": "#f6ca81",
                "300": "#f3b44f",
                "400": "#f1a42b",
                "500": "#ef950f",
                "600": "#eb8a0c",
                "700": "#e57b08",
                "800": "#df6c06",
                "900": "#d55404",
                "contrast": "#fff"
            },
            "error": {
                "50": "#ffebee",
                "100": "#ffcdd2",
                "200": "#ef9a9a",
                "300": "#e57373",
                "400": "#ef5350",
                "500": "#f44336",
                "600": "#e53935",
                "700": "#d32f2f",
                "800": "#c62828",
                "900": "#b71b1c",
                "contrast": "#fff"
            }
        }
    };
    NgwCoreModule.ɵfac = function NgwCoreModule_Factory(t) { return new (t || NgwCoreModule)(); };
    NgwCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgwCoreModule });
    NgwCoreModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            HelperService
        ], imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgwCoreModule, { declarations: [BgColorDirective,
                BorderDirective,
                EllipsisDirective,
                FitDirective,
                FontSizeDirective,
                FontWeightDirective,
                GradientBgColorDirective,
                HeightDirective,
                MarginDirective,
                PaddingDirective,
                PositionDirective,
                RadiusDirective,
                ShadowDirective,
                TextColorDirective,
                WidthDirective,
                BgColorHoverDirective,
                BorderHoverDirective,
                FontSizeHoverDirective,
                FontWeightHoverDirective,
                HeightHoverDirective,
                MarginHoverDirective,
                PaddingHoverDirective,
                RadiusHoverDirective,
                ShadowHoverDirective,
                TextColorHoverDirective,
                WidthHoverDirective,
                RowDirective,
                ColDirective,
                AlignDirective,
                NgwBtnDirective,
                NgwFormControlDirective,
                NgwTypoDirective], exports: [BgColorDirective,
                BorderDirective,
                EllipsisDirective,
                FitDirective,
                FontSizeDirective,
                FontWeightDirective,
                GradientBgColorDirective,
                HeightDirective,
                MarginDirective,
                PaddingDirective,
                PositionDirective,
                RadiusDirective,
                ShadowDirective,
                TextColorDirective,
                WidthDirective,
                BgColorHoverDirective,
                BorderHoverDirective,
                FontSizeHoverDirective,
                FontWeightHoverDirective,
                HeightHoverDirective,
                MarginHoverDirective,
                PaddingHoverDirective,
                RadiusHoverDirective,
                ShadowHoverDirective,
                TextColorHoverDirective,
                WidthHoverDirective,
                RowDirective,
                ColDirective,
                AlignDirective,
                NgwBtnDirective,
                NgwFormControlDirective,
                NgwTypoDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwCoreModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: componentsList,
                        imports: [],
                        providers: [
                            HelperService
                        ],
                        exports: componentsList
                    }]
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of ngw-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlignDirective = AlignDirective;
    exports.BgColorDirective = BgColorDirective;
    exports.BgColorHoverDirective = BgColorHoverDirective;
    exports.BorderDirective = BorderDirective;
    exports.BorderHoverDirective = BorderHoverDirective;
    exports.ColDirective = ColDirective;
    exports.EllipsisDirective = EllipsisDirective;
    exports.FitDirective = FitDirective;
    exports.FontSizeDirective = FontSizeDirective;
    exports.FontSizeHoverDirective = FontSizeHoverDirective;
    exports.FontWeightDirective = FontWeightDirective;
    exports.FontWeightHoverDirective = FontWeightHoverDirective;
    exports.GradientBgColorDirective = GradientBgColorDirective;
    exports.HeightDirective = HeightDirective;
    exports.HeightHoverDirective = HeightHoverDirective;
    exports.HelperService = HelperService;
    exports.MarginDirective = MarginDirective;
    exports.MarginHoverDirective = MarginHoverDirective;
    exports.NgwBtnDirective = NgwBtnDirective;
    exports.NgwCoreModule = NgwCoreModule;
    exports.NgwFormControlDirective = NgwFormControlDirective;
    exports.NgwTypoDirective = NgwTypoDirective;
    exports.PaddingDirective = PaddingDirective;
    exports.PaddingHoverDirective = PaddingHoverDirective;
    exports.PositionDirective = PositionDirective;
    exports.RadiusDirective = RadiusDirective;
    exports.RadiusHoverDirective = RadiusHoverDirective;
    exports.RowDirective = RowDirective;
    exports.ShadowDirective = ShadowDirective;
    exports.ShadowHoverDirective = ShadowHoverDirective;
    exports.TextColorDirective = TextColorDirective;
    exports.TextColorHoverDirective = TextColorHoverDirective;
    exports.WidthDirective = WidthDirective;
    exports.WidthHoverDirective = WidthHoverDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngw-core.umd.js.map
