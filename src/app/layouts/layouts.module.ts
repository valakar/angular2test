import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    imports: [
        RouterModule
    ],
    exports: [],
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    providers: [],
})
export class LayoutsModule {
}
