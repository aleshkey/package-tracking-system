import {Component, Input, OnInit} from '@angular/core';
import {PackageService} from "../../../service/package.service";
import {Router} from "@angular/router";
import {Package} from "../../../model/Package";

@Component({
  selector: 'package-table',
  templateUrl: './package-table.component.html',
  styleUrl: './package-table.component.css'
})
export class PackageTableComponent implements OnInit{

  @Input() id!: string | null;
  public package!: Package;

  constructor(private packageService: PackageService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.packageService.getById(parseInt(this.id as string, 10)).subscribe((data: Package)=>{
      this.package = data;
    });
  }


}
