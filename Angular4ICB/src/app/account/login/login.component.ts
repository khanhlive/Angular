import { Component, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { ICheckComponent } from 'angular4-icheck';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
declare var $: any;

@Component({
    selector: 'login-form',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    @ViewChild('rememberCheckbox') ckbRemember: ICheckComponent;
    remember: any;
    constructor(private route: Router, private loginService: LoginService) { }
    loginSubmit(event) {
        
        //event.preventDefault();
        //console.log(event);
        //console.log(event.target.elements[0].value);
        this.loginService.setUserLoggedIn();
        let a = this.route.navigateByUrl('/app');
        console.log(a);
        //this.route.navigateByUrl('/app');
        return false;
    }

    rememberChange(event: any) {
        console.log(event.target.nativeElement.checked);
    }
    
}