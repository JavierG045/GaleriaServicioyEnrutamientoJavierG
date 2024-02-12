import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DescriptionComponent,
    GalleryComponent,
    FooterComponent,
    ModalComponent,
    HomeComponent,
    DetailsComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
