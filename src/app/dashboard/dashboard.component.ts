import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero'
import { from } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = null;

  constructor(
    private heroSrervice: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroSrervice.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
