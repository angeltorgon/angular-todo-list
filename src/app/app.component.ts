import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: any = ["Learn Angular", "Learn Node", "Learn .Net"]

  constructor() {
    
  }
}
