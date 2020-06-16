import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './index/index.component';


const routes : Routes = [
	{
		path: '',
		component: IndexComponent,
		pathMatch: 'full',
	},
	{ // rota para um módulo lazy load
		path: 'testes',
		loadChildren: () => import('src/app/testes/testes.module').then(m => m.TestesModule),
	},
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
