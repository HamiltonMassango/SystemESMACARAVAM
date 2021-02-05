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
}

export default Planos;
