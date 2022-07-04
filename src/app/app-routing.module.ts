import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasViewComponent } from './views/ideas-view/ideas-view.component';

const routes: Routes = [
  {path: "", redirectTo: "/ideas", pathMatch: 'full'},
  {path: "ideas", component: IdeasViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
