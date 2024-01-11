import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {
  id!: string | null;

  constructor(private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
