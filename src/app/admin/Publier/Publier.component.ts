import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileForCreationDto } from 'src/app/classe/profile-for-creation-dto';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'Publier',
  templateUrl: './Publier.component.html',
  styleUrls: ['./Publier.component.css']
})
export class AjouteUtlisateurComponent implements OnInit {


  constructor(private srv: ServiceService, private router: Router) { }
  user: ProfileForCreationDto = new ProfileForCreationDto();
  inscriptionForm: FormGroup = new FormGroup({
    'prenom': new FormControl(Validators.required),
    'nom': new FormControl(Validators.required),
    'username': new FormControl(Validators.minLength(10)),
    'email': new FormControl([Validators.minLength(10), Validators.required, Validators.email]),
    'motpass': new FormControl(Validators.minLength(9)),
    'cmotpass': new FormControl(Validators.minLength(9)),
    'cin': new FormControl(Validators.minLength(8)),
    'tel': new FormControl(Validators.minLength(8)),
    'sexe': new FormControl(Validators.required),
    'situation': new FormControl(Validators.required),
    'age': new FormControl(Validators.required),




  })


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
          console.log(err)

        }

      )
  }
  test_passwpord (){
    if (this.user.account.confirm != this.user.account.password)
    this.inscriptionForm.get('cmotpass').setErrors({'conf_error':true})
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
