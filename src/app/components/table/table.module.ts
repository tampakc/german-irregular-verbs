import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { DisplayCellComponent } from './cells/display-cell/display-cell.component';
import { TextInputCellComponent } from './cells/text-input-cell/text-input-cell.component';
import { DropdownCellComponent } from './cells/dropdown-cell/dropdown-cell.component';
import { CheckboxCellComponent } from './cells/checkbox-cell/checkbox-cell.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    RowComponent,
    DisplayCellComponent,
    TextInputCellComponent,
    DropdownCellComponent,
    CheckboxCellComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    TableComponent,
    HeaderComponent,
    RowComponent,
    DisplayCellComponent,
    TextInputCellComponent,
    DropdownCellComponent,
    CheckboxCellComponent,
  ]
})
export class TableModule {}
