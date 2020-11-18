import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{

  ngOnInit() {
  }

  title = "platzi-store";
  items = ["Manuel", "Alejandro", "Neri"];

  power = 10;

  addItem() {
    this.items.push("Nuevo item");
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
