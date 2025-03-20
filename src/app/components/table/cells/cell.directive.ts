import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive()
export abstract class CellDirective<T> {
  @Input() data!: T;
  public isValid: boolean = false;

  @Output() valueChange = new EventEmitter<T>();
  @Output() validityChange = new EventEmitter<boolean>();
  
  protected onChange(value: T) {
    console.log(value);
    this.valueChange.emit(value);

    const newIsValid = value == this.data;;
    this.setNewValidity(newIsValid);
  }

  protected setNewValidity(value: boolean) {
    if (this.isValid != value) {
      this.validityChange.emit(value);
    }
    this.isValid = value;
  }
}