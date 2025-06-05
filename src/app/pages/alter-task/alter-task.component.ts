import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TaskEditComponent } from "../../components/task-edit/task-edit.component";

@Component({
  selector: 'app-alter-task',
  standalone: true,
  imports: [HeaderComponent, TaskEditComponent],
  templateUrl: './alter-task.component.html',
  styleUrl: './alter-task.component.css'
})
export class AlterTaskComponent {

}
