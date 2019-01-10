'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

//For insertion a foreignKey On Table. Before, i should to do create the Two models concerne
class UserProfilFkSchema extends Schema {
  up () {
    //first params is the table contain th foreignKey
    this.table('users', (table) => {
      // alter table
      table.foreign('image').references('id').inTable('profils').onDelete('cascade').onUpdate('cascade');
    })
  }

  down () {
    //from delete the foreign key i should to do one dropForeign and DropColumn
    this.table('users', (table) => {
      // reverse alternations
      table.dropForeign('image')
      table.dropColumn('image')

    })
  }
}

module.exports = UserProfilFkSchema
