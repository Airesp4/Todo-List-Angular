import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { AlterTaskComponent } from './pages/alter-task/alter-task.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tasks/new', component: NewTaskComponent },
    { path: 'tasks/edit/:id', component: AlterTaskComponent },
    { path: '**', redirectTo: 'home' }
];
