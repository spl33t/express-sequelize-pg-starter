import 'dotenv/config'
import * as express from "express"
import { sequelize } from "./core/database";
import { userRouter } from "./user/controller";
import { APP_PORT, API_PREFIX } from "./shared/constants";

const app = express()

app.use(express.json())

app.use(`/${API_PREFIX}/user`, userRouter)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true, alter: true })

    app.listen(APP_PORT, () => {
      console.log(`Example app listening on port ${APP_PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()