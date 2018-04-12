import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="background:#e1dfdd;padding: 10px;margin: 10px;min-height:100vh;">
            <router-outlet></router-outlet>
            <p>
                This app demonstrates code-splitting, lazy-loading and aot-compilation for hybrid projects.
            </p>
        </div>
    `
})
export class AppComponent {
}
