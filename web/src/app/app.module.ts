import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './widgets/toolbar/toolbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { HttpModule }                   from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { EmailService } from './services/email.service';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
    BlogPageComponent,
    FooterComponent,
    PricingPageComponent,
    ServicePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule,
    HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
