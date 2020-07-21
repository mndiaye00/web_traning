import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import{ MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TableMaterialComponent } from './table-material/table-material.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'table', component: TableMaterialComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
