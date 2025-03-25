import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  ngOnInit() {
    // ✅ Fetch persons from backend
    this.addressBookService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
    });
  }

  deletePerson(id: number) {
    this.addressBookService.deletePerson(id).subscribe(() => {
      this.persons = this.persons.filter((p) => p.id !== id);
    });
  }

  goToForm() {
    this.router.navigate(['/form']);
  }
}
