import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  isSubmitted: boolean;
  form: FormGroup;
  public title: string;

  listData: any
  customers: any = []
  name: string
  constructor(public formb: FormBuilder,
    private activated: ActivatedRoute) {

  this.title = 'Add Employee'
   
    this.isSubmitted = false;

    console.log(this.activated);
    this.name = activated.snapshot.params['name']
    this.title = this.name ? 'Edit Employee' : 'Add Employee';


    console.log(this.activated)

    this.form = this.formb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }

  ngOnInit(): void {
    
  }
  onSubmit() {
    // console.log(this.form);
    // push data in list conditionally
    if(this.form.valid){
      this.isSubmitted = true;
      this.listData = this.form.value
      console.log(this.listData);
      this.customers.push(this.listData)
      
    }

    this.form.reset()
    
    console.log(this.customers);
    
  }

  patchValue(cus:any){
    this.form.patchValue(cus)
  }

  onReset() {
    this.form.reset()
  }
}
