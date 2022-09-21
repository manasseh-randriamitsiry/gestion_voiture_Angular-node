import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoitureComponent } from './view/voiture/voiture.component';
import { HeaderComponent } from './view/shared/header/header.component';
import { LocataireComponent } from './view/locataire/locataire.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { VoitureAddComponent } from './view/voiture/voiture-add/voiture-add.component';
import { VoitureEditComponent } from './view/voiture/voiture-edit/voiture-edit.component';
import { LocataireEditComponent } from './view/locataire/locataire-edit/locataire-edit.component';
import { LocataireAddComponent } from './view/locataire/locataire-add/locataire-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LocationComponent } from './view/location/location.component';
import { LocationAddComponent } from './view/location/location-add/location-add.component';
import { LocationEditComponent } from './view/location/location-edit/location-edit.component';
import { Recherche2DateComponent } from './view/recherche2-date/recherche2-date.component';
import { EffectifComponent } from './view/effectif/effectif.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    HeaderComponent,
    LocataireComponent,
    HomeComponent,
    VoitureAddComponent,
    VoitureEditComponent,
    LocataireEditComponent,
    LocataireAddComponent,
    LocationComponent,
    LocationAddComponent,
    LocationEditComponent,
    Recherche2DateComponent,
    EffectifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
