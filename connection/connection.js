const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("node_testing", "root", "", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});

try{
    sequelize.authenticate();
    console.log('connection has been established successfully.');
}catch(error){
    console.error('unable to connect to the database:',error);
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({force:true});
// sequelize.sync({force:false});
module.exports = db;