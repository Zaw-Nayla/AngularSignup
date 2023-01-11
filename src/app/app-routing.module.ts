import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaincompoComponent } from './maincompo/maincompo.component';
import { SignupformComponent } from './signupform/signupform.component';

const routes: Routes = [
  { path: 'signup', component: SignupformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MaincompoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
