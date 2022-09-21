import { Component, OnInit } from '@angular/core';
import {faBars,faUser,faCar,faMoneyCheck,faHome,faSearch,faListNumeric} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faUser = faUser;
  faCar = faCar;
  faMoney = faMoneyCheck;
  faHome = faHome;
  faSearch = faSearch;
  faListNumeric = faListNumeric;

  constructor() { }

  ngOnInit(): void {

  }

}
