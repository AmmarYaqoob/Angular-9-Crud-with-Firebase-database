import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {
  Message: string;
  constructor() { }

  ngOnInit(): void {
  }

  SendMessage() {
    console.log(this.Message)
  }

}
