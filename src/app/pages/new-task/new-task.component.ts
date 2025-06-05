import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [HeaderComponent, TaskFormComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

}
