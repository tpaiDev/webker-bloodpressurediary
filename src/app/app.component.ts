import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "app";
  page = 'main';

  constructor(private router: Router) {
      //
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }


}
