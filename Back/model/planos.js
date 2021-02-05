import knex from '../config/database';

class Planos {
  constructor({ price, detalhes, tipo }) {
    this.price = price;
    this.detalhes = detalhes;
    this.tipe = tipo;
  }
  save() {
    return knex.insert(this).into('planos');
  }
  static index() {
    return knex.select().from('planos');
  }
  static single(id) {
    return knex.select().from('planos').whereRaw(`id = "${id}"`);
  }
}

export default Planos;
