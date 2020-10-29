import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GreatwallofchinaComponent } from './greatwallofchina/greatwallofchina.component';
import { ChristtheRedeemerStatueComponent } from './christthe-redeemer-statue/christthe-redeemer-statue.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { ChichenItzaComponent } from './chichen-itza/chichen-itza.component';
import { TheRomanColosseumComponent } from './the-roman-colosseum/the-roman-colosseum.component';
import { PetraComponent } from './petra/petra.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    GreatwallofchinaComponent,
    ChristtheRedeemerStatueComponent,
    MachuPicchuComponent,
    ChichenItzaComponent,
    TheRomanColosseumComponent,
    PetraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
