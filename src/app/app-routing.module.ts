import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './User/Components/loginpage/loginpage.component';
import { RegisterpageComponent } from './User/Components/registerpage/registerpage.component';

const routes: Routes = [
  {path:'login',component:LoginpageComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'Register',component:RegisterpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
