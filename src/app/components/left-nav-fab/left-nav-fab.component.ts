import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-nav-fab',
  templateUrl: './left-nav-fab.component.html',
  styleUrls: ['./left-nav-fab.component.scss']
})
export class LeftNavFabComponent implements OnInit {

  @Input('color') color!: string;
  @Input('icon') icon!: string;
  @Output('fab-click') fabClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  // methods
  // --------------------------------------------
  onClick() {
    this.fabClick.next();
  }

}
