import { Component, OnInit } from '@angular/core';
import { Todo } from '@monorepo-project/data';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pn106';
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo 2' }];

  ngOnInit() {}

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)} !`
    });
  }
}
