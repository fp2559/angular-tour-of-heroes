import {Engine} from './engine.model';
import {Doors} from './doors.model';
import {Body} from './body.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Car {
  constructor(private engine: Engine,
              private body: Body,
              private doors: Doors) {
  }

  run() {
    this.engine.start();
  }
}
