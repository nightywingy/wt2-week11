import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'ns-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  moduleId: module.id,
})
export class Page1Component implements OnInit {
  countries = null;
  
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(country => {
      this.countries = country;
    });
  }

}
/*
1. tns create nama project

2. tns platform add android

3. tns generate component page1

4. tns generate component page2

5. copy paste country.service, weather.service, dan folder assetsnya

6. di dalam file app.routing.module dan app.module itu ada yang diganti

*/
