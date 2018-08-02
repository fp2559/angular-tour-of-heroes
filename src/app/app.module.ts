import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// NgModel lives here
import {HeroService} from './hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestComponent} from './test/test.component';
import {CarComponent} from './car/car.component';
import {MockHeroService} from './hero.service.mock';
import {LogService} from './Services/log.service';
import {Car} from './car/car.model';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TestComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Car
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService,{ dataEncapsulation:false}
    // )
  ],
  providers: [MessageService, {
    provide: HeroService, useClass: MockHeroService
  }
  // , {
  //   provide: LogService,
  //   useFactory: () => {
  //     return new LogService(true);
  //   }
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
