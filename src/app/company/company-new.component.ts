import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  name: string = '';
  cnpj: number = null;


  constructor(
    private companyService: CompanyService,
    private toaster: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const company = new Company(this.name, this.cnpj); 
    this.companyService.save(company).subscribe(
      data => {
        this.toaster.error('Empresa Não foi Criada', 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toaster.success('Empresa Criada com Sucesso!!', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }
}
