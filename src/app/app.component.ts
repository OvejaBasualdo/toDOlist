import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tareas: Todo[] = []; /* aquí declaramos el array para las tareas */
  newTarea: string; /* variable donde se almacenaran las tareas que vayamos a crear */


  saveToDo() {
    if (this.newTarea) {
      let ingresoTarea = new Todo();
      ingresoTarea.name = this.newTarea;
      ingresoTarea.isCompleted = true;
      this.tareas.push(ingresoTarea);
      this.newTarea = '';
    } else {
      alert("Por favor, ingrese una nueva tarea ")
    }
  }

  hecho(id: number) {
    this.tareas[id].isCompleted = !this.tareas[id].isCompleted;
  }

  quitar(id:number){
    this.tareas = this.tareas.filter((v,i)=> i !==id);
  }

}
