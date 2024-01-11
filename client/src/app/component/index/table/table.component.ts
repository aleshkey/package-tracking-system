import {Component, OnInit} from '@angular/core';
import {Package} from "../../../model/Package";
import {ResponseData} from "../../../model/ResponseData";
import {PackageService} from "../../../service/package.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../service/notification.service";



@Component({
  selector: 'all-packages-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  packages!: Package[];

  constructor(
    private packageService: PackageService,
    private router: Router,
    private notificationService:NotificationService
  ) {
  }


  ngOnInit(): void {
    this.packageService.getAll().subscribe(data => {
        this.packages = data;
      }
    )
  }

  navigateToDetails(packageId: number) {
    this.router.navigate(['/details', packageId]);
  }

  delete(id: number){
    this.packageService.delete(id).subscribe((data) => {
      console.log(data);
      this.notificationService.showSnackBar("Successfully deleted");
      window.location.reload();
    });
  }


}
