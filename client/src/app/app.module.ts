import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/app/login/login.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule } from '@angular/material';
import { AuthenService } from 'src/app/service/authen.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from 'src/app/guards/authen.guards';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
