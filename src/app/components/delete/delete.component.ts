import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-delete',
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
    animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
 //template: '<button></button>'
})
export class DeleteComponent {
  constructor(public todoService: TodoService, public toastrService: ToastrService){}
  public deleting: boolean[] = [];
  ngOnInit() {
    ///this.toastrService.success('Loaded successfully'); // debug
    this.todoService.todoList.forEach((item) => {
      this.deleting.push(false);
    });

  }
  deleteToast(msg: String ) {
    this.toastrService.success('Removed "' + msg + '"!')
  }

  markForDelete(index: number) {
    this.deleting[index] = true;
  }

  removeItem(index: number,msg: String){
    this.toastrService.success('Removed "' + msg + '"!')
    this.deleting.splice(index, 1);
    this.todoService.remove_item(index);
  }

}
