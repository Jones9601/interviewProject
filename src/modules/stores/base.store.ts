import {action, computed, makeObservable, observable} from 'mobx';

export class BaseStore {
  isLoading: boolean;
  loaderTitle: string;

  constructor() {
    this.isLoading = false;
    this.loaderTitle = 'Loading...';

    makeObservable<BaseStore, any>(this, {
      // observable
      isLoading: observable,
      loaderTitle: observable,

      // computed
      loading: computed,
      getLoaderTitle: computed,

      // action
      setLoading: action,
      setLoaderTitle: action,
    });
  }

  get loading(): boolean {
    return this.isLoading;
  }

  setLoading(flag: boolean): void {
    this.isLoading = flag;
  }

  get getLoaderTitle(): string {
    return this.loaderTitle;
  }

  setLoaderTitle(title: string): void {
    this.loaderTitle = title;
  }
}
