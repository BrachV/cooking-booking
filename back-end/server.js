require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require('cors');
const ateliersRoutes = require('./routes/ateliers');
const themesRoutes = require('./routes/themes');
const wishesRoutes = require('./routes/wishes');
const participationsRoutes = require('./routes/participations');

const app = express();

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: '*'
}));

app.use(express.static('public'));

// Routes setup
app.use('/api/ateliers', ateliersRoutes);
app.use('/api/themes', themesRoutes);
app.use('/api/wishes', wishesRoutes);
app.use('/api/participations', participationsRoutes);

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort("3080");
app.set("port", port);

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);


server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
