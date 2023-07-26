import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchCriteria = new EventEmitter<string>();
  searchQuery!: string;
  constructor(private router: Router) {}
  onSearch() {
    if (this.searchQuery) {
      this.router.navigate(['course'], {
        queryParams: { search: this.searchQuery },
      });
      this.searchCriteria.emit(this.searchQuery);
    }
  }
}
