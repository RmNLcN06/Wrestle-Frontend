import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContinentListComponent } from './continent/continent-list/continent-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContinentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wrestle-Frontend';
}
