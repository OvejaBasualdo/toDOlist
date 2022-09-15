import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, HostListener, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IntruccionesComponent } from './intrucciones/intrucciones.component';
import { ModoNocturnoComponent } from './modo-nocturno/modo-nocturno.component';
import { Todo } from './Todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tareas: Todo[] = []; /* aquí declaramos el array para las tareas */
  newTarea: string; /* variable donde se almacenaran las tareas que vayamos a crear */
  @ViewChild(IntruccionesComponent,{ static: false })
  alertChild: IntruccionesComponent;
  darkMode: boolean;
  cssUrl: string;
constructor(public sanitizer: DomSanitizer){
  let prueba = this.obtener_localStorage();
  this.cssUrl = '/assets/light.css';
  if(prueba?.length > 0) {
    this.tareas = prueba;
  }
}
onEventoModoOscuro(evento:boolean){
  this.darkMode = evento;
  if(!evento){
    this.cssUrl = `/assets/light.css`;
  }else{
    this.cssUrl = `/assets/dark.css`;
  }
}
  saveToDo() {
    if (this.newTarea) {
      let ingresoTarea = new Todo();
      ingresoTarea.name = this.newTarea;
      ingresoTarea.isCompleted = false;
      this.tareas.push(ingresoTarea);
      this.grabar_localStorage(this.tareas);
      this.newTarea = '';

    } else {
      alert("Por favor, ingrese una nueva tarea ")
    }
  }

  hecho(id: number) {
    this.tareas[id].isCompleted = !this.tareas[id].isCompleted;
    this.grabar_localStorage(this.tareas)
  }

  quitar(id:number){
    this.tareas = this.tareas.filter((v,i)=> i !==id);
    console.log(this.tareas);
    this.grabar_localStorage(this.tareas);
  }

  grabar_localStorage(listado: Todo[]){
    let listaGrabada = localStorage.setItem('listaSalvada',JSON.stringify(listado));
    console.log(localStorage.getItem('listaSalvada'));

  }

  obtener_localStorage(){
    let listado= JSON.parse(localStorage.getItem('listaSalvada'));
    return listado;
  }

  borrar_listado(){
    localStorage.clear();
    this.grabar_localStorage(this.tareas=[]);

  }
  mostrarAyuda(){
    this.alertChild.mostrar();
  }


  @HostListener('document:keyup', ['$event.key'])
  handleKey($event: string):void {
    if($event == 'Escape'){
      this.alertChild.modalSwitch = false;
    }
  }
  @HostListener('document:click', ['$event.target'])
  handleClick($event: HTMLElement): void{
    if($event.classList.toString() == 'modal'){
      this.alertChild.modalSwitch = false;
    }
  }

  }
