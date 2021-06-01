import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  name!: string;
  speed!: number;
  model!: string;
  colors!: Colors;
  options!: string[];
 
  constructor() {}

  ngOnInit(): void {
    this.name = 'audi';
    this.speed = 95;
    this.model = 'RS8';
    this.colors = {
      car: 'белый',
      salon: 'черный',
      wheels: 'серебристый',
    };
    this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
  }
bmwSelect(){
  this.name = 'BMW';
    this.speed = 200;
    this.model = 'M5';
    this.colors = {
      car: 'красный',
      salon: 'синий',
      wheels: 'серебристый',
    };
    this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
}

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
