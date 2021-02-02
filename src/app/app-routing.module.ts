import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './bimo/pages/home/home.component';
import {SubmitListingComponent} from './bimo/pages/submit-listing/submit-listing.component';
import {BuyingComponent} from './bimo/pages/buying/buying.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit-listing', component: SubmitListingComponent},
  {path: 'listing-detail', component: BuyingComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
