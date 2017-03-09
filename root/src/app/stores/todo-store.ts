export class Todo {
  text: String;
}

export class TodoStore {
  items: Todo[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: String) {
    this.items.push({text: newItem});
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
