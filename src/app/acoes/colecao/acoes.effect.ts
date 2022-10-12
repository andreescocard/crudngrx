import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { AcoesService } from '../acoes.service';
import { acoesFetchAPISuccess, invokeAcoesAPI } from './acoes.action';
import { selectAcoes } from './acoes.selector';
 
@Injectable()
export class AcoesEffect {
  constructor(
    private actions$: Actions,
    private acoesService: AcoesService,
    private store: Store
  ) {}
 
  loadAllAcoes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeAcoesAPI),
      withLatestFrom(this.store.pipe(select(selectAcoes))),
      mergeMap(([, acaoformStore]) => {
        if (acaoformStore.length > 0) {
          return EMPTY;
        }
        return this.acoesService
          .get()
          .pipe(map((data) => acoesFetchAPISuccess({ allAcoes: data })));
      })
    )
  );
}

//The 'Effects' are used to invoke the API calls.
//ng generate class acoes/colecao/acoes.effect

//The 'AcoesEffect' class is just an injectable service. In the next steps, we write actions and trigger effects to invoke the API calls in this service.