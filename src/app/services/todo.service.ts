import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: TodoItem[] = [];

  constructor() {
    //this.todoList.push({msg: "huh?"})//debug
    
    //this.todoList.push({msg: "what?"})//debug
   }

   add_item(todoItem:TodoItem): void{
    this.todoList.push(todoItem)
   }
   remove_item(i: number): void {
    this.todoList.splice(i,1)
   }
}
