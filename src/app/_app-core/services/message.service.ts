import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];

  constructor(
    private toastrService: ToastrService
  ) {}

  public add(message: string): void {
    // this.toastrService.info(message, "Query logged");
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }

  public remove(i: number): void{
    this.messages.splice(i,1);
  }
}
