import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PasswordForgotComponent } from './components/users/password-forgot/password-forgot.component';

import { DataApiService } from './services/data-api.service';
import { ConfigNavsComponent } from './components/navbar/config-navs/config-navs.component';
import { ChangePasswordComponent } from './components/users/change-password/change-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { InfoPostComponent } from './components/info-post/info-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent,
    Page404Component,
    HeaderComponent,
    PasswordForgotComponent,
    ConfigNavsComponent,
    ChangePasswordComponent,
    FooterComponent,
    MypostsComponent,
    AuctionsComponent,
    NewPostComponent,
    InfoPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [
    AngularFireAuthModule,
    AngularFireStorageModule,
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
