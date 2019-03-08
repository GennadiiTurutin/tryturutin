import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./main/home.component";
import { PostCreateComponent } from "./myblog/posts/post-create/post-create.component";
import { AuthGuard } from "./myblog/auth/auth.guard";
import { MyblogComponent } from './myblog/myblog.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: MyblogComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: "./myblog/auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
