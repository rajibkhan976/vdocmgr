import Dexie, { Table } from 'dexie';
import { indexedDB, IDBKeyRange } from "fake-indexeddb";
import { User } from './models/UserInterface';

export class UserDB extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<User>; 

  constructor() {
    super('UserDB', { indexedDB: indexedDB, IDBKeyRange: IDBKeyRange });
    this.version(1).stores({
      users: '++id, username, email' // Primary key and indexed props
    });
  }
}

export const db = new UserDB();