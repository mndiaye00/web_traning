

import { Component, OnInit } from '@angular/core';

import{Hero} from '../hero';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import {HeroService} from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id:1, name:"Dan Cusson"}
  heroes : Hero[] = null;
  values: string;

  constructor(
    private heroService: HeroService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dialog: MatDialog
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

  deleteHeroConfirm(hero: Hero){
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(confirmResult => {
      console.log(`confirmResult = ${confirmResult}`);

      // If dialog result is YES, delete hero...
      if(confirmResult){
        this.delete(hero);
        console.log("Delete confirm is approved by user");
      }
      else{ // If dialog result is No, do not delete hero
        console.log("Delete confirm is cancelled by user");
      }
    })
  }

}
