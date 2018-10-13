import { environment } from 'src/environments/environment';

export const API = environment.api;
export const LOGIN = API + '/users/login';
export const LIST_USER = API + '/users/users';
