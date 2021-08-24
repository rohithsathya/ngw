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
import { ThemeData } from './data/theme.data';
import { NgwAvatarComponent } from './components/ngw-avatar/ngw-avatar.component';
import { NgwAlertsComponent } from './components/ngw-alerts/ngw-alerts.component';
import { NgwButtonsComponent } from './components/ngw-buttons/ngw-buttons.component';
import { NgwFormControlsComponent } from './components/ngw-form-controls/ngw-form-controls.component';
import { NgwTypographyComponent } from './components/ngw-typography/ngw-typography.component';
import { NgwCardsDemoComponent } from './components/ngw-cards-demo/ngw-cards-demo.component';
import { NgwStatCardsDemoComponent } from './components/ngw-stat-cards-demo/ngw-stat-cards-demo.component';
import { NgwGradientDemoComponent } from './components/ngw-gradient-demo/ngw-gradient-demo.component';
import { NgwImgCardDemoComponent } from './components/ngw-img-card-demo/ngw-img-card-demo.component';
import { NgwInfoCardDemoComponent } from './components/ngw-info-card-demo/ngw-info-card-demo.component';
import { NgwBadgesDemoComponent } from './components/ngw-badges-demo/ngw-badges-demo.component';

let currentTheme = ThemeData.getCurrentThemeObj();

@NgModule({
  declarations: [
    AppComponent,
    ComponentsPageComponent,
    CorePageComponent,
    ThemePageComponent,
    IntroPageComponent,
    JsonEditorDirective,
    GettingStartedPageComponent,
    NgwAvatarComponent,
    NgwAlertsComponent,
    NgwButtonsComponent,
    NgwFormControlsComponent,
    NgwTypographyComponent,
    NgwCardsDemoComponent,
    NgwStatCardsDemoComponent,
    NgwGradientDemoComponent,
    NgwImgCardDemoComponent,
    NgwInfoCardDemoComponent,
    NgwBadgesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgwCoreModule.configure(currentTheme)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
