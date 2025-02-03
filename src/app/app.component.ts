import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ReactiveFormsModule],
  template:  `<router-outlet />`,
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'RecycleHub';
}
