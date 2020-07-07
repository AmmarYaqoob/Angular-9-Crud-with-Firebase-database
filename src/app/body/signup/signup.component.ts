import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname= "";
  constructor(private _AppService: AppService) { }

  ngOnInit(): void {
    
  }

}
