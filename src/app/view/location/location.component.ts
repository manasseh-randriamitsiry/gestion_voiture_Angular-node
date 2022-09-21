import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../service/location.service";
import Swal from "sweetalert2";
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";
import {Location} from "../../Model/location";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  // icons
  editIcon = faEdit;
  deleteIcon = faTrash;

  listLocation : Location[] = [];

  constructor(private locationService:LocationService, private router:Router) { }

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((res)=>{
      this.listLocation = res;
      console.log(this.listLocation);
    })
  }

  delete(locataire: Location) {
    this.locationService.deleteLocation(locataire.id).subscribe((response)=>{
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
          text: 'Suppression location avec success',
          showConfirmButton: false,
          timer: 2500
        })
      }
      this.ngOnInit();
    })
  }
}

