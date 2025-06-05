import { Component, OnInit } from '@angular/core';
import { ITask } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  task?: ITask;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    this.taskService.getById(taskId).subscribe({
      next: (task) => this.task = task,
      error: () => this.router.navigate(['/home'])
    });
  }

  onSave(updatedTask: ITask) {
    this.taskService.update(updatedTask).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  onCancel() {
    this.router.navigate(['/home']);
  }
}