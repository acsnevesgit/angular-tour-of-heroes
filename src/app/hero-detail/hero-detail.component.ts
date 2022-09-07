import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

// This component only receives a hero object through its hero property and displays it.
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Add a hero property, preceded by the @Input() decorator.
  @Input() hero?: Hero
  
  constructor() { }

  ngOnInit(): void {
  }

}
