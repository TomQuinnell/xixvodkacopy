import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PoliciesTcsComponent} from "./policies-tcs/policies-tcs.component";
import {BuyPageComponent} from "./buy-page/buy-page.component";
import {DobPageComponent} from "./dob-page/dob-page.component";
import {AuthGuard} from "./auth/auth-guard";

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'tcs', component: PoliciesTcsComponent, canActivate: [AuthGuard] },
  { path: 'buy', component: BuyPageComponent, canActivate: [AuthGuard] },
  { path: 'dob', component: DobPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
