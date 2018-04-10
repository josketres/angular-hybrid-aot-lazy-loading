import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>
            Hello from angular 5
        </h1>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    title = 'app';
}
