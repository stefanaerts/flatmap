import {Component, ChangeDetectorRef} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

export interface PersonTest {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <b>Angular 2 HTTP requests using RxJs Observables!</b>
    <ul>
    <li *ngFor="let doctor of doctors">{{doctor}}</li>
    </ul>

    `
})


export class AppComponent {
  private doctors = [];

  constructor(http: Http, cd: ChangeDetectorRef) {
    http.get('http://jsonplaceholder.typicode.com/users/')
   .flatMap((data) => data.json())
      .filter((person: PersonTest) => person.id > 5)
      .map((person: PersonTest) => 'Dr. ' + person.name)
      .subscribe((data) => {
        this.doctors.push(data);
        cd.detectChanges();
      });
  }
}

