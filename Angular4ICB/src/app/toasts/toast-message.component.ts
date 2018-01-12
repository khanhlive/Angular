import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'toast-messages',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-messages.component.scss'],
  providers:[ToastService]
})
export class ToastMessagesComponent implements OnInit {
  messages: any;
  constructor(private toast: ToastService) { }
  ngOnInit() {
    this.messages = this.toast.getMessages()
  }
  dismiss(itemKey) {
    this.toast.dismissMessage(itemKey)
  }
}