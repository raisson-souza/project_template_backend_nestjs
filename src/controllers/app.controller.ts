import { AppService } from 'src/services/app.service'
import { Controller, Get } from '@nestjs/common'

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
