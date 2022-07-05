import { Component, Input, OnInit } from '@angular/core';
import { Idea } from 'src/app/interfaces/idea';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit {

  @Input('idea') idea!: Idea;
  prettyTimeDelta: string = "";

  constructor(private time: TimeService) { }

  ngOnInit(): void {
    this.prettyTimeDelta = this.time.makePrettyTimeDelta(this.idea.date);
  }

}
