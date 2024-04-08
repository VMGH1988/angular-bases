import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid'; // importar el uuid para que ponga ids a los personajes hay que poner el comando que dice cuando sale error
import { Character } from '../interfaces/character.interface';

// es como si hiciera un Singleton
@Injectable({providedIn: 'root'})

export class DBZService {

  public characters: Character[] = [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Goku', power: 9500},
    {id: uuid(), name: 'Vegeta', power: 7500}
  ];

  //metodo para agregar el personaje introducido en el formulario a la lista
  addCharacter(character: Character):void{

// construyo un nuevo personaje
    const newCharacter: Character={
      id:uuid(), ...character
      /* lo de arriba es como poner esto de aqui abajo
      id:uuid(),
      name: character.name,
      power: character.power*/
    }

    this.characters.push(newCharacter);
  }

  //onDeleteCharacater(index: number){
    //this.characters.splice(index, 1);
  //}

  // en este metodo hacemos un filter con la id del elemento que queremos borrar y nos devuelve otro array con todos los elementos menos ese
  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);

  }

}

// se instala npm i uuid para poner ids
