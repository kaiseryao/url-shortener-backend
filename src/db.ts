import mongoose, { ConnectOptions } from "mongoose";
import config from "config";

async function db() {
    const dbUri = config.get("dbUri") as string;
    await mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } as ConnectOptions)
    .then((res) => {
      console.log(
        'Connected to API Database'
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
}

export default db;