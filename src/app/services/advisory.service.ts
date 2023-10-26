import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Advisory } from '../models/advisory';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class AdvisoryService {
  private url = `${base_url}/advisory`;
  private listaCambio = new Subject<Advisory[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Advisory[]>(this.url);
  }
  insert(de: Advisory) {
    return this.http.post(this.url, de);
  }
  setList(listaNueva: Advisory[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Advisory>(`${this.url}/${id}`);
  }
  update(a: Advisory) {
    return this.http.put(this.url, a);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
