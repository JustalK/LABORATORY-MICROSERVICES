const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

/**
 * Connect mongo-memory
 */
const connect = async () => {
  const mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()

  const mongooseOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }

  await mongoose.connect(uri, mongooseOpts)
  return uri
}

/**
 * Disconnect mongo-memory
 */
const disconnect = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

/**
 * Remove all the data in the db
 */
const clear = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}

module.exports = {
  connect,
  disconnect,
  clear
}
