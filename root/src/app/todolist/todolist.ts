import {Component} from 'angular2/core';
import {TodoStore} from './../stores/todo-store';
import {TodoItem} from './../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  directives: [TodoItem]
})
export default class ToDoList {
  newItem = '';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
    console.log(this.store);
  }

  addItem() {
    console.log(this.newItem);
    this.store.addItem(this.newItem);
    this.newItem = '';
  }

  removeItem(event) {
    console.log(event);
    this.store.removeItem(event);
  }
  /*itemChanged(event) {
    const target = <HTMLInputElement> event.target;
    this.newItem = target.value;
  }*/
}
