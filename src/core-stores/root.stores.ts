import {BaseStore} from '@src/modules/stores';

export class Stores extends BaseStore {
  baseStore!: BaseStore;

  constructor() {
    super();
    this.baseStore = new BaseStore();
  }
}

export const stores = new Stores();
