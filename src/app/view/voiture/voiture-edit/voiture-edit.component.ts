import { Component, OnInit } from '@angular/core';
import {VoitureService} from "../../../service/voiture.service";
import {Voiture} from "../../../Model/voiture";
import {FormGroup, FormControl, Validators, FormGroupDirective} from "@angular/forms";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {
  voiture:Voiture = new Voiture();
  getparam: any;
  constructor(private voitureService:VoitureService, private router:Router, private paramRouter:ActivatedRoute) {
  }

  voitureForm = new FormGroup({
    "n_voiture":new FormControl('',Validators.required),
    "designation": new FormControl('',Validators.required),
    "l_journalier": new FormControl('',Validators.pattern("[0-9]*"))
  })

  ngOnInit(): void {
    this.getparam = this.paramRouter.snapshot.paramMap.get("id");
    this.voitureService.VoitureGetById(this.getparam).subscribe((res)=>{
      console.log(res);
      this.voitureForm.patchValue({
        n_voiture: res[0].n_voiture,
        designation: res[0].designation,
        l_journalier: res[0].l_journalier
      })
    })
  }

  onSubmitEdit(form: FormGroupDirective) {
    if (this.voitureForm.valid){
      console.log(this.voitureForm.value,"voiture form");
      this.voitureService.EditVoiture(this.voitureForm.value,this.getparam).subscribe(
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
              text: 'mise a jour voiture avec success',
              showConfirmButton: false,
              timer: 2500
            })
            this.router.navigate(['/voiture']);
          }
          this.ngOnInit();

        },

        error1 => {

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
