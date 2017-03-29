import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LayoutsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
