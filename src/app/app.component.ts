import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno/alumno.module';
import { Historial } from './modelos/historial/historial.module';
import { seccion } from './modelos/seccion/seccion.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnosGuardados: Array<Alumno> = [];
  public seccionesGuardados: Array<seccion> = [];
  public historialesGuardados: Array<Historial> = [];

  public escucharAlumno(nuevo:Alumno):void {
    const id:number = this.alumnosGuardados.length + 1;
    nuevo.idA = id;
    this.alumnosGuardados.push(nuevo);
  }
  public borrarAlumno(id:number):void{
    this.alumnosGuardados.splice(id,1)
  }

  public escucharSeccion(nuevo:seccion):void {
    const id:number = this.seccionesGuardados.length + 1;
    nuevo.idS = id;
    this.seccionesGuardados.push(nuevo);
  }
  public borrarSeccion(id:number):void{
    this.seccionesGuardados.splice(id,1)
  }
}
