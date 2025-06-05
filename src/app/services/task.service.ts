import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [];
  private categories: Set<string> = new Set();
  private nextId = 1;

  create(task: ITask): ITask {
    const newTask: ITask = {
      ...task,
      id: this.nextId++
    };

    this.tasks.push(newTask);

    if (task.category?.trim()) {
      this.categories.add(task.category.trim());
    }

    return newTask;
  }

  getAll(): ITask[] {
    return [...this.tasks];
  }

  getById(id: number): Observable<ITask | undefined> {

    const task = this.tasks.find(t => t.id === id);
    return of(task);
  }

  update(updatedTask: ITask): Observable<ITask> {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      return of(updatedTask);
    }

    return throwError(() => new Error('Task not found'));
  }

  delete(id: number): boolean {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  getCategories(): string[] {
    return Array.from(this.categories);
  }
}
