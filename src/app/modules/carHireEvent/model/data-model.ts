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
export var sep = '/';
export var version: string = "22.2.2";
export class Library {
    static CANVAS_WIDTH: number = 2;
    static data: DataModel = new DataModel(123, 'zzzz', null, null, null);
} 