import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { MiBilleteraComponent } from './mi-billetera/mi-billetera.component';

@NgModule({
  declarations: [HomeComponent,IniciarSesionComponent,QuienesSomosComponent, PageNotFoundComponent, MovimientosComponent, RegistroComponent,  MiBilleteraComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,RouterModule
  ],
  exports: [HomeComponent,IniciarSesionComponent,QuienesSomosComponent,MovimientosComponent]
})
export class PagesModule { }
