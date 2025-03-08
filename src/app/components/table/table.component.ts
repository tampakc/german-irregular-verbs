import { Component, Input } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

export interface ColumnProps<T> {
  columnName: string;
  header: string;
  sortable: boolean;
  data: (row: T) => string;
  footer?: (data: T[]) => string;
}

@Component({
  selector: 'app-table',
  imports: [RowComponent, HeaderComponent, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: ColumnProps<T>[] = [];
}
