import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateRequest } from 'src/app/classe/authenticate-request';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  user: AuthenticateRequest = new AuthenticateRequest()
  ngOnInit(): void {
  }
  forget() {
    this.srv.  forget(this.user)
      .subscribe(res => {
        this.router.navigate(['/confirm'])
        console.log(res)
        Swal.fire('Veuillez vérifier votre courrier électronique pour les instructions de réinitialisation du mot de passe' , '' , 'success')
      },
    err => console.log(err))
  
  }
}