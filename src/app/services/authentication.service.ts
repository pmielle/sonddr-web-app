import { Injectable, OnDestroy } from '@angular/core';
import { AuthService, User as Auth0User } from '@auth0/auth0-angular';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {


  // properties
  // --------------------------------------------
  private readonly destroy$ = new Subject<void>();
  user?: User|null;


  // lifecycle hooks
  // --------------------------------------------
  constructor(private auth0: AuthService) {
    this.syncAuth0User();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  // methods
  // --------------------------------------------
  syncAuth0User() {
    this.auth0.user$.pipe(takeUntil(this.destroy$)).subscribe((auth0User?: Auth0User|null) => {
      if (auth0User === undefined) { this.user = undefined; return; }
      if (auth0User === null) { this.user = null; return; }
      this.user = {
        id: "logged_in_user",
        name: "Logged In User",
        profilePicture: "/assets/placeholders/profile-picture.png",
      };
    });
  }

  logIn() {
    this.auth0.loginWithRedirect();
  }

  logOut() {
    this.auth0.logout();
  }

}
