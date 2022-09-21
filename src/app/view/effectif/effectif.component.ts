import { Component, OnInit } from '@angular/core';
import {Fil} from "../../Model/filtre";
import {FiltreService} from "../../service/filtre.service";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-effectif',
  templateUrl: './effectif.component.html',
  styleUrls: ['./effectif.component.css']
})
export class EffectifComponent implements OnInit {

  constructor(private rechercheService:FiltreService) { }
  EffectifList : Fil[] = [];
  total : Fil[] = [];
  filtre=new Fil();
  faSearch = faSearch;

  ngOnInit(): void {
    this.rechercheService.filtreEffectif().subscribe((response)=>{
      this.EffectifList = response;
      console.log(response);
    })
  }

  rechercher(data: NgForm) {
    this.rechercheService.filtreEffectifDate(data.value).subscribe((response)=>{
      console.log(response);
      this.EffectifList = response;
    })
  }

}
