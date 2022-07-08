import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dummyGoal, Goal } from 'src/app/interfaces/goal';
import { dummyUser, User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-ideas-view',
  templateUrl: './ideas-view.component.html',
  styleUrls: ['./ideas-view.component.scss']
})
export class IdeasViewComponent implements OnInit {

  loggedInUser: User = dummyUser;
  goals: Goal[] = [
    dummyGoal("no_poverty", 1),
    dummyGoal("decent_work", 2),
    dummyGoal("health_and_well_being", 3),
    dummyGoal("peace_and_justice", 4),
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // methods
  // --------------------------------------------
  onFabClick() {
    this.router.navigateByUrl("/add");
  }

}
