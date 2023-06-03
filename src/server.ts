import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const port: number = 3000;

//connected database
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
    console.log("Connected The Database");
  } catch (err) {
    console.log("Database Error", err);
  }
}

main();
