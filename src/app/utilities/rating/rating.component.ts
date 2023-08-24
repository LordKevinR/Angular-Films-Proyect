import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maxRatingArray = [];
  voted = false;
  beforeRating = 0;

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number): void {
    this.selectedRating = index + 1;
  }

  HandleMouseLeave(): void {
    if (!this.voted && this.beforeRating === 0) {
      this.selectedRating = 0
    }
    else{
      this.selectedRating = this.beforeRating;
    }
  }

  handleClick(index: number):void {
    this.selectedRating = index + 1;
    this.voted = true;
    this.beforeRating = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }

}
