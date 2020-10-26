import { AfterContentChecked, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.services';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: Boolean = false;
  isCreateResource: Boolean = false;
  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected toastr: ToastrService

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFuncao: (jsonData) => T
  ) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.formBuilder = injector.get(FormBuilder);
    this.toastr = injector.get(ToastrService);
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.loadResource();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;
    if (this.currentAction == "new") {
      this.resourceCategory();
    } else {
      this.updateResource();
    }
  }

  protected setPageTitle() {
    if (this.currentAction == "new") {
      this.pageTitle = "Cadastro de Nova Categoria";
    } else {
      const categoryName = this.category.name || "";
      this.pageTitle = "Editando Categoria: " + categoryName;
    }
  }

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new") {
      this.currentAction = "new";
    } else {
      this.currentAction = "edit";
    }
  }

  protected loadResource() {
    if (this.currentAction == "edit") {
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get("id")))
      )
        .subscribe(
          (resource) => {
            this.resource = resource
            this.resourceForm.patchValue(resource)
          },
          (error) => alert('Ocorreu umm erro interno, tente mais tarde.')
        )
    }
  }

  public createResource() {
    this.isCreateResource = true;
    const category: Category = Object.assign(new Category, this.categoryForm.value);

    this.categoryService.create(category)
      .subscribe(
        category => this.actionsForSuccess(category),
        error => this.actionsForError(error)
      )
  }

  public updateCategory() {
    this.isCreateCategoria = false;
    const category: Category = Object.assign(new Category, this.categoryForm.value);

    this.categoryService.update(category)
    .subscribe(
      category => this.actionsForSuccess(category),
      error => this.actionsForError(error)
    )
  }

  protected actionsForSuccess(category: Category): void {

    if(this.isCreateCategoria){
      this.toastr.success("Categoria cadastrada com sucesso!");
    } else {
      this.toastr.success("Categoria atualizada com sucesso!");
    }

    this.router.navigateByUrl("categories", {skipLocationChange: true}).then(
      () => this.router.navigate(["categories", category.id, "edit"])
    )
  }

  protected actionsForError(error: any): void {
    this.toastr.error("Ocorreu erro ao processar a sua solicitação!");

    this.submittingForm = false;

    if(error.status === 422){
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor tente mais tarde."]
    }

  }
}
