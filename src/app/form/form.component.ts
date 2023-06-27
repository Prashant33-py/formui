import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from '../person';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    personList: Person[] = [];
    constructor(private personService: PersonsService) {}

    ngOnInit():void {
        this.personService.getPersons().subscribe((persons) => {
            console.log(persons);
            this.personList = persons;
        });
    }
}
