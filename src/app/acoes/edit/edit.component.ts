import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Acoes } from '../store/acoes.model';
import { invokeUpdateAcaoAPI } from '../store/acoes.action';
import { selectAcaoById } from '../store/acoes.selector';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}
 
  acaoForm: Acoes = {
    id: 0,
    codigo: '',
    valor: 0,
    quantidade: 0,
    data: new Date(Date.now())
  };
 
  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectAcaoById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.acaoForm = { ...data };
      }
      else{
        this.router.navigate(['/']);
      }
    });
  }
 
  update() {
    this.store.dispatch(
      invokeUpdateAcaoAPI({ updateAcao: { ...this.acaoForm } })
    );
    
  }
}