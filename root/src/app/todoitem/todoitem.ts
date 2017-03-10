import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Todo} from './../stores/todo-store';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
})
export class TodoItem {
  @Input()
  item: Todo;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    console.log('Destroy');
    this.done.next(this.item);
  }
}
