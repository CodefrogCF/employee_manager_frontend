import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
// import { DepartmentListComponent } from './components/department-list/department-list.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
},
{
    path: 'employees',
    component: EmployeesListComponent,
}];
