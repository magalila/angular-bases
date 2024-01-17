//DEPENDENCIAS PRINCIPALES DE ANGULAR
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//CODIGO DE TERCEROS...

//MI CODIGO
import { HeroComponent } from "./hero.component";
import { ListComponent } from "../list/list.component";



@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule]
})
export class HeroesModule{

}
