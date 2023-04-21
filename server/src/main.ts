import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const start = async (): Promise<void> => {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    await app.listen(PORT, () => console.log(`Server started...\nPort [${PORT}]`))
}

start().catch(e => console.log(e));