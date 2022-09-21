import { Component, OnInit } from '@angular/core';
import {Location} from "../../../Model/location";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {LocationService} from "../../../service/location.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-location-add',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  getparam: any;
  constructor(private locationService:LocationService, private router:Router, private paramRouter:ActivatedRoute) { }

  location = new Location();
  locationForm = new FormGroup({
    "n_locataire" : new FormControl("",Validators.required),
    "n_voiture": new FormControl("",Validators.required),
    "date_location": new FormControl("",Validators.required),
    "nb_jour": new FormControl("",Validators.required)
  })
  ngOnInit(): void {
    this.getparam = this.paramRouter.snapshot.paramMap.get("id");
    this.locationService.locationGetById(this.getparam).subscribe((response)=>{
      console.log(response);
      this.locationForm.patchValue({
        "n_locataire":response[0].n_locataire,
        "n_voiture":response[0].n_voiture,
        "nb_jour":response[0].nb_jour,
        "date_location":response[0].date_location
      })
    })
  }

  onSubmitEdit(data: FormGroupDirective) {
    if (this.locationForm.valid){
      console.log(this.locationForm.value,"locataire form");
      this.locationService.editLocation(this.locationForm.value,this.getparam).subscribe(
        resp => {
          console.log(resp);
          if (resp.message == "error") {
            Swal.fire({
              position: 'center',
              icon: 'error',
              text: 'Une erreur s\'est produite. Veuillez réessayer à nouveau',
              showConfirmButton: false,
              timer: 2500
            })

          } else {
            Swal.fire({
              position: 'center',
              icon: 'success',
              text: 'mise a jour locataire avec success',
              showConfirmButton: false,
              timer: 2500
            })
            this.router.navigate(['/locataire']);
          }
          this.ngOnInit();
        },

        () => {

          Swal.fire({
            position: 'center',
            icon: 'error',
            text: 'Une erreur s\'est produite. Veuillez réessayer à nouveau',
            showConfirmButton: false,
            timer: 2500
          })
        });
    }
  }
}

