import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from "./routes";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }