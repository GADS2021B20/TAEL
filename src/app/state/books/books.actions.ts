import {createAction, props} from "@ngrx/store";
import {Update} from "@ngrx/entity";

import {Book} from "../../services/books/book";


export const loadLatest = createAction('Load Books')
export const getBooks = createAction('Get Books', props<{branch:string}>())
export const updateBook = createAction('Update Book', props<{update: Update<Book>}>())
export const getBook = createAction('Get Book', props<{ id: string }>())
export const rateBook = createAction('Rate Book', props<{id: string, rating:number}>())
export const searchBook = createAction('Search', props<{query: string}>())
export const addBooks = createAction('Add Books', props<{books: Book[]}>())
export const setBook = createAction('Set Book', props<{book: Book}>())
export const setBooks =  createAction('Set Books', props<{books: Book[]}>())
export const clearBooks =  createAction('Clear Books', props<{books: Book[]}>())
export const postReview = createAction('Post Review', props<{name: string, email:string, book: string, review:string, id:string}>())
export const updateDownloads = createAction('UpdateDownloads', props<{id: string}>())

