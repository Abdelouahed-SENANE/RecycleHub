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
import { provideNativeDateAdapter } from '@angular/material/core';
import { CollectionEffects } from '../features/collections/store/collection.effects';
export const appConfig: ApplicationConfig = {
  providers:  [provideNativeDateAdapter() ,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(reducers), provideEffects([UserEffects, AuthEffects , CollectionEffects]), provideHttpClient(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
  
};
