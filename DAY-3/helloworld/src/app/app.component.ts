import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<div><h1>Welcome To First angular Project</h1></div>',

})
export class AppComponent {
  title = 'helloworld';
}
