const mongoose = require('mongoose');

// Com a importação do modulo externo do mongoose, podemos chamar a partir da variável mongoose, o método connect() que recebe como parametro a string de conexão do banco, neste caso o mongo atlas.
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.zoolrfw.mongodb.net/node_mongo');

mongoose.connect('mongodb://localhost:27017/mongodb')
// A variável db recebe a conexão do banco e vamos exportá-la 
let db = mongoose.connection;

// exporta a conexão com o mongo (atlas ou local, dependendo da string de conexão)
module.exports = db;