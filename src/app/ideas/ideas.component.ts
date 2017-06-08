import { Component, OnInit } from '@angular/core';
import { Idea } from './idea.model';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas : Idea[] = [
    new Idea('mark', 'Share my records collection', 12, 'Enjoy music'),
    new Idea('sherryl', 'Teach kids about sport', 17, 'Healthy life'),
    new Idea('tudor', 'Teach others to cook', 9, 'Good food, good life')
  ]
  constructor() { }

  ngOnInit() {
  }

}
