import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive()
export abstract class CellDirective<T> {
  @Input() data!: T;
  public isValid: boolean = false;
  public isTouched: boolean = false;

  @Output() valueChange = new EventEmitter<T>();
  @Output() validityChange = new EventEmitter<boolean>();

  protected onChange(value: T) {
    this.setValue(value);

    const newIsValid = this.calculateValidity(value);
    this.setNewValidity(newIsValid);
  }

  protected setValue(value: T) {
    if (this.data != value) {
      this.valueChange.emit(value);
    }
  }

  protected calculateValidity(value: T): boolean {
    return value == this.data;
  }

  protected setNewValidity(valid: boolean) {
    if (this.isValid != valid) {
      this.validityChange.emit(valid);
    }
    this.isValid = valid;
  }
}
