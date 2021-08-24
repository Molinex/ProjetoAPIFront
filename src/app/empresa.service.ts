import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresaURL = 'http://localhost:8081/company/consult?id=1';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.empresaURL}`);
  }

}