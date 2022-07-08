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
export class AppRoutingModule { }
