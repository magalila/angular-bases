import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
  oneNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  }
  emitCharacter(){
     console.log(this.character);
     if ( this.character.name.length === 0) return;
     this.oneNewCharacter.emit(this.character);
     this.character = { name:'', power: 0 };
   
  }
}
