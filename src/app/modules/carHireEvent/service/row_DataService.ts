import {Injectable, Optional} from '@angular/core';
import {row_Data} from "./row_Data";

@Injectable()
export class row_DataService {

    public getDate() {
        let data = {"name": "John", "age": 31, "city": "New York"};

        return data;
    }
    Search() {

    }
}
