//database.js
const SQL = require('sqldriver');

class Database {
  findUserById(id, callback) {
    const query = `SELECT * FROM USERS WHERE id = ${id}`;
    SQL.exec(query, callback);
  }

  findUserByUsername(username, callback) {
    const query = `SELECT * FROM USERS WHERE username = ${username}`;
    SQL.exec(query, callback);
  }

  saveUser(user, callback) {
    const fields = Object.keys(user);
    const values = fields.map((field) => {
      return user[field];
    });

    const query = `INSERT INTO user (${Object.keys(user)}) values (${values.join(',')}`;
    SQL.exec(query, callback);
  }
}
