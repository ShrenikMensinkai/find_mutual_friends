import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppSettingsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  twitteraccounts = this.fb.group({
    account1: [''],
    account2: [''],
  });
  constructor(private fb: FormBuilder, private md: AppSettingsService) { }
  title = 'find-mutual-friends';

  compareAccount() {
    // console.warn(this.twitteraccounts.value);
    this.md.getJSON().subscribe(data => {
      console.log(data);
  });
  }
}
