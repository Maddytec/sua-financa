import { Directive, Injector, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.services';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  toastr: ToastrService

  constructor(
    protected resourceService: BaseResourceService<T>,
    protected injector: Injector
    ) {
      this.toastr = injector.get(ToastrService);
    }

  ngOnInit(): void {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a,b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    )
  }

 delete(resource: T) {
    const mustDelete = confirm(this.questionDelete(resource));

    if (mustDelete) {
      this.resourceService.delete(resource).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert("Erro ao tentar excluir!")
      )
      this.toastr.info(this.confirmationDelete(resource))
    }
  }

  protected confirmationDelete(resource: T): string {
    return `Item ${resource.name} excluída com sucesso!`;
  }

  protected questionDelete(resource: T): string {
    return `Deseja realmente excuir o item: ${resource.name}?`;
  }

}
