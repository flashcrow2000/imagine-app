import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../idea.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.css']
})
export class SingleIdeaComponent implements OnInit {
  @Input() idea: Idea = new Idea('david',//new User('david', 'david@gmail.com', [], []),
                        "Some nice idea", 
                        0, 
                        "First idea");
  constructor() { }

  ngOnInit() {
    console.log(this.idea);
  }

}
