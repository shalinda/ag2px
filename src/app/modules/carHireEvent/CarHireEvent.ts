import {Component, OnInit} from "@angular/core";


import {DataModel} from './data-model';


import {Service} from './service';

@Component({
    templateUrl: './app/modules/carHireEvent/CarHireEvent.html',
    styleUrls: ['./app/shared/sass/px-app-test.scss'],
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

        //        this.service.fecthData(model)
        //            .subscribe(
        //            heroes => (console.log("iniddddddt>>" + heroes.length)),
        //            error => this.errorMessage = <any> error);
    }

    addEuip(equiInit: string, equipNum: string) {
        let model = {
            id: 1,
            equipInitial: equiInit,
            equipNum: equipNum,
        };
        console.log("init>>" + model.equipInitial + " num >>" + model.equipNum);
        if (!equiInit) {return;}
        if (!equipNum) {return;}

        this.service.addEquip(model)
            .subscribe(
            modelIncoming => this.tabledata.push(modelIncoming),
            error => this.errorMessage = <any> error);
        //        this.service.addEuip(model)
        //            .subscribe(
        //            model => this.tabledata.push(model),
        //            error => this.errorMessage = <any> error);
    }

}




