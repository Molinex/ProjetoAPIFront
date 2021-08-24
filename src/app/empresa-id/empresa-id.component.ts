import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-id',
  templateUrl: './empresa-id.component.html',
  styleUrls: ['./empresa-id.component.css']
})
export class EmpresaIdComponent implements OnInit {

  empresas: Array<any>;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.empresaService.listar().subscribe(dados => this.empresas = dados)
  }
}
