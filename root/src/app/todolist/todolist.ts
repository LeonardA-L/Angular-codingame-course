import {Component} from 'angular2/core';
import {TodoStore} from './../stores/todo-store';
import {TodoItem} from './../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  directives: [TodoItem]  // This component requires the following directives
})

export default class ToDoList {
  newItem = '';
  store: TodoStore;

  constructor(store: TodoStore) {  // A TodoStore object is injected upon instanciating the component
    this.store = store;
  }

  addItem() {
    this.store.addItem(this.newItem);
    this.newItem = '';
  }

  removeItem(event: any) {
    this.store.removeItem(event);
  }
}
