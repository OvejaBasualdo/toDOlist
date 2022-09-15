import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntruccionesComponent } from './intrucciones/intrucciones.component';
import { AutoFocusInputDirective } from './auto-focus-input.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModoNocturnoComponent } from './modo-nocturno/modo-nocturno.component';

@NgModule({
  declarations: [
    AppComponent,
    IntruccionesComponent,
    AutoFocusInputDirective,
    ModoNocturnoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,/* 1 */
    ReactiveFormsModule,/* 2 */
    FontAwesomeModule
    /* 1 y 2 se importan para utilizar ngModel en el input de agregar tareas  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
