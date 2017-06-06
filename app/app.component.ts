import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h2>{{pageTitle}}</h2>
    <div>Hello world</div>`
})
export class AppComponent {
    pageTitle: string = 'this is page title';
}