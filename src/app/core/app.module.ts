import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from './app.component';
//import {CarHireCycleModule} from '../modules/carHireCycle/CarHireCycle.module';
import {routing, appRoutingProviders} from './routing/app.routing';

//Application modules
import {AppNavigatorComponent} from "../app_navigator/app-nativator.component";
import {StudentListCoponent} from "../modules/students/list/student-list.component";
import {StudentDetailComponent} from "../modules/students/detail/student-detail.component";
import {HeroListComponent} from "../modules/heroes/list/hero-list.component";
import {HeroDetailComponent} from "../modules/heroes/detail/hero-detail.component";
import {EmployeeListComponent} from "../modules/employees/list/employee-list.component";
import {EmployeeDetailComponent} from "../modules/employees/detail/employee-detail.component";
import {HeaderComponent} from "../layout/header.component";
import {MenuComponent} from "../layout/menu.component";
import {SidebarComponent} from "../layout/sidebar.component";
import {UserProfileComponent} from "../layout/profile.component";
import {AppNavigatorDataService} from "../app_navigator/app-navigator-data.service";
import {StudentService} from "../modules/students/service/student.service";
import {HeroService} from "../modules/heroes/service/hero.service";
import {EmployeeService} from "../modules/employees/service/employee.service";
const powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
const genderList = [{'key': 'M', 'value': 'Male'}, {'key': 'F', 'value': 'Female'}];
const empTypeList = [{'key': '1', 'value': 'HR'}, {'key': '2', 'value': 'IT'}, {'key': '3', 'value': 'Admin'}];
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataModell} from './hero-data';
import {CommonModule} from '@angular/common';
import {CarHireEvent} from '../modules/carHireEvent/view/CarHireEvent';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        CommonModule,
        //AppModule2,
        //        InMemoryWebApiModule.forRoot(DataModell)
    ],
    declarations: [
        AppComponent,
        AppNavigatorComponent,
        StudentListCoponent,
        StudentDetailComponent,
        HeroListComponent,
        HeroDetailComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        UserProfileComponent,
        CarHireEvent,


    ],
    providers: [
        appRoutingProviders,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AppNavigatorDataService,
        StudentService,
        EmployeeService,
        HeroService,
        {provide: 'powerListToken', useValue: powerList},
        {provide: 'genderList', useValue: genderList},
        {provide: 'empTypeList', useValue: empTypeList}
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
