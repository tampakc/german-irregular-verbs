import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-cell]',
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
})
export class CellComponent {
  @Input() cellData: string = '';
}
