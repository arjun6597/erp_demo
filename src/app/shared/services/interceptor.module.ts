import { LocalStorageService } from './local-storage.service';
import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent,  HttpResponse,
    HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationAlertService } from './notification-alert.service';
import { Router } from '@angular/router';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(
    public notificationService: NotificationAlertService,
    public localStorageService: LocalStorageService,
    public router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.

    this.totalRequests++;
    this.notificationService.changeLoader(true);
    let authToken = '';

    if (this.localStorageService.getDataFromStorage('x-auth-token')) {
      authToken = this.localStorageService.getDataFromStorage('x-auth-token');
    }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next
    .handle(authReq).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError(err => {
        this.decreaseRequests();
        if (err.status === 401) {
          this.router.navigate(['auth/login']);
        }
        throw err;
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
       this.notificationService.changeLoader(false);
    }
  }


  }
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true }
  ]
})
export class InterceptorModule { }
