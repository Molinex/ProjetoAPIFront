import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyList();
  }

  companyList(): void {
    this.companyService.consultall().subscribe(
      data => {
        this.companies = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  apagar(nome: string) {
    alert('Apagar empresa ' + nome + '?')
  }

}
