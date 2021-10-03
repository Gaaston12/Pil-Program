import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/servicios/cuenta.service';
import {AuthService} from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  mostrar_movimientos=true;
  hoy= new Date();
  movimientos;
  
  
  constructor(private cuentaService:CuentaService, private authService:AuthService) {

   }

  ngOnInit(): void {

    this.cuentaService.ObtenerUltimosMovimientos(2).subscribe(
      data=> {
        console.log(data);
        this.movimientos=data['Movimientos'];
      }
    );

  }



}
