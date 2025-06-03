import { Component, signal } from '@angular/core';
import { Employee } from '../../models/employees.model';

@Component({
  selector: 'app-employees-list',
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {

  employees = signal<Employee[]>([]);

/*
  constructor() {
    // Simulating fetching data from a service
    this.employees.set([
      { id: 1, employee_first_name: 'John Doe', employee_last_name: 'Doe', employee_date_of_birth: '1990-01-01', employee_email: 'johndoe@gmail.com', employee_phone_number: '+1 (555) 555-5555', employee_department: 1, employee_position: 'Manager', employee_salary: 100000, employee_date_of_joining: '2020-01-01' },
      { id: 2, employee_first_name: 'Jane Doe', employee_last_name: 'Doe', employee_date_of_birth: '1990-01-01', employee_email: 'janedoe@gmail.com', employee_phone_number: '+1 (555) 555-5555', employee_department: 1, employee_position: 'Manager', employee_salary: 100000, employee_date_of_joining: '2020-01-01' },
      { id: 3, employee_first_name: 'Bob Doe', employee_last_name: 'Doe', employee_date_of_birth: '1990-01-01', employee_email: 'bobdoe@gmail.com', employee_phone_number: '+1 (555) 555-5555', employee_department: 1, employee_position: 'Manager', employee_salary: 100000, employee_date_of_joining: '2020-01-01' },
    ]);
  }
*/

  async ngOnInit() {
    const res = await fetch('http://127.0.0.1:8000/employees');

    const data = await res.json();

    this.employees.set(data);

    console.log('Employees fetched:', this.employees());}

}
