import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
 name:any
 gender:any
 dob:any
 title:any
 getVal:any
  constructor( private activated:ActivatedRoute,
    private router:ActivatedRoute) { 
this.title='Employee Details'

    
    this.name = activated.snapshot.params['name'];
    this.gender= activated.snapshot.queryParams['gender'];
    
    console.log(this.activated);
    
   console.log(this.dob);
   
  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params => this.getVal=params);
  }

}
