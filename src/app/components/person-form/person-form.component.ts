import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent {
  person: Person = {
    name: '',
    city: '',
    phone: '',
    email: '',
  };

  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  addPerson() {
    this.addressBookService.addPerson(this.person).subscribe(() => {
      console.log('Person added successfully!');
      this.router.navigate(['/list']);
    });
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
