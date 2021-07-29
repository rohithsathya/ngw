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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWNvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9uZ3ctY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FB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LFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsVUFBVSxFQUFDLE1BQU07U0FDbEI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUMsU0FBUztZQUNkLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLFVBQVUsRUFBQyxNQUFNO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFDLFNBQVM7WUFDZCxLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixVQUFVLEVBQUMsTUFBTTtTQUNsQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBQyxTQUFTO1lBQ2QsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsVUFBVSxFQUFDLE1BQU07U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUMsU0FBUztZQUNkLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLEtBQUssRUFBQyxTQUFTO1lBQ2YsS0FBSyxFQUFDLFNBQVM7WUFDZixLQUFLLEVBQUMsU0FBUztZQUNmLFVBQVUsRUFBQyxNQUFNO1NBQ2xCO0tBQ0Y7Q0FDRixDQUFBOztZQXpGRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLGNBQWM7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBQyxjQUFjO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJnQ29sb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2JnLWNvbG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb3JkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2JvcmRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWxsaXBzaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2VsbGlwc2lzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2ZpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9udFNpemVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL2ZvbnQtc2l6ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9udFdlaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvZm9udC13ZWlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyYWRpZW50QmdDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvZ3JhZGllbnQtYmctY29sb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvaGVpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXJnaW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL21hcmdpbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGFkZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvcGFkZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zaXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3Bvc2l0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYWRpdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3JhZGl1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2hhZG93RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvcmVndWxhci9zaGFkb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRleHRDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3JlZ3VsYXIvdGV4dC1jb2xvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgV2lkdGhEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9yZWd1bGFyL3dpZHRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCZ0NvbG9ySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9iZy1jb2xvci5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQm9yZGVySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9ib3JkZXIuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvbnRTaXplSG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9mb250LXNpemUuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvbnRXZWlnaHRIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL2ZvbnQtd2VpZ2h0LmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWlnaHRIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL2hlaWdodC5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFyZ2luSG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci9tYXJnaW4uaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhZGRpbmdIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL3BhZGRpbmcuaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJhZGl1c0hvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvaG92ZXIvcmFkaXVzLmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaGFkb3dIb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2hvdmVyL3NoYWRvdy5ob3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGV4dENvbG9ySG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9ob3Zlci90ZXh0LWNvbG9yLmhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBXaWR0aEhvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvaG92ZXIvd2lkdGguaG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0cy9yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbERpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0cy9jb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFsaWduRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXRzL2FsaWduLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3dCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2VsZW1lbnRzL25ndy1idG4uZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nd0Zvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9lbGVtZW50cy9uZ3ctZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3dUeXBvRGlyZWN0aXZlIH0gZnJvbSAnLi9lbGVtZW50cy9uZ3ctdHlwby5kaXJlY3RpdmUnO1xuXG5cbmxldCBjb21wb25lbnRzTGlzdCA9IFtcbiAgQmdDb2xvckRpcmVjdGl2ZSxcbiAgQm9yZGVyRGlyZWN0aXZlLFxuICBFbGxpcHNpc0RpcmVjdGl2ZSxcbiAgRml0RGlyZWN0aXZlLFxuICBGb250U2l6ZURpcmVjdGl2ZSxcbiAgRm9udFdlaWdodERpcmVjdGl2ZSxcbiAgR3JhZGllbnRCZ0NvbG9yRGlyZWN0aXZlLFxuICBIZWlnaHREaXJlY3RpdmUsXG4gIE1hcmdpbkRpcmVjdGl2ZSxcbiAgUGFkZGluZ0RpcmVjdGl2ZSxcbiAgUG9zaXRpb25EaXJlY3RpdmUsXG4gIFJhZGl1c0RpcmVjdGl2ZSxcbiAgU2hhZG93RGlyZWN0aXZlLFxuICBUZXh0Q29sb3JEaXJlY3RpdmUsXG4gIFdpZHRoRGlyZWN0aXZlLFxuICBCZ0NvbG9ySG92ZXJEaXJlY3RpdmUsXG4gIEJvcmRlckhvdmVyRGlyZWN0aXZlLFxuICBGb250U2l6ZUhvdmVyRGlyZWN0aXZlLFxuICBGb250V2VpZ2h0SG92ZXJEaXJlY3RpdmUsXG4gIEhlaWdodEhvdmVyRGlyZWN0aXZlLFxuICBNYXJnaW5Ib3ZlckRpcmVjdGl2ZSxcbiAgUGFkZGluZ0hvdmVyRGlyZWN0aXZlLFxuICBSYWRpdXNIb3ZlckRpcmVjdGl2ZSxcbiAgU2hhZG93SG92ZXJEaXJlY3RpdmUsXG4gIFRleHRDb2xvckhvdmVyRGlyZWN0aXZlLFxuICBXaWR0aEhvdmVyRGlyZWN0aXZlLFxuICBSb3dEaXJlY3RpdmUsXG4gIENvbERpcmVjdGl2ZSxcbiAgQWxpZ25EaXJlY3RpdmUsXG4gIE5nd0J0bkRpcmVjdGl2ZSxcbiAgTmd3Rm9ybUNvbnRyb2xEaXJlY3RpdmUsXG4gIE5nd1R5cG9EaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50c0xpc3QsXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOmNvbXBvbmVudHNMaXN0XG59KVxuZXhwb3J0IGNsYXNzIE5nd0NvcmVNb2R1bGUgeyBcblxuICBwcml2YXRlIHN0YXRpYyBjb25maWdPYmogPSB7XG4gICAgXCJkYXJrTW9kZVwiOmZhbHNlLFxuICAgIFwiY29sb3JzXCI6e1xuICAgICAgXCJkZWZhdWx0XCIgOntcbiAgICAgICAgXCI1MFwiOlwiI2YwZjBmMFwiLFxuICAgICAgICBcIjEwMFwiOlwiI2ZhZmFmYVwiLFxuICAgICAgICBcIjIwMFwiOlwiI2Y1ZjVmNVwiLFxuICAgICAgICBcIjMwMFwiOlwiI2YwZjBmMFwiLFxuICAgICAgICBcIjQwMFwiOlwiI2RlZGVkZVwiLFxuICAgICAgICBcIjUwMFwiOlwiI2ZmZmZmZlwiLFxuICAgICAgICBcIjYwMFwiOlwiIzk3OTc5N1wiLFxuICAgICAgICBcIjcwMFwiOlwiIzgxODE4MVwiLFxuICAgICAgICBcIjgwMFwiOlwiIzYwNjA2MFwiLFxuICAgICAgICBcIjkwMFwiOlwiIzNjM2MzY1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6XCIjM2MzYzNjXCJcbiAgICAgIH0sXG4gICAgICBcInByaW1hcnlcIiA6e1xuICAgICAgICBcIjUwXCI6XCIjZWZlNWZkXCIsXG4gICAgICAgIFwiMTAwXCI6XCIjZDRiZmY5XCIsXG4gICAgICAgIFwiMjAwXCI6XCIjYjc5NGY2XCIsXG4gICAgICAgIFwiMzAwXCI6XCIjOTk2NWY0XCIsXG4gICAgICAgIFwiNDAwXCI6XCIjN2UzZmYyXCIsXG4gICAgICAgIFwiNTAwXCI6XCIjNjAwMmVlXCIsXG4gICAgICAgIFwiNjAwXCI6XCIjNTMwMGU4XCIsXG4gICAgICAgIFwiNzAwXCI6XCIjM2QwMGUwXCIsXG4gICAgICAgIFwiODAwXCI6XCIjMWQwMGRiXCIsXG4gICAgICAgIFwiOTAwXCI6XCIjMDAwMGQ2XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjpcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCIgOntcbiAgICAgICAgXCI1MFwiOlwiI2ZmZTVlZFwiLFxuICAgICAgICBcIjEwMFwiOlwiI2ZmYmRkM1wiLFxuICAgICAgICBcIjIwMFwiOlwiI2ZmOTJiNlwiLFxuICAgICAgICBcIjMwMFwiOlwiI2ZmNjU5OFwiLFxuICAgICAgICBcIjQwMFwiOlwiI2ZmNDA4MFwiLFxuICAgICAgICBcIjUwMFwiOlwiI2ZmMTg2OVwiLFxuICAgICAgICBcIjYwMFwiOlwiI2VkMTQ2NlwiLFxuICAgICAgICBcIjcwMFwiOlwiI2Q3MGY2MVwiLFxuICAgICAgICBcIjgwMFwiOlwiI2MyMDc1ZVwiLFxuICAgICAgICBcIjkwMFwiOlwiIzlkMDA1OFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6XCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIiA6e1xuICAgICAgICBcIjUwXCI6XCIjZTdmNWU3XCIsXG4gICAgICAgIFwiMTAwXCI6XCIjYzVlNWM0XCIsXG4gICAgICAgIFwiMjAwXCI6XCIjYTBkNDlmXCIsXG4gICAgICAgIFwiMzAwXCI6XCIjN2FjNDc4XCIsXG4gICAgICAgIFwiNDAwXCI6XCIjNWNiODVjXCIsXG4gICAgICAgIFwiNTAwXCI6XCIjM2VhYjNlXCIsXG4gICAgICAgIFwiNjAwXCI6XCIjMzU5YzM1XCIsXG4gICAgICAgIFwiNzAwXCI6XCIjMjk4YTJiXCIsXG4gICAgICAgIFwiODAwXCI6XCIjMWM3YTIwXCIsXG4gICAgICAgIFwiOTAwXCI6XCIjMDA1YjBiXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjpcIiNmZmZcIlxuICAgICAgfSxcbiAgICAgIFwid2FybmluZ1wiIDp7XG4gICAgICAgIFwiNTBcIjpcIiNmZGYyZTBcIixcbiAgICAgICAgXCIxMDBcIjpcIiNmYWRmYjJcIixcbiAgICAgICAgXCIyMDBcIjpcIiNmNmNhODFcIixcbiAgICAgICAgXCIzMDBcIjpcIiNmM2I0NGZcIixcbiAgICAgICAgXCI0MDBcIjpcIiNmMWE0MmJcIixcbiAgICAgICAgXCI1MDBcIjpcIiNlZjk1MGZcIixcbiAgICAgICAgXCI2MDBcIjpcIiNlYjhhMGNcIixcbiAgICAgICAgXCI3MDBcIjpcIiNlNTdiMDhcIixcbiAgICAgICAgXCI4MDBcIjpcIiNkZjZjMDZcIixcbiAgICAgICAgXCI5MDBcIjpcIiNkNTU0MDRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOlwiI2ZmZlwiXG4gICAgICB9LFxuICAgICAgXCJlcnJvclwiIDp7XG4gICAgICAgIFwiNTBcIjpcIiNmZmViZWVcIixcbiAgICAgICAgXCIxMDBcIjpcIiNmZmNkZDJcIixcbiAgICAgICAgXCIyMDBcIjpcIiNlZjlhOWFcIixcbiAgICAgICAgXCIzMDBcIjpcIiNlNTczNzNcIixcbiAgICAgICAgXCI0MDBcIjpcIiNlZjUzNTBcIixcbiAgICAgICAgXCI1MDBcIjpcIiNmNDQzMzZcIixcbiAgICAgICAgXCI2MDBcIjpcIiNlNTM5MzVcIixcbiAgICAgICAgXCI3MDBcIjpcIiNkMzJmMmZcIixcbiAgICAgICAgXCI4MDBcIjpcIiNjNjI4MjhcIixcbiAgICAgICAgXCI5MDBcIjpcIiNiNzFiMWNcIixcbiAgICAgICAgXCJjb250cmFzdFwiOlwiI2ZmZlwiXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBOZ3dDb3JlTW9kdWxlLnNldHVwTmd3KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzZXR1cE5ndygpe1xuICAgIGxldCBjc3MgPSBgXG5cbiAgICAgIGgxLGgyLGgzLGg0LGg1LGg2LHAsZGl2e1xuICAgICAgICBjb2xvciA6dmFyKC0tbmd3LWRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtbXV0ZWR7XG4gICAgICAgIGNvbG9yOnZhcigtLW5ndy1kZWZhdWx0LTkwMCk7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctZWxsaXBzaXN7XG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAvKiBUeXBvZ3JhcGh5Ki9cblxuICAgICAgLm5ndy10ZXh0LWhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1zdWJoZWFkaW5nLTIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1zdWJoZWFkaW5nLTEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1ib2R5LTIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1ib2R5LTEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1ib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtY2FwdGlvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LWRpc3BsYXktNCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctdGV4dC1kaXNwbGF5LTMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgICAgfVxuXG4gICAgICAubmd3LXRleHQtZGlzcGxheS0yIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA3cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICAgIH1cblxuICAgICAgLm5ndy10ZXh0LWRpc3BsYXktMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICpGb3JtIENvbnRyb2xcbiAgICAgICoqL1xuXG4gICAgICAubmd3LWZvcm0tY29udHJvbCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW5ndy1kZWZhdWx0LTQwMCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjE1cywgO1xuICAgICAgfVxuXG4gICAgICAubmd3LWZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZ3ctcHJpbWFyeS0yMDApO1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHZhcigtLW5ndy1wcmltYXJ5LTIwMCk7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctZm9ybS1jb250cm9sW2Rpc2FibGVkXSxcbiAgICAgIC5uZ3ctZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAqQnV0dG9uXG4gICAgICAqKi9cblxuICAgICAgLm5ndy1idG4ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcbiAgICAgIH1cblxuICAgICAgLm5ndy1idG4uZGlzYWJsZWQsXG4gICAgICAubmd3LWJ0bltkaXNhYmxlZF0ge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctYnRuLW91dGxpbmUge1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctYnRuLWZsYXQge1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICB9XG5cbiAgICAgIC5uZ3ctYnRuLXJhaXNlZCB7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLzIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8xMiUpO1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1pY29uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1saW5rIHtcbiAgICAgICAgICBtYXJnaW46IGluaGVyaXQ7XG4gICAgICAgICAgcGFkZGluZzogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAubmd3LWJ0bi1saW5rOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cblxuXG4gICAgYDtcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cbiAgICBsZXQgY29sb3JzID0gTmd3Q29yZU1vZHVsZS5jb25maWdPYmouY29sb3JzO1xuICAgIGxldCBjb2xvckNsYXNzQ3NzID0gJyc7XG4gICAgLy9mb3IgZWFjaCBrZXkgdmFsdWUgcGFpciwgNTAwIGlzIGFjdHVhbCBjb2xvciwgY3JlYXRlIGNzcyB2YXJpYWJsZVxuICAgIGZvcihsZXQgY29sb3IgaW4gY29sb3JzKXtcbiAgICAgIGZvcihsZXQgY29sb3JDb2RlIGluIGNvbG9yc1tjb2xvcl0pe1xuICAgICAgICBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShgLS1uZ3ctJHtjb2xvcn0tJHtjb2xvckNvZGV9YCxjb2xvcnNbY29sb3JdW2NvbG9yQ29kZV0pO1xuICAgICAgICBjb2xvckNsYXNzQ3NzICs9IE5nd0NvcmVNb2R1bGUuZ2V0Q29sb3JDc3MoY29sb3IsY29sb3JDb2RlKTtcbiAgICAgIH1cbiAgICAgIC8vYWRkIDUwMCBhcyBkZWZ1YWx0IGNvbG9yXG4gICAgICBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShgLS1uZ3ctJHtjb2xvcn1gLGNvbG9yc1tjb2xvcl1bXCI1MDBcIl0pO1xuICAgICAgY29sb3JDbGFzc0NzcyArPSBOZ3dDb3JlTW9kdWxlLmdldENvbG9yQ3NzKGNvbG9yLFwiXCIpO1xuICAgIH1cblxuICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbG9yQ2xhc3NDc3MpKTtcbiAgXG4gIH1cblxuICBzdGF0aWMgY29uZmlndXJlKGNvbmZpZzphbnkpOk1vZHVsZVdpdGhQcm92aWRlcnM8Tmd3Q29yZU1vZHVsZT57XG4gICAgLy9jaGVjayBpZiBjb25maWcgb2JqZWN0IGlzIHZhbGlkXG4gICAgbGV0IGlzVmFsaWRDb25maWdPYmogPSBjb25maWcgJiYgY29uZmlnLmNvbG9ycyAmJiBjb25maWcuY29sb3JzLmRlZmF1bHQgJiYgY29uZmlnLmNvbG9ycy5wcmltYXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIE5nd0NvcmVNb2R1bGUuY29uZmlnT2JqID0gaXNWYWxpZENvbmZpZ09iaiA/IGNvbmZpZyA6IE5nd0NvcmVNb2R1bGUuY29uZmlnT2JqO1xuICAgIE5nd0NvcmVNb2R1bGUuc2V0dXBOZ3coKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6Tmd3Q29yZU1vZHVsZVxuICAgIH1cblxuXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRDb2xvckNzcyhjb2xvcixjb2xvckNvZGUpe1xuICAgIGxldCBjc3NWYXJOYW1lID0gY29sb3JDb2RlID8gYC0tbmd3LSR7Y29sb3J9LSR7Y29sb3JDb2RlfWAgOiBgLS1uZ3ctJHtjb2xvcn1gO1xuICAgIGxldCBjbGFzc05hbWUgPSBjb2xvckNvZGUgPyBgJHtjb2xvcn0tJHtjb2xvckNvZGV9YCA6IGAke2NvbG9yfWA7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAubmd3LXRleHQtY29sb3ItJHtjbGFzc05hbWV9LC5uZ3ctdGV4dC1ob3Zlci1jb2xvci0ke2NsYXNzTmFtZX06aG92ZXJ7XG4gICAgICAgICAgY29sb3I6dmFyKCR7Y3NzVmFyTmFtZX0pO1xuICAgICAgICB9XG4gICAgICAgIC5uZ3ctYmctY29sb3ItJHtjbGFzc05hbWV9LC5uZ3ctYmctaG92ZXItY29sb3ItJHtjbGFzc05hbWV9OmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKCR7Y3NzVmFyTmFtZX0pO1xuICAgICAgICB9XG4gICAgICAgIC5uZ3ctYm9yZGVyLWNvbG9yLSR7Y2xhc3NOYW1lfSwubmd3LWJvcmRlci1ob3Zlci1jb2xvci0ke2NsYXNzTmFtZX06aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoJHtjc3NWYXJOYW1lfSk7XG4gICAgICAgIH1cbiAgICBgO1xuICB9XG5cblxuXG5cbn1cbiJdfQ==