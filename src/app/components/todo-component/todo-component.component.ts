import { Component, Input } from '@angular/core';
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
  constructor(public todoService: TodoService){}//, private toastrServer: ToastrService){}
  remove_self():void{this.todoService.remove_item(this.index);}// this.toastrServer.success('You deleted "${this.todoItem.msg}"')}
}
