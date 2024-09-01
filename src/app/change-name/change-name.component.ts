import { Component } from '@angular/core';

@Component({
  selector: 'app-change-name',
  standalone: true,
  imports: [],
  template: `
    <h2>Change name component</h2>
    <div>
      <button (click)="changeName()">Change name</button>
      <p>{{ name }}</p>
    </div>
  `,
  styleUrl: './change-name.component.css',
})
export class ChangeNameComponent {
  name = 'John';

  changeName() {
    this.name = this.name === 'Jane' ? 'John' : 'Jane';
  }
}
