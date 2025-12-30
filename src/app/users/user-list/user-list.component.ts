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
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
  styleUrl: './user-list.component.scss'
})


export class UserListComponent {
  users: User[] = [];

  loadUsers() {
    this.users = [
      { id: 1, name: 'Tejaswini' },
      { id: 2, name: 'Riddhish' }
    ];
  }
}
