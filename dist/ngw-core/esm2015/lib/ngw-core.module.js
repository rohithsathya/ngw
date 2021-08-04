import { NgModule } from '@angular/core';
import { BgColorDirective } from './directive/regular/bg-color.directive';
import { BorderDirective } from './directive/regular/border.directive';
import { EllipsisDirective } from './directive/regular/ellipsis.directive';
import { FitDirective } from './directive/regular/fit.directive';
import { FontSizeDirective } from './directive/regular/font-size.directive';
import { FontWeightDirective } from './directive/regular/font-weight.directive';
import { GradientBgColorDirective } from './directive/regular/gradient-bg-color.directive';
import { HeightDirective } from './directive/regular/height.directive';
import { MarginDirective } from './directive/regular/margin.directive';
import { PaddingDirective } from './directive/regular/padding.directive';
import { PositionDirective } from './directive/regular/position.directive';
import { RadiusDirective } from './directive/regular/radius.directive';
import { ShadowDirective } from './directive/regular/shadow.directive';
import { TextColorDirective } from './directive/regular/text-color.directive';
import { WidthDirective } from './directive/regular/width.directive';
import { BgColorHoverDirective } from './directive/hover/bg-color.hover.directive';
import { BorderHoverDirective } from './directive/hover/border.hover.directive';
import { FontSizeHoverDirective } from './directive/hover/font-size.hover.directive';
import { FontWeightHoverDirective } from './directive/hover/font-weight.hover.directive';
import { HeightHoverDirective } from './directive/hover/height.hover.directive';
import { MarginHoverDirective } from './directive/hover/margin.hover.directive';
import { PaddingHoverDirective } from './directive/hover/padding.hover.directive';
import { RadiusHoverDirective } from './directive/hover/radius.hover.directive';
import { ShadowHoverDirective } from './directive/hover/shadow.hover.directive';
import { TextColorHoverDirective } from './directive/hover/text-color.hover.directive';
import { WidthHoverDirective } from './directive/hover/width.hover.directive';
import { RowDirective } from './layouts/row.directive';
import { ColDirective } from './layouts/col.directive';
import { AlignDirective } from './layouts/align.directive';
import { NgwBtnDirective } from './elements/ngw-btn.directive';
import { NgwFormControlDirective } from './elements/ngw-form-control.directive';
import { NgwTypoDirective } from './elements/ngw-typo.directive';
import { HelperService } from './services/helper.service';
import * as i0 from "@angular/core";
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
export class NgwCoreModule {
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
NgwCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgwCoreModule });
NgwCoreModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        HelperService
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgwCoreModule, { declarations: [BgColorDirective,
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwCoreModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWNvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9uZ3ctY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FB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U0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFDLFNBQVM7WUFDZCxLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixVQUFVLEVBQUMsTUFBTTtTQUNsQjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBQyxTQUFTO1lBQ2QsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsVUFBVSxFQUFDLE1BQU07U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUMsU0FBUztZQUNkLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLFVBQVUsRUFBQyxNQUFNO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFDLFNBQVM7WUFDZCxLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixVQUFVLEVBQUMsTUFBTTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBQyxTQUFTO1lBQ2QsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsVUFBVSxFQUFDLE1BQU07U0FDbEI7S0FDRjtDQUNGLENBQUE7MEVBcEZVLGFBQWE7aURBQWIsYUFBYTtzREFMZDtRQUNSLGFBQWE7S0FDZCxZQUhRLEVBQUU7d0ZBTUEsYUFBYSxtQkExQ3hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixnQkFBZ0IsYUEvQmhCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixnQkFBZ0I7dUZBV0wsYUFBYTtjQVJ6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLGNBQWM7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBQztvQkFDUixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBQyxjQUFjO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJnQ29sb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2JnLWNvbG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb3JkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2JvcmRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWxsaXBzaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2VsbGlwc2lzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2ZpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9udFNpemVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2ZvbnQtc2l6ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9udFdlaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvZm9udC13ZWlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyYWRpZW50QmdDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvZ3JhZGllbnQtYmctY29sb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvaGVpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXJnaW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL21hcmdpbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGFkZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvcGFkZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zaXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3Bvc2l0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYWRpdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3JhZGl1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2hhZG93RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvcmVndWxhci9zaGFkb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRleHRDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvdGV4dC1jb2xvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgV2lkdGhEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3dpZHRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCZ0NvbG9ySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9iZy1jb2xvci5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQm9yZGVySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9ib3JkZXIuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvbnRTaXplSG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9mb250LXNpemUuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvbnRXZWlnaHRIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL2ZvbnQtd2VpZ2h0LmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWlnaHRIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL2hlaWdodC5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFyZ2luSG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9tYXJnaW4uaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhZGRpbmdIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL3BhZGRpbmcuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJhZGl1c0hvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvaG92ZXIvcmFkaXVzLmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaGFkb3dIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL3NoYWRvdy5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGV4dENvbG9ySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci90ZXh0LWNvbG9yLmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBXaWR0aEhvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvaG92ZXIvd2lkdGguaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0cy9yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbERpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0cy9jb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFsaWduRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXRzL2FsaWduLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3dCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2VsZW1lbnRzL25ndy1idG4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nd0Zvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9lbGVtZW50cy9uZ3ctZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3dUeXBvRGlyZWN0aXZlIH0gZnJvbSAnLi9lbGVtZW50cy9uZ3ctdHlwby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5cbmxldCBjb21wb25lbnRzTGlzdCA9IFtcbiAgQmdDb2xvckRpcmVjdGl2ZSxcbiAgQm9yZGVyRGlyZWN0aXZlLFxuICBFbGxpcHNpc0RpcmVjdGl2ZSxcbiAgRml0RGlyZWN0aXZlLFxuICBGb250U2l6ZURpcmVjdGl2ZSxcbiAgRm9udFdlaWdodERpcmVjdGl2ZSxcbiAgR3JhZGllbnRCZ0NvbG9yRGlyZWN0aXZlLFxuICBIZWlnaHREaXJlY3RpdmUsXG4gIE1hcmdpbkRpcmVjdGl2ZSxcbiAgUGFkZGluZ0RpcmVjdGl2ZSxcbiAgUG9zaXRpb25EaXJlY3RpdmUsXG4gIFJhZGl1c0RpcmVjdGl2ZSxcbiAgU2hhZG93RGlyZWN0aXZlLFxuICBUZXh0Q29sb3JEaXJlY3RpdmUsXG4gIFdpZHRoRGlyZWN0aXZlLFxuICBCZ0NvbG9ySG92ZXJEaXJlY3RpdmUsXG4gIEJvcmRlckhvdmVyRGlyZWN0aXZlLFxuICBGb250U2l6ZUhvdmVyRGlyZWN0aXZlLFxuICBGb250V2VpZ2h0SG92ZXJEaXJlY3RpdmUsXG4gIEhlaWdodEhvdmVyRGlyZWN0aXZlLFxuICBNYXJnaW5Ib3ZlckRpcmVjdGl2ZSxcbiAgUGFkZGluZ0hvdmVyRGlyZWN0aXZlLFxuICBSYWRpdXNIb3ZlckRpcmVjdGl2ZSxcbiAgU2hhZG93SG92ZXJEaXJlY3RpdmUsXG4gIFRleHRDb2xvckhvdmVyRGlyZWN0aXZlLFxuICBXaWR0aEhvdmVyRGlyZWN0aXZlLFxuICBSb3dEaXJlY3RpdmUsXG4gIENvbERpcmVjdGl2ZSxcbiAgQWxpZ25EaXJlY3RpdmUsXG4gIE5nd0J0bkRpcmVjdGl2ZSxcbiAgTmd3Rm9ybUNvbnRyb2xEaXJlY3RpdmUsXG4gIE5nd1R5cG9EaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50c0xpc3QsXG4gIGltcG9ydHM6IFtdLFxuICBwcm92aWRlcnM6W1xuICAgIEhlbHBlclNlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czpjb21wb25lbnRzTGlzdFxufSlcbmV4cG9ydCBjbGFzcyBOZ3dDb3JlTW9kdWxlIHsgXG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnT2JqID0ge1xuICAgIFwiZGFya01vZGVcIjpmYWxzZSxcbiAgICBcImNvbG9yc1wiOntcbiAgICAgIFwiZGVmYXVsdFwiIDp7XG4gICAgICAgIFwiNTBcIjpcIiNmMGYwZjBcIixcbiAgICAgICAgXCIxMDBcIjpcIiNmYWZhZmFcIixcbiAgICAgICAgXCIyMDBcIjpcIiNmNWY1ZjVcIixcbiAgICAgICAgXCIzMDBcIjpcIiNmMGYwZjBcIixcbiAgICAgICAgXCI0MDBcIjpcIiNkZWRlZGVcIixcbiAgICAgICAgXCI1MDBcIjpcIiNmZmZmZmZcIixcbiAgICAgICAgXCI2MDBcIjpcIiM5Nzk3OTdcIixcbiAgICAgICAgXCI3MDBcIjpcIiM4MTgxODFcIixcbiAgICAgICAgXCI4MDBcIjpcIiM2MDYwNjBcIixcbiAgICAgICAgXCI5MDBcIjpcIiMzYzNjM2NcIixcbiAgICAgICAgXCJjb250cmFzdFwiOlwiIzNjM2MzY1wiXG4gICAgICB9LFxuICAgICAgXCJwcmltYXJ5XCIgOntcbiAgICAgICAgXCI1MFwiOlwiI2VmZTVmZFwiLFxuICAgICAgICBcIjEwMFwiOlwiI2Q0YmZmOVwiLFxuICAgICAgICBcIjIwMFwiOlwiI2I3OTRmNlwiLFxuICAgICAgICBcIjMwMFwiOlwiIzk5NjVmNFwiLFxuICAgICAgICBcIjQwMFwiOlwiIzdlM2ZmMlwiLFxuICAgICAgICBcIjUwMFwiOlwiIzYwMDJlZVwiLFxuICAgICAgICBcIjYwMFwiOlwiIzUzMDBlOFwiLFxuICAgICAgICBcIjcwMFwiOlwiIzNkMDBlMFwiLFxuICAgICAgICBcIjgwMFwiOlwiIzFkMDBkYlwiLFxuICAgICAgICBcIjkwMFwiOlwiIzAwMDBkNlwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6XCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiIDp7XG4gICAgICAgIFwiNTBcIjpcIiNmZmU1ZWRcIixcbiAgICAgICAgXCIxMDBcIjpcIiNmZmJkZDNcIixcbiAgICAgICAgXCIyMDBcIjpcIiNmZjkyYjZcIixcbiAgICAgICAgXCIzMDBcIjpcIiNmZjY1OThcIixcbiAgICAgICAgXCI0MDBcIjpcIiNmZjQwODBcIixcbiAgICAgICAgXCI1MDBcIjpcIiNmZjE4NjlcIixcbiAgICAgICAgXCI2MDBcIjpcIiNlZDE0NjZcIixcbiAgICAgICAgXCI3MDBcIjpcIiNkNzBmNjFcIixcbiAgICAgICAgXCI4MDBcIjpcIiNjMjA3NWVcIixcbiAgICAgICAgXCI5MDBcIjpcIiM5ZDAwNThcIixcbiAgICAgICAgXCJjb250cmFzdFwiOlwiI2ZmZlwiXG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCIgOntcbiAgICAgICAgXCI1MFwiOlwiI2U3ZjVlN1wiLFxuICAgICAgICBcIjEwMFwiOlwiI2M1ZTVjNFwiLFxuICAgICAgICBcIjIwMFwiOlwiI2EwZDQ5ZlwiLFxuICAgICAgICBcIjMwMFwiOlwiIzdhYzQ3OFwiLFxuICAgICAgICBcIjQwMFwiOlwiIzVjYjg1Y1wiLFxuICAgICAgICBcIjUwMFwiOlwiIzNlYWIzZVwiLFxuICAgICAgICBcIjYwMFwiOlwiIzM1OWMzNVwiLFxuICAgICAgICBcIjcwMFwiOlwiIzI5OGEyYlwiLFxuICAgICAgICBcIjgwMFwiOlwiIzFjN2EyMFwiLFxuICAgICAgICBcIjkwMFwiOlwiIzAwNWIwYlwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6XCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIiA6e1xuICAgICAgICBcIjUwXCI6XCIjZmRmMmUwXCIsXG4gICAgICAgIFwiMTAwXCI6XCIjZmFkZmIyXCIsXG4gICAgICAgIFwiMjAwXCI6XCIjZjZjYTgxXCIsXG4gICAgICAgIFwiMzAwXCI6XCIjZjNiNDRmXCIsXG4gICAgICAgIFwiNDAwXCI6XCIjZjFhNDJiXCIsXG4gICAgICAgIFwiNTAwXCI6XCIjZWY5NTBmXCIsXG4gICAgICAgIFwiNjAwXCI6XCIjZWI4YTBjXCIsXG4gICAgICAgIFwiNzAwXCI6XCIjZTU3YjA4XCIsXG4gICAgICAgIFwiODAwXCI6XCIjZGY2YzA2XCIsXG4gICAgICAgIFwiOTAwXCI6XCIjZDU1NDA0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjpcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIFwiZXJyb3JcIiA6e1xuICAgICAgICBcIjUwXCI6XCIjZmZlYmVlXCIsXG4gICAgICAgIFwiMTAwXCI6XCIjZmZjZGQyXCIsXG4gICAgICAgIFwiMjAwXCI6XCIjZWY5YTlhXCIsXG4gICAgICAgIFwiMzAwXCI6XCIjZTU3MzczXCIsXG4gICAgICAgIFwiNDAwXCI6XCIjZWY1MzUwXCIsXG4gICAgICAgIFwiNTAwXCI6XCIjZjQ0MzM2XCIsXG4gICAgICAgIFwiNjAwXCI6XCIjZTUzOTM1XCIsXG4gICAgICAgIFwiNzAwXCI6XCIjZDMyZjJmXCIsXG4gICAgICAgIFwiODAwXCI6XCIjYzYyODI4XCIsXG4gICAgICAgIFwiOTAwXCI6XCIjYjcxYjFjXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjpcIiNmZmZcIlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgTmd3Q29yZU1vZHVsZS5zZXR1cE5ndygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0dXBOZ3coKXtcbiAgICBsZXQgY3NzID0gYFxuXG4gICAgICBoMSxoMixoMyxoNCxoNSxoNixwLGRpdntcbiAgICAgICAgY29sb3IgOnZhcigtLW5ndy1kZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LW11dGVke1xuICAgICAgICBjb2xvcjp2YXIoLS1uZ3ctZGVmYXVsdC05MDApO1xuICAgICAgfVxuXG4gICAgICAubmd3LWVsbGlwc2lze1xuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgLyogVHlwb2dyYXBoeSovXG5cbiAgICAgIC5uZ3ctdGV4dC1oZWFkbGluZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LXRpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtc3ViaGVhZGluZy0yIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtc3ViaGVhZGluZy0xIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtYm9keS0yIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtYm9keS0xIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LWNhcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1idXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1kaXNwbGF5LTQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDExMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1NnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtZGlzcGxheS0zIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LWRpc3BsYXktMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wN3B4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1kaXNwbGF5LTEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAqRm9ybSBDb250cm9sXG4gICAgICAqKi9cblxuICAgICAgLm5ndy1mb3JtLWNvbnRyb2wge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZ3ctZGVmYXVsdC00MDApO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4xNXMsIDtcbiAgICAgIH1cblxuICAgICAgLm5ndy1mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmd3LXByaW1hcnktMjAwKTtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCB2YXIoLS1uZ3ctcHJpbWFyeS0yMDApO1xuICAgICAgfVxuXG4gICAgICAubmd3LWZvcm0tY29udHJvbFtkaXNhYmxlZF0sXG4gICAgICAubmd3LWZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgKkJ1dHRvblxuICAgICAgKiovXG5cbiAgICAgIC5uZ3ctYnRuIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctYnRuLmRpc2FibGVkLFxuICAgICAgLm5ndy1idG5bZGlzYWJsZWRdIHtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02NSk7XG4gICAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1vdXRsaW5lIHtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1mbGF0IHtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1yYWlzZWQge1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8yMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLzE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvMTIlKTtcbiAgICAgIH1cblxuICAgICAgLm5ndy1idG4taWNvbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLm5ndy1idG4tbGluayB7XG4gICAgICAgICAgbWFyZ2luOiBpbmhlcml0O1xuICAgICAgICAgIHBhZGRpbmc6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLm5ndy1idG4tbGluazpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cblxuICAgIGA7XG4gICAgbGV0IGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXG4gICAgbGV0IGNvbG9ycyA9IE5nd0NvcmVNb2R1bGUuY29uZmlnT2JqLmNvbG9ycztcbiAgICBsZXQgY29sb3JDbGFzc0NzcyA9ICcnO1xuICAgIC8vZm9yIGVhY2gga2V5IHZhbHVlIHBhaXIsIDUwMCBpcyBhY3R1YWwgY29sb3IsIGNyZWF0ZSBjc3MgdmFyaWFibGVcbiAgICBmb3IobGV0IGNvbG9yIGluIGNvbG9ycyl7XG4gICAgICBmb3IobGV0IGNvbG9yQ29kZSBpbiBjb2xvcnNbY29sb3JdKXtcbiAgICAgICAgZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoYC0tbmd3LSR7Y29sb3J9LSR7Y29sb3JDb2RlfWAsY29sb3JzW2NvbG9yXVtjb2xvckNvZGVdKTtcbiAgICAgICAgY29sb3JDbGFzc0NzcyArPSBOZ3dDb3JlTW9kdWxlLmdldENvbG9yQ3NzKGNvbG9yLGNvbG9yQ29kZSk7XG4gICAgICB9XG4gICAgICAvL2FkZCA1MDAgYXMgZGVmdWFsdCBjb2xvclxuICAgICAgZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoYC0tbmd3LSR7Y29sb3J9YCxjb2xvcnNbY29sb3JdW1wiNTAwXCJdKTtcbiAgICAgIGNvbG9yQ2xhc3NDc3MgKz0gTmd3Q29yZU1vZHVsZS5nZXRDb2xvckNzcyhjb2xvcixcIlwiKTtcbiAgICB9XG5cbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2xvckNsYXNzQ3NzKSk7XG4gIFxuICB9XG5cbiAgc3RhdGljIGNvbmZpZ3VyZShjb25maWc6YW55KTpNb2R1bGVXaXRoUHJvdmlkZXJzPE5nd0NvcmVNb2R1bGU+e1xuICAgIC8vY2hlY2sgaWYgY29uZmlnIG9iamVjdCBpcyB2YWxpZFxuICAgIGxldCBpc1ZhbGlkQ29uZmlnT2JqID0gY29uZmlnICYmIGNvbmZpZy5jb2xvcnMgJiYgY29uZmlnLmNvbG9ycy5kZWZhdWx0ICYmIGNvbmZpZy5jb2xvcnMucHJpbWFyeSA/IHRydWUgOiBmYWxzZTtcbiAgICBOZ3dDb3JlTW9kdWxlLmNvbmZpZ09iaiA9IGlzVmFsaWRDb25maWdPYmogPyBjb25maWcgOiBOZ3dDb3JlTW9kdWxlLmNvbmZpZ09iajtcbiAgICBOZ3dDb3JlTW9kdWxlLnNldHVwTmd3KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOk5nd0NvcmVNb2R1bGVcbiAgICB9XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q29sb3JDc3MoY29sb3IsY29sb3JDb2RlKXtcbiAgICBsZXQgY3NzVmFyTmFtZSA9IGNvbG9yQ29kZSA/IGAtLW5ndy0ke2NvbG9yfS0ke2NvbG9yQ29kZX1gIDogYC0tbmd3LSR7Y29sb3J9YDtcbiAgICBsZXQgY2xhc3NOYW1lID0gY29sb3JDb2RlID8gYCR7Y29sb3J9LSR7Y29sb3JDb2RlfWAgOiBgJHtjb2xvcn1gO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgLm5ndy10ZXh0LWNvbG9yLSR7Y2xhc3NOYW1lfSwubmd3LXRleHQtaG92ZXItY29sb3ItJHtjbGFzc05hbWV9OmhvdmVye1xuICAgICAgICAgIGNvbG9yOnZhcigke2Nzc1Zhck5hbWV9KTtcbiAgICAgICAgfVxuICAgICAgICAubmd3LWJnLWNvbG9yLSR7Y2xhc3NOYW1lfSwubmd3LWJnLWhvdmVyLWNvbG9yLSR7Y2xhc3NOYW1lfTpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigke2Nzc1Zhck5hbWV9KTtcbiAgICAgICAgfVxuICAgICAgICAubmd3LWJvcmRlci1jb2xvci0ke2NsYXNzTmFtZX0sLm5ndy1ib3JkZXItaG92ZXItY29sb3ItJHtjbGFzc05hbWV9OmhvdmVye1xuICAgICAgICAgIGJvcmRlci1jb2xvcjp2YXIoJHtjc3NWYXJOYW1lfSk7XG4gICAgICAgIH1cbiAgICBgO1xuICB9XG5cblxuXG5cbn1cbiJdfQ==