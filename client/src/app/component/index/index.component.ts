import {Component, OnInit} from '@angular/core';
import {PackageService} from "../../service/package.service";
import {NotificationService} from "../../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent  implements OnInit{

  constructor(
    private packageService: PackageService,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    console.log(1)
  }

  addPackage(){
    this.router.navigate(["add"])
  }

}
