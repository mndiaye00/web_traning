

import { Component, OnInit } from '@angular/core';

import{Hero} from '../hero';
import {HeroService} from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id:1, name:"Dan"}
  heroes : Hero[] = null;
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroComponent: Selected hero id=${hero.id}`);
    console.log(`HeroComponent: Selected hero id=${hero.id}`);
  }
}
