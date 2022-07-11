import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-log-in-view',
  templateUrl: './log-in-view.component.html',
  styleUrls: ['./log-in-view.component.scss']
})
export class LogInViewComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  // methods
  // --------------------------------------------
  chooseGreetings(): string {
    let now = new Date()
    let hourOfTheDay = now.getHours();
    if (hourOfTheDay < 3) {
      return "Good evening";
    } else if (hourOfTheDay < 12) {
      return "Good morning";
    } else if (hourOfTheDay < 19) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

}
