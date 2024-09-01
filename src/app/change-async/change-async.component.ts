import { Component } from '@angular/core';

@Component({
  selector: 'app-change-async',
  standalone: true,
  imports: [],
  // templateUrl: './change-async.component.html',
  template: `
    <h2>Async Change name component</h2>
    <button (click)="changeName()">Change name</button>
    <p>{{ name }}</p>
  `,
  styleUrl: './change-async.component.css',
})
export class ChangeAsyncComponent {
  name = 'John';

  changeName() {
    setTimeout(() => {
      this.name = this.name === 'Jane' ? 'John' : 'Jane';
    }, 1000);
  }
}
