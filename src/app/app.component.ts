import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  name = 'Angular';
}
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Hello from {{ name }}!</h1>
//     <a target="_blank" href="https://angular.dev/overview">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }
