import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {cadastroProdutoRoutes} from "./pages/cadastroProduto/cadastroProduto-routing.module";
import {cadastroClienteRoutes} from "./pages/cadastro-cliente/cadastro-cliente-routing.module";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: "home",
    component: HomeComponent,
    children: [...cadastroProdutoRoutes, ...cadastroClienteRoutes]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
