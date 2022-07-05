import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';

@Component({
  selector: 'app-goal-chip',
  templateUrl: './goal-chip.component.html',
  styleUrls: ['./goal-chip.component.scss']
})
export class GoalChipComponent implements OnInit {

  @Input('goal') goal!: Goal;

  constructor() { }

  ngOnInit(): void {
  }

}
