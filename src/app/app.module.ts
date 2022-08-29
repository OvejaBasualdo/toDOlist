import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntruccionesComponent } from './intrucciones/intrucciones.component';
import { AutoFocusInputDirective } from './auto-focus-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntruccionesComponent,
    AutoFocusInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,/* 1 */
    ReactiveFormsModule /* 2 */
    /* 1 y 2 se importan para utilizar ngModel en el input de agregar tareas  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
