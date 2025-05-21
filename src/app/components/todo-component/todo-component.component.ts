import { Component, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-component',
  imports: [],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css'
})
export class TodoComponentComponent {
  @Input() todoItem!: TodoItem
  @Input() index!: number
  constructor(public todoService: TodoService){}
  remove_self():void{this.todoService.remove_item(this.index)}
}
