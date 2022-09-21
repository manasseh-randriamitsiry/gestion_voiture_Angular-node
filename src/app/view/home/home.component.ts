import { Component, OnInit } from '@angular/core';
import {FiltreService} from "../../service/filtre.service";
import {Fil} from "../../Model/filtre";


@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  totalVoiture : Fil[] = [];
  totalLocation : Fil[] = [];
  totalLocataire : Fil[] = [];

  constructor(private service:FiltreService) { }

  ngOnInit(): void {
    this.service.getCountVoiture().subscribe((result)=>{
      console.log(result);
      this.totalVoiture = result;
    })
    this.service.getCountLocation().subscribe((result)=>{
      console.log(result);
      this.totalLocation = result;
    })
    this.service.getCountLocataire().subscribe((result)=>{
      console.log(result);
      this.totalLocataire = result;
    })
  }

}
