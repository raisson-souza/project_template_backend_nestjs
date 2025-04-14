import { AppModule } from './modules/app.module'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe  } from '@nestjs/common'
import { ValidationPipeExceptionFactory } from './validators/base'
import env from './config/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: (errors) => ValidationPipeExceptionFactory(errors),
  }))
  app.setGlobalPrefix("/api")
  await app.listen(env.PORT())
}

bootstrap()