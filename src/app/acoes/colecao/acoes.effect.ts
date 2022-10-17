import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/colecao/app.action';
import { Appstate } from 'src/app/shared/colecao/appstate';
import { AcoesService } from '../acoes.service';
import {
  acoesFetchAPISuccess,
  invokeAcoesAPI,
  invokeSaveNewAcaoAPI,
  saveNewAcaoAPISucess,
} from './acoes.action';
import { selectAcoes } from './acoes.selector';
 
@Injectable()
export class AcoesEffect {
  constructor(
    private actions$: Actions,
    private acoesService: AcoesService,
    private store: Store,
    private appStore: Store<Appstate>
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

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewAcaoAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.create(action.newAcao).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewAcaoAPISucess({ newAcao: data });
          })
        );
      })
    );
  });
}

//The 'Effects' are used to invoke the API calls.
//ng generate class acoes/colecao/acoes.effect

//The 'AcoesEffect' class is just an injectable service. In the next steps, we write actions and trigger effects to invoke the API calls in this service.