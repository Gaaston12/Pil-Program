import { Component, OnInit, Renderer2 ,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('myheader') myHeader: ElementRef;
  mi_titulo:string="Programa PIL @2021";
  estadoPositivo:boolean=false;
  texto="Apagado";
  nombre="Luis";
  constructor(private myRender2: Renderer2) { }

  ngOnInit(): void {
    /*let hpadre=document.getElementById("hpadre") ;
    let hhijo=document.getElementById("hhijo") ;
    let new_heading: HTMLHeadingElement = document.createElement("h1");
    new_heading.innerText = "Manipulando el DOM desde Typescript";
    hpadre.insertBefore(new_heading,hhijo)*/
  }

  ngAfterViewInit():void{
    this.myRender2.removeClass(this.myHeader.nativeElement, "bg-dark");
    this.myRender2.addClass(this.myHeader.nativeElement,"bg-success");
    this.myRender2.setAttribute(this.myHeader.nativeElement, "title", "Este es el header");
  }

  getTitulo()
  {
    return this.mi_titulo;
  }

  cambiarEstado()
  {
    this.estadoPositivo = !this.estadoPositivo; 
    if (this.estadoPositivo)
    {this.texto="Encendido";}
    else
    {this.texto="Apagado";}
    alert(this.nombre);
  }


}
