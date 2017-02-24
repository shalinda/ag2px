import {Component, OnInit} from "@angular/core";

import {row_DataService} from './service/row_DataService'
import {row_Data} from './service/row_Data';
import {AfterViewInit, ViewChild} from '@angular/core';


@Component({
    templateUrl: './app/modules/carHireEvent/CarHireEvent.html',
    styleUrls: ['./app/shared/sass/px-app-test.scss']
})
export class CarHireEvent implements AfterViewInit {
    tabledata: row_Data[] = [];
    constructor(private dataService: row_DataService) {}
    ngAfterViewInit() {
    }

    fecthData() {
        this.tabledata = [
            {
                id: 1,
                equiInit: 'AM',
                equipNum: '000500',

            },
            {
                id: 2,
                equiInit: 'ACJR',
                equipNum: '000501',

            },
            {
                id: 3,
                equiInit: 'ACWR',
                equipNum: '000502',
            },
            {
                id: 3,
                equiInit: 'ACWR',
                equipNum: '000502',
            },
            {
                id: 3,
                equiInit: 'ACWR',
                equipNum: '000502',
            },
            {
                id: 3,
                equiInit: 'ACWR',
                equipNum: '000502',
            },
        ];

        return this.tabledata;

    }

}
