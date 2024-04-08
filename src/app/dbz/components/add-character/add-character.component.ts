import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output() //para emitir
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character ={

    name:'',
    power:0
  }

  emitCharacter():void{
    // debugger; es para poner un punto de pausa para depurar
    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit(this.character);

    /*para limpiar el componente*/
    this.character = {name:'', power: 0};
  }

}
