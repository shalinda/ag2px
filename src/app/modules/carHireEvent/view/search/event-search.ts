import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {DataModel, Library} from '../../model/data-model';
import {Service} from '../../service/service';
declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'EventSearch',
    templateUrl: './event-search.html',

})
export class EventSearch {
    heroForm: FormGroup;
    @Output('tabledata') tabledataOut = new EventEmitter<DataModel[]>();
    tabledata: DataModel[] = [];
    errorMessage: string;
    mode = 'Observable';

    constructor(private fb: FormBuilder, private service: Service) {
        this.heroForm = this.fb.group({
            equipNum: ['', Validators.required],
            equipInitial: ['', Validators.required],
            eventType: ['', Validators.required],

        });
    }

    fecthData() {
        console.log(">> ssss " + Library.data.id);
        console.log("this.heroForm >>" + this.heroForm.getRawValue());
        let model = new DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
        this.service.fecthData(model)
            .subscribe(
            list => (this.tabledata = list, this.tabledataOut.emit(this.tabledata)),
            error => this.errorMessage = <any> error);
    }

    addEuip() {
        console.log("this.heroForm >>" + this.heroForm.getRawValue());
        let model = new DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
        this.service.addEquip(model)
            .subscribe(function () {console.log('>>>')}
            ,
            error => this.errorMessage = <any> error);
    }



}




