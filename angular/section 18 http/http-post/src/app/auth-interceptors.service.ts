import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request is on its way');
    // when we are calling this method, we let the request continue

    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'Xyz'),
    });

    console.log(modifiedRequest.headers);

    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          //   console.log('response arrived');
          //   console.log(event.body);
        }
      })
    );
  }
}
