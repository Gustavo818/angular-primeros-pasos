import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent   {

  @Input()
  public characterList:Character[]=[{
    name:'Vegeta',
    power:5000
  },{
    name:'Vulma',
    power:60
  }]


  @Output()
  onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string){
    if (!id) return;
    console.log({id});
    this.onDelete.emit(id);

  }
}
