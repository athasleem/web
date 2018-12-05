import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

  allUsers: any
  constructor(private userService: RestApiUsersServiceService) { }

  ngOnInit() {
    this.getAPIData()
  }
  getAPIData() {
    this.userService.getRemoteusers().subscribe((data) => {
      this.allUsers = data
      console.log(this.allUsers)
    }
    )
  }

    user:any = {
      "name": "thasleem",
      "email": "afghan@gmail.com",
      "address": {
        "geo": {
          "lat": "88.88",
          "lng": "88.88"

        }
      }
    }

    postUser(){
      this.userService.createUser(this.user).subscribe((response)=>{
        console.log(response);
      }
      )
  }
deleteUser(id){
    this.userService.deleteUser(id).subscribe((response)=>{
        console.log(response);
      }
      )
  }
}