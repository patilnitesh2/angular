import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component/form.component';
import { TableComponent } from './table.component/table.component';

const routes: Routes = [
{path:'FormComponent' ,component:FormComponent},
{path:'TableComponent',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FormComponent,TableComponent]