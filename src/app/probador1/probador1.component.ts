import { Component } from '@angular/core';
import { HttpService } from '../http/http.service';
import { iuser } from '../http/iuser';

@Component({
  selector: 'app-probador1',
  templateUrl: './probador1.component.html',
  styleUrl: './probador1.component.css'
})
export class Probador1Component {
  
  respuesta='';

  
//Esto vendria de un form
  user:iuser={
    name:'bartolo',
    email:'example23@gmail.com',
    password:'secret shh'
  };

  constructor(private pruebas:HttpService) { }


  pruebaInicial(){
    this.pruebas.pruebaInicial().subscribe(
      (data) => {
        this.respuesta= data;
      }
    );
  }

  register(){

    this.pruebas.register(this.user).subscribe(
      (data) => {
        this.respuesta=data;
        localStorage.setItem('token_marcos',data);
      }
    )
  }

  token:string|null='';
  login(){
    this.pruebas.login(this.user).subscribe(
      (data) => {
        this.token=data;
        localStorage.setItem('token_marcos',data);
      }
    )
  }

  respuestaRutaProtejida='';
  rutaProtejida(){
    this.pruebas.rutaProtejida().subscribe(
      (data)=>{this.respuestaRutaProtejida=data;}
    )
  }

  respuestaLogout='';
  logout(){
    this.pruebas.logout().subscribe(
      (data)=>{
        this.respuestaLogout=data;
      }
    )
  }


}