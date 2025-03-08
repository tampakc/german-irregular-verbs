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
}

@Injectable({
  providedIn: 'root',
})
export class VerbService {
  private csvUrl = 'assets/verbs.csv';
  private verbsCache$: Observable<Verb[]> | null = null;

  constructor(private http: HttpClient) {}

  getVerbs(): Observable<Verb[]> {
    if (!this.verbsCache$) {
      this.verbsCache$ = this.http
        .get(this.csvUrl, { responseType: 'text' })
        .pipe(
          map((csvData) => {
            const parsed = Papa.parse(csvData, { header: true });
            return parsed.data as Verb[];
          }),
          shareReplay(1), // Cache the result for future calls
        );
    }
    return this.verbsCache$;
  }
}
