import { Component, OnInit } from '@angular/core';
import {Locataire} from "../../../Model/locataire";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {LocataireService} from "../../../service/locataire.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-locataire-add',
  templateUrl: './locataire-add.component.html',
  styleUrls: ['./locataire-add.component.css']
})
export class LocataireAddComponent implements OnInit {

  constructor(private locataireService:LocataireService, private router:Router) { }

  locataire = new Locataire();
  locataireForm = new FormGroup({
    "n_locataire" : new FormControl("",Validators.required),
    "nom": new FormControl("",Validators.required),
    "adresse": new FormControl("",Validators.required)
  })
  ngOnInit(): void {
  }

  onSubmitPost(data: FormGroupDirective) {
      this.locataireService.addLocataire(data.value).subscribe(response =>{
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
          this.router.navigate(['/locataire']);
        }
        this.ngOnInit();
      })
  }
}
