import { Component, OnInit } from '@angular/core';
import {LocataireService} from "../../service/locataire.service";
import Swal from "sweetalert2";
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";
import {Locataire} from "../../Model/locataire";
import {Router} from "@angular/router";

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {

  // icons
  editIcon = faEdit;
  deleteIcon = faTrash;

  listLocataire : Locataire[] = [];

  constructor(private locataireService:LocataireService, private router:Router) { }

  ngOnInit(): void {
    this.locataireService.getLocataire().subscribe((res)=>{
      this.listLocataire = res;
      console.log(this.listLocataire);
    })
}

  delete(locataire: Locataire) {
      this.locataireService.deleteLocataire(locataire.id).subscribe((response)=>{
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
            text: 'Suppression locataire avec success',
            showConfirmButton: false,
            timer: 2500
          })
        }
        this.ngOnInit();
      })
  }
}
