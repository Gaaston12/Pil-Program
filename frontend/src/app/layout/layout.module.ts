import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, NavbarComponent, AsideComponent],
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent, NavbarComponent, AsideComponent]
})
export class LayoutModule { }
