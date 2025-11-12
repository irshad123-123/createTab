import { Component, OnInit } from '@angular/core';
import { IskillsArr } from '../models/tab';

@Component({
  selector: 'app-tab-ng-for',
  templateUrl: './tab-ng-for.component.html',
  styleUrls: ['./tab-ng-for.component.scss']
})
export class TabNgForComponent implements OnInit {
  selectedSkill : string = 'html'
  skillsArr : Array<IskillsArr> = [
    {
      skillName : 'HTML',
      skillContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente veniam eaque debitis est iste ullam consequatur unde, adipisci nostrum? In, veritatis at? Fugit quibusdam vel distinctio eligendi. Quod, dolore!'
    },
    {
      skillName : 'CSS',
      skillContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente veniam eaque debitis est iste ullam consequatur unde, adipisci nostrum? In, veritatis at? Fugit quibusdam vel distinctio eligendi. Quod, dolore!'
    },
    {
      skillName : 'javascript',
      skillContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente veniam eaque debitis est iste ullam consequatur unde, adipisci nostrum? In, veritatis at? Fugit quibusdam vel distinctio eligendi. Quod, dolore!'
    },
    {
      skillName : 'angular',
      skillContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente veniam eaque debitis est iste ullam consequatur unde, adipisci nostrum? In, veritatis at? Fugit quibusdam vel distinctio eligendi. Quod, dolore!'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
}
