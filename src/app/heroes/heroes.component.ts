import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroServiceService } from '../hero-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroServiceService,
    public messageService: MessageService
  ) { }
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
  }
  ngOnInit() {
    this.getHeroes();
  }

}
