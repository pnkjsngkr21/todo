import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, "Learn to Dance", false, new Date()),
    new Todo(1, "Learn Angular", false, new Date()),
    new Todo(1, "Learn to Sleep", false, new Date()),
  ]

  constructor() { }

  ngOnInit() {
  }

}

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){
  }
}
