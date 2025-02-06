import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
import { AUTH_FEATURE_KEY } from './auth.reducers';

export const query = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);
export const isLoadingQuery = createSelector(query, (state) => state.isLoading);
export const isLoggedInQuery = createSelector(query, (state) => state.isLoggedIn);
export const hasErrorQuery = createSelector(query, (state) => state.hasError);
export const errorQuery = createSelector(query, (state) => state.error);
export const authUserQuery = createSelector(query, (state) => state.authUser);
