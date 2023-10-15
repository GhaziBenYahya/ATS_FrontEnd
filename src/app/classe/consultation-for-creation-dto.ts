export class ConsultationForCreationDto {
    titre:string
    sorce_glasgow:number
    d_respiratoire:boolean
    choc:boolean
    pu_dyspnee:boolean
    pu_triage:boolean
    pu_auscultation:string
    cv_ivd:boolean
    cv_marbrures:boolean
    cv_ausculation:string
    ne_signes_meninges:boolean
    ne_pf:string
    ne_rpm:string
    ne_babinski:string
    ne_hemiplegie:string
    abd_defense:boolean

    abd_sensible:boolean
    abd_meteorisme:boolean
    abd_orifices:boolean
    abd_tr:boolean
    Examen_Physique:string
    Ordonnonce_patient:string
    User_Add_Cons:number= parseInt(localStorage.getItem('ID'))
    Date_Edit_Cons :Date =new Date





}
