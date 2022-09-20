import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../modelos/alumno/alumno.module';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{

  @Output() public salidaNumber = new EventEmitter<number>();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public salidaAlumno = new EventEmitter<Alumno>();


  public nuevoAlumno: Alumno ={
    rut : 0,
    nombre : "",
    apellido : "",
    edad : 0,
    seccion : ""
  }

  public cambiarRut(event: Event): void{
    const ruts = event.target as HTMLInputElement;
    this.nuevoAlumno.rut = Number.parseInt(ruts.value);
    this.salidaNumber.emit();
  }
  public cambiarNombre(event: Event): void{
    const nombres = event.target as HTMLInputElement;
    this.nuevoAlumno.nombre = nombres.value;
    this.salidaString.emit();
  }
  public cambiarApellido(event: Event): void{
    const apellidos = event.target as HTMLInputElement;
    this.nuevoAlumno.apellido = apellidos.value;
    this.salidaString.emit();
  }
  public cambiarEdad(event: Event): void{
    const edades = event.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(edades.value);
    this.salidaNumber.emit();
  }
  public cambiarSeccion(event: Event): void{
    const secciones = event.target as HTMLInputElement;
    this.nuevoAlumno.seccion = secciones.value;
    this.salidaString.emit();
  }
  public guardarAlumno(): void{
    const copia: Alumno = {
      ...this.nuevoAlumno
    }
    this.salidaAlumno.emit(copia);
    this.nuevoAlumno.rut=0;
    this.nuevoAlumno.nombre="";
    this.nuevoAlumno.apellido="";
    this.nuevoAlumno.edad=0;
    this.nuevoAlumno.seccion="";
    console.log("mensaje desde el hijo");
    this.salidaAlumno.emit();
  }
}
