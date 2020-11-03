import { Component, Injector, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.componet';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector
    ) {
      super(categoryService, injector);
    }

    protected confirmationDelete(category: Category): string {
      return `A categoria ${category.name} foi excluída com sucesso!`;
    }

    protected questionDelete(category: Category): string {
      return `Deseja realmente excuir a categoria ${category.name}?`;
    }

}
