import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character:Character): void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);     //push para colocar en el último lugar a los personajes que se agregen y unshift para colocarles en el primer lugar.
  }

  //onDeleteCharacter(index:number): void {
    //this.characters.splice(index,1);    // splice remueve un elemento de un arreglo y si es necesario inserta un nuevo elemento en ese lugar, primero se coloca desde que lugar quiere afectar, segundo cuantos elementos va a afectar y 3ro se coloca entre comillas el nuevo o nuevos elementos que se quiere agregar separados por comas y cada uno con sus propias comillas: Ejemplos: (1, 0, 'Feb'), (2, 0, "drum", "guitar").
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
