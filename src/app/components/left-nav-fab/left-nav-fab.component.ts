import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav-fab',
  templateUrl: './left-nav-fab.component.html',
  styleUrls: ['./left-nav-fab.component.scss']
})
export class LeftNavFabComponent implements OnInit {

  @Input('color') color!: string;
  @Input('icon') icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
