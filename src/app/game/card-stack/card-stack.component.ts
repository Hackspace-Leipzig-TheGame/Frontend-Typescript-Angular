import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {

  @Input() size!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
