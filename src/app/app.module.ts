import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PartnersComponent } from './components/partners/partners.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { CareersPageComponent } from './components/careers-page/careers-page.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { CareersFooterComponent } from './components/careers-footer/careers-footer.component';
import { ResearchAreasComponent } from './components/research-areas/research-areas.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';
import { PublicationsPageComponent } from './components/publications-page/publications-page.component';
import { ResearchAreasPageComponent } from './components/research-areas-page/research-areas-page.component';
import { ResearchAreaDetailsComponent } from './components/research-area-details/research-area-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { LifeComponent } from './components/life/life.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    PartnersComponent,
    BlogPageComponent,
    AboutPageComponent,
    PeoplePageComponent,
    CareersPageComponent,
    BlogDetailsComponent,
    ProjectsPageComponent,
    CareersFooterComponent,
    ResearchAreasComponent,
    ProductsDetailsComponent,
    ProjectsDetailsComponent,
    PublicationsPageComponent,
    ResearchAreasPageComponent,
    ResearchAreaDetailsComponent,
    ContactComponent,
    LifeComponent,
    OpportunitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxPaginationModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
