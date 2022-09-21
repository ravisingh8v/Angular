import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  @Output() titleChange= new EventEmitter<any>;

  @Input() addList:any=[];
  
  
  constructor(
    public router:Router
  ) {
  
  }

  ngOnInit(): void {
  }

  details(c:any){
    this.router.navigate(['employee/details'],{ queryParams:c})
  }
 
    
  onDelete(d: any){
    debugger
    this.addList= this.addList.filter((item:any) => item.name !== d.name)
  }
onEdit(cus:any){
 
  this.titleChange.emit(cus)
}
}
