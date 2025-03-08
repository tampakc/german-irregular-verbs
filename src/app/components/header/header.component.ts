import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColumnProps } from '../table/table.component';

@Component({
  selector: '[app-header]',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent<T> {
  @Input() columns: ColumnProps<T>[] = [];
}
