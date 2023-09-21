import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor(  private dbzService:DbzService ){ }


  get character():Character[]{
    return [...this.dbzService.character];
  }


  deleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  addCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }

}
