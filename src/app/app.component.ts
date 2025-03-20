import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, TodoList } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dexie_example';

  todoLists$ = liveQuery(() => db.todoLists.toArray());
  listName = 'My new list';

  async addNewList() { 
    await db.todoLists.add({
      title: this.listName
    });
  }

  identifyList(index: number, list: TodoList) {
    return `${list.id}${list.title}`
  }

}
