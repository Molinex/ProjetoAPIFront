import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpresaIdComponent } from './empresa-id/empresa-id.component';
import { EmpresaService } from './empresa.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
