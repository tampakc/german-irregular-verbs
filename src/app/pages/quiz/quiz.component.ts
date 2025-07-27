import { Component, OnInit } from '@angular/core';
import { VerbService, Verb } from '../../services/verb.service';
import { ColumnProps } from '../../components/table/table/table.component';
import { TableModule } from '../../components/table/table.module';

@Component({
  selector: 'app-quiz',
  imports: [TableModule],
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  verbs: Verb[] = [];

  public verbColumns: ColumnProps<Verb>[] = [
    {
      type: 'display',
      key: 'infinitiv',
      header: 'Infinitiv',
      data: (verb: Verb) => verb.infinitiv,
    },
    // {
    //   type: "display",
    //   key: 'praesens',
    //   header: 'Praesens',
    //   data: (verb: Verb) => verb.praesens,
    // },
    {
      type: 'display',
      key: 'preateritum',
      header: 'Präteritum',
      data: (verb: Verb) => verb.praeteritum,
    },
    {
      type: 'input',
      key: 'perfekt',
      header: 'Perfekt',
      data: (verb: Verb) => verb.perfekt,
    },
  ];

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.verbService.getVerbs().subscribe((data) => {
      this.verbs = data;
    });
  }
}
