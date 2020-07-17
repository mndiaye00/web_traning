import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { HEROES} from './mock-hero';
import { Hero} from './hero';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }
  
  getHeroes(): Observable<Hero[]>{
    this.messageService.addMessage('HeroService: héroes récupérés');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    return of(HEROES.find(hero => hero.id === id));
  }
}
