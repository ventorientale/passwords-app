export interface DataBase {
  get(key: string): any;

  set(key: string, data: any): void;

  find(query: string): Array<any>;

  getAll(): Array<any>;
}
