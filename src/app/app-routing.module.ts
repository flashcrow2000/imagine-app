import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ImagineDetailsComponent } from './imagine-details/imagine-details.component';
import { ContributeComponent } from './contribute/contribute.component';
import { IdeasComponent } from './ideas/ideas.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [

  {path: 'imagine', component: ImagineDetailsComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: 'ideas', component: IdeasComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}