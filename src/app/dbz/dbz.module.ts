import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add_character/add_character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCharacterComponent,
    MainPageComponent,
    ListComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class DbzModule { }
