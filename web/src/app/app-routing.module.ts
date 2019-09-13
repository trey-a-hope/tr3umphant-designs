import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './widgets/home-page/home-page.component';
import { AboutPageComponent } from './widgets/about-page/about-page.component';
import { NotFoundPageComponent } from './widgets/not-found-page/not-found-page.component';
import { ContactPageComponent } from './widgets/contact-page/contact-page.component';
import { PortfolioPageComponent } from './widgets/portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './widgets/blog-page/blog-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // { 
  //   path: 'product-detail', 
  //   component: ProductDetailComponent, 
  //   data: {
  //     product: 'test'
  //   }
  // },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
