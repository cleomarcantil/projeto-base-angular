import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Modelo de aplicação Angular';


	private onActivate(component) {
		//console.log(component);
	}

}
