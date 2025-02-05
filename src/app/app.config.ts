import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/reducer.provider';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from '../features/users/store/user.effects';
import { AuthEffects } from '../features/auth/store/auth.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(reducers) , provideEffects([UserEffects , AuthEffects]) , provideHttpClient()]
};
