import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CarHireEvent} from "../../modules/carHireEvent/view/CarHireEvent";
//import {CarHireCycle} from "../../modules/carHireCycle/CarHireCycle";
import {StudentListCoponent} from "../../modules/students/list/student-list.component";
import {HeroListComponent} from "../../modules/heroes/list/hero-list.component";
import {HeroDetailComponent} from "../../modules/heroes/detail/hero-detail.component";
import {StudentDetailComponent} from "../../modules/students/detail/student-detail.component";
import {EmployeeListComponent} from "../../modules/employees/list/employee-list.component";
import {EmployeeDetailComponent} from "../../modules/employees/detail/employee-detail.component";

const appRoutes: Routes = [
    {path: '', component: CarHireEvent},
    //    {path: 'carHireCycle', component: CarHireEvent2},
    {path: 'carHireEvent', component: CarHireEvent},
    {path: 'students', component: StudentListCoponent},
    {path: 'heroes', component: HeroListComponent},
    {path: 'heroDetail/:id', component: HeroDetailComponent},
    {path: 'studentDetail/:id', component: StudentDetailComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employeeDetail/:id', component: EmployeeDetailComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

