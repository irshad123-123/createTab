import { Component, OnInit } from '@angular/core';
import { IskillsArr } from '../models/tab';

@Component({
  selector: 'app-tab-ng-switch',
  templateUrl: './tab-ng-switch.component.html',
  styleUrls: ['./tab-ng-switch.component.scss']
})
export class TabNgSwitchComponent implements OnInit {
  selectedSkill :string = 'html'
  skillsArr : Array<IskillsArr> = [
      {
        skillName : 'html',
        skillContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente veniam eaque debitis est iste ullam consequatur unde, adipisci nostrum? In, veritatis at? Fugit quibusdam vel distinctio eligendi. Quod, dolore!'
      },
      {
        skillName : 'css',
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
  setSelectedSkill(skill : string){
    this.selectedSkill = skill
  }

}
