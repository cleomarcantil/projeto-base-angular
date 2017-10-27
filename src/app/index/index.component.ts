import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor(private http: HttpClient) {

		http.get('http://localhost:5000/api/values')
			.subscribe(response => {
				console.log(response);
			});

	}

	ngOnInit() {
	}

}
