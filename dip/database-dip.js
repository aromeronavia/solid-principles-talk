//database.js

const UserStore = require('./user-store');
const User = require('./entities/user');

class Database {
  constructor(args) {
    this.userStore = new UserStore();
  }

  findUserById(id, callback) {
    this.userStore.findUserById(id, (error, user) => {
      callback(error, new User(user));
    });
  }

  findUserByUsername(id, callback) {
    this.userStore.findUserById(id, (error, user) => {
      callback(error, new User(user));
    });
  }

  saveUser(user, callback) {
    this.userStore.saveUser(user, callback);
  }
}

class UserStore {
  findUserById(id, callback) {
    const query = `SELECT * FROM USERS WHERE id = ${id}`;
    SQL.exec(query, callback);
  }

  ...
}
