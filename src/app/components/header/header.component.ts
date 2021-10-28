import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/interfaces/NavItem';
import { NavigationMenuService } from 'src/app/services/navigation-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navItems?: NavItem[];

  constructor(private navigationMenuService: NavigationMenuService) {}

  ngOnInit(): void {
    this.navigationMenuService
      .getNavigationItems()
      .subscribe((navItems) => (this.navItems = navItems));
  }
}
