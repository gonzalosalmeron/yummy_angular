import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu = false
  navbar = 0

  constructor(private router: Router, private location: Location, private auth: AuthService) { }

  ngOnInit(): void {
	this.router.events.subscribe(value => {
		if (this.router.url.includes('admin/login')) {  
			console.log('login')
			this.navbar = 0
		} else if (this.router.url.includes('admin') && !this.router.url.includes('admin/login')) {
			console.log('admin')
			this.navbar = 2
		} else {
			console.log('home')
			this.navbar = 1
		}
	});
  }

  goHome() {
	this.router.navigateByUrl('/')
  }

  logout() {
	this.auth.SignOut()
  }

}
