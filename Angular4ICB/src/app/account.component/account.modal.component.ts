
import { Component, OnInit, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'account-create-popup',
    moduleId: module.id,
    templateUrl: 'account.modal.component.html'
})
export class AccountCreateModal implements OnInit, AfterViewInit {
    constructor(private _elRef: ElementRef) { }
    
    @Input() accountId: number;
    public account: any = { name: '' };
    ngOnInit() {

    }
    ngAfterViewInit() {
        console.log(jQuery(this._elRef.nativeElement).find('input').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        }));
    }
    showPopup() {
        
        this.getAccount();
        //this.accountCreate.show(this.accountCreate.options);
    }
    btnOK_Click() {
        alert("Clicked OK");
        //this.accountCreate.hide();
    }
    btnCancel_Click() {

        //this.accountCreate.hide();
    }

    getAccount() {
        this.account = {
            name: 'Khanhnd ' + this.accountId.toString()
        };
    }
}