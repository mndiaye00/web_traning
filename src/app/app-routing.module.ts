import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import{ MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
