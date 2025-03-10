import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<string>();
  private searchTerm = new BehaviorSubject<string>(''); // ✅ Changed to BehaviorSubject

  searchTerm$ = this.searchTerm; // ✅ Now `searchTerm$` is a BehaviorSubject

  constructor() {
    this.searchSubject.pipe(debounceTime(800)).subscribe((term) => {
      this.searchTerm.next(term);
    });
  }

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }

  getSearchTerm(): string {
    return this.searchTerm.getValue(); // ✅ Now `getValue()` works!
  }
}
