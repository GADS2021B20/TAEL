import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Book} from "../books/book";
import {BooksService} from "../books/books.service";
import {Store} from "@ngrx/store";
import {EMPTY, Observable, of} from "rxjs";
import {getBook, selectBook, popular, loadLatest} from "../../state";
import {catchError, exhaustMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<Book[]>{

  constructor(private bs: BooksService, private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]>{

    return this.store.select(popular).pipe(take(1), exhaustMap((books: Book[]) => {
      if(books.length < 2 ){this.store.dispatch(loadLatest())} return of(books)

    }), catchError(() => EMPTY))
  }
}