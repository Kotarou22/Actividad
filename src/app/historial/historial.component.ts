import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Historial } from '../modelos/historial/historial.module';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  @Input() public historial!: Historial;
  @Output() public ruthistorial = new EventEmitter<number>();

  public emitirHistorial(): void{
    this.historial.rut;
    this.ruthistorial.emit(this.historial.rut);
  }
}
