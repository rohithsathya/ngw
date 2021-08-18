import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwCoreModule, NgwThemeConfig } from 'ngw-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { JsonEditorDirective } from './directive/json-editor.directive';
import { FormsModule } from '@angular/forms';
import { GettingStartedPageComponent } from './pages/getting-started-page/getting-started-page.component';

//light
let lightTheme:NgwThemeConfig= {
  colors:{
    "primary":"#570df8",
    "primaryFocus":"#4406cb",
    "primaryContent":"#ffffff",

    "secondary":"#f000b8",
    "secondaryFocus":"#bd0091",
    "secondaryContent":"#ffffff",

    "default":"#3d4451",
    "defaultFocus":"#2a2e37",
    "defaultContent":"#ffffff",

    //"b1":"#ffffff", //base
    //"b2":"#f9fafb",//baseFocus
    //"b3":"#d1d5db", //no match yet
    //"bc":"#1f2937",//baseContent

    "base":"#ffffff",
    "baseFocus":"#f9fafb",
    "baseContent":"#1f2937",

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

let darkTheme:NgwThemeConfig = {
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

@NgModule({
  declarations: [
    AppComponent,
    ComponentsPageComponent,
    CorePageComponent,
    ThemePageComponent,
    IntroPageComponent,
    JsonEditorDirective,
    GettingStartedPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgwCoreModule.configure(lightTheme)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
