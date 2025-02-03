import { Routes } from '@angular/router';
import { ContentLayoutComponent } from '../layouts/content-layout/content-layout.component';

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
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./routes/public/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./routes/public/contact-us/contact-us.component').then(
            (c) => c.ContactUsComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((r) => r.routes),
  },
];
