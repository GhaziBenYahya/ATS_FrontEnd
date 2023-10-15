import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';


import { ServiceService } from '../service.service';
import { AuthenticateRequest } from '../classe/authenticate-request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  user: AuthenticateRequest = new AuthenticateRequest()

  ngOnInit() {

    

  }
  login() {
    this.srv.login(this.user)
      .subscribe((res: any) => {
        console.log(res)


        let user = JSON.parse(res)
        // localStorage.setItem('email' ,' result.email')
        localStorage.setItem('Role', user.role)
        localStorage.setItem('ID', user.id)

        this.srv.getprofile(user.id)
        .subscribe((profile: any) => {
          localStorage.setItem('profile',JSON.stringify(profile))
          if (user.role == 'Admin') {
            this.router.navigate(['/admin'])
          }
          else if(user.role == 'Infirmier') {
            this.router.navigate(['/infirmier'])
          }
          else if(user.role == 'User') {
            this.router.navigate(['/docteur'])
          }
          else if(user.role == 'Technicien') {
            this.router.navigate(['/technicien'])
          }
        })
      
      },
        // sessionStorage.setItem('role' , result.Role)

        err =>{  console.log(err) 
          Swal.fire(' Email ou Mot De Passe incorrect! ', '', 'error') } )
      

  }






}
