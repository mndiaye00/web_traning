import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMessage(message: string){
    return this.messages.push(message);
  }

  clearMessage(): void{
    this.messages = [];
    console.log(`Heiiy !!!, now you clear all heroes added...`);
  }
}
