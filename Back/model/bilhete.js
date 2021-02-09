import knex from '../config/database';

class Bilhete {
  constructor(codigo, idUser, idPlano, idLocal) {
    this.codigo = codigo;
    this.idUser = idUser;
    this.idPlano = idPlano;
    this.idLocal = idLocal;
  }
  save() {
    return knex.insert(this).into('bilhete');
  }
  static index(id) {
    return knex
      .select([
        'bilhete.*',
        'users.name',
        'users.avatar',
        'planos.tipe',
        'local.name as localName',
      ])
      .table('bilhete')
      .innerJoin('users', 'users.id', 'bilhete.idUser')
      .innerJoin('planos', 'planos.id', 'bilhete.idPlano')
      .innerJoin('local', 'local.id', 'bilhete.idLocal')
      .where('bilhete.id', id);
  }
  static validar(cod) {
    return knex.select().from('bilhete').where('codigo', cod);
  }
}

export default Bilhete;
