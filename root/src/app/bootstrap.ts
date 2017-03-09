import {bootstrap} from 'angular2/platform/browser';
import Todolist from './todolist/todolist';
import {TodoStore} from './stores/todo-store';


bootstrap(Todolist, [TodoStore]);
