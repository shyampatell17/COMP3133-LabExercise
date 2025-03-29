import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: `<h2>{{ getTitle() }}</h2>
               <p>Last Updated: {{ getCurrentDate() }}</p> 
               `,
    standalone: true
})
export class StudentsComponent {
    title = "My List of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return new Date().toLocaleDateString();
    }
}
