import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'task/list', pathMatch: 'full'},
  {path: 'home', loadChildren: '../app/home/home.module#HomeModule' },
  {path:'task/list', component: TaskListComponent},
  {path:'company/list', component: CompanyListComponent},
  {path:'company/edit/:id', component: CompanyEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
