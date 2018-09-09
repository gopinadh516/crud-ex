import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empForm:FormGroup;
  submitted:  boolean = false;

  constructor(private fb:FormBuilder,private svc:EmpService) { 
    this.empForm = this.fb.group({
      name: ["", Validators.required],
      mobile: ["" , Validators.compose([Validators.required,Validators.maxLength(10)])],
      email: ["",Validators.compose([Validators.required,Validators.email])],
      dob: ["", Validators.required]
    });
  }
  get f(){
    return this.empForm.controls;
  }

  ngOnInit() {
  }
  submit(){
    this.submitted= true;

    this.svc.save(this.empForm.value);
    this.empForm.reset();
  }
  addnew(){
    this.submitted=!this.submitted;
  }
}
