import { Injectable, ViewContainerRef } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
export enum NotifyType {
    Info,
    Success,
    Danger,
    Warning
}
@Injectable()
export class SnackBarService {
    constructor(private notify: MatSnackBar, private toast: ToastsManager, private view: ViewContainerRef) {
        this.toast.setRootViewContainerRef(view);
    }
    public ShowNotify(message: string, type?: NotifyType, title?: string): void {
        type = type ? type : NotifyType.Info;
        
        switch (type) {

            case NotifyType.Info: this.toast.info(message, title ? title : 'Information!'); break;
            case NotifyType.Danger: this.toast.error(message, title ? title : 'Error!'); break;
            case NotifyType.Warning: this.toast.warning(message, title ? title : 'Warning!'); break;
            case NotifyType.Success: this.toast.success(message, title ? title : 'Success!'); break;
        }
        

    }
}