import { Component } from '@angular/core';
import {faSearch,faCaravan,faCar,faMoneyCheck,faBars,faHome,faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch = faSearch;
  faCar = faCaravan;
  location = faMoneyCheck;
  faCarSimple = faCar;
  faHome=faHome;
  faBars = faBars;
  faPerson = faUser;
  title = 'gestion-voiture';

}
