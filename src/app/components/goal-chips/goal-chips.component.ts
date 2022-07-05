import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';

@Component({
  selector: 'app-goal-chips',
  templateUrl: './goal-chips.component.html',
  styleUrls: ['./goal-chips.component.scss']
})
export class GoalChipsComponent implements OnInit {

  @Input('goals') goals!: Goal[];

  constructor() { }

  ngOnInit(): void {
  }

}
