import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Alumno } from '../modelos/alumno/alumno.module';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent  {
  @Input() public alumnos: Array<Alumno> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharRut(rut : number): void {
    const pos = this.alumnos.findIndex((elemento)=>{
      return rut === elemento.rut;
    });
    this.posIndex.emit(pos);
  }
}
