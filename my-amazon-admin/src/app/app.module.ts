import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ElencoProdottiComponent } from './components/elenco-prodotti/elenco-prodotti.component';

import {Routes,RouterModule} from '@angular/router';
import { FormProdottoComponent } from './components/form-prodotto/form-prodotto.component';

const routes: Routes = [
  {path : 'elenco-prodotti', component : ElencoProdottiComponent},
  {path : 'form-prodotto', component: FormProdottoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ElencoProdottiComponent,
    FormProdottoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
