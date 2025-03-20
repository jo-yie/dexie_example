import { Component, Input } from '@angular/core';
import { db, TodoList } from '../db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  @Input() todoList!: TodoList; 
  todoItems$ = liveQuery(() => this.listTodoItems());

  async listTodoItems() {
    return await db.todoItems
      .where({
        todoListId: this.todoList.id
      })
      .toArray();
  }

  async addItem() { 
    await db.todoItems.add({
      title: this.itemName, 
      todoListId: this.todoList.id!
    });
  }

  itemName = 'My new item'

}
