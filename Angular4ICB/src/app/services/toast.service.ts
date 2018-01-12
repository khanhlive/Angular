import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
export class Message {
    content: string;
    style: string;
    dismissed: boolean = false;
    constructor(content, style?) {
        this.content = content
        this.style = style || 'info'
    }
}
@Injectable()
export class ToastService {
    itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    constructor(private db: AngularFireDatabase) { }
    getMessages(): AngularFireList<Message[]> {
        return this.db.list('/messages');
    }
    sendMessage(content, style) {
        const message = new Message(content, style)
        this.db.list('/messages').push(message)
    }
    dismissMessage(messageKey) {
        this.db.object(`messages/${messageKey}`).update({ 'dismissed': true })
    }
}