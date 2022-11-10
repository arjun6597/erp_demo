import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth/auth-guard.service';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [ AuthGuardService ]
  },
//   {
//     path: 'company',
//     component: CompanyComponent,
//     canActivate: [ AuthGuardService ]
// },
// {
//   path: 'products',
//   component: ProductsComponent,
//   canActivate: [ AuthGuardService ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
