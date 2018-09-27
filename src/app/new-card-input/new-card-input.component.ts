import { Component, OnInit, EventEmitter, Output, HostListener, ViewChild } from '@angular/core';
import {NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { takeWhile, debounceTime, filter} from 'rxjs/operators';


@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
})
export class NewCardInputComponent implements OnInit {
  public newCard: any = {text: ''};

  @ViewChild('form') public form: NgForm;
  @Output() cardAdd: EventEmitter<any> = new EventEmitter();
  newCardForm: FormGroup;
  alive = true;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  addCard(text) {
    this.cardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }

  constructor(
    private fb: FormBuilder,
  ) {
    this.newCardForm = fb.group({
      text: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });

    this.newCardForm.valueChanges.pipe(
      filter((value) => this.newCardForm.valid),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
