import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['mat1','mat2','mat3','mat4']
  public deletedHero?:string;
  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }


}
