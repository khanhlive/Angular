import {Injectable} from '@angular/core';
import { ServiceBase } from '../shared/serviceBase';
import { Http } from '@angular/http';

@Injectable()
export class TokenService extends ServiceBase{
    constructor(private http:Http){
        super();
    }
    
}