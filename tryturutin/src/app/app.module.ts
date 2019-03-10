import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { Navbar2Component } from './main/navbar2/navbar2.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './myblog/auth/auth-interceptor';
import { ErrorInterceptor } from './myblog/services/error-interceptor';
import { ErrorComponent } from './myblog/error/error.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { DescriptionComponent } from './main/description/description.component';
import { FooterComponent } from './main/footer/footer.component';
import { AboutComponent } from './main/about/about.component';
import { SkillsComponent } from './main/skills/skills.component';
import { HomeComponent } from './main/home.component';
import { SubscriptionComponent } from './myblog/services/subscription/subscription.component';
import { MyblogComponent } from './myblog/myblog.component';
import { PrinciplesComponent } from './main/principles/principles.component';
import { PostCreateComponent } from "./myblog/posts/post-create/post-create.component";
import { PostListComponent } from "./myblog/posts/post-list/post-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./myblog/auth/login/login.component";
import { SignupComponent } from "./myblog/auth/signup/signup.component";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
} from "@angular/material";
import { AdminComponent } from './myblog/admin/admin.component';
import { BlogaboutComponent } from './myblog/blogabout/blogabout.component';
import { BlogpostComponent } from './myblog/blogpost/blogpost.component';
import { PostnavbarComponent } from './myblog/postnavbar/postnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    ErrorComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    DescriptionComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    SubscriptionComponent,
    HomeComponent,
    MyblogComponent,
    PrinciplesComponent,
    PostCreateComponent, 
    PostListComponent, 
    AdminComponent, 
    BlogaboutComponent, 
    BlogpostComponent,
    LoginComponent,
    SignupComponent,
    PostnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}


