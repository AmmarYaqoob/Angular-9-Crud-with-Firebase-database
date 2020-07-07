import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { AppService } from '../../app.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Firestore CRUD Operations Students App';
  model: User = {
    id: 0,
    firstName: "",
    lastName: "",
    fatherName: "",
    age: "",
    phone: "",
    gender: ""
  };
  users: Array<User> = [];
  isEdit: boolean = false;

  constructor(private _AppService: AppService) { }

  ngOnInit(): void {
    this.ReadUser();
  }

  ReadUser() {
    this._AppService.getUser().subscribe(data => {
      let user = [];
      data.map(e => {
        let data = {};
        data = e.payload.doc.data();
        data["id"] = e.payload.doc.id;
        user.push(data);
      });
      this.users = user;
    });
  }


  CreateRecord() {
    this._AppService.createUser(this.model).then(resp => {
      this.model = {
        id: 0,
        firstName: "",
        lastName: "",
        fatherName: "",
        age: "",
        phone: "",
        gender: ""
      }
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this._AppService.deletePolicy(rowID);
  }

  EditRecord(row) {
    console.log(row)
    let data = {
      id: row.id,
      age: row.age,
      fatherName: row.fatherName,
      firstName: row.firstName,
      gender: row.gender,
      lastName: row.lastName,
      phone: row.phone
    }
    this.model = data;
    this.isEdit = true;
  }

  UpdateRecord() {
    this._AppService.updatePolicy(this.model);
    this.model = {
      id: 0,
      firstName: "",
      lastName: "",
      fatherName: "",
      age: "",
      phone: "",
      gender: ""
    }
    this.isEdit = false;
  }
}
