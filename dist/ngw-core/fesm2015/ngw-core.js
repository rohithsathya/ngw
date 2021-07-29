import { ɵɵdefineInjectable, Injectable, Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';

class HelperService {
    constructor() {
        this.themeColors = ['default', 'primary', 'secondary', 'sucess', 'error', 'warning'];
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
HelperService.ɵprov = ɵɵdefineInjectable({ factory: function HelperService_Factory() { return new HelperService(); }, token: HelperService, providedIn: "root" });
HelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HelperService.ctorParameters = () => [];

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
BgColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bgColor]'
            },] }
];
BgColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BgColorDirective.propDecorators = {
    bgColor: [{ type: Input }]
};

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
BorderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[border],[border.width],[border.color],[border.style]'
            },] }
];
BorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BorderDirective.propDecorators = {
    border: [{ type: Input, args: ['border',] }],
    borderWidth: [{ type: Input, args: ['border.width',] }],
    borderColor: [{ type: Input, args: ['border.color',] }],
    borderStyle: [{ type: Input, args: ['border.style',] }]
};

class EllipsisDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.classList.add("ngw-ellipsis");
    }
}
EllipsisDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ellipsis]'
            },] }
];
EllipsisDirective.ctorParameters = () => [
    { type: ElementRef }
];

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
FitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fit]'
            },] }
];
FitDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FitDirective.propDecorators = {
    fit: [{ type: Input, args: ['fit',] }]
};

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
FontSizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fontSize]'
            },] }
];
FontSizeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontSizeDirective.propDecorators = {
    fontSize: [{ type: Input, args: ['fontSize',] }]
};

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
FontWeightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fontWeight]'
            },] }
];
FontWeightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontWeightDirective.propDecorators = {
    fontWeight: [{ type: Input, args: ['fontWeight',] }]
};

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
GradientBgColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gradientBgColor]'
            },] }
];
GradientBgColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
GradientBgColorDirective.propDecorators = {
    gradientBgColor: [{ type: Input, args: ['gradientBgColor',] }]
};

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
HeightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[height]'
            },] }
];
HeightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
HeightDirective.propDecorators = {
    height: [{ type: Input, args: ['height',] }]
};

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
MarginDirective.decorators = [
    { type: Directive, args: [{
                selector: '[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]'
            },] }
];
MarginDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
MarginDirective.propDecorators = {
    margin: [{ type: Input, args: ['margin',] }],
    marginTop: [{ type: Input, args: ['margin.top',] }],
    marginLeft: [{ type: Input, args: ['margin.left',] }],
    marginBottom: [{ type: Input, args: ['margin.bottom',] }],
    marginRight: [{ type: Input, args: ['margin.right',] }],
    marginX: [{ type: Input, args: ['margin.x',] }],
    marginY: [{ type: Input, args: ['margin.y',] }]
};

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
PaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
            },] }
];
PaddingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
PaddingDirective.propDecorators = {
    padding: [{ type: Input, args: ['padding',] }],
    paddingTop: [{ type: Input, args: ['padding.top',] }],
    paddingLeft: [{ type: Input, args: ['padding.left',] }],
    paddingBottom: [{ type: Input, args: ['padding.bottom',] }],
    paddingRight: [{ type: Input, args: ['padding.right',] }],
    paddingX: [{ type: Input, args: ['padding.x',] }],
    paddingY: [{ type: Input, args: ['padding.y',] }]
};

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
PositionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[position]'
            },] }
];
PositionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
PositionDirective.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

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
RadiusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]'
            },] }
];
RadiusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
RadiusDirective.propDecorators = {
    radius: [{ type: Input, args: ['radius',] }],
    radiusTopLeft: [{ type: Input, args: ['radius.topLeft',] }],
    radiusTopRight: [{ type: Input, args: ['radius.topRight',] }],
    radiusBottomLeft: [{ type: Input, args: ['radius.bottomLeft',] }],
    radiusBottomRight: [{ type: Input, args: ['radius.bottomRight',] }]
};

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
ShadowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[shadow]'
            },] }
];
ShadowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
ShadowDirective.propDecorators = {
    shadow: [{ type: Input, args: ['shadow',] }]
};

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
TextColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[textColor]'
            },] }
];
TextColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
TextColorDirective.propDecorators = {
    textColor: [{ type: Input, args: ['textColor',] }]
};

class WidthDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
    }
    ngOnChanges(changes) {
        changes.width ? this.helper.applyStyle(this.el, 'width', this.width) : '';
    }
}
WidthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[width]'
            },] }
];
WidthDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
WidthDirective.propDecorators = {
    width: [{ type: Input, args: ['width',] }]
};

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
BgColorHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.bgColor]'
            },] }
];
BgColorHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BgColorHoverDirective.propDecorators = {
    hoverBgColor: [{ type: Input, args: ['hover.bgColor',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
BorderHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]'
            },] }
];
BorderHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BorderHoverDirective.propDecorators = {
    hoverBorder: [{ type: Input, args: ['hover.border',] }],
    hoverBorderWidth: [{ type: Input, args: ['hover.border.width',] }],
    hoverBorderColor: [{ type: Input, args: ['hover.border.color',] }],
    hoverBorderStyle: [{ type: Input, args: ['hover.border.style',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
FontSizeHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.fontSize]'
            },] }
];
FontSizeHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontSizeHoverDirective.propDecorators = {
    hoverFontSize: [{ type: Input, args: ['hover.fontSize',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
FontWeightHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.fontWeight]'
            },] }
];
FontWeightHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontWeightHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.fontWeight',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
HeightHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.height]'
            },] }
];
HeightHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
HeightHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.height',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
MarginHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
            },] }
];
MarginHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
MarginHoverDirective.propDecorators = {
    hoverMargin: [{ type: Input, args: ['hover.margin',] }],
    hoverMarginTop: [{ type: Input, args: ['hover.margin.top',] }],
    hoverMarginLeft: [{ type: Input, args: ['hover.margin.left',] }],
    hoverMarginBottom: [{ type: Input, args: ['hover.margin.bottom',] }],
    hoverMarginRight: [{ type: Input, args: ['hover.margin.right',] }],
    hoverMarginX: [{ type: Input, args: ['hover.margin.x',] }],
    hoverMarginY: [{ type: Input, args: ['hover.margin.y',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
PaddingHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]'
            },] }
];
PaddingHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
PaddingHoverDirective.propDecorators = {
    hoverpadding: [{ type: Input, args: ['hover.padding',] }],
    hoverpaddingTop: [{ type: Input, args: ['hover.padding.top',] }],
    hoverpaddingLeft: [{ type: Input, args: ['hover.padding.left',] }],
    hoverpaddingBottom: [{ type: Input, args: ['hover.padding.bottom',] }],
    hoverpaddingRight: [{ type: Input, args: ['hover.padding.right',] }],
    hoverpaddingX: [{ type: Input, args: ['hover.padding.x',] }],
    hoverpaddingY: [{ type: Input, args: ['hover.padding.y',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
RadiusHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
            },] }
];
RadiusHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
RadiusHoverDirective.propDecorators = {
    hoverRadius: [{ type: Input, args: ['hover.radius',] }],
    hoverRadiusTopLeft: [{ type: Input, args: ['hover.radius.topLeft',] }],
    hoverRadiusTopRight: [{ type: Input, args: ['hover.radius.topRight',] }],
    hoverRadiusBottomLeft: [{ type: Input, args: ['hover.radius.bottomLeft',] }],
    hoverRadiusBottomRight: [{ type: Input, args: ['hover.radius.bottomRight',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
ShadowHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.shadow]'
            },] }
];
ShadowHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
ShadowHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.shadow',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
TextColorHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.textColor]'
            },] }
];
TextColorHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
TextColorHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.textColor',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
WidthHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.width]'
            },] }
];
WidthHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
WidthHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.width',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};

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
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row]'
            },] }
];
RowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];

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
        this.observer.unObserve(this.el.nativeElement);
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
ColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[col],[col.lg],[col.md],[col.sm]'
            },] }
];
ColDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
ColDirective.propDecorators = {
    col: [{ type: Input, args: ['col',] }],
    colLg: [{ type: Input, args: ['col.lg',] }],
    colMd: [{ type: Input, args: ['col.md',] }],
    colSm: [{ type: Input, args: ['col.sm',] }]
};

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
            let ai = this.alignY == 'top' ? 'flex-start' : this.alignX; //align items
            ai = this.alignX == 'bottom' ? 'flex-end' : this.alignX;
            this.helper.applyStyle(this.el, 'display', 'flex');
            this.helper.applyStyle(this.el, 'alignItems', ai);
        }
    }
}
AlignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[align],[align.x],[align.y]'
            },] }
];
AlignDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
AlignDirective.propDecorators = {
    align: [{ type: Input, args: ['align',] }],
    alignX: [{ type: Input, args: ['align.x',] }],
    alignY: [{ type: Input, args: ['align.y',] }]
};

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
NgwBtnDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwBtn]'
            },] }
];
NgwBtnDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwBtnDirective.propDecorators = {
    type: [{ type: Input, args: ['ngwBtn',] }],
    color: [{ type: Input, args: ['color',] }]
};

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
NgwFormControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwFormControl]'
            },] }
];
NgwFormControlDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwFormControlDirective.propDecorators = {
    color: [{ type: Input, args: ['color',] }]
};

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
NgwTypoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwTypo]'
            },] }
];
NgwTypoDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwTypoDirective.propDecorators = {
    type: [{ type: Input, args: ['ngwTypo',] }],
    muted: [{ type: Input, args: ['muted',] }]
};

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
          background-color:var(${cssVarName});
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
NgwCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: componentsList,
                imports: [],
                exports: componentsList
            },] }
];
NgwCoreModule.ctorParameters = () => [];

/*
 * Public API Surface of ngw-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlignDirective, BgColorDirective, BgColorHoverDirective, BorderDirective, BorderHoverDirective, ColDirective, EllipsisDirective, FitDirective, FontSizeDirective, FontSizeHoverDirective, FontWeightDirective, FontWeightHoverDirective, GradientBgColorDirective, HeightDirective, HeightHoverDirective, MarginDirective, MarginHoverDirective, NgwBtnDirective, NgwCoreModule, NgwFormControlDirective, NgwTypoDirective, PaddingDirective, PaddingHoverDirective, PositionDirective, RadiusDirective, RadiusHoverDirective, RowDirective, ShadowDirective, ShadowHoverDirective, TextColorDirective, TextColorHoverDirective, WidthDirective, WidthHoverDirective, HelperService as ɵa };
//# sourceMappingURL=ngw-core.js.map
