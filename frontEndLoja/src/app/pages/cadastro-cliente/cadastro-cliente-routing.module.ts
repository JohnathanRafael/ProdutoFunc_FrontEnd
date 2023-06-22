import {Routes} from '@angular/router';
import {FormClienteComponent} from "./form-cliente/form-cliente.component";
import {HomeClienteComponent} from './home-cliente/home-cliente.component';
import {ListClienteComponent} from "./list-cliente/list-cliente.component";
export const cadastroClienteRoutes: Routes = [
  {
    path: "cadastro-cliente",
    component: HomeClienteComponent,
    children: [
      {
        path: "",
        component: ListClienteComponent
      },
      {
        path: "novo",
        component: FormClienteComponent
      },
      {
        path: ":clienteCodigo",
        component: FormClienteComponent
      }
    ]
  }
];
