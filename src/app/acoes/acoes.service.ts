//To implement our API calls let's create a service like 'AcoesService'.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private http: HttpClient) {}
}