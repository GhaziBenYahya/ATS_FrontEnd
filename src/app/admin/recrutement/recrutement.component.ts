import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FichePatient } from 'src/app/classe/fiche-patient';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-statistique',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class StatistiqueComponent implements OnInit {
  sta: FichePatient = new FichePatient();
  Fiche_Patient
  constructor(private srv: ServiceService, private router: Router) { }

  ngOnInit(): void { 
  }
  getsta() {
    console.log(this.sta)
    this.srv.getsta(this.sta
      
      )
      .subscribe(
        (result:any) => { // success
          console.log(result)
          this.Fiche_Patient=result
          
          Swal.fire('Valider', '', 'success')
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
          Swal.fire('Invalid ', '', 'error')
        }
  
      )
  }

}
