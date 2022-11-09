import { constants } from './../../../global/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appsidebar',
  templateUrl: './appsidebar.component.html',
  styleUrls: ['./appsidebar.component.scss'],
})
export class AppsidebarComponent implements OnInit {
  public logoPath = constants.DASHBOARD_LOGO;
  public defaultUser = constants.DEFAULT_USERS;
  menus = constants.MENUS;
  constructor(
  ) { }

  ngOnInit() {
  }

  toggleMenu(idValue: string) {
    if (idValue) {
    }
  }
}
