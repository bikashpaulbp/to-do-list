import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        description: "This is description",
        active: true,
      },
      {
        sno: 2,
        title: "This is title2",
        description: "This is description",
        active: true,
      },
      {
        sno: 3,
        title: "This is title3",
        description: "This is description",
        active: true,
      },
      {
        sno: 4,
        title: "This is title4",
        description: "This is description",
        active: true,
      }
    ]
   }

  ngOnInit(): void {
  }
 deleteToDo(myTODO: Todo){

  console.log(myTODO);
  const index = this.todos.indexOf(myTODO);
  this.todos.splice(index, 1)
 }
}
