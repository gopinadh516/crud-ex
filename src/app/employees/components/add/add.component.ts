import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder,private svc:EmpService) {
    
  }
  get f() {
    return this.empForm.controls;
  }
  ngOnInit() {
    this.empForm = this.fb.group({
      name: ["", Validators.required],
      mobile: ["" , Validators.compose([Validators.required,Validators.maxLength(10)])],
      email: ["",Validators.compose([Validators.required,Validators.email])],
      dob: ["", Validators.required]
    });
  }
  submit() {    
      this.submitted = true;
      this.svc.save(this.empForm.value);
      this.empForm.reset();
  }
  addnew(){
    this.submitted=!this.submitted;
  }
}
