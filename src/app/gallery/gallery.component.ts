import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() trend : string = "";
  @Input() art1 : string = "";
  @Input() art2 : string = "";
  @Input() art3 : string = "";
  @Input() art4 : string = "";
  @Input() important : string = "";
  @Input() id1: string = "";
  @Input() modalId1: string = "";
  @Input() modalId2: string = "";
  @Input() modalId3: string = "";
  @Input() modalId4: string = "";
  @Input() modalIdi: string = "";
}
