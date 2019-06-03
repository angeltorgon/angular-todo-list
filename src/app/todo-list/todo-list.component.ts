import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input('todos') todos: any;
  @Input('deleteTodo') deleteTodo: any;

  constructor() { 

  }

  ngOnInit() {
    console.log(this.deleteTodo)
  }

}
