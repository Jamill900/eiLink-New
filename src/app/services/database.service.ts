import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog';
import { Career } from '../interfaces/career';
import { Product } from '../interfaces/product';
import { Project } from '../interfaces/project';
import { Publication } from '../interfaces/publication';
import { ResearchArea } from '../interfaces/research-areas';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private publicationsUrl = 'api/publications';
  private reseachAreaUrl = 'api/researchAreas';
  private projectsUrl = 'api/projects';
  private productsUrl = 'api/products';
  private careersUrl = 'api/careers';
  private teamUrl = 'api/team';
  private blogUrl = 'api/blog';

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectsById(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductsById(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getResearchAreas(): Observable<ResearchArea[]> {
    return this.http.get<ResearchArea[]>(this.reseachAreaUrl);
  }

  getResearchAreasById(id: number): Observable<ResearchArea> {
    const url = `${this.reseachAreaUrl}/${id}`;
    return this.http.get<ResearchArea>(url);
  }

  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl);
  }

  getBlogById(id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.publicationsUrl);
  }

  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(this.careersUrl);
  }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }

}
