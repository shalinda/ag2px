import {Component, OnInit, Input} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {DataModel} from '../../model/data-model';
import {Service} from '../../service/service';
declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'EventGrid',
    templateUrl: './event-grid.html',
    styles: ['.error {color:red;}'],
})
export class EventGrid {
    heroForm: FormGroup;
    @Input() tabledata: DataModel[] = [];
    errorMessage: string;
    mode = 'Observable';

    constructor(private fb: FormBuilder, private service: Service) {

    }

    fecthData() {
        console.log("this.heroForm >>" + this.heroForm.getRawValue());
        let model = new DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
        this.service.fecthData(model)
            .subscribe(
            list => this.tabledata = list,
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




