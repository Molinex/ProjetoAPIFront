import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];
  constructor(
    private companyService: CompanyService,
    private toaster: ToastrService
  ) { }

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

  apagar(id: number) {
    this.companyService.delete(id).subscribe(
      data => {
        this.toaster.error('Empresa Não foi Apagada', 'Fail', {
          timeOut: 3000,
        });
        this.companyList();
      },
      err => {
        this.toaster.success('Empresa Deletada com Sucesso!!', 'OK', {
          timeOut: 3000,
        });
        this.companyList();
      }
    );
  }

}
