export class Todo {
  text: String;
  done: Boolean;
}

export class TodoStore {
  items: Todo[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: String) {
    this.items.push({text: newItem, done: false});
  }

  removeItem(item: any) {
    console.log(item);
    this.items.splice(this.items.indexOf(item), 1);
  }
}
