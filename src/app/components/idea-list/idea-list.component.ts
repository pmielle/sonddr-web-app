import { Component, OnInit } from '@angular/core';
import { dummyIdea, Idea } from 'src/app/interfaces/idea';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  
  ideas: Idea[] = [
    dummyIdea(),
    dummyIdea(),
    dummyIdea(),
    dummyIdea(),
    dummyIdea(),
    dummyIdea(),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
