import { Component, OnInit } from '@angular/core';
import {VoitureService} from "../../service/voiture.service";
import {Voiture} from "../../Model/voiture";
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  // icons
  deleteIcon = faTrash;
  editIcon = faEdit;

  listVoiture: Voiture[] = [];
  voiture:Voiture = new Voiture();

  constructor(private voitureService:VoitureService) {
  }

  ngOnInit(): void {
    this.voitureService.getVoiture().subscribe((res)=>{
      this.listVoiture = res;
      console.log(this.listVoiture)
    })
  }

  delete(data: Voiture) {
    this.voitureService.deleteVoiture(data.id).subscribe((res)=>{
      if (res.message == "error") {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: 'Erreur suppression',
          showConfirmButton: false,
          timer: 2500
        })

      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Suppression avec success',
          showConfirmButton: false,
          timer: 2500
        })
      }
      this.ngOnInit();
      }
    )}
}
