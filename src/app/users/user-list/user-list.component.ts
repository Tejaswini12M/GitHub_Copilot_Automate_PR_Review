import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user-list',
  imports: [],
   template: `
    <ul>
      <li *ngFor="let user of usersNames">{{ user.name }}</li>
    </ul>
  `,
  styleUrl: './user-list.component.scss'
})


export class UserListComponent {
  users: any[] = [];
  usersNames: any[] = [];

  loadUsers() {
    this.usersNames = [
      { id: 1, name: 'Tejaswini' },
      { id: 2, name: 'Riddhish' }
    ];
  }

  ngOnInit() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        this.users = data;
      });
  }
}
