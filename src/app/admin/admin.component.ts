import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ProfileDto =[];
  PatientDTO= [];
  constructor(private srv: ServiceService, private router: Router) { }
 profile = JSON.parse(localStorage.getItem('profile'))

  ngOnInit(): void { 
    
  }
  
  logout(){
    localStorage.clear()
    sessionStorage.clear()
  this.router.navigate(['/'])
  }
 
  }
