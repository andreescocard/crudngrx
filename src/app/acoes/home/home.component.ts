import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeAcoesAPI, invokeDeleteAcaoAPI } from '../store/acoes.action';
import { selectAcoes } from '../store/acoes.selector';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private appStore: Store) {}
 
  acoes$ = this.store.pipe(select(selectAcoes));
 
  deleteModal: any;
  idToDelete: number = 0;
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.store.dispatch(invokeAcoesAPI());
  }
 
  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.store.dispatch(
      invokeDeleteAcaoAPI({
        id: this.idToDelete,
      })
    );
    
  }
}