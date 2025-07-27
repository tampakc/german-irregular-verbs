import { Component, OnInit } from '@angular/core';
import { VerbService, Verb } from '../../services/verb.service';
import {
  ColumnProps
} from '../../components/table/table/table.component';
import { TableModule } from '../../components/table/table.module';

@Component({
  selector: 'app-study',
  imports: [TableModule],
  templateUrl: './study.component.html',
})
export class StudyComponent implements OnInit {
  verbs: Verb[] = [];

  public verbColumns: ColumnProps<Verb>[] = [
    {
      type: "display",
      key: 'infinitiv',
      header: 'Infinitiv (Präsens)',
      data: (verb: Verb) => `${verb.infinitiv} (${verb.praesens})`,
    },
    {
      type: "display",
      key: 'preateritum',
      header: 'Präteritum',
      data: (verb: Verb) => verb.praeteritum,
    },
    {
      type: "display",
      key: 'perfekt',
      header: 'Perfekt',
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
