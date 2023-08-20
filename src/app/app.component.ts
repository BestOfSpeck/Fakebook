import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fakebook';

  constructor(private userDataService: UserDataService) {}

  getIsLoggedIn() {
    return this.userDataService.isLoggedIn;
  }
}
