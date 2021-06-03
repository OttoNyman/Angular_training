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
  isEdit: boolean = false;

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

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(carName: string) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 200;
      this.model = 'M5';
      this.colors = {
        car: 'красный',
        salon: 'синий',
        wheels: 'серебристый',
      };
      this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
    } else if (carName == 'tesla') {
      this.name = 'Tesla';
      this.speed = 250;
      this.model = 'Model S';
      this.colors = {
        car: 'черный',
        salon: 'черный',
        wheels: 'серый',
      };
      this.options = ['Автопилот', 'Автопаркинг'];
    } else if (carName == 'audi') {
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
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
