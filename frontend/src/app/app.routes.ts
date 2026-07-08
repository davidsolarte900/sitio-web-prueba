import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskComponent } from './pages/tasks/task.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
    path: '', 
    component: HomeComponent // Cambiado para cargar tu página principal directamente
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    },
    {
    path: 'tasks',
    component: TaskComponent
    }
];

