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

/* Primera vez
git remote add origin https://github.com/VMGH1988/angular-bases.git  crea la referencia a mi github
git branch -M main para renombrar mi rama a main
git push -u origin main hacer un push de los cambios y poner origin como origen por defecto

git checkout -- . es para que vuelva el proyecto a lo ultimo que tengo en git
*/

/*
Luego para hacer cambios
git add .
git commit -m "mensaje"
git push
*/

/* 
Cuando quieres descargar un proyecto a las carpetas de git
hay que hacerle un npm install para volver a meter los modulos de node
*/

