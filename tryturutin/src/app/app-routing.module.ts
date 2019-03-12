import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./main/home.component";
import { PostCreateComponent } from "./myblog/posts/post-create/post-create.component";
import { AuthGuard } from "./myblog/auth/auth.guard";
import { MyblogComponent } from './myblog/myblog.component';
import { AdminComponent } from './myblog/admin/admin.component';
import { BlogaboutComponent } from './myblog/blogabout/blogabout.component';
import { BlogpostComponent } from './myblog/blogpost/blogpost.component';
import { LoginComponent } from "./myblog/auth/login/login.component";
import { SignupComponent } from "./myblog/auth/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: MyblogComponent },
  { path: "blog/about", component: BlogaboutComponent },
  { path: "blog/posts/:postId", component: BlogpostComponent },
  { path: "blog/admin", component: AdminComponent },
  { path: "blog/create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "blog/edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "blog/login", component: LoginComponent },
  { path: "blog/register", component: SignupComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
