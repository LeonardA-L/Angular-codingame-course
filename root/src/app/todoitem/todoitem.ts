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
  destroy = new EventEmitter();

  destroyClicked() {
    console.log('Destroy');
    this.destroy.next(this.item);
  }

  doneClicked() {
    console.log('Done');
    this.item.done = !this.item.done;
  }
}
