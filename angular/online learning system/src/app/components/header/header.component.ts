import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  showProfileOptions = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    if (localStorage.getItem('userData')) {
      this.isAuthenticated = true;
    }
  }
  toggleProfileOptions() {
    this.showProfileOptions = !this.showProfileOptions;
  }
  onLogout() {
    this.authService.logout();
    this.showProfileOptions = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.showProfileOptions = false;
  }
}
