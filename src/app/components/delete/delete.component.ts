import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponentComponent } from '../todo-component/todo-component.component';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-delete',
  imports: [TodoComponentComponent, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
 //template: '<button></button>'
})
export class DeleteComponent {
  constructor(public todoService: TodoService, public toastrService: ToastrService){}
  ngOnInit() {
    ///this.toastrService.success('Loaded successfully'); // debug
  }
  deleteToast(msg: String ) {
    this.toastrService.success('Removed "' + msg + '"!')
  }

  removeItem(index: number,msg: String){
    this.toastrService.success('Removed "' + msg + '"!')
    this.todoService.remove_item(index);
  }

}
