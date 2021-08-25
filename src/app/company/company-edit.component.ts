import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company: Company = null;

  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.companyService.consultById(id).subscribe(
      data => {
        this.company = data;
      }, 
      err => {
        this.toaster.error('Não pode exibir os detalhes', 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/'])
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.companyService.update(id, this.company).subscribe(
      data => {
        this.toaster.error('Empresa Não foi Criada', 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toaster.success('Empresa Alterada com Sucesso!!', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }
}
