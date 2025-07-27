import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as Papa from 'papaparse';

export interface Verb {
  infinitiv: string;
  praesens: string;
  praeteritum: string;
  auxiliaryVerb: string;
  perfekt: string;
  level: string;
  attention: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class VerbService {
  private csvUrl = 'assets/verbs.csv';
  private attentionLocalStorageKey = 'attentionVerbs';

  private verbsCache$: Observable<Verb[]> | null = null;

  constructor(private http: HttpClient) {}

  public getVerbs(): Observable<Verb[]> {
    const attentionVerbs = this.getAttentionVerbs();

    if (!this.verbsCache$) {
      this.verbsCache$ = this.http
        .get(this.csvUrl, { responseType: 'text' })
        .pipe(
          map((csvData) => {
            const parsed = Papa.parse(csvData, { header: true });
            const verbs = parsed.data as Verb[];
            verbs.map(
              (verb) => (verb.attention = attentionVerbs.has(verb.infinitiv)),
            );

            return verbs;
          }),
          shareReplay(1), // Cache the result for future calls
        );
    }

    return this.verbsCache$;
  }

  public setAttention(infinitiv: string, attention: boolean): void {
    const attentionVerbsRaw = localStorage.getItem(
      this.attentionLocalStorageKey,
    );
    const attentionVerbs = new Set(attentionVerbsRaw?.split(';'));
    if (attention) {
      attentionVerbs.add(infinitiv);
    } else {
      attentionVerbs.delete(infinitiv);
    }
    localStorage.setItem(
      this.attentionLocalStorageKey,
      Array.from(attentionVerbs.values()).join(';'),
    );
  }

  public getAttentionVerbs(): Set<string> {
    const attentionVerbsRaw =
      localStorage.getItem(this.attentionLocalStorageKey) || '';
    return new Set(attentionVerbsRaw.split(';'));
  }
}
