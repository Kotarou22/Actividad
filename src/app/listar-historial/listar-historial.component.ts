import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Historial } from '../modelos/historial/historial.module';

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.scss']
})
export class ListarHistorialComponent {
  @Input() public historiales : Array<Historial> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharHistorial(rut : number): void {
    const pos = this.historiales.findIndex((elemento)=>{
      return rut === elemento.rut;
    });
    this.posIndex.emit(pos);
  }
}
