import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DataService {
    private subject = new Subject<any>();
    sendHeaderName(name: string) {
        this.subject.next(name);
    }
    clearHeader() {
        this.subject.next();
    }
    getHeaderName(): Observable<any> {
        return this.subject.asObservable();
    }
}