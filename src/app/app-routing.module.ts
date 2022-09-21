import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoitureComponent} from "./view/voiture/voiture.component";
import {LocataireComponent} from "./view/locataire/locataire.component";
import {HomeComponent} from "./view/home/home.component";
import {VoitureAddComponent} from "./view/voiture/voiture-add/voiture-add.component";
import {VoitureEditComponent} from "./view/voiture/voiture-edit/voiture-edit.component";
import {LocataireAddComponent} from "./view/locataire/locataire-add/locataire-add.component";
import {LocataireEditComponent} from "./view/locataire/locataire-edit/locataire-edit.component";
import {LocationComponent} from "./view/location/location.component";
import {LocationEditComponent} from "./view/location/location-edit/location-edit.component";
import {LocationAddComponent} from "./view/location/location-add/location-add.component";
import {Recherche2DateComponent} from "./view/recherche2-date/recherche2-date.component";
import {EffectifComponent} from "./view/effectif/effectif.component";

const routes: Routes = [
  { path: 'voiture', component: VoitureComponent },
  { path: 'voiture/add', component: VoitureAddComponent },
  { path: 'voiture/:id', component: VoitureEditComponent },

  { path: 'locataire', component: LocataireComponent },
  { path: 'locataire/add', component: LocataireAddComponent },
  { path: 'locataire/:id', component: LocataireEditComponent },

  { path: 'location', component: LocationComponent },
  { path: 'location/add', component: LocationAddComponent },
  { path: 'location/:id', component: LocationEditComponent },

  { path: 'filter', component: Recherche2DateComponent },
  { path: 'effectif', component: EffectifComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
