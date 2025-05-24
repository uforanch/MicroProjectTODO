import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TodoComponentComponent } from '../todo-component/todo-component.component';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray,} from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-manage',
  imports: [CommonModule, FormsModule, TodoComponentComponent, CdkDropList, CdkDrag],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  constructor(public todoService: TodoService){}
  next_item: String = "";

  add_item(): void {
    this.todoService.add_item({msg: this.next_item});
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoService.todoList, event.previousIndex, event.currentIndex);
    console.log(this.todoService.todoList, event.previousIndex, event.currentIndex)

    
  }
  

}
