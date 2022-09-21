import { Component, OnInit } from '@angular/core';
import {LocataireService} from "../../../service/locataire.service";
import {Locataire} from "../../../Model/locataire";
import {FormGroup, FormControl, Validators, FormGroupDirective} from "@angular/forms";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-locataire-edit',
  templateUrl: './locataire-edit.component.html',
  styleUrls: ['./locataire-edit.component.css']
})
export class LocataireEditComponent implements OnInit {
  locataireForm = new FormGroup({
    "nom": new FormControl("",Validators.required),
    "adresse": new FormControl("",Validators.required),
    "n_locataire": new FormControl("",Validators.required)
  })

  locataire = new Locataire();
  getparam: any;
  constructor(private locataireService:LocataireService, private router:Router, private paramRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparam = this.paramRouter.snapshot.paramMap.get("id");
    this.locataireService.locataireGetById(this.getparam).subscribe((response)=>{
      console.log(response);
      this.locataireForm.patchValue({
        "n_locataire":response[0].n_locataire,
        "nom":response[0].nom,
        "adresse":response[0].adresse
      })
    })
  }

  onSubmitEdit(data: FormGroupDirective) {
    if (this.locataireForm.valid){
      console.log(this.locataireForm.value,"locataire form");
      this.locataireService.EditLocataire(this.locataireForm.value,this.getparam).subscribe(
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
