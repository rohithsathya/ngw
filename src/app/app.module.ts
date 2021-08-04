import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwCoreModule } from 'ngw-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { JsonEditorDirective } from './directive/json-editor.directive';
import { FormsModule } from '@angular/forms';
import { GettingStartedPageComponent } from './pages/getting-started-page/getting-started-page.component';

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
    NgwCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
