

import { Component, OnInit } from '@angular/core';

import{Hero} from '../hero';
import {HEROES} from '../mock-hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id:1, name:"Dan"}
  heroes : Hero[];
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
  }
}
