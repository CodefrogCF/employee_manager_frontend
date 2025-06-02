export interface Department {
    id: number;
    department_name: string;
    department_manager: number;
    department_budget: number;
    department_revenue: number;
    department_employees: Array<number>;
}