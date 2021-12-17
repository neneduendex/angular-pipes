import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Ramón';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  };

  cambiarInvitado() {
    if(this.genero == 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Jennifer';
    }else{
      this.genero = 'masculino';
      this.nombre = 'Ramón';
    }
  }

  //i18nplural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Eduardo',
    edad: 23,
    direccion: 'Querétaro, Qro'
  }

  //JSON pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de promesa')
    }, 3500);
  });
}
