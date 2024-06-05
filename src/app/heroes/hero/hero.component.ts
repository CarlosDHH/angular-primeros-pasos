import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Perez';
  public age:number=50;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} tiene: ${this.age} años`
  }
  changeHero(name:string = 'juanito'):void{
    this.name =name
  }
  changeAge(age:number = 16):void{
    this.age=age
  }
  reset():void{
    this.name='Perez';
    this.age=50
  }
}
