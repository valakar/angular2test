import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        RouterModule
    ],
    exports: [],
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutsModule { }
