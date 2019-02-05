import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './shared/interceptors/error-handler.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ComentsComponent } from './coments/coments.component';
import { PostsComponent } from './posts/posts.component';
import { HttpService } from './shared/http-services/http-services.services';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ComentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
