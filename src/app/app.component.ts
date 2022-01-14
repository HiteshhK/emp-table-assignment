import { Component } from '@angular/core';
import { Employee } from './Model/Employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id: number;
  empName: string = '';
  empSalary: number = 0;
  empBonus: number = 0;
  empDept: string;
  employees: Employee[] = [
    { id: 1, name: 'Arvind', salary: 5000.0, bonus: 0.2, dept: 'Sales' },
    { id: 2, name: 'Brijesh', salary: 40000.0, bonus: 0.13, dept: 'IT' },
    { id: 3, name: 'Carol', salary: 15000.0, bonus: 0.15, dept: 'IT' },
    { id: 4, name: 'Dinesh', salary: 25000.0, bonus: 0.2, dept: 'Admin' },
    { id: 5, name: 'Elena', salary: 20000.0, bonus: 0.1, dept: 'Admin' },
    { id: 6, name: 'Fatima', salary: 30000.0, bonus: 0.05, dept: 'Sales' },
    { id: 7, name: 'Gautam', salary: 19000.0, bonus: 0.1, dept: 'Sales' },
    { id: 8, name: 'Hetal', salary: 4000.0, bonus: 0.07, dept: 'IT' },
    { id: 9, name: 'Igor', salary: 39000.0, bonus: 0.1, dept: 'IT' },
    { id: 10, name: 'Jeet', salary: 22000.0, bonus: 0.15, dept: 'IT' },
  ];

  getSalColor(employee: Employee) {
    if (employee.salary < 15000) {
      return 'red';
    } else if (employee.salary < 30000) {
      return 'blue';
    } else if (employee.salary >= 30000) {
      return 'green';
    }
  }

  getTotalSalaryClass(employee: Employee) {
    const salary = employee.salary + employee.bonus * employee.salary;
    if (salary < 20000) {
      return 'text-danger';
    } else if (salary < 40000) {
      return 'text-primary';
    } else if (salary >= 40000) {
      return 'text-success';
    }
  }
  isFormInValid() {
    if (
      !(
        this.id &&
        this.empDept &&
        this.empName &&
        this.empSalary &&
        this.empBonus
      )
    ) {
      return true;
    }
    return false;
  }

  saveDetails() {
    const employee: Employee = {
      id: this.id,
      name: this.empName,
      salary: this.empSalary,
      bonus: this.empBonus,
      dept: this.empDept,
    };
    this.employees.push(employee);

    this.refreshForm();
  }

  refreshForm() {
    this.id = 0;
    this.empName = '';
    this.empSalary = 0;
    this.empBonus = 0;
    this.empDept = '';
  }
}
