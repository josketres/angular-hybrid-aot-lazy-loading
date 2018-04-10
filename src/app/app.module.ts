import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UpgradeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
