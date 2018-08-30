import { LoginAction } from '../actions';
import { StoreState } from '../types/index';
import { USER_LOGIN, USER_LOGOUT } from '../constants/index';

export function authenticate(state: StoreState, action: LoginAction): StoreState {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, keycloak: action.keycloak, authenticated: action.authenticated};
    case USER_LOGOUT:
      return { ...state, keycloak: null, authenticated: false };
  }
  return state;
}