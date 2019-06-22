import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
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
	declarations: [
		AppComponent,
		IndexComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
