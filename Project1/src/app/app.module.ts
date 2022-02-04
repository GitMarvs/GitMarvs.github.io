import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NagivationComponent } from './layout/nagivation/nagivation.component';
import { ContentComponent } from './component/content/content.component';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { CarouselService } from './services/carousel.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NagivationComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
