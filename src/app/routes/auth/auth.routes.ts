import { Route, Routes } from "@angular/router";
import { AuthLayoutComponent } from "../../../layouts/auth-layout/auth-layout.component";


export const routes : Routes = [
    {
        path : 'auth',
        component : AuthLayoutComponent,
        children : [
            {path : 'login' , loadComponent : () => import('./login/login.component').then(r => r.LoginComponent)},
            {path : 'register' , loadComponent : () => import('./register/register.component').then(r => r.RegisterComponent)},
        ]
    }
]