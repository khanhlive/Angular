import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../services/customerService';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/dataService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'customer-list',
    moduleId: module.id,
    templateUrl: 'customer.component.html',
    providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
    public customers: any[];
    animal: string;
    name: string;
    constructor(private customerService: CustomerService, private ds: DataService, private dialog: MatDialog) { }


    btnCreate_Click():void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    ngOnInit() {
        this.ds.sendHeaderName('Quản lý khách hàng');
        this.customerService.GetAll().subscribe((response: any) => {
            this.customers = response;
            console.log(response);
        }, error => {
            console.log(error);
        })
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.ds.clearHeader();
    }

}
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}