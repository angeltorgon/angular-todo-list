import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo: string;
  @Input('deleteTodo') deleteTodo: any;

  constructor() { }

  ngOnInit() {
    console.log(this.deleteTodo)
  }

}
