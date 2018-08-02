import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
export class MockHeroService {
  heros: Hero[] = [
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  getHeroes() {
    return of(this.heros);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heros.find(hero => hero.id === id));
  }
}
