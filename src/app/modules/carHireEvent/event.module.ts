import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CarHireEvent} from './car-hire-event';
import {EventGrid} from './view/grid/event-grid';
import {EventEdit} from './view/edit/event-edit';
import {EventSearch} from './view/search/event-search';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Service} from './service/service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        CarHireEvent,
        EventGrid,
        EventEdit,
        EventSearch,
    ],
    providers: [
        Service,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EventModule {}