import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { AboutComponent } from './_pages/about/about.component';
import { WorkComponent } from './_pages/work/work.component';
import { SocialComponent } from './_pages/social/social.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { HomeComponent } from './_pages/home/home.component';
import { ButtonComponent } from './_components/button/button.component';
import { ModalComponent } from './_components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalSucessComponent } from './_components/modal-sucess/modal-sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    SocialComponent,
    PageNotFoundComponent,
    HomeComponent,
    ButtonComponent,
    ModalComponent,
    ModalSucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
