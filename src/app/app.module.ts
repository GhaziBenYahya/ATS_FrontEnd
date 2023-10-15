import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DocteurComponent } from './docteur/docteur.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
//import { InfirmierComponent } from './infirmier/infirmier.component';
//import { TechnicienComponent } from './technicien/technicien.component';
//import { ListepComponent } from './docteur/listep/listep.component';
//mport { ProfilpComponent } from './docteur/profilp/profilp.component';

//import { ListedComponent } from './admin/listed/listed.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './register/validation/validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DossiermedicaleComponent } from './docteur/profilp/dossiermedicale/dossiermedicale.component';

//import { AncienpatientComponent } from './infirmier/ancienpatient/ancienpatient.component';
//import { NouveaupatientComponent } from './infirmier/nouveaupatient/nouveaupatient.component';
import { ConfirmComponent } from './confirm/confirm.component';
//import { FicheDeTriageComponent } from './docteur/profilp/fiche-de-triage/fiche-de-triage.component';
//import { RapportComponent } from './docteur/profilp/rapport/rapport.component';
//import { AnalyseComponent } from './docteur/profilp/analyse/analyse.component';
//import { DemandeComponent } from './docteur/profilp/demande/demande.component';
import { CommonModule } from '@angular/common';
//import { SalledattenteComponent } from './admin/salledattente/salledattente.component';
import { StatistiqueComponent } from './admin/recrutement/recrutement.component';
//import { ProdilepaComponent } from './technicien/prodilepa/prodilepa.component';
//import { AjoutdComponent } from './admin/ajoutd/ajoutd.component';
import { AjouteUtlisateurComponent } from './admin/Publier/Publier.component';
//import { ActiverCompteComponent } from './admin/activer-compte/activer-compte.component';
import { ActiverCompte2Component } from './activer-compte2/activer-compte2.component';
import { CandidatComponent } from './candidat/candidat.component';




@NgModule({
  declarations: [
    AppComponent,
    //DocteurComponent,
    LoginComponent,
    AdminComponent,
    //InfirmierComponent,
   // TechnicienComponent,
    //ListepComponent,
    //ProfilpComponent,
   // AjoutdComponent,
    
    //ListedComponent,
    RegisterComponent,
    ValidationComponent,
    //DossiermedicaleComponent,
    
    //AncienpatientComponent,
    //NouveaupatientComponent,
    ConfirmComponent,
    //FicheDeTriageComponent,
    //RapportComponent,
    //AnalyseComponent,
    //DemandeComponent,
    //SalledattenteComponent,
    StatistiqueComponent,
   // ProdilepaComponent,
    AjouteUtlisateurComponent,
    //ActiverCompteComponent,
    ActiverCompte2Component,
    CandidatComponent,

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
