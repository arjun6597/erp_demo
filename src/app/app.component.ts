import { AuthService } from '../app/shared/services/auth.service';
import { Component, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationAlertService } from './shared/services/notification-alert.service';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loaderSubscription;
  public loader = false;
  enableTheme = false;
  sidebarMenuOpened = true;
  constructor(
    private translate: TranslateService,
    private notificationService: NotificationAlertService,
    public cdr: ChangeDetectorRef,
    private authService: AuthService,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.enableTheme = true;
    } else {
      this.enableTheme = false;
    }
    this.authService.enableAllTheme.asObservable().subscribe((status) => {
      this.enableTheme = status;
    });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.loaderSubscription = this.notificationService.loaderChanged.subscribe((val) => {
      this.loader = val;
      this.cdr.detectChanges();
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }

  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.addClass(document.body, 'sidebar-mini');
      this.renderer.addClass(document.body, 'layout-fixed');
      this.renderer.addClass(document.body, 'layout-navbar-fixed');
      this.renderer.addClass(document.body, 'layout-footer-fixed');
      this.renderer.removeClass(document.body, 'sidebar-open');
      this.renderer.addClass(document.body, 'sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.addClass(document.body, 'sidebar-mini');
      this.renderer.addClass(document.body, 'layout-fixed');
      this.renderer.addClass(document.body, 'layout-navbar-fixed');
      this.renderer.addClass(document.body, 'layout-footer-fixed');
      this.renderer.removeClass(document.body, 'sidebar-collapse');
      this.renderer.addClass(document.body, 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }

}
