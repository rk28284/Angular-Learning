import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { JokeComponent } from './component/joke/joke.component';
import { AComponent } from './component/a/a.component';
import { B1Component } from './component/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,JokeComponent,AComponent,B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'statemanagement';
}
