import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() {}

// Estos son los datos que se mandan a traves del input y se ocupan para formar la lista

  public characters:Character[]=[
    {
      id:uuid(),
      name:'krilin',
      power:2500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:2500
    },
    {
      id:uuid(),
      name:'koku',
      power:9500
    }
  ]

  // Estas son las funciones que se ocupan para hacer las acciones
  addCharacter(character:Character):void{
    const newCharacter:Character={id:uuid(), ...character}

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }
  onDeleteCharacterById(id:string):void{
    this.characters= this.characters.filter(character => character.id !== id )
  }


}
