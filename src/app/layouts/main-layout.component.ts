import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    template:
        `
        <div class="main-container">
            <app-header></app-header>
            <div class="main-inner-container">
                <router-outlet></router-outlet>
                <app-sidebar></app-sidebar>
            </div>
            <app-footer></app-footer>
        </div>`,
    styleUrls: ['main-layout.styles.sass']
})
export class MainLayoutComponent {
    constructor() { }

}
