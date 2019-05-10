import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElencoProdottiComponent } from './components/elenco-prodotti/elenco-prodotti.component';

import {Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  {path : 'elenco-prodotti', component : ElencoProdottiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ElencoProdottiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
