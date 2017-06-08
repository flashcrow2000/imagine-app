import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';

@Component({
  selector: 'app-featured-ideas',
  templateUrl: './featured-ideas.component.html',
  styleUrls: ['./featured-ideas.component.css']
})
export class FeaturedIdeasComponent implements OnInit {
  idea: Idea = new Idea('david',//new User('david', 'david@gmail.com', [], []),
                        "Some nice idea", 
                        0, 
                        "First idea");
  constructor() { }

  ngOnInit() {
  }

}
