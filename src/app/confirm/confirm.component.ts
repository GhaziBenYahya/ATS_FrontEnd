import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateRequest } from '../classe/authenticate-request';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  user: AuthenticateRequest = new AuthenticateRequest()
  constructor(private srv: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  confirm() {
    this.srv.confirm(this.user)
      .subscribe(res => {
        this.router.navigate([''])
        console.log(res)
          Swal.fire(' réussite de changement de mot de passe', '', 'success')
      },
        err=> console.log(err))
    
      }
}
