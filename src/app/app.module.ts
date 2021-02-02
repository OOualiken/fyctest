import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './bimo/pages/home/home.component';
import { HeaderComponent } from './bimo/layouts/header/header.component';
import { PreloaderComponent } from './bimo/layouts/preloader/preloader.component';
import { SubmitListingComponent } from './bimo/pages/submit-listing/submit-listing.component';
import { BuyingComponent } from './bimo/pages/buying/buying.component';
import {TransferService} from "../ethcontract.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PreloaderComponent,
    SubmitListingComponent,
    BuyingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TransferService,
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
