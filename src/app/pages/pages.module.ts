import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent,IniciarSesionComponent,QuienesSomosComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent,IniciarSesionComponent,QuienesSomosComponent]
})
export class PagesModule { }
