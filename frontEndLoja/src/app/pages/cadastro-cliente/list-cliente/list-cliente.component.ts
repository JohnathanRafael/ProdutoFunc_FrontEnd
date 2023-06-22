import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PessoaFisicaDto} from "../../../api/models/pessoa-fisica-dto";
import {PessoaJuridicaDto} from "../../../api/models/pessoa-juridica-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PessoaFisicaControllerService} from "../../../api/services/pessoa-fisica-controller.service";
import {PessoaJuridicaControllerService} from "../../../api/services/pessoa-juridica-controller.service";

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit{
  colunasMostrar = ['pessoaCodigo', 'pessoaNome', 'pessoaDocumento'];
  clienteLista : MatTableDataSource<undefined> = new MatTableDataSource<undefined>([]);

  constructor(
    public pessoaFisicaControllerService : PessoaFisicaControllerService,
    public pessoaJuridcaControllerService : PessoaJuridicaControllerService
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  //TODO: Colocar para listar tudo junto
  private buscarDados() {
    this.pessoaFisicaControllerService.listAll2().subscribe(dataPessoaFisica => {
      this.clienteLista.data = dataPessoaFisica
    })
    this.pessoaJuridcaControllerService.listAll1().subscribe(dataPessoaJuridica => {
      this.clienteLista.data.concat(dataPessoaJuridica)
    })
  }


}
