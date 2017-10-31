import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  items = [
    { name: 'Home', link: '/' },
    { name: 'Todo', link: '/todo' }
  ]

  constructor (
    private router: Router
  ) {}

  goTo(link: string): void {
    this.router.navigate([link]);
  }
}
