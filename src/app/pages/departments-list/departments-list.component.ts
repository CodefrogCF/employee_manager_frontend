import { Component, signal } from '@angular/core';
import { Department } from '../../models/departments.model';

@Component({
  selector: 'app-departments-list',
  imports: [],
  templateUrl: './departments-list.component.html',
  styleUrl: './departments-list.component.css'
})
export class DepartmentsListComponent {
  departments = signal<Department[]>([]);

  async ngOnInit() {

    const res = await fetch('http://127.0.0.1:8000/departments');

    const data = await res.json();

    this.departments.set(data.map((department: any) => ({
      id: department.id,
      department_name: department.department_name,
      department_manager: department.department_manager,
      department_budget: department.department_budget,
      department_revenue: department.department_revenue,
      department_employees: department.department_employees
    })));

    console.log('Departments fetched:', this.departments());}

}
