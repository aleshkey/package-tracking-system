import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../service/notification.service";
import {Router} from "@angular/router";
import {PackageService} from "../../service/package.service";
import {ResponseData} from "../../model/ResponseData";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  addingForm!: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private packageService: PackageService,
    public router: Router,
    private fb: FormBuilder
  ) {
  }

  createAddingForm(): FormGroup{
    return this.fb.group({
      idNumber: ['', Validators.compose([Validators.required])],

    })
  }

  ngOnInit(): void {
    this.addingForm = this.createAddingForm();
  }

  submit(){
    console.log(this.addingForm.value.idNumber)
    this.packageService.add(
      this.addingForm.value.idNumber
    ).subscribe((data: ResponseData)=>{
      this.notificationService.showSnackBar(data.message);
      this.router.navigate(["index"])
    })

  }

  protected readonly window = window;
}
