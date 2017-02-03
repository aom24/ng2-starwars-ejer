import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../../core/swapi.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-planet',
  templateUrl: 'planet.component.html',
  styleUrls: ['planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet = {};

  constructor(
    private swapiService:SwapiService,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      const planetId = +params.id;

      this.swapiService.getPlanet(planetId).then((res) => this.planet=res);
    });
  }

}
