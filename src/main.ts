import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try {
    const PORT = process.env.PORT || 3333;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('NestJs TEST')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodJS, NestJS, Postgres, Sequelize')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => {
      console.log(`Server ${PORT}  portida ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
