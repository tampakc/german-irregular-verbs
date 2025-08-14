import { Component, OnInit } from '@angular/core';
import { VerbService, Verb } from '../../services/verb.service';
import { ColumnProps } from '../../components/table/table/table.component';
import { TableModule } from '../../components/table/table.module';

@Component({
  selector: 'app-study',
  imports: [TableModule],
  templateUrl: './study.component.html',
})
export class StudyComponent implements OnInit {
  private allVerbs: Verb[] = [];

  public verbs: Verb[] = [];
  public focusMode: boolean = false;

  public verbColumns: ColumnProps<Verb>[] = [
    {
      type: 'display',
      key: 'infinitiv',
      header: 'Infinitiv (Präsens)',
      spoilerDefault: false,
      spoilerToggle: true,
      data: (verb: Verb) => `${verb.infinitiv} (${verb.praesens})`,
    },
    {
      type: 'display',
      key: 'preateritum',
      header: 'Präteritum',
      spoilerDefault: false,
      spoilerToggle: true,
      data: (verb: Verb) => verb.praeteritum,
    },
    {
      type: 'display',
      key: 'perfekt',
      header: 'Perfekt',
      spoilerDefault: false,
      spoilerToggle: true,
      data: (verb: Verb) => `${verb.auxiliaryVerb} ${verb.perfekt}`,
    },
    {
      type: 'checkbox',
      key: 'attention',
      header: 'Attention',
      data: (verb: Verb) => verb.attention,
      onChange: (verb: Verb, value: boolean) => {
        this.verbService.setAttention(verb.infinitiv, value);
        this.renewAttention();
      },
    },
  ];

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.verbService.getVerbs().subscribe((data) => {
      this.allVerbs = data;
      this.verbs = this.focusMode
        ? this.allVerbs.filter((verb) => verb.attention)
        : this.allVerbs;
    });
  }

  public toggleFocusMode() {
    this.focusMode = !this.focusMode;
    this.renewAttention();
  }

  private renewAttention() {
    const attentionVerbs = this.verbService.getAttentionVerbs();
    this.allVerbs.forEach(
      (verb) => (verb.attention = attentionVerbs.has(verb.infinitiv)),
    );
    this.verbs = this.focusMode
      ? this.allVerbs.filter((verb) => verb.attention)
      : this.allVerbs;
  }
}
