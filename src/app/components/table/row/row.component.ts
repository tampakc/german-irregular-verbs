import { Component, Input } from '@angular/core';
import { ColumnProps } from '../table/table.component';

@Component({
  selector: '[app-row]',
  standalone: false,
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent<T> {
  @Input() columns: ColumnProps<T>[] = [];
  @Input() row: T = {} as T;

  public onValueChange(value: any, key: string) {}
  public onValidityChange(isValid: any, key: string) {}
}