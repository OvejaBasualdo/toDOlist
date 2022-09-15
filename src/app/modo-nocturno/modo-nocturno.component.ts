import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSun,faMoon} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modo-nocturno',
  templateUrl: './modo-nocturno.component.html',
  styleUrls: ['./modo-nocturno.component.scss']
})
export class ModoNocturnoComponent implements OnInit {
  faMoon = faMoon;
  faSun = faSun ;
  modoOscuro: boolean ;
  /*@Input() CapturaBoolean: boolean;*/
  @Output() EventoModoOscuro: EventEmitter<boolean> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  claseOscura(){
this.modoOscuro=!this.modoOscuro;
console.log(this.modoOscuro)
this.EventoModoOscuro.emit(this.modoOscuro);
}

}
