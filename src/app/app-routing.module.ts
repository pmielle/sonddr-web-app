import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './interfaces/user';
import { AuthenticationService } from './services/authentication.service';
import { AddViewComponent } from './views/add-view/add-view.component';
import { IdeasViewComponent } from './views/ideas-view/ideas-view.component';
import { LogInViewComponent } from './views/log-in-view/log-in-view.component';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(map((user: User|null|undefined) => {
      if (user) {
        this.router.navigateByUrl("/");
        return false;
      }
      return true;
    }))
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(map((user: User|null|undefined) => {
      if (!user) {
        this.router.navigateByUrl("/login");
        return false;
      }
      return true;
    }))
  }
}

const routes: Routes = [
  {path: "login", component: LogInViewComponent, canActivate: [UnauthGuard]},
  {path: "", redirectTo: "/ideas", pathMatch: 'full'},
  {path: "ideas", component: IdeasViewComponent, canActivate: [AuthGuard]},
  {path: "add", component: AddViewComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  // TODO: re-use routes, like on mobile: https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
