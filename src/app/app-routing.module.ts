import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CareersPageComponent } from './components/careers-page/careers-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { PublicationsPageComponent } from './components/publications-page/publications-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ResearchAreasPageComponent } from './components/research-areas-page/research-areas-page.component';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ResearchAreaDetailsComponent } from './components/research-area-details/research-area-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { LifeComponent } from './components/life/life.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'careers', component: CareersPageComponent },
  { path: 'careers/life-at-eilink', component: LifeComponent },
  { path: 'careers/job-opportunities', component: OpportunitiesComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:id', component: ProjectsDetailsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: 'publications', component: PublicationsPageComponent },
  { path: 'research-areas', component: ResearchAreasPageComponent },
  { path: 'research-areas/:id', component: ResearchAreaDetailsComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'people', component: PeoplePageComponent },
  { path: 'contact-us', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
