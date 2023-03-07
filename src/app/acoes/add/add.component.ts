import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Acoes } from '../store/acoes.model';
import { invokeSaveNewAcaoAPI } from '../store/acoes.action';
 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router
  ) {}
 
  acaoForm: Acoes = {
    id: 0,
    codigo: '',
    valor: 0,
    quantidade: 0,
    data: new Date(Date.now())
  };
 
  ngOnInit(): void {}
 
  save() {
    this.store.dispatch(invokeSaveNewAcaoAPI({ newAcao: this.acaoForm }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));

  }
}