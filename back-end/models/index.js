const {Sequelize, DataTypes} = require("sequelize");
const dbConfig = require("../config/config");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log("DB error : "+err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Wishes = require('./wishes.js')(sequelize, DataTypes);
db.Ateliers = require('./ateliers.js')(sequelize, DataTypes);
db.Themes = require('./themes.js')(sequelize, DataTypes);
db.Participations = require('./participations.js')(sequelize, DataTypes);

db.Wishes.associate(db)
db.Ateliers.associate(db)
db.Participations.associate(db)

db.sequelize.sync({force: false})
    .then(() => {
        console.log('Sync done !')
    })

module.exports = db;