import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, NavbarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'microprojectTodo';
  todo: String[] = [];
}
