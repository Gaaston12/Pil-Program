import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MiBilleteraComponent } from './pages/mi-billetera/mi-billetera.component';
import {AuthGuard} from 'src/app/servicios/auth/auth.guard';

const routes: Routes = [ 
{path: 'iniciar-sesion', component: IniciarSesionComponent},
{path: 'home', component: HomeComponent},
{path: 'mi-billetera', component: MiBilleteraComponent ,  canActivate: [AuthGuard],
children:[
  {path:'movimientos', component: MovimientosComponent},
]},
{path: 'quienes-somos', component: QuienesSomosComponent},
{path: 'registro', component:RegistroComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
