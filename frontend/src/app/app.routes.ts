import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskComponent } from './pages/tasks/task.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';



export const routes: Routes = [
    {
        path: '',
    component: HomeComponent
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
    },
    {
        path: 'catalogo',
            component: CatalogoComponent
    },

{
    path: '**',
    redirectTo: ''
}
];