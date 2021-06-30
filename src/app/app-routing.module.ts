import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [ {path: 'home', component: HomeComponent},
{path: 'iniciar-sesion', component: IniciarSesionComponent},
{path: 'quienes-somos', component: QuienesSomosComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
