import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  prodotto : Prodotto;

  constructor() {
    this.prodotto = new Prodotto();
  }

  ngOnInit() {
  }

}
