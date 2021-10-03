import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { CuentaService } from './servicios/cuenta.service';
import { UsuarioService } from './servicios/usuario.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './servicios/auth/interceptor.service';
import { ErrorInterceptor } from './servicios/auth/error.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    LayoutModule,
    PagesModule,
    HttpClientModule,
    RouterModule],
  providers: [CuentaService, UsuarioService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
