import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./express.js";

mongoose.connect(config.mongoUri)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Erro ao conectar MongoDB", err));

app.listen(config.port, () => {
  console.log(`🚀 Servidor backend rodando na porta ${config.port}`);
});
