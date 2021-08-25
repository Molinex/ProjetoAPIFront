import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyURL = 'http://localhost:8081/company/'; 

  constructor(private httpClient: HttpClient) { }

  public consultall(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.companyURL + 'consultall');
  }

  public consultById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.companyURL + `consult?id=${id}`);
  }

  public save(company: Company): Observable<any> {
    return this.httpClient.post<any>(this.companyURL + 'register', company)
  }

  public update(company: Company): Observable<any> {
    return this.httpClient.put<any>(this.companyURL + 'update', company)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.companyURL + `remove/${id}`)
  }

}
