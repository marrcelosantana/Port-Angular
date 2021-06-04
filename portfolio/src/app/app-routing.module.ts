import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './_pages/about/about.component';
import { WorkComponent } from './_pages/work/work.component';
import { HomeComponent } from './_pages/home/home.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { SocialComponent } from './_pages/social/social.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'social', component: SocialComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
