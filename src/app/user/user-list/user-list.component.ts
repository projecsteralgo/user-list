import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User(1, 'ToddTodders', 'Todd', 'Admin'),
    new User(2, 'ScottScotters', 'Scott', 'Reviewer'),
    new User(3, 'BobBobbers', 'Bob', 'User'),
  ];

  constructor(private usersvc: UserService) {}

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug('Users:', res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
