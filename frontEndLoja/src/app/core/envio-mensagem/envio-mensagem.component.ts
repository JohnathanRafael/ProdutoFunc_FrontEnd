import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialog} from "../confirmation-dialog/confirmation-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProdutoControllerService} from "../../api/services/produto-controller.service";
import {ProdutoDto} from "../../api/models/produto-dto";
import {MessageResponse} from "../../api/models/message-response";
import {TelefoneDto} from "../../api/models/telefone-dto";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-envio-mensagem',
  templateUrl: './envio-mensagem.component.html',
  styleUrls: ['./envio-mensagem.component.scss']
})
export class EnvioMensagemComponent {
  formGroup!: FormGroup;

  titulo = "Titulo: Confirmar?";
  mensagem: string = "Enviar produto para: "
  private produto?: ProdutoDto;
  codigo !: number;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public produtoControllerService: ProdutoControllerService,
    private dialog: MatDialog,
    private router: Router,

    @Inject(MAT_DIALOG_DATA) private data: ConfirmationDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialog, ConfirmationDialogResult>)
  {
    if (data) {
      this.titulo = data?.titulo || this.titulo
      this.mensagem = data.mensagem || this.mensagem;
      this.produto = data.dado;
    }
    this.createForm();
  }
  onSubmit() {

    if (this.formGroup.valid) {

      this.codigo = this.produto?.produtoCodigo || 0;
      this.produtoControllerService.enviarMensagem( { id: this.codigo, body: this.formGroup.value }).subscribe(link => {
        window.open(link.linkTelefone, "_blank");
        console.log(link.linkTelefone);
        this.atualizar();
      }, erro => {
        this.showError(erro);
      })


    }
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      numeroTelefone: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  atualizar() {
    this.dialogRef.close({
      resultado: true,
      dado: this.data?.dado
    });
  }

  showError(erro:MessageResponse) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: `Erro ao enviar mensagem`,
        mensagem: erro.message,
        textoBotoes: {
          ok: 'ok',
        },
      },
    });

  }
  get showCancelButton(): boolean {
    return !!this.data;
  }
}
export interface ConfirmationDialogData {
  titulo?: string;
  mensagem?: string;
  dado?: any
}

export interface ConfirmationDialogResult {
  resultado: boolean;
  dado?: any;
}

