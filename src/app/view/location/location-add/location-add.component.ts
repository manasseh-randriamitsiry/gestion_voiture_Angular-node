import { Component, OnInit } from '@angular/core';
import {Location} from "../../../Model/location";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {LocationService} from "../../../service/location.service";
import {VoitureService} from "../../../service/voiture.service";
import {LocataireService} from "../../../service/locataire.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {Locataire} from "../../../Model/locataire";
import {Voiture} from "../../../Model/voiture";

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {

  constructor(private locationService:LocationService, private router:Router, private voitureService:VoitureService, private locataireService:LocataireService) { }

  location = new Location();
  Nlocataire : Locataire[] = [];
  Nvoiture : Voiture[] = [];
  locationForm = new FormGroup({
    "n_locataire" : new FormControl("",Validators.required),
    "n_voiture": new FormControl("",Validators.required),
    "date_location": new FormControl("",Validators.required),
    "nb_jour": new FormControl("",Validators.required)
  })
  ngOnInit(): void {
    this.voitureService.getNvoiture().subscribe((response)=>{
      this.Nvoiture = response;
    })
    this.locataireService.getNlocataire().subscribe((response)=>{
      this.Nlocataire = response;
    })
  }

  onSubmitPost(data: FormGroupDirective) {
    this.locationService.createLocation(data.value).subscribe(response =>{
      console.log(response);
      if(response.message=="error"){
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: 'Une erreur s\'est produite. Veuillez réessayer à nouveau',
          showConfirmButton: false,
          timer: 2500
        })

      }else{

        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Ajout locataire avec success',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['/location']);
      }
      this.ngOnInit();
    })
  }
}

