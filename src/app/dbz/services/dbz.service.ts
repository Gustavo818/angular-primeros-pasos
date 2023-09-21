import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log("uuid " + uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public character:Character[]=[{
    id: uuid(),
    name:'Vegeta',
    power:3400
  },{
    id: uuid(),
    name:'Goham',
    power:2000
  },{
    id: uuid(),
    name:'Goku',
    power:8500
  }]


  addCharacter(character:Character):void{
    console.log('main page');
    console.log(character);
    let newCharacter:Character={id: uuid(),...character};
    this.character.push(newCharacter);
  }

  // onDelete(index:number):void{
  //   this.character.splice(index,1);
  // }
  deleteCharacterById(id:string):void{
    this.character =  this.character.filter(character => character.id != id) ;
  }


}
