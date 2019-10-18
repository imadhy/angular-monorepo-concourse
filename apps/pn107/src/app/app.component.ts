import { Component } from '@angular/core';
import { Todo } from '@monorepo-project/data';

@Component({
  selector: 'monorepo-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pn107';
  todos: Todo[] = [{ title: 'Todo10' }, { title: 'Todo 11' }];
}
