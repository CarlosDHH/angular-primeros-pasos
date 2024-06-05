import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add_character.component.html',
  styleUrl: './add_character.component.css',
})
export class AddCharacterComponent {

// Este es el que libera los datos para que los utilicen en otro componente
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }
// Este es el metodo que manda a llamar a la funcion que libera los datos
// para asi poder usarlos fuera de si.
  emitCharacter(): void {
    console.log(this.character)

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

}
