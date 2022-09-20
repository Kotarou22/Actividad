import { Component, Output, EventEmitter} from '@angular/core';
import { seccion } from '../modelos/seccion/seccion.module';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public salidaNumber = new EventEmitter<number>();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public salidaSeccion = new EventEmitter<seccion>();

  public nuevaSeccion: seccion ={
    siglas : "",
    nombreS : ""
  }

  public cambiarSiglas(event: Event): void{
    const Sigla = event.target as HTMLInputElement;
    this.nuevaSeccion.siglas = Sigla.value;
    this.salidaString.emit();
  }
  public cambiarNombreS(event: Event): void{
    const nombres = event.target as HTMLInputElement;
    this.nuevaSeccion.nombreS = nombres.value;
    this.salidaString.emit();
  }
  public guardarSeccion(): void{
    const copia: seccion = {
      ...this.nuevaSeccion
    }
    this.salidaSeccion.emit(copia);
    this.nuevaSeccion.siglas="";
    this.nuevaSeccion.nombreS="";
    console.log("mensaje desde la seccion");
    this.salidaSeccion.emit();
  }
}
