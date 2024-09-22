const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://Tester1:<Test1>@cluster0.ljd5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}