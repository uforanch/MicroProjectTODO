import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: TodoItem[] = [];

  constructor() {
    this.todoList.push({msg: "huh?"})
    
    this.todoList.push({msg: "what?"})
   }

   add_item(todoItem:TodoItem): void{
    this.todoList.push(todoItem)
   }
   remove_item(i: number): void {
    this.todoList.splice(i,1)
   }
}
