import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonsService } from '../services/persons.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

    person: Person = {
        name: '',
        phoneNumber: 0,
        email: '',
        address: ''
    }

    message: string = ''
    constructor(private personsService: PersonsService, private router: Router) { }

    ngOnInit(): void {
    }

    addPerson(addPersonForm: NgForm) {
        this.personsService.addPerson(this.person).subscribe((responseData) => {
            this.message = "Person added successfully";
            addPersonForm.resetForm({
                name: '',
                phoneNumber: 0,
                email: '',
                address: ''
            });
        });

        // this.router.navigateByUrl('/home');
    }

}
