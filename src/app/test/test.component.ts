import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = `Template <script>alert('evil never sleeps')</script>Syntax`;
  myHero = 'Windstorm';
  myHeroes = [
    new Hero(1, 'Windstom'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  callPhone(phone: string): void {
    this.myHero = phone;
  }

}
