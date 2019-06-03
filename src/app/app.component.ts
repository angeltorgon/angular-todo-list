import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: any = [
    {
      todo: "Learn Angular",
      id: 1 
    },
    
    {
      todo: "Learn Node",
      id: 2 
    },
    
    {
      todo: "Learn .Net",
      id: 3 
    },
  ];
  inputText: string = "";

  constructor() {
    
  }

  addTodo() {
    this.todos.push(this.inputText);
    this.inputText = "";
  }

  deleteTodo(id) {
    console.log(id)
  }
}
