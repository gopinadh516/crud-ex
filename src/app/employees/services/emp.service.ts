import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  employees: any = [];
  constructor() { }
  save(empData) {
    this.employees.push(empData);
  //  localStorage.setItem('emps', JSON.stringify(this.employees));
  }
  showList() {
    return this.employees;
  }
  userDelete(user, i) {
   // var index = this.employees.indexOf(i);
   // if (index > -1) {
      this.employees.splice(i, 1);
   // }
  }
}
