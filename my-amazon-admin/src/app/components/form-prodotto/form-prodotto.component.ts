import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  prodotto : Prodotto;

  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) {
    this.prodotto = new Prodotto();
  }

  ngOnInit() {
  }

  salva(){
    this.httpClient.post('http://localhost:3000/prodotti',this.prodotto)
    .subscribe(()=>this.router.navigateByUrl('/elenco-prodotti'))
  }

}
