import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: ITask[] = [];
  today: string;

  constructor(private router: Router, private taskService: TaskService) {
    this.today = this.formatDate(new Date());
    this.loadTasks();
  }

  private loadTasks(): void {
    this.tasks = this.taskService.getAll();
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }

  editTask(task: ITask): void {
    this.router.navigate(['/tasks/edit', task.id]);
  }

  deleteTask(task: ITask): void {
    const success = this.taskService.delete(task.id!);
    if (success) {
      this.loadTasks();
    } else {
      console.error('Failed to delete task');
    }
  }

  getPriorityClass(priority: string): string {
    const clean = priority?.replace('priority-', '')?.trim().toLowerCase();

    return {
      high: 'priority-high',
      medium: 'priority-medium',
      low: 'priority-low'
    }[clean] || '';
  }

  toNewTask(): void {
    this.router.navigate(['/tasks/new']);
  }
}
