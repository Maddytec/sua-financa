import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(
    private entryService: EntryService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert('Erro ao carregar categorias')
    )
  }

  delete(entry) {
    const mustDelete = confirm(`Categoria ${entry.name}, deseja realmente excluir?`)

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(element => element != entry),
        () => alert("Erro ao excluir a categoria!")
      )
      this.toastr.info("Categoria excluida!")
    }
  }

}
