import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teste1Component } from './teste1/teste1.component';

const routes: Routes = [
	{
		path: '',
		component: Teste1Component,
		pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesRoutingModule { }
