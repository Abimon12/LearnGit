import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { CourseComponent } from './course/course.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:"",redirectTo:'home',pathMatch:"full"},
   {path:"home", component:HomeComponent},
   {path:"login",component:LoginComponent},
  { path:"about", component:AboutComponent},
  { path:"contact", component:ContactsComponent},
   {path:"course", component:CourseComponent,
  children:[
    {path:"java",component:JavaComponent},
    {path:"python",component:PythonComponent}
  ]},
   {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
