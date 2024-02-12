import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() trend: string = "";
  @Input() image: string = "";
  @Input() description: string = "";  
}
