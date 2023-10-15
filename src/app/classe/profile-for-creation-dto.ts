import { RegisterRequest } from "./register-request"

export class ProfileForCreationDto {
    nom:string
    prenom:string
    cin:string
    fax:string
    tel:string
    tel2:string
    adresse:string
    diplome:string
    specialite:string
    siteweb:string
   
    date: Date=new Date()
    Photo:any
    account: RegisterRequest

    constructor(){
        this.account  = new RegisterRequest()
        this.account.Role = 1
    }
}


