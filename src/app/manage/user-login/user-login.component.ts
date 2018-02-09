import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs/Observable';

import { UserLoginService} from './services/user-login.service';
import { User} from '../model/user-model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(
    public router: Router,
    public activated: ActivatedRoute,
    public userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activated.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot : RouterStateSnapshot = routerState.snapshot;
  }

  public doLogin(){
    this.userLoginService.login(this.user);
  }

  public doLogOut() {
    this.userLoginService.logOut();
    this.router.navigateByUrl("home-page");
  }

  public forgetPwd(){
    this.router.navigateByUrl("forgetPwd");
  }
}
