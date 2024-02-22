module.exports = {
  HOST: "",
  PORT: "3306",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
