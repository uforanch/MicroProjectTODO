import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponentComponent } from '../todo-component/todo-component.component';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-delete',
  imports: [TodoComponentComponent, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
 //template: '<button></button>'
})
export class DeleteComponent {
  constructor(public todoService: TodoService){}

}
