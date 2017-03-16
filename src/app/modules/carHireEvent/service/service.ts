import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {DataModel} from '../model/data-model';


@Injectable()
export class Service {
    //private url = 'http://localhost:9090/api/carhireEvents';

    private url = 'http://localhost:7000/cars';

    constructor(private http: Http) {}

    fecthData(model: DataModel): Observable<DataModel[]> {
        console.info("model>>" + JSON.stringify([model]));
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.url, options)
            .map(this.extractData)
            .share()
            .catch(this.handleError);
    }

    addEquip(model: DataModel): Observable<DataModel> {
        //        console.info("model>>" + JSON.stringify([model.equipInitial]));
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.url, model)
            .share()
            .map(this.extractData)
            ;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
        //return body._embedded.carhireEvents || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            console.error("Error in response");
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
