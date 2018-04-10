import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <h1>
            Angular 5 home component
        </h1>
        <a routerLink="/foo" routerLinkActive="active">Foo Module (lazy-loaded)</a>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
