import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';

@Component({
  selector: 'app-elenco-prodotti',
  templateUrl: './elenco-prodotti.component.html',
  styleUrls: ['./elenco-prodotti.component.css']
})
export class ElencoProdottiComponent implements OnInit {

prodotti : Prodotto[] = [
  new Prodotto(1, 'Cat 1','Prod 1',1,'Desc_1'),
  new Prodotto(2, 'Cat 2','Prod 2',1,'Desc_2'),
  new Prodotto(3, 'Cat 3','Prod 3',1,'Desc_3'),
];

  constructor() { }

  ngOnInit() {
  }

}
