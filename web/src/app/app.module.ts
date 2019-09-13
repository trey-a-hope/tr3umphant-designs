import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './widgets/home-page/home-page.component';
import { ToolbarComponent } from './widgets/toolbar/toolbar.component';
import { AboutPageComponent } from './widgets/about-page/about-page.component';
import { NotFoundPageComponent } from './widgets/not-found-page/not-found-page.component';
import { ContactPageComponent } from './widgets/contact-page/contact-page.component';
import { PortfolioPageComponent } from './widgets/portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './widgets/blog-page/blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolbarComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
    BlogPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
},)
export class AppModule { }
