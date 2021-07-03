import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "src/app/modules/material/material.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';

import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RecaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
