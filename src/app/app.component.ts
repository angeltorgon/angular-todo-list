import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: any = ["Learn Angular", "Learn Node", "Learn .Net"];
  inputText: string = "";

  constructor() {
    
  }

  addTodo() {
    this.todos.push(this.inputText);
    this.inputText = "";
    // console.log("inputText: ", this.inputText)
  }
}
