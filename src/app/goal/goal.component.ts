import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
         new Goal(1,'Watch Finding Nemo','find an online version and watch merlin find his son',new Date(2018,11,12)),
         new Goal(2,'Buy Cookies','i have too buy cookies for parot',new Date(2018,12,3)),
         new Goal(3, 'Get new Phone Case','Diana has her birthday coming soon',new Date(2018,11,11)),
         new Goal(4, 'Get Dog Food','Pupper likes expensive snikers',new Date(2018,11,7)),
         new Goal(5, 'Solve math homework','damn math',new Date(2018,11,11)),
         new Goal(6, 'Plot my world domination plan','couse  i am  evil overload',new Date(2018,11,2)),
     ]
     toogleDetails(index){
             this.goals[index].showDescription = !this.goals[index].showDescription;
         }
         addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)

   }

         deleteGoal(isComplete,index){
                 if (isComplete){
                   let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

                   if(toDelete){
                     this.goals.splice(index,1);
                   }
                     }
                     }

  constructor() { }

  ngOnInit() {
  }

}
