import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddDetailComponent } from './pages/add-detail/add-detail.component';
import { ViewDetailComponent } from './pages/view-detail/view-detail.component';
import { EditDetailComponent } from './pages/edit-detail/edit-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-detail', component: AddDetailComponent },
  { path: 'view-detail', component: ViewDetailComponent },
  { path: 'edit-detail/:id', component: EditDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
