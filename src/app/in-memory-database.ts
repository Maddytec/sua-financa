import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from 'rxjs';

export class InMemoryDatabase implements InMemoryDbService {

  createDb(){
    const categories = [
      { id: 1, name: 'Casa', description: 'Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Contas com Remédio e outros referente a Saúde' },
      { id: 3, name: 'Sálario', description: 'Crédido de Salário' }
    ];
    return { categories };
  }

}
