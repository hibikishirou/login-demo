import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User;
  users: User[];
  displayedColumns = ['username', 'password'];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.listUser();
  }
  listUser() {
    this.usersService.listUser().subscribe(res => {
      if (res['status'] === 200) {
        this.users = res['data'];
        console.log(this.users);
      }
    });
  }
  createUser() { }
}
