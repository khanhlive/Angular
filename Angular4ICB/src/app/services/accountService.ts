import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../shared/serviceBase';

@Injectable()

export class AccountService extends ServiceBase {
    
    constructor(private http: Http) {
        super();
     }

    GetList(): Observable<any[]> {
        return this.http.get(this.apiUrlBase+'/account/getall').map((response:Response)=>response.json());
    }
}