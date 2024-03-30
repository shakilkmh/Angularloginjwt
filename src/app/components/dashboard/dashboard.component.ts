import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  message: String;
  messageTime: any;
  isLoggedIn = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hello();
    this.isLoggedIn = this.service.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
      this.message = response.message;
      this.messageTime = response.messageTime;
    })
  }

  handleLogout() {
    this.service.logout();
  }

}
