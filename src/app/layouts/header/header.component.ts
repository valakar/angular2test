import { Component, OnInit } from '@angular/core';
import { NavbarList } from './navbar.constant';

@Component({
    selector: 'app-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.styles.sass']
})
export class HeaderComponent implements OnInit {
    public logo: String = 'assets/images/logo.jpg';
    public navbarLinks: Array<Object> = NavbarList;

    constructor() {
    }

    ngOnInit(): void {
        console.log('hello world');
    }

}
