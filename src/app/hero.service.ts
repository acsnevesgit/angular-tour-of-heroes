import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'; // This is an example of a typical service-in-service scenario in which you inject the MessageService into the HeroService which is injected into the HeroesComponent.

// The HeroService could get hero data from anywhere such as a web service, local storage, or a mock data source.
// When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
// Registering the provider in the @Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  // Create a method to return the mock heroes.
  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
