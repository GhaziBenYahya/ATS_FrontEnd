import { HttpClient } from '@angular/common/http';
import { core } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ConsultationForCreationDto } from './classe/consultation-for-creation-dto';
import { FichePatient } from './classe/fiche-patient';
import { FicheTriageForCreationDto } from './classe/fiche-triage-for-creation-dto';
import { FicheTriageForUpdateDto } from './classe/fiche-triage-for-update-dto';
import { ProfileForCreationDto } from './classe/profile-for-creation-dto';
import { SalleDattenteForCreationDto } from './classe/salle-dattente-for-creation-dto';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url='https://localhost:44347/api/'
  
 
  login (user){
    return this.http.post(this.url+'AspNetUsers/Login',user)
  }
  
  rechercher (rich){
    return this.http.post(this.url+'Patient/GetPatientExistant',rich)
  }
  activer(code){
    return this.http.post(this.url+'AspNetUsers/Activer_compte',code)
  }
  validerC (idp ,cons){
    return this.http.post(this.url+'Consultation/AddConsultation/'+idp,cons)
  }
  confirm (user){
    return this.http.post(this.url+'AspNetUsers/reset_password',user)
  }
  forget(user){
    return this.http.post(this.url+'AspNetUsers/forgot_password',user)
  }
  getUser(){
   return this.http.get(this.url+'Profile/GetAllProfile')
 
  }
  getsall(){ 
     return this.http.get(this.url+'Salle/GetAllSalle_Dattente')
 
}
  getpatatt(specialite){
    return this.http.get(this.url+'Patient/GetAllPatientsAttende/'+specialite)
  
   }
  
  getp(idp){
    return this.http.get(this.url+'Patient/'+idp)
  }
  getft(idp){
    return this.http.get(this.url+'Fiche_Triage/'+idp)
  }
  getrapport(idp){
    return this.http.get(this.url+'Consultation/AllConsultationOfPatient/'+idp)
  }
  getanalyse(idp){
    return this.http.get(this.url+'Fiche/GetficheAnalysePatientDocteur/'+idp)
  }
  getanalysed(idp){
    return this.http.get(this.url+'Fiche/GetficheAnalysePatient/'+idp)
  }
  inscrir (user:ProfileForCreationDto){
   return this.http.post(this.url+'Profile/Register',user) 
  }
  removeUser (id_Profile ){
    return this.http.delete(this.url+'Profile/DeleteCompte/'+id_Profile)
  }
  removePat (iD_Patient){
    return this.http.delete(this.url+'Patient/Delete/'+iD_Patient)
  }
  removesall (iD_Salle ){
    return this.http.delete(this.url+'Salle/Delete/'+iD_Salle)
  }
  validerp (pat:FicheTriageForCreationDto){
    return this.http.post(this.url+'Patient/AddPatient_FicheTirage',pat) 
   }
   validerF (pat :FicheTriageForUpdateDto ){
    return this.http.put(this.url+'Fiche_Triage/UpdateFicheTriage',pat) 
   }
   ajoutsal (sal:SalleDattenteForCreationDto){
    return this.http.post(this.url+'Salle/AddSalle',sal) 
   }
   getpat(){
    return this.http.get(this.url+'Patient/GetAllPatients')
  
   } 
   getsta(sta){
     console.log(sta)
    return this.http.post(this.url+'Fiche/GetAllAnalyse',sta)
  
   }

   ajouttype(fich , idp ){
    return this.http.post(this.url+'Fiche/Addfiche/'+idp,fich) 
   }
   ajoutana(fich , idp ){
    return this.http.put(this.url+'Fiche/Update/'+idp,fich) 
   }
   getprofile(id){
     return this.http.get(this.url+'Profile/GetProfileByid/'+id)
   }
}
