import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyDetailComponent } from './company/company-detail.component';
import { CompanyEditComponent } from './company/company-edit.component';
import { CompanyListComponent } from './company/company-list.component';
import { CompanyNewComponent } from './company/company-new.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'new', component: CompanyNewComponent },
  { path: 'edit/:id', component: CompanyEditComponent},
//  { path: 'delete/:id', component: CompanyEditComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }