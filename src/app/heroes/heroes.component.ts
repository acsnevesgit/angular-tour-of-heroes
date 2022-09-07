import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Define a component property called heroes to expose the HEROES array for binding
  selectedHero?: Hero;
  heroes: Hero[] = [];

  // Add a hero object
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. 
  // The constructor shouldn't do anything! It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  // Add a private heroService parameter of type HeroService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance
  ngOnInit(): void {
    this.getHeroes();
  }

  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); // Display a history of each time the user clicks on a hero
  }

  // If getHeroes() can't return immediately with hero data, it shouldn't be synchronous, because that would block the browser as it waits to return data.
  // Create a method to retrieve the heroes from the service.
  getHeroes(): void {
    // this.heroes = this.heroService.getHeros(); // This won't work when the HeroService is actually making requests of a remote server.
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes); // This asynchronous approach works when the HeroService requests heroes from the server.
  }



}