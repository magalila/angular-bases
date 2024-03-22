import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
// import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];




@Output()
public onDelete: EventEmitter <string> = new EventEmitter ();

  onDeleteCharacter(id?: string):void{
    if ( !id ) return; //si el id no existe no se lo llama
    //TODO: emitir el id del personaje
    this.onDelete.emit( id);
  }
}


