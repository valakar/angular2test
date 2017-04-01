import { Component } from '@angular/core';
import { Posts } from '../../../fakes/posts.constant';

@Component({
    selector: 'app-home',
    templateUrl: './home.template.html',
    styleUrls: ['home.styles.scss']
})
export class HomeComponent {
    public posts: Array<Object> = Posts;

    constructor() { }
}
