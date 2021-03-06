'use strict'

const ensureCollection = require('../util/ensure_collection')

module.exports = async (db, { path }, doc) => {
  ensureCollection(db, path)

  return db.get(path).push(doc).write()
}
