import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidersComponent } from './sliders/sliders.component';
import { CardComponent } from './card/card.component';
import { MustafaAlwaeliComponent } from './mustafa-alwaeli/mustafa-alwaeli.component';
import { MustafaRaadComponent } from './mustafa-raad/mustafa-raad.component';
import { MohammedAliComponent } from './mohammed-ali/mohammed-ali.component';
import { MohammedRedaComponent } from './mohammed-reda/mohammed-reda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidersComponent,
    CardComponent,
    MustafaAlwaeliComponent,
    MustafaRaadComponent,
    MohammedAliComponent,
    MohammedRedaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
