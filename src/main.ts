import { AppModule } from './modules/app.module'
import { NestFactory } from '@nestjs/core'
import env from './config/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(env.PORT())
}

bootstrap()