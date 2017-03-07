import {InMemoryDbService} from 'angular-in-memory-web-api';
export class DataModell implements InMemoryDbService {
    createDb() {
        let equipments = [
            {id: 1, equiInit: 'Windstorm', equipNum: 'dddd'},
            {id: 1, equiInit: 'Windstorm', equipNum: 'dddd'},
            {id: 1, equiInit: 'Windstorm', equipNum: 'dddd'},
            {id: 1, equiInit: 'Windstorm', equipNum: 'dddd'},
            {id: 1, equiInit: 'Windstorm', equipNum: 'dddd'}
        ];
        return {equipments};
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/