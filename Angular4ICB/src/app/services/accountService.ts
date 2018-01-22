import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../shared/serviceBase';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AccountService extends ServiceBase {
    
    constructor(private http: HttpClient) {
        super();
     }

    GetList(): Promise<any[]>{ //Observable<any[]> {
        //return this.http.get(this.apiUrlBase+'/account/getall').map((response:Response)=>response.json());
        return this.http.get<any>(this.apiUrlBase+'/account/getall').toPromise();
    }
}