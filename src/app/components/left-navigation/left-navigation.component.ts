import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  path_to_logo = "/assets/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
