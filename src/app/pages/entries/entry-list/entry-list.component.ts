import { Component, Injector } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.componet';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

  constructor(
    protected entryService: EntryService,
    protected injector: Injector
    ) {
      super(entryService, injector);
    }

  protected confirmationDelete(entry: Entry): string {
    return `O lançamento ${entry.name} foi excluído com sucesso!`;
  }

  protected questionDelete(entry: Entry): string {
    return `Deseja realmente excuir o lancamento ${entry.name}?`;
  }

}
