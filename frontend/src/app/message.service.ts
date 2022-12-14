import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, first, takeUntil} from "rxjs";
import {environment} from "../environments/environment";
import {IMessage} from "./interfaces/IMessage";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  $messageList = new BehaviorSubject<IMessage[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getMessageList();
  }

  addMessage(message: string) {
    this.httpClient.post(`${environment.backend_url}/message`, message)
      .pipe(first())
      .subscribe({
        next: () => {
          this.getMessageList();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  getMessageList() {
    this.httpClient.get<IMessage[]>(`${environment.backend_url}/message`)
      .pipe(first())
      .subscribe({
        next: (messageList) => {
          this.$messageList.next(messageList);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
