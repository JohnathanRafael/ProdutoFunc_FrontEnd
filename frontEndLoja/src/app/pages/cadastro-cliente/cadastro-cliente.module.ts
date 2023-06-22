import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterLink, RouterOutlet} from "@angular/router";
import { ListClienteComponent } from './list-cliente/list-cliente.component';


@NgModule({
  declarations: [
    HomeClienteComponent,
    FormClienteComponent,
    ListClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterLink,
    RouterOutlet
  ]
})
export class CadastroClienteModule { }
