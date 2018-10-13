import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: '';
  password: '';
  constructor(private authenService: AuthenService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.username && this.password) {
      this.authenService.login({
        username: this.username,
        password: this.password
      }).subscribe(res => {
        if (res['status'] === 200) {
          localStorage.setItem('authenticize', 'true');
          this.router.navigate(["/users"]);
        } else {
          console.log(res['data']);
        }
      });
    }
  }
}
