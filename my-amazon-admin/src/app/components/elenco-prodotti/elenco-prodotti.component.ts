import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-elenco-prodotti',
  templateUrl: './elenco-prodotti.component.html',
  styleUrls: ['./elenco-prodotti.component.css']
})
export class ElencoProdottiComponent implements OnInit {

prodotti : Prodotto[] = [];

  constructor(
    private httpClient : HttpClient
  ) {
    let observable : Observable<Prodotto[]>
    = this.httpClient.get<Prodotto[]>('http://localhost:3000/prodotti');

    observable.subscribe(
      response => this.prodotti = response
    );

  }

  ngOnInit() {
  }

}
