import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {DataModel, Library} from './model/data-model';
import {Service} from './service/service';
declare var __moduleName: string;
import GlobalVariable = require('./model/data-model');

import {Router} from '@angular/router';

@Component({
    moduleId: __moduleName,
    templateUrl: './car-hire-event.html',
})
export class CarHireEvent implements AfterViewInit {
    heroForm: FormGroup;
    tabledata: DataModel[] = [];
    errorMessage: string;
    data2: DataModel = new DataModel();


    onTableDataRecvd(dataSet: DataModel[]) {
        this.tabledata = dataSet;
        console.log(this.tabledata);
    }



    constructor(_router: Router, private fb: FormBuilder, private service: Service) {
        this.heroForm = this.fb.group({
            equipNum: ['', Validators.required],
            equipInitial: ['', Validators.required],
            eventType: ['', Validators.required],

        });
    }

    ngAfterViewInit() {
        Polymer.dom(document).querySelector("#mytable").addEventListener("px-cell-click", function (e) {
            Polymer.dom(document).querySelector("#three").modalButtonClicked();
            this.data2 = new DataModel(1, 'xx', 'xxxx', null, 'OLL');
            var clickedRow = e.detail.row;
            console.log("Row clicked", clickedRow, " _selected: ", clickedRow._selected);

        });

    }

}




