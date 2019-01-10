'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSchema extends Schema {
  up () {
    this.create('profils', (table) => {
      table.increments()
      table.string('path', 254).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('profils')
  }
}

module.exports = ProfilSchema
