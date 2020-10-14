import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Casa', description: 'Contas da Casa' } as Category,
      { id: 2, name: 'Saúde', description: 'Contas com Remédio e outros referente a Saúde' } as Category,
      { id: 3, name: 'Sálario', description: 'Crédido de Salário' } as Category,
      { id: 4, name: 'Lazer', description: 'Paceios, viagens e restaurantes' } as Category
    ];

    const entries: Entry[] = [
     { id: 1, name: "Gás", categoryId: categories[0].id, category: categories[0], paid: false, date: "10/10/2020", amount: "38,40", type: "expense", description: "Gás encanado" } as Entry,
     { id: 2, name: "Energia", categoryId: categories[0].id, category: categories[0], paid: true, date: "12/10/2020", amount: "250,29", type: "expense", description: "Energia do apartamento" } as Entry,
     { id: 3, name: "Internet", categoryId: categories[0].id, category: categories[0], paid: true, date: "15/10/2020", amount: "123,00", type: "expense", description: "Internete do apartamento" } as Entry,
     { id: 4, name: "Netflix", categoryId: categories[0].id, category: categories[0], paid: true, date: "09/10/2020", amount: "45,00", type: "expense", description: "Netflix" } as Entry,
     { id: 5, name: "Salário", categoryId: categories[2].id, category: categories[0], paid: true, date: "07/09/2020", amount: "50000,00", type: "revenue", description: "Salário" } as Entry,
     { id: 6, name: "Aluguel de apartamento", categoryId: categories[0].id, category: categories[0], paid: true, date: "10/09/2020", amount: "6000,00", type: "expense", description: "" } as Entry,
     { id: 7, name: "Uber", categoryId: categories[3].id, category: categories[0], paid: true, date: "10/09/2020", amount: "230,00", type: "expense", description: "Deslocamento" } as Entry,
     { id: 8, name: "Lazer", categoryId: categories[3].id, category: categories[0], paid: false, date: "30/10/2020", amount: "2532,00", type: "expense", description: "Viagem para Bahia" } as Entry
    ]
    return { categories, entries }
  }

}
