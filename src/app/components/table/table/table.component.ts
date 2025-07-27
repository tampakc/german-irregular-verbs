import { Component, Input } from '@angular/core';

export type ColumnProps<T> =
  | DisplayColumnProps<T>
  | TextInputColumnProps<T>
  | DropdownColumnProps<T>
  | CheckboxColumnProps<T>;

export interface BaseColumnProps<T> {
  key: string;
  id?: (row: T) => string;
  header: string;
  data: (row: T) => unknown;
  dirty?: boolean;
}

export interface DisplayColumnProps<T> extends BaseColumnProps<T> {
  type: 'display';
  data: (row: T) => string;
}

export interface TextInputColumnProps<T> extends BaseColumnProps<T> {
  type: 'input';
  data: (row: T) => string;
}

export interface DropdownColumnProps<T> extends BaseColumnProps<T> {
  type: 'dropdown';
  options: string[];
  data: (row: T) => string;
}

export interface CheckboxColumnProps<T> extends BaseColumnProps<T> {
  type: 'checkbox';
  data: (row: T) => boolean;
  onChange: (row: T, value: boolean) => void;
}


@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: ColumnProps<T>[] = [];
}
