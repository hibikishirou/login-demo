import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { AuthenService } from "src/app/service/authen.service";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (localStorage.getItem('authenticize')) {
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
