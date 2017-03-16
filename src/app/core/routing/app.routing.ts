import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CarHireEvent} from "../../modules/carHireEvent/car-hire-event";
import {EventGrid} from '../../modules/carHireEvent/view/grid/event-grid';
import {EventEdit} from '../../modules/carHireEvent/view/edit/event-edit';
const appRoutes: Routes = [
    {path: '', component: CarHireEvent},
    {path: 'carHireEvent', component: CarHireEvent},
    {path: 'grid', component: EventGrid},
    {path: 'edit', component: EventEdit},
    {path: '', redirectTo: 'carHireEvent', pathMatch: 'full'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

