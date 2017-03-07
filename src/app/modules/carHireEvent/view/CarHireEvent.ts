import {Component, OnInit} from "@angular/core";


import {DataModel} from '../model/data-model';


import {Service} from '../service/service';
declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
    templateUrl: './CarHireEvent.html',
    //styleUrls: ['../css/app.component.scss'],
    styles: ['.error {color:red;}'],
    providers: [Service],
    //      styleUrls: ['./app/modules/carHireEvent/app.component.scss']
})
export class CarHireEvent {
    tabledata: DataModel[] = [];
    errorMessage: string;
    mode = 'Observable';

    constructor(private service: Service) {}

    fecthData(equiInit: string, equipNum: string, eventType: string) {
        console.log("equiInit >>" + equiInit + "equipNum >>" + equipNum + "eventType >>" + eventType);

        let model = new DataModel(null, equiInit, equipNum, null, eventType);
        this.service.fecthData(model)
            .subscribe(
            list => this.tabledata = list,
            error => this.errorMessage = <any> error);
    }

    addEuip(equiInit: string, equipNum: string, eventType: string) {
        let model = new DataModel(null, equiInit, equipNum, null, eventType);
        console.log("init>>" + model.equipInitial + " num >>" + model.equipNum);


        this.service.addEquip(model)
            .subscribe(
            modelIncoming => {this.fecthData(model.equipInitial, model.equipNum, model.eventType)},
            error => this.errorMessage = <any> error);
    }

}




