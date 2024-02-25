import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Probador1Component } from './probador1/probador1.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { corsYTokenInterceptor } from './http/cors-y-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Probador1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:corsYTokenInterceptor,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
