import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}

@Component({
  selector: 'example-tel-input',
  templateUrl: 'example-tel-input-example.html',
  styleUrls: ['example-tel-input-example.sass'],
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})

export class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {
  
  static nextId = 0;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'example-tel-input';
  id = `example-tel-input-${MyTelInput.nextId++}`;
  describedBy = '';

  get empty() {
    const {value: {area, exchange, subscriber}} = this.parts;
    return !area && !exchange && !subscriber;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next()
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  // ОПИАНИЕ ДЛИНЫ ВВОДА ДЛЯ КАЖДОГО ПОЛЯ
  @Input()
  get value(): MyTel | null {
    const {value: {area, exchange, subscriber}} = this.parts;
    if (area.lenght === 3 && exchange.lenght === 3 && subscriber.lenght === 4) {
      return new MyTel(area, exchange, subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    const {area, exchange, subscriber} = tel || new MyTel('', '', '');
    this.parts.setValue({area, exchange, subscriber});
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = fb.group({
      area: '',
      exchange: '',
      subscriber: '',
    });

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }
}