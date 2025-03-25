import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN, SIGNUP } from '../graphql/mutatinos/auth.mutation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo : Apollo
  ) { }

  signUp(username : String, password: String) {
    console.log(username, password);
    return this.apollo.mutate({
      mutation: SIGNUP,
      variables: {
        username,
        password
      }});
  }


  logIn(username : String, password: String) {
    return this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        username,
        password
      }});
  }
}

