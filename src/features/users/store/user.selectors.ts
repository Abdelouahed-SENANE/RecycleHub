import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";
import { USER_FEATURE_KEY } from "./user.reducers";

export const query = createFeatureSelector<UserState>(USER_FEATURE_KEY)
export const isLoadingQuery = createSelector(query , state => state.isLoading)
export const errorQuery = createSelector(query , state => state.error)
export const usersQuery = createSelector(query , state => state.users)
export const successQuery = createSelector(query , state => state.success)