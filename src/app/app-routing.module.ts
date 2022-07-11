import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AddViewComponent } from './views/add-view/add-view.component';
import { IdeasViewComponent } from './views/ideas-view/ideas-view.component';
import { LogInViewComponent } from './views/log-in-view/log-in-view.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.user) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}

const routes: Routes = [
  {path: "login", component: LogInViewComponent},
  {path: "", redirectTo: "/ideas", pathMatch: 'full'},
  {path: "ideas", component: IdeasViewComponent, canActivate: [AuthGuard]},
  {path: "add", component: AddViewComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  // TODO: re-use routes, like on mobile: https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
