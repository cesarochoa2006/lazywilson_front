import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BaseComponent } from './base/base.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProveedorMigasService } from './servicios/proveedor-migas.service';
import { RevisarComponent } from './paginas/revisar/revisar.component';
import { EnviarComponent } from './paginas/enviar/enviar.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { RestService } from './servicios/rest.service';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BaseComponent,
    RevisarComponent,
    EnviarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzStepsModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputNumberModule,
    NzUploadModule,
    NzSpaceModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, ProveedorMigasService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
