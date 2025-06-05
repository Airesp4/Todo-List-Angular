import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: ITask = {
    name: '',
    priority: 'priority-medium',
    date: '',
    category: ''
  };

  categories: string[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {
    this.categories = this.taskService.getCategories();
  }

  onSubmit(): void {
    const hoje = new Date();
    const dataTarefa = new Date(this.task.date);

    hoje.setHours(0, 0, 0, 0);
    dataTarefa.setHours(0, 0, 0, 0);

    if (dataTarefa < hoje) {
      alert('The task due date cannot be earlier than today.');
      return;
    }

    this.taskService.create(this.task);
    this.router.navigate(['/home']);
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }

  selectCategory(category: string): void {
    this.task.category = category;
  }
}
