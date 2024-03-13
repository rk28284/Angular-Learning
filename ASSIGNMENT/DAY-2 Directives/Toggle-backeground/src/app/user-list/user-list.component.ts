import { Component } from '@angular/core';
import { ToogleHighlighterDirective } from '../directive/toogle-highlighter.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ToogleHighlighterDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
