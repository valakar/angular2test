import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    template:
        `
        <div class="main-container">
            <app-header></app-header>
            <router-outlet></router-outlet>
            <app-footer></app-footer>
        </div>`,
    styleUrls: ['main-layout.styles.sass']
})
export class MainLayoutComponent {
    constructor() { }

}
