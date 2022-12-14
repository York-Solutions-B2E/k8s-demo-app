import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {

  constructor(private messageService: MessageService) {
  }

  onSubmit(form: NgForm) {
    this.messageService.addMessage(form.value);
  }

}
