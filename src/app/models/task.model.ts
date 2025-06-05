export interface ITask {
  id?: number;
  name: string;
  priority: 'priority-high' | 'priority-medium' | 'priority-low';
  category: string;
  date: string;
}