import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './components/login/auth.guard';
import { MyLearningComponent } from './components/my-learning/my-learning.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'myLearning',
    component: MyLearningComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
