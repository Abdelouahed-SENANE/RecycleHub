import { User } from '../../../models/models';

export interface UserState {
  isLoading: boolean;
  error: String;
  success: string;
  users: User[];
}

export const initialState: UserState = {
  isLoading: false,
  error: '',
  success: '',
  users: [],
};
