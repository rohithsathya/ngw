import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';

const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'components', component: ComponentsPageComponent },
  { path: 'core', component: CorePageComponent },
  { path: 'theme', component: ThemePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
