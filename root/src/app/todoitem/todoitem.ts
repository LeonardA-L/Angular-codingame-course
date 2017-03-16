import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Todo} from './../stores/todo-store';  // Get the model

@Component({  // Declare the Todo item component with its view and style
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
})

export class TodoItem {
  // This class receives a Todo item as an input value through the component's attributes
  @Input()
  item: Todo;

  // This class emits a "destroy" event
  @Output()
  destroy = new EventEmitter();

  destroyClicked() {
    // Emit the "destroy" event
    this.destroy.next(this.item);
  }

  doneClicked() {
    this.item.done = !this.item.done;
  }
}
