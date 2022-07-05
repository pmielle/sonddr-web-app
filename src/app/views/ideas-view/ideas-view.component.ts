import { Component, OnInit } from '@angular/core';
import { dummyUser, User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-ideas-view',
  templateUrl: './ideas-view.component.html',
  styleUrls: ['./ideas-view.component.scss']
})
export class IdeasViewComponent implements OnInit {

  loggedInUser: User = dummyUser;

  constructor() { }

  ngOnInit(): void {
  }

}
