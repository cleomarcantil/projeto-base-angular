import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { SharedModule } from './shared/shared.module';
import { TestesModule } from './testes/testes.module';

const routes : Routes = [
	{
		path: '',
		component: IndexComponent,
		pathMatch: 'full',
	},
	// { // rota para um módulo lazy load
	// 	path: 'testes',
	// 	loadChildren: 'app/testes/testes.module#TestesModule',
	// },
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
		TestesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
