import { Component,OnInit, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../manage/user-login/services/user-login.service';
import { UserRegistryService } from '../manage/user-registry/services/user-registry.service';
import { User } from '../manage/model/user-model';
import 'rxjs/add/operator/merge';
import { Message } from 'primeng/primeng';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public currentUser:User;
  public msgs:Message[] = [];
  private globalClickCallbackFn: Function;
  private loginSuccessCallbackFn: Function;

  constructor(
    public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public userLoginService: UserLoginService,
		public userRegisterService: UserRegistryService
  ) { }

  ngOnchange(){
   
  }

  ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("全局监听点击事件>" + event);
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
      data => {
        this.currentUser = data;
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
  
        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);
  
        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        if (routerStateSnapshot.url.indexOf("/login") != -1) {
          this.router.navigateByUrl("homePage/main");
        }
      },
      error => console.error(error)
      );

    $(function () {
      $(document).on('mouseenter', 'li', function () {
        $(this).find('.dropdown:first').show(200);
      }).on('mouseleave', 'li', function () {
        $(this).find('.dropdown:first').stop(true, true).hide(200);
      }).on('click','nav>ul>li>a',function(){
        $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
      });
      // $('.dropdown').each(function () {
      //     $(this).parents('li:eq(0)').addClass('has_dd');
      // }); 
    }); 
  }

  ngOnDestroy() {
    if (this.globalClickCallbackFn) {
      this.globalClickCallbackFn();
    }
  }

  toggle(button: any) {
    console.log(button);
  }

  public doLogout(): void {
    this.userLoginService.logOut();
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'退出成功'});
    this.router.navigateByUrl("homePage/main");
  }
}
