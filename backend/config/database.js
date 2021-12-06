const mongoose = require("mongoose");
remoteUser = 'wilmar'
remotePass = 'agrodev'
remoteHost = 'cluster0.ol7j8.mongodb.net'
remoteDb = 'agrodev'

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection Error"))
}
