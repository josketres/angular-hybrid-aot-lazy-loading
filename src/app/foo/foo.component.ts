import {Component} from '@angular/core';

@Component({
    selector: 'app-foo',
    template: `
        <h1>Angular 5 lazy loaded foo component</h1>
        <a routerLink="/" routerLinkActive="active">Home</a>
    `
})
export class FooComponent {

}
