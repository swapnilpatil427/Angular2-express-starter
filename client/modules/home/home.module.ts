import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";


@NgModule({
    imports: [
        HttpModule,
        routing,
        NgSemanticModule
    ],
    declarations: [ HomeComponent ],
    bootstrap:    [ HomeComponent ]
})
export class HomeModule { }