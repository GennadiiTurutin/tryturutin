import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BlogComponent } from "./blog/blog.component";
import { PythonComponent } from "./python/python.component";
import { JavascriptComponent } from "./javascript/javascript.component";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "blog", component: BlogComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "python", component: PythonComponent },
  { path: "javascript", component: JavascriptComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
