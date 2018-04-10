import {enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {ng1App} from "./angularjs/app.module";
import {UpgradeModule} from "@angular/upgrade/static";

if (environment.production) {
    enableProdMode();
}

ng1App.run(() => {
    console.log('Running in angular 1!');
});

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((ref: NgModuleRef<AppModule>) => {
        let upgrade: UpgradeModule = ref.injector.get(UpgradeModule);
        upgrade.bootstrap(document.body, ['ng1App'], {strictDi: true})
    })
    .catch(err => console.log(err));
