import { Component, Input, Optional } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoService } from '../../services/todo.service';
import {ToastrService} from 'ngx-toastr' 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-component',
  imports: [CommonModule],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css'
})
export class TodoComponentComponent {
  @Input() todoItem!: TodoItem
  @Input() index!: number
  @Input() buttonsOn!: boolean
  @Input() onRemove?:(arg0: String)=>void
  constructor(public todoService: TodoService){}
  remove_self():void{
    if (this.onRemove){
      this.onRemove(this.todoItem.msg)
    }
    this.todoService.remove_item(this.index);}
}
