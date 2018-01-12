import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServiceBase } from '../shared/serviceBase';
import 'rxjs/add/operator/map';
@Injectable()
export class CustomerService extends ServiceBase {
    constructor(private http: Http) {
        super();
    }
    GetAll(): Observable<any[]> {
        return this.http.get(this.apiUrlBase + '/customer/getall').map((response: Response) =>
            response.json()
        );
    }
}