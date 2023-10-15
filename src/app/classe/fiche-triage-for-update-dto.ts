export class FicheTriageForUpdateDto {
    Salle_soin:string
    Observation: string 
    Temp:string
TA:string
    FC:string;
     FR:string
     SaO2:string
     Date_creation:Date
     
     IdUser_AddId: number= parseInt(localStorage.getItem('ID'))
    
 ID_Patient:string;
}
