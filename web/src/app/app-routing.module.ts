import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';


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
