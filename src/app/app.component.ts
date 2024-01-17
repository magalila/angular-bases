import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  //decorador que indica que es un componente
  selector: 'app-root',
  standalone: false,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';

}
