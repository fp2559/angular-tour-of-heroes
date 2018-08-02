import {Component, OnInit, ReflectiveInjector} from '@angular/core';
import {Car} from './car.model';
import {Engine} from './engine.model';
import {Doors} from './doors.model';
import {Body} from './body.model';
import {LogService} from '../Services/log.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  // constructor(private logService: LogService) {
  // }
  constructor() {
  }

  ngOnInit() {
    // this.logService.log(`Car ngOnInit`);
    const injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Doors, Body]);
    const car = injector.get(Car);
    car.run();
  }

}
