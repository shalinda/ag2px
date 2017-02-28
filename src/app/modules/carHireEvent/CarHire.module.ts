import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
 import {CarHireEvent} from './CarHireEvent';

import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        HttpModule,
        JsonpModule,
        FormsModule,
        CommonModule,



    ],
    declarations: [
        CarHireEvent

    ],
    providers: [
        //   DataService,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  

})
export class CarHireEventModule {}
