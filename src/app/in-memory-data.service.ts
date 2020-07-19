import { Injectable } from '@angular/core';

import {Hero} from './hero';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const heroes = [
      {id:4, name:"Alberto"},
      {id:5, name:"Sunil"},
      {id:6, name:"Annik"},
      {id:7, name:"Manu"},
      {id:8, name:"MOT"},
      {id:9, name:"Jean Piché"},
      {id:10, name:"Éric"},
      {id:11, name:"Louis L'italien"},
      {id:12, name:"Kriss"},
      {id:13, name:"Renaud"},
      {id:14, name:"Adam"},
      {id:15, name:"Mélissa"}
    ]
    return {heroes}
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
