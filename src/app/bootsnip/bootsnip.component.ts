import { Router } from '@angular/router';
import { RestApiUsersServiceService } from './../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootsnip',
  templateUrl: './bootsnip.component.html',
  styleUrls: ['./bootsnip.component.css']
})
export class BootsnipComponent implements OnInit {
  allProducts: any
  constructor(private userService: RestApiUsersServiceService,private router:Router) { }

  ngOnInit() {
    this.getAPIData()
  }
  getAPIData() {
    this.userService.getRemoteProducts().subscribe((data) => {
      this.allProducts = data
      console.log(this.allProducts)
    }
    )
}}