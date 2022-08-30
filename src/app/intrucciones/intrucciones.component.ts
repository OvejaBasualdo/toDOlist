import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intrucciones',
  templateUrl: './intrucciones.component.html',
  styleUrls: ['./intrucciones.component.scss']
})
export class IntruccionesComponent implements OnInit {

  modalSwitch: boolean;

  constructor() {
    this.modalSwitch = false;
   }

  ngOnInit(): void {
  }
  mostrar(){
    this.modalSwitch = true;
  }
  ocultar(){
  this.modalSwitch = false;
}

}
