import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-velocidad-click',
  templateUrl: './velocidad-click.component.html',
  styleUrls: ['./velocidad-click.component.css']
})
export class VelocidadClickComponent implements OnInit {

  public juntado: number;
  public maximo:number;
  public repetidor:any;
  public tiempo:number;
  public puntuacion:number;

  constructor() { 
    this.juntado = 0;
    this.tiempo = 10;
    this.maximo = 0;
    this.puntuacion = 0;
  }

  ngOnInit() {
   
  }

  Contar()
  {
    this.juntado++;

    if(this.maximo<this.juntado)
    {
      this.maximo = this.juntado;
    }
  }

  NuevoJuego() {

  let visible = <HTMLInputElement> document.getElementById('nuevoJuego');
  visible.style.display = 'none';

   this.repetidor = setInterval(()=>{ 
      this.tiempo--;
      console.log("llego", this.tiempo);
      if(this.tiempo==0 ) 
      {
        clearInterval(this.repetidor);
        this.tiempo=10;
        this.puntuacion = this.juntado;
        this.juntado = 0;
        visible.style.display = 'block';

        this.MostrarOcultarListo();
        this.MostrarOcultarPrep();
      }
    }, 1000);

  }
 
  MostrarOcultarPrep()
  {
    let preparado = <HTMLInputElement> document.getElementById('preparado');
    let listo = <HTMLInputElement> document.getElementById('listo');

    if(preparado.style.display == 'block')
    {
      preparado.style.display = 'none';
    }
    else
    {
      preparado.style.display = 'block';
    }

  }

  MostrarOcultarListo()
  {
    let listo = <HTMLInputElement> document.getElementById('listo');

    if(listo.style.display == 'block')
    {
      listo.style.display = 'none';
    }
    else
    {
      listo.style.display = 'block';
    }
  }

}
