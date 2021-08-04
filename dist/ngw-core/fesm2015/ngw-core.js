import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Input, ɵɵlistener, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
class HelperService {
    constructor() {
        this.themeColors = ['default', 'primary', 'secondary', 'success', 'error', 'warning'];
        this.defaultColor = this.themeColors[0];
    }
    /**
     * checks if the given theme color is valid theme color or not, if invalid returns default theme color
     * @param color theme color to be validated
     * @returns returns a valid theme color, if invalid returns 'default'
     */
    sanitizeThemeColor(color) {
        return this.themeColors.indexOf(color.toLowerCase()) > -1 ? color.toLowerCase() : this.defaultColor;
    }
    /**
     * returns the css color variable for the theme color(default,primary...) otherwise returns the same value
     * @param color color to be sanitized
     * @returns sanitized color
     */
    sanitizeColor(color) {
        let colorLC = color ? color.toLowerCase() : '';
        let themeColor = this.themeColors.find((tc) => {
            return colorLC.indexOf(tc) >= 0;
        });
        return themeColor ? `var(--ngw-${colorLC})` : colorLC;
    }
    /**
    * Apply the given style poperty to given element.
    * @param el Element for which style needs to be applied
    * @param propertyName style porperty that needs to be set
    * @param propertyValue style value that need to be set
    */
    applyStyle(el, propertyName, propertyValue) {
        el.nativeElement.style[propertyName] = propertyValue;
    }
    /**
     * sanitize and Apply the given style poperty to given element.
     * @param el Element for which style needs to be applied
     * @param propertyName style porperty that needs to be set
     * @param propertyValue style value that need to be set
     */
    sanitizeAndApplyStyle(el, propertyName, propertyValue) {
        el.nativeElement.style[propertyName] = this.sanitizeColor(propertyValue);
    }
    /**
     * Extracts and returns CSS style obj for given css properties from the given HTML Element
     * @param el Element from which styles needs to be extracted
     * @param props Style properties to be extracted
     * @returns style object for given style properties
     */
    getStyleObject(el, props) {
        let styleObj = {};
        props.forEach((prop, i) => {
            styleObj[prop] = el.nativeElement.style[prop];
        });
        return styleObj;
    }
    /**
     * sets the style of the HTML element with given style
     * @param el HTML element for which style needs to be set
     * @param props set of CSS style proeprties
     * @param styleObj CSS styles with values to be set
     */
    setStyleObject(el, props, styleObj) {
        props.forEach((prop, i) => {
            el.nativeElement.style[prop] = styleObj[prop];
        });
    }
    sanitizeShadowValue(shadow) {
        let shdowToApply;
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
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = ɵɵdefineInjectable({ token: HelperService, factory: HelperService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HelperService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class BgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.bgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.bgColor) {
            this.apply();
        }
    }
    apply() {
        this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.bgColor);
    }
}
BgColorDirective.ɵfac = function BgColorDirective_Factory(t) { return new (t || BgColorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
BgColorDirective.ɵdir = ɵɵdefineDirective({ type: BgColorDirective, selectors: [["", "bgColor", ""]], inputs: { bgColor: "bgColor" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BgColorDirective, [{
        type: Directive,
        args: [{
                selector: '[bgColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { bgColor: [{
            type: Input
        }] }); })();

class BorderDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.border = '';
        this.borderWidth = '';
        this.borderColor = '';
        this.borderStyle = '';
    }
    ngOnChanges(changes) {
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
    }
}
BorderDirective.ɵfac = function BorderDirective_Factory(t) { return new (t || BorderDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
BorderDirective.ɵdir = ɵɵdefineDirective({ type: BorderDirective, selectors: [["", "border", ""], ["", "border.width", ""], ["", "border.color", ""], ["", "border.style", ""]], inputs: { border: "border", borderWidth: ["border.width", "borderWidth"], borderColor: ["border.color", "borderColor"], borderStyle: ["border.style", "borderStyle"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BorderDirective, [{
        type: Directive,
        args: [{
                selector: '[border],[border.width],[border.color],[border.style]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { border: [{
            type: Input,
            args: ['border']
        }], borderWidth: [{
            type: Input,
            args: ['border.width']
        }], borderColor: [{
            type: Input,
            args: ['border.color']
        }], borderStyle: [{
            type: Input,
            args: ['border.style']
        }] }); })();

class EllipsisDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.classList.add("ngw-ellipsis");
    }
}
EllipsisDirective.ɵfac = function EllipsisDirective_Factory(t) { return new (t || EllipsisDirective)(ɵɵdirectiveInject(ElementRef)); };
EllipsisDirective.ɵdir = ɵɵdefineDirective({ type: EllipsisDirective, selectors: [["", "ellipsis", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EllipsisDirective, [{
        type: Directive,
        args: [{
                selector: '[ellipsis]'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class FitDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fit = ''; //valid options : contain,cover,fill,none,scale-down
    }
    ngOnChanges(changes) {
        if (changes.fit) {
            this.helper.applyStyle(this.el, 'objectFit', this.fit);
        }
    }
}
FitDirective.ɵfac = function FitDirective_Factory(t) { return new (t || FitDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
FitDirective.ɵdir = ɵɵdefineDirective({ type: FitDirective, selectors: [["", "fit", ""]], inputs: { fit: "fit" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FitDirective, [{
        type: Directive,
        args: [{
                selector: '[fit]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { fit: [{
            type: Input,
            args: ['fit']
        }] }); })();

class FontSizeDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fontSize = '';
    }
    ngOnChanges(changes) {
        if (changes.fontSize) {
            this.helper.applyStyle(this.el, 'fontSize', this.fontSize);
        }
    }
}
FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
FontSizeDirective.ɵdir = ɵɵdefineDirective({ type: FontSizeDirective, selectors: [["", "fontSize", ""]], inputs: { fontSize: "fontSize" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FontSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[fontSize]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { fontSize: [{
            type: Input,
            args: ['fontSize']
        }] }); })();

class FontWeightDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fontWeight = '';
    }
    ngOnChanges(changes) {
        if (changes.fontWeight) {
            this.helper.applyStyle(this.el, 'fontWeight', this.fontWeight);
        }
    }
}
FontWeightDirective.ɵfac = function FontWeightDirective_Factory(t) { return new (t || FontWeightDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
FontWeightDirective.ɵdir = ɵɵdefineDirective({ type: FontWeightDirective, selectors: [["", "fontWeight", ""]], inputs: { fontWeight: "fontWeight" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FontWeightDirective, [{
        type: Directive,
        args: [{
                selector: '[fontWeight]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { fontWeight: [{
            type: Input,
            args: ['fontWeight']
        }] }); })();

class GradientBgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.gradientBgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.gradientBgColor) {
            this.gradientBgColor = this.helper.sanitizeThemeColor(this.gradientBgColor);
            let biValue = `linear-gradient(to right, var(--ngw-${this.gradientBgColor}-600),var(--ngw-${this.gradientBgColor}-500),var(--ngw-${this.gradientBgColor}-400,rgba(91,33,182,0)))`;
            this.helper.applyStyle(this.el, 'backgroundImage', biValue);
        }
    }
}
GradientBgColorDirective.ɵfac = function GradientBgColorDirective_Factory(t) { return new (t || GradientBgColorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
GradientBgColorDirective.ɵdir = ɵɵdefineDirective({ type: GradientBgColorDirective, selectors: [["", "gradientBgColor", ""]], inputs: { gradientBgColor: "gradientBgColor" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GradientBgColorDirective, [{
        type: Directive,
        args: [{
                selector: '[gradientBgColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { gradientBgColor: [{
            type: Input,
            args: ['gradientBgColor']
        }] }); })();

class HeightDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.height = '';
    }
    ngOnChanges(changes) {
        if (changes.height) {
            this.helper.applyStyle(this.el, 'height', this.height);
        }
    }
}
HeightDirective.ɵfac = function HeightDirective_Factory(t) { return new (t || HeightDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
HeightDirective.ɵdir = ɵɵdefineDirective({ type: HeightDirective, selectors: [["", "height", ""]], inputs: { height: "height" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HeightDirective, [{
        type: Directive,
        args: [{
                selector: '[height]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { height: [{
            type: Input,
            args: ['height']
        }] }); })();

class MarginDirective {
    constructor(el, helper) {
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
    ngOnChanges(changes) {
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
    }
}
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
MarginDirective.ɵdir = ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "margin", ""], ["", "margin.top", ""], ["", "margin.left", ""], ["", "margin.bottom", ""], ["", "margin.right", ""], ["", "margin.x", ""], ["", "margin.y", ""]], inputs: { margin: "margin", marginTop: ["margin.top", "marginTop"], marginLeft: ["margin.left", "marginLeft"], marginBottom: ["margin.bottom", "marginBottom"], marginRight: ["margin.right", "marginRight"], marginX: ["margin.x", "marginX"], marginY: ["margin.y", "marginY"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MarginDirective, [{
        type: Directive,
        args: [{
                selector: '[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { margin: [{
            type: Input,
            args: ['margin']
        }], marginTop: [{
            type: Input,
            args: ['margin.top']
        }], marginLeft: [{
            type: Input,
            args: ['margin.left']
        }], marginBottom: [{
            type: Input,
            args: ['margin.bottom']
        }], marginRight: [{
            type: Input,
            args: ['margin.right']
        }], marginX: [{
            type: Input,
            args: ['margin.x']
        }], marginY: [{
            type: Input,
            args: ['margin.y']
        }] }); })();

class PaddingDirective {
    constructor(el, helper) {
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
    ngOnChanges(changes) {
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
    }
}
PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
PaddingDirective.ɵdir = ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "padding", ""], ["", "padding.top", ""], ["", "padding.left", ""], ["", "padding.bottom", ""], ["", "padding.right", ""], ["", "padding.x", ""], ["", "padding.y", ""]], inputs: { padding: "padding", paddingTop: ["padding.top", "paddingTop"], paddingLeft: ["padding.left", "paddingLeft"], paddingBottom: ["padding.bottom", "paddingBottom"], paddingRight: ["padding.right", "paddingRight"], paddingX: ["padding.x", "paddingX"], paddingY: ["padding.y", "paddingY"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { padding: [{
            type: Input,
            args: ['padding']
        }], paddingTop: [{
            type: Input,
            args: ['padding.top']
        }], paddingLeft: [{
            type: Input,
            args: ['padding.left']
        }], paddingBottom: [{
            type: Input,
            args: ['padding.bottom']
        }], paddingRight: [{
            type: Input,
            args: ['padding.right']
        }], paddingX: [{
            type: Input,
            args: ['padding.x']
        }], paddingY: [{
            type: Input,
            args: ['padding.y']
        }] }); })();

class PositionDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.position = '';
    }
    ngOnChanges(changes) {
        if (changes.position) {
            this.helper.applyStyle(this.el, 'position', this.position);
        }
    }
}
PositionDirective.ɵfac = function PositionDirective_Factory(t) { return new (t || PositionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
PositionDirective.ɵdir = ɵɵdefineDirective({ type: PositionDirective, selectors: [["", "position", ""]], inputs: { position: "position" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PositionDirective, [{
        type: Directive,
        args: [{
                selector: '[position]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { position: [{
            type: Input,
            args: ['position']
        }] }); })();

class RadiusDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.radius = '';
        this.radiusTopLeft = '';
        this.radiusTopRight = '';
        this.radiusBottomLeft = '';
        this.radiusBottomRight = '';
    }
    ngOnChanges(changes) {
        changes.radius ? this.helper.applyStyle(this.el, 'borderRadius', this.radius) : '';
        changes.radiusTopLeft ? this.helper.applyStyle(this.el, 'borderTopLeftRadius', this.radiusTopLeft) : '';
        changes.radiusTopRight ? this.helper.applyStyle(this.el, 'borderTopRightRadius', this.radiusTopRight) : '';
        changes.radiusBottomLeft ? this.helper.applyStyle(this.el, 'borderBottomLeftRadius', this.radiusBottomLeft) : '';
        changes.radiusBottomRight ? this.helper.applyStyle(this.el, 'borderBottomRightRadius', this.radiusBottomRight) : '';
    }
}
RadiusDirective.ɵfac = function RadiusDirective_Factory(t) { return new (t || RadiusDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
RadiusDirective.ɵdir = ɵɵdefineDirective({ type: RadiusDirective, selectors: [["", "radius", ""], ["", "radius.topLeft", ""], ["", "radius.topRadius", ""], ["", "radius.bottomLeft", ""], ["", "radius.bottomRight", ""]], inputs: { radius: "radius", radiusTopLeft: ["radius.topLeft", "radiusTopLeft"], radiusTopRight: ["radius.topRight", "radiusTopRight"], radiusBottomLeft: ["radius.bottomLeft", "radiusBottomLeft"], radiusBottomRight: ["radius.bottomRight", "radiusBottomRight"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadiusDirective, [{
        type: Directive,
        args: [{
                selector: '[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { radius: [{
            type: Input,
            args: ['radius']
        }], radiusTopLeft: [{
            type: Input,
            args: ['radius.topLeft']
        }], radiusTopRight: [{
            type: Input,
            args: ['radius.topRight']
        }], radiusBottomLeft: [{
            type: Input,
            args: ['radius.bottomLeft']
        }], radiusBottomRight: [{
            type: Input,
            args: ['radius.bottomRight']
        }] }); })();

class ShadowDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.shadow = '';
    }
    ngOnChanges(changes) {
        if (changes.shadow) {
            let shdowToApply = this.helper.sanitizeShadowValue(this.shadow);
            this.helper.applyStyle(this.el, 'boxShadow', shdowToApply);
        }
    }
}
ShadowDirective.ɵfac = function ShadowDirective_Factory(t) { return new (t || ShadowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
ShadowDirective.ɵdir = ɵɵdefineDirective({ type: ShadowDirective, selectors: [["", "shadow", ""]], inputs: { shadow: "shadow" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ShadowDirective, [{
        type: Directive,
        args: [{
                selector: '[shadow]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { shadow: [{
            type: Input,
            args: ['shadow']
        }] }); })();

class TextColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.textColor = '';
    }
    ngOnChanges(changes) {
        changes.textColor ? this.helper.sanitizeAndApplyStyle(this.el, 'color', this.textColor) : '';
    }
}
TextColorDirective.ɵfac = function TextColorDirective_Factory(t) { return new (t || TextColorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
TextColorDirective.ɵdir = ɵɵdefineDirective({ type: TextColorDirective, selectors: [["", "textColor", ""]], inputs: { textColor: "textColor" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextColorDirective, [{
        type: Directive,
        args: [{
                selector: '[textColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { textColor: [{
            type: Input,
            args: ['textColor']
        }] }); })();

class WidthDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
    }
    ngOnChanges(changes) {
        changes.width ? this.helper.applyStyle(this.el, 'width', this.width) : '';
    }
}
WidthDirective.ɵfac = function WidthDirective_Factory(t) { return new (t || WidthDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
WidthDirective.ɵdir = ɵɵdefineDirective({ type: WidthDirective, selectors: [["", "width", ""]], inputs: { width: "width" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidthDirective, [{
        type: Directive,
        args: [{
                selector: '[width]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { width: [{
            type: Input,
            args: ['width']
        }] }); })();

class BgColorHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverBgColor = '';
        this.propertiesToSet = ['backgroundColor'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.hoverBgColor) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.hoverBgColor);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
BgColorHoverDirective.ɵfac = function BgColorHoverDirective_Factory(t) { return new (t || BgColorHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
BgColorHoverDirective.ɵdir = ɵɵdefineDirective({ type: BgColorHoverDirective, selectors: [["", "hover.bgColor", ""]], hostBindings: function BgColorHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function BgColorHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BgColorHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverBgColor: ["hover.bgColor", "hoverBgColor"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BgColorHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.bgColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverBgColor: [{
            type: Input,
            args: ['hover.bgColor']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class BorderHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverBorder = '';
        this.hoverBorderWidth = '';
        this.hoverBorderColor = '';
        this.hoverBorderStyle = '';
        this.propertiesToSet = ['border', 'borderWidth', 'borderColor', 'borderStyle'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        this.hoverBorder ? this.helper.applyStyle(this.el, 'border', this.hoverBorder) : '';
        this.hoverBorderWidth ? this.helper.applyStyle(this.el, 'borderWidth', this.hoverBorderWidth) : '';
        this.hoverBorderColor ? this.helper.sanitizeAndApplyStyle(this.el, 'borderColor', this.hoverBorderColor) : '';
        this.hoverBorderStyle ? this.helper.applyStyle(this.el, 'borderStyle', this.hoverBorderStyle) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
BorderHoverDirective.ɵfac = function BorderHoverDirective_Factory(t) { return new (t || BorderHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
BorderHoverDirective.ɵdir = ɵɵdefineDirective({ type: BorderHoverDirective, selectors: [["", "hover.border", ""], ["", "hover.border.width", ""], ["", "hover.border.color", ""], ["", "hover.border.style", ""]], hostBindings: function BorderHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function BorderHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BorderHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverBorder: ["hover.border", "hoverBorder"], hoverBorderWidth: ["hover.border.width", "hoverBorderWidth"], hoverBorderColor: ["hover.border.color", "hoverBorderColor"], hoverBorderStyle: ["hover.border.style", "hoverBorderStyle"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BorderHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverBorder: [{
            type: Input,
            args: ['hover.border']
        }], hoverBorderWidth: [{
            type: Input,
            args: ['hover.border.width']
        }], hoverBorderColor: [{
            type: Input,
            args: ['hover.border.color']
        }], hoverBorderStyle: [{
            type: Input,
            args: ['hover.border.style']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class FontSizeHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverFontSize = '';
        this.propertiesToSet = ['fontSize'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.hoverFontSize) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverFontSize);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
FontSizeHoverDirective.ɵfac = function FontSizeHoverDirective_Factory(t) { return new (t || FontSizeHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
FontSizeHoverDirective.ɵdir = ɵɵdefineDirective({ type: FontSizeHoverDirective, selectors: [["", "hover.fontSize", ""]], hostBindings: function FontSizeHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function FontSizeHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontSizeHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverFontSize: ["hover.fontSize", "hoverFontSize"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FontSizeHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.fontSize]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverFontSize: [{
            type: Input,
            args: ['hover.fontSize']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class FontWeightHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['fontWeight'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
FontWeightHoverDirective.ɵfac = function FontWeightHoverDirective_Factory(t) { return new (t || FontWeightHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
FontWeightHoverDirective.ɵdir = ɵɵdefineDirective({ type: FontWeightHoverDirective, selectors: [["", "hover.fontWeight", ""]], hostBindings: function FontWeightHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function FontWeightHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontWeightHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.fontWeight", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FontWeightHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.fontWeight]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.fontWeight']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class HeightHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['height'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
HeightHoverDirective.ɵfac = function HeightHoverDirective_Factory(t) { return new (t || HeightHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
HeightHoverDirective.ɵdir = ɵɵdefineDirective({ type: HeightHoverDirective, selectors: [["", "hover.height", ""]], hostBindings: function HeightHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function HeightHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HeightHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.height", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HeightHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.height]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.height']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class MarginHoverDirective {
    constructor(el, helper) {
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
    onMouseEnter() {
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
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
MarginHoverDirective.ɵfac = function MarginHoverDirective_Factory(t) { return new (t || MarginHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
MarginHoverDirective.ɵdir = ɵɵdefineDirective({ type: MarginHoverDirective, selectors: [["", "hover.margin", ""], ["", "hover.margin.top", ""], ["", "hover.margin.left", ""], ["", "hover.margin.bottom", ""], ["", "hover.margin.right", ""], ["", "hover.margin.x", ""], ["", "hover.margin.y", ""]], hostBindings: function MarginHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function MarginHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MarginHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverMargin: ["hover.margin", "hoverMargin"], hoverMarginTop: ["hover.margin.top", "hoverMarginTop"], hoverMarginLeft: ["hover.margin.left", "hoverMarginLeft"], hoverMarginBottom: ["hover.margin.bottom", "hoverMarginBottom"], hoverMarginRight: ["hover.margin.right", "hoverMarginRight"], hoverMarginX: ["hover.margin.x", "hoverMarginX"], hoverMarginY: ["hover.margin.y", "hoverMarginY"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MarginHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverMargin: [{
            type: Input,
            args: ['hover.margin']
        }], hoverMarginTop: [{
            type: Input,
            args: ['hover.margin.top']
        }], hoverMarginLeft: [{
            type: Input,
            args: ['hover.margin.left']
        }], hoverMarginBottom: [{
            type: Input,
            args: ['hover.margin.bottom']
        }], hoverMarginRight: [{
            type: Input,
            args: ['hover.margin.right']
        }], hoverMarginX: [{
            type: Input,
            args: ['hover.margin.x']
        }], hoverMarginY: [{
            type: Input,
            args: ['hover.margin.y']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class PaddingHoverDirective {
    constructor(el, helper) {
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
    onMouseEnter() {
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
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
PaddingHoverDirective.ɵfac = function PaddingHoverDirective_Factory(t) { return new (t || PaddingHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
PaddingHoverDirective.ɵdir = ɵɵdefineDirective({ type: PaddingHoverDirective, selectors: [["", "hover.padding", ""], ["", "hover.padding.top", ""], ["", "hover.padding.left", ""], ["", "hover.padding.bottom", ""], ["", "hover.padding.right", ""], ["", "hover.padding.x", ""], ["", "hover.padding.y", ""]], hostBindings: function PaddingHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function PaddingHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function PaddingHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverpadding: ["hover.padding", "hoverpadding"], hoverpaddingTop: ["hover.padding.top", "hoverpaddingTop"], hoverpaddingLeft: ["hover.padding.left", "hoverpaddingLeft"], hoverpaddingBottom: ["hover.padding.bottom", "hoverpaddingBottom"], hoverpaddingRight: ["hover.padding.right", "hoverpaddingRight"], hoverpaddingX: ["hover.padding.x", "hoverpaddingX"], hoverpaddingY: ["hover.padding.y", "hoverpaddingY"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaddingHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverpadding: [{
            type: Input,
            args: ['hover.padding']
        }], hoverpaddingTop: [{
            type: Input,
            args: ['hover.padding.top']
        }], hoverpaddingLeft: [{
            type: Input,
            args: ['hover.padding.left']
        }], hoverpaddingBottom: [{
            type: Input,
            args: ['hover.padding.bottom']
        }], hoverpaddingRight: [{
            type: Input,
            args: ['hover.padding.right']
        }], hoverpaddingX: [{
            type: Input,
            args: ['hover.padding.x']
        }], hoverpaddingY: [{
            type: Input,
            args: ['hover.padding.y']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class RadiusHoverDirective {
    constructor(el, helper) {
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
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        this.hoverRadius ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverRadius) : '';
        this.hoverRadiusTopLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverRadiusTopLeft) : '';
        this.hoverRadiusTopRight ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverRadiusTopRight) : '';
        this.hoverRadiusBottomLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverRadiusBottomLeft) : '';
        this.hoverRadiusBottomRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverRadiusBottomRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
RadiusHoverDirective.ɵfac = function RadiusHoverDirective_Factory(t) { return new (t || RadiusHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
RadiusHoverDirective.ɵdir = ɵɵdefineDirective({ type: RadiusHoverDirective, selectors: [["", "hover.radius", ""], ["", "hover.radius.topLeft", ""], ["", "hover.radius.topRight", ""], ["", "hover.radius.bottomLeft", ""], ["", "hover.radius.bottomRight", ""]], hostBindings: function RadiusHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function RadiusHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function RadiusHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverRadius: ["hover.radius", "hoverRadius"], hoverRadiusTopLeft: ["hover.radius.topLeft", "hoverRadiusTopLeft"], hoverRadiusTopRight: ["hover.radius.topRight", "hoverRadiusTopRight"], hoverRadiusBottomLeft: ["hover.radius.bottomLeft", "hoverRadiusBottomLeft"], hoverRadiusBottomRight: ["hover.radius.bottomRight", "hoverRadiusBottomRight"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadiusHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { hoverRadius: [{
            type: Input,
            args: ['hover.radius']
        }], hoverRadiusTopLeft: [{
            type: Input,
            args: ['hover.radius.topLeft']
        }], hoverRadiusTopRight: [{
            type: Input,
            args: ['hover.radius.topRight']
        }], hoverRadiusBottomLeft: [{
            type: Input,
            args: ['hover.radius.bottomLeft']
        }], hoverRadiusBottomRight: [{
            type: Input,
            args: ['hover.radius.bottomRight']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class ShadowHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['boxShadow'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            let shdowToApply = this.helper.sanitizeShadowValue(this.propValue);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], shdowToApply);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
ShadowHoverDirective.ɵfac = function ShadowHoverDirective_Factory(t) { return new (t || ShadowHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
ShadowHoverDirective.ɵdir = ɵɵdefineDirective({ type: ShadowHoverDirective, selectors: [["", "hover.shadow", ""]], hostBindings: function ShadowHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function ShadowHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ShadowHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.shadow", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ShadowHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.shadow]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.shadow']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class TextColorHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['color'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.sanitizeAndApplyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
TextColorHoverDirective.ɵfac = function TextColorHoverDirective_Factory(t) { return new (t || TextColorHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
TextColorHoverDirective.ɵdir = ɵɵdefineDirective({ type: TextColorHoverDirective, selectors: [["", "hover.textColor", ""]], hostBindings: function TextColorHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function TextColorHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TextColorHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.textColor", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextColorHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.textColor]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.textColor']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class WidthHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['width'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
WidthHoverDirective.ɵfac = function WidthHoverDirective_Factory(t) { return new (t || WidthHoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
WidthHoverDirective.ɵdir = ɵɵdefineDirective({ type: WidthHoverDirective, selectors: [["", "hover.width", ""]], hostBindings: function WidthHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function WidthHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function WidthHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.width", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidthHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.width]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.width']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class RowDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
    }
    ngAfterViewInit() {
        this.helper.applyStyle(this.el, 'display', 'flex');
        this.helper.applyStyle(this.el, 'flexDirection', 'row');
        this.helper.applyStyle(this.el, 'flexWrap', 'wrap');
    }
}
RowDirective.ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
RowDirective.ɵdir = ɵɵdefineDirective({ type: RowDirective, selectors: [["", "row", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RowDirective, [{
        type: Directive,
        args: [{
                selector: '[row]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, null); })();

class ColDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.col = ''; //0-100%, fill
        this.colLg = '';
        this.colMd = '';
        this.colSm = '';
    }
    ngOnInit() {
        this.helper.applyStyle(this.el, 'overflow', 'auto');
        this.helper.applyStyle(this.el, 'boxSizing', 'border-box');
        //@ts-ignore
        this.observer = new ResizeObserver((entries) => {
            let width = entries[0].contentRect.width;
            this.apply(width);
        });
        //attach resize observer to body element
        let bodyEle = document.getElementsByTagName('body') ? document.getElementsByTagName('body')[0] : null;
        if (bodyEle && this.observer) {
            this.observer.observe(bodyEle);
        }
    }
    ngOnChanges(changes) {
        if (changes.col || changes.colLg || changes.colMd || changes.colSm) {
            window ? this.apply(window.innerWidth) : null;
        }
    }
    ngOnDestroy() {
        var _a;
        try {
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.unObserve(this.el.nativeElement);
        }
        catch (e) { }
    }
    apply(width) {
        let styleToApply = '';
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
                this.helper.applyStyle(this.el, 'flex', `0 0 ${styleToApply}`);
            }
            else {
                console.warn("Invalid col val, should be b/w 0 amd 100% (with %) or fill");
                this.helper.applyStyle(this.el, 'flex', `0 0 auto`);
            }
        }
        else {
            this.helper.applyStyle(this.el, 'flex', `0 0 auto`);
        }
    }
}
ColDirective.ɵfac = function ColDirective_Factory(t) { return new (t || ColDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
ColDirective.ɵdir = ɵɵdefineDirective({ type: ColDirective, selectors: [["", "col", ""], ["", "col.lg", ""], ["", "col.md", ""], ["", "col.sm", ""]], inputs: { col: "col", colLg: ["col.lg", "colLg"], colMd: ["col.md", "colMd"], colSm: ["col.sm", "colSm"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ColDirective, [{
        type: Directive,
        args: [{
                selector: '[col],[col.lg],[col.md],[col.sm]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { col: [{
            type: Input,
            args: ['col']
        }], colLg: [{
            type: Input,
            args: ['col.lg']
        }], colMd: [{
            type: Input,
            args: ['col.md']
        }], colSm: [{
            type: Input,
            args: ['col.sm']
        }] }); })();

class AlignDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.align = '';
        this.alignX = '';
        this.alignY = '';
    }
    ngOnChanges(changes) {
        if (changes.align || changes.alignX || changes.alignY) {
            this.apply();
        }
    }
    apply() {
        let alignVal = this.align ? this.align.toLowerCase() : '';
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
            let jc = this.alignX == 'left' ? 'flex-start' : this.alignX; //justify contents
            jc = this.alignX == 'right' ? 'flex-end' : this.alignX;
            this.helper.applyStyle(this.el, 'textAlign', this.alignX);
            this.helper.applyStyle(this.el, 'justifyContent', jc);
        }
        if (this.alignY) {
            let ai = this.alignY == 'top' ? 'flex-start' : this.alignY; //align items
            ai = this.alignX == 'bottom' ? 'flex-end' : this.alignY;
            this.helper.applyStyle(this.el, 'display', 'flex');
            this.helper.applyStyle(this.el, 'alignItems', ai);
        }
    }
}
AlignDirective.ɵfac = function AlignDirective_Factory(t) { return new (t || AlignDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
AlignDirective.ɵdir = ɵɵdefineDirective({ type: AlignDirective, selectors: [["", "align", ""], ["", "align.x", ""], ["", "align.y", ""]], inputs: { align: "align", alignX: ["align.x", "alignX"], alignY: ["align.y", "alignY"] }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AlignDirective, [{
        type: Directive,
        args: [{
                selector: '[align],[align.x],[align.y]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { align: [{
            type: Input,
            args: ['align']
        }], alignX: [{
            type: Input,
            args: ['align.x']
        }], alignY: [{
            type: Input,
            args: ['align.y']
        }] }); })();

class NgwBtnDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.type = '';
        this.color = '';
    }
    ngOnChanges(changes) {
        if (changes.type || changes.color) {
            this.apply();
        }
    }
    apply() {
        this.themeColor = this.helper.sanitizeThemeColor(this.color);
        this.themeColorText = this.helper.sanitizeThemeColor(this.color) == 'default' ? 'default-contrast' : this.helper.sanitizeThemeColor(this.color);
        this.type = this.type ? this.type.toLowerCase() : 'default';
        let classList = this.el.nativeElement.classList;
        classList.add('ngw-btn');
        let textColorClass = `ngw-text-color-${this.themeColor}-contrast`;
        let themeTextColorClass = `ngw-text-color-${this.themeColorText}`;
        let bgColorClass = `ngw-bg-color-${this.themeColor}`;
        let hoverBgColorClass = `ngw-bg-hover-color-${this.themeColor}-400`;
        let borderColorClass = `ngw-border-color-${this.themeColor}-600`;
        let hoverBorderColorClass = `ngw-border-hover-color-${this.themeColor}-600`;
        let hoverLightBgColorClass = `ngw-bg-hover-color-${this.themeColor}-50`;
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
    }
}
NgwBtnDirective.ɵfac = function NgwBtnDirective_Factory(t) { return new (t || NgwBtnDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
NgwBtnDirective.ɵdir = ɵɵdefineDirective({ type: NgwBtnDirective, selectors: [["", "ngwBtn", ""]], inputs: { type: ["ngwBtn", "type"], color: "color" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgwBtnDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwBtn]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { type: [{
            type: Input,
            args: ['ngwBtn']
        }], color: [{
            type: Input,
            args: ['color']
        }] }); })();

class NgwFormControlDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.color = '';
        this.el.nativeElement.classList.add("ngw-form-control");
    }
    ngOnChanges(changes) {
        if (changes.color) {
            this.apply();
        }
    }
    apply() {
        this.helper.themeColors.map((c) => {
            this.el.nativeElement.classList.remove(`ngw-border-color-${c}-600`); //remove any theme class that might have been added
        });
        let sanitizedColor = this.helper.sanitizeThemeColor(this.color);
        this.el.nativeElement.classList.add(`ngw-border-color-${sanitizedColor}-600`);
    }
}
NgwFormControlDirective.ɵfac = function NgwFormControlDirective_Factory(t) { return new (t || NgwFormControlDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
NgwFormControlDirective.ɵdir = ɵɵdefineDirective({ type: NgwFormControlDirective, selectors: [["", "ngwFormControl", ""]], inputs: { color: "color" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgwFormControlDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwFormControl]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { color: [{
            type: Input,
            args: ['color']
        }] }); })();

class NgwTypoDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.type = ''; //headline,title,subheading-2,subheading-1,caption
    }
    ngOnChanges(changes) {
        if (changes.type || changes.muted) {
            this.apply();
        }
    }
    apply() {
        let isMuted = this.muted !== undefined && this.muted.toString().toLowerCase() == 'true' ? true : false;
        if (isMuted) {
            this.el.nativeElement.classList.add(`ngw-text-muted`);
        }
        else {
            this.el.nativeElement.classList.remove(`ngw-text-muted`);
        }
        this.el.nativeElement.classList.add(`ngw-text-${this.type.toLowerCase()}`);
    }
}
NgwTypoDirective.ɵfac = function NgwTypoDirective_Factory(t) { return new (t || NgwTypoDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(HelperService)); };
NgwTypoDirective.ɵdir = ɵɵdefineDirective({ type: NgwTypoDirective, selectors: [["", "ngwTypo", ""]], inputs: { type: ["ngwTypo", "type"], muted: "muted" }, features: [ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgwTypoDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwTypo]'
            }]
    }], function () { return [{ type: ElementRef }, { type: HelperService }]; }, { type: [{
            type: Input,
            args: ['ngwTypo']
        }], muted: [{
            type: Input,
            args: ['muted']
        }] }); })();

let componentsList = [
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
class NgwCoreModule {
    constructor() {
        NgwCoreModule.setupNgw();
    }
    static setupNgw() {
        var _a, _b;
        let css = `

      h1,h2,h3,h4,h5,h6,p,div{
        color :var(--ngw-default-contrast);
      }

      .ngw-text-muted{
        color:var(--ngw-default-900);
      }

      .ngw-ellipsis{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      /* Typography*/

      .ngw-text-headline {
          font-family: 'Roboto', sans-serif;
          font-size: 24px;
          font-weight: normal;
          letter-spacing: normal;
          margin: 0 0 16px;
      }

      .ngw-text-title {
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: normal;
          margin: 0 0 16px;
      }

      .ngw-text-subheading-2 {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: normal;
          margin: 0 0 16px;
      }

      .ngw-text-subheading-1 {
          font-family: 'Roboto', sans-serif;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: normal;
          margin: 0 0 16px;
      }

      .ngw-text-body-2 {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: normal;
          margin: 0 0 12px;
      }

      .ngw-text-body-1 {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: normal;
          margin: 0 0 12px;
      }

      .ngw-text-body {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: normal;
          margin: 0 0 12px;
      }

      .ngw-text-caption {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: normal;
          margin: 0 0 12px;
      }

      .ngw-text-button {
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: normal;
          text-transform: uppercase;
      }

      .ngw-text-display-4 {
          font-family: 'Roboto', sans-serif;
          font-size: 112px;
          font-weight: 300;
          letter-spacing: -0.7px;
          margin: 0 0 56px;
      }

      .ngw-text-display-3 {
          font-family: 'Roboto', sans-serif;
          font-size: 56px;
          font-weight: 400;
          letter-spacing: -0.28px;
          margin: 0 0 64px;
      }

      .ngw-text-display-2 {
          font-family: 'Roboto', sans-serif;
          font-size: 45px;
          font-weight: 400;
          letter-spacing: -0.07px;
          margin: 0 0 64px;
      }

      .ngw-text-display-1 {
          font-family: 'Roboto', sans-serif;
          font-size: 34px;
          font-weight: 400;
          letter-spacing: normal;
          margin: 0 0 64px;
      }


      /**
      *Form Control
      **/

      .ngw-form-control {
          box-sizing: border-box;
          width: 100%;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42857143;
          border-style: solid;
          border-width: 1px;
          border-color: var(--ngw-default-400);
          border-radius: 4px;
          transition: all ease-in-out 0.15s, ;
      }

      .ngw-form-control:focus {
          border-color: var(--ngw-primary-200);
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--ngw-primary-200);
      }

      .ngw-form-control[disabled],
      .ngw-form-control[readonly] {
          background-color: #eeeeee;
          opacity: 1;
          cursor: not-allowed;
      }


      /**
      *Button
      **/

      .ngw-btn {
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          background-color: transparent;
          background-image: none;
          user-select: none;
          text-decoration: none;
          outline: none;
          padding: 6px 12px;
          line-height: 1.42857143;
          border-radius: 4px;
          border: none;
          justify-content: center;
          display: inline-flex;
          align-items: center;
          transition: opacity 200ms cubic-bezier(0.35, 0, 0.25, 1), background-color 200ms cubic-bezier(0.35, 0, 0.25, 1);
      }

      .ngw-btn.disabled,
      .ngw-btn[disabled] {
          cursor: not-allowed;
          filter: alpha(opacity=65);
          opacity: 0.65;
          box-shadow: none;
      }

      .ngw-btn-outline {
          border-width: 1px;
          border-style: solid;
      }

      .ngw-btn-flat {
          border-width: 1px;
          border-style: solid;
      }

      .ngw-btn-raised {
          border-width: 1px;
          border-style: solid;
          box-shadow: 0 2px 1px -1px rgb(0 0 0 /20%), 0 1px 1px 0 rgb(0 0 0 /14%), 0 1px 3px 0 rgb(0 0 0 /12%);
      }

      .ngw-btn-icon {
          padding: 0;
          min-width: 0;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          line-height: 40px;
          border-radius: 50%;
      }

      .ngw-btn-link {
          margin: inherit;
          padding: inherit;
          text-transform: none;
          display: inline-block;
          -webkit-appearance: button;
          cursor: pointer;
          user-select: none;
          border-radius: 0;
          background-color: transparent;
          box-shadow: none;
          border-color: transparent;
      }

      .ngw-btn-link:hover {
          text-decoration: underline;
      }


    `;
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement("style");
        head.appendChild(style);
        style.appendChild(document.createTextNode(css));
        let colors = NgwCoreModule.configObj.colors;
        let colorClassCss = '';
        //for each key value pair, 500 is actual color, create css variable
        for (let color in colors) {
            for (let colorCode in colors[color]) {
                (_a = document === null || document === void 0 ? void 0 : document.documentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty(`--ngw-${color}-${colorCode}`, colors[color][colorCode]);
                colorClassCss += NgwCoreModule.getColorCss(color, colorCode);
            }
            //add 500 as defualt color
            (_b = document === null || document === void 0 ? void 0 : document.documentElement) === null || _b === void 0 ? void 0 : _b.style.setProperty(`--ngw-${color}`, colors[color]["500"]);
            colorClassCss += NgwCoreModule.getColorCss(color, "");
        }
        style = document.createElement("style");
        head.appendChild(style);
        style.appendChild(document.createTextNode(colorClassCss));
    }
    static configure(config) {
        //check if config object is valid
        let isValidConfigObj = config && config.colors && config.colors.default && config.colors.primary ? true : false;
        NgwCoreModule.configObj = isValidConfigObj ? config : NgwCoreModule.configObj;
        NgwCoreModule.setupNgw();
        return {
            ngModule: NgwCoreModule
        };
    }
    static getColorCss(color, colorCode) {
        let cssVarName = colorCode ? `--ngw-${color}-${colorCode}` : `--ngw-${color}`;
        let className = colorCode ? `${color}-${colorCode}` : `${color}`;
        return `
        .ngw-text-color-${className},.ngw-text-hover-color-${className}:hover{
          color:var(${cssVarName});
        }
        .ngw-bg-color-${className},.ngw-bg-hover-color-${className}:hover{
          background-color:var(${cssVarName});
        }
        .ngw-border-color-${className},.ngw-border-hover-color-${className}:hover{
          border-color:var(${cssVarName});
        }
    `;
    }
}
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
NgwCoreModule.ɵmod = ɵɵdefineNgModule({ type: NgwCoreModule });
NgwCoreModule.ɵinj = ɵɵdefineInjector({ providers: [
        HelperService
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgwCoreModule, { declarations: [BgColorDirective,
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
        NgwTypoDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgwCoreModule, [{
        type: NgModule,
        args: [{
                declarations: componentsList,
                imports: [],
                providers: [
                    HelperService
                ],
                exports: componentsList
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of ngw-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlignDirective, BgColorDirective, BgColorHoverDirective, BorderDirective, BorderHoverDirective, ColDirective, EllipsisDirective, FitDirective, FontSizeDirective, FontSizeHoverDirective, FontWeightDirective, FontWeightHoverDirective, GradientBgColorDirective, HeightDirective, HeightHoverDirective, HelperService, MarginDirective, MarginHoverDirective, NgwBtnDirective, NgwCoreModule, NgwFormControlDirective, NgwTypoDirective, PaddingDirective, PaddingHoverDirective, PositionDirective, RadiusDirective, RadiusHoverDirective, RowDirective, ShadowDirective, ShadowHoverDirective, TextColorDirective, TextColorHoverDirective, WidthDirective, WidthHoverDirective };
//# sourceMappingURL=ngw-core.js.map
