

import { Component, OnInit } from '@angular/core';

import{Hero} from '../hero';
import {HeroService} from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id:1, name:"Dan Cusson"}
  heroes : Hero[] = null;
  salade: false;
  lasagne: false;
  taous: false;
  values: string;
  choice: string;

  constructor(
    private heroService: HeroService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) { 
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/delete_icon.jpg'));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onChecked(event){
    this.values = event.source.focus();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  addHero(name: string): void{
    name = name.trim();
    if(!name)
    {
      return;
    }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero):void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
