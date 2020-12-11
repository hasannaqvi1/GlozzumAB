import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isLoggedin = false;
	
	loggedinUser: string = '';

	greeting = {};

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private authService: AuthService) {}

	ngOnInit() {
		this.isLoggedin = this.authService.isUserLoggedin();
		this.loggedinUser = this.authService.getLoggedinUser();

		if(!this.isLoggedin) {
			this.router.navigateByUrl('login');
		}

		this.http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);
	}

	doLogout() {
		this.authService.logout();
		this.router.navigateByUrl('login');
	}

}
