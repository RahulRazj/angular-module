import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating!: number;
  fullStars!: number;
  halfStar!: number;
  blankStars!: number;
  fullStarRating!: string[];
  blankStarRating!: string[];

  ngOnInit(): void {
    this.fullStars = Math.floor(this.rating);
    this.halfStar = Math.ceil(this.rating - this.fullStars);

    this.blankStars = 5 - this.fullStars - this.halfStar;
    this.fullStarRating = Array(this.fullStars).fill('');
    this.blankStarRating = Array(this.blankStars).fill('');
  }
}
