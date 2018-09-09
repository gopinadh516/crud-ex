import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  emps: any;
  empForm: FormGroup;
  edit:boolean=false;
  constructor(private fb: FormBuilder, private svc: EmpService) {

    this.empForm = this.fb.group({
      name: ["", Validators.required],
      mobile: ["", Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      dob: ["", Validators.required]

    })
  }

  ngOnInit() {
    this.emps = this.svc.showList();
    
  }
  userEdit(user, i) {
    this.edit=true;
    this.empForm.setValue({
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      dob: user.dob
    });
    this.userDelete(user,i)
  }
  userDelete(user, i) {
    this.svc.userDelete(user, i);
  }
  submit(){
    this.empForm.setValue({
      name: this.empForm.value.name,
      mobile: this.empForm.value.mobile,
      email:this.empForm.value.email,
      dob: this.empForm.value.dob

    });
    this.svc.save(this.empForm.value);
    this.edit=false;
  }

}
