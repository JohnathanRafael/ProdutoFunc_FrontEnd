import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProdutoControllerService} from "../../../api/services/produto-controller.service";
import {ProdutoDto} from "../../../api/models/produto-dto";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {EnvioMensagemComponent} from "../../../core/envio-mensagem/envio-mensagem.component";

@Component({
  selector: 'app-listProduto',
  templateUrl: './listProduto.component.html',
  styleUrls: ['./listProduto.component.scss']
})
export class ListProdutoComponent implements OnInit{
    colunasMostrar = ['produtoCodigo', 'produtoNome', 'produtoMarca', 'produtoValorVenda','produtoValorCusto', 'produtoEstoque', 'statusProduto', 'acoes'];
    produtoLista : MatTableDataSource<ProdutoDto> = new MatTableDataSource<ProdutoDto>([]);

  constructor(
    public produtoControllerService: ProdutoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.produtoControllerService.listAll().subscribe(data => {
      this.produtoLista.data = data;
    })
  }

  remover(ProdutoDto: ProdutoDto) {
    console.log("Removido", ProdutoDto.produtoCodigo);
    this.produtoControllerService.remover({id: ProdutoDto.produtoCodigo || 0})
      .subscribe(retorno => {
          this.buscarDados();
          this.showMensagemSimples("Excluído com sucesso ",5000);
          console.log("Exlcusão:", retorno);
        }, error => {
          if (error.status === 404) {
            this.showMensagemSimples("Tipo não existe mais")
          } else {
            this.showMensagemSimples("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  confirmarExcluir(ProdutoDto: ProdutoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `A exclusão de: ${ProdutoDto.produtoNome} (ID: ${ProdutoDto.produtoCodigo})?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: ProdutoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.remover(confirmed.dado);
      }
    });
  }
  showMensagemSimples( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  enviarproduto(ProdutoDto: ProdutoDto){
    const enviarMensagem= this.dialog.open(EnvioMensagemComponent, {
      data: {
        titulo: 'Enviar Produto Por Whatsapp',
        mensagem: `Digite o telefone: `,
        dado: ProdutoDto
      },
    });
    enviarMensagem.afterClosed().subscribe(() => {

    })
  }

}
