import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { EnviarComponent } from './paginas/enviar/enviar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RevisarComponent } from './paginas/revisar/revisar.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'enviar',
        component: EnviarComponent,
      },
      {
        path: 'revisar',
        component: RevisarComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
