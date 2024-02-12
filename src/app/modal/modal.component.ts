import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  rating = 0;

  setRating(rating: number) {
    this.rating = rating;
  }

  @Input() modalId : string = "";
  @Input() trend : string = "";
  @Input() title : string = "";
  @Input() art : string = "";
  @Input() description : string = "";
  @Input() author : string = "";
}
