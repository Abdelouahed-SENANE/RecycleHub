import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/reducer.provider';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from '../features/users/store/user.effects';
import { AuthEffects } from '../features/auth/store/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(reducers), provideEffects([UserEffects, AuthEffects]), provideHttpClient(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
