import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {CadastroProdutoModule} from "./pages/cadastroProduto/cadastroProduto.module";
import {MatCardModule} from "@angular/material/card";
import { ConfirmationDialog } from './core/confirmation-dialog/confirmation-dialog.component';
import {CadastroClienteModule} from "./pages/cadastro-cliente/cadastro-cliente.module";
import { EnvioMensagemComponent } from './core/envio-mensagem/envio-mensagem.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { SettingsComponent } from './pages/settings/settings.component';
// CASO DE ERRO AQUI EXECUTAR: npm install --save ngx-mask, PARA MASCARA DO TELEFONE
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialog,
    EnvioMensagemComponent,
    SettingsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatMenuModule,
        CadastroProdutoModule,
        CadastroClienteModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        // CASO DE ERRO AQUI EXECUTAR: npm install --save ngx-mask, PARA MASCARA DO TELEFONE
        NgxMaskDirective,
        NgxMaskPipe
    ],
  providers: [
    // CASO DE ERRO AQUI EXECUTAR: npm install --save ngx-mask, PARA MASCARA DO TELEFONE
    provideNgxMask ( ),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
