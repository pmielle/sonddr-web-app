import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddViewComponent } from './views/add-view/add-view.component';
import { IdeasViewComponent } from './views/ideas-view/ideas-view.component';

const routes: Routes = [
  {path: "", redirectTo: "/ideas", pathMatch: 'full'},
  {path: "ideas", component: IdeasViewComponent},
  {path: "add", component: AddViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  // TODO: re-use routes, like on mobile: https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
