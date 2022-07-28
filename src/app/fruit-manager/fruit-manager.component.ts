import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruit-list';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit {
  fruits = FRUITS;
  searchText: string = '';
  temp: Fruit[] = this.fruits;
  displayNoRecords: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    this.fruits = this.temp.filter((result) =>
      result?.name?.startsWith(this.searchText)
    );
    if (this.fruits.length == 0) {
      this.displayNoRecords = true;
    }
  }
  reset() {
    this.searchText = '';
    this.fruits = [...this.temp];
    this.displayNoRecords = false;

  }

}
