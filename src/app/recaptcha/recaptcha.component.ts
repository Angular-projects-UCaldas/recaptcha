import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  constructor() { }

  recaptchaKey = environment.recaptchaKey;

  public formModel: FormModel = {};

  ngOnInit(): void {
  }


  public create(){
        console.log("class created");
  }
}
