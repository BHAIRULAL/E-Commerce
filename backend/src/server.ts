import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  await mongoose.connect(config.db_url as string);
  app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
  });
}

main()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log("Database connection failed");
    console.log("Error", err);
  });
