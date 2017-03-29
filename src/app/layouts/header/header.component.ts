import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.styles.sass']
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        console.log('hello world');
    }

}
