import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person';

@Injectable({
    providedIn: 'root',
})
export class PersonsService {
    personList: Person[] = [];

    constructor(
        @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
        private http: HttpClient
    ) {}
    getPersons() {
        return this.http.get<Person[]>('/api/persons');
    }

    addPerson(person: Person) {
        return this.http.post<Person>('/api/persons', person);
    }

    editPerson(person: Person) {
        return this.http.put<Person>(`/api/persons/${person.id}`, person);
    }
    deletePerson(person: Person) {
        return this.http.delete<Person>(`/api/persons/${person.id}`);
    }
}
