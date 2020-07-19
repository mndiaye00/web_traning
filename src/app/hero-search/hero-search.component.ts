import { Component, OnInit } from '@angular/core';

import {Observable, Subject} from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {Hero} from '../hero';

import { HeroService} from '../hero.service'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) { }

  search(term: string): void{
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      // attendez 300 ms après chaque frappe avant d'envisager le terme
      debounceTime(300),

      // ignorer le nouveau terme s'il est identique au terme précédent
      distinctUntilChanged(),

      // passer à une nouvelle recherche observable chaque fois que le terme change
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
