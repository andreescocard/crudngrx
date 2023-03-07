/*
Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
Effects are long-running services that listen to an observable of every action dispatched from the Store.
Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
Effects perform tasks, which are synchronous or asynchronous and return a new action.
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, withLatestFrom, catchError, tap, concatMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { AcoesService } from '../acoes.service';
import { of } from 'rxjs';
import {
  acoesFetchAPISuccess,
  invokeSaveNewAcaoAPI,
  invokeUpdateAcaoAPI,
  invokeDeleteAcaoAPI,
  LOADACOES,
} from './acoes.action';
import { Router } from '@angular/router';
 
@Injectable()
export class AcoesEffect {
  constructor(
    private actions$: Actions,
    private acoesService: AcoesService,
    private appStore: Store<Appstate>, 
    private router: Router
  ) {}
  
    /*
    loadAllAcoes$ - effect name listening to actions
    pipe() - call one or more functions that passes the result to next one
    ofType - filter action
    mergeMap - modifica cada valor observable um por um sem parar
    concatMap - modifica cada valor observable um por um (esperar a modificação terminar)
    switchMap - modifica apenas o último valor do observable
    exhaustMap - modifica apenas o primeiro valor do observable
    tap - aplica uma ação ou side effect transparente (sem retorno)
    map - operator > Apply projection with each value from source.
    “{dispatch: false}” - to indicate it does not need to dispatch anything after the side effect completes.
     */

  loadAllAcoes$ = createEffect(() =>
    () => this.actions$
      .pipe(
        ofType(LOADACOES),
        concatMap(action => 
          this.acoesService.get()),
          map(data => acoesFetchAPISuccess({allAcoes: data}))
      )
  );


  saveNewAcao$ = createEffect(
    () => this.actions$
      .pipe(
          ofType(invokeSaveNewAcaoAPI),
          concatMap(action => this.acoesService.create(
            action.newAcao
          )),
          tap(() => this.router.navigateByUrl("/"))
      ),
      {dispatch: false}
  );


  updateAcaoAPI$ = createEffect(
    () => this.actions$
      .pipe(
          ofType(invokeUpdateAcaoAPI),
          switchMap(action => this.acoesService.update(
            action.updateAcao
          )),
          tap(() => this.router.navigateByUrl("/"))
      ),
      {dispatch: false}
  );


  deleteBooksAPI$ = createEffect(
    () => this.actions$
      .pipe(
          ofType(invokeDeleteAcaoAPI),
          concatMap(action => this.acoesService.delete(
            action.id
          )),
          tap(() => {
            document.getElementById("closeModalButton")!.click();
          })
      ),
      {dispatch: false}
  );
         

}
