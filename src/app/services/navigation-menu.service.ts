import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {NavItem, NavItems} from '../interfaces/NavItem';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuService {
  private apiUrl = 'http://strapi-it1.herokuapp.com/obrazs';
  private navItems: NavItem[];

  constructor(private http: HttpClient) {
    this.navItems = NavItems;
  }

  getNavigationItems(): Observable<NavItem[]> {
    // return this.http.get<NavItem[]>(this.apiUrl);
    return of(this.navItems);
  }
}
