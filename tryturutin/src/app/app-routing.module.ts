import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BlogsiteComponent } from './blogsite/blogsite.component';
import { PythonComponent } from "./python/python.component";
import { JavascriptComponent } from "./javascript/javascript.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogsiteComponent },
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
