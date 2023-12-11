import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/courses/course/course.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginInterceptorService } from './components/login/login.interceptor';
import { MyLearningComponent } from './components/my-learning/my-learning.component';
import { CourseFilterComponent } from './components/courses/course-filter/course-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCoursesComponent } from './components/admin/admin-courses/admin-courses.component';
import { AdminMentorComponent } from './components/admin/admin-mentor/admin-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    CartComponent,
    MyLearningComponent,
    CourseFilterComponent,
    FooterComponent,
    AdminComponent,
    AdminCoursesComponent,
    AdminMentorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
