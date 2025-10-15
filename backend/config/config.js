export default {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/mern_next",
  jwtSecret: process.env.JWT_SECRET || "my_secret_key"
}
