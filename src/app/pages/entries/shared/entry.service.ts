import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/services/base-resource.services';
import { CategoryService } from '../../categories/shared/category.service';
import { Entry } from './entry.model';

const API_PATH: string = "api/entries";
@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(
    protected injector: Injector,
    private categoryService: CategoryService
  ) {
    super(API_PATH, injector, Entry.fromJson)
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  private setCategoryAndSendToServer(entry: Entry, sendFuncao: any): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return sendFuncao(entry);
      }),
      catchError(this.handleError)
    );
  }

}
