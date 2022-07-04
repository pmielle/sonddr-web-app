import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

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
  isMobile$: Observable<boolean>;
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

  constructor(breakpoints: BreakpointObserver) {
    this.isMobile$ = breakpoints.observe([Breakpoints.XSmall]).pipe(
      map(x => x.matches),
    );
  }

  ngOnInit(): void {
  }


  // methods
  // --------------------------------------------
  // ...

}
