import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  usernameForm = new FormControl();
  joinGameIdForm = new FormControl();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createGame() {
    localStorage.setItem('username', this.usernameForm.value);
    this.router.navigateByUrl('/game/' + (Math.random() + 1).toString(36).substring(7));
  }

  joinGame() {
    localStorage.setItem('username', this.usernameForm.value);
    this.router.navigateByUrl('/game/' + this.joinGameIdForm.value);
  }

}
