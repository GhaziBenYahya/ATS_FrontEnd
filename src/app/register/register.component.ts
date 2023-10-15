import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../classe/account';

import { Profile } from '../classe/profile';
import { ProfileForCreationDto } from '../classe/profile-for-creation-dto';


import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private srv: ServiceService, private router: Router) { }
  user: ProfileForCreationDto= new ProfileForCreationDto();
  
  ngOnInit(): void {
  }
  inscrir() {
    this.user.nom = this.user.account.nom
    this.user.prenom = this.user.account.prenom
    
    
 
   console.log(this.user)
    this.srv.inscrir(this.user)
      .subscribe(
        (result) => { // success
          console.log(result)
          Swal.fire('Inscription réussie, veuillez vérifier votre e-mail pour les instructions de vérification.', '', 'success')
        },
        (err) => {
          // traitement du cas d'erreur
          err =>{  console.log(err) 
            Swal.fire(' Donnees incorrect! ', '', 'error') }
   
        }

      )
  }
  selectFile(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this.handleFile.bind(this);

      reader.readAsBinaryString(file);
    }
  }
  handleFile(event) {
    var binaryString = event.target.result;
    let base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
    console.log(base64textString)
    this.user.Photo = base64textString
  }
}