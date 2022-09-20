import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Alumno } from '../modelos/alumno/alumno.module';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent{

  @Input() public alumno!: Alumno;
  @Output() public rutalumno = new EventEmitter<number>();

  public emitirRut(): void{
    this.alumno.rut;
    this.rutalumno.emit(this.alumno.rut);

  }

}
