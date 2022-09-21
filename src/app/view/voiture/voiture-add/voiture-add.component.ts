import { Component, OnInit } from '@angular/core';
import {VoitureService} from "../../../service/voiture.service";
import {Voiture} from "../../../Model/voiture";
import {FormControl, FormGroup, FormGroupDirective,Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-add.component.html',
  styleUrls: ['./voiture-add.component.css']
})
export class VoitureAddComponent implements OnInit {

  constructor(private voitureService:VoitureService, private router: Router) { }
  voiture:Voiture = new Voiture();
  ngOnInit(): void {
  }

  voitureForm = new FormGroup({
    "n_voiture":new FormControl('',Validators.required),
    "designation": new FormControl('',Validators.required),
    "l_journalier": new FormControl('',Validators.pattern("[0-9]*"))
  })

  onSubmitPost(form: FormGroupDirective) {
    this.voitureService.CreateVoiture(form.value).subscribe(
      resp=>{
        console.log(resp);
        if(resp.message=="error"){
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
            text: 'Ajout voiture avec success',
            showConfirmButton: false,
            timer: 2500
          })
          this.router.navigate(['/voiture']);
        }
        this.ngOnInit();

      },
      ()=>{

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
