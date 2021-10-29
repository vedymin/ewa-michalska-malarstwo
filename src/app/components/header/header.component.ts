import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/interfaces/NavItem';
import { NavigationMenuService } from 'src/app/services/navigation-menu.service';
import {NavigationEnd, Router, Event} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navItems?: NavItem[];
  public route?: string;
  private subscription?: Subscription;

  constructor(private navigationMenuService: NavigationMenuService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        this.route = event.url;
      }
    });

    this.navigationMenuService
      .getNavigationItems()
      .subscribe((navItems) => (this.navItems = navItems));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
