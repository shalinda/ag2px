import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {routing} from './routing/app.routing';

//Application modules
import {EventModule} from '../modules/carHireEvent/event.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        CommonModule,
        EventModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [

        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
