import { Component, OnInit } from '@angular/core';
import { dummyUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.scss']
})
export class AddViewComponent implements OnInit {

  title: string = "";
  content: string = "";
  loggedInUser = dummyUser;

  constructor() { }

  ngOnInit(): void {
  }

}
