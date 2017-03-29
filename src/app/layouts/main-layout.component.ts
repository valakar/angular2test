import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    template:
        `
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
`
})
export class MainLayoutComponent {
    constructor() { }

}
