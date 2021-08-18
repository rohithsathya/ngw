import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { PreviewService } from './services/preview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngw';
  routeIndex = -1;
  constructor(public ps:PreviewService,private route: ActivatedRoute,private router: Router){}
  ngOnInit(){
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
          //do something on end activity
          console.log("PHmG123DG1233..!!!");
          console.log("navigation end",event.url);
          if(event.url.indexOf("/start") > -1){
            this.routeIndex = 0;
          }else  if(event.url.indexOf("/core") > -1){
            this.routeIndex = 1;
          }else  if(event.url.indexOf("/components") > -1){
            this.routeIndex = 2;
          }else  if(event.url.indexOf("/theme") > -1){
            this.routeIndex = 3;
          }else{
            this.routeIndex = -1;
          }

      }
  });
  }

}
