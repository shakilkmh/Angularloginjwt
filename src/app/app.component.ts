import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spring Boot GWT Angular-Authentication';
  isLoggedIn = false;

  constructor(
    private service: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.service.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.service.logout();
    this.isLoggedIn = this.service.isUserLoggedIn();
    this.router.navigateByUrl('/');
  }
}
