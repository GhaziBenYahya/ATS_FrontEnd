import { PatientForCreationDTO } from "./patient-for-creation-dto";


export class FicheTriageForCreationDto {
    
    Observation: string 
    Temp:string
     TA:string
    FC:string;
     FR:string
     SaO2:string
      Date_creation:Date = new Date()
      IdUser_AddId :number= parseInt(localStorage.getItem('ID'))

     Patient:PatientForCreationDTO
     constructor(){
        this.Patient  = new PatientForCreationDTO()
    }
}
