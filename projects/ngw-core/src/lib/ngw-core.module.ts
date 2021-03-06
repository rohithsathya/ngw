import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { NgwBadgeDirective } from './elements/ngw-badge.directive';
import { NgwClickableDirective } from './directive/regular/clickable.directive';
import { NgwGlassDirective } from './directive/regular/glassBg.directive';
import { NgwThemeConfig } from './models/NgwThemeConfig';
import { NgwThemeService } from './services/theme.service';


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
  NgwTypoDirective,
  NgwBadgeDirective,
  NgwClickableDirective,
  NgwGlassDirective
];

@NgModule({
  declarations: componentsList,
  imports: [],
  providers:[
    HelperService,
    NgwThemeService
  ],
  exports:componentsList
})
export class NgwCoreModule { 

  /*
  // private static configObj = {
  //   "darkMode":false,
  //   "colors":{
  //     "default" :{
  //       "50":"#f0f0f0",
  //       "100":"#fafafa",
  //       "200":"#f5f5f5",
  //       "300":"#f0f0f0",
  //       "400":"#dedede",
  //       "500":"#ffffff",
  //       "600":"#979797",
  //       "700":"#818181",
  //       "800":"#606060",
  //       "900":"#3c3c3c",
  //       "contrast":"#3c3c3c"
  //     },
  //     "primary" :{
  //       "50":"#efe5fd",
  //       "100":"#d4bff9",
  //       "200":"#b794f6",
  //       "300":"#9965f4",
  //       "400":"#7e3ff2",
  //       "500":"#6002ee",
  //       "600":"#5300e8",
  //       "700":"#3d00e0",
  //       "800":"#1d00db",
  //       "900":"#0000d6",
  //       "contrast":"#fff"
  //     },
  //     "secondary" :{
  //       "50":"#ffe5ed",
  //       "100":"#ffbdd3",
  //       "200":"#ff92b6",
  //       "300":"#ff6598",
  //       "400":"#ff4080",
  //       "500":"#ff1869",
  //       "600":"#ed1466",
  //       "700":"#d70f61",
  //       "800":"#c2075e",
  //       "900":"#9d0058",
  //       "contrast":"#fff"
  //     },
  //     "success" :{
  //       "50":"#e7f5e7",
  //       "100":"#c5e5c4",
  //       "200":"#a0d49f",
  //       "300":"#7ac478",
  //       "400":"#5cb85c",
  //       "500":"#3eab3e",
  //       "600":"#359c35",
  //       "700":"#298a2b",
  //       "800":"#1c7a20",
  //       "900":"#005b0b",
  //       "contrast":"#fff"
  //     },
  //     "warning" :{
  //       "50":"#fdf2e0",
  //       "100":"#fadfb2",
  //       "200":"#f6ca81",
  //       "300":"#f3b44f",
  //       "400":"#f1a42b",
  //       "500":"#ef950f",
  //       "600":"#eb8a0c",
  //       "700":"#e57b08",
  //       "800":"#df6c06",
  //       "900":"#d55404",
  //       "contrast":"#fff"
  //     },
  //     "error" :{
  //       "50":"#ffebee",
  //       "100":"#ffcdd2",
  //       "200":"#ef9a9a",
  //       "300":"#e57373",
  //       "400":"#ef5350",
  //       "500":"#f44336",
  //       "600":"#e53935",
  //       "700":"#d32f2f",
  //       "800":"#c62828",
  //       "900":"#b71b1c",
  //       "contrast":"#fff"
  //     }
  //   }
  // }
*/
  //dark by default
  private static newThemeObj:NgwThemeConfig = {
    colors:{
      "primary":"#793ef9",
      "primaryFocus":"#570df8",
      "primaryContent":"#ffffff",

      "secondary":"#f000b8",
      "secondaryFocus":"#bd0091",
      "secondaryContent":"#ffffff",

      // "default":"#2a2e37",
      // "defaultFocus":"#16181d",
      // "defaultContent":"#ffffff",

      "default":"#2a2e37",
      "defaultFocus":"#16181d",
      "defaultContent":"#ffffff",

      "base":"#3d4451",
      "baseFocus":"#2a2e37",
      "baseContent":"#ebecf0",

      "success":"#87d039",
      "successFocus":"#68a527",
      "successContent":"#ffffff",

      "warning":"#e2d562",
      "warningFocus":"#e6e62b",
      "warningContent":"#ffffff",

      "error":"#ff6f6f",
      "errorFocus":"#ff3c3c",
      "errorContent":"#ffffff"
    }
  }

  private static themeService:NgwThemeService = new NgwThemeService();

  constructor(){
    NgwCoreModule.setupNgw();
  }

  private static setupNgw(){
    let css = `
      h1,h2,h3,h4,h5,h6,p,div{
        //color :var(--ngw-default-contrast);
        color :var(--ngw-theme-baseContent); //this needs to be removed
      }

      .ngw-text-muted{
        color:var(--ngw-default-900);
        opacity: 0.5;
      }

      .ngw-ellipsis{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      /* Typography*/
      .ngw-text{
        font-family: 'Roboto', sans-serif;
        color: var(--ngw-theme-baseContent);
      }

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
          padding: 12px;
          font-size: 14px;
          line-height: 1.42857143;
          border-style: solid;
          border-width: 1px;
          border-color: var(--ngw-theme-baseFocus);
          border-radius: 4px;
          transition: all ease-in-out 0.15s;

          background-color: var(--ngw-theme-base);
          color: var(--ngw-theme-baseContent);
      }

      .ngw-form-control:focus {
          //border-color: var(--ngw-primary-200);
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--ngw-theme-baseFocus);
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
          color: var(--ngw-theme-baseContent) !important;
          background-color: var(--ngw-theme-baseFocus) !important;
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
          vertical-align: baseline;
      }

      .ngw-btn-link:hover {
          text-decoration: underline;
      }

      .ngw-badge {
        display: inline-block;
        margin: 8px;
        border-radius: 9999px;
        padding: 2px 12px;
        font-size: inherit;

        font-family: 'Roboto', sans-serif;
        letter-spacing: normal;

        transition: opacity 200ms cubic-bezier(0.35, 0, 0.25, 1), background-color 200ms cubic-bezier(0.35, 0, 0.25, 1);
      }
      .ngw-badge {
        border :1pz solid;
      }

      .glassBg {
        backdrop-filter: blur(40px);
        background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0)), linear-gradient(100deg, rgba(255, 255, 255, 0.1) 25%, rgba(0, 0, 0, 0) 0px);
    }


    `;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement("style");
    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
     NgwCoreModule.themeService.applyTheme(NgwCoreModule.newThemeObj);
  }

  static configure(config:NgwThemeConfig):ModuleWithProviders<NgwCoreModule>{
    //update colors by merging
    for (let color in config.colors){
      if (config.colors.hasOwnProperty(color)) {
        NgwCoreModule.newThemeObj.colors[color] = config.colors[color] ?  config.colors[color] : NgwCoreModule.newThemeObj.colors[color];
      }
    }
    NgwCoreModule.themeService.applyTheme(NgwCoreModule.newThemeObj);
    return {ngModule:NgwCoreModule}
  }
}
