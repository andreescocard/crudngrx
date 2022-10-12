import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeAcoesAPI } from '../colecao/acoes.action';
import { selectAcoes } from '../colecao/acoes.selector';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  acoes$ = this.store.pipe(select(selectAcoes));
 
  ngOnInit(): void {
    this.store.dispatch(invokeAcoesAPI());
  }
}