import { Injectable } from '@angular/core';

import { Observable, of, from} from 'rxjs';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { catchError, map, tap} from 'rxjs/operators';

import { HEROES} from './mock-hero';
import { Hero} from './hero';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroUrl)
    .pipe(
      tap(_ => this.log('Fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.heroUrl}/${id}`;

    return this.http.get<Hero>(url).
    pipe(
      tap(_ => this.log(`Fetched id: ${id}`)),
      catchError(this.handleError<Hero>(`getHero id ${id}`))
    );
  }

  updateHero(hero: Hero):Observable<any>{
    return this.http.put(this.heroUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log(`Updated hero id : ${hero.id}`)),
      catchError(this.handleError<any>('UpdatedHero'))
    );
  }

  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log(`HeroAdded id : ${hero.id}`)),
      catchError(this.handleError<Hero>('Hero Added'))
    );
  }

  deleteHero(hero: Hero | number):Observable<Hero>{
    let id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log(`Delete hero id : ${id}`)),
      catchError(this.handleError<Hero>('Delete hero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
