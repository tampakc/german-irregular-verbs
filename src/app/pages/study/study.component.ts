import { Component, OnInit } from '@angular/core';
import { VerbService, Verb } from '../../services/verb.service';
import {
  ColumnProps,
  TableComponent,
} from '../../components/table/table.component';

@Component({
  selector: 'app-study',
  imports: [TableComponent],
  templateUrl: './study.component.html',
})
export class StudyComponent implements OnInit {
  verbs: Verb[] = [];

  public verbColumns: ColumnProps<Verb>[] = [
    {
      columnName: 'infinitiv',
      header: 'Infinitiv (Präsens)',
      sortable: true,
      data: (verb: Verb) => `${verb.infinitiv} (${verb.praesens})`,
    },
    {
      columnName: 'preateritum',
      header: 'Präteritum',
      sortable: true,
      data: (verb: Verb) => verb.praeteritum,
    },
    {
      columnName: 'perfekt',
      header: 'Perfekt',
      sortable: true,
      data: (verb: Verb) => `${verb.auxiliaryVerb} ${verb.perfekt}`,
    },
  ];

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.verbService.getVerbs().subscribe((data) => {
      this.verbs = data;
    });
  }
}
