// The model class of a Todo item
export class Todo {
  text: String;
  done: Boolean;
}

// The class for a Todo store
export class TodoStore {
  items: Todo[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: String) {
    this.items.push({text: newItem, done: false});
  }

  removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
