import { Injectable } from "@angular/core";
import { NgwThemeConfig } from "../models/NgwThemeConfig";

@Injectable()
export class NgwThemeService {

    applyTheme(ngwTheme: NgwThemeConfig) {
        let head = document.head || document.getElementsByTagName('head')[0];
        let newThemeColors = ngwTheme.colors;
        let newThemeColorClassCss = '';
        for (let color in newThemeColors) {
            document?.documentElement?.style.setProperty(`--ngw-theme-${color}`, newThemeColors[color]);
            newThemeColorClassCss += this.getColorCssForNewTheme(color);
        }
        let style = this.removeOldStyleEleAndReturnNew('ngw-theme-style');
        head.appendChild(style);
        style.appendChild(document.createTextNode(newThemeColorClassCss));
    }

    private removeOldStyleEleAndReturnNew(idStr: string) {
        let oldStyle = document.getElementById(idStr);
        oldStyle ? oldStyle.remove() : ''; //delete if exists
        let style = document.createElement("style");
        style.id = idStr;
        return style;
    }

    private getColorCssForNewTheme(color) {
        let cssVarName = `--ngw-theme-${color}`;
        let className = `${color}`;

        return `
            .ngw-text-${className},.ngw-text-hover-${className}:hover{
              color:var(${cssVarName});
            }
            .ngw-bg-${className},.ngw-bg-hover-${className}:hover{
              background-color:var(${cssVarName});
            }
            .ngw-border-${className},.ngw-border-hover-${className}:hover{
              border-color:var(${cssVarName});
            }
        `;
    }

}