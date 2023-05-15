import * as process from "process";
import * as cookieParser from "cookie-parser";

import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { INestApplication, Logger } from "@nestjs/common";

import { AppModule } from "./app.module";

const start = async (): Promise<void> => {
  const PORT: string | 5000 = process.env.PORT || 5000;
  const app: INestApplication = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(cookieParser());

  const config: Omit<OpenAPIObject, "paths"> = new DocumentBuilder()
    .setTitle("ДОКУМЕНТАЦІЯ ДО ПРОГРАМНОГО МОДУЛЯ СЕРВЕРНОЇ ЧАСТИНИ ПІДСИСТЕМИ ОБЛІКУ НАВЧАЛЬНОГО НАВАНТАЖЕННЯ НАУКОВО-ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ КАФЕДРИ ІНФОРМАЦІЙНОЇ СИСТЕМИ ОРГАНІЗАЦІЇ ОСВІТНЬОЇ ДІЯЛЬНОСТІ ВВНЗ НА ОСНОВІ ПЛАТФОРМИ NODE.JS.")
    .setDescription("Документація до серверної частини додатку на оснсові Node.js (Nest)")
    .setVersion("1.1.0.1")
    .addTag("Військовий інститут телекомунікацій та інформатизації імені Героїв Крут")
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, (): void => Logger.log(`Local port [${PORT}] Server started...`));
};

start().catch(e => console.log(e));