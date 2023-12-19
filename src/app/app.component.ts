import { Component } from '@angular/core';

@Component({
selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Hola Mundo';    // Este title lo estoy llamando con interpolación en el component.html y esto solo se puede hacer dentro del mismo componente.

}
