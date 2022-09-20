import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlumnoComponent } from './listar-alumno/listar-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HistorialComponent } from './historial/historial.component';
import { ListarHistorialComponent } from './listar-historial/listar-historial.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnoComponent,
    AlumnoComponent,
    HistorialComponent,
    ListarHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
