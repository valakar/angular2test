import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routes';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        HomeRouting,
        CommonModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        PostComponent
    ],
    providers: [],
})
export class HomeModule { }
