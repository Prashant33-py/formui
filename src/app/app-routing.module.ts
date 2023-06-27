import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    { path: 'add', component: AddPersonComponent },
    { path: 'home', component: FormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
