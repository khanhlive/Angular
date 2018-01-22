import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServiceBase } from '../shared/serviceBase';
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
export class Customer{

}
@Injectable()
export class CustomerService extends ServiceBase {
    constructor(private http: HttpClient) {
        super();
    }
    GetAll(): Promise<any[]> {
        // return this.http.get(this.apiUrlBase + '/customer/getall').map((response: Response) =>
        // //console.log(response.json);
        //     response.json()
        // );
        return this.http.get<any>(this.apiUrlBase + '/customer/getall').toPromise();
    }
}