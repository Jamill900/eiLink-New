import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CareersPageComponent } from './components/careers-page/careers-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { PublicationsPageComponent } from './components/publications-page/publications-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResearchAreasComponent } from './components/research-areas/research-areas.component';
import { ResearchAreasPageComponent } from './components/research-areas-page/research-areas-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersFooterComponent } from './components/careers-footer/careers-footer.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CareersPageComponent,
    ProjectsPageComponent,
    PublicationsPageComponent,
    AboutPageComponent,
    BlogPageComponent,
    AboutComponent,
    ProjectsComponent,
    ResearchAreasComponent,
    ResearchAreasPageComponent,
    BlogComponent,
    CareersFooterComponent,
    PeoplePageComponent,
    PartnersComponent,
    ProjectsDetailsComponent,
    BlogDetailsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
