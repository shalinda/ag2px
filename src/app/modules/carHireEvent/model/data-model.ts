import {Observable, } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class DataModel {
    constructor(
        public id: number,
        public equipInitial: string,
        public equipNum: string,
        public eventDateTime: Date,
        public eventType: string
    ) {}
}
declare var bootbox: any = 222;
export var sep = '/';
export var version: string = "22.2.2";
export class Library {
    static CANVAS_WIDTH: number = 2;
    static data: DataModel = new DataModel(123, 'zzzz', null, null, null);
}
export class SharedService {
    globalVar: string;
    globalVarUpdate: Observable<string>;
    globalVarObserver: Observer;

    constructor() {
        this.globalVarUpdate = Observable.create((observer: Observer) => {
            this.globalVarObserver = observer;
        });
    }

    updateGlobalVar(newValue: string) {
        this.globalVar = newValue;
        this.globalVarObserver.next(this.globalVar);
    }
}

export const GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://example.com/',
    //... more of your variables
});