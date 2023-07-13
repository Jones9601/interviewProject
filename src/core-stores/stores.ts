import {action, computed, makeObservable, observable} from 'mobx';

export class Store {
  isLoading: boolean;

  constructor() {
    this.isLoading = false;

    makeObservable<Store, any>(this, {
      // observable
      isLoading: observable,
      // computed
      loading: computed,
      // action
      setLoading: action,
    });
  }

  get loading(): boolean {
    return this.isLoading;
  }

  setLoading(flag: boolean): void {
    this.isLoading = flag;
  }
}
