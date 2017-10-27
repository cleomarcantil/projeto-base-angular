import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { Teste1Component } from './teste1/teste1.component';

const routes: Routes = [
	{
		path: '',
		component: Teste1Component,
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
	],
	declarations: [Teste1Component]
})
export class TestesModule { }
