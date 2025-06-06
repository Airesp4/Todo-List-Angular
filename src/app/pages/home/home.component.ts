import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
