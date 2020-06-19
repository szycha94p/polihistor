import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InstructionComponent } from './instruction/instruction.component';

const routes: Routes=[
  {
    path:'',
    component: AboutmeComponent

  },
  {
    path:'instrukcje',
    component: InstructionComponent
  },
  {
    path:'galeria',
    component: GalleryComponent
  },
  {
    path:'kontakt',
    component: ContactComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutmeComponent,
    ContactComponent,
    GalleryComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
