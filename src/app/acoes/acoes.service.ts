import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acoes } from './store/acoes';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Acoes[]>('http://localhost:3000/acoes');
  }
  create(payload: Acoes) {
    return this.http.post<Acoes>('http://localhost:3000/acoes', payload);
  }
  update(payload: Acoes) {
    return this.http.put<Acoes>(
      `http://localhost:3000/acoes/${payload.id}`,
      payload
    );
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:3000/acoes/${id}`);
  }
}