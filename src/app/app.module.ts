import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImagineDetailsComponent } from './imagine-details/imagine-details.component';
import { ContributeComponent } from './contribute/contribute.component';
import { IdeasComponent } from './ideas/ideas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AccountMenuComponent,
    HeaderComponent,
    HomeComponent,
    ImagineDetailsComponent,
    ContributeComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
