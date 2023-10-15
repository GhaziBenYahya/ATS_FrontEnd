import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyEmailRequest } from 'src/app/classe/verify-email-request';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activer-compte2',
  templateUrl: './activer-compte2.component.html',
  styleUrls: ['./activer-compte2.component.css']
})
export class ActiverCompte2Component implements OnInit {


  code:VerifyEmailRequest=  new VerifyEmailRequest();
  constructor(private srv: ServiceService, private router: Router) { }

  

  ngOnInit(): void {
  }

  activer() {
    
 
    console.log(this.code)
     this.srv.activer(this.code)
       .subscribe(
         (result) => { // success
           console.log(result)
           Swal.fire('Vérification réussie, vous pouvez maintenant vous connecter', '', 'success')
         },
         (err) => {
           // traitement du cas d'erreur
           console.log(err)
           Swal.fire('Code Non Valide', '', 'success')
    
         }
 
       )
   }
}

