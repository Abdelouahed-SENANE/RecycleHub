import { Routes } from '@angular/router';
import { ContentLayoutComponent } from '../layouts/content-layout/content-layout.component';
import { authGuard, noAuthGuard } from '../features/auth/guards';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./routes/public/home/home.component').then(
            (c) => c.HomeComponent
          ),
          data : {linksColor : 'text-white'}
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./routes/public/about/about.component').then(
            (c) => c.AboutComponent
          ),
          data : {linksColor : 'text-gray-800'}

      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./routes/public/contact-us/contact-us.component').then(
            (c) => c.ContactUsComponent
          ),
          data : {linksColor : 'text-gray-800'}
      },
    ],
  },
  {
    path: '',
    canActivate: [noAuthGuard],
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: 'app',
    canActivate: [],
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./routes/app/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./routes/app/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
