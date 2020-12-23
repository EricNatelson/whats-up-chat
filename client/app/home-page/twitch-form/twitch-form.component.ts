import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-twitch-form',
  templateUrl: './twitch-form.component.html',
  styleUrls: ['./twitch-form.component.scss']
})
export class TwitchFormComponent implements OnInit {

  botForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    botName: new FormControl(''),
    agreed: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.botForm.value);
  }

}
