import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddDetailComponent } from './pages/add-detail/add-detail.component';
import { ViewDetailComponent } from './pages/view-detail/view-detail.component';
import { EditDetailComponent } from './pages/edit-detail/edit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDetailComponent,
    ViewDetailComponent,
    EditDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
