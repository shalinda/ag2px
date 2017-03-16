import {Component, OnInit, Input, AfterViewInit, OnChanges} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {DataModel, Library} from '../../model/data-model';
import {Service} from '../../service/service';
declare var __moduleName: string;
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: __moduleName,
    selector: 'EventEdit',
    templateUrl: './event-edit.html',
    styles: ['.error {color:red;}'],
})
export class EventEdit implements AfterViewInit, OnChanges {
    heroForm: FormGroup;
    @Input() data2: DataModel = [];
    errorMessage: string;
    mode = 'Observable';

    constructor(private fb: FormBuilder, private service: Service) {
        this.heroForm = this.fb.group({
            equipNum: [null, Validators.required],
            equipInitial: [null, Validators.required],
            eventType: [null, Validators.required],

        });
    }

    ngAfterViewInit() {

    }

    addEuip() {
        console.log("this.heroForm >>" + this.heroForm.getRawValue());
        let model = new DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
        this.service.addEquip(model)
            .subscribe(function () {console.log('>>>')}
            ,
            error => this.errorMessage = <any> error);
    }
    ngOnChanges() {
        console.log(" ngOnChanges inputText = ");
    }
}




