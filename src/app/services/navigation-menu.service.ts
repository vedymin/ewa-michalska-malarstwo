import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from '../interfaces/NavItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuService {
  private apiUrl = 'http://strapi-it1.herokuapp.com/obrazs';
  private navItems = [{ title: 'nav1' }, { title: 'nav2' }];

  constructor(private http: HttpClient) {}

  getNavigationItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(this.apiUrl);
  }
}
