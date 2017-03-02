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

    fecthData(equiInit: string, equipNum: string) {
        let model: DataModel;
        model = {
            id: 1,
            equipInitial: equiInit,
            equipNum: equipNum,
        }
        this.service.fecthData(model)
            .subscribe(
            list => this.tabledata = list,
            error => this.errorMessage = <any> error);
    }

    addEuip(equiInit: string, equipNum: string) {
        let model = new DataModel(null, equiInit, equipNum);
        console.log("init>>" + model.equipInitial + " num >>" + model.equipNum);
        if (!equiInit) {return;}
        if (!equipNum) {return;}

        this.service.addEquip(model)
            .subscribe(
            modelIncoming => {this.fecthData(model.equipInitial,model.equipNum)},
            error => this.errorMessage = <any> error);
    }

}




