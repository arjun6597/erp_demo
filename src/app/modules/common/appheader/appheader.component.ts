import { constants } from './../../../global/constants';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss'],
})
export class AppheaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public NavItem = constants.NAV_ITEMS;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // toggleMenuSidebar() {}
  logout() {
    this.authService.logout();
  }

  redirectAdmin(item) {
    if (item.id === 2) {
        this.authService.logout();
        this.authService.enableAllTheme.next(false);
    }
  }
}
