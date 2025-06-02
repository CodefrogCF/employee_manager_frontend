export interface Department {
    id: number;
    department_name: string;
    department_manager: number; // Employee ID of the manager
    department_budget: number;
    department_revenue: number;
    department_employees: Array<number>; // Array of Employee IDs
}