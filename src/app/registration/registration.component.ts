import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormService } from '../form.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public formService: FormService) { }

  onSubmit() {
    if (this.formService.registrationForm.valid) {
      console.log('Form submitted:', this.formService.user);
      // Puedes enviar el formulario al servidor o realizar otras acciones aquí
    }
  }
}

