import { Component, OnInit } from '@angular/core';
import {Validators,  FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/servicios/auth/auth.service';
import {LoginRequest} from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 
  form: FormGroup;
  usuario: LoginRequest = new LoginRequest(); 
  error: string="";

  constructor(private formBuilder: FormBuilder,private authService: AuthService,
    private router: Router) {
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]   
      }
    )

   }

  ngOnInit(): void {
  }

  get mailField()
  {
    return this.form.get("mail");
  }

  get passField()
  {
    return this.form.get("password");
  }

  get passInvalid()
  {
    return this.passField.touched && !this.passField.valid;
  }

  get mailInvalid()
  {
    return this.mailField.touched && !this.mailField.valid;
  }

  onEnviar(event: Event, usuario: LoginRequest)
  {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.form.valid)
    {
      console.log(this.form.value); //se puede enviar al servidor...
      this.authService.login(this.usuario)
      .subscribe(
        data => {
        console.log("DATA"+ JSON.stringify( data));
        //localStorage.setItem('auth-token', JSON.stringify(data ));

        this.router.navigate(['mi-billetera/movimientos']);
       
        },
        error => {
         this.error = error;
        }
      );
    }
    else
    {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }

}
