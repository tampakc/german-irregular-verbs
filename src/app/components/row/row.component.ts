import { Component, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { ColumnProps } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-row]',
  imports: [CellComponent, CommonModule],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css',
})
export class RowComponent<T> {
  @Input() columns: ColumnProps<T>[] = [];
  @Input() row: T = {} as T;
}
