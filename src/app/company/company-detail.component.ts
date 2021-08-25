import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

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
        this.retorno();
      }
    );
  }

  retorno(): void {
    this.router.navigate(['/'])
  }

}
