import { Component } from '@angular/core';
import { MessageService } from '../_app-core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
}
