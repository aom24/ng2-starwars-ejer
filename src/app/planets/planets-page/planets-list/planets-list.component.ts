import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SwapiService} from "../../../core/swapi.service";

@Component({
  selector: 'app-planets-list',
  templateUrl: 'planets-list.component.html',
  styleUrls: ['planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  planets = [];
  currentPage = 1;
  numPages = 1;

  constructor(
    private swapiService:SwapiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.swapiService
      .getPlanets()
      .then((data) => {
        this.planets = data.results;
        this.numPages = data.pages;
        this.currentPage = data.page;
      });
  }

  goToPlanetDetail(planet:any) {
    const splitterUrl = planet.url.split('/');
    splitterUrl.pop();
    const id = splitterUrl.pop();

    const commands = ['planets',id];
    const navigationExtras = {};
    this.router.navigate(commands, navigationExtras);
  }

}
