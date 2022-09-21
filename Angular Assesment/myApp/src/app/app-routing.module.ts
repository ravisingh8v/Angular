import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  {path:'contact', component:ContactComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
