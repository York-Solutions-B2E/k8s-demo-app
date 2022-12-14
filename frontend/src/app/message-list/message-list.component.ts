import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {Observable, takeUntil} from "rxjs";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  readonly messageService: MessageService;

  constructor(private _messageService: MessageService) {
    this.messageService = _messageService;
  }
}
