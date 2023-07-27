import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<string>();
  searchQuery!: string;
  hideLogIn = false;
  username!: string | null;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.username = localStorage.getItem('userDetails');
    this.username && (this.hideLogIn = true);
  }

  handleMyCourses() {
    this.router.navigate(['course'], { queryParams: { user: this.username } });
  }

  onLogout() {
    localStorage.removeItem('userDetails');
    this.hideLogIn = false;
    this.router.navigate(['/']);
  }

  onSearch() {
    if (this.searchQuery) {
      this.router.navigate(['course'], {
        queryParams: { search: this.searchQuery },
      });
      this.searchCriteria.emit(this.searchQuery);
    }
  }
}
