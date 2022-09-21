import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Fil} from "../../Model/filtre";
import {FiltreService} from "../../service/filtre.service";
import {VoitureService} from "../../service/voiture.service";
import {Voiture} from "../../Model/voiture";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recherche2-date',
  templateUrl: './recherche2-date.component.html',
  styleUrls: ['./recherche2-date.component.css']
})
export class Recherche2DateComponent implements OnInit {

  faSearch = faSearch;
  filtreResultat : Fil[] = [];
  total : Fil[] = [];
  voitureNameList : Voiture[] = [];
  filtre=new Fil();
  constructor(private rechercheService:FiltreService,private voitureService:VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getNvoiture().subscribe((response)=>{
      this.voitureNameList = response;
      console.log(response);
    })
    this.rechercheService.filtreDataGet().subscribe((response)=>{
      console.log(response);
      this.filtreResultat = response;
    })
    this.rechercheService.getTotalLocationGet().subscribe((response)=>{
      this.total = response;
      console.log(response);
    })

  }

  rechercher(data: NgForm) {
    this.rechercheService.filtreData(data.value).subscribe((response)=>{
      console.log(response);
      this.filtreResultat = response;
    })
    this.rechercheService.getTotalLocation(data.value).subscribe((response)=>{
      this.total = response;
      console.log(response);
    })
  }
}
