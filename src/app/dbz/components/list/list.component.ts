
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    // Estos son los valores por default que se agregarian en caso de no tener ningun
    // dato que se reciba del exterior
    name:'',
    power:0
  }]

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(character:Character):void{
    const id = character.id ?? '';
    this.onDeleteId.emit(id);
  }
}
