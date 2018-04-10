import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="border: 3px solid blue;padding: 3px;margin-top: 3px;">
            <router-outlet></router-outlet>
            <p>
                This app demonstrates code-splitting, lazy-loading and aot-compilation for hybrid projects.
            </p>
        </div>
    `
})
export class AppComponent {
}
