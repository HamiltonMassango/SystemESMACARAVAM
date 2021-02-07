import knex from '../config/database';

class Users {
  constructor({ name, bi, email, senha, endereco, numeroCartao, avatar }) {
    this.name = name;
    this.bi = bi;
    this.email = email;
    this.senha = senha;
    this.endereco = endereco;
    this.numeroCartao = numeroCartao;
    this.avatar = avatar;
  }
  save() {
    return knex.insert(this).into('users');
  }
  static index() {
    return knex.select().from('users');
  }
  static single(id) {
    return knex.select().from('users').whereRaw(`id = "${id}"`);
  }
}

export default Users;
