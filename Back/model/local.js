import knex from '../config/database';

class Local {
  constructor({ name, files }) {
    this.name = name;
    this.files = files;
  }
  save() {
    return knex.insert(this).into('local');
  }
}

export default Local;
