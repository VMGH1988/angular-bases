import {NgModule} from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[ //esto es para que funcionen los if y los for
    CommonModule
  ]

})

export class HeroesModule{};

/*
git remote add origin https://github.com/VMGH1988/angular-bases.git
git branch -M main
git push -u origin main
*/
