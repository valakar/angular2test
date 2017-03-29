import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routes';

@NgModule({
    imports: [HomeRouting],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
