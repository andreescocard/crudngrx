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
  updateAcaoAPISucess,
  invokeUpdateAcaoAPI,
  invokeDeleteAcaoAPI,
  deleteAcaoAPISuccess,
  LOADACOES,
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
      ofType(LOADACOES),
      mergeMap(() => {
        return this.acoesService
          .get()
          .pipe(map((data) => acoesFetchAPISuccess({ allAcoes: data })));
      })
    )
  );

  saveNewAcao$ = createEffect(() => {
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

  updateAcaoAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateAcaoAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.update(action.updateAcao).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateAcaoAPISucess({ updateAcao: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteAcaoAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.acoesService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deleteAcaoAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });

}
