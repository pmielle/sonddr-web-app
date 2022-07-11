import { Injectable, OnDestroy } from '@angular/core';
import { AuthService, User as Auth0User } from '@auth0/auth0-angular';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  // properties
  // --------------------------------------------
  user$: Observable<User|null|undefined>;


  // lifecycle hooks
  // --------------------------------------------
  constructor(private auth0: AuthService) {
    this.user$ = this.auth0.user$.pipe(map((auth0User?: Auth0User|null) => {
      if (!auth0User) { return auth0User }
      return {
        id: "logged_in_user",
        name: "Logged In User",
        profilePicture: "/assets/placeholders/profile-picture.png",
      };
    }));
  }

  // methods
  // --------------------------------------------
  logIn() {
    this.auth0.loginWithRedirect();
  }

  logOut() {
    this.auth0.logout();
  }

}
