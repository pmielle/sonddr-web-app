import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';

enum Modes {
  ideas,
  search,
  messages,
  notifications,
}

interface LeftNavItem {
  text: string,
  icon: string,
  targetMode: Modes,
  badge?: string,
}

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  pathToLogo = "/assets/logo.png";
  pathToItemIcons = "/assets/icons/";
  Modes = Modes;
  mode: Modes = Modes.ideas;
  leftNavItems: LeftNavItem[] = [
    {
      text: "Ideas",
      icon: "lightbulb",
      targetMode: Modes.ideas,
    },
    {
      text: "Search",
      icon: "search",
      targetMode: Modes.search,
    },
    {
      text: "Messages",
      icon: "sms",
      targetMode: Modes.messages,
    },
    {
      text: "Notications",
      icon: "notifications",
      targetMode: Modes.notifications,
    },
  ];

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }


  // methods
  // --------------------------------------------
  // ...

}
