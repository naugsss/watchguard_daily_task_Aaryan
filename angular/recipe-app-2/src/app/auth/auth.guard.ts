import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService).user.pipe(
    take(1),
    map((user) => {
      const isAllowed = !!user;
      if (isAllowed) {
        return router.createUrlTree(['/auth']);
      } else {
        return true;
      }
    })
  );
};
